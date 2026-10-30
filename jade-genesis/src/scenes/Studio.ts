// Theme A · WHITE JADE GALLERY: warm-white seamless gallery, soft key light,
// large soft contact shadows. Light levels can be dimmed for the torch view.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const PAPER = 0xf1eee8;

/**
 * One place for the gallery lighting. Key, fill and rim are directional lights;
 * the environment is a procedural photo studio (softboxes, no image files).
 */
export const LIGHTING = {
  hemi: 0.8, key: 2.3, fill: 0.45, rim: 0.9,
  envIntensity: 0.85,
  // ACES chosen over Neutral after A/B: Neutral pushed the greens towards fluorescent
  // and turned the white floor cream (docs/PHASE7_VISUAL_REPORT.md)
  toneMapping: 'aces' as Look['toneMapping'],
  exposure: 1,
};

export interface Look {
  toneMapping: 'aces' | 'neutral' | 'agx';
  env: 'studio' | 'room';
}

const KEY_OFFSET = new THREE.Vector3(5, 10, 6);
const TONE = { aces: THREE.ACESFilmicToneMapping, neutral: THREE.NeutralToneMapping, agx: THREE.AgXToneMapping };

/**
 * Jewellery-studio environment for reflections: a soft grey cyclorama with one
 * large overhead softbox and two tall strip lights. Large, simple light shapes
 * give long clean highlights on polished jade instead of many small streaks.
 */
function studioEnvironment(): THREE.Scene {
  const env = new THREE.Scene();
  const geo = new THREE.SphereGeometry(20, 48, 24);
  const col = new Float32Array(geo.attributes.position.count * 3);
  const top = new THREE.Color(0xe9e7e2), mid = new THREE.Color(0xb8b5ae), low = new THREE.Color(0x77736c), c = new THREE.Color();
  for (let i = 0; i < geo.attributes.position.count; i++) {
    const y = geo.attributes.position.getY(i) / 20;
    if (y > 0) c.copy(mid).lerp(top, y); else c.copy(mid).lerp(low, Math.min(1, -y * 1.6));
    col.set([c.r, c.g, c.b], i * 3);
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  env.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
  const panel = (w: number, h: number, strength: number, pos: [number, number, number], look: [number, number, number]) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.985, 0.96).multiplyScalar(strength), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(...look);
    env.add(m);
  };
  panel(10, 7, 3.2, [1, 12, 3], [0, 0, 0]);      // overhead softbox
  panel(2.2, 11, 2.2, [-13, 3, 4], [0, 1, 0]);   // left strip
  panel(2.2, 11, 1.6, [12, 3, -6], [0, 1, 0]);   // right-rear strip
  panel(6, 3, 0.9, [3, 2, 14], [0, 1, 0]);       // low front bounce card
  return env;
}
/** Backdrop colour in the darkened inspection room. */
const DIM = 0x4a4844;

export class Studio {
  readonly key: THREE.DirectionalLight;
  private readonly hemi: THREE.HemisphereLight;
  private readonly fill: THREE.DirectionalLight;
  private readonly rim: THREE.DirectionalLight;
  private readonly base: { hemi: number; key: number; fill: number; rim: number };
  private readonly envs: Partial<Record<Look['env'], THREE.Texture>> = {};
  private readonly scene: THREE.Scene;
  look: Look = { toneMapping: LIGHTING.toneMapping, env: 'studio' };
  private readonly backdrop: THREE.MeshBasicMaterial;
  private readonly paper = new THREE.Color(PAPER);
  private readonly dim = new THREE.Color(DIM);

  constructor(scene: THREE.Scene, private readonly renderer: THREE.WebGLRenderer) {
    const bg = new THREE.Color(PAPER);
    renderer.setClearColor(bg);
    // A real backdrop mesh (not scene.background) so the transmission pass sees it.
    this.backdrop = new THREE.MeshBasicMaterial({ color: bg.clone(), side: THREE.BackSide, fog: false, toneMapped: false });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(60, 48, 24), this.backdrop);
    dome.name = 'backdrop';
    scene.add(dome);
    scene.fog = new THREE.Fog(bg.clone(), 30, 58);
    const floor = new THREE.Mesh(new THREE.CircleGeometry(60, 64), new THREE.MeshStandardMaterial({ color: 0xf3f0ea, roughness: 1 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    floor.name = 'floor';
    scene.add(floor);

    this.scene = scene;
    this.setLook(this.look);
    scene.environmentIntensity = LIGHTING.envIntensity;

    this.hemi = new THREE.HemisphereLight(0xffffff, 0xd8d0c2, LIGHTING.hemi);
    this.key = new THREE.DirectionalLight(0xfff6ea, LIGHTING.key);
    this.key.position.set(9, 10, 6);
    this.key.target.position.set(4, 0, -0.5);
    this.key.castShadow = true;
    this.key.shadow.bias = -0.0003;
    this.key.shadow.normalBias = 0.02;
    Object.assign(this.key.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 0.5, far: 40 });
    this.fill = new THREE.DirectionalLight(0xeaf2ff, LIGHTING.fill);
    this.fill.position.set(-7, 3, 3);
    this.rim = new THREE.DirectionalLight(0xffffff, LIGHTING.rim);
    this.rim.position.set(-1, 5, -9);
    scene.add(this.hemi, this.key, this.key.target, this.fill, this.rim);
    this.base = { hemi: LIGHTING.hemi, key: LIGHTING.key, fill: LIGHTING.fill, rim: LIGHTING.rim };
    this.setShadowMapSize(2048);
  }

  setShadowMapSize(size: number): void {
    if (this.key.shadow.mapSize.x === size) return;
    this.key.shadow.mapSize.set(size, size);
    this.key.shadow.map?.dispose();
    this.key.shadow.map = null;
  }

  /** Tone mapping and reflection environment (A/B comparison, fallback). */
  setLook(l: Partial<Look>): void {
    this.look = { ...this.look, ...l };
    this.renderer.toneMapping = TONE[this.look.toneMapping];
    this.renderer.toneMappingExposure = LIGHTING.exposure;
    let tex = this.envs[this.look.env];
    if (!tex) {
      const pmrem = new THREE.PMREMGenerator(this.renderer);
      const src = this.look.env === 'studio' ? studioEnvironment() : new RoomEnvironment();
      tex = this.envs[this.look.env] = pmrem.fromScene(src, 0.04).texture;
      pmrem.dispose();
      src.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.geometry.dispose(); (m.material as THREE.Material).dispose(); } });
    }
    this.scene.environment = tex;
    // tone-mapping change needs every material recompiled
    this.scene.traverse((o) => { const m = (o as THREE.Mesh).material; if (m) for (const x of Array.isArray(m) ? m : [m]) x.needsUpdate = true; });
  }

  /**
   * Move the key light (and its shadow box) to the active station. The box is
   * snapped to whole shadow-map texels so shadow edges do not shimmer while the
   * camera travels between stations.
   */
  focus(x: number, z: number): void {
    const texel = (this.key.shadow.camera.right - this.key.shadow.camera.left) / this.key.shadow.mapSize.x;
    // light-space axes of the shadow camera (it looks along -KEY_OFFSET, up = +y)
    const zA = KEY_OFFSET.clone().normalize();
    const xA = new THREE.Vector3(0, 1, 0).cross(zA).normalize();
    const yA = zA.clone().cross(xA);
    const p = new THREE.Vector3(x, 0, z);
    const snap = (v: number) => Math.round(v / texel) * texel;
    // read all three light-space coordinates before building the snapped point
    const u = snap(p.dot(xA)), v = snap(p.dot(yA)), w = p.dot(zA);
    const t = new THREE.Vector3().addScaledVector(xA, u).addScaledVector(yA, v).addScaledVector(zA, w);
    this.key.target.position.copy(t);
    this.key.position.copy(t).add(KEY_OFFSET);
    this.key.target.updateMatrixWorld();
  }

  /** Whether a world point falls inside the key light's shadow box (regression guard). */
  shadowCovers(p: THREE.Vector3): boolean {
    this.key.updateMatrixWorld();
    this.key.target.updateMatrixWorld();
    this.key.shadow.updateMatrices(this.key);
    return this.key.shadow.getFrustum().containsPoint(p);
  }

  /** Showcase lighting presets. */
  setMode(mode: 'gallery' | 'soft' | 'back'): void {
    const m = { gallery: [1, 1, 1, 1], soft: [1.5, 0.35, 1.6, 0.6], back: [0.35, 0.25, 0.2, 3.2] }[mode];
    this.mode = m;
    // reflections fill in the shadows; back light needs them low to read as back light
    this.envMode = { gallery: 1, soft: 1.15, back: 0.4 }[mode];
  }

  private mode = [1, 1, 1, 1];
  private envMode = 1;

  /** 1 = normal gallery light, 0 = dark room for torch inspection. */
  setExposure(level: number, scene: THREE.Scene): void {
    const k = 0.12 + 0.88 * level;
    const [hm, km, fm, rm] = this.mode;
    this.hemi.intensity = this.base.hemi * k * hm;
    this.key.intensity = this.base.key * k * km;
    this.fill.intensity = this.base.fill * k * fm;
    this.rim.intensity = this.base.rim * k * rm;
    scene.environmentIntensity = LIGHTING.envIntensity * this.envMode * (0.2 + 0.8 * level);
    this.backdrop.color.lerpColors(this.dim, this.paper, level);
    (scene.fog as THREE.Fog).color.copy(this.backdrop.color);
    this.renderer.setClearColor(this.backdrop.color);
  }

  dispose(): void {
    for (const t of Object.values(this.envs)) t?.dispose();
  }
}
