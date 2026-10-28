import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gsap from 'gsap';
import { makeTextures, rng } from './textures.js';
import { PixelRenderer } from './pixel-renderer.js';
import { makeMaterials } from './pagoda.js';
import * as W from './world.js';
import { Person, randomLook } from './people.js';
import { Incense, Birds } from './effects.js';
import { PRESETS, makeState, blendState } from './presets.js';
import { BUILDINGS, SOURCES, ROLES, STATUS, ACTIONS, UI, makePersonData } from './data.js';

// ---------------------------------------------------------------- renderer / scene
const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const world = new THREE.Group();
const fx = new THREE.Group(); // transparent fx, excluded from the edge pass
scene.add(world, fx);

const pmrem = new THREE.PMREMGenerator(renderer);
const envMap = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

// ---------------------------------------------------------------- camera + orbit controls
const AZ = THREE.MathUtils.degToRad(45);
const EL = THREE.MathUtils.degToRad(32);
const DIST = 62;
const camDir = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 20, 120);
camera.position.copy(camDir).multiplyScalar(DIST);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.rotateSpeed = 0.55;
controls.zoomSpeed = 0.8;
controls.panSpeed = 0.8;
controls.screenSpacePanning = true;
controls.zoomToCursor = true;
controls.minZoom = 0.75;
controls.maxZoom = 4.5;
controls.minPolarAngle = THREE.MathUtils.degToRad(16); // never straight down
controls.maxPolarAngle = THREE.MathUtils.degToRad(74); // never below the plinth
controls.autoRotateSpeed = 0.55;
controls.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

// ---------------------------------------------------------------- lights
const hemi = new THREE.HemisphereLight('#eef4ff', '#a8977a', 1.5);
const sun = new THREE.DirectionalLight('#fff3df', 3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -19, right: 19, top: 19, bottom: -19, near: 1, far: 100 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.025;
scene.add(hemi, sun, sun.target);
const floods = [];
for (let i = 0; i < 4; i++) {
  const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
  const l = new THREE.PointLight('#ffc46a', 0, 10, 1.4);
  l.position.set(W.PAGODA.x + Math.cos(a) * 9.0, 1.8, W.PAGODA.z + Math.sin(a) * 9.0);
  scene.add(l);
  floods.push(l);
}

// ---------------------------------------------------------------- build the diorama
const tex = makeTextures();
const M = makeMaterials(envMap, tex);
const swayers = [];
W.buildBase(world, tex, M);
W.buildBalustrade(world, M);
W.buildStairs(world, M);
const plaza = W.buildPlaza(world, M);
W.buildGreenery(world, swayers);
const incense = new Incense(fx, plaza.incense);
const birds = new Birds(world, W.PAGODA);

// ---------------------------------------------------------------- people (fictional demo characters)
const Y = W.PLAZA_Y;
const C = W.PAGODA;
const pr = rng(2024);
const PS = 1.45;
const people = [];
const free = (x, z, r = 0.5) =>
  Math.abs(x) < W.HX - 0.95 && Math.abs(z) < W.HZ - 0.95 && plaza.obstacles.every(([ox, oz, or]) => Math.hypot(x - ox, z - oz) > or + r);

function addPerson(look, opts, x, z, ry) {
  const data = makePersonData(people.length + 1, opts.role, Math.floor(pr() * 1000));
  const p = new Person(look, { ...opts, data });
  p.root.position.set(x, Y, z);
  p.root.rotation.y = ry;
  p.root.scale.setScalar(PS);
  world.add(p.root);
  people.push(p);
  return p;
}
const matGeo = new THREE.BoxGeometry(0.62, 0.025, 0.86);
function kneel(x, z, target = [C.x, C.z]) {
  if (!free(x, z)) return;
  const ry = Math.atan2(target[0] - x, target[1] - z) + (pr() - 0.5) * 0.1;
  addPerson(randomLook(pr), { role: 'devotee', idle: pr() < 0.45 ? 'prostrate' : 'pray', phase: pr() * 7 }, x, z, ry);
  const rug = new THREE.Mesh(matGeo, pr() < 0.7 ? M.rug : M.darkRed);
  rug.position.set(x, 0.012, z);
  rug.rotation.y = ry;
  rug.receiveShadow = true;
  world.add(rug);
  plaza.obstacles.push([x, z, 0.38]);
}
const arcs = [
  [9.85, 0.0, 1.6],
  [10.75, 0.0, 1.6],
  [11.65, 0.0, 1.6],
  [12.55, 0.1, 1.5],
  [13.45, 0.3, 1.3],
  [9.85, 1.75, 2.5],
  [10.75, 1.8, 2.4],
  [9.85, -0.75, -0.05],
];
for (const [r, a0, a1] of arcs) {
  const step = 0.92 / r;
  for (let a = a0; a <= a1; a += step) kneel(C.x + Math.cos(a) * r, C.z + Math.sin(a) * r);
}
for (const [x, z] of [[-5.4, 8.4], [10.2, 6.8], [9.4, 3.4], [-9.8, 6.0], [3.0, 9.0]]) {
  if (!free(x, z, 0.3)) continue;
  const look = { ...randomLook(pr), offering: ['#f2c94c', '#ffffff', '#e86a8a'][Math.floor(pr() * 3)] };
  addPerson(look, { role: 'pilgrim', idle: 'standPray' }, x, z, Math.atan2(C.x - x, C.z - z));
}
const robes = [[0.3, '#d9772b', true], [1.5, '#7c2b22', false], [2.6, '#e08a35', true], [3.8, '#7c2b22', true], [4.9, '#e9a7b4', false], [5.7, '#d9772b', false]];
for (const [a, robe, bowl] of robes) {
  const nun = robe === '#e9a7b4';
  addPerson({ monk: true, skin: '#c48a62', robe, bowl }, { role: nun ? 'nun' : 'monk', idle: 'walk', walker: { center: C, radius: 8.75, angle: a, speed: 0.4 } }, 0, 0, 0);
}

// ---------------------------------------------------------------- pick lists (built once)
const proxies = people.map((p) => p.proxy);
const buildingMeshes = new Set();
world.traverse((o) => {
  if (o.userData.pick) o.traverse((c) => c.isMesh && buildingMeshes.add(c));
});
const pickList = [...proxies, ...buildingMeshes];

// ---------------------------------------------------------------- pixel pipeline + responsive fit
const pixel = new PixelRenderer(renderer, scene, camera, [fx]);
pixel.uniforms.uAO.value = 0.28;
pixel.uniforms.uNormalEdge.value = 0.2;
pixel.uniforms.uDepthEdge.value = 0.24;
const FIT = [];
for (let i = 0; i < 8; i++) FIT.push(new THREE.Vector3(i & 1 ? W.HX + 0.3 : -W.HX - 0.3, i & 2 ? 3.6 : -W.WALL_H - 0.1, i & 4 ? W.HZ + 0.3 : -W.HZ - 0.3));
for (const s of W.STAIRS) {
  const out = 3.4;
  if (s.face === 'z') FIT.push(new THREE.Vector3(s.c - s.w, -W.WALL_H, W.HZ + out), new THREE.Vector3(s.c + s.w, -W.WALL_H, W.HZ + out));
  else FIT.push(new THREE.Vector3(W.HX + out, -W.WALL_H, s.c - s.w), new THREE.Vector3(W.HX + out, -W.WALL_H, s.c + s.w));
}
FIT.push(new THREE.Vector3(C.x, Y + plaza.main.height + 0.3, C.z));

const QUALITY = [
  { artW: 980, levels: 64, dither: 0.35 },
  { artW: 680, levels: 48, dither: 0.5 },
  { artW: 430, levels: 28, dither: 0.8 },
];
let qualityIdx = 0;
try {
  const q = Number(localStorage.getItem('pagoda-quality'));
  if (q >= 0 && q < QUALITY.length) qualityIdx = q;
} catch (e) {}

const view = { w: 1, h: 1, devW: 1, devH: 1, cssW: 1, cssH: 1 };
const home = { target: new THREE.Vector3(), offset: camDir.clone().multiplyScalar(DIST), zoom: 1 };
let homeSet = false;
const tmpCam = new THREE.OrthographicCamera();

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (!w || !h) return; // hidden / background tab: wait for a real size
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(w, h, false);
  const buf = renderer.getDrawingBufferSize(new THREE.Vector2());

  // fit the diorama in the default isometric orientation
  tmpCam.position.copy(home.offset);
  tmpCam.lookAt(0, 0, 0);
  tmpCam.updateMatrixWorld();
  const inv = tmpCam.matrixWorldInverse;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const v = new THREE.Vector3();
  for (const p of FIT) {
    v.copy(p).applyMatrix4(inv);
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
  }
  const bw = maxX - minX;
  const bh = maxY - minY;
  const mobile = w < 640;
  const navH = mobile ? 150 : 176;
  const topH = mobile ? 44 : 60;
  const fill = mobile ? 0.96 : 0.8;
  const upp = Math.max(bw / (w * fill), bh / ((h - navH - topH) * 0.94));
  Object.assign(view, { w: w * upp, h: h * upp, devW: buf.x, devH: buf.y, cssW: w, cssH: h, upp });

  // orbit pivot: the point on the view ray through the fit-centre closest to the vertical axis
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2 - ((navH - topH) / 2) * upp;
  const right = new THREE.Vector3().setFromMatrixColumn(tmpCam.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(tmpCam.matrixWorld, 1);
  const p0 = right.multiplyScalar(cx).addScaledVector(up, cy);
  const s = -(p0.x * camDir.x + p0.z * camDir.z) / (camDir.x * camDir.x + camDir.z * camDir.z);
  home.target.copy(p0).addScaledVector(camDir, s);

  const Q = QUALITY[qualityIdx];
  const ps = Math.max(2, Math.round(((bw / upp) * (buf.x / w)) / Q.artW));
  pixel.setSize(buf.x, buf.y, ps);
  pixel.uniforms.uLevels.value = Q.levels;
  pixel.uniforms.uDither.value = Q.dither;

  if (!homeSet) {
    controls.target.copy(home.target);
    camera.position.copy(home.target).add(home.offset);
    camera.zoom = 1;
    homeSet = true;
  }
  const ex = (pixel.lowW * pixel.pixelSize) / buf.x;
  const ey = (pixel.lowH * pixel.pixelSize) / buf.y;
  camera.left = -view.w / 2;
  camera.right = camera.left + view.w * ex;
  camera.bottom = -view.h / 2;
  camera.top = camera.bottom + view.h * ey;
  camera.updateProjectionMatrix();
  controls.update();
  positionIndicator(false);
}

// ---------------------------------------------------------------- camera moves (GSAP)
let flyTween = null;
function flyTo(dest, dur = 1.2) {
  if (flyTween) flyTween.kill();
  const t0 = controls.target.clone();
  const o0 = camera.position.clone().sub(controls.target);
  const len = o0.length();
  const z0 = camera.zoom;
  const s = { p: 0 };
  controls.enabled = false;
  flyTween = gsap.to(s, {
    p: 1,
    duration: dur,
    ease: 'power2.inOut',
    onUpdate: () => {
      controls.target.lerpVectors(t0, dest.target, s.p);
      const o = o0.clone().lerp(dest.offset, s.p).setLength(len);
      camera.position.copy(controls.target).add(o);
      camera.zoom = z0 + (dest.zoom - z0) * s.p;
      camera.updateProjectionMatrix();
    },
    onComplete: () => {
      controls.enabled = true;
      flyTween = null;
    },
  });
}
const captureView = () => ({ target: controls.target.clone(), offset: camera.position.clone().sub(controls.target), zoom: camera.zoom });
const homeView = () => ({ target: home.target.clone(), offset: home.offset.clone(), zoom: 1 });
function zoomBy(f) {
  const z = THREE.MathUtils.clamp(camera.zoom * f, controls.minZoom, controls.maxZoom);
  gsap.to(camera, { zoom: z, duration: 0.6, ease: 'power2.out', onUpdate: () => camera.updateProjectionMatrix() });
}
function rotateBy(angle) {
  const v = captureView();
  v.offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
  flyTo(v, 1.3);
}
function setAuto(on) {
  controls.autoRotate = on;
  document.querySelector('[data-tool="auto"]').classList.toggle('active', on);
}

// ---------------------------------------------------------------- selection fx: highlight ring, burst, sparkles
const ringGeo = new THREE.RingGeometry(0.82, 1, 48);
ringGeo.rotateX(-Math.PI / 2);
const selRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: '#ffd36a', transparent: true, opacity: 0, depthWrite: false }));
const burstRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: '#fff1c4', transparent: true, opacity: 0, depthWrite: false }));
selRing.visible = burstRing.visible = false;
fx.add(selRing, burstRing);
const sparkGeo = new THREE.OctahedronGeometry(0.06, 0);
const sparks = [];
for (let i = 0; i < 16; i++) {
  const s = new THREE.Mesh(sparkGeo, new THREE.MeshBasicMaterial({ color: '#ffe08a', transparent: true, opacity: 0, depthWrite: false }));
  s.visible = false;
  fx.add(s);
  sparks.push({ mesh: s, vel: new THREE.Vector3(), life: 0 });
}
let burstT = 1;
let burstR = 1;
function burst(pos, radius) {
  burstRing.position.copy(pos);
  burstRing.visible = true;
  burstT = 0;
  burstR = radius;
  for (const s of sparks) {
    s.mesh.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * radius, 0.2 + Math.random() * 0.4, (Math.random() - 0.5) * radius));
    s.vel.set((Math.random() - 0.5) * 0.6, 0.8 + Math.random() * 0.9, (Math.random() - 0.5) * 0.6);
    s.life = 0;
    s.mesh.visible = true;
  }
}
function updateFx(dt, t) {
  if (burstT < 1) {
    burstT = Math.min(1, burstT + dt / 0.9);
    burstRing.scale.setScalar(burstR * (0.3 + 1.2 * (1 - Math.pow(1 - burstT, 3))));
    burstRing.material.opacity = 0.8 * (1 - burstT);
    if (burstT >= 1) burstRing.visible = false;
  }
  for (const s of sparks) {
    if (!s.mesh.visible) continue;
    s.life += dt / 1.2;
    s.mesh.position.addScaledVector(s.vel, dt);
    s.mesh.rotation.y += dt * 4;
    s.mesh.material.opacity = Math.max(0, 1 - s.life);
    if (s.life >= 1) s.mesh.visible = false;
  }
  if (selRing.visible) {
    selRing.material.opacity = 0.55 + 0.25 * Math.sin(t * 3);
    if (sel && sel.person) selRing.position.set(sel.person.root.position.x, 0.03, sel.person.root.position.z);
  }
  if (sel && sel.person && sel.glow) for (const m of sel.glow) m.emissiveIntensity = 0.25 + 0.15 * Math.sin(t * 3);
}

// ---------------------------------------------------------------- selection
let sel = null;
let savedView = null;
const box = new THREE.Box3();

function glowPerson(p) {
  const glow = [];
  p._orig = p.meshes.map((mesh) => mesh.material);
  for (const mesh of p.meshes) {
    const c = mesh.material.clone();
    c.emissive = new THREE.Color('#ffc65a');
    c.emissiveIntensity = 0.3;
    mesh.material = c;
    glow.push(c);
  }
  return glow;
}
function unglowPerson(p) {
  if (!p._orig) return;
  p.meshes.forEach((mesh, i) => {
    mesh.material.dispose();
    mesh.material = p._orig[i];
  });
  p._orig = null;
}
function clearSelection() {
  if (sel && sel.person) unglowPerson(sel.person);
  selRing.visible = false;
  sel = null;
}

function focusPoint(center, zoom) {
  // keep the selection clear of the info card (right side on desktop, bottom sheet on phones)
  const mobile = view.cssW < 760;
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
  const pxToWorld = view.upp / zoom;
  const target = center.clone();
  if (mobile) target.addScaledVector(up, -view.cssH * 0.2 * pxToWorld);
  else target.addScaledVector(right, 200 * pxToWorld);
  flyTo({ target, offset: camera.position.clone().sub(controls.target), zoom }, 1.3);
}

function selectPerson(p) {
  if (!savedView) savedView = captureView();
  setAuto(false);
  clearSelection();
  sel = { kind: 'person', person: p };
  sel.glow = glowPerson(p);
  selRing.visible = true;
  selRing.scale.setScalar(0.55 * PS);
  const pos = p.root.position.clone();
  burst(pos.clone().setY(0.03), 0.7 * PS);
  // a gentle response: bow the head if kneeling, join hands if standing
  p.play(p.pose.k > 0.5 ? 'bowHead' : 'gassho');
  focusPoint(pos.clone().setY(0.6 * PS), 3.4);
  showCard();
}

function selectBuilding(obj, id) {
  if (!savedView) savedView = captureView();
  setAuto(false);
  clearSelection();
  sel = { kind: 'building', id, obj };
  box.setFromObject(obj);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const r = Math.max(size.x, size.z) / 2;
  selRing.visible = true;
  selRing.position.set(center.x, box.min.y + 0.03, center.z);
  selRing.scale.setScalar(r * 1.08 + 0.2);
  burst(new THREE.Vector3(center.x, box.min.y + 0.05, center.z), r);
  const zoom = THREE.MathUtils.clamp((view.h * 0.55) / Math.max(size.y, r * 1.6), 1.2, 3.8);
  focusPoint(center, zoom);
  showCard();
}

function deselect(restore = true) {
  const had = sel !== null || card.classList.contains('show');
  clearSelection();
  hideCard();
  if (had && restore && savedView) flyTo(savedView, 1.2);
  savedView = null;
}

// ---------------------------------------------------------------- picking + click/drag separation
const raycaster = new THREE.Raycaster();
function ndcFromEvent(e) {
  const rect = canvas.getBoundingClientRect();
  const sx = view.devW / rect.width;
  const xd = (e.clientX - rect.left) * sx;
  const yd = view.devH - (e.clientY - rect.top) * sx;
  return new THREE.Vector2((xd / (pixel.lowW * pixel.pixelSize)) * 2 - 1, (yd / (pixel.lowH * pixel.pixelSize)) * 2 - 1);
}
function pick(e) {
  raycaster.setFromCamera(ndcFromEvent(e), camera);
  const hits = raycaster.intersectObjects(pickList, false);
  for (const h of hits) {
    if (h.object.userData.person) return { person: h.object.userData.person };
    let o = h.object;
    while (o && !o.userData.pick) o = o.parent;
    if (o) return { building: o, id: o.userData.pick.id };
  }
  return null;
}

// OrbitControls would start rotating on every pointerdown; we hold the event back
// until the pointer actually moves, so a click never nudges the camera.
const DRAG_PX = 6;
let pending = null;
function forward(orig) {
  const ev = new PointerEvent('pointerdown', orig);
  ev.__fwd = true;
  canvas.dispatchEvent(ev);
}
canvas.addEventListener(
  'pointerdown',
  (e) => {
    if (e.__fwd) return;
    hint.classList.add('gone');
    if (flyTween) {
      // user input interrupts any running camera move
      flyTween.kill();
      flyTween = null;
      controls.enabled = true;
    }
    if (pending && pending.id !== e.pointerId) {
      // second finger: release the first so pinch / two-finger pan work
      forward(pending.e);
      pending = null;
      return;
    }
    e.stopImmediatePropagation();
    pending = { e, id: e.pointerId, x: e.clientX, y: e.clientY };
  },
  { capture: true }
);
canvas.addEventListener(
  'pointermove',
  (e) => {
    if (pending && e.pointerId === pending.id && Math.hypot(e.clientX - pending.x, e.clientY - pending.y) > DRAG_PX) {
      forward(pending.e);
      pending = null;
      setAuto(false);
    }
  },
  { capture: true }
);
window.addEventListener('pointerup', (e) => {
  if (!pending || e.pointerId !== pending.id) return;
  pending = null;
  if (e.button !== 0 && e.pointerType === 'mouse') return;
  const hit = pick(e);
  if (hit && hit.person) selectPerson(hit.person);
  else if (hit && hit.building) selectBuilding(hit.building, hit.id);
  else deselect();
});
window.addEventListener('pointercancel', () => (pending = null));
canvas.addEventListener('wheel', () => hint.classList.add('gone'), { passive: true });

// hover tooltip (mouse only, throttled)
const tooltip = document.getElementById('tooltip');
let hoverMain = 0;
let hoverMainT = 0;
let lastHover = 0;
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || e.buttons) return;
  const now = performance.now();
  if (now - lastHover < 70) return;
  lastHover = now;
  const hit = pick(e);
  hoverMainT = hit && hit.id === 'main' ? 1 : 0;
  if (hit) {
    const L = UI[lang];
    const title = hit.person ? hit.person.data.name[lang] : BUILDINGS[hit.id][lang].title;
    const sub = hit.person ? `${ROLES[hit.person.data.role][lang]} · ${STATUS[hit.person.status()][lang]}` : BUILDINGS[hit.id][lang].sub;
    tooltip.innerHTML = `<b>${title}</b><span>${sub}</span>`;
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.top = e.clientY + 'px';
    tooltip.classList.add('show');
    canvas.style.cursor = 'pointer';
    void L;
  } else {
    tooltip.classList.remove('show');
    canvas.style.cursor = 'grab';
  }
});
canvas.addEventListener('pointerleave', () => {
  tooltip.classList.remove('show');
  hoverMainT = 0;
});

// ---------------------------------------------------------------- info card
const card = document.getElementById('card');
const cardEls = {
  kicker: card.querySelector('.card-kicker'),
  title: card.querySelector('.card-title'),
  sub: card.querySelector('.card-sub'),
  badge: card.querySelector('.card-badge'),
  meta: card.querySelector('.card-meta'),
  body: card.querySelector('.card-body'),
  actions: card.querySelector('.card-actions'),
  source: card.querySelector('.card-source'),
};
let cardInfo = null; // { kind: 'person'|'building', person?, id? }

function renderCard() {
  if (!cardInfo) return;
  const L = UI[lang];
  if (cardInfo.kind === 'person') {
    const p = cardInfo.person;
    const d = p.data;
    cardEls.kicker.textContent = `${ROLES[d.role][lang]} · ${d.id}`;
    cardEls.title.textContent = d.name[lang];
    cardEls.sub.textContent = '';
    cardEls.badge.textContent = L.demo;
    cardEls.badge.hidden = false;
    cardEls.meta.innerHTML = `<div><dt>${L.role}</dt><dd>${ROLES[d.role][lang]}</dd></div><div><dt>${L.status}</dt><dd class="live-status">${STATUS[p.status()][lang]}</dd></div>`;
    cardEls.body.innerHTML = `<p>${d.bio[lang]}</p>`;
    cardEls.actions.innerHTML = `<div class="card-label">${L.actions}</div>` + ACTIONS.map((a) => `<button data-action="${a.id}">${a[lang]}</button>`).join('');
    cardEls.actions.hidden = false;
    cardEls.source.textContent = '';
  } else {
    const b = BUILDINGS[cardInfo.id][lang];
    cardEls.kicker.textContent = b.kicker;
    cardEls.title.textContent = b.title;
    cardEls.sub.textContent = b.sub;
    cardEls.badge.hidden = true;
    cardEls.meta.innerHTML = '';
    cardEls.body.innerHTML = b.body.map((t) => `<p>${t}</p>`).join('');
    cardEls.actions.hidden = true;
    cardEls.actions.innerHTML = '';
    cardEls.source.textContent = SOURCES[lang];
  }
  card.querySelector('.card-close').setAttribute('aria-label', L.close);
  card.scrollTop = 0;
}
function showCard(info) {
  cardInfo = info || (sel.kind === 'person' ? { kind: 'person', person: sel.person } : { kind: 'building', id: sel.id });
  renderCard();
  card.classList.add('show');
}
function hideCard() {
  card.classList.remove('show');
  cardInfo = null;
}
card.querySelector('.card-close').addEventListener('click', () => deselect());
cardEls.actions.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn || !cardInfo || cardInfo.kind !== 'person') return;
  const p = cardInfo.person;
  p.play(btn.dataset.action);
  burst(p.root.position.clone().setY(0.03), 0.55 * PS);
});
setInterval(() => {
  if (cardInfo && cardInfo.kind === 'person') {
    const el = cardEls.meta.querySelector('.live-status');
    if (el) el.textContent = STATUS[cardInfo.person.status()][lang];
  }
}, 300);

// ---------------------------------------------------------------- toolbar
const hint = document.getElementById('hint');
document.getElementById('toolbar').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-tool]');
  if (!btn) return;
  hint.classList.add('gone');
  switch (btn.dataset.tool) {
    case 'rotate':
      setAuto(false);
      rotateBy(-Math.PI / 2);
      break;
    case 'zoomIn':
      zoomBy(1.35);
      break;
    case 'zoomOut':
      zoomBy(1 / 1.35);
      break;
    case 'reset':
      setAuto(false);
      deselect(false);
      flyTo(homeView(), 1.4);
      break;
    case 'auto':
      if (!controls.autoRotate) {
        deselect(false);
        flyTo({ ...homeView(), offset: camera.position.clone().sub(controls.target).setY(home.offset.y) }, 1.0);
      }
      setAuto(!controls.autoRotate);
      break;
    case 'info':
      if (cardInfo && cardInfo.kind === 'building' && cardInfo.id === 'platform') deselect(false);
      else {
        clearSelection();
        showCard({ kind: 'building', id: 'platform' });
      }
      break;
  }
});
window.addEventListener('keydown', (e) => {
  const map = { 1: 'dawn', 2: 'noon', 3: 'dusk', 4: 'night' };
  if (map[e.key]) setScene(map[e.key]);
  if (e.key === 'p' || e.key === 'P') setQuality((qualityIdx + 1) % QUALITY.length);
  if (e.key === 'Escape') deselect();
  if (e.key === 'r' || e.key === 'R') rotateBy(-Math.PI / 2);
  if (e.key === '0') {
    deselect(false);
    flyTo(homeView(), 1.4);
  }
});

// ---------------------------------------------------------------- scene switcher + quality + language
const nav = document.getElementById('switcher');
const indicator = nav.querySelector('.indicator');
const buttons = [...nav.querySelectorAll('button')];
const initial = new URLSearchParams(location.search).get('scene');
let current = PRESETS[initial] ? initial : 'noon';
const state = makeState(PRESETS[current]);
let target = makeState(PRESETS[current]);
buttons.forEach((b) => b.classList.toggle('active', b.dataset.scene === current));

function positionIndicator(animate = true) {
  const btn = nav.querySelector(`button[data-scene="${current}"]`);
  if (!btn) return;
  if (!animate) indicator.style.transition = 'none';
  indicator.style.width = btn.offsetWidth + 'px';
  indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
  if (!animate) requestAnimationFrame(() => (indicator.style.transition = ''));
}
function setScene(name) {
  if (!PRESETS[name]) return;
  current = name;
  target = makeState(PRESETS[name]);
  buttons.forEach((b) => b.classList.toggle('active', b.dataset.scene === name));
  positionIndicator(true);
}
buttons.forEach((b) => b.addEventListener('click', () => setScene(b.dataset.scene)));

const qualityBtns = [...document.querySelectorAll('#quality button')];
function setQuality(i) {
  qualityIdx = i;
  qualityBtns.forEach((b) => b.classList.toggle('active', Number(b.dataset.q) === i));
  try {
    localStorage.setItem('pagoda-quality', String(i));
  } catch (e) {}
  resize();
}
qualityBtns.forEach((b) => b.addEventListener('click', () => setQuality(Number(b.dataset.q))));
qualityBtns.forEach((b) => b.classList.toggle('active', Number(b.dataset.q) === qualityIdx));

let lang = 'zh';
try {
  if (localStorage.getItem('pagoda-lang') === 'en') lang = 'en';
} catch (e) {}
function applyLang() {
  const L = UI[lang];
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.getElementById('brand-name').textContent = L.brand;
  hint.textContent = L.hint;
  buttons.forEach((b) => (b.textContent = L.scenes[b.dataset.scene]));
  qualityBtns.forEach((b) => (b.textContent = L.quality[Number(b.dataset.q)]));
  document.querySelectorAll('#toolbar button[data-tool]').forEach((b) => {
    const label = L.tools[b.dataset.tool];
    b.querySelector('span').textContent = label;
    b.setAttribute('aria-label', label);
    b.title = label;
  });
  document.getElementById('lang').textContent = L.lang;
  renderCard();
  positionIndicator(false);
}
document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  try {
    localStorage.setItem('pagoda-lang', lang);
  } catch (e) {}
  applyLang();
});

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
function applyState(t) {
  sun.position.copy(state.sunDir).multiplyScalar(45);
  sun.color.copy(state.sunColor);
  sun.intensity = state.sunInt;
  hemi.color.copy(state.hemiSky);
  hemi.groundColor.copy(state.hemiGround);
  hemi.intensity = state.hemiInt;
  const mainSel = sel && sel.kind === 'building' && sel.id === 'main' ? 1 : 0;
  M.goldMain.emissiveIntensity = state.glow + Math.max(hoverMain, mainSel) * 0.45;
  M.goldBrick.emissiveIntensity = state.glow + Math.max(hoverMain, mainSel) * 0.45;
  M.gold.emissiveIntensity = state.glow * 0.7;
  M.lamp.emissiveIntensity = 0.15 + state.lamps * 1.6;
  M.jewel.emissiveIntensity = state.jewel * (0.6 + 0.4 * Math.sin(t * 3.1) * Math.sin(t * 1.7));
  for (const l of floods) l.intensity = state.flood * 3.2;
  pixel.uniforms.uTint.value.copy(state.tint);
  pixel.uniforms.uSat.value = state.sat;
}

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  blendState(state, target, 1 - Math.exp(-dt * 2.2));
  hoverMain += (hoverMainT - hoverMain) * (1 - Math.exp(-dt * 8));
  applyState(t);

  controls.update(dt);
  pixel.uniforms.uDepthThresh.value = ((view.h / camera.zoom) / view.devH) * pixel.pixelSize * 2.6;

  for (const s of swayers) s(t);
  for (const p of people) p.update(t, dt);
  incense.update(dt);
  birds.update(t, dt);
  updateFx(dt, t);
  plaza.main.orb.rotation.y = t * 0.8;
  for (const l of plaza.lamps) if (l.material === M.flame) l.scale.y = 0.85 + 0.3 * Math.abs(Math.sin(t * 9 + l.position.x * 7));

  pixel.render();
  requestAnimationFrame(frame);
}

window.addEventListener('resize', resize);
// also refit whenever the canvas itself changes size (e.g. a tab opened in the background)
new ResizeObserver(() => resize()).observe(canvas);
resize();
applyLang();
applyState(0);
requestAnimationFrame(frame);
