# Side-by-side sheets and pixel differences between two capture sets.
#   python3 tools/phase7-compare.py                         v1.0 (before) vs Phase 7 (after) -> compare/
#   python3 tools/phase7-compare.py after optimized compare-opt "PHASE 7" "OPTIMIZED"
# Prints, per image, the mean absolute difference (0-255) and the share of
# pixels that differ by more than 24 levels; writes diff.json next to the sheets.
import json
import os
import sys
from PIL import Image, ImageChops, ImageDraw

args = sys.argv[1:]
src_a, src_b, out_name = (args + ['before', 'after', 'compare'])[:3] if len(args) < 3 else args[:3]
label_a, label_b = (args[3:5] if len(args) >= 5 else ['BEFORE v1.0', 'AFTER Phase 7'])
root = os.path.join(os.path.dirname(__file__), '..', 'docs', 'phase7')
out = os.path.join(root, out_name)
os.makedirs(out, exist_ok=True)
stats = {}
for vp in ['desktop', 'mobile']:
    adir, bdir = os.path.join(root, src_a, vp), os.path.join(root, src_b, vp)
    if not os.path.isdir(adir):
        continue
    for name in sorted(os.listdir(adir)):
        bpath = os.path.join(bdir, name)
        if not os.path.exists(bpath):
            continue
        a, b = Image.open(os.path.join(adir, name)).convert('RGB'), Image.open(bpath).convert('RGB')
        diff = ImageChops.difference(a, b).convert('L')
        hist = diff.histogram()
        n = sum(hist)
        stats[f'{vp}/{name}'] = {
            'meanAbsDiff': round(sum(i * c for i, c in enumerate(hist)) / n, 2),
            'pctOver24': round(sum(hist[25:]) / n * 100, 2),
        }
        w, h = a.size
        sheet = Image.new('RGB', (w * 2 + 12, h + 36), (241, 238, 232))
        sheet.paste(a, (0, 36)); sheet.paste(b, (w + 12, 36))
        d = ImageDraw.Draw(sheet)
        d.text((10, 10), f'{label_a}  {vp} {name}', fill=(60, 60, 60))
        d.text((w + 22, 10), label_b, fill=(30, 100, 70))
        scale = min(1, 2000 / sheet.size[0])
        sheet = sheet.resize((int(sheet.size[0] * scale), int(sheet.size[1] * scale)), Image.LANCZOS)
        sheet.save(os.path.join(out, f'{vp}-{name}'), optimize=True)
with open(os.path.join(out, 'diff.json'), 'w') as f:
    json.dump(stats, f, indent=1)
for k, v in stats.items():
    print(f"{k:28} mean {v['meanAbsDiff']:5}  >24: {v['pctOver24']:5}%")
