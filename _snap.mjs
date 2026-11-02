// 撮影（目で見る用）。node _snap.mjs [all]
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { MUTE_LAUNCH, muteContext } from './mute.mjs'
const ROOT = import.meta.dirname; mkdirSync(ROOT + '/shots', { recursive: true })
const PORT = 5393
const srv = spawn(process.execPath, ['server.mjs'], { cwd: ROOT, env: { ...process.env, PORT: String(PORT) } })
await new Promise(r => setTimeout(r, 400))
const b = await chromium.launch({ ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, '--use-angle=metal', '--enable-unsafe-swiftshader'] })
const sizes = process.argv[2] === 'all' ? [['phone', 390, 844, true], ['pc', 1440, 900, false], ['land', 844, 390, true]] : [['phone', 390, 844, true]]
for (const [n, w, h, touch] of sizes) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, locale: 'ja-JP', hasTouch: touch, isMobile: touch, deviceScaleFactor: 2 })
  await muteContext(ctx)
  const p = await ctx.newPage(); const errs = []
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) })
  await p.goto(`http://localhost:${PORT}/`); await p.waitForFunction(() => window.__catchReady, null, { timeout: 20000 })
  await p.waitForTimeout(4000)
  await p.screenshot({ path: `shots/${n}-title.png` })
  await p.evaluate(() => sky.start(5)); await p.waitForTimeout(300)
  // 最初の人がぐらつくまで進める
  await p.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(60 * 4) })
  await p.screenshot({ path: `shots/${n}-warn.png` })
  // 落ちてくる人の真下の壁の前へ置いて、少し上で張り付かせる
  await p.evaluate(() => {
    const f = sky.rd.fallers[0]; const ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3
    sky.dbg.teleport(ex + f.nx * 6, 0, ez + f.nz * 6, Math.atan2(-f.nx, -f.nz))
    sky.dbg.keys.add('KeyW'); sky.dbg.step(60 * 1.2); sky.dbg.keys.delete('KeyW'); sky.dbg.step(30)
  })
  await p.screenshot({ path: `shots/${n}-climb.png` })
  await p.evaluate(() => { for (let i = 0; i < 400 && !sky.rd.carry.length; i++) sky.dbg.step(3) })
  await p.evaluate(() => sky.dbg.step(20))
  await p.screenshot({ path: `shots/${n}-carry.png` })
  const st = await p.evaluate(() => ({ carry: sky.rd.carry.length, missed: sky.rd.missed, t: sky.rd.t.toFixed(1) }))
  await p.evaluate(() => { sky.rd.saved = 7; sky.rd.score = 1450; sky.rd.bestChain = 4; sky.rd.missed = 5; sky.rd.log = Array.from({ length: 12 }, (_, i) => ({ reason: i, ok: i % 3 !== 2 })); sky.showResult() }); await p.waitForTimeout(800)
  await p.screenshot({ path: `shots/${n}-result.png` })
  console.log(n, JSON.stringify(st), 'errs', errs.slice(0, 5))
  await ctx.close()
}
await b.close(); srv.kill()
