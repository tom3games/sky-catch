// 読み込みの確認だけ回す。node tools/slowrun.mjs（無音）
import { chromium, webkit } from 'playwright'
import { spawn } from 'node:child_process'
import { MUTE_LAUNCH } from '../mute.mjs'
import { slowTests } from './slowload.mjs'
const PORT = 5794, URL0 = `http://localhost:${PORT}/`
const server = spawn(process.execPath, ['server.mjs'], { cwd: new URL('..', import.meta.url).pathname, env: { ...process.env, PORT: String(PORT) } }); await new Promise(r => setTimeout(r, 400))
let fail = 0
const t = async (name, fn) => { try { const r = await fn(); console.log('ok  ', name, r || '') } catch (e) { fail++; console.log('FAIL', name, e.message.split('\n')[0]) } }
const touch = { isMobile: true, hasTouch: true, deviceScaleFactor: 2 }
for (const [n, b] of [['chromium', await chromium.launch(MUTE_LAUNCH)], ['webkit', await webkit.launch()]]) { await slowTests({ browser: b, bName: n, URL0, t, opts: touch }); await b.close() }
server.kill(); process.exit(fail ? 1 : 0)
