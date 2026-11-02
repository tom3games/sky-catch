// 性格ごとの bot を種を変えて回し、点数の分布を出す。node tools/sim.mjs [回数] [性格]
import { createWorld } from '../shared/track.js'
import { createRunner, stepRunner } from '../shared/runner.js'
import { createRound, stepCatch, CATCH } from '../shared/catch.js'
import { createBot, botInput } from '../shared/bot.js'
const N = +(process.argv[2] || 12), only = process.argv[3]
const world = createWorld('city')
const dt = 1 / 60
export function play(kind, seed, verbose = false) {
  const rd = createRound(world, seed), m = rd.mats[0]
  const r = createRunner({ id: 'me', spawn: { x: m.x, y: m.y, z: m.z - 6, yaw: 0 } })
  const b = createBot(kind, seed)
  let air = 0, ground = 0, wires = 0, maxV = 0
  while (!rd.over) {
    const inp = botInput(b, r, rd, world, dt)
    r.events.length = 0
    stepRunner(r, inp, dt, world)
    stepCatch(rd, r, dt, world)
    if (r.grounded) ground += dt; else air += dt
    if (inp.wire) wires++
    maxV = Math.max(maxV, Math.hypot(r.vx, r.vz))
    for (const e of rd.events) if (verbose) console.log(rd.t.toFixed(1), JSON.stringify(e))
    rd.events.length = 0
  }
  return { caught: rd.caught || 0, score: rd.score, saved: rd.saved, missed: rd.missed, spawned: rd.n, chain: rd.bestChain, air, ground, wires, maxV }
}
const kinds = only ? [only] : ['skilled', 'clumsy', 'walker', 'idle']
const main = process.argv[1] && import.meta.url.endsWith(process.argv[1].split('/').pop())
if (main) for (const k of kinds) {
  const gs = []; for (let s = 1; s <= N; s++) gs.push(play(k, s, N === 1 && !!process.env.V))
  const avg = f => (gs.reduce((a, g) => a + f(g), 0) / gs.length)
  const sc = gs.map(g => g.score).sort((a, b) => a - b)
  console.log(`${k.padEnd(8)} 点 平均${Math.round(avg(g => g.score))} 中央${sc[sc.length >> 1]} 最小${sc[0]} 最大${sc[sc.length - 1]} | 受け ${avg(g => g.caught).toFixed(1)} 救助 ${avg(g => g.saved).toFixed(1)}/${avg(g => g.spawned).toFixed(1)}人 連続最高${avg(g => g.chain).toFixed(1)} | 空中${Math.round(100 * avg(g => g.air / (g.air + g.ground)))}% 最高速${avg(g => g.maxV).toFixed(0)}m/s`)
}
