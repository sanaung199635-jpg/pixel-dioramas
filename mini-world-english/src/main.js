import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PixelRenderer } from './pixel-renderer.js';
import { buildWorld, HALF, GYM_X, HOME_Z } from './world.js';
import { buildGym } from './gym.js';
import { buildHome } from './home.js';
import { buildMarket } from './market.js';
import { createPhone } from './phone.js';
import { createTalk } from './talk.js';
import { WORDS, WORD_BY_ID, CATS, SCENES } from './data.js';

const $ = (id) => document.getElementById(id);

// ---------------------------------------------------------------- renderer / scene
const canvas = $('stage');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const world = new THREE.Group();
scene.add(world);

const AZ = THREE.MathUtils.degToRad(45);
const EL = THREE.MathUtils.degToRad(34);
const DIST = 60;
const camDir = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 10, 130);
camera.position.copy(camDir).multiplyScalar(DIST);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.rotateSpeed = 0.55;
controls.zoomSpeed = 0.9;
controls.screenSpacePanning = true;
controls.zoomToCursor = true;
controls.minZoom = 0.8;
controls.maxZoom = 5;
controls.minPolarAngle = THREE.MathUtils.degToRad(18);
controls.maxPolarAngle = THREE.MathUtils.degToRad(76);

scene.add(new THREE.HemisphereLight('#eaf6ff', '#b9c79a', 1.7));
const sun = new THREE.DirectionalLight('#fff4dc', 2.6);
sun.position.set(GYM_X / 2 - 14, 26, HOME_Z / 2 + 16);
sun.target.position.set(GYM_X / 2, 0, HOME_Z / 2);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
Object.assign(sun.shadow.camera, { left: -42, right: 42, top: 42, bottom: -42, near: 1, far: 110 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
scene.add(sun, sun.target);

const { items, pickList, updaters, primary } = buildWorld(world, [buildGym, buildHome, buildMarket]);

// two islands side by side; the camera frames one at a time
const CENTER = { park: new THREE.Vector3(0, 0, 0), gym: new THREE.Vector3(GYM_X, 0, 0), home: new THREE.Vector3(0, 0, HOME_Z), market: new THREE.Vector3(GYM_X, 0, HOME_Z) };
const SCENE_KEY = 'mini-world-english:scene';
let sceneId = 'park';
try {
  if (SCENES[localStorage.getItem(SCENE_KEY)]) sceneId = localStorage.getItem(SCENE_KEY);
} catch (e) {}
const sceneOf = (w) => CATS[w.cat].scene;
let fly = null; // camera glide between islands

const pixel = new PixelRenderer(renderer, scene, camera);
pixel.clear.set('#dff1fb');
pixel.uniforms.uDepthEdge.value = 0.3;
pixel.uniforms.uNormalEdge.value = 0.12;
pixel.uniforms.uAO.value = 0.28;
pixel.uniforms.uContrast.value = 1.03;

// ---------------------------------------------------------------- fit + resize
const FIT = [];
for (const x of [-HALF, HALF]) for (const z of [-HALF, HALF]) for (const y of [-2.4, 7.2]) FIT.push(new THREE.Vector3(x, y, z));
const view = { w: 1, h: 1, devW: 1, devH: 1, cssW: 1, cssH: 1 };
const home = { target: new THREE.Vector3(), offset: camDir.clone().multiplyScalar(DIST) };
let homeSet = false;
let layoutKey = '';
const tmpCam = new THREE.OrthographicCamera();

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (!w || !h) return;
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(w, h, false);
  const buf = renderer.getDrawingBufferSize(new THREE.Vector2());

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
  // leave room for the word card: on the right on wide screens, under the header on narrow ones
  const compact = w <= 1040;
  const phone = w <= 760;
  const sideW = phone ? 0 : 348;
  const navH = compact ? 84 : 112;
  const topH = phone && h > 640 ? 300 : 56;
  const upp = Math.max(bw / ((w - sideW) * (phone ? 0.98 : 0.94)), bh / ((h - navH - topH) * 0.96));
  Object.assign(view, { w: w * upp, h: h * upp, devW: buf.x, devH: buf.y, cssW: w, cssH: h });

  // orbit pivot: point on the view ray through the fit centre that is closest to the vertical axis
  const cx = (minX + maxX) / 2 + (sideW / 2) * upp;
  const cy = (minY + maxY) / 2 - ((navH - topH) / 2) * upp;
  const right = new THREE.Vector3().setFromMatrixColumn(tmpCam.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(tmpCam.matrixWorld, 1);
  const p0 = right.multiplyScalar(cx).addScaledVector(up, cy);
  const s = -(p0.x * camDir.x + p0.z * camDir.z) / (camDir.x * camDir.x + camDir.z * camDir.z);
  home.target.copy(p0).addScaledVector(camDir, s);

  // art-pixel size: ~440 art pixels across the island
  const ps = Math.max(2, Math.round(((bw / upp) * (buf.x / w)) / 440));
  pixel.setSize(buf.x, buf.y, ps);

  const key = `${compact}|${phone}|${topH}`;
  if (key !== layoutKey) homeSet = false; // layout changed: re-centre the island
  layoutKey = key;
  if (!homeSet) {
    fly = null;
    controls.target.copy(home.target).add(CENTER[sceneId] || CENTER.park);
    camera.position.copy(controls.target).add(home.offset);
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
}

// ---------------------------------------------------------------- speech
const synth = window.speechSynthesis;
let voices = [];
const loadVoices = () => (voices = synth ? synth.getVoices() : []);
if (synth) {
  loadVoices();
  synth.addEventListener?.('voiceschanged', loadVoices);
} else {
  $('cWarn').hidden = false;
}
function voiceFor(lang) {
  const norm = (s) => s.replace('_', '-').toLowerCase();
  const exact = voices.filter((v) => norm(v.lang) === lang.toLowerCase());
  return exact.find((v) => /natural|google|samantha|daniel/i.test(v.name)) || exact[0] || voices.find((v) => norm(v.lang).startsWith('en')) || null;
}
/** two different English voices for the two speakers of a dialogue */
function pairVoices() {
  const en = voices.filter((v) => /^en/i.test(v.lang));
  const us = en.filter((v) => /^en[-_]US/i.test(v.lang));
  const list = us.length >= 2 ? us : en;
  return [list[0] || null, list[1] || list[0] || null];
}
function speak(text, { lang = 'en-US', rate = 0.9, button = null, voiceIndex = null, onend = null } = {}) {
  if (!synth) return void onend?.();
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  const v = (voiceIndex != null && pairVoices()[voiceIndex]) || voiceFor(lang);
  if (v) u.voice = v;
  u.rate = rate;
  if (button) {
    document.querySelectorAll('.say.speaking').forEach((b) => b.classList.remove('speaking'));
    button.classList.add('speaking');
  }
  u.onend = u.onerror = () => {
    button?.classList.remove('speaking');
    onend?.();
  };
  synth.speak(u);
}

// ---------------------------------------------------------------- progress + word list
const STORE = 'mini-world-english:found';
let found = new Set();
try {
  found = new Set(JSON.parse(localStorage.getItem(STORE) || '[]').filter((id) => WORD_BY_ID[id]));
} catch (e) {}
const chips = {};
const bar = $('words');
// the phone scene is a clickable English phone screen instead of an island
const phone = createPhone($('phoneStage'), {
  onPick: (id, el) => (quiz.on ? answerWord(id, el) : selectWord(id, el)),
  onScreen: () => {
    deselect();
    renderProgress();
    bar.scrollTo(0, 0);
    if (quiz.on) {
      quiz.target = null;
      nextQuestion();
    }
  },
});
for (const w of WORDS) {
  const b = document.createElement('button');
  b.className = 'chip';
  b.style.setProperty('--cat', CATS[w.cat].color);
  b.innerHTML = `${w.en}<small>${w.zh.split('；')[0]}</small>`;
  b.addEventListener('click', () => (sceneOf(w) === 'phone' ? phone.reveal(w.id) : select(primary[w.id])));
  bar.appendChild(b);
  chips[w.id] = b;
}
function renderProgress() {
  const mine = WORDS.filter((w) => sceneOf(w) === sceneId);
  $('total').textContent = mine.length;
  $('found').textContent = mine.filter((w) => found.has(w.id)).length;
  for (const w of WORDS) {
    chips[w.id].classList.toggle('found', found.has(w.id));
    chips[w.id].hidden = sceneOf(w) !== sceneId || (sceneId === 'phone' && !phone.screenWords().includes(w.id));
  }
}
function markFound(id) {
  if (found.has(id)) return;
  found.add(id);
  try {
    localStorage.setItem(STORE, JSON.stringify([...found]));
  } catch (e) {}
  renderProgress();
}
renderProgress();

// ---------------------------------------------------------------- scenes
const sceneTabs = {};
for (const id in SCENES) {
  const b = document.createElement('button');
  b.innerHTML = `${SCENES[id].zh}<small>${SCENES[id].en}</small>`;
  b.addEventListener('click', () => setScene(id));
  $('scenes').appendChild(b);
  sceneTabs[id] = b;
}
function setScene(id, { keep = false } = {}) {
  for (const k in sceneTabs) sceneTabs[k].classList.toggle('active', k === id);
  sceneTabs[id].scrollIntoView({ block: 'nearest', inline: 'center' });
  document.body.classList.toggle('phone-mode', id === 'phone');
  $('phoneStage').hidden = id !== 'phone';
  if (id === sceneId) return;
  sceneId = id;
  try {
    localStorage.setItem(SCENE_KEY, id);
  } catch (e) {}
  if (!keep) deselect();
  renderProgress();
  bar.scrollTo(0, 0);
  if (CENTER[id]) fly = { t0: now, to: home.target.clone().add(CENTER[id]) };
  if (quiz.on) {
    quiz.target = null;
    nextQuestion();
  }
}

// ---------------------------------------------------------------- selection + card
const card = $('card');
const tag = $('tag');
let current = null; // { item, word, point }
const pulses = new Map();
let now = 0;

function select(item, point = null, { say = true } = {}) {
  const word = WORD_BY_ID[item.userData.word];
  if (item.userData.scene !== sceneId) setScene(item.userData.scene, { keep: true });
  phone.highlight(null);
  current = { item, word, point: item.userData.flat ? point || item.getWorldPosition(new THREE.Vector3()) : null };
  tag.textContent = word.en;
  tag.hidden = false;
  if (!item.userData.flat) pulses.set(item, now);
  item.userData.onSelect?.(now);
  openCard(word, say);
}
/** a word picked on the phone screen (no 3D object) */
function selectWord(id, el) {
  const word = WORD_BY_ID[id];
  current = { word, el };
  tag.hidden = true;
  phone.highlight(el);
  openCard(word, true);
}
function openCard(word, say) {
  const cat = CATS[word.cat];
  card.style.setProperty('--cat', cat.color);
  $('cKicker').textContent = `${cat.zh} · ${cat.en}`;
  $('cWord').textContent = word.en;
  $('cZh').textContent = word.zh;
  $('cUs').textContent = word.us;
  $('cUk').textContent = word.uk;
  $('cEx').textContent = word.ex;
  $('cExZh').textContent = word.exZh;
  $('cUse').hidden = !word.use;
  $('cUseText').textContent = word.use || '';
  $('cNote').hidden = !word.note;
  $('cNote').textContent = word.note || '';
  card.classList.add('open');
  for (const id in chips) chips[id].classList.toggle('active', id === word.id);
  chips[word.id].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  markFound(word.id);
  $('hint').classList.add('gone');
  if (say) speak(word.en);
}
function deselect() {
  current = null;
  phone.highlight(null);
  card.classList.remove('open');
  tag.hidden = true;
  for (const id in chips) chips[id].classList.remove('active');
}
$('cardClose').addEventListener('click', deselect);
card.addEventListener('click', (e) => {
  const b = e.target.closest('[data-say]');
  if (!b || !current) return;
  const w = current.word;
  const kind = b.dataset.say;
  if (kind === 'us') speak(w.en, { lang: 'en-US', button: b });
  else if (kind === 'uk') speak(w.en, { lang: 'en-GB', button: b });
  else if (kind === 'slow') speak(w.en, { rate: 0.45, button: b });
  else speak(w.ex, { rate: 0.85, button: b });
});

// ---------------------------------------------------------------- quiz: listen and find
const quiz = { on: false, target: null, score: 0, lock: false };
const banner = $('banner');
function setBanner(text, cls = '') {
  $('bannerText').textContent = text;
  banner.className = 'banner ' + cls;
  if (cls === 'bad') {
    banner.style.animation = 'none';
    void banner.offsetWidth;
    banner.style.animation = '';
  }
}
function nextQuestion() {
  const all = sceneId === 'phone' ? phone.screenWords().map((id) => WORD_BY_ID[id]) : WORDS.filter((w) => sceneOf(w) === sceneId);
  const pool = all.filter((w) => w.id !== quiz.target);
  quiz.target = pool[Math.floor(Math.random() * pool.length)].id;
  quiz.lock = false;
  setBanner(sceneId === 'phone' ? '听一听，在手机屏幕上点出它！' : `听一听，在${SCENES[sceneId].zh}里找到它！`);
  speak(WORD_BY_ID[quiz.target].en);
}
function setQuiz(on) {
  quiz.on = on;
  $('quizBtn').classList.toggle('on', on);
  banner.hidden = !on;
  bar.classList.toggle('hide', on);
  deselect();
  $('hint').classList.add('gone');
  if (on) {
    quiz.score = 0;
    quiz.target = null;
    $('quizScore').textContent = 0;
    nextQuestion();
  } else {
    synth?.cancel();
  }
}
const answer = (item, point) => judge(item.userData.word, () => select(item, point), () => !item.userData.flat && pulses.set(item, now));
const answerWord = (id, el) => judge(id, () => selectWord(id, el), () => phone.shake(el));
function judge(gotId, onRight, onWrong) {
  if (quiz.lock) return;
  const target = WORD_BY_ID[quiz.target];
  const got = WORD_BY_ID[gotId];
  if (got.id === target.id) {
    quiz.lock = true;
    quiz.score++;
    $('quizScore').textContent = quiz.score;
    setBanner(`答对了！${target.en} · ${target.zh}`, 'good');
    onRight();
    setTimeout(() => {
      if (!quiz.on) return;
      deselect();
      nextQuestion();
    }, 2600);
  } else {
    setBanner(`这是 ${got.en}（${got.zh.split('；')[0]}），再找找看`, 'bad');
    onWrong();
    setTimeout(() => quiz.on && !quiz.lock && speak(target.en), 700);
  }
}
$('quizBtn').addEventListener('click', () => setQuiz(!quiz.on));
$('quizExit').addEventListener('click', () => setQuiz(false));
$('quizReplay').addEventListener('click', () => quiz.target && speak(WORD_BY_ID[quiz.target].en));
$('quizHint').addEventListener('click', () => quiz.target && !quiz.lock && setBanner(`提示：${WORD_BY_ID[quiz.target].zh}`));

// ---------------------------------------------------------------- picking (a click is a press that did not drag)
const raycaster = new THREE.Raycaster();
function ndcFromEvent(e) {
  const rect = canvas.getBoundingClientRect();
  const sx = view.devW / rect.width;
  const xd = (e.clientX - rect.left) * sx;
  const yd = view.devH - (e.clientY - rect.top) * sx;
  return new THREE.Vector2((xd / (pixel.lowW * pixel.pixelSize)) * 2 - 1, (yd / (pixel.lowH * pixel.pixelSize)) * 2 - 1);
}
function pick(e) {
  camera.updateMatrixWorld(); // stay correct even if no frame has rendered since a resize
  world.updateMatrixWorld();
  raycaster.setFromCamera(ndcFromEvent(e), camera);
  let first = null;
  for (const h of raycaster.intersectObjects(pickList, false)) {
    let o = h.object;
    while (o && !o.userData.word) o = o.parent;
    if (!o) continue;
    if (!first) first = { item: o, point: h.point };
    // grass is everywhere: a bug crawling in it wins over the blades in front of it
    if (first.item.userData.word !== 'grass') break;
    if (WORD_BY_ID[o.userData.word].cat === 'bug') return { item: o, point: h.point };
  }
  return first;
}
let press = null;
canvas.addEventListener('pointerdown', (e) => (press = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now() }));
canvas.addEventListener('pointerup', (e) => {
  const p = press;
  press = null;
  if (!p || p.id !== e.pointerId) return;
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  if (Math.hypot(e.clientX - p.x, e.clientY - p.y) > 7 || performance.now() - p.t > 600) return;
  const hit = pick(e);
  if (!hit) return quiz.on ? undefined : deselect();
  if (quiz.on) answer(hit.item, hit.point);
  else select(hit.item, hit.point);
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse' || e.buttons) return;
  canvas.style.cursor = pick(e) ? 'pointer' : 'grab';
});
// ---------------------------------------------------------------- dialogues
const talk = createTalk($('talk'), {
  speakLine: (text, opts) => speak(text, opts),
  stop: () => synth?.cancel(),
  getScene: () => sceneId,
});
$('talkBtn').addEventListener('click', () => {
  if (quiz.on) setQuiz(false);
  talk.open();
});
window.addEventListener('keydown', (e) => e.key === 'Escape' && (talk.isOpen() ? talk.close() : quiz.on ? setQuiz(false) : deselect()));

// ---------------------------------------------------------------- frame loop
const clock = new THREE.Clock();
const tmp = new THREE.Vector3();
function toScreen(v) {
  camera.updateMatrixWorld();
  v.project(camera);
  return [
    ((v.x + 1) / 2) * ((pixel.lowW * pixel.pixelSize) / view.devW) * view.cssW,
    view.cssH - ((v.y + 1) / 2) * ((pixel.lowH * pixel.pixelSize) / view.devH) * view.cssH,
  ];
}
function placeTag() {
  if (!current || !current.item) return;
  const { item, point } = current;
  if (point) tmp.copy(point).y += 0.9;
  else item.getWorldPosition(tmp).y += item.userData.labelY * item.userData.baseScale;
  const [x, y] = toScreen(tmp);
  tag.style.transform = `translate(calc(${x.toFixed(1)}px - 50%), calc(${(y - 8).toFixed(1)}px - 100%))`;
}
function frame() {
  clock.getDelta();
  now = clock.elapsedTime;
  if (fly) {
    const k = Math.min(1, (now - fly.t0) / 0.9);
    const e = k < 1 ? 1 - Math.pow(1 - k, 3) : 1;
    tmp.copy(fly.to).sub(controls.target).multiplyScalar(k < 1 ? Math.min(1, e * 0.25 + 0.04) : 1);
    controls.target.add(tmp);
    camera.position.add(tmp);
    if (k >= 1) fly = null;
  }
  controls.update();
  pixel.uniforms.uDepthThresh.value = (view.h / camera.zoom / view.devH) * pixel.pixelSize * 2.6;
  for (const u of updaters) u(now);
  for (const [item, t0] of pulses) {
    const k = (now - t0) / 0.7;
    const base = item.userData.baseScale;
    if (k >= 1) {
      item.scale.setScalar(base);
      pulses.delete(item);
    } else {
      item.scale.setScalar(base * (1 + 0.32 * Math.sin(k * Math.PI * 3) * (1 - k)));
    }
  }
  if (sceneId !== 'phone') pixel.render(); // the phone scene is plain HTML
  placeTag();
  requestAnimationFrame(frame);
}

window.addEventListener('resize', resize);
new ResizeObserver(() => resize()).observe(canvas);
resize();
setScene(sceneId);
requestAnimationFrame(frame);

// debugging / automated checks
window.__miniWorld = { items, primary, select, camera, quiz, toScreen, setScene, phone, talk };
