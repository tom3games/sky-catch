// 最初のロードの確認（無音）。verify.mjs から呼ぶ
import { muteContext } from '../mute.mjs'
const expect = (c, msg) => { if (!c) throw new Error(msg) }
// 空と主人公が揃えば始められ、落ちてくる人・床と壁の絵・音は裏で読む。遅い素材は route で止めて再現する
export async function slowTests({ browser, bName, URL0, t, opts }) {
  const open = async hold => {
    const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts })
    await muteContext(ctx)
    const p = await ctx.newPage(); p.errs = []; p.reqs = []; p.ctxx = ctx
    p.on('pageerror', e => p.errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/GL Driver|GPU stall/.test(m.text())) p.errs.push(m.text()) })
    p.on('request', r => p.reqs.push(r.url()))
    if (hold) await ctx.route(hold.pat, async r => { await hold.until; r.continue().catch(() => {}) })
    return p
  }
  const isLate = u => /\/assets\/tex|\/snd\/|character-/.test(u.href || u)
  await t(`${bName}: 開く時のファイルが少なく外部へ行かない`, async () => {
    let free; const until = new Promise(r => { free = r })
    const p = await open({ pat: isLate, until })   // 準備完了の時に読み始めている物は数えない
    await p.goto(URL0); await p.waitForFunction(() => window.__catchReady, null, { timeout: 30000 })
    const real = p.reqs.filter(u => !u.startsWith('blob:') && !isLate(u))
    const n = real.length, outside = real.filter(u => !u.startsWith(URL0)), mod = real.filter(u => /\/(js|shared|vendor)\//.test(u))
    free(); await p.ctxx.close()
    expect(n <= 16 && !outside.length && !mod.length, JSON.stringify({ n, outside, mod })); return n + '件'
  })
  await t(`${bName}: 素材と音が届く前に始めても遊べて、受けとめる人が見えないことがない。絵が届くと入れ替わる`, async () => {
    let free; const until = new Promise(r => { free = r })
    const p = await open({ pat: isLate, until })
    await p.goto(URL0); await p.waitForFunction(() => window.__catchReady, null, { timeout: 30000 })
    const boot = await p.evaluate(() => ({ done: !!window.__assetsDone, hidden: document.getElementById('boot').classList.contains('out') }))
    await p.tap('#btnStart'); await p.waitForTimeout(200)
    const lit = () => { const g = sky.renderer.getContext(); const c = sky.renderer.domElement; sky.dbg.render(1); const w = c.width, h = c.height, b = new Uint8Array(4 * 400); let black = 0, sum = 0; for (let i = 0; i < 400; i++) { g.readPixels((i % 20) * w / 20, Math.floor(i / 20) * h / 20, 1, 1, g.RGBA, g.UNSIGNED_BYTE, b, 0); sum += b[0] + b[1] + b[2]; if (b[0] + b[1] + b[2] < 12) black++ } return { black, avg: sum / 1200 } }
    const before = await p.evaluate(`(() => { sky.dbg.pause(true); sky.dbg.step(60 * 3); const f = sky.rd.fallers[0]; const v = f && sky.vis.get(f.id); const shown = v && v.p.group.children.some(c => c.isMesh && c.visible) ; return { mode: sky.mode, faller: !!f, ok: v && v.p.ok, shown, kind: f && f.kind, snd: Snd.played.click || 0, loaded: sky.texState.loaded, lit: (${lit})() } })()`)
    // 仮の体のまま受けとめて、そのまま運べる
    const caught = await p.evaluate(() => { const f = sky.rd.fallers.find(x => x.kind === 'normal' || x.kind === 'heavy') || sky.rd.fallers[0], ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3
      sky.dbg.teleport(ex + f.nx * 4, 0, ez + f.nz * 4, Math.atan2(-f.nx, -f.nz)); sky.dbg.keys.add('KeyW'); sky.dbg.step(60); sky.dbg.keys.delete('KeyW')
      for (let i = 0; i < 300 && !sky.rd.carry.length; i++) sky.dbg.step(3)
      return { n: sky.rd.carry.length, id: sky.rd.carry[0] && (sky.rd.carry[0].id ?? sky.rd.carry[0]) } })
    free()
    await p.waitForFunction(() => window.__assetsDone, null, { timeout: 40000 })
    const after = await p.evaluate(`(() => { sky.dbg.step(3); const stands = [...sky.vis.values()].filter(v => !v.p.ok).length; return { stands, n: sky.vis.size, carry: sky.rd.carry.length, custs: sky.charAssets.custs.length, loaded: sky.texState.loaded, queued: sky.texState.queued, failed: sky.texState.failed, lit: (${lit})() } })()`)
    const muteOk = await p.evaluate(() => window.__muteOk ? window.__muteOk() : true)
    const errs = p.errs.slice(); await p.ctxx.close()
    expect(!boot.done && boot.hidden, 'ロード画面が素材を待っている ' + JSON.stringify(boot))
    expect(before.mode === 'play' && before.loaded === 0, JSON.stringify(before))
    expect(before.lit.black < 60 && before.lit.avg > 25, '絵が届く前に画面が黒い ' + JSON.stringify(before.lit))
    expect(!before.faller || before.ok || before.shown, '落ちてくる人が見えない ' + JSON.stringify(before))
    expect(caught.n >= 1, '仮の体を受けとめられない ' + JSON.stringify(caught))
    expect(after.custs === 6 && after.stands === 0 && after.carry === caught.n, '入れ替わらない/抱えた人が消えた ' + JSON.stringify(after))
    expect(after.loaded === after.queued && !after.failed, JSON.stringify(after))
    expect(muteOk && !errs.length, errs.join('|') + ' mute=' + muteOk)
    return { before: before.lit, after: after.lit }
  })
  await t(`${bName}: 床の絵・人・音が読めなくても止まらず遊べる（黒くならない）`, async () => {
    const ctx = await browser.newContext({ locale: 'ja-JP', viewport: { width: 390, height: 844 }, ...opts }); await muteContext(ctx)
    await ctx.route(isLate, r => r.abort())
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message))
    await p.goto(URL0); await p.waitForFunction(() => window.__catchReady && window.__assetsDone, null, { timeout: 40000 })
    await p.tap('#btnStart'); await p.waitForTimeout(400)
    const r = await p.evaluate(() => { sky.dbg.pause(true); sky.dbg.step(60 * 3); const f = sky.rd.fallers[0], v = f && sky.vis.get(f.id); return { mode: sky.mode, failed: sky.texState.failed, custs: sky.charAssets.custs.length, stand: v && (v.p.ok || v.p.group.children.some(c => c.isMesh)), loops: Object.keys(Snd.bad).length } })
    await ctx.close()
    expect(r.mode === 'play' && r.failed > 0 && r.custs === 0 && r.stand !== false && !errs.length, JSON.stringify(r) + errs.join('|')); return r
  })
  await t(`${bName}: 音は効果音から順に読み、題の BGM を無駄に読まない`, async () => {
    const p = await open()
    await p.goto(URL0); await p.waitForFunction(() => window.__catchReady, null, { timeout: 30000 })
    await p.tap('#btnStart')
    await p.waitForFunction(() => Snd.bufs['snd/bgm_play.mp3'] instanceof AudioBuffer, null, { timeout: 30000 })
    const snd = p.reqs.filter(u => /\/snd\//.test(u)).map(u => u.split('/snd/')[1].split('?')[0]), title = snd.includes('bgm_title.mp3')
    const firstBig = snd.findIndex(u => /loop|bgm/.test(u)), smallAfter = snd.slice(firstBig).filter(u => !/loop|bgm/.test(u))
    const r = await p.evaluate(() => ({ decoded: Object.values(Snd.bufs).filter(b => b instanceof AudioBuffer).length, mew: Snd.bufs['snd/confirm.mp3'] instanceof AudioBuffer }))
    const errs = p.errs.slice(); await p.ctxx.close()
    expect(!title, 'bgm_title を読んだ'); expect(smallAfter.length <= 2, 'ループの後に効果音 ' + smallAfter.join(',')); expect(r.mew && !errs.length, JSON.stringify(r) + errs.join('|'))
    return r.decoded + '本'
  })
}
