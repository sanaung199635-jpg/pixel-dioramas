import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { makeTextures } from './textures.js';
import { PixelRenderer } from './pixel-renderer.js';
import { buildStore, STORE, DOOR } from './store.js';
import { buildLot, buildProps, LOT } from './world.js';
import { Person, makeCast, STATUS } from './people.js';
import { Weather, ROOF } from './weather.js';

// ---------------------------------------------------------------- renderer / scene
const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene();
const world = new THREE.Group();
const fx = new THREE.Group(); // particles + transparent overlays, excluded from the edge pass
scene.add(world, fx);
const pmrem = new THREE.PMREMGenerator(renderer);
const envMap = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

// ---------------------------------------------------------------- camera + limited orbit
const AZ = THREE.MathUtils.degToRad(45);
const EL = THREE.MathUtils.degToRad(30);
const DIST = 60;
const camDir = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 15, 120);
camera.position.copy(camDir).multiplyScalar(DIST);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.rotateSpeed = 0.45;
controls.zoomSpeed = 0.8;
controls.enablePan = false;
controls.zoomToCursor = true;
controls.minZoom = 0.85;
controls.maxZoom = 3.2;
controls.minAzimuthAngle = THREE.MathUtils.degToRad(12); // keep the storefront facing the viewer
controls.maxAzimuthAngle = THREE.MathUtils.degToRad(78);
controls.minPolarAngle = THREE.MathUtils.degToRad(46);
controls.maxPolarAngle = THREE.MathUtils.degToRad(68);
controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE };

// ---------------------------------------------------------------- lights
const hemi = new THREE.HemisphereLight('#eef4ff', '#a49c8c', 1.4);
const sun = new THREE.DirectionalLight('#fff3df', 3);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 16, bottom: -16, near: 1, far: 90 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.025;
scene.add(hemi, sun, sun.target);

// ---------------------------------------------------------------- build
const tex = makeTextures();
const snowMat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1 });
const store = buildStore(world, tex, snowMat);
const lot = buildLot(world, tex, snowMat);
const props = buildProps(world, tex, snowMat);
const weather = new Weather(fx, world, tex, envMap);
weather.registerCaps([...store.snowCaps, ...lot.snowCaps, ...props.snowCaps]);
for (const s of lot.surfaces) {
  s.envMap = envMap;
  s.envMapIntensity = 0;
}

const people = makeCast().map((c) => {
  const p = new Person(c.look, { ...c.opts, data: c.data });
  world.add(p.root);
  return p;
});

// pick lists (built once)
const proxies = people.map((p) => p.proxy);
const storeMeshes = [];
store.group.traverse((o) => o.isMesh && storeMeshes.push(o));
const pickList = [...proxies, ...storeMeshes];

// ---------------------------------------------------------------- moods: time x weather
const MOODS = {
  day: {
    sunny: { sunDir: [0.45, 1, 0.3], sunColor: '#fff3df', sunInt: 3.0, hemiSky: '#eef4ff', hemiGround: '#a49c8c', hemiInt: 1.4, interior: 1.0, sign: 0.15, lamps: 0, tint: '#ffffff', sat: 1.03 },
    rain: { sunDir: [0.3, 1, 0.45], sunColor: '#d8e2f0', sunInt: 0.85, hemiSky: '#d2dae6', hemiGround: '#7d8590', hemiInt: 1.35, interior: 1.3, sign: 0.6, lamps: 0.35, tint: '#f3f6fb', sat: 0.86 },
    snow: { sunDir: [0.35, 1, 0.4], sunColor: '#f4f7ff', sunInt: 1.7, hemiSky: '#f4f7ff', hemiGround: '#cdd3dc', hemiInt: 1.6, interior: 1.15, sign: 0.4, lamps: 0.15, tint: '#f7f9ff', sat: 0.9 },
  },
  night: {
    sunny: { sunDir: [0.3, 1, -0.4], sunColor: '#a9b8ff', sunInt: 0.7, hemiSky: '#56648f', hemiGround: '#22272f', hemiInt: 1.0, interior: 1.7, sign: 1.6, lamps: 1, tint: '#eceffd', sat: 0.95 },
    rain: { sunDir: [0.3, 1, -0.4], sunColor: '#8f9cc8', sunInt: 0.35, hemiSky: '#4c5874', hemiGround: '#1d2128', hemiInt: 0.95, interior: 1.85, sign: 1.8, lamps: 1, tint: '#e8edf8', sat: 0.92 },
    snow: { sunDir: [0.3, 1, -0.4], sunColor: '#c9d4ff', sunInt: 0.8, hemiSky: '#6c7aa8', hemiGround: '#3d4560', hemiInt: 1.1, interior: 1.7, sign: 1.7, lamps: 1, tint: '#eff2ff', sat: 0.88 },
  },
};
function makeState(p) {
  const s = {};
  for (const [k, v] of Object.entries(p)) s[k] = Array.isArray(v) ? new THREE.Vector3(...v).normalize() : typeof v === 'string' ? new THREE.Color(v) : v;
  return s;
}
function blendState(cur, tgt, k) {
  for (const key of Object.keys(tgt)) {
    const c = cur[key];
    const t = tgt[key];
    if (c.isVector3) c.lerp(t, k).normalize();
    else if (c.isColor) c.lerp(t, k);
    else cur[key] = c + (t - c) * k;
  }
}
const params = new URLSearchParams(location.search);
let weatherMode = ['sunny', 'rain', 'snow'].includes(params.get('weather')) ? params.get('weather') : 'sunny';
let timeMode = params.get('time') === 'night' ? 'night' : 'day';
const state = makeState(MOODS[timeMode][weatherMode]);
let target = makeState(MOODS[timeMode][weatherMode]);
let doorOpen = 0;
let xray = false;
let lift = 0;
const env = {
  rain: weatherMode === 'rain' ? 1 : 0,
  snow: weatherMode === 'snow' ? 1 : 0,
  wet: weatherMode === 'rain' ? 1 : 0,
  cover: weatherMode === 'snow' ? 1 : 0,
  night: timeMode === 'night' ? 1 : 0,
};

// ---------------------------------------------------------------- pixel pipeline + fit
const pixel = new PixelRenderer(renderer, scene, camera, [fx, store.glass]);
pixel.uniforms.uAO.value = 0.3;
pixel.uniforms.uNormalEdge.value = 0.2;
pixel.uniforms.uDepthEdge.value = 0.26;
const FIT = [];
for (let i = 0; i < 8; i++) FIT.push(new THREE.Vector3(i & 1 ? LOT.x1 + 0.4 : LOT.x0 - 0.4, i & 2 ? 3.8 : -1.3, i & 4 ? LOT.z1 + 0.4 : LOT.z0 - 0.4));
FIT.push(new THREE.Vector3(6.2, 5.8, -6.4), new THREE.Vector3(-10.5, 6.4, 7.4), new THREE.Vector3(7.1, 6.4, 7.4));
const QUALITY = [
  { artW: 900, levels: 64, dither: 0.35 },
  { artW: 640, levels: 48, dither: 0.5 },
  { artW: 420, levels: 28, dither: 0.8 },
];
let qualityIdx = 0;
try {
  const q = Number(localStorage.getItem('cvs-quality'));
  if (q >= 0 && q < QUALITY.length) qualityIdx = q;
} catch (e) {}
const view = { w: 1, h: 1, devW: 1, devH: 1, cssW: 1, cssH: 1, upp: 1 };
const home = { target: new THREE.Vector3(), offset: camDir.clone().multiplyScalar(DIST) };
let homeSet = false;
const tmpCam = new THREE.OrthographicCamera();

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(w, h, false);
  const buf = renderer.getDrawingBufferSize(new THREE.Vector2());
  tmpCam.position.copy(home.offset);
  tmpCam.lookAt(0, 0, 0);
  tmpCam.updateMatrixWorld();
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const v = new THREE.Vector3();
  for (const p of FIT) {
    v.copy(p).applyMatrix4(tmpCam.matrixWorldInverse);
    minX = Math.min(minX, v.x); maxX = Math.max(maxX, v.x);
    minY = Math.min(minY, v.y); maxY = Math.max(maxY, v.y);
  }
  const bw = maxX - minX;
  const bh = maxY - minY;
  const mobile = w < 640;
  const navH = mobile ? 92 : 112;
  const topH = mobile ? 44 : 60;
  const fill = mobile ? 0.95 : 0.72;
  const upp = Math.max(bw / (w * fill), bh / ((h - navH - topH) * 0.86));
  Object.assign(view, { w: w * upp, h: h * upp, devW: buf.x, devH: buf.y, cssW: w, cssH: h, upp });
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

// ---------------------------------------------------------------- smooth camera moves
let fly = null;
function flyTo(dest, dur = 1.1) {
  const t0 = controls.target.clone();
  const o0 = camera.position.clone().sub(controls.target);
  const len = o0.length();
  const z0 = camera.zoom;
  fly = { t: 0, dur, t0, o0, len, z0, dest };
  controls.enabled = false;
}
const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
function stepFly(dt) {
  if (!fly) return;
  fly.t = Math.min(1, fly.t + dt / fly.dur);
  const k = ease(fly.t);
  controls.target.lerpVectors(fly.t0, fly.dest.target, k);
  camera.position.copy(controls.target).add(fly.o0.clone().lerp(fly.dest.offset, k).setLength(fly.len));
  camera.zoom = fly.z0 + (fly.dest.zoom - fly.z0) * k;
  camera.updateProjectionMatrix();
  if (fly.t >= 1) {
    fly = null;
    controls.enabled = true;
  }
}
const captureView = () => ({ target: controls.target.clone(), offset: camera.position.clone().sub(controls.target), zoom: camera.zoom });

// ---------------------------------------------------------------- highlight helpers
function glow(meshes, color = '#ffcf6a', amount = 0.35) {
  const orig = meshes.map((m) => m.material);
  for (const m of meshes) {
    const list = Array.isArray(m.material) ? m.material : [m.material];
    const cl = list.map((mm) => {
      const c = mm.clone();
      if (c.emissive) {
        c.emissive = new THREE.Color(color);
        c.emissiveIntensity = amount;
      }
      return c;
    });
    m.material = Array.isArray(m.material) ? cl : cl[0];
  }
  return () =>
    meshes.forEach((m, i) => {
      (Array.isArray(m.material) ? m.material : [m.material]).forEach((mm) => mm.dispose());
      m.material = orig[i];
    });
}
let hoverPerson = null;
let hoverUndo = null;
let hoverStore = 0;
let hoverStoreT = 0;
let sel = null; // { kind, person?, undo? }
let savedView = null;

// ---------------------------------------------------------------- picking + click/drag separation
const raycaster = new THREE.Raycaster();
function ndc(e) {
  const rect = canvas.getBoundingClientRect();
  const sx = view.devW / rect.width;
  const xd = (e.clientX - rect.left) * sx;
  const yd = view.devH - (e.clientY - rect.top) * sx;
  return new THREE.Vector2((xd / (pixel.lowW * pixel.pixelSize)) * 2 - 1, (yd / (pixel.lowH * pixel.pixelSize)) * 2 - 1);
}
function pick(e) {
  raycaster.setFromCamera(ndc(e), camera);
  const hit = raycaster.intersectObjects(pickList, false)[0];
  if (!hit) return null;
  if (hit.object.userData.person) return { person: hit.object.userData.person };
  return { store: true };
}
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
    if (fly) {
      fly = null;
      controls.enabled = true;
    }
    if (pending && pending.id !== e.pointerId) {
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
    if (pending && e.pointerId === pending.id && Math.hypot(e.clientX - pending.x, e.clientY - pending.y) > 6) {
      forward(pending.e);
      pending = null;
    }
  },
  { capture: true }
);
window.addEventListener('pointerup', (e) => {
  if (!pending || e.pointerId !== pending.id) return;
  pending = null;
  const hit = pick(e);
  if (hit && hit.person) selectPerson(hit.person);
  else if (hit && hit.store) selectStore();
  else deselect();
});
window.addEventListener('pointercancel', () => (pending = null));
canvas.addEventListener('wheel', () => hint.classList.add('gone'), { passive: true });

// hover (mouse only, throttled)
const tooltip = document.getElementById('tooltip');
let lastHover = 0;
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || e.buttons) return;
  const now = performance.now();
  if (now - lastHover < 70) return;
  lastHover = now;
  const hit = pick(e);
  const person = hit && hit.person ? hit.person : null;
  if (person !== hoverPerson) {
    if (hoverUndo) hoverUndo();
    hoverUndo = null;
    hoverPerson = person;
    if (person && !(sel && sel.person === person)) hoverUndo = glow(person.meshes, '#ffe2a0', 0.28);
  }
  hoverStoreT = hit && hit.store ? 1 : 0;
  if (hit) {
    tooltip.innerHTML = person ? `<b>${person.data.name}</b><span>${person.data.role} · ${STATUS[person.statusKey]}</span>` : `<b>7-ELEVEn 便利店</b><span>24 小时营业中 · 点击查看</span>`;
    tooltip.style.left = e.clientX + 'px';
    tooltip.style.top = e.clientY + 'px';
    tooltip.classList.add('show');
    canvas.style.cursor = 'pointer';
  } else {
    tooltip.classList.remove('show');
    canvas.style.cursor = 'grab';
  }
});
canvas.addEventListener('pointerleave', () => {
  tooltip.classList.remove('show');
  hoverStoreT = 0;
  if (hoverUndo) hoverUndo();
  hoverUndo = null;
  hoverPerson = null;
});

// ---------------------------------------------------------------- selection + info card
const card = document.getElementById('card');
const $ = (s) => card.querySelector(s);
const WEATHER_ZH = { sunny: '晴天', rain: '下雨', snow: '下雪' };
const insideStore = (p) => p.x > STORE.x0 && p.x < STORE.x1 && p.z > STORE.z0 && p.z < STORE.z1;

function clearSel() {
  if (sel && sel.undo) sel.undo();
  sel = null;
}
function focus(center, zoom) {
  if (!savedView) savedView = captureView();
  const mobile = view.cssW < 760;
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
  const k = view.upp / zoom;
  const tgt = center.clone();
  if (mobile) tgt.addScaledVector(up, -view.cssH * 0.18 * k);
  else tgt.addScaledVector(right, 170 * k);
  flyTo({ target: tgt, offset: camera.position.clone().sub(controls.target), zoom }, 1.1);
}
function selectPerson(p) {
  clearSel();
  if (hoverUndo) {
    hoverUndo();
    hoverUndo = null;
    hoverPerson = null;
  }
  sel = { kind: 'person', person: p, undo: glow(p.meshes, '#ffc65a', 0.4) };
  focus(p.root.position.clone().setY(0.7), 2.3);
  renderCard();
  card.classList.add('show');
}
function selectStore() {
  clearSel();
  sel = { kind: 'store' };
  focus(new THREE.Vector3((STORE.x0 + STORE.x1) / 2, 1.2, (STORE.z0 + STORE.z1) / 2), 1.35);
  renderCard();
  card.classList.add('show');
}
function deselect() {
  const had = !!sel;
  clearSel();
  card.classList.remove('show');
  if (had && savedView) flyTo(savedView, 1.0);
  savedView = null;
}
function renderCard() {
  if (!sel) return;
  if (sel.kind === 'person') {
    const p = sel.person;
    $('.card-kicker').textContent = p.data.role;
    $('.card-title').textContent = p.data.name;
    $('.card-badge').hidden = false;
    $('.card-badge').textContent = '虚构角色';
    $('.card-meta').innerHTML = `<div><dt>身份</dt><dd>${p.data.role.split(' · ').pop()}</dd></div><div><dt>正在做什么</dt><dd class="live">${STATUS[p.statusKey]}</dd></div>`;
    $('.card-body').innerHTML = `<p>${p.data.bio}</p>`;
    $('.card-note').textContent = '';
  } else {
    const inside = people.filter((p) => insideStore(p.root.position)).length;
    $('.card-kicker').textContent = 'Convenience Store';
    $('.card-title').textContent = '7-ELEVEn 便利店';
    $('.card-badge').hidden = false;
    $('.card-badge').textContent = '营业中 OPEN';
    $('.card-meta').innerHTML =
      `<div><dt>营业状态</dt><dd>24 小时营业</dd></div>` +
      `<div><dt>当前天气</dt><dd class="live-weather">${WEATHER_ZH[weatherMode]} · ${timeMode === 'day' ? '白天' : '夜晚'}</dd></div>` +
      `<div><dt>店内人数</dt><dd class="live-count">${inside} 人</dd></div>` +
      `<div><dt>店员</dt><dd>1 人在岗</dd></div>`;
    $('.card-body').innerHTML =
      '<p>透过落地玻璃可以看到：靠墙一排饮料冷柜、两排零食与泡面货架、便当冷藏台、收银台旁的热食柜与关东煮、两台微波炉，以及窗边的自助咖啡机。</p>';
    $('.card-note').textContent = '微缩模型中的招牌为风格化演绎，并非官方素材；人物均为虚构角色。';
  }
}
$('.card-close').addEventListener('click', deselect);
setInterval(() => {
  if (!sel) return;
  if (sel.kind === 'person') {
    const el = $('.live');
    if (el) el.textContent = STATUS[sel.person.statusKey];
  } else {
    const c = $('.live-count');
    if (c) c.textContent = `${people.filter((p) => insideStore(p.root.position)).length} 人`;
    const w = $('.live-weather');
    if (w) w.textContent = `${WEATHER_ZH[weatherMode]} · ${timeMode === 'day' ? '白天' : '夜晚'}`;
  }
}, 300);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') deselect();
  if (e.key === '1') setWeather('sunny');
  if (e.key === '2') setWeather('rain');
  if (e.key === '3') setWeather('snow');
  if (e.key === 'n' || e.key === 'N') setTime(timeMode === 'day' ? 'night' : 'day');
  if (e.key === 'x' || e.key === 'X') setXray(!xray);
  if (e.key === 'p' || e.key === 'P') setQuality((qualityIdx + 1) % QUALITY.length);
  if (e.key === '0') {
    deselect();
    flyTo({ target: home.target.clone(), offset: home.offset.clone(), zoom: 1 }, 1.1);
  }
});

// ---------------------------------------------------------------- bottom pill: weather + day/night
const hint = document.getElementById('hint');
const nav = document.getElementById('switcher');
const indicator = nav.querySelector('.indicator');
const wButtons = [...nav.querySelectorAll('button[data-weather]')];
const timeBtn = document.getElementById('time');
function positionIndicator(animate = true) {
  const btn = nav.querySelector(`button[data-weather="${weatherMode}"]`);
  if (!btn) return;
  if (!animate) indicator.style.transition = 'none';
  indicator.style.width = btn.offsetWidth + 'px';
  indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
  if (!animate) requestAnimationFrame(() => (indicator.style.transition = ''));
}
function refreshTarget() {
  target = makeState(MOODS[timeMode][weatherMode]);
}
function setWeather(w) {
  weatherMode = w;
  wButtons.forEach((b) => b.classList.toggle('active', b.dataset.weather === w));
  positionIndicator(true);
  refreshTarget();
}
function setTime(t) {
  timeMode = t;
  timeBtn.classList.toggle('night', t === 'night');
  timeBtn.querySelector('span').textContent = t === 'day' ? '白天' : '夜晚';
  refreshTarget();
}
wButtons.forEach((b) => b.addEventListener('click', () => setWeather(b.dataset.weather)));
timeBtn.addEventListener('click', () => setTime(timeMode === 'day' ? 'night' : 'day'));
const xrayBtn = document.getElementById('xray');
function setXray(on) {
  xray = on;
  xrayBtn.classList.toggle('on', on);
}
xrayBtn.addEventListener('click', () => setXray(!xray));
if (params.get('view') === 'inside') {
  setXray(true);
  lift = 1;
}
wButtons.forEach((b) => b.classList.toggle('active', b.dataset.weather === weatherMode));
setTime(timeMode);

const qualityBtns = [...document.querySelectorAll('#quality button')];
function setQuality(i) {
  qualityIdx = i;
  qualityBtns.forEach((b) => b.classList.toggle('active', Number(b.dataset.q) === i));
  try {
    localStorage.setItem('cvs-quality', String(i));
  } catch (e) {}
  resize();
}
qualityBtns.forEach((b) => b.addEventListener('click', () => setQuality(Number(b.dataset.q))));
qualityBtns.forEach((b) => b.classList.toggle('active', Number(b.dataset.q) === qualityIdx));

// ---------------------------------------------------------------- loop
const clock = new THREE.Clock();
const approach = (cur, tgt, rate, dt) => cur + (tgt - cur) * (1 - Math.exp(-rate * dt));

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;

  // weather + time state
  env.rain = approach(env.rain, weatherMode === 'rain' ? 1 : 0, 1.6, dt);
  env.snow = approach(env.snow, weatherMode === 'snow' ? 1 : 0, 1.2, dt);
  env.wet = approach(env.wet, weatherMode === 'rain' ? 1 : 0, weatherMode === 'rain' ? 0.6 : 0.25, dt);
  env.cover = approach(env.cover, weatherMode === 'snow' ? 1 : 0, weatherMode === 'snow' ? 0.18 : 0.4, dt);
  env.night = approach(env.night, timeMode === 'night' ? 1 : 0, 1.5, dt);
  blendState(state, target, 1 - Math.exp(-dt * 2));
  hoverStore = approach(hoverStore, hoverStoreT || (sel && sel.kind === 'store') ? 1 : 0, 8, dt);

  sun.position.copy(state.sunDir).multiplyScalar(40);
  sun.color.copy(state.sunColor);
  sun.intensity = state.sunInt;
  hemi.color.copy(state.hemiSky);
  hemi.groundColor.copy(state.hemiGround);
  hemi.intensity = state.hemiInt;
  const glowStore = 1 + hoverStore * 0.18;
  for (const l of store.lights) l.intensity = 9 * state.interior * glowStore;
  store.ceilMat.emissiveIntensity = 0.8 * state.interior;
  for (const d of store.downLights) d.material.emissiveIntensity = 0.3 + state.lamps * 1.2;
  for (const m of store.signMats) m.emissiveIntensity = 0.12 + state.sign * 0.6 + hoverStore * 0.35;
  for (const l of props.lamps) {
    l.bulb.material.emissiveIntensity = state.lamps * 2.2;
    l.light.intensity = state.lamps * 7;
  }
  for (const s of lot.surfaces) {
    s.color.lerpColors(s.userData.dry.color, s.userData.wet.color, env.wet * (1 - env.cover * 0.5));
    s.roughness = THREE.MathUtils.lerp(s.userData.dry.rough, s.userData.wet.rough, env.wet);
    s.envMapIntensity = env.wet * 0.9;
  }
  pixel.uniforms.uTint.value.copy(state.tint);
  pixel.uniforms.uSat.value = state.sat;

  // camera
  stepFly(dt);
  controls.update();
  pixel.uniforms.uDepthThresh.value = ((view.h / camera.zoom) / view.devH) * pixel.pixelSize * 2.6;

  // people + automatic door
  let near = Infinity;
  for (const p of people) {
    p.update(t, dt, env);
    near = Math.min(near, Math.hypot(p.root.position.x - DOOR.x, p.root.position.z - DOOR.z));
  }
  doorOpen = approach(doorOpen, near < 1.5 ? 1 : 0, 5, dt);
  for (const d of store.doorPanels) {
    const x = d.base + d.dir * doorOpen * 0.74;
    d.group.position.x = x;
    d.glass.position.x = x;
  }

  // dollhouse roof lift (see-inside mode, or while the store card is open)
  lift = approach(lift, xray || (sel && sel.kind === 'store') ? 1 : 0, 3, dt);
  const lk = lift * lift * (3 - 2 * lift);
  store.roof.position.y = lk * 4.2;
  ROOF.lift = lk * 4.2;

  // scenery motion
  const windy = 0.03 + env.rain * 0.05;
  props.crowns.forEach((c, i) => (c.rotation.z = Math.sin(t * 1.1 + i) * windy));

  weather.update(dt, t, env);
  pixel.render();
  requestAnimationFrame(frame);
}

window.addEventListener('resize', resize);
resize();
frame(); // draw the first frame right away (it schedules the next ones)
