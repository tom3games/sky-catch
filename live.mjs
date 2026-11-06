import { MUTE_LAUNCH, muteContext } from './mute.mjs'
// 公開URLの確認。node live.mjs（ログインしていないブラウザで見る）。SKIPGH=1 で GitHub ページの確認を省く
import { chromium, webkit } from 'playwright'
import { execSync } from 'node:child_process'
const URL0 = 'https://tom3games.github.io/sky-catch/'
// 個人のアカウント名は公開リポジトリに書かない。実行時に gh から取る
const OWNER = (() => { try { return execSync('gh api user -q .login', { encoding: 'utf8' }).trim().toLowerCase() } catch { return '' } })()
const out = []
for (const [name, bt, opts] of [['chromium', chromium, {}], ['webkit', webkit, { isMobile: true, hasTouch: true, deviceScaleFactor: 2 }]]) {
  const b = await bt.launch(bt === chromium ? { ...MUTE_LAUNCH, args: [...MUTE_LAUNCH.args, '--use-angle=metal'] } : {}), ctx = await b.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts })
  await muteContext(ctx)
  const p = await ctx.newPage()
  const errs = []
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()) })
  p.on('requestfailed', r => errs.push('fail ' + r.url()))
  await p.goto(URL0 + '?t=' + Date.now(), { waitUntil: 'networkidle' })
  await p.waitForFunction(() => window.__catchReady && window.__assetsDone, null, { timeout: 30000 })
  // 遊びの通し: 出動 → 壁に張り付いて受けとめ → 救護マットで引き渡し → 感謝状
  if (opts.hasTouch) await p.tap('#btnStart'); else await p.click('#btnStart')
  await p.waitForTimeout(800)
  const flow = await p.evaluate(() => {
    sky.dbg.pause(true); sky.dbg.step(60 * 3)
    const f = sky.rd.fallers[0], ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3
    sky.dbg.teleport(ex + f.nx * 4, 0, ez + f.nz * 4, Math.atan2(-f.nx, -f.nz))
    sky.dbg.keys.add('KeyW'); sky.dbg.step(60); sky.dbg.keys.delete('KeyW')
    for (let i = 0; i < 300 && !sky.rd.carry.length; i++) sky.dbg.step(3)
    const caught = sky.rd.carry.length
    const m = sky.rd.mats[0]; sky.dbg.teleport(m.x, m.y + 3, m.z); sky.me.grounded = false; sky.dbg.step(60)
    const saved = sky.rd.saved
    sky.dbg.step(60 * 92); sky.dbg.pause(false)
    return { caught, saved }
  })
  await p.waitForTimeout(2500)
  const res = await p.evaluate(() => ({ mode: sky.mode, score: window.__lastScore, marks: typeof sky.marks === 'function', mute: window.__muteOk() }))
  out.push(`${name}: flow=${JSON.stringify(flow)} result=${JSON.stringify(res)}`)
  await p.screenshot({ path: `shots/live-${name}.png` })
  const og = await p.evaluate(async () => { const r = await fetch(document.querySelector('meta[property="og:image"]').content); return r.status + ' ' + r.headers.get('content-type') })
  out.push(`${name}: og=${og} errors=${errs.length ? errs.join(' | ') : 'none'}`)
  await b.close()
}
if (process.env.SKIPGH) { console.log(out.join('\n')); process.exit(0) }
// ログアウト状態でリポジトリ・更新履歴に個人のIDが出ていないか
const b = await chromium.launch(MUTE_LAUNCH), p = await b.newPage()
for (const u of ['https://github.com/tom3games/sky-catch', 'https://github.com/tom3games/sky-catch/commits/main']) {
  const res = await p.goto(u, { waitUntil: 'domcontentloaded' }); await p.waitForTimeout(2500)
  out.push(`${u} status=${res.status()} owner=${OWNER && (await p.content()).toLowerCase().includes(OWNER) ? 'FOUND' : 'none'}`)
}
await b.close()
console.log(out.join('\n'))
