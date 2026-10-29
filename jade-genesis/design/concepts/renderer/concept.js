// PHASE 1 CONCEPT TOOL — renders still concept frames for design review.
// Usage: index.html?theme=A|B&shot=<id>&w=1440&h=900&ui=1
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { jadeMaterial } from './jade-material.js';
import { shellGeometry, capGeometry, slabGeometries, latheJade, profiles, holeWall, placeOnAxis, FY, Rdir, WIN, inside } from './stone-geometry.js';
import * as P from './props.js';
import { renderUI } from './ui.js';

const Q = new URLSearchParams(location.search);
const THEME = Q.get('theme') === 'B' ? 'B' : 'A';
const SHOT = Q.get('shot') || 'hero';
const W = +Q.get('w') || 1440, H = +Q.get('h') || 900, DPR = +Q.get('dpr') || 1;
const SHOW_UI = Q.get('ui') !== '0';
document.documentElement.dataset.theme = THEME;

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(DPR); renderer.setSize(W, H);
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = THEME === 'A' ? 1.0 : 1.1;
renderer.localClippingEnabled = true;
document.getElementById('stage').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const T = P.initProps(THEME);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
const ENV = THEME === 'A' ? 0.85 : 0.4;

// ---------- studio ----------
function studio({ dim = false } = {}) {
  const A = THEME === 'A';
  const bg = new THREE.Color(A ? (dim ? 0x4a4946 : 0xf1eee8) : 0x0c0e0f);
  if (dim) scene.userData.envScale = 0.18;
  renderer.setClearColor(bg);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(60, 48, 24), new THREE.MeshBasicMaterial({ color: bg, side: THREE.BackSide, fog: false, toneMapped: false }));
  scene.fog = new THREE.Fog(bg, 30, 58);
  dome.userData.keepEnv = true; scene.add(dome);
  const floor = new THREE.Mesh(new THREE.CircleGeometry(60, 64), new THREE.MeshStandardMaterial({ color: A ? (dim ? 0x8a8781 : 0xf3f0ea) : 0x111314, roughness: A ? 1 : 0.9, metalness: 0 }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  if (A) {
    scene.add(new THREE.HemisphereLight(0xffffff, 0xd8d0c2, dim ? 0.12 : 0.85));
    const key = new THREE.DirectionalLight(0xfff6ea, dim ? 0.25 : 2.3); key.position.set(5, 10, 6); shadowCfg(key); scene.add(key);
    const fill = new THREE.DirectionalLight(0xeaf2ff, dim ? 0.05 : 0.45); fill.position.set(-7, 3, 3); scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffffff, dim ? 0.1 : 0.9); rim.position.set(-1, 5, -9); scene.add(rim);
  } else {
    scene.add(new THREE.HemisphereLight(0x9fb3ad, 0x050606, dim ? 0.05 : 0.18));
    const spot = new THREE.SpotLight(0xfff4e6, dim ? 60 : 400, 0, 0.36, 0.75, 2); spot.position.set(1.5, 11, 4); shadowCfg(spot); scene.add(spot); scene.add(spot.target);
    scene.userData.spot = spot;
    const rim = new THREE.SpotLight(0x74f2b4, 160, 0, 0.32, 0.9, 2); rim.position.set(-5, 4.5, -7); rim.target.position.set(0, 1.6, 0); scene.add(rim, rim.target);
    const rim2 = new THREE.DirectionalLight(0xbfd6ff, 0.35); rim2.position.set(7, 2, -4); scene.add(rim2);
    const fill = new THREE.DirectionalLight(0xffffff, dim ? 0.02 : 0.12); fill.position.set(-3, 4, 8); scene.add(fill);
  }
}
function shadowCfg(l) {
  l.castShadow = true; l.shadow.mapSize.set(4096, 4096); l.shadow.bias = -0.0003; l.shadow.normalBias = 0.02;
  if (l.isDirectionalLight) Object.assign(l.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 0.5, far: 40 });
  if (l.isSpotLight) { l.shadow.camera.near = 2; l.shadow.camera.far = 30; }
}

// ---------- jade pieces ----------
const JADE_SEED = 0.0, JADE_GREEN = 0.08;
const jm = (o = {}) => jadeMaterial({ seed: JADE_SEED, green: JADE_GREEN, ...o });
const geoCache = {};
const shell = (win) => (geoCache['s' + win] ||= shellGeometry(win));
const clipList = [];

function stone({ win = false, wet = 0, plans, torch, rind = 1 } = {}) {
  const m = new THREE.Mesh(shell(win), jm({ wet, plans, torch, rind, thickness: 1.6, att: 0.5, transmission: 0.42, roughness: 0.14, clearcoat: win ? 0.4 : 0 }));
  m.castShadow = m.receiveShadow = true;
  return m;
}
/** Two halves split at x=0. Each half is a group in the stone frame. */
function halves(win = true) {
  const mk = (sign) => {
    const g = new THREE.Group();
    const sh = new THREE.Mesh(shell(win), jm({ thickness: 1.4, att: 0.55, transmission: 0.38 }));
    sh.castShadow = sh.receiveShadow = true;
    sh.userData.clip = new THREE.Plane(new THREE.Vector3(sign, 0, 0), 0);
    clipList.push(sh);
    const cap = new THREE.Mesh(capGeometry(0, -sign, win).geo, jm({ thickness: 1.2, att: 0.6, transmission: 0.45, roughness: 0.38 }));
    cap.castShadow = cap.receiveShadow = true;
    g.add(sh, cap);
    return g;
  };
  return { a: mk(-1), b: mk(+1) };
}

// Production geometry (stone frame units ≈ 1 unit : 100 mm)
const SLAB = { x0: 0.17, x1: 0.31 };
const SL_T = SLAB.x1 - SLAB.x0, SL_C = (SLAB.x0 + SLAB.x1) / 2;
const RING = { ri: 0.28, ro: 0.41 };
const SITES = [{ cy: 0.02, cz: 0.45 }, { cy: 0.02, cz: -0.45 }];
const frameOf = (s) => ({ xc: SL_C, cy: s.cy, cz: s.cz });

function slab({ marks = false, holes = [] } = {}) {
  const g = new THREE.Group();
  const geos = slabGeometries(SLAB.x0, SLAB.x1, true);
  const mk = marks ? SITES.flatMap((s) => [[s.cy, s.cz, RING.ro], [s.cy, s.cz, RING.ri]]) : [];
  const hl = holes.map((i) => [SITES[i].cy, SITES[i].cz, RING.ro]);
  const faceMat = jm({ marks: mk, holes: hl, thickness: SL_T, att: 0.35, transmission: 0.5, roughness: 0.4 });
  const sideMat = jm({ thickness: SL_T, att: 0.35, transmission: 0.3 });
  [geos.top, geos.bottom].forEach((gg) => { const m = new THREE.Mesh(gg, faceMat); m.castShadow = m.receiveShadow = true; g.add(m); });
  const s = new THREE.Mesh(geos.side, sideMat); s.castShadow = s.receiveShadow = true; g.add(s);
  holes.forEach((i) => { const w = new THREE.Mesh(holeWall(RING.ro, SL_T, frameOf(SITES[i])), jm({ rind: 0, thickness: SL_T, att: 0.35, transmission: 0.45, roughness: 0.45 })); placeOnAxis(w, frameOf(SITES[i])); g.add(w); });
  return g;
}
function core(site, lift = 0) {
  const m = new THREE.Mesh(latheJade(profiles.disc(RING.ri - 0.008, SL_T), frameOf(SITES[site])), jm({ rind: 0, thickness: SL_T, att: 0.35, transmission: 0.5, roughness: 0.42 }));
  m.castShadow = m.receiveShadow = true; return placeOnAxis(m, frameOf(SITES[site]), lift);
}
// bangle stages — each shape lies inside the previous one (material is only removed)
const BANGLE = {
  blank: { prof: () => profiles.rect(RING.ri + 0.006, RING.ro - 0.006, SL_T), rough: 1, rough0: 0.75 },
  shaped: { prof: () => profiles.rounded(0.292, 0.392, 0.112, 0.28), rough: 0.85, rough0: 0.7 },
  fine: { prof: () => profiles.rounded(0.296, 0.388, 0.104, 0.12), rough: 0.45, rough0: 0.45 },
  polish: { prof: () => profiles.round(0.298, 0.386, 0.1), rough: 0.12, rough0: 0.2 },
  final: { prof: () => profiles.round(0.298, 0.386, 0.1), rough: 0, rough0: 0.1 },
};
function bangle(stage = 'final', site = 0) {
  const b = BANGLE[stage];
  const m = new THREE.Mesh(latheJade(b.prof(), frameOf(SITES[site]), 220), jm({ green: JADE_GREEN + 0.1, rind: 0, rough: b.rough, roughness: b.rough0, thickness: 0.09, att: 0.18, transmission: stage === 'final' ? 0.62 : 0.5, clearcoat: stage === 'final' ? 1 : 0, bump: 0.02 }));
  m.castShadow = m.receiveShadow = true;
  return m;
}
/** Wrap a lathe piece so its ring axis is local Y and centred at origin (for free placement). */
function free(mesh) {
  const g = new THREE.Group(); mesh.position.set(0, 0, 0); mesh.rotation.set(0, 0, 0); g.add(mesh); return g;
}
const add = (o, x = 0, y = 0, z = 0) => { o.position.set(x, y, z); scene.add(o); return o; };
const V = (x, y, z) => new THREE.Vector3(x, y, z);

/** A point where the fissure plane meets the window surface (for a label pin). */
function fisPoint() {
  const n = V(0.3, 1.0, -0.15).normalize(), w = WIN.dir;
  // walk across the window plane and pick the point closest to the fissure plane
  let best = null, bd = 1e9;
  for (let a = -0.6; a <= 0.6; a += 0.01) for (let b = -0.6; b <= 0.6; b += 0.01) {
    const u = V(1, 0, 0).cross(w).normalize(), v = w.clone().cross(u);
    const p = w.clone().multiplyScalar(WIN.depth).addScaledVector(u, a).addScaledVector(v, b);
    if (!inside(p.clone().addScaledVector(w, -0.01), true)) continue;
    const d = Math.abs(p.dot(n) - 0.585) + Math.abs(a) * 0.02;
    if (d < bd) { bd = d; best = p; }
  }
  return best;
}

// ---------- shots ----------
const SHOTS = {
  hero() {
    studio();
    const pl = add(P.plinth(1.7, 0.75)); add(P.contactShadow(5.5, 0.28), 0, 0, 0);
    const s = stone({ win: true }); s.rotation.y = -0.25; s.position.set(0, 0.75 + FY, 0); scene.add(s);
    const lp = P.loupe(); lp.scale.setScalar(0.6); lp.rotation.set(-Math.PI / 2, 0, 0.9); lp.position.set(0.95, 0.79, 1.05); scene.add(lp);
    const card = P.labelCard([{ t: 'JADEITE  硬玉', s: 52, w: 700 }, { t: 'Rough · 原石 · No.001', s: 34, c: '#7d8580', dy: 6 }, { t: '缅甸 · 示意标本', s: 30, c: '#7d8580', dy: 10 }], 1.15, 0.62);
    card.scale.setScalar(0.62); card.position.set(-1.05, 0.95, 1.05); card.rotation.y = 0.35; scene.add(card);
    const fl = P.flashlight(); fl.scale.setScalar(0.8); fl.position.set(1.35, 0.81, -0.35); fl.rotation.y = 2.2; scene.add(fl);
    const mini = P.slabSaw({ bladeY: 2.5 }); mini.scale.setScalar(0.27); mini.position.set(3.1, 0, -3.6); mini.rotation.y = -0.75; scene.add(mini);
    add(P.contactShadow(2.2, 0.16), 3.1, 0, -3.6);
    const winW = s.localToWorld(V(0.33, 0.42, 0.86));
    return {
      cam: { p: V(-2.6, 3.4, 8.6), t: V(-1.25, 1.35, 0), fov: 30 }, camM: { p: V(0.2, 4.4, 12.6), t: V(0.25, 1.75, 0), fov: 40 }, ui: 'hero',
      hot: [
        { label: '石皮', sub: 'Rind · 风化外壳', pos: s.localToWorld(V(-0.9, 0.55, 0.55)), side: 'l', dy: -30 },
        { label: '开窗', sub: 'Window · 局部去皮', pos: winW.clone().add(V(0, -0.35, 0)), side: 'r', dy: 40 },
        { label: '裂隙', sub: 'Fissure · 贯穿内部', pos: s.localToWorld(fisPoint()), side: 'r', dy: -60 },
      ],
    };
  },

  mine() {
    studio();
    const mb = add(P.mineBlock());
    const h = mb.userData.h, pit = mb.userData.pit;
    const ex = P.excavator({ boom: 0.55, stick: -1.35, bucket: -0.9 }); const ex0 = V(pit.x - 1.05, 0, pit.y + 0.25); ex0.y = h(ex0.x, ex0.z);
    ex.position.copy(ex0); ex.rotation.y = 0.15; ex.scale.setScalar(1.35); scene.add(ex);
    const tk = P.truck(); tk.position.set(-2.1, h(-2.1, 1.9), 1.9); tk.rotation.y = -0.7; tk.scale.setScalar(1.3); scene.add(tk);
    scene.updateMatrixWorld(true);
    const bp = ex.userData.bucket.localToWorld(V(0.1, 0.08, 0));
    const st = stone(); st.scale.setScalar(0.11); st.position.copy(bp); scene.add(st);
    const bot = mb.userData.top - 5 * mb.userData.stepH;
    [[0.9, 0.5, 0.1], [0.2, -0.3, 0.08], [0.7, -0.35, 0.065]].forEach(([x, z, s], i) => { const b = stone(); b.scale.setScalar(s); b.rotation.y = i * 2; b.position.set(pit.x + x - 0.3, bot + FY * s, pit.y + z); scene.add(b); });
    return {
      cam: { p: V(9.0, 8.6, 9.6), t: V(-0.7, -0.3, 0.6), fov: 29 }, ui: 'process', stage: 1,
      hot: [{ label: '原生矿 / 次生矿', sub: '开采方式因矿区而异', pos: V(pit.x + 0.4, bot, pit.y) }, { label: '挖掘机', sub: 'Excavator', pos: ex0.clone().add(V(0, 0.45, 0)) }, { label: '原石', sub: 'Rough boulder', pos: bp }],
    };
  },

  wash() {
    studio();
    const basin = P.rbox(3.6, 0.5, 2.8, 0.08, T.enamel); add(basin, 0, 0.25, 0);
    const wfl = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 2.5), T.waterSurf); wfl.rotation.x = -Math.PI / 2; add(wfl, 0, 0.47, 0);
    for (let i = -6; i <= 6; i++) add(P.rbox(0.16, 0.08, 2.3, 0.02, T.wood), i * 0.24, 0.55, 0);
    const s = stone({ wet: 1 }); s.rotation.y = 0.6; add(s, 0, 0.59 + FY, 0);
    const nozzle = V(-1.4, 3.0, 1.2), hit = V(-0.25, 1.8, 0.35);
    scene.add(P.tube([[-4, 0.1, 2.5], [-3, 1.2, 2.2], [-2.0, 3.2, 1.6], nozzle.toArray()], 0.06, T.A ? T.accent : T.rubber));
    const nz = P.cyl(0.06, 0.04, 0.35, T.brass, 24); nz.position.copy(nozzle); nz.lookAt(hit); nz.rotateX(Math.PI / 2); scene.add(nz);
    scene.add(P.coolant([nozzle], hit, { n: 220, spread: 0.12, spray: 120, dir: V(0.3, 0.4, 0.6) }));
    add(P.mist(hit, 1.6, 0.4));
    return { cam: { p: V(4.2, 4.6, 7.4), t: V(0, 1.3, 0), fov: 32 }, ui: 'process', stage: 2, hot: [{ label: '湿润的石皮', sub: '纹理更清楚', pos: s.localToWorld(V(0.3, 0.6, 0.6)) }] };
  },

  inspect() {
    studio({ dim: true });
    add(P.plinth(1.4, 0.5)); const s = stone(); s.rotation.y = 0; add(s, 0, 0.5 + FY, 0);
    const dir = V(0.55, 0.35, 0.76).normalize(); const r = Rdir(dir); const sp = dir.clone().multiplyScalar(r * 0.995);
    s.material.userData.u.uTorch.value.set(sp.x, sp.y, sp.z, 5.0);
    const fl = P.flashlight(true); const tip = s.localToWorld(sp.clone());
    fl.quaternion.setFromUnitVectors(V(1, 0, 0), dir.clone().negate()); fl.position.copy(tip).addScaledVector(dir, 0.66); scene.add(fl);
    const pt = new THREE.PointLight(0xdfffe8, 2.5, 3, 2); pt.position.copy(tip).addScaledVector(dir, 0.05); scene.add(pt);
    return { cam: { p: V(3.2, 2.8, 5.4), t: V(0.2, 1.3, 0), fov: 32 }, ui: 'process', stage: 3, hot: [{ label: '打灯', sub: '只看到局部透光', pos: tip }] };
  },

  window() {
    studio();
    add(P.plinth(1.4, 0.5)); const s = stone({ win: true }); s.rotation.y = -0.25; add(s, 0, 0.5 + FY, 0);
    const gr = new THREE.Group();
    const body = P.cyl(0.13, 0.13, 0.9, T.A ? T.accent : T.enamel2); body.rotation.z = Math.PI / 2; gr.add(body);
    const head = P.rbox(0.3, 0.26, 0.3, 0.05, T.darkSteel); head.position.x = 0.55; gr.add(head);
    const disc = P.cyl(0.32, 0.32, 0.02, T.grit); disc.position.set(0.55, -0.2, 0); gr.add(disc);
    gr.position.set(1.4, 2.25, 1.4); gr.rotation.set(0.2, -0.75, -0.5); scene.add(gr);
    add(P.mist(s.localToWorld(V(0.45, 0.5, 0.75)), 0.9, 0.35));
    return { cam: { p: V(2.6, 3.0, 6.0), t: V(0.1, 1.35, 0), fov: 30 }, ui: 'process', stage: 4, hot: [{ label: '开窗', sub: '去除局部石皮', pos: s.localToWorld(V(0.3, 0.4, 0.86)) }] };
  },

  plan() {
    studio();
    add(P.plinth(1.4, 0.5)); const s = stone({ win: true, plans: [[1, 0, 0, 0], [1, 0, 0, SLAB.x0], [1, 0, 0, SLAB.x1]] }); s.rotation.y = -0.6; add(s, 0, 0.5 + FY, 0);
    return { cam: { p: V(3.6, 4.0, 5.6), t: V(0, 1.2, 0), fov: 30 }, ui: 'process', stage: 5, hot: [{ label: '切割线', sub: '先对半，再取板', pos: s.localToWorld(V(0, 0.92, 0.2)) }] };
  },

  saw() {
    studio();
    const base = 1.22, bladeY = base - 0.06 + 1.55;
    add(P.slabSaw({ bladeY, bladeZ: -0.25 }));
    const { a, b } = halves(true);
    a.position.set(-0.012, base + FY, 0.2); b.position.set(0.012, base + FY, 0.2); scene.add(a, b);
    [[-1.42, 1], [1.42, -1]].forEach(([x]) => add(P.rbox(0.18, 0.55, 0.9, 0.03, T.darkSteel), x, base + 0.27, 0.2));
    const contact = V(0, base + 1.65, 0.75);
    scene.add(P.coolant([V(-0.12, bladeY - 0.3, -0.25 + 1.55 * 0.55), V(0.12, bladeY - 0.3, -0.25 + 1.55 * 0.55)], contact, { n: 160, spray: 140, dir: V(0, 0.3, 1) }));
    return { cam: { p: V(5.5, 4.6, 7.5), t: V(0, 1.9, 0), fov: 30 }, ui: 'process', stage: 6, hot: [{ label: '冷却水', sub: '降温 · 带走岩粉', pos: contact }] };
  },

  cut() {
    studio();
    const base = 1.22;
    add(P.slabSaw({ bladeY: 3.15, bladeZ: -0.55 }));
    const { a, b } = halves(true);
    a.position.set(-0.8, base + FY, 0.6); a.rotation.y = -0.72;
    b.position.set(0.8, base + FY, 0.6); b.rotation.y = 0.72;
    scene.add(a, b);
    add(P.mist(V(0, base + 0.4, 0.9), 2.6, 0.3));
    const drops = P.coolant([V(0, 2.5, 0.2)], V(0, 1.25, 0.6), { n: 60, spray: 60, dir: V(0, 0.2, 1) }); scene.add(drops);
    scene.updateMatrixWorld(true);
    return {
      cam: { p: V(4.6, 6.0, 11.2), t: V(-0.55, 2.0, 0.2), fov: 30 }, ui: 'process', stage: 6, wide: true,
      hot: [
        { label: '切面', sub: '与原石内部连续', pos: a.localToWorld(V(0, 0.35, -0.2)), side: 'l' },
        { label: '色带', sub: 'Colour band', pos: b.localToWorld(V(0, -0.15, 0.35)), side: 'r', dy: 40 },
        { label: '石皮', sub: '外缘风化层', pos: b.localToWorld(V(0.3, 0.82, 0.3)), side: 'r' },
      ],
    };
  },

  slab() {
    studio();
    add(P.rbox(4.2, 0.7, 3.0, 0.06, T.enamel), 0, 0.35, 0);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.03, 2.4), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfffdf6, emissiveIntensity: 1.1 })); add(panel, 0, 0.715, 0);
    const g = slab({ marks: true }); g.rotation.z = Math.PI / 2; g.position.set(0, 0.73 - SLAB.x0, 0); scene.add(g);
    const pen = P.cyl(0.04, 0.04, 0.9, T.accent, 24); pen.rotation.set(Math.PI / 2, 0, 0.9); add(pen, 1.25, 0.77, 0.6);
    return { cam: { p: V(0.4, 5.3, 3.6), t: V(0, 0.75, 0), fov: 30 }, ui: 'process', stage: 7, hot: [{ label: '画圈', sub: '避开裂与色差', pos: V(0, 0.9, 0.45) }] };
  },

  core() {
    studio();
    const top = 0.31;
    const drill = P.coreDrill({ ri: RING.ri, ro: RING.ro, headY: 0.31 + SL_T + 1.0, bitLen: 0.95 });
    drill.position.set(0, 0, -0.45); scene.add(drill);
    const g = slab({ holes: [0] }); g.rotation.z = Math.PI / 2; g.position.set(0, top - SLAB.x0, 0); scene.add(g);
    g.add(core(0, 0.0));
    const bl = bangle('blank', 0); placeOnAxis(bl, frameOf(SITES[0]), 0.42); g.add(bl);
    return { cam: { p: V(3.0, 2.9, 3.9), t: V(0, 0.75, 0.2), fov: 30 }, ui: 'process', stage: 8, hot: [{ label: '镯坯', sub: 'Bangle blank', pos: V(0, top + SL_T + 0.42, 0.85) }, { label: '镯芯', sub: 'Core · 可另作他用', pos: V(0, top + SL_T, 0.45) }, { label: '余料', sub: 'Offcut', pos: V(0.1, top + SL_T, -1.0) }] };
  },

  rough() { return grindShot('blank', 'coarse', 9, { p: V(4.8, 3.6, 6.4), t: V(0.2, 1.2, 0.4), fov: 30 }); },
  fine() { return grindShot('fine', 'fine', 10, { p: V(2.6, 2.0, 3.6), t: V(0.95, 1.3, 1.0), fov: 30 }); },
  polish() { return grindShot('polish', 'felt', 11, { p: V(3.4, 1.7, 2.2), t: V(0.95, 1.35, 1.1), fov: 28 }); },

  grind() {
    studio();
    const gr = P.grinder({ wheel: 'fine' }); scene.add(gr);
    const wp = gr.userData.wheelPos, wr = gr.userData.wheelR;
    const bl = free(bangle('fine')); bl.rotation.z = -Math.PI / 2; bl.position.set(wp.x, wp.y, wp.z + wr + 0.385); scene.add(bl);
    const arbor = P.cyl(0.05, 0.05, 0.7, T.steel); arbor.rotation.z = Math.PI / 2; arbor.position.set(wp.x + 0.05, wp.y, wp.z + wr + 0.385); scene.add(arbor);
    // rough blank & polished bangle waiting on the bench to show progression
    const b0 = free(bangle('blank', 1)); b0.position.set(-0.6, 0.98, 0.45); scene.add(b0);
    const b2 = free(bangle('polish', 1)); b2.position.set(-1.6, 0.96, 0.45); scene.add(b2);
    scene.add(P.coolant([V(wp.x, 2.18, 0.2)], V(wp.x, wp.y + 0.2, wp.z + wr - 0.05), { n: 40, spray: 90, sprayAt: V(wp.x, wp.y, wp.z + wr + 0.05), dir: V(0, -0.4, 1) }));
    return {
      cam: { p: V(4.4, 3.7, 7.4), t: V(-0.2, 1.15, 0.5), fov: 30 }, ui: 'process', stage: 10, wide: true,
      hot: [{ label: '精磨中', sub: '消除粗磨痕', pos: V(wp.x, wp.y + 0.38, wp.z + wr + 0.385) }, { label: '镯坯', sub: '粗糙 · 无光泽', pos: V(-0.6, 1.05, 0.45) }, { label: '抛光后', sub: '温润 · 有光泽', pos: V(-1.6, 1.05, 0.45) }],
    };
  },

  showcase() { return showcaseShot(); },
};

function grindShot(stage, wheel, n, cam) {
  studio();
  const gr = P.grinder({ wheel }); scene.add(gr);
  const wp = gr.userData.wheelPos, wr = gr.userData.wheelR;
  const bl = free(bangle(stage)); bl.rotation.z = -Math.PI / 2; bl.position.set(wp.x, wp.y, wp.z + wr + 0.385); scene.add(bl);
  const arbor = P.cyl(0.05, 0.05, 0.7, T.steel); arbor.rotation.z = Math.PI / 2; arbor.position.set(wp.x + 0.05, wp.y, wp.z + wr + 0.385); scene.add(arbor);
  if (wheel !== 'felt') scene.add(P.coolant([V(wp.x, 2.18, 0.2)], V(wp.x, wp.y + 0.2, wp.z + wr - 0.05), { n: 40, spray: 60, sprayAt: V(wp.x, wp.y, wp.z + wr + 0.05), dir: V(0, -0.4, 1) }));
  return { cam, ui: 'process', stage: n, hot: [] };
}

const ring = (o, deg) => { const a = (deg * Math.PI) / 180; return o.localToWorld(V(Math.sin(a) * 0.386, 0, Math.cos(a) * 0.386)); };
function showcaseShot() {
  studio();
  const A = THEME === 'A';
  add(P.plinth(1.3, 1.1)); add(P.contactShadow(4.2, 0.25));
  const top = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.04, 96), T.velvet); top.receiveShadow = true; add(top, 0, 1.12, 0);
  // bangle stands on its edge in a low velvet cradle, turned to show its thickness
  const k = 2.2, cy = 1.14 + 0.386 * k - 0.04;
  const cradle = P.rbox(0.9, 0.12, 0.42, 0.05, T.velvet); add(cradle, 0, 1.2, 0); cradle.rotation.y = -0.65;
  const bg = free(bangle('final')); bg.scale.setScalar(k);
  bg.rotation.set(Math.PI / 2, 0, 0); bg.rotation.order = 'YXZ'; bg.rotation.y = -0.65; bg.position.set(0, cy, 0);
  scene.add(bg);
  if (scene.userData.spot) { scene.userData.spot.target.position.set(0, 1.4, 0); }
  const w = (x, y, z) => bg.localToWorld(V(x, y, z));
  scene.updateMatrixWorld(true);
  return {
    cam: { p: V(2.2, 2.9, 7.0), t: V(-0.8, 1.85, 0), fov: 30 }, camBare: { p: V(1.6, 2.6, 5.2), t: V(0, 1.75, 0), fov: 30 }, ui: 'final',
    hot: [
      { label: '边缘透光', sub: 'Translucent edge', pos: ring(bg, 200), side: 'l', dy: -20 },
      { label: '色带', sub: '自然浓淡变化', pos: ring(bg, 330), side: 'r', dy: -40 },
      { label: '抛光高光', sub: 'Polish lustre', pos: ring(bg, 20), side: 'r', dy: 40 },
    ],
  };
}

// ---------- run ----------
const fn = SHOTS[SHOT];
if (!fn) throw new Error('unknown shot ' + SHOT);
const meta = fn();
scene.updateMatrixWorld(true);
for (const m of clipList) {
  m.material.clippingPlanes = [m.userData.clip.clone().applyMatrix4(m.matrixWorld)];
  m.material.clipShadows = true;
}
scene.traverse((o) => { if (o.isMesh && o.material && !o.userData.keepEnv) { (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if ('envMapIntensity' in m) m.envMapIntensity = ENV * (scene.userData.envScale ?? 1); }); } });

if (W < 700 && meta.camM) meta.cam = meta.camM;
if (!SHOW_UI && meta.camBare) meta.cam = meta.camBare;
const camera = new THREE.PerspectiveCamera(meta.cam.fov, W / H, 0.1, 200);
camera.position.copy(meta.cam.p); camera.lookAt(meta.cam.t);
renderer.render(scene, camera);
renderer.render(scene, camera);
const hot = (meta.hot || []).map((h) => { const v = h.pos.clone().project(camera); return { ...h, x: (v.x * 0.5 + 0.5) * W, y: (-v.y * 0.5 + 0.5) * H }; });
if (SHOW_UI && meta.ui) renderUI({ theme: THEME, kind: meta.ui, stage: meta.stage, hot, W, H, shot: SHOT });
window.__ready = true;
