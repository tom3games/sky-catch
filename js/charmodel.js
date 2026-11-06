// 人物の見た目（ボーン入りの CC0 キャラ）
// 受けとめ隊員: KayKit Adventurers 2.0 の Ranger（CC0）を橙の救助服と紺に塗り替え、Rig_Medium のアニメを当てる
// 落ちてくる人: Kenney Mini Characters（CC0、現代の普段着）。手足をばたつかせる
// 読み込みが終わる前と失敗した時は、前の手続きの人形（runnermodel.js）を使う
import * as THREE from 'three'
import { GLTFLoader } from '../vendor/jsm/loaders/GLTFLoader.js'
import { clone as skClone } from '../vendor/jsm/utils/SkeletonUtils.js'

const BASE = 'assets/chars/'
const ROLL_SEC = 0.55   // shared/runner.js の RUN.rollSec と同じ
const A = { ready: false, failed: false, ranger: null, clips: {}, custs: [] }
export const charAssets = A

// 色見本（8x4 のグラデーションの升）を塗り替える。升の位置は ranger_texture.png を見て決めた
function recolor(img) {
  const c = document.createElement('canvas'); c.width = img.width; c.height = img.height
  const x = c.getContext('2d'); x.drawImage(img, 0, 0)
  const cw = img.width / 8, ch = img.height / 4
  const grad = (col, row, top, bot, cols = 1) => { const g = x.createLinearGradient(0, row * ch, 0, (row + 1) * ch); g.addColorStop(0, top); g.addColorStop(1, bot); x.fillStyle = g; x.fillRect(col * cw, row * ch, cw * cols, ch) }
  grad(5, 0, '#ff9a3c', '#d4601a', 2)   // 生成りの上着 → 橙の救助服
  grad(2, 2, '#ff9a3c', '#c95a18')      // 同じ生成りの別の升
  grad(0, 1, '#3a4766', '#151b2c')      // 青いスカーフ → 紺の手ぬぐい
  grad(1, 2, '#3a4766', '#151b2c')
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.flipY = false
  return t
}

export function loadCharAssets() {
  if (A.loading) return A.loading
  const L = new GLTFLoader()
  const get = f => new Promise((ok, ng) => L.load(BASE + f, ok, undefined, ng))
  A.loading = Promise.all([get('Ranger.glb'), get('Rig_Medium_General.glb'), get('Rig_Medium_MovementBasic.glb')])
    .then(([r, g1, g2]) => {
      r.scene.traverse(o => {
        if (o.isMesh) {
          o.castShadow = true; o.frustumCulled = false
          if (/Quiver|Cape/.test(o.name)) o.visible = false
          if (o.material && o.material.map && !A._tex) A._tex = recolor(o.material.map.image)
          if (o.material && A._tex) { o.material = o.material.clone(); o.material.map = A._tex; o.material.roughness = 0.7; o.material.metalness = 0 }
        }
      })
      A.ranger = r.scene
      for (const cl of [...g1.animations, ...g2.animations]) A.clips[cl.name] = cl
      A.ready = true
      return A
    }).catch(e => { A.failed = true; console.warn('char load failed', e); return A })
  return A.loading
}

// 落ちてくる人の見た目。主人公のあと、ロード画面が消えてから読む（届くまでは仮の体で受けとめられる）
export function loadCustomers() {
  const L = new GLTFLoader(), get = f => new Promise(ok => L.load(BASE + f, ok, undefined, () => ok(null)))
  return Promise.all(['male-d', 'female-b', 'male-e', 'female-d', 'male-a', 'female-f'].map(n => get('character-' + n + '.glb'))).then(cs => {
    A.custs = cs.filter(Boolean).map(c => ({ scene: c.scene, clips: c.animations }))
    for (const c of A.custs) c.scene.traverse(o => { if (o.isMesh) { o.castShadow = false; o.frustumCulled = false } })
    return A.custs.length
  })
}

const _q = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3(), _d = new THREE.Vector3()
// 骨を、子の骨が target の方を向くように回す（w は効き具合 0〜1）
function aimBone(bone, child, target, w) {
  bone.getWorldPosition(_a); child.getWorldPosition(_b)
  _c.subVectors(_b, _a).normalize(); _d.subVectors(target, _a).normalize()
  if (_c.lengthSq() < 1e-6 || _d.lengthSq() < 1e-6) return
  _q.setFromUnitVectors(_c, _d)
  bone.getWorldQuaternion(_q2)
  _q2.premultiply(_q)                      // 新しい世界の向き
  const pq = new THREE.Quaternion(); bone.parent.getWorldQuaternion(pq)
  _q2.premultiply(pq.invert())             // 親から見た向きに直す
  bone.quaternion.slerp(_q2, w)
  bone.updateMatrixWorld(true)
}

export class CharRunnerModel {
  constructor() {
    this.group = new THREE.Group()
    this.tilt = new THREE.Group(); this.group.add(this.tilt)   // 腰を中心に傾ける枠
    const ch = this.char = skClone(A.ranger)
    // 背の高さを 1.8m にそろえる
    const box = new THREE.Box3().setFromObject(ch); const hgt = box.max.y - box.min.y
    this.k = 1.8 / hgt; ch.scale.setScalar(this.k)
    this.hipY = 0.85
    this.tilt.position.y = this.hipY; ch.position.y = -this.hipY - box.min.y * this.k
    this.tilt.add(ch)
    this.bones = {}; ch.traverse(o => { if (o.isBone) this.bones[o.name] = this.bones[o.name.replace(/([lr])$/, '.$1')] = o })   // GLTFLoader は名前の . を消す（upperarm.l → upperarml）。両方で引けるようにする
    this.mixer = new THREE.AnimationMixer(ch)
    this.acts = {}
    for (const n of ['Idle_A', 'Running_A', 'Walking_A', 'Jump_Idle', 'Jump_Start', 'Jump_Land', 'Hit_A', 'Death_A', 'Throw', 'Interact']) {
      if (!A.clips[n]) continue
      const a = this.mixer.clipAction(A.clips[n]); this.acts[n] = a
      if (/Death|Jump_Land|Jump_Start|Throw|Hit/.test(n)) { a.setLoop(THREE.LoopOnce); a.clampWhenFinished = true }
    }
    this.cur = null; this.play('Idle_A')
    // 岡持ち（銀の出前箱）。腰の横に下げる
    const ok = this.okamochi = new THREE.Group()
    const steel = new THREE.MeshStandardMaterial({ color: 0xc9ced3, metalness: 0.75, roughness: 0.3 })
    const boxM = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.3, 0.24).translate(0, -0.2, 0), steel); boxM.castShadow = true
    const handle = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.015, 6, 12, Math.PI).translate(0, -0.02, 0), steel)
    const label = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.005).translate(0, -0.18, 0.123), new THREE.MeshStandardMaterial({ color: 0xb22a22 }))
    ok.add(boxM, handle, label); this.group.add(ok); ok.visible = false
    // 手首の作業用ワイヤー射出機（橙）
    this.guns = []
    for (const side of ['l', 'r']) {
      const w = this.bones['wrist.' + side]; if (!w) continue
      const gun = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.09, 0.14), new THREE.MeshStandardMaterial({ color: 0xd9772a, emissive: 0xd9772a, emissiveIntensity: 0.3 }))
      gun.scale.setScalar(1 / this.k); w.add(gun); this.guns.push(gun)
    }
    this.handWorld = new THREE.Vector3(); this.state = 'idle'; this.phase = 0; this.lastThrow = 0
    this._t = new THREE.Vector3()
  }
  play(name, fade = 0.18) {
    const a = this.acts[name]; if (!a || this.cur === a) return
    a.reset().setEffectiveWeight(1).fadeIn(fade).play()
    if (this.cur) this.cur.fadeOut(fade)
    this.cur = a
  }
  update(s, dt) {
    const g = this.group
    g.position.set(s.x, s.y, s.z)
    const v = Math.hypot(s.vx, s.vz)
    let pitch = 0, roll = 0, st
    if (s.wreck > 0) st = 'down'
    else if (s.climbing) st = 'climb'
    else if (s.rope) st = s.zipping ? 'zip' : 'swing'
    else if (!s.grounded) st = 'air'
    else if (v > 0.6) st = 'run'
    else st = 'idle'
    if (st !== this.state && this.state === 'air' && (st === 'run' || st === 'idle')) this.play('Jump_Land', 0.08)
    const landing = this.cur === this.acts.Jump_Land && this.cur.time < 0.35
    this.state = st
    let yaw = s.yaw
    if (st === 'down') { this.play('Death_A', 0.15) }
    else if (st === 'climb') { yaw = Math.atan2(-s.climbing.nx, -s.climbing.nz); this.play('Running_A'); this.acts.Running_A.timeScale = 0.55; pitch = 0.1 }
    else if (st === 'swing' || st === 'zip' || st === 'air') { this.play('Jump_Idle', 0.2) }
    else if (st === 'run' && !landing) { this.play('Running_A'); this.acts.Running_A.timeScale = Math.min(1.5, 0.55 + v * 0.09); pitch = Math.min(0.2, v * 0.015) }
    else if (st === 'idle' && !landing) this.play('Idle_A')
    g.rotation.set(0, yaw, 0)
    if (st === 'swing' || st === 'zip') {
      const dx = s.rope.x - s.x, dy = s.rope.y - (s.y + 1.2), dz = s.rope.z - s.z
      const cy = Math.cos(yaw), sy = Math.sin(yaw)
      const lx = dx * cy - dz * sy, lz = dx * sy + dz * cy
      pitch = Math.atan2(lz, Math.max(0.5, dy)) * 0.8
      roll = -Math.atan2(lx, Math.max(0.5, dy)) * 0.8
    }
    if (s.stun > 0 && st === 'air') { this.phase += dt * 14; roll = Math.sin(this.phase) * 0.8; pitch = Math.cos(this.phase * 0.7) * 0.9 }
    const kk = 1 - Math.exp(-dt * 10)
    if (s.rollT > 0 && s.grounded) {
      // ローリング: 腰を中心に前へ1回転（専用のアニメが無いので、身を縮めた形で枠ごと回す）
      this.play('Jump_Idle', 0.06)
      const ph = 1 - s.rollT / ROLL_SEC
      this.tilt.rotation.x = ph * Math.PI * 2; this.tilt.rotation.z = 0
      this.tilt.position.y = this.hipY * (1 - 0.45 * Math.sin(ph * Math.PI))
      this.rolling = true
    } else {
      if (this.rolling) { this.rolling = false; this.tilt.rotation.x = 0; this.tilt.position.y = this.hipY }
      this.tilt.rotation.x += (pitch - this.tilt.rotation.x) * kk
      this.tilt.rotation.z += (roll - this.tilt.rotation.z) * kk
    }
    this.mixer.update(dt)
    g.updateMatrixWorld(true)
    // ワイヤーの腕: 掛けた点へまっすぐ伸ばす
    const B = this.bones
    if (s.rope && B['upperarm.l']) {
      this._t.set(s.rope.x, s.rope.y, s.rope.z)
      B['upperarm.l'].getWorldPosition(_a); B['upperarm.r'].getWorldPosition(_b)
      const left = _a.distanceToSquared(this._t) <= _b.distanceToSquared(this._t)
      const sd = left ? 'l' : 'r'
      aimBone(B['upperarm.' + sd], B['lowerarm.' + sd], this._t, 1)
      aimBone(B['lowerarm.' + sd], B['wrist.' + sd], this._t, 1)
      B['hand.' + sd].getWorldPosition(this.handWorld)
    } else if (st === 'climb' && B['upperarm.l']) {
      // 壁を登る: 両腕を上へ交互に伸ばす
      this.phase += dt * 9
      for (const [sd, ph] of [['l', 0], ['r', Math.PI]]) {
        const up = 0.5 + 0.5 * Math.sin(this.phase + ph)
        B['upperarm.' + sd].getWorldPosition(_a)
        this._t.set(_a.x, _a.y + 1, _a.z).addScaledVector(_c.set(Math.sin(yaw), 0, Math.cos(yaw)), 0.25 + up * 0.15)
        this._t.y += up * 0.3
        aimBone(B['upperarm.' + sd], B['lowerarm.' + sd], this._t, 0.9)
      }
    }
    // 岡持ち: 腰の横（左）に下げる。腕は使わない（ワイヤーで腕を上げても箱が空を向かないように）
    if (B.hips) {
      B.hips.getWorldPosition(_a); g.worldToLocal(_a)
      this.okamochi.position.set(_a.x + 0.36, _a.y + 0.38, _a.z + 0.04)
      this.okamochi.rotation.set(this.tilt.rotation.x * 0.4, 0, this.tilt.rotation.z * 0.4)
    }
  }
  updateParts() { return [] }
  applyDents() {}
  resetParts() {}
  dispose() { this.mixer.stopAllAction(); this.group.traverse(o => { if (o.geometry && !o.isSkinnedMesh) o.geometry.dispose() }) }
}

// 窓の客（上半身だけ見える）。番号で人を変える
export class Customer {
  constructor() {
    this.group = new THREE.Group(); this.slots = []
    this.cur = -1; this.t = 0
  }
  show(i) {
    if (!A.custs.length) return false
    i = ((i % A.custs.length) + A.custs.length) % A.custs.length
    if (i === this.cur) return true
    for (const s of this.slots) s.root.visible = false
    if (!this.slots[i]) {
      const c = A.custs[i], root = skClone(c.scene)
      const box = new THREE.Box3().setFromObject(root); const k = 1.6 / (box.max.y - box.min.y)
      root.scale.setScalar(k); root.position.y = -box.min.y * k
      const mixer = new THREE.AnimationMixer(root)
      const idle = c.clips.find(a => a.name === 'idle'); if (idle) mixer.clipAction(idle).play()
      const bones = {}; root.traverse(o => { if (o.name) bones[o.name] = o })
      this.group.add(root)
      this.slots[i] = { root, mixer, arm: bones['arm-right'], armL: bones['arm-left'], head: bones['head'] }
    }
    this.slots[i].root.visible = true; this.cur = i
    return true
  }
  update(dt) {
    const s = this.slots[this.cur]; if (!s) return
    this.t += dt
    s.mixer.update(dt)
    // 右腕を頭の横まで上げて振る（Kenney Mini の腕の骨は x 軸で横に上がる）
    if (s.arm) { s.arm.rotation.set(-2.75 + Math.sin(this.t * 9) * 0.35, 0, 0) }
    if (s.head) s.head.rotation.z = Math.sin(this.t * 2.3) * 0.08
  }
}

// 落ちてくる人（Kenney Mini）。状態ごとに手足を動かす。抱えられている時の位置は呼ぶ側が決める
// 落ちてくる人の種類ごとの見た目（2026-11-03 本人「猫とか妖怪とか、結構太ってる人とか」）
// 人は Kenney Mini（CC0）に小物を足す。猫・一反木綿・から傘おばけは素材に無いので軽い自作の形（箱と球だけにしない）
const M = c => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 })
function makeCat() {
  const g = new THREE.Group(), fur = M(0xd9893a), dark = M(0x2a1d14), pale = M(0xf3e2c4)
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.34, 4, 10), fur); body.rotation.x = Math.PI / 2; body.position.y = 0.3
  const belly = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.24, 4, 8), pale); belly.rotation.x = Math.PI / 2; belly.position.set(0, 0.24, 0.02)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), fur); head.scale.set(1.1, 0.95, 1); head.position.set(0, 0.42, 0.3)
  for (const sx of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.12, 4), fur); ear.position.set(sx * 0.08, 0.56, 0.29); ear.rotation.z = -sx * 0.25; g.add(ear)
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.025, 6, 6), dark); eye.position.set(sx * 0.06, 0.45, 0.43); g.add(eye)
    for (const fz of [-0.16, 0.16]) { const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.03, 0.2, 6), fur); leg.position.set(sx * 0.09, 0.12, fz); g.add(leg) }
  }
  // 縞
  for (const z of [-0.12, 0, 0.12]) { const st = new THREE.Mesh(new THREE.TorusGeometry(0.165, 0.012, 4, 14, Math.PI), M(0x9c5a20)); st.rotation.set(0, Math.PI / 2, 0); st.position.set(0, 0.3, z); g.add(st) }
  const tail = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0.32, -0.3), new THREE.Vector3(0, 0.45, -0.45), new THREE.Vector3(0, 0.62, -0.4)]), 8, 0.03, 6), fur)
  g.add(body, belly, head, tail)
  g.traverse(o => { if (o.isMesh) o.castShadow = true })
  return g
}
function makeIttan() {
  // 一反木綿: 長い白い布。縦の帯を波打たせる（頂点を動かす）。上の方に目
  const geo = new THREE.PlaneGeometry(0.55, 3.0, 1, 18); geo.translate(0, 1.5, 0)
  const cloth = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xf4f1e8, roughness: 0.95, side: THREE.DoubleSide }))
  cloth.castShadow = true
  const g = new THREE.Group(); g.add(cloth)
  for (const sx of [-1, 1]) { const e = new THREE.Mesh(new THREE.CircleGeometry(0.045, 10), new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide })); e.position.set(sx * 0.1, 2.75, 0.02); e.userData.eye = true; g.add(e) }
  g.userData.cloth = cloth; g.userData.base = geo.attributes.position.array.slice()
  return g
}
function makeKarakasa() {
  // から傘おばけ: 紫の番傘（骨の筋入り）に大きな一つ目と赤い舌、一本足に下駄
  const g = new THREE.Group()
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.9, 12, 1, true), new THREE.MeshStandardMaterial({ color: 0x7a3f8f, roughness: 0.7, side: THREE.DoubleSide }))
  canopy.position.y = 1.15
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2, rib = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 1.17, 4), M(0xe8d6a8)); rib.position.set(Math.sin(a) * 0.37, 1.15, Math.cos(a) * 0.37); rib.rotation.set(Math.cos(a) * 0.69, 0, -Math.sin(a) * 0.69); g.add(rib) }
  const eyeW = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), M(0xffffff)); eyeW.scale.z = 0.5; eyeW.position.set(0, 1.08, 0.5)
  const eyeB = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), M(0x111111)); eyeB.position.set(0, 1.08, 0.58)
  const tongue = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.3, 4, 8), M(0xd8343a)); tongue.position.set(0, 0.78, 0.48); tongue.rotation.x = 0.5
  const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.8, 8), M(0xe6c49a)); leg.position.y = 0.35
  const geta = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.32), M(0x8a5a2b)); geta.position.y = 0.0
  g.add(canopy, eyeW, eyeB, tongue, leg, geta)
  g.traverse(o => { if (o.isMesh) o.castShadow = true })
  g.userData.tongue = tongue
  return g
}
function makeUmbrella(color) {
  const g = new THREE.Group()
  const canopy = new THREE.Mesh(new THREE.ConeGeometry(0.75, 0.35, 10, 1, true), new THREE.MeshStandardMaterial({ color, roughness: 0.6, side: THREE.DoubleSide }))
  canopy.position.y = 0.9
  const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.95, 5), M(0x333333)); stick.position.y = 0.45
  g.add(canopy, stick); return g
}

export class Faller {
  constructor(look, kind = 'normal') {
    this.group = new THREE.Group(); this.t = Math.random() * 10; this.ok = false; this.kind = kind; this.look = look
    this.body = new THREE.Group(); this.group.add(this.body)
    if (kind === 'cat') { this.prop = makeCat(); this.body.add(this.prop); this.ok = true; return }
    if (kind === 'ittan') { this.prop = makeIttan(); this.body.add(this.prop); this.ok = true; return }
    if (kind === 'karakasa') { this.prop = makeKarakasa(); this.body.add(this.prop); this.ok = true; return }
    if (!A.custs.length) return
    const c = A.custs[((look % A.custs.length) + A.custs.length) % A.custs.length], root = skClone(c.scene)
    const box = new THREE.Box3().setFromObject(root); const k = 1.35 / (box.max.y - box.min.y)
    root.scale.setScalar(k); root.position.y = -box.min.y * k
    if (kind === 'heavy') root.scale.set(k * 1.55, k * 1.02, k * 1.5)   // ふくよか
    this.body.add(root)
    this.mixer = new THREE.AnimationMixer(root)
    const idle = c.clips.find(a => a.name === 'idle'); if (idle) this.mixer.clipAction(idle).play()
    const b = {}; root.traverse(o => { if (o.name) b[o.name] = o; if (o.isMesh) o.castShadow = true })
    if (kind === 'kappa') {
      // 河童: 緑の肌に塗り替え、頭に白い皿（水が光る）
      root.traverse(o => { if (o.isMesh && o.material) { o.material = o.material.clone(); o.material.color = new THREE.Color(0x7cc46a) } })
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.15, 0.04, 14), M(0xf2f2ee)); plate.position.y = 1.4
      const water = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.02, 14), new THREE.MeshStandardMaterial({ color: 0x7fc8ff, roughness: 0.1, metalness: 0.2 })); water.position.y = 1.425
      this.body.add(plate, water); this.water = water
    }
    if (kind === 'salary') { this.umb = makeUmbrella(0x1d2433); this.umb.position.set(0.18, 0.9, 0); this.body.add(this.umb) }
    if (kind === 'selfie') { const ph = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.15, 0.015), M(0x202428)); this.phone = ph; (b['arm-right'] || this.body).add(ph); ph.position.set(0, -0.35, 0.08) }
    this.b = b; this.ok = true
  }
  // st: warn | fall | carried | landed | saved
  update(st, dt) {
    if (!this.ok) return
    this.t += dt; const t = this.t, kind = this.kind
    this.body.rotation.set(0, 0, 0); this.body.position.set(0, 0, 0)
    if (kind === 'cat') {
      if (st === 'fall') this.body.rotation.set(t * 7, t * 3, 0)   // 空中で体をひねってくるくる
      else if (st === 'warn') this.body.rotation.z = Math.sin(t * 6) * 0.25
      else if (st === 'landed') this.body.rotation.x = Math.sin(t * 4) * 0.1
      return
    }
    if (kind === 'ittan') {
      const pos = this.prop.userData.cloth.geometry.attributes.position, base = this.prop.userData.base
      const amp = st === 'fall' ? 0.35 : st === 'carried' ? 0.12 : 0.2
      for (let i = 0; i < pos.count; i++) { const y = base[i * 3 + 1]; pos.array[i * 3 + 2] = Math.sin(y * 2.2 - t * 5) * amp * (y / 3) }
      pos.needsUpdate = true
      if (st === 'fall') this.body.rotation.set(0.9 + Math.sin(t * 2) * 0.3, 0, Math.sin(t * 1.3) * 0.5)   // 寝そべってひらひら
      if (st === 'carried') { this.body.rotation.x = 1.3; this.body.position.set(0, -0.2, -0.6) }   // 肩に掛ける
      return
    }
    if (kind === 'karakasa') {
      const p = this.prop
      if (st === 'fall') { this.body.rotation.set(Math.sin(t * 3) * 0.2, t * 1.5, Math.cos(t * 2.5) * 0.2) }
      else if (st === 'warn') this.body.position.y = Math.abs(Math.sin(t * 6)) * 0.25   // ぴょんぴょん跳ねる
      p.userData.tongue.rotation.x = 0.5 + Math.sin(t * 8) * 0.3
      if (st === 'carried') this.body.scale.setScalar(0.7); else this.body.scale.setScalar(1)
      return
    }
    const b = this.b
    this.mixer.update(dt)
    const aR = b['arm-right'], aL = b['arm-left'], lR = b['leg-right'], lL = b['leg-left'], hd = b['head']
    if (st === 'warn') {
      // ふちでぐらつく: 体を前後に揺らし、両腕をぐるぐる回す
      this.body.rotation.x = Math.sin(t * 5) * 0.28
      if (aR) aR.rotation.set(t * 11, 0, 0.4); if (aL) aL.rotation.set(t * 11 + Math.PI, 0, -0.4)
      if (kind === 'selfie' && aR) aR.rotation.set(-2.2, 0, 0.6)
      if (kind === 'thrill') { if (aR) aR.rotation.set(-3, 0, 0.3); if (aL) aL.rotation.set(-3, 0, -0.3) }
    } else if (st === 'fall') {
      if (kind === 'salary') {
        // 傘を差してふわふわ。体はまっすぐ、少し揺れる
        this.body.rotation.z = Math.sin(t * 2) * 0.15
        if (aR) aR.rotation.set(-2.9, 0, 0.2); if (lR) lR.rotation.x = Math.sin(t * 3) * 0.2; if (lL) lL.rotation.x = -Math.sin(t * 3) * 0.2
      } else if (kind === 'selfie') {
        // 自撮りしながら落ちる: 腕を伸ばしてスマホを顔に向ける、ピース
        this.body.rotation.set(-0.3, t * 0.6, 0)
        if (aR) aR.rotation.set(-2.2, 0, 0.6); if (aL) aL.rotation.set(-2.8, 0, -0.4)
      } else if (kind === 'thrill') {
        // 楽しんでいる: 両手を上げて大の字、くるくる
        this.body.rotation.set(-0.5, t * 2.2, 0)
        if (aR) aR.rotation.set(-3, 0, 0.9); if (aL) aL.rotation.set(-3, 0, -0.9); if (lR) lR.rotation.z = 0.5; if (lL) lL.rotation.z = -0.5
      } else {
        // 落ちている: 手足をばたつかせ、ゆっくり回る（ふくよかな人はもっとゆっくり）
        const sp = kind === 'heavy' ? 0.6 : 1
        this.body.rotation.set(Math.sin(t * 2.2 * sp) * 0.6, t * 1.4 * sp, Math.cos(t * 1.7 * sp) * 0.4)
        if (aR) aR.rotation.set(-2.6 + Math.sin(t * 18) * 0.7, 0, 0.3); if (aL) aL.rotation.set(-2.6 + Math.cos(t * 18) * 0.7, 0, -0.3)
        if (lR) lR.rotation.x = Math.sin(t * 16) * 0.8; if (lL) lL.rotation.x = -Math.sin(t * 16) * 0.8
        if (hd) hd.rotation.x = -0.4
      }
    } else if (st === 'carried') {
      // 抱えられている: しがみつく（落ちるのが好きな人は腕を組んで不満そう）
      if (kind === 'thrill') { if (aR) aR.rotation.set(-1.2, 0, -0.9); if (aL) aL.rotation.set(-1.2, 0, 0.9); if (hd) hd.rotation.y = Math.sin(t * 1.5) * 0.5 }
      else { if (aR) aR.rotation.set(-1.4, 0, 0.5); if (aL) aL.rotation.set(-1.4, 0, -0.5) }
      if (lR) lR.rotation.x = -0.5 + Math.sin(t * 6) * 0.15; if (lL) lL.rotation.x = -0.5 - Math.sin(t * 6) * 0.15
    } else if (st === 'landed') {
      // 地面に落ちた: しりもちをついて、おしりをさする（楽しんでいる人は手を上げて喜ぶ）
      this.body.rotation.x = -0.35; this.body.position.y = -0.35
      if (lR) lR.rotation.x = -1.5; if (lL) lL.rotation.x = -1.4
      if (kind === 'thrill') { if (aR) aR.rotation.set(-3 + Math.sin(t * 9) * 0.3, 0, 0.4); if (aL) aL.rotation.set(-3, 0, -0.4) }
      else { if (aR) aR.rotation.set(0.6 + Math.sin(t * 7) * 0.3, 0, 0.2); if (aL) aL.rotation.set(0, 0, -0.2) }
      if (hd) hd.rotation.z = Math.sin(t * 3) * 0.15
    } else if (st === 'saved') {
      // 引き渡した: 手を振ってお礼
      if (aR) aR.rotation.set(-2.75 + Math.sin(t * 9) * 0.35, 0, 0)
      if (hd) hd.rotation.z = Math.sin(t * 2.3) * 0.08
    }
    if (this.umb) this.umb.visible = st !== 'carried'
  }
}
