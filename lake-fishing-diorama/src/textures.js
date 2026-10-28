// Tiny hand-painted pixel textures generated on canvas (nearest filtered).
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

const pick = (r, arr) => arr[Math.floor(r() * arr.length)];

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.NearestFilter;
  t.generateMipmaps = false;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function px(g, x, y, c) {
  g.fillStyle = c;
  g.fillRect(x, y, 1, 1);
}

function noiseFill(g, w, h, r, palette) {
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) px(g, x, y, pick(r, palette));
}

function blots(g, w, h, r, count, palette, maxR = 2.5) {
  for (let i = 0; i < count; i++) {
    const cx = (r() * w) | 0;
    const cy = (r() * h) | 0;
    const rad = 0.8 + r() * maxR;
    const col = pick(r, palette);
    for (let dy = -3; dy <= 3; dy++)
      for (let dx = -3; dx <= 3; dx++)
        if (dx * dx + dy * dy <= rad * rad) px(g, (cx + dx + w) % w, (cy + dy + h) % h, col);
  }
}

export function repeatTex(tex, rx, ry = rx) {
  const t = tex.clone();
  t.repeat.set(rx, ry);
  t.needsUpdate = true;
  return t;
}

export function makeTextures() {
  const grass = canvasTex(64, 64, (g, w, h) => {
    const r = rng(11);
    noiseFill(g, w, h, r, ['#8ba75b', '#89a559', '#8da95d']);
    blots(g, w, h, r, 34, ['#819e52', '#95b264', '#9bb768', '#7f9b50'], 3.4);
    for (let i = 0; i < 40; i++) px(g, (r() * w) | 0, (r() * h) | 0, pick(r, ['#a4bd72', '#7b974d']));
  });

  const soil = canvasTex(32, 32, (g, w, h) => {
    const r = rng(23);
    noiseFill(g, w, h, r, ['#7d5d3f', '#7a5b3d', '#806041']);
    blots(g, w, h, r, 16, ['#72543a', '#876746'], 2.2);
    for (let i = 0; i < 12; i++) px(g, (r() * w) | 0, (r() * h) | 0, pick(r, ['#a39582', '#8f8475', '#4f3a27']));
  });

  const logs = canvasTex(32, 32, (g, w, h) => {
    const r = rng(31);
    for (let band = 0; band < 8; band++) {
      const y0 = band * 4;
      const base = pick(r, ['#8b6441', '#936c47', '#86603e']);
      for (let x = 0; x < w; x++) {
        px(g, x, y0, r() < 0.8 ? '#a87f56' : '#b18a5f');
        px(g, x, y0 + 1, r() < 0.85 ? base : '#7b5737');
        px(g, x, y0 + 2, r() < 0.85 ? base : '#9b734c');
        px(g, x, y0 + 3, '#563c26');
      }
      if (r() < 0.6) px(g, (r() * w) | 0, y0 + 1, '#5e4129');
    }
  });

  const roof = canvasTex(32, 32, (g, w, h) => {
    const r = rng(41);
    for (let row = 0; row < 8; row++) {
      const y0 = row * 4;
      const off = (row % 2) * 4;
      for (let x = 0; x < w; x++) {
        const shingle = Math.floor((x + off) / 8);
        const c = ['#5f707b', '#566772', '#687a85', '#62747f'][(shingle + row * 3) % 4];
        px(g, x, y0, '#7b8d97');
        px(g, x, y0 + 1, c);
        px(g, x, y0 + 2, r() < 0.9 ? c : '#4e5e68');
        px(g, x, y0 + 3, '#3c4952');
        if ((x + off) % 8 === 0) {
          px(g, x, y0 + 1, '#43515a');
          px(g, x, y0 + 2, '#43515a');
        }
      }
    }
  });

  const plank = canvasTex(16, 16, (g, w, h) => {
    const r = rng(53);
    noiseFill(g, w, h, r, ['#ffffff', '#f6f1e8', '#efe8dc']);
    for (let y = 0; y < h; y += 4) for (let x = 0; x < w; x++) if (r() < 0.55) px(g, x, y + 1, '#ddd3c2');
    for (let i = 0; i < 5; i++) px(g, (r() * w) | 0, (r() * h) | 0, '#b9ac98');
  });

  const stone = canvasTex(16, 16, (g, w, h) => {
    const r = rng(61);
    noiseFill(g, w, h, r, ['#9a978e', '#8f8c84', '#a5a298']);
    for (let y = 0; y < h; y += 4) {
      const off = (y / 4) % 2 ? 3 : 0;
      for (let x = 0; x < w; x++) px(g, x, y + 3, '#6c6a64');
      for (let x = off; x < w; x += 6) for (let k = 0; k < 4; k++) px(g, x, y + k, '#6c6a64');
    }
    for (let i = 0; i < 12; i++) px(g, (r() * w) | 0, (r() * h) | 0, '#b8b5aa');
  });

  const sand = canvasTex(32, 32, (g, w, h) => {
    const r = rng(71);
    noiseFill(g, w, h, r, ['#c9ac7c', '#c7aa7a', '#cbae7e']);
    blots(g, w, h, r, 12, ['#bea171', '#d3b98a'], 2);
    for (let i = 0; i < 16; i++) px(g, (r() * w) | 0, (r() * h) | 0, pick(r, ['#9e8a6e', '#e2cfa6', '#a89272']));
  });

  return { grass, soil, logs, roof, plank, stone, sand };
}
