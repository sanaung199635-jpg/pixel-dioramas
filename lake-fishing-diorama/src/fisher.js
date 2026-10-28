// Pixel fisher characters with a cast -> wait -> nibble -> reel -> (catch) loop.
import * as THREE from 'three';
import { WATER_Y, lakeInside, makeFish } from './lake.js';

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (t) => Math.min(1, Math.max(0, t));
const ease = {
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
};
const damp = (a, b, k, dt) => a + (b - a) * (1 - Math.exp(-k * dt));

function m(color, flat = false) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: flat });
}
function part(parent, geo, mat, x = 0, y = 0, z = 0) {
  const o = new THREE.Mesh(geo, mat);
  o.position.set(x, y, z);
  o.castShadow = true;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}

function buildPerson(look, pose) {
  const root = new THREE.Group();
  const sit = pose !== 'stand';
  const body = new THREE.Group();
  body.position.y = sit ? 0.05 : 0.58;
  root.add(body);

  const skin = m(look.skin);
  const pants = m(look.pants);
  const shirt = m(look.shirt);
  const boots = m(look.boots || '#3a2e26');

  // legs
  const legs = [];
  for (const sx of [-1, 1]) {
    const hip = new THREE.Group();
    hip.position.set(sx * 0.085, 0, 0);
    body.add(hip);
    part(hip, new THREE.CapsuleGeometry(0.07, 0.17, 2, 7), pants, 0, -0.135, 0);
    const knee = new THREE.Group();
    knee.position.y = -0.27;
    hip.add(knee);
    part(knee, new THREE.CapsuleGeometry(0.06, 0.17, 2, 7), pants, 0, -0.13, 0);
    part(knee, new THREE.BoxGeometry(0.12, 0.08, 0.2), boots, 0, -0.27, 0.04);
    if (sit) {
      hip.rotation.x = -Math.PI / 2;
      knee.rotation.x = Math.PI / 2 - (pose === 'boat' ? 0.3 : 0);
    }
    legs.push({ hip, knee });
  }

  // torso
  part(body, new THREE.CylinderGeometry(0.155, 0.14, 0.44, 9), shirt, 0, 0.22, 0);
  if (look.vest) {
    const vest = m(look.vest);
    part(body, new THREE.CylinderGeometry(0.168, 0.152, 0.3, 9, 1, true), vest, 0, 0.2, 0).material.side = THREE.DoubleSide;
    for (const sx of [-1, 1]) part(body, new THREE.BoxGeometry(0.08, 0.07, 0.03), vest, sx * 0.07, 0.14, 0.15);
  }
  part(body, new THREE.CylinderGeometry(0.15, 0.15, 0.05, 9), m(look.belt || '#3b2f25'), 0, 0.02, 0);

  // head
  const head = new THREE.Group();
  head.position.y = 0.56;
  body.add(head);
  part(head, new THREE.SphereGeometry(0.115, 10, 8), skin);
  part(head, new THREE.SphereGeometry(0.118, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), m(look.hair || '#3b2a1f'), 0, 0.005, -0.012);
  part(head, new THREE.BoxGeometry(0.02, 0.02, 0.01), m('#222'), 0.04, 0.0, 0.11);
  part(head, new THREE.BoxGeometry(0.02, 0.02, 0.01), m('#222'), -0.04, 0.0, 0.11);
  const hatM = m(look.hatColor);
  if (look.hat === 'bucket') {
    part(head, new THREE.CylinderGeometry(0.18, 0.2, 0.03, 12), hatM, 0, 0.08, 0);
    part(head, new THREE.CylinderGeometry(0.105, 0.125, 0.11, 12), hatM, 0, 0.14, 0);
  } else if (look.hat === 'cap') {
    part(head, new THREE.SphereGeometry(0.125, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), hatM, 0, 0.03, 0);
    part(head, new THREE.BoxGeometry(0.17, 0.02, 0.13), hatM, 0, 0.04, 0.12);
  } else if (look.hat === 'straw') {
    part(head, new THREE.CylinderGeometry(0.27, 0.27, 0.02, 14), hatM, 0, 0.08, 0);
    part(head, new THREE.CylinderGeometry(0.1, 0.12, 0.1, 12), hatM, 0, 0.13, 0);
    part(head, new THREE.CylinderGeometry(0.122, 0.122, 0.03, 12), m('#a2483a'), 0, 0.1, 0);
  }

  // arms
  const arms = [];
  for (const sx of [-1, 1]) {
    const sh = new THREE.Group();
    sh.position.set(sx * 0.19, 0.4, 0);
    body.add(sh);
    part(sh, new THREE.CapsuleGeometry(0.05, 0.22, 2, 6), shirt, 0, -0.16, 0);
    part(sh, new THREE.SphereGeometry(0.05, 6, 5), skin, 0, -0.32, 0);
    sh.rotation.z = -sx * 0.32;
    arms.push(sh);
  }

  // rod
  const rodPivot = new THREE.Group();
  rodPivot.position.set(0.04, 0.26, 0.24);
  body.add(rodPivot);
  const L = look.rodLen || 2.1;
  const blank = new THREE.CylinderGeometry(0.014, 0.028, L, 5);
  blank.translate(0, L / 2, 0);
  part(rodPivot, blank, m(look.rodColor || '#2c2c2a'));
  part(rodPivot, new THREE.CylinderGeometry(0.026, 0.026, 0.32, 6), m('#b58d5c'), 0, -0.05, 0);
  const reel = part(rodPivot, new THREE.CylinderGeometry(0.045, 0.045, 0.04, 8), m('#c9ccd0'), 0.05, 0.06, 0);
  reel.rotation.z = Math.PI / 2;
  const tip = new THREE.Object3D();
  tip.position.y = L;
  rodPivot.add(tip);

  return { root, body, head, arms, legs, rodPivot, tip, reel };
}

export class Fisher {
  constructor(o) {
    this.p = buildPerson(o.look, o.pose);
    this.pose = o.pose;
    this.root = this.p.root;
    this.root.position.set(...o.pos);
    this.root.rotation.y = o.rotY;
    o.parent.add(this.root);
    this.ripples = o.ripples;
    this.targets = o.targets;
    this.onCatch = o.onCatch || (() => {});
    this.ph = Math.random() * 6;
    this.root.traverse((c) => {
      if (c.isMesh) c.userData.fisher = this;
    });

    // bobber + line live in world space
    const bob = new THREE.Group();
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), m('#e2402f'));
    const bot = new THREE.Mesh(new THREE.SphereGeometry(0.065, 8, 5, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), m('#f4f2ea'));
    bob.add(top, bot);
    o.dyn.add(bob);
    this.bobber = bob;
    this.N = 16;
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.N * 3), 3));
    this.line = new THREE.Line(lg, new THREE.LineBasicMaterial({ color: '#f1efe6', transparent: true, opacity: 0.9, depthWrite: false }));
    this.line.frustumCulled = false;
    o.fx.add(this.line);

    const f = makeFish(o.catchColor || '#d9822f', '#f3ead8');
    f.group.visible = false;
    o.dyn.add(f.group);
    this.fish = f;

    this.tip = new THREE.Vector3();
    this.bob = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.from = new THREE.Vector3();
    this.drag = new THREE.Vector3();
    this.rodAngle = 0.55;
    this.a0 = 0.55;
    this.sag = 0;
    this.go('idle', o.delay ?? 1);
    this.p.root.updateMatrixWorld(true);
    this.p.tip.getWorldPosition(this.tip);
    this.bob.copy(this.tip).y -= 0.32;
  }

  go(state, dur) {
    this.state = state;
    this.st = 0;
    this.dur = dur;
    this.a0 = this.rodAngle;
    this.dipFlag = false;
  }

  pickTarget() {
    const base = this.targets[(Math.random() * this.targets.length) | 0];
    let x = base[0] + (Math.random() - 0.5) * 1.4;
    let z = base[1] + (Math.random() - 0.5) * 1.4;
    if (!lakeInside(x, z, 0.1)) [x, z] = base;
    this.target.set(x, WATER_Y + 0.03, z);
  }

  poke() {
    if (this.state === 'idle') this.st = this.dur;
    else if (this.state === 'wait') {
      this.forceCatch = true;
      this.st = Math.max(this.st, this.nibbleAt);
    }
  }

  hang(t, out) {
    out.copy(this.tip);
    out.x += Math.sin(t * 2.1 + this.ph) * 0.03;
    out.y -= 0.32;
    return out;
  }

  update(dt, t) {
    this.st += dt;
    const s = clamp01(this.st / this.dur);
    let a = this.rodAngle;
    const hangPos = this.hang(t, new THREE.Vector3());
    this.sag = damp(this.sag, 0, 3, dt);

    switch (this.state) {
      case 'idle':
        a = damp(a, 0.55 + Math.sin(t * 1.2 + this.ph) * 0.03, 4, dt);
        this.bob.lerp(hangPos, 1 - Math.exp(-10 * dt));
        if (this.st >= this.dur) this.go('windup', 0.6);
        break;
      case 'windup':
        a = lerp(this.a0, -0.55, ease.out(s));
        this.bob.lerp(hangPos, 1 - Math.exp(-14 * dt));
        if (s >= 1) this.go('cast', 0.26);
        break;
      case 'cast':
        a = lerp(-0.55, 1.25, ease.in(s));
        this.bob.lerp(hangPos, 1 - Math.exp(-20 * dt));
        if (s >= 1) {
          this.pickTarget();
          this.from.copy(this.bob);
          const dist = this.from.distanceTo(this.target);
          this.arc = 0.9 + dist * 0.12;
          this.go('flight', 0.85 + dist * 0.05);
        }
        break;
      case 'flight': {
        a = damp(a, 1.0, 5, dt);
        const k = ease.out(s) * 0.4 + s * 0.6;
        this.bob.lerpVectors(this.from, this.target, k);
        this.bob.y += this.arc * 4 * k * (1 - k);
        if (s >= 1) {
          this.ripples.spawn(this.target.x, this.target.z, 0.85, 1.5, 0.75);
          this.ripples.spawn(this.target.x, this.target.z, 0.45, 1.0, 0.6, 0.2);
          this.go('wait', 4 + Math.random() * 5);
          this.nibbleAt = this.dur - 1.5;
          this.nextRipple = 1.2 + Math.random();
          this.sag = 0.35;
        }
        break;
      }
      case 'wait': {
        let dip = 0;
        if (this.st > this.nibbleAt) {
          const l = this.st - this.nibbleAt;
          const on = (l > 0.1 && l < 0.35) || (l > 0.75 && l < 1.0) || l > 1.3;
          dip = on ? -0.07 : 0;
          if (on && !this.dipFlag) this.ripples.spawn(this.target.x, this.target.z, 0.5, 0.9, 0.7);
          this.dipFlag = on;
        }
        a = damp(a, 1.0 + Math.sin(t * 0.9 + this.ph) * 0.02 + dip * 1.2, 6, dt);
        this.bob.set(this.target.x, WATER_Y + 0.03 + Math.sin(t * 2.3 + this.ph) * 0.012 + dip, this.target.z);
        this.nextRipple -= dt;
        if (this.nextRipple <= 0) {
          this.nextRipple = 1.6 + Math.random() * 1.6;
          this.ripples.spawn(this.target.x, this.target.z, 0.35, 1.2, 0.45);
        }
        this.sag = 0.32;
        if (this.st >= this.dur) {
          this.caught = this.forceCatch || Math.random() < 0.42;
          this.forceCatch = false;
          this.go('reel', 1.8);
          this.trail = 0;
        }
        break;
      }
      case 'reel': {
        a = lerp(this.a0, 0.22, ease.inOut(s));
        this.p.reel.rotation.x += dt * 22;
        const split = 0.55;
        if (s < split) {
          const q = s / split;
          const shore = new THREE.Vector3(this.tip.x, WATER_Y + 0.03, this.tip.z);
          this.bob.lerpVectors(this.target, shore, ease.in(q) * 0.55);
          this.bob.y = WATER_Y + 0.03;
          this.drag.copy(this.bob);
          this.trail -= dt;
          if (this.trail <= 0) {
            this.trail = 0.16;
            this.ripples.spawn(this.bob.x, this.bob.z, this.caught ? 0.45 : 0.28, 0.9, 0.55);
          }
          this.sag = 0.1;
        } else {
          const q = (s - split) / (1 - split);
          if (!this.lifted) {
            this.lifted = true;
            if (this.caught) {
              this.ripples.spawn(this.bob.x, this.bob.z, 0.9, 1.3, 0.8);
              this.fish.group.visible = true;
            }
          }
          this.bob.lerpVectors(this.drag, hangPos, ease.out(q));
        }
        if (s >= 1) {
          this.lifted = false;
          if (this.caught) this.go('show', 1.6);
          else this.go('idle', 1.2 + Math.random() * 2);
        }
        break;
      }
      case 'show':
        a = damp(a, 0.2 + Math.sin(t * 3) * 0.04, 5, dt);
        this.bob.lerp(hangPos, 1 - Math.exp(-12 * dt));
        if (s >= 1) {
          this.fish.group.visible = false;
          this.onCatch(this);
          this.go('idle', 1.5 + Math.random() * 2.5);
        }
        break;
    }

    this.rodAngle = a;
    this.applyPose(t);
    this.p.tip.getWorldPosition(this.tip);

    this.bobber.position.copy(this.bob);
    if (this.fish.group.visible) {
      const fg = this.fish.group;
      fg.position.copy(this.bob).y -= 0.19;
      fg.rotation.set(0, Math.sin(t * 9) * 0.7, Math.PI / 2 + Math.sin(t * 13) * 0.25);
      this.fish.tail.rotation.y = Math.sin(t * 20) * 0.6;
    }
    this.updateLine();
  }

  applyPose(t) {
    const p = this.p;
    const a = this.rodAngle;
    p.rodPivot.rotation.x = a;
    p.rodPivot.position.y = 0.26 + (a < 0.3 ? (0.3 - a) * 0.12 : 0);
    const lift = clamp01((1.0 - a) / 1.5);
    p.arms[1].rotation.x = -0.95 - 0.75 * lift;
    p.arms[0].rotation.x = -0.85 - 0.55 * lift;
    p.body.rotation.x = (this.pose === 'stand' ? 0.04 : 0.1) + (a > 1.1 ? 0.06 : 0) - (a < 0 ? 0.05 : 0);
    p.head.rotation.y = Math.sin(t * 0.4 + this.ph) * 0.25;
    p.head.rotation.x = this.state === 'wait' ? 0.18 : 0.05;
    if (this.pose === 'sit') {
      for (let i = 0; i < 2; i++) p.legs[i].knee.rotation.x = Math.PI / 2 - 0.15 + Math.sin(t * 1.6 + i * 2.2 + this.ph) * 0.18;
    }
  }

  updateLine() {
    const arr = this.line.geometry.attributes.position.array;
    const N = this.N;
    for (let i = 0; i < N; i++) {
      const s = i / (N - 1);
      arr[i * 3] = this.tip.x + (this.bob.x - this.tip.x) * s;
      arr[i * 3 + 1] = this.tip.y + (this.bob.y - this.tip.y) * s - this.sag * 4 * s * (1 - s);
      arr[i * 3 + 2] = this.tip.z + (this.bob.z - this.tip.z) * s;
    }
    this.line.geometry.attributes.position.needsUpdate = true;
  }
}
