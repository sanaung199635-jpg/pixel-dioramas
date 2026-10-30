// GLSL for the procedural jadeite. All patterns are functions of vJ, the
// stone-frame position, so every cut piece shows the same interior.

export const NOISE_GLSL = /* glsl */ `
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
// 1 when a noise of this frequency is well above pixel size, 0 when it would alias
// colour detail: fade once a period is < ~3 px
float aaFade(vec3 p, float freq){ return 1. - smoothstep(0.15, 0.4, length(fwidth(p*freq))); }
// derivative bump is constant per 2x2 quad, so it needs periods of > ~8 px
float bumpFade(vec3 p, float freq){ return 1. - smoothstep(0.08, 0.22, length(fwidth(p*freq))); }
float fbm(vec3 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=.5; } return s; }
`;

export const JADE_PARS_GLSL = /* glsl */ `
uniform float uRindAmt, uRough, uWet, uBump, uGreen, uEdgeGlow, uWave, uInner;
uniform vec3 uField;
uniform vec3 uMarks[4]; uniform int uMarkN; uniform float uMarkSweep;
uniform vec4 uPlans[4]; uniform int uPlanN; uniform vec4 uPlanSweep;
uniform vec3 uHoles[2]; uniform int uHoleN;
uniform vec3 uKerfs[4]; uniform int uKerfN;
uniform float uReveal;
// saw slot: plane x (stone frame), half width, depth (cut where y > depth), on/off
uniform vec4 uSlot;
uniform vec4 uWin; // window centre (xyz) and radius (w): grinding spreads outward from the centre
uniform vec4 uTorch;
varying vec3 vJ; varying float vRim;
// Named fissure plane in the stone frame. Mirrors FISSURE in StoneSolid.ts.
const vec3 FIS_N = normalize(vec3(0.3, 1.0, -0.15));
const float FIS_D = 0.585;
float gRind, gCotton, gCrack, gMark; vec3 gJade;
${NOISE_GLSL}
vec3 toLinear(vec3 c){ return pow(c, vec3(2.2)); }
vec3 jadeColor(vec3 p, out float cotton, out float crack){
  vec3 q = p*0.85 + uField;
  vec3 w = vec3(fbm(q+1.7), fbm(q+9.2), fbm(q+4.4));
  float g = fbm(vec3(q.x*0.55, q.y*1.25, q.z*1.1) + w*1.25);
  float green = smoothstep(0.08, 0.5, g + uGreen);
  float deep  = smoothstep(0.40, 0.78, g + uGreen + 0.10*snoise(p*5.5));
  // body colour: translucent grey-green, never chalk white
  vec3 base = mix(vec3(0.70,0.77,0.68), vec3(0.57,0.67,0.56), smoothstep(-0.3,0.3,fbm(q*2.1+7.)));
  vec3 c = mix(base, vec3(0.39,0.62,0.43), green*0.9);
  c = mix(c, vec3(0.13,0.44,0.25), deep*0.85);
  cotton = clamp(smoothstep(0.35,0.75, fbm(p*3.2+w*1.5+5.))*0.7 + smoothstep(0.55,0.85, snoise(p*11.+w*2.))*0.45, 0., 1.);
  c = mix(c, vec3(0.86,0.89,0.84), cotton*0.22);
  // interlocking crystal grain (an aggregate, not a glass): faint mottling
  c *= 0.965 + 0.05*snoise(p*95.)*aaFade(p,95.);
  float inc = smoothstep(0.86,0.93, snoise(p*34.+2.)) * aaFade(p,34.);
  c *= 1.0 - inc*0.55;
  float f = abs(snoise(p*vec3(0.9,1.4,1.1)+vec3(3.1,0.,1.)));
  crack = (1.0 - smoothstep(0.0, 0.018, f)) * smoothstep(0.05, 0.35, snoise(p*0.8+8.));
  float fw = dot(p, FIS_N) - FIS_D + 0.035*snoise(p*2.3) + 0.01*snoise(p*9.);
  crack = max(crack, (1.0 - smoothstep(0.0, 0.007, abs(fw))) * (1.0 - smoothstep(1.0, 1.4, length(p.xz))));
  c = mix(c, vec3(0.55,0.40,0.24), crack*0.75);
  return c;
}
vec3 skinColor(vec3 p){
  float a = fbm(p*2.2+11.);
  float b = snoise(p*6.5+3.);
  // weathered sandy rind: yellow-brown with greyer, more leached patches
  vec3 c = mix(vec3(0.69,0.56,0.39), vec3(0.52,0.41,0.29), smoothstep(-0.3,0.5,a));
  c = mix(c, vec3(0.70,0.66,0.57), smoothstep(0.45,0.85,b)*0.35);
  c = mix(c, vec3(0.30,0.27,0.22), smoothstep(0.62,0.85,snoise(p*4.2+20.))*0.5);
  // sand grains: dense fine speckle instead of large blotches
  c *= 0.92 + 0.09*snoise(p*55.)*aaFade(p,55.) + 0.12*snoise(p*170.)*aaFade(p,170.);
  return c;
}
vec3 bumpNormal(vec3 surfPos, vec3 surfNorm, float h){
  vec3 sx=dFdx(surfPos), sy=dFdy(surfPos);
  vec3 R1=cross(sy,surfNorm), R2=cross(surfNorm,sx);
  float det=dot(sx,R1);
  vec3 grad=sign(det)*(dFdx(h)*R1+dFdy(h)*R2);
  return normalize(abs(det)*surfNorm-grad);
}
`;

export const COLOR_GLSL = /* glsl */ `#include <color_fragment>
  for (int i=0;i<2;i++){ if(i>=uHoleN) break; if (length(vJ.yz-uHoles[i].xy) < uHoles[i].z) discard; }
  float cot, crk; vec3 jc = jadeColor(vJ, cot, crk);
  gCotton = cot; gCrack = crk;
  float reach = uReveal * uWin.w;
  float ground = 1. - smoothstep(reach - 0.06, reach, distance(vJ, uWin.xyz) + 0.04*snoise(vJ*9.));
  gRind = clamp(mix(1.0, vRim, ground)*uRindAmt, 0., 1.);
  vec3 col = mix(jc, skinColor(vJ) * mix(1.0, 0.62, uWet), gRind);
  col = mix(col, vec3(0.16,0.13,0.09), crk*gRind*0.8);
  gMark = 0.;
  // marker circles are drawn one after another as uMarkSweep goes 0 → 1
  for (int i=0;i<4;i++){ if(i>=uMarkN) break;
    vec2 d = vJ.yz-uMarks[i].xy;
    float a = (atan(d.y, d.x) + PI) / (2.*PI);
    float drawn = step(a, clamp(uMarkSweep*float(uMarkN) - float(i), 0., 1.));
    gMark = max(gMark, drawn*(1.-smoothstep(0.004,0.009, abs(length(d)-uMarks[i].z)))); }
  // chalk cut lines sweep around the stone's x axis
  float chalk = 0.;
  for (int i=0;i<4;i++){ if(i>=uPlanN) break;
    float a = (atan(vJ.z, vJ.y) + PI) / (2.*PI);
    float drawn = step(a, uPlanSweep[i]);
    chalk = max(chalk, drawn*(1.-smoothstep(0.01,0.018, abs(dot(vJ,uPlans[i].xyz)-uPlans[i].w)))); }
  // saw kerf left by a tube drill
  float kerf = 0.;
  for (int i=0;i<4;i++){ if(i>=uKerfN) break;
    kerf = max(kerf, 1.-smoothstep(0.003,0.007, abs(length(vJ.yz-uKerfs[i].xy)-uKerfs[i].z))); }
  col = mix(col, vec3(0.78,0.16,0.12), gMark);
  col = mix(col, vec3(0.97,0.96,0.92), chalk*0.92);
  col = mix(col, vec3(0.22,0.24,0.22), kerf*0.85);
  // saw slot in progress: a narrow, shadowed groove from the top down to the blade
  float slot = uSlot.w * (1.-smoothstep(uSlot.y*0.6, uSlot.y, abs(vJ.x - uSlot.x))) * smoothstep(uSlot.z - 0.01, uSlot.z, vJ.y);
  col = mix(col, vec3(0.07,0.075,0.07), slot);
  kerf = max(kerf, slot);
  gMark = max(max(gMark, chalk), kerf);
  gJade = toLinear(jc);
  diffuseColor.rgb = toLinear(col);`;

export const ROUGHNESS_GLSL = /* glsl */ `#include <roughnessmap_fragment>
  roughnessFactor = mix(roughnessFactor, mix(0.9, 0.32, uWet), gRind);
  roughnessFactor = mix(roughnessFactor, 0.78, uRough);
  roughnessFactor = mix(roughnessFactor, 0.85, gMark);`;

export const NORMAL_GLSL = /* glsl */ `#include <normal_fragment_maps>
  // rind relief: broad weathering hollows plus fine grain, no worm-like ridges
  float hb = gRind*(0.45*snoise(vJ*6.)*bumpFade(vJ,6.) + 0.22*snoise(vJ*18.)*bumpFade(vJ,18.) + 0.3*snoise(vJ*60.)*bumpFade(vJ,60.))
           + uRough*(0.35*snoise(vJ*vec3(60.,8.,60.))*bumpFade(vJ,60.) + 0.2*snoise(vJ*140.)*bumpFade(vJ,140.))
           + gCrack*0.25;
  // hand-ground faces are never optically flat: a gentle undulation keeps highlights local
  float wave = uWave*(1.-gRind)*0.07*snoise(vJ*1.7+3.);
  normal = bumpNormal(-vViewPosition, normal, hb*uBump + wave);`;

export const EMISSIVE_GLSL = /* glsl */ `#include <emissivemap_fragment>
  float td = distance(vJ, uTorch.xyz);
  totalEmissiveRadiance += uTorch.w * gJade * vec3(0.75,1.0,0.8) * exp(-td*td/0.09) * mix(1.0, 0.25, gRind);
  // edge translucency: thin grazing edges let scattered light through
  float edge = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0);
  totalEmissiveRadiance += uEdgeGlow * gJade * edge * (1.0 - gRind) * (1.0 - 0.5*gCotton);
  // body glow: light that entered elsewhere and scatters back out, tinted by the jade
  // (approximation, not a volumetric model); cotton and cracks block it
  totalEmissiveRadiance += uInner * gJade * gJade * (1.0 - gRind) * (1.0 - 0.6*gCotton) * (1.0 - gCrack);`;

export const TRANSMISSION_GLSL = /* glsl */ `#include <lights_physical_fragment>
  #ifdef USE_TRANSMISSION
  material.transmission *= (1.-gRind)*(1.-0.45*gCotton)*(1.-0.6*gCrack)*(1.-gMark)*(1.-0.6*uRough);
  #endif`;
