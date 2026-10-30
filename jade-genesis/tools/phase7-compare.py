# Side-by-side before | after sheets for docs/PHASE7_VISUAL_REPORT.md
# python3 tools/phase7-compare.py
import os
from PIL import Image, ImageDraw
root = os.path.join(os.path.dirname(__file__), '..', 'docs', 'phase7')
out = os.path.join(root, 'compare')
os.makedirs(out, exist_ok=True)
for vp in ['desktop', 'mobile']:
    bdir, adir = os.path.join(root, 'before', vp), os.path.join(root, 'after', vp)
    for name in sorted(os.listdir(bdir)):
        a = os.path.join(adir, name)
        if not os.path.exists(a):
            continue
        b, a = Image.open(os.path.join(bdir, name)).convert('RGB'), Image.open(a).convert('RGB')
        w, h = b.size
        sheet = Image.new('RGB', (w * 2 + 12, h + 36), (241, 238, 232))
        sheet.paste(b, (0, 36)); sheet.paste(a, (w + 12, 36))
        d = ImageDraw.Draw(sheet)
        d.text((10, 10), f'BEFORE v1.0  {vp} {name}', fill=(60, 60, 60))
        d.text((w + 22, 10), 'AFTER Phase 7', fill=(30, 100, 70))
        scale = min(1, 2000 / sheet.size[0])
        sheet = sheet.resize((int(sheet.size[0] * scale), int(sheet.size[1] * scale)), Image.LANCZOS)
        sheet.save(os.path.join(out, f'{vp}-{name}'), optimize=True)
print('ok')
