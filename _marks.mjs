// 落ちている人の黄色い光を見る（検証の途中で目で見る用）。node _marks.mjs [webkit]
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
const ROOT = import.meta.dirname; mkdirSync(ROOT + '/shots/marks', { recursive: true })
const PORT = 5398, wk = process.argv[2] === 'webkit', tag = wk ? 'wk' : 'cr'
const srv = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const b = wk ? await webkit.launch() : await chromium.launch({ ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'], channel: 'chromium' })
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, locale: 'ja-JP', deviceScaleFactor: 2, hasTouch: true, ...(wk ? {} : { isMobile: true }) }); await muteContext(ctx)
const p = await ctx.newPage(); const errs = []
p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) })
await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__catchReady, null, { timeout: 60000 }); await p.waitForTimeout(1200)
await p.evaluate(() => sky.start(8)); await p.waitForTimeout(500)
const shot = async (name, dist, opt = {}) => {
  await p.evaluate(([dist, opt]) => {
    sky.dbg.pause(true); sky.rd.next = 1e9; sky.rd.fallers.length = 0
    const s = sky.world.colliders.find(o => o.kind === 'building' && o.y1 > 40 && Math.abs(o.cz - 760) < 400)
    const mk = (id, kind, dz, y) => ({ id, state: 'fall', t: 0, look: id % 6, reason: 0, kind, ph: id, warnT: 1, x: s.cx + s.hw + 1.3, z: s.cz + dz, y, fx: s.cx + s.hw + 1.3, fz: s.cz + dz, top: 40, roof: s.y1, nx: 1, nz: 0, vy: 0, ground: 0 })
    sky.rd.fallers.push(mk(1, opt.kind || 'normal', 0, opt.y || 26)); if (opt.two) { sky.rd.fallers.push(mk(2, 'ittan', 16, 34)); sky.rd.fallers.push(mk(3, 'cat', -16, 14)) }
    const x = s.cx + s.hw + 1.3 + dist, z = s.cz + (opt.side || 0), yaw = Math.atan2(-dist, -(opt.side || 0))
    sky.dbg.teleport(x, 0, z, yaw); sky.cam.hd = yaw; sky.cam.pitch = opt.pitch ?? -0.32; sky.cam.userT = performance.now() + 1e8
    if (opt.dark) { sky.renderer.toneMappingExposure = 0.22; sky.scene.environmentIntensity = 0.25; sky.scene.backgroundIntensity = 0.2 }
    sky.dbg.step(0); for (let i = 0; i < 30; i++) sky.dbg.step(0)
  }, [dist, opt])
  await p.screenshot({ path: `shots/marks/${tag}-${name}.png` })
}
await shot('day-near', 22, { y: 12, pitch: -0.4 })
await shot('day-mid', 45)
await shot('day-far', 110, { pitch: -0.2 })
await shot('day-many', 60, { two: true, pitch: -0.3 })
await shot('day-ittan', 40, { kind: 'ittan', pitch: -0.3 })
await shot('dark-mid', 45, { dark: true })
await shot('dark-many', 60, { two: true, pitch: -0.3, dark: true })
console.log('errs', errs)
await b.close(); srv.kill()
