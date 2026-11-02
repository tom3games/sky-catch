// 空中キャッチの中身（落ちてくる人・受けとめ・救護マット・点数）。three.js に依存しない。画面と bot で同じものが動く
// 固定ステップで stepCatch を呼ぶ。runner の動きに触るのは「手を伸ばす」引き寄せだけ

export const CATCH = {
  roundSec: 90,           // 1回の長さ
  warn: 4.5,              // 屋上のふちでぐらつく時間（この間に向かう）
  gap: [7.5, 5.2],        // 次の人が出るまでの秒数（はじめ → 終わりにかけて短く）
  firstAt: 2.5,
  fallG: 5,             // 落ちる加速（人より遅い。手足をばたつかせて空気を受けている設定）
  fallMax: 6.5,           // 落ちる速さの上限
  catchR: 3.4,            // 横の距離
  catchV: 4.5,            // 縦の差
  assistR: 10, assistA: 16,   // 空中でこの距離に入ると、落ちてくる人へ少し引き寄せられる（手を伸ばす）
           // この距離まで近づけば受けとめる（胸の高さどうし）
  catchAir: 1.9,          // 足元の地面からこれ以上高い所にいないと受けとめられない（地面で待ち構えるのは無し）
  carryMax: 3,            // 一度に抱えられる人数
  matR: 4.6,              // 救護マットのこの範囲に着地すれば引き渡し
  ptsSave: 100, ptsChain: 50, ptsSwing: 50,   // 1人ごと / 連続の上乗せ（1つ増えるごと）/ ワイヤー中に受けとめた
  chainMax: 6,
  nearMin: 25, nearMax: 75,                  // 次の人は、自分から この範囲の建物に出る
  hMin: 16, hMax: 44      // 落ちる人がいるベランダ・窓の高さ
}

// 落ちる理由（毎回ちがう一言）。全部うっかり。誰もけがをしない
export const REASONS = [
  ['布団をたたいてたら布団ごと', 'Beat the futon, went with it'],
  ['屋上で自撮りしてたら一歩下がりすぎた', 'Took one step back for a selfie'],
  ['鳩にパンをあげてたら押された', 'Shoved by pigeons I was feeding'],
  ['飛んだ洗濯物をつかもうとして', 'Reached for the laundry'],
  ['看板の電球を替えてたら', 'Changing a sign bulb'],
  ['ドローンをキャッチしようとして', 'Tried to catch a drone'],
  ['強い風で傘ごと持っていかれた', 'The wind took me and my umbrella'],
  ['屋上で昼寝して寝返りを打った', 'Rolled over during a rooftop nap'],
  ['ゴルフの素振りで勢いがつきすぎた', 'Golf swing, too much follow-through'],
  ['猫を追いかけてたら猫だけ止まった', 'Chased a cat. The cat stopped'],
  ['ラジオ体操で跳びすぎた', 'Jumped too hard at morning exercise'],
  ['アンテナの向きを直してたら', 'Adjusting the antenna'],
  ['プランターの水やりで身を乗り出した', 'Leaned out to water the plants'],
  ['屋上ビアガーデンで乾杯しすぎた', 'Too many toasts at the rooftop bar'],
  ['ハンモックのひもがほどけた', 'The hammock knot came loose'],
  ['エアコンの室外機に話しかけてた', 'Was chatting with the AC unit']
]
// 受けとめた時・落ちた時の一言
export const LINES = {
  thanks: [['助かった…', 'Saved…'], ['惚れてまうやろ', 'I might fall for you'], ['生きてる！', 'I am alive!'], ['ナイスキャッチ', 'Nice catch'], ['お礼に今度おごるわ', 'Drinks are on me'], ['もう屋上行かへん', 'Never going on a roof again']],
  oops: [['痛ったぁ…自分で病院行くわ', 'Ouch… I will walk to the clinic'], ['植え込みがなかったら終わってた', 'Thank goodness for the hedge'], ['段ボールの山でよかった', 'Lucky there were boxes'], ['誰も受けとめてくれへんやん', 'Nobody caught me?']]
}

export function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296 } }

// 救護マット: 交差点の真ん中（道の上だけ）
const K = 130 / 80
const XS = [-320, -240, -160, -80, 0, 80, 160, 240, 320].map(x => x * K)
const ZS = [40, 120, 200, 280, 360, 440, 520, 600, 680, 760, 840].map(z => 40 + (z - 40) * K)
export function makeMats(world) {
  const cand = [[0, 6], [1, 7], [-1, 5], [2, 6], [0, 8], [-2, 7], [1, 4], [3, 8], [-1, 9], [2, 4]]
  const out = []
  for (const [i, j] of cand) {
    const x = XS[4 + i], z = ZS[j]
    if (x == null || z == null || world.surfaceAt(x, z) !== 'road') continue
    out.push({ x, y: world.groundAt(x, z).h, z })
  }
  return out
}

// 次の人を置く建物を探す。自分から nearMin〜nearMax、道に面したふち
function pickSpot(world, r, rnd, others) {
  const blds = world._catchBlds || (world._catchBlds = world.colliders.filter(o => o.kind === 'building' && o.y1 >= CATCH.hMin + 4))
  for (let g = 0; g < 400; g++) {
    const o = blds[Math.floor(rnd() * blds.length)]
    if (o.yaw) continue
    const side = Math.floor(rnd() * 4)
    const nx = [1, -1, 0, 0][side], nz = [0, 0, 1, -1][side]
    const along = (rnd() * 2 - 1) * 0.6
    const ex = o.cx + (nx ? nx * o.hw : along * o.hw), ez = o.cz + (nz ? nz * o.hl : along * o.hl)
    const d = Math.hypot(ex - r.x, ez - r.z)
    if (d < CATCH.nearMin || d > CATCH.nearMax) continue
    // 前が道（落ちる先が開けている）
    if (world.surfaceAt(ex + nx * 7, ez + nz * 7) !== 'road' || world.surfaceAt(ex + nx * 12, ez + nz * 12) !== 'road') continue
    if (world.colliders.some(b => b !== o && b.kind === 'building' && Math.abs(ex + nx * 6 - b.cx) < b.hw + 1 && Math.abs(ez + nz * 6 - b.cz) < b.hl + 1)) continue
    if (others.some(f => Math.hypot(f.x - ex, f.z - ez) < 30)) continue
    const h = Math.min(o.y1 - 2, CATCH.hMin + rnd() * (CATCH.hMax - CATCH.hMin))
    return { ex, ez, nx, nz, top: h, roof: o.y1, bld: o }
  }
  return null
}

export function createRound(world, seed = 1) {
  return {
    t: 0, over: false, seed, rnd: mulberry(seed), next: CATCH.firstAt, n: 0,
    fallers: [], carry: [], saved: 0, missed: 0, chain: 0, bestChain: 0, score: 0, swingCatches: 0,
    mats: makeMats(world), log: [], events: [], fullT: 0
  }
}

// 落ちてくる人: state = warn（ベランダのふちでぐらつく）→ fall（落ちている）→ carried（抱えられている）/ landed（地面に落ちた）/ saved
function spawn(rd, world, r) {
  const sp = pickSpot(world, r, rd.rnd, rd.fallers.filter(f => f.state === 'warn' || f.state === 'fall'))
  if (!sp) return false
  const reason = Math.floor(rd.rnd() * REASONS.length)
  const f = {
    id: rd.n++, state: 'warn', t: 0, look: rd.n % 6, reason,
    x: sp.ex + sp.nx * 0.5, z: sp.ez + sp.nz * 0.5, y: sp.top,      // 待っている間はベランダ（壁から出た小さな床）に立つ
    fx: sp.ex + sp.nx * 1.3, fz: sp.ez + sp.nz * 1.3, top: sp.top, roof: sp.roof,  // 落ちる位置は壁の外 1.3m
    nx: sp.nx, nz: sp.nz, vy: 0, ground: world.groundAt(sp.ex + sp.nx * 1.3, sp.ez + sp.nz * 1.3).h
  }
  rd.fallers.push(f)
  rd.events.push({ t: 'spawn', id: f.id, reason, x: f.x, y: f.y, z: f.z })
  return true
}

const chest = r => r.y + 1.2

// 1ステップ
export function stepCatch(rd, r, dt, world) {
  if (rd.over) return
  rd.t += dt
  if (rd.t >= CATCH.roundSec) { rd.over = true; rd.events.push({ t: 'timeUp' }); return }
  // 次の人
  if (rd.t >= rd.next) {
    const k = Math.min(1, rd.t / CATCH.roundSec)
    if (spawn(rd, world, r) || rd.t > rd.next + 2) rd.next = rd.t + CATCH.gap[0] + (CATCH.gap[1] - CATCH.gap[0]) * k
  }
  const air = !r.grounded && (r.y - (r.groundY || 0)) > CATCH.catchAir
  for (const f of rd.fallers) {
    f.t += dt
    if (f.state === 'warn') {
      if (f.t >= CATCH.warn) { f.state = 'fall'; f.t = 0; f.x = f.fx; f.z = f.fz; f.vy = 1.5; rd.events.push({ t: 'fall', id: f.id, x: f.x, y: f.y, z: f.z }) }
    } else if (f.state === 'fall') {
      f.vy = Math.max(-CATCH.fallMax, f.vy - CATCH.fallG * dt)
      f.y += f.vy * dt
      const dh = Math.hypot(f.x - r.x, f.z - r.z), dv = f.y + 0.8 - chest(r)
      // 手を伸ばす: 空中で近くにいれば、少しだけ人の方へ寄る（ぴったり合わせなくても受けとめられる）
      if (air && !r.climbing && rd.carry.length < CATCH.carryMax && dh < CATCH.assistR && Math.abs(dv) < CATCH.assistR) {
        const L = Math.hypot(f.x - r.x, dv, f.z - r.z) || 1, a = CATCH.assistA * dt
        r.vx += (f.x - r.x) / L * a; r.vz += (f.z - r.z) / L * a; r.vy += dv / L * a * 0.6
      }
      if (dh < CATCH.catchR && Math.abs(dv) < CATCH.catchV && air) {
        if (rd.carry.length >= CATCH.carryMax) { if (rd.fullT <= 0) { rd.fullT = 1.5; rd.events.push({ t: 'full' }) } }
        else {
          f.state = 'carried'; f.slot = rd.carry.length; rd.carry.push(f); rd.caught = (rd.caught || 0) + 1
          const swing = !!r.rope
          if (swing) rd.swingCatches++
          f.swing = swing; f.catchY = Math.round(f.y - f.ground)
          rd.events.push({ t: 'catch', id: f.id, swing, h: f.catchY, n: rd.carry.length, x: f.x, y: f.y, z: f.z })
          continue
        }
      }
      if (f.y <= f.ground) {
        f.y = f.ground; f.state = 'landed'; f.t = 0
        rd.missed++; rd.chain = 0
        rd.log.push({ id: f.id, reason: f.reason, ok: false })
        rd.events.push({ t: 'miss', id: f.id, x: f.x, y: f.y, z: f.z })
      }
    }
  }
  rd.fullT -= dt
  // 抱えている人を救護マットに引き渡す（マットの上に着地する）
  if (rd.carry.length && r.grounded) {
    const m = rd.mats.find(m => Math.hypot(m.x - r.x, m.z - r.z) < CATCH.matR)
    if (m) {
      let pts = 0
      for (const f of rd.carry) {
        rd.chain++; rd.bestChain = Math.max(rd.bestChain, rd.chain); rd.saved++
        const p = CATCH.ptsSave + CATCH.ptsChain * (Math.min(rd.chain, CATCH.chainMax) - 1) + (f.swing ? CATCH.ptsSwing : 0)
        pts += p; f.state = 'saved'; f.t = 0; f.x = m.x + (f.slot - 1) * 1.1; f.z = m.z + 1.2; f.y = m.y
        rd.log.push({ id: f.id, reason: f.reason, ok: true, swing: f.swing, h: f.catchY, pts: p })
      }
      rd.score += pts
      rd.events.push({ t: 'save', n: rd.carry.length, pts, chain: rd.chain, mat: m })
      rd.carry = []
    }
  }
  // 片付け: 落ちた人・引き渡した人は少ししたら消す
  rd.fallers = rd.fallers.filter(f => !((f.state === 'landed' || f.state === 'saved') && f.t > 6))
}

export const active = rd => rd.fallers.filter(f => f.state === 'warn' || f.state === 'fall')
// 今いちばん急ぐ人（落ちるまで・着くまでが短い順）
export function urgent(rd) {
  const a = active(rd)
  if (!a.length) return null
  const eta = f => f.state === 'warn' ? (CATCH.warn - f.t) + fallTime(f.top - f.ground) : fallTime(f.y - f.ground, f.vy)
  return a.sort((p, q) => eta(p) - eta(q))[0]
}
// 高さ h を落ちきるまでの秒数（今の速さ vy から）
export function fallTime(h, vy = 1.5) {
  let t = 0, y = h, v = vy
  while (y > 0 && t < 30) { v = Math.max(-CATCH.fallMax, v - CATCH.fallG / 30); y += v / 30; t += 1 / 30 }
  return t
}
export function nearestMat(rd, x, z) { let best = null, bd = 1e9; for (const m of rd.mats) { const d = Math.hypot(m.x - x, m.z - z); if (d < bd) { bd = d; best = m } } return best }
export function rankOf(score) { return score >= 1400 ? 3 : score >= 800 ? 2 : score >= 300 ? 1 : 0 }
