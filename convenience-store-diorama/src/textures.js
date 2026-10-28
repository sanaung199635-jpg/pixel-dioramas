// Pixel textures painted on canvas (nearest filtered): ground tiles, asphalt,
// store signage, posters, product panels and the snow patch mask.
import * as THREE from 'three';

export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const pick = (r, a) => a[Math.floor(r() * a.length)];

function canvasTex(w, h, draw, { repeat = true, srgb = true } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  g.imageSmoothingEnabled = false;
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const px = (g, x, y, c) => {
  g.fillStyle = c;
  g.fillRect(x, y, 1, 1);
};
const rect = (g, x, y, w, h, c) => {
  g.fillStyle = c;
  g.fillRect(x, y, w, h);
};

export function repeatTex(tex, rx, ry = rx) {
  const t = tex.clone();
  t.repeat.set(rx, ry);
  t.needsUpdate = true;
  return t;
}

export const BRAND = { orange: '#f58220', green: '#00845a', red: '#e31b23' };

export function makeTextures() {
  const asphalt = canvasTex(32, 32, (g) => {
    const r = rng(3);
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) px(g, x, y, pick(r, ['#ffffff', '#f4f4f4', '#ececec', '#f9f9f9']));
    for (let i = 0; i < 40; i++) px(g, (r() * 32) | 0, (r() * 32) | 0, pick(r, ['#d8d8d8', '#ffffff']));
  });

  // grey sidewalk pavers
  const sidewalk = canvasTex(32, 32, (g) => {
    const r = rng(5);
    for (let ty = 0; ty < 4; ty++)
      for (let tx = 0; tx < 4; tx++) {
        const base = pick(r, ['#ffffff', '#f6f6f6', '#efefef']);
        rect(g, tx * 8, ty * 8, 8, 8, base);
        for (let k = 0; k < 4; k++) px(g, tx * 8 + ((r() * 8) | 0), ty * 8 + ((r() * 8) | 0), '#e6e6e6');
      }
    for (let k = 0; k < 32; k += 8) {
      rect(g, 0, k, 32, 1, '#cfcfcf');
      rect(g, k, 0, 1, 32, '#cfcfcf');
    }
  });

  // light terrazzo tiles for the shop apron and the shop floor
  const tiles = canvasTex(32, 32, (g) => {
    const r = rng(7);
    for (let ty = 0; ty < 2; ty++)
      for (let tx = 0; tx < 2; tx++) {
        rect(g, tx * 16, ty * 16, 16, 16, (tx + ty) % 2 ? '#ffffff' : '#f7f7f7');
        for (let k = 0; k < 10; k++) px(g, tx * 16 + ((r() * 16) | 0), ty * 16 + ((r() * 16) | 0), pick(r, ['#ebebeb', '#e2e2e2']));
      }
    rect(g, 0, 0, 32, 1, '#dadada');
    rect(g, 0, 16, 32, 1, '#dadada');
    rect(g, 0, 0, 1, 32, '#dadada');
    rect(g, 16, 0, 1, 32, '#dadada');
  });

  const concrete = canvasTex(32, 32, (g) => {
    const r = rng(9);
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) px(g, x, y, pick(r, ['#ffffff', '#f5f5f5', '#efefef']));
    for (let i = 0; i < 18; i++) px(g, (r() * 32) | 0, (r() * 32) | 0, '#dddddd');
    rect(g, 0, 15, 32, 1, '#e0e0e0');
  });

  const gravel = canvasTex(32, 32, (g) => {
    const r = rng(11);
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) px(g, x, y, pick(r, ['#ffffff', '#ececec', '#f6f6f6', '#e2e2e2']));
  });

  // fascia band: white with the orange / green / red stripes
  const band = canvasTex(64, 16, (g, w) => {
    rect(g, 0, 0, w, 16, '#ffffff');
    rect(g, 0, 8, w, 2, BRAND.orange);
    rect(g, 0, 10, w, 2, BRAND.green);
    rect(g, 0, 12, w, 2, BRAND.red);
    rect(g, 0, 15, w, 1, '#d9d9d9');
  });

  // logo panel (stylised, not an official asset)
  const logo = canvasTex(
    96,
    64,
    (g, w, h) => {
      rect(g, 0, 0, w, h, '#ffffff');
      rect(g, 0, 0, w, 2, '#e6e6e6');
      // big "7": orange outline under green
      g.font = 'bold 54px "Arial Black", Arial, sans-serif';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillStyle = BRAND.orange;
      g.fillText('7', w / 2 + 2, h / 2 + 2);
      g.fillStyle = BRAND.green;
      g.fillText('7', w / 2, h / 2);
      // word mark across the 7
      rect(g, 6, 27, w - 12, 12, '#ffffff');
      g.font = 'bold 12px "Arial Black", Arial, sans-serif';
      g.fillStyle = BRAND.red;
      g.fillText('ELEVEn', w / 2, 34);
    },
    { repeat: false }
  );

  // window posters / promotions
  const posters = [
    ['#ffcf3f', '#e31b23', '新品', '冰咖啡'],
    ['#00845a', '#ffffff', '便当', '热卖中'],
    ['#e31b23', '#ffffff', '关东煮', '¥9.9'],
    ['#2f6fd0', '#ffffff', 'ICE', '冰饮'],
  ].map(([bg, fg, t1, t2]) =>
    canvasTex(
      32,
      44,
      (g, w, h) => {
        rect(g, 0, 0, w, h, bg);
        rect(g, 2, 2, w - 4, h - 4, bg);
        g.fillStyle = fg;
        g.textAlign = 'center';
        g.font = 'bold 10px sans-serif';
        g.fillText(t1, w / 2, 16);
        g.font = 'bold 8px sans-serif';
        g.fillText(t2, w / 2, 30);
        rect(g, 4, 36, w - 8, 3, fg);
      },
      { repeat: false }
    )
  );

  // vending machine front: grid of lit drinks
  const vending = canvasTex(
    24,
    40,
    (g) => {
      const r = rng(17);
      rect(g, 0, 0, 24, 40, '#eef6ff');
      for (let row = 0; row < 3; row++)
        for (let col = 0; col < 5; col++) {
          const x = 2 + col * 4;
          const y = 3 + row * 8;
          rect(g, x, y, 3, 6, pick(r, ['#e31b23', '#2f6fd0', '#f2c94c', '#00845a', '#f58220', '#ffffff', '#8a5a2a']));
          rect(g, x, y + 6, 3, 1, '#7a8794');
        }
      rect(g, 2, 28, 20, 4, '#28323a');
      rect(g, 4, 34, 16, 4, '#3a4652');
    },
    { repeat: false }
  );

  // cigarette / back-counter shelf
  const backShelf = canvasTex(
    32,
    24,
    (g) => {
      const r = rng(21);
      rect(g, 0, 0, 32, 24, '#3a3f45');
      for (let row = 0; row < 4; row++)
        for (let col = 0; col < 10; col++) rect(g, 1 + col * 3, 1 + row * 6, 2, 4, pick(r, ['#ffffff', '#e31b23', '#2f6fd0', '#f2c94c', '#3a8f5a', '#d9d9d9']));
    },
    { repeat: false }
  );

  // counter front with brand stripes
  const counterFront = canvasTex(
    32,
    16,
    (g) => {
      rect(g, 0, 0, 32, 16, '#ffffff');
      rect(g, 0, 9, 32, 2, BRAND.orange);
      rect(g, 0, 11, 32, 2, BRAND.green);
      rect(g, 0, 13, 32, 2, BRAND.red);
    },
    { repeat: true }
  );

  // patchy snow mask (white with alpha) for ground cover
  const snowPatch = canvasTex(
    128,
    128,
    (g) => {
      const r = rng(31);
      g.clearRect(0, 0, 128, 128);
      for (let i = 0; i < 260; i++) {
        const x = r() * 128;
        const y = r() * 128;
        const rad = 2 + r() * 9;
        g.fillStyle = `rgba(255,255,255,${0.35 + r() * 0.55})`;
        g.beginPath();
        g.arc(x, y, rad, 0, Math.PI * 2);
        g.fill();
      }
    },
    { repeat: true }
  );

  return { asphalt, sidewalk, tiles, concrete, gravel, band, logo, posters, vending, backShelf, counterFront, snowPatch };
}
