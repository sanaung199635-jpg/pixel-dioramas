// Workshop stations 02, 04, 07, 08, 09–11 and 12.
import * as THREE from 'three';
import { MAT, at, cyl, rbox, shadowed, tube } from './kit';

const phys = (color: number, roughness: number, extra: THREE.MeshPhysicalMaterialParameters = {}) => new THREE.MeshPhysicalMaterial({ color, roughness, ...extra });
const WOOD = phys(0xb08d6a, 0.75);
const FELT = phys(0xece5d6, 1, { sheen: 1, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.6 });
const VELVET = phys(0xe8e2d6, 1, { sheen: 1, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.5 });
const GRIT_FINE = phys(0x9a9d97, 0.9);

// ---------- 02 washing ----------
export interface WashStation { root: THREE.Group; nozzle: THREE.Object3D; gratingTop: number }
export function washStation(): WashStation {
  const root = new THREE.Group();
  root.add(at(rbox(3.6, 0.5, 2.8, 0.08, MAT.enamel), 0, 0.25, 0));
  root.add(at(rbox(3.62, 0.06, 2.82, 0.03, MAT.accent), 0, 0.49, 0));
  const water = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 2.5), MAT.waterSurface);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.47;
  root.add(water);
  for (let i = -6; i <= 6; i++) root.add(at(rbox(0.16, 0.08, 2.3, 0.02, WOOD), i * 0.24, 0.55, 0));
  // hose on a stand
  root.add(at(cyl(0.05, 0.06, 2.8, MAT.steel, 24), -2.2, 1.4, 1.0));
  root.add(at(cyl(0.25, 0.3, 0.06, MAT.darkSteel), -2.2, 0.03, 1.0));
  const nozzle = new THREE.Object3D();
  nozzle.position.set(-1.35, 2.9, 1.15);
  root.add(tube([[-2.2, 2.75, 1.0], [-1.9, 3.05, 1.05], [-1.45, 2.95, 1.12], [-1.35, 2.9, 1.15]], 0.05, MAT.accent));
  const tip = cyl(0.06, 0.04, 0.3, MAT.brass, 24);
  tip.position.copy(nozzle.position);
  tip.rotation.set(0.5, 0, 0.9);
  root.add(tip, nozzle);
  root.userData.info = 'wash';
  return { root, nozzle, gratingTop: 0.59 };
}

// ---------- 04 hand-held angle grinder ----------
export function angleGrinder(): THREE.Group {
  const g = new THREE.Group();
  const body = cyl(0.13, 0.13, 0.9, MAT.accent); body.rotation.z = Math.PI / 2; g.add(body);
  const head = rbox(0.3, 0.26, 0.3, 0.05, MAT.darkSteel); head.position.x = 0.55; g.add(head);
  const disc = cyl(0.32, 0.32, 0.02, MAT.grit); disc.position.set(0.55, -0.2, 0); disc.name = 'disc'; g.add(disc);
  const guard = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.08, 48, 1, true, 0, Math.PI), MAT.sage.clone()));
  (guard.material as THREE.Material).side = THREE.DoubleSide;
  guard.position.set(0.55, -0.17, 0);
  g.add(guard);
  g.userData.info = 'grinder-hand';
  return g;
}

// ---------- 07 lightbox table ----------
export interface Lightbox { root: THREE.Group; panel: THREE.MeshStandardMaterial; top: number; pen: THREE.Group }
export function lightbox(): Lightbox {
  const root = new THREE.Group();
  root.add(at(rbox(4.2, 0.7, 3.0, 0.06, MAT.enamel), 0, 0.35, 0));
  const panel = new THREE.MeshStandardMaterial({ color: 0xf4f2ec, emissive: 0xfffdf6, emissiveIntensity: 0 });
  root.add(at(new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.03, 2.4), panel), 0, 0.715, 0));
  const pen = new THREE.Group();
  const barrel = cyl(0.04, 0.04, 0.7, MAT.accent, 24);
  const tipM = cyl(0.012, 0.03, 0.08, phys(0xb83a2a, 0.5), 16); tipM.position.y = -0.39;
  pen.add(barrel, tipM);
  root.add(pen);
  root.userData.info = 'lightbox';
  return { root, panel, top: 0.73, pen };
}

// ---------- 08 bench core drill: two tube bits, outer then inner ----------
export interface CoreDrill { root: THREE.Group; head: THREE.Group; outerBit: THREE.Group; innerBit: THREE.Group; tableTop: number; headUp: number }
export function coreDrill(ri: number, ro: number, bitLen = 0.9): CoreDrill {
  const root = new THREE.Group();
  root.add(at(rbox(3.4, 0.25, 2.0, 0.05, MAT.enamel), 0.4, 0.125, 0));
  root.add(at(rbox(3.1, 0.06, 1.7, 0.02, MAT.darkSteel), 0.4, 0.28, 0));
  root.add(at(cyl(0.13, 0.13, 3.6, MAT.steel), 0, 2.0, -0.75));
  const head = new THREE.Group();
  root.add(head);
  head.add(at(rbox(0.7, 0.7, 1.1, 0.08, MAT.enamel), 0, 0.95, -0.35));
  head.add(at(rbox(0.72, 0.1, 1.12, 0.03, MAT.accent), 0, 0.65, -0.35));
  head.add(at(cyl(0.3, 0.3, 0.6, MAT.sage), 0, 1.55, -0.35));
  head.add(at(cyl(0.09, 0.09, 0.4, MAT.steel), 0, 0.45, 0));
  head.add(tube([[0.35, 0.9, -0.1], [0.75, 1.0, 0.2], [0.95, 1.3, 0.45]], 0.025, MAT.steel));
  const bit = (r: number) => {
    const g = new THREE.Group();
    const m = MAT.steel.clone(); m.side = THREE.DoubleSide;
    g.add(at(cyl(r + 0.012, r + 0.012, bitLen, m, 96, true), 0, -bitLen / 2, 0));
    g.add(at(cyl(r + 0.016, r + 0.016, 0.05, MAT.grit, 96, true), 0, -bitLen + 0.02, 0));
    g.add(at(cyl(r + 0.03, r + 0.03, 0.06, MAT.darkSteel), 0, 0, 0));
    g.position.y = 0.25;
    return g;
  };
  const outerBit = bit(ro), innerBit = bit(ri);
  head.add(outerBit, innerBit);
  root.add(tube([[-0.3, 3.2, -0.2], [-0.45, 2.9, 0.1], [-0.2, 2.6, 0.3]], 0.025, MAT.rubber));
  root.userData.info = 'drill';
  return { root, head, outerBit, innerBit, tableTop: 0.31, headUp: 2.3 };
}

// ---------- 09–11 grinding bench with interchangeable heads ----------
export interface GrindBench { root: THREE.Group; spindle: THREE.Vector3; wheel: THREE.Group; drum: THREE.Group; buff: THREE.Group; spinning: THREE.Object3D[] }
// the coarse wheel carries its own splash guard (open towards the operator)
export function grindBench(): GrindBench {
  const root = new THREE.Group();
  root.add(at(rbox(3.4, 0.9, 1.7, 0.08, MAT.enamel), -0.4, 0.45, 0));
  root.add(at(rbox(3.42, 0.07, 1.72, 0.03, MAT.accent), -0.4, 0.86, 0));
  root.add(at(rbox(1.5, 0.75, 0.9, 0.1, MAT.sage), -1.1, 1.3, 0));
  const shaft = cyl(0.06, 0.06, 1.7, MAT.steel); shaft.rotation.z = Math.PI / 2; shaft.position.set(0.35, 1.35, 0); root.add(shaft);
  const bear = cyl(0.17, 0.17, 0.3, MAT.darkSteel); bear.rotation.z = Math.PI / 2; bear.position.set(-0.2, 1.35, 0); root.add(bear);
  root.add(at(rbox(0.3, 0.5, 0.4, 0.04, MAT.darkSteel), -0.2, 1.05, 0));
  const spindle = new THREE.Vector3(1.0, 1.35, 0);
  // coarse wheel (09)
  const wheel = new THREE.Group();
  const w = cyl(0.7, 0.7, 0.28, MAT.grit, 128); w.rotation.z = Math.PI / 2; wheel.add(w);
  const fl = cyl(0.22, 0.22, 0.34, MAT.steel); fl.rotation.z = Math.PI / 2; wheel.add(fl);
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; const b = cyl(0.025, 0.025, 0.36, MAT.darkSteel, 12); b.rotation.z = Math.PI / 2; b.position.set(0, Math.cos(a) * 0.15, Math.sin(a) * 0.15); wheel.add(b); }
  // sanding drum that passes through the bangle (10)
  const drum = new THREE.Group();
  const d = cyl(0.18, 0.18, 0.9, GRIT_FINE, 64); d.rotation.z = Math.PI / 2; d.position.x = 0.35; drum.add(d);
  const dc = cyl(0.19, 0.19, 0.06, MAT.darkSteel, 64); dc.rotation.z = Math.PI / 2; dc.position.x = -0.1; drum.add(dc);
  // felt buff (11)
  const buff = new THREE.Group();
  const bf = cyl(0.2, 0.2, 0.9, FELT, 64); bf.rotation.z = Math.PI / 2; bf.position.x = 0.35; buff.add(bf);
  const bc = cyl(0.21, 0.21, 0.06, MAT.brass, 64); bc.rotation.z = Math.PI / 2; bc.position.x = -0.1; buff.add(bc);
  const gm = MAT.sage.clone(); gm.side = THREE.DoubleSide;
  const guard = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.4, 96, 1, true, Math.PI * 0.6, Math.PI * 0.8), gm));
  guard.rotation.z = Math.PI / 2;
  wheel.add(guard);
  for (const h of [wheel, drum, buff]) { h.position.copy(spindle); root.add(h); }
  root.add(tube([[0.2, 2.5, -0.5], [0.7, 2.4, -0.2], [1.0, 2.25, 0.15]], 0.025, MAT.rubber));
  const tip = cyl(0.025, 0.018, 0.12, MAT.brass, 16); tip.position.set(1.0, 2.18, 0.18); root.add(tip);
  root.userData.info = 'grind-bench';
  return { root, spindle, wheel, drum, buff, spinning: [w, d, bf] };
}

// ---------- 12 showcase ----------
export interface Showcase { root: THREE.Group; top: number; cradle: THREE.Mesh; caliper: THREE.Group; lamp: THREE.Group }
export function showcase(): Showcase {
  const root = new THREE.Group();
  const r = 1.3, h = 1.1, c = 0.03;
  const lathe = (pts: [number, number][], m: THREE.Material) => shadowed(new THREE.Mesh(new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), 128), m));
  root.add(lathe([[0.001, 0], [r - c, 0], [r, c], [r, h - c * 2], [r - c * 2, h], [0.001, h]], MAT.plinth));
  root.add(lathe([[r * 0.995, h - 0.015], [r * 1.005, h - 0.015], [r * 1.005, h - 0.005], [r * 0.995, h - 0.005]], MAT.brass));
  const velvet = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.04, 96), VELVET));
  velvet.position.y = h + 0.02;
  root.add(velvet);
  const cradle = rbox(0.9, 0.1, 0.36, 0.05, VELVET);
  cradle.position.y = h + 0.09;
  root.add(cradle);
  // vernier caliper (simplified)
  const caliper = new THREE.Group();
  caliper.add(at(rbox(1.3, 0.06, 0.02, 0.01, MAT.steel), 0, 0, 0));
  caliper.add(at(rbox(0.05, 0.32, 0.025, 0.01, MAT.steel), -0.6, -0.17, 0));
  const jaw = at(rbox(0.12, 0.34, 0.03, 0.01, MAT.steel), 0.2, -0.16, 0);
  jaw.name = 'jaw';
  caliper.add(jaw);
  caliper.visible = false;
  root.add(caliper);
  // inspection lamp
  const lamp = new THREE.Group();
  lamp.add(at(cyl(0.12, 0.2, 0.25, MAT.darkSteel), 0, 0, 0));
  lamp.add(at(cyl(0.11, 0.11, 0.01, new THREE.MeshBasicMaterial({ color: 0xfffbea })), 0, -0.13, 0));
  lamp.visible = false;
  root.add(lamp);
  root.userData.info = 'showcase';
  return { root, top: h + 0.04, cradle, caliper, lamp };
}
