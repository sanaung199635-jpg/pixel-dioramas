// PHASE 1 CONCEPT TOOL — not production code.
// Miniature machines and props, modelled procedurally for concept renders.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export let T; // theme materials, set by initProps
export function initProps(theme) {
  const A = theme === 'A';
  const std = (color, roughness, metalness = 0, extra = {}) => new THREE.MeshPhysicalMaterial({ color, roughness, metalness, ...extra });
  T = {
    A,
    enamel: std(A ? 0xebe7df : 0x2b2f31, 0.42, 0, { clearcoat: 0.35, clearcoatRoughness: 0.3 }),
    enamel2: std(A ? 0xc9d1cb : 0x3a4043, 0.5, 0, { clearcoat: 0.2 }),
    accent: std(A ? 0x2f6b4f : 0x1f6b4a, 0.4, 0, { clearcoat: 0.4 }),
    steel: std(0xc8ccce, 0.28, 1),
    darkSteel: std(0x5a5f63, 0.4, 1),
    rubber: std(0x1e2122, 0.85),
    brass: std(0xc9a46a, 0.3, 1),
    grit: std(0x6d6f6c, 0.95),
    gritFine: std(0x9a9d97, 0.9),
    felt: std(0xe9e2d2, 1.0, 0, { sheen: 1, sheenColor: new THREE.Color(0xffffff), sheenRoughness: 0.6 }),
    wood: std(0xa98563, 0.75),
    water: new THREE.MeshPhysicalMaterial({ color: 0xd6eef2, roughness: 0.05, transparent: true, opacity: 0.38, depthWrite: false }),
    waterSurf: new THREE.MeshPhysicalMaterial({ color: A ? 0xbfd9d6 : 0x203236, roughness: 0.08, metalness: 0, transparent: true, opacity: 0.55, clearcoat: 1 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.02, transmission: 1, thickness: 0.05, ior: 1.5 }),
    plinth: std(A ? 0xf6f3ee : 0x151718, A ? 0.6 : 0.25, 0, { clearcoat: A ? 0 : 0.8, clearcoatRoughness: 0.15 }),
    plinthTop: std(A ? 0xfbf9f5 : 0x0f1112, A ? 0.75 : 0.2, 0, { clearcoat: A ? 0 : 1 }),
    velvet: std(A ? 0xe8e2d6 : 0x101413, 1, 0, { sheen: 1, sheenColor: new THREE.Color(A ? 0xffffff : 0x2e5a48), sheenRoughness: 0.5 }),
    ochre: std(0xd2a24a, 0.5, 0, { clearcoat: 0.3 }),
    glow: new THREE.MeshBasicMaterial({ color: 0x8dffc0 }),
  };
  return T;
}

export function shadowed(o) { o.traverse((c) => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } }); return o; }
export function rbox(w, h, d, r, mat) { return shadowed(new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, r), mat)); }
export function cyl(rt, rb, h, mat, seg = 64, open = false) { return shadowed(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), mat)); }
export function lathe(points, mat, seg = 96) { return shadowed(new THREE.Mesh(new THREE.LatheGeometry(points.map((p) => new THREE.Vector2(p[0], p[1])), seg), mat)); }
export function tube(pts, r, mat) { return shadowed(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p))), 64, r, 12), mat)); }
const at = (o, x, y, z) => { o.position.set(x, y, z); return o; };

/** Museum display plinth: chamfered drum. */
export function plinth(r = 1.6, h = 0.6) {
  const g = new THREE.Group();
  const c = 0.03;
  g.add(lathe([[0.001, 0], [r - c, 0], [r, c], [r, h - c * 2], [r - c * 2, h], [0.001, h]], T.plinth, 128));
  const ring = lathe([[r * 0.995, h - 0.015], [r * 1.005, h - 0.015], [r * 1.005, h - 0.005], [r * 0.995, h - 0.005]], T.A ? T.enamel2 : T.brass, 128);
  g.add(ring);
  return g;
}

export function contactShadow(size = 3, opacity = 0.35) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const x = cv.getContext('2d'); const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, `rgba(0,0,0,${opacity})`); gr.addColorStop(0.5, `rgba(0,0,0,${opacity * 0.4})`); gr.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.002; m.renderOrder = -1;
  return m;
}

export function labelCard(lines, w = 0.9, h = 0.55) {
  const cv = document.createElement('canvas'); cv.width = 720; cv.height = Math.round(720 * h / w);
  const x = cv.getContext('2d');
  x.fillStyle = T.A ? '#fbfaf6' : '#16191a'; x.fillRect(0, 0, cv.width, cv.height);
  x.strokeStyle = T.A ? '#d9d6cf' : '#2c3133'; x.lineWidth = 6; x.strokeRect(3, 3, cv.width - 6, cv.height - 6);
  x.fillStyle = '#2f6b4f'; x.fillRect(40, 44, 10, 70);
  x.fillStyle = T.A ? '#222826' : '#e9efe9';
  lines.forEach((l, i) => { x.font = `${l.w || 500} ${l.s}px "WenQuanYi Zen Hei", sans-serif`; x.fillStyle = l.c || (T.A ? '#222826' : '#e8eee9'); x.fillText(l.t, 70, 90 + i * 64 + (l.dy || 0)); });
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const card = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.012), [T.enamel, T.enamel, T.enamel, T.enamel, new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 }), T.enamel]);
  card.castShadow = true;
  const stand = rbox(0.06, h * 0.7, 0.3, 0.01, T.A ? T.enamel2 : T.darkSteel);
  stand.position.set(0, -h * 0.25, -0.12); stand.rotation.x = 0.2;
  const g = new THREE.Group(); g.add(card, stand); card.rotation.x = -0.25;
  return g;
}

export function loupe() {
  const g = new THREE.Group();
  const ring = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.035, 24, 96), T.brass));
  const lens = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.03, 64), T.glass)); lens.rotation.x = Math.PI / 2;
  const neck = cyl(0.04, 0.05, 0.16, T.brass); neck.position.y = -0.4;
  const handle = cyl(0.055, 0.045, 0.85, T.A ? T.wood : T.rubber); handle.position.y = -0.88;
  g.add(ring, lens, neck, handle);
  return g;
}

export function flashlight(on = false) {
  const g = new THREE.Group();
  const body = cyl(0.07, 0.07, 0.9, T.darkSteel); body.rotation.z = Math.PI / 2;
  const head = cyl(0.11, 0.075, 0.2, T.darkSteel); head.rotation.z = -Math.PI / 2; head.position.x = 0.54;
  const knurl = cyl(0.075, 0.075, 0.25, T.rubber, 24); knurl.rotation.z = Math.PI / 2; knurl.position.x = -0.15;
  const lensM = on ? new THREE.MeshBasicMaterial({ color: 0xfffbea }) : T.glass;
  const lens = cyl(0.095, 0.095, 0.01, lensM); lens.rotation.z = Math.PI / 2; lens.position.x = 0.645;
  g.add(body, head, knurl, lens);
  return g;
}

/** Water-cooled slab saw. Blade lies in the stone's x=0 plane (disc normal = x). */
export function slabSaw({ bladeY = 2.5, bladeZ = 0, bladeR = 1.55 } = {}) {
  const g = new THREE.Group();
  g.add(at(rbox(5.4, 0.9, 3.4, 0.08, T.enamel), 0, 0.45, 0));
  g.add(at(rbox(5.42, 0.08, 3.42, 0.03, T.accent), 0, 0.87, 0));
  // tray
  const trayW = 4.9, trayD = 3.0;
  g.add(at(rbox(trayW, 0.06, trayD, 0.02, T.darkSteel), 0, 0.93, 0));
  [[0, trayD / 2], [0, -trayD / 2]].forEach(([x, z]) => g.add(at(rbox(trayW, 0.22, 0.05, 0.02, T.steel), x, 1.04, z)));
  [[trayW / 2, 0], [-trayW / 2, 0]].forEach(([x, z]) => g.add(at(rbox(0.05, 0.22, trayD, 0.02, T.steel), x, 1.04, z)));
  const water = new THREE.Mesh(new THREE.PlaneGeometry(trayW - 0.1, trayD - 0.1), T.waterSurf); water.rotation.x = -Math.PI / 2; water.position.y = 1.02; g.add(water);
  // rails along z
  [-1.75, 1.75].forEach((x) => { const r = cyl(0.05, 0.05, trayD - 0.1, T.steel, 24); r.rotation.x = Math.PI / 2; r.position.set(x, 1.1, 0); g.add(r); });
  // carriage
  g.add(at(rbox(4.0, 0.12, 2.2, 0.03, T.enamel2), 0, 1.16, 0.2));
  // column + arm + motor
  g.add(at(rbox(0.5, 3.6, 0.6, 0.06, T.enamel), 2.15, 2.6, -1.35));
  g.add(at(rbox(2.3, 0.45, 0.55, 0.06, T.enamel), 1.15, bladeY + 0.0, bladeZ - 0.0 - 0.0 + -0.0 + 0));
  const motor = cyl(0.36, 0.36, 0.9, T.enamel2); motor.rotation.z = Math.PI / 2; motor.position.set(1.5, bladeY, bladeZ); g.add(motor);
  const fins = cyl(0.38, 0.38, 0.06, T.accent); fins.rotation.z = Math.PI / 2; fins.position.set(1.08, bladeY, bladeZ); g.add(fins);
  const shaft = cyl(0.06, 0.06, 1.2, T.steel); shaft.rotation.z = Math.PI / 2; shaft.position.set(0.5, bladeY, bladeZ); g.add(shaft);
  // blade
  const blade = new THREE.Group(); blade.position.set(0, bladeY, bladeZ);
  const disc = cyl(bladeR - 0.03, bladeR - 0.03, 0.018, T.steel, 160); disc.rotation.z = Math.PI / 2; blade.add(disc);
  const segGeo = new RoundedBoxGeometry(0.022, 0.05, 0.16, 2, 0.006);
  const segN = 44, segs = new THREE.InstancedMesh(segGeo, T.grit, segN); const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i < segN; i++) { const a = (i / segN) * Math.PI * 2; e.set(-a, 0, 0); q.setFromEuler(e); m4.compose(new THREE.Vector3(0, Math.cos(a) * bladeR, Math.sin(a) * bladeR), q, new THREE.Vector3(1, 1, 1)); segs.setMatrixAt(i, m4); }
  segs.castShadow = true; blade.add(segs);
  const hub = cyl(0.28, 0.28, 0.1, T.darkSteel); hub.rotation.z = Math.PI / 2; blade.add(hub);
  for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const b = cyl(0.03, 0.03, 0.13, T.steel, 12); b.rotation.z = Math.PI / 2; b.position.set(0, Math.cos(a) * 0.18, Math.sin(a) * 0.18); blade.add(b); }
  g.add(blade);
  // guard: open half-shell over the top of the blade
  const guard = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(bladeR + 0.14, bladeR + 0.14, 0.3, 96, 1, true, Math.PI * 0.12, Math.PI * 0.76), T.A ? T.accent : T.enamel2));
  guard.material = guard.material.clone(); guard.material.side = THREE.DoubleSide;
  guard.rotation.z = Math.PI / 2; guard.position.set(0, bladeY, bladeZ); g.add(guard);
  // coolant hoses + nozzles
  const nz = [[-0.12, bladeY - 0.3, bladeZ + bladeR * 0.55], [0.12, bladeY - 0.3, bladeZ + bladeR * 0.55]];
  nz.forEach(([x, y, z], i) => {
    g.add(tube([[i ? 0.5 : -0.5, bladeY + 1.0, bladeZ + 0.3], [x * 3, bladeY + 0.6, z - 0.2], [x, y + 0.1, z]], 0.035, T.rubber));
    const tip = cyl(0.03, 0.02, 0.14, T.brass, 16); tip.position.set(x, y, z); tip.rotation.x = 0.6; g.add(tip);
  });
  // control panel
  const panel = rbox(0.9, 0.5, 0.08, 0.03, T.A ? T.enamel2 : T.darkSteel); panel.position.set(-1.9, 0.55, 1.72); g.add(panel);
  [[0x3cc27a, -0.25], [0xe0533d, 0], [0xf2c14e, 0.25]].forEach(([c, x]) => { const b = cyl(0.06, 0.06, 0.05, new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.4 }), 24); b.rotation.x = Math.PI / 2; b.position.set(-1.9 + x, 0.6, 1.77); g.add(b); });
  // feet
  [[-2.5, -1.5], [2.5, -1.5], [-2.5, 1.5], [2.5, 1.5]].forEach(([x, z]) => g.add(at(cyl(0.12, 0.15, 0.08, T.rubber, 24), x, 0.04, z)));
  g.userData.contact = new THREE.Vector3(0, bladeY - bladeR, bladeZ);
  return g;
}

/** Streams of coolant: nozzle → blade contact, plus spray and mist. */
export function coolant(from, to, { n = 160, spread = 0.05, spray = 70, sprayAt = null, dir = new THREE.Vector3(0, 0.6, 1) } = {}) {
  const g = new THREE.Group();
  const geo = new THREE.CapsuleGeometry(0.008, 0.05, 2, 6);
  const inst = new THREE.InstancedMesh(geo, T.water, n + spray);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0);
  let k = 0;
  const rnd = mulberry(7);
  for (const f of from) {
    const d = new THREE.Vector3().subVectors(to, f);
    for (let i = 0; i < n / from.length; i++) {
      const t = rnd(); const p = f.clone().addScaledVector(d, t); p.y -= Math.sin(t * Math.PI) * 0.06;
      p.x += (rnd() - 0.5) * spread * t; p.z += (rnd() - 0.5) * spread * t;
      q.setFromUnitVectors(up, d.clone().normalize()); m.compose(p, q, new THREE.Vector3(1, 1 + rnd(), 1)); inst.setMatrixAt(k++, m);
    }
  }
  const s = sprayAt || to;
  for (let i = 0; i < spray; i++) {
    const v = new THREE.Vector3((rnd() - 0.5) * 0.6, rnd() * 0.5, 0).add(dir.clone().multiplyScalar(0.2 + rnd() * 0.5));
    const p = s.clone().add(v.multiplyScalar(0.9)); p.y += -0.3 * v.lengthSq();
    q.setFromUnitVectors(up, v.clone().normalize()); m.compose(p, q, new THREE.Vector3(0.7, 0.6 + rnd(), 0.7)); inst.setMatrixAt(k++, m);
  }
  inst.count = k;
  g.add(inst);
  g.add(mist(s, 0.9, T.A ? 0.35 : 0.22));
  return g;
}

export function mist(p, size = 1, op = 0.3) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const x = cv.getContext('2d');
  const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, `rgba(255,255,255,${op})`); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), depthWrite: false, transparent: true }));
  s.position.copy(p); s.scale.set(size, size * 0.7, 1);
  return s;
}

export function mulberry(a) { return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/** Bench core drill (套料机) with a double tube bit. */
export function coreDrill({ ri, ro, headY = 2.2, bitLen = 0.9 } = {}) {
  const g = new THREE.Group();
  g.add(at(rbox(2.6, 0.25, 2.0, 0.05, T.enamel), 0, 0.125, 0));
  g.add(at(rbox(2.3, 0.06, 1.7, 0.02, T.darkSteel), 0, 0.28, 0));
  const col = cyl(0.13, 0.13, 3.4, T.steel); col.position.set(0, 1.9, -0.75); g.add(col);
  g.add(at(rbox(0.7, 0.7, 1.1, 0.08, T.enamel), 0, headY + 0.55, -0.35));
  g.add(at(rbox(0.72, 0.1, 1.12, 0.03, T.accent), 0, headY + 0.25, -0.35));
  const quill = cyl(0.09, 0.09, 0.4, T.steel); quill.position.set(0, headY + 0.05, 0); g.add(quill);
  const motor = cyl(0.3, 0.3, 0.6, T.enamel2); motor.position.set(0, headY + 1.15, -0.35); g.add(motor);
  const outer = cyl(ro + 0.012, ro + 0.012, bitLen, T.steel, 96, true); outer.material = T.steel.clone(); outer.material.side = THREE.DoubleSide; outer.position.set(0, headY - bitLen / 2 - 0.15, 0); g.add(outer);
  const inner = cyl(ri - 0.012, ri - 0.012, bitLen, outer.material, 96, true); inner.position.copy(outer.position); g.add(inner);
  const cap = cyl(ro + 0.03, ro + 0.03, 0.06, T.darkSteel); cap.position.set(0, headY - 0.15, 0); g.add(cap);
  const rimO = cyl(ro + 0.016, ro + 0.016, 0.05, T.grit, 96, true); rimO.position.set(0, headY - bitLen - 0.13, 0); g.add(rimO);
  const lever = tube([[0.35, headY + 0.5, -0.1], [0.75, headY + 0.6, 0.2], [0.95, headY + 0.9, 0.45]], 0.025, T.steel); g.add(lever);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.07, 24, 16), T.rubber); knob.position.set(0.95, headY + 0.9, 0.45); g.add(knob);
  g.add(tube([[-0.3, headY + 0.4, -0.2], [-0.45, headY + 0.2, 0.1], [-0.2, headY - 0.1, 0.3]], 0.025, T.rubber));
  return g;
}

/** Horizontal spindle with a grinding / polishing wheel at +x end. */
export function grinder({ wheel = 'coarse', wheelR = 0.75, wheelW = 0.3 } = {}) {
  const g = new THREE.Group();
  g.add(at(rbox(3.0, 0.9, 1.6, 0.08, T.enamel), -0.6, 0.45, 0));
  g.add(at(rbox(3.02, 0.07, 1.62, 0.03, T.accent), -0.6, 0.86, 0));
  g.add(at(rbox(1.5, 0.75, 0.9, 0.1, T.enamel2), -1.1, 1.3, 0));
  const shaft = cyl(0.06, 0.06, 1.6, T.steel); shaft.rotation.z = Math.PI / 2; shaft.position.set(0.3, 1.35, 0); g.add(shaft);
  const bear = cyl(0.17, 0.17, 0.3, T.darkSteel); bear.rotation.z = Math.PI / 2; bear.position.set(-0.2, 1.35, 0); g.add(bear);
  g.add(at(rbox(0.3, 0.5, 0.4, 0.04, T.darkSteel), -0.2, 1.05, 0));
  const mat = wheel === 'coarse' ? T.grit : wheel === 'fine' ? T.gritFine : T.felt;
  const w = cyl(wheelR, wheelR, wheelW, mat, 128); w.rotation.z = Math.PI / 2; w.position.set(0.95, 1.35, 0); g.add(w);
  const fl = cyl(0.22, 0.22, wheelW + 0.06, T.steel); fl.rotation.z = Math.PI / 2; fl.position.copy(w.position); g.add(fl);
  // splash guard (back half)
  const guard = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(wheelR + 0.12, wheelR + 0.12, wheelW + 0.2, 96, 1, true, Math.PI * 0.5, Math.PI * 1.0), T.A ? T.accent.clone() : T.enamel2.clone()));
  guard.material.side = THREE.DoubleSide; guard.rotation.z = Math.PI / 2; guard.position.copy(w.position); g.add(guard);
  // water drip pipe
  g.add(tube([[0.2, 2.5, -0.5], [0.7, 2.4, -0.2], [0.95, 2.25, 0.15]], 0.025, T.rubber));
  const tip = cyl(0.025, 0.018, 0.12, T.brass, 16); tip.position.set(0.95, 2.18, 0.18); g.add(tip);
  g.userData.wheelPos = w.position.clone(); g.userData.wheelR = wheelR;
  return g;
}

/** Miniature open-pit diorama block. */
export function mineBlock() {
  const g = new THREE.Group();
  const S = 6, N = 150, top = 1.0, bottomY = -0.7;
  const pit = new THREE.Vector2(0.35, 0.1);
  const steps = 5, stepH = 0.27, stepW = 0.32, R0 = 2.15;
  const h = (x, z) => {
    const dx = (x - pit.x) / 1.15, dz = (z - pit.y) / 0.9; const d = Math.sqrt(dx * dx + dz * dz);
    const s = THREE.MathUtils.clamp((R0 - d) / stepW, 0, steps); const k = Math.floor(s), f = s - k;
    let y = top - (k + THREE.MathUtils.smoothstep(f, 0, 0.38)) * stepH;
    if (s >= steps) y = top - steps * stepH;
    y += noise(x * 3, z * 3) * 0.025 + noise(x * 9, z * 9) * 0.01;
    return y;
  };
  const geo = new THREE.PlaneGeometry(S, S, N, N); geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position, col = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), z = pos.getZ(i); pos.setY(i, h(x, z)); }
  geo.computeVertexNormals();
  const nrm = geo.attributes.normal;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i), slope = 1 - nrm.getY(i), x = pos.getX(i), z = pos.getZ(i);
    if (y > top - 0.02) c.setRGB(0.62, 0.66, 0.5).lerp(new THREE.Color(0.55, 0.6, 0.44), (noise(x * 2, z * 2) + 1) / 2);
    else if (slope > 0.25) { const band = (Math.sin(y * 34) + 1) / 2; c.setRGB(0.6, 0.45, 0.33).lerp(new THREE.Color(0.48, 0.38, 0.3), band); }
    else c.setRGB(0.8, 0.71, 0.56).lerp(new THREE.Color(0.72, 0.66, 0.58), (noise(x * 4, z * 4) + 1) / 2);
    c.convertSRGBToLinear(); col.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const ground = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  ground.receiveShadow = ground.castShadow = true; g.add(ground);
  // sides with strata
  const sideMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 });
  const mkSide = (fn) => {
    const P = [], C = [], I = []; const M = N, L = 14;
    for (let i = 0; i <= M; i++) { const t = i / M; const [x, z] = fn(t); const yt = h(x, z);
      for (let j = 0; j <= L; j++) { const y = bottomY + (yt - bottomY) * (j / L); P.push(x, y, z);
        const band = Math.floor((y + 2) * 9 + noise(x * 3, y * 4) * 1.4) % 4; const pal = [[0.58, 0.44, 0.32], [0.66, 0.55, 0.4], [0.5, 0.42, 0.34], [0.72, 0.62, 0.48]][band];
        const k = j === L ? [0.55, 0.6, 0.44] : pal; C.push(...k.map((v) => Math.pow(v, 2.2))); } }
    for (let i = 0; i < M; i++) for (let j = 0; j < L; j++) { const a = i * (L + 1) + j, b = a + L + 1; I.push(a, b, a + 1, b, b + 1, a + 1); }
    const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(C, 3)); gg.setIndex(I); gg.computeVertexNormals();
    const m = new THREE.Mesh(gg, sideMat.clone()); m.material.side = THREE.DoubleSide; m.castShadow = m.receiveShadow = true; return m;
  };
  const H = S / 2;
  g.add(mkSide((t) => [-H + t * S, H]), mkSide((t) => [H, H - t * S]), mkSide((t) => [H - t * S, -H]), mkSide((t) => [-H, -H + t * S]));
  // plinth under the block
  g.add(at(rbox(S + 0.3, 0.3, S + 0.3, 0.06, T.plinth), 0, bottomY - 0.15, 0));
  // pit-bottom pool
  const pool = new THREE.Mesh(new THREE.CircleGeometry(0.42, 48), T.waterSurf); pool.rotation.x = -Math.PI / 2; pool.scale.set(1.4, 0.8, 1); pool.position.set(pit.x + 0.2, top - steps * stepH + 0.03, pit.y + 0.05); g.add(pool);
  // trees on the rim
  const rnd = mulberry(3); const treeMat = new THREE.MeshStandardMaterial({ color: 0x5f7a52, roughness: 0.9 }); const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6d5642, roughness: 0.9 });
  for (let i = 0; i < 26; i++) {
    const x = -H + 0.25 + rnd() * (S - 0.5), z = -H + 0.25 + rnd() * (S - 0.5);
    if (h(x, z) < top - 0.02) continue;
    const s = 0.6 + rnd() * 0.6; const t = new THREE.Group();
    const tr = cyl(0.025 * s, 0.03 * s, 0.12 * s, trunkMat, 8); tr.position.y = 0.06 * s;
    const cn = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16 * s, 1), treeMat); cn.position.y = 0.24 * s; cn.scale.y = 1.25; cn.castShadow = true;
    t.add(tr, cn); t.position.set(x, h(x, z), z); g.add(t);
  }
  g.userData.h = h; g.userData.pit = pit; g.userData.stepH = stepH; g.userData.top = top;
  return g;
}
function noise(x, y) { return Math.sin(x * 1.7 + Math.sin(y * 1.3)) * 0.5 + Math.sin(y * 2.1 + Math.cos(x * 0.7)) * 0.5; }

export function excavator({ boom = 0.65, stick = -1.2, bucket = -0.6 } = {}) {
  const g = new THREE.Group();
  const yel = T.ochre;
  [-0.2, 0.2].forEach((z) => { g.add(at(rbox(0.75, 0.14, 0.13, 0.06, T.rubber), 0, 0.07, z)); });
  g.add(at(cyl(0.12, 0.12, 0.07, T.darkSteel, 24), 0, 0.17, 0));
  const upper = new THREE.Group(); upper.position.y = 0.2; g.add(upper);
  upper.add(at(rbox(0.6, 0.2, 0.42, 0.04, yel), -0.05, 0.1, 0));
  upper.add(at(rbox(0.22, 0.24, 0.2, 0.03, yel), 0.12, 0.32, 0.1));
  upper.add(at(rbox(0.2, 0.18, 0.21, 0.02, T.glass), 0.13, 0.33, 0.1));
  upper.add(at(rbox(0.2, 0.16, 0.4, 0.03, T.darkSteel), -0.28, 0.24, 0));
  const b1 = new THREE.Group(); b1.position.set(0.18, 0.18, -0.08); b1.rotation.z = boom; upper.add(b1);
  b1.add(at(rbox(0.65, 0.08, 0.07, 0.02, yel), 0.32, 0, 0));
  const b2 = new THREE.Group(); b2.position.set(0.64, 0, 0); b2.rotation.z = stick; b1.add(b2);
  b2.add(at(rbox(0.48, 0.06, 0.06, 0.02, yel), 0.24, 0, 0));
  const b3 = new THREE.Group(); b3.position.set(0.48, 0, 0); b3.rotation.z = bucket; b2.add(b3);
  b3.add(at(rbox(0.16, 0.12, 0.16, 0.02, T.darkSteel), 0.07, -0.02, 0));
  g.userData.bucket = b3;
  return g;
}

export function truck() {
  const g = new THREE.Group();
  [[-0.2, 0.15], [-0.2, -0.15], [0.25, 0.15], [0.25, -0.15]].forEach(([x, z]) => { const w = cyl(0.07, 0.07, 0.06, T.rubber, 20); w.rotation.x = Math.PI / 2; w.position.set(x, 0.07, z); g.add(w); });
  g.add(at(rbox(0.75, 0.06, 0.32, 0.02, T.darkSteel), 0.02, 0.13, 0));
  g.add(at(rbox(0.2, 0.2, 0.3, 0.03, T.ochre), 0.3, 0.26, 0));
  g.add(at(rbox(0.18, 0.1, 0.31, 0.02, T.glass), 0.32, 0.31, 0));
  const bed = rbox(0.48, 0.16, 0.34, 0.03, T.ochre); bed.position.set(-0.1, 0.25, 0); bed.rotation.z = 0.0; g.add(bed);
  const rnd = mulberry(9); const rock = new THREE.MeshStandardMaterial({ color: 0x8b7358, roughness: 1 });
  for (let i = 0; i < 9; i++) { const r = new THREE.Mesh(new THREE.DodecahedronGeometry(0.05 + rnd() * 0.03, 0), rock); r.position.set(-0.25 + rnd() * 0.3, 0.34 + rnd() * 0.04, -0.1 + rnd() * 0.2); r.castShadow = true; g.add(r); }
  return g;
}
