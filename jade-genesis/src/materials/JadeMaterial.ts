import * as THREE from 'three';
import { COLOR_GLSL, EMISSIVE_GLSL, JADE_PARS_GLSL, NORMAL_GLSL, ROUGHNESS_GLSL, TRANSMISSION_GLSL } from './jadeShader';

export interface JadeOptions {
  /** 0 = no rind anywhere, 1 = rind wherever the geometry's rim attribute says so. */
  rind?: number;
  /** 0 = polished, 1 = freshly ground surface. */
  rough?: number;
  /** Wet rind: darker and glossier. */
  wet?: number;
  /** Shift of the green field; higher = greener. */
  green?: number;
  roughness?: number;
  transmission?: number;
  /** World-space thickness used by the transmission model. */
  thickness?: number;
  attenuationDistance?: number;
  clearcoat?: number;
  edgeGlow?: number;
  /** Gentle surface undulation on exposed jade (hand-ground faces). */
  wave?: number;
  bump?: number;
  /** Circles drawn on a slab: [y, z, radius] in the stone frame. */
  marks?: [number, number, number][];
  /** Chalk cut lines: plane [nx, ny, nz, d] in the stone frame. */
  plans?: [number, number, number, number][];
}

export type JadeUniforms = {
  uRindAmt: THREE.IUniform<number>; uRough: THREE.IUniform<number>; uWet: THREE.IUniform<number>;
  uBump: THREE.IUniform<number>; uGreen: THREE.IUniform<number>; uEdgeGlow: THREE.IUniform<number>;
  uField: THREE.IUniform<THREE.Vector3>; uWave: THREE.IUniform<number>;
  uMarks: THREE.IUniform<THREE.Vector3[]>; uMarkN: THREE.IUniform<number>;
  uPlans: THREE.IUniform<THREE.Vector4[]>; uPlanN: THREE.IUniform<number>;
  uTorch: THREE.IUniform<THREE.Vector4>;
};

/** Jadeite RI ≈ 1.66–1.68 (GIA); 1.67 used for rendering. */
const JADEITE_IOR = 1.67;

export class JadeMaterial extends THREE.MeshPhysicalMaterial {
  readonly jade: JadeUniforms;
  /** Seed of the stone's interior pattern, shared by every piece cut from it. */
  static readonly field = new THREE.Vector3(0, 0, 0);

  constructor(o: JadeOptions = {}) {
    super({
      color: 0xffffff,
      roughness: o.roughness ?? 0.3,
      transmission: o.transmission ?? 0.42,
      thickness: o.thickness ?? 0.6,
      ior: JADEITE_IOR,
      attenuationColor: new THREE.Color(0x5b9e6a),
      attenuationDistance: o.attenuationDistance ?? 0.7,
      specularIntensity: 0.7,
      clearcoat: o.clearcoat ?? 0,
      clearcoatRoughness: 0.12,
    });
    const v3 = (a?: [number, number, number][]) => Array.from({ length: 4 }, (_, i) => (a?.[i] ? new THREE.Vector3(...a[i]) : new THREE.Vector3()));
    const v4 = (a?: [number, number, number, number][]) => Array.from({ length: 4 }, (_, i) => (a?.[i] ? new THREE.Vector4(...a[i]) : new THREE.Vector4()));
    this.jade = {
      uRindAmt: { value: o.rind ?? 1 }, uRough: { value: o.rough ?? 0 }, uWet: { value: o.wet ?? 0 },
      uBump: { value: o.bump ?? 0.035 }, uGreen: { value: o.green ?? 0.08 }, uEdgeGlow: { value: o.edgeGlow ?? 0.18 },
      uField: { value: JadeMaterial.field }, uWave: { value: o.wave ?? 0 },
      uMarks: { value: v3(o.marks) }, uMarkN: { value: o.marks?.length ?? 0 },
      uPlans: { value: v4(o.plans) }, uPlanN: { value: o.plans?.length ?? 0 },
      uTorch: { value: new THREE.Vector4() },
    };
  }

  override onBeforeCompile(shader: THREE.WebGLProgramParametersWithUniforms): void {
    Object.assign(shader.uniforms, this.jade);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 jpos; attribute float rim; varying vec3 vJ; varying float vRim;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvJ = jpos; vRim = rim;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + JADE_PARS_GLSL)
      .replace('#include <color_fragment>', COLOR_GLSL)
      .replace('#include <roughnessmap_fragment>', ROUGHNESS_GLSL)
      .replace('#include <normal_fragment_maps>', NORMAL_GLSL)
      .replace('#include <emissivemap_fragment>', EMISSIVE_GLSL)
      .replace('#include <lights_physical_fragment>', TRANSMISSION_GLSL);
  }

  override customProgramCacheKey(): string {
    return 'jade-v2';
  }
}
