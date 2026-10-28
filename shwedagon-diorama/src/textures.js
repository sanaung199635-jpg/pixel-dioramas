// Small hand-painted pixel textures generated on canvas (nearest filtered).
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

export const pick = (r, arr) => arr[Math.floor(r() * arr.length)];

function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
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

export function makeTextures() {
  // cream marble plaza tiles (8px tiles)
  const marble = canvasTex(32, 32, (g) => {
    const r = rng(5);
    for (let ty = 0; ty < 4; ty++)
      for (let tx = 0; tx < 4; tx++) {
        const base = (tx + ty) % 2 ? pick(r, ['#ece2cf', '#e9dfcb']) : pick(r, ['#faf6ee', '#f7f2e8']);
        for (let y = 0; y < 8; y++)
          for (let x = 0; x < 8; x++) px(g, tx * 8 + x, ty * 8 + y, r() < 0.05 ? '#e4dbc9' : base);
      }
    for (let k = 0; k < 32; k += 8)
      for (let i = 0; i < 32; i++) {
        px(g, i, k, '#d9cdb8');
        px(g, k, i, '#d9cdb8');
      }
  });

  // warmer checker for the circumambulation walkway
  const walk = canvasTex(32, 32, (g) => {
    const r = rng(6);
    for (let y = 0; y < 32; y++)
      for (let x = 0; x < 32; x++) {
        const chk = ((x >> 3) + (y >> 3)) % 2;
        px(g, x, y, chk ? (r() < 0.06 ? '#e3d4ba' : '#e8dcc4') : r() < 0.06 ? '#f3ece0' : '#f7f2e8');
      }
  });

  // whitewashed sandstone bricks for the platform walls
  const brick = canvasTex(32, 32, (g) => {
    const r = rng(7);
    for (let row = 0; row < 8; row++) {
      const off = (row % 2) * 4;
      for (let x = 0; x < 32; x++) {
        const b = Math.floor((x + off) / 8);
        const c = ['#c9c0b0', '#c2b8a7', '#d0c7b8', '#bbb19f'][(b + row * 3) % 4];
        for (let k = 0; k < 3; k++) px(g, x, row * 4 + k, r() < 0.05 ? '#d8cbb3' : c);
        px(g, x, row * 4 + 3, '#9f9585');
        if ((x + off) % 8 === 0) for (let k = 0; k < 3; k++) px(g, x, row * 4 + k, '#9f9585');
      }
    }
  });

  const grass = canvasTex(64, 64, (g) => {
    const r = rng(11);
    for (let y = 0; y < 64; y++) for (let x = 0; x < 64; x++) px(g, x, y, pick(r, ['#8ba75b', '#89a559', '#8da95d']));
    for (let i = 0; i < 34; i++) {
      const cx = (r() * 64) | 0;
      const cy = (r() * 64) | 0;
      const rad = 1 + r() * 3.2;
      const col = pick(r, ['#819e52', '#95b264', '#9bb768', '#7f9b50']);
      for (let dy = -4; dy <= 4; dy++)
        for (let dx = -4; dx <= 4; dx++) if (dx * dx + dy * dy <= rad * rad) px(g, (cx + dx + 64) % 64, (cy + dy + 64) % 64, col);
    }
  });

  const soil = canvasTex(32, 32, (g) => {
    const r = rng(23);
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) px(g, x, y, pick(r, ['#7d5d3f', '#7a5b3d', '#806041']));
    for (let i = 0; i < 14; i++) px(g, (r() * 32) | 0, (r() * 32) | 0, pick(r, ['#a39582', '#5f452e']));
  });

  const sand = canvasTex(32, 32, (g) => {
    const r = rng(71);
    for (let y = 0; y < 32; y++) for (let x = 0; x < 32; x++) px(g, x, y, pick(r, ['#d9c49d', '#d6c099', '#dcc8a2']));
    for (let i = 0; i < 16; i++) px(g, (r() * 32) | 0, (r() * 32) | 0, pick(r, ['#bfa77e', '#e8d9b8']));
  });

  // red clay roof tiles
  const roof = canvasTex(16, 16, (g) => {
    const r = rng(41);
    for (let row = 0; row < 4; row++)
      for (let x = 0; x < 16; x++) {
        const c = r() < 0.15 ? '#3f6a3c' : '#477543';
        px(g, x, row * 4, '#5f8c55');
        px(g, x, row * 4 + 1, c);
        px(g, x, row * 4 + 2, c);
        px(g, x, row * 4 + 3, '#2f4f2e');
      }
  });

  return { marble, walk, brick, grass, soil, sand, roof };
}

export function repeatTex(tex, rx, ry = rx) {
  const t = tex.clone();
  t.repeat.set(rx, ry);
  t.needsUpdate = true;
  return t;
}
