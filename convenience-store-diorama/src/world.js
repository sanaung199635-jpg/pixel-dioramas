// The lot: layered display base, parking, apron, sidewalk and street furniture.
import * as THREE from 'three';
import { rng, pick, repeatTex, BRAND } from './textures.js';
import { add, mat, boxGeo, STORE } from './store.js';

export const LOT = { x0: -11, x1: 7.5, z0: -8, z1: 8 };
export const SIDEWALK_Z = 5.4;
export const APRON = { x0: -9.6, x1: 3.6, z0: STORE.z1, z1: 1.7 };

export function buildLot(root, tex, snowMat) {
  const W = LOT.x1 - LOT.x0;
  const D = LOT.z1 - LOT.z0;
  const surfaces = []; // materials that get darker / glossier when wet
  const snowCaps = [];

  // base layers: plinth -> concrete foundation -> ground
  const lcx = (LOT.x0 + LOT.x1) / 2;
  add(root, new THREE.BoxGeometry(W + 0.7, 0.45, D + 0.7), mat('#34383d', { roughness: 0.6 }), { x: lcx, y: -1.05 });
  add(root, new THREE.BoxGeometry(W + 0.76, 0.05, D + 0.76), mat(BRAND.green, { roughness: 0.5 }), { x: lcx, y: -0.83 });
  const conc = new THREE.MeshStandardMaterial({ map: repeatTex(tex.concrete, 1), color: '#b9b4ab', roughness: 0.95 });
  add(root, boxGeo(W, 0.6, D, 1 / 2), conc, { x: lcx, y: -0.5 });
  const asphalt = new THREE.MeshStandardMaterial({ map: repeatTex(tex.asphalt, 1), color: '#767b81', roughness: 0.92 });
  asphalt.userData.dry = { color: new THREE.Color('#767b81'), rough: 0.92 };
  asphalt.userData.wet = { color: new THREE.Color('#3a3f46'), rough: 0.32 };
  surfaces.push(asphalt);
  add(root, boxGeo(W, 0.2, D, 1 / 2.5), asphalt, { x: (LOT.x0 + LOT.x1) / 2, y: -0.1 });

  // shop apron (light tiles)
  const apron = new THREE.MeshStandardMaterial({ map: repeatTex(tex.tiles, 1), color: '#d9d4cb', roughness: 0.7 });
  apron.userData.dry = { color: new THREE.Color('#d9d4cb'), rough: 0.7 };
  apron.userData.wet = { color: new THREE.Color('#9d9a94'), rough: 0.25 };
  surfaces.push(apron);
  const aw = APRON.x1 - APRON.x0;
  const ad = APRON.z1 - APRON.z0 + 0.4;
  add(root, boxGeo(aw, 0.07, ad, 1 / 1.2), apron, { x: (APRON.x0 + APRON.x1) / 2, y: 0.035, z: APRON.z0 - 0.2 + ad / 2 });
  // apron also wraps the store on the right side
  add(root, boxGeo(1.1, 0.07, 6.2, 1 / 1.2), apron, { x: STORE.x1 + 0.55, y: 0.035, z: -2.6 });

  // sidewalk with curb
  const side = new THREE.MeshStandardMaterial({ map: repeatTex(tex.sidewalk, 1), color: '#bdbab4', roughness: 0.85 });
  side.userData.dry = { color: new THREE.Color('#bdbab4'), rough: 0.85 };
  side.userData.wet = { color: new THREE.Color('#84827e'), rough: 0.3 };
  surfaces.push(side);
  const sd = LOT.z1 - SIDEWALK_Z;
  add(root, boxGeo(W, 0.16, sd, 1 / 2), side, { x: lcx, y: 0.08, z: SIDEWALK_Z + sd / 2 });
  add(root, new THREE.BoxGeometry(W, 0.18, 0.16), mat('#d6d3cc'), { x: lcx, y: 0.09, z: SIDEWALK_Z });

  // parking lines + wheel stops
  const lineMat = mat('#f4f4f0', { roughness: 0.6 });
  for (let i = 0; i <= 6; i++) {
    const x = -10 + i * 2.5;
    add(root, new THREE.BoxGeometry(0.08, 0.01, 3.1), lineMat, { x, y: 0.005, z: 3.65, cast: false });
    if (i < 6) add(root, new THREE.BoxGeometry(1.3, 0.12, 0.18), mat('#c9c6bf'), { x: x + 1.25, y: 0.06, z: 2.2 });
  }
  add(root, new THREE.BoxGeometry(15.1, 0.01, 0.1), lineMat, { x: -2.5, y: 0.005, z: 5.2, cast: false });
  // accessible-space marking
  add(root, new THREE.BoxGeometry(2.4, 0.008, 3.0), mat('#3d77c9', { roughness: 0.7 }), { x: 1.25, y: 0.004, z: 3.65, cast: false });
  add(root, new THREE.BoxGeometry(0.7, 0.012, 0.7), lineMat, { x: 1.25, y: 0.008, z: 3.8, cast: false });

  // manhole + drain grate
  add(root, new THREE.CylinderGeometry(0.35, 0.35, 0.012, 14), mat('#3a3d42', { metalness: 0.4 }), { x: 4.0, y: 0.006, z: 0.9, cast: false });
  add(root, new THREE.BoxGeometry(0.9, 0.012, 0.25), mat('#2c2f33'), { x: -4.0, y: 0.006, z: 5.05, cast: false });

  return { surfaces, snowCaps };
}

// ---------------------------------------------------------------- props
export function buildProps(root, tex, snowMat) {
  const snowCaps = [];
  const lamps = [];
  const r = rng(5);
  const cap = (geo, x, y, z) => snowCaps.push(add(root, geo, snowMat, { x, y, z, cast: false }));

  // car (small hatchback) parked nose-in
  const car = (x, z, color, ry = 0) => {
    const c = new THREE.Group();
    c.position.set(x, 0, z);
    c.rotation.y = ry;
    root.add(c);
    const body = mat(color, { roughness: 0.35, metalness: 0.2 });
    const glassM = mat('#2a3640', { roughness: 0.15, metalness: 0.3 });
    add(c, new THREE.BoxGeometry(1.5, 0.5, 3.0), body, { y: 0.47 });
    add(c, new THREE.BoxGeometry(1.36, 0.45, 1.7), body, { y: 0.93, z: 0.15 });
    add(c, new THREE.BoxGeometry(1.38, 0.32, 1.5), glassM, { y: 0.95, z: 0.15 });
    add(c, new THREE.BoxGeometry(1.2, 0.3, 0.05), glassM, { y: 0.95, z: -0.72, rx: 0.4 });
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) add(c, new THREE.CylinderGeometry(0.27, 0.27, 0.2, 10), mat('#1f2226'), { x: sx * 0.72, y: 0.27, z: sz * 0.95, rz: Math.PI / 2 });
    for (const sx of [-1, 1]) {
      add(c, new THREE.BoxGeometry(0.28, 0.12, 0.04), mat('#fff6d8', { emissive: '#fff1c0', emissiveIntensity: 0.3 }), { x: sx * 0.5, y: 0.55, z: -1.51 });
      add(c, new THREE.BoxGeometry(0.26, 0.1, 0.04), mat('#d62828', { emissive: '#ff3030', emissiveIntensity: 0.3 }), { x: sx * 0.52, y: 0.6, z: 1.51 });
    }
    add(c, new THREE.BoxGeometry(0.5, 0.12, 0.03), mat('#f4f4f0'), { y: 0.36, z: -1.52 });
    snowCaps.push(add(c, new THREE.BoxGeometry(1.4, 0.07, 1.6), snowMat, { y: 1.19, z: 0.15, cast: false }));
    snowCaps.push(add(c, new THREE.BoxGeometry(1.48, 0.05, 0.62), snowMat, { y: 0.75, z: -1.15, cast: false }));
    return c;
  };
  car(-6.25, 3.75, '#e8e6e1');
  car(-3.75, 3.7, '#c8402f', 0.04);

  // scooter
  const sc = new THREE.Group();
  sc.position.set(3.75, 0, 3.4);
  sc.rotation.y = 0.15;
  root.add(sc);
  add(sc, new THREE.BoxGeometry(0.34, 0.32, 1.0), mat('#3c8fd6', { roughness: 0.4 }), { y: 0.48 });
  add(sc, new THREE.BoxGeometry(0.3, 0.12, 0.55), mat('#222'), { y: 0.7, z: 0.15 });
  add(sc, new THREE.BoxGeometry(0.3, 0.6, 0.14), mat('#3c8fd6', { roughness: 0.4 }), { y: 0.68, z: -0.5, rx: -0.25 });
  add(sc, new THREE.BoxGeometry(0.56, 0.04, 0.05), mat('#333'), { y: 1.0, z: -0.58 });
  for (const z of [-0.45, 0.45]) add(sc, new THREE.CylinderGeometry(0.2, 0.2, 0.1, 10), mat('#1f2226'), { y: 0.2, z, rz: Math.PI / 2 });
  snowCaps.push(add(sc, new THREE.BoxGeometry(0.3, 0.05, 0.5), snowMat, { y: 0.79, z: 0.15, cast: false }));

  // bicycles at a rack beside the store
  const bike = (x, z, color) => {
    const b = new THREE.Group();
    b.position.set(x, 0, z);
    b.rotation.y = Math.PI / 2;
    root.add(b);
    const wheel = new THREE.TorusGeometry(0.28, 0.03, 4, 14);
    for (const zz of [-0.42, 0.42]) add(b, wheel, mat('#24272b'), { y: 0.3, z: zz, ry: Math.PI / 2 });
    add(b, new THREE.BoxGeometry(0.04, 0.04, 0.8), mat(color), { y: 0.52, rx: 0.15 });
    add(b, new THREE.BoxGeometry(0.04, 0.42, 0.04), mat(color), { y: 0.45, z: 0.12, rx: -0.3 });
    add(b, new THREE.BoxGeometry(0.12, 0.05, 0.2), mat('#222'), { y: 0.7, z: 0.2 });
    add(b, new THREE.BoxGeometry(0.4, 0.04, 0.04), mat('#333'), { y: 0.78, z: -0.36 });
    add(b, new THREE.BoxGeometry(0.28, 0.16, 0.22), mat('#c9cdd1'), { y: 0.82, z: -0.5 });
  };
  for (let i = 0; i < 3; i++) add(root, new THREE.TorusGeometry(0.3, 0.025, 4, 12, Math.PI), mat('#9aa0a6', { metalness: 0.5 }), { x: 4.4, y: 0.0, z: -5.6 + i * 0.7, ry: Math.PI / 2 });
  bike(4.2, -5.6, '#2f6fd0');
  bike(4.25, -4.9, '#e31b23');

  // vending machines facing the parking lot
  const vend = (x, z, color) => {
    const v = new THREE.Group();
    v.position.set(x, 0, z);
    v.rotation.y = Math.PI / 2;
    root.add(v);
    add(v, new THREE.BoxGeometry(0.9, 1.85, 0.7), mat(color, { roughness: 0.4 }), { y: 0.95 });
    add(v, new THREE.PlaneGeometry(0.72, 1.2), new THREE.MeshStandardMaterial({ map: tex.vending, emissiveMap: tex.vending, emissive: '#ffffff', emissiveIntensity: 0.45, roughness: 0.3 }), { y: 1.15, z: 0.356, cast: false });
    add(v, new THREE.BoxGeometry(0.6, 0.18, 0.06), mat('#1f2328'), { y: 0.35, z: 0.36 });
    snowCaps.push(add(v, new THREE.BoxGeometry(0.94, 0.06, 0.74), snowMat, { y: 1.9, cast: false }));
  };
  vend(6.85, -2.6, '#d93131');
  vend(6.85, -1.6, '#2f6fd0');
  add(root, new THREE.BoxGeometry(0.35, 0.6, 0.35), mat('#3a7f5a'), { x: 6.9, y: 0.3, z: -0.75 });

  // tall pylon sign
  const py = new THREE.Group();
  py.position.set(6.2, 0, -6.4);
  root.add(py);
  add(py, new THREE.BoxGeometry(0.9, 0.3, 0.9), mat('#c9c6bf'), { y: 0.15 });
  add(py, new THREE.BoxGeometry(0.3, 4.2, 0.3), mat('#5a6068', { metalness: 0.3 }), { y: 2.3 });
  const pyMat = new THREE.MeshStandardMaterial({ map: tex.logo, emissiveMap: tex.logo, emissive: '#ffffff', emissiveIntensity: 0.2, roughness: 0.4 });
  add(py, new THREE.BoxGeometry(1.7, 1.25, 0.32), mat('#f7f7f4'), { y: 4.95 });
  add(py, new THREE.PlaneGeometry(1.6, 1.15), pyMat, { y: 4.95, z: 0.165, cast: false });
  add(py, new THREE.PlaneGeometry(1.6, 1.15), pyMat, { y: 4.95, x: 0, z: -0.165, ry: Math.PI, cast: false });
  add(py, new THREE.BoxGeometry(1.7, 0.36, 0.32), mat(BRAND.green), { y: 4.1 });
  add(py, new THREE.BoxGeometry(1.7, 0.14, 0.33), mat(BRAND.orange), { y: 4.35 });
  py.rotation.y = -0.6;
  snowCaps.push(add(py, new THREE.BoxGeometry(1.74, 0.08, 0.36), snowMat, { y: 5.62, cast: false }));

  // outdoor bits by the door: ice chest, bins, A-board, umbrella stand
  add(root, new THREE.BoxGeometry(1.2, 0.85, 0.65), mat('#f4f7fb'), { x: -3.6, y: 0.5, z: 0.15 });
  add(root, new THREE.BoxGeometry(1.0, 0.25, 0.04), mat('#2f6fd0'), { x: -3.6, y: 0.6, z: 0.49 });
  cap(new THREE.BoxGeometry(1.24, 0.06, 0.69), -3.6, 0.96, 0.15);
  for (const [x, col] of [[0.55, '#2f6fd0'], [1.05, '#00845a'], [1.55, '#e8b500']]) {
    add(root, new THREE.BoxGeometry(0.42, 0.75, 0.42), mat('#c9cdd1'), { x, y: 0.45, z: 0.05 });
    add(root, new THREE.BoxGeometry(0.44, 0.06, 0.44), mat(col), { x, y: 0.85, z: 0.05 });
    cap(new THREE.BoxGeometry(0.44, 0.05, 0.44), x, 0.9, 0.05);
  }
  const ab = new THREE.Group();
  ab.position.set(-2.3, 0.07, 1.1);
  ab.rotation.y = 0.3;
  root.add(ab);
  for (const s of [-1, 1]) add(ab, new THREE.BoxGeometry(0.55, 0.8, 0.04), mat('#ffffff'), { y: 0.4, z: s * 0.15, rx: -s * 0.18 });
  add(ab, new THREE.BoxGeometry(0.45, 0.2, 0.05), mat(BRAND.orange), { y: 0.55, z: 0.17, rx: -0.18 });
  add(root, new THREE.CylinderGeometry(0.16, 0.14, 0.5, 10), mat('#5a6068'), { x: -1.95, y: 0.32, z: -0.15 });

  // trees in planters
  const tree = (x, z, s, seed) => {
    const tr = rng(seed);
    const t = new THREE.Group();
    t.position.set(x, 0, z);
    root.add(t);
    add(t, new THREE.BoxGeometry(0.9 * s, 0.4, 0.9 * s), mat('#b9b4ab'), { y: 0.2 });
    add(t, new THREE.CylinderGeometry(0.08 * s, 0.13 * s, 1.5 * s, 6), mat('#6c5240'), { y: 0.4 + 0.75 * s });
    const crown = new THREE.Group();
    crown.position.y = 0.4 + 1.5 * s;
    t.add(crown);
    for (let i = 0; i < 7; i++) {
      const a = tr() * Math.PI * 2;
      const rr = (0.2 + tr() * 0.35) * s;
      const sz = (0.38 + tr() * 0.22) * s;
      add(crown, new THREE.IcosahedronGeometry(sz, 1), mat(pick(tr, ['#5d8a42', '#6f9a48', '#4f7d3a', '#82ab52']), { flatShading: true }), { x: Math.cos(a) * rr, y: tr() * 0.6 * s, z: Math.sin(a) * rr });
      if (i < 4) snowCaps.push(add(crown, new THREE.SphereGeometry(sz * 0.8, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2), snowMat, { x: Math.cos(a) * rr, y: tr() * 0.6 * s + sz * 0.35, z: Math.sin(a) * rr, s: [1, 0.5, 1], cast: false }));
    }
    snowCaps.push(add(t, new THREE.BoxGeometry(0.88 * s, 0.05, 0.88 * s), snowMat, { y: 0.42, cast: false }));
    return crown;
  };
  const crowns = [tree(-10.2, -6.6, 1.1, 11), tree(-10.1, -2.4, 0.9, 12), tree(-10.0, 1.6, 0.85, 13), tree(6.8, 7.0, 0.85, 14), tree(-2.0, 6.9, 0.8, 15), tree(6.7, 4.0, 0.8, 16)];

  // street lamps on the sidewalk
  const lampHeads = [];
  const lamp = (x, z) => {
    add(root, new THREE.CylinderGeometry(0.07, 0.09, 3.8, 6), mat('#4a5058', { metalness: 0.3 }), { x, y: 2.06, z });
    add(root, new THREE.BoxGeometry(0.9, 0.08, 0.08), mat('#4a5058'), { x: x, y: 3.9, z: z - 0.4, ry: Math.PI / 2 });
    const head = add(root, new THREE.BoxGeometry(0.42, 0.12, 0.26), mat('#3b4148'), { x, y: 3.85, z: z - 0.82 });
    const bulb = add(root, new THREE.BoxGeometry(0.34, 0.03, 0.2), new THREE.MeshStandardMaterial({ color: '#fff4d6', emissive: '#ffd27a', emissiveIntensity: 0 }), { x, y: 3.78, z: z - 0.82, cast: false });
    cap(new THREE.BoxGeometry(0.44, 0.05, 0.28), x, 3.93, z - 0.82);
    const light = new THREE.PointLight('#ffd08a', 0, 9, 1.3);
    light.position.set(x, 3.5, z - 0.85);
    root.add(light);
    lamps.push({ bulb, light });
    lampHeads.push(head);
  };
  lamp(-6.4, 7.3);
  lamp(3.6, 7.3);

  // utility poles with sagging wires
  const pole = (x, z) => {
    add(root, new THREE.CylinderGeometry(0.12, 0.16, 6.2, 7), mat('#8d8a84'), { x, y: 3.25, z });
    add(root, new THREE.BoxGeometry(1.4, 0.08, 0.1), mat('#5a5f66'), { x, y: 5.9, z });
    add(root, new THREE.BoxGeometry(1.0, 0.08, 0.1), mat('#5a5f66'), { x, y: 5.4, z });
    add(root, new THREE.CylinderGeometry(0.22, 0.22, 0.5, 8), mat('#9aa0a6'), { x: x + 0.25, y: 4.9, z: z + 0.1 });
  };
  pole(-10.5, 7.4);
  pole(7.1, 7.4);
  const wireMat = new THREE.LineBasicMaterial({ color: '#2f3338' });
  for (const [dy, dx] of [[5.9, -0.6], [5.9, 0.6], [5.4, 0.0]]) {
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      pts.push(new THREE.Vector3(-10.5 + dx + t * 17.6, dy - Math.sin(t * Math.PI) * 0.5, 7.4));
    }
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), wireMat);
    root.add(line);
  }

  // dumpster + gas meter behind the store
  add(root, new THREE.BoxGeometry(1.6, 0.9, 0.9), mat('#3a7f5a'), { x: -6.8, y: 0.5, z: -6.9 });
  add(root, new THREE.BoxGeometry(1.64, 0.08, 0.94), mat('#2f6a4a'), { x: -6.8, y: 0.98, z: -6.9 });
  cap(new THREE.BoxGeometry(1.64, 0.05, 0.94), -6.8, 1.04, -6.9);
  add(root, new THREE.BoxGeometry(0.4, 0.6, 0.25), mat('#c9c6bf'), { x: -2.0, y: 0.4, z: -5.75 });

  return { snowCaps, lamps, crowns };
}
