// Water-cooled slab saw. The blade lies in the machine's x = 0 plane, so a stone
// placed with its stone-frame x axis along world x is cut exactly at CUT_X.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { MAT, at, cyl, rbox, shadowed, tube } from './kit';

export const SAW = {
  bladeRadius: 1.55,
  /** Blade centre z (machine frame). */
  bladeZ: -0.25,
  /** Top of the carriage, where the stone rests. */
  carriageTop: 1.22,
  /** Blade centre heights: parked above the stone, and fully through it. */
  bladeParkedY: 3.5,
  bladeDownY: 1.22 - 0.06 + 1.55,
};

export interface SlabSawHandles {
  root: THREE.Group;
  blade: THREE.Group;
  bladeDisc: THREE.Group;
  carriage: THREE.Group;
  /** Nozzle tips in machine space; they ride with the blade head. */
  nozzles: THREE.Object3D[];
  pickables: THREE.Object3D[];
}

export function slabSaw(): SlabSawHandles {
  const root = new THREE.Group();
  root.name = 'slab-saw';
  const body = new THREE.Group();
  body.userData.info = 'saw';
  root.add(body);
  body.add(at(rbox(5.4, 0.9, 3.4, 0.08, MAT.enamel), 0, 0.45, 0));
  body.add(at(rbox(5.42, 0.08, 3.42, 0.03, MAT.accent), 0, 0.87, 0));
  // coolant tray
  const trayW = 4.9, trayD = 3.0;
  body.add(at(rbox(trayW, 0.06, trayD, 0.02, MAT.darkSteel), 0, 0.93, 0));
  for (const z of [trayD / 2, -trayD / 2]) body.add(at(rbox(trayW, 0.22, 0.05, 0.02, MAT.steel), 0, 1.04, z));
  for (const x of [trayW / 2, -trayW / 2]) body.add(at(rbox(0.05, 0.22, trayD, 0.02, MAT.steel), x, 1.04, 0));
  const water = new THREE.Mesh(new THREE.PlaneGeometry(trayW - 0.1, trayD - 0.1), MAT.waterSurface);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 1.02;
  water.userData.info = 'coolant';
  body.add(water);
  for (const x of [-1.75, 1.75]) {
    const r = cyl(0.05, 0.05, trayD - 0.1, MAT.steel, 24);
    r.rotation.x = Math.PI / 2;
    r.position.set(x, 1.1, 0);
    body.add(r);
  }
  // carriage (moves along z)
  const carriage = new THREE.Group();
  carriage.add(at(rbox(4.0, 0.12, 2.2, 0.03, MAT.sage), 0, 1.16, 0));
  for (const x of [-1.42, 1.42]) carriage.add(at(rbox(0.18, 0.55, 0.9, 0.03, MAT.darkSteel), x, SAW.carriageTop + 0.27, 0));
  root.add(carriage);
  // column
  body.add(at(rbox(0.5, 4.6, 0.6, 0.06, MAT.enamel), 2.15, 3.1, -1.35));
  // blade head: arm, motor, shaft, blade, guard, nozzles — moves vertically as one
  const blade = new THREE.Group();
  blade.userData.info = 'blade';
  root.add(blade);
  blade.add(at(rbox(2.3, 0.45, 0.55, 0.06, MAT.enamel), 1.15, 0, -0.0));
  const motor = cyl(0.36, 0.36, 0.9, MAT.sage); motor.rotation.z = Math.PI / 2; motor.position.set(1.5, 0, 0); blade.add(motor);
  const fins = cyl(0.38, 0.38, 0.06, MAT.accent); fins.rotation.z = Math.PI / 2; fins.position.set(1.08, 0, 0); blade.add(fins);
  const shaft = cyl(0.06, 0.06, 1.2, MAT.steel); shaft.rotation.z = Math.PI / 2; shaft.position.set(0.5, 0, 0); blade.add(shaft);
  const disc = new THREE.Group();
  const R = SAW.bladeRadius;
  const plate = cyl(R - 0.03, R - 0.03, 0.018, MAT.steel, 160); plate.rotation.z = Math.PI / 2; disc.add(plate);
  const segN = 44;
  const segs = new THREE.InstancedMesh(new RoundedBoxGeometry(0.022, 0.05, 0.16, 2, 0.006), MAT.grit, segN);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i < segN; i++) {
    const a = (i / segN) * Math.PI * 2;
    q.setFromEuler(e.set(-a, 0, 0));
    m4.compose(new THREE.Vector3(0, Math.cos(a) * R, Math.sin(a) * R), q, new THREE.Vector3(1, 1, 1));
    segs.setMatrixAt(i, m4);
  }
  segs.castShadow = true;
  disc.add(segs);
  const hub = cyl(0.28, 0.28, 0.1, MAT.darkSteel); hub.rotation.z = Math.PI / 2; disc.add(hub);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const b = cyl(0.03, 0.03, 0.13, MAT.steel, 12);
    b.rotation.z = Math.PI / 2;
    b.position.set(0, Math.cos(a) * 0.18, Math.sin(a) * 0.18);
    disc.add(b);
  }
  blade.add(disc);
  const guardMat = MAT.accent.clone();
  guardMat.side = THREE.DoubleSide;
  const guard = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(R + 0.14, R + 0.14, 0.3, 96, 1, true, Math.PI * 0.12, Math.PI * 0.76), guardMat));
  guard.rotation.z = Math.PI / 2;
  blade.add(guard);
  const nozzles: THREE.Object3D[] = [];
  for (const sx of [-1, 1]) {
    const tip = new THREE.Object3D();
    tip.position.set(sx * 0.12, -0.3, R * 0.55);
    blade.add(tube([[sx * 0.5, 1.0, 0.3], [sx * 0.36, 0.6, R * 0.55 - 0.2], [sx * 0.12, -0.2, R * 0.55]], 0.035, MAT.rubber));
    const brass = cyl(0.03, 0.02, 0.14, MAT.brass, 16);
    brass.position.copy(tip.position);
    brass.rotation.x = 0.6;
    blade.add(brass, tip);
    nozzles.push(tip);
  }
  blade.position.set(0, SAW.bladeParkedY, SAW.bladeZ);
  // control panel
  const panel = rbox(0.9, 0.5, 0.08, 0.03, MAT.sage);
  panel.position.set(-1.9, 0.55, 1.72);
  body.add(panel);
  for (const [c, x] of [[0x3cc27a, -0.25], [0xe0533d, 0], [0xf2c14e, 0.25]] as const) {
    const b = cyl(0.06, 0.06, 0.05, new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.4 }), 24);
    b.rotation.x = Math.PI / 2;
    b.position.set(-1.9 + x, 0.6, 1.77);
    body.add(b);
  }
  for (const [x, z] of [[-2.5, -1.5], [2.5, -1.5], [-2.5, 1.5], [2.5, 1.5]]) body.add(at(cyl(0.12, 0.15, 0.08, MAT.rubber, 24), x, 0.04, z));
  return { root, blade, bladeDisc: disc, carriage, nozzles, pickables: [body, blade] };
}
