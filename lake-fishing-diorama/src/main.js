import * as THREE from 'three';
import { makeTextures } from './textures.js';
import { PixelRenderer } from './pixel-renderer.js';
import * as W from './world.js';
import { createWater, Ripples, FishSchool, WATER_Y, lakeInside, lakePoint } from './lake.js';
import { Fisher } from './fisher.js';
import { Smoke, Mist, Fireflies } from './effects.js';
import { PRESETS, makeState, blendState } from './presets.js';

// ---------------------------------------------------------------- renderer / scene
const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const world = new THREE.Group(); // solid geometry
const dyn = new THREE.Group(); // animated solid bits (bobbers, caught fish)
const fx = new THREE.Group(); // transparent fx, hidden from the normal/edge pass
scene.add(world, dyn, fx);

// ---------------------------------------------------------------- camera (fixed isometric-style ortho)
const AZ = THREE.MathUtils.degToRad(45);
const EL = THREE.MathUtils.degToRad(32);
const camDir = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 20, 110);
camera.position.copy(camDir).multiplyScalar(60);
camera.lookAt(0, 0, 0);
window.__diorama = { scene, camera, renderer };
const DIORAMA_BOX = new THREE.Box3(new THREE.Vector3(-12.8, -1.8, -9.2), new THREE.Vector3(12.8, 4.4, 9.2));

// ---------------------------------------------------------------- lights
const hemi = new THREE.HemisphereLight('#e6f1ff', '#7f8c58', 1.3);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff4e2', 2.8);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 90 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.025;
scene.add(sun, sun.target);

// ---------------------------------------------------------------- build the diorama
const tex = makeTextures();
const swayers = [];
W.buildTerrain(world, tex);
W.buildPath(world, tex);
const water = createWater(world);
const ripples = new Ripples(fx);
const school = new FishSchool(world, ripples);
const cabin = W.buildCabin(world, tex);
W.buildDock(world, tex);
const props = W.buildProps(world);
W.buildFence(world);
const veg = W.buildVegetation(world, swayers);
const campfire = W.buildCampfire(world);
const boat = W.buildBoat(world);
const smoke = new Smoke(fx, cabin.chimneyTop);
const mist = new Mist(fx);
const fireflies = new Fireflies(fx);

const lanternLight = new THREE.PointLight('#ffb560', 0, 6, 1.6);
lanternLight.position.copy(props.lanternPos);
const porchLight = new THREE.PointLight('#ffbf6a', 0, 6, 1.6);
porchLight.position.copy(cabin.doorFront);
scene.add(lanternLight, porchLight);

// ---------------------------------------------------------------- fishers
let catches = 0;
const catchEl = document.getElementById('catch');
const onCatch = () => {
  catches++;
  catchEl.textContent = catches;
  catchEl.classList.add('bump');
  setTimeout(() => catchEl.classList.remove('bump'), 260);
};
const common = { fx, dyn, ripples, onCatch };
const fishers = [
  new Fisher({
    ...common,
    parent: world,
    pos: [0.25, W.DOCK.top, 1.3],
    rotY: Math.PI / 2,
    pose: 'stand',
    look: { skin: '#e0ae86', shirt: '#b94a3a', pants: '#3e5570', vest: '#7b8452', hat: 'bucket', hatColor: '#cdb47c', hair: '#4a3324', rodLen: 2.3 },
    targets: [[3.6, 1.0], [4.6, 2.7], [3.0, -0.6], [2.4, 3.0]],
    delay: 0.8,
  }),
  new Fisher({
    ...common,
    parent: world,
    pos: [-1.9, W.DOCK.top, 2.26],
    rotY: 0.08,
    pose: 'sit',
    look: { skin: '#c98f68', shirt: '#e2c25a', pants: '#5b4a3a', hat: 'cap', hatColor: '#c0483a', hair: '#2a2420', rodLen: 1.9 },
    targets: [[-1.4, 4.8], [0.2, 4.4], [-2.2, 4.2]],
    catchColor: '#5d7f74',
    delay: 2.6,
  }),
  new Fisher({
    ...common,
    parent: boat.group,
    pos: [-0.5, boat.seatY, 0],
    rotY: Math.PI / 2,
    pose: 'boat',
    look: { skin: '#e3b48f', shirt: '#4f86a8', pants: '#3f4a3a', hat: 'straw', hatColor: '#e2c47e', hair: '#6b4a2e', rodLen: 2.0, rodColor: '#b58d55' },
    targets: [[7.6, 2.4], [8.6, 2.6], [6.4, 3.0]],
    catchColor: '#e2732f',
    delay: 4.5,
  }),
];
const fisherMeshes = [];
for (const f of fishers) f.root.traverse((o) => o.isMesh && fisherMeshes.push(o));

// ---------------------------------------------------------------- pixel pipeline + responsive fit
// grass tufts / flowers stay out of the normal pass so they don't get speckly edge highlights
const pixel = new PixelRenderer(renderer, scene, camera, [fx, veg.tufts, veg.flowers]);
// quality = how many art pixels the diorama spans horizontally (more = finer detail)
const QUALITY = [
  { name: 'high', artW: 980, levels: 64, dither: 0.35 },
  { name: 'standard', artW: 680, levels: 48, dither: 0.5 },
  { name: 'retro', artW: 430, levels: 28, dither: 0.8 },
];
let qualityIdx = 0;
try {
  const q = Number(localStorage.getItem('diorama-quality'));
  if (q >= 0 && q < QUALITY.length) qualityIdx = q;
} catch (e) {}

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  // full device pixel ratio so the art pixels map 1:1 onto screen pixels (no browser resampling)
  const dpr = window.devicePixelRatio || 1;
  renderer.setPixelRatio(dpr);
  renderer.setSize(w, h, false);
  const buf = renderer.getDrawingBufferSize(new THREE.Vector2());
  const devW = buf.x;
  const devH = buf.y;

  // fit the diorama bounding box into ~70% of the free area above the nav
  camera.updateMatrixWorld();
  const inv = camera.matrixWorldInverse;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const v = new THREE.Vector3();
  for (let i = 0; i < 8; i++) {
    v.set(i & 1 ? DIORAMA_BOX.max.x : DIORAMA_BOX.min.x, i & 2 ? DIORAMA_BOX.max.y : DIORAMA_BOX.min.y, i & 4 ? DIORAMA_BOX.max.z : DIORAMA_BOX.min.z).applyMatrix4(inv);
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
  }
  const bw = maxX - minX;
  const bh = maxY - minY;
  const mobile = w < 640;
  const navH = mobile ? 96 : 120;
  const topH = mobile ? 40 : 56;
  const fill = mobile ? 0.94 : 0.72;
  const upp = Math.max(bw / (w * fill), bh / ((h - navH - topH) * Math.min(0.92, fill + 0.14)));
  const viewW = w * upp;
  const viewH = h * upp;

  // pick the art-pixel size from the diorama's on-screen width in device pixels
  const Q = QUALITY[qualityIdx];
  const dioramaDev = (bw / upp) * (devW / w);
  const ps = Math.max(2, Math.round(dioramaDev / Q.artW));
  pixel.setSize(devW, devH, ps);
  pixel.uniforms.uLevels.value = Q.levels;
  pixel.uniforms.uDither.value = Q.dither;

  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2 - ((navH - topH) / 2) * upp;
  const ex = (pixel.lowW * pixel.pixelSize) / devW;
  const ey = (pixel.lowH * pixel.pixelSize) / devH;
  camera.left = cx - viewW / 2;
  camera.right = camera.left + viewW * ex;
  camera.bottom = cy - viewH / 2;
  camera.top = camera.bottom + viewH * ey;
  camera.updateProjectionMatrix();
  const pixelWorld = (viewH / devH) * pixel.pixelSize;
  pixel.uniforms.uDepthThresh.value = pixelWorld * 2.6;
  positionIndicator(false);
}

// ---------------------------------------------------------------- scene switcher
const nav = document.getElementById('switcher');
const indicator = nav.querySelector('.indicator');
const buttons = [...nav.querySelectorAll('button')];
const initial = new URLSearchParams(location.search).get('scene');
let current = PRESETS[initial] ? initial : 'noon';
const state = makeState(PRESETS[current]);
let target = makeState(PRESETS[current]);
buttons.forEach((b) => b.classList.toggle('active', b.dataset.scene === current));
window.__diorama.state = state;
window.__diorama.makeState = makeState;

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

window.addEventListener('keydown', (e) => {
  const map = { 1: 'morning', 2: 'noon', 3: 'dusk', 4: 'night' };
  if (map[e.key]) setScene(map[e.key]);
  if (e.key === 'p' || e.key === 'P') setQuality((qualityIdx + 1) % QUALITY.length);
});

// quality toggle (高清 / 标准 / 复古)
const qualityBtns = [...document.querySelectorAll('#quality button')];
function setQuality(i) {
  qualityIdx = i;
  qualityBtns.forEach((b) => b.classList.toggle('active', Number(b.dataset.q) === i));
  try {
    localStorage.setItem('diorama-quality', String(i));
  } catch (e) {}
  resize();
}
qualityBtns.forEach((b) => b.addEventListener('click', () => setQuality(Number(b.dataset.q))));
qualityBtns.forEach((b) => b.classList.toggle('active', Number(b.dataset.q) === qualityIdx));

// ---------------------------------------------------------------- interaction
const raycaster = new THREE.Raycaster();
const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -WATER_Y);
const hint = document.getElementById('hint');

function ndcFromEvent(e) {
  const rect = canvas.getBoundingClientRect();
  const buf = renderer.getDrawingBufferSize(new THREE.Vector2());
  const sx = buf.x / rect.width;
  const sy = buf.y / rect.height;
  const xd = (e.clientX - rect.left) * sx;
  const yd = buf.y - (e.clientY - rect.top) * sy;
  return new THREE.Vector2((xd / (pixel.lowW * pixel.pixelSize)) * 2 - 1, (yd / (pixel.lowH * pixel.pixelSize)) * 2 - 1);
}

function pickFisher(ndc) {
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObjects(fisherMeshes, false)[0];
  return hit ? hit.object.userData.fisher : null;
}

canvas.addEventListener('pointermove', (e) => {
  canvas.style.cursor = pickFisher(ndcFromEvent(e)) ? 'pointer' : 'default';
});
canvas.addEventListener('pointerdown', (e) => {
  const ndc = ndcFromEvent(e);
  const f = pickFisher(ndc);
  hint.classList.add('gone');
  if (f) {
    f.poke();
    return;
  }
  raycaster.setFromCamera(ndc, camera);
  const p = new THREE.Vector3();
  if (raycaster.ray.intersectPlane(plane, p) && lakeInside(p.x, p.z, 0.02)) {
    ripples.spawn(p.x, p.z, 1.1, 1.8, 0.85);
    ripples.spawn(p.x, p.z, 0.6, 1.3, 0.7, 0.18);
    ripples.spawn(p.x, p.z, 0.3, 0.9, 0.6, 0.36);
    school.scatter(p.x, p.z);
  }
});

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
let ambientTimer = 0;
let boatRipple = 0;
const boatPos = new THREE.Vector3();

function applyState() {
  sun.position.copy(state.sunDir).multiplyScalar(40);
  sun.color.copy(state.sunColor);
  sun.intensity = state.sunInt;
  hemi.color.copy(state.hemiSky);
  hemi.groundColor.copy(state.hemiGround);
  hemi.intensity = state.hemiInt;
  water.uniforms.uDeep.value.copy(state.deep);
  water.uniforms.uShallow.value.copy(state.shallow);
  water.uniforms.uHighlight.value.copy(state.highlight);
  cabin.windowMat.emissiveIntensity = state.windows;
  cabin.lampMat.emissiveIntensity = state.lamps * 1.5;
  props.lanternMat.emissiveIntensity = state.lamps * 1.6;
  lanternLight.intensity = state.lamps * 3.2;
  porchLight.intensity = state.windows * 1.8;
  pixel.uniforms.uTint.value.copy(state.tint);
  pixel.uniforms.uSat.value = state.sat;
}

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  blendState(state, target, 1 - Math.exp(-dt * 2.2));
  applyState();
  water.uniforms.uTime.value = t;

  for (const s of swayers) s(t);
  boat.update(t);
  for (const f of fishers) f.update(dt, t);
  school.update(dt, t);
  campfire.update(t, state.fire);
  smoke.update(dt, state.smoke);
  mist.update(t, state.mist);
  fireflies.update(t, state.fireflies);

  ambientTimer -= dt;
  if (ambientTimer <= 0) {
    ambientTimer = 0.7 + Math.random() * 1.2;
    const [x, z] = lakePoint(Math.random() * Math.PI * 2, 0.2 + Math.random() * 0.7);
    ripples.spawn(x, z, 0.25 + Math.random() * 0.3, 1.3, 0.4);
  }
  boatRipple -= dt;
  if (boatRipple <= 0) {
    boatRipple = 2.6;
    boat.group.getWorldPosition(boatPos);
    ripples.spawn(boatPos.x, boatPos.z, 1.5, 2.6, 0.35);
  }
  ripples.update(dt);

  pixel.render();
  requestAnimationFrame(frame);
}

window.addEventListener('resize', resize);
resize();
applyState();
requestAnimationFrame(frame);
