// 空中キャッチの検証。node verify.mjs（テスト中は無音: mute.mjs）
import { chromium, webkit } from 'playwright'
import { spawn, execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
import { createWorld } from './shared/track.js'
import { createRunner, stepRunner, RUN } from './shared/runner.js'
import { CATCH, KINDS, KIND_KEYS, ENDLESS, createRound, stepCatch, endlessMax, kindLine, reasonText } from './shared/catch.js'
import { play } from './tools/sim.mjs'
const ROOT = import.meta.dirname
mkdirSync(ROOT + '/shots', { recursive: true })
const PORT = 5394
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const URL0 = `http://localhost:${PORT}/?third`   // 三人称の動きも壊れていないか見る。一人称は _fp.mjs
let pass = 0, fail = 0
const results = []
async function t(name, fn) {
  if (process.env.ONLY && !new RegExp(process.env.ONLY).test(name)) return   // ONLY=正規表現 で一部だけ回す
  try { const r = await fn(); if (r === false) throw new Error('false'); pass++; results.push(`ok   ${name}${r && r !== true ? '  ' + JSON.stringify(r) : ''}`) }
  catch (e) { fail++; results.push(`FAIL ${name}  ${e.message.split('\n')[0]}`) }
}
const expect = (c, msg) => { if (!c) throw new Error(typeof msg === 'string' ? msg : JSON.stringify(msg)) }
const GL = ['--use-angle=metal', '--enable-unsafe-swiftshader']
async function open(browser, opts = {}) {
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts })
  await muteContext(ctx)
  await ctx.addInitScript(() => { try { localStorage.clear() } catch (e) {} })
  const p = await ctx.newPage(); p.errs = []
  p.on('pageerror', e => p.errs.push('pageerror ' + e.message))
  p.on('console', m => { if (m.type() === 'error' && !/GL Driver|WebGL|GPU stall/.test(m.text())) p.errs.push('console ' + m.text()) })
  p.on('requestfailed', r => { if (!/fonts\.(googleapis|gstatic)/.test(r.url())) p.errs.push('reqfail ' + r.url()) })
  await p.goto(URL0); await p.waitForFunction(() => window.__catchReady, null, { timeout: 60000 })
  return p
}
const overflow = p => p.evaluate(() => {
  const W = document.documentElement.clientWidth, bad = []
  for (const el of document.querySelectorAll('.screen:not(.hidden) *, #hud:not(.hidden) *')) {
    if (el.closest('.hidden') || (el.checkVisibility && !el.checkVisibility({ visibilityProperty: true }))) continue
    if (el.closest('#arrow,#miss,#say,#bubbles')) continue
    const r = el.getBoundingClientRect(); if (r.width && (r.right > W + 1 || r.left < -1)) bad.push((el.id || el.className || el.tagName) + ':' + Math.round(r.left) + '-' + Math.round(r.right))
  }
  return { sw: document.documentElement.scrollWidth, W, bad: bad.slice(0, 5) }
})
const fit = q => q.evaluate(() => {
  const H = innerHeight, de = document.documentElement, over = []
  if (de.scrollHeight > H + 1) over.push('page:' + de.scrollHeight)
  for (const el of document.querySelectorAll('.screen:not(.hidden) button,.screen:not(.hidden) a,.screen:not(.hidden) canvas,.screen:not(.hidden) .sign,#hud:not(.hidden) button,#hud:not(.hidden) #counter,#hud:not(.hidden) #watch')) {
    if (el.closest('.hidden')) continue
    const r = el.getBoundingClientRect(); if (!r.width) continue
    if (r.bottom > H + 1 || r.top < -1) over.push((el.id || el.className) + ':' + Math.round(r.top) + '-' + Math.round(r.bottom))
  }
  const rs = [...document.querySelectorAll('#hud:not(.hidden) #counter,#hud:not(.hidden) #watch,#hud:not(.hidden) #btnPause,#touch:not(.hidden) .tbtn,#touch:not(.hidden) .stick,.screen:not(.hidden) .sign,.screen:not(.hidden) .go,.screen:not(.hidden) .radio,.screen:not(.hidden) .foot')].map(e => [e.id || e.dataset.k || e.className, e.getBoundingClientRect()])
  for (let i = 0; i < rs.length; i++) for (let j = i + 1; j < rs.length; j++) { const a = rs[i][1], b = rs[j][1]; if (!a.width || !b.width) continue; if (a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1) over.push('overlap ' + rs[i][0] + '×' + rs[j][0]) }
  return { H, over: over.slice(0, 6) }
})

// ---------------------------------------------------------------- 仕組み（node だけ）
const world = createWorld('city')
const dt = 1 / 60
await t('ワイヤー: 届く距離は60〜85m。遠すぎる所を押すと、その向きの届く所に掛かる（空中出前と同じ）', () => {
  expect(RUN.wireRange >= 60 && RUN.wireRange <= 85, RUN.wireRange)
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 700, yaw: 0 } })
  stepRunner(r, { wire: true, wireAt: { x: 40, y: 60, z: 790 } }, dt, world)
  expect(r.rope, r.events)
  const d = Math.hypot(r.rope.x - r.x, r.rope.y - r.y, r.rope.z - r.z)
  const dirOk = Math.abs(Math.atan2(r.rope.x, r.rope.z - 700) - Math.atan2(40, 90)) < 1.6
  expect(d <= RUN.wireRange + 2 && dirOk, { d, rope: r.rope })
  return { range: RUN.wireRange, d: Math.round(d) }
})
await t('ワイヤー: 届く所なら掛かる', () => {
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 700, yaw: 0 } })
  stepRunner(r, { wire: true, wireAt: { x: 18, y: 30, z: 740 } }, dt, world)
  expect(r.rope, r.events); return { len: +r.rope.len.toFixed(1) }
})
await t('巻取ボタンは無い: boost を送っても動きが変わらない（振り子のまま）', () => {
  const mk = () => { const r = createRunner({ id: 'a', spawn: { x: 0, y: 12, z: 700, yaw: 0 } }); r.grounded = false; r.vz = 12; r.rope = { x: 0, y: 30, z: 712, len: 21, t: 0 }; return r }
  const a = mk(), b = mk()
  for (let i = 0; i < 40; i++) { stepRunner(a, { boost: true }, dt, world); stepRunner(b, {}, dt, world) }
  expect(Math.abs(a.x - b.x) < 1e-6 && Math.abs(a.y - b.y) < 1e-6 && Math.abs(a.z - b.z) < 1e-6, 'boost changed motion')
  return true
})
await t('飛ぶ方が走るより速い（最高速の比較）', () => {
  const g = play('skilled', 1), w = play('walker', 1)
  expect(g.maxV > w.maxV * 1.8, { fly: g.maxV, walk: w.maxV }); return { fly: Math.round(g.maxV), walk: Math.round(w.maxV) }
})
// 落ちる人の真下の壁へ走って張り付く
function onWall() {
  const rd = createRound(world, 5)
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 820, yaw: 0 } })
  for (let i = 0; i < 240; i++) stepCatch(rd, r, dt, world)
  const f = rd.fallers[0], ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3
  Object.assign(r, { x: ex + f.nx * 4, z: ez + f.nz * 4, yaw: Math.atan2(-f.nx, -f.nz) })
  for (let i = 0; i < 60; i++) { stepRunner(r, { throttle: 1, cy: 1 }, dt, world); stepCatch(rd, r, dt, world) }
  return { r, rd, f }
}
await t('壁に張り付いたら上下左右に這える・何も押さなければ止まる', () => {
  const { r } = onWall()
  expect(r.climbing, 'not climbing')
  const y0 = r.y; for (let i = 0; i < 30; i++) stepRunner(r, { cy: 1 }, dt, world); const up = r.y - y0
  const y1 = r.y; for (let i = 0; i < 30; i++) stepRunner(r, { cy: -1 }, dt, world); const down = y1 - r.y
  const q = { x: r.x, z: r.z }; for (let i = 0; i < 30; i++) stepRunner(r, { cx: 1 }, dt, world); const right = Math.hypot(r.x - q.x, r.z - q.z)
  const q2 = { x: r.x, z: r.z }; for (let i = 0; i < 30; i++) stepRunner(r, { cx: -1 }, dt, world); const left = Math.hypot(r.x - q2.x, r.z - q2.z)
  const y3 = r.y; for (let i = 0; i < 30; i++) stepRunner(r, {}, dt, world); const still = Math.abs(r.y - y3)
  expect(up > 3 && down > 3 && right > 2 && left > 2 && still < 0.05 && r.climbing, { up, down, right, left, still })
  return { up: +up.toFixed(1), down: +down.toFixed(1), right: +right.toFixed(1), left: +left.toFixed(1) }
})
await t('壁でワイヤーボタン（狙いなし）を押すと離れる（跳ぶボタンは無い）', () => {
  const { r } = onWall()
  stepRunner(r, { wire: true }, dt, world); stepRunner(r, {}, dt, world)
  expect(!r.climbing && !r.grounded && !r.rope, { cl: !!r.climbing, rope: !!r.rope }); return true
})
await t('壁を下りきると壁から離れる', () => {
  const { r } = onWall()
  for (let i = 0; i < 240 && r.climbing; i++) stepRunner(r, { cy: -1 }, dt, world)
  expect(!r.climbing, { y: r.y }); return { y: +r.y.toFixed(1) }
})
await t('ワイヤーボタン: 地面から押すと上へ掛かり、ワイヤー中にもう一回押すと離して飛ぶ', () => {
  const rd = createRound(world, 4), m = rd.mats[0]
  const r = createRunner({ id: 'a', spawn: { x: m.x, y: m.y, z: m.z - 6, yaw: 0 } })
  for (let i = 0; i < 20; i++) stepRunner(r, {}, dt, world)
  stepRunner(r, { wire: true }, dt, world)
  const hooked = !!r.rope, ay = r.rope ? r.rope.y - r.y : 0
  for (let i = 0; i < 50; i++) stepRunner(r, { throttle: 1 }, dt, world)
  const still = !!r.rope
  stepRunner(r, { wire: true }, dt, world); stepRunner(r, {}, dt, world)
  expect(hooked && ay > 4 && still && !r.rope && !r.grounded, { hooked, ay, still, rope: !!r.rope }); return { up: +ay.toFixed(1) }
})
await t('落ちてくる人: 前半は一度に1人・後半はときどき2人まで（3人以上は無い）・片付いてから1.5秒以上あけて次・高さ30m以上（2026-11-02「連続で落ちて間に合わへん」「もっと高い所から」、2026-11-03「ちょっと簡単になりすぎ」）', () => {
  const rd = createRound(world, 2)
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 814, yaw: 0 } })
  let fell = 0, maxBusy = 0, maxEarly = 0, minGap = 99, lastEnd = null, minH = 999
  while (!rd.over) {
    stepCatch(rd, r, dt, world)
    for (const e of rd.events) {
      if (e.t === 'fall') fell++
      if (e.t === 'miss' || e.t === 'catch') lastEnd = rd.t
      if (e.t === 'spawn') { if (lastEnd != null) minGap = Math.min(minGap, rd.t - lastEnd); const f = rd.fallers.find(f => f.id === e.id); minH = Math.min(minH, f.top - f.ground) }
    }
    rd.events.length = 0
    const busy = rd.fallers.filter(f => f.state === 'warn' || f.state === 'fall').length
    if (rd.t < CATCH.pairAfter) maxEarly = Math.max(maxEarly, busy)
    maxBusy = Math.max(maxBusy, busy)
  }
  expect(rd.n >= 6 && fell >= 5 && maxEarly === 1 && maxBusy <= 2 && minGap >= 1.5 && minH >= 25, { n: rd.n, fell, maxEarly, maxBusy, minGap, minH })
  return { spawned: rd.n, maxEarly, maxBusy, minGap: +minGap.toFixed(1), minH: +minH.toFixed(1) }
})
await t('地面でも受けとめられる（2026-11-03 本人「地面でキャッチできない」）。ただし点は少なめ（60点）・連続に数えない', () => {
  const rd = createRound(world, 2)
  const r = createRunner({ id: 'g', spawn: { x: 0, y: 0, z: 814, yaw: 0 } })
  let caughtGround = false
  for (let i = 0; i < 60 * 40 && !rd.carry.length; i++) {
    const f = rd.fallers.find(f => f.state === 'fall'); if (f) Object.assign(r, { x: f.x, z: f.z, y: f.ground, vx: 0, vy: 0, vz: 0, grounded: true, groundY: f.ground })
    stepCatch(rd, r, dt, world); for (const e of rd.events) if (e.t === 'catch' && e.ground) caughtGround = true; rd.events.length = 0
  }
  const m = rd.mats[0]
  Object.assign(r, { x: m.x, z: m.z, y: m.y, grounded: true }); stepCatch(rd, r, dt, world)
  expect(caughtGround && rd.saved === 1 && rd.score === CATCH.ptsGround && rd.chain === 0 && CATCH.ptsGround < CATCH.ptsSave, { caughtGround, saved: rd.saved, score: rd.score, chain: rd.chain }); return { score: rd.score }
})
await t('ローリング: 地面で押すと向いた方へ素早く転がる（走るより速い）・空中では出ない・続けて連打しても間が空く', () => {
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 814, yaw: 0 } })
  const run = (inp, n) => { for (let i = 0; i < n; i++) stepRunner(r, inp, dt, world) }
  run({}, 30); r.vx = r.vz = 0
  const z0 = r.z; run({ throttle: 1 }, Math.round(RUN.rollSec / dt)); const walk = Math.abs(r.z - z0)
  run({}, 60); r.vx = r.vz = 0
  const z1 = r.z; run({ roll: true }, 1); run({}, Math.round(RUN.rollSec / dt) - 1); const rolled = Math.abs(r.z - z1)
  run({}, 60)
  r.y += 20; r.grounded = false; r.vy = 0; run({ roll: true }, 1); const airRoll = r.rollT > 0
  run({}, 200)
  r.rollT = 0; r.rollCdT = 0; run({ roll: true }, 1); run({}, 1); const t1 = r.rollT; run({ roll: true }, 1); const again = r.rollT > t1
  expect(rolled > walk * 1.6 && !airRoll && !again, { walk: +walk.toFixed(1), rolled: +rolled.toFixed(1), airRoll, again }); return { walk: +walk.toFixed(1), rolled: +rolled.toFixed(1) }
})
await t('空中なら受けとめられ、救護マットに着地すると引き渡せる（点と連続が増える）', () => {
  const { r, rd } = onWall()
  for (let i = 0; i < 60 * 12 && rd.carry.length === 0; i++) { stepRunner(r, {}, dt, world); stepCatch(rd, r, dt, world) }
  expect(rd.carry.length === 1, { carry: rd.carry.length, missed: rd.missed })
  const m = rd.mats[0]
  Object.assign(r, { x: m.x, z: m.z, y: m.y + 3, vx: 0, vy: 0, vz: 0, climbing: null, grounded: false, rope: null })
  for (let i = 0; i < 60; i++) { stepRunner(r, {}, dt, world); stepCatch(rd, r, dt, world) }
  expect(rd.saved === 1 && rd.score >= CATCH.ptsSave && rd.chain === 1, { saved: rd.saved, score: rd.score }); return { score: rd.score }
})
await t('落ちてくる人の種類（2026-11-03 本人「猫とか妖怪とか、結構太ってる人とか」）: 9種類が全部出る・最初の2人は普通の住人・種類ごとに落ち方と受けとめ範囲と点と一言が違う', () => {
  const seen = {}, firstTwo = []
  for (let sd = 1; sd <= 40; sd++) {
    const rd = createRound(world, sd), r = createRunner({ id: 'k', spawn: { x: 0, y: 0, z: 814, yaw: 0 } })
    while (!rd.over) { stepCatch(rd, r, dt, world); for (const e of rd.events) if (e.t === 'spawn') { seen[e.kind] = (seen[e.kind] || 0) + 1; if (e.id < 2) firstTwo.push(e.kind) } rd.events.length = 0 }
  }
  const lines = KIND_KEYS.filter(k => k !== 'normal').every(k => kindLine(k, 'thanks', 0) && kindLine(k, 'oops', 1) && kindLine(k, 'fall', 2) && reasonText({ kind: k, reason: 0 }))
  const slowest = KIND_KEYS.reduce((a, k) => KINDS[k].fallMax < KINDS[a].fallMax ? k : a, 'normal')
  expect(KIND_KEYS.every(k => seen[k] > 0) && firstTwo.every(k => k === 'normal') && KINDS.cat.catchK < 1 && KINDS.heavy.load > 0 && KINDS.heavy.pts > KINDS.normal.pts && KINDS.thrill.pts < KINDS.normal.pts && slowest !== 'normal' && lines, JSON.stringify({ seen, firstTwo, slowest }))
  return seen
})
await t('ふくよかな人を抱えると動きが鈍る（走る・こぐ・最高速）。引き渡すと元に戻る', () => {
  const rd = createRound(world, 5), r = createRunner({ id: 'h', spawn: { x: 0, y: 0, z: 740, yaw: 0 } })   // 救護マット（z=820）から離れた所
  const run = (n) => { const z0 = r.z; for (let i = 0; i < n; i++) stepRunner(r, { throttle: 1 }, dt, world); return Math.abs(r.z - z0) }
  for (let i = 0; i < 30; i++) stepRunner(r, {}, dt, world)
  const free = run(60)
  rd.carry.push({ kind: 'heavy', slot: 0, state: 'carried' }); stepCatch(rd, r, dt, world)
  const load = r.load; r.vx = r.vz = 0; for (let i = 0; i < 20; i++) stepRunner(r, {}, dt, world)
  const heavy = run(60)
  expect(load > 0.2 && heavy < free * 0.8, JSON.stringify({ load, free: +free.toFixed(1), heavy: +heavy.toFixed(1) })); return { free: +free.toFixed(1), heavy: +heavy.toFixed(1) }
})
await t('猫は受けとめ範囲が小さい・一反木綿は左右にひらひら・から傘おばけは傘でふわっと浮く', () => {
  const mk = kind => { const rd = createRound(world, 2), r = createRunner({ id: 'c', spawn: { x: 0, y: 0, z: 814, yaw: 0 } }); let f = null; for (let i = 0; i < 60 * 20 && !f; i++) { stepCatch(rd, r, dt, world); rd.events.length = 0; f = rd.fallers.find(x => x.state === 'warn') } f.kind = kind; f.t = 99; return { rd, r, f } }
  // 一反木綿: 落ちている間に横へ動く
  let { rd, r, f } = mk('ittan'); let maxSide = 0
  for (let i = 0; i < 120; i++) { stepCatch(rd, r, dt, world); rd.events.length = 0; if (f.state === 'fall') maxSide = Math.max(maxSide, Math.hypot(f.x - f.fx, f.z - f.fz)) }
  // から傘おばけ: 上向きになる瞬間がある
  ;({ rd, r, f } = mk('karakasa')); let up = false
  for (let i = 0; i < 300 && f.state === 'fall' || i < 2; i++) { stepCatch(rd, r, dt, world); rd.events.length = 0; if (f.state === 'fall' && f.vy > 0 && f.t > 0.6) up = true }
  expect(maxSide > 2 && up && KINDS.cat.catchK <= 0.75, JSON.stringify({ maxSide: +maxSide.toFixed(1), up })); return { maxSide: +maxSide.toFixed(1), up }
})
await t('エンドレス（2026-11-03 本人「誰かを落としてしまうまでエンドレスで」）: 90秒で終わらず、1人落としたら終わり。同時の上限は 1→2（30秒）→3（75秒）、間隔は詰まる。最初の30秒は猫・ふくよかな人が出ず、ぐらつく時間は長め', () => {
  const rd = createRound(world, 3, 'endless'), r = createRunner({ id: 'e', spawn: { x: 0, y: 0, z: 814, yaw: 0 } })
  let over = null, early = []
  // 落ちる人を全部その場で受けとめたことにして、100秒まで進める
  while (rd.t < 100 && !rd.over) {
    stepCatch(rd, r, dt, world)
    for (const e of rd.events) if (e.t === 'spawn' && rd.t < ENDLESS.easyUntil) early.push(e.kind)
    rd.events.length = 0
    for (const f of rd.fallers) if (f.state === 'fall' && f.y < f.top - 3) { f.state = 'saved'; f.t = 0 }
  }
  const t100 = +rd.t.toFixed(0), alive = !rd.over, firstWarn = rd.fallers.length ? null : null
  // 1人落とすと終わる
  const rd2 = createRound(world, 4, 'endless'), r2 = createRunner({ id: 'e2', spawn: { x: 0, y: 0, z: 814, yaw: 0 } }); let go = null
  while (!rd2.over && rd2.t < 120) { stepCatch(rd2, r2, dt, world); for (const e of rd2.events) if (e.t === 'gameOver') go = +rd2.t.toFixed(1); rd2.events.length = 0 }
  const rd3 = createRound(world, 5, 'endless'); rd3.n = 2; rd3.t = 0
  expect(alive && t100 >= 100 && endlessMax(10) === 1 && endlessMax(40) === 2 && endlessMax(90) === 3 && early.every(k => k !== 'cat' && k !== 'heavy') && go !== null && rd2.missed === 1 && ENDLESS.warn[0] >= 7, JSON.stringify({ t100, alive, early, go, missed: rd2.missed }))
  return { lastedIfAllCaught: t100, endsAt: go }
})
await t('bot エンドレス（24回）: 下手な人も30秒より前には終わらない（最初は余裕）・何もしないと20秒前後で終わる', () => {
  const run = k => { const ts = []; for (let i = 1; i <= 24; i++) ts.push(play(k, i, false, 'endless').t); ts.sort((a, b) => a - b); return { avg: Math.round(ts.reduce((a, b) => a + b, 0) / ts.length), min: Math.round(ts[0]), max: Math.round(ts[ts.length - 1]), under30: ts.filter(x => x < 30).length } }
  const r = { skilled: run('skilled'), clumsy: run('clumsy'), walker: run('walker'), idle: run('idle') }
  expect(r.clumsy.under30 === 0 && r.clumsy.avg >= 40 && r.idle.max < 30, JSON.stringify(r)); return r
})
await t('落ち始めは重ならない（2026-11-03 本人「2人ほぼ同時に落下してくる」）: 前の人が落ち始めてから通常は3.5秒以上・エンドレスは最初3.5秒から最短2秒。2人目は1人目の近く（20m 以内）に出る', () => {
  const gaps = { normal: 99, endless: 99, endlessEarly: 99 }, pairD = []
  for (const mode of ['normal', 'endless']) for (let sd = 1; sd <= 12; sd++) {
    const rd = createRound(world, sd, mode), r = createRunner({ id: 'g', spawn: { x: 0, y: 0, z: 740, yaw: 0 } }); let last = null
    while (!rd.over && rd.t < 150) {
      stepCatch(rd, r, dt, world)
      for (const e of rd.events) {
        if (e.t === 'fall') { if (last !== null) { const g = rd.t - last; gaps[mode] = Math.min(gaps[mode], g); if (mode === 'endless' && rd.t < 30) gaps.endlessEarly = Math.min(gaps.endlessEarly, g) } last = rd.t }
        if (e.t === 'spawn') { const others = rd.fallers.filter(f => f.id !== e.id && (f.state === 'warn' || f.state === 'fall')); if (others.length) { const f0 = others[others.length - 1], f1 = rd.fallers.find(f => f.id === e.id); pairD.push(Math.hypot(f1.fx - f0.fx, f1.fz - f0.fz)) } }
      }
      rd.events.length = 0
      if (mode === 'endless') for (const f of rd.fallers) if (f.state === 'fall' && f.y < f.top - 3) { f.state = 'saved'; f.t = 0 }   // エンドレスは全員受けとめたことにして続ける
    }
  }
  const nearShare = pairD.length ? pairD.filter(d => d <= 21).length / pairD.length : 1
  expect(gaps.normal >= CATCH.fallGap - 0.02 && gaps.endless >= 2 - 0.02 && gaps.endlessEarly >= 3.5 - 0.4 && pairD.length > 10 && nearShare >= 0.9, JSON.stringify({ gaps, pairs: pairD.length, nearShare }))
  return { minGapNormal: +gaps.normal.toFixed(2), minGapEndless: +gaps.endless.toFixed(2), pairs: pairD.length, near20m: Math.round(nearShare * 100) + '%' }
})
await t('bot（24回ずつ）: 下手な人が救う割合は3〜5割（2026-11-03「簡単になりすぎ」で 56% から4割前後に）・ワイヤーを使う人の点は走るだけ以上・何もしないと0人', () => {
  const avg = k => { let s = 0, sv = 0, sp = 0; for (let i = 1; i <= 24; i++) { const g = play(k, i); s += g.score; sv += g.saved; sp += g.spawned } return { score: Math.round(s / 24), saved: +(sv / 24).toFixed(1), rate: +(sv / sp).toFixed(2) } }
  const sk = avg('skilled'), cl = avg('clumsy'), wk = avg('walker'), id = avg('idle')
  expect((sk.score + cl.score) / 2 >= wk.score * 0.9 && id.saved === 0 && cl.rate >= 0.3 && cl.rate <= 0.5 && sk.rate < 0.47, { sk, cl, wk, id })   // 走るだけ bot も壁を登って受けとめる。地面で受けとめた分は点が少ない
  return { skilled: sk, clumsy: cl, walker: wk, idle: id }
})
await t('先読み（modulepreload）は importmap より後にある（前だと Chrome で "three" が解決できず起動しない。2026-11-03 WIRE ESCAPE で公開版が止まった）', async () => {
  const h = (await import('node:fs')).readFileSync(ROOT + '/index.html', 'utf8')
  const im = h.indexOf('type="importmap"'), mp = h.indexOf('rel="modulepreload"')
  expect(im > 0 && (mp < 0 || mp > im), JSON.stringify({ im, mp })); return { im, mp }
})
await t('地面ワイヤー（2026-11-03 本人「空中に浮いてる間は地面にもワイヤーつけて加速」「地面をちゃんとタップしなあかん感じに」）: 地面に立っている時は地面に掛からない／空中では掛かってすぐ速くなり（0.3秒で25m/s）、近く（4m）で外れる。地面の近くで外れても着地しても跳ね返らない／1ステップで最高速×dt より動かない（瞬間移動しない）／ワイヤーボタン（狙いなし）では空中でも地面に掛からない', () => {
  const DT = 1 / 60
  const findOpen = () => { for (let x = -200; x <= 200; x += 7) for (let z = 300; z <= 1200; z += 7) { if (world.surfaceAt(x, z) !== 'road') continue; const g = world.groundAt(x, z, 50).h; if (Math.abs(g) > 0.5) continue; let ok = true; for (let k = 0; k <= 40 && ok; k += 4) { const zz = z + k; if (world.surfaceAt(x, zz) !== 'road' || Math.abs(world.groundAt(x, zz, 50).h) > 0.5) ok = false } if (ok) return { x, z } } return null }
  const P = findOpen(), out = {}
  // 1) 地面に立っている
  const a = createRunner({ id: 'g1', spawn: { x: P.x, y: 0, z: P.z, yaw: 0 } })
  for (let i = 0; i < 20; i++) stepRunner(a, {}, DT, world)
  a.events.length = 0; stepRunner(a, { wire: true, wireAt: { x: P.x, y: 0, z: P.z + 20, ground: true } }, DT, world)
  out.groundBlocked = !(a.rope && a.rope.ground) && a.events.some(e => e.t === 'wireMiss' && e.ground)
  // 2) 空中: 高さ 22m、前（+z）へ 10m/s。斜め前の地面に掛ける
  const b = createRunner({ id: 'g2', spawn: { x: P.x, y: 22, z: P.z, yaw: 0 } })
  Object.assign(b, { grounded: false, vx: 0, vy: 0, vz: 10 })
  stepRunner(b, { wire: true, wireAt: { x: P.x, y: 0, z: P.z + 30, ground: true } }, DT, world)
  out.hooked = !!(b.rope && b.rope.ground)
  let maxV = 0, maxStep = 0, released = -1, relD = null, relVy = null, relY = null, t25 = null, upAfter = 0, landed = false, vyAfterLand = -99, px = b.x, py = b.y, pz = b.z
  for (let i = 1; i < 60 * 4; i++) {
    stepRunner(b, {}, DT, world)
    if (b.rope) maxStep = Math.max(maxStep, Math.hypot(b.x - px, b.y - py, b.z - pz)); px = b.x; py = b.y; pz = b.z
    const v = Math.hypot(b.vx, b.vy, b.vz)
    if (b.rope) maxV = Math.max(maxV, v)
    if (t25 === null && v >= 25) t25 = i * DT
    if (!b.rope && released < 0) { released = i; relD = +Math.hypot(P.x - b.x, 0 - (b.y + 1.2), P.z + 30 - b.z).toFixed(1); relVy = +b.vy.toFixed(1); relY = b.y }
    if (released > 0) upAfter = Math.max(upAfter, b.y - relY)
    if (b.grounded) landed = true
    if (landed) vyAfterLand = Math.max(vyAfterLand, b.vy)
  }
  out.t25 = t25 && +t25.toFixed(2); out.upAfter = +upAfter.toFixed(2); out.landed = landed; out.vyAfterLand = +vyAfterLand.toFixed(2)
  out.released = released > 0; out.relD = relD; out.relVy = relVy; out.maxV = +maxV.toFixed(1); out.maxStep = +maxStep.toFixed(2); out.stepLimit = +(RUN.maxSpeed * DT * 1.05).toFixed(2)
  out.unwire = b.events.length >= 0
  // 3) ワイヤーボタン（狙いなし）を空中で押しても地面には掛からない
  const c = createRunner({ id: 'g3', spawn: { x: P.x, y: 22, z: P.z, yaw: 0 } })
  Object.assign(c, { grounded: false, vx: 0, vy: 0, vz: 10 })
  stepRunner(c, { wire: true }, DT, world)
  out.buttonNotGround = !(c.rope && c.rope.ground)
  // 2026-11-03 本人「あんまり加速できない」「地面に着いてからバウンドするのはおかしい」: 0.3秒で 25m/s・掛けている間に 30m/s 以上（速さの線が出る）、地面の近くで外れても着地しても上へ跳ね返らない
  expect(out.groundBlocked && out.hooked && out.released && relD <= RUN.groundWireRelease + 1.5 && maxV >= 30 && maxV <= RUN.maxSpeed + 1 && out.t25 !== null && out.t25 <= 0.3 && out.upAfter <= 0.05 && out.landed && out.vyAfterLand <= 0.01 && maxStep <= out.stepLimit && out.buttonNotGround, JSON.stringify(out))
  return out
})
await t('AI臭さチェック NG 0', () => {
  try { execFileSync(process.execPath, [ROOT + '/../_shared/ai_tells.mjs', ROOT], { encoding: 'utf8' }); return true }
  catch (e) { throw new Error((e.stdout || '').split('\n').filter(l => /NG/.test(l)).join(' / ')) }
})

// ---------------------------------------------------------------- ブラウザ（Chromium）
const browser = await chromium.launch({ ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, ...GL] })
const p = await open(browser)
await t('起動時にエラーが出ない', async () => { expect(p.errs.length === 0, p.errs.join('|')) })
await t('ロード画面（2026-11-03 本人「開いた最初に、いい感じのロード中の画面を」）: 開いた瞬間に世界観の絵と文字と進み具合が出て、読み込み（人物の GLB）が終わるまで消えない。終わったら消える', async () => {
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 } }); await muteContext(ctx)
  let release; const gate = new Promise(r => { release = r })
  await ctx.route('**/assets/chars/Ranger.glb*', async route => { await gate; await route.continue() })   // 人物の読み込みを止めておく
  const q = await ctx.newPage(); const errs = []; q.on('pageerror', e => errs.push(e.message))
  await q.goto(URL0, { waitUntil: 'domcontentloaded' })
  const first = await q.evaluate(() => { const b = document.getElementById('boot'); const r = b.getBoundingClientRect(); return { shown: r.width > 0 && !b.classList.contains('hidden'), msg: b.querySelector('.boot-msg').textContent, art: !!b.querySelector('svg') } })
  await q.waitForTimeout(2500)
  const mid = await q.evaluate(() => ({ shown: !document.getElementById('boot').classList.contains('hidden'), ready: !!window.__catchReady, pct: document.getElementById('bootPct').textContent }))
  release()
  await q.waitForFunction(() => window.__catchReady, null, { timeout: 30000 }); await q.waitForTimeout(600)
  const after = await q.evaluate(() => ({ hidden: document.getElementById('boot').classList.contains('hidden'), pct: document.getElementById('bootPct').textContent, err: !!document.getElementById('boot-err') }))
  await ctx.close()
  expect(first.shown && first.art && first.msg.length >= 6 && mid.shown && !mid.ready && parseInt(mid.pct) > 0 && parseInt(mid.pct) < 100 && after.hidden && after.pct === '100%' && !after.err && !errs.length, JSON.stringify({ first, mid, after, errs })); return { msg: first.msg, mid: mid.pct }
})
await t('起動失敗の保険: 本体のファイルが読めないと、9秒で原因の表示が出る', async () => {
  const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 } }); await muteContext(ctx)
  await ctx.route('**/js/fx.js*', route => route.fulfill({ status: 404, body: 'nope' }))
  const q = await ctx.newPage(); await q.goto(URL0)
  await q.waitForSelector('#boot-err', { timeout: 15000 }).catch(() => null)
  const r = await q.evaluate(() => { const d = document.getElementById('boot-err'); return { shown: !!d, text: d ? d.textContent.slice(0, 80) : '' } })
  await ctx.close()
  expect(r.shown && /起動できません/.test(r.text), JSON.stringify(r)); return r
})
await t('ブラウザの拡大が起きない', async () => {
  const r = await p.evaluate(() => {
    const g = new Event('gesturestart', { cancelable: true }); document.dispatchEvent(g)
    const w = new WheelEvent('wheel', { ctrlKey: true, deltaY: -10, bubbles: true, cancelable: true }); window.dispatchEvent(w)
    const k = new KeyboardEvent('keydown', { key: '+', ctrlKey: true, bubbles: true, cancelable: true }); window.dispatchEvent(k)
    return [g.defaultPrevented, w.defaultPrevented, k.defaultPrevented, document.querySelector('meta[name=viewport]').content.includes('user-scalable=no')]
  })
  expect(r.every(Boolean), r)
})
await t('OGP 一式がある', async () => {
  const r = await p.evaluate(() => ['og:title', 'og:description', 'og:image', 'og:url'].map(k => document.querySelector(`meta[property="${k}"]`)?.content || ''))
  expect(r.every(Boolean) && r[2].includes('sky-catch/og.png'), r)
})
await t('出動: 救助000・時計・巻取ボタン無し・最初の人がぐらつき吹き出しか矢印が出る', async () => {
  await p.click('#btnStart')
  await p.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(60 * 3.5) })
  const r = await p.evaluate(() => ({ n: document.getElementById('cNum').textContent, w: +document.getElementById('wNum').textContent, reel: !!document.querySelector('[data-k=reel]'), f: sky.rd.fallers.length, guide: !document.getElementById('arrow').classList.contains('hidden') || document.querySelectorAll('#bubbles .bub').length > 0 }))
  expect(r.n === '000' && r.w <= 90 && r.w >= 85 && !r.reel && r.f >= 1 && r.guide, r); return r
})
await t('音（2026-11-03 本人「謎の水の音がずっと鳴ってる」）: 鳴りっぱなしは BGM・街の音・風の3つだけ。風は録音のループ（WAV）で、地面では0、空中で速い時だけ鳴り、上限 0.35', async () => {
  await p.waitForFunction(() => Snd.loops.wind && Snd.loops.wind.g, null, { timeout: 10000 }).catch(() => {})   // ループは読み込み後に鳴り始める
  const r = await p.evaluate(() => {
    const me = sky.me, wl = Snd.loops.wind, slots = Object.keys(Snd.loops).filter(k => Snd.loops[k])
    const urls = Object.fromEntries(slots.map(k => [k, Snd.loops[k].url]))
    const gain = () => wl && wl.g ? +wl.g.gain.value.toFixed(3) : null
    Object.assign(me, { grounded: true, vx: 12, vy: 0, vz: 0 }); sky.dbg.render ? sky.dbg.render(1) : sky.dbg.step(1); const ground = gain()
    me.y += 30; Object.assign(me, { grounded: false, vx: 12, vy: 0, vz: 0 }); sky.dbg.render ? sky.dbg.render(1) : sky.dbg.step(0); const slow = gain()
    Object.assign(me, { grounded: false, vx: 60, vy: 0, vz: 0 }); sky.dbg.render ? sky.dbg.render(1) : sky.dbg.step(0); const fast = gain()
    me.y -= 30; Object.assign(me, { vx: 0 })
    return { slots, urls, ground, slow, fast, hasWind: !!wl }
  })
  expect(r.slots.every(k => ['bgm', 'amb', 'wind'].includes(k)) && /wind_loop\.wav/.test(r.urls.wind || '') && /city_street_loop\.wav/.test(r.urls.amb || '') && !Object.values(r.urls).some(u => /air_01|loop_highway/.test(u)) && r.ground === 0 && r.slow === 0 && r.fast > 0 && r.fast <= 0.35, JSON.stringify(r)); return r
})
await t('矢印は方角だけ（2026-11-03 本人「高さを表現すると分かりづらい。方角だけでいい」）: 画面の上の真ん中に固定・目標が真上でも真下でも向きは水平の方角だけで決まる・正面0°/右90°/後ろ180°', async () => {
  const r = await p.evaluate(() => {
    const ar = document.getElementById('arrow'), svg = ar.querySelector('svg')
    const ang = () => { const m = /rotate\(([-\d.e]+)rad\)/.exec(svg.style.transform); return m ? +m[1] : NaN }
    const f = sky.rd.fallers.find(f => f.state === 'warn' || f.state === 'fall'); const y0 = f.y
    f.y = y0 + 150; sky.dbg.step(1); const hi = ang(), rcHi = ar.getBoundingClientRect()
    f.y = -50; sky.dbg.step(1); const lo = ang(), rcLo = ar.getBoundingClientRect()
    f.y = y0; sky.dbg.step(1)
    const want = sky.dbg.compass(f.x, f.z)
    const me = sky.me, e = sky.camera.matrixWorld.elements, fx = -e[8], fz = -e[10], L = Math.hypot(fx, fz)
    const ahead = sky.dbg.compass(me.x + fx / L * 30, me.z + fz / L * 30), right = sky.dbg.compass(me.x - fz / L * 30, me.z + fx / L * 30), back = sky.dbg.compass(me.x - fx / L * 30, me.z - fz / L * 30)
    return { hi: +hi.toFixed(3), lo: +lo.toFixed(3), want: +want.toFixed(3), sameSpot: Math.abs(rcHi.left - rcLo.left) < 1 && Math.abs(rcHi.top - rcLo.top) < 1, cx: Math.round(rcHi.left + rcHi.width / 2 - innerWidth / 2), top: Math.round(rcHi.top), ahead: +ahead.toFixed(2), right: +(right * 180 / Math.PI).toFixed(0), back: +(Math.abs(back) * 180 / Math.PI).toFixed(0), hidden: ar.classList.contains('hidden') }
  })
  expect(!r.hidden && Math.abs(r.hi - r.lo) < 0.05 && Math.abs(r.hi - r.want) < 0.05 && r.sameSpot && Math.abs(r.cx) <= 2 && r.top < 80 && Math.abs(r.ahead) < 0.02 && Math.abs(r.right - 90) <= 1 && Math.abs(r.back - 180) <= 1, r); return r
})
await t('見上げ（2026-11-03 本人「もうちょっとカメラを上に上げられるように」）: 上へなぞると真上近く（約60度以上）まで見上げられ、カメラは地面にめり込まず、隊員は画面の中に残る', async () => {
  const r = await p.evaluate(() => {
    const me = sky.me, cam = sky.cam, c = sky.camera
    const p0 = cam.pitch; cam.userT = performance.now() + 1e7
    // 上へなぞる（指を上へ 400px）
    const ev = (type, y) => new PointerEvent(type, { pointerId: 9, clientX: 200, clientY: y, bubbles: true })
    document.querySelector('#view canvas').dispatchEvent(ev('pointerdown', 600)); for (let y = 590; y >= 0; y -= 10) window.dispatchEvent(ev('pointermove', y)); window.dispatchEvent(ev('pointerup', 0))
    const pitch = cam.pitch
    sky.dbg.step(1); for (let i = 0; i < 40; i++) sky.dbg.step(0)
    c.updateMatrixWorld(); const e = c.matrixWorld.elements, fy = -e[9], ang = Math.asin(Math.max(-1, Math.min(1, fy))) * 180 / Math.PI
    const gy = sky.world.groundAt(c.position.x, c.position.z, c.position.y).h
    const v = c.position.clone().set(me.x, me.y + 1.6, me.z).project(c)   // 頭
    cam.pitch = p0; cam.userT = -1e9; sky.dbg.step(1)
    return { pitch: +pitch.toFixed(2), min: sky.PITCH_MIN, ang: Math.round(ang), camAbove: +(c.position.y - gy).toFixed(1), meOnScreen: Math.abs(v.x) < 1 && Math.abs(v.y) < 1 && v.z < 1 }
  })
  expect(r.pitch <= -1.2 && r.ang >= 55 && r.camAbove >= 0.5 && r.meOnScreen, JSON.stringify(r)); return r
})
await t('落ちてくる人の目印（2026-11-03 本人「どっから落ちてきてんのか分からへん」）: ベランダの下に地面から屋上の上まで光の柱、頭の上に「！」の看板、矢印の下に「上に ○m」と残り秒、画面の上の外なら「上を見て」', async () => {
  const r = await p.evaluate(() => {
    const f = sky.rd.fallers.find(f => f.state === 'warn' || f.state === 'fall'), me = sky.me, cam = sky.cam
    sky.dbg.teleport(f.fx + f.nx * 12, 0, f.fz + f.nz * 12, Math.atan2(-f.nx, -f.nz)); cam.hd = Math.atan2(-f.nx, -f.nz); cam.pitch = 0.15; cam.userT = performance.now() + 1e7
    sky.dbg.step(1); for (let i = 0; i < 30; i++) sky.dbg.step(0)
    const b = sky.marks().find(m => m.id === f.id) || {}, hb = document.getElementById('heightBox')
    const out = { beamVis: !!b.id || b.id === 0, dx: +(b.beamX - f.fx).toFixed(2), dz: +(b.beamZ - f.fz).toFixed(2), bottom: +(b.beamBottom - f.ground).toFixed(1), top: +b.beamTop.toFixed(1), roof: +f.roof.toFixed(1), sign: sky.headSign.visible && sky.headSign.position.y > f.y + 2, dir: hb.dataset.dir, text: hb.textContent, look: hb.classList.contains('look-up') }
    cam.userT = -1e9
    return out
  })
  expect(r.beamVis && Math.abs(r.dx) < 0.01 && Math.abs(r.dz) < 0.01 && Math.abs(r.bottom) < 0.1 && r.top > r.roof + 5 && r.sign && r.dir === 'up' && /上に \d+m/.test(r.text) && /あと\d秒/.test(r.text) && r.look && /上を見て/.test(r.text), JSON.stringify(r)); return { text: r.text }
})
await t('地面ワイヤー（画面）: 空中で画面の道をタップすると地面に掛かる／建物をタップすると建物（地面より優先）／地面に立っている時に道をタップしても地面には掛からない', async () => {
  const r = await p.evaluate(() => {
    const me = sky.me, W = sky.world, c = sky.camera
    let P = null; for (let x = -200; x <= 200 && !P; x += 7) for (let z = 300; z <= 1200 && !P; z += 7) { let ok = true; for (let k = 0; k <= 40 && ok; k += 4) if (W.surfaceAt(x, z + k) !== 'road' || Math.abs(W.groundAt(x, z + k, 50).h) > 0.5) ok = false; if (ok) P = { x, z } }
    const scr = (x, y, z) => { const v = c.position.clone().set(x, y, z).project(c); return { sx: (v.x * 0.5 + 0.5) * innerWidth, sy: (-v.y * 0.5 + 0.5) * innerHeight, ok: v.z < 1 && Math.abs(v.x) < 0.95 && Math.abs(v.y) < 0.95 } }
    const air = () => { sky.dbg.teleport(P.x, 22, P.z, 0); Object.assign(me, { grounded: false, vy: 0 }); sky.cam.hd = 0; sky.cam.pitch = 0.8; sky.cam.userT = performance.now() + 1e7; for (let i = 0; i < 40; i++) sky.dbg.step(0); c.updateMatrixWorld() }
    air(); const g = scr(P.x, 0, P.z + 18); sky.dbg.pressWire(g.sx, g.sy); sky.dbg.step(1)
    const ground = { ok: g.ok, rope: !!me.rope, isGround: !!(me.rope && me.rope.ground) }
    // 建物: 一番近い建物の壁の真ん中あたり
    air(); const B = W.colliders.filter(o => o.kind === 'building' && o.y1 > 20).map(o => ({ o, d: Math.hypot(o.cx - me.x, o.cz - me.z) })).sort((a, b) => a.d - b.d)[0].o
    let bp = null; for (const [nx, nz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const s = scr(B.cx + nx * B.hw, Math.min(B.y1 - 3, 18), B.cz + nz * B.hl); if (s.ok) { bp = s; break } }
    let bld = null
    if (bp) { sky.dbg.pressWire(bp.sx, bp.sy); sky.dbg.step(1); bld = { rope: !!me.rope, isGround: !!(me.rope && me.rope.ground) } }
    // 地面に立って道をタップ
    sky.dbg.teleport(P.x, 0, P.z, 0); for (let i = 0; i < 10; i++) sky.dbg.step(1); for (let i = 0; i < 30; i++) sky.dbg.step(0); c.updateMatrixWorld()
    const g2 = scr(P.x, 0, P.z + 8); sky.dbg.pressWire(g2.sx, g2.sy); sky.dbg.step(1)
    const onGround = { isGround: !!(me.rope && me.rope.ground) }
    sky.dbg.teleport(P.x, 0, P.z, 0); sky.cam.userT = -1e9; sky.cam.pitch = 0.15; sky.dbg.step(2)
    return { ground, bld, onGround }
  })
  expect(r.ground.ok && r.ground.isGround && (!r.bld || (r.bld.rope && !r.bld.isGround)) && !r.onGround.isGround, JSON.stringify(r)); return r
})
await t('画面タッチ: 近くのビルに掛かる', async () => {
  const r = await p.evaluate(() => {
    const me = sky.me, c = sky.camera
    const W = sky.world.colliders.filter(o => o.kind === 'building').map(o => ({ o, d: Math.hypot(o.cx - me.x, o.cz - me.z) - Math.max(o.hw, o.hl) })).sort((a, b) => a.d - b.d)[0].o
    const tx = Math.max(W.cx - W.hw, Math.min(W.cx + W.hw, me.x)), tz = Math.max(W.cz - W.hl, Math.min(W.cz + W.hl, me.z))
    sky.dbg.teleport(me.x, 0, me.z, Math.atan2(tx - me.x, tz - me.z)); sky.dbg.step(40)
    const q = c.position.clone().set(tx, 14, tz).project(c)
    sky.dbg.pressWire((q.x * 0.5 + 0.5) * innerWidth, (-q.y * 0.5 + 0.5) * innerHeight); sky.dbg.step(2)
    return { hooked: !!sky.me.rope }
  })
  expect(r.hooked, r); return r
})
await t('壁に張り付いて待つと、落ちてきた人を受けとめる（抱え1・「キャッチ！」）', async () => {
  const r = await p.evaluate(() => {
    const f = sky.rd.fallers.find(f => f.state === 'warn' || f.state === 'fall'); const ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3
    sky.dbg.teleport(ex + f.nx * 4, 0, ez + f.nz * 4, Math.atan2(-f.nx, -f.nz))
    sky.dbg.keys.add('KeyW'); sky.dbg.step(60); sky.dbg.keys.delete('KeyW')
    let said = ''
    for (let i = 0; i < 300 && !sky.rd.carry.length; i++) sky.dbg.step(3)
    said = document.getElementById('say').textContent
    window.__juice = { hs: +sky.hitStop.toFixed(3), fl: +sky.flashA.toFixed(2), kick: +sky.fovKick.toFixed(2), op: +document.getElementById('hitflash').style.opacity }   // 同じ瞬間に測る（rAF が進むと消える）
    return { carry: sky.rd.carry.length, say: said, label: document.getElementById('cCarry').textContent }
  })
  expect(r.carry === 1 && /キャッチ/.test(r.say) && /抱え1/.test(r.label), r); return r
})
await t('受けとめた瞬間: ヒットストップ・光・視野が一瞬縮む（しっぽ取り v5 の演出）', async () => {
  const r = await p.evaluate(() => window.__juice)
  expect(r.hs >= 0.03 && r.hs <= 0.12 && r.fl > 0.5 && r.op > 0.5 && r.kick < -3, r); return r
})
await t('速さの線: 20m/s 未満では出ず、速いほど濃い。風の音も速さで大きくなる', async () => {
  const r = await p.evaluate(() => {
    const me = sky.me, out = {}
    for (const v of [10, 30, 40]) { sky.dbg.teleport(me.x, 30, me.z); me.grounded = false; me.vx = v; me.vy = 0; me.vz = 0; sky.dbg.step(0); out['k' + v] = +window.__speedK.toFixed(2) }   // 描くだけ（動かすと建物に当たって止まることがある）
    const c = document.getElementById('speedfx'), d = c.getContext('2d').getImageData(0, 0, c.width, c.height).data
    let lit = 0; for (let i = 3; i < d.length; i += 4 * 7) if (d[i] > 0) lit++
    out.lit = lit; sky.dbg.teleport(me.x, 0, me.z); sky.dbg.step(30)
    return out
  })
  expect(r.k10 === 0 && r.k30 > 0 && r.k40 > r.k30 && r.lit > 50, r); return r
})
await t('救護マットに着地すると数取器が001になる', async () => {
  const r = await p.evaluate(() => {
    const m = sky.rd.mats[0]; sky.dbg.teleport(m.x, m.y + 3, m.z); sky.me.grounded = false
    sky.dbg.step(60)
    return { saved: sky.rd.saved, num: document.getElementById('cNum').textContent, played: Snd.played.applause || 0 }
  })
  expect(r.saved === 1 && r.num === '001' && r.played >= 1, r); return r
})
await t('最後まで行くと感謝状が出る（画像の保存・Xのリンク）', async () => {
  await p.evaluate(() => { sky.dbg.step(60 * 92); sky.dbg.pause(false) }); await p.waitForTimeout(2500)
  const r = await p.evaluate(() => ({ mode: sky.mode, post: document.getElementById('btnPost').href, w: document.getElementById('cert').width, score: window.__lastScore }))
  expect(r.mode === 'result' && r.post.includes('twitter.com/intent') && r.w === 1080, r); return { score: r.score }
})
await p.screenshot({ path: `${ROOT}/shots/flow-result.png` })
await t('何もしない1回は最低の判定（0人・0点）', async () => {
  await p.click('#btnAgain'); await p.waitForTimeout(300)
  await p.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(60 * 92); sky.dbg.pause(false) }); await p.waitForTimeout(2500)
  const r = await p.evaluate(() => ({ mode: sky.mode, score: window.__lastScore, saved: sky.rd.saved, missed: sky.rd.missed }))
  expect(r.mode === 'result' && r.score === 0 && r.saved === 0 && r.missed >= 3, r); return r
})
await t('エンドレス（画面）: タイトルで選ぶと保存され、時計は経った秒を数え上げ、1人落とすと終わって感謝状が「続いた時間」になる', async () => {
  await p.click('#btnTitle'); await p.waitForTimeout(300)
  await p.click('.mode-btn[data-mode=endless]')
  const saved = await p.evaluate(() => ({ store: localStorage.getItem('catch.mode'), on: document.querySelector('.mode-btn[data-mode=endless]').classList.contains('on'), hint: !document.getElementById('modeHint').classList.contains('hidden') }))
  await p.click('#btnStart'); await p.waitForTimeout(300)
  const r = await p.evaluate(() => {
    sky.dbg.pause(true); sky.dbg.step(60 * 95)
    return { mode: sky.rd.mode, over: sky.rd.over, t: Math.round(sky.rd.t), watch: +document.getElementById('wNum').textContent, missed: sky.rd.missed }
  })
  await p.evaluate(() => sky.dbg.pause(false)); await p.waitForTimeout(3200)
  const res = await p.evaluate(() => ({ mode: sky.mode, post: decodeURIComponent(document.getElementById('btnPost').href) }))
  await p.evaluate(() => { localStorage.setItem('catch.mode', 'normal'); sky.setMode('normal') })
  expect(saved.store === 'endless' && saved.on && saved.hint && r.mode === 'endless' && r.over && r.missed === 1 && r.t < 95 && res.mode === 'result' && /エンドレス/.test(res.post), JSON.stringify({ saved, r, res })); return { endedAt: r.t, post: res.post.slice(-40) }
})
await t('音: 鳴らした回数が数えられ、テスト中は実際に無音', async () => {
  const r = await p.evaluate(() => ({ played: Object.keys(Snd.played).length, mute: window.__muteOk() }))
  expect(r.played >= 5 && r.mute, r); return r
})
await t('英語に切り替わる', async () => {
  await p.click('#btnTitle'); await p.click('#btnLang')
  const r = await p.evaluate(() => ({ start: document.getElementById('btnStart').textContent, lang: sky.lang, logo: document.querySelector('.logo').textContent }))
  expect(r.start === 'Go' && r.lang === 'en' && r.logo === 'Sky Catch', r)
  await p.click('#btnLang')
})
await t('エラーが出ていない（通しのあと）', async () => { expect(p.errs.length === 0, p.errs.join('|')) })
// ---- 落ちている間の黄色い光（2026-11-04 本人「落ちてる途中でもその場所を黄色く光らせて」）
// 画面の canvas の、人のまわりの黄色い画素を数える
const yellowAround = q => q.evaluate(() => {
  const f = window.__mk; const c = sky.renderer.domElement, gl = sky.renderer.getContext()
  sky.dbg.render(1)
  const V = sky.camera.position.constructor, v = new V(f.x, f.y + 0.7, f.z).project(sky.camera)
  const px = Math.round((v.x * 0.5 + 0.5) * c.width), py = Math.round((v.y * 0.5 + 0.5) * c.height), R = Math.round(c.height * 0.06)
  if (px < 0 || py < 0 || px > c.width || py > c.height) return { n: 0, share: 0, onScreen: false }
  const x0 = Math.max(0, px - R), y0 = Math.max(0, py - R), w = Math.min(c.width - x0, R * 2), h = Math.min(c.height - y0, R * 2)
  const buf = new Uint8Array(w * h * 4); gl.readPixels(x0, y0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, buf)
  let n = 0; for (let i = 0; i < buf.length; i += 4) if (buf[i] > 225 && buf[i + 1] > 175 && buf[i + 2] < 90) n++
  return { n, share: +(n / (w * h)).toFixed(3), onScreen: v.z < 1 && Math.abs(v.x) < 1 && Math.abs(v.y) < 1 }
})
await t('落下中の黄色い光: 9種すべてで、落ちている間ずっと人の位置に光がついてくる（柱・人の輪）。地面の落下地点にも輪。ぐらつき中も光る', async () => {
  const r = await p.evaluate(kinds => {
    sky.start(11); sky.dbg.pause(true); sky.rd.next = 1e9; sky.rd.fallers.length = 0
    const out = {}
    for (const kind of kinds) {
      sky.rd.fallers.length = 0
      const s = sky.world.colliders.find(o => o.kind === 'building' && o.y1 > 30)
      const nx = 1, nz = 0, fx = s.cx + s.hw + 1.3, fz = s.cz
      const f = { id: 900 + kinds.indexOf(kind), state: 'warn', t: 0, look: 1, reason: 0, kind, ph: 0, warnT: 0.2, x: fx - 0.8, z: fz, y: 34, fx, fz, top: 34, roof: s.y1, nx, nz, vy: 0, ground: 0 }
      sky.rd.fallers.push(f); sky.rd.lastFall = -99
      sky.dbg.teleport(fx + 60, 0, fz, -Math.PI / 2)
      sky.dbg.step(1)
      const w = sky.marks().find(m => m.id === f.id)
      const warnOk = !!w && Math.abs(w.beamX - fx) < 0.01 && Math.abs(w.ringX - fx) < 0.01 && Math.abs(w.haloY - (f.y + 0.7)) < 0.3
      for (let i = 0; i < 60 && f.state === 'warn'; i++) { sky.dbg.teleport(fx + 60, 0, fz, -Math.PI / 2); sky.dbg.step(1) }
      const samples = []
      for (let i = 0; i < 400 && f.state !== 'landed' && samples.length < 12; i++) {
        sky.dbg.teleport(fx + 60, 0, fz, -Math.PI / 2); sky.dbg.step(5)
        if (f.state !== 'fall') break
        const m = sky.marks().find(m => m.id === f.id)
        samples.push(m ? { dx: +Math.abs(m.haloX - f.x).toFixed(2), dz: +Math.abs(m.haloZ - f.z).toFixed(2), dy: +Math.abs(m.haloY - (f.y + 0.7)).toFixed(2), bx: +Math.abs(m.beamX - f.x).toFixed(2), bz: +Math.abs(m.beamZ - f.z).toFixed(2), op: +m.beamOpacity.toFixed(2), size: +m.haloSize.toFixed(1), ring: +Math.abs(m.ringX - f.fx).toFixed(2) } : null)
      }
      const ys = samples.filter(Boolean)
      out[kind] = { warnOk, n: samples.length, missing: samples.filter(x => !x).length, maxD: Math.max(...ys.map(a => Math.max(a.dx, a.dz, a.dy, a.bx, a.bz))), minOp: Math.min(...ys.map(a => a.op)), size: ys[0] && ys[0].size }
    }
    sky.rd.fallers.length = 0; sky.dbg.step(1); sky.dbg.pause(false)
    return out
  }, ['normal', 'cat', 'heavy', 'salary', 'selfie', 'ittan', 'kappa', 'karakasa', 'lover'])
  for (const [k, v] of Object.entries(r)) expect(v.warnOk && v.n >= 5 && v.missing === 0 && v.maxD < 0.3 && v.minOp >= 0.2, k + ' ' + JSON.stringify(v))
  return r
})
await t('落下中の黄色い光: 複数人なら全員分（前は急ぐ1人だけ）。抱えきれない時も消えない。受けとめた瞬間・地面に落ちた瞬間に、その人の光が消える', async () => {
  const r = await p.evaluate(() => {
    sky.start(12); sky.dbg.pause(true); sky.rd.next = 1e9; sky.rd.fallers.length = 0
    const s = sky.world.colliders.find(o => o.kind === 'building' && o.y1 > 30), me = sky.me
    const mk = (id, dz, y) => ({ id, state: 'fall', t: 0, look: 1, reason: 0, kind: 'normal', ph: 0, warnT: 1, x: s.cx + s.hw + 1.3, z: s.cz + dz, y, fx: s.cx + s.hw + 1.3, fz: s.cz + dz, top: y, roof: s.y1, nx: 1, nz: 0, vy: -1, ground: 0 })
    const a = mk(901, 0, 30), b = mk(902, 20, 30), c = mk(903, -20, 2)
    sky.rd.fallers.push(a, b, c)
    sky.dbg.teleport(a.x + 80, 0, a.z, -Math.PI / 2); sky.dbg.step(1)
    const ids = () => sky.marks().map(m => m.id).sort()
    const three = ids()
    // 抱えきれない時（carryMax）でも全員に光
    const full = sky.CATCH.carryMax; sky.rd.carry.push(...Array.from({ length: full }, (_, i) => ({ id: 800 + i, state: 'carried', kind: 'normal', slot: i, x: me.x, y: me.y, z: me.z, nx: 1, nz: 0, top: 1, look: 1, reason: 0, t: 0 })))
    sky.dbg.step(1); const whenFull = ids(); sky.rd.carry.length = 0
    // 地面に落ちる（c は 2m から）
    for (let i = 0; i < 120 && c.state === 'fall'; i++) { sky.dbg.teleport(a.x + 80, 0, a.z, -Math.PI / 2); sky.dbg.step(1) }
    const landedState = c.state, afterLand = ids()
    // 受けとめる: a の真横の空中へ
    sky.dbg.teleport(a.x + 1, a.y - 0.2, a.z, -Math.PI / 2); me.grounded = false; me.vy = 0; sky.dbg.step(1)
    const caughtState = a.state, afterCatch = ids()
    const left = sky.marks().length
    sky.rd.fallers.length = 0; sky.rd.carry.length = 0; sky.dbg.step(1); const none = sky.marks().length
    sky.dbg.pause(false)
    return { three, whenFull, landedState, afterLand, caughtState, afterCatch, left, none }
  })
  expect(r.three.length === 3 && r.whenFull.length === 3 && r.landedState === 'landed' && !r.afterLand.includes(903) && r.afterLand.length === 2 && r.caughtState === 'carried' && !r.afterCatch.includes(901) && r.afterCatch.includes(902) && r.none === 0, JSON.stringify(r)); return r
})
await t('落下中の黄色い光: 実際の画面に黄色が出ている（人のまわりの画素を数える。光を消すと減る）。100m 先でも輪の大きさが画面で保たれる', async () => {
  const set = (mode, dist) => p.evaluate(([mode, dist]) => {
    sky.start(13); sky.dbg.pause(true); sky.rd.next = 1e9; sky.rd.fallers.length = 0
    const s = sky.world.colliders.find(o => o.kind === 'building' && o.y1 > 30)
    const f = { id: 950, state: 'fall', t: 0, look: 1, reason: 0, kind: 'normal', ph: 0, warnT: 1, x: s.cx + s.hw + 1.3, z: s.cz, y: 26, fx: s.cx + s.hw + 1.3, fz: s.cz, top: 34, roof: s.y1, nx: 1, nz: 0, vy: 0, ground: 0 }
    sky.rd.fallers.push(f)
    const yaw = Math.atan2(f.x - (f.x + dist), 0)
    sky.dbg.teleport(f.x + dist, 0, f.z, yaw); sky.cam.hd = yaw; sky.cam.pitch = -0.32; sky.cam.userT = performance.now() + 1e8
    for (let i = 0; i < 30; i++) sky.dbg.step(0)
    window.__mk = { x: f.x, y: f.y, z: f.z }
    if (mode === 'off') sky.rd.fallers.length = 0   // 人ごと消して背景の黄色を数える
    sky.dbg.step(0)
  }, [mode, dist])
  await set('on', 45); const on = await yellowAround(p)
  await set('off', 45); const off = await yellowAround(p)
  await set('on', 110); const far = await yellowAround(p)
  await p.evaluate(() => { sky.rd.fallers.length = 0; sky.dbg.step(1); sky.dbg.pause(false) })
  expect(on.onScreen && far.onScreen && on.n > 300 && on.n > off.n + 250 && far.n > 150, JSON.stringify({ on, off, far })); return { on, off, far }
})
await p.close()

// ---------------------------------------------------------------- 6サイズ × 全画面
const SIZES = [[360, 640, 'small'], [390, 844, 'phone'], [844, 390, 'land'], [667, 375, 'land-se'], [768, 1024, 'tab'], [1440, 900, 'pc']]
for (const [w, h, name] of SIZES) {
  const touch = name !== 'pc'
  const q = await open(browser, { viewport: { width: w, height: h }, hasTouch: touch, isMobile: touch && name !== 'tab' })
  const views = {}
  await q.waitForTimeout(600)
  views.title = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-title.png` })
  await q.click('#btnHow'); views.how = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-how.png` }); await q.click('[data-close]')
  await q.click('#btnStart'); await q.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(60 * 4) }); views.play = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-play.png` })
  await q.evaluate(() => sky.dbg.pause(false))
  await q.click('#btnPause'); views.pause = await fit(q); await q.click('#btnResume')
  await q.evaluate(() => sky.showResult()); await q.waitForTimeout(500); views.result = await fit(q); await q.screenshot({ path: `${ROOT}/shots/fit-${name}-result.png` })
  for (const [v, r] of Object.entries(views)) await t(`一画面に収まる・重ならない ${name} ${w}x${h} ${v}`, async () => { expect(!r.over.length, r) })
  await t(`${name}: はみ出し・エラーなし`, async () => { const o = await overflow(q); expect(o.sw <= o.W && !o.bad.length && !q.errs.length, JSON.stringify(o) + q.errs.join('|')) })
  await q.close()
}
await browser.close()

// ---------------------------------------------------------------- WebKit（iPhone 相当）
const wb = await webkit.launch(), wp = await open(wb, { isMobile: true, hasTouch: true, deviceScaleFactor: 2 })
await t('WebKit: 2本指の touchmove を止める', async () => {
  const r = await wp.evaluate(() => { const e = new Event('touchmove', { cancelable: true, bubbles: true }); Object.defineProperty(e, 'touches', { value: [{}, {}] }); document.body.dispatchEvent(e); return e.defaultPrevented })
  expect(r, r)
})
await t('WebKit: タップで出動してスマホ操作が出る・実際には無音', async () => {
  await wp.tap('#btnStart'); await wp.waitForTimeout(1200)
  const r = await wp.evaluate(() => ({ mode: sky.mode, touch: !document.getElementById('touch').classList.contains('hidden'), mute: window.__muteOk() }))
  expect(r.mode === 'play' && r.touch && r.mute, r); return r
})
await t('WebKit: 左スティックは左下に固定（2026-11-03 本人「左スティックは固定で」）: 別の所を触っても出てこない・動かない／円に触れて倒すと走る／画面をなぞった指が円に入るとその時点から倒した扱い', async () => {
  const r = await wp.evaluate(async () => {
    const el = document.getElementById('stick'), cv = document.querySelector('#view canvas'), c0 = window.__stickCenter()
    const ev = (tg, type, id, cx, cy) => tg.dispatchEvent(new PointerEvent(type, { pointerId: id, clientX: cx, clientY: cy, bubbles: true, pointerType: 'touch' }))
    // 1) 左の広い所（円の外）を触る: スティックは出ない・動かない
    const fx = c0.x + c0.R * 2.2, fy = c0.y - c0.R * 2.2
    ev(cv, 'pointerdown', 11, fx, fy); const away = { held: el.classList.contains('held'), moved: Math.hypot(window.__stickCenter().x - c0.x, window.__stickCenter().y - c0.y) }; ev(window, 'pointerup', 11, fx, fy)
    // 2) 円の中を触って上へ倒す
    const p0 = [sky.me.x, sky.me.z]
    ev(el, 'pointerdown', 12, c0.x, c0.y); ev(window, 'pointermove', 12, c0.x, c0.y - 50)
    await new Promise(r => setTimeout(r, 1200))
    const d = Math.hypot(sky.me.x - p0[0], sky.me.z - p0[1]), c1 = window.__stickCenter()
    ev(window, 'pointerup', 12, c0.x, c0.y - 50)
    // 3) 外から指をすべらせて入る
    ev(cv, 'pointerdown', 13, c0.x + c0.R * 2.5, c0.y); for (let k = 2.4; k >= 0.3; k -= 0.3) ev(window, 'pointermove', 13, c0.x + c0.R * k, c0.y)
    const slid = el.classList.contains('held'); ev(window, 'pointerup', 13, c0.x, c0.y)
    return { away, moved: +d.toFixed(1), fixed: Math.hypot(c1.x - c0.x, c1.y - c0.y) < 1, slid, released: !el.classList.contains('held'), left: Math.round(c0.x), fromBottom: Math.round(innerHeight - c0.y) }
  })
  expect(!r.away.held && r.away.moved < 1 && r.moved > 3 && r.fixed && r.slid && r.released, JSON.stringify(r)); return r
})
await t('WebKit: 跳ぶボタンが無い・右下の大きいワイヤーボタンで掛かって、もう一回で離れる', async () => {
  const jump = await wp.$('.tbtn[data-k=jump]'), btn = await wp.$('.tbtn[data-k=wire]')
  expect(!jump && btn, { jump: !!jump, wire: !!btn })
  await wp.evaluate(() => { sky.me.rope = null }); await wp.tap('.tbtn[data-k=wire]'); await wp.waitForTimeout(300)
  const a = await wp.evaluate(() => !!sky.me.rope)
  await wp.tap('.tbtn[data-k=wire]'); await wp.waitForTimeout(300)
  const b = await wp.evaluate(() => !!sky.me.rope)
  expect(a && !b, { hooked: a, after: b }); return true
})
await t('WebKit: ローリングのボタンは地面にいる時だけ出て、押すと転がる（ワイヤー中・空中では消える）', async () => {
  await wp.evaluate(() => { sky.me.rope = null; sky.me.climbing = null; sky.me.y = sky.me.groundY || 0; sky.me.vy = 0; sky.me.grounded = true }); await wp.waitForTimeout(400)
  const onGround = await wp.evaluate(() => !document.querySelector('.tbtn[data-k=roll]').classList.contains('hidden'))
  await wp.tap('.tbtn[data-k=roll]'); await wp.waitForTimeout(120)
  const rolling = await wp.evaluate(() => ({ t: sky.me.rollT, v: Math.hypot(sky.me.vx, sky.me.vz) }))
  await wp.waitForTimeout(800)
  await wp.evaluate(() => { sky.me.y += 15; sky.me.grounded = false; sky.me.vy = 4 }); await wp.waitForTimeout(120)
  const inAir = await wp.evaluate(() => !document.querySelector('.tbtn[data-k=roll]').classList.contains('hidden'))
  expect(onGround && rolling.v > 10 && !inAir, { onGround, rolling, inAir }); return { speed: +rolling.v.toFixed(1) }
})
await t('視点: setView で一人称↔三人称（ボタンは隠している。詳しくは _fp.mjs）', async () => {
  await wp.evaluate(() => { sky.me.rope = null; sky.setView('third') }); await wp.waitForTimeout(100)
  const a = await wp.evaluate(() => sky.dbg.model.group.visible)
  await wp.evaluate(() => sky.setView('first')); await wp.waitForTimeout(100)
  const b = await wp.evaluate(() => ({ body: sky.dbg.model.group.visible, near: sky.camera.near }))
  await wp.evaluate(() => sky.setView('third')); await wp.waitForTimeout(100)
  const c = await wp.evaluate(() => ({ body: sky.dbg.model.group.visible, near: sky.camera.near }))
  expect(a && !b.body && b.near === 0.15 && c.body && c.near === 0.3, { a, b, c }); return true
})
await t('WebKit: エラーなし', async () => { expect(wp.errs.length === 0, wp.errs.join('|')) })
await wb.close()
server.kill()
await t('向き: カメラを0〜720°以上回しても、地上・空中・ワイヤー中でスティックの上下左右＝画面の上下左右（84通り。2026-11-02 しっぽ取りで見つかった不具合）', () => {
  const out = execFileSync(process.execPath, ['_dir.mjs'], { cwd: ROOT, encoding: 'utf8', timeout: 600000 })
  const j = JSON.parse(out.trim().split('\n').pop()); expect(j.ng === 0 && !j.errs.length, out.slice(-400)); return { cases: j.total }
})
console.log(results.join('\n'))
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
