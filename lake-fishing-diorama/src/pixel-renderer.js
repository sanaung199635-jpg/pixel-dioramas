// Low-resolution render target pipeline:
//  1) beauty pass  -> small RT (nearest) + depth texture
//  2) normal pass  -> small RT (MeshNormalMaterial override)
//  3) full-screen composite: nearest upscale, depth/normal pixel outlines,
//     screen-space crease AO from depth, grading, sRGB + ordered dithering.
import * as THREE from 'three';

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform sampler2D tDiffuse;
  uniform sampler2D tDepth;
  uniform sampler2D tNormal;
  uniform vec2  uRes;
  uniform float uPixel;
  uniform float uNear;
  uniform float uFar;
  uniform float uDepthThresh;
  uniform float uDepthEdge;
  uniform float uNormalEdge;
  uniform float uAO;
  uniform vec3  uTint;
  uniform float uSat;
  uniform float uContrast;
  uniform float uLevels;
  uniform float uDither;
  varying vec2 vUv;

  float lin(vec2 uv) { return uNear + texture2D(tDepth, uv).x * (uFar - uNear); }
  vec3  nrm(vec2 uv) { return texture2D(tNormal, uv).rgb * 2.0 - 1.0; }
  vec3 toSRGB(vec3 c) {
    c = clamp(c, 0.0, 1.0);
    return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
  }
  float bayer2(vec2 a) { a = floor(a); return fract(a.x * 0.5 + a.y * a.y * 0.75); }
  float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }

  float crease(vec2 uv, float d, vec2 o, float R) {
    float da = lin(uv + o);
    float db = lin(uv - o);
    float a = d - da;
    float b = d - db;
    if (abs(a) > R || abs(b) > R) return 0.0;
    return clamp((a + b) / R, 0.0, 1.0);
  }

  void main() {
    vec2 cell = floor(gl_FragCoord.xy / uPixel);
    vec2 px = 1.0 / uRes;
    vec2 uv = (cell + 0.5) * px;
    vec3 col = texture2D(tDiffuse, uv).rgb;
    float raw = texture2D(tDepth, uv).x;

    if (raw > 0.99999) {               // empty white space (keeps smoke / mist over it)
      gl_FragColor = vec4(toSRGB(col), 1.0);
      return;
    }

    float d = lin(uv);
    vec3 n = nrm(uv);

    // --- pixel outlines (depth = darker silhouette, normal = light crease highlight)
    float dei = 0.0;
    float nei = 0.0;
    vec2 offs[4];
    offs[0] = vec2(1.0, 0.0); offs[1] = vec2(-1.0, 0.0); offs[2] = vec2(0.0, 1.0); offs[3] = vec2(0.0, -1.0);
    for (int i = 0; i < 4; i++) {
      vec2 nuv = uv + offs[i] * px;
      float nd = lin(nuv);
      dei += clamp(nd - d, 0.0, 4.0 * uDepthThresh);
      vec3 nn = nrm(nuv);
      float nDiff = dot(n - nn, vec3(1.0));
      float nInd = clamp(smoothstep(-0.01, 0.01, nDiff), 0.0, 1.0);
      float dInd = clamp(sign(d - nd + uDepthThresh * 0.6), 0.0, 1.0);
      nei += (1.0 - dot(n, nn)) * dInd * nInd;
    }
    dei = floor(smoothstep(uDepthThresh, uDepthThresh * 2.0, dei) * 2.0) / 2.0;
    nei = step(0.12, nei);
    col *= dei > 0.0 ? (1.0 - uDepthEdge * dei) : (1.0 + uNormalEdge * nei);

    // --- crease ambient occlusion (second derivative of depth)
    float R = uDepthThresh * 7.0;
    float ao = 0.0;
    ao += crease(uv, d, vec2(2.0, 0.0) * px, R);
    ao += crease(uv, d, vec2(0.0, 2.0) * px, R);
    ao += crease(uv, d, vec2(2.0, 2.0) * px, R);
    ao += crease(uv, d, vec2(2.0, -2.0) * px, R);
    ao += crease(uv, d, vec2(4.0, 0.0) * px, R) * 0.7;
    ao += crease(uv, d, vec2(0.0, 4.0) * px, R) * 0.7;
    ao += crease(uv, d, vec2(4.0, 3.0) * px, R) * 0.7;
    ao += crease(uv, d, vec2(4.0, -3.0) * px, R) * 0.7;
    ao = clamp(ao / 3.2, 0.0, 1.0);
    col *= 1.0 - uAO * ao;

    // --- grade
    col *= uTint;
    float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
    col = mix(vec3(l), col, uSat);
    vec3 s = toSRGB(col);
    s = (s - 0.5) * uContrast + 0.5;

    // --- quantize with 4x4 ordered dither aligned to the art-pixel grid
    float b = bayer4(cell) - 0.5;
    s = floor(s * uLevels + 0.5 + b * uDither) / uLevels;
    gl_FragColor = vec4(clamp(s, 0.0, 1.0), 1.0);
  }
`;

export class PixelRenderer {
  constructor(renderer, scene, camera, hiddenInNormalPass = []) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.hidden = hiddenInNormalPass;
    this.pixelSize = 3;
    this.lowW = 2;
    this.lowH = 2;
    this.normalMat = new THREE.MeshNormalMaterial();

    this.uniforms = {
      tDiffuse: { value: null },
      tDepth: { value: null },
      tNormal: { value: null },
      uRes: { value: new THREE.Vector2(2, 2) },
      uPixel: { value: 3 },
      uNear: { value: camera.near },
      uFar: { value: camera.far },
      uDepthThresh: { value: 0.25 },
      uDepthEdge: { value: 0.32 },
      uNormalEdge: { value: 0.22 },
      uAO: { value: 0.36 },
      uTint: { value: new THREE.Color(1, 1, 1) },
      uSat: { value: 1.0 },
      uContrast: { value: 1.04 },
      uLevels: { value: 64 },
      uDither: { value: 0.35 },
    };
    this.quad = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({ uniforms: this.uniforms, vertexShader, fragmentShader, depthTest: false, depthWrite: false })
    );
    this.quad.frustumCulled = false;
    this.quadScene = new THREE.Scene();
    this.quadScene.add(this.quad);
    this.quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.allocate(2, 2);
  }

  allocate(w, h) {
    if (this.beauty) {
      this.beauty.depthTexture.dispose();
      this.beauty.dispose();
      this.normals.dispose();
    }
    const base = { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, generateMipmaps: false };
    this.beauty = new THREE.WebGLRenderTarget(w, h, { ...base, type: THREE.HalfFloatType });
    this.beauty.depthTexture = new THREE.DepthTexture(w, h);
    this.normals = new THREE.WebGLRenderTarget(w, h, base);
    this.uniforms.tDiffuse.value = this.beauty.texture;
    this.uniforms.tDepth.value = this.beauty.depthTexture;
    this.uniforms.tNormal.value = this.normals.texture;
  }

  /** devW/devH = drawing-buffer size in device pixels, ps = art-pixel size in device pixels */
  setSize(devW, devH, ps) {
    this.pixelSize = ps;
    this.lowW = Math.ceil(devW / ps);
    this.lowH = Math.ceil(devH / ps);
    this.allocate(this.lowW, this.lowH);
    this.uniforms.uRes.value.set(this.lowW, this.lowH);
    this.uniforms.uPixel.value = ps;
  }

  render() {
    const r = this.renderer;
    const { scene, camera } = this;
    this.uniforms.uNear.value = camera.near;
    this.uniforms.uFar.value = camera.far;

    r.setClearColor(0xffffff, 1);
    r.setRenderTarget(this.beauty);
    r.render(scene, camera);

    const autoShadow = r.shadowMap.autoUpdate;
    r.shadowMap.autoUpdate = false;
    for (const o of this.hidden) {
      o.userData.__v = o.visible;
      o.visible = false;
    }
    scene.overrideMaterial = this.normalMat;
    r.setClearColor(0x8080ff, 1);
    r.setRenderTarget(this.normals);
    r.render(scene, camera);
    scene.overrideMaterial = null;
    for (const o of this.hidden) o.visible = o.userData.__v;
    r.shadowMap.autoUpdate = autoShadow;

    r.setRenderTarget(null);
    r.setClearColor(0xffffff, 1);
    r.render(this.quadScene, this.quadCam);
  }
}
