// Gym island: an open two-wall room full of equipment. Built next to the park.
import * as THREE from 'three';
import { HALF, GYM_X, mesh, box, cyl, ball } from './world.js';

const F = '#3a4048'; // frames
const S = '#c9d0d6'; // steel
const K = '#23272c'; // rubber / plates
const A = '#e5483f'; // red pads and accents
const B = '#3d6fd9'; // blue accents
const Y = '#f2b632'; // yellow accents
const SCREEN = '#6cc4ea';
const HP = Math.PI / 2;

// solid click volumes [w, h, d] for open-framed equipment
const HITBOX = {
  treadmill: [1.3, 2.2, 3.0],
  elliptical: [1.0, 2.2, 2.3],
  exerciseBike: [0.9, 1.7, 1.7],
  rowingMachine: [3.3, 1.3, 0.9],
  stairClimber: [1.2, 3.3, 2.0],
  dumbbellRack: [1.0, 1.6, 4.4],
  weightPlate: [1.0, 1.9, 1.0],
  benchPress: [1.8, 1.7, 2.4],
  squatRack: [2.1, 3.5, 1.6],
  cableMachine: [4.6, 4.2, 1.0],
  smithMachine: [2.7, 3.8, 1.4],
  latPulldown: [1.3, 3.6, 2.0],
  pecDeck: [1.3, 2.9, 1.6],
  legExtension: [1.6, 2.0, 1.5],
  legPress: [3.3, 2.2, 1.4],
  dipBars: [1.0, 1.7, 2.1],
  pullUpBar: [2.2, 3.3, 0.6],
  punchingBag: [1.8, 3.9, 1.4],
};

export const torus = (r, tube, c, x, y, z, p) => mesh(new THREE.TorusGeometry(r, tube, 5, 14), c, x, y, z, p);
/** cylinder lying along the x axis */
export const rodX = (r, len, c, x, y, z, p, seg = 8) => {
  const m = cyl(r, r, len, c, x, y, z, p, seg);
  m.rotation.z = HP;
  return m;
};
/** cylinder lying along the z axis */
export const rodZ = (r, len, c, x, y, z, p, seg = 8) => {
  const m = cyl(r, r, len, c, x, y, z, p, seg);
  m.rotation.x = HP;
  return m;
};
/** barbell along x: steel bar plus plates given as [radius, colour] from the inside out */
function barbellX(p, len, y, z, plates) {
  const g = new THREE.Group();
  g.position.set(0, y, z);
  p.add(g);
  rodX(0.045, len, S, 0, 0, 0, g, 6);
  plates.forEach(([r, c], i) => {
    for (const s of [-1, 1]) rodX(r, 0.11, c, s * (len / 2 - 0.42 + i * 0.13), 0, 0, g, 12);
  });
  return g;
}
function dumbbell(p, x, y, z, c = K, s = 1, alongZ = false) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  if (alongZ) g.rotation.y = HP;
  p.add(g);
  rodX(0.05, 0.5, S, 0, 0, 0, g, 6);
  for (const d of [-1, 1]) rodX(0.17, 0.17, c, d * 0.26, 0, 0, g, 6);
  return g;
}

export function buildGym({ root, item: baseItem, updaters }) {
  const gym = new THREE.Group();
  gym.position.set(GYM_X, 0, 0);
  root.add(gym);
  const item = (word, x, z, opts = {}) => baseItem(word, x, z, { hitBox: HITBOX[word], ...opts, parent: gym, scene: 'gym' });

  // ------------------------------------------------------------------ room
  const slab = new THREE.Group();
  gym.add(slab);
  box(HALF * 2, 1.5, HALF * 2, '#aab1b8', 0, -1.15, 0, slab);
  box(HALF * 2, 0.5, HALF * 2, '#878f98', 0, -2.15, 0, slab);

  const floor = item('floor', 0, 0, { flat: true });
  box(HALF * 2, 0.4, HALF * 2, '#e8d3ab', 0, -0.2, 0, floor);
  for (let i = -5; i <= 5; i++) box(0.06, 0.02, HALF * 2 - 0.8, '#d9c193', i * 2 + 1, 0.005, 0.4, floor).castShadow = false;
  box(10.6, 0.04, 10.4, '#8fa6b8', -5.9, 0.02, 1.6, floor).castShadow = false; // free-weight mat
  box(8.6, 0.04, 6.2, '#c3ccd4', 7.4, 0.02, -1.0, floor).castShadow = false; // cardio mat

  const wall = item('wall', 0, -11.6, { flat: true, y: 2.3 });
  box(HALF * 2, 4.6, 0.4, '#f3efe6', 0, 0, -0.2, wall);
  box(0.4, 4.6, HALF * 2 - 0.4, '#ece7dc', -11.8, 0, 11.8, wall);
  box(HALF * 2 - 0.4, 0.3, 0.06, A, 0.2, 1.3, 0.02, wall).castShadow = false;
  box(0.06, 0.3, HALF * 2 - 0.4, A, -11.58, 1.3, 11.8, wall).castShadow = false;

  {
    const g = item('mirror', -11.56, 1.6, { flat: true, y: 1.95 });
    box(0.08, 3.0, 8.4, S, -0.02, 0, 0, g);
    box(0.08, 2.7, 8.1, '#cdeaf7', 0.02, 0, 0, g).castShadow = false;
    for (const z of [-2.6, 0.2, 2.9]) {
      const m = box(0.02, 2.2, 0.22, '#ffffff', 0.07, 0, z, g);
      m.rotation.x = 0.5;
      m.castShadow = false;
    }
  }

  {
    const g = item('locker', 8.9, -10.95, { labelY: 4.0 });
    for (let i = 0; i < 5; i++) {
      const x = (i - 2) * 0.92;
      box(0.88, 3.2, 0.9, i % 2 ? '#4aa8e0' : B, x, 1.6, 0, g);
      for (const y of [0.85, 2.4]) {
        box(0.7, 1.4, 0.03, i % 2 ? '#6bbbea' : '#5585e4', x, y, 0.46, g).castShadow = false;
        box(0.07, 0.22, 0.05, S, x + 0.24, y, 0.5, g);
      }
    }
  }

  // ------------------------------------------------------------------ cardio
  {
    const g = item('treadmill', 10.2, -2.4, { labelY: 2.9 });
    box(1.2, 0.3, 3.0, F, 0, 0.18, 0, g);
    box(0.9, 0.05, 2.6, K, 0, 0.35, 0.1, g);
    for (const s of [-1, 1]) {
      box(0.1, 1.6, 0.1, S, s * 0.55, 1.05, -1.3, g).rotation.x = -0.12;
      box(0.08, 0.08, 1.1, S, s * 0.55, 1.3, -0.8, g);
    }
    box(1.25, 0.55, 0.16, F, 0, 1.95, -1.42, g);
    box(0.7, 0.32, 0.04, SCREEN, 0, 1.97, -1.33, g);
    const stripes = [0, 1, 2].map((i) => box(0.9, 0.055, 0.12, '#4a5058', 0, 0.352, 0, g));
    updaters.push((t) => stripes.forEach((m, i) => (m.position.z = -1.1 + ((t * 1.6 + i * 0.85) % 2.5))));
  }
  {
    const g = item('elliptical', 7.5, -2.5, { labelY: 2.9 });
    box(0.7, 0.14, 2.3, F, 0, 0.07, 0, g);
    rodX(0.55, 0.36, A, 0, 0.6, 0.75, g, 12);
    box(0.16, 1.7, 0.16, F, 0, 0.95, -0.85, g);
    box(0.55, 0.38, 0.12, F, 0, 1.9, -0.85, g);
    box(0.36, 0.22, 0.04, SCREEN, 0, 1.92, -0.78, g);
    const arms = [-1, 1].map((s) => {
      const pv = new THREE.Group();
      pv.position.set(s * 0.36, 0.5, -0.6);
      g.add(pv);
      box(0.07, 1.8, 0.07, S, 0, 0.9, 0, pv);
      box(0.1, 0.3, 0.1, K, 0, 1.7, 0, pv);
      const pedal = box(0.26, 0.07, 0.7, K, s * 0.3, 0.38, 0.15, g);
      return { pv, pedal, s };
    });
    updaters.push((t) => {
      for (const { pv, pedal, s } of arms) {
        const a = Math.sin(t * 3 + (s > 0 ? Math.PI : 0));
        pv.rotation.x = a * 0.28;
        pedal.position.set(s * 0.3, 0.42 + Math.cos(t * 3 + (s > 0 ? Math.PI : 0)) * 0.12, 0.15 - a * 0.25);
      }
    });
  }
  {
    const g = item('exerciseBike', 5.0, -2.5, { labelY: 2.5 });
    box(0.7, 0.12, 0.3, F, 0, 0.06, 0.75, g);
    box(0.7, 0.12, 0.3, F, 0, 0.06, -0.75, g);
    box(0.16, 0.16, 1.6, A, 0, 0.3, 0, g);
    box(0.14, 1.0, 0.14, A, 0, 0.75, 0.45, g).rotation.x = 0.15;
    box(0.4, 0.12, 0.5, K, 0, 1.3, 0.55, g);
    box(0.14, 1.2, 0.14, A, 0, 0.85, -0.55, g).rotation.x = -0.2;
    box(0.8, 0.08, 0.08, K, 0, 1.5, -0.7, g);
    box(0.3, 0.2, 0.06, SCREEN, 0, 1.62, -0.66, g);
    rodX(0.45, 0.14, S, 0, 0.55, -0.4, g, 12);
    const crank = new THREE.Group();
    crank.position.set(0, 0.5, 0.15);
    g.add(crank);
    box(0.5, 0.07, 0.07, K, 0, 0, 0, crank);
    box(0.07, 0.56, 0.07, F, 0.25, 0, 0, crank);
    box(0.07, 0.56, 0.07, F, -0.25, 0, 0, crank);
    box(0.22, 0.06, 0.14, K, 0.36, 0.25, 0, crank);
    box(0.22, 0.06, 0.14, K, -0.36, -0.25, 0, crank);
    updaters.push((t) => (crank.rotation.x = t * 3));
  }
  {
    const g = item('rowingMachine', 7.6, 1.4, { labelY: 1.9 });
    box(3.3, 0.12, 0.18, S, 0, 0.32, 0, g);
    box(0.14, 0.3, 0.9, F, 1.55, 0.15, 0, g);
    box(0.14, 0.3, 0.9, F, -1.4, 0.15, 0, g);
    rodZ(0.55, 0.3, F, -1.3, 0.62, 0, g, 12);
    rodZ(0.3, 0.32, A, -1.3, 0.62, 0, g, 10);
    box(0.1, 0.5, 0.25, K, -0.6, 0.5, 0.25, g).rotation.z = 0.5;
    box(0.1, 0.5, 0.25, K, -0.6, 0.5, -0.25, g).rotation.z = 0.5;
    box(0.3, 0.2, 0.06, SCREEN, -1.0, 1.25, 0, g).rotation.y = HP;
    box(0.08, 0.7, 0.08, F, -1.1, 0.95, 0, g);
    const seat = box(0.45, 0.12, 0.5, K, 0.3, 0.45, 0, g);
    const handle = rodZ(0.04, 0.7, K, 0, 0.8, 0, g, 6);
    updaters.push((t) => {
      const k = (Math.sin(t * 2) + 1) / 2;
      seat.position.x = -0.1 + k * 1.2;
      handle.position.x = -0.5 + k * 1.0;
    });
  }
  {
    const g = item('stairClimber', 10.3, -7.0, { labelY: 3.9 });
    box(1.2, 0.6, 2.0, F, 0, 0.3, 0, g);
    for (let i = 0; i < 4; i++) box(0.95, 0.22, 0.42, i % 2 ? S : '#aeb6bd', 0, 0.7 + i * 0.32, 0.65 - i * 0.42, g);
    box(1.2, 2.2, 0.4, F, 0, 1.7, -0.85, g);
    box(0.8, 0.5, 0.14, F, 0, 3.05, -0.7, g).rotation.x = -0.3;
    box(0.5, 0.28, 0.04, SCREEN, 0, 3.07, -0.6, g).rotation.x = -0.3;
    for (const s of [-1, 1]) box(0.08, 0.08, 1.9, S, s * 0.58, 2.1, 0, g).rotation.x = 0.55;
  }
  {
    const g = item('jumpRope', 6.6, 10.4, { labelY: 0.9, scale: 1.3, hit: [0.7, 0.1] });
    torus(0.5, 0.035, K, 0, 0.05, 0, g).rotation.x = HP;
    torus(0.3, 0.035, K, 0.35, 0.07, 0.2, g).rotation.x = HP;
    rodX(0.06, 0.42, A, -0.5, 0.08, 0.45, g, 6).rotation.y = 0.5;
    rodX(0.06, 0.42, A, 0.75, 0.08, -0.2, g, 6).rotation.y = -0.7;
  }

  // ------------------------------------------------------------------ free weights
  {
    const g = item('dumbbellRack', -10.5, 1.6, { labelY: 2.4 });
    for (const z of [-2.1, 2.1]) {
      box(0.9, 0.1, 0.12, F, 0.1, 0.05, z, g);
      box(0.12, 1.5, 0.12, F, -0.25, 0.75, z, g);
    }
    const tiers = [[0.25, 0.5], [-0.05, 1.15]];
    const colors = [K, K, B, B, A, A, K];
    tiers.forEach(([x, y], ti) => {
      box(0.6, 0.08, 4.3, F, x, y, 0, g).rotation.z = 0.25;
      for (let i = 0; i < 7; i++) dumbbell(g, x, y + 0.2, -1.8 + i * 0.6, colors[(i + ti * 3) % 7], 0.8 + (ti ? 0 : 0.25) * (i / 6 + 0.4));
    });
  }
  {
    const g = item('weightPlate', -10.4, -2.4, { labelY: 2.4 });
    box(1.0, 0.1, 1.0, F, 0, 0.05, 0, g);
    box(0.12, 1.8, 0.12, F, 0, 0.9, 0, g);
    for (const [y, r, c] of [[0.55, 0.45, K], [1.1, 0.36, A], [1.6, 0.27, B]]) {
      rodZ(0.04, 1.0, S, 0, y, 0, g, 6);
      for (const s of [-1, 1]) {
        rodZ(r, 0.1, c, 0, y, s * 0.2, g, 12);
        rodZ(r, 0.1, c, 0, y, s * 0.33, g, 12);
      }
    }
  }
  {
    const g = item('kettlebell', -10.2, 5.4, { labelY: 1.3, hit: [0.85, 0.35] });
    for (const [x, z, s, c] of [[0, 0, 1.25, K], [0.75, 0.3, 1.0, A], [0.25, 0.85, 0.8, B]]) {
      const k = new THREE.Group();
      k.position.set(x, 0, z);
      k.scale.setScalar(s);
      g.add(k);
      ball(0.27, c, 0, 0.26, 0, k, 2);
      torus(0.15, 0.045, c, 0, 0.55, 0, k);
    }
  }
  {
    const g = item('benchPress', -6.6, -0.9, { labelY: 2.5 });
    box(0.65, 0.16, 2.3, A, 0, 0.62, 0.2, g);
    box(0.5, 0.55, 0.12, F, 0, 0.28, 1.15, g);
    box(0.5, 0.55, 0.12, F, 0, 0.28, -0.7, g);
    for (const s of [-1, 1]) {
      box(0.12, 1.6, 0.12, F, s * 0.8, 0.8, -0.75, g);
      box(0.12, 0.1, 0.3, F, s * 0.8, 1.45, -0.6, g);
      box(0.12, 0.1, 0.9, F, s * 0.8, 0.05, -0.75, g);
    }
    barbellX(g, 3.4, 1.58, -0.6, [[0.45, K], [0.38, A]]);
  }
  {
    const g = item('barbell', -6.0, 3.6, { labelY: 1.4, hit: [0.6, 0.45] });
    barbellX(g, 3.8, 0.47, 0, [[0.46, B], [0.46, K], [0.3, Y]]);
  }
  {
    const g = item('squatRack', 3.6, -9.3, { labelY: 4.2 });
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) box(0.15, 3.4, 0.15, A, sx * 0.95, 1.7, sz * 0.7, g);
      box(0.15, 0.15, 1.55, A, sx * 0.95, 3.4, 0, g);
      box(0.15, 0.12, 2.0, A, sx * 0.95, 0.06, 0, g);
      box(0.09, 0.09, 1.4, S, sx * 0.95, 1.0, 0, g);
      box(0.2, 0.1, 0.25, K, sx * 0.95, 2.05, 0.88, g);
    }
    box(2.05, 0.15, 0.15, A, 0, 3.4, -0.7, g);
    rodX(0.05, 1.9, S, 0, 3.4, 0.7, g, 6);
    barbellX(g, 3.6, 2.18, 0.9, [[0.46, K], [0.4, B]]);
  }
  {
    const g = item('dumbbell', -2.6, -1.6, { labelY: 1.0, scale: 1.45, hit: [0.6, 0.2] });
    dumbbell(g, 0, 0.17, -0.3, K, 1);
    dumbbell(g, 0.1, 0.17, 0.3, K, 1).rotation.y = 0.3;
  }
  {
    const g = item('weightBench', -2.6, 2.4, { labelY: 1.5 });
    g.rotation.y = HP;
    box(0.65, 0.16, 2.3, K, 0, 0.62, 0, g);
    box(0.5, 0.55, 0.12, F, 0, 0.28, 0.95, g);
    box(0.5, 0.55, 0.12, F, 0, 0.28, -0.95, g);
    box(0.7, 0.08, 0.12, F, 0, 0.04, 0.95, g);
    box(0.7, 0.08, 0.12, F, 0, 0.04, -0.95, g);
  }
  {
    const g = item('medicineBall', 0.4, 1.0, { labelY: 1.3, hit: [0.6, 0.45] });
    const b = new THREE.Group();
    b.position.y = 0.45;
    g.add(b);
    ball(0.45, B, 0, 0, 0, b, 2);
    cyl(0.46, 0.46, 0.1, Y, 0, 0, 0, b, 12);
    rodX(0.46, 0.1, Y, 0, 0, 0, b, 12);
  }

  // ------------------------------------------------------------------ machines
  const stack = (g, x, y, z, h = 1.3) => {
    box(0.4, h, 0.28, S, x, y, z, g);
    for (let i = 1; i < 6; i++) box(0.42, 0.03, 0.3, '#8d959d', x, y - h / 2 + (i * h) / 6, z, g).castShadow = false;
    box(0.06, 0.06, 0.34, A, x, y + h / 4, z, g);
  };
  {
    const g = item('cableMachine', -5.4, -9.9, { labelY: 4.9 });
    for (const s of [-1, 1]) {
      box(0.6, 4.0, 0.7, F, s * 2.0, 2.0, 0, g);
      stack(g, s * 2.0, 1.0, 0.25, 1.5);
      box(0.25, 0.25, 0.3, A, s * 1.6, 3.5, 0.3, g);
      box(0.03, 1.5, 0.03, K, s * 1.5, 2.7, 0.4, g);
      box(0.3, 0.08, 0.08, A, s * 1.5, 1.92, 0.4, g);
      box(0.9, 0.12, 1.4, F, s * 2.0, 0.06, 0.3, g);
    }
    box(4.6, 0.3, 0.45, F, 0, 4.05, 0, g);
    box(0.9, 0.08, 0.08, S, 0, 3.8, 0.25, g);
  }
  {
    const g = item('smithMachine', -0.6, -9.6, { labelY: 4.5 });
    for (const sx of [-1, 1]) {
      box(0.16, 3.7, 0.16, F, sx * 1.25, 1.85, -0.6, g);
      box(0.16, 3.7, 0.16, F, sx * 1.25, 1.85, 0.6, g);
      box(0.16, 0.16, 1.36, F, sx * 1.25, 3.7, 0, g);
      box(0.16, 0.12, 1.9, F, sx * 1.25, 0.06, 0, g);
      cyl(0.045, 0.045, 3.6, S, sx * 1.05, 1.85, 0.25, g, 6);
    }
    box(2.66, 0.16, 0.16, F, 0, 3.7, -0.6, g);
    box(2.66, 0.16, 0.16, F, 0, 3.7, 0.6, g);
    box(0.65, 0.16, 1.9, A, 0, 0.5, 0.2, g);
    box(0.5, 0.42, 0.12, F, 0, 0.21, 0.9, g);
    box(0.5, 0.42, 0.12, F, 0, 0.21, -0.5, g);
    const bar = barbellX(g, 3.5, 1.8, 0.25, [[0.42, K], [0.34, Y]]);
    updaters.push((t) => (bar.position.y = 1.75 + Math.sin(t * 1.3) * 0.55));
  }
  {
    const g = item('latPulldown', -9.2, -5.6, { labelY: 4.2 });
    box(1.0, 0.12, 2.0, F, 0, 0.06, 0, g);
    box(0.55, 3.5, 0.45, F, 0, 1.75, -0.75, g);
    stack(g, 0, 1.0, -0.45, 1.4);
    box(0.14, 0.14, 1.4, F, 0, 3.5, -0.1, g);
    box(0.5, 0.14, 0.5, A, 0, 0.7, 0.5, g);
    box(0.12, 0.65, 0.12, F, 0, 0.35, 0.5, g);
    rodX(0.1, 0.8, A, 0, 1.08, 0.15, g, 8);
    const pull = new THREE.Group();
    g.add(pull);
    box(0.03, 1.0, 0.03, K, 0, 0.5, 0.5, pull);
    box(1.3, 0.07, 0.07, S, 0, 0, 0.5, pull);
    box(0.4, 0.07, 0.07, S, 0.8, -0.08, 0.5, pull).rotation.z = -0.45;
    box(0.4, 0.07, 0.07, S, -0.8, -0.08, 0.5, pull).rotation.z = 0.45;
    updaters.push((t) => {
      const k = (Math.sin(t * 1.6) + 1) / 2;
      pull.position.y = 2.5 - k * 0.6;
    });
  }
  {
    const g = item('pecDeck', -6.3, -5.4, { labelY: 3.5 });
    box(1.2, 0.12, 1.6, F, 0, 0.06, 0.1, g);
    box(0.55, 2.8, 0.4, F, 0, 1.4, -0.45, g);
    stack(g, 0, 2.0, -0.2, 1.1);
    box(0.55, 0.14, 0.55, A, 0, 0.65, 0.35, g);
    box(0.12, 0.6, 0.12, F, 0, 0.32, 0.35, g);
    box(0.55, 0.9, 0.12, A, 0, 1.25, 0.02, g);
    const arms = [-1, 1].map((s) => {
      const pv = new THREE.Group();
      pv.position.set(s * 0.4, 0, -0.2);
      g.add(pv);
      box(0.09, 0.09, 0.85, F, 0, 2.05, 0.42, pv);
      cyl(0.11, 0.11, 0.95, A, 0, 1.55, 0.82, pv, 8);
      return { pv, s };
    });
    updaters.push((t) => {
      const a = 0.15 + ((Math.sin(t * 1.8) + 1) / 2) * 0.75;
      for (const { pv, s } of arms) pv.rotation.y = s * a;
    });
  }
  {
    const g = item('legExtension', -3.5, -5.2, { labelY: 2.8 });
    box(1.5, 0.12, 1.5, F, 0.25, 0.06, 0, g);
    box(0.6, 0.16, 0.65, A, -0.1, 0.78, 0.1, g);
    box(0.6, 1.0, 0.14, A, -0.1, 1.35, -0.32, g).rotation.x = -0.18;
    box(0.14, 0.72, 0.14, F, -0.1, 0.4, 0.1, g);
    box(0.5, 1.9, 0.45, F, 0.75, 0.95, -0.25, g);
    stack(g, 0.75, 1.0, 0.02, 1.2);
    const lever = new THREE.Group();
    lever.position.set(-0.1, 0.74, 0.46);
    g.add(lever);
    box(0.09, 0.65, 0.09, F, 0.28, -0.32, 0, lever);
    rodX(0.11, 0.7, K, 0, -0.62, 0.06, lever, 8);
    updaters.push((t) => (lever.rotation.x = -((Math.sin(t * 1.7) + 1) / 2) * 1.25));
  }
  {
    const g = item('legPress', 0.6, -5.2, { labelY: 3.0 });
    box(3.3, 0.14, 1.3, F, 0, 0.07, 0, g);
    box(0.7, 0.16, 0.8, A, -0.75, 0.42, 0, g).rotation.z = 0.15;
    box(0.16, 1.1, 0.8, A, -1.3, 0.85, 0, g).rotation.z = 0.55;
    for (const s of [-1, 1]) {
      box(2.5, 0.12, 0.12, S, 0.55, 1.05, s * 0.55, g).rotation.z = 0.62;
      box(0.14, 2.0, 0.14, F, 1.5, 1.0, s * 0.55, g);
    }
    const sled = new THREE.Group();
    g.add(sled);
    box(0.12, 1.0, 1.0, S, 0, 0, 0, sled).rotation.z = 0.62;
    for (const s of [-1, 1]) {
      rodZ(0.42, 0.1, K, 0.18, 0.05, s * 0.72, sled, 12);
      rodZ(0.42, 0.1, A, 0.18, 0.05, s * 0.85, sled, 12);
    }
    updaters.push((t) => {
      const k = (Math.sin(t * 1.4) + 1) / 2;
      const d = 0.35 + k * 0.75;
      sled.position.set(-0.35 + Math.cos(0.62) * d * 1.3, 0.75 + Math.sin(0.62) * d * 1.3, 0);
    });
  }
  {
    const g = item('dipBars', 4.4, -5.3, { labelY: 2.5 });
    for (const sx of [-1, 1]) {
      box(0.12, 1.6, 0.12, F, sx * 0.42, 0.8, -0.8, g);
      box(0.12, 1.6, 0.12, F, sx * 0.42, 0.8, 0.8, g);
      rodZ(0.06, 2.1, S, sx * 0.42, 1.62, 0, g, 6);
      box(0.12, 0.1, 2.0, F, sx * 0.42, 0.05, 0, g);
    }
    box(0.96, 0.1, 0.12, F, 0, 0.05, -0.8, g);
  }
  {
    const g = item('pullUpBar', 7.0, -7.4, { labelY: 4.0 });
    for (const sx of [-1, 1]) {
      box(0.15, 3.3, 0.15, F, sx * 1.0, 1.65, 0, g);
      box(0.15, 0.1, 1.5, F, sx * 1.0, 0.05, 0, g);
      box(0.1, 0.9, 0.1, F, sx * 1.0, 0.45, 0.45, g).rotation.x = 0.5;
    }
    rodX(0.06, 2.5, S, 0, 3.2, 0, g, 6);
    box(0.3, 0.1, 0.1, K, 0.6, 3.2, 0, g);
    box(0.3, 0.1, 0.1, K, -0.6, 3.2, 0, g);
  }
  {
    const g = item('punchingBag', -9.6, -9.4, { labelY: 4.5 });
    box(1.8, 0.14, 1.4, F, 0, 0.07, 0, g);
    box(0.18, 3.8, 0.18, F, -0.7, 1.9, -0.4, g);
    box(1.5, 0.16, 0.16, F, -0.05, 3.75, -0.2, g).rotation.y = -0.5;
    const pv = new THREE.Group();
    pv.position.set(0.45, 3.7, 0.1);
    g.add(pv);
    box(0.05, 0.5, 0.05, S, 0, -0.25, 0, pv);
    cyl(0.44, 0.44, 2.0, A, 0, -1.5, 0, pv, 10);
    cyl(0.45, 0.45, 0.2, K, 0, -0.75, 0, pv, 10);
    cyl(0.45, 0.45, 0.2, K, 0, -2.25, 0, pv, 10);
    g.userData.onSelect = (now) => (g.userData.hitAt = now);
    updaters.push((t) => {
      const k = t - (g.userData.hitAt ?? -99);
      pv.rotation.z = Math.sin(t * 1.3) * 0.04 + (k < 4 ? Math.sin(k * 6) * 0.35 * Math.exp(-k * 1.1) : 0);
    });
  }

  // ------------------------------------------------------------------ gear
  {
    const g = item('plyoBox', -9.4, 8.8, { labelY: 1.9 });
    box(1.3, 1.0, 1.3, '#d9a25c', 0, 0.5, 0, g);
    box(1.34, 0.08, 1.34, '#b9853f', 0, 0.96, 0, g);
    box(1.34, 0.08, 1.34, '#b9853f', 0, 0.04, 0, g);
    box(0.4, 0.3, 0.03, K, 0, 0.55, 0.66, g);
    box(0.03, 0.3, 0.4, K, 0.66, 0.55, 0, g);
  }
  {
    const g = item('battleRopes', -5.6, 8.2, { labelY: 1.5, hit: [1.0, 0.3] });
    g.rotation.y = -0.5;
    box(0.5, 0.5, 0.5, F, 0, 0.25, -2.0, g);
    box(0.3, 0.12, 0.12, Y, 0, 0.3, -1.72, g);
    const segs = [];
    for (const s of [-1, 1])
      for (let i = 0; i < 9; i++) segs.push({ m: box(0.14, 0.14, 0.46, i > 6 ? Y : '#3b3f45', s * (0.08 + i * 0.045), 0.08, -1.55 + i * 0.44, g), s, i });
    updaters.push((t) => {
      for (const { m, s, i } of segs) m.position.y = 0.09 + Math.max(0, Math.sin(t * 7 - i * 0.9 + (s > 0 ? Math.PI : 0))) * 0.32 * Math.min(1, i / 3);
    });
  }
  {
    const g = item('boxingGloves', -2.8, 5.6, { labelY: 1.0, scale: 1.4, hit: [0.55, 0.22] });
    for (const [x, z, r] of [[-0.22, 0, 0.3], [0.24, 0.12, -0.4]]) {
      const k = new THREE.Group();
      k.position.set(x, 0, z);
      k.rotation.y = r;
      g.add(k);
      ball(0.2, A, 0, 0.2, 0.08, k).scale.set(1, 0.95, 1.3);
      ball(0.09, A, 0.17, 0.17, 0.02, k, 0);
      cyl(0.15, 0.17, 0.2, '#fdfbf4', 0, 0.17, -0.26, k, 8).rotation.x = HP;
    }
  }
  {
    const g = item('yogaMat', 1.6, 7.6, { labelY: 0.9 });
    g.rotation.y = 0.25;
    box(1.2, 0.06, 2.9, '#9b6fd6', 0, 0.03, 0, g);
    box(1.0, 0.065, 0.08, '#b891ea', 0, 0.035, 1.1, g).castShadow = false;
    box(1.0, 0.065, 0.08, '#b891ea', 0, 0.035, -1.1, g).castShadow = false;
  }
  {
    const g = item('foamRoller', 3.7, 6.0, { labelY: 0.9, hit: [0.55, 0.22] });
    g.rotation.y = 0.6;
    rodX(0.22, 1.1, '#ff8a3c', 0, 0.22, 0, g, 10);
    rodX(0.1, 1.12, '#c9621c', 0, 0.22, 0, g, 8);
  }
  {
    const g = item('exerciseBall', 5.0, 8.4, { labelY: 1.7, hit: [0.75, 0.65] });
    const b = ball(0.68, '#35b5a4', 0, 0.68, 0, g, 2);
    cyl(0.69, 0.69, 0.05, '#2b9a8b', 0, 0.68, 0, g, 14);
    updaters.push((t) => {
      const k = 1 + Math.sin(t * 2.2) * 0.03;
      b.scale.set(1 / k, k, 1 / k);
    });
  }
  {
    const g = item('resistanceBand', -0.9, 10.4, { labelY: 0.8, scale: 1.3, hit: [0.6, 0.1] });
    const a = torus(0.42, 0.05, '#e94f8a', 0, 0.05, 0, g);
    a.rotation.x = HP;
    a.scale.set(1.3, 0.7, 1);
    const b = torus(0.34, 0.05, Y, 0.3, 0.09, 0.2, g);
    b.rotation.x = HP;
    b.scale.set(1, 1.3, 1);
  }
  {
    const g = item('abWheel', 2.8, 10.6, { labelY: 1.0, scale: 1.35, hit: [0.5, 0.28] });
    g.rotation.y = 0.4;
    rodX(0.3, 0.14, K, 0, 0.3, 0, g, 12);
    rodX(0.2, 0.16, Y, 0, 0.3, 0, g, 10);
    rodX(0.045, 0.95, A, 0, 0.3, 0, g, 6);
  }
  {
    const g = item('scale', 10.3, 5.6, { labelY: 0.8, scale: 1.3, hit: [0.55, 0.1] });
    box(0.8, 0.1, 0.8, '#f4f1e8', 0, 0.05, 0, g);
    box(0.4, 0.02, 0.2, K, 0, 0.11, -0.22, g);
    box(0.2, 0.025, 0.1, SCREEN, 0, 0.115, -0.22, g);
    box(0.22, 0.02, 0.36, '#d8d4c8', -0.18, 0.105, 0.15, g);
    box(0.22, 0.02, 0.36, '#d8d4c8', 0.18, 0.105, 0.15, g);
  }
  {
    const g = item('sneakers', 9.0, 9.0, { labelY: 0.9, scale: 1.5, hit: [0.5, 0.15] });
    for (const [x, r] of [[-0.18, 0.15], [0.2, -0.2]]) {
      const k = new THREE.Group();
      k.position.x = x;
      k.rotation.y = r;
      g.add(k);
      box(0.24, 0.07, 0.6, '#fdfbf4', 0, 0.035, 0, k);
      box(0.22, 0.2, 0.34, B, 0, 0.17, -0.12, k);
      box(0.22, 0.11, 0.26, B, 0, 0.125, 0.16, k);
      box(0.16, 0.02, 0.14, '#fdfbf4', 0, 0.185, 0.1, k);
    }
  }
  {
    const g = item('gymBag', 10.4, 10.4, { labelY: 1.2, hit: [0.7, 0.35] });
    g.rotation.y = 0.5;
    rodZ(0.36, 1.2, B, 0, 0.34, 0, g, 8).scale.set(1, 1, 0.9);
    box(0.08, 0.02, 1.0, '#fdfbf4', 0, 0.68, 0, g);
    for (const z of [-0.3, 0.3]) torus(0.2, 0.035, K, 0, 0.66, z, g).rotation.y = HP;
    box(0.5, 0.3, 0.03, '#5585e4', 0, 0.3, 0.6, g);
  }
  {
    const g = item('towel', -2.2, 2.4, { labelY: 0.6, y: 0.7, hit: [0.4, 0.1] });
    box(0.5, 0.12, 0.6, '#fdfbf4', 0, 0.06, 0, g);
    box(0.52, 0.125, 0.1, SCREEN, 0, 0.06, 0.15, g);
    box(0.52, 0.125, 0.1, SCREEN, 0, 0.06, -0.15, g);
  }
  {
    const g = item('waterBottle', -3.3, 2.45, { labelY: 0.9, y: 0.7, scale: 1.2, hit: [0.3, 0.3] });
    cyl(0.12, 0.12, 0.46, '#4aa8e0', 0, 0.23, 0, g, 8);
    cyl(0.07, 0.1, 0.1, '#4aa8e0', 0, 0.5, 0, g, 8);
    cyl(0.075, 0.075, 0.08, '#fdfbf4', 0, 0.58, 0, g, 8);
  }
}
