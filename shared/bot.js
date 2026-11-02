// CPU の受けとめ役（釣り合いの検証とタイトルのデモ用）
//   skilled: ワイヤーで近くまで飛び、壁に張り付いて這い、落ちてくる人の高さで待つ
//   clumsy:  skilled と同じだが、気づくのが遅く・向きがぶれ・ワイヤーの離し方が雑（初めての人の想定）
//   walker:  ワイヤーを使わず、走って壁を登る（手抜き）
//   idle:    何もしない
import { CATCH, urgent, nearestMat } from './catch.js'
import { findAnchor, RUN } from './runner.js'

const K = 130 / 80
const XS = [-320, -240, -160, -80, 0, 80, 160, 240, 320].map(x => x * K)
const ZS = [40, 120, 200, 280, 360, 440, 520, 600, 680, 760, 840].map(z => 40 + (z - 40) * K)
const near = (arr, v) => arr.reduce((a, b) => Math.abs(b - v) < Math.abs(a - v) ? b : a)
const ang = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a }

function route(r, goal) {
  const ix = near(XS, r.x), iz = near(ZS, r.z), gx = near(XS, goal.fx), gz = near(ZS, goal.fz)
  const F = { x: goal.fx, z: goal.fz }
  const onXroad = Math.abs(goal.fx - gx) < 14
  let pts = [{ x: ix, z: iz }, onXroad ? { x: gx, z: iz } : { x: ix, z: gz }, F]
  pts = pts.filter((p, i) => i === 0 || Math.hypot(p.x - pts[i - 1].x, p.z - pts[i - 1].z) > 1)
  while (pts.length > 1) {
    const p0 = pts[0], p1 = pts[1]
    if (Math.hypot(p0.x - r.x, p0.z - r.z) < 9 || Math.hypot(p1.x - r.x, p1.z - r.z) < Math.hypot(p1.x - p0.x, p1.z - p0.z) + 2) pts.shift(); else break
  }
  return pts
}

export function createBot(kind, seed = 1) { let a = (seed * 7919 + 13) >>> 0 || 1; return { kind, plan: null, idx: 0, replan: 0, wT: 0, prevW: false, prevJ: false, stuck: 0, lx: 0, lz: 0, tgt: null, seen: 0, rnd: () => { a = (a * 16807) % 2147483647; return a / 2147483647 } } }

export function botInput(b, r, rd, world, dt) {
  const inp = { throttle: 0, steer: 0 }
  if (rd.over || b.kind === 'idle') return inp
  const clumsy = b.kind === 'clumsy'
  // 何を目指すか: 急ぐ人がいて、まだ抱えられるならその人。いなければ（か満員なら）救護マット
  // 2人抱えたら（終わり間際は1人でも）先にマットへ
  const goDeliver = rd.carry.length >= 2 || (rd.carry.length >= 1 && rd.t > CATCH.roundSec - 15)
  let f = rd.carry.length < CATCH.carryMax && !goDeliver ? urgent(rd) : null
  if (f && b.tgt !== f.id) { b.tgt = f.id; b.seen = 0 }
  b.seen += dt
  if (f && clumsy && b.seen < 1.0) f = null                     // 気づくのが遅い
  if (!f && !rd.carry.length) { b.plan = null; if (r.climbing) { inp.wire = !b.prevJ; b.prevJ = inp.wire } return inp }   // 跳ぶボタンは無い: ワイヤーボタンで壁から離れる
  let goal, wall = null
  if (f) {
    const ex = f.fx - f.nx * 1.3, ez = f.fz - f.nz * 1.3       // 落ちる位置の真下の壁
    wall = { ex, ez, nx: f.nx, nz: f.nz }
    goal = { fx: ex + f.nx * 7, fz: ez + f.nz * 7, x: ex, z: ez }
  } else {
    const m = nearestMat(rd, r.x, r.z)
    goal = { fx: m.x, fz: m.z, x: m.x, z: m.z }
  }
  b.replan -= dt
  const key = goal.fx.toFixed(0) + ',' + goal.fz.toFixed(0)
  if (!b.plan || b.goalKey !== key || b.replan <= 0) { b.plan = route(r, goal); b.idx = 0; b.replan = 1.5; b.goalKey = key }
  while (b.idx < b.plan.length - 1 && Math.hypot(b.plan[b.idx].x - r.x, b.plan[b.idx].z - r.z) < 9) b.idx++
  const dGoal = Math.hypot(goal.x - r.x, goal.z - r.z)

  // 壁に張り付いている: 落ちてくる人の高さと横の位置に合わせて這う
  if (r.climbing && wall && Math.hypot(wall.ex - r.x, wall.ez - r.z) < 14) {
    const rx = r.climbing.nz, rz = -r.climbing.nx                 // 壁を向いた時の右
    const along = (f.fx - r.x) * rx + (f.fz - r.z) * rz
    const wantY = f.state === 'warn' ? Math.min(f.top - 4, f.top * 0.6) : f.y + 0.2
    inp.cx = Math.abs(along) > 0.4 ? Math.sign(along) : 0
    inp.cy = (r.y + 1.2) < wantY - 0.6 ? 1 : (r.y + 1.2) > wantY + 2.5 && f.state === 'fall' ? -0.6 : 0
    if (clumsy) { inp.cx *= 0.6; if (b.rnd() < 0.3) inp.cy = 0 }
    // 落ちてくる人より上にいる: 手を離して落ちる（人より速く落ちるので追いつける）
    if (f.state === 'fall' && (r.y + 1.2) > f.y + 2 && Math.abs(along) < 1.5) { inp.wire = !b.prevJ; b.prevJ = inp.wire; return inp }
    b.prevJ = false
    return inp
  }
  if (r.climbing) { inp.wire = !b.prevJ; b.prevJ = inp.wire; return inp }   // 違う壁・用が済んだら離れる（ワイヤーボタン）
  b.prevJ = false

  let p = b.plan[b.idx]
  const final = b.idx >= b.plan.length - 1 && Math.hypot(goal.fx - r.x, goal.fz - r.z) < 9
  if (final && wall) p = { x: wall.ex - wall.nx * 2, z: wall.ez - wall.nz * 2 }     // 壁へ向かって走る（登り始める）
  if (final && !wall) p = { x: goal.x, z: goal.z }
  let want = Math.atan2(p.x - r.x, p.z - r.z)
  if (clumsy) want += (b.rnd() - 0.5) * 0.5
  const diff = ang(want - r.yaw)
  inp.steer = Math.max(-1, Math.min(1, -diff * 2.5))
  inp.throttle = Math.abs(diff) > 1.6 && r.grounded ? 0.3 : 1

  // ワイヤー（walker は使わない）
  b.wT += dt
  let w = false
  if (b.kind !== 'walker') {
    const far = dGoal > (wall ? 24 : 18)
    if (!r.rope && !r.climbing && b.wT > (clumsy ? 0.9 : 0.35) && (r.grounded || r.vy < -1)) {
      // 落ちる人の上の壁に届くなら、そこへ掛ける（振り子でちょうど人の落ちる所へ行く）。人がタップで狙うのと同じ
      let a = null
      if (f) {
        // clumsy は狙いが数m ずれる
        const jx = clumsy ? (b.rnd() - 0.5) * 8 * Math.abs(f.nz) : 0, jz = clumsy ? (b.rnd() - 0.5) * 8 * Math.abs(f.nx) : 0, jy = clumsy ? (b.rnd() - 0.5) * 8 : 0
        const ay = Math.min(f.roof - 0.5, f.top + 10 + jy), ax = f.fx - f.nx * 1.35 + jx, az = f.fz - f.nz * 1.35 + jz
        const d = Math.hypot(ax - r.x, ay - (r.y + 1.5), az - r.z)
        if (d <= RUN.wireRange * 0.95 && ay > r.y + 4 && Math.hypot(ax - r.x, az - r.z) > 8) a = { x: ax, y: ay, z: az }
      }
      if (!a && far) {
        const v = Math.max(8, Math.hypot(r.vx, r.vz))
        a = findAnchor(world, { ...r, yaw: want, vx: Math.sin(want) * v, vz: Math.cos(want) * v })
      }
      if (a) { w = true; b.wT = 0; b.aim = a; b.direct = !!(f && Math.abs(a.x - (f.fx - f.nx * 1.35)) < 5 && Math.abs(a.z - (f.fz - f.nz * 1.35)) < 5) }
    }
    // 近づいたら、振り子の低い所で外す（clumsy は外す時がばらつく）
    if (!r.rope) b.direct = false
    if (r.rope && (!b.direct || !wall) && dGoal < (wall ? 22 : 16) && (clumsy ? b.rnd() < 0.05 : r.y < 7 || (dGoal < 10 && r.vy < 0))) w = true   // 巻き取りが空中出前と同じ強さになり低い所まで下りにくいので、近くで下がり始めたら外す
  }
  inp.wire = w && !b.prevW; b.prevW = w
  if (inp.wire && !r.rope && b.aim) inp.wireAt = b.aim
  b.aim = null
  // 詰まったら跳ぶ
  b.stuck = Math.hypot(r.x - b.lx, r.z - b.lz) < 0.05 && !r.climbing ? b.stuck + dt : 0
  b.lx = r.x; b.lz = r.z
  if (b.stuck > 1.2) { if (b.kind === 'walker') inp.jump = true; else if (!r.rope) inp.wire = true; b.stuck = 0; b.replan = 0 }   // 詰まったらワイヤー（跳ぶボタンは無い）
  return inp
}
