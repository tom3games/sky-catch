// 感謝状（結果画像）。1080x1350（X にそのまま貼れる 4:5）。Canvas 2D だけ
export const CERT_W = 1080, CERT_H = 1350
const BRUSH = '"Yuji Syuku","Hiragino Mincho ProN",serif'
const HAND = '"Klee One","Hiragino Maru Gothic ProN",sans-serif'
const SANS = '"BIZ UDPGothic","Hiragino Sans",sans-serif'

// d = { lang, saved, missed, chain, score, rank(0-3), ranks[], body, rows:[{text, ok}], chief, date, photo, footer, stampK }
export function drawCertificate(cv, d) {
  cv.width = CERT_W; cv.height = CERT_H
  const x = cv.getContext('2d'), W = CERT_W, H = CERT_H, ja = d.lang === 'ja'
  // 紙
  x.fillStyle = '#fbf6e6'; x.fillRect(0, 0, W, H)
  for (let i = 0; i < 2600; i++) { x.fillStyle = `rgba(150,120,70,${Math.random() * 0.05})`; x.fillRect(Math.random() * W, Math.random() * H, 2, 2) }
  // 金の枠（二重線＋四隅の飾り）
  x.strokeStyle = '#b48a2c'; x.lineWidth = 14; x.strokeRect(36, 36, W - 72, H - 72)
  x.lineWidth = 3; x.strokeRect(62, 62, W - 124, H - 124)
  for (const [cx, cy] of [[62, 62], [W - 62, 62], [62, H - 62], [W - 62, H - 62]]) { x.beginPath(); x.arc(cx, cy, 16, 0, Math.PI * 2); x.fillStyle = '#b48a2c'; x.fill() }
  // 見出し
  x.fillStyle = '#1b1712'; x.textAlign = 'center'; x.textBaseline = 'alphabetic'
  x.font = `${ja ? 132 : 96}px ${ja ? BRUSH : 'Georgia,serif'}`
  x.fillText(ja ? '感 謝 状' : 'Certificate of Thanks', W / 2, 220)
  x.font = `600 40px ${HAND}`
  x.fillText(ja ? '空中キャッチ隊員　殿' : 'To the Sky Catcher', W / 2, 300)
  // 本文
  x.font = `600 34px ${HAND}`; x.textAlign = 'left'
  const lines = wrap(x, d.body, W - 260)
  lines.forEach((s, i) => x.fillText(s, 130, 372 + i * 54))
  let y = 372 + lines.length * 54 + 10
  // 写真（一番いい受けとめの瞬間）と数字
  const ph = d.photo
  if (ph) {
    const pw = 400, phh = 300
    x.save(); x.translate(130, y); x.rotate(-0.025)
    x.fillStyle = '#fff'; x.fillRect(-10, -10, pw + 20, phh + 20); x.shadowColor = 'rgba(0,0,0,.25)'
    const s = Math.max(pw / ph.width, phh / ph.height), sw = pw / s, sh = phh / s
    x.drawImage(ph, (ph.width - sw) / 2, (ph.height - sh) / 2, sw, sh, 0, 0, pw, phh)
    x.restore()
  }
  const sx = ph ? 580 : 130
  x.textAlign = 'left'; x.fillStyle = '#1b1712'
  const stat = (lab, val, yy, big) => { x.font = `700 28px ${SANS}`; x.fillStyle = '#6b5a3a'; x.fillText(lab, sx, yy); x.font = `700 ${big ? 76 : 46}px ${SANS}`; x.fillStyle = '#1b1712'; x.fillText(val, sx, yy + (big ? 76 : 50)) }
  stat(ja ? '救った人' : 'Saved', ja ? `${d.saved}名` : `${d.saved}`, y + 20, true)
  stat(ja ? '連続で救った' : 'Best streak', ja ? `${d.chain}名` : `${d.chain}`, y + 150)
  stat(ja ? '点数' : 'Score', `${d.score}`, y + 250)
  y += 300
  // 今日の記録（1人ずつ）
  x.font = `700 28px ${SANS}`; x.fillStyle = '#6b5a3a'
  x.fillText(ja ? '本日の記録' : "Today's log", 130, y + 20)
  x.font = `600 27px ${HAND}`
  const maxRows = Math.max(1, Math.floor((H - 196 - (y + 64)) / 38))
  const all = d.rows.length ? d.rows : [{ text: ja ? '（落ちてきた人はいなかった）' : '(nobody fell)', ok: true }]
  const more = all.length > maxRows ? all.length - (maxRows - 1) : 0
  const rows = more ? all.slice(0, maxRows - 1) : all
  rows.forEach((r, i) => {
    const yy = y + 64 + i * 38
    x.fillStyle = r.ok ? '#1b1712' : '#9a8f7c'
    x.fillText((r.ok ? '○ ' : '× ') + r.text, 130, yy, 560)
  })
  if (more) { x.fillStyle = '#9a8f7c'; x.fillText(ja ? `ほか ${more}名` : `+${more} more`, 130, y + 64 + rows.length * 38) }
  // 日付と署名
  x.textAlign = 'right'; x.fillStyle = '#1b1712'; x.font = `600 30px ${HAND}`
  x.fillText(d.date, W - 130, H - 172)
  x.font = `${ja ? 44 : 34}px ${ja ? BRUSH : 'Georgia,serif'}`
  x.fillText(d.chief, W - 130, H - 118)
  // 称号の朱印（右下。記録の欄にかぶらない）
  drawSeal(x, W - 250, H - 330, d.ranks[d.rank], d.stampK == null ? 1 : d.stampK, ja)
  // 足元
  x.textAlign = 'center'; x.font = `700 22px ${SANS}`; x.fillStyle = '#a08a5c'
  x.fillText(d.footer, W / 2, H - 78)
  return cv
}

function drawSeal(x, cx, cy, word, k, ja) {
  if (k <= 0) return
  x.save(); x.translate(cx, cy); x.rotate(-0.12); x.globalAlpha = 0.88 * Math.min(1, k)
  const s = 1 + (1 - Math.min(1, k)) * 0.6; x.scale(s, s)
  x.strokeStyle = '#c3271c'; x.lineWidth = 9; x.beginPath(); x.arc(0, 0, 112, 0, Math.PI * 2); x.stroke()
  x.lineWidth = 3; x.beginPath(); x.arc(0, 0, 96, 0, Math.PI * 2); x.stroke()
  x.fillStyle = '#c3271c'; x.textAlign = 'center'; x.textBaseline = 'middle'
  const parts = word.split('\n')
  const f = ja ? (parts.length > 1 ? 58 : Math.min(70, 300 / Math.max(2, word.length))) : 34
  x.font = `${f}px ${ja ? BRUSH : 'Georgia,serif'}`
  parts.forEach((p, i) => x.fillText(p, 0, (i - (parts.length - 1) / 2) * f * 1.05))
  x.restore()
}

function wrap(x, text, maxW) {
  const out = []; let cur = ''
  const ja = /[぀-ヿ一-龯]/.test(text)
  const units = ja ? text.match(/\d+[名人]?|./gu) : text.split(/(\s+)/)   // 数字と「名」は分けない
  for (const u of units) {
    if (u === '\n') { out.push(cur); cur = ''; continue }
    const t = cur + u
    if (x.measureText(t).width > maxW && cur) { out.push(cur.trimEnd()); cur = u.trimStart() } else cur = t
  }
  if (cur) out.push(cur)
  // 行頭の句読点を前の行へ
  for (let i = 1; i < out.length; i++) while (/^[、。」）]/.test(out[i])) { out[i - 1] += out[i][0]; out[i] = out[i].slice(1) }
  return out
}
