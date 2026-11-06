# 画面で使う文字だけのフォントを作る。~/tools/pyimg/bin/python tools/fonts.py <元のttfがあるフォルダ>
# 文字を足したら作り直す（dist/game.js と index.html から文字を拾う）。無い文字は別のフォントで出るだけで壊れない
import sys, subprocess, os
src = sys.argv[1]
os.makedirs('fonts', exist_ok=True)
text = open('dist/game.js', encoding='utf-8').read() + open('index.html', encoding='utf-8').read()
chars = sorted({c for c in text if ord(c) > 127} | {chr(i) for i in range(32, 127)})
open(os.path.join(src, 'chars.txt'), 'w', encoding='utf-8').write(''.join(chars))
print(len(chars), 'chars')
# 筆文字は感謝状の見出し・署名・称号だけ。文言を変えたら BRUSH も直す
BRUSH = '感謝状町内会長宙野守見習い一人前名人空の守り神　 '
open(os.path.join(src, 'brush.txt'), 'w', encoding='utf-8').write(BRUSH)
for name, ttf in [('yuji', 'yuji.ttf'), ('klee600', 'klee600.ttf'), ('biz700', 'biz700.ttf'), ('biz400', 'biz400.ttf')]:
    subprocess.check_call([sys.executable, '-m', 'fontTools.subset', os.path.join(src, ttf), '--text-file=' + os.path.join(src, 'brush.txt' if name == 'yuji' else 'chars.txt'),
        '--flavor=woff2', '--layout-features=*', '--output-file=fonts/%s.woff2' % name])
    print(name, os.path.getsize('fonts/%s.woff2' % name))
