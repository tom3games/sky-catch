// 音のエンジン（録音素材を鳴らす）。効果音・環境音・BGM は全部ファイル。合成音で効果音を作らない
// 素材は ~/Desktop/claudecode/_assets/audio/CATALOG.md から選び、ゲームの snd/ に mp3 でコピーする（node ~/Desktop/claudecode/_assets/_tools/pick.mjs）
// 使い方:
//   Snd.def({ door: ['snd/door1.mp3','snd/door2.mp3'], ding: 'snd/ding.mp3', ... })  起動時に1回
//   最初のタップで Snd.init()  （iOS は操作の中でしか鳴らない）
//   Snd.play('door', { vol: 0.8, rate: 1, jitter: 0.06, dest: 'muf' })  差分からランダム・同じ物を連続で選ばない・ピッチを少し揺らす
//   Snd.loop('amb', 'snd/elevator_hum.mp3', 0.25)  環境音・BGM（同じ名前で呼ぶと差し替え、null で止める）
//   Snd.duck(0.4, 1.2)  見せ場の間だけ BGM と環境音を下げる
//   検証は Snd.played（鳴らした回数）と Snd.level()
const Snd = {
  ctx: null, muted: false, files: {}, bufs: {}, last: {}, played: {}, loops: {},
  raw: {}, bad: {}, busy: 0, busyBig: 0, MAX: 8, MAXBIG: 2, pre: [], prefetching: false,   // 読む順の管理（効果音 → 今のループ → 先読み）
  def(map) { for (const k in map) this.files[k] = [].concat(map[k]); if (this.ctx) this.load() },
  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return
    try {
      const c = this.ctx = new AC()
      this.master = c.createGain(); this.master.gain.value = this.muted ? 0 : 0.9
      this.an = c.createAnalyser(); this.an.fftSize = 2048; this.master.connect(this.an); this.an.connect(c.destination)
      this.sfxBus = c.createGain(); this.sfxBus.connect(this.master)
      this.bed = c.createGain(); this.bed.gain.value = 1; this.bed.connect(this.master)   // 環境音と BGM（duck で下げる）
      // こもらせる道（壁の向こう・ほかの音にかき消された時）
      this.muf = c.createBiquadFilter(); this.muf.type = 'lowpass'; this.muf.frequency.value = 420; this.muf.connect(this.sfxBus)
      // 部屋の響き（短い残響。部屋の広さで秒数を変える）
      this.room = c.createConvolver(); this.room.buffer = this.ir(0.35); const rw = c.createGain(); rw.gain.value = 0.5; this.room.connect(rw); rw.connect(this.sfxBus)
      this.load()
    } catch (e) { this.ctx = null }
  },
  ir(sec) { const c = this.ctx, n = Math.floor(c.sampleRate * sec), b = c.createBuffer(2, n, c.sampleRate); for (let ch = 0; ch < 2; ch++) { const d = b.getChannelData(ch); for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3) } return b },
  // 全部いっぺんに読まず、本数を決めて順に読む。load() は順番待ちを進めるだけで、呼ぶ時に鳴らす物が変わっていれば順番も変わる
  load() { if (!this._lt) this._lt = setTimeout(() => { this._lt = 0; this.pump() }, 0) },
  prefetch() { if (navigator.connection && navigator.connection.saveData) return; this.prefetching = true; this.load() },
  queue() {
    const fx = Object.values(this.files).flat(), loops = Object.values(this.loops).filter(Boolean).map(l => l.url)
    const rank = u => { const i = this.pre.indexOf(u); return i < 0 ? -1 : i }
    const later = loops.concat(this.prefetching ? this.pre : []).sort((a, b) => rank(a) - rank(b))
    // 音を鳴らせるようになるまでは、効果音と先読みだけ取りに行く（題の BGM を無駄に読まない）
    const list = this.ctx ? fx.concat(later) : this.prefetching ? fx.concat(this.pre) : []
    return [...new Set(list)].filter(u => u && !this.bufs[u] && (this.bad[u] || 0) < 2)
  },
  pump() {
    if (this.ctx) for (const u in this.raw) { const ab = this.raw[u]; delete this.raw[u]; this.decode(u, ab) }
    const fx = new Set(Object.values(this.files).flat())   // 短い効果音は並べて、長いループは2本ずつ読む
    for (const u of this.queue()) {
      const big = !fx.has(u)
      if (this.busy >= this.MAX) break
      if (big && this.busyBig >= this.MAXBIG) continue
      this.busy++; if (big) this.busyBig++; this.bufs[u] = 'loading'
      fetch(u).then(r => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer() })
        .then(ab => { if (this.ctx) this.decode(u, ab); else this.raw[u] = ab })
        .catch(() => { delete this.bufs[u]; this.bad[u] = (this.bad[u] || 0) + 1 })
        .then(() => { this.busy--; if (big) this.busyBig--; this.load() })
    }
  },
  decode(u, ab) { new Promise((ok, ng) => this.ctx.decodeAudioData(ab, ok, ng)).then(b => { this.bufs[u] = b }, () => { delete this.bufs[u]; this.bad[u] = 2 }) },
  setMute(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.9 },
  now() { return this.ctx ? this.ctx.currentTime : 0 },
  pick(name) { const a = this.files[name]; if (!a || !a.length) return null; if (a.length === 1) return a[0]; let i; do { i = Math.floor(Math.random() * a.length) } while (a.length > 1 && a[i] === this.last[name]); this.last[name] = a[i]; return a[i] },
  play(name, o = {}) {
    this.played[name] = (this.played[name] || 0) + 1
    if (!this.ctx) return null; const url = o.url || this.pick(name), buf = this.bufs[url]
    if (!buf || buf === 'loading') { if (!this.bufs[url]) this.load(); return null }
    const c = this.ctx, s = c.createBufferSource(), g = c.createGain(), t = c.currentTime + (o.delay || 0)
    s.buffer = buf; const j = o.jitter == null ? 0.05 : o.jitter; s.playbackRate.value = (o.rate || 1) * (1 + (Math.random() * 2 - 1) * j)
    g.gain.value = o.vol == null ? 1 : o.vol
    s.connect(g); const d = o.dest === 'muf' ? this.muf : this.sfxBus; g.connect(d); if (o.room) { const rg = c.createGain(); rg.gain.value = o.room; g.connect(rg); rg.connect(this.room) }
    s.start(t, o.offset || 0); return s
  },
  loop(slot, url, vol = 0.3, fade = 0.6) {
    const old = this.loops[slot]; this.loops[slot] = url ? { url, vol } : null
    if (!this.ctx) return; const c = this.ctx, t = c.currentTime
    if (old && old.node) { old.g.gain.cancelScheduledValues(t); old.g.gain.setValueAtTime(old.g.gain.value, t); old.g.gain.linearRampToValueAtTime(0.0001, t + fade); old.node.stop(t + fade + 0.05) }
    if (!url) return
    const start = () => {
      if ((this.bad[url] || 0) >= 2) return; const buf = this.bufs[url]; if (!buf || buf === 'loading') return setTimeout(start, 120)
      if (this.loops[slot] && this.loops[slot].url !== url) return
      const s = c.createBufferSource(), g = c.createGain(); s.buffer = buf; s.loop = true; g.gain.setValueAtTime(0.0001, c.currentTime); g.gain.linearRampToValueAtTime(vol, c.currentTime + fade)
      s.connect(g); g.connect(this.bed); s.start(); this.loops[slot] = { url, vol, node: s, g }; this.played['loop:' + slot] = (this.played['loop:' + slot] || 0) + 1
    }
    if (!this.bufs[url]) this.load(); start()
  },
  duck(to = 0.4, sec = 1) { if (!this.ctx) return; const g = this.bed.gain, t = this.ctx.currentTime; g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(to, t + 0.08); g.linearRampToValueAtTime(1, t + sec) },
  level() { if (!this.an) return 0; const d = new Float32Array(this.an.fftSize); this.an.getFloatTimeDomainData(d); let m = 0; for (const v of d) m = Math.max(m, Math.abs(v)); return m },
}
