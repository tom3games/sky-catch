// SNS 用の画像 og.png（1200x630）。壁に張り付いた隊員の真上に、手足をばたつかせた人が落ちてくる瞬間＋頭上注意の看板。node og.mjs
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { muteContext, MUTE_LAUNCH } from './mute.mjs'
const srv = spawn(process.execPath, ['server.mjs'], { cwd: import.meta.dirname, env: { ...process.env, PORT: '5396' } })
await new Promise(r => setTimeout(r, 400))
const b = await chromium.launch({ ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, '--use-angle=metal'] })
const ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 1200, height: 630 } }); await muteContext(ctx)
const p = await ctx.newPage()
await p.goto('http://localhost:5396/'); await p.waitForFunction(() => window.__catchReady, null, { timeout: 20000 })
await p.waitForTimeout(2500)
await p.evaluate(() => sky.start(5)); await p.waitForTimeout(500)
await p.evaluate(() => {
  sky.dbg.pause(true); sky.dbg.step(60 * 3)
  const f = sky.rd.fallers[0], ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3
  sky.dbg.teleport(ex + f.nx * 4, 0, ez + f.nz * 4, Math.atan2(-f.nx, -f.nz))
  sky.dbg.keys.add('KeyW'); sky.dbg.step(60 * 1.4); sky.dbg.keys.delete('KeyW')
  // 落ちてくる人が隊員の 4m 上に来るまで進める
  for (let i = 0; i < 2000 && !(f.state === 'fall' && f.y < sky.me.y + 5.5); i++) sky.dbg.step(1)
  window.__freeze = true
  const me = sky.me, c = sky.camera, sx = -f.nz, sz = f.nx
  c.position.set(me.x + f.nx * 6.8 + sx * 3.6, me.y + 0.6, me.z + f.nz * 6.8 + sz * 3.6)
  c.lookAt(me.x + sx * 0.6, me.y + 3.0, me.z + sz * 0.6)
  c.fov = 58; c.updateProjectionMatrix()
  sky.dbg.step(1)
  for (const id of ['hud', 'pause', 'title']) document.getElementById(id).classList.add('hidden')
  const d = document.createElement('div')
  d.innerHTML = `<div style="position:fixed;left:40px;top:60px;z-index:30;width:560px;padding:14px;background:repeating-linear-gradient(-45deg,#16140f 0 18px,#f2c230 18px 36px);transform:rotate(-2deg);box-shadow:0 12px 26px rgba(0,0,0,.4)">
    <div style="background:#f2c230;padding:22px 16px 18px;text-align:center;font-family:'BIZ UDPGothic',sans-serif;font-weight:700;color:#16140f">
      <div style="display:inline-block;background:#16140f;color:#f2c230;font-size:22px;letter-spacing:.3em;padding:4px 14px 4px 20px">頭上注意</div>
      <div style="font-size:80px;line-height:1.05;margin-top:10px;white-space:nowrap">空中キャッチ</div>
      <div style="font-size:26px;margin-top:8px">落ちてくる人を受けとめろ</div></div></div>
  <div style="position:fixed;left:48px;top:420px;z-index:30;font-family:'Klee One',sans-serif;color:#fff;font-size:34px;line-height:1.4;text-shadow:0 2px 10px rgba(0,0,0,.85)">ワイヤーで飛んで、<br>地面に着く前に。</div>`
  document.body.appendChild(d)
})
await p.waitForTimeout(700)
await p.screenshot({ path: 'og.png' })
await b.close(); srv.kill()
console.log('og.png')
