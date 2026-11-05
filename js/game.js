// 空中キャッチ。ベランダからうっかり落ちてくる人を、ワイヤーで飛んで空中で受けとめ、救護マットへ運ぶ
// WIRE ESCAPE → 空中出前 のワイヤーと街を使う。操作は WIRE ESCAPE と同じ（スティック・画面タッチでワイヤー・跳ぶ）
import * as THREE from 'three'
import { GAME } from '../shared/config.js?v=15'
import { createWorld } from '../shared/track.js?v=15'
import { buildScene } from './scene.js?v=15'
import { FX } from './fx.js?v=15'
import { loadSky, setAniso } from './look.js?v=15'
import { Q } from './quality.js?v=15'
import { RunnerModel } from './runnermodel.js?v=15'
import { CharRunnerModel, Faller, loadCharAssets, charAssets } from './charmodel.js?v=15'
import { createRunner, stepRunner, findAnchor, rayHit, floorAt, RUN } from '../shared/runner.js?v=15'
import { CATCH, KINDS, REASONS, LINES, createRound, stepCatch, urgent, active, nearestMat, rankOf, fallTime, reasonText, kindLine } from '../shared/catch.js?v=15'
import { createBot, botInput } from '../shared/bot.js?v=15'
import { drawCertificate } from './certificate.js?v=15'

const $ = id => document.getElementById(id)
// ---------------------------------------------------------------- 読み込みの進み具合（ロード画面）
const LM = THREE.DefaultLoadingManager, bootP = { done: 0, total: 0 }
LM.onStart = LM.onProgress = (url, a, b) => { bootP.done = a; bootP.total = b; bootP.at = performance.now(); window.__bootSet && window.__bootSet(0.2 + 0.8 * (b ? a / b : 0)) }
function bootWatch(onReady) {
  const t0 = performance.now()
  const tick = () => {
    // three は同じ画像を何体ぶんも読む時に数が合わなくなることがある（72% で止まった）。人物が読めて、1.5秒新しい読み込みが無ければ終わりとみなす
    const quiet = performance.now() - (bootP.at || 0) > 1500
    const done = bootP.total > 0 && (bootP.done >= bootP.total || quiet) && (charAssets.ready || charAssets.failed)
    if (done || performance.now() - t0 > 40000) {   // 40 秒たっても終わらない時は遊べる所まで進める
      window.__bootDone = true; window.__bootSet && window.__bootSet(1)
      const b = $('boot'); b.classList.add('out'); setTimeout(() => b.classList.add('hidden'), 380)
      onReady(); return
    }
    setTimeout(tick, 120)
  }
  tick()
}
const STEP = GAME.step
const URL_ = 'https://tom3games.github.io/sky-catch/'
const store = { get: k => { try { return localStorage.getItem(k) } catch (e) { return null } }, set: (k, v) => { try { localStorage.setItem(k, v) } catch (e) {} } }

// ---------------------------------------------------------------- 文言（日英）
const T = {
  ja: {
    signTop: '頭上注意', logo: '空中キャッチ', signSub: '落ちてくる人を受けとめろ',
    radioName: '無線', radioLine: 'この街、ベランダから人がよく落ちる。地面に着く前に受けとめてくれ。',
    start: '出動', how: '遊び方', lang: 'EN', more: 'ほかのゲーム', muteOn: '音 入', muteOff: '音 切', loading: '救護マットをふくらませ中',
    howTitle: '隊員手帳', ok: 'わかった',
    howItems: [
      'ビルを<b>タッチ</b>か<b>大きいボタン</b>でワイヤー。もう一回で離す',
      'ぐらついている人のそばへ。落ちてきたら受けとめる。<b>空中なら</b>点が多い',
      '壁に張り付いたら<b>上下左右に這える</b>。大きいボタンで壁から離れる',
      '地面では<b>ローリング</b>で素早く転がって移動できる',
      '抱えた人は青い<b>救護マット</b>に着地して引き渡す。続けて救うほど点が増える'
    ],
    keysPc: 'PC: WASD・矢印で移動　クリックでワイヤー（E でも可）　Shift でローリング　Space でも離れる　ドラッグで見回す',
    credit: '音: Kenney, rubberduck, artisticdude, poinl, Almitory, eXpl0it3r ほか（CC0）／人物: KayKit, Kenney（CC0）。詳しくは CREDITS.md',
    saved: '救助', carry: n => n ? `抱え${n}` : '', chain: n => `${n}連続`,
    pause: '休憩', paused: '休憩中', resume: '戻る', quit: 'やめる',
    jump: '跳ぶ', roll: 'ローリング', tooFar: '届かない', viewLab: '視点', view3: '三人称', view1: '一人称',
    hintWire: 'ビルをタッチかボタンでワイヤー', hintWirePc: 'ビルをクリック（か E）でワイヤー',
    hintClimb: '壁ではスティックで這う。大きいボタンで離れる', hintMat: '青い救護マットに着地して引き渡そう',
    warnTag: s => `あと${s}秒`, fallingShort: '落下中', hUp: m => `上に ${m}m`, hDown: m => `下に ${m}m`, hSame: '同じ高さ', lookUp: '上を見て', falling: 'わーっ！', full: 'もう抱えられない！',
    caught: (h, sw, g) => g ? '地面でキャッチ' : sw ? `スイングキャッチ！ 地上${h}m` : `キャッチ！ 地上${h}m`,
    saveMsg: (n, p) => `${n}人引き渡した +${p}点`, missTag: '受けとめそこねた',
    timeUp: '交代の時間',
    modeNormal: '通常 90秒', modeEndless: 'エンドレス', modeHint: '1人でも落としたら終わり',
    gameOver: '落としてしもた…', endlessTime: s => `${s}秒`,
    bodyEndless: (s, sec, k) => `あなたは${sec}秒のあいだ、1人も落とさずに${s}名${k ? `（${k}）` : ''}を受けとめ続けました。最後の1人は惜しくも地面へ。その粘りと腕前をたたえ、ここに感謝の意を表します。`,
    postEndless: (n, sec) => `空中キャッチのエンドレスで${sec}秒・${n}人受けとめた`,
    chief: '町内会長　宙野 守', again: 'もう一回', save: '画像を保存', post: 'Xでポスト', toTitle: 'タイトル',
    body: (s, m) => s ? `あなたは本日、ベランダから落ちてきた${s + m}名のうち${s}名を空中で受けとめ、救護マットまで運びました。その勇気と腕前をたたえ、ここに感謝の意を表します。` : `あなたは本日、街の上空を飛び回りました。落ちてきた${m}名は、植え込みと段ボールに助けられました。次はぜひ受けとめてください。`,
    ranks: ['見習い', '一人前', '名人', '空の\n守り神'],
    postText: (n, s) => `空中キャッチで${n}人受けとめて${s}点でした`
  },
  en: {
    signTop: 'WATCH OUT ABOVE', logo: 'Sky Catch', signSub: 'Catch the people who fall',
    radioName: 'RADIO', radioLine: 'People keep falling off balconies in this town. Catch them before they hit the ground.',
    start: 'Go', how: 'How to play', lang: 'JP', more: 'More games', muteOn: 'Sound on', muteOff: 'Muted', loading: 'Inflating the rescue mats',
    howTitle: 'Field notes', ok: 'Got it',
    howItems: [
      '<b>Tap</b> a building or the big button to swing. Press again to let go',
      'Get close to anyone wobbling and catch them. <b>Mid-air</b> catches score more',
      'On a wall you can <b>crawl in any direction</b>. The big button lets go of the wall',
      'On the ground, <b>roll</b> to get somewhere fast',
      'Land on a blue <b>rescue mat</b> to hand them over. Streaks score more'
    ],
    keysPc: 'PC: WASD / arrows move · click to wire (or E) · Shift to roll · Space also lets go · drag to look',
    credit: 'Sounds: Kenney, rubberduck, artisticdude, poinl, Almitory, eXpl0it3r and others (CC0) / Characters: KayKit, Kenney (CC0). See CREDITS.md',
    saved: 'SAVED', carry: n => n ? `holding ${n}` : '', chain: n => `${n} streak`,
    pause: 'Break', paused: 'On break', resume: 'Back', quit: 'Quit',
    jump: 'Jump', roll: 'ROLL', tooFar: 'Too far', viewLab: 'VIEW', view3: '3rd', view1: '1st',
    hintWire: 'Tap a building or the big button to wire', hintWirePc: 'Click a building (or E) to wire',
    hintClimb: 'Crawl with the stick. The big button lets go', hintMat: 'Land on a blue rescue mat to hand them over',
    warnTag: s => `${s}s`, fallingShort: 'Falling', hUp: m => `${m}m up`, hDown: m => `${m}m down`, hSame: 'Same height', lookUp: 'Look up', falling: 'Waaah!', full: 'Hands full!',
    caught: (h, sw, g) => g ? 'Ground catch' : sw ? `Swing catch! ${h}m up` : `Caught! ${h}m up`,
    saveMsg: (n, p) => `Handed over ${n} +${p}`, missTag: 'Missed',
    timeUp: 'Shift over',
    modeNormal: 'Normal 90s', modeEndless: 'Endless', modeHint: 'One miss and it is over',
    gameOver: 'Dropped one...', endlessTime: s => `${s}s`,
    bodyEndless: (s, sec, k) => `For ${sec} seconds you kept catching without a single drop, ${s} saved${k ? ` (${k})` : ''}. The last one hit the ground. We thank you for your grit and skill.`,
    postEndless: (n, sec) => `Sky Catch endless: ${sec}s, ${n} caught`,
    chief: 'Neighborhood Chief', again: 'Again', save: 'Save image', post: 'Post on X', toTitle: 'Title',
    body: (s, m) => s ? `Today you caught ${s} of the ${s + m} people who fell from balconies, in mid-air, and carried them to the rescue mats. We thank you for your courage and skill.` : `Today you flew all over town. The ${m} people who fell were saved by hedges and cardboard boxes. Please catch them next time.`,
    ranks: ['ROOKIE', 'PRO', 'MASTER', 'SKY\nGUARDIAN'],
    postText: (n, s) => `I caught ${n} falling people in Sky Catch and scored ${s}`
  }
}
// 視点（2026-11-05 本人「空中に1人称視点を追加してみて欲しい。テスト的に」）。既定は今までの三人称。遊び中の小さいボタンで切り替えて覚える
let viewMode = store.get('catch.view') === 'first' ? 'first' : 'third'
function showView() { $('viewNow').textContent = t(viewMode === 'first' ? 'view1' : 'view3'); $('btnView').classList.toggle('on', viewMode === 'first') }
function setView(v) { viewMode = v === 'first' ? 'first' : 'third'; store.set('catch.view', viewMode); showView() }
const fpOn = () => mode === 'play' && !!me && viewMode === 'first'
let gameMode = store.get('catch.mode') === 'endless' ? 'endless' : 'normal'   // 通常 / エンドレス（2026-11-03 本人「誰かを落としてしまうまでエンドレスでできるモード」）
let lang = store.get('catch.lang') || ((navigator.language || 'ja').startsWith('ja') ? 'ja' : 'en')
const t = k => T[lang][k]
const L2 = pair => pair[lang === 'ja' ? 0 : 1]
function applyLang() {
  document.documentElement.lang = lang
  for (const el of document.querySelectorAll('[data-t]')) { const v = t(el.dataset.t); if (typeof v === 'string') el.textContent = v }
  $('howList').innerHTML = t('howItems').map((s, i) => `<li data-n="${i + 1}"><span>${s}</span></li>`).join('')
  $('howKeys').textContent = touchMode ? '' : t('keysPc')
  $('btnMute').textContent = Snd.muted ? t('muteOff') : t('muteOn')
  showView()
}

// ---------------------------------------------------------------- 音（録音素材だけ）
Snd.muted = store.get('catch.mute') === '1'
Snd.def({
  wire: ['snd/swish-1.mp3', 'snd/swish-2.mp3', 'snd/swish-3.mp3'], hook: ['snd/metalClick.mp3', 'snd/metal_02.mp3'],
  land: ['snd/footstep_01.mp3', 'snd/footstep_02.mp3'], bonk: ['snd/thwack-01.mp3', 'snd/thwack-03.mp3'],
  grunt: ['snd/grunt_01.mp3', 'snd/grunt_02.mp3', 'snd/grunt_03.mp3', 'snd/grunt_04.mp3'],
  roll: 'snd/swish-5.mp3', whoosh: 'snd/swish-5.mp3', cat: ['snd/cat_mew1.mp3', 'snd/cat_mew2.mp3'], alert: 'snd/bong.mp3', catch: ['snd/thwack-01.mp3', 'snd/thwack-03.mp3'], save: 'snd/confirm.mp3', applause: 'snd/applause.mp3',
  thud: 'snd/drop.mp3', boing: 'snd/spring.mp3', pop: 'snd/plop.mp3', click: 'snd/click_001.mp3', tick: 'snd/tick_002.mp3', ding: 'snd/bell_ding1.mp3',
  win: 'snd/jingles_SAX01.mp3', meh: 'snd/jingles_SAX03.mp3', lose: 'snd/jingles_PIZZA07.mp3'
})
const sfx = (n, o) => Snd.play(n, o)

// ---------------------------------------------------------------- 描画の土台
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: true })
renderer.setPixelRatio(Q.pixelRatio)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1.0
setAniso(renderer)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
$('view').appendChild(renderer.domElement)
const scene = new THREE.Scene()
scene.fog = new THREE.FogExp2(0xc9d6e2, 0.0022)
scene.background = new THREE.Color(0xa9c4e0)
const sun = new THREE.DirectionalLight(0xfff1dc, 3.0)
sun.userData.dir = new THREE.Vector3(-0.45, 0.62, -0.64).normalize()
sun.castShadow = true
sun.shadow.mapSize.set(Q.shadow, Q.shadow)
Object.assign(sun.shadow.camera, { left: -Q.shadowRange, right: Q.shadowRange, top: Q.shadowRange, bottom: -Q.shadowRange, near: 1, far: 400 })
sun.shadow.normalBias = 0.04; sun.shadow.bias = -0.0004
scene.add(sun, sun.target)
const hemi = new THREE.HemisphereLight(0xc4d8ff, 0x6a5a48, 1.8)
scene.add(hemi)
loadSky(renderer, scene, sun, () => { hemi.intensity = 0.4 })
const camera = new THREE.PerspectiveCamera(64, 1, 0.3, 2400)
const world = createWorld('city')
const built = buildScene(scene, world)
for (const g of built.gates) g.grp.visible = false
const fx = new FX(scene, world)

// ---------------------------------------------------------------- 救護マット
function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const tx = new THREE.CanvasTexture(c); tx.colorSpace = THREE.SRGBColorSpace; return tx }
const matTex = canvasTex(256, 256, (x, w, h) => {
  x.fillStyle = '#2a6fd6'; x.fillRect(0, 0, w, h)
  x.strokeStyle = '#1b4a96'; x.lineWidth = 10; x.strokeRect(5, 5, w - 10, h - 10)
  x.fillStyle = '#fff'; x.fillRect(w / 2 - 22, 50, 44, h - 100); x.fillRect(50, h / 2 - 22, w - 100, 44)
})
const matGeo = new THREE.BoxGeometry(CATCH.matR * 1.5, 0.6, CATCH.matR * 1.5)
const matMat = [new THREE.MeshStandardMaterial({ color: 0x2a6fd6, roughness: 0.8 }), null, null, null, null, null]
matMat[2] = new THREE.MeshStandardMaterial({ map: matTex, roughness: 0.8 })
for (let i = 0; i < 6; i++) if (!matMat[i]) matMat[i] = matMat[0]
const mats = []
function placeMats(list) {
  for (const m of mats) scene.remove(m)
  mats.length = 0
  for (const p of list) {
    const g = new THREE.Group()
    const pad = new THREE.Mesh(matGeo, matMat); pad.position.y = 0.3; pad.receiveShadow = pad.castShadow = true
    const ring = new THREE.Mesh(new THREE.RingGeometry(CATCH.matR - 0.4, CATCH.matR, 48), new THREE.MeshBasicMaterial({ color: 0x8fc0ff, transparent: true, opacity: 0.0, depthWrite: false }))
    ring.rotation.x = -Math.PI / 2; ring.position.y = 0.66
    // 遠くからも見える柱（救護の旗）
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 7, 6), new THREE.MeshStandardMaterial({ color: 0xdddddd })); pole.position.set(CATCH.matR * 0.7, 3.5, CATCH.matR * 0.7)
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.1), new THREE.MeshBasicMaterial({ map: matTex, side: THREE.DoubleSide })); flag.position.set(CATCH.matR * 0.7 + 0.9, 6.3, CATCH.matR * 0.7)
    g.add(pad, ring, pole, flag); g.position.set(p.x, p.y, p.z)
    g.userData = { ring, flag }
    scene.add(g); mats.push(g)
  }
}
// ベランダ（落ちそうな人が立つ小さな床と手すり）
const balcMat = new THREE.MeshStandardMaterial({ color: 0x9a9fa6, roughness: 0.6, metalness: 0.3 })
function makeBalcony() {
  const g = new THREE.Group()
  const slab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.18, 1.3), balcMat); slab.position.set(0, -0.09, 0.15)
  const rail = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.06, 0.06), balcMat); rail.position.set(0, 0.95, 0.78)
  g.add(slab, rail)
  for (const px of [-1.15, -0.4, 0.4, 1.15]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.95, 0.05), balcMat); p.position.set(px, 0.47, 0.78); g.add(p) }
  slab.castShadow = true
  return g
}
// 落ちる人の見た目（id ごと）
const vis = new Map()
function visOf(f) {
  let v = vis.get(f.id)
  if (!v) {
    const p = new Faller(f.look, f.kind)
    const b = makeBalcony(); b.position.set(f.x - f.nx * 0.5, f.top, f.z - f.nz * 0.5); b.rotation.y = Math.atan2(f.nx, f.nz); scene.add(b)
    // 影絵の板（人物の読み込み前だけ）
    const stand = p.ok ? null : new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.7, 4, 8), new THREE.MeshStandardMaterial({ color: 0xd06a3a }))
    if (stand) { stand.position.y = 0.7; p.group.add(stand) }
    scene.add(p.group)
    v = { p, b }; vis.set(f.id, v)
  }
  return v
}
function clearVis() { for (const v of vis.values()) { scene.remove(v.p.group); scene.remove(v.b) } vis.clear(); $('bubbles').innerHTML = ''; bubEls.clear() }
// ワイヤー
const ropeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1, 5).rotateX(Math.PI / 2).translate(0, 0, 0.5), new THREE.MeshBasicMaterial({ color: 0x2b2b2b }))
ropeMesh.visible = false; scene.add(ropeMesh)
// 一人称のワイヤー: 手元は細く、先は太く（近くで太い棒に見えない・遠くでも線が消えない）
const ropeGeoThird = ropeMesh.geometry, ropeGeoFirst = new THREE.CylinderGeometry(0.07, 0.005, 1, 6).rotateX(Math.PI / 2).translate(0, 0, 0.5)
// 一人称の腕（カメラの子。壁が近くても腕は壁に埋まらないよう、いちばん手前に描く）
const fpArm = (() => {
  const mk = (geo, color, order) => { const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: 0.75, transparent: true, depthTest: false, depthWrite: false, fog: false })); m.renderOrder = order; m.frustumCulled = false; return m }
  const sleeve = mk(new THREE.CylinderGeometry(0.021, 0.036, 1, 10), 0xd9772a, 20)
  const glove = mk(new THREE.CapsuleGeometry(0.023, 0.05, 4, 10), 0x6b4a32, 21)   // 隊員の手袋・服の色
  const nozzle = mk(new THREE.CylinderGeometry(0.007, 0.012, 0.035, 8), 0x22262c, 22)
  const g = new THREE.Group(); g.add(sleeve, glove, nozzle); g.visible = false
  return { g, sleeve, glove, nozzle, k: 0, hand: new THREE.Vector3(), elbow: new THREE.Vector3(), dir: new THREE.Vector3(), up: new THREE.Vector3(0, 1, 0), world: new THREE.Vector3() }
})()
camera.add(fpArm.g); scene.add(camera)
const aimMark = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.75, 24), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.85, depthTest: false }))
aimMark.renderOrder = 5; aimMark.visible = false; scene.add(aimMark)
// 落ちてくる人の場所が分かる目印（2026-11-03 本人「どっから落ちてきてんのか分からへん」。空中出前の届け先の形を流用）
// 2026-11-04 本人「落ちてる途中でもその場所を黄色く光らせて」: 前は急ぐ1人だけ・近づくと透明・抱えきれない時は消えていた。
// ぐらついている人・落ちている人の全員に1組ずつ。①人を中心に光る黄色の輪（人についてくる。遠くでも画面で同じ大きさ。建物の裏でも見える）
// ②地面から屋上の上までの光の柱（落下中は人についてくる）③地面の落下予想地点の黄色い輪。受けとめた・落ちた瞬間に消える
const MARK_YELLOW = 0xffd21e
const markTex = (() => {
  const c = document.createElement('canvas'); c.width = 4; c.height = 128
  const x = c.getContext('2d'), g = x.createLinearGradient(0, 0, 0, 128)
  g.addColorStop(0, 'rgba(255,210,30,0)'); g.addColorStop(0.12, 'rgba(255,210,30,.95)'); g.addColorStop(1, 'rgba(255,200,20,.6)')
  x.fillStyle = g; x.fillRect(0, 0, 4, 128)
  const beamT = new THREE.CanvasTexture(c); beamT.colorSpace = THREE.SRGBColorSpace
  const h = document.createElement('canvas'); h.width = h.height = 128
  const y = h.getContext('2d'), r = y.createRadialGradient(64, 64, 0, 64, 64, 64)
  r.addColorStop(0, 'rgba(255,220,40,.25)'); r.addColorStop(0.45, 'rgba(255,220,40,.3)'); r.addColorStop(0.62, 'rgba(255,214,30,1)'); r.addColorStop(0.74, 'rgba(255,214,30,.75)'); r.addColorStop(1, 'rgba(255,214,30,0)')
  y.fillStyle = r; y.fillRect(0, 0, 128, 128)
  const haloT = new THREE.CanvasTexture(h); haloT.colorSpace = THREE.SRGBColorSpace
  return { beamT, haloT }
})()
const ringGeo = new THREE.RingGeometry(1.15, 1.75, 32), beamGeo = new THREE.CylinderGeometry(1, 1, 1, 16, 1, true).translate(0, 0.5, 0)
const markPool = []
function markAt(i) {
  if (markPool[i]) return markPool[i]
  const mat = new THREE.MeshBasicMaterial({ map: markTex.beamT, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false })
  const col = new THREE.Mesh(beamGeo, mat); col.renderOrder = 3
  const g = new THREE.Group(); g.add(col); g.visible = false; scene.add(g)
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex.haloT, transparent: true, depthTest: false, depthWrite: false, fog: false, toneMapped: false }))
  halo.renderOrder = 5; halo.visible = false; scene.add(halo)
  const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: MARK_YELLOW, transparent: true, opacity: 0.85, depthWrite: false, fog: false, toneMapped: false }))
  ring.rotation.x = -Math.PI / 2; ring.visible = false; scene.add(ring)
  return (markPool[i] = { g, col, mat, halo, ring, id: null })
}
const headSign = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128
  const x = c.getContext('2d')
  x.translate(64, 64); x.rotate(Math.PI / 4); x.fillStyle = '#f2c230'; x.strokeStyle = '#16140f'; x.lineWidth = 8; x.fillRect(-38, -38, 76, 76); x.strokeRect(-38, -38, 76, 76); x.setTransform(1, 0, 0, 1, 0, 0)
  x.fillStyle = '#16140f'; x.fillRect(58, 30, 12, 46); x.beginPath(); x.arc(64, 92, 7, 0, Math.PI * 2); x.fill()
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false }))
  sp.renderOrder = 6; sp.visible = false; scene.add(sp)
  return sp
})()

// ---------------------------------------------------------------- 状態
let mode = 'title'
let me = null, rd = null, model = null
let demo = null
let paused = false, dbgPause = false, endAt = 0, photo = null, photoScore = -1
const touchMode = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches
document.body.classList.toggle('is-touch', touchMode)
let hitStop = 0, fovKick = 0, flashA = 0   // 受けとめた・引き渡した瞬間に少し止める・視野を一瞬動かす・光る（しっぽ取り v5 と同じ）
// 見上げられる下限（2026-11-03 本人「もうちょっとカメラを上に上げられるようにしないと、どこから落ちてきてるのか分からへん」）。-0.35 から真上近くまで
const PITCH_MIN = -1.25
const cam = { hd: 0, pitch: 0.15, userT: -1e9, pos: new THREE.Vector3(), off: new THREE.Vector3(-6, 3, 0), look: new THREE.Vector3(), lookOff: new THREE.Vector3(), fov: 64 }
const _v = new THREE.Vector3(), _w = new THREE.Vector3()
const photoCam = new THREE.PerspectiveCamera(50, 4 / 3, 0.3, 2400)

function spawnRunner(id, rnd) { const m = rnd.mats[0]; return createRunner({ id, spawn: { x: m.x, y: m.y, z: m.z - 6, yaw: 0 } }) }
function newModel() { if (model) { scene.remove(model.group); model.dispose() } model = charAssets.ready ? new CharRunnerModel() : new RunnerModel(); if (model.okamochi) model.okamochi.visible = false; scene.add(model.group); return model }
loadCharAssets().then(() => { if (charAssets.ready && model && !(model instanceof CharRunnerModel)) newModel(); if (charAssets.ready) clearVis() })

// ---------------------------------------------------------------- 入力（WIRE ESCAPE と同じ）
const keys = new Set()
const press = { jump: false, roll: false }
let pendingWire = null
addEventListener('keydown', e => {
  if (mode !== 'play') return
  if (e.repeat) return
  keys.add(e.code)
  if (e.code === 'KeyE') pendingWire = { at: null, key: true }
  if (e.code === 'Space') { press.jump = true; e.preventDefault() }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') press.roll = true   // ローリング
  if (e.code === 'Escape' || e.code === 'KeyP') setPause(!paused)
})
addEventListener('keyup', e => keys.delete(e.code))
const gest = new Map()
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2()
renderer.domElement.addEventListener('pointerdown', e => {
  Snd.init()
  if (mode !== 'play' || paused) return
  gest.set(e.pointerId, { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: false })
})
addEventListener('pointermove', e => {
  const g = gest.get(e.pointerId); if (!g) return
  const dx = e.clientX - g.lx, dy = e.clientY - g.ly; g.lx = e.clientX; g.ly = e.clientY
  if (!g.moved && Math.hypot(e.clientX - g.x, e.clientY - g.y) > 12) g.moved = true
  if (!g.moved) return
  cam.hd -= dx * 0.00792; cam.pitch = Math.max(PITCH_MIN, Math.min(1, cam.pitch + dy * 0.00528)); cam.userT = performance.now()   // 見回す感度 0.0072/0.0048 の約1.1倍（2026-11-05 本人「ほんの少しだけ上げて」。その前は 2026-11-03 に 0.006/0.004 から1.2倍）
})
addEventListener('pointerup', e => {
  const g = gest.get(e.pointerId); if (!g) return
  gest.delete(e.pointerId)
  if (!g.moved && performance.now() - g.t < 450 && mode === 'play' && !paused) aimAt(e.clientX, e.clientY)
})
addEventListener('pointercancel', e => gest.delete(e.pointerId))
function aimAt(cx, cy) {
  const rc = renderer.domElement.getBoundingClientRect()
  ndc.set((cx - rc.left) / rc.width * 2 - 1, -((cy - rc.top) / rc.height) * 2 + 1)
  ray.setFromCamera(ndc, camera)
  const o = ray.ray.origin, d = ray.ray.direction
  const b = me && me.rope ? null : rayHit(world, o.x, o.y, o.z, d.x, d.y, d.z, 400)
  let at = b
  // 地面ワイヤー: 空中にいて、画面の地面（道・屋上）をちゃんとタップした時だけ。建物にも当たる時は建物を優先（ずれたタップで地面に掛けない）
  if (me && !me.rope && !me.grounded && !me.climbing) {
    const g = groundRay(o, d, RUN.wireRange + 60)
    const tb = b ? Math.hypot(b.x - o.x, b.y - o.y, b.z - o.z) : Infinity
    if (g && !(tb < g.t + 6)) at = { x: g.x, y: g.y, z: g.z, ground: true }
  }
  pendingWire = { at, sx: cx, sy: cy }
}
// 画面の光線が最初に地面（道・橋・屋上）を下回る点。1m 刻みで進めて、最後の1m を二分して詰める
function groundRay(o, d, maxT) {
  const below = t => { const x = o.x + d.x * t, y = o.y + d.y * t, z = o.z + d.z * t; return y <= floorAt(world, x, z, y).h }
  for (let t = 1; t < maxT; t += 1) {
    if (!below(t)) continue
    let a = t - 1, b2 = t
    for (let i = 0; i < 6; i++) { const m = (a + b2) / 2; if (below(m)) b2 = m; else a = m }
    const x = o.x + d.x * b2, z = o.z + d.z * b2
    return { x, y: floorAt(world, x, z, o.y + d.y * b2 + 0.5).h, z, t: b2 }
  }
  return null
}
const stick = { x: 0, y: 0, id: null }
{
  // 左スティックは左下に固定（2026-11-03 本人「左スティックは固定で」）。触った所へ動かない。円の少し外（約1.4倍）から触っても、
  // 画面をなぞっていた指がすべって入ってきても（その時点から）倒した扱いにする
  const el = $('stick'), knob = el.querySelector('.knob')
  const ctr = () => { const r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, R: r.width / 2 } }
  const upd = e => {
    const c = ctr()
    let dx = (e.clientX - c.x) / c.R, dy = (e.clientY - c.y) / c.R
    const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l }
    stick.x = dx; stick.y = dy; knob.style.transform = `translate(${dx * 36}px,${dy * 36}px)`
  }
  const grab = e => { stick.id = e.pointerId; el.classList.add('held'); upd(e) }
  el.addEventListener('pointerdown', e => { Snd.init(); if (stick.id != null) return; e.preventDefault(); e.stopPropagation(); grab(e) })
  addEventListener('pointermove', e => {
    if (e.pointerId === stick.id) { upd(e); return }
    if (stick.id == null && gest.has(e.pointerId)) {   // 画面をなぞっていた指がスティックの円に入った
      const c = ctr(); if (Math.hypot(e.clientX - c.x, e.clientY - c.y) < c.R) { gest.delete(e.pointerId); grab(e) }
    }
  }, true)
  const end = e => { if (e.pointerId !== stick.id) return; stick.id = null; stick.x = stick.y = 0; knob.style.transform = ''; el.classList.remove('held') }
  addEventListener('pointerup', end, true); addEventListener('pointercancel', end, true)
  window.__stickCenter = () => ctr()
  // 大きいボタン: 前の上へ自動でワイヤー。ワイヤー中なら離す、壁に張り付き中なら壁から離れる（跳ぶボタンは無い。2026-11-02 本人「飛ぶってボタンいらん」）
  for (const b of document.querySelectorAll('.tbtn')) b.addEventListener('pointerdown', e => { e.preventDefault(); Snd.init(); if (b.dataset.k === 'wire') pendingWire = { at: null, key: true }; if (b.dataset.k === 'roll') press.roll = true })
}
let lastWireYaw
// 一人称の大きいボタン: 見ている画面の中の掛け点を選ぶ（三人称の 55 度前後は、一人称だと画面の上の外へ出て、どこへ掛かったか見えない）
const fpAim = () => ({ pitch: Math.max(32, Math.min(76, -cam.pitch * 180 / Math.PI + 30)), yawK: 0.05 })
function screenBasis() { const e = camera.matrixWorld.elements; let rx = e[0], rz = e[2], fx = -e[8], fz = -e[10]; const a = Math.hypot(rx, rz) || 1, b = Math.hypot(fx, fz) || 1; return { r: { x: rx / a, z: rz / a }, f: { x: fx / b, z: fz / b } } }
function gather() {
  let thr = 0, brk = 0, steer = 0, cx = 0, cy = 0
  if (keys.has('KeyW') || keys.has('ArrowUp')) { thr = 1; cy = 1 }
  if (keys.has('KeyS') || keys.has('ArrowDown')) { brk = 1; cy = -1 }
  if (keys.has('KeyA') || keys.has('ArrowLeft')) { steer -= 1; cx -= 1 }
  if (keys.has('KeyD') || keys.has('ArrowRight')) { steer += 1; cx += 1 }
  // 画面の右と前（カメラの実際の向きから取る。cam.hd の式に頼らない）
  const SR = screenBasis().r, SF = screenBasis().f
  let moveDir = null
  if (stick.id != null) {
    // 空中出前と同じ効き方: 倒した向き（カメラから見て）へ走る。少し倒すだけで全力
    const mag = Math.min(1, Math.hypot(stick.x, stick.y))
    if (mag > 0.15) {
      const dx = SR.x * stick.x - SF.x * stick.y, dz = SR.z * stick.x - SF.z * stick.y, l = Math.hypot(dx, dz) || 1
      moveDir = { x: dx / l, z: dz / l }; steer = 0; thr = Math.max(thr, Math.min(1, mag * 1.3))
    }
    // 壁に張り付いている時: 上下で登り降り、左右は画面で見た左右に合わせて壁沿いに
    cy = Math.abs(stick.y) > 0.25 ? -stick.y : 0; cx = 0
    if (me.climbing && Math.abs(stick.x) > 0.25) {
      const cl = me.climbing, sideSign = SR.x * cl.nz - SR.z * cl.nx >= 0 ? 1 : -1   // 壁沿いの正の向き (nz,-nx) と画面の右をそろえる
      cx = stick.x * sideSign
    }
  }
  const inp = { throttle: thr, brake: brk, steer, jump: press.jump, wire: false, cx, cy, moveDir, roll: press.roll }
  inp.wireYaw = moveDir ? Math.atan2(moveDir.x, moveDir.z) : touchMode ? Math.atan2(SF.x, SF.z) : undefined   // ワイヤーボタンの自動狙い: スティックの向き、スマホでは画面の前
  lastWireYaw = inp.wireYaw
  if (fpOn()) inp.wireAim = fpAim()
  if (pendingWire) { inp.wire = true; if (pendingWire.at) inp.wireAt = pendingWire.at; me._tap = pendingWire; pendingWire = null }
  press.jump = false; press.roll = false
  return inp
}

// ---------------------------------------------------------------- 画面の切り替え
function show(id) { for (const s of ['title', 'how', 'pause', 'result']) $(s).classList.toggle('hidden', s !== id); $('hud').classList.toggle('hidden', mode !== 'play') }
function toTitle() {
  mode = 'title'; paused = false; me = null; rd = null
  const r0 = createRound(world, 3)
  demo = { rd: r0, r: spawnRunner('demo', r0), b: createBot('skilled', 3) }
  clearVis(); placeMats(r0.mats); newModel()
  show('title'); $('touch').classList.add('hidden')
  Snd.loop('bgm', 'snd/bgm_title.mp3', 0.22); Snd.loop('amb', 'snd/city_street_loop.wav', 0.2)
}
let hints = []
function startRound(seed = Math.floor(Math.random() * 1e6)) {
  Snd.init(); sfx('click')
  mode = 'play'; paused = false; demo = null; photo = null; photoScore = -1; endAt = 0
  rd = createRound(world, seed, gameMode); me = spawnRunner('me', rd)
  clearVis(); placeMats(rd.mats); newModel()
  cam.hd = 0; cam.pitch = viewMode === 'first' ? -0.15 : 0.15; cam.userT = -1e9   // 一人称は少し上を見て始める（掛け点が画面に入る）
  show(null); $('touch').classList.toggle('hidden', !touchMode)
  Snd.loop('bgm', 'snd/bgm_play.mp3', 0.16); Snd.loop('amb', 'snd/city_street_loop.wav', 0.26); Snd.loop('wind', 'snd/wind_loop.wav', 0.0001)
  say(`<small>${t('radioName')}</small>${t('radioLine')}`, 2.6)
  hints = [{ at: 3.2, k: touchMode ? 'hintWire' : 'hintWirePc', once: 'wire' }]
  shownClimb = false; shownMat = false
}
let shownClimb = false, shownMat = false
function setPause(p) { if (mode !== 'play') return; paused = p; $('pause').classList.toggle('hidden', !p) }

// ---------------------------------------------------------------- 画面の文字
let sayT = 0
function say(html, sec = 1.8) { const el = $('say'); el.innerHTML = html; sayT = sec; el.classList.remove('hidden') }
const bubEls = new Map()
function project(x, y, z) { const p = _v.set(x, y, z).project(camera); return { x: (p.x * 0.5 + 0.5) * innerWidth, y: (-p.y * 0.5 + 0.5) * innerHeight, behind: p.z > 1 } }
function updateHud(dt) {
  const n = String(Math.min(999, rd.saved)).padStart(3, '0')
  if ($('cNum').textContent !== n) { $('cNum').textContent = n; const c = $('counter'); c.classList.remove('bump'); void c.offsetWidth; c.classList.add('bump') }
  $('cCarry').textContent = t('carry')(rd.carry.length)
  const ch = $('chain'); ch.classList.toggle('hidden', rd.chain < 2); ch.textContent = t('chain')(rd.chain)
  // ストップウォッチ
  // エンドレスは経った秒を数え上げる（針は1分で1周）
  const endless = rd.mode === 'endless'
  const left = endless ? rd.t : Math.max(0, CATCH.roundSec - rd.t), k = endless ? (rd.t % 60) / 60 || 0.001 : left / CATCH.roundSec
  $('wNum').textContent = endless ? Math.floor(rd.t) : Math.ceil(left)
  $('watch').classList.toggle('hurry', !endless && left <= 10)
  const a = Math.PI * 2 * k, x1 = 32 + Math.sin(a) * 25, y1 = 35 - Math.cos(a) * 25
  $('wArc').setAttribute('d', k <= 0 ? '' : k >= 0.999 ? 'M32 10 A25 25 0 1 1 31.99 10 Z' : `M32 35 L32 10 A25 25 0 ${a > Math.PI ? 1 : 0} 1 ${x1.toFixed(2)} ${y1.toFixed(2)} Z`)
  if (sayT > 0) { sayT -= dt; if (sayT <= 0) $('say').classList.add('hidden') }
  // 吹き出し: ぐらついている人と落ちている人
  const seen = new Set()
  for (const f of active(rd)) {
    seen.add(f.id)
    let el = bubEls.get(f.id)
    if (!el) { el = document.createElement('div'); el.className = 'bub'; $('bubbles').appendChild(el); bubEls.set(f.id, el) }
    const p = project(f.x, f.y + 2.0, f.z)
    const d = Math.hypot(f.x - me.x, f.z - me.z)
    if (p.behind || p.x < 10 || p.x > innerWidth - 10 || p.y < 0 || p.y > innerHeight - 10) { el.style.display = 'none'; continue }
    // 左上の数取器・右上の時計に重ねない（吹き出しは下端を合わせて上へ伸びる）
    // 遠くても黄色い輪を隠さない（吹き出しの先を輪の上に出す。輪の半径は画面で約35px、近いと大きい）
    const p0 = project(f.x, f.y + 0.7, f.z), dH0 = camera.position.distanceTo(_w.set(f.x, f.y + 0.7, f.z)), ringPx = innerHeight / (1.25 * Math.max(1, dH0)) * haloSize(dH0) * 0.38
    const bx = Math.max(90, Math.min(innerWidth - 90, p.x)), by = Math.max(190, Math.min(p.y, p0.y - ringPx - 12))
    el.style.display = ''; el.style.left = bx + 'px'; el.style.top = by + 'px'
    el.classList.toggle('far', d > 45)
    const kn = f.kind && f.kind !== 'normal' ? `<b>${L2([KINDS[f.kind].ja, KINDS[f.kind].en])}</b>` : ''
    const html = f.state === 'warn' ? `<i>${t('warnTag')(Math.max(1, Math.ceil((f.warnT || CATCH.warn) - f.t)))}・${Math.round(d)}m</i>${kn}${L2(reasonText(f))}` : `<i>${f.kind && f.kind !== 'normal' ? L2(kindLine(f.kind, 'fall', f.id)) : t('falling')}</i>${kn}`
    if (el._h !== html) { el.innerHTML = html; el._h = html }
  }
  for (const [id, el] of bubEls) if (!seen.has(id)) { el.remove(); bubEls.delete(id) }
  // 画面の外への矢印: 急ぐ人（いなければ、抱えている時はマット）
  const f = rd.carry.length < CATCH.carryMax ? urgent(rd) : null
  const m = rd.carry.length ? nearestMat(rd, me.x, me.z) : null
  const goMat = m && (!f || rd.carry.length >= CATCH.carryMax)
  const ar = $('arrow')
  if (!f && !m) { ar.classList.add('hidden'); return }
  const goal = goMat ? _w.set(m.x, 3, m.z) : _w.set(f.x, f.y + 1, f.z)
  ar.classList.remove('hidden'); ar.classList.toggle('mat', !!goMat)
  $('arrowD').textContent = Math.round(Math.hypot(goal.x - me.x, goal.z - me.z)) + 'm'
  // 方角だけを示す（2026-11-03 本人「矢印がすごい分かりづらい。高さを表現すると分かりづらい。方角だけでいい」）: 画面の上の真ん中に固定、水平の向きだけで回る
  ar.querySelector('svg').style.transform = `rotate(${compassAng(goal.x, goal.z)}rad)`
  // 高さの差と残り時間（方角の矢印の下）。人が画面の上の外にいる時は「上を見て」
  const hb = $('heightBox')
  if (goMat || !f) { hb.classList.add('hidden') }
  else {
    hb.classList.remove('hidden')
    const dy = f.y + 1 - (me.y + 1.2), hd = Math.round(Math.abs(dy)), dir = Math.abs(dy) < 2.5 ? 'same' : dy > 0 ? 'up' : 'down'
    const sec = f.state === 'warn' ? t('warnTag')(Math.max(1, Math.ceil((f.warnT || CATCH.warn) - f.t))) : t('fallingShort')
    const pp = project(f.x, f.y + 1, f.z), above = !pp.behind && pp.y < 0
    const key = dir + hd + sec + above + lang
    if (hb._k !== key) {
      hb._k = key; hb.dataset.dir = dir; hb.classList.toggle('look-up', above)
      $('hDiff').textContent = dir === 'same' ? t('hSame') : t(dir === 'up' ? 'hUp' : 'hDown')(hd)
      $('hSec').textContent = sec
      $('hLook').textContent = above ? t('lookUp') : ''
    }
  }
}

// カメラの前向き（水平）に対して、自分から目標 (x, z) がどっちか。0 = 正面、+ = 右。高さは使わない
function compassAng(gx, gz) {
  camera.updateMatrixWorld()   // HUD はカメラを動かした後・描く前に呼ばれるので、今のカメラの向きにそろえる
  const e = camera.matrixWorld.elements, fx = -e[8], fz = -e[10], rx = -fz, rz = fx   // 右 = 前を右へ90度（傾きの影響を受けない）
  const dx = gx - me.x, dz = gz - me.z
  return Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz)
}

// ---------------------------------------------------------------- 出来事
const log = []
function onRunnerEvent(e) {
  log.push({ src: 'r', t: e.t, at: rd ? +rd.t.toFixed(2) : 0 })
  if (e.t === 'roll') { sfx('roll', { vol: 0.6 }); sfx('land', { vol: 0.35, delay: 0.25 }) }
  if (e.t === 'wire') { sfx('wire', { vol: 0.7 }); sfx('hook', { vol: 0.5, delay: 0.06 }); hints = hints.filter(h => h.once !== 'wire') }
  else if (e.t === 'wireMiss') {
    sfx('wire', { vol: 0.4, rate: 1.3 })
    const tp = me._tap
    if (e.far && tp && tp.sx != null) { const el = $('miss'); el.style.left = tp.sx + 'px'; el.style.top = tp.sy + 'px'; el.classList.remove('hidden'); el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; clearTimeout(el._t); el._t = setTimeout(() => el.classList.add('hidden'), 800) }
  } else if (e.t === 'land') { sfx('land', { vol: Math.min(1, 0.3 + e.impact / 20) }); if (e.impact > 14) { sfx('bonk', { vol: 0.5 }); fx.addShake(Math.min(0.6, e.impact / 40)) } }
  else if (e.t === 'bonk') { sfx('bonk', { vol: 0.8 }); fx.addShake(0.4) }
  else if (e.t === 'unwire' && !e.auto) { const v = Math.hypot(me.vx, me.vy, me.vz); if (v > 16) { sfx('whoosh', { vol: Math.min(0.8, v / 50), rate: 0.9 + Math.random() * 0.2 }); fovKick = Math.min(6, (v - 16) * 0.3) } }   // 速く離すと風を切る
  else if (e.t === 'climb' && !shownClimb) { shownClimb = true; say(t('hintClimb'), 2.4) }
}
function onCatchEvent(e) {
  log.push({ src: 'c', ...e, mat: undefined, at: +rd.t.toFixed(2) })
  if (e.t === 'spawn') sfx('alert', { vol: 0.5 })
  else if (e.t === 'fall') sfx('grunt', { vol: 0.6 })
  else if (e.t === 'catch') {
    sfx('catch', { vol: 0.9 }); sfx('pop', { vol: 0.6, delay: 0.05 })
    fx.addShake(e.ground ? 0.25 : e.swing ? 0.6 : 0.4); hitStop = e.ground ? 0.04 : e.swing ? 0.1 : 0.07; fovKick = e.ground ? -3 : -7; flashA = e.ground ? 0.5 : 1
    fx.debrisAt(e.x, e.y + 1, e.z, 16, 0xfff1c8, { speed: 9, up: 5, size: 0.12 })
    say(`${t('caught')(e.h, e.swing, e.ground)}<small>${L2(kindLine(e.kind, e.spill ? 'spill' : 'thanks', e.id))}</small>`, 2)
    if (e.kind === 'cat') sfx('cat', { vol: 0.9 })
    else if (e.kind === 'heavy') { sfx('grunt', { vol: 0.8, rate: 0.75 }); fx.addShake(0.3) }
    else if (e.kind === 'karakasa') sfx('boing', { vol: 0.6 })
    const sc = e.h + (e.swing ? 20 : 0)
    if (sc > photoScore) { photoScore = sc; snapNext = true }
    if (!shownMat) { shownMat = true; setTimeout(() => { if (mode === 'play' && rd && rd.carry.length) say(t('hintMat'), 2.6) }, 2000) }
  } else if (e.t === 'save') {
    sfx('save', { vol: 0.8 }); sfx('applause', { vol: 0.6, delay: 0.1 })
    hitStop = Math.min(0.12, 0.05 + e.n * 0.025); flashA = Math.max(flashA, 0.6 + e.n * 0.15); fovKick = -4; fx.addShake(0.3 + e.n * 0.1)
    if (e.mat) fx.debrisAt(e.mat.x, (e.mat.y || 0) + 0.6, e.mat.z, 10 + e.n * 6, 0x3a8fd8, { speed: 7, up: 6, size: 0.1 })
    say(t('saveMsg')(e.n, e.pts), 2)
  } else if (e.t === 'miss') {
    sfx('thud', { vol: 0.8 }); sfx('boing', { vol: 0.5, delay: 0.08 })
    if (Math.hypot(e.x - me.x, e.z - me.z) < 80) say(`${t('missTag')}<small>${L2(kindLine(e.kind, 'oops', e.id))}</small>`, 1.8)
    if (e.kind === 'cat') sfx('cat', { vol: 0.7, rate: 1.1 })
    fx.debrisAt(e.x, e.y + 0.3, e.z, 10, 0xb08a5a, { speed: 4, up: 4, size: 0.12 })
  } else if (e.t === 'full') say(t('full'), 1.2)
  else if (e.t === 'timeUp') { say(t('timeUp'), 2); endAt = 1.6 }
  else if (e.t === 'gameOver') { say(t('gameOver'), 2.2); endAt = 2.4 }
  else if (e.t === 'fall' && e.kind === 'cat') sfx('cat', { vol: 0.6 * Math.max(0.2, 1 - Math.hypot(e.x - me.x, e.z - me.z) / 90) })
}
let snapNext = false

// ---------------------------------------------------------------- 結果（感謝状）
function showResult() {
  mode = 'result'
  Snd.loop('wind', null); Snd.loop('bgm', null)
  const endless = rd.mode === 'endless', sec = Math.floor(rd.t)
  const rank = endless ? (rd.saved >= 20 ? 3 : rd.saved >= 10 ? 2 : rd.saved >= 4 ? 1 : 0) : rankOf(rd.score)
  const kname = k => L2([KINDS[k].ja, KINDS[k].en])
  const rows = rd.log.map(l => ({ text: (l.kind && l.kind !== 'normal' ? `［${kname(l.kind)}］` : '') + L2(reasonText(l)), ok: l.ok }))
  const kinds = Object.entries(rd.kinds).filter(([k]) => k !== 'normal').map(([k, n]) => `${kname(k)}${n > 1 ? '×' + n : ''}`).join(lang === 'ja' ? '・' : ', ')
  const d = {
    lang, saved: rd.saved, missed: rd.missed, chain: rd.bestChain, score: rd.score, rank, ranks: t('ranks'),
    body: endless ? t('bodyEndless')(rd.saved, sec, kinds) : t('body')(rd.saved, rd.missed) + (kinds ? (lang === 'ja' ? `（${kinds}）` : ` (${kinds})`) : ''), rows, endless, sec, chief: t('chief'), date: new Date().toISOString().slice(0, 10).replace(/-/g, '.'),
    photo, footer: 'tom3games.github.io/sky-catch', stampK: 1
  }
  drawCertificate($('cert'), d)
  sfx(rank >= 2 ? 'win' : rank >= 1 ? 'meh' : 'lose', { vol: 0.8 })
  $('btnPost').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(endless ? t('postEndless')(rd.saved, sec) : t('postText')(rd.saved, rd.score)) + '&url=' + encodeURIComponent(URL_)
  $('touch').classList.add('hidden')
  clearVis()
  show('result')
  window.__lastScore = rd.score
}
$('btnSave').onclick = () => { $('cert').toBlob(b => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'sky-catch.png'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000) }) }
$('btnStart').onclick = () => startRound()
const showMode = () => { for (const b of document.querySelectorAll('.mode-btn')) b.classList.toggle('on', b.dataset.mode === gameMode); $('modeHint').classList.toggle('hidden', gameMode !== 'endless') }
for (const b of document.querySelectorAll('.mode-btn')) b.onclick = () => { gameMode = b.dataset.mode; store.set('catch.mode', gameMode); sfx('click'); showMode() }
showMode()
$('btnAgain').onclick = () => startRound()
$('btnTitle').onclick = () => toTitle()
$('btnHow').onclick = () => { Snd.init(); show('how') }
for (const b of document.querySelectorAll('[data-close]')) b.onclick = () => show('title')
$('btnLang').onclick = () => { lang = lang === 'ja' ? 'en' : 'ja'; store.set('catch.lang', lang); applyLang() }
$('btnMute').onclick = () => { Snd.init(); Snd.setMute(!Snd.muted); store.set('catch.mute', Snd.muted ? '1' : '0'); applyLang() }
$('btnView').onclick = e => { setView(viewMode === 'first' ? 'third' : 'first'); sfx('click'); e.currentTarget.blur() }   // blur: PC で Space を押した時に切り替わらないように
$('btnPause').onclick = () => setPause(true)
$('btnResume').onclick = () => setPause(false)
$('btnQuit').onclick = () => { setPause(false); toTitle() }

// 黄色い輪の大きさ。三人称は最低 4.5m。一人称は近づくとカメラのすぐ前に来るので、画面いっぱいにならないよう距離に合わせて小さくする
const haloSize = dH => fpOn() ? Math.max(dH * 0.12, Math.min(4.5, dH * 0.55)) : Math.max(4.5, dH * 0.12)
// 落ちてくる人の黄色い目印（全員分）と、頭上の看板（急ぐ人だけ）
function updateMarks() {
  const on = rd && mode === 'play' && !rd.over ? active(rd) : []
  const k = performance.now() / 1000, fp = fpOn()
  on.forEach((p, i) => {
    const m = markAt(i), px = p.state === 'warn' ? p.fx : p.x, pz = p.state === 'warn' ? p.fz : p.z
    const top = (p.roof != null ? p.roof : p.top) + 25
    const dC = Math.hypot(camera.position.x - px, camera.position.z - pz)
    const R = Math.max(0.7, dC * 0.011)
    m.id = p.id
    m.g.visible = m.halo.visible = m.ring.visible = true
    m.g.position.set(px, p.ground, pz); m.col.scale.set(R, top - p.ground, R)
    m.mat.opacity = fp && dC < R + 0.6 ? 0.07 : 0.2 + Math.max(0, Math.min(1, (dC - 12) / 30)) * 0.65   // 近くでは薄く（人を隠さない）が、消さない。一人称で柱の中にいる時は画面が黄色くならないようさらに薄く
    const dH = camera.position.distanceTo(_w.set(p.x, p.y + 0.7, p.z))
    m.halo.position.copy(_w)
    m.halo.scale.setScalar(haloSize(dH) * (1 + Math.sin(k * 6 + p.id) * 0.06))
    m.ring.position.set(p.fx, p.ground + 0.07, p.fz)
    m.ring.scale.setScalar(1 + (Math.sin(k * 5 + p.id) + 1) * 0.12)
  })
  for (let i = on.length; i < markPool.length; i++) { const m = markPool[i]; m.id = null; m.g.visible = m.halo.visible = m.ring.visible = false }
  const f = on.length && rd.carry.length < CATCH.carryMax ? urgent(rd) : null
  headSign.visible = !!f
  if (!f) return
  headSign.position.set(f.x, f.y + 2.6 + Math.sin(k * 4) * 0.12, f.z)
  headSign.material.rotation = Math.sin(k * 5) * 0.18
  headSign.scale.setScalar(Math.max(1.4, camera.position.distanceTo(headSign.position) * 0.045))
}
// ---------------------------------------------------------------- カメラ
const lerpAngle = (a, b, k) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * k }
function updateCamera(dt, c) {
  if (window.__freeze) return
  const pos = model.group.position
  const v = Math.hypot(c.vx, c.vz)
  let hx = Math.sin(c.yaw), hz = Math.cos(c.yaw)
  if (v > 8) { const k = c.grounded ? 0.25 : 0.45; hx = hx * (1 - k) + (c.vx / v) * k; hz = hz * (1 - k) + (c.vz / v) * k; const l = Math.hypot(hx, hz); hx /= l; hz /= l }
  const manual = touchMode || performance.now() - cam.userT < 1800   // スマホはカメラが勝手に追いかけない（空中出前と同じ）
  if (!manual) { cam.hd = lerpAngle(cam.hd, Math.atan2(hx, hz), 1 - Math.exp(-dt * (touchMode ? 2.2 : 5))); if (!fpOn()) cam.pitch += ((c.climbing ? 0.45 : 0.15) - cam.pitch) * (1 - Math.exp(-dt * 1.5)) }
  hx = Math.sin(cam.hd); hz = Math.cos(cam.hd)
  if (fpOn()) { updateFirstPerson(dt, c, pos, hx, hz); finishCamera(dt, c, FP_BANK); updateFpArm(dt, c); return }
  camera.near = 0.3
  let back = 5.2 + Math.min(2.4, v * 0.07), up = 2.1
  if (camera.aspect < 1) { back += 0.6; up += 0.5 }
  // 見下ろす時はカメラを上げる。見上げる時はカメラを下げすぎず（地面にめり込まない）、目線だけ上へ向ける
  up += cam.pitch > 0 ? cam.pitch * 4.2 : Math.max(-0.35, cam.pitch) * 4.2; back *= 1 - Math.max(0, cam.pitch) * 0.15
  // 見上げる時は肩越しまで寄って低く構える（真上近くを見ても隊員の頭が画面の下に残る）
  const tUp = Math.min(1, Math.max(0, -cam.pitch - 0.35) / 0.9)
  back += (1.6 - back) * tUp; up += (0.85 - up) * tUp
  let tx = pos.x - hx * back, tz = pos.z - hz * back, ty = pos.y + up
  for (let i = 1; i <= 6; i++) {
    const f = i / 6, px = pos.x + (tx - pos.x) * f, pz = pos.z + (tz - pos.z) * f, py = pos.y + (ty - pos.y) * f
    let hit = false
    for (const o of world.nearby(px, pz)) {
      if (o.slab || o.kind === 'bound' || o.y0 == null || py < o.y0 || py > o.y1) continue
      const cs = Math.cos(o.yaw || 0), sn = Math.sin(o.yaw || 0), dx = px - o.cx, dz = pz - o.cz
      if (Math.abs(dx * cs - dz * sn) < o.hw + 0.4 && Math.abs(dx * sn + dz * cs) < o.hl + 0.4) { hit = true; break }
    }
    if (hit) { const ff = Math.max(0.25, (i - 1) / 6); tx = pos.x + (tx - pos.x) * ff; tz = pos.z + (tz - pos.z) * ff; ty = pos.y + up * 0.8 + (1 - ff) * 2; break }
  }
  const gy = world.groundAt(tx, tz, ty).h + 0.8
  if (ty < gy) ty = gy
  cam.off.lerp(_v.set(tx - pos.x, ty - pos.y, tz - pos.z), 1 - Math.exp(-dt * 10))
  cam.pos.set(pos.x + cam.off.x, pos.y + cam.off.y, pos.z + cam.off.z)
  // 見上げる角度: 隊員の頭が画面の下のふちに残る所まで（縦画面で約65度・横画面で約50度）
  const headAng = Math.atan2(1.6 - up, back), halfV = THREE.MathUtils.degToRad(camera.fov / 2)
  const A = Math.min(THREE.MathUtils.degToRad(66), headAng + halfV - THREE.MathUtils.degToRad(7))
  const yNorm = (camera.aspect < 1 ? 0.4 : 1.1) + 1.3 - cam.pitch * 1.2, yUp = up + (10 + back) * Math.tan(Math.max(0, A))
  cam.lookOff.lerp(_v.set(hx * 10, yNorm + (yUp - yNorm) * tUp, hz * 10), 1 - Math.exp(-dt * 12))
  cam.look.set(pos.x + cam.lookOff.x, pos.y + cam.lookOff.y, pos.z + cam.lookOff.z)
  camera.position.copy(cam.pos)
  const sh_ = fx.shake
  if (sh_ > 0) camera.position.add(_v.set((Math.random() - 0.5) * sh_, (Math.random() - 0.5) * sh_ * 0.7, (Math.random() - 0.5) * sh_))
  camera.lookAt(cam.look)
  finishCamera(dt, c, 1)
}
// 視野と傾き（三人称・一人称で共通）。bankK は傾きの倍率
function finishCamera(dt, c, bankK) {
  const asp = camera.aspect
  const base = asp >= 1 ? 60 : Math.min(84, 2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(37)) / asp) * 180 / Math.PI)
  const fov = base + Math.min(18, Math.max(0, Math.hypot(c.vx, c.vy, c.vz) - 6) * 0.5)   // 速いほど広く（最大 +12 から +18 に）
  cam.fov += (fov - cam.fov) * (1 - Math.exp(-dt * 4))
  fovKick *= Math.exp(-dt * 6)
  camera.fov = cam.fov + fovKick; camera.updateProjectionMatrix()
  // 振り子の向きに少しだけ体ごと傾く（カメラの右向きに対する横の速さから）
  const me_ = camera.matrixWorld.elements, rl = Math.hypot(me_[0], me_[2]) || 1, lat = (c.vx * me_[0] + c.vz * me_[2]) / rl
  cam.bank = (cam.bank || 0) + (Math.max(-0.1, Math.min(0.1, (c.rope ? lat : 0) * -0.004)) * bankK - (cam.bank || 0)) * (1 - Math.exp(-dt * 3))
  camera.rotateZ(cam.bank)
}

// ---------------------------------------------------------------- 一人称
const FP_EYE = 1.6, FP_NEAR = 0.15, FP_WALL = 0.3, FP_WALL_OUT = 0.5, FP_WALL_LOOK = -0.95, FP_BANK = 1 / 3, FP_SHAKE = 0.3   // 酔いを減らす: 傾きは三人称の 1/3、揺れは 3 割
// 目の位置が建物に近すぎたら外へ押し戻す（near 0.15 の画面の隅までの距離 約 0.25m より外。0.1 より遠くの奥行きのちらつきも少ない）
function fpPushOut(p) {
  for (let n = 0; n < 2; n++) {
    let moved = false
    for (const o of world.nearby(p.x, p.z)) {
      if (o.slab || o.kind === 'bound' || o.y0 == null || p.y < o.y0 || p.y > o.y1) continue
      const cs = Math.cos(o.yaw || 0), sn = Math.sin(o.yaw || 0), dx = p.x - o.cx, dz = p.z - o.cz
      let lx = dx * cs - dz * sn, lz = dx * sn + dz * cs
      const px = o.hw + FP_WALL - Math.abs(lx), pz = o.hl + FP_WALL - Math.abs(lz)
      if (px <= 0 || pz <= 0) continue
      if (px < pz) lx = Math.sign(lx || 1) * (o.hw + FP_WALL); else lz = Math.sign(lz || 1) * (o.hl + FP_WALL)
      p.x = o.cx + lx * cs + lz * sn; p.z = o.cz - lx * sn + lz * cs
      moved = true
    }
    if (!moved) break
  }
}
function updateFirstPerson(dt, c, pos, hx, hz) {
  camera.near = FP_NEAR
  const eye = c.rollT > 0 && c.grounded ? 1.0 : FP_EYE   // ローリング中は目線を下げるだけ（画面は回さない）
  cam.eye = cam.eye == null ? eye : cam.eye + (eye - cam.eye) * (1 - Math.exp(-dt * 14))
  cam.pos.set(pos.x, Math.max(pos.y + cam.eye, world.groundAt(pos.x, pos.z, pos.y + cam.eye).h + 0.3), pos.z)
  // 壁に張り付いた時: 目を少し外へ出す。壁を見ていたら上を向く（1回だけ。真っ暗な壁しか映らないのを防ぐ。なぞれば止まる）
  const cl = c.climbing
  cam.wallK = (cam.wallK || 0) + ((cl ? 1 : 0) - (cam.wallK || 0)) * (1 - Math.exp(-dt * 8))
  if (cl) { cam.wallN = cl; if (!cam.wasClimb) cam.climbLook = hx * cl.nx + hz * cl.nz < -0.4 && performance.now() - cam.userT > 300 ? 0.5 : 0 }
  cam.wasClimb = !!cl
  if (cam.climbLook > 0) { cam.climbLook = performance.now() - cam.userT < 300 ? 0 : cam.climbLook - dt; cam.pitch += (FP_WALL_LOOK - cam.pitch) * (1 - Math.exp(-dt * 7)) }
  if (cam.wallN) { cam.pos.x += cam.wallN.nx * FP_WALL_OUT * cam.wallK; cam.pos.z += cam.wallN.nz * FP_WALL_OUT * cam.wallK }
  fpPushOut(cam.pos)
  const el = -cam.pitch, ce = Math.cos(el), sh_ = fx.shake * FP_SHAKE
  _w.set(hx * ce, Math.sin(el), hz * ce)
  camera.position.copy(cam.pos)
  if (sh_ > 0) { camera.position.add(_v.set((Math.random() - 0.5) * sh_, (Math.random() - 0.5) * sh_ * 0.7, (Math.random() - 0.5) * sh_)); fpPushOut(camera.position) }
  camera.lookAt(_v.copy(camera.position).add(_w))
  // 三人称へ戻す時は今の目の位置からすっと下がる
  cam.off.subVectors(cam.pos, pos); cam.lookOff.copy(cam.off).addScaledVector(_w, 10); cam.look.copy(pos).add(cam.lookOff)
}
// 腕: 手は画面の決まった場所（視野が変わっても動かない）。ワイヤー中は少し上げる。肘は画面の右下の外
function updateFpArm(dt, c) {
  const A = fpArm, tv = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)), th = tv * camera.aspect
  A.k += ((c.rope ? 1 : 0) - A.k) * (1 - Math.exp(-dt * 12))
  const d = 0.42, nx = 0.3 - 0.04 * A.k, ny = -0.5 + 0.16 * A.k
  A.hand.set(nx * th * d, ny * tv * d, -d); A.elbow.set(1.15 * th * 0.3, -1.4 * tv * 0.3, -0.3)
  A.dir.subVectors(A.hand, A.elbow)
  const len = A.dir.length(); A.dir.divideScalar(len)
  A.sleeve.position.copy(A.elbow).lerp(A.hand, 0.5); A.sleeve.scale.y = len; A.sleeve.quaternion.setFromUnitVectors(A.up, A.dir)
  A.glove.position.copy(A.hand); A.glove.quaternion.copy(A.sleeve.quaternion)
  A.nozzle.position.copy(A.hand).addScaledVector(A.dir, 0.058); A.nozzle.quaternion.copy(A.sleeve.quaternion)
  camera.updateMatrixWorld()
  A.world.copy(A.nozzle.position); camera.localToWorld(A.world)
}

// ---------------------------------------------------------------- ループ
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); fx.setScale && fx.setScale(h) }
addEventListener('resize', resize); resize()
let last = performance.now(), acc = 0, frameN = 0
function stepOnce() {
  if (mode === 'play' && !paused && me && !rd.over) {
    const inp = gather()
    me.events.length = 0
    stepRunner(me, inp, STEP, world)
    stepCatch(rd, me, STEP, world)
    for (const e of me.events) onRunnerEvent(e)
    for (const e of rd.events) onCatchEvent(e)
    rd.events.length = 0
  } else if (mode === 'title' && demo) {
    const inp = botInput(demo.b, demo.r, demo.rd, world, STEP)
    demo.r.events.length = 0
    stepRunner(demo.r, inp, STEP, world)
    stepCatch(demo.rd, demo.r, STEP, world)
    demo.rd.events.length = 0
    if (demo.rd.over) { const s = Math.floor(Math.random() * 1000); demo.rd = createRound(world, s); clearVis() }
  }
}
function frame() {
  requestAnimationFrame(frame)
  const now = performance.now()
  let dt = Math.min(0.1, (now - last) / 1000); last = now
  if (hitStop > 0) { hitStop -= dt; acc = 0 }   // ヒットストップ: ほんの一瞬だけ止める
  else if (!dbgPause) { acc += dt; let n = 0; while (acc >= STEP && n < 6) { stepOnce(); acc -= STEP; n++ } if (n >= 6) acc = 0 }
  else dt = 0
  render(dt || 0.016)
}
// 速さの線: 画面のふちから中心へ流れる白い線。速いほど多く濃く（20m/s から。しっぽ取り v5 と同じ）
const spd = $('speedfx'), sctx = spd.getContext('2d'), hf = $('hitflash')
const lines = Array.from({ length: 46 }, () => ({ a: Math.random() * Math.PI * 2, p: Math.random(), s: 0.6 + Math.random() * 0.8, w: 1 + Math.random() * 2 }))
let spdOn = false
function drawSpeed(v, dt) {
  if (!window.__holdFx) flashA = Math.max(0, flashA - dt * 5)   // __holdFx: 撮影用に光を止めておく
  hf.style.opacity = flashA.toFixed(2)
  const k = Math.max(0, Math.min(1, (v - 20) / 18))
  window.__speedK = k
  if (k <= 0) { if (spdOn) { sctx.clearRect(0, 0, spd.width, spd.height); spdOn = false } return }
  spdOn = true
  const W = innerWidth, H = innerHeight, dpr = Math.min(2, devicePixelRatio || 1)
  if (spd.width !== Math.round(W * dpr) || spd.height !== Math.round(H * dpr)) { spd.width = Math.round(W * dpr); spd.height = Math.round(H * dpr) }
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0); sctx.clearRect(0, 0, W, H)
  const cx = W / 2, cy = H * 0.45, R = Math.hypot(W, H) * 0.55
  sctx.lineCap = 'round'
  const n = Math.round(lines.length * (0.35 + 0.65 * k))
  for (let i = 0; i < n; i++) {
    const L = lines[i]
    L.p += dt * L.s * (1.6 + k * 2.4); if (L.p > 1) { L.p -= 1; L.a = Math.random() * Math.PI * 2 }
    const r1 = R * (1.05 - L.p * 0.45), r0 = r1 - R * (0.12 + 0.2 * k) * L.s
    const ca = Math.cos(L.a), sa = Math.sin(L.a)
    sctx.strokeStyle = `rgba(255,255,255,${(0.1 + 0.32 * k) * Math.min(1, L.p * 4)})`; sctx.lineWidth = L.w
    sctx.beginPath(); sctx.moveTo(cx + ca * r0, cy + sa * r0); sctx.lineTo(cx + ca * r1, cy + sa * r1); sctx.stroke()
  }
}
// 1人目はおんぶ（後ろから見える）、2人目は肩車、3人目は前に抱っこ
const CARRY = [{ p: [0, 0.82, -0.36], r: [0.3, 0, 0] }, { p: [0, 1.62, -0.08], r: [-0.1, 0, 0] }, { p: [0, 0.7, 0.36], r: [-0.2, Math.PI, 0] }]
const rollBtn = document.querySelector('.tbtn[data-k=roll]')
function render(dt) {
  const c = mode === 'title' ? demo && demo.r : me
  const round = mode === 'title' ? demo && demo.rd : rd
  if (c && model) {
    model.update(c, dt)
    if (mode === 'play' && touchMode) rollBtn.classList.toggle('hidden', !(c.grounded && !c.climbing && !c.rope && c.stun <= 0 && !c.pit))   // ローリングは地面にいる時だけ出す
    const fp = fpOn()
    model.group.visible = !fp   // 一人称では自分の体（抱えた人も）を描かない
    fpArm.g.visible = fp
    updateCamera(dt, c)
    // ワイヤーの根元はカメラを動かした後に決める（一人称は手元から出す）
    if (c.rope) { const h = fp ? fpArm.world : model.handWorld; ropeMesh.geometry = fp ? ropeGeoFirst : ropeGeoThird; ropeMesh.visible = true; ropeMesh.position.copy(h); ropeMesh.lookAt(c.rope.x, c.rope.y, c.rope.z); ropeMesh.scale.set(1, 1, Math.max(0.1, h.distanceTo(_v.set(c.rope.x, c.rope.y, c.rope.z)))) }
    else ropeMesh.visible = false
    const d = sun.userData.dir; sun.position.set(c.x + d.x * 150, c.y + d.y * 150, c.z + d.z * 150); sun.target.position.set(c.x, c.y, c.z)
  }
  // 落ちてくる人
  if (round) {
    const alive = new Set()
    for (const f of round.fallers) {
      alive.add(f.id)
      const v = visOf(f), g = v.p.group
      v.p.update(f.state, dt)
      if (f.state === 'carried' && model) {
        const s = CARRY[f.slot] || CARRY[0]
        g.position.set(s.p[0], s.p[1], s.p[2]); g.rotation.set(s.r[0], s.r[1], s.r[2])
        if (g.parent !== model.group) model.group.add(g)
      } else {
        if (g.parent !== scene) scene.add(g)
        g.position.set(f.x, f.y, f.z)
        g.rotation.set(0, Math.atan2(f.nx, f.nz) + (f.state === 'saved' ? Math.PI : 0), 0)
      }
      v.b.visible = f.state === 'warn' || f.state === 'fall' || (f.state !== 'carried' && f.t < 3)
    }
    for (const [id, v] of vis) if (!alive.has(id)) { v.p.group.parent && v.p.group.parent.remove(v.p.group); scene.remove(v.b); vis.delete(id) }
    // マット: 抱えている時に一番近いものを光らせる
    const nm = round.carry.length ? nearestMat(round, c.x, c.z) : null
    const k = 0.5 + Math.sin(performance.now() / 220) * 0.4
    round.mats.forEach((m, i) => { const ud = mats[i] && mats[i].userData; if (ud) { ud.ring.material.opacity = m === nm ? k : 0; ud.flag.rotation.y = Math.sin(performance.now() / 600 + i) * 0.3 } })
  }
  // キーボードの狙い（PCだけ）
  aimMark.visible = false
  // 一人称はスマホでも出す（大きいボタンでどこに掛かるかが体を見て分からないので。掛かる所と同じ向きで探す）
  const showAim = mode === 'play' && me && !me.rope && (!touchMode || (fpOn() && !me.climbing))
  if (showAim && frameN % 4 === 0) aimMark.userData.p = findAnchor(world, me, touchMode ? lastWireYaw : null, fpOn() ? fpAim() : null)
  if (showAim && aimMark.userData.p) { const p = aimMark.userData.p; aimMark.visible = true; aimMark.position.set(p.x, p.y, p.z); aimMark.lookAt(camera.position); aimMark.scale.setScalar(fpOn() ? Math.max(1, camera.position.distanceTo(aimMark.position) * 0.02) : 1) }
  if (mode === 'play' && me) { const v3 = Math.hypot(me.vx, me.vy, me.vz); const wl = Snd.loops.wind; if (wl && wl.g) { const gv = me.grounded ? 0 : Math.min(0.35, Math.max(0, (v3 - 16) / 40)); wl.g.gain.value = Number.isFinite(gv) ? gv : 0 } }   // 風: 地面では鳴らさない・空中で 16m/s から（2026-11-03 本人「謎の水の音がずっと鳴ってる」）
  drawSpeed(mode === 'play' && me ? Math.hypot(me.vx, me.vy, me.vz) : 0, dt)
  if (mode !== 'play') updateMarks()   // 結果・タイトルで目印を残さない
  fx.update(dt)
  fx.shake = Math.max(0, fx.shake - dt * 2.5)
  if (mode === 'play' && rd) {
    for (const h of hints) if (!paused && rd.t >= h.at && !h.done) { h.done = true; say(t(h.k), 3) }
    updateHud(dt)
    updateMarks(dt)
    if (endAt > 0) { endAt -= dt; if (endAt <= 0) showResult() }
  }
  renderer.render(scene, camera)
  if (snapNext && me) {
    // 受けとめた瞬間の写真: 横（壁なら壁の外）から隊員を写す
    snapNext = false
    const pc = photoCam, ch = _w.set(me.x, me.y + 1.1, me.z)
    let nx = Math.cos(cam.hd), nz = -Math.sin(cam.hd)
    if (me.climbing) { nx = me.climbing.nx; nz = me.climbing.nz }
    pc.aspect = camera.aspect; pc.fov = camera.aspect < 1 ? 70 : 45; pc.updateProjectionMatrix()   // 画面と同じ縦横比で撮って、真ん中を 4:3 で切り出す
    pc.position.set(ch.x + nx * 6.5, ch.y + 1.2, ch.z + nz * 6.5); pc.lookAt(ch)
    // 一人称でも感謝状の写真には隊員を写す
    const armWas = fpArm.g.visible, bodyWas = model.group.visible
    fpArm.g.visible = false; model.group.visible = true
    renderer.render(scene, pc)
    fpArm.g.visible = armWas; model.group.visible = bodyWas
    const c2 = document.createElement('canvas'); c2.width = 640; c2.height = 480
    const W = renderer.domElement.width, H = renderer.domElement.height, sw = Math.min(W, H * 4 / 3), sh = sw * 3 / 4
    c2.getContext('2d').drawImage(renderer.domElement, (W - sw) / 2, (H - sh) / 2, sw, sh, 0, 0, 640, 480)
    photo = c2
    renderer.render(scene, camera)
  }
  frameN++
}

// ---------------------------------------------------------------- 検証用の窓口
window.sky = {
  get mode() { return mode }, marks: () => markPool.filter(m => m.g.visible).map(m => ({ id: m.id, beamX: m.g.position.x, beamZ: m.g.position.z, beamBottom: m.g.position.y, beamTop: m.g.position.y + m.col.scale.y, beamOpacity: m.mat.opacity, haloX: m.halo.position.x, haloY: m.halo.position.y, haloZ: m.halo.position.z, haloSize: m.halo.scale.x, ringX: m.ring.position.x, ringZ: m.ring.position.z, ringY: m.ring.position.y })), markPool, renderer, scene, CATCH, headSign, PITCH_MIN, log, get hitStop() { return hitStop }, get flashA() { return flashA }, get fovKick() { return fovKick }, get me() { return me }, get rd() { return rd }, CATCH, RUN, world, camera, touchMode, cam,
  get view() { return viewMode }, setView, get fpOn() { return fpOn() }, fpArm, ropeMesh, aimMark,
  start: seed => startRound(seed), setMode: m => { gameMode = m; showMode() }, get gameMode() { return gameMode }, toTitle, showResult, setLang: l => { lang = l; applyLang() }, get lang() { return lang },
  dbg: {
    pause: on => { dbgPause = on }, step: n => { for (let i = 0; i < n; i++) stepOnce(); render(STEP) },
    teleport: (x, y, z, yaw) => { Object.assign(me, { x, y, z, vx: 0, vy: 0, vz: 0, rope: null, climbing: null, grounded: y < 0.1 }); if (yaw != null) me.yaw = yaw },
    pressWire: (sx, sy) => aimAt(sx, sy), compass: (x, z) => compassAng(x, z), pressJump: () => { press.jump = true }, wireAuto: () => { pendingWire = { at: null, key: true } },
    keys, stick, say, get model() { return model }, fallTime, render: n => { for (let i = 0; i < n; i++) render(1 / 30) }
  }
}
applyLang()
toTitle()
requestAnimationFrame(frame)
// ロード画面は読み込みが全部終わってから消す（テクスチャ・人物の GLB を three の読み込み数で数える）
bootWatch(() => { window.__catchReady = true })
