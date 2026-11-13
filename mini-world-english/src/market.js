// Supermarket island: produce stands, shelves, fridge, freezer and a checkout.
import * as THREE from 'three';
import { HALF, GYM_X, HOME_Z, mesh, box, cyl, ball, cone } from './world.js';
import { torus, rodX, rodZ } from './gym.js';

const WOOD = '#b98552';
const DARK = '#8a5a34';
const LIGHT = '#d9ac7a';
const WHITE = '#fdfbf4';
const STEEL = '#c9d0d6';
const GREY = '#aeb6bd';
const K = '#23272c';
const RED = '#e5483f';
const BLUE = '#3d6fd9';
const YEL = '#f7d038';
const GREEN = '#4fa64d';
const SKIN = '#f1c9a5';
const HP = Math.PI / 2;

// ---------------------------------------------------------------- produce (p = parent, y = resting surface)
const PRODUCE = {
  banana(p, x, y, z, i) {
    for (const d of [0, 0.1]) {
      const m = mesh(new THREE.TorusGeometry(0.2, 0.065, 5, 7, 2.3), YEL, x + d, y + 0.08 + d, z, p);
      m.rotation.set(HP, 0, i * 0.7 + d * 4);
    }
  },
  orange(p, x, y, z) {
    ball(0.2, '#f5921e', x, y + 0.2, z, p);
    ball(0.04, GREEN, x, y + 0.4, z, p, 0);
  },
  grapes(p, x, y, z) {
    for (const [dx, dy, dz] of [[0, 0, 0], [0.13, 0, 0.05], [-0.1, 0, 0.1], [0.05, 0, -0.12], [0, 0.12, 0], [0.1, 0.12, 0.08]]) ball(0.09, '#7a3fa8', x + dx, y + 0.09 + dy, z + dz, p, 0);
    box(0.03, 0.12, 0.03, GREEN, x, y + 0.3, z, p);
  },
  strawberry(p, x, y, z) {
    cone(0.15, 0.3, RED, x, y + 0.15, z, p, 6).rotation.x = Math.PI;
    cyl(0.1, 0.13, 0.05, GREEN, x, y + 0.32, z, p, 6);
  },
  pineapple(p, x, y, z) {
    cyl(0.17, 0.19, 0.4, '#e0a23a', x, y + 0.2, z, p, 7);
    cone(0.13, 0.3, '#3f9b57', x, y + 0.55, z, p, 5);
    cone(0.17, 0.16, GREEN, x, y + 0.45, z, p, 5);
  },
  lemon(p, x, y, z, i) {
    const m = ball(0.16, '#fbe34d', x, y + 0.15, z, p);
    m.scale.set(1.35, 0.95, 1);
    m.rotation.y = i;
  },
  pear(p, x, y, z) {
    ball(0.17, '#b9d14a', x, y + 0.17, z, p);
    ball(0.11, '#c5db5c', x, y + 0.36, z, p, 0);
    box(0.025, 0.1, 0.025, DARK, x, y + 0.5, z, p);
  },
  peach(p, x, y, z) {
    ball(0.19, '#f7a07a', x, y + 0.19, z, p);
    ball(0.1, '#ee7f6b', x + 0.1, y + 0.2, z + 0.05, p, 0);
    box(0.12, 0.02, 0.06, GREEN, x + 0.04, y + 0.39, z, p);
  },
  carrot(p, x, y, z, i) {
    const m = cone(0.09, 0.5, '#f08a3c', x, y + 0.09, z, p, 6);
    m.rotation.z = HP;
    m.rotation.y = (i % 3) * 0.2 - 0.2;
    box(0.14, 0.05, 0.12, GREEN, x + 0.3, y + 0.09, z, p);
  },
  tomato(p, x, y, z) {
    ball(0.19, '#e8372c', x, y + 0.18, z, p).scale.y = 0.88;
    box(0.16, 0.025, 0.04, GREEN, x, y + 0.35, z, p);
    box(0.04, 0.025, 0.16, GREEN, x, y + 0.35, z, p);
  },
  potato(p, x, y, z, i) {
    const m = ball(0.18, '#b98a55', x, y + 0.14, z, p, 0);
    m.scale.set(1.35, 0.8, 1);
    m.rotation.y = i * 1.3;
  },
  cabbage(p, x, y, z) {
    ball(0.24, '#a5d46a', x, y + 0.22, z, p);
    ball(0.2, '#7fb84d', x - 0.08, y + 0.16, z + 0.08, p, 0);
    ball(0.18, '#8ec65a', x + 0.1, y + 0.15, z - 0.06, p, 0);
  },
  corn(p, x, y, z, i) {
    const g = new THREE.Group();
    g.position.set(x, y + 0.1, z);
    g.rotation.y = (i % 3) * 0.25 - 0.25;
    p.add(g);
    rodX(0.1, 0.42, YEL, 0.04, 0, 0, g, 7);
    rodX(0.11, 0.24, '#7fb84d', -0.14, 0, 0, g, 6);
  },
  onion(p, x, y, z) {
    ball(0.18, '#b565a7', x, y + 0.17, z, p).scale.y = 0.9;
    cone(0.05, 0.14, '#d9a6cf', x, y + 0.38, z, p, 5);
  },
  broccoli(p, x, y, z) {
    cyl(0.06, 0.08, 0.2, '#a5d46a', x, y + 0.1, z, p, 6);
    ball(0.15, '#2f7d3a', x, y + 0.3, z, p, 0);
    ball(0.12, '#37893f', x + 0.11, y + 0.24, z + 0.04, p, 0);
    ball(0.12, '#2f7d3a', x - 0.1, y + 0.25, z - 0.05, p, 0);
  },
  cucumber(p, x, y, z, i) {
    rodX(0.075, 0.55, '#3f9b57', x, y + 0.08, z, p, 6).rotation.y = (i % 3) * 0.2 - 0.2;
  },
  eggplant(p, x, y, z, i) {
    const m = ball(0.15, '#5b3a8c', x, y + 0.14, z, p);
    m.scale.set(1.9, 0.9, 0.95);
    m.rotation.y = (i % 2) * 0.4;
    ball(0.08, GREEN, x - 0.27, y + 0.15, z + (i % 2) * 0.1, p, 0);
  },
};

export function person(g, { shirt, pants, hair, apron }) {
  for (const s of [-1, 1]) {
    box(0.24, 0.72, 0.26, pants, 0, 0.36, s * 0.17, g);
    box(0.34, 0.1, 0.26, K, 0.05, 0.05, s * 0.17, g);
  }
  box(0.46, 0.85, 0.72, shirt, 0, 1.14, 0, g);
  if (apron) box(0.06, 0.8, 0.6, apron, 0.24, 1.0, 0, g).castShadow = false;
  ball(0.3, SKIN, 0, 1.88, 0, g, 2);
  const h = ball(0.32, hair, -0.05, 1.95, 0, g);
  h.scale.set(1, 0.85, 1);
  for (const s of [-1, 1]) ball(0.04, K, 0.27, 1.9, s * 0.12, g, 0);
  const arms = [-1, 1].map((s) => {
    const pv = new THREE.Group();
    pv.position.set(0, 1.5, s * 0.46);
    g.add(pv);
    box(0.2, 0.7, 0.2, shirt, 0, -0.3, 0, pv);
    ball(0.11, SKIN, 0, -0.68, 0, pv, 0);
    return pv;
  });
  return arms;
}

export function buildMarket({ root, item: baseItem, updaters }) {
  const shop = new THREE.Group();
  shop.position.set(GYM_X, 0, HOME_Z);
  root.add(shop);
  const item = (word, x, z, opts = {}) => baseItem(word, x, z, { ...opts, parent: shop, scene: 'market' });

  // ------------------------------------------------------------------ building shell
  const slab = new THREE.Group();
  shop.add(slab);
  box(HALF * 2, 1.5, HALF * 2, '#aab1b8', 0, -1.15, 0, slab);
  box(HALF * 2, 0.5, HALF * 2, '#878f98', 0, -2.15, 0, slab);

  const floor = item('floor', 0, 0, { flat: true });
  box(HALF * 2, 0.4, HALF * 2, '#eef1f4', 0, -0.2, 0, floor);
  for (let i = -5; i <= 5; i++) {
    box(0.05, 0.02, HALF * 2 - 0.8, '#dde2e7', i * 2, 0.005, 0.4, floor).castShadow = false;
    box(HALF * 2 - 0.8, 0.02, 0.05, '#dde2e7', 0.4, 0.005, i * 2, floor).castShadow = false;
  }

  const wall = item('wall', 0, -11.6, { flat: true, y: 2.3 });
  box(HALF * 2, 4.6, 0.4, '#f4f6f8', 0, 0, -0.2, wall);
  box(0.4, 4.6, HALF * 2 - 0.4, '#eceff2', -11.8, 0, 11.8, wall);
  box(HALF * 2 - 0.4, 0.4, 0.06, GREEN, 0.2, 1.9, 0.02, wall).castShadow = false;
  box(0.06, 0.4, HALF * 2 - 0.4, GREEN, -11.58, 1.9, 11.8, wall).castShadow = false;

  // ------------------------------------------------------------------ produce stands
  function stand(word, x, z) {
    const g = item(word, x, z, { labelY: 2.2, hitBox: [1.5, 1.55, 1.8] });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.1, sx < 0 ? 1.1 : 0.75, 0.1, DARK, sx * 0.58, sx < 0 ? 0.55 : 0.375, sz * 0.75, g);
    const tray = new THREE.Group();
    tray.position.set(0, 0.95, 0);
    tray.rotation.z = -0.28;
    g.add(tray);
    box(1.45, 0.1, 1.75, WOOD, 0, 0, 0, tray);
    for (const s of [-1, 1]) {
      box(0.08, 0.3, 1.75, LIGHT, s * 0.72, 0.15, 0, tray);
      box(1.45, 0.3, 0.08, LIGHT, 0, 0.15, s * 0.87, tray);
    }
    box(0.03, 0.2, 0.34, WHITE, 0.78, 0.22, 0, tray).castShadow = false;
    let i = 0;
    for (const u of [-0.42, 0, 0.42]) for (const v of [-0.55, 0, 0.55]) PRODUCE[word](tray, u, 0.05, v, i++);
  }
  ['carrot', 'tomato', 'potato', 'cabbage', 'corn', 'onion', 'broccoli', 'cucumber', 'eggplant'].forEach((w, i) => stand(w, -10.6, -8.5 + i * 1.9));
  ['banana', 'orange', 'grapes', 'strawberry', 'pineapple', 'lemon', 'pear', 'peach'].forEach((w, i) => stand(w, -6.4, -7.0 + i * 1.9));

  function bin(word, x, z, color, fill) {
    const g = item(word, x, z, { labelY: 2.3 });
    box(1.8, 0.8, 1.8, '#d9ac7a', 0, 0.4, 0, g);
    box(1.84, 0.1, 1.84, '#c49160', 0, 0.8, 0, g);
    box(1.0, 0.36, 0.03, color, 0, 0.42, 0.91, g).castShadow = false;
    box(0.03, 0.36, 1.0, color, 0.91, 0.42, 0, g).castShadow = false;
    for (const [bx, bz, s] of [[-0.42, -0.42, 1], [0.42, -0.4, 0.92], [-0.4, 0.44, 0.95], [0.44, 0.42, 1.05], [0.02, 0.02, 0.9]]) fill(g, bx, bx === 0.02 ? 1.42 : 0.85, bz, s);
  }
  bin('watermelon', -2.4, 4.6, GREEN, (g, x, y, z, s) => {
    const m = new THREE.Group();
    m.position.set(x, y + 0.42 * s, z);
    m.scale.setScalar(s);
    m.rotation.set(x, z * 2, 0.3);
    g.add(m);
    ball(0.42, '#3f9b57', 0, 0, 0, m, 2);
    for (const a of [0, 1.05, 2.1]) cyl(0.425, 0.425, 0.07, '#2c7a41', 0, 0, 0, m, 12).rotation.set(HP, a, 0);
  });
  bin('pumpkin', -2.4, 7.9, '#f08a3c', (g, x, y, z, s) => {
    const m = new THREE.Group();
    m.position.set(x, y + 0.34 * s, z);
    m.scale.setScalar(s);
    g.add(m);
    ball(0.42, '#f08a3c', 0, 0, 0, m, 2).scale.y = 0.8;
    for (const a of [0, 1.05, 2.1]) {
      const r = cyl(0.425, 0.425, 0.05, '#d9742a', 0, 0, 0, m, 12);
      r.rotation.set(HP, a, 0);
      r.scale.z = 0.8;
    }
    box(0.08, 0.16, 0.08, '#6b8a3a', 0, 0.38, 0, m);
  });

  // ------------------------------------------------------------------ shelves with packaged food
  const PKG = {
    bread(g, x, y, z) {
      box(0.5, 0.26, 0.36, '#d9a05b', x, y + 0.13, z, g);
      box(0.46, 0.1, 0.32, '#e8bb7c', x, y + 0.3, z, g);
    },
    rice(g, x, y, z) {
      box(0.34, 0.54, 0.4, WHITE, x, y + 0.27, z, g);
      box(0.35, 0.18, 0.41, RED, x, y + 0.3, z, g).castShadow = false;
    },
    noodles(g, x, y, z) {
      cyl(0.2, 0.15, 0.36, RED, x, y + 0.18, z, g, 9);
      cyl(0.21, 0.21, 0.04, WHITE, x, y + 0.38, z, g, 9);
      cyl(0.19, 0.17, 0.1, YEL, x, y + 0.2, z, g, 9).castShadow = false;
    },
    cookies(g, x, y, z) {
      box(0.3, 0.44, 0.42, BLUE, x, y + 0.22, z, g);
      rodX(0.13, 0.02, '#c98b4f', x + 0.16, y + 0.24, z, g, 9).castShadow = false;
    },
    chips(g, x, y, z) {
      box(0.26, 0.5, 0.42, '#f08a3c', x, y + 0.25, z, g);
      box(0.1, 0.1, 0.42, '#d9742a', x, y + 0.55, z, g);
      rodX(0.11, 0.02, YEL, x + 0.14, y + 0.26, z, g, 9).castShadow = false;
    },
    candy(g, x, y, z, i) {
      cyl(0.18, 0.18, 0.38, '#f7a8c8', x, y + 0.19, z, g, 9);
      cyl(0.19, 0.19, 0.07, RED, x, y + 0.41, z, g, 9);
      ball(0.07, [YEL, GREEN, BLUE][i % 3], x + 0.16, y + 0.2, z, g, 0);
    },
    chocolate(g, x, y, z) {
      const m = box(0.1, 0.52, 0.36, '#6b3f22', x, y + 0.27, z, g);
      m.rotation.z = -0.15;
      box(0.11, 0.2, 0.37, '#e0b03a', x + 0.01, y + 0.24, z, g).rotation.z = -0.15;
    },
    cake(g, x, y, z) {
      cyl(0.22, 0.22, 0.2, WHITE, x, y + 0.1, z, g, 10);
      cyl(0.23, 0.23, 0.07, '#f7a8c8', x, y + 0.23, z, g, 10);
      ball(0.06, RED, x, y + 0.31, z, g, 0);
    },
    milk(g, x, y, z) {
      box(0.3, 0.46, 0.3, WHITE, x, y + 0.23, z, g);
      const roof = cone(0.22, 0.16, BLUE, x, y + 0.54, z, g, 4);
      roof.rotation.y = Math.PI / 4;
      box(0.31, 0.14, 0.31, BLUE, x, y + 0.2, z, g).castShadow = false;
    },
    yogurt(g, x, y, z) {
      cyl(0.15, 0.11, 0.28, WHITE, x, y + 0.14, z, g, 9);
      cyl(0.16, 0.16, 0.04, '#f7a8c8', x, y + 0.3, z, g, 9);
      box(0.2, 0.1, 0.03, RED, x, y + 0.15, z + 0.13, g).castShadow = false;
    },
    cheese(g, x, y, z) {
      box(0.36, 0.26, 0.3, '#f7c948', x, y + 0.13, z, g).rotation.y = 0.3;
      ball(0.05, '#d9a520', x + 0.08, y + 0.2, z + 0.15, g, 0);
      ball(0.04, '#d9a520', x - 0.08, y + 0.1, z + 0.16, g, 0);
    },
    eggs(g, x, y, z) {
      box(0.36, 0.14, 0.3, '#c9b38c', x, y + 0.07, z, g);
      for (const dx of [-0.11, 0.11]) ball(0.09, WHITE, x + dx, y + 0.19, z, g, 1).scale.y = 1.2;
    },
    juice(g, x, y, z) {
      cyl(0.13, 0.13, 0.42, '#f5921e', x, y + 0.21, z, g, 8);
      cyl(0.07, 0.1, 0.1, '#f5921e', x, y + 0.47, z, g, 8);
      cyl(0.075, 0.075, 0.06, GREEN, x, y + 0.55, z, g, 8);
    },
    water(g, x, y, z) {
      cyl(0.11, 0.11, 0.46, '#9fdcf5', x, y + 0.23, z, g, 8);
      cyl(0.115, 0.115, 0.14, BLUE, x, y + 0.26, z, g, 8).castShadow = false;
      cyl(0.06, 0.06, 0.1, WHITE, x, y + 0.51, z, g, 8);
    },
    soda(g, x, y, z) {
      cyl(0.13, 0.13, 0.36, RED, x, y + 0.18, z, g, 9);
      cyl(0.12, 0.12, 0.03, STEEL, x, y + 0.375, z, g, 9);
      cyl(0.135, 0.135, 0.08, WHITE, x, y + 0.18, z, g, 9).castShadow = false;
    },
  };

  function gondola(x, zc, len, words) {
    const g = item('shelf', x, zc, { labelY: 3.6 });
    box(0.14, 3.0, len, '#dfe4e8', -0.42, 1.5, 0, g);
    box(1.1, 0.3, len, GREY, 0.06, 0.15, 0, g);
    for (const y of [1.15, 2.0]) box(0.95, 0.07, len, WHITE, 0.1, y, 0, g);
    box(0.34, 0.12, len + 0.1, RED, -0.34, 3.06, 0, g);
    for (const s of [-1, 1]) box(1.1, 3.0, 0.1, '#dfe4e8', 0.06, 1.5, s * (len / 2), g);
    const seg = (len - 0.2) / words.length;
    words.forEach((w, k) => {
      const p = item(w, x + 0.18, zc - len / 2 + 0.1 + seg * (k + 0.5), { labelY: 3.5, hitBox: [0.9, 2.9, seg - 0.12] });
      let i = 0;
      for (const y of [0.3, 1.19, 2.04]) for (const dz of [-0.5, 0, 0.5]) PKG[w](p, 0, y, dz, i++);
    });
  }
  gondola(-1.6, -4.6, 7.0, ['bread', 'rice', 'noodles', 'cookies']);
  gondola(3.4, -4.6, 7.0, ['chips', 'candy', 'chocolate', 'cake']);

  {
    const g = item('priceTag', -1.42, -0.98, { labelY: 0.7, y: 1.75, hit: [0.55, 0] });
    box(0.9, 0.62, 0.05, YEL, 0, 0, 0, g);
    box(0.92, 0.12, 0.055, RED, 0, 0.25, 0, g).castShadow = false;
    box(0.14, 0.3, 0.06, RED, -0.24, -0.08, 0, g).castShadow = false;
    box(0.14, 0.3, 0.06, RED, 0.0, -0.08, 0, g).castShadow = false;
    box(0.14, 0.3, 0.06, RED, 0.24, -0.08, 0, g).castShadow = false;
  }

  // ------------------------------------------------------------------ fridge (back wall) and freezer chest
  {
    const len = 9.8;
    const cx = -5.8;
    const g = item('fridge', cx, -10.85, { labelY: 4.1 });
    box(len, 3.3, 0.2, '#e8eef2', 0, 1.65, -0.45, g);
    box(len, 0.4, 1.1, '#e8eef2', 0, 0.2, 0, g);
    box(len, 0.34, 1.15, '#4aa8e0', 0, 3.4, 0.02, g);
    for (const s of [-1, 1]) box(0.14, 3.3, 1.1, '#e8eef2', s * (len / 2), 1.65, 0, g);
    for (const y of [1.3, 2.2]) box(len - 0.2, 0.06, 0.85, '#cfe8f5', 0, y, 0.05, g);
    const words = ['milk', 'yogurt', 'cheese', 'eggs', 'juice', 'water', 'soda'];
    const seg = (len - 0.3) / words.length;
    words.forEach((w, k) => {
      const p = item(w, cx - len / 2 + 0.15 + seg * (k + 0.5), -10.7, { labelY: 3.9, hitBox: [seg - 0.12, 2.9, 0.85] });
      let i = 0;
      for (const y of [0.4, 1.33, 2.23]) for (const dx of [-0.4, 0, 0.4]) PKG[w](p, dx, y, 0.05, i++);
    });
  }
  {
    const g = item('freezer', 4.6, -10.45, { labelY: 2.0 });
    box(6.4, 1.1, 1.75, '#e8eef2', 0, 0.55, 0, g);
    box(6.0, 0.06, 1.35, '#cfe8f5', 0, 1.12, 0, g).castShadow = false;
    box(6.5, 0.12, 0.2, '#4aa8e0', 0, 1.14, 0.8, g);
    box(6.5, 0.12, 0.2, '#4aa8e0', 0, 1.14, -0.8, g);
    for (const x of [-3.15, -1.05, 1.05, 3.15]) box(0.12, 0.12, 1.75, '#4aa8e0', x, 1.14, 0, g);
    box(6.42, 0.3, 0.04, '#4aa8e0', 0, 0.4, 0.88, g).castShadow = false;

    const ice = item('iceCream', 2.5, -10.45, { labelY: 1.0, y: 1.16, hit: [0.9, 0.25] });
    [['#f7a8c8', -0.55, -0.3], [WHITE, 0, 0.25], ['#8a5a34', 0.55, -0.25], ['#b9e3a0', -0.3, 0.35]].forEach(([c, x, z]) => {
      cone(0.16, 0.42, '#e0b06a', x, 0.21, z, ice, 7).rotation.x = Math.PI;
      ball(0.19, c, x, 0.5, z, ice);
    });
    const fish = item('fish', 4.6, -10.45, { labelY: 0.8, y: 1.16, hit: [0.9, 0.15] });
    [[-0.5, -0.3, 0.2], [0.1, 0.25, -0.1], [0.55, -0.25, 0.1]].forEach(([x, z, r]) => {
      const f = new THREE.Group();
      f.position.set(x, 0.1, z);
      f.rotation.y = r;
      fish.add(f);
      ball(0.16, '#8fb4cc', 0, 0, 0, f).scale.set(2.1, 0.55, 0.9);
      const tail = cone(0.14, 0.24, '#6f97b3', -0.42, 0, 0, f, 4);
      tail.rotation.z = -HP;
      tail.scale.z = 0.3;
      ball(0.03, K, 0.22, 0.05, 0.1, f, 0);
    });
    const meat = item('meat', 6.7, -10.45, { labelY: 0.8, y: 1.16, hit: [0.9, 0.15] });
    [[-0.5, -0.25], [0.1, 0.25], [0.6, -0.3]].forEach(([x, z]) => {
      box(0.62, 0.05, 0.5, WHITE, x, 0.03, z, meat);
      box(0.5, 0.14, 0.36, '#c9413f', x, 0.11, z, meat);
      box(0.5, 0.145, 0.07, '#f6dcd6', x, 0.11, z + 0.1, meat).castShadow = false;
    });
  }
  {
    const g = item('sign', 4.6, -11.35, { flat: true, y: 3.6 });
    box(5.4, 1.2, 0.12, RED, 0, 0, 0, g);
    box(5.1, 0.9, 0.03, '#c93a33', 0, 0, 0.06, g).castShadow = false;
    // a little shopping-cart pictogram and letter-like blocks
    box(0.6, 0.36, 0.04, WHITE, -2.0, 0.02, 0.08, g).castShadow = false;
    box(0.2, 0.06, 0.04, WHITE, -2.38, 0.22, 0.08, g).castShadow = false;
    for (const x of [-2.18, -1.82]) rodZ(0.07, 0.04, WHITE, x, -0.27, 0.08, g, 8).castShadow = false;
    [0.5, 0.34, 0.5, 0.42, 0.34, 0.5, 0.42].forEach((w, i) => (box(0.3, w, 0.04, WHITE, -1.1 + i * 0.5, (w - 0.5) / 2, 0.08, g).castShadow = false));
  }

  // ------------------------------------------------------------------ checkout
  {
    const g = item('checkout', 8.4, 3.6, { labelY: 1.9 });
    box(1.35, 1.0, 4.7, '#e8eef2', 0, 0.5, 0, g);
    box(1.4, 0.06, 4.75, GREY, 0, 1.0, 0, g);
    box(0.95, 0.03, 3.0, K, 0, 1.04, -0.7, g).castShadow = false;
    box(0.04, 0.36, 4.7, GREEN, 0.69, 0.55, 0, g).castShadow = false;
    const marks = [0, 1, 2].map(() => {
      const m = box(0.95, 0.035, 0.08, '#4a5058', 0, 1.042, 0, g);
      m.castShadow = false;
      return m;
    });
    updaters.push((t) => marks.forEach((m, i) => (m.position.z = -2.1 + ((t * 0.7 + i) % 3) * 0.93)));
  }
  {
    const g = item('cashRegister', 8.4, 4.9, { labelY: 1.2, y: 1.03, hit: [0.45, 0.4] });
    box(0.75, 0.3, 0.75, K, 0, 0.15, 0, g);
    box(0.5, 0.06, 0.5, GREY, 0.06, 0.32, 0.05, g).castShadow = false;
    box(0.08, 0.4, 0.08, K, -0.2, 0.5, -0.2, g);
    const scr = box(0.06, 0.4, 0.55, K, -0.2, 0.8, -0.05, g);
    scr.rotation.z = -0.2;
    box(0.02, 0.3, 0.45, '#6cc4ea', -0.16, 0.8, -0.05, g).rotation.z = -0.2;
  }
  {
    const g = item('receipt', 8.72, 5.55, { labelY: 0.5, y: 1.04, scale: 1.4, hit: [0.3, 0.05] });
    g.rotation.y = 0.3;
    box(0.2, 0.02, 0.5, WHITE, 0, 0.01, 0, g);
    for (let i = 0; i < 4; i++) box(0.14, 0.025, 0.03, GREY, 0, 0.012, -0.17 + i * 0.1, g).castShadow = false;
    rodX(0.05, 0.2, WHITE, 0, 0.05, -0.28, g, 6);
  }
  {
    const g = item('money', 8.12, 5.6, { labelY: 0.5, y: 1.04, scale: 1.4, hit: [0.32, 0.05] });
    box(0.26, 0.02, 0.44, '#6fbf73', 0, 0.01, 0, g);
    box(0.26, 0.02, 0.44, '#5aa85e', 0.05, 0.03, 0.04, g).rotation.y = 0.3;
    cyl(0.08, 0.08, 0.03, '#f2c230', -0.02, 0.06, -0.3, g, 9);
    cyl(0.07, 0.07, 0.03, STEEL, 0.12, 0.02, -0.34, g, 9);
  }
  {
    const g = item('cashier', 7.0, 4.3, { labelY: 2.6, scale: 1.12, hitBox: [0.7, 2.2, 1.0] });
    const arms = person(g, { shirt: WHITE, pants: '#3a4048', hair: '#5a3a22', apron: GREEN });
    arms[0].rotation.z = 0.5;
    updaters.push((t) => (arms[1].rotation.z = 2.4 + Math.sin(t * 5) * 0.3));
  }
  {
    const g = item('customer', 3.0, 5.7, { labelY: 2.6, scale: 1.12, hitBox: [0.7, 2.2, 1.0] });
    const arms = person(g, { shirt: '#f08a3c', pants: BLUE, hair: K });
    for (const a of arms) a.rotation.z = 1.2;
  }
  {
    const g = item('shoppingCart', 4.75, 5.7, { labelY: 2.0, hitBox: [1.7, 1.45, 1.0] });
    box(1.3, 0.06, 0.9, STEEL, 0.1, 0.65, 0, g);
    for (const s of [-1, 1]) box(1.3, 0.6, 0.05, STEEL, 0.1, 0.95, s * 0.45, g);
    box(0.05, 0.6, 0.9, STEEL, 0.75, 0.95, 0, g);
    box(0.05, 0.7, 0.9, STEEL, -0.55, 1.0, 0, g);
    rodZ(0.05, 1.0, RED, -0.72, 1.36, 0, g, 6);
    for (const s of [-1, 1]) {
      box(0.2, 0.05, 0.05, GREY, -0.63, 1.36, s * 0.45, g);
      box(0.06, 0.6, 0.06, GREY, -0.4, 0.35, s * 0.38, g);
      box(0.06, 0.6, 0.06, GREY, 0.6, 0.35, s * 0.38, g);
      rodZ(0.11, 0.07, K, -0.4, 0.11, s * 0.38, g, 8);
      rodZ(0.11, 0.07, K, 0.6, 0.11, s * 0.38, g, 8);
    }
    box(0.4, 0.5, 0.3, '#f08a3c', 0.35, 0.95, 0.15, g);
    box(0.3, 0.6, 0.3, WHITE, -0.15, 1.0, -0.15, g);
    cyl(0.12, 0.12, 0.5, '#9fdcf5', 0.4, 0.95, -0.2, g, 8);
    ball(0.2, GREEN, -0.15, 0.9, 0.2, g, 0);
  }
  {
    const g = item('shoppingBasket', 0.8, 8.9, { labelY: 1.3, hit: [0.7, 0.35] });
    g.rotation.y = 0.4;
    box(1.0, 0.5, 0.7, RED, 0, 0.27, 0, g);
    box(0.86, 0.06, 0.56, '#b53630', 0, 0.51, 0, g).castShadow = false;
    torus(0.32, 0.035, K, 0, 0.62, 0, g).rotation.y = HP;
    ball(0.17, '#f5921e', -0.22, 0.6, 0.08, g, 0);
    box(0.3, 0.3, 0.22, BLUE, 0.2, 0.62, -0.1, g);
  }
  {
    const g = item('shoppingBag', 8.5, 7.2, { labelY: 1.6, hit: [0.6, 0.5] });
    box(0.62, 0.8, 0.42, '#d9ac7a', 0, 0.4, 0, g);
    box(0.63, 0.14, 0.43, '#c49160', 0, 0.74, 0, g).castShadow = false;
    for (const s of [-1, 1]) torus(0.14, 0.025, DARK, 0, 0.88, s * 0.15, g);
    box(0.1, 0.7, 0.1, '#e8bb7c', 0.15, 0.95, -0.05, g).rotation.z = -0.25;
    ball(0.14, GREEN, -0.15, 0.9, 0.02, g, 0);
  }
  {
    const g = item('entrance', 9.4, 10.5, { labelY: 3.4, hitBox: [3.2, 2.9, 0.5] });
    for (const s of [-1, 1]) {
      box(0.22, 2.7, 0.22, STEEL, s * 1.5, 1.35, 0, g);
      box(0.4, 0.1, 0.4, GREY, s * 1.5, 0.05, 0, g);
    }
    box(3.3, 0.5, 0.26, GREEN, 0, 2.75, 0, g);
    box(0.7, 0.12, 0.04, WHITE, 0, 2.75, 0.14, g).castShadow = false;
    box(0.26, 0.26, 0.04, WHITE, -0.42, 2.75, 0.14, g).rotation.z = Math.PI / 4;
    const gates = [-1, 1].map((s) => {
      const pv = new THREE.Group();
      pv.position.set(s * 1.4, 1.0, 0);
      g.add(pv);
      box(1.2, 0.5, 0.06, '#bfe6c8', -s * 0.62, 0, 0, pv);
      return { pv, s };
    });
    updaters.push((t) => {
      const a = Math.max(0, Math.sin(t * 0.9)) * 1.3;
      for (const { pv, s } of gates) pv.rotation.y = s * a;
    });
  }
}
