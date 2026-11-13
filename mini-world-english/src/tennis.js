// Tennis island: a doubles match on a hard court, with coaching gear along the front.
import * as THREE from 'three';
import { HALF, SPORT_X, HOME_Z, mesh, box, cyl, ball, cone } from './world.js';
import { torus, rodX, rodZ } from './gym.js';
import { person } from './market.js';

const WHITE = '#fdfbf4';
const LINE = '#ffffff';
const COURT = '#3d77c2';
const K = '#23272c';
const STEEL = '#c9d0d6';
const RED = '#e5483f';
const YEL = '#d8e62e'; // tennis-ball yellow
const ORANGE = '#f08a3c';
const WOOD = '#b98552';
const HP = Math.PI / 2;
const CZ = -1.6; // court centre line (z)

export function buildTennis({ root, item: baseItem, updaters }) {
  const isle = new THREE.Group();
  isle.position.set(SPORT_X, 0, HOME_Z);
  root.add(isle);
  const item = (word, x, z, opts = {}) => baseItem(word, x, z, { ...opts, parent: isle, scene: 'tennis' });
  /** invisible, wider click strip so thin court lines are easy to hit */
  const strip = (g, w, d, x, z, y = 0.12) => {
    const h = mesh(new THREE.BoxGeometry(w, 0.14, d), LINE, x, y, z, g);
    h.visible = false;
  };
  const ln = (g, w, d, x, z) => (box(w, 0.02, d, LINE, x, 0.085, z, g).castShadow = false);

  // ------------------------------------------------------------------ ground and court
  const slab = new THREE.Group();
  isle.add(slab);
  box(HALF * 2, 1.5, HALF * 2, '#9a6b42', 0, -1.15, 0, slab);
  box(HALF * 2, 0.5, HALF * 2, '#7a5232', 0, -2.15, 0, slab);
  box(HALF * 2, 0.4, HALF * 2, '#3f8f5a', 0, -0.2, 0, slab);

  const court = item('t_court', 0, CZ, { flat: true });
  box(22.4, 0.06, 12.2, '#2f6b4a', 0, 0.03, 0, court).castShadow = false; // run-off
  box(19.2, 0.07, 8.8, COURT, 0, 0.035, 0, court).castShadow = false;

  {
    const g = item('t_alley', 0, CZ, { flat: true });
    for (const s of [-1, 1]) box(19.2, 0.075, 1.1, '#2f62a8', 0, 0.04, s * 3.85, g).castShadow = false;
  }
  {
    const g = item('t_serviceBox', 0, CZ, { flat: true });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(5.1, 0.075, 3.3, '#5a94dd', sx * 2.55, 0.04, sz * 1.65, g).castShadow = false;
  }
  {
    const g = item('t_sideline', 0, CZ, { flat: true });
    for (const z of [-4.4, -3.3, 3.3, 4.4]) {
      ln(g, 19.2, 0.13, 0, z);
      strip(g, 19.2, 0.5, 0, z);
    }
  }
  {
    const g = item('t_baseline', 9.6, CZ, { flat: true });
    for (const x of [0, -19.2]) {
      ln(g, 0.16, 8.93, x, 0);
      strip(g, 0.6, 8.9, x, 0);
    }
  }
  {
    const g = item('t_serviceLine', 5.1, CZ, { flat: true });
    for (const x of [0, -10.2]) {
      ln(g, 0.13, 6.6, x, 0);
      strip(g, 0.5, 6.6, x, 0);
    }
    ln(g, 10.2, 0.13, -5.1, 0); // centre service line
    strip(g, 10.2, 0.5, -5.1, 0);
  }
  {
    const g = item('t_centerMark', 9.35, CZ, { flat: true });
    for (const x of [0, -18.7]) {
      ln(g, 0.5, 0.14, x, 0);
      strip(g, 0.9, 0.7, x, 0, 0.3); // sits above the baseline strip so it wins the click
    }
  }
  {
    const g = item('t_net', 0, CZ, { labelY: 1.7 });
    for (const s of [-1, 1]) cyl(0.09, 0.09, 1.15, K, 0, 0.575, s * 4.95, g, 8);
    box(0.06, 0.92, 9.8, '#2b3138', 0, 0.5, 0, g);
    box(0.09, 0.12, 9.8, WHITE, 0, 0.98, 0, g);
    box(0.08, 0.92, 0.1, WHITE, 0, 0.5, 0, g);
    for (let i = -4; i <= 4; i++) if (i) box(0.07, 0.86, 0.03, '#3d454e', 0, 0.48, i * 1.08, g).castShadow = false;
  }

  // ------------------------------------------------------------------ fence, lights, scoreboard, umpire
  {
    const g = item('t_fence', 0, -11.6, { flat: true, y: 1.6 });
    box(HALF * 2 - 0.6, 3.0, 0.06, '#2f6b4a', 0, 0, 0, g);
    box(0.06, 3.0, HALF * 2 - 0.6, '#2f6b4a', -11.6, 0, 11.6, g);
    for (let i = -11; i <= 11; i += 2.75) {
      cyl(0.08, 0.08, 3.3, STEEL, i, 0.05, 0.02, g, 6);
      cyl(0.08, 0.08, 3.3, STEEL, -11.58, 0.05, 11.6 + i, g, 6);
    }
    box(HALF * 2 - 0.6, 0.1, 0.1, STEEL, 0, 1.55, 0.02, g);
    box(0.1, 0.1, HALF * 2 - 0.6, STEEL, -11.58, 1.55, 11.6, g);
  }
  {
    const g = item('t_floodlight', -10.6, -10.6, { labelY: 7.4, hitBox: [1.6, 7.0, 0.8] });
    for (const x of [0, 21.2]) {
      cyl(0.12, 0.16, 6.6, STEEL, x, 3.3, 0, g, 7);
      box(1.6, 0.5, 0.4, K, x, 6.7, 0.1, g).rotation.x = 0.4;
      box(1.4, 0.34, 0.06, '#fff6c9', x, 6.62, 0.32, g).rotation.x = 0.4;
    }
  }
  {
    const g = item('t_scoreboard', -5.0, -11.2, { labelY: 4.4 });
    for (const x of [-1.6, 1.6]) box(0.14, 2.2, 0.14, STEEL, x, 1.1, 0, g);
    box(4.2, 2.0, 0.24, '#1c2733', 0, 3.0, 0, g);
    box(4.3, 0.14, 0.3, STEEL, 0, 4.05, 0, g);
    // two rows of score cells: name bar, sets, points
    for (const [y, pts] of [[3.45, YEL], [2.55, WHITE]]) {
      box(1.5, 0.5, 0.04, '#3b4d61', -1.1, y, 0.13, g).castShadow = false;
      for (let i = 0; i < 3; i++) box(0.42, 0.5, 0.04, i === 2 ? pts : '#e8edf2', 0.25 + i * 0.6, y, 0.13, g).castShadow = false;
    }
  }
  {
    const g = item('t_umpireChair', 0, CZ - 6.3, { labelY: 2.0, hitBox: [1.3, 2.3, 1.3] });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.1, 2.3, 0.1, WHITE, sx * 0.5, 1.15, sz * 0.5, g).rotation.z = -sx * 0.06;
    box(1.1, 0.1, 1.1, WHITE, 0, 2.2, 0, g);
    box(1.1, 0.8, 0.1, '#2f7fc1', 0, 2.65, -0.5, g);
    for (let i = 0; i < 4; i++) box(0.8, 0.07, 0.07, WHITE, 0, 0.45 + i * 0.5, 0.5, g);
  }
  {
    const g = item('t_umpire', 0, CZ - 6.3, { labelY: 2.4, y: 1.75, hitBox: [0.8, 2.2, 0.8] });
    g.rotation.y = -HP; // facing the court
    const arms = person(g, { shirt: '#1f3a5f', pants: WHITE, hair: '#8d959d' });
    arms[0].rotation.z = 0.6;
    updaters.push((t) => (arms[1].rotation.z = 0.6 + Math.max(0, Math.sin(t * 0.9)) * 1.6));
  }

  // ------------------------------------------------------------------ players (each shows one stroke)
  function racket(parent, c = RED) {
    const r = new THREE.Group();
    parent.add(r);
    box(0.07, 0.5, 0.07, K, 0, -0.95, 0, r);
    const head = torus(0.3, 0.045, c, 0, -1.5, 0, r);
    head.rotation.y = HP;
    head.scale.set(1, 1.25, 1);
    box(0.02, 0.62, 0.46, '#f4f6c8', 0, -1.5, 0, r).castShadow = false;
    return r;
  }
  function player(word, x, z, faceBack, look, pose) {
    const g = item(word, x, z, { labelY: 2.7, scale: 1.12, hitBox: [1.1, 2.4, 1.2] });
    if (faceBack) g.rotation.y = Math.PI;
    const arms = person(g, look);
    box(0.5, 0.1, 0.76, look.pants, 0, 0.74, 0, g);
    pose(arms, racket(arms[1]), g);
  }
  player('t_serve', -10.4, CZ + 2.2, false, { shirt: WHITE, pants: '#1f3a5f', hair: K }, (arms, rk, g) => {
    const b = ball(0.12, YEL, 0.5, 3.3, -0.4, g, 1);
    updaters.push((t) => {
      const k = (t * 0.7) % 1; // toss, reach, swing
      arms[0].rotation.z = 0.3 + Math.sin(Math.min(1, k * 2) * Math.PI) * 2.6;
      arms[1].rotation.z = 2.2 + Math.sin(k * Math.PI * 2) * 0.9;
      b.position.y = 2.4 + Math.sin(Math.min(1, k * 1.6) * Math.PI) * 1.3;
      b.visible = k < 0.62;
    });
  });
  player('t_volley', -1.7, CZ - 2.2, false, { shirt: '#35b5a4', pants: WHITE, hair: '#5a3a22' }, (arms, rk) => {
    arms[0].rotation.z = 1.2;
    updaters.push((t) => (arms[1].rotation.z = 2.0 + Math.sin(t * 3) * 0.25));
  });
  player('t_forehand', 10.2, CZ - 2.4, true, { shirt: RED, pants: K, hair: K }, (arms, rk) => {
    arms[0].rotation.z = 1.0;
    updaters.push((t) => {
      arms[1].rotation.z = 1.2;
      arms[1].rotation.y = -1.1 + Math.sin(t * 2.2) * 0.9; // swing on the racket-hand side
    });
  });
  player('t_backhand', 5.6, CZ + 2.0, true, { shirt: ORANGE, pants: WHITE, hair: '#e3c08d' }, (arms, rk) => {
    updaters.push((t) => {
      const s = 1.0 + Math.sin(t * 2.2) * 0.9; // both hands swing across the body
      arms[1].rotation.z = 1.2;
      arms[1].rotation.y = s;
      arms[0].rotation.z = 1.2;
      arms[0].rotation.y = s - 0.5;
    });
  });

  // ------------------------------------------------------------------ coaching corner and gear (front)
  {
    const g = item('t_coach', 6.4, 7.6, { labelY: 2.7, scale: 1.12, hitBox: [0.9, 2.3, 1.0] });
    g.rotation.y = 0.4;
    const arms = person(g, { shirt: '#2f7fc1', pants: K, hair: '#5a3a22' });
    box(0.66, 0.12, 0.66, WHITE, -0.02, 2.14, 0, g);
    box(0.3, 0.06, 0.5, WHITE, 0.4, 2.1, 0, g);
    arms[0].rotation.z = 1.5;
    ball(0.11, YEL, 0.02, -0.82, 0, arms[0], 1);
    racket(arms[1], '#2f7fc1');
    arms[1].rotation.z = 0.4;
  }
  {
    const g = item('t_ballBasket', 8.2, 7.9, { labelY: 2.0, hitBox: [0.9, 1.5, 0.9] });
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.05, 1.0, 0.05, STEEL, sx * 0.34, 0.5, sz * 0.3, g);
    box(0.8, 0.5, 0.7, '#8d959d', 0, 1.15, 0, g);
    box(0.7, 0.06, 0.6, '#5b6470', 0, 1.39, 0, g).castShadow = false;
    for (const [x, z] of [[-0.2, -0.15], [0.15, -0.1], [-0.05, 0.16], [0.24, 0.18], [-0.26, 0.14]]) ball(0.12, YEL, x, 1.46, z, g, 1);
    box(0.05, 0.4, 0.74, STEEL, 0, 1.6, 0, g);
  }
  {
    const g = item('t_ballMachine', 2.6, 8.4, { labelY: 1.9 });
    g.rotation.y = 0.6;
    box(1.0, 0.9, 1.2, '#2f7fc1', 0, 0.6, 0, g);
    box(0.8, 0.5, 1.0, '#8d959d', 0, 1.25, 0, g);
    for (const [x, z] of [[-0.2, -0.2], [0.2, 0.1], [-0.1, 0.25], [0.2, -0.3]]) ball(0.12, YEL, x, 1.55, z, g, 1);
    rodZ(0.16, 0.3, K, 0, 0.8, -0.72, g, 10);
    for (const s of [-1, 1]) rodX(0.18, 0.12, K, s * 0.56, 0.18, 0.2, g, 10);
    const shot = ball(0.12, YEL, 0, 0.8, -0.9, g, 1);
    updaters.push((t) => {
      const k = (t * 0.8) % 1;
      shot.position.set(0, 0.8 + Math.sin(k * Math.PI) * 0.9, -0.9 - k * 3.2);
    });
  }
  {
    const g = item('t_cone', -1.6, 8.6, { labelY: 1.2, hit: [0.9, 0.3] });
    for (const [x, z] of [[0, 0], [1.0, 0.5], [-0.9, 0.6]]) {
      cone(0.26, 0.62, ORANGE, x, 0.33, z, g, 8);
      box(0.6, 0.05, 0.6, ORANGE, x, 0.025, z, g);
      cyl(0.17, 0.2, 0.1, WHITE, x, 0.28, z, g, 8).castShadow = false;
    }
  }
  {
    const g = item('t_racket', -8.6, 7.4, { labelY: 1.0, scale: 1.5, hit: [0.75, 0.1] });
    g.rotation.y = 0.5;
    rodX(0.045, 0.6, K, -0.55, 0.06, 0, g, 6);
    const head = torus(0.34, 0.05, RED, 0.18, 0.06, 0, g);
    head.rotation.x = HP;
    head.scale.set(1.25, 1, 1);
    box(0.7, 0.02, 0.5, '#f4f6c8', 0.18, 0.06, 0, g).castShadow = false;
    box(0.2, 0.05, 0.12, RED, -0.2, 0.06, 0, g);
  }
  {
    const g = item('t_ball', -6.2, 6.9, { labelY: 1.0, scale: 1.3, hit: [0.6, 0.2] });
    for (const [x, z] of [[0, 0], [0.42, 0.2], [0.12, 0.45]]) {
      ball(0.2, YEL, x, 0.2, z, g, 2);
      torus(0.2, 0.02, WHITE, x, 0.2, z, g).rotation.set(0.6, x * 3, 0.4);
    }
  }
  {
    const g = item('t_ballCan', -5.0, 9.2, { labelY: 1.4, scale: 1.25, hit: [0.4, 0.4] });
    cyl(0.2, 0.2, 0.8, '#e8f0c0', 0, 0.4, 0, g, 10);
    cyl(0.205, 0.205, 0.3, RED, 0, 0.35, 0, g, 10).castShadow = false;
    cyl(0.21, 0.21, 0.07, K, 0, 0.83, 0, g, 10);
    for (const y of [0.2, 0.6]) ball(0.15, YEL, 0.02, y, 0.07, g, 1).castShadow = false;
  }
  {
    const g = item('t_overgrip', -7.0, 9.7, { labelY: 0.8, scale: 1.3, hit: [0.45, 0.12] });
    for (const [x, c] of [[-0.25, WHITE], [0.05, '#35b5a4'], [0.35, '#e94f8a']]) {
      cyl(0.14, 0.14, 0.2, c, x, 0.1, 0, g, 10);
      cyl(0.06, 0.06, 0.21, K, x, 0.1, 0, g, 8);
    }
  }
  {
    const g = item('t_bag', -10.0, 9.4, { labelY: 1.5, hit: [0.9, 0.4] });
    g.rotation.y = 0.3;
    const b = rodZ(0.42, 2.0, '#2f7fc1', 0, 0.42, 0, g, 8);
    b.scale.set(1, 1, 0.75);
    box(0.5, 0.36, 1.2, '#1f5f96', 0.3, 0.45, 0, g);
    for (const z of [-0.5, 0.5]) torus(0.22, 0.04, K, 0, 0.8, z, g).rotation.y = HP;
    rodZ(0.05, 0.5, K, -0.05, 0.9, 1.1, g, 6);
    torus(0.16, 0.035, RED, -0.05, 0.9, 1.45, g).rotation.x = HP;
  }
  {
    const g = item('t_shoes', -8.4, 10.5, { labelY: 0.9, scale: 1.5, hit: [0.5, 0.15] });
    for (const [x, r] of [[-0.18, 0.15], [0.2, -0.2]]) {
      const s = new THREE.Group();
      s.position.x = x;
      s.rotation.y = r;
      g.add(s);
      box(0.24, 0.08, 0.6, '#d8dde2', 0, 0.04, 0, s);
      box(0.22, 0.2, 0.34, WHITE, 0, 0.18, -0.12, s);
      box(0.22, 0.11, 0.26, WHITE, 0, 0.135, 0.16, s);
      box(0.23, 0.05, 0.3, '#2f7fc1', 0, 0.12, 0.02, s).castShadow = false;
    }
  }
  {
    const g = item('t_cap', -3.6, 10.4, { labelY: 0.9, scale: 1.3, hit: [0.45, 0.15] });
    const d = ball(0.3, WHITE, 0, 0.06, 0, g, 2);
    d.scale.set(1, 0.75, 1);
    box(0.5, 0.05, 0.4, '#2f7fc1', 0.38, 0.06, 0, g);
    ball(0.05, '#2f7fc1', 0, 0.3, 0, g, 0);
  }
  {
    const g = item('t_wristband', -2.0, 10.7, { labelY: 0.7, scale: 1.3, hit: [0.4, 0.1] });
    for (const [x, c] of [[-0.2, RED], [0.25, WHITE]]) {
      cyl(0.17, 0.17, 0.2, c, x, 0.1, 0, g, 10);
      cyl(0.12, 0.12, 0.21, K, x, 0.1, 0, g, 8);
    }
  }
  {
    const g = item('t_trophy', 10.4, 9.8, { labelY: 2.2 });
    box(0.9, 0.5, 0.9, WOOD, 0, 0.25, 0, g);
    box(0.5, 0.14, 0.5, K, 0, 0.57, 0, g);
    cyl(0.07, 0.12, 0.4, '#e9b730', 0, 0.84, 0, g, 8);
    cyl(0.38, 0.14, 0.6, '#f2c230', 0, 1.34, 0, g, 10);
    for (const s of [-1, 1]) torus(0.16, 0.04, '#e9b730', s * 0.4, 1.36, 0, g);
  }
}
