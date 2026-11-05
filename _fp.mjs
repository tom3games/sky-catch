// 一人称視点の検証と撮影。node _fp.mjs（テスト中は無音: mute.mjs）
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
const ROOT = import.meta.dirname, PORT = 5395
const srv = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const URL0 = `http://localhost:${PORT}/?first`   // 一人称は本番で使っていない。残したコードが壊れていないかだけ見る
let pass = 0, fail = 0
const ok = (name, c, info) => { c ? pass++ : fail++; console.log(`${c ? 'ok  ' : 'FAIL'} ${name}${info !== undefined ? '  ' + JSON.stringify(info) : ''}`) }
const SIZES = [[360, 640], [390, 844], [430, 932]]
const CONTROLS = ['#counter', '#watch', '#btnPause', '#arrow', '#heightBox', '.stick', '.tbtn[data-k=wire]', '.tbtn[data-k=roll]', '#chain']
const layout = p => p.evaluate(sel => {
  const r = { left: 1, right: 2, top: 1, bottom: 2, width: 64, height: 46 }, W = innerWidth, H = innerHeight, hits = []
  for (const s of sel) { const el = document.querySelector(s); if (!el || el.closest('.hidden') || el.classList.contains('hidden')) continue; const a = el.getBoundingClientRect(); if (a.width && a.left < r.right && r.left < a.right && a.top < r.bottom && r.top < a.bottom) hits.push(s) }
  const de = document.documentElement
  return { w: r.width, h: r.height, inside: r.left >= 0 && r.right <= W && r.top >= 0 && r.bottom <= H, hits, over: de.scrollWidth > W || de.scrollHeight > H + 1 }
}, CONTROLS)

for (const [name, bt] of [['chromium', chromium], ['webkit', webkit]]) {
  const b = await bt.launch(bt === chromium ? { ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, '--use-angle=metal', '--enable-unsafe-swiftshader'] } : {})
  const ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 })
  await muteContext(ctx)
  const p = await ctx.newPage(), errs = []
  p.on('pageerror', e => errs.push('pageerror ' + e.message))
  p.on('console', m => { if (m.type() === 'error' && !/GL Driver|WebGL|GPU stall/.test(m.text())) errs.push('console ' + m.text()) })
  p.on('requestfailed', r => { if (!/fonts\.(googleapis|gstatic)/.test(r.url())) errs.push('reqfail ' + r.url()) })
  await ctx.addInitScript(() => { if (!sessionStorage.fpInit) { sessionStorage.fpInit = 1; try { localStorage.removeItem('catch.view') } catch (e) {} } })
  await p.goto(URL0)
  await p.waitForFunction(() => window.__catchReady, null, { timeout: 60000 })
  const N = s => `[${name}] ${s}`

  ok(N('?first の時だけ一人称・切り替えボタンは出さない'), await p.evaluate(() => sky.view === 'first' && getComputedStyle(document.getElementById('btnView')).display === 'none'))
  await p.evaluate(() => sky.setView('third'))   // 下の検証は切り替えの動きも見る
  await p.evaluate(() => sky.start(5)); await p.waitForTimeout(300)
  const th0 = await p.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(30); const c = sky.camera.position, m = sky.me; return { d: Math.hypot(c.x - m.x, c.y - m.y - 1.6, c.z - m.z), body: sky.dbg.model.group.visible, near: sky.camera.near } })
  ok(N('三人称: 体が見えてカメラは離れている'), th0.body && th0.d > 2 && th0.near === 0.3, th0)

  // 実タップで切替（カメラとワイヤーに漏れない）
  await p.evaluate(() => sky.setView(sky.view === 'first' ? 'third' : 'first')); await p.waitForTimeout(80)
  const fp0 = await p.evaluate(() => { sky.dbg.step(2); const c = sky.camera.position, m = sky.me; return { view: sky.view, store: localStorage.getItem('catch.view'), d: Math.hypot(c.x - m.x, c.y - m.y - 1.6, c.z - m.z), body: sky.dbg.model.group.visible, near: sky.camera.near, arm: sky.fpArm.g.visible, rope: !!m.rope, label: document.getElementById('viewNow').textContent } })
  ok(N('タップで一人称: 目の高さ・体なし・near 0.15・保存・ワイヤーに漏れない'), fp0.view === 'first' && fp0.store === 'first' && fp0.d < 0.05 && !fp0.body && fp0.near === 0.15 && fp0.arm && !fp0.rope && fp0.label === '一人称', fp0)

  // 画面の中心をタップ → 掛かるのは画面の中心に見える建物
  const center = await p.evaluate(() => {
    const f = sky.rd.fallers[0] || null
    sky.dbg.step(240)
    const g = sky.rd.fallers[0], ex = g.fx + g.nx * 22, ez = g.fz + g.nz * 22
    sky.dbg.teleport(ex, 12, ez); sky.me.grounded = false; sky.me.vy = 0
    sky.cam.hd = Math.atan2(-g.nx, -g.nz); sky.cam.pitch = -0.5; sky.dbg.step(1)
    const o = sky.camera.position.clone(), d = sky.camera.getWorldDirection(o.clone())
    sky.dbg.pressWire(innerWidth / 2, innerHeight / 2); sky.dbg.step(1)
    const r = sky.me.rope; if (!r) return { rope: false, ev: sky.log.slice(-3) }
    const dx = r.x - o.x, dy = r.y - o.y, dz = r.z - o.z, t = dx * d.x + dy * d.y + dz * d.z
    return { rope: true, off: Math.hypot(dx - d.x * t, dy - d.y * t, dz - d.z * t), t }
  })
  ok(N('画面の中心のタップ: 光線の上に掛かる'), center.rope && center.off < 2.0, center)

  // ワイヤーの根元が目の近く、傾きが小さい
  const swing = await p.evaluate(() => {
    let maxBank = 0, maxRoot = 0, maxEye = 0
    for (let i = 0; i < 90 && sky.me.rope; i++) {
      sky.dbg.step(1); maxBank = Math.max(maxBank, Math.abs(sky.cam.bank || 0))
      const c = sky.camera.position, m = sky.me
      maxRoot = Math.max(maxRoot, c.distanceTo(sky.ropeMesh.position)); maxEye = Math.max(maxEye, Math.hypot(c.x - m.x, c.y - m.y - 1.6, c.z - m.z))
    }
    return { maxBank, maxRoot, maxEye, rope: !!sky.me.rope, vis: sky.ropeMesh.visible }
  })
  ok(N('スイング: 傾き 0.034 以下・ワイヤーの根元 0.8m 以内・目は頭に付いたまま'), swing.maxBank <= 0.034 && swing.maxRoot < 0.8 && swing.maxEye < 0.5, swing)

  // 空中で落ちてくる人を見上げて撮る
  await p.evaluate(() => {
    sky.dbg.step(1)
    if (sky.me.rope) sky.dbg.wireAuto(), sky.dbg.step(1)
    for (let i = 0; i < 400 && !sky.rd.fallers.some(f => f.state === 'fall'); i++) sky.dbg.step(2)
    const g = sky.rd.fallers.find(f => f.state === 'fall') || sky.rd.fallers[0]
    sky.dbg.teleport(g.x + g.nx * 16, Math.max(8, g.y - 8), g.z + g.nz * 16); sky.me.grounded = false
    sky.dbg.step(1)
    const dx = g.x - sky.me.x, dz = g.z - sky.me.z, dy = g.y + 0.7 - (sky.me.y + 1.6)
    sky.cam.hd = Math.atan2(dx, dz); sky.cam.pitch = -Math.atan2(dy, Math.hypot(dx, dz)); sky.dbg.wireAuto(); sky.dbg.step(1)
  })
  await p.waitForTimeout(150)
  const seen = await p.evaluate(() => {
    const g = sky.rd.fallers.find(f => f.state === 'fall') || sky.rd.fallers[0], v = g && g.x
    const m = sky.marks().find(k => k.id === g.id), q = sky.camera.position.clone().set(m.haloX, m.haloY, m.haloZ).project(sky.camera)
    return { state: g.state, ndc: [q.x, q.y], rope: !!sky.me.rope, haloSize: m.haloSize }
  })
  ok(N('空中: 落ちている人の黄色い輪が画面の中'), Math.abs(seen.ndc[0]) < 1 && Math.abs(seen.ndc[1]) < 1, seen)
  if (name === 'chromium') await p.screenshot({ path: 'shots/fp-air.png' })

  // 近づいても黄色い輪が画面を埋めない・受けとめる
  const near = await p.evaluate(() => {
    const g = sky.rd.fallers.find(f => f.state === 'fall') || sky.rd.fallers[0]
    sky.dbg.teleport(g.x + g.nx * 6.5, Math.max(8, g.y - 5), g.z + g.nz * 6.5); sky.me.grounded = false; sky.dbg.step(1)
    const m = sky.marks().find(k => k.id === g.id), c = sky.camera.position, dH = Math.hypot(m.haloX - c.x, m.haloY - c.y, m.haloZ - c.z)
    return { dH, size: m.haloSize, frac: m.haloSize / (2 * dH * Math.tan(sky.camera.fov * Math.PI / 360)) }
  })
  ok(N('近くの黄色い輪: 画面の高さの 40% 以下'), near.frac < 0.4, near)
  await p.screenshot({ path: `shots/fp-near-${name}.png` })
  const caught = await p.evaluate(() => {
    const g = sky.rd.fallers.find(f => f.state === 'fall') || sky.rd.fallers[0], before = sky.rd.carry.length
    sky.dbg.teleport(g.x + 1, Math.max(8, g.y - 1), g.z + 1); sky.me.grounded = false
    for (let i = 0; i < 60 && sky.rd.carry.length === before; i++) { sky.me.vy = 0; sky.dbg.step(1) }
    sky.dbg.step(10)
    const car = sky.rd.carry.length, g0 = sky.rd.fallers.find(f => f.state === 'carried')
    return { car, body: sky.dbg.model.group.visible }
  })
  ok(N('一人称で空中の受けとめ: 抱えて、抱えた人も描かない'), caught.car >= 1 && !caught.body, caught)
  const flash = await p.evaluate(() => ({ sf: typeof window.__speedK, fovK: sky.fovKick }))

  // 壁に張り付く
  await p.evaluate(() => {
    const g = sky.rd.fallers.find(f => f.state !== 'carried' && f.state !== 'missed') || sky.rd.fallers[0]
    const yaw = Math.atan2(-g.nx, -g.nz), ex = g.fx - g.nx * 1.3, ez = g.fz - g.nz * 1.3
    sky.dbg.teleport(ex + g.nx * 5, 0, ez + g.nz * 5, yaw); sky.me.grounded = true
    sky.cam.hd = yaw; sky.cam.pitch = 0.0
    sky.dbg.keys.add('KeyW'); sky.dbg.step(80); sky.dbg.keys.delete('KeyW'); sky.dbg.step(20)
  })
  await p.waitForTimeout(120)
  const wall = await p.evaluate(() => {
    const c = sky.camera.position, m = sky.me
    let gap = 1e9
    for (const o of sky.world.nearby(c.x, c.z)) { if (o.slab || o.kind === 'bound' || o.y0 == null || c.y < o.y0 || c.y > o.y1) continue
      const cs = Math.cos(o.yaw || 0), sn = Math.sin(o.yaw || 0), dx = c.x - o.cx, dz = c.z - o.cz
      gap = Math.min(gap, Math.max(Math.abs(dx * cs - dz * sn) - o.hw, Math.abs(dx * sn + dz * cs) - o.hl)) }
    return { climbing: !!m.climbing, gap, near: sky.camera.near, aim: sky.aimMark.visible, y: m.y, pitch: sky.cam.pitch }
  })
  ok(N('壁: カメラは壁から 0.25m 以上外（near 0.15 で抜けない）・壁を見ていたら上を向く'), wall.climbing && wall.gap >= 0.25 && wall.pitch < -0.4, wall)
  if (name === 'chromium') await p.screenshot({ path: 'shots/fp-wall.png' })
  // 壁の角: 頭を無理に建物の中へ置いても外へ押し戻す
  const pushed = await p.evaluate(() => {
    const o = sky.world.nearby(sky.me.x, sky.me.z).find(k => !k.slab && k.kind !== 'bound' && k.y0 != null && k.y1 > 5)
    if (!o) return null
    Object.assign(sky.me, { x: o.cx + 0.01, z: o.cz + 0.01, y: Math.min(o.y1 - 3, 8), vx: 0, vy: 0, vz: 0, climbing: null, rope: null })
    sky.dbg.render(1); const c = sky.camera.position
    const cs = Math.cos(o.yaw || 0), sn = Math.sin(o.yaw || 0), dx = c.x - o.cx, dz = c.z - o.cz
    return { gap: Math.max(Math.abs(dx * cs - dz * sn) - o.hw, Math.abs(dx * sn + dz * cs) - o.hl) }
  })
  ok(N('頭が建物の中でもカメラは外'), pushed && pushed.gap >= 0.25, pushed)

  // 大きいボタンの狙い: 目印の所に掛かる。どれくらい画面に入るかも数える
  const aim = await p.evaluate(() => {
    const out = { n: 0, match: 0, onScreen: 0, maxOff: 0 }
    const m = sky.rd.mats[0]
    for (let i = 0; i < 24; i++) {
      const a = i / 24 * Math.PI * 2, R = 10 + (i % 4) * 25
      sky.dbg.teleport(m.x + Math.sin(a) * R, 14, m.z + Math.cos(a) * R); sky.me.grounded = false
      sky.cam.hd = a * 3.1; sky.cam.pitch = 0.05; sky.dbg.render(1); sky.dbg.step(1); sky.dbg.render(4)   // カメラを描いてから入力を読む（実際のループと同じ順）
      if (!sky.aimMark.visible) continue
      const pt = sky.aimMark.position.clone(), q = pt.clone().project(sky.camera)
      out.n++; if (q.z < 1 && Math.abs(q.x) < 1 && Math.abs(q.y) < 1) out.onScreen++
      sky.dbg.wireAuto(); sky.dbg.step(1)
      if (sky.me.rope) { const off = Math.hypot(sky.me.rope.x - pt.x, sky.me.rope.y - pt.y, sky.me.rope.z - pt.z); out.maxOff = Math.max(out.maxOff, off); if (off < 5) out.match++ }
    }
    return out
  })
  ok(N('大きいボタン: 目印の位置に掛かる（ずれ 5m 未満が全部）'), aim.n >= 10 && aim.match === aim.n, aim)
  // 建物を見ている時は、目印（掛かる所）が画面の中に入る
  const facing = await p.evaluate(() => {
    const out = { n: 0, onScreen: 0, off: [] }, m = sky.rd.mats[0]
    const bs = sky.world.colliders.filter(o => o.kind === 'building' && o.y1 > 25).sort((u, w) => Math.hypot(u.cx - m.x, u.cz - m.z) - Math.hypot(w.cx - m.x, w.cz - m.z)).slice(0, 30)
    for (const o of bs) for (const [sx, sz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const x = o.cx + sx * (o.hw + 22), z = o.cz + sz * (o.hl + 22)
      if (sky.world.nearby(x, z).some(k => !k.slab && k.kind !== 'bound' && k.y0 != null && Math.abs(x - k.cx) < k.hw + 1 && Math.abs(z - k.cz) < k.hl + 1)) continue
      if (o.yaw) continue
      sky.dbg.teleport(x, 12, z); sky.me.grounded = false
      sky.cam.hd = Math.atan2(-sx, -sz); sky.cam.pitch = -0.15
      sky.dbg.render(1); sky.dbg.step(1); sky.dbg.render(4)
      if (!sky.aimMark.visible) continue
      const q = sky.aimMark.position.clone().project(sky.camera)
      out.n++; if (q.z < 1 && Math.abs(q.x) < 1 && Math.abs(q.y) < 1) out.onScreen++; else if (out.off.length < 4) out.off.push([+q.x.toFixed(2), +q.y.toFixed(2)])
    }
    return out
  })
  ok(N('建物を見ている時: 目印が 8 割以上画面の中'), facing.n >= 10 && facing.onScreen / facing.n >= 0.8, facing)

  // 実際の指: スワイプで見回す（ワイヤーに化けない）・画面のタップで掛かる・スティックの向きが画面と合う
  await p.evaluate(() => { const g = sky.rd.fallers[0]; sky.dbg.teleport(g.fx + g.nx * 22, 12, g.fz + g.nz * 22); sky.me.grounded = false; sky.cam.hd = Math.atan2(-g.nx, -g.nz); sky.cam.pitch = -0.5; sky.dbg.step(1) })
  const look0 = await p.evaluate(() => { const d = sky.camera.getWorldDirection(sky.camera.position.clone()); return { x: d.x, y: d.y, z: d.z, hd: sky.cam.hd } })
  await p.mouse.move(200, 500); await p.mouse.down(); await p.mouse.move(150, 460, { steps: 4 }); await p.mouse.up()
  const look1 = await p.evaluate(() => { sky.dbg.step(1); sky.dbg.render(1); const d = sky.camera.getWorldDirection(sky.camera.position.clone()); return { x: d.x, y: d.y, z: d.z, hd: sky.cam.hd, rope: !!sky.me.rope } })
  ok(N('スワイプ: 視線が動いて上を向き、ワイヤーは出ない'), Math.abs(look1.hd - look0.hd) > 0.2 && look1.y > look0.y && !look1.rope, { dHd: look1.hd - look0.hd, dy: look1.y - look0.y })
  const realTap = await (async () => {
    await p.evaluate(() => { const g = sky.rd.fallers[0]; sky.dbg.teleport(g.fx + g.nx * 22, 12, g.fz + g.nz * 22); sky.me.grounded = false; sky.cam.hd = Math.atan2(-g.nx, -g.nz); sky.cam.pitch = -0.5; sky.dbg.step(1) })
    const ray = await p.evaluate(() => { const o = sky.camera.position, d = sky.camera.getWorldDirection(o.clone()); return { o: [o.x, o.y, o.z], d: [d.x, d.y, d.z], W: innerWidth, H: innerHeight } })
    await p.touchscreen.tap(ray.W / 2, ray.H / 2); await p.waitForTimeout(50)
    return p.evaluate(({ o, d }) => { sky.dbg.step(1); const r = sky.me.rope; if (!r) return { rope: false }; const a = [r.x - o[0], r.y - o[1], r.z - o[2]], t = a[0] * d[0] + a[1] * d[1] + a[2] * d[2]; return { rope: true, off: Math.hypot(a[0] - d[0] * t, a[1] - d[1] * t, a[2] - d[2] * t), t } }, ray)
  })()
  ok(N('実タップ: 画面の中心に見える所へ掛かる'), realTap.rope && realTap.off < 1.0, realTap)
  await p.waitForTimeout(100)
  if (name === 'chromium') await p.screenshot({ path: 'shots/fp-swing.png' })
  const dirs = await p.evaluate(() => {
    let ng = 0, n = 0; const m = sky.rd.mats[0]
    for (const hd of [0, 1.2, 2.6, 4, 5.5]) for (const pt of [-1.25, -0.15, 0.8]) for (const [sx, sy] of [[0, -1], [0, 1], [1, 0], [-1, 0]]) {
      sky.dbg.teleport(m.x, 14, m.z - 6); sky.me.grounded = false; sky.cam.hd = hd; sky.cam.pitch = pt; sky.dbg.render(1)
      sky.dbg.stick.id = 99; sky.dbg.stick.x = sx; sky.dbg.stick.y = sy; sky.dbg.step(20); sky.dbg.stick.id = null; sky.dbg.stick.x = sky.dbg.stick.y = 0
      const e = sky.camera.matrixWorld.elements, rl = Math.hypot(e[0], e[2]), fl = Math.hypot(e[8], e[10]), v = sky.me
      const r = (v.vx * e[0] + v.vz * e[2]) / rl, f = -(v.vx * e[8] + v.vz * e[10]) / fl; n++
      if (sx ? Math.sign(r) !== sx : Math.sign(f) !== -sy) ng++
    }
    return { n, ng }
  })
  ok(N('スティックの上下左右＝画面の上下左右（一人称）'), dirs.ng === 0, dirs)

  // 三人称へ戻す
  await p.evaluate(() => { const m = sky.rd.mats[0]; sky.dbg.teleport(m.x, m.y + 1, m.z - 6); sky.me.grounded = false; sky.dbg.step(30); sky.dbg.pause(false) })
  await p.waitForTimeout(100)
  await p.evaluate(() => sky.setView(sky.view === 'first' ? 'third' : 'first')); await p.waitForTimeout(900)
  const back = await p.evaluate(() => { const c = sky.camera.position, m = sky.me; return { view: sky.view, store: localStorage.getItem('catch.view'), d: Math.hypot(c.x - m.x, c.y - m.y - 1.6, c.z - m.z), body: sky.dbg.model.group.visible, near: sky.camera.near, arm: sky.fpArm.g.visible, label: document.getElementById('viewNow').textContent, geo: sky.ropeMesh.visible } })
  ok(N('三人称へ戻る: 体が見え・カメラが離れ・near 0.3・腕なし'), back.view === 'third' && back.store === 'third' && back.body && back.d > 2 && back.near === 0.3 && !back.arm && back.label === '三人称', back)
  if (name === 'chromium') await p.screenshot({ path: 'shots/fp-back-third.png' })

  // 覚える（読み込み直し）・タイトルは三人称のまま
  await p.evaluate(() => sky.setView(sky.view === 'first' ? 'third' : 'first')); await p.reload(); await p.waitForFunction(() => window.__catchReady, null, { timeout: 60000 })
  const kept = await p.evaluate(() => ({ view: sky.view, fp: sky.fpOn, body: sky.dbg.model.group.visible }))
  ok(N('読み込み直しても一人称を覚える・タイトルでは体を描く'), kept.view === 'first' && !kept.fp && kept.body, kept)

  // 3 サイズの配置
  for (const [w, h] of SIZES) {
    await p.setViewportSize({ width: w, height: h }); await p.waitForTimeout(150)
    await p.evaluate(() => { if (sky.mode !== 'play') sky.start(5); sky.dbg.pause(false) }); await p.waitForTimeout(250)
    await p.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(120); const m = sky.rd.mats[0]; sky.dbg.teleport(m.x, m.y, m.z - 6); sky.me.grounded = true; sky.dbg.step(3) })
    const l = await layout(p)
    ok(N(`配置 ${w}x${h}: 44px 以上・画面内・重ならない・はみ出さない`), l.w >= 44 && l.h >= 44 && l.inside && !l.hits.length && !l.over, l)
    if (name === 'chromium') await p.screenshot({ path: `shots/fp-play-${w}x${h}.png` })
  }
  await p.setViewportSize({ width: 390, height: 844 })

  // 感謝状の写真には隊員が写る（一人称のままで受けとめて確かめる）
  const cert = await p.evaluate(() => {
    const g = sky.rd.fallers[0]
    for (let i = 0; i < 400 && !sky.rd.fallers.some(f => f.state === 'fall'); i++) sky.dbg.step(2)
    const f = sky.rd.fallers.find(k => k.state === 'fall'), before = sky.rd.carry.length
    if (!f) return { fall: false }
    sky.dbg.teleport(f.x + 1, Math.max(8, f.y - 1), f.z + 1); sky.me.grounded = false
    for (let i = 0; i < 60 && sky.rd.carry.length === before; i++) { sky.me.vy = 0; sky.dbg.step(1) }
    sky.dbg.step(3)
    const c = sky.rd.carry.length, body = sky.dbg.model.group.visible, arm = sky.fpArm.g.visible
    sky.showResult(); return { c, body, arm }
  })
  await p.waitForTimeout(600)
  ok(N('写真のあとも一人称の表示に戻っている'), cert.c >= 1 && !cert.body && cert.arm, cert)
  const after = await p.evaluate(() => ({ body: sky.dbg.model.group.visible, arm: sky.fpArm.g.visible, near: sky.camera.near, mode: sky.mode }))
  ok(N('結果画面では一人称を解く'), after.body && !after.arm && after.mode === 'result', after)
  if (name === 'chromium') await p.screenshot({ path: 'shots/fp-cert.png' })
  await p.evaluate(() => { sky.dbg.pause(false); localStorage.removeItem('catch.view') })

  const mute = await p.evaluate(() => window.__muteOk())
  ok(N('__muteOk'), mute === true)
  ok(N('エラー 0'), errs.length === 0, errs.slice(0, 5))
  await b.close()
}
srv.kill()
console.log(`\n${pass} ok / ${fail} fail`)
process.exit(fail ? 1 : 0)
