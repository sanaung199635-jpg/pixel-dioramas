// Theme A · WHITE JADE GALLERY: warm-white seamless gallery, soft key light,
// large soft contact shadows. Light levels can be dimmed for the torch view.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

export const PAPER = 0xf1eee8;
/** Backdrop colour in the darkened inspection room. */
const DIM = 0x4a4844;

export class Studio {
  readonly key: THREE.DirectionalLight;
  private readonly hemi: THREE.HemisphereLight;
  private readonly fill: THREE.DirectionalLight;
  private readonly rim: THREE.DirectionalLight;
  private readonly base: { hemi: number; key: number; fill: number; rim: number };
  private readonly envTexture: THREE.Texture;
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

    const pmrem = new THREE.PMREMGenerator(renderer);
    this.envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    scene.environment = this.envTexture;
    scene.environmentIntensity = 0.85;

    this.hemi = new THREE.HemisphereLight(0xffffff, 0xd8d0c2, 0.85);
    this.key = new THREE.DirectionalLight(0xfff6ea, 2.3);
    this.key.position.set(9, 10, 6);
    this.key.target.position.set(4, 0, -0.5);
    this.key.castShadow = true;
    this.key.shadow.bias = -0.0003;
    this.key.shadow.normalBias = 0.02;
    Object.assign(this.key.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 0.5, far: 40 });
    this.fill = new THREE.DirectionalLight(0xeaf2ff, 0.45);
    this.fill.position.set(-7, 3, 3);
    this.rim = new THREE.DirectionalLight(0xffffff, 0.9);
    this.rim.position.set(-1, 5, -9);
    scene.add(this.hemi, this.key, this.key.target, this.fill, this.rim);
    this.base = { hemi: 0.85, key: 2.3, fill: 0.45, rim: 0.9 };
    this.setShadowMapSize(2048);
  }

  setShadowMapSize(size: number): void {
    if (this.key.shadow.mapSize.x === size) return;
    this.key.shadow.mapSize.set(size, size);
    this.key.shadow.map?.dispose();
    this.key.shadow.map = null;
  }

  /** 1 = normal gallery light, 0 = dark room for torch inspection. */
  setExposure(level: number, scene: THREE.Scene): void {
    const k = 0.12 + 0.88 * level;
    this.hemi.intensity = this.base.hemi * k;
    this.key.intensity = this.base.key * k;
    this.fill.intensity = this.base.fill * k;
    this.rim.intensity = this.base.rim * k;
    scene.environmentIntensity = 0.85 * (0.2 + 0.8 * level);
    this.backdrop.color.lerpColors(this.dim, this.paper, level);
    (scene.fog as THREE.Fog).color.copy(this.backdrop.color);
    this.renderer.setClearColor(this.backdrop.color);
  }

  dispose(): void {
    this.envTexture.dispose();
  }
}
