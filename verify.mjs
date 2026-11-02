// 空中キャッチの検証。node verify.mjs（テスト中は無音: mute.mjs）
import { chromium, webkit } from 'playwright'
import { spawn, execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
import { createWorld } from './shared/track.js'
import { createRunner, stepRunner, RUN } from './shared/runner.js'
import { CATCH, createRound, stepCatch } from './shared/catch.js'
import { play } from './tools/sim.mjs'
const ROOT = import.meta.dirname
mkdirSync(ROOT + '/shots', { recursive: true })
const PORT = 5394
const server = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const URL0 = `http://localhost:${PORT}/`
let pass = 0, fail = 0
const results = []
async function t(name, fn) {
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
  await p.goto(URL0); await p.waitForFunction(() => window.__catchReady, null, { timeout: 20000 })
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
await t('ワイヤー: 届く距離は60〜85m。届かない所は外れて、自動で別の所にも掛からない', () => {
  expect(RUN.wireRange >= 60 && RUN.wireRange <= 85, RUN.wireRange)
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 700, yaw: 0 } })
  stepRunner(r, { wire: true, wireAt: { x: 40, y: 60, z: 790 } }, dt, world)
  const miss = r.events.find(e => e.t === 'wireMiss')
  expect(!r.rope && miss && miss.far, r.events); return { range: RUN.wireRange, d: Math.round(miss.d) }
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
await t('壁で跳ぶと離れる', () => {
  const { r } = onWall()
  stepRunner(r, { jump: true }, dt, world); stepRunner(r, {}, dt, world)
  expect(!r.climbing && !r.grounded, { cl: !!r.climbing }); return true
})
await t('落ちてくる人: 90秒で10人以上。落ちる真下の地面で待ち構えても受けとめられない', () => {
  const rd = createRound(world, 2)
  const r = createRunner({ id: 'a', spawn: { x: 0, y: 0, z: 814, yaw: 0 } })
  let fell = 0
  while (!rd.over) {
    stepCatch(rd, r, dt, world); for (const e of rd.events) if (e.t === 'fall') fell++; rd.events.length = 0
    const f = rd.fallers.find(f => f.state === 'fall'); if (f) Object.assign(r, { x: f.x, z: f.z, y: f.ground, grounded: true, groundY: f.ground })
  }
  expect(rd.n >= 10 && fell >= 9 && !rd.caught, { n: rd.n, fell, caught: rd.caught }); return { spawned: rd.n }
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
await t('bot: ワイヤーを使う人は走るだけより多く救い、何もしないと0人（12回ずつ）', () => {
  const avg = k => { let s = 0, sv = 0; for (let i = 1; i <= 12; i++) { const g = play(k, i); s += g.score; sv += g.saved } return { score: Math.round(s / 12), saved: +(sv / 12).toFixed(1) } }
  const sk = avg('skilled'), cl = avg('clumsy'), wk = avg('walker'), id = avg('idle')
  expect(sk.saved > wk.saved * 1.5 && cl.saved > wk.saved * 1.3 && id.saved === 0 && cl.saved >= 1.5, { sk, cl, wk, id })
  return { skilled: sk, clumsy: cl, walker: wk, idle: id }
})
await t('AI臭さチェック NG 0', () => {
  try { execFileSync(process.execPath, [ROOT + '/../_shared/ai_tells.mjs', ROOT], { encoding: 'utf8' }); return true }
  catch (e) { throw new Error((e.stdout || '').split('\n').filter(l => /NG/.test(l)).join(' / ')) }
})

// ---------------------------------------------------------------- ブラウザ（Chromium）
const browser = await chromium.launch({ ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, ...GL] })
const p = await open(browser)
await t('起動時にエラーが出ない', async () => { expect(p.errs.length === 0, p.errs.join('|')) })
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
    return { carry: sky.rd.carry.length, say: said, label: document.getElementById('cCarry').textContent }
  })
  expect(r.carry === 1 && /キャッチ/.test(r.say) && /抱え1/.test(r.label), r); return r
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
  expect(r.mode === 'result' && r.score === 0 && r.saved === 0 && r.missed >= 8, r); return r
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
await t('WebKit: スティックで走る', async () => {
  const box = await wp.locator('#stick').boundingBox()
  const x0 = await wp.evaluate(() => [sky.me.x, sky.me.z])
  await wp.evaluate(({ x, y }) => {
    const el = document.getElementById('stick')
    const ev = (type, cx, cy) => el.dispatchEvent(new PointerEvent(type, { pointerId: 7, clientX: cx, clientY: cy, bubbles: true, pointerType: 'touch' }))
    ev('pointerdown', x, y); ev('pointermove', x, y - 50)
  }, { x: box.x + box.width / 2, y: box.y + box.height / 2 })
  await wp.waitForTimeout(1200)
  const x1 = await wp.evaluate(() => [sky.me.x, sky.me.z])
  const d = Math.hypot(x1[0] - x0[0], x1[1] - x0[1])
  expect(d > 3, d); return { moved: +d.toFixed(1) }
})
await t('WebKit: エラーなし', async () => { expect(wp.errs.length === 0, wp.errs.join('|')) })
await wb.close()
server.kill()
console.log(results.join('\n'))
console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
