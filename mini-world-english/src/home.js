// Home island: a bedroom (left) and a living room (right) in an open two-wall house.
import * as THREE from 'three';
import { HALF, HOME_Z, box, cyl, ball, cone } from './world.js';
import { torus, rodX, rodZ } from './gym.js';

const WOOD = '#b98552';
const DARK = '#8a5a34';
const LIGHT = '#d9ac7a';
const WHITE = '#fdfbf4';
const K = '#23272c';
const S = '#c9d0d6';
const RED = '#e5483f';
const BLUE = '#5b8fd9';
const YEL = '#f2b632';
const GREEN = '#4fa64d';
const HP = Math.PI / 2;

// solid click volumes [w, h, d] for thin or open furniture
const HITBOX = {
  desk: [1.4, 1.05, 3.0],
  chair: [0.9, 1.7, 0.9],
  coffeeTable: [1.4, 0.75, 2.8],
  shoeRack: [0.8, 0.95, 1.8],
  fan: [0.9, 2.7, 1.1],
  floorLamp: [0.9, 3.4, 0.9],
  guitar: [0.6, 2.6, 0.9],
  vacuumCleaner: [1.3, 1.5, 1.3],
};

export function buildHome({ root, item: baseItem, updaters, R }) {
  const home = new THREE.Group();
  home.position.set(0, 0, HOME_Z);
  root.add(home);
  const item = (word, x, z, opts = {}) => baseItem(word, x, z, { hitBox: HITBOX[word], ...opts, parent: home, scene: 'home' });

  // ------------------------------------------------------------------ house shell
  const slab = new THREE.Group();
  home.add(slab);
  box(HALF * 2, 1.5, HALF * 2, '#b9a58c', 0, -1.15, 0, slab);
  box(HALF * 2, 0.5, HALF * 2, '#927f68', 0, -2.15, 0, slab);

  const floor = item('floor', 0, 0, { flat: true });
  box(HALF * 2, 0.4, HALF * 2, '#e2c59a', 0, -0.2, 0, floor);
  for (let i = -5; i <= 5; i++) box(HALF * 2 - 0.8, 0.02, 0.06, '#d2b384', 0.4, 0.005, i * 2 + 1, floor).castShadow = false;

  const wall = item('wall', 0, -11.6, { flat: true, y: 2.3 });
  box(HALF * 2, 4.6, 0.4, '#f6efe2', 0, 0, -0.2, wall);
  box(0.4, 4.6, HALF * 2 - 0.4, '#f1dfe4', -11.8, 0, 11.8, wall);
  box(11.6, 4.6, 0.06, '#f1dfe4', -5.8, 0, 0.02, wall).castShadow = false; // bedroom side of the back wall
  box(0.3, 1.3, 10.4, '#ece4d6', 0, -1.65, 5.4, wall); // low partition between the rooms
  box(0.4, 0.08, 10.5, WOOD, 0, -0.97, 5.4, wall);
  box(HALF * 2 - 0.4, 0.3, 0.08, WHITE, 0.2, -2.15, 0.03, wall).castShadow = false;

  {
    const g = item('carpet', -6.0, 1.6, { flat: true });
    box(10.6, 0.06, 9.0, '#c7b3e6', 0, 0.03, 0, g).castShadow = false;
    box(10.0, 0.065, 8.4, '#d6c6ee', 0, 0.035, 0, g).castShadow = false;
  }
  {
    const g = item('rug', 5.3, -4.6, { flat: true });
    box(6.4, 0.06, 6.6, '#e39a5e', 0, 0.03, 0, g).castShadow = false;
    box(5.6, 0.065, 5.8, '#f0b782', 0, 0.035, 0, g).castShadow = false;
    box(4.6, 0.07, 4.8, '#e39a5e', 0, 0.04, 0, g).castShadow = false;
    box(4.0, 0.075, 4.2, '#f6cfa3', 0, 0.045, 0, g).castShadow = false;
  }

  // ------------------------------------------------------------------ bedroom
  {
    const g = item('window', -11.55, -4.5, { flat: true, y: 2.7 });
    box(0.12, 2.5, 3.3, WHITE, 0, 0, 0, g);
    box(0.1, 2.2, 3.0, '#a8dcf5', 0.04, 0, 0, g).castShadow = false;
    box(0.12, 2.2, 0.1, WHITE, 0.06, 0, 0, g);
    box(0.12, 0.1, 3.0, WHITE, 0.06, 0, 0, g);
    box(0.3, 0.1, 3.5, WHITE, 0.12, -1.3, 0, g);
  }
  {
    const g = item('curtain', -11.3, -4.5, { labelY: 4.7 });
    rodZ(0.05, 4.8, DARK, 0, 4.25, 0, g, 6);
    for (const s of [-1, 1])
      for (let i = 0; i < 3; i++) box(0.16, 3.1, 0.26, i % 2 ? '#f29b9b' : '#ee8585', 0.02 * i, 2.65, s * (1.75 + i * 0.26), g);
  }
  {
    const g = item('bed', -8.6, 1.5, { labelY: 2.4 });
    box(4.9, 0.45, 3.4, WOOD, 0, 0.4, 0, g);
    for (const [x, z] of [[-2.3, -1.55], [-2.3, 1.55], [2.3, -1.55], [2.3, 1.55]]) box(0.2, 0.2, 0.2, DARK, x, 0.1, z, g);
    box(0.25, 1.9, 3.5, DARK, -2.4, 0.95, 0, g);
    box(0.2, 0.9, 3.5, DARK, 2.4, 0.5, 0, g);
    box(4.5, 0.36, 3.1, WHITE, 0, 0.8, 0, g);
  }
  {
    const g = item('pillow', -10.25, 1.5, { labelY: 0.9, y: 0.98, hit: [0.8, 0.15] });
    for (const z of [-0.78, 0.78]) {
      box(0.95, 0.24, 1.3, '#ffffff', 0, 0.12, z, g);
      box(0.75, 0.28, 1.1, '#f0f4f8', 0, 0.14, z, g);
    }
  }
  {
    const g = item('blanket', -7.75, 1.5, { labelY: 0.9, y: 0.98 });
    box(3.3, 0.14, 3.24, '#6fa8dc', 0, 0.07, 0, g);
    box(0.5, 0.18, 3.26, '#a9cdee', -1.4, 0.09, 0, g);
    for (const s of [-1, 1]) box(3.3, 0.5, 0.06, '#6fa8dc', 0, -0.15, s * 1.62, g);
    for (let i = 0; i < 3; i++) box(0.12, 0.15, 3.25, '#5a94cc', -0.4 + i * 0.8, 0.075, 0, g).castShadow = false;
  }
  {
    const g = item('teddyBear', -9.0, 1.5, { labelY: 1.2, y: 1.12, scale: 1.15, hit: [0.5, 0.4] });
    ball(0.3, '#b9793f', 0, 0.3, 0, g);
    ball(0.24, '#b9793f', 0.02, 0.72, 0, g);
    ball(0.1, '#e3b582', 0.22, 0.68, 0, g, 0);
    ball(0.04, K, 0.31, 0.7, 0, g, 0);
    for (const s of [-1, 1]) {
      ball(0.09, '#b9793f', 0, 0.93, s * 0.17, g, 0);
      ball(0.035, K, 0.2, 0.8, s * 0.09, g, 0);
      ball(0.12, '#a86a33', 0.12, 0.4, s * 0.32, g, 0);
      ball(0.13, '#a86a33', 0.3, 0.1, s * 0.2, g, 0);
    }
  }
  {
    const g = item('nightstand', -10.8, -1.15, { labelY: 1.6 });
    box(1.1, 1.0, 1.0, WOOD, 0, 0.5, 0, g);
    box(0.04, 0.36, 0.84, LIGHT, 0.56, 0.72, 0, g);
    box(0.04, 0.36, 0.84, LIGHT, 0.56, 0.28, 0, g);
    ball(0.06, DARK, 0.6, 0.72, 0, g, 0);
    ball(0.06, DARK, 0.6, 0.28, 0, g, 0);
  }
  {
    const g = item('lamp', -11.0, -1.4, { labelY: 1.2, y: 1.0, hit: [0.4, 0.5] });
    cyl(0.16, 0.2, 0.08, DARK, 0, 0.04, 0, g);
    box(0.06, 0.5, 0.06, DARK, 0, 0.33, 0, g);
    cyl(0.18, 0.34, 0.42, '#ffe7a0', 0, 0.76, 0, g, 8);
  }
  {
    const g = item('alarmClock', -10.5, -0.85, { labelY: 0.7, y: 1.0, scale: 1.15, hit: [0.3, 0.2] });
    rodX(0.18, 0.12, RED, 0, 0.22, 0, g, 10);
    rodX(0.14, 0.13, WHITE, 0.01, 0.22, 0, g, 10);
    box(0.02, 0.12, 0.02, K, 0.08, 0.26, 0, g);
    box(0.02, 0.02, 0.09, K, 0.08, 0.22, 0.04, g);
    for (const s of [-1, 1]) {
      ball(0.07, YEL, 0, 0.42, s * 0.12, g, 0);
      box(0.04, 0.08, 0.04, K, 0, 0.03, s * 0.1, g);
    }
  }
  {
    const g = item('wardrobe', -9.0, -10.85, { labelY: 4.9 });
    box(3.5, 4.2, 1.2, WOOD, 0, 2.1, 0, g);
    box(3.6, 0.14, 1.3, DARK, 0, 4.25, 0, g);
    for (const s of [-1, 1]) {
      box(1.6, 3.8, 0.04, LIGHT, s * 0.84, 2.15, 0.62, g).castShadow = false;
      box(0.07, 0.6, 0.07, DARK, s * 0.14, 2.2, 0.66, g);
    }
  }
  {
    const g = item('dresser', -4.6, -10.9, { labelY: 2.2 });
    box(2.7, 1.5, 1.1, WOOD, 0, 0.8, 0, g);
    box(2.8, 0.1, 1.2, DARK, 0, 1.6, 0, g);
    for (const x of [-1.25, 1.25]) box(0.14, 0.1, 0.14, DARK, x, 0.03, 0.4, g);
    for (let i = 0; i < 3; i++) {
      box(2.4, 0.38, 0.04, LIGHT, 0, 0.3 + i * 0.47, 0.57, g).castShadow = false;
      for (const x of [-0.6, 0.6]) ball(0.06, DARK, x, 0.3 + i * 0.47, 0.62, g, 0);
    }
  }
  {
    const g = item('desk', -10.7, -4.5, { labelY: 2.0 });
    box(1.5, 0.1, 3.1, WOOD, 0, 1.0, 0, g);
    for (const [x, z] of [[-0.62, -1.42], [0.62, -1.42], [-0.62, 1.42], [0.62, 1.42]]) box(0.12, 0.95, 0.12, DARK, x, 0.475, z, g);
    box(1.3, 0.5, 0.8, LIGHT, 0, 0.7, 1.05, g);
    ball(0.05, DARK, 0.68, 0.7, 1.05, g, 0);
  }
  {
    const g = item('laptop', -10.75, -5.1, { labelY: 0.9, y: 1.05, scale: 1.15, hit: [0.5, 0.25] });
    box(0.6, 0.04, 0.86, S, 0.05, 0.02, 0, g);
    box(0.36, 0.045, 0.66, '#8d959d', 0.02, 0.025, 0, g).castShadow = false;
    const lid = new THREE.Group();
    lid.position.set(-0.25, 0.04, 0);
    lid.rotation.z = 0.25;
    g.add(lid);
    box(0.04, 0.6, 0.86, S, 0, 0.3, 0, lid);
    box(0.02, 0.5, 0.76, '#6cc4ea', 0.03, 0.3, 0, lid).castShadow = false;
  }
  {
    const g = item('book', -10.7, -3.65, { labelY: 0.8, y: 1.05, scale: 1.15, hit: [0.5, 0.2] });
    box(0.5, 0.1, 0.7, RED, 0, 0.05, 0, g);
    box(0.48, 0.1, 0.66, BLUE, 0.02, 0.15, 0.02, g).rotation.y = 0.25;
    box(0.44, 0.1, 0.62, GREEN, 0, 0.25, -0.02, g).rotation.y = -0.2;
    box(0.4, 0.02, 0.2, WHITE, 0, 0.305, -0.02, g).rotation.y = -0.2;
  }
  {
    const g = item('chair', -9.0, -4.4, { labelY: 2.2 });
    box(0.85, 0.1, 0.85, YEL, 0, 0.78, 0, g);
    box(0.1, 0.95, 0.85, YEL, 0.38, 1.3, 0, g);
    for (const [x, z] of [[-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]]) box(0.09, 0.75, 0.09, DARK, x, 0.375, z, g);
  }
  {
    const g = item('bookshelf', -11.05, 8.4, { labelY: 4.2 });
    box(0.9, 3.5, 2.7, DARK, 0, 1.75, 0, g);
    box(0.06, 3.2, 2.4, '#6b4226', 0.44, 1.75, 0, g).castShadow = false;
    const cols = [RED, BLUE, GREEN, YEL, '#9b6fd6', WHITE, '#f08a3c'];
    for (let lv = 0; lv < 4; lv++) {
      const y0 = 0.3 + lv * 0.8;
      box(0.2, 0.06, 2.4, WOOD, 0.52, y0 - 0.04, 0, g);
      let z = -1.1;
      while (z < 1.05) {
        const w = 0.14 + R() * 0.1;
        const h = 0.42 + R() * 0.22;
        if (R() > 0.12) box(0.2, h, w, cols[Math.floor(R() * cols.length)], 0.52, y0 + h / 2, z + w / 2, g).castShadow = false;
        z += w + 0.02;
      }
    }
  }
  {
    const g = item('backpack', -9.3, 10.3, { labelY: 1.5, scale: 1.15, hit: [0.65, 0.5] });
    g.rotation.y = 0.5;
    box(0.5, 0.85, 0.8, RED, 0, 0.45, 0, g);
    ball(0.42, RED, 0, 0.85, 0, g).scale.set(0.6, 0.55, 0.95);
    box(0.14, 0.4, 0.6, '#c93a33', 0.3, 0.32, 0, g);
    box(0.04, 0.04, 0.4, YEL, 0.38, 0.45, 0, g);
    for (const s of [-1, 1]) box(0.08, 0.8, 0.1, K, -0.28, 0.5, s * 0.25, g);
    torus(0.1, 0.03, K, 0, 1.08, 0, g).rotation.y = HP;
  }
  {
    const g = item('slippers', -5.5, 3.0, { labelY: 0.8, scale: 1.4, hit: [0.5, 0.1] });
    for (const [z, r] of [[-0.2, 0.1], [0.22, -0.15]]) {
      const k = new THREE.Group();
      k.position.z = z;
      k.rotation.y = r;
      g.add(k);
      box(0.62, 0.07, 0.28, '#f7a8c8', 0, 0.035, 0, k);
      box(0.3, 0.14, 0.3, '#ee7fae', 0.14, 0.12, 0, k);
    }
  }
  {
    const g = item('laundryBasket', -2.6, 8.8, { labelY: 1.8 });
    cyl(0.62, 0.48, 0.95, '#ead9b6', 0, 0.475, 0, g, 10);
    cyl(0.66, 0.66, 0.08, '#cdb88d', 0, 0.95, 0, g, 10);
    for (let i = 0; i < 3; i++) cyl(0.57 - i * 0.045, 0.57 - i * 0.045, 0.03, '#cdb88d', 0, 0.7 - i * 0.22, 0, g, 10).castShadow = false;
    ball(0.3, BLUE, 0.1, 1.0, 0.1, g, 0);
    ball(0.26, RED, -0.22, 1.02, -0.1, g, 0);
    ball(0.22, WHITE, 0.05, 1.12, -0.25, g, 0);
  }

  // ------------------------------------------------------------------ living room
  {
    const g = item('sofa', 1.75, -4.6, { labelY: 2.4 });
    box(1.7, 0.5, 4.9, BLUE, 0.1, 0.45, 0, g);
    box(0.5, 1.4, 4.9, BLUE, -0.6, 0.95, 0, g);
    for (const s of [-1, 1]) {
      box(1.7, 0.95, 0.5, '#4d80cc', 0.1, 0.7, s * 2.25, g);
      box(1.1, 0.2, 1.95, '#7aa7e6', 0.3, 0.8, s * 1.0, g);
      box(0.12, 0.2, 0.12, DARK, 0.8, 0.1, s * 2.3, g);
    }
  }
  {
    const g = item('cushion', 1.75, -6.2, { labelY: 1.0, y: 0.9, hit: [0.45, 0.35] });
    box(0.26, 0.62, 0.62, YEL, 0, 0.36, 0, g).rotation.z = -0.3;
    box(0.26, 0.62, 0.62, RED, 0, 0.36, 3.2, g).rotation.z = -0.3;
  }
  {
    const g = item('cat', 2.15, -4.5, { labelY: 0.9, y: 0.9, scale: 1.2, hit: [0.5, 0.22] });
    const body = ball(0.3, '#e8963c', 0, 0.2, 0, g, 2);
    body.scale.set(1, 0.7, 1.45);
    ball(0.2, '#e8963c', 0.08, 0.26, 0.42, g, 2);
    for (const s of [-1, 1]) cone(0.07, 0.14, '#d17f28', 0.08 + s * 0.11, 0.45, 0.42, g, 4);
    ball(0.035, '#f7a8c8', 0.26, 0.24, 0.45, g, 0);
    torus(0.2, 0.05, '#d17f28', 0.12, 0.08, -0.28, g).rotation.x = HP;
    for (const z of [-0.15, 0.1]) box(0.5, 0.02, 0.06, '#d17f28', 0, 0.41, z, g).castShadow = false;
    updaters.push((t) => body.scale.set(1, 0.7 + Math.sin(t * 1.8) * 0.035, 1.45));
  }
  {
    const g = item('coffeeTable', 5.4, -4.6, { labelY: 1.5 });
    box(1.5, 0.1, 2.9, WOOD, 0, 0.7, 0, g);
    box(1.2, 0.06, 2.6, LIGHT, 0, 0.3, 0, g);
    for (const [x, z] of [[-0.62, -1.3], [0.62, -1.3], [-0.62, 1.3], [0.62, 1.3]]) box(0.12, 0.66, 0.12, DARK, x, 0.33, z, g);
  }
  {
    const g = item('cup', 5.3, -5.5, { labelY: 0.6, y: 0.76, scale: 1.3, hit: [0.28, 0.12] });
    cyl(0.13, 0.1, 0.22, WHITE, 0, 0.11, 0, g, 10);
    cyl(0.1, 0.1, 0.02, '#8a5a34', 0, 0.215, 0, g, 10).castShadow = false;
    torus(0.07, 0.022, WHITE, 0, 0.11, 0.15, g).rotation.y = HP;
    cyl(0.2, 0.2, 0.02, BLUE, 0, 0.01, 0, g, 10);
  }
  {
    const g = item('magazine', 5.5, -4.5, { labelY: 0.5, y: 0.76, scale: 1.2, hit: [0.42, 0.05] });
    g.rotation.y = 0.3;
    box(0.55, 0.04, 0.75, '#e94f8a', 0, 0.02, 0, g);
    box(0.4, 0.045, 0.14, WHITE, 0, 0.022, -0.22, g).castShadow = false;
    box(0.3, 0.045, 0.3, YEL, 0, 0.022, 0.12, g).castShadow = false;
  }
  {
    const g = item('remoteControl', 5.25, -3.6, { labelY: 0.5, y: 0.76, scale: 1.4, hit: [0.32, 0.05] });
    g.rotation.y = -0.4;
    box(0.17, 0.06, 0.52, K, 0, 0.03, 0, g);
    box(0.06, 0.07, 0.06, RED, 0, 0.035, -0.19, g).castShadow = false;
    for (let i = 0; i < 3; i++) box(0.1, 0.07, 0.05, S, 0, 0.035, -0.06 + i * 0.1, g).castShadow = false;
  }
  {
    const g = item('tvStand', 4.6, -10.9, { labelY: 1.3 });
    box(4.4, 0.8, 1.1, DARK, 0, 0.45, 0, g);
    for (const x of [-1.45, 0, 1.45]) {
      box(1.3, 0.56, 0.04, WOOD, x, 0.45, 0.57, g).castShadow = false;
      ball(0.05, K, x + 0.45, 0.45, 0.62, g, 0);
    }
  }
  {
    const g = item('television', 4.3, -10.9, { labelY: 2.2, y: 0.85 });
    box(0.9, 0.06, 0.45, K, 0, 0.03, 0, g);
    box(0.16, 0.2, 0.1, K, 0, 0.13, 0, g);
    box(3.0, 1.7, 0.12, K, 0, 1.05, 0, g);
    box(2.8, 1.5, 0.02, '#2f5fa8', 0, 1.05, 0.07, g).castShadow = false;
    const glow = box(1.0, 0.5, 0.02, '#7fc1f0', -0.5, 1.2, 0.08, g);
    glow.castShadow = false;
    box(1.6, 0.4, 0.02, '#4fa64d', 0.3, 0.52, 0.08, g).castShadow = false;
    updaters.push((t) => (glow.position.x = -0.5 + Math.sin(t * 0.7) * 0.4));
  }
  {
    const g = item('vase', 6.45, -10.8, { labelY: 1.2, y: 0.85, scale: 1.15, hit: [0.35, 0.45] });
    cyl(0.1, 0.17, 0.42, '#35b5a4', 0, 0.21, 0, g, 8);
    for (const [x, z, h, c] of [[0, 0, 0.5, RED], [0.12, 0.05, 0.38, YEL], [-0.1, -0.06, 0.42, '#f7a8c8']]) {
      box(0.025, h, 0.025, GREEN, x, 0.42 + h / 2, z, g);
      ball(0.1, c, x, 0.44 + h, z, g, 0);
    }
  }
  {
    const g = item('speaker', 1.6, -11.0, { labelY: 2.4 });
    for (const x of [0, 5.5]) {
      box(0.65, 1.8, 0.65, K, x, 0.9, 0, g);
      rodZ(0.2, 0.04, '#6b737c', x, 1.35, 0.33, g, 10);
      rodZ(0.25, 0.04, '#6b737c', x, 0.7, 0.33, g, 10);
      rodZ(0.09, 0.05, S, x, 0.7, 0.34, g, 8);
    }
  }
  {
    const g = item('picture', 1.9, -11.35, { flat: true, y: 3.3 });
    box(1.6, 1.3, 0.1, DARK, 0, 0, 0, g);
    box(1.35, 1.05, 0.03, '#bfe3f2', 0, 0, 0.05, g).castShadow = false;
    box(1.35, 0.35, 0.035, GREEN, 0, -0.35, 0.052, g).castShadow = false;
    rodZ(0.16, 0.04, YEL, 0.35, 0.22, 0.05, g, 10).castShadow = false;
  }
  {
    const g = item('clock', 8.0, -11.35, { flat: true, y: 3.8, hit: [0.6, 0] });
    rodZ(0.55, 0.1, DARK, 0, 0, 0, g, 14);
    rodZ(0.46, 0.12, WHITE, 0, 0, 0.01, g, 14).castShadow = false;
    const hands = [
      [0.26, 0.06, 0.005],
      [0.38, 0.04, 0.06],
    ].map(([len, w, speed]) => {
      const pv = new THREE.Group();
      pv.position.z = 0.08;
      g.add(pv);
      box(w, len, 0.02, K, 0, len / 2, 0, pv).castShadow = false;
      return { pv, speed };
    });
    updaters.push((t) => hands.forEach(({ pv, speed }, i) => (pv.rotation.z = -1 - i * 2 - t * speed)));
  }
  {
    const g = item('airConditioner', 4.6, -11.15, { flat: true, y: 4.05 });
    box(2.8, 0.7, 0.6, WHITE, 0, 0, 0, g);
    box(2.5, 0.08, 0.06, '#aeb6bd', 0, -0.22, 0.29, g).castShadow = false;
    box(2.5, 0.04, 0.06, '#d5dade', 0, -0.05, 0.29, g).castShadow = false;
    box(0.1, 0.06, 0.04, '#4fd18b', 1.15, 0.2, 0.3, g).castShadow = false;
  }
  {
    const g = item('door', 10.3, -11.38, { flat: true, y: 1.85 });
    box(2.0, 3.8, 0.1, WHITE, 0, 0.05, 0, g);
    box(1.7, 3.6, 0.14, WOOD, 0, -0.05, 0.02, g);
    box(1.2, 1.3, 0.16, LIGHT, 0, 0.8, 0.02, g).castShadow = false;
    box(1.2, 1.3, 0.16, LIGHT, 0, -0.85, 0.02, g).castShadow = false;
    ball(0.09, YEL, -0.65, -0.05, 0.14, g, 0);
  }
  {
    const g = item('lightSwitch', 8.85, -11.36, { flat: true, y: 2.05, hit: [0.4, 0] });
    box(0.34, 0.46, 0.05, WHITE, 0, 0, 0, g);
    box(0.14, 0.24, 0.07, '#d5dade', 0, 0, 0.01, g).castShadow = false;
  }
  {
    const g = item('shoeRack', 10.8, -8.4, { labelY: 1.6 });
    for (const z of [-0.9, 0.9]) box(0.8, 0.95, 0.08, DARK, 0, 0.475, z, g);
    const cols = [RED, WHITE, BLUE, K, YEL, GREEN];
    [0.25, 0.7].forEach((y, lv) => {
      box(0.8, 0.06, 1.8, WOOD, 0, y, 0, g);
      for (let i = 0; i < 3; i++) {
        const c = cols[(i + lv * 3) % cols.length];
        box(0.5, 0.14, 0.2, c, -0.02, y + 0.1, -0.55 + i * 0.55 - 0.12, g);
        box(0.5, 0.14, 0.2, c, -0.02, y + 0.1, -0.55 + i * 0.55 + 0.12, g);
      }
    });
  }
  {
    const g = item('fan', 10.6, -5.4, { labelY: 3.0 });
    cyl(0.42, 0.48, 0.1, WHITE, 0, 0.05, 0, g, 10);
    box(0.1, 1.9, 0.1, S, 0, 1.0, 0, g);
    box(0.3, 0.3, 0.3, WHITE, 0.05, 2.05, 0, g);
    const head = new THREE.Group();
    head.position.set(-0.2, 2.05, 0);
    g.add(head);
    torus(0.58, 0.04, S, 0, 0, 0, head).rotation.y = HP;
    torus(0.58, 0.04, S, -0.16, 0, 0, head).rotation.y = HP;
    const blades = new THREE.Group();
    blades.position.x = -0.08;
    head.add(blades);
    for (let i = 0; i < 3; i++) {
      const b = new THREE.Group();
      b.rotation.x = (i / 3) * Math.PI * 2;
      blades.add(b);
      box(0.04, 0.48, 0.22, BLUE, 0, 0.28, 0, b).castShadow = false;
    }
    rodX(0.1, 0.12, WHITE, -0.08, 0, 0, head, 8);
    updaters.push((t) => {
      blades.rotation.x = t * 9;
      head.rotation.y = Math.sin(t * 0.5) * 0.5;
    });
  }
  {
    const g = item('armchair', 2.0, 4.6, { labelY: 2.2 });
    box(1.6, 0.5, 1.7, '#3fa38f', 0.1, 0.45, 0, g);
    box(0.45, 1.3, 1.7, '#3fa38f', -0.55, 0.95, 0, g);
    for (const s of [-1, 1]) {
      box(1.6, 0.85, 0.38, '#35907d', 0.1, 0.65, s * 0.72, g);
      box(0.12, 0.2, 0.12, DARK, 0.75, 0.1, s * 0.75, g);
    }
    box(1.0, 0.2, 1.0, '#62bfac', 0.3, 0.8, 0, g);
  }
  {
    const g = item('floorLamp', 1.5, 7.3, { labelY: 3.9 });
    cyl(0.36, 0.42, 0.08, K, 0, 0.04, 0, g, 10);
    box(0.08, 3.0, 0.08, K, 0, 1.55, 0, g);
    cyl(0.34, 0.56, 0.62, '#ffe7a0', 0, 3.2, 0, g, 10);
  }
  {
    const g = item('plant', 1.6, 10.2, { labelY: 2.9 });
    cyl(0.52, 0.38, 0.75, '#d77a4a', 0, 0.375, 0, g, 9);
    cyl(0.56, 0.56, 0.1, '#c2683b', 0, 0.75, 0, g, 9);
    const leaves = new THREE.Group();
    leaves.position.y = 0.8;
    g.add(leaves);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2;
      const lean = 0.35 + (i % 3) * 0.18;
      const leaf = ball(0.3, i % 2 ? '#3f9b57' : GREEN, Math.cos(a) * lean * 1.3, 0.7 + (i % 3) * 0.25, Math.sin(a) * lean * 1.3, leaves, 0);
      leaf.scale.set(0.55, 2.2 - (i % 3) * 0.3, 0.55);
      leaf.rotation.set(Math.sin(a) * lean, 0, -Math.cos(a) * lean);
    }
    ball(0.3, '#5fb858', 0, 1.4, 0, leaves, 0).scale.set(0.6, 2.2, 0.6);
    updaters.push((t) => (leaves.rotation.z = Math.sin(t * 1.1) * 0.025));
  }
  {
    const g = item('guitar', 4.8, 7.2, { labelY: 3.0 });
    g.rotation.y = -0.5;
    const body = new THREE.Group();
    body.rotation.z = -0.12;
    g.add(body);
    rodX(0.46, 0.18, '#d9963c', 0, 0.56, 0, body, 12);
    rodX(0.34, 0.18, '#d9963c', 0, 1.08, 0, body, 12);
    rodX(0.13, 0.19, K, 0.01, 0.82, 0, body, 10).castShadow = false;
    box(0.1, 0.06, 0.34, DARK, 0.1, 0.42, 0, body);
    box(0.1, 1.3, 0.13, DARK, 0.02, 1.95, 0, body);
    box(0.1, 0.34, 0.2, DARK, 0.02, 2.7, 0, body);
    box(0.5, 0.06, 0.9, K, -0.2, 0.03, 0, g);
    box(0.06, 1.2, 0.06, K, -0.3, 0.6, 0, g).rotation.z = -0.12;
  }
  {
    const g = item('fishTank', 7.8, 9.2, { labelY: 2.6 });
    box(1.3, 1.0, 2.5, DARK, 0, 0.5, 0, g);
    box(0.04, 0.7, 1.0, WOOD, 0.66, 0.5, -0.6, g).castShadow = false;
    box(0.04, 0.7, 1.0, WOOD, 0.66, 0.5, 0.6, g).castShadow = false;
    box(1.1, 1.0, 2.3, '#8fd3f0', 0, 1.5, 0, g);
    box(1.16, 0.1, 2.36, K, 0, 2.03, 0, g);
    box(1.12, 0.14, 2.32, '#e8d8a8', 0, 1.08, 0, g).castShadow = false;
    for (const z of [-0.8, 0.6]) box(0.02, 0.5, 0.08, GREEN, 0.56, 1.4, z, g).castShadow = false;
    const fish = [RED, YEL, '#f08a3c'].map((c, i) => {
      const f = new THREE.Group();
      g.add(f);
      box(0.03, 0.14, 0.26, c, 0, 0, 0, f).castShadow = false;
      box(0.03, 0.16, 0.08, c, 0, 0, -0.16, f).castShadow = false;
      return { f, i };
    });
    updaters.push((t) => {
      for (const { f, i } of fish) {
        const p = t * (0.5 + i * 0.13) + i * 2.1;
        f.position.set(0.57, 1.45 + i * 0.18 + Math.sin(t * 1.3 + i) * 0.06, Math.sin(p) * 0.85);
        f.scale.z = Math.cos(p) >= 0 ? 1 : -1;
      }
    });
  }
  {
    const g = item('vacuumCleaner', 8.8, 3.0, { labelY: 2.1 });
    g.rotation.y = 0.5;
    rodZ(0.42, 0.9, RED, 0, 0.45, 0, g, 10);
    rodZ(0.3, 0.92, K, 0, 0.45, 0, g, 8);
    box(0.4, 0.2, 0.5, K, 0, 0.9, 0, g);
    const hose = box(0.09, 1.7, 0.09, S, 0.75, 0.85, 0, g);
    hose.rotation.z = 0.45;
    box(0.12, 0.3, 0.12, K, 0.38, 1.6, 0, g).rotation.z = 0.45;
    box(0.3, 0.1, 0.7, K, 1.15, 0.06, 0, g);
  }
  {
    const g = item('trashCan', 10.6, 9.6, { labelY: 1.6 });
    cyl(0.42, 0.33, 0.85, S, 0, 0.425, 0, g, 10);
    cyl(0.45, 0.45, 0.07, '#8d959d', 0, 0.86, 0, g, 10);
    ball(0.16, WHITE, 0.08, 0.9, 0.05, g, 0);
    ball(0.13, WHITE, -0.14, 0.88, -0.1, g, 0);
  }
}
