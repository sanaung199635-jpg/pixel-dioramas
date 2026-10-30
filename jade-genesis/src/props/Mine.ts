// Station 01: illustrative open-pit diorama (not modelled on any real mine).
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { TerrainMaterial } from '../materials/TerrainMaterial';
import { noise3 } from '../stone/noise';
import { MAT, at, cyl, mergeByMaterial, mulberry, rbox } from './kit';

const ROCK = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, flatShading: false });
const LEAF = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85 });
const BARK = new THREE.MeshStandardMaterial({ color: 0x6b5644, roughness: 0.9 });
const POND = new THREE.MeshPhysicalMaterial({ color: 0x6f8a80, roughness: 0.06, metalness: 0, transparent: true, opacity: 0.9, clearcoat: 1, clearcoatRoughness: 0.05 });
// ---------------------------------------------------------------- machinery
const PAINT = new THREE.MeshPhysicalMaterial({ color: 0xd9a63f, roughness: 0.42, clearcoat: 0.35, clearcoatRoughness: 0.35 });
const PAINT_DARK = new THREE.MeshPhysicalMaterial({ color: 0x3b3d3e, roughness: 0.55, clearcoat: 0.2 });
/** Undercarriage steel with dried mud. */
const GRIME = new THREE.MeshStandardMaterial({ color: 0x4a443d, roughness: 0.92, metalness: 0.25 });
const CHROME = new THREE.MeshStandardMaterial({ color: 0xd9dcde, roughness: 0.14, metalness: 1 });
const PIN = new THREE.MeshStandardMaterial({ color: 0x9a9c9c, roughness: 0.35, metalness: 1 });
const CAB_GLASS = new THREE.MeshPhysicalMaterial({ color: 0x24302f, roughness: 0.05, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.03 });

/** A flat outline extruded along z, centred on z = 0, with softly bevelled edges. */
function plate(pts: [number, number][], depth: number, mat: THREE.Material, bevel = 0.006): THREE.Mesh {
  const s = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));
  const g = new THREE.ExtrudeGeometry(s, { depth: depth - bevel * 2, bevelEnabled: true, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 2, curveSegments: 10 });
  g.translate(0, 0, -(depth - bevel * 2) / 2);
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}

/** A pin through a joint (axis along z). */
function pin(x: number, y: number, z: number, r: number, len: number): THREE.Mesh {
  const m = cyl(r, r, len, PIN, 16);
  m.rotation.x = Math.PI / 2;
  m.position.set(x, y, z);
  return m;
}

/** Arc points (x, y) around (cx, cy) from a0 to a1 (radians). */
function arc(cx: number, cy: number, r: number, a0: number, a1: number, n: number): [number, number][] {
  return Array.from({ length: n + 1 }, (_, i) => { const a = a0 + ((a1 - a0) * i) / n; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r] as [number, number]; });
}

/**
 * Hydraulic ram between a point on a parent group and a point on a child group
 * that turns about its own z axis. The barrel hangs from the parent; the rod
 * slides out of it to reach the child. Returns the per-frame update.
 */
function ram(parent: THREE.Group, a: [number, number, number], child: THREE.Group, b: [number, number], range: [number, number], r: number): () => void {
  const g = new THREE.Group();
  g.position.set(...a);
  parent.add(g);
  const reach = (rot: number) => {
    const c = Math.cos(rot), s = Math.sin(rot);
    return new THREE.Vector2(child.position.x + c * b[0] - s * b[1] - a[0], child.position.y + s * b[0] + c * b[1] - a[1]);
  };
  let lo = Infinity, hi = 0;
  for (let i = 0; i <= 24; i++) { const l = reach(range[0] + ((range[1] - range[0]) * i) / 24).length(); lo = Math.min(lo, l); hi = Math.max(hi, l); }
  const lb = lo * 0.92, lr = Math.max(hi - lb + 0.02, lo * 0.5);
  const barrel = cyl(r, r, lb, PAINT, 16);
  barrel.rotation.z = -Math.PI / 2;
  barrel.position.x = lb / 2;
  const cap = cyl(r * 1.18, r * 1.18, 0.014, PAINT, 16);
  cap.rotation.z = -Math.PI / 2;
  cap.position.x = lb - 0.007;
  const rod = cyl(r * 0.55, r * 0.55, lr, CHROME, 12);
  rod.rotation.z = -Math.PI / 2;
  rod.name = 'rod'; // moves: keep it out of the merge
  g.add(barrel, cap, rod);
  mergeByMaterial(g);
  return () => {
    const v = reach(child.rotation.z);
    g.rotation.z = Math.atan2(v.y, v.x);
    rod.position.x = v.length() - lr / 2;
  };
}

export interface Excavator {
  root: THREE.Group;
  boom: THREE.Group;
  stick: THREE.Group;
  bucket: THREE.Group;
  /** Re-aim the hydraulic rams after boom/stick/bucket rotations change. */
  sync(): void;
}

/**
 * Hydraulic excavator at diorama scale. Joint layout is fixed by the animation:
 * boom pivot (0.18, 0.18, -0.08) on the upper frame, stick pivot 0.64 along the
 * boom, bucket pivot 0.48 along the stick; all three turn about their z axis.
 */
const CAB = new THREE.Vector3(0.12, 0.04, 0.11);

export function excavator(): Excavator {
  const root = new THREE.Group();
  // ---- undercarriage: two crawler tracks on a car body
  const shoe = new THREE.BoxGeometry(0.03, 0.016, 0.12);
  const R = 0.062, HX = 0.3, CY = 0.068;
  const loop = 2 * HX * 2 + 2 * Math.PI * R, N = 48, pitch = loop / N;
  const shoes = new THREE.InstancedMesh(shoe, GRIME, N * 2);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
  let k = 0;
  for (const z of [-0.2, 0.2]) {
    for (let i = 0; i < N; i++) {
      let s = i * pitch, x: number, y: number, ang: number;
      if (s < 2 * HX) { x = -HX + s; y = CY + R; ang = 0; }
      else if ((s -= 2 * HX) < Math.PI * R) { const a = Math.PI / 2 - s / R; x = HX + Math.cos(a) * R; y = CY + Math.sin(a) * R; ang = a - Math.PI / 2; }
      else if ((s -= Math.PI * R) < 2 * HX) { x = HX - s; y = CY - R; ang = Math.PI; }
      else { s -= 2 * HX; const a = -Math.PI / 2 - s / R; x = -HX + Math.cos(a) * R; y = CY + Math.sin(a) * R; ang = a - Math.PI / 2; }
      q.setFromEuler(e.set(0, 0, ang));
      shoes.setMatrixAt(k++, m4.compose(v.set(x, y, z), q, one));
    }
    root.add(at(rbox(2 * HX, 0.07, 0.07, 0.015, GRIME), 0, CY, z));
    for (const x of [-HX, HX]) { const w = cyl(0.05, 0.05, 0.085, PAINT_DARK, 20); w.rotation.x = Math.PI / 2; w.position.set(x, CY, z); root.add(w); }
    for (let i = 0; i < 4; i++) { const w = cyl(0.022, 0.022, 0.08, PIN, 12); w.rotation.x = Math.PI / 2; w.position.set(-0.18 + i * 0.12, CY - 0.035, z); root.add(w); }
  }
  shoes.castShadow = shoes.receiveShadow = true;
  root.add(shoes);
  root.add(at(rbox(0.3, 0.06, 0.34, 0.015, GRIME), 0, 0.12, 0));
  root.add(at(cyl(0.13, 0.13, 0.04, PAINT_DARK, 32), 0, 0.17, 0));

  // ---- upper structure
  const upper = new THREE.Group();
  upper.position.y = 0.2;
  root.add(upper);
  upper.add(at(rbox(0.62, 0.04, 0.44, 0.012, PAINT_DARK), -0.04, 0.02, 0));
  upper.add(at(rbox(0.34, 0.16, 0.42, 0.025, PAINT), -0.17, 0.12, 0));
  // engine-hood louvres and exhaust
  for (let i = 0; i < 5; i++) upper.add(at(rbox(0.012, 0.004, 0.16, 0.002, PAINT_DARK), -0.27 + i * 0.03, 0.202, -0.08));
  upper.add(at(cyl(0.012, 0.012, 0.07, PAINT_DARK, 12), -0.1, 0.235, -0.15));
  // counterweight: rounded tail in dark paint
  const cw = plate([...arc(-0.33, 0, 0.21, Math.PI * 0.62, Math.PI * 1.38, 14), [-0.31, -0.2], [-0.31, 0.2]], 0.15, PAINT_DARK, 0.01);
  cw.rotation.x = -Math.PI / 2;
  cw.position.set(0.07, 0.12, 0);
  upper.add(cw);
  // cab: frame, tinted glass, roof
  // cab parts sit directly on the upper frame so they merge with it
  const cab = { add: (...o: THREE.Object3D[]) => { for (const c of o) { c.position.add(CAB); upper.add(c); } } };
  cab.add(at(rbox(0.21, 0.07, 0.18, 0.015, PAINT), 0, 0.035, 0));
  cab.add(at(rbox(0.2, 0.17, 0.17, 0.02, CAB_GLASS), 0, 0.15, 0));
  for (const [x, z] of [[0.095, 0.08], [0.095, -0.08], [-0.095, 0.08], [-0.095, -0.08]]) cab.add(at(rbox(0.018, 0.17, 0.018, 0.005, PAINT_DARK), x, 0.15, z));
  cab.add(at(rbox(0.23, 0.02, 0.19, 0.008, PAINT), 0.005, 0.245, 0));
  // handrail along the far side of the house
  for (const x of [-0.3, -0.17, -0.04]) upper.add(at(cyl(0.004, 0.004, 0.06, PIN, 6), x, 0.23, -0.2));
  upper.add(at(rbox(0.28, 0.008, 0.008, 0.003, PIN), -0.17, 0.26, -0.2));
  // boom foot brackets
  for (const z of [-0.12, -0.04]) upper.add(at(rbox(0.12, 0.12, 0.012, 0.004, PAINT_DARK), 0.17, 0.12, z));

  // ---- boom: a bent box section
  const boom = new THREE.Group();
  boom.position.set(0.18, 0.18, -0.08);
  upper.add(boom);
  boom.add(plate([[-0.035, -0.035], [0.3, 0.035], [0.67, -0.025], [0.67, 0.035], [0.31, 0.105], [-0.035, 0.035]], 0.07, PAINT, 0.008));
  boom.add(pin(0, 0, 0, 0.018, 0.1), pin(0.64, 0, 0, 0.016, 0.09));

  // ---- stick
  const stick = new THREE.Group();
  stick.position.set(0.64, 0, 0);
  boom.add(stick);
  stick.add(plate([[-0.08, 0.02], [-0.06, 0.05], [0.5, 0.02], [0.5, -0.022], [-0.03, -0.035], [-0.08, -0.01]], 0.055, PAINT, 0.007));
  stick.add(pin(0.48, 0, 0, 0.014, 0.08));

  // ---- bucket: curved shell, side plates and teeth; open towards +y
  const bucket = new THREE.Group();
  bucket.position.set(0.48, 0, 0);
  stick.add(bucket);
  const BC: [number, number] = [0.07, 0.03];
  const outer = arc(BC[0], BC[1], 0.1, Math.PI * 0.95, Math.PI * 2.06, 20);
  const inner = arc(BC[0], BC[1], 0.088, Math.PI * 2.06, Math.PI * 0.95, 20);
  bucket.add(plate([...outer, ...inner], 0.15, PAINT_DARK, 0.004));
  for (const z of [-0.075, 0.075]) bucket.add(at(plate([...arc(BC[0], BC[1], 0.1, Math.PI * 0.95, Math.PI * 2.06, 20), [0.0, 0.07]], 0.01, PAINT, 0.003), 0, 0, z));
  bucket.add(at(rbox(0.05, 0.03, 0.06, 0.008, PAINT_DARK), -0.01, 0.05, 0));
  const lip = outer[outer.length - 1];
  for (let i = 0; i < 4; i++) {
    const t = plate([[-0.012, 0], [0.012, 0], [0.004, 0.034], [-0.004, 0.034]], 0.022, PIN, 0.003);
    t.position.set(lip[0] - 0.004, lip[1] - 0.004, -0.054 + i * 0.036);
    t.rotation.z = 0.12;
    bucket.add(t);
  }

  // ---- rams: twin boom rams, stick ram on top of the boom, bucket ram on the stick
  const rams = [
    ram(upper, [0.27, 0.07, -0.115], boom, [0.29, 0.03], [0.22, 0.85], 0.016),
    ram(upper, [0.27, 0.07, -0.045], boom, [0.29, 0.03], [0.22, 0.85], 0.016),
    ram(boom, [0.3, 0.1, 0], stick, [-0.07, 0.04], [-1.55, -1.15], 0.015),
    ram(stick, [0.05, 0.035, 0], bucket, [-0.015, 0.06], [-1.1, 0.25], 0.012),
  ];
  // static parts: one mesh per material in each rigid group (rams stay separate)
  for (const g of [root, upper, boom, stick, bucket]) mergeByMaterial(g);
  const sync = () => { for (const r of rams) r(); };
  sync();
  return { root, boom, stick, bucket, sync };
}

const TYRE = new THREE.MeshStandardMaterial({ color: 0x232324, roughness: 0.88 });

/** Tyre: a rounded profile turned about the axle (axle along z). */
function tyre(r: number, w: number): THREE.BufferGeometry {
  const pts: THREE.Vector2[] = [];
  const c = w * 0.32;
  for (const [a0, cx, cy] of [[-Math.PI / 2, r - c, -w / 2 + c], [0, r - c, w / 2 - c]] as const)
    for (let i = 0; i <= 6; i++) { const a = a0 + (i / 6) * (Math.PI / 2); pts.push(new THREE.Vector2(cx + Math.cos(a) * c, cy + Math.sin(a) * c)); }
  pts.unshift(new THREE.Vector2(r * 0.62, -w / 2));
  pts.push(new THREE.Vector2(r * 0.62, w / 2));
  const g = new THREE.LatheGeometry(pts, 28);
  g.rotateX(Math.PI / 2);
  return g;
}

/** Rigid haul truck with a rock load; cab at +x. */
function truck(): THREE.Group {
  const g = new THREE.Group();
  const tg = tyre(0.085, 0.065);
  for (const [x, z] of [[0.27, 0.15], [0.27, -0.15], [-0.2, 0.15], [-0.2, -0.15], [-0.2, 0.08], [-0.2, -0.08]]) {
    const t = new THREE.Mesh(tg, TYRE);
    t.position.set(x, 0.085, z);
    t.castShadow = t.receiveShadow = true;
    g.add(t);
    const hub = cyl(0.045, 0.045, 0.067, PAINT, 16);
    hub.rotation.x = Math.PI / 2;
    hub.position.set(x, 0.085, z);
    g.add(hub);
  }
  g.add(at(rbox(0.72, 0.05, 0.16, 0.012, GRIME), 0.02, 0.15, 0));
  // front module: engine hood, radiator grille, deck, cab
  g.add(at(rbox(0.16, 0.13, 0.26, 0.02, PAINT), 0.31, 0.24, 0));
  g.add(at(rbox(0.012, 0.08, 0.16, 0.004, PAINT_DARK), 0.392, 0.235, 0));
  g.add(at(rbox(0.18, 0.015, 0.34, 0.005, PAINT_DARK), 0.3, 0.31, 0));
  g.add(at(rbox(0.12, 0.12, 0.12, 0.015, CAB_GLASS), 0.3, 0.375, 0.09));
  g.add(at(rbox(0.13, 0.02, 0.13, 0.006, PAINT), 0.3, 0.44, 0.09));
  for (const z of [0.033, 0.147]) g.add(at(rbox(0.12, 0.12, 0.012, 0.004, PAINT), 0.3, 0.375, z));
  // dump body: floor, sides with ribs, front wall and canopy over the cab
  const bodyY = 0.19;
  g.add(at(rbox(0.5, 0.025, 0.34, 0.008, PAINT), -0.12, bodyY, 0));
  for (const z of [-0.165, 0.165]) {
    g.add(at(plate([[-0.37, 0], [0.13, 0], [0.13, 0.17], [-0.33, 0.17]], 0.014, PAINT, 0.004), 0, bodyY, z));
    for (const x of [-0.25, -0.12, 0.01]) g.add(at(rbox(0.018, 0.16, 0.014, 0.004, PAINT_DARK), x, bodyY + 0.085, z + Math.sign(z) * 0.012));
  }
  g.add(at(rbox(0.02, 0.2, 0.34, 0.006, PAINT), 0.135, bodyY + 0.1, 0));
  g.add(at(rbox(0.16, 0.012, 0.34, 0.004, PAINT), 0.215, bodyY + 0.205, 0));
  // load of broken rock
  const rnd = mulberry(9);
  const rocks = new THREE.InstancedMesh(rocksGeo().boulder, ROCK, 14);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  for (let i = 0; i < 14; i++) {
    const r = 0.04 + rnd() * 0.03;
    q.setFromEuler(new THREE.Euler(rnd() * 3, rnd() * 3, 0));
    rocks.setMatrixAt(i, m.compose(new THREE.Vector3(-0.3 + rnd() * 0.38, bodyY + 0.07 + rnd() * 0.08, -0.11 + rnd() * 0.22), q, new THREE.Vector3(r, r, r)));
    rocks.setColorAt(i, c.setRGB(0.55, 0.49, 0.41).lerp(new THREE.Color(0.45, 0.47, 0.43), rnd()).convertSRGBToLinear());
  }
  rocks.castShadow = true;
  g.add(rocks);
  mergeByMaterial(g);
  return g;
}

export interface MineDiorama {
  root: THREE.Group;
  digger: Excavator;
  /** Height of the terrain at diorama-local (x, z). */
  height(x: number, z: number): number;
  pitFloor: THREE.Vector3;
  /** Small shadow casters that the lowest quality level turns off. */
  minorCasters: THREE.Object3D[];
}

const S = 6, H = S / 2, TOP = 1.0, BOTTOM_Y = -0.7;
const PIT = new THREE.Vector2(0.35, 0.1);
const AX = 1.15, AZ = 0.9; // pit ellipse axes
const STEPS = 5, STEP_W = 0.32, R0 = 2.15;
const STEP_H = [0.25, 0.29, 0.26, 0.28, 0.27];
const LEVEL_Y = STEP_H.reduce<number[]>((a, h) => [...a, a[a.length - 1] - h], [TOP]);
const FLOOR_Y = LEVEL_Y[STEPS];
/** Excavator pad: same height as v1.0 so every bucket pose is unchanged. */
const PAD = { x: PIT.x - 1.05, z: PIT.y + 0.25, r: 0.5, y: -0.08 };
/** Haul road: spirals down the south-west wall, angles in the pit's ellipse frame. */
const ROAD = { th0: 2.45, th1: 4.55, half: 0.5 };

/** Pit-frame polar coordinates: elliptic radius d and angle th. */
function polar(x: number, z: number): [number, number] {
  const dx = (x - PIT.x) / AX, dz = (z - PIT.y) / AZ;
  return [Math.hypot(dx, dz), Math.atan2(dz, dx)];
}

/** Bench edges are not ruler-drawn: each level gets its own gentle wander. */
function edgeWobble(th: number, d: number): number {
  const c = Math.cos(th), s = Math.sin(th);
  return 0.05 * noise3(c * 1.6, s * 1.6, d * 1.7) + 0.02 * noise3(c * 5, s * 5, 3 + d);
}

/** Terrace profile: rounded crest, steep rock face, then a short scree apron. */
function benchProfile(f: number): number {
  const face = THREE.MathUtils.smoothstep(f, 0.02, 0.36);
  const apron = THREE.MathUtils.smoothstep(f, 0.3, 0.55) * 0.08;
  return Math.min(1, face * 0.92 + apron);
}

function levelHeight(s: number): number {
  if (s <= 0) return TOP;
  if (s >= STEPS) return FLOOR_Y;
  const k = Math.floor(s), f = s - k;
  return LEVEL_Y[k] - benchProfile(f) * STEP_H[k];
}

function roadCentre(th: number): number | null {
  let t = th < 0 ? th + Math.PI * 2 : th;
  if (t < ROAD.th0 || t > ROAD.th1) return null;
  return (t - ROAD.th0) / (ROAD.th1 - ROAD.th0);
}

interface Sample { y: number; road: number }

function sample(x: number, z: number): Sample {
  const [d, th] = polar(x, z);
  const s = (R0 - d - edgeWobble(th, d)) / STEP_W;
  let y = levelHeight(s);
  let road = 0;
  // haul road: a continuous ramp from the rim (u = 0) to the floor (u = 1)
  const u = roadCentre(th);
  if (u !== null) {
    const sc = u * (STEPS + 0.4) - 0.2;
    const across = Math.abs(s - sc) / ROAD.half;
    const ends = THREE.MathUtils.smoothstep(u, 0, 0.04) * (1 - THREE.MathUtils.smoothstep(u, 0.96, 1));
    const w = (1 - THREE.MathUtils.smoothstep(across, 0.75, 1.25)) * Math.max(ends, s < 0.6 || s > STEPS - 0.6 ? 1 : 0);
    const yr = TOP + (FLOOR_Y - TOP) * THREE.MathUtils.clamp(u * 1.04 - 0.02, 0, 1);
    y = THREE.MathUtils.lerp(y, yr, w);
    road = 1 - THREE.MathUtils.smoothstep(across, 0.6, 0.95);
  }
  // excavator pad
  const pd = Math.hypot(x - PAD.x, z - PAD.z);
  const pw = 1 - THREE.MathUtils.smoothstep(pd, PAD.r, PAD.r + 0.25);
  y = THREE.MathUtils.lerp(y, PAD.y, pw);
  // gentle bowl on the pit floor, fine relief everywhere
  if (s > STEPS) y -= 0.03 * THREE.MathUtils.smoothstep(s, STEPS, STEPS + 2);
  y += 0.012 * noise3(x * 2.2, 0.5, z * 2.2) + 0.004 * noise3(x * 9, 1.5, z * 9);
  // track from the rim to the truck, on the grass
  if (y > TOP - 0.05) road = Math.max(road, (1 - THREE.MathUtils.smoothstep(distToTrack(x, z), 0.05, 0.11)) * 0.8);
  return { y, road };
}

const TRACK = [new THREE.Vector2(-1.15, 1.25), new THREE.Vector2(-1.6, 1.7), new THREE.Vector2(-2.05, 1.95)];
function distToTrack(x: number, z: number): number {
  let best = 9;
  for (let i = 0; i < TRACK.length - 1; i++) {
    const a = TRACK[i], b = TRACK[i + 1];
    const abx = b.x - a.x, abz = b.y - a.y;
    const t = THREE.MathUtils.clamp(((x - a.x) * abx + (z - a.y) * abz) / (abx * abx + abz * abz), 0, 1);
    best = Math.min(best, Math.hypot(x - a.x - abx * t, z - a.y - abz * t));
  }
  return best;
}

export const mineHeight = (x: number, z: number) => sample(x, z).y;

/** Distance (in the pit's elliptic metric) from the pit centre to the square edge along th. */
function edgeDistance(th: number): number {
  const vx = Math.cos(th) * AX, vz = Math.sin(th) * AZ;
  const tx = vx > 1e-9 ? (H - PIT.x) / vx : vx < -1e-9 ? (-H - PIT.x) / vx : Infinity;
  const tz = vz > 1e-9 ? (H - PIT.y) / vz : vz < -1e-9 ? (-H - PIT.y) / vz : Infinity;
  return Math.min(tx, tz);
}

/**
 * Terrain on a polar grid centred on the pit: bench edges run along vertex rows,
 * so the steps stay smooth instead of zig-zagging across a square grid.
 */
function terrainGeometry(): { geo: THREE.BufferGeometry; rim: THREE.Vector3[] } {
  const corners = [[H, H], [-H, H], [-H, -H], [H, -H]].map(([x, z]) => Math.atan2((z - PIT.y) / AZ, (x - PIT.x) / AX));
  const A = 168;
  const ths = new Set<number>();
  for (let i = 0; i < A; i++) ths.add(-Math.PI + (i / A) * Math.PI * 2);
  for (const c of corners) ths.add(c);
  const angles = [...ths].sort((a, b) => a - b);
  // Rows follow the bench edges, wobble included: radius d where the bench
  // coordinate s equals a given value at this angle (two fixed-point steps).
  const dAt = (s: number, th: number) => {
    const d0 = R0 - s * STEP_W;
    const d2 = d0 - edgeWobble(th, d0 - edgeWobble(th, d0));
    return THREE.MathUtils.clamp(d2, 0, edgeDistance(th) - 0.02);
  };
  // dense where a bench bends (crest, rock face, apron), sparse on the flat tread
  const F = [0, 0.04, 0.09, 0.15, 0.22, 0.3, 0.39, 0.5, 0.66, 0.83];
  const benchS = [STEPS, ...Array.from({ length: STEPS }, (_, k) => F.map((f) => k + f)).flat()].sort((a, b) => b - a);
  const rows: ((th: number) => number)[] = [() => 0];
  for (const u of [0.3, 0.55, 0.8]) rows.push((th) => dAt(STEPS, th) * u);
  for (const sv of benchS) rows.push((th) => dAt(sv, th));
  const NO = 10;
  for (let i = 1; i <= NO; i++) { const t = i / NO; rows.push((th) => { const a = dAt(0, th); return a + (edgeDistance(th) - a) * t; }); }
  const P: number[] = [], RD: number[] = [];
  const C = angles.length;
  for (const row of rows) {
    for (const th of angles) {
      const d = row(th);
      const x = PIT.x + Math.cos(th) * d * AX, z = PIT.y + Math.sin(th) * d * AZ;
      const sm = sample(x, z);
      P.push(x, sm.y, z);
      RD.push(sm.road);
    }
  }
  const I: number[] = [];
  for (let r = 0; r < rows.length - 1; r++) {
    for (let c = 0; c < C; c++) {
      const c2 = (c + 1) % C;
      const a = r * C + c, b = r * C + c2, e = (r + 1) * C + c, f = (r + 1) * C + c2;
      I.push(a, b, e, b, f, e);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  geo.setAttribute('aRoad', new THREE.Float32BufferAttribute(RD, 1));
  geo.setIndex(I);
  geo.computeVertexNormals();
  // baked AO: how much the ground around each vertex rises above it
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const ao = new Float32Array(pos.count);
  const dirs = Array.from({ length: 8 }, (_, i) => [Math.cos((i / 8) * Math.PI * 2), Math.sin((i / 8) * Math.PI * 2)]);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    let occ = 0;
    for (const [dx, dz] of dirs) for (const r of [0.07, 0.16, 0.3]) occ += Math.max(0, Math.atan((mineHeight(x + dx * r, z + dz * r) - y) / r));
    ao[i] = THREE.MathUtils.clamp(1 - occ / (dirs.length * 3) * 1.25, 0.35, 1);
  }
  geo.setAttribute('aAo', new THREE.BufferAttribute(ao, 1));
  const last = (rows.length - 1) * C;
  const rim = angles.map((_, c) => new THREE.Vector3(pos.getX(last + c), pos.getY(last + c), pos.getZ(last + c)));
  return { geo, rim };
}

/** The cut sides of the block, built from the terrain's own edge so they meet exactly. */
function sideGeometry(rim: THREE.Vector3[]): THREE.BufferGeometry {
  const L = 28, C = rim.length;
  const P: number[] = [], N: number[] = [], I: number[] = [];
  for (let c = 0; c <= C; c++) {
    const v = rim[c % C];
    const n = Math.abs(Math.abs(v.x) - H) < 1e-4 ? [Math.sign(v.x), 0, 0] : [0, 0, Math.sign(v.z)];
    for (let j = 0; j <= L; j++) {
      P.push(v.x, BOTTOM_Y + (v.y - BOTTOM_Y) * (j / L), v.z);
      N.push(...n);
    }
  }
  for (let c = 0; c < C; c++) for (let j = 0; j < L; j++) { const a = c * (L + 1) + j, b = a + L + 1; I.push(a, a + 1, b, b, a + 1, b + 1); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3));
  g.setAttribute('aAo', new THREE.Float32BufferAttribute(new Array(P.length / 3).fill(1), 1));
  g.setAttribute('aRoad', new THREE.Float32BufferAttribute(new Array(P.length / 3).fill(0), 1));
  g.setIndex(I);
  return g;
}

/** Fractured rock: a noisy icosahedron with flat facets and darker undersides. */
function rockGeometry(seed: number, detail = 1): THREE.BufferGeometry {
  const g = new THREE.IcosahedronGeometry(1, detail);
  const p = g.attributes.position as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    const k = 1 + 0.28 * noise3(v.x * 1.3 + seed, v.y * 1.3, v.z * 1.3);
    v.multiplyScalar(k);
    v.y = v.y < -0.2 ? -0.2 - (v.y + 0.2) * 0.25 : v.y; // flattened base sits on the ground
    p.setXYZ(i, v.x, v.y * 0.75, v.z);
  }
  const ng = g.toNonIndexed();
  ng.computeVertexNormals();
  const q = ng.attributes.position as THREE.BufferAttribute;
  const col = new Float32Array(q.count * 3);
  for (let i = 0; i < q.count; i++) { const s = 0.7 + 0.3 * THREE.MathUtils.smoothstep(q.getY(i), -0.3, 0.6); col.set([s, s, s], i * 3); }
  ng.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return ng;
}

/** Shared rock shapes: boulders (80 faces) and scree (20 faces), reused by the truck load. */
let rockGeos: { boulder: THREE.BufferGeometry; scree: THREE.BufferGeometry } | null = null;
function rocksGeo(): { boulder: THREE.BufferGeometry; scree: THREE.BufferGeometry } {
  return (rockGeos ??= { boulder: rockGeometry(1, 1), scree: rockGeometry(2, 0) });
}

const CROWN: [number, number, number, number][] = [[0, 0.02, 0, 1], [0.42, -0.12, 0.18, 0.72], [-0.3, -0.08, -0.3, 0.78], [0.05, 0.38, -0.08, 0.7]];
const SHRUB: [number, number, number, number][] = [[0, 0, 0, 1]];

/** Broadleaf crown: overlapping lumpy clumps, lighter on top (shrubs use one clump). */
function crownGeometry(clumps = CROWN): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  clumps.forEach(([x, y, z, r], k) => {
    const g = new THREE.IcosahedronGeometry(r, 1);
    const p = g.attributes.position as THREE.BufferAttribute;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      v.multiplyScalar(1 + 0.16 * noise3(v.x * 2.1 + k * 7, v.y * 2.1, v.z * 2.1));
      p.setXYZ(i, v.x + x, v.y * 0.86 + y, v.z + z);
    }
    parts.push(g);
  });
  // smooth-shaded clumps read as foliage; faceted ones read as rocks
  const g = mergeGeometries(parts.map((p) => mergeVertices(p.deleteAttribute('normal').deleteAttribute('uv'))));
  g.computeVertexNormals();
  const p = g.attributes.position as THREE.BufferAttribute;
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const s = 0.62 + 0.45 * THREE.MathUtils.smoothstep(p.getY(i), -0.7, 0.9);
    col.set([s * 0.97, s, s * 0.92], i * 3);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

function trunkGeometry(): THREE.BufferGeometry {
  const a = new THREE.CylinderGeometry(0.018, 0.034, 0.2, 7);
  a.translate(0, 0.1, 0);
  const b = new THREE.CylinderGeometry(0.008, 0.014, 0.12, 5);
  b.translate(0, 0.06, 0);
  b.rotateZ(-0.7);
  b.translate(0.0, 0.13, 0);
  return mergeGeometries([a.toNonIndexed(), b.toNonIndexed()]);
}

export function mineDiorama(): MineDiorama {
  const root = new THREE.Group();
  root.name = 'mine';
  const pond: [number, number, number] = [PIT.x + 0.35, PIT.y - 0.25, 0.42];
  const terrainMat = new TerrainMaterial({ top: TOP, pond });
  const { geo, rim } = terrainGeometry();
  const ground = new THREE.Mesh(geo, terrainMat);
  ground.receiveShadow = ground.castShadow = true;
  ground.userData.info = 'mine';
  root.add(ground);
  const sides = new THREE.Mesh(sideGeometry(rim), terrainMat);
  sides.receiveShadow = true;
  root.add(sides);
  root.add(at(rbox(S + 0.3, 0.3, S + 0.3, 0.06, MAT.plinth), 0, BOTTOM_Y - 0.15, 0));

  // pond: an irregular puddle of rain and seepage on the pit floor
  const shape = new THREE.Shape();
  for (let i = 0; i <= 48; i++) {
    const a = (i / 48) * Math.PI * 2;
    const r = 1 + 0.12 * noise3(Math.cos(a) * 1.5, Math.sin(a) * 1.5, 4);
    const x = Math.cos(a) * r * 0.42 * 1.4, y = Math.sin(a) * r * 0.42 * 0.8;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  const pool = new THREE.Mesh(new THREE.ShapeGeometry(shape, 1), POND);
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(pond[0], FLOOR_Y + 0.012, pond[1]);
  pool.receiveShadow = true;
  root.add(pool);

  const rnd = mulberry(3);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), sc = new THREE.Vector3();
  const tint = new THREE.Color();

  // scree at the foot of each bench face, boulders on the floor and the rim
  const rocks: { x: number; z: number; r: number; c: number }[] = [];
  for (let i = 0; i < 150; i++) {
    const th = rnd() * Math.PI * 2;
    const k = Math.floor(rnd() * STEPS);
    const s = k + 0.4 + rnd() * 0.2;
    const d = R0 - s * STEP_W - edgeWobble(th, R0 - s * STEP_W);
    const x = PIT.x + Math.cos(th) * d * AX, z = PIT.y + Math.sin(th) * d * AZ;
    if (sample(x, z).road > 0.2 || Math.hypot(x - PAD.x, z - PAD.z) < PAD.r + 0.1) continue;
    rocks.push({ x, z, r: 0.018 + rnd() * 0.03, c: rnd() });
  }
  for (let i = 0; i < 16; i++) {
    const th = rnd() * Math.PI * 2, d = rnd() * 0.5;
    const x = PIT.x - 0.25 + Math.cos(th) * d * AX, z = PIT.y + 0.15 + Math.sin(th) * d * AZ;
    if (Math.hypot(x - pond[0], z - pond[1]) < 0.62) continue;
    rocks.push({ x, z, r: 0.04 + rnd() * 0.05, c: rnd() });
  }
  for (let i = 0; i < 9; i++) {
    const x = -H + 0.3 + rnd() * (S - 0.6), z = -H + 0.3 + rnd() * (S - 0.6);
    if (polar(x, z)[0] < R0 + 0.3 || distToTrack(x, z) < 0.3) continue;
    rocks.push({ x, z, r: 0.06 + rnd() * 0.07, c: rnd() });
  }
  // small scree: 20-face rocks that only receive shadows (their own would be a few
  // pixels); boulders keep the finer shape and cast shadows
  const scree = rocks.filter((r) => r.r < 0.05), boulders = rocks.filter((r) => r.r >= 0.05);
  const rockSets: [typeof rocks, THREE.BufferGeometry, boolean][] = [[scree, rocksGeo().scree, false], [boulders, rocksGeo().boulder, true]];
  const rockMeshes = rockSets.map(([list, geo, cast]) => {
    const im = new THREE.InstancedMesh(geo, ROCK, list.length);
    list.forEach(({ x, z, r, c }, i) => {
      q.setFromEuler(e.set((rnd() - 0.5) * 0.4, rnd() * 6.28, (rnd() - 0.5) * 0.4));
      im.setMatrixAt(i, m.compose(v.set(x, mineHeight(x, z) + r * 0.1, z), q, sc.set(r * (0.9 + rnd() * 0.5), r, r * (0.9 + rnd() * 0.4))));
      im.setColorAt(i, tint.setRGB(0.56, 0.5, 0.43).lerp(new THREE.Color(0.44, 0.46, 0.42), c).convertSRGBToLinear());
    });
    im.castShadow = cast;
    im.receiveShadow = true;
    root.add(im);
    return im;
  });

  // trees and shrubs on the rim, kept off the track and the cut edge
  const spots: { x: number; z: number; s: number }[] = [];
  for (let i = 0; i < 60 && spots.length < 30; i++) {
    const x = -H + 0.22 + rnd() * (S - 0.44), z = -H + 0.22 + rnd() * (S - 0.44);
    if (polar(x, z)[0] < R0 + 0.12 || distToTrack(x, z) < 0.25 || Math.hypot(x + 2.1, z - 1.9) < 0.75) continue;
    if (spots.some((p) => Math.hypot(p.x - x, p.z - z) < 0.3)) continue;
    spots.push({ x, z, s: 0.75 + rnd() * 0.55 });
  }
  const trunks = new THREE.InstancedMesh(trunkGeometry(), BARK, spots.length);
  const crowns = new THREE.InstancedMesh(crownGeometry(), LEAF, spots.length);
  spots.forEach(({ x, z, s }, i) => {
    const y = mineHeight(x, z);
    q.setFromEuler(e.set(0, rnd() * 6.28, 0));
    trunks.setMatrixAt(i, m.compose(v.set(x, y - 0.01, z), q, sc.set(s, s, s)));
    crowns.setMatrixAt(i, m.compose(v.set(x, y + 0.24 * s, z), q, sc.set(0.15 * s, 0.15 * s, 0.15 * s)));
    crowns.setColorAt(i, tint.setRGB(0.42, 0.55, 0.34).lerp(new THREE.Color(0.55, 0.6, 0.38), rnd()).multiplyScalar(0.9 + rnd() * 0.15).convertSRGBToLinear());
  });
  trunks.castShadow = crowns.castShadow = true;
  crowns.receiveShadow = true;
  root.add(trunks, crowns);
  // low shrubs along the rim
  const shrubs: THREE.Vector3[] = [];
  for (let i = 0; i < 90 && shrubs.length < 34; i++) {
    const th = rnd() * Math.PI * 2, d = R0 + 0.18 + rnd() * 0.5;
    const x = PIT.x + Math.cos(th) * d * AX, z = PIT.y + Math.sin(th) * d * AZ;
    if (Math.abs(x) > H - 0.15 || Math.abs(z) > H - 0.15 || distToTrack(x, z) < 0.2 || sample(x, z).road > 0.1) continue;
    shrubs.push(new THREE.Vector3(x, mineHeight(x, z), z));
  }
  const shrubMesh = new THREE.InstancedMesh(crownGeometry(SHRUB), LEAF, shrubs.length);
  shrubs.forEach((p, i) => {
    const s = 0.05 + rnd() * 0.04;
    q.setFromEuler(e.set(0, rnd() * 6.28, 0));
    shrubMesh.setMatrixAt(i, m.compose(v.set(p.x, p.y + s * 0.35, p.z), q, sc.set(s, s * 0.7, s)));
    shrubMesh.setColorAt(i, tint.setRGB(0.47, 0.56, 0.36).multiplyScalar(0.85 + rnd() * 0.2).convertSRGBToLinear());
  });
  shrubMesh.castShadow = true;
  root.add(shrubMesh);

  const tk = truck();
  tk.position.set(-2.1, mineHeight(-2.1, 1.9), 1.9);
  tk.rotation.y = -0.7;
  tk.scale.setScalar(1.3);
  root.add(tk);

  const digger = excavator();
  digger.root.position.set(PAD.x, PAD.y, PAD.z);
  digger.root.rotation.y = 0.15;
  digger.root.scale.setScalar(1.35);
  digger.root.userData.info = 'excavator';
  root.add(digger.root);

  // small casters whose shadows are dropped at the lowest quality level
  const minorCasters = [rockMeshes[1], trunks, shrubMesh];
  return { root, digger, height: mineHeight, pitFloor: new THREE.Vector3(PIT.x, FLOOR_Y, PIT.y), minorCasters };
}
