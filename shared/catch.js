// 空中キャッチの中身（落ちてくる人・受けとめ・救護マット・点数）。three.js に依存しない。画面と bot で同じものが動く
// 固定ステップで stepCatch を呼ぶ。runner の動きに触るのは「手を伸ばす」引き寄せだけ

export const CATCH = {
  roundSec: 90,           // 1回の長さ
  warn: 5.5,              // 屋上のふちでぐらつく時間（この間に向かう）
  // 2026-11-02 本人「難しすぎる。みんな連続で落ちていくから間に合わへん」→ 落ちてくるのは一度に1人。前の人が片付いて（受けとめた・落ちた）から gap 秒あけて次
  gap: [2.6, 1.8],        // 前の人が片付いてから次の人が出るまでの秒数（はじめから終わりにかけて短く）。2026-11-03 本人「ちょっと簡単になりすぎ」で 3 と 2.2 から 2.6 と 1.8 に
  firstAt: 2.5,
  maxActive: 1,           // 同時にぐらつく・落ちている人の上限（前半）
  pairAfter: 40, pairOdds: 0.35,   // 後半（40秒から）はときどき2人（近くの建物に）
  fallGap: 3.5,           // 前の人が落ち始めてから次の人が落ち始めるまでの最低の秒（ぐらつきは重なってよい。落下は重ねない）
  nearPair: [6, 20],      // 2人目を出す距離（1人目の落ちる位置から m）
  fallG: 5,             // 落ちる加速（人より遅い。手足をばたつかせて空気を受けている設定）
  fallMax: 6.5,           // 落ちる速さの上限
  catchR: 4,              // 横の距離（3.4、4.6 を経て 4。2026-11-03 少し難しく戻す）
  catchV: 5.4,            // 縦の差（4.5、6 を経て 5.4）
  assistR: 14, assistA: 22,   // 空中でこの距離に入ると、落ちてくる人へ少し引き寄せられる（手を伸ばす）
           // この距離まで近づけば受けとめる（胸の高さどうし）
  catchAir: 1.9,          // 足元の地面からこれ以上高い所＝空中の受けとめ。2026-11-03 本人「地面でキャッチできない」で地面でも受けとめられるようにした（点は少なめ・連続にならない）
  carryMax: 3,            // 一度に抱えられる人数
  matR: 4.6,              // 救護マットのこの範囲に着地すれば引き渡し
  ptsSave: 100, ptsChain: 50, ptsSwing: 50,   // 1人ごと / 連続の上乗せ（1つ増えるごと）/ ワイヤー中に受けとめた
  ptsGround: 60,          // 地面で受けとめた人（連続の上乗せ・ワイヤーの上乗せ無し。連続は切れない）
  chainMax: 6,
  nearMin: 25, nearMax: 80,                  // 次の人は、自分から この範囲の建物に出る（近くに高い建物が無ければ範囲を広げる）
  hMin: 30, hMax: 62      // 落ちる人がいるベランダ・窓の高さ（16〜44 → 30〜62。2026-11-02 本人「もうちょっと高い場所から落ちてくれへんと余裕がない」）
}

// エンドレス（2026-11-03 本人「誰かを落としてしまうまでエンドレスでできるモード」）: 1人でも地面に落ちたら終わり。時間とともに間隔が詰まり、同時に落ちる人数が増える
export const ENDLESS = {
  gap: [2.6, 0.9], gapK: 0.016,      // 片付いてから次まで: 2.6秒から 1秒に 0.016 秒ずつ詰まる（最短 0.9）
  active: [[0, 1], [30, 2], [75, 3], [140, 4]],   // [秒, 同時の上限]。最初の30秒は1人ずつ
  warn: [7.5, 4.5], warnK: 0.015,    // ぐらつく時間: 最初は 7.5秒（余裕）から少しずつ短く
  near: [45, 0.3],                   // 次の人が出る距離の上限: 最初は 45m 以内、1秒ごとに 0.3m 広がる（80m まで）
  fallGap: [3.5, 2], fallGapK: 0.01,   // 落ち始めの最低間隔: 3.5秒から少しずつ詰めて最短2秒
  easyUntil: 30                      // 最初の30秒は落ち方の速い種類（猫・ふくよかな人）を出さない
}

// 落ちてくる人の種類（2026-11-03 本人「もっと色んな人が。猫とか妖怪とか、結構太ってる人（キャッチすると動きが鈍る）とか」）
// fallG/fallMax: 落ち方。catchK: 受けとめ範囲の倍率。pts: 点（空中・連続の上乗せは別）。load: 抱えている間の重さ（動きが鈍る割合）
// sway: 左右に揺れる幅（m）。hop: 傘でふわっと浮く間隔（秒）。w: 出やすさ
export const KINDS = {
  normal: { w: 38, fallG: 5, fallMax: 6.5, catchK: 1, pts: 100, load: 0, ja: '住人', en: 'Resident' },
  cat: { w: 10, fallG: 6.5, fallMax: 8, catchK: 0.68, pts: 130, load: 0, spin: true, ja: '猫', en: 'Cat' },
  heavy: { w: 9, fallG: 6, fallMax: 7.6, catchK: 1.2, pts: 170, load: 0.32, ja: 'ふくよかな人', en: 'Big guy' },
  salary: { w: 8, fallG: 3.5, fallMax: 4.4, catchK: 0.9, pts: 90, load: 0, umbrella: true, ja: '傘のサラリーマン', en: 'Umbrella salaryman' },
  selfie: { w: 8, fallG: 5, fallMax: 6.5, catchK: 1, pts: 110, load: 0, ja: '自撮りの人', en: 'Selfie taker' },
  ittan: { w: 6, fallG: 2, fallMax: 3.6, catchK: 0.9, pts: 140, load: 0, sway: 3.2, ja: '一反木綿', en: 'Ittan-momen' },
  kappa: { w: 6, fallG: 5, fallMax: 6.5, catchK: 1, pts: 140, load: 0.08, ja: '河童', en: 'Kappa' },
  karakasa: { w: 6, fallG: 4, fallMax: 5.2, catchK: 0.9, pts: 140, load: 0, hop: 1.5, ja: 'から傘おばけ', en: 'Umbrella spirit' },
  thrill: { w: 3, fallG: 5.5, fallMax: 7, catchK: 1, pts: 60, load: 0, ja: '落ちるのが好きな人', en: 'Thrill seeker' }
}
export const KIND_KEYS = Object.keys(KINDS)
// 種類ごとの落ちる理由・受けとめた時・落とした時・落ちる時の一言（[日本語, English]）
export const KIND_LINES = {
  cat: { why: [['鳩を追いかけて', 'Chased a pigeon'], ['ベランダの手すりで昼寝してた', 'Napping on the railing'], ['蝶々に手を出した', 'Swatted at a butterfly']], thanks: [['ニャッ（飼い主のおばあちゃんが泣いて喜んでる）', 'Mrrp. (Grandma is crying with joy)'], ['ニャー（ひっかかれた）', 'Mew. (You got scratched)']], oops: [['ニャッ（くるっと回って着地した）', 'Mrrp. (Landed on its feet)'], ['（何事もなかった顔で毛づくろい）', '(Grooming like nothing happened)']], fall: [['ニャーッ', 'Nyaaa!'], ['フシャー', 'Hsss!']] },
  heavy: { why: [['手すりにもたれたら手すりが負けた', 'The railing lost'], ['ベランダでスクワット', 'Squats on the balcony'], ['布団を干そうとして布団ごと', 'Went with the futon']], thanks: [['すまんのう、重いやろ', 'Sorry, I know I am heavy'], ['ダイエットは明日からや', 'Diet starts tomorrow']], oops: [['地面がへこんだだけや、平気平気', 'Just dented the ground. I am fine'], ['おなかで弾んだ', 'Bounced off my belly']], fall: [['うおおお', 'Whoooa'], ['腹から落ちる！', 'Belly first!']] },
  salary: { why: [['傘を開いたら風につかまった', 'Opened my umbrella, the wind took it'], ['取引先に電話しながら', 'On a call with a client']], thanks: [['恐縮です。名刺をどうぞ', 'Much obliged. My card'], ['定時に間に合います', 'I will make it home on time']], oops: [['傘のおかげでふんわり着地', 'The umbrella saved me'], ['（スーツの汚れを払っている）', '(Dusting off the suit)']], fall: [['お先に失礼します', 'Excuse me, going down'], ['ふわ〜', 'Floaty...']] },
  selfie: { why: [['屋上で自撮りしてたら一歩下がりすぎた', 'Stepped back for a selfie'], ['映える角度を探して', 'Looking for a good angle']], thanks: [['今の撮れた！ ありがと', 'Got it on video! Thanks'], ['一緒に撮ってええ？', 'Selfie with me?']], oops: [['撮れ高はあった', 'Great footage though'], ['スマホは無事', 'The phone is fine']], fall: [['ライブ配信中です！', 'I am live!'], ['いいね押して！', 'Smash that like!']] },
  ittan: { why: [['風に乗りすぎた', 'Rode the wind too far'], ['洗濯物にまぎれて干されていた', 'Got hung out with the laundry']], thanks: [['ひらり。礼を言う', 'Flutter. Thank you'], ['布団と間違えんといて', 'I am not a futon']], oops: [['ひらひら…地面も悪くない', 'Flutter... the ground is fine'], ['電線にひっかかるよりまし', 'Better than the power line']], fall: [['ひら〜り', 'Flutter...'], ['風よ〜', 'Oh wind...']] },
  kappa: { why: [['屋上の貯水槽で泳いでた', 'Swimming in the roof tank'], ['きゅうりを取ろうとして', 'Reaching for a cucumber']], thanks: [['皿の水、無事や。かたじけない', 'My plate is still wet. Thanks'], ['きゅうりを一本やろう', 'Have a cucumber']], spill: [['皿の水こぼれた！ 乱暴やな', 'You spilled my plate! Rough!']], oops: [['皿が乾く〜', 'My plate is drying!'], ['尻子玉は取らんといたる', 'I will spare you this time']], fall: [['皿が〜', 'My plate!'], ['キュウッ', 'Kyuu!']] },
  karakasa: { why: [['雨やと思って飛び出した', 'Thought it was raining'], ['一本足で跳ねすぎた', 'Hopped one hop too far']], thanks: [['ベロ〜ン（なめられた）', 'Bleeeh (it licked you)'], ['百年使うてや', 'Use me for a hundred years']], oops: [['ぴょん。平気や', 'Boing. All good'], ['骨が一本ゆるんだ', 'One rib got loose']], fall: [['ばさっ', 'Fwump'], ['ぴょ〜ん', 'Boooing']] },
  thrill: { why: [['わざと飛んだ', 'Jumped on purpose'], ['バンジーのひもを忘れた', 'Forgot the bungee cord']], thanks: [['えー、今ええとこやったのに', 'Aw, it was getting good'], ['もう一回落としてくれへん？', 'Can you drop me again?']], oops: [['最高やった！', 'That was awesome!'], ['もう一回！', 'Again!']], fall: [['ひゃっほー！', 'Wheee!'], ['最高〜！', 'Yesss!']] }
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
// 2人目は1人目の近く（同じ建物か隣の建物、20m 以内）に出す（2026-11-03 本人「2人ほぼ同時に落下してくる」。受けとめた勢いのまま次へ向かえるように）
function pickNear(world, rnd, f0, others) {
  const blds = world._catchBlds || (world._catchBlds = world.colliders.filter(o => o.kind === 'building' && o.y1 >= CATCH.hMin + 4))
  const cand = blds.filter(o => !o.yaw && Math.abs(o.cx - f0.fx) < o.hw + 22 && Math.abs(o.cz - f0.fz) < o.hl + 22)
  for (let g = 0; g < 400 && cand.length; g++) {
    const o = cand[Math.floor(rnd() * cand.length)], side = Math.floor(rnd() * 4)
    const nx = [1, -1, 0, 0][side], nz = [0, 0, 1, -1][side], along = (rnd() * 2 - 1) * 0.8
    const ex = o.cx + (nx ? nx * o.hw : along * o.hw), ez = o.cz + (nz ? nz * o.hl : along * o.hl)
    const d = Math.hypot(ex + nx * 1.3 - f0.fx, ez + nz * 1.3 - f0.fz)
    if (d < CATCH.nearPair[0] || d > CATCH.nearPair[1]) continue
    if (world.surfaceAt(ex + nx * 7, ez + nz * 7) !== 'road' || world.surfaceAt(ex + nx * 12, ez + nz * 12) !== 'road') continue
    if (world.colliders.some(b => b !== o && b.kind === 'building' && Math.abs(ex + nx * 6 - b.cx) < b.hw + 1 && Math.abs(ez + nz * 6 - b.cz) < b.hl + 1)) continue
    if (others.some(f => Math.hypot(f.x - ex, f.z - ez) < CATCH.nearPair[0])) continue
    const h = Math.min(o.y1 - 2, CATCH.hMin + rnd() * (CATCH.hMax - CATCH.hMin))
    return { ex, ez, nx, nz, top: h, roof: o.y1, bld: o }
  }
  return null
}
function pickSpot(world, r, rnd, others, nearMax = CATCH.nearMax) {
  const blds = world._catchBlds || (world._catchBlds = world.colliders.filter(o => o.kind === 'building' && o.y1 >= CATCH.hMin + 4))
  for (let g = 0; g < 1200; g++) {
    const far = g < 400 ? nearMax : g < 800 ? nearMax * 1.6 : nearMax * 2.5   // 近くに高い建物が無い時は遠くまで探す
    const o = blds[Math.floor(rnd() * blds.length)]
    if (o.yaw) continue
    const side = Math.floor(rnd() * 4)
    const nx = [1, -1, 0, 0][side], nz = [0, 0, 1, -1][side]
    const along = (rnd() * 2 - 1) * 0.6
    const ex = o.cx + (nx ? nx * o.hw : along * o.hw), ez = o.cz + (nz ? nz * o.hl : along * o.hl)
    const d = Math.hypot(ex - r.x, ez - r.z)
    if (d < CATCH.nearMin || d > far) continue
    // 前が道（落ちる先が開けている）
    if (world.surfaceAt(ex + nx * 7, ez + nz * 7) !== 'road' || world.surfaceAt(ex + nx * 12, ez + nz * 12) !== 'road') continue
    if (world.colliders.some(b => b !== o && b.kind === 'building' && Math.abs(ex + nx * 6 - b.cx) < b.hw + 1 && Math.abs(ez + nz * 6 - b.cz) < b.hl + 1)) continue
    if (others.some(f => Math.hypot(f.x - ex, f.z - ez) < 30)) continue
    const h = Math.min(o.y1 - 2, CATCH.hMin + rnd() * (CATCH.hMax - CATCH.hMin))
    return { ex, ez, nx, nz, top: h, roof: o.y1, bld: o }
  }
  return null
}

export function createRound(world, seed = 1, mode = 'normal') {
  return {
    mode, t: 0, over: false, seed, kinds: {}, rnd: mulberry(seed), next: CATCH.firstAt, n: 0,
    fallers: [], carry: [], saved: 0, missed: 0, chain: 0, bestChain: 0, score: 0, swingCatches: 0,
    mats: makeMats(world), log: [], events: [], fullT: 0
  }
}

// 落ちてくる人: state = warn（ベランダのふちでぐらつく）→ fall（落ちている）→ carried（抱えられている）/ landed（地面に落ちた）/ saved
function spawn(rd, world, r) {
  const act = rd.fallers.filter(f => f.state === 'warn' || f.state === 'fall')
  const sp = (act.length && pickNear(world, rd.rnd, act[act.length - 1], act)) || pickSpot(world, r, rd.rnd, act, rd.mode === 'endless' ? Math.min(CATCH.nearMax, ENDLESS.near[0] + rd.t * ENDLESS.near[1]) : CATCH.nearMax)
  if (!sp) return false
  const kind = pickKind(rd), K = KINDS[kind], KL = KIND_LINES[kind]
  const reason = Math.floor(rd.rnd() * (KL ? KL.why.length : REASONS.length))
  const f = {
    id: rd.n++, state: 'warn', t: 0, look: rd.n % 6, reason, kind, ph: rd.rnd() * 6,
    warnT: rd.mode === 'endless' ? Math.max(ENDLESS.warn[1], ENDLESS.warn[0] - rd.t * ENDLESS.warnK) : CATCH.warn,
    x: sp.ex + sp.nx * 0.5, z: sp.ez + sp.nz * 0.5, y: sp.top,      // 待っている間はベランダ（壁から出た小さな床）に立つ
    fx: sp.ex + sp.nx * 1.3, fz: sp.ez + sp.nz * 1.3, top: sp.top, roof: sp.roof,  // 落ちる位置は壁の外 1.3m
    nx: sp.nx, nz: sp.nz, vy: 0, ground: world.groundAt(sp.ex + sp.nx * 1.3, sp.ez + sp.nz * 1.3).h
  }
  rd.fallers.push(f)
  rd.events.push({ t: 'spawn', id: f.id, reason, kind, x: f.x, y: f.y, z: f.z })
  return true
}
// 種類を選ぶ: 最初の2人は普通の住人（遊び方を覚える間）、それ以降は出やすさの重みで
function pickKind(rd) {
  if (rd.n < 2) return 'normal'
  const easy = rd.mode === 'endless' && rd.t < ENDLESS.easyUntil
  const ks = KIND_KEYS.filter(k => !(easy && (k === 'cat' || k === 'heavy')))
  let tot = 0; for (const k of ks) tot += KINDS[k].w
  let x = rd.rnd() * tot
  for (const k of ks) { x -= KINDS[k].w; if (x < 0) return k }
  return 'normal'
}
export const reasonText = f => { const KL = KIND_LINES[f.kind]; return KL ? KL.why[f.reason % KL.why.length] : REASONS[f.reason % REASONS.length] }
export const kindLine = (kind, key, id) => { const KL = KIND_LINES[kind]; const arr = (KL && KL[key]) || LINES[key] || LINES.thanks; return arr[id % arr.length] }

const chest = r => r.y + 1.2
const gapNow = rd => {
  if (rd.mode === 'endless') return Math.max(ENDLESS.gap[1], ENDLESS.gap[0] - rd.t * ENDLESS.gapK)
  const k = Math.min(1, rd.t / CATCH.roundSec); return CATCH.gap[0] + (CATCH.gap[1] - CATCH.gap[0]) * k
}
export const endlessMax = t => { let m = 1; for (const [at, n] of ENDLESS.active) if (t >= at) m = n; return m }

// 1ステップ
export function stepCatch(rd, r, dt, world) {
  if (rd.over) return
  rd.t += dt
  if (rd.mode !== 'endless' && rd.t >= CATCH.roundSec) { rd.over = true; rd.events.push({ t: 'timeUp' }); return }
  // 次の人
  const busy = rd.fallers.filter(f => f.state === 'warn' || f.state === 'fall').length
  const maxA = rd.mode === 'endless' ? endlessMax(rd.t) : rd.t >= CATCH.pairAfter && rd.pair ? 2 : CATCH.maxActive
  if (busy >= maxA) rd.next = Math.max(rd.next, rd.t + gapNow(rd))   // 落ちている人がいる間は次を出さない。片付いてから gap 秒
  else if (rd.t >= rd.next) {
    if (spawn(rd, world, r)) {
      // 後半はときどき、すぐもう1人（2人同時）
      if (rd.mode === 'endless') rd.next = rd.t + (busy + 1 < maxA ? 1.2 : gapNow(rd))   // 同時の上限までは少しずつずらして出す
      else if (!rd.pair && busy === 0 && rd.t >= CATCH.pairAfter && rd.rnd() < CATCH.pairOdds) { rd.pair = true; rd.next = rd.t + 0.8 }
      else { rd.pair = false; rd.next = rd.t + gapNow(rd) }
    }
    else rd.next = rd.t + 0.5
  }
  const air = !r.grounded && (r.y - (r.groundY || 0)) > CATCH.catchAir
  for (const f of rd.fallers) {
    f.t += dt
    if (f.state === 'warn') {
      const gapF = rd.mode === 'endless' ? Math.max(ENDLESS.fallGap[1], ENDLESS.fallGap[0] - rd.t * ENDLESS.fallGapK) : CATCH.fallGap
      if (f.t >= (f.warnT || CATCH.warn) && rd.t - (rd.lastFall ?? -99) >= gapF) { rd.lastFall = rd.t; f.state = 'fall'; f.t = 0; f.x = f.fx; f.z = f.fz; f.vy = 1.5; rd.events.push({ t: 'fall', id: f.id, kind: f.kind, x: f.x, y: f.y, z: f.z }) }
    } else if (f.state === 'fall') {
      const K = KINDS[f.kind] || KINDS.normal
      f.vy = Math.max(-K.fallMax, f.vy - K.fallG * dt)
      if (K.hop && f.t % K.hop < dt && f.t > 0.5) f.vy = Math.max(f.vy, 1.6)   // から傘おばけ: 傘でふわっと浮く
      f.y += f.vy * dt
      if (K.sway) { const sw = Math.sin(f.t * 1.3 + f.ph) * K.sway; f.x = f.fx + f.nz * sw; f.z = f.fz - f.nx * sw }   // 一反木綿: 左右にひらひら
      const dh = Math.hypot(f.x - r.x, f.z - r.z), dv = f.y + 0.8 - chest(r)
      // 手を伸ばす: 空中で近くにいれば、少しだけ人の方へ寄る（ぴったり合わせなくても受けとめられる）
      if (air && !r.climbing && rd.carry.length < CATCH.carryMax && dh < CATCH.assistR && Math.abs(dv) < CATCH.assistR) {
        const L = Math.hypot(f.x - r.x, dv, f.z - r.z) || 1, a = CATCH.assistA * dt
        r.vx += (f.x - r.x) / L * a; r.vz += (f.z - r.z) / L * a; r.vy += dv / L * a * 0.6
      }
      if (dh < CATCH.catchR * K.catchK && Math.abs(dv) < CATCH.catchV * K.catchK) {   // 空中でも地面でも（地面は点が少ない）。猫は小さい
        if (rd.carry.length >= CATCH.carryMax) { if (rd.fullT <= 0) { rd.fullT = 1.5; rd.events.push({ t: 'full' }) } }
        else {
          f.state = 'carried'; f.slot = rd.carry.length; rd.carry.push(f); rd.caught = (rd.caught || 0) + 1
          const swing = !!r.rope
          if (swing) rd.swingCatches++
          f.swing = swing; f.catchY = Math.round(f.y - f.ground); f.onGround = !air
          f.spill = f.kind === 'kappa' && Math.hypot(r.vx, r.vy, r.vz) > 20   // 河童: 速すぎると頭の皿の水がこぼれて怒る（点が半分）
          rd.events.push({ t: 'catch', id: f.id, kind: f.kind, spill: f.spill, swing, h: f.catchY, n: rd.carry.length, x: f.x, y: f.y, z: f.z, ground: !air })
          continue
        }
      }
      if (f.y <= f.ground) {
        f.y = f.ground; f.state = 'landed'; f.t = 0
        rd.missed++; rd.chain = 0
        rd.log.push({ id: f.id, reason: f.reason, kind: f.kind, ok: false })
        rd.events.push({ t: 'miss', id: f.id, kind: f.kind, x: f.x, y: f.y, z: f.z })
        if (rd.mode === 'endless') { rd.over = true; rd.lost = f.kind; rd.events.push({ t: 'gameOver', id: f.id, kind: f.kind }); return }   // エンドレスは1人落ちたら終わり
      }
    }
  }
  rd.fullT -= dt
  // 重い人を抱えている間は動きが鈍る（runner.js が r.load を読む）
  r.load = Math.min(0.5, rd.carry.reduce((a, f) => a + ((KINDS[f.kind] || KINDS.normal).load || 0), 0))
  // 抱えている人を救護マットに引き渡す（マットの上に着地する）
  if (rd.carry.length && r.grounded) {
    const m = rd.mats.find(m => Math.hypot(m.x - r.x, m.z - r.z) < CATCH.matR)
    if (m) {
      let pts = 0
      for (const f of rd.carry) {
        rd.saved++
        let p
        const base = (KINDS[f.kind] || KINDS.normal).pts
        if (f.onGround) p = Math.round(CATCH.ptsGround * base / 100)   // 地面で受けとめた人は少なめ・連続に数えない
        else { rd.chain++; rd.bestChain = Math.max(rd.bestChain, rd.chain); p = base + CATCH.ptsChain * (Math.min(rd.chain, CATCH.chainMax) - 1) + (f.swing ? CATCH.ptsSwing : 0) }
        if (f.spill) p = Math.round(p / 2)
        rd.kinds[f.kind] = (rd.kinds[f.kind] || 0) + 1
        pts += p; f.state = 'saved'; f.t = 0; f.x = m.x + (f.slot - 1) * 1.1; f.z = m.z + 1.2; f.y = m.y
        rd.log.push({ id: f.id, reason: f.reason, kind: f.kind, ok: true, swing: f.swing, ground: f.onGround, h: f.catchY, pts: p })
      }
      rd.score += pts
      rd.events.push({ t: 'save', n: rd.carry.length, pts, chain: rd.chain, mat: m })
      rd.carry = []; r.load = 0
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
  const eta = f => f.state === 'warn' ? ((f.warnT || CATCH.warn) - f.t) + fallTime(f.top - f.ground, 1.5, f.kind) : fallTime(f.y - f.ground, f.vy, f.kind)
  return a.sort((p, q) => eta(p) - eta(q))[0]
}
// 高さ h を落ちきるまでの秒数（今の速さ vy から）
export function fallTime(h, vy = 1.5, kind = 'normal') {
  const K = KINDS[kind] || KINDS.normal
  let t = 0, y = h, v = vy
  while (y > 0 && t < 60) { v = Math.max(-K.fallMax, v - K.fallG / 30); y += v / 30; t += 1 / 30 }
  return t
}
export function nearestMat(rd, x, z) { let best = null, bd = 1e9; for (const m of rd.mats) { const d = Math.hypot(m.x - x, m.z - z); if (d < bd) { bd = d; best = m } } return best }
export function rankOf(score) { return score >= 1400 ? 3 : score >= 800 ? 2 : score >= 300 ? 1 : 0 }
