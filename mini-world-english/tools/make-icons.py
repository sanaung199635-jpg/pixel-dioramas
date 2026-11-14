# Draws the app icon (a little pixel island with a tree) and saves the sizes browsers ask for.
#   python tools/make-icons.py
import os
from PIL import Image, ImageDraw

S = 512
img = Image.new('RGB', (S, S), '#dff1fb')
d = ImageDraw.Draw(img)

# isometric island: grass top, two soil faces
cx, top, w, hgt, depth = 256, 250, 190, 96, 70
T = [(cx, top - hgt), (cx + w, top), (cx, top + hgt), (cx - w, top)]
d.polygon([(cx - w, top), (cx, top + hgt), (cx, top + hgt + depth), (cx - w, top + depth)], fill='#9a6b42')
d.polygon([(cx + w, top), (cx, top + hgt), (cx, top + hgt + depth), (cx + w, top + depth)], fill='#7a5232')
d.polygon(T, fill='#86c75a')
d.polygon([(cx, top - hgt + 26), (cx + w - 52, top), (cx, top + hgt - 26), (cx - w + 52, top)], fill='#93d266')

# pond
d.ellipse([cx + 30, top + 2, cx + 122, top + 46], fill='#d8c28e')
d.ellipse([cx + 38, top + 6, cx + 114, top + 40], fill='#6cc4ea')

# tree: trunk and three leafy blobs
d.rectangle([cx - 84, top - 80, cx - 62, top + 6], fill='#8a5a34')
d.ellipse([cx - 138, top - 190, cx - 10, top - 62], fill='#4fa64d')
d.ellipse([cx - 98, top - 222, cx - 20, top - 144], fill='#6cc462')
d.ellipse([cx - 150, top - 150, cx - 84, top - 84], fill='#449645')

# a red slide-like block and a flower for colour
d.polygon([(cx + 40, top - 62), (cx + 116, top - 24), (cx + 116, top - 4), (cx + 40, top - 42)], fill='#f0524a')
d.rectangle([cx + 30, top - 96, cx + 46, top - 20], fill='#3d7fd9')
d.ellipse([cx - 30, top + 30, cx - 8, top + 52], fill='#ff8fb3')
d.ellipse([cx - 24, top + 36, cx - 14, top + 46], fill='#ffd23f')

here = os.path.join(os.path.dirname(__file__), '..')
for size, name in [(512, 'icon-512.png'), (192, 'icon-192.png'), (180, 'apple-touch-icon.png'), (48, 'favicon.png')]:
    img.resize((size, size), Image.LANCZOS).save(os.path.join(here, name), optimize=True)
    print(name)
