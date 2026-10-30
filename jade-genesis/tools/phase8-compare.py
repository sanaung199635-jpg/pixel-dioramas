# Phase 8 before/after sheets per viewport: python3 tools/phase8-compare.py
import os
from PIL import Image, ImageDraw
root = os.path.join(os.path.dirname(__file__), '..', 'docs', 'phase8')
out = os.path.join(root, 'compare')
os.makedirs(out, exist_ok=True)
for vp in sorted(os.listdir(os.path.join(root, 'before'))):
    bdir, adir = os.path.join(root, 'before', vp), os.path.join(root, 'after', vp)
    if not os.path.isdir(bdir) or not os.path.isdir(adir):
        continue
    for name in sorted(os.listdir(bdir)):
        a = os.path.join(adir, name)
        if not name.endswith('.png') or not os.path.exists(a):
            continue
        b, a = Image.open(os.path.join(bdir, name)).convert('RGB'), Image.open(a).convert('RGB')
        w, h = b.size
        sheet = Image.new('RGB', (w * 2 + 16, h + 32), (241, 238, 232))
        sheet.paste(b, (0, 32)); sheet.paste(a, (w + 16, 32))
        d = ImageDraw.Draw(sheet)
        d.text((8, 9), f'BEFORE v1.1.1  {vp} {name}', fill=(60, 60, 60))
        d.text((w + 24, 9), 'AFTER Phase 8', fill=(30, 100, 70))
        scale = min(1, 1800 / sheet.size[0])
        sheet = sheet.resize((int(sheet.size[0] * scale), int(sheet.size[1] * scale)), Image.LANCZOS)
        sheet.save(os.path.join(out, f'{vp}-{name}'), optimize=True)
print('ok')
