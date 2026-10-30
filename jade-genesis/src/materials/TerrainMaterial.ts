// Procedural ground for the mine diorama. Colour, roughness and relief are worked
// out per pixel from the object-space position, so strata and ground types have
// no vertex-sized steps and no repeating texture tiles. Ground types:
//   grass (flat top), topsoil band, rock strata (steep faces and the cut sides),
//   bench gravel (flat treads in the pit), haul road, wet mud by the pit pond.
// Baked vertex AO (aAo) darkens inner corners of the benches.
import * as THREE from 'three';
import { NOISE_GLSL } from './jadeShader';

export interface TerrainParams {
  /** Height of the grass surface (object space). */
  top: number;
  /** Pit pond centre (x, z) and radius, for the wet-mud ring. */
  pond: [number, number, number];
}

const PARS = /* glsl */ `
uniform float uTop; uniform vec3 uPond;
varying vec3 vLP; varying vec3 vLN; varying float vAo; varying float vRoad;
float tRock, tGrass, tRoad, tWet, tRough;
${NOISE_GLSL}
vec3 lin3(vec3 c){ return pow(c, vec3(2.2)); }
// Strata: bands by height, gently folded so they are not ruler-straight.
vec3 strata(vec3 p, out float seam){
  float fold = 0.07*snoise(vec3(p.x*0.45, 0., p.z*0.45)) + 0.02*snoise(p*vec3(2.,0.5,2.));
  float y = p.y + fold;
  // beds of uneven thickness
  float b = y*6.5 + 0.3*sin(y*9.1) + 0.1*sin(y*23.);
  float i = floor(b), f = fract(b);
  // five layers: pale sandstone, ochre, grey-green serpentinite, laterite red, buff
  vec3 L0 = vec3(0.79,0.72,0.60), L1 = vec3(0.71,0.59,0.45), L2 = vec3(0.53,0.55,0.49), L3 = vec3(0.65,0.51,0.41), L4 = vec3(0.75,0.67,0.55);
  float k = mod(i, 5.);
  vec3 a = k < 0.5 ? L0 : k < 1.5 ? L1 : k < 2.5 ? L2 : k < 3.5 ? L3 : L4;
  float k2 = mod(i + 1., 5.);
  vec3 b2 = k2 < 0.5 ? L0 : k2 < 1.5 ? L1 : k2 < 2.5 ? L2 : k2 < 3.5 ? L3 : L4;
  vec3 c = mix(a, b2, smoothstep(0.86, 1.0, f));
  // thin dark seams between some beds
  seam = (1. - smoothstep(0.0, 0.05, f)) * step(0.5, fract(i*0.37));
  return c;
}
vec3 tBump(vec3 p, vec3 n, float h){
  vec3 sx=dFdx(p), sy=dFdy(p);
  vec3 R1=cross(sy,n), R2=cross(n,sx);
  float det=dot(sx,R1);
  vec3 grad=sign(det)*(dFdx(h)*R1+dFdy(h)*R2);
  return normalize(abs(det)*n-grad);
}
`;

const COLOR = /* glsl */ `#include <color_fragment>
  vec3 P = vLP;
  float slope = 1. - clamp(vLN.y, 0., 1.);
  float seam;
  vec3 rock = strata(P, seam);
  float rn = snoise(P*vec3(9.,30.,9.));
  rock *= 0.9 + 0.12*rn*aaFade(P,30.);
  rock *= 1. - 0.35*seam;
  // grass: two greens and dry patches, never one flat colour
  float gp = snoise(P*1.6+3.), gq = snoise(P*7.+11.)*aaFade(P,7.);
  vec3 grass = mix(vec3(0.53,0.60,0.40), vec3(0.42,0.52,0.33), smoothstep(-0.4,0.5,gp));
  grass = mix(grass, vec3(0.66,0.64,0.47), smoothstep(0.35,0.8,gq)*0.5);
  grass *= 0.94 + 0.08*snoise(P*45.)*aaFade(P,45.);
  // bench gravel
  vec3 grav = mix(vec3(0.78,0.71,0.59), vec3(0.70,0.64,0.55), smoothstep(-0.3,0.4,snoise(P*3.+5.)));
  grav *= 0.9 + 0.14*snoise(P*70.)*aaFade(P,70.);
  // haul road: compacted, lighter, with faint tyre tracks along its length
  vec3 road = vec3(0.70,0.64,0.54) * (0.93 + 0.07*snoise(P*20.)*aaFade(P,20.));
  // ground type weights
  tRock = smoothstep(0.22, 0.42, slope);
  float onTop = smoothstep(uTop - 0.045, uTop - 0.02, P.y);
  tGrass = onTop * (1. - tRock);
  tRoad = vRoad * (1. - tRock);
  vec3 flatC = mix(grav, grass, onTop);
  vec3 col = mix(flatC, rock, tRock);
  // topsoil: dark band under the grass on every face
  float soil = smoothstep(uTop - 0.12, uTop - 0.07, P.y) * (1. - onTop) ;
  col = mix(col, vec3(0.42,0.33,0.25), soil*tRock*0.85);
  col = mix(col, road, tRoad*0.8);
  // wet mud around the pond
  float pd = length(P.xz - uPond.xy) / uPond.z;
  tWet = (1. - smoothstep(1.0, 1.45 + 0.15*snoise(P*4.), pd)) * (1. - tRock) * (1. - onTop);
  col = mix(col, col*0.62, tWet);
  diffuseColor.rgb = lin3(col);`;

const ROUGH = /* glsl */ `#include <roughnessmap_fragment>
  roughnessFactor = mix(mix(0.96, 0.88, tRock), 0.92, tRoad);
  roughnessFactor = mix(roughnessFactor, 0.42, tWet);`;

const NORMAL = /* glsl */ `#include <normal_fragment_maps>
  float hb = tRock*(0.5*snoise(P*vec3(7.,22.,7.))*bumpFade(P,22.) + 0.35*snoise(P*vec3(18.,55.,18.))*bumpFade(P,55.))
           + (1.-tRock)*(1.-tRoad)*0.4*snoise(P*60.)*bumpFade(P,60.)
           + tGrass*0.4*snoise(P*28.)*bumpFade(P,28.);
  normal = tBump(-vViewPosition, normal, hb*0.012);`;

const AO = /* glsl */ `#include <aomap_fragment>
  reflectedLight.indirectDiffuse *= vAo;
  reflectedLight.indirectSpecular *= vAo;
  reflectedLight.directDiffuse *= mix(1.0, vAo, 0.45);`;

export class TerrainMaterial extends THREE.MeshStandardMaterial {
  private readonly uniformsT: { uTop: THREE.IUniform<number>; uPond: THREE.IUniform<THREE.Vector3> };

  constructor(p: TerrainParams, side: THREE.Side = THREE.FrontSide) {
    super({ color: 0xffffff, roughness: 0.95, side });
    this.uniformsT = { uTop: { value: p.top }, uPond: { value: new THREE.Vector3(...p.pond) } };
  }

  override onBeforeCompile(s: THREE.WebGLProgramParametersWithUniforms): void {
    Object.assign(s.uniforms, this.uniformsT);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float aAo; attribute float aRoad; varying vec3 vLP; varying vec3 vLN; varying float vAo; varying float vRoad;')
      .replace('#include <beginnormal_vertex>', '#include <beginnormal_vertex>\nvLN = objectNormal;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position; vAo = aAo; vRoad = aRoad;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\n' + PARS)
      .replace('#include <color_fragment>', COLOR)
      .replace('#include <roughnessmap_fragment>', ROUGH)
      .replace('#include <normal_fragment_maps>', NORMAL)
      .replace('#include <aomap_fragment>', AO);
  }

  override customProgramCacheKey(): string {
    return 'terrain-v1';
  }
}
