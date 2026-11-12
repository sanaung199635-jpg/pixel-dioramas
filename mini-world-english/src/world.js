// Procedural mini world: trees, a playground, a meadow and oversized friendly bugs.
// Every clickable thing is a THREE.Group whose userData.word is a vocabulary id.
import * as THREE from 'three';

export const HALF = 12; // island half-size

function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const mats = new Map();
export function mat(color) {
  if (!mats.has(color)) mats.set(color, new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0, flatShading: true }));
  return mats.get(color);
}
export function mesh(geo, color, x, y, z, parent) {
  const m = new THREE.Mesh(geo, mat(color));
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}
export const box = (w, h, d, c, x, y, z, p) => mesh(new THREE.BoxGeometry(w, h, d), c, x, y, z, p);
export const cyl = (rt, rb, h, c, x, y, z, p, seg = 8) => mesh(new THREE.CylinderGeometry(rt, rb, h, seg), c, x, y, z, p);
export const ball = (r, c, x, y, z, p, det = 1) => mesh(new THREE.IcosahedronGeometry(r, det), c, x, y, z, p);
export const cone = (r, h, c, x, y, z, p, seg = 7) => mesh(new THREE.ConeGeometry(r, h, seg), c, x, y, z, p);
export const dome = (r, c, x, y, z, p) => mesh(new THREE.SphereGeometry(r, 9, 5, 0, Math.PI * 2, 0, Math.PI / 2), c, x, y, z, p);

const hitMat = new THREE.MeshBasicMaterial();

export const GYM_X = 30; // the gym island sits beside the park
export const HOME_Z = 30; // the home island sits on the park's other side

export function buildWorld(root, extraBuilders = []) {
  const items = [];
  const updaters = [];
  const primary = {};
  const R = rng(7);

  /** opts: labelY (tag height), flat (no bounce, tag at click point), hit [radius, y] / hitBox [w, h, d] invisible click helpers */
  function item(word, x, z, opts = {}) {
    const g = new THREE.Group();
    g.position.set(x, opts.y || 0, z);
    g.userData = { word, labelY: opts.labelY ?? 1.2, flat: !!opts.flat, baseScale: opts.scale || 1, scene: opts.scene || 'park' };
    g.scale.setScalar(g.userData.baseScale);
    if (opts.hit) {
      const h = new THREE.Mesh(new THREE.SphereGeometry(opts.hit[0], 8, 6), hitMat);
      h.position.y = opts.hit[1];
      h.visible = false; // raycasting ignores .visible, rendering does not
      g.add(h);
    }
    if (opts.hitBox) {
      // open frames (racks, machines) are easy to click through, so give them a solid invisible volume
      const [w, hh, d] = opts.hitBox;
      const h = new THREE.Mesh(new THREE.BoxGeometry(w, hh, d), hitMat);
      h.position.y = hh / 2;
      h.visible = false;
      g.add(h);
    }
    (opts.parent || root).add(g);
    items.push(g);
    if (!primary[word]) primary[word] = g;
    return g;
  }

  // ------------------------------------------------------------------ ground
  const soil = new THREE.Group();
  root.add(soil);
  box(HALF * 2, 1.5, HALF * 2, '#9a6b42', 0, -1.15, 0, soil);
  box(HALF * 2, 0.5, HALF * 2, '#7a5232', 0, -2.15, 0, soil);

  const lawn = item('grass', 0, 0, { flat: true });
  box(HALF * 2, 0.4, HALF * 2, '#86c75a', 0, -0.2, 0, lawn);
  for (let i = 0; i < 16; i++) {
    const w = 1.5 + R() * 2.5;
    const d = 1.5 + R() * 2.5;
    box(w, 0.02, d, R() < 0.5 ? '#93d266' : '#7bbd52', (R() * 2 - 1) * (HALF - w / 2), 0.01, (R() * 2 - 1) * (HALF - d / 2), lawn).castShadow = false;
  }

  // ------------------------------------------------------------------ playground
  const PAD = { x0: 0.8, x1: 11.4, z0: -11.4, z1: 0.2 };
  const pad = item('playground', (PAD.x0 + PAD.x1) / 2, (PAD.z0 + PAD.z1) / 2, { flat: true });
  box(PAD.x1 - PAD.x0, 0.1, PAD.z1 - PAD.z0, '#e9b47c', 0, 0.05, 0, pad);
  box(PAD.x1 - PAD.x0 - 0.6, 0.02, PAD.z1 - PAD.z0 - 0.6, '#f1c592', 0, 0.11, 0, pad).castShadow = false;
  const G = 0.12; // playground surface height

  // slide
  {
    const g = item('slide', 3.2, -8.8, { labelY: 4.6, y: G });
    for (const [x, z] of [[-0.6, -0.6], [0.6, -0.6], [-0.6, 0.6], [0.6, 0.6]]) box(0.16, 3.5, 0.16, '#3d7fd9', x, 1.75, z, g);
    box(1.5, 0.16, 1.5, '#f4f1e8', 0, 2.2, 0, g);
    const roof = cone(1.25, 0.9, '#ffcc3d', 0, 3.95, 0, g, 4);
    roof.rotation.y = Math.PI / 4;
    const chute = new THREE.Group();
    chute.position.set(2.5, 1.22, 0);
    chute.rotation.z = -0.507;
    g.add(chute);
    box(4.15, 0.12, 1.1, '#f0524a', 0, 0, 0, chute);
    box(4.15, 0.34, 0.1, '#ffcc3d', 0, 0.16, 0.55, chute);
    box(4.15, 0.34, 0.1, '#ffcc3d', 0, 0.16, -0.55, chute);
    box(0.1, 2.3, 0.1, '#3d7fd9', -1.0, 1.1, 0.42, g).rotation.z = -0.14;
    box(0.1, 2.3, 0.1, '#3d7fd9', -1.0, 1.1, -0.42, g).rotation.z = -0.14;
    for (let i = 0; i < 5; i++) box(0.1, 0.08, 0.84, '#f4f1e8', -1.15 + i * 0.06, 0.35 + i * 0.4, 0, g);
  }

  // swing
  {
    const g = item('swing', 8.2, -9.2, { labelY: 3.9, y: G, hit: [1.5, 1.6] });
    box(4.0, 0.16, 0.16, '#f0524a', 0, 3.05, 0, g);
    for (const x of [-1.9, 1.9]) {
      box(0.15, 3.25, 0.15, '#f0524a', x, 1.52, 0.46, g).rotation.x = -0.29;
      box(0.15, 3.25, 0.15, '#f0524a', x, 1.52, -0.46, g).rotation.x = 0.29;
    }
    [-0.85, 0.85].forEach((x, i) => {
      const pv = new THREE.Group();
      pv.position.set(x, 3.0, 0);
      g.add(pv);
      box(0.06, 2.2, 0.06, '#5b6470', -0.34, -1.1, 0, pv);
      box(0.06, 2.2, 0.06, '#5b6470', 0.34, -1.1, 0, pv);
      box(0.86, 0.1, 0.42, i ? '#3d7fd9' : '#ffcc3d', 0, -2.2, 0, pv);
      updaters.push((t) => (pv.rotation.x = Math.sin(t * 2.1 + i * 1.7) * 0.42));
    });
  }

  // seesaw
  {
    const g = item('seesaw', 5.6, -3.6, { labelY: 2.0, y: G });
    g.rotation.y = 0.5;
    const base = cone(0.5, 0.7, '#5b6470', 0, 0.35, 0, g, 4);
    base.rotation.y = Math.PI / 4;
    const pv = new THREE.Group();
    pv.position.y = 0.72;
    g.add(pv);
    box(4.4, 0.12, 0.6, '#4aa8e0', 0, 0, 0, pv);
    for (const s of [-1, 1]) {
      box(0.7, 0.14, 0.64, s < 0 ? '#f0524a' : '#ffcc3d', s * 1.85, 0.03, 0, pv);
      box(0.08, 0.45, 0.08, '#5b6470', s * 1.35, 0.28, 0, pv);
      box(0.08, 0.08, 0.5, '#5b6470', s * 1.35, 0.5, 0, pv);
    }
    updaters.push((t) => (pv.rotation.z = Math.sin(t * 1.5) * 0.24));
  }

  // sandbox
  {
    const g = item('sandbox', 9.2, -2.6, { labelY: 1.6, y: G });
    box(3.0, 0.22, 3.0, '#f6e2a4', 0, 0.11, 0, g);
    for (const s of [-1, 1]) {
      box(3.5, 0.34, 0.26, '#c98b4f', 0, 0.17, s * 1.62, g);
      box(0.26, 0.34, 3.5, '#c98b4f', s * 1.62, 0.17, 0, g);
    }
    box(0.7, 0.5, 0.7, '#ecd08a', -0.5, 0.45, -0.4, g);
    cone(0.42, 0.5, '#ecd08a', -0.5, 0.95, -0.4, g, 4).rotation.y = Math.PI / 4;
    cyl(0.26, 0.2, 0.4, '#f0524a', 0.7, 0.42, 0.5, g);
    box(0.08, 0.06, 0.6, '#3d7fd9', 0.1, 0.26, 0.85, g).rotation.y = 0.6;
  }

  // ball
  {
    const g = item('ball', 6.8, -6.4, { labelY: 1.4, y: G, hit: [0.6, 0.48] });
    const b = new THREE.Group();
    g.add(b);
    ball(0.48, '#f0524a', 0, 0, 0, b, 2);
    cyl(0.49, 0.49, 0.14, '#fdfbf4', 0, 0, 0, b, 12);
    g.userData.onSelect = (now) => (g.userData.bounceAt = now);
    updaters.push((t) => {
      const k = t - (g.userData.bounceAt ?? -99);
      b.position.y = 0.48 + (k < 2.4 ? Math.abs(Math.sin(k * 5)) * 1.6 * Math.exp(-k * 1.4) : 0);
      b.rotation.z = t * 0.4;
    });
  }

  // bench
  {
    const g = item('bench', 1.7, -4.6, { labelY: 2.0, y: G });
    box(0.8, 0.1, 2.4, '#c98b4f', 0, 0.6, 0, g);
    box(0.1, 0.3, 2.4, '#c98b4f', -0.42, 1.0, 0, g);
    box(0.1, 0.3, 2.4, '#c98b4f', -0.42, 1.4, 0, g);
    for (const z of [-0.95, 0.95]) {
      box(0.1, 0.6, 0.1, '#5b6470', 0.3, 0.3, z, g);
      box(0.1, 1.6, 0.1, '#5b6470', -0.42, 0.8, z, g);
    }
  }

  // ------------------------------------------------------------------ trees
  function sway(group, amp = 0.025, speed = 1) {
    const ph = R() * 6;
    updaters.push((t) => {
      group.rotation.z = Math.sin(t * speed + ph) * amp;
      group.rotation.x = Math.cos(t * speed * 0.8 + ph) * amp * 0.7;
    });
  }
  function oak(x, z, s = 1) {
    const g = item('tree', x, z, { labelY: 7.0, scale: s });
    cyl(0.42, 0.62, 2.8, '#8a5a34', 0, 1.4, 0, g, 7);
    box(0.2, 1.0, 0.2, '#8a5a34', 0.55, 2.3, 0.1, g).rotation.z = -0.8;
    const f = new THREE.Group();
    f.position.y = 2.6;
    g.add(f);
    ball(2.1, '#4fa64d', 0, 1.5, 0, f);
    ball(1.45, '#5fb858', 1.25, 0.9, 0.7, f);
    ball(1.5, '#449645', -1.2, 1.0, -0.5, f);
    ball(1.3, '#6cc462', 0.2, 2.8, -0.1, f);
    ball(1.1, '#5fb858', -0.5, 0.7, 1.2, f);
    sway(f);
  }
  function appleTree(x, z) {
    const g = item('appleTree', x, z, { labelY: 5.6 });
    cyl(0.32, 0.46, 2.0, '#93623a', 0, 1.0, 0, g, 7);
    const f = new THREE.Group();
    f.position.y = 2.0;
    g.add(f);
    ball(1.75, '#62b54c', 0, 1.3, 0, f);
    ball(1.2, '#73c659', 0.95, 0.7, 0.75, f);
    ball(1.15, '#58a843', -0.9, 0.8, 0.5, f);
    const dirs = [[0.6, 0.5, 0.6], [0.1, 0.2, 1], [1, 0.2, 0.1], [-0.4, 0.6, 0.7], [0.7, -0.2, 0.7], [0.2, 0.9, 0.4], [1, 0.6, -0.3], [-0.9, 0.2, 0.4], [0.5, 0.1, -0.9], [-0.3, -0.1, 1]];
    for (const d of dirs) {
      const v = new THREE.Vector3(...d).normalize().multiplyScalar(1.78);
      ball(0.2, '#e8372c', v.x, 1.3 + v.y, v.z, f);
    }
    sway(f);
  }
  function pine(x, z, s = 1) {
    const g = item('pineTree', x, z, { labelY: 6.2, scale: s });
    cyl(0.24, 0.32, 1.2, '#7a4f2e', 0, 0.6, 0, g, 6);
    const f = new THREE.Group();
    f.position.y = 1.0;
    g.add(f);
    cone(1.6, 2.0, '#2f7d52', 0, 1.0, 0, f);
    cone(1.25, 1.8, '#37895a', 0, 2.2, 0, f);
    cone(0.88, 1.6, '#409664', 0, 3.3, 0, f);
    sway(f, 0.018, 1.3);
  }
  function bush(x, z, s = 1) {
    const g = item('bush', x, z, { labelY: 2.0, scale: s });
    ball(0.85, '#3f9b57', 0, 0.6, 0, g);
    ball(0.65, '#4dab63', 0.75, 0.45, 0.2, g);
    ball(0.6, '#368a4c', -0.65, 0.42, 0.3, g);
    ball(0.5, '#4dab63', 0.1, 0.4, 0.7, g);
    for (const [bx, by, bz] of [[0.3, 1.0, 0.6], [0.95, 0.7, 0.55], [-0.55, 0.7, 0.7], [-0.1, 1.3, 0.35]]) ball(0.1, '#e94f8a', bx, by, bz, g, 0);
  }
  oak(-8.2, -8.4);
  oak(-10.2, 3.2, 0.72);
  appleTree(-3.0, -9.6);
  pine(-10.3, -3.0);
  pine(-5.6, -10.6, 0.85);
  pine(-1.2, -5.6, 0.7);
  bush(-5.6, -5.2);
  bush(-10.4, 10.2, 0.85);

  // stump (the ants march around it)
  const STUMP = { x: -4.6, z: 0.6 };
  {
    const g = item('stump', STUMP.x, STUMP.z, { labelY: 1.7 });
    cyl(0.68, 0.8, 0.75, '#8a5a34', 0, 0.375, 0, g, 9);
    cyl(0.58, 0.58, 0.04, '#e3c08d', 0, 0.76, 0, g, 9);
    cyl(0.3, 0.3, 0.05, '#cfa56f', 0, 0.77, 0, g, 9);
    box(0.5, 0.22, 0.3, '#8a5a34', 0.75, 0.11, 0.2, g).rotation.y = -0.3;
    box(0.45, 0.2, 0.28, '#8a5a34', -0.6, 0.1, -0.5, g).rotation.y = 0.9;
  }

  // fallen apples
  for (const [x, z, s] of [[-1.6, -7.4, 1], [-2.5, -7.0, 0.85], [-0.9, -8.2, 0.9]]) {
    const g = item('apple', x, z, { labelY: 1.2, scale: s, hit: [0.5, 0.35] });
    ball(0.34, '#e8372c', 0, 0.34, 0, g, 2);
    box(0.05, 0.2, 0.05, '#6b4226', 0, 0.74, 0, g);
    box(0.22, 0.03, 0.12, '#4fa64d', 0.12, 0.8, 0, g).rotation.z = 0.4;
  }

  // ------------------------------------------------------------------ meadow
  const POND = { x: 8.0, z: 6.6, r: 2.3 };
  {
    const g = item('pond', POND.x, POND.z, { flat: true });
    cyl(POND.r + 0.3, POND.r + 0.3, 0.06, '#d8c28e', 0, 0.03, 0, g, 12).castShadow = false;
    cyl(POND.r, POND.r, 0.06, '#6cc4ea', 0, 0.05, 0, g, 12).castShadow = false;
    cyl(POND.r * 0.55, POND.r * 0.55, 0.02, '#8bd6f3', 0.3, 0.085, -0.2, g, 10).castShadow = false;
    for (const [x, z, fl] of [[-0.9, 0.8, 1], [1.0, -0.9, 0], [0.4, 1.3, 0]]) {
      cyl(0.38, 0.38, 0.04, '#3f9b57', x, 0.11, z, g, 7);
      if (fl) ball(0.16, '#f7a8c8', x, 0.22, z, g, 0);
    }
    for (const [x, z, h] of [[-1.9, -1.2, 1.3], [-2.1, -0.8, 1.0], [-1.7, -1.6, 1.1]]) {
      box(0.06, h, 0.06, '#4d9a47', x, h / 2, z, g);
      box(0.13, 0.36, 0.13, '#7a4f2e', x, h, z, g);
    }
  }

  const FLOWERS = { x: -7.6, z: 6.4 };
  const petalColors = ['#ff8fb3', '#ffffff', '#b78cf0', '#ffb347', '#ff6b6b', '#ffe066'];
  function flower(x, z, color, s = 1) {
    const g = item('flower', x, z, { labelY: 1.5, scale: s, hit: [0.42, 0.7] });
    cyl(0.04, 0.05, 0.8, '#4d9a47', 0, 0.4, 0, g, 5);
    box(0.3, 0.03, 0.14, '#5fb858', 0.16, 0.3, 0, g).rotation.z = 0.5;
    const head = new THREE.Group();
    head.position.y = 0.84;
    head.rotation.set(0.35, 0, -0.25);
    g.add(head);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      ball(0.17, color, Math.cos(a) * 0.23, 0, Math.sin(a) * 0.23, head, 0);
    }
    ball(0.15, color === '#ffe066' ? '#f08a3c' : '#ffd23f', 0, 0.06, 0, head, 0);
    const ph = R() * 6;
    updaters.push((t) => (g.rotation.z = Math.sin(t * 1.6 + ph) * 0.06));
  }
  const flowerSpots = [[0, 0], [1.1, 0.7], [-0.9, 1.0], [0.4, -1.2], [-1.3, -0.5], [1.6, -0.6], [-0.2, 1.9], [1.0, 2.0], [-1.9, 1.8]];
  flowerSpots.forEach(([dx, dz], i) => flower(FLOWERS.x + dx, FLOWERS.z + dz, petalColors[i % petalColors.length], 0.9 + R() * 0.35));
  [[-2.4, 3.2], [1.4, 3.6], [11.0, 2.2], [-6.2, -1.8], [3.6, 10.6], [10.6, 10.4]].forEach(([x, z], i) => flower(x, z, petalColors[(i + 2) % petalColors.length], 0.95));

  // mushrooms
  for (const [x, z] of [[-10.2, 0.2], [-6.8, -7.0]]) {
    const g = item('mushroom', x, z, { labelY: 1.4, hit: [0.75, 0.4] });
    for (const [dx, dz, s] of [[0, 0, 1], [0.6, 0.3, 0.65], [-0.35, 0.5, 0.5]]) {
      const m = new THREE.Group();
      m.position.set(dx, 0, dz);
      m.scale.setScalar(s);
      g.add(m);
      cyl(0.14, 0.19, 0.45, '#f6ecd6', 0, 0.22, 0, m, 7);
      dome(0.46, '#e8372c', 0, 0.4, 0, m);
      for (const [a, e] of [[0.3, 0.5], [2.2, 0.7], [4.1, 0.45], [1.2, 1.2]]) {
        ball(0.07, '#ffffff', Math.cos(a) * Math.cos(e) * 0.44, 0.4 + Math.sin(e) * 0.44, Math.sin(a) * Math.cos(e) * 0.44, m, 0);
      }
    }
  }

  // rock (the ladybug lives on top)
  const ROCK = { x: 2.6, z: 8.2 };
  {
    const g = item('rock', ROCK.x, ROCK.z, { labelY: 1.7 });
    const r1 = ball(1.0, '#9aa1a8', 0, 0.28, 0, g);
    r1.scale.set(1.35, 0.62, 1.05);
    r1.rotation.y = 0.4;
    const r2 = ball(0.5, '#868e96', 1.25, 0.14, 0.55, g, 0);
    r2.scale.set(1.2, 0.7, 1);
    const g2 = item('rock', -8.6, -3.6, { labelY: 1.3 });
    ball(0.6, '#9aa1a8', 0, 0.2, 0, g2, 0).scale.set(1.3, 0.7, 1);
  }

  // grass tufts
  const blade = new THREE.ConeGeometry(0.08, 0.6, 4);
  const clear = (x, z) =>
    !(x > PAD.x0 - 0.5 && x < PAD.x1 + 0.5 && z > PAD.z0 - 0.5 && z < PAD.z1 + 0.5) && Math.hypot(x - POND.x, z - POND.z) > POND.r + 0.8;
  for (let i = 0; i < 90; i++) {
    const x = (R() * 2 - 1) * (HALF - 0.6);
    const z = (R() * 2 - 1) * (HALF - 0.6);
    if (!clear(x, z)) continue;
    const g = item('grass', x, z, { labelY: 1.0, scale: 0.8 + R() * 0.6, hit: [0.35, 0.3] });
    const c = R() < 0.5 ? '#5fae45' : '#6fbd4e';
    for (const [dx, lean] of [[-0.12, 0.35], [0, 0], [0.12, -0.35]]) {
      const b = mesh(blade, c, dx, 0.3, (R() - 0.5) * 0.1, g);
      b.rotation.z = lean;
      b.castShadow = false;
    }
    g.rotation.y = R() * 3;
  }

  // ------------------------------------------------------------------ bugs (modelled facing +x)
  const face = (g, vx, vz) => (g.rotation.y = Math.atan2(-vz, vx));

  // butterfly
  {
    const g = item('butterfly', -3.5, 5, { labelY: 1.1, scale: 1.5, hit: [0.6, 0] });
    cyl(0.06, 0.05, 0.56, '#3a2a25', 0, 0, 0, g, 5).rotation.z = Math.PI / 2;
    ball(0.09, '#3a2a25', 0.32, 0.02, 0, g, 0);
    const wings = [1, -1].map((s) => {
      const w = new THREE.Group();
      g.add(w);
      box(0.46, 0.03, 0.52, '#ff9f1c', 0.1, 0, s * 0.3, w);
      box(0.3, 0.035, 0.3, '#ffd23f', 0.1, 0, s * 0.32, w);
      box(0.36, 0.03, 0.36, '#f0524a', -0.24, 0, s * 0.22, w);
      return { w, s };
    });
    updaters.push((t) => {
      const a = 0.15 + Math.abs(Math.sin(t * 9)) * 0.95;
      for (const { w, s } of wings) w.rotation.x = -s * a;
      const x = -3.2 + Math.sin(t * 0.42) * 5.2;
      const z = 5.4 + Math.sin(t * 0.67 + 1) * 3.2;
      face(g, Math.cos(t * 0.42) * 5.2 * 0.42, Math.cos(t * 0.67 + 1) * 3.2 * 0.67);
      g.position.set(x, 1.9 + Math.sin(t * 1.9) * 0.45, z);
    });
  }

  // bee
  {
    const g = item('bee', FLOWERS.x, FLOWERS.z, { labelY: 0.9, scale: 1.25, hit: [0.55, 0] });
    ball(0.25, '#ffcc3d', 0, 0, 0, g, 2).scale.set(1.45, 1, 1);
    for (const x of [-0.12, 0.1]) cyl(0.245, 0.245, 0.09, '#2b2422', x, 0, 0, g, 10).rotation.z = Math.PI / 2;
    ball(0.17, '#2b2422', 0.38, 0.02, 0, g);
    cone(0.07, 0.2, '#2b2422', -0.42, 0, 0, g, 5).rotation.z = Math.PI / 2;
    const wings = [1, -1].map((s) => {
      const w = new THREE.Group();
      w.position.set(0, 0.2, 0);
      g.add(w);
      box(0.24, 0.03, 0.4, '#f3fbff', 0, 0, s * 0.24, w);
      return { w, s };
    });
    updaters.push((t) => {
      for (const { w, s } of wings) w.rotation.x = -s * (0.3 + Math.abs(Math.sin(t * 30)) * 0.6);
      const a = t * 0.9;
      const r = 1.7 + Math.sin(t * 0.5) * 0.6;
      g.position.set(FLOWERS.x + Math.cos(a) * r, 1.75 + Math.sin(t * 2.3) * 0.25, FLOWERS.z + 0.5 + Math.sin(a) * r);
      face(g, -Math.sin(a), Math.cos(a));
    });
  }

  // ladybug
  {
    const g = item('ladybug', ROCK.x, ROCK.z, { labelY: 0.9, scale: 1.15, hit: [0.5, 0.15] });
    dome(0.36, '#e8372c', 0, 0, 0, g).scale.set(1.15, 0.85, 1);
    ball(0.16, '#2b2422', 0.38, 0.08, 0, g);
    box(0.7, 0.02, 0.03, '#2b2422', -0.02, 0.305, 0, g);
    for (const [x, z] of [[0.1, 0.18], [0.1, -0.18], [-0.15, 0.2], [-0.15, -0.2], [-0.02, 0]]) {
      const y = Math.sqrt(Math.max(0.01, 1 - (x / 0.41) ** 2 - (z / 0.36) ** 2)) * 0.3;
      ball(0.06, '#2b2422', x, y, z, g, 0);
    }
    updaters.push((t) => {
      const a = t * 0.35;
      g.position.set(ROCK.x + Math.cos(a) * 0.38, 0.86 - 0.05 * Math.abs(Math.cos(a)), ROCK.z + Math.sin(a) * 0.3);
      face(g, -Math.sin(a), Math.cos(a));
    });
  }

  // ants marching around the stump
  for (let i = 0; i < 5; i++) {
    const g = item('ant', STUMP.x, STUMP.z, { labelY: 0.7, scale: 1.5, hit: [0.36, 0.1] });
    ball(0.1, '#3b2a26', 0.19, 0.13, 0, g, 0);
    ball(0.075, '#4a342e', 0, 0.12, 0, g, 0);
    ball(0.12, '#3b2a26', -0.2, 0.14, 0, g, 0);
    for (const x of [-0.07, 0, 0.07]) box(0.025, 0.025, 0.42, '#3b2a26', x, 0.07, 0, g);
    box(0.14, 0.02, 0.02, '#3b2a26', 0.3, 0.2, 0.05, g).rotation.z = 0.5;
    box(0.14, 0.02, 0.02, '#3b2a26', 0.3, 0.2, -0.05, g).rotation.z = 0.5;
    updaters.push((t) => {
      const a = -t * 0.45 + i * 0.52;
      const r = 1.75 + Math.sin(a * 3) * 0.08;
      g.position.set(STUMP.x + Math.cos(a) * r, 0, STUMP.z + Math.sin(a) * r);
      face(g, Math.sin(a), -Math.cos(a));
    });
  }

  // snail
  {
    const C = { x: 4.4, z: 3.6 };
    const g = item('snail', C.x, C.z, { labelY: 1.5, scale: 1.2, hit: [0.6, 0.35] });
    ball(0.2, '#e8c79a', 0.05, 0.14, 0, g, 2).scale.set(2.6, 0.65, 0.9);
    ball(0.15, '#e8c79a', 0.48, 0.24, 0, g);
    for (const z of [-0.08, 0.08]) {
      box(0.03, 0.26, 0.03, '#e8c79a', 0.55, 0.44, z, g);
      ball(0.045, '#2b2422', 0.55, 0.59, z, g, 0);
    }
    cyl(0.36, 0.36, 0.26, '#b0703c', -0.1, 0.5, 0, g, 10).rotation.x = Math.PI / 2;
    cyl(0.23, 0.23, 0.32, '#d49a5b', -0.1, 0.5, 0, g, 9).rotation.x = Math.PI / 2;
    cyl(0.1, 0.1, 0.38, '#b0703c', -0.1, 0.5, 0, g, 7).rotation.x = Math.PI / 2;
    updaters.push((t) => {
      const a = t * 0.07;
      g.position.set(C.x + Math.cos(a) * 1.3, 0, C.z + Math.sin(a) * 1.3);
      face(g, -Math.sin(a), Math.cos(a));
    });
  }

  // caterpillar
  {
    const C = { x: -1.4, z: 9.4 };
    const g = item('caterpillar', C.x, C.z, { labelY: 1.1, scale: 1.15, hit: [0.75, 0.2] });
    const segs = [];
    for (let i = 0; i < 6; i++) segs.push(ball(0.17, i % 2 ? '#8fd14f' : '#6fbf3a', 0.5 - i * 0.26, 0.17, 0, g));
    const head = ball(0.21, '#a5de5f', 0.78, 0.22, 0, g);
    ball(0.045, '#2b2422', 0.94, 0.3, 0.09, g, 0);
    ball(0.045, '#2b2422', 0.94, 0.3, -0.09, g, 0);
    box(0.02, 0.18, 0.02, '#3b2a26', 0.82, 0.48, 0.08, g);
    box(0.02, 0.18, 0.02, '#3b2a26', 0.82, 0.48, -0.08, g);
    updaters.push((t) => {
      segs.forEach((s, i) => (s.position.y = 0.17 + Math.max(0, Math.sin(t * 3.2 - i * 0.9)) * 0.14));
      head.position.y = 0.22 + Math.max(0, Math.sin(t * 3.2 + 0.9)) * 0.06;
      const a = t * 0.16;
      g.position.set(C.x + Math.cos(a) * 1.1, 0, C.z + Math.sin(a) * 1.1);
      face(g, -Math.sin(a), Math.cos(a));
    });
  }

  // dragonfly
  {
    const g = item('dragonfly', POND.x, POND.z, { labelY: 0.9, scale: 1.3, hit: [0.6, 0] });
    cyl(0.05, 0.03, 0.9, '#1fa7b8', -0.3, 0, 0, g, 5).rotation.z = Math.PI / 2;
    ball(0.11, '#27c0d1', 0.18, 0, 0, g).scale.set(1.5, 1, 1);
    ball(0.11, '#126e7a', 0.4, 0.02, 0, g);
    const wings = [];
    for (const x of [0.2, 0.0])
      for (const s of [1, -1]) {
        const w = new THREE.Group();
        w.position.set(x, 0.08, 0);
        g.add(w);
        box(0.2, 0.02, 0.72, '#e8fbff', 0, 0, s * 0.4, w);
        wings.push({ w, s, x });
      }
    updaters.push((t) => {
      for (const { w, s, x } of wings) w.rotation.x = -s * Math.sin(t * 34 + x * 9) * 0.35;
      const x = POND.x + Math.sin(t * 0.8) * 2.0;
      const z = POND.z + Math.sin(t * 1.15 + 2) * 1.6;
      g.position.set(x, 1.7 + Math.sin(t * 2.7) * 0.18, z);
      face(g, Math.cos(t * 0.8) * 1.6, Math.cos(t * 1.15 + 2) * 1.84);
    });
  }

  for (const build of extraBuilders) build({ root, item, updaters, R });

  const pickList = [];
  for (const g of items) g.traverse((o) => o.isMesh && pickList.push(o));
  for (const u of updaters) u(0);
  return { items, pickList, updaters, primary };
}
