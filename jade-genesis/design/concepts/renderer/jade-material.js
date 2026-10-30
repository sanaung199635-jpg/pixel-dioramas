// PHASE 1 CONCEPT TOOL — not production code.
// Procedural jadeite material. Colour, cotton, fissures and rind are all
// computed from `jpos`: the vertex position in the ORIGINAL rough-stone frame.
// Every piece cut from the stone (halves, slab, core, bangle) keeps jpos, so
// its interior pattern stays continuous with the stone it came from.
import * as THREE from 'three';

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.); const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy; i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857; vec3 ns=n_*D.wyz-D.xzx; vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.*x_); vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw); vec4 s0=floor(b0)*2.+1.; vec4 s1=floor(b1)*2.+1.; vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3))); p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.); m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=.5; } return s; }
`;

const JADE = /* glsl */ `
uniform float uRindAmt, uRough, uWet, uBump, uSeed, uGreen;
uniform vec3 uHoles[4]; uniform int uHoleN;
uniform vec3 uMarks[4]; uniform int uMarkN;
uniform vec4 uPlans[4]; uniform int uPlanN;
uniform vec4 uTorch;
// one named fissure plane (stone frame): dot(p, n) = d, wobbled; it exists on rind, cut faces and slab alike
const vec3 FIS_N = normalize(vec3(0.3, 1.0, -0.15)); const float FIS_D = 0.585;
varying vec3 vJ; varying float vRim;
float gRind, gCotton, gCrack, gMark; vec3 gJade;
${NOISE}
vec3 lin(vec3 c){ return pow(c, vec3(2.2)); }
vec3 jadeColor(vec3 p, out float cotton, out float crack){
  vec3 q = p*0.85 + vec3(uSeed);
  vec3 w = vec3(fbm(q+1.7), fbm(q+9.2), fbm(q+4.4));
  // vein field: warped, elongated roughly along the stone's long axis
  float g = fbm(vec3(q.x*0.55, q.y*1.25, q.z*1.1) + w*1.25);
  float green = smoothstep(0.08, 0.5, g + uGreen);
  float deep  = smoothstep(0.40, 0.78, g + uGreen + 0.10*snoise(p*5.5));
  vec3 base = mix(vec3(0.74,0.82,0.70), vec3(0.58,0.71,0.56), smoothstep(-0.3,0.3,fbm(q*2.1+7.)));
  vec3 c = mix(base, vec3(0.36,0.64,0.41), green*0.9);
  c = mix(c, vec3(0.10,0.46,0.23), deep*0.85);
  // cotton (棉絮): soft whitish clouds + fine flecks
  cotton = smoothstep(0.35,0.75, fbm(p*3.2+w*1.5+5.))*0.7 + smoothstep(0.55,0.85, snoise(p*11.+w*2.))*0.45;
  cotton = clamp(cotton,0.,1.);
  c = mix(c, vec3(0.90,0.93,0.88), cotton*0.28);
  // tiny dark mineral inclusions
  float inc = smoothstep(0.86,0.93, snoise(p*34.+2.));
  c *= 1.0 - inc*0.55;
  // healed / open fissures with iron staining
  float f = abs(snoise(p*vec3(0.9,1.4,1.1)+vec3(3.1,0.,1.)));
  crack = (1.0 - smoothstep(0.0, 0.018, f)) * smoothstep(0.05, 0.35, snoise(p*0.8+8.));
  float fw = dot(p, FIS_N) - FIS_D + 0.035*snoise(p*2.3) + 0.01*snoise(p*9.);
  float fis = (1.0 - smoothstep(0.0, 0.007, abs(fw))) * (1.0 - smoothstep(1.0, 1.4, length(p.xz)));
  crack = max(crack, fis);
  c = mix(c, vec3(0.55,0.40,0.24), crack*0.75);
  return c;
}
vec3 skinColor(vec3 p){
  float a = fbm(p*2.2+11.);
  float b = snoise(p*6.5+3.);
  vec3 c = mix(vec3(0.66,0.53,0.36), vec3(0.47,0.37,0.25), smoothstep(-0.25,0.45,a));
  c = mix(c, vec3(0.72,0.68,0.58), smoothstep(0.35,0.75,b)*0.55);
  c = mix(c, vec3(0.25,0.24,0.20), smoothstep(0.6,0.82,snoise(p*4.2+20.))*0.65);
  c *= 0.86 + 0.2*snoise(p*140.);
  return c;
}
vec3 bumpN(vec3 surf_pos, vec3 surf_norm, float h){
  vec3 sx=dFdx(surf_pos), sy=dFdy(surf_pos);
  vec3 R1=cross(sy,surf_norm), R2=cross(surf_norm,sx);
  float det=dot(sx,R1);
  vec3 grad=sign(det)*(dFdx(h)*R1+dFdy(h)*R2);
  return normalize(abs(det)*surf_norm-grad);
}
`;

export function addJadeAttributes(geo, { rim = 0, jpos = null } = {}) {
  const n = geo.attributes.position.count;
  if (!geo.attributes.jpos) geo.setAttribute('jpos', jpos || geo.attributes.position.clone());
  if (!geo.attributes.rim) geo.setAttribute('rim', new THREE.Float32BufferAttribute(new Float32Array(n).fill(rim), 1));
  return geo;
}

export function jadeMaterial(o = {}) {
  const m = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: o.roughness ?? 0.3,
    transmission: o.transmission ?? 0.42,
    thickness: o.thickness ?? 0.6,
    ior: 1.66, // jadeite RI ≈ 1.66 (GIA); to be re-verified in Phase 2
    attenuationColor: new THREE.Color(o.attColor ?? 0x5b9e6a),
    attenuationDistance: o.att ?? 0.7,
    specularIntensity: 0.7,
    clearcoat: o.clearcoat ?? 0,
    clearcoatRoughness: 0.12,
    envMapIntensity: o.env ?? 1,
    side: o.side ?? THREE.FrontSide,
  });
  const u = {
    uRindAmt: { value: o.rind ?? 1 }, uRough: { value: o.rough ?? 0 }, uWet: { value: o.wet ?? 0 },
    uBump: { value: o.bump ?? 0.035 }, uSeed: { value: o.seed ?? 0.0 }, uGreen: { value: o.green ?? 0.0 },
    uHoles: { value: pad(o.holes, 4) }, uHoleN: { value: (o.holes || []).length },
    uMarks: { value: pad(o.marks, 4) }, uMarkN: { value: (o.marks || []).length },
    uPlans: { value: pad4(o.plans, 4) }, uPlanN: { value: (o.plans || []).length },
    uTorch: { value: o.torch ? new THREE.Vector4(...o.torch) : new THREE.Vector4(0, 0, 0, 0) },
  };
  m.userData.u = u;
  m.onBeforeCompile = (s) => {
    Object.assign(s.uniforms, u);
    s.vertexShader = s.vertexShader
      .replace('#include <common>', '#include <common>\nattribute vec3 jpos; attribute float rim; varying vec3 vJ; varying float vRim;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvJ = jpos; vRim = rim;');
    s.fragmentShader = s.fragmentShader
      .replace('#include <common>', '#include <common>\n' + JADE)
      .replace('#include <color_fragment>', /* glsl */ `#include <color_fragment>
        for (int i=0;i<4;i++){ if(i>=uHoleN) break; if (length(vJ.yz-uHoles[i].xy) < uHoles[i].z) discard; }
        float cot, crk; vec3 jc = jadeColor(vJ, cot, crk);
        gCotton = cot; gCrack = crk;
        gRind = clamp(vRim*uRindAmt, 0., 1.);
        vec3 sk = skinColor(vJ) * mix(1.0, 0.62, uWet);
        vec3 col = mix(jc, sk, gRind);
        col = mix(col, vec3(0.16,0.13,0.09), crk*gRind*0.8);
        gMark = 0.;
        for (int i=0;i<4;i++){ if(i>=uMarkN) break;
          gMark = max(gMark, 1.-smoothstep(0.004,0.009, abs(length(vJ.yz-uMarks[i].xy)-uMarks[i].z))); }
        float chalk = 0.;
        for (int i=0;i<4;i++){ if(i>=uPlanN) break;
          chalk = max(chalk, 1.-smoothstep(0.01,0.018, abs(dot(vJ,uPlans[i].xyz)-uPlans[i].w))); }
        col = mix(col, vec3(0.78,0.16,0.12), gMark);
        col = mix(col, vec3(0.97,0.96,0.92), chalk*0.92);
        gMark = max(gMark, chalk);
        gJade = lin(jc);
        diffuseColor.rgb = lin(col);`)
      .replace('#include <roughnessmap_fragment>', /* glsl */ `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, mix(0.9, 0.32, uWet), gRind);
        roughnessFactor = mix(roughnessFactor, 0.78, uRough);
        roughnessFactor = mix(roughnessFactor, 0.85, gMark);`)
      .replace('#include <normal_fragment_maps>', /* glsl */ `#include <normal_fragment_maps>
        float hb = gRind*(0.55*snoise(vJ*13.)+0.3*snoise(vJ*37.)+0.15*snoise(vJ*95.))
                 + uRough*(0.35*snoise(vJ*vec3(60.,8.,60.)) + 0.2*snoise(vJ*140.))
                 + gCrack*0.25;
        normal = bumpN(-vViewPosition, normal, hb*uBump);`)
      .replace('#include <emissivemap_fragment>', /* glsl */ `#include <emissivemap_fragment>
        float td = distance(vJ, uTorch.xyz);
        totalEmissiveRadiance += uTorch.w * gJade * vec3(0.75,1.0,0.8) * exp(-td*td/0.09) * mix(1.0, 0.25, gRind);`)
      .replace('#include <lights_physical_fragment>', /* glsl */ `#include <lights_physical_fragment>
        #ifdef USE_TRANSMISSION
        material.transmission *= (1.-gRind)*(1.-0.45*gCotton)*(1.-0.6*gCrack)*(1.-gMark)*(1.-0.6*uRough);
        #endif`);
  };
  m.customProgramCacheKey = () => 'jade-v1';
  return m;
}

function pad(arr = [], n) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(arr[i] ? new THREE.Vector3(...arr[i]) : new THREE.Vector3());
  return out;
}
function pad4(arr = [], n) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(arr[i] ? new THREE.Vector4(...arr[i]) : new THREE.Vector4());
  return out;
}
