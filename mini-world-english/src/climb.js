// Climbing gym island: a tall roped wall at the back, a bouldering wall on the left,
// a training corner and tables of oversized gear at the front.
import * as THREE from 'three';
import { HALF, SPORT_X, box, cyl, ball, cone } from './world.js';
import { torus, rodX, rodZ } from './gym.js';
import { person } from './market.js';

const PANEL = '#e3e8ec';
const WOODP = '#d9ac7a';
const DARK = '#8a5a34';
const STEEL = '#c9d0d6';
const K = '#23272c';
const RED = '#e5483f';
const BLUE = '#3d6fd9';
const YEL = '#f2c230';
const GREEN = '#3fa35a';
const PURPLE = '#8a5bd1';
const ORANGE = '#f08a3c';
const PINK = '#e94f8a';
const HP = Math.PI / 2;
const HOLD_COLORS = [RED, BLUE, GREEN, PURPLE, ORANGE, PINK, '#35b5a4', K];

export function buildClimb({ root, item: baseItem, updaters, R }) {
  const gym = new THREE.Group();
  gym.position.set(SPORT_X, 0, 0);
  gym.userData.island = 'climb';
  root.add(gym);
  const item = (word, x, z, opts = {}) => baseItem(word, x, z, { ...opts, parent: gym, scene: 'climb' });

  // ------------------------------------------------------------------ shell
  const slab = new THREE.Group();
  gym.add(slab);
  box(HALF * 2, 1.5, HALF * 2, '#aab1b8', 0, -1.15, 0, slab);
  box(HALF * 2, 0.5, HALF * 2, '#878f98', 0, -2.15, 0, slab);
  const floor = item('floor', 0, 0, { flat: true });
  box(HALF * 2, 0.4, HALF * 2, '#7d93a6', 0, -0.2, 0, floor);
  for (let i = -5; i <= 5; i++) box(0.05, 0.02, HALF * 2 - 0.8, '#6f8598', i * 2 + 1, 0.005, 0.4, floor).castShadow = false;

  // back wall = the roped climbing wall (front face at z = -11.6)
  const WZ = -11.6;
  const wall = item('c_wall', 0, WZ, { flat: true, y: 3.5 });
  box(HALF * 2, 7, 0.5, PANEL, 0, 0, -0.25, wall);
  for (let x = -9; x <= 9; x += 3) box(0.05, 7, 0.02, '#cdd4da', x, 0, 0.01, wall).castShadow = false;
  box(HALF * 2, 0.25, 0.6, '#aeb6bd', 0, 3.6, -0.22, wall);

  // slab: leans away from you (bottom sticks out)
  {
    const g = item('c_slab', -9.0, WZ, { flat: true, y: 3.5 });
    const pv = new THREE.Group();
    pv.position.set(0, 3.5, 0.05);
    pv.rotation.x = -0.13;
    g.add(pv);
    box(5, 7.05, 0.25, '#f1e7d3', 0, -3.5, 0.1, pv);
    for (const [x, y, c] of [[-1.6, -6, GREEN], [0.8, -5.2, GREEN], [-0.6, -4.1, GREEN], [1.4, -3, GREEN], [-1.2, -2, GREEN], [0.4, -1, GREEN]]) ball(0.2, c, x, y, 0.28, pv, 0).scale.set(1, 0.8, 0.6);
  }
  // overhang: leans toward you (top sticks out)
  {
    const g = item('c_overhang', 0.5, WZ, { flat: true, y: 3.5 });
    const pv = new THREE.Group();
    pv.position.set(0, -3.5, 0.05);
    pv.rotation.x = 0.2;
    g.add(pv);
    box(6, 7.1, 0.3, '#cfd8e0', 0, 3.55, 0.1, pv);
    for (const s of [-1, 1]) box(0.2, 7.1, 0.7, '#b9c3cc', s * 2.95, 3.55, -0.2, pv);
    for (const [x, y] of [[-2, 0.9], [-0.6, 1.8], [1.2, 2.5], [0, 3.4], [-1.6, 4.2], [0.8, 5], [2, 5.8], [-0.4, 6.4]]) ball(0.24, PURPLE, x, y, 0.32, pv, 0).scale.set(1, 0.8, 0.6);
  }

  // generic holds sprinkled over the vertical sections
  {
    const g = item('c_hold', 0, WZ, { flat: true, y: 3.5 });
    for (let i = 0; i < 46; i++) {
      const x = R() < 0.5 ? -6.3 + R() * 3.4 : 3.8 + R() * 7.8;
      if (x > 4.4 && x < 6.8) continue; // keep the yellow route clean
      const m = ball(0.16 + R() * 0.1, HOLD_COLORS[Math.floor(R() * HOLD_COLORS.length)], x, -3 + R() * 6.2, 0.08, g, 0);
      m.scale.set(1, 0.8, 0.6);
    }
  }
  // one colour = one route
  {
    const g = item('c_route', 5.6, WZ, { flat: true, y: 3.5 });
    box(1.9, 6.6, 0.3, YEL, 0, 0, 0.12, g).visible = false; // whole column is clickable, not just the holds
    [[-0.5, -2.9], [0.4, -2.2], [-0.3, -1.4], [0.6, -0.6], [-0.4, 0.2], [0.3, 1.0], [-0.6, 1.8], [0.4, 2.5], [0, 3.1]].forEach(([x, y]) => {
      ball(0.24, YEL, x, y, 0.1, g, 0).scale.set(1, 0.8, 0.6);
      box(0.3, 0.06, 0.02, YEL, x, y - 0.26, 0.02, g).castShadow = false;
    });
  }
  {
    const g = item('c_grade', 5.0, WZ + 0.06, { labelY: 0.5, y: 0.75, hit: [0.42, 0] });
    box(0.6, 0.42, 0.05, '#fdfbf4', 0, 0, 0, g);
    box(0.6, 0.12, 0.06, YEL, 0, 0.15, 0, g).castShadow = false;
    box(0.1, 0.16, 0.06, K, -0.12, -0.06, 0, g).castShadow = false;
    box(0.1, 0.16, 0.06, K, 0.1, -0.06, 0, g).castShadow = false;
  }

  // ------------------------------------------------------------------ rope system
  // gear tables first so the big table models are the ones the word list jumps to
  function table(x, z, len) {
    const t = new THREE.Group();
    t.position.set(x, 0, z);
    gym.add(t);
    box(len, 0.1, 1.5, WOODP, 0, 0.8, 0, t);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.12, 0.76, 0.12, DARK, sx * (len / 2 - 0.15), 0.38, sz * 0.6, t);
  }
  table(6.6, 5.6, 7.6);
  table(6.6, 9.4, 7.6);
  const TY = 0.86;

  {
    const g = item('c_harness', 3.6, 5.6, { labelY: 1.0, y: TY, scale: 1.2, hit: [0.6, 0.2] });
    torus(0.36, 0.07, BLUE, 0, 0.12, 0, g).rotation.x = HP;
    for (const x of [-0.3, 0.3]) torus(0.2, 0.05, K, x, 0.07, 0.42, g).rotation.x = HP;
    box(0.06, 0.06, 0.4, YEL, 0, 0.12, 0.3, g);
    torus(0.07, 0.025, YEL, 0, 0.14, 0.38, g);
  }
  {
    const g = item('c_carabiner', 5.3, 5.6, { labelY: 0.8, y: TY, scale: 1.3, hit: [0.45, 0.1] });
    const t = torus(0.24, 0.05, STEEL, 0, 0.06, 0, g);
    t.rotation.x = HP;
    t.scale.set(0.72, 1.25, 1);
    box(0.06, 0.07, 0.34, ORANGE, -0.15, 0.06, 0, g);
  }
  {
    const g = item('c_belayDevice', 6.8, 5.6, { labelY: 0.8, y: TY, scale: 1.3, hit: [0.42, 0.14] });
    box(0.3, 0.2, 0.36, ORANGE, 0, 0.1, 0, g);
    for (const z of [-0.08, 0.08]) rodX(0.06, 0.32, K, 0, 0.12, z, g, 8);
    torus(0.16, 0.03, K, 0, 0.1, 0.3, g).rotation.x = HP;
  }
  function quickdraw(g, x, y, z, vertical) {
    const q = new THREE.Group();
    q.position.set(x, y, z);
    if (!vertical) q.rotation.x = HP;
    g.add(q);
    box(0.1, 0.5, 0.05, RED, 0, 0, 0, q);
    for (const s of [-1, 1]) {
      const t = torus(0.13, 0.03, STEEL, 0, s * 0.36, 0, q);
      t.scale.set(0.75, 1.2, 1);
    }
  }
  {
    const g = item('c_quickdraw', 8.2, 5.6, { labelY: 0.8, y: TY, scale: 1.3, hit: [0.5, 0.1] });
    quickdraw(g, 0, 0.06, 0, false);
    // and the ones hanging on the lead route
    for (const y of [1.2, 2.6, 4.0, 5.4]) quickdraw(g, 0.2 / 1.3, (y - TY) / 1.3, (WZ + 0.16 - 5.6) / 1.3, true);
  }
  {
    const g = item('c_knot', 9.7, 5.6, { labelY: 0.8, y: TY, scale: 1.2, hit: [0.55, 0.1] });
    for (const z of [-0.2, 0.2]) torus(0.2, 0.06, PINK, 0, 0.07, z, g).rotation.x = HP;
    rodX(0.06, 0.7, PINK, 0.5, 0.07, -0.2, g, 6);
    rodX(0.06, 0.4, PINK, -0.36, 0.07, 0.2, g, 6);
  }
  {
    const g = item('c_shoes', 3.6, 9.4, { labelY: 0.9, y: TY, scale: 1.4, hit: [0.5, 0.15] });
    for (const [x, r] of [[-0.18, 0.2], [0.2, -0.15]]) {
      const s = new THREE.Group();
      s.position.x = x;
      s.rotation.y = r;
      g.add(s);
      box(0.2, 0.05, 0.56, K, 0, 0.025, 0, s);
      box(0.18, 0.16, 0.34, YEL, 0, 0.13, -0.08, s);
      cone(0.1, 0.24, YEL, 0, 0.09, 0.22, s, 5).rotation.x = HP;
      box(0.19, 0.04, 0.08, K, 0, 0.2, -0.02, s);
    }
  }
  {
    const g = item('c_chalkBag', 5.1, 9.4, { labelY: 1.0, y: TY, scale: 1.25, hit: [0.4, 0.25] });
    cyl(0.22, 0.18, 0.4, PURPLE, 0, 0.2, 0, g, 9);
    cyl(0.23, 0.23, 0.06, K, 0, 0.42, 0, g, 9);
    cyl(0.18, 0.18, 0.03, '#ffffff', 0, 0.44, 0, g, 9);
    torus(0.07, 0.02, K, 0.24, 0.36, 0, g);
  }
  {
    const g = item('c_chalk', 6.5, 9.4, { labelY: 0.9, y: TY, scale: 1.2, hit: [0.42, 0.2] });
    box(0.44, 0.26, 0.3, '#ffffff', 0, 0.13, 0, g);
    box(0.2, 0.12, 0.16, '#f1f3f5', 0.36, 0.06, 0.1, g).rotation.y = 0.5;
    for (const [x, z] of [[-0.35, 0.2], [0.2, 0.32], [-0.2, -0.3]]) ball(0.06, '#ffffff', x, 0.04, z, g, 0);
  }
  {
    const g = item('c_brush', 7.8, 9.4, { labelY: 0.7, y: TY, scale: 1.3, hit: [0.42, 0.08] });
    g.rotation.y = 0.4;
    box(0.1, 0.06, 0.7, GREEN, 0, 0.05, 0, g);
    box(0.14, 0.14, 0.26, '#fdfbf4', 0, 0.1, 0.36, g);
  }
  {
    const g = item('c_tape', 8.9, 9.4, { labelY: 0.7, y: TY, scale: 1.3, hit: [0.35, 0.1] });
    cyl(0.2, 0.2, 0.14, '#fdfbf4', 0, 0.07, 0, g, 12);
    cyl(0.11, 0.11, 0.15, '#c9b38c', 0, 0.07, 0, g, 10);
    box(0.3, 0.02, 0.14, '#fdfbf4', 0.3, 0.02, 0, g);
  }
  {
    const g = item('c_helmet', 10.0, 9.4, { labelY: 1.0, y: TY, scale: 1.15, hit: [0.48, 0.25] });
    const d = ball(0.38, ORANGE, 0, 0.14, 0, g, 2);
    d.scale.set(1, 0.85, 1.15);
    box(0.5, 0.06, 0.2, K, 0, 0.1, 0.42, g);
    for (const x of [-0.14, 0.14]) box(0.06, 0.04, 0.3, K, x, 0.47, 0, g);
  }

  // bolts on the lead route (the quickdraws hang from them)
  {
    const g = item('c_bolt', 8.4, WZ, { labelY: 0.5, y: 1.75, hit: [0.4, 0] });
    for (const dy of [0, 1.4, 2.8, 4.2]) {
      box(0.22, 0.26, 0.06, STEEL, 0, dy, 0.04, g);
      cyl(0.06, 0.06, 0.1, K, 0, dy + 0.06, 0.08, g, 6).rotation.x = HP;
    }
  }
  // top anchor with the top rope through it
  const AX = -4.6;
  {
    const g = item('c_anchor', AX, WZ, { labelY: 0.5, y: 6.5, hit: [0.5, 0] });
    for (const x of [-0.25, 0.25]) {
      box(0.2, 0.22, 0.06, STEEL, x, 0.1, 0.04, g);
      box(0.04, 0.4, 0.04, STEEL, x * 0.5, -0.12, 0.08, g).rotation.z = x > 0 ? 0.5 : -0.5;
    }
    torus(0.14, 0.04, YEL, 0, -0.36, 0.1, g);
  }
  {
    const g = item('c_rope', 1.6, 3.2, { labelY: 1.1, hit: [0.75, 0.2] });
    for (let i = 0; i < 4; i++) torus(0.55 - i * 0.06, 0.07, i % 2 ? '#2f9e8f' : '#35b5a4', 0, 0.07 + i * 0.12, 0, g).rotation.x = HP;
    rodX(0.07, 0.7, '#35b5a4', 0.7, 0.07, 0.3, g, 6);
    // the top rope: anchor -> climber, anchor -> belayer (positions relative to the coil)
    const ox = AX - 1.6;
    const oz = WZ - 3.2;
    box(0.07, 2.6, 0.07, '#35b5a4', ox - 0.1, 4.85, oz + 0.22, g);
    const down = box(0.07, 5.3, 0.07, '#35b5a4', ox + 0.25, 3.7, oz + 1.15, g);
    down.rotation.x = -0.36;
  }
  {
    const g = item('c_climber', AX - 0.1, WZ + 0.45, { labelY: 2.5, y: 2.3, hitBox: [0.9, 2.3, 0.8] });
    g.rotation.y = HP; // facing the wall
    const arms = person(g, { shirt: ORANGE, pants: '#3a4048', hair: K });
    box(0.5, 0.12, 0.76, BLUE, 0, 0.74, 0, g);
    cyl(0.14, 0.11, 0.24, PURPLE, -0.3, 0.72, 0, g, 7);
    updaters.push((t) => {
      arms[0].rotation.z = 2.5 + Math.sin(t * 1.3) * 0.35;
      arms[1].rotation.z = 2.5 - Math.sin(t * 1.3) * 0.35;
      g.position.y = 2.3 + Math.sin(t * 0.65) * 0.25;
    });
  }
  {
    const g = item('c_belayer', AX + 0.5, WZ + 2.4, { labelY: 2.6, hitBox: [0.9, 2.2, 0.9] });
    g.rotation.y = HP;
    const arms = person(g, { shirt: GREEN, pants: '#4a5568', hair: '#5a3a22' });
    box(0.5, 0.12, 0.76, RED, 0, 0.74, 0, g);
    box(0.14, 0.14, 0.14, ORANGE, 0.3, 0.85, 0, g);
    arms[0].rotation.z = 1.9;
    updaters.push((t) => (arms[1].rotation.z = 0.5 + Math.sin(t * 1.3) * 0.3));
  }
  {
    const g = item('c_autoBelay', 10.3, WZ, { labelY: 0.8, y: 6.4, hit: [0.5, 0] });
    box(0.7, 0.6, 0.4, YEL, 0, 0, 0.22, g);
    box(0.72, 0.14, 0.42, K, 0, -0.1, 0.22, g).castShadow = false;
    box(0.09, 5.0, 0.03, K, 0, -2.8, 0.28, g);
    // the gate flag that keeps you from climbing unclipped
    cone(0.7, 1.3, YEL, 0, -5.6, 0.34, g, 3).scale.z = 0.12;
    torus(0.1, 0.03, STEEL, 0, -5.3, 0.42, g);
  }

  // ------------------------------------------------------------------ bouldering wall (left) and pad
  const WX = -11.6;
  {
    const g = item('c_bouldering', WX, -1.5, { flat: true, y: 2.3 });
    box(0.5, 4.6, HALF * 2 - 0.4, '#efe6d6', -0.25, 0, 1.7, g);
    // a gently overhanging section
    const pv = new THREE.Group();
    pv.position.set(0.05, -2.3, -5);
    pv.rotation.z = -0.16;
    g.add(pv);
    box(0.25, 4.65, 7, '#e2d6c0', 0.1, 2.32, 0, pv);
    box(0.5, 0.2, HALF * 2 - 0.4, RED, -0.2, 2.4, 1.7, g);
    for (let i = 0; i < 26; i++) {
      const z = 1.2 + R() * 10.5;
      const m = ball(0.15 + R() * 0.1, HOLD_COLORS[Math.floor(R() * HOLD_COLORS.length)], 0.08, -2 + R() * 4, z, g, 0);
      m.scale.set(0.6, 0.8, 1);
    }
  }
  // the named hold shapes, big and low so they are easy to compare
  const showcase = (word, z, y, build) => {
    // part of this wall leans out, so holds on that section sit further forward
    const lean = z > -8.6 && z < -1.4 ? y * 0.17 : 0;
    const g = item(word, WX + 0.42 + lean, z, { labelY: 0.7, y, hit: [0.5, 0] });
    build(g);
  };
  showcase('c_jug', -9.4, 1.5, (g) => {
    ball(0.42, GREEN, 0, 0, 0, g).scale.set(0.75, 0.8, 1.25);
    box(0.3, 0.14, 0.7, '#2c7a41', 0.02, 0.2, 0, g);
  });
  showcase('c_crimp', -7.4, 2.5, (g) => {
    box(0.22, 0.16, 0.8, RED, 0, 0, 0, g);
    box(0.24, 0.05, 0.82, '#b53630', 0.01, 0.09, 0, g).castShadow = false;
  });
  showcase('c_sloper', -5.4, 1.6, (g) => {
    ball(0.52, BLUE, -0.12, 0, 0, g, 2).scale.set(0.62, 0.9, 1.05);
  });
  showcase('c_pinch', -3.4, 2.6, (g) => {
    box(0.34, 0.8, 0.26, ORANGE, 0, 0, 0, g);
    box(0.36, 0.84, 0.1, '#c9621c', 0, 0, 0, g).castShadow = false;
  });
  showcase('c_pocket', -1.6, 1.6, (g) => {
    torus(0.26, 0.12, PURPLE, 0, 0, 0, g).rotation.y = HP;
    rodX(0.15, 0.1, K, -0.06, 0, 0, g, 8);
  });
  {
    const g = item('c_volume', WX + 0.1, 3.4, { labelY: 1.4, y: 2.2, hit: [0.9, 0] });
    const v = cone(1.25, 1.0, WOODP, 0.5, 0, 0, g, 3);
    v.rotation.z = -HP;
    ball(0.16, PINK, 0.75, 0.25, 0.3, g, 0);
    ball(0.14, PINK, 0.8, -0.2, -0.25, g, 0);
  }
  {
    const g = item('c_crashPad', -9.0, -1.5, { flat: true });
    box(4.9, 0.5, 18.4, '#3d6fd9', 0, 0.25, 0, g);
    box(4.92, 0.12, 18.42, '#2f57ad', 0, 0.06, 0, g).castShadow = false;
    for (const z of [-4.6, 0, 4.6]) box(4.9, 0.02, 0.1, YEL, 0, 0.51, z, g).castShadow = false;
  }

  // ------------------------------------------------------------------ training corner
  {
    const g = item('c_hangboard', WX + 0.2, 9.4, { labelY: 0.9, y: 2.7, hit: [0.9, 0] });
    box(0.12, 0.9, 2.2, DARK, -0.02, 0, 0, g);
    box(0.3, 0.55, 1.8, WOODP, 0.14, 0, 0, g);
    for (const z of [-0.6, 0, 0.6]) {
      box(0.1, 0.1, 0.36, K, 0.27, 0.12, z, g).castShadow = false;
      box(0.1, 0.07, 0.3, K, 0.27, -0.12, z, g).castShadow = false;
    }
  }
  {
    const g = item('c_campusBoard', -6.4, 10.2, { labelY: 3.9, hitBox: [1.6, 3.4, 2.0] });
    const pv = new THREE.Group();
    pv.rotation.z = -0.28;
    pv.position.x = -0.6;
    g.add(pv);
    box(0.16, 3.5, 2.0, WOODP, 0, 1.75, 0, pv);
    for (let i = 0; i < 6; i++) box(0.12, 0.09, 1.8, i % 2 ? DARK : '#b98552', 0.13, 0.9 + i * 0.45, 0, pv);
    for (const z of [-0.9, 0.9]) {
      box(0.14, 3.3, 0.14, K, -0.75, 1.65, z, g);
      box(1.3, 0.12, 0.14, K, -0.2, 0.06, z, g);
    }
  }
}
