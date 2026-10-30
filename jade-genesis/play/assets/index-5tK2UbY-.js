(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uc="170",Rs={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ld=0,_l=1,Id=2,gu=1,_u=2,Kn=3,ii=0,Ge=1,sn=2,bi=0,Cs=1,vl=2,xl=3,yl=4,Dd=5,Hi=100,Ud=101,Nd=102,Fd=103,Od=104,Bd=200,zd=201,kd=202,Gd=203,Oa=204,Ba=205,Hd=206,Vd=207,Wd=208,Xd=209,qd=210,Yd=211,jd=212,$d=213,Zd=214,za=0,ka=1,Ga=2,Ds=3,Ha=4,Va=5,Wa=6,Xa=7,vu=0,Jd=1,Kd=2,wi=0,Qd=1,tf=2,ef=3,xu=4,nf=5,yu=6,Mu=7,Su=300,Us=301,Ns=302,qa=303,Ya=304,Ro=306,_o=1e3,Xi=1001,ja=1002,fn=1003,sf=1004,Rr=1005,Ln=1006,Bo=1007,xi=1008,si=1009,bu=1010,wu=1011,_r=1012,Nc=1013,$i=1014,Fn=1015,br=1016,Fc=1017,Oc=1018,Fs=1020,Eu=35902,Tu=1021,Au=1022,In=1023,Ru=1024,Cu=1025,Ps=1026,Os=1027,Bc=1028,zc=1029,Pu=1030,kc=1031,Gc=1033,co=33776,lo=33777,ho=33778,uo=33779,$a=35840,Za=35841,Ja=35842,Ka=35843,Qa=36196,tc=37492,ec=37496,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,cc=37814,lc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,fo=36492,gc=36494,_c=36495,Lu=36283,vc=36284,xc=36285,yc=36286,rf=3200,of=3201,Iu=0,af=1,vi="",nn="srgb",zs="srgb-linear",Co="linear",de="srgb",es=7680,Ml=519,cf=512,lf=513,hf=514,Du=515,uf=516,df=517,ff=518,pf=519,Mc=35044,Sl="300 es",Qn=2e3,vo=2001;class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bl=1234567;const dr=Math.PI/180,vr=180/Math.PI;function zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Hc(i,t){return(i%t+t)%t}function mf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function gf(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function _f(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function vf(i,t=1){return t-Math.abs(Hc(i,t*2)-t)}function xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Mf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Sf(i,t){return i+Math.random()*(t-i)}function bf(i){return i*(.5-Math.random())}function wf(i){i!==void 0&&(bl=i);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ef(i){return i*dr}function Tf(i){return i*vr}function Af(i){return(i&i-1)===0&&i!==0}function Rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Te={DEG2RAD:dr,RAD2DEG:vr,generateUUID:zn,clamp:Pe,euclideanModulo:Hc,mapLinear:mf,inverseLerp:gf,lerp:fr,damp:_f,pingpong:vf,smoothstep:xf,smootherstep:yf,randInt:Mf,randFloat:Sf,randFloatSpread:bf,seededRandom:wf,degToRad:Ef,radToDeg:Tf,isPowerOfTwo:Af,ceilPowerOfTwo:Rf,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:Pf,normalize:ue,denormalize:Cn};class Y{constructor(t=0,e=0){Y.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,r,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],v=s[7],R=s[2],T=s[5],E=s[8];return r[0]=o*_+a*y+c*R,r[3]=o*m+a*x+c*T,r[6]=o*p+a*v+c*E,r[1]=l*_+h*y+u*R,r[4]=l*m+h*x+u*T,r[7]=l*p+h*v+u*E,r[2]=d*_+f*y+g*R,r[5]=d*m+f*x+g*T,r[8]=d*p+f*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zo.makeScale(t,e)),this}rotate(t){return this.premultiply(zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zo=new Jt;function Uu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){const i=xo("canvas");return i.style.display="block",i}const wl={};function ar(i){i in wl||(wl[i]=!0,console.warn(i))}function If(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Df(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const El=[.64,.33,.3,.6,.15,.06],Tl=[.2126,.7152,.0722],Al=[.3127,.329],Rl=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[zs]:{primaries:El,whitePoint:Al,transfer:Co,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:Tl,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:El,whitePoint:Al,transfer:de,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:Tl,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let ns;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ns===void 0&&(ns=xo("canvas")),ns.width=t.width,ns.height=t.height;const n=ns.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ns}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class Nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ko(s[o].image)):r.push(ko(s[o]))}else r=ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Of=0;class Ye extends Ki{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Xi,s=Xi,r=Ln,o=xi,a=In,c=si,l=Ye.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=zn(),this.name="",this.source=new Nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Su;Ye.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,E=(u+_)/4,P=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=E/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=E/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fu extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zf extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const v=a*y;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new A,Pl=new rn;class ai{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Pr.subVectors(this.max,Ys),is.subVectors(t.a,Ys),ss.subVectors(t.b,Ys),rs.subVectors(t.c,Ys),hi.subVectors(ss,is),ui.subVectors(rs,ss),Pi.subVectors(is,rs);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Pi.z,Pi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Pi.z,0,-Pi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Pi.y,Pi.x,0];return!Ho(e,is,ss,rs,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,is,ss,rs,Pr))?!1:(Lr.crossVectors(hi,ui),e=[Lr.x,Lr.y,Lr.z],Ho(e,is,ss,rs,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new A,new A,new A,new A,new A,new A,new A,new A],bn=new A,Cr=new ai,is=new A,ss=new A,rs=new A,hi=new A,ui=new A,Pi=new A,Ys=new A,Pr=new A,Lr=new A,Li=new A;function Ho(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const kf=new ai,js=new A,Vo=new A;class ks{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Vo)),this.expandByPoint(js.copy(t.center).sub(Vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new A,Wo=new A,Ir=new A,di=new A,Xo=new A,Dr=new A,qo=new A;class Po{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wo.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Wo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=di.dot(this.direction),c=-di.dot(Ir),l=di.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Wo).addScaledVector(Ir,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){Xo.subVectors(e,t),Dr.subVectors(n,t),qo.crossVectors(Xo,Dr);let o=this.direction.dot(qo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);const c=a*this.direction.dot(Dr.crossVectors(di,Dr));if(c<0)return null;const l=a*this.direction.dot(Xo.cross(di));if(l<0||c+l>o)return null;const h=-a*di.dot(qo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Hf)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(n,cn),fi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(n,cn)),fi.normalize(),Ur.crossVectors(cn,fi),s[0]=fi.x,s[4]=Ur.x,s[8]=cn.x,s[1]=fi.y,s[5]=Ur.y,s[9]=cn.y,s[2]=fi.z,s[6]=Ur.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],v=n[11],R=n[15],T=s[0],E=s[4],P=s[8],b=s[12],M=s[1],L=s[5],z=s[9],D=s[13],O=s[2],k=s[6],B=s[10],X=s[14],W=s[3],st=s[7],ft=s[11],yt=s[15];return r[0]=o*T+a*M+c*O+l*W,r[4]=o*E+a*L+c*k+l*st,r[8]=o*P+a*z+c*B+l*ft,r[12]=o*b+a*D+c*X+l*yt,r[1]=h*T+u*M+d*O+f*W,r[5]=h*E+u*L+d*k+f*st,r[9]=h*P+u*z+d*B+f*ft,r[13]=h*b+u*D+d*X+f*yt,r[2]=g*T+_*M+m*O+p*W,r[6]=g*E+_*L+m*k+p*st,r[10]=g*P+_*z+m*B+p*ft,r[14]=g*b+_*D+m*X+p*yt,r[3]=y*T+x*M+v*O+R*W,r[7]=y*E+x*L+v*k+R*st,r[11]=y*P+x*z+v*B+R*ft,r[15]=y*b+x*D+v*X+R*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],y=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,x=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,T=e*y+n*x+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=x*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=v*E,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=R*E,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,x=c*h,v=c*u,R=n.x,T=n.y,E=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*E,s[9]=(m-y)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=os.set(s[0],s[1],s[2]).length();const o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],wn.copy(this);const l=1/r,h=1/o,u=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Qn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===Qn)g=(o+r)*u,_=-2*u;else if(a===vo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const os=new A,wn=new Ht,Gf=new A(0,0,0),Hf=new A(1,1,1),fi=new A,Ur=new A,cn=new A,Ll=new Ht,Il=new rn;class on{constructor(t=0,e=0,n=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ll.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ll,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vf=0;const Dl=new A,as=new rn,jn=new Ht,Nr=new A,$s=new A,Wf=new A,Xf=new rn,Ul=new A(1,0,0),Nl=new A(0,1,0),Fl=new A(0,0,1),Ol={type:"added"},qf={type:"removed"},cs={type:"childadded",child:null},Yo={type:"childremoved",child:null};class Ae extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new A,e=new on,n=new rn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Jt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Ul,t)}rotateY(t){return this.rotateOnAxis(Nl,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ul,t)}translateY(t){return this.translateOnAxis(Nl,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt($s,Nr,this.up):jn.lookAt(Nr,$s,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(jn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ol),cs.child=t,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qf),Yo.child=t,this.dispatchEvent(Yo),Yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ol),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new A(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new A,$n=new A,jo=new A,Zn=new A,ls=new A,hs=new A,Bl=new A,$o=new A,Zo=new A,Jo=new A,Ko=new ie,Qo=new ie,ta=new ie;class vn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),$n.subVectors(n,e),jo.subVectors(t,e);const o=En.dot(En),a=En.dot($n),c=En.dot(jo),l=$n.dot($n),h=$n.dot(jo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ko.setScalar(0),Qo.setScalar(0),ta.setScalar(0),Ko.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,n),ta.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ko,r.x),o.addScaledVector(Qo,r.y),o.addScaledVector(ta,r.z),o}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),$n.subVectors(t,e),En.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),hs.subVectors(r,n),$o.subVectors(t,n);const c=ls.dot($o),l=hs.dot($o);if(c<=0&&l<=0)return e.copy(n);Zo.subVectors(t,s);const h=ls.dot(Zo),u=hs.dot(Zo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ls,o);Jo.subVectors(t,r);const f=ls.dot(Jo),g=hs.dot(Jo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(hs,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Bl.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Bl,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ls,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function ea(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Hc(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ea(o,r,t+1/3),this.g=ea(o,r,t),this.b=ea(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return re.fromWorkingColorSpace(We.copy(this),t),Math.round(Pe(We.r*255,0,255))*65536+Math.round(Pe(We.g*255,0,255))*256+Math.round(Pe(We.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=nn){re.fromWorkingColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Fr);const n=fr(pi.h,Fr.h,e),s=fr(pi.s,Fr.s,e),r=fr(pi.l,Fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Lt;Lt.NAMES=Ou;let Yf=0;class Qi extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=zn(),this.name="",this.blending=Cs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ri extends Qi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new A,Or=new Y;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mc&&(t.usage=this.usage),t}}class Bu extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zu extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jf=0;const mn=new Ht,na=new Ae,us=new A,ln=new ai,Zs=new ai,Oe=new A;class ve extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uu(t)?zu:Bu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return na.lookAt(t),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(ln.min,Zs.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,Zs.max),ln.expandByPoint(Oe)):(ln.expandByPoint(Zs.min),ln.expandByPoint(Zs.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(us.fromBufferAttribute(t,l),Oe.add(us)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;const l=new A,h=new A,u=new A,d=new Y,f=new Y,g=new Y,_=new A,m=new A;function p(P,b,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[b].add(_),a[M].add(_),c[P].add(m),c[b].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){const M=y[P],L=M.start,z=M.count;for(let D=L,O=L+z;D<O;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new A,v=new A,R=new A,T=new A;function E(P){R.fromBufferAttribute(s,P),T.copy(R);const b=a[P];x.copy(b),x.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(T,b);const L=v.dot(c[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,b=y.length;P<b;++P){const M=y[P],L=M.start,z=M.count;for(let D=L,O=L+z;D<O;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zl=new Ht,Ii=new Po,Br=new ks,kl=new A,zr=new A,kr=new A,Gr=new A,ia=new A,Hr=new A,Gl=new A,Vr=new A;class Tt extends Ae{constructor(t=new ve,e=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ia.fromBufferAttribute(u,t),o?Hr.addScaledVector(ia,h):Hr.addScaledVector(ia.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Br.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Br,kl)===null||Ii.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(zl.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(zl),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=x;v<R;v+=3){const T=a.getX(v),E=a.getX(v+1),P=a.getX(v+2);s=Wr(this,p,t,n,l,h,u,T,E,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=Wr(this,o,t,n,l,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=x;v<R;v+=3){const T=v,E=v+1,P=v+2;s=Wr(this,p,t,n,l,h,u,T,E,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,v=m+2;s=Wr(this,o,t,n,l,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function $f(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ii,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zr),i.getVertexPosition(c,kr),i.getVertexPosition(l,Gr);const h=$f(i,t,e,n,zr,kr,Gr,Gl);if(h){const u=new A;vn.getBarycoord(Gl,zr,kr,Gr,u),s&&(h.uv=vn.getInterpolatedAttribute(s,a,c,l,u,new Y)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,c,l,u,new Y)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new A,materialIndex:0};vn.getNormal(zr,kr,Gr,d.normal),h.face=d,h.barycoord=u}return h}class xn extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(_,m,p,y,x,v,R,T,E,P,b){const M=v/E,L=R/P,z=v/2,D=R/2,O=T/2,k=E+1,B=P+1;let X=0,W=0;const st=new A;for(let ft=0;ft<B;ft++){const yt=ft*L-D;for(let qt=0;qt<k;qt++){const ae=qt*M-z;st[_]=ae*y,st[m]=yt*x,st[p]=O,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(qt/E),u.push(1-ft/P),X+=1}}for(let ft=0;ft<P;ft++)for(let yt=0;yt<E;yt++){const qt=d+yt+k*ft,ae=d+yt+k*(ft+1),Z=d+(yt+1)+k*(ft+1),rt=d+(yt+1)+k*ft;c.push(qt,ae,rt),c.push(ae,Z,rt),W+=6}a.addGroup(f,W,b),f+=W,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Bs(i[e]);for(const s in n)t[s]=n[s]}return t}function Zf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ku(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Jf={clone:Bs,merge:Je};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Qi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gu extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new A,Hl=new Y,Vl=new Y;class dn extends Gu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Vl),e.subVectors(Vl,Hl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ds=-90,fs=1;class tp extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(ds,fs,t,e);s.layers=this.layers,this.add(s);const r=new dn(ds,fs,t,e);r.layers=this.layers,this.add(r);const o=new dn(ds,fs,t,e);o.layers=this.layers,this.add(o);const a=new dn(ds,fs,t,e);a.layers=this.layers,this.add(a);const c=new dn(ds,fs,t,e);c.layers=this.layers,this.add(c);const l=new dn(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hu extends Ye{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ep extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xn(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:bi});r.uniforms.tEquirect.value=e;const o=new Tt(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Ln),new tp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const sa=new A,np=new A,ip=new Jt;class Un{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=sa.subVectors(n,e).cross(np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(sa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ip.getNormalMatrix(t),s=this.coplanarPoint(sa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new ks,Xr=new A;class Wc{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+y).normalize(),n[3].setComponents(c-o,d-h,m-g,v-y).normalize(),n[4].setComponents(c-a,d-u,m-_,v-x).normalize(),e===Qn)n[5].setComponents(c+a,d+u,m+_,v+x).normalize();else if(e===vo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ai extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const x=y+l*p,v=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;f.push(x,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.widthSegments,t.heightSegments)}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_p=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,am=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,b0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,C0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:rp,alphahash_pars_fragment:op,alphamap_fragment:ap,alphamap_pars_fragment:cp,alphatest_fragment:lp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:_p,iridescence_fragment:vp,bumpmap_pars_fragment:xp,clipping_planes_fragment:yp,clipping_planes_pars_fragment:Mp,clipping_planes_pars_vertex:Sp,clipping_planes_vertex:bp,color_fragment:wp,color_pars_fragment:Ep,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Lp,displacementmap_vertex:Ip,emissivemap_fragment:Dp,emissivemap_pars_fragment:Up,colorspace_fragment:Np,colorspace_pars_fragment:Fp,envmap_fragment:Op,envmap_common_pars_fragment:Bp,envmap_pars_fragment:zp,envmap_pars_vertex:kp,envmap_physical_pars_fragment:Jp,envmap_vertex:Gp,fog_vertex:Hp,fog_pars_vertex:Vp,fog_fragment:Wp,fog_pars_fragment:Xp,gradientmap_pars_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:$p,lights_pars_begin:Zp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:om,logdepthbuf_fragment:am,logdepthbuf_pars_fragment:cm,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:hm,map_fragment:um,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphinstance_vertex:_m,morphcolor_vertex:vm,morphnormal_vertex:xm,morphtarget_pars_vertex:ym,morphtarget_vertex:Mm,normal_fragment_begin:Sm,normal_fragment_maps:bm,normal_pars_fragment:wm,normal_pars_vertex:Em,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:Rm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Pm,iridescence_pars_fragment:Lm,opaque_fragment:Im,packing:Dm,premultiplied_alpha_fragment:Um,project_vertex:Nm,dithering_fragment:Fm,dithering_pars_fragment:Om,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:km,shadowmap_pars_vertex:Gm,shadowmap_vertex:Hm,shadowmask_pars_fragment:Vm,skinbase_vertex:Wm,skinning_pars_vertex:Xm,skinning_vertex:qm,skinnormal_vertex:Ym,specularmap_fragment:jm,specularmap_pars_fragment:$m,tonemapping_fragment:Zm,tonemapping_pars_fragment:Jm,transmission_fragment:Km,transmission_pars_fragment:Qm,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:c0,cube_frag:l0,depth_vert:h0,depth_frag:u0,distanceRGBA_vert:d0,distanceRGBA_frag:f0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:v0,meshbasic_frag:x0,meshlambert_vert:y0,meshlambert_frag:M0,meshmatcap_vert:S0,meshmatcap_frag:b0,meshnormal_vert:w0,meshnormal_frag:E0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:R0,meshphysical_frag:C0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:I0,points_frag:D0,shadow_vert:U0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},ht={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Nn={basic:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([ht.points,ht.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([ht.common,ht.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([ht.sprite,ht.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Je([ht.common,ht.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Je([ht.lights,ht.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Nn.physical={uniforms:Je([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const qr={r:0,b:0,g:0},Ui=new on,B0=new Ht;function z0(i,t,e,n,s,r,o){const a=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const v=g(y);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Ro)?(h===void 0&&(h=new Tt(new xn(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Bs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(x.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Ui)),h.material.toneMapped=re.getTransfer(v.colorSpace)!==de,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Tt(new Ai(2,2),new Ti({name:"BackgroundMaterial",uniforms:Bs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(qr,ku(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m}}function k0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,L,z,D,O){let k=!1;const B=u(D,z,L);r!==B&&(r=B,l(r.object)),k=f(M,D,z,O),k&&g(M,D,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(M,L,z,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,z){const D=z.wireframe===!0;let O=n[M.id];O===void 0&&(O={},n[M.id]=O);let k=O[L.id];k===void 0&&(k={},O[L.id]=k);let B=k[D];return B===void 0&&(B=d(c()),k[D]=B),B}function d(M){const L=[],z=[],D=[];for(let O=0;O<e;O++)L[O]=0,z[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,L,z,D){const O=r.attributes,k=L.attributes;let B=0;const X=z.getAttributes();for(const W in X)if(X[W].location>=0){const ft=O[W];let yt=k[W];if(yt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),ft===void 0||ft.attribute!==yt||yt&&ft.data!==yt.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function g(M,L,z,D){const O={},k=L.attributes;let B=0;const X=z.getAttributes();for(const W in X)if(X[W].location>=0){let ft=k[W];ft===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor));const yt={};yt.attribute=ft,ft&&ft.data&&(yt.data=ft.data),O[W]=yt,B++}r.attributes=O,r.attributesNum=B,r.index=D}function _(){const M=r.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const z=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;z[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),O[M]!==L&&(i.vertexAttribDivisor(M,L),O[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let z=0,D=L.length;z<D;z++)L[z]!==M[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function x(M,L,z,D,O,k,B){B===!0?i.vertexAttribIPointer(M,L,z,O,k):i.vertexAttribPointer(M,L,z,D,O,k)}function v(M,L,z,D){_();const O=D.attributes,k=z.getAttributes(),B=L.defaultAttributeValues;for(const X in k){const W=k[X];if(W.location>=0){let st=O[X];if(st===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ft=st.normalized,yt=st.itemSize,qt=t.get(st);if(qt===void 0)continue;const ae=qt.buffer,Z=qt.type,rt=qt.bytesPerElement,Et=Z===i.INT||Z===i.UNSIGNED_INT||st.gpuType===Nc;if(st.isInterleavedBufferAttribute){const ct=st.data,Nt=ct.stride,Vt=st.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt,ct.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let kt=0;kt<W.locationSize;kt++)x(W.location+kt,yt/W.locationSize,Z,ft,Nt*rt,(Vt+yt/W.locationSize*kt)*rt,Et)}else{if(st.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)p(W.location+ct,st.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ct=0;ct<W.locationSize;ct++)m(W.location+ct);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ct=0;ct<W.locationSize;ct++)x(W.location+ct,yt/W.locationSize,Z,ft,yt*rt,yt/W.locationSize*ct*rt,Et)}}else if(B!==void 0){const ft=B[X];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(W.location,ft);break;case 3:i.vertexAttrib3fv(W.location,ft);break;case 4:i.vertexAttrib4fv(W.location,ft);break;default:i.vertexAttrib1fv(W.location,ft)}}}}y()}function R(){P();for(const M in n){const L=n[M];for(const z in L){const D=L[z];for(const O in D)h(D[O].object),delete D[O];delete L[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const z in L){const D=L[z];for(const O in D)h(D[O].object),delete D[O];delete L[z]}delete n[M.id]}function E(M){for(const L in n){const z=n[L];if(z[M.id]===void 0)continue;const D=z[M.id];for(const O in D)h(D[O].object),delete D[O];delete z[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function G0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function H0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==In&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==si&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Fn&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function V0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Un,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let v=p.clippingState||null;c.value=v,v=h(g,d,x,f);for(let R=0;R!==x;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function W0(i){let t=new WeakMap;function e(o,a){return a===qa?o.mapping=Us:a===Ya&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qa||a===Ya)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ep(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Wu extends Gu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ts=4,Wl=[.125,.215,.35,.446,.526,.582],Vi=20,ra=new Wu,Xl=new Lt;let oa=null,aa=0,ca=0,la=!1;const zi=(1+Math.sqrt(5))/2,ps=1/zi,ql=[new A(-zi,ps,0),new A(zi,ps,0),new A(-ps,0,zi),new A(ps,0,zi),new A(0,zi,-ps),new A(0,zi,ps),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oa,aa,ca),this._renderer.xr.enabled=la,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oa=this._renderer.getRenderTarget(),aa=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:br,format:In,colorSpace:zs,depthBuffer:!1},s=Yl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(r)),this._blurMaterial=q0(r,t,e)}return s}_compileMaterial(t){const e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,ra)}_sceneToCubeUV(t,e,n,s){const a=new dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Xl),h.toneMapping=wi,h.autoClear=!1;const f=new ri({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new Tt(new xn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Xl),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Yr(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ra)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ql[(s-r-1)%ql.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let y=0;for(let E=0;E<Vi;++E){const P=E/_,b=Math.exp(-P*P/2);p.push(b),E===0?y+=b:E<m&&(y+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],R=3*v*(s>x-Ts?s-x+Ts:0),T=4*(this._cubeSize-v);Yr(e,R,T,3*v,2*v),c.setRenderTarget(e),c.render(u,ra)}}function X0(i){const t=[],e=[],n=[];let s=i;const r=i-Ts+1+Wl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ts?c=Wl[o-i+Ts-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,P=T>2?0:-1,b=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(b,_*g*T),x.set(d,m*g*T);const M=[T,T,T,T,T,T];v.set(M,p*g*T)}const R=new ve;R.setAttribute("position",new be(y,_)),R.setAttribute("uv",new be(x,m)),R.setAttribute("faceIndex",new be(v,p)),t.push(R),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yl(i,t,e){const n=new Zi(i,t,e);return n.texture.mapping=Ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function q0(i,t,e){const n=new Float32Array(Vi),s=new A(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function jl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $l(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===qa||c===Ya,h=c===Us||c===Ns;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Sc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Sc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function j0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function $0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,v=y.length;x<v;x+=3){const R=y[x+0],T=y[x+1],E=y[x+2];d.push(R,T,T,E,E,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const R=x+0,T=x+1,E=x+2;d.push(R,T,T,E,E,R)}}else return;const m=new(Uu(d)?zu:Bu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Z0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function J0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function K0(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*T*4*u),P=new Fu(E,R,T,u);P.type=Fn,P.needsUpdate=!0;const b=v*4;for(let L=0;L<u;L++){const z=p[L],D=y[L],O=x[L],k=R*T*4*L;for(let B=0;B<z.count;B++){const X=B*b;g===!0&&(s.fromBufferAttribute(z,B),E[k+X+0]=s.x,E[k+X+1]=s.y,E[k+X+2]=s.z,E[k+X+3]=0),_===!0&&(s.fromBufferAttribute(D,B),E[k+X+4]=s.x,E[k+X+5]=s.y,E[k+X+6]=s.z,E[k+X+7]=0),m===!0&&(s.fromBufferAttribute(O,B),E[k+X+8]=s.x,E[k+X+9]=s.y,E[k+X+10]=s.z,E[k+X+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Y(R,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Q0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Xu extends Ye{constructor(t,e,n,s,r,o,a,c,l,h=Ps){if(h!==Ps&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ps&&(n=$i),n===void 0&&h===Os&&(n=Fs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fn,this.minFilter=c!==void 0?c:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qu=new Ye,Zl=new Xu(1,1),Yu=new Fu,ju=new zf,$u=new Hu,Jl=[],Kl=[],Ql=new Float32Array(16),th=new Float32Array(9),eh=new Float32Array(4);function Gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jl[s];if(r===void 0&&(r=new Float32Array(s),Jl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lo(i,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;eh.set(n),i.uniformMatrix2fv(this.addr,!1,eh),Fe(e,n)}}function rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;th.set(n),i.uniformMatrix3fv(this.addr,!1,th),Fe(e,n)}}function og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),Fe(e,n)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zl.compareFunction=Du,r=Zl):r=qu,e.setTexture2D(t||r,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ju,s)}function _g(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$u,s)}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yu,s)}function xg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){const e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sg(i,t){const e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function bg(i,t){const e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function wg(i,t){const e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){const e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tg(i,t){const e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function Rg(i,t){i.uniform2iv(this.addr,t)}function Cg(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Lg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Dg(i,t){i.uniform3uiv(this.addr,t)}function Ug(i,t){i.uniform4uiv(this.addr,t)}function Ng(i,t,e){const n=this.cache,s=t.length,r=Lo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||qu,r[o])}function Fg(i,t,e){const n=this.cache,s=t.length,r=Lo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ju,r[o])}function Og(i,t,e){const n=this.cache,s=t.length,r=Lo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$u,r[o])}function Bg(i,t,e){const n=this.cache,s=t.length,r=Lo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yu,r[o])}function zg(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return bg;case 35674:return wg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Lg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xg(e.type)}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function nh(i,t){i.seq.push(t),i.map[t.id]=t}function Vg(i,t,e){const n=i.name,s=n.length;for(ha.lastIndex=0;;){const r=ha.exec(n),o=ha.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nh(e,l===void 0?new kg(a,i,t):new Gg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Hg(a),nh(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Vg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ih(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wg=37297;let Xg=0;function qg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sh=new Jt;function Yg(i){re._getMatrix(sh,re.workingColorSpace,i);const t=`mat3( ${sh.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Co:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function rh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qg(i.getShaderSource(t),o)}else return s}function jg(i,t){const e=Yg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $g(i,t){let e;switch(t){case Qd:e="Linear";break;case tf:e="Reinhard";break;case ef:e="Cineon";break;case xu:e="ACESFilmic";break;case yu:e="AgX";break;case Mu:e="Neutral";break;case nf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new A;function Zg(){re.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function Kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function oh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ah(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(i){return i.replace(t_,n_)}const e_=new Map;function n_(i,t){let e=Zt[t];if(e===void 0){const n=e_.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bc(e)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ch(i){return i.replace(i_,s_)}function s_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===_u?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function o_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Ro:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function c_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vu:t="ENVMAP_BLENDING_MULTIPLY";break;case Jd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function l_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=r_(e),l=o_(e),h=a_(e),u=c_(e),d=l_(e),f=Jg(e),g=Kg(r),_=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(m=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[lh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==wi?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=bc(o),o=oh(o,e),o=ah(o,e),a=bc(a),a=oh(a,e),a=ah(a,e),o=ch(o),a=ch(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+o,v=y+p+a,R=ih(s,s.VERTEX_SHADER,x),T=ih(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(R).trim(),O=s.getShaderInfoLog(T).trim();let k=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const X=rh(s,R,"vertex"),W=rh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+X+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||O==="")&&(B=!1);B&&(L.diagnostics={runnable:k,programLog:z,vertexShader:{log:D,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(R),s.deleteShader(T),P=new po(s,_),b=Qg(s,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Wg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let u_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new f_(t),e.set(t,n)),n}}class f_{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}}function p_(i,t,e,n,s,r,o){const a=new Vc,c=new d_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,L,z,D){const O=z.fog,k=D.geometry,B=b.isMeshStandardMaterial?z.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),W=X&&X.mapping===Ro?X.image.height:null,st=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,yt=ft!==void 0?ft.length:0;let qt=0;k.morphAttributes.position!==void 0&&(qt=1),k.morphAttributes.normal!==void 0&&(qt=2),k.morphAttributes.color!==void 0&&(qt=3);let ae,Z,rt,Et;if(st){const he=Nn[st];ae=he.vertexShader,Z=he.fragmentShader}else ae=b.vertexShader,Z=b.fragmentShader,c.update(b),rt=c.getVertexShaderID(b),Et=c.getFragmentShaderID(b);const ct=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,kt=D.isBatchedMesh===!0,se=!!b.map,K=!!b.matcap,it=!!X,I=!!b.aoMap,It=!!b.lightMap,tt=!!b.bumpMap,Mt=!!b.normalMap,lt=!!b.displacementMap,Bt=!!b.emissiveMap,_t=!!b.metalnessMap,C=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,j=b.dispersion>0,Q=b.iridescence>0,$=b.sheen>0,At=b.transmission>0,ut=S&&!!b.anisotropyMap,vt=G&&!!b.clearcoatMap,te=G&&!!b.clearcoatNormalMap,et=G&&!!b.clearcoatRoughnessMap,St=Q&&!!b.iridescenceMap,zt=Q&&!!b.iridescenceThicknessMap,Gt=$&&!!b.sheenColorMap,bt=$&&!!b.sheenRoughnessMap,ne=!!b.specularMap,Kt=!!b.specularColorMap,pe=!!b.specularIntensityMap,U=At&&!!b.transmissionMap,dt=At&&!!b.thicknessMap,q=!!b.gradientMap,J=!!b.alphaMap,gt=b.alphaTest>0,pt=!!b.alphaHash,jt=!!b.extensions;let we=wi;b.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(we=i.toneMapping);const He={shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:ae,fragmentShader:Z,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:Et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:kt,batchingColor:kt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:zs,alphaToCoverage:!!b.alphaToCoverage,map:se,matcap:K,envMap:it,envMapMode:it&&X.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:It,bumpMap:tt,normalMap:Mt,displacementMap:d&&lt,emissiveMap:Bt,normalMapObjectSpace:Mt&&b.normalMapType===af,normalMapTangentSpace:Mt&&b.normalMapType===Iu,metalnessMap:_t,roughnessMap:C,anisotropy:S,anisotropyMap:ut,clearcoat:G,clearcoatMap:vt,clearcoatNormalMap:te,clearcoatRoughnessMap:et,dispersion:j,iridescence:Q,iridescenceMap:St,iridescenceThicknessMap:zt,sheen:$,sheenColorMap:Gt,sheenRoughnessMap:bt,specularMap:ne,specularColorMap:Kt,specularIntensityMap:pe,transmission:At,transmissionMap:U,thicknessMap:dt,gradientMap:q,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:gt,alphaHash:pt,combine:b.combine,mapUv:se&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:It&&_(b.lightMap.channel),bumpMapUv:tt&&_(b.bumpMap.channel),normalMapUv:Mt&&_(b.normalMap.channel),displacementMapUv:lt&&_(b.displacementMap.channel),emissiveMapUv:Bt&&_(b.emissiveMap.channel),metalnessMapUv:_t&&_(b.metalnessMap.channel),roughnessMapUv:C&&_(b.roughnessMap.channel),anisotropyMapUv:ut&&_(b.anisotropyMap.channel),clearcoatMapUv:vt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(b.sheenRoughnessMap.channel),specularMapUv:ne&&_(b.specularMap.channel),specularColorMapUv:Kt&&_(b.specularColorMap.channel),specularIntensityMapUv:pe&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:dt&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Mt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(se||J),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:se&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:Bt&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Ge,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:jt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&b.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let L;if(M){const z=Nn[M];L=Jf.clone(z.uniforms)}else L=b.uniforms;return L}function R(b,M){let L;for(let z=0,D=h.length;z<D;z++){const O=h[z];if(O.cacheKey===M){L=O,++L.usedTimes;break}}return L===void 0&&(L=new h_(i,M,b,r),h.push(L)),L}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function E(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function m_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function g_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function uh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||g_),n.length>1&&n.sort(d||hh),s.length>1&&s.sort(d||hh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function __(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new uh,i.set(n,[o])):s>=r.length?(o=new uh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function v_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Lt};break;case"SpotLight":e={position:new A,direction:new A,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function x_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let y_=0;function M_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S_(i){const t=new v_,e=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const s=new A,r=new Ht,o=new Ht;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,x=0,v=0,R=0,T=0,E=0;l.sort(M_);for(let b=0,M=l.length;b<M;b++){const L=l[b],z=L.color,D=L.intensity,O=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*D,u+=z.g*D,d+=z.b*D;else if(L.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(L.sh.coefficients[B],D);E++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const X=L.shadow,W=e.get(L);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=L.shadow.matrix,y++}n.directional[f]=B,f++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(D),B.distance=O,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,n.spot[_]=B;const X=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,X.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[_]=X.matrix,L.castShadow){const W=e.get(L);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=k,v++}_++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(z).multiplyScalar(D),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=B,m++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const X=L.shadow,W=e.get(L);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=B,g++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(D),B.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=E,n.version=y_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function dh(i){const t=new S_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function b_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new dh(i),t.set(s,[a])):r>=o.length?(a=new dh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class w_ extends Qi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class E_ extends Qi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R_(i,t,e){let n=new Wc;const s=new Y,r=new Y,o=new ie,a=new w_({depthPacking:of}),c=new E_,l={},h=e.maxTextureSize,u={[ii]:Ge,[Ge]:ii,[sn]:sn},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gu;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const D=p!==Kn&&this.type===Kn,O=p===Kn&&this.type!==Kn;for(let k=0,B=T.length;k<B;k++){const X=T[k],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const st=W.getFrameExtents();if(s.multiply(st),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||D===!0||O===!0){const yt=this.type!==Kn?{minFilter:fn,magFilter:fn}:{};W.map!==null&&W.map.dispose(),W.map=new Zi(s.x,s.y,yt),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ft=W.getViewportCount();for(let yt=0;yt<ft;yt++){const qt=W.getViewport(yt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),z.viewport(o),W.updateMatrices(X,yt),n=W.getFrustum(),v(E,P,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Kn&&y(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,L)};function y(T,E){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,f,_,null)}function x(T,E,P,b){let M=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=M.uuid,D=E.uuid;let O=l[z];O===void 0&&(O={},l[z]=O);let k=O[D];k===void 0&&(k=M.clone(),O[D]=k,E.addEventListener("dispose",R)),M=k}if(M.visible=E.visible,M.wireframe=E.wireframe,b===Kn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=P}return M}function v(T,E,P,b,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const D=t.update(T),O=T.material;if(Array.isArray(O)){const k=D.groups;for(let B=0,X=k.length;B<X;B++){const W=k[B],st=O[W.materialIndex];if(st&&st.visible){const ft=x(T,st,b,M);T.onBeforeShadow(i,T,E,P,D,ft,W),i.renderBufferDirect(P,null,D,ft,T,W),T.onAfterShadow(i,T,E,P,D,ft,W)}}}else if(O.visible){const k=x(T,O,b,M);T.onBeforeShadow(i,T,E,P,D,k,null),i.renderBufferDirect(P,null,D,k,T,null),T.onAfterShadow(i,T,E,P,D,k,null)}}const z=T.children;for(let D=0,O=z.length;D<O;D++)v(z[D],E,P,b,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const b=l[P],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const C_={[za]:ka,[Ga]:Wa,[Ha]:Xa,[Ds]:Va,[ka]:za,[Wa]:Ga,[Xa]:Ha,[Va]:Ds};function P_(i,t){function e(){let U=!1;const dt=new ie;let q=null;const J=new ie(0,0,0,0);return{setMask:function(gt){q!==gt&&!U&&(i.colorMask(gt,gt,gt,gt),q=gt)},setLocked:function(gt){U=gt},setClear:function(gt,pt,jt,we,He){He===!0&&(gt*=we,pt*=we,jt*=we),dt.set(gt,pt,jt,we),J.equals(dt)===!1&&(i.clearColor(gt,pt,jt,we),J.copy(dt))},reset:function(){U=!1,q=null,J.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,q=null,J=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const jt=t.get("EXT_clip_control");dt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const we=gt;gt=null,this.setClear(we)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?ct(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(pt){q!==pt&&!U&&(i.depthMask(pt),q=pt)},setFunc:function(pt){if(dt&&(pt=C_[pt]),J!==pt){switch(pt){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Va:i.depthFunc(i.GEQUAL);break;case Wa:i.depthFunc(i.GREATER);break;case Xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=pt}},setLocked:function(pt){U=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){U=!1,q=null,J=null,gt=null,dt=!1}}}function s(){let U=!1,dt=null,q=null,J=null,gt=null,pt=null,jt=null,we=null,He=null;return{setTest:function(he){U||(he?ct(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(he){dt!==he&&!U&&(i.stencilMask(he),dt=he)},setFunc:function(he,Mn,Wn){(q!==he||J!==Mn||gt!==Wn)&&(i.stencilFunc(he,Mn,Wn),q=he,J=Mn,gt=Wn)},setOp:function(he,Mn,Wn){(pt!==he||jt!==Mn||we!==Wn)&&(i.stencilOp(he,Mn,Wn),pt=he,jt=Mn,we=Wn)},setLocked:function(he){U=he},setClear:function(he){He!==he&&(i.clearStencil(he),He=he)},reset:function(){U=!1,dt=null,q=null,J=null,gt=null,pt=null,jt=null,we=null,He=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,R=null,T=null,E=new Lt(0,0,0),P=0,b=!1,M=null,L=null,z=null,D=null,O=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=X>=2);let st=null,ft={};const yt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ae=new ie().fromArray(yt),Z=new ie().fromArray(qt);function rt(U,dt,q,J){const gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(U,pt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<q;jt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(dt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}const Et={};Et[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(Ds),tt(!1),Mt(_l),ct(i.CULL_FACE),I(bi);function ct(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Nt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Vt(U,dt){return u[U]!==dt?(i.bindFramebuffer(U,dt),u[U]=dt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function kt(U,dt){let q=f,J=!1;if(U){q=d.get(dt),q===void 0&&(q=[],d.set(dt,q));const gt=U.textures;if(q.length!==gt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,jt=gt.length;pt<jt;pt++)q[pt]=i.COLOR_ATTACHMENT0+pt;q.length=gt.length,J=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,J=!0);J&&i.drawBuffers(q)}function se(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const K={[Hi]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};K[Fd]=i.MIN,K[Od]=i.MAX;const it={[Bd]:i.ZERO,[zd]:i.ONE,[kd]:i.SRC_COLOR,[Oa]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Hd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Vd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[$d]:i.CONSTANT_ALPHA,[Zd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,dt,q,J,gt,pt,jt,we,He,he){if(U===bi){_===!0&&(Nt(i.BLEND),_=!1);return}if(_===!1&&(ct(i.BLEND),_=!0),U!==Dd){if(U!==m||he!==b){if((p!==Hi||v!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,v=Hi),he)switch(U){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,R=null,T=null,E.set(0,0,0),P=0,m=U,b=he}return}gt=gt||dt,pt=pt||q,jt=jt||J,(dt!==p||gt!==v)&&(i.blendEquationSeparate(K[dt],K[gt]),p=dt,v=gt),(q!==y||J!==x||pt!==R||jt!==T)&&(i.blendFuncSeparate(it[q],it[J],it[pt],it[jt]),y=q,x=J,R=pt,T=jt),(we.equals(E)===!1||He!==P)&&(i.blendColor(we.r,we.g,we.b,He),E.copy(we),P=He),m=U,b=!1}function It(U,dt){U.side===sn?Nt(i.CULL_FACE):ct(i.CULL_FACE);let q=U.side===Ge;dt&&(q=!q),tt(q),U.blending===Cs&&U.transparent===!1?I(bi):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function Mt(U){U!==Ld?(ct(i.CULL_FACE),U!==L&&(U===_l?i.cullFace(i.BACK):U===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),L=U}function lt(U){U!==z&&(B&&i.lineWidth(U),z=U)}function Bt(U,dt,q){U?(ct(i.POLYGON_OFFSET_FILL),(D!==dt||O!==q)&&(i.polygonOffset(dt,q),D=dt,O=q)):Nt(i.POLYGON_OFFSET_FILL)}function _t(U){U?ct(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function C(U){U===void 0&&(U=i.TEXTURE0+k-1),st!==U&&(i.activeTexture(U),st=U)}function S(U,dt,q){q===void 0&&(st===null?q=i.TEXTURE0+k-1:q=st);let J=ft[q];J===void 0&&(J={type:void 0,texture:void 0},ft[q]=J),(J.type!==U||J.texture!==dt)&&(st!==q&&(i.activeTexture(q),st=q),i.bindTexture(U,dt||Et[U]),J.type=U,J.texture=dt)}function G(){const U=ft[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(U){ae.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function bt(U){Z.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Z.copy(U))}function ne(U,dt){let q=l.get(dt);q===void 0&&(q=new WeakMap,l.set(dt,q));let J=q.get(U);J===void 0&&(J=i.getUniformBlockIndex(dt,U.name),q.set(U,J))}function Kt(U,dt){const J=l.get(dt).get(U);c.get(dt)!==J&&(i.uniformBlockBinding(dt,J,U.__bindingPointIndex),c.set(dt,J))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ft={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,x=null,v=null,R=null,T=null,E=new Lt(0,0,0),P=0,b=!1,M=null,L=null,z=null,D=null,O=null,ae.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Nt,bindFramebuffer:Vt,drawBuffers:kt,useProgram:se,setBlending:I,setMaterial:It,setFlipSided:tt,setCullFace:Mt,setLineWidth:lt,setPolygonOffset:Bt,setScissorTest:_t,activeTexture:C,bindTexture:S,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:St,texImage3D:zt,updateUBOMapping:ne,uniformBlockBinding:Kt,texStorage2D:te,texStorage3D:et,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ut,compressedTexSubImage3D:vt,scissor:Gt,viewport:bt,reset:pe}}function fh(i,t,e,n){const s=L_(n);switch(e){case Tu:return i*t;case Ru:return i*t;case Cu:return i*t*2;case Bc:return i*t/s.components*s.byteLength;case zc:return i*t/s.components*s.byteLength;case Pu:return i*t*2/s.components*s.byteLength;case kc:return i*t*2/s.components*s.byteLength;case Au:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Gc:return i*t*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Za:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case $a:case Ja:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case gc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lu:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L_(i){switch(i){case si:case bu:return{byteLength:1,components:1};case _r:case wu:case br:return{byteLength:2,components:1};case Fc:case Oc:return{byteLength:2,components:4};case $i:case Nc:case Fn:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function I_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Y,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return f?new OffscreenCanvas(C,S):xo("canvas")}function _(C,S,G){let j=1;const Q=_t(C);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(j*Q.width),At=Math.floor(j*Q.height);u===void 0&&(u=g($,At));const ut=S?g($,At):u;return ut.width=$,ut.height=At,ut.getContext("2d").drawImage(C,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+At+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(C,S,G,j,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=S;if(S===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),S===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),S===i.RGBA){const At=Q?Co:re.getTransfer(j);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=At===de?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(C,S){let G;return C?S===null||S===$i||S===Fs?G=i.DEPTH24_STENCIL8:S===Fn?G=i.DEPTH32F_STENCIL8:S===_r&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===Fs?G=i.DEPTH_COMPONENT24:S===Fn?G=i.DEPTH_COMPONENT32F:S===_r&&(G=i.DEPTH_COMPONENT16),G}function R(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==fn&&C.minFilter!==Ln?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),M(S)}function P(C){const S=n.get(C);if(S.__webglInit===void 0)return;const G=C.source,j=d.get(G);if(j){const Q=j[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(C),Object.keys(j).length===0&&d.delete(G)}n.remove(C)}function b(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const G=C.source,j=d.get(G);delete j[S.__cacheKey],o.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Q=0;Q<S.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=C.textures;for(let j=0,Q=G.length;j<Q;j++){const $=n.get(G[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(C)}let L=0;function z(){L=0}function D(){const C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function O(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function k(C,S){const G=n.get(C);if(C.isVideoTexture&&lt(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,C,S);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function B(C,S){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function X(C,S){const G=n.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,S);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function W(C,S){const G=n.get(C);if(C.version>0&&G.__version!==C.version){rt(G,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const st={[_o]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},ft={[fn]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},yt={[cf]:i.NEVER,[pf]:i.ALWAYS,[lf]:i.LESS,[Du]:i.LEQUAL,[hf]:i.EQUAL,[ff]:i.GEQUAL,[uf]:i.GREATER,[df]:i.NOTEQUAL};function qt(C,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ln||S.magFilter===Bo||S.magFilter===Rr||S.magFilter===xi||S.minFilter===Ln||S.minFilter===Bo||S.minFilter===Rr||S.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,st[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ft[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===fn||S.minFilter!==Rr&&S.minFilter!==xi||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ae(C,S){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let Q=d.get(j);Q===void 0&&(Q={},d.set(j,Q));const $=O(S);if($!==C.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;const At=Q[C.__cacheKey];At!==void 0&&(Q[C.__cacheKey].usedTimes--,At.usedTimes===0&&b(S)),C.__cacheKey=$,C.__webglTexture=Q[$].texture}return G}function Z(C,S,G){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const Q=ae(C,S),$=S.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+G);const At=n.get($);if($.version!==At.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);const ut=re.getPrimaries(re.workingColorSpace),vt=S.colorSpace===vi?null:re.getPrimaries(S.colorSpace),te=S.colorSpace===vi||ut===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let et=_(S.image,!1,s.maxTextureSize);et=Bt(S,et);const St=r.convert(S.format,S.colorSpace),zt=r.convert(S.type);let Gt=x(S.internalFormat,St,zt,S.colorSpace,S.isVideoTexture);qt(j,S);let bt;const ne=S.mipmaps,Kt=S.isVideoTexture!==!0,pe=At.__version===void 0||Q===!0,U=$.dataReady,dt=R(S,et);if(S.isDepthTexture)Gt=v(S.format===Os,S.type),pe&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Gt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Gt,et.width,et.height,0,St,zt,null));else if(S.isDataTexture)if(ne.length>0){Kt&&pe&&e.texStorage2D(i.TEXTURE_2D,dt,Gt,ne[0].width,ne[0].height);for(let q=0,J=ne.length;q<J;q++)bt=ne[q],Kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,St,zt,bt.data):e.texImage2D(i.TEXTURE_2D,q,Gt,bt.width,bt.height,0,St,zt,bt.data);S.generateMipmaps=!1}else Kt?(pe&&e.texStorage2D(i.TEXTURE_2D,dt,Gt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,St,zt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,et.width,et.height,0,St,zt,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Kt&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Gt,ne[0].width,ne[0].height,et.depth);for(let q=0,J=ne.length;q<J;q++)if(bt=ne[q],S.format!==In)if(St!==null)if(Kt){if(U)if(S.layerUpdates.size>0){const gt=fh(bt.width,bt.height,S.format,S.type);for(const pt of S.layerUpdates){const jt=bt.data.subarray(pt*gt/bt.data.BYTES_PER_ELEMENT,(pt+1)*gt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,pt,bt.width,bt.height,1,St,jt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,et.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Gt,bt.width,bt.height,et.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,bt.width,bt.height,et.depth,St,zt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Gt,bt.width,bt.height,et.depth,0,St,zt,bt.data)}else{Kt&&pe&&e.texStorage2D(i.TEXTURE_2D,dt,Gt,ne[0].width,ne[0].height);for(let q=0,J=ne.length;q<J;q++)bt=ne[q],S.format!==In?St!==null?Kt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Gt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,bt.width,bt.height,St,zt,bt.data):e.texImage2D(i.TEXTURE_2D,q,Gt,bt.width,bt.height,0,St,zt,bt.data)}else if(S.isDataArrayTexture)if(Kt){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Gt,et.width,et.height,et.depth),U)if(S.layerUpdates.size>0){const q=fh(et.width,et.height,S.format,S.type);for(const J of S.layerUpdates){const gt=et.data.subarray(J*q/et.data.BYTES_PER_ELEMENT,(J+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,St,zt,gt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,St,zt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,et.width,et.height,et.depth,0,St,zt,et.data);else if(S.isData3DTexture)Kt?(pe&&e.texStorage3D(i.TEXTURE_3D,dt,Gt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,St,zt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,et.width,et.height,et.depth,0,St,zt,et.data);else if(S.isFramebufferTexture){if(pe)if(Kt)e.texStorage2D(i.TEXTURE_2D,dt,Gt,et.width,et.height);else{let q=et.width,J=et.height;for(let gt=0;gt<dt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Gt,q,J,0,St,zt,null),q>>=1,J>>=1}}else if(ne.length>0){if(Kt&&pe){const q=_t(ne[0]);e.texStorage2D(i.TEXTURE_2D,dt,Gt,q.width,q.height)}for(let q=0,J=ne.length;q<J;q++)bt=ne[q],Kt?U&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,St,zt,bt):e.texImage2D(i.TEXTURE_2D,q,Gt,St,zt,bt);S.generateMipmaps=!1}else if(Kt){if(pe){const q=_t(et);e.texStorage2D(i.TEXTURE_2D,dt,Gt,q.width,q.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,zt,et)}else e.texImage2D(i.TEXTURE_2D,0,Gt,St,zt,et);m(S)&&p(j),At.__version=$.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function rt(C,S,G){if(S.image.length!==6)return;const j=ae(C,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);const $=n.get(Q);if(Q.version!==$.__version||j===!0){e.activeTexture(i.TEXTURE0+G);const At=re.getPrimaries(re.workingColorSpace),ut=S.colorSpace===vi?null:re.getPrimaries(S.colorSpace),vt=S.colorSpace===vi||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const te=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,St=[];for(let J=0;J<6;J++)!te&&!et?St[J]=_(S.image[J],!0,s.maxCubemapSize):St[J]=et?S.image[J].image:S.image[J],St[J]=Bt(S,St[J]);const zt=St[0],Gt=r.convert(S.format,S.colorSpace),bt=r.convert(S.type),ne=x(S.internalFormat,Gt,bt,S.colorSpace),Kt=S.isVideoTexture!==!0,pe=$.__version===void 0||j===!0,U=Q.dataReady;let dt=R(S,zt);qt(i.TEXTURE_CUBE_MAP,S);let q;if(te){Kt&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ne,zt.width,zt.height);for(let J=0;J<6;J++){q=St[J].mipmaps;for(let gt=0;gt<q.length;gt++){const pt=q[gt];S.format!==In?Gt!==null?Kt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,pt.width,pt.height,Gt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,ne,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,0,0,pt.width,pt.height,Gt,bt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt,ne,pt.width,pt.height,0,Gt,bt,pt.data)}}}else{if(q=S.mipmaps,Kt&&pe){q.length>0&&dt++;const J=_t(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,ne,J.width,J.height)}for(let J=0;J<6;J++)if(et){Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,St[J].width,St[J].height,Gt,bt,St[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,St[J].width,St[J].height,0,Gt,bt,St[J].data);for(let gt=0;gt<q.length;gt++){const jt=q[gt].image[J].image;Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,jt.width,jt.height,Gt,bt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,ne,jt.width,jt.height,0,Gt,bt,jt.data)}}else{Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Gt,bt,St[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,Gt,bt,St[J]);for(let gt=0;gt<q.length;gt++){const pt=q[gt];Kt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,0,0,Gt,bt,pt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,gt+1,ne,Gt,bt,pt.image[J])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Et(C,S,G,j,Q,$){const At=r.convert(G.format,G.colorSpace),ut=r.convert(G.type),vt=x(G.internalFormat,At,ut,G.colorSpace),te=n.get(S),et=n.get(G);if(et.__renderTarget=S,!te.__hasExternalTextures){const St=Math.max(1,S.width>>$),zt=Math.max(1,S.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,vt,St,zt,S.depth,0,At,ut,null):e.texImage2D(Q,$,vt,St,zt,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,et.__webglTexture,0,tt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,et.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const j=S.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=v(S.stencilBuffer,Q),At=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=tt(S);Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,$,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,C)}else{const j=S.textures;for(let Q=0;Q<j.length;Q++){const $=j[Q],At=r.convert($.format,$.colorSpace),ut=r.convert($.type),vt=x($.internalFormat,At,ut,$.colorSpace),te=tt(S);G&&Mt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,vt,S.width,S.height):Mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,vt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,vt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),k(S.depthTexture,0);const Q=j.__webglTexture,$=tt(S);if(S.depthTexture.format===Ps)Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Os)Mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const S=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Nt(S.__webglFramebuffer,C)}else if(G){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),ct(S.__webglDepthbuffer[j],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ct(S.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(C,S,G){const j=n.get(C);S!==void 0&&Et(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Vt(C)}function se(C){const S=C.texture,G=n.get(C),j=n.get(S);C.addEventListener("dispose",E);const Q=C.textures,$=C.isWebGLCubeRenderTarget===!0,At=Q.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ut]=[];for(let vt=0;vt<S.mipmaps.length;vt++)G.__webglFramebuffer[ut][vt]=i.createFramebuffer()}else G.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ut=0;ut<S.mipmaps.length;ut++)G.__webglFramebuffer[ut]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let ut=0,vt=Q.length;ut<vt;ut++){const te=n.get(Q[ut]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Mt(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ut=0;ut<Q.length;ut++){const vt=Q[ut];G.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ut]);const te=r.convert(vt.format,vt.colorSpace),et=r.convert(vt.type),St=x(vt.internalFormat,te,et,vt.colorSpace,C.isXRRenderTarget===!0),zt=tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,G.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),qt(i.TEXTURE_CUBE_MAP,S);for(let ut=0;ut<6;ut++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Et(G.__webglFramebuffer[ut][vt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else Et(G.__webglFramebuffer[ut],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ut=0,vt=Q.length;ut<vt;ut++){const te=Q[ut],et=n.get(te);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),qt(i.TEXTURE_2D,te),Et(G.__webglFramebuffer,C,te,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,0),m(te)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,j.__webglTexture),qt(ut,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)Et(G.__webglFramebuffer[vt],C,S,i.COLOR_ATTACHMENT0,ut,vt);else Et(G.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ut,0);m(S)&&p(ut),e.unbindTexture()}C.depthBuffer&&Vt(C)}function K(C){const S=C.textures;for(let G=0,j=S.length;G<j;G++){const Q=S[G];if(m(Q)){const $=y(C),At=n.get(Q).__webglTexture;e.bindTexture($,At),p($),e.unbindTexture()}}}const it=[],I=[];function It(C){if(C.samples>0){if(Mt(C)===!1){const S=C.textures,G=C.width,j=C.height;let Q=i.COLOR_BUFFER_BIT;const $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(C),ut=S.length>1;if(ut)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);const te=n.get(S[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,Q,i.NEAREST),c===!0&&(it.length=0,I.length=0,it.push(i.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push($),I.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,At.__webglColorRenderbuffer[vt]);const te=n.get(S[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function tt(C){return Math.min(s.maxSamples,C.samples)}function Mt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Bt(C,S){const G=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==zs&&G!==vi&&(re.getTransfer(G)===de?(j!==In||Q!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function _t(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Mt}function D_(i,t){function e(n,s=vi){let r;const o=re.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===Fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.BYTE;if(n===wu)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Nc)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Au)return i.RGB;if(n===In)return i.RGBA;if(n===Ru)return i.LUMINANCE;if(n===Cu)return i.LUMINANCE_ALPHA;if(n===Ps)return i.DEPTH_COMPONENT;if(n===Os)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===Pu)return i.RG;if(n===kc)return i.RG_INTEGER;if(n===Gc)return i.RGBA_INTEGER;if(n===co||n===lo||n===ho||n===uo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Za||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===tc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===gc||n===_c)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===vc||n===xc||n===yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class U_ extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Qt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ti({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Ki{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new B_,m=e.getContextAttributes();let p=null,y=null;const x=[],v=[],R=new Y;let T=null;const E=new dn;E.viewport=new ie;const P=new dn;P.viewport=new ie;const b=[E,P],M=new U_;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=x[Z];return rt===void 0&&(rt=new ua,x[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=x[Z];return rt===void 0&&(rt=new ua,x[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=x[Z];return rt===void 0&&(rt=new ua,x[Z]=rt),rt.getHandSpace()};function D(Z){const rt=v.indexOf(Z.inputSource);if(rt===-1)return;const Et=x[rt];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let Z=0;Z<x.length;Z++){const rt=v[Z];rt!==null&&(v[Z]=null,x[Z].disconnect(rt))}L=null,z=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zi(f.framebufferWidth,f.framebufferHeight,{format:In,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Et=null,ct=null;m.depth&&(ct=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Os:Ps,Et=m.stencil?Fs:$i);const Nt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Zi(d.textureWidth,d.textureHeight,{format:In,type:si,depthTexture:new Xu(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(Z){for(let rt=0;rt<Z.removed.length;rt++){const Et=Z.removed[rt],ct=v.indexOf(Et);ct>=0&&(v[ct]=null,x[ct].disconnect(Et))}for(let rt=0;rt<Z.added.length;rt++){const Et=Z.added[rt];let ct=v.indexOf(Et);if(ct===-1){for(let Vt=0;Vt<x.length;Vt++)if(Vt>=v.length){v.push(Et),ct=Vt;break}else if(v[Vt]===null){v[Vt]=Et,ct=Vt;break}if(ct===-1)break}const Nt=x[ct];Nt&&Nt.connect(Et)}}const B=new A,X=new A;function W(Z,rt,Et){B.setFromMatrixPosition(rt.matrixWorld),X.setFromMatrixPosition(Et.matrixWorld);const ct=B.distanceTo(X),Nt=rt.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,kt=Nt[14]/(Nt[10]-1),se=Nt[14]/(Nt[10]+1),K=(Nt[9]+1)/Nt[5],it=(Nt[9]-1)/Nt[5],I=(Nt[8]-1)/Nt[0],It=(Vt[8]+1)/Vt[0],tt=kt*I,Mt=kt*It,lt=ct/(-I+It),Bt=lt*-I;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Bt),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const _t=kt+lt,C=se+lt,S=tt-Bt,G=Mt+(ct-Bt),j=K*se/C*_t,Q=it*se/C*_t;Z.projectionMatrix.makePerspective(S,G,j,Q,_t,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,Et=Z.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),M.near=P.near=E.near=rt,M.far=P.far=E.far=Et,(L!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far),E.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=E.layers.mask|P.layers.mask;const ct=Z.parent,Nt=M.cameras;st(M,ct);for(let Vt=0;Vt<Nt.length;Vt++)st(Nt[Vt],ct);Nt.length===2?W(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),ft(Z,M,ct)};function ft(Z,rt,Et){Et===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function qt(Z,rt){if(h=rt.getViewerPose(l||o),g=rt,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let ct=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,ct=!0);for(let Vt=0;Vt<Et.length;Vt++){const kt=Et[Vt];let se=null;if(f!==null)se=f.getViewport(kt);else{const it=u.getViewSubImage(d,kt);se=it.viewport,Vt===0&&(t.setRenderTargetTextures(y,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(y))}let K=b[Vt];K===void 0&&(K=new dn,K.layers.enable(Vt),K.viewport=new ie,b[Vt]=K),K.matrix.fromArray(kt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(kt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(se.x,se.y,se.width,se.height),Vt===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ct===!0&&M.cameras.push(K)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Vt=u.getDepthInformation(Et[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const ct=v[Et],Nt=x[Et];ct!==null&&Nt!==void 0&&Nt.update(ct,rt,l||o)}yt&&yt(Z,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const ae=new Vu;ae.setAnimationLoop(qt),this.setAnimationLoop=function(Z){yt=Z},this.dispose=function(){}}}const Ni=new on,k_=new Ht;function G_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ku(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,Ni.copy(v),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(Ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const x=u();y.__bindingPointIndex=x;const v=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=s[y.id],v=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=v.length;T<E;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,M=P.length;b<M;b++){const L=P[b];if(f(L,T,b,R)===!0){const z=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let k=0;k<D.length;k++){const B=D[k],X=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+O,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,v,R){const T=y.value,E=x+"_"+v;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const x=y.uniforms;let v=0;const R=16;for(let E=0,P=x.length;E<P;E++){const b=Array.isArray(x[E])?x[E]:[x[E]];for(let M=0,L=b.length;M<L;M++){const z=b[M],D=Array.isArray(z.value)?z.value:[z.value];for(let O=0,k=D.length;O<k;O++){const B=D[O],X=_(B),W=v%R,st=W%X.boundary,ft=W+st;v+=st,ft!==0&&R-ft<X.storage&&(v+=R-ft),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=X.storage}}}const T=v%R;return T>0&&(v+=R-T),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class V_{constructor(t={}){const{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=wi,this.toneMappingExposure=1;const v=this;let R=!1,T=0,E=0,P=null,b=-1,M=null;const L=new ie,z=new ie;let D=null;const O=new Lt(0);let k=0,B=e.width,X=e.height,W=1,st=null,ft=null;const yt=new ie(0,0,B,X),qt=new ie(0,0,B,X);let ae=!1;const Z=new Wc;let rt=!1,Et=!1;const ct=new Ht,Nt=new Ht,Vt=new A,kt=new ie,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function it(){return P===null?W:1}let I=n;function It(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Uc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),I===null){const N="webgl2";if(I=It(N,w),I===null)throw It(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,Mt,lt,Bt,_t,C,S,G,j,Q,$,At,ut,vt,te,et,St,zt,Gt,bt,ne,Kt,pe,U;function dt(){tt=new j0(I),tt.init(),Kt=new D_(I,tt),Mt=new H0(I,tt,t,Kt),lt=new P_(I,tt),Mt.reverseDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),Bt=new J0(I),_t=new m_,C=new I_(I,tt,lt,_t,Mt,Kt,Bt),S=new W0(v),G=new Y0(v),j=new sp(I),pe=new k0(I,j),Q=new $0(I,j,Bt,pe),$=new Q0(I,Q,j,Bt),Gt=new K0(I,Mt,C),et=new V0(_t),At=new p_(v,S,G,tt,Mt,pe,et),ut=new G_(v,_t),vt=new __,te=new b_(tt),zt=new z0(v,S,G,lt,$,f,c),St=new R_(v,$,Mt),U=new H_(I,Bt,Mt,lt),bt=new G0(I,tt,Bt),ne=new Z0(I,tt,Bt),Bt.programs=At.programs,v.capabilities=Mt,v.extensions=tt,v.properties=_t,v.renderLists=vt,v.shadowMap=St,v.state=lt,v.info=Bt}dt();const q=new z_(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(B,X,!1))},this.getSize=function(w){return w.set(B,X)},this.setSize=function(w,N,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,X=N,e.width=Math.floor(w*W),e.height=Math.floor(N*W),H===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(B*W,X*W).floor()},this.setDrawingBufferSize=function(w,N,H){B=w,X=N,W=H,e.width=Math.floor(w*H),e.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,N,H,V){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,N,H,V),lt.viewport(L.copy(yt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,N,H,V){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,N,H,V),lt.scissor(z.copy(qt).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){lt.setScissorTest(ae=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,N=!0,H=!0){let V=0;if(w){let F=!1;if(P!==null){const ot=P.texture.format;F=ot===Gc||ot===kc||ot===zc}if(F){const ot=P.texture.type,mt=ot===si||ot===$i||ot===_r||ot===Fs||ot===Fc||ot===Oc,Rt=zt.getClearColor(),Ct=zt.getClearAlpha(),Wt=Rt.r,$t=Rt.g,Pt=Rt.b;mt?(g[0]=Wt,g[1]=$t,g[2]=Pt,g[3]=Ct,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Wt,_[1]=$t,_[2]=Pt,_[3]=Ct,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),te.dispose(),_t.dispose(),S.dispose(),G.dispose(),$.dispose(),pe.dispose(),U.dispose(),At.dispose(),q.dispose(),q.removeEventListener("sessionstart",ll),q.removeEventListener("sessionend",hl),Ci.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=Bt.autoReset,N=St.enabled,H=St.autoUpdate,V=St.needsUpdate,F=St.type;dt(),Bt.autoReset=w,St.enabled=N,St.autoUpdate=H,St.needsUpdate=V,St.type=F}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const N=w.target;N.removeEventListener("dispose",jt),we(N)}function we(w){He(w),_t.remove(w)}function He(w){const N=_t.get(w).programs;N!==void 0&&(N.forEach(function(H){At.releaseProgram(H)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,V,F,ot){N===null&&(N=se);const mt=F.isMesh&&F.matrixWorld.determinant()<0,Rt=Rd(w,N,H,V,F);lt.setMaterial(V,mt);let Ct=H.index,Wt=1;if(V.wireframe===!0){if(Ct=Q.getWireframeAttribute(H),Ct===void 0)return;Wt=2}const $t=H.drawRange,Pt=H.attributes.position;let oe=$t.start*Wt,me=($t.start+$t.count)*Wt;ot!==null&&(oe=Math.max(oe,ot.start*Wt),me=Math.min(me,(ot.start+ot.count)*Wt)),Ct!==null?(oe=Math.max(oe,0),me=Math.min(me,Ct.count)):Pt!=null&&(oe=Math.max(oe,0),me=Math.min(me,Pt.count));const ge=me-oe;if(ge<0||ge===1/0)return;pe.setup(F,V,Rt,H,Ct);let Qe,ce=bt;if(Ct!==null&&(Qe=j.get(Ct),ce=ne,ce.setIndex(Qe)),F.isMesh)V.wireframe===!0?(lt.setLineWidth(V.wireframeLinewidth*it()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(F.isLine){let Dt=V.linewidth;Dt===void 0&&(Dt=1),lt.setLineWidth(Dt*it()),F.isLineSegments?ce.setMode(I.LINES):F.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else F.isPoints?ce.setMode(I.POINTS):F.isSprite&&ce.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ce.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Dt=F._multiDrawStarts,Xn=F._multiDrawCounts,le=F._multiDrawCount,Sn=Ct?j.get(Ct).bytesPerElement:1,ts=_t.get(V).currentProgram.getUniforms();for(let an=0;an<le;an++)ts.setValue(I,"_gl_DrawID",an),ce.render(Dt[an]/Sn,Xn[an])}else if(F.isInstancedMesh)ce.renderInstances(oe,ge,F.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xn=Math.min(H.instanceCount,Dt);ce.renderInstances(oe,ge,Xn)}else ce.render(oe,ge)};function he(w,N,H){w.transparent===!0&&w.side===sn&&w.forceSinglePass===!1?(w.side=Ge,w.needsUpdate=!0,Ar(w,N,H),w.side=ii,w.needsUpdate=!0,Ar(w,N,H),w.side=sn):Ar(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),p=te.get(H),p.init(N),x.push(p),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==H&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let mt=0;mt<ot.length;mt++){const Rt=ot[mt];he(Rt,H,F),V.add(Rt)}else he(ot,H,F),V.add(ot)}),x.pop(),p=null,V},this.compileAsync=function(w,N,H=null){const V=this.compile(w,N,H);return new Promise(F=>{function ot(){if(V.forEach(function(mt){_t.get(mt).currentProgram.isReady()&&V.delete(mt)}),V.size===0){F(w);return}setTimeout(ot,10)}tt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Mn=null;function Wn(w){Mn&&Mn(w)}function ll(){Ci.stop()}function hl(){Ci.start()}const Ci=new Vu;Ci.setAnimationLoop(Wn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(w){Mn=w,q.setAnimationLoop(w),w===null?Ci.stop():Ci.start()},q.addEventListener("sessionstart",ll),q.addEventListener("sessionend",hl),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,N,P),p=te.get(w,x.length),p.init(N),x.push(p),Nt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Z.setFromProjectionMatrix(Nt),Et=this.localClippingEnabled,rt=et.init(this.clippingPlanes,Et),m=vt.get(w,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&Oo(ot,N,-1/0,v.sortObjects)}Oo(w,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ft),K=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,K&&zt.addToRenderList(m,w),this.info.render.frame++,rt===!0&&et.beginShadows();const H=p.state.shadowsArray;St.render(H,w,N),rt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const ot=N.cameras;if(F.length>0)for(let mt=0,Rt=ot.length;mt<Rt;mt++){const Ct=ot[mt];dl(V,F,w,Ct)}K&&zt.render(w);for(let mt=0,Rt=ot.length;mt<Rt;mt++){const Ct=ot[mt];ul(m,w,Ct,Ct.viewport)}}else F.length>0&&dl(V,F,w,N),K&&zt.render(w),ul(m,w,N);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,N),pe.resetDefaultState(),b=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],rt===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Oo(w,N,H,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){V&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Nt);const mt=$.update(w),Rt=w.material;Rt.visible&&m.push(w,mt,Rt,H,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const mt=$.update(w),Rt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),kt.copy(mt.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(Nt)),Array.isArray(Rt)){const Ct=mt.groups;for(let Wt=0,$t=Ct.length;Wt<$t;Wt++){const Pt=Ct[Wt],oe=Rt[Pt.materialIndex];oe&&oe.visible&&m.push(w,mt,oe,H,kt.z,Pt)}}else Rt.visible&&m.push(w,mt,Rt,H,kt.z,null)}}const ot=w.children;for(let mt=0,Rt=ot.length;mt<Rt;mt++)Oo(ot[mt],N,H,V)}function ul(w,N,H,V){const F=w.opaque,ot=w.transmissive,mt=w.transparent;p.setupLightsView(H),rt===!0&&et.setGlobalState(v.clippingPlanes,H),V&&lt.viewport(L.copy(V)),F.length>0&&Tr(F,N,H),ot.length>0&&Tr(ot,N,H),mt.length>0&&Tr(mt,N,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function dl(w,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Zi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?br:si,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ot=p.state.transmissionRenderTarget[V.id],mt=V.viewport||L;ot.setSize(mt.z,mt.w);const Rt=v.getRenderTarget();v.setRenderTarget(ot),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),K&&zt.render(H);const Ct=v.toneMapping;v.toneMapping=wi;const Wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),rt===!0&&et.setGlobalState(v.clippingPlanes,V),Tr(w,H,V),C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot),tt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Pt=0,oe=N.length;Pt<oe;Pt++){const me=N[Pt],ge=me.object,Qe=me.geometry,ce=me.material,Dt=me.group;if(ce.side===sn&&ge.layers.test(V.layers)){const Xn=ce.side;ce.side=Ge,ce.needsUpdate=!0,fl(ge,H,V,Qe,ce,Dt),ce.side=Xn,ce.needsUpdate=!0,$t=!0}}$t===!0&&(C.updateMultisampleRenderTarget(ot),C.updateRenderTargetMipmap(ot))}v.setRenderTarget(Rt),v.setClearColor(O,k),Wt!==void 0&&(V.viewport=Wt),v.toneMapping=Ct}function Tr(w,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ot=w.length;F<ot;F++){const mt=w[F],Rt=mt.object,Ct=mt.geometry,Wt=V===null?mt.material:V,$t=mt.group;Rt.layers.test(H.layers)&&fl(Rt,N,H,Ct,Wt,$t)}}function fl(w,N,H,V,F,ot){w.onBeforeRender(v,N,H,V,F,ot),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(v,N,H,V,w,ot),F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=Ge,F.needsUpdate=!0,v.renderBufferDirect(H,N,V,F,w,ot),F.side=ii,F.needsUpdate=!0,v.renderBufferDirect(H,N,V,F,w,ot),F.side=sn):v.renderBufferDirect(H,N,V,F,w,ot),w.onAfterRender(v,N,H,V,F,ot)}function Ar(w,N,H){N.isScene!==!0&&(N=se);const V=_t.get(w),F=p.state.lights,ot=p.state.shadowsArray,mt=F.state.version,Rt=At.getParameters(w,F.state,ot,N,H),Ct=At.getProgramCacheKey(Rt);let Wt=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?G:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",jt),Wt=new Map,V.programs=Wt);let $t=Wt.get(Ct);if($t!==void 0){if(V.currentProgram===$t&&V.lightsStateVersion===mt)return ml(w,Rt),$t}else Rt.uniforms=At.getUniforms(w),w.onBeforeCompile(Rt,v),$t=At.acquireProgram(Rt,Ct),Wt.set(Ct,$t),V.uniforms=Rt.uniforms;const Pt=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=et.uniform),ml(w,Rt),V.needsLights=Pd(w),V.lightsStateVersion=mt,V.needsLights&&(Pt.ambientLightColor.value=F.state.ambient,Pt.lightProbe.value=F.state.probe,Pt.directionalLights.value=F.state.directional,Pt.directionalLightShadows.value=F.state.directionalShadow,Pt.spotLights.value=F.state.spot,Pt.spotLightShadows.value=F.state.spotShadow,Pt.rectAreaLights.value=F.state.rectArea,Pt.ltc_1.value=F.state.rectAreaLTC1,Pt.ltc_2.value=F.state.rectAreaLTC2,Pt.pointLights.value=F.state.point,Pt.pointLightShadows.value=F.state.pointShadow,Pt.hemisphereLights.value=F.state.hemi,Pt.directionalShadowMap.value=F.state.directionalShadowMap,Pt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Pt.spotShadowMap.value=F.state.spotShadowMap,Pt.spotLightMatrix.value=F.state.spotLightMatrix,Pt.spotLightMap.value=F.state.spotLightMap,Pt.pointShadowMap.value=F.state.pointShadowMap,Pt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=$t,V.uniformsList=null,$t}function pl(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=po.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ml(w,N){const H=_t.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Rd(w,N,H,V,F){N.isScene!==!0&&(N=se),C.resetTextureUnits();const ot=N.fog,mt=V.isMeshStandardMaterial?N.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zs,Ct=(V.isMeshStandardMaterial?G:S).get(V.envMap||mt),Wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$t=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pt=!!H.morphAttributes.position,oe=!!H.morphAttributes.normal,me=!!H.morphAttributes.color;let ge=wi;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=v.toneMapping);const Qe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=Qe!==void 0?Qe.length:0,Dt=_t.get(V),Xn=p.state.lights;if(rt===!0&&(Et===!0||w!==M)){const pn=w===M&&V.id===b;et.setState(V,w,pn)}let le=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Xn.state.version||Dt.outputColorSpace!==Rt||F.isBatchedMesh&&Dt.batching===!1||!F.isBatchedMesh&&Dt.batching===!0||F.isBatchedMesh&&Dt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Dt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Dt.instancing===!1||!F.isInstancedMesh&&Dt.instancing===!0||F.isSkinnedMesh&&Dt.skinning===!1||!F.isSkinnedMesh&&Dt.skinning===!0||F.isInstancedMesh&&Dt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Dt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Dt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Dt.instancingMorph===!1&&F.morphTexture!==null||Dt.envMap!==Ct||V.fog===!0&&Dt.fog!==ot||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==et.numPlanes||Dt.numIntersection!==et.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==$t||Dt.morphTargets!==Pt||Dt.morphNormals!==oe||Dt.morphColors!==me||Dt.toneMapping!==ge||Dt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Dt.__version=V.version);let Sn=Dt.currentProgram;le===!0&&(Sn=Ar(V,N,F));let ts=!1,an=!1,Xs=!1;const _e=Sn.getUniforms(),Dn=Dt.uniforms;if(lt.useProgram(Sn.program)&&(ts=!0,an=!0,Xs=!0),V.id!==b&&(b=V.id,an=!0),ts||M!==w){lt.buffers.depth.getReversed()?(ct.copy(w.projectionMatrix),Df(ct),Uf(ct),_e.setValue(I,"projectionMatrix",ct)):_e.setValue(I,"projectionMatrix",w.projectionMatrix),_e.setValue(I,"viewMatrix",w.matrixWorldInverse);const ci=_e.map.cameraPosition;ci!==void 0&&ci.setValue(I,Vt.setFromMatrixPosition(w.matrixWorld)),Mt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_e.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,an=!0,Xs=!0)}if(F.isSkinnedMesh){_e.setOptional(I,F,"bindMatrix"),_e.setOptional(I,F,"bindMatrixInverse");const pn=F.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),_e.setValue(I,"boneTexture",pn.boneTexture,C))}F.isBatchedMesh&&(_e.setOptional(I,F,"batchingTexture"),_e.setValue(I,"batchingTexture",F._matricesTexture,C),_e.setOptional(I,F,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",F._indirectTexture,C),_e.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",F._colorsTexture,C));const qs=H.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Gt.update(F,H,Sn),(an||Dt.receiveShadow!==F.receiveShadow)&&(Dt.receiveShadow=F.receiveShadow,_e.setValue(I,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Dn.envMap.value=Ct,Dn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Dn.envMapIntensity.value=N.environmentIntensity),an&&(_e.setValue(I,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Cd(Dn,Xs),ot&&V.fog===!0&&ut.refreshFogUniforms(Dn,ot),ut.refreshMaterialUniforms(Dn,V,W,X,p.state.transmissionRenderTarget[w.id]),po.upload(I,pl(Dt),Dn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(po.upload(I,pl(Dt),Dn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_e.setValue(I,"center",F.center),_e.setValue(I,"modelViewMatrix",F.modelViewMatrix),_e.setValue(I,"normalMatrix",F.normalMatrix),_e.setValue(I,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const pn=V.uniformsGroups;for(let ci=0,li=pn.length;ci<li;ci++){const gl=pn[ci];U.update(gl,Sn),U.bind(gl,Sn)}}return Sn}function Cd(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Pd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,N,H){_t.get(w.texture).__webglTexture=N,_t.get(w.depthTexture).__webglTexture=H;const V=_t.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=_t.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){P=w,T=N,E=H;let V=!0,F=null,ot=!1,mt=!1;if(w){const Ct=_t.get(w);if(Ct.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(Ct.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ct.__hasExternalTextures)C.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&_t.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(mt=!0);const $t=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[N])?F=$t[N][H]:F=$t[N],ot=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=_t.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?F=$t[H]:F=$t,L.copy(w.viewport),z.copy(w.scissor),D=w.scissorTest}else L.copy(yt).multiplyScalar(W).floor(),z.copy(qt).multiplyScalar(W).floor(),D=ae;if(lt.bindFramebuffer(I.FRAMEBUFFER,F)&&V&&lt.drawBuffers(w,F),lt.viewport(L),lt.scissor(z),lt.setScissorTest(D),ot){const Ct=_t.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,H)}else if(mt){const Ct=_t.get(w.texture),Wt=N||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,H||0,Wt)}b=-1},this.readRenderTargetPixels=function(w,N,H,V,F,ot,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){lt.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Ct=w.texture,Wt=Ct.format,$t=Ct.type;if(!Mt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&H>=0&&H<=w.height-F&&I.readPixels(N,H,V,F,Kt.convert(Wt),Kt.convert($t),ot)}finally{const Ct=P!==null?_t.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,V,F,ot,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Rt=Rt[mt]),Rt){const Ct=w.texture,Wt=Ct.format,$t=Ct.type;if(!Mt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&H>=0&&H<=w.height-F){lt.bindFramebuffer(I.FRAMEBUFFER,Rt);const Pt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pt),I.bufferData(I.PIXEL_PACK_BUFFER,ot.byteLength,I.STREAM_READ),I.readPixels(N,H,V,F,Kt.convert(Wt),Kt.convert($t),0);const oe=P!==null?_t.get(P).__webglFramebuffer:null;lt.bindFramebuffer(I.FRAMEBUFFER,oe);const me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await If(I,me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ot),I.deleteBuffer(Pt),I.deleteSync(me),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(w.image.width*V),ot=Math.floor(w.image.height*V),mt=N!==null?N.x:0,Rt=N!==null?N.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,mt,Rt,F,ot),lt.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,V=null,F=0){w.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let ot,mt,Rt,Ct,Wt,$t,Pt,oe,me;const ge=w.isCompressedTexture?w.mipmaps[F]:w.image;H!==null?(ot=H.max.x-H.min.x,mt=H.max.y-H.min.y,Rt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Wt=H.min.y,$t=H.isBox3?H.min.z:0):(ot=ge.width,mt=ge.height,Rt=ge.depth||1,Ct=0,Wt=0,$t=0),V!==null?(Pt=V.x,oe=V.y,me=V.z):(Pt=0,oe=0,me=0);const Qe=Kt.convert(N.format),ce=Kt.convert(N.type);let Dt;N.isData3DTexture?(C.setTexture3D(N,0),Dt=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),Dt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Xn=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),ts=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);const Xs=w.isDataArrayTexture||w.isData3DTexture,_e=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Dn=_t.get(w),qs=_t.get(N),pn=_t.get(Dn.__renderTarget),ci=_t.get(qs.__renderTarget);lt.bindFramebuffer(I.READ_FRAMEBUFFER,pn.__webglFramebuffer),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let li=0;li<Rt;li++)Xs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,F,$t+li),w.isDepthTexture?(_e&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(N).__webglTexture,F,me+li),I.blitFramebuffer(Ct,Wt,ot,mt,Pt,oe,ot,mt,I.DEPTH_BUFFER_BIT,I.NEAREST)):_e?I.copyTexSubImage3D(Dt,F,Pt,oe,me+li,Ct,Wt,ot,mt):I.copyTexSubImage2D(Dt,F,Pt,oe,me+li,Ct,Wt,ot,mt);lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _e?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Dt,F,Pt,oe,me,ot,mt,Rt,Qe,ce,ge.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,F,Pt,oe,me,ot,mt,Rt,Qe,ge.data):I.texSubImage3D(Dt,F,Pt,oe,me,ot,mt,Rt,Qe,ce,ge):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,Pt,oe,ot,mt,Qe,ce,ge.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,Pt,oe,ge.width,ge.height,Qe,ge.data):I.texSubImage2D(I.TEXTURE_2D,F,Pt,oe,ot,mt,Qe,ce,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ts),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),F===0&&N.generateMipmaps&&I.generateMipmap(Dt),lt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,V=null,F=0){return w.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,H,V,F)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),lt.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,lt.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class qc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new qc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yc extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class W_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new A;class yo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jc extends Qi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ms;const Js=new A,gs=new A,_s=new A,vs=new Y,Ks=new Y,Zu=new Ht,$r=new A,Qs=new A,Zr=new A,ph=new Y,da=new Y,mh=new Y;class Ju extends Ae{constructor(t=new jc){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new W_(e,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new yo(n,3,0,!1)),ms.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=ms,this.material=t,this.center=new Y(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),Zu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-_s.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Jr($r.set(-.5,-.5,0),_s,o,gs,s,r),Jr(Qs.set(.5,-.5,0),_s,o,gs,s,r),Jr(Zr.set(.5,.5,0),_s,o,gs,s,r),ph.set(0,0),da.set(1,0),mh.set(1,1);let a=t.ray.intersectTriangle($r,Qs,Zr,!1,Js);if(a===null&&(Jr(Qs.set(-.5,.5,0),_s,o,gs,s,r),da.set(0,1),a=t.ray.intersectTriangle($r,Zr,Qs,!1,Js),a===null))return;const c=t.ray.origin.distanceTo(Js);c<t.near||c>t.far||e.push({distance:c,point:Js.clone(),uv:vn.getInterpolation(Js,$r,Qs,Zr,ph,da,mh,new Y),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,s,r){vs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*vs.x-s*vs.y,Ks.y=s*vs.x+r*vs.y):Ks.copy(vs),i.copy(t),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(Zu)}class Ku extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=fn,h=fn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gh extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new Ht,_h=new Ht,Kr=[],vh=new ai,X_=new Ht,tr=new Tt,er=new ks;class yi extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,X_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ai),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),vh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(vh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ks),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),er.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),_h.multiplyMatrices(n,xs),tr.matrixWorld=_h,tr.raycast(t,Kr);for(let o=0,a=Kr.length;o<a;o++){const c=Kr[o];c.instanceId=r,c.object=this,e.push(c)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ku(new Float32Array(s*this.count),s,this.count,Bc,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qu extends Qi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mo=new A,So=new A,xh=new Ht,nr=new Po,Qr=new ks,fa=new A,yh=new A;class q_ extends Ae{constructor(t=new ve,e=new Qu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mo.fromBufferAttribute(e,s-1),So.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(So);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;xh.copy(s).invert(),nr.copy(t.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),x=to(this,t,nr,c,p,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=to(this,t,nr,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=to(this,t,nr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=to(this,t,nr,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function to(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Mo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),e.distanceSqToSegment(Mo,So,fa,yh)>n)return;fa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fa);if(!(c<t.near||c>t.far))return{distance:c,point:yh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Io extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Y:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,c=new Ht;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $c extends Vn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Y){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Y_ extends $c{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const eo=new A,pa=new Zc,ma=new Zc,ga=new Zc;class td extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(eo.subVectors(s[0],s[1]).add(s[0]),l=eo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),pa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),ma.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),ga.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(pa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ma.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ga.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(pa.calc(c),ma.calc(c),ga.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Mh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function j_(i,t){const e=1-i;return e*e*t}function $_(i,t){return 2*(1-i)*i*t}function Z_(i,t){return i*i*t}function pr(i,t,e,n){return j_(i,t)+$_(i,e)+Z_(i,n)}function J_(i,t){const e=1-i;return e*e*e*t}function K_(i,t){const e=1-i;return 3*e*e*i*t}function Q_(i,t){return 3*(1-i)*i*i*t}function tv(i,t){return i*i*i*t}function mr(i,t,e,n,s){return J_(i,t)+K_(i,e)+Q_(i,n)+tv(i,s)}class ed extends Vn{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ev extends Vn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y),mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nd extends Vn{constructor(t=new Y,e=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nv extends Vn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends Vn{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sd extends Vn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y),pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rd extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mh(a,c.x,l.x,h.x,u.x),Mh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Y().fromArray(s))}return this}}var bo=Object.freeze({__proto__:null,ArcCurve:Y_,CatmullRomCurve3:td,CubicBezierCurve:ed,CubicBezierCurve3:ev,EllipseCurve:$c,LineCurve:nd,LineCurve3:nv,QuadraticBezierCurve:id,QuadraticBezierCurve3:sd,SplineCurve:rd});class iv extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bo[s.type]().fromJSON(s))}return this}}class wc extends iv{constructor(t){super(),this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nd(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new id(this.currentPoint.clone(),new Y(t,e),new Y(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ed(this.currentPoint.clone(),new Y(t,e),new Y(n,s),new Y(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new $c(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hs extends ve{constructor(t=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new A,d=new Y,f=new A,g=new A,_=new A;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=e;y++){const x=n+y*h*s,v=Math.sin(x),R=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*R,o.push(u.x,u.y,u.z),d.x=y/e,d.y=T/(t.length-1),a.push(d.x,d.y);const E=c[3*T+0]*v,P=c[3*T+1],b=c[3*T+0]*R;l.push(E,P,b)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const v=x+y*t.length,R=v,T=v+t.length,E=v+t.length+1,P=v+1;r.push(R,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.points,t.segments,t.phiStart,t.phiLength)}}class Jc extends Hs{constructor(t=1,e=1,n=4,s=8){const r=new wc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Jc(t.radius,t.length,t.capSegments,t.radialSegments)}}class Kc extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new Y;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class kn extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function y(){const v=new A,R=new A;let T=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,L=M*(e-t)+t;for(let z=0;z<=s;z++){const D=z/s,O=D*c+a,k=Math.sin(O),B=Math.cos(O);R.x=L*k,R.y=-M*n+m,R.z=L*B,u.push(R.x,R.y,R.z),v.set(k,E,B).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-M),b.push(g++)}_.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const M=_[b][P],L=_[b+1][P],z=_[b+1][P+1],D=_[b][P+1];(t>0||b!==0)&&(h.push(M,L,D),T+=3),(e>0||b!==r-1)&&(h.push(L,z,D),T+=3)}l.addGroup(p,T,0),p+=T}function x(v){const R=g,T=new Y,E=new A;let P=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const O=z/s*c+a,k=Math.cos(O),B=Math.sin(O);E.x=b*B,E.y=m*M,E.z=b*k,u.push(E.x,E.y,E.z),d.push(0,M,0),T.x=k*.5+.5,T.y=B*.5*M+.5,f.push(T.x,T.y),g++}for(let z=0;z<s;z++){const D=R+z,O=L+z;v===!0?h.push(O,O+1,D):h.push(O+1,O,D),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qc extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new A,v=new A,R=new A;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],v),f(e[T+2],R),c(x,v,R,y)}function c(y,x,v,R){const T=R+1,E=[];for(let P=0;P<=T;P++){E[P]=[];const b=y.clone().lerp(v,P/T),M=x.clone().lerp(v,P/T),L=T-P;for(let z=0;z<=L;z++)z===0&&P===T?E[P][z]=b:E[P][z]=b.clone().lerp(M,z/L)}for(let P=0;P<T;P++)for(let b=0;b<2*(T-P)-1;b++){const M=Math.floor(b/2);b%2===0?(d(E[P][M+1]),d(E[P+1][M]),d(E[P][M])):(d(E[P][M+1]),d(E[P+1][M+1]),d(E[P+1][M]))}}function l(y){const x=new A;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(y),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function h(){const y=new A;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const v=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;o.push(v,1-R)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],R=o[y+4],T=Math.max(x,v,R),E=Math.min(x,v,R);T>.9&&E<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),R<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const v=y*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const y=new A,x=new A,v=new A,R=new A,T=new Y,E=new Y,P=new Y;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),x.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(y).add(x).add(v).divideScalar(3);const L=m(R);_(T,M+0,y,L),_(E,M+2,x,L),_(P,M+4,v,L)}}function _(y,x,v,R){R<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.vertices,t.indices,t.radius,t.details)}}class Do extends wc{constructor(t){super(t),this.uuid=zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wc().fromJSON(s))}return this}}const sv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=od(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=lv(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return xr(r,o,e,a,c,f,0),o}};function od(i,t,e,n,s){let r,o;if(s===yv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Sh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Sh(r,i[r],i[r+1],o);return o&&Uo(o,o.next)&&(Mr(o),o=o.next),o}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Uo(e,e.next)||Se(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&pv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ov(i,n,s,r):rv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=av(Ji(i),t,e),xr(i,t,e,n,s,r,2)):o===2&&cv(i,t,e,n,s,r):xr(Ji(i),t,e,n,s,r,1);break}}}function rv(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&As(s,a,r,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ov(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ec(f,g,t,e,n),y=Ec(_,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&As(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&As(a,h,c,u,l,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&As(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function av(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Uo(s,r)&&ad(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return Ji(n)}function cv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_v(o,a)){let c=cd(o,a);o=Ji(o,o.next),c=Ji(c,c.next),xr(o,t,e,n,s,r,0),xr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function lv(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=od(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(gv(l));for(s.sort(hv),r=0;r<s.length;r++)e=uv(s[r],e);return e}function hv(i,t){return i.x-t.x}function uv(i,t){const e=dv(i,t);if(!e)return t;const n=cd(e,i);return Ji(n,n.next),Ji(e,e.next)}function dv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&As(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&fv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function fv(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function pv(i,t,e,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mv(s)}function mv(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function gv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function As(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function _v(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vv(i,t)&&(yr(i,t)&&yr(t,i)&&xv(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Uo(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Uo(i,t){return i.x===t.x&&i.y===t.y}function ad(i,t,e,n){const s=io(Se(i,t,e)),r=io(Se(i,t,n)),o=io(Se(e,n,i)),a=io(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&no(i,e,t)||r===0&&no(i,n,t)||o===0&&no(e,i,n)||a===0&&no(e,t,n))}function no(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function io(i){return i>0?1:i<0?-1:0}function vv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function xv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cd(i,t){const e=new Tc(i.i,i.x,i.y),n=new Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sh(i,t,e,n){const s=new Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ei{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ei.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];bh(t),wh(n,t);let o=t.length;e.forEach(bh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,wh(n,e[c]);const a=sv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function bh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class tl extends ve{constructor(t=new Do([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Mv;let x,v=!1,R,T,E,P;p&&(x=p.getSpacedPoints(h),v=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new A,E=new A,P=new A),d||(m=0,f=0,g=0,_=0);const b=a.extractPoints(l);let M=b.shape;const L=b.holes;if(!Ei.isClockWise(M)){M=M.reverse();for(let K=0,it=L.length;K<it;K++){const I=L[K];Ei.isClockWise(I)&&(L[K]=I.reverse())}}const D=Ei.triangulateShape(M,L),O=M;for(let K=0,it=L.length;K<it;K++){const I=L[K];M=M.concat(I)}function k(K,it,I){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(it,I)}const B=M.length,X=D.length;function W(K,it,I){let It,tt,Mt;const lt=K.x-it.x,Bt=K.y-it.y,_t=I.x-K.x,C=I.y-K.y,S=lt*lt+Bt*Bt,G=lt*C-Bt*_t;if(Math.abs(G)>Number.EPSILON){const j=Math.sqrt(S),Q=Math.sqrt(_t*_t+C*C),$=it.x-Bt/j,At=it.y+lt/j,ut=I.x-C/Q,vt=I.y+_t/Q,te=((ut-$)*C-(vt-At)*_t)/(lt*C-Bt*_t);It=$+lt*te-K.x,tt=At+Bt*te-K.y;const et=It*It+tt*tt;if(et<=2)return new Y(It,tt);Mt=Math.sqrt(et/2)}else{let j=!1;lt>Number.EPSILON?_t>Number.EPSILON&&(j=!0):lt<-Number.EPSILON?_t<-Number.EPSILON&&(j=!0):Math.sign(Bt)===Math.sign(C)&&(j=!0),j?(It=-Bt,tt=lt,Mt=Math.sqrt(S)):(It=lt,tt=Bt,Mt=Math.sqrt(S/2))}return new Y(It/Mt,tt/Mt)}const st=[];for(let K=0,it=O.length,I=it-1,It=K+1;K<it;K++,I++,It++)I===it&&(I=0),It===it&&(It=0),st[K]=W(O[K],O[I],O[It]);const ft=[];let yt,qt=st.concat();for(let K=0,it=L.length;K<it;K++){const I=L[K];yt=[];for(let It=0,tt=I.length,Mt=tt-1,lt=It+1;It<tt;It++,Mt++,lt++)Mt===tt&&(Mt=0),lt===tt&&(lt=0),yt[It]=W(I[It],I[Mt],I[lt]);ft.push(yt),qt=qt.concat(yt)}for(let K=0;K<m;K++){const it=K/m,I=f*Math.cos(it*Math.PI/2),It=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,Mt=O.length;tt<Mt;tt++){const lt=k(O[tt],st[tt],It);ct(lt.x,lt.y,-I)}for(let tt=0,Mt=L.length;tt<Mt;tt++){const lt=L[tt];yt=ft[tt];for(let Bt=0,_t=lt.length;Bt<_t;Bt++){const C=k(lt[Bt],yt[Bt],It);ct(C.x,C.y,-I)}}}const ae=g+_;for(let K=0;K<B;K++){const it=d?k(M[K],qt[K],ae):M[K];v?(E.copy(R.normals[0]).multiplyScalar(it.x),T.copy(R.binormals[0]).multiplyScalar(it.y),P.copy(x[0]).add(E).add(T),ct(P.x,P.y,P.z)):ct(it.x,it.y,0)}for(let K=1;K<=h;K++)for(let it=0;it<B;it++){const I=d?k(M[it],qt[it],ae):M[it];v?(E.copy(R.normals[K]).multiplyScalar(I.x),T.copy(R.binormals[K]).multiplyScalar(I.y),P.copy(x[K]).add(E).add(T),ct(P.x,P.y,P.z)):ct(I.x,I.y,u/h*K)}for(let K=m-1;K>=0;K--){const it=K/m,I=f*Math.cos(it*Math.PI/2),It=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,Mt=O.length;tt<Mt;tt++){const lt=k(O[tt],st[tt],It);ct(lt.x,lt.y,u+I)}for(let tt=0,Mt=L.length;tt<Mt;tt++){const lt=L[tt];yt=ft[tt];for(let Bt=0,_t=lt.length;Bt<_t;Bt++){const C=k(lt[Bt],yt[Bt],It);v?ct(C.x,C.y+x[h-1].y,x[h-1].x+I):ct(C.x,C.y,u+I)}}}Z(),rt();function Z(){const K=s.length/3;if(d){let it=0,I=B*it;for(let It=0;It<X;It++){const tt=D[It];Nt(tt[2]+I,tt[1]+I,tt[0]+I)}it=h+m*2,I=B*it;for(let It=0;It<X;It++){const tt=D[It];Nt(tt[0]+I,tt[1]+I,tt[2]+I)}}else{for(let it=0;it<X;it++){const I=D[it];Nt(I[2],I[1],I[0])}for(let it=0;it<X;it++){const I=D[it];Nt(I[0]+B*h,I[1]+B*h,I[2]+B*h)}}n.addGroup(K,s.length/3-K,0)}function rt(){const K=s.length/3;let it=0;Et(O,it),it+=O.length;for(let I=0,It=L.length;I<It;I++){const tt=L[I];Et(tt,it),it+=tt.length}n.addGroup(K,s.length/3-K,1)}function Et(K,it){let I=K.length;for(;--I>=0;){const It=I;let tt=I-1;tt<0&&(tt=K.length-1);for(let Mt=0,lt=h+m*2;Mt<lt;Mt++){const Bt=B*Mt,_t=B*(Mt+1),C=it+It+Bt,S=it+tt+Bt,G=it+tt+_t,j=it+It+_t;Vt(C,S,G,j)}}}function ct(K,it,I){c.push(K),c.push(it),c.push(I)}function Nt(K,it,I){kt(K),kt(it),kt(I);const It=s.length/3,tt=y.generateTopUV(n,s,It-3,It-2,It-1);se(tt[0]),se(tt[1]),se(tt[2])}function Vt(K,it,I,It){kt(K),kt(it),kt(It),kt(it),kt(I),kt(It);const tt=s.length/3,Mt=y.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);se(Mt[0]),se(Mt[1]),se(Mt[3]),se(Mt[1]),se(Mt[2]),se(Mt[3])}function kt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function se(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Sv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bo[s.type]().fromJSON(s)),new tl(n,t.options)}}const Mv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Y(r,o),new Y(a,c),new Y(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Y(o,1-c),new Y(l,1-u),new Y(d,1-g),new Y(_,1-p)]:[new Y(a,1-c),new Y(h,1-u),new Y(f,1-g),new Y(m,1-p)]}};function Sv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wr extends Qc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wr(t.radius,t.detail)}}class el extends ve{constructor(t=new Do([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Ei.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Ei.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=Ei.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){const y=_[m],x=y[0]+u,v=y[1]+u,R=y[2]+u;n.push(x,v,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return bv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new el(n,t.curveSegments)}}function bv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class No extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new A,d=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const y=[],x=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const x=h[p][y+1],v=h[p][y],R=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(x,v,T),(p!==n-1||c<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nl extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class il extends ve{constructor(t=new sd(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new Y;let h=new A;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),y(),p()}function m(x){h=t.getPointAt(x/e,h);const v=o.normals[x],R=o.binormals[x];for(let T=0;T<=s;T++){const E=T/s*Math.PI*2,P=Math.sin(E),b=-Math.cos(E);c.x=b*v.x+P*R.x,c.y=b*v.y+P*R.y,c.z=b*v.z+P*R.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=s;v++){const R=(s+1)*(x-1)+(v-1),T=(s+1)*x+(v-1),E=(s+1)*x+v,P=(s+1)*(x-1)+v;g.push(R,T,P),g.push(T,E,P)}}function y(){for(let x=0;x<=e;x++)for(let v=0;v<=s;v++)l.x=x/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new il(new bo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class je extends Qi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gn extends je{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wv extends sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _a=new Ht,Eh=new A,Th=new A;class ld{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Th),e.updateMatrixWorld(),_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ah=new Ht,ir=new A,va=new A;class Ev extends ld{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(t.matrixWorld),n.position.copy(ir),va.copy(n.position),va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(va),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah)}}class Tv extends sl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ev}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Av extends ld{constructor(){super(new Wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xa extends sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Av}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Rh=new Ht;class Rv{constructor(t,e,n=0,s=1/0){this.ray=new Po(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Ch),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(Ch),n}}function Ch(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],t,e,!0)}}class Ph{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Cv extends Ki{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);const Pv=[{id:"mining",no:1,title:"开采",en:"Mining",summary:"缅甸帕敢（Hpakant）一带是宝石级硬玉翡翠的主要产地。如今的开采以次生矿为主：翡翠以巨砾形式埋在乌鲁河沿岸的砾岩层里，大型露天矿用挖掘机等重型机械剥土、挖掘。",terms:[{zh:"原生矿",en:"primary deposit",def:"产于蛇纹石化橄榄岩中的硬玉岩岩脉。"},{zh:"次生矿",en:"secondary deposit",def:"原生矿体经风化、搬运后沉积在砾岩或河床中的巨砾与砾石。"}],purpose:"获得翡翠原石。",equipment:["挖掘机","运输车"],cautions:["实际矿区既有大型机械化露天开采，也有手工开采，方式差异很大。","露天矿边坡风险高，帕敢曾发生严重滑坡事故。本作品只呈现示意性的开采，不美化矿区环境。"],sources:["GG-BURMA","HPK-2021","IGC-2019"],evidence:"B",simplification:"沙盘为示意，地形、比例与设备都不对应任何真实矿区；不展示爆破、排水与手工采矿。"},{id:"washing",no:2,title:"清洗",en:"Washing",summary:"用水冲去原石表面的泥沙，让皮壳的颜色、颗粒和裂纹更容易看清。",terms:[{zh:"皮壳 / 石皮",en:"rind / skin",def:"原石表面因风化形成的外层，会遮挡内部的真实品质。"}],purpose:"看清原石外表，为后续观察做准备。",equipment:["水枪","毛刷"],cautions:["清洗只改善表面观察，不会改变原石本身。"],sources:["GG-BURMA","ZH-TRADE"],evidence:"C",simplification:"资料中很少单独描述这一步。它属于合理的示意性步骤，并非标准化工序。"},{id:"lighting",no:3,title:"打灯观察",en:"Lighting",summary:"用强光手电贴住皮壳或擦口，观察光线透入的深浅与颜色。",terms:[{zh:"打灯",en:"torch inspection",def:"以强光照射原石表面，观察局部透光与颜色的经验方法。"}],purpose:"初步了解局部的透明度与颜色。",equipment:["强光手电"],cautions:["光线只能进入靠近表面的一小部分，看到的只是局部。","内部的裂、颜色变化和整体品质无法通过打灯完整判断。"],sources:["GG-BURMA","ZH-TRADE"],evidence:"C",simplification:"画面中的透光光晕是视觉示意，不代表真实的透光范围。"},{id:"window",no:4,title:"开窗",en:"Windowing",summary:"在皮壳上磨出一小块（擦口），或切磨出一个平面（开窗，行内也叫“门子”），露出内部石质，便于观察颜色与质地。",terms:[{zh:"擦口",en:"polished spot",def:"在皮壳上擦磨出的小口。"},{zh:"开窗 / 门子",en:"window",def:"在原石外皮上磨出、用来观察内部的切口。"}],purpose:"暴露局部内部，便于观察颜色、透明度与质地。",equipment:["角磨机","砂轮"],cautions:["窗口所见只代表这一个位置，不能推断整块原石。"],sources:["ZH-TRADE","EN-TRADE"],evidence:"C",simplification:"本作只开一个窗。实际操作中窗口的数量和位置因人而异。"},{id:"planning",no:5,title:"切割规划",en:"Cut planning",summary:"根据窗口与外观所见的颜色、裂纹和尺寸，决定下刀位置。本作选择的路线是：先对半剖开，再从其中一半切取板料。",terms:[{zh:"绺裂",en:"fracture",def:"原石中的裂隙，会影响取料位置与成品价值。"}],purpose:"尽量保留颜色、避开裂隙、提高出材率。",equipment:["记号笔 / 粉笔","卡尺"],cautions:["切割路线因原石形态和工厂经验而不同；“先对半、再取板”是本作的示意路线。"],sources:["GIA-HSU","ZH-TRADE"],evidence:"C",simplification:"真实的规划往往需要反复试切与讨论，本作把它压缩为一次性画线。"},{id:"slabbing",no:6,title:"水冷切片",en:"Slabbing",summary:"用镶有金刚石的锯片剖开原石、切出平整的板料。切割时持续加水，既降温又带走岩粉。",terms:[{zh:"金刚石锯片",en:"diamond blade",def:"刃口镶有金刚石的圆锯片。"},{zh:"板料",en:"slab",def:"从原石上切下的平板，手镯将从板料中取出。"}],purpose:"剖开原石，并获得厚度合适的板料。",equipment:["水冷切割机（金刚石锯片）"],cautions:["切开后，只能看到切面所在平面的内部结构。","板料厚度会限制镯子的条宽（行业资料，待核实）。"],sources:["GIA-HSU","EN-TRADE"],evidence:"B",simplification:"大型原石可能采用其他切割设备；本作统一用圆锯片表现。"},{id:"marking",no:7,title:"画圈",en:"Marking",summary:"在板料上评估裂纹与颜色分布，按不同的手镯尺寸画出轮廓。画面中的两组圆圈刻意避开了那条贯穿裂隙。",terms:[{zh:"圈口",en:"inner diameter",def:"手镯的内径，决定佩戴尺寸。"}],purpose:"确定取镯位置与尺寸。",equipment:["灯箱 / 光源","记号笔"],cautions:["尺寸选择受裂纹、颜色和板料大小共同限制。"],sources:["GIA-HSU","ZH-TRADE"],evidence:"B",simplification:"画面中的圈口为示意比例，不作为尺码建议。"},{id:"coring",no:8,title:"套取镯坯",en:"Coring",summary:"钻床先沿外轮廓切出圆形，再换用较小的圆形钻头切出内径。中间切下的圆柱是镯芯，四周剩下余料。",terms:[{zh:"镯坯",en:"bangle blank",def:"切出后、尚未修形的环形毛坯。"},{zh:"镯芯",en:"core",def:"内圈切下的圆柱料，可另作吊坠等。"},{zh:"余料",en:"offcut",def:"取镯后剩下的板料边角。"}],purpose:"从板料中取出环形毛坯。",equipment:["钻床 / 套料机","管状金刚石钻头"],cautions:["不同资料对内外圈的先后顺序说法不一；本作依据 GIA 对平洲工厂的描述（先外后内）。","钻切过程需要加水冷却（行业资料）。"],sources:["GIA-HSU","ZH-TRADE","EN-TRADE"],evidence:"B",simplification:"两次钻切在画面中会被加速。"},{id:"shaping",no:9,title:"粗加工",en:"Rough shaping",summary:"去除镯坯上的瑕疵与绺裂（打顶），磨掉方形截面的棱角（拍边），粗磨出内外圈与条形轮廓。",terms:[{zh:"打顶",en:"—",def:"去除镯坯上的瑕疵与绺裂（行业术语）。"},{zh:"拍边",en:"edge rounding",def:"磨去镯坯截面的棱角（行业术语）。"}],purpose:"定出手镯的基本形状。",equipment:["粗砂轮 / 磨轮"],cautions:["术语与做法因地区和工厂而异。"],sources:["ZH-TRADE"],evidence:"C",simplification:"截面由方变圆的过程在画面中是连续变形，实际是多次磨削。"},{id:"fine-grinding",no:10,title:"精磨",en:"Fine grinding",summary:"逐级换用更细的磨料，去除粗磨痕迹，使表面平整。",terms:[{zh:"细磨",en:"fine grinding",def:"用更细的磨料修整表面。"}],purpose:"提高表面平整度，为抛光做准备。",equipment:["细磨轮 / 磨筒","冷却水"],cautions:["不同工厂使用的磨料种类和目数顺序不同，本作不给出具体数值。"],sources:["EN-TRADE","ZH-TRADE"],evidence:"C",simplification:"画面用“粗糙 → 平整”的连续过渡表现多道工序。"},{id:"polishing",no:11,title:"抛光",en:"Polishing",summary:"用极细的磨料与抛光工具打出光泽，使表面反射清晰、不变形。",terms:[{zh:"抛光",en:"polishing",def:"在表面形成光泽的最后一道磨削工序。"}],purpose:"形成光泽，让颜色与透明度得以展现。",equipment:["抛光轮"],cautions:["抛光是正常加工，不属于“优化处理”。","资料中提到竹、氧化铈等材料，但各厂做法不同，本作不指定具体材料。"],sources:["GIA-QF","EN-TRADE"],evidence:"C",simplification:"画面以高光由模糊变锐利来表现抛光效果。"},{id:"showcase",no:12,title:"检查展示",en:"Inspection & showcase",summary:"检查裂纹、尺寸、抛光与整体完整性，然后在展台上呈现完整的手镯。GIA 评价翡翠时，最看重颜色，其次是透明度和质地，同时也看净度与做工。",terms:[{zh:"A 货",en:"Type A",def:"未经漂白、充填或染色的天然翡翠（表面打蜡通常被接受，待以 GIA 原文核对）。"},{zh:"B 货",en:"Type B",def:"经酸洗漂白、再注入聚合物充填的翡翠。"},{zh:"C 货",en:"Type C",def:"经染色的翡翠。"}],purpose:"检验成品，并展示最终效果。",equipment:["光源","卡尺"],cautions:["天然与否只能由实验室检测确定，不能凭外观判断。","本作展示的是概念中的天然翡翠，不代表任何真实商品。"],sources:["GIA-QF","GG-DYED","GG-COAT"],evidence:"A",simplification:"画面中的颜色与纹理是程序化生成的，用于教学示意。"}],Lv={stages:Pv},Iv=[{id:"GIA-ENC",grade:"A",retrieved:"search-summary",title:"GIA Gem Encyclopedia — Jade (overview & properties)",url:"https://www.gia.edu/jade"},{id:"GIA-DESC",grade:"A",retrieved:"not-retrieved",title:"GIA — Jade description",url:"https://www.gia.edu/jade-description"},{id:"GIA-QF",grade:"A",retrieved:"search-summary",title:"GIA — Jadeite jade quality factors",url:"https://www.gia.edu/jade-quality-factor"},{id:"GIA-BUY",grade:"A",retrieved:"not-retrieved",title:"GIA — Jade buyer's guide",url:"https://www.gia.edu/jade/buyers-guide"},{id:"GIA-HSU",grade:"B",retrieved:"search-summary",title:"Hsu, T. (2013) Jadeite Manufacturing and Trading Hubs in Guangdong, China — GIA News from Research (Pingzhou bangle factory visit)",url:"https://www.gia.edu/gia-news-research-jadeite-trading-centers-hsu"},{id:"GG-BURMA",grade:"B",retrieved:"search-summary",title:"Hughes, R.W. et al. (2000) Burmese Jade: The Inscrutable Gem — Gems & Gemology, Spring 2000",url:"https://www.gia.edu/dam/jcr:4b5d009c-53ed-464a-a8cd-4d5ab23f56c6/SP00.pdf"},{id:"GG-DYED",grade:"A",retrieved:"search-summary",title:"Gems & Gemology Lab Notes (Fall 2015) — Dyed and natural green jadeite",url:"https://www.gia.edu/gems-gemology/fall-2015-labnotes-dyed-natural-green-jadeite"},{id:"GG-COAT",grade:"A",retrieved:"search-summary",title:"Gems & Gemology — Gemological characteristics of coated jadeite jade",url:"https://www.gia.edu/gems-gemology/gemological-characteristics-coated-jadeite-jade"},{id:"PENN",grade:"B",retrieved:"search-summary",title:"Penn Museum, Expedition — jade (specific gravity of jadeite vs nephrite)",url:"https://www.penn.museum/sites/expedition/jade/"},{id:"HPK-2021",grade:"B",retrieved:"search-summary",title:"The 2020 Hpakant jade mine disaster: a multi-sensor investigation for slope failure (ISPRS J. Photogramm. Remote Sens., 2021)",url:"https://sciencedirect.com/science/article/pii/S0924271621001489"},{id:"IGC-2019",grade:"B",retrieved:"search-summary",title:"Loiacono et al. (2019) Artisanal jade mining in Myanmar — International Growth Centre report",url:"https://www.theigc.org/sites/default/files/2020/04/Loiacono-et-al-2019-Final-Report-1-1.pdf"},{id:"ZH-TRADE",grade:"C",retrieved:"search-summary",title:"中文行业科普文章（知乎：翡翠赌石三大法宝；手镯加工流程；翡翠手镯制作全过程）",url:"https://zhuanlan.zhihu.com/p/38353244"},{id:"EN-TRADE",grade:"C",retrieved:"search-summary",title:"English trade articles on bangle making (Mays Gems; Jade Bangle Co.; Jade Fiend)",url:"https://mays.us/blogs/jade-education/how-jade-bangle-is-made-traditionally"}],Dv={sources:Iv},Uv={rind:{label:"石皮",sub:"Rind",body:"原石表面因风化形成的外层。它会遮挡内部的真实品质。",stage:"washing"},window:{label:"开窗",sub:"Window",body:"磨去一小块皮壳露出的内部石质。窗口所见只代表这一个位置。",stage:"window"},fissure:{label:"裂隙",sub:"Fissure",body:"一条贯穿原石的裂隙。它会在窗口、切面和板料上的同一位置出现，决定后面从哪里取镯。",stage:"planning"},stone:{label:"翡翠原石",sub:"Jadeite rough",body:"本作中的原石是程序化生成的教学示意，并非真实标本。",stage:"lighting"},saw:{label:"水冷切割机",sub:"Slab saw",body:"用镶有金刚石的圆锯片剖开原石。工作台可前后进给，锯头可升降。",stage:"slabbing"},blade:{label:"金刚石锯片",sub:"Diamond blade",body:"锯片刃口镶有金刚石。切割时锯片高速旋转，并持续加冷却水。",stage:"slabbing"},coolant:{label:"冷却水",sub:"Coolant",body:"持续冲向切口的水流：降温，并带走切割产生的岩粉。",stage:"slabbing"},cutface:{label:"切面",sub:"Cut face",body:"两个切面互为镜像。它们的色带、棉絮和裂隙都来自同一块原石的内部。",stage:"slabbing"},"fissure-cut":{label:"裂隙在切面上",sub:"Same fissure",body:"窗口上看到的那条裂隙，在切面上出现在对应的位置。",stage:"planning"},plinth:{label:"展台",sub:"Plinth",body:"原石观察工位。",stage:"lighting"},mine:{label:"矿坑",sub:"Open pit",body:"示意性的阶梯式露天矿。实际矿区既有机械化开采，也有手工开采，方式差异很大。",stage:"mining"},excavator:{label:"挖掘机",sub:"Excavator",body:"剥离覆土、挖出原石。帕敢一带的大型露天矿以重型机械开采为主。",stage:"mining"},cutlines:{label:"切割线",sub:"Cut lines",body:"三条粉笔线：中间一条先把原石对半剖开，另外两条从其中一半取出板料。",stage:"planning"},slab:{label:"板料",sub:"Slab",body:"约 14 毫米厚的平板。它的两个面都来自原石内部，手镯将从这里取出。",stage:"slabbing"},"fissure-slab":{label:"裂隙",sub:"Fissure",body:"窗口上看到的那条裂隙，也穿过这块板料。画圈时要避开它。",stage:"marking"},marks:{label:"画好的圈",sub:"Marked rings",body:"每处两圈：外圈决定手镯外径，内圈决定圈口。两组都避开了裂隙。",stage:"marking"},drill:{label:"钻床",sub:"Core drill",body:"带管状金刚石钻头的钻床，钻切时加水冷却。",stage:"coring"},"outer-bit":{label:"外圈钻头",sub:"Outer bit",body:"先沿外轮廓钻切出圆形（依据 GIA 对平洲工厂的描述）。",stage:"coring"},"inner-bit":{label:"内圈钻头",sub:"Inner bit",body:"再换用较小的钻头切出内径。不同资料对先后顺序说法不一。",stage:"coring"},blank:{label:"镯坯",sub:"Bangle blank",body:"切出后、尚未修形的环形毛坯，截面还是方的。",stage:"coring"},core:{label:"镯芯",sub:"Core",body:"内圈切下的圆柱料，可另作吊坠等（行业资料）。",stage:"coring"},offcut:{label:"余料",sub:"Offcut",body:"取镯后剩下的板料。另一处画好的圈还可以再取一只。",stage:"coring"},wheel:{label:"粗磨轮",sub:"Coarse wheel",body:"磨去方形截面的棱角，定出内外圈与条形轮廓。",stage:"shaping"},drum:{label:"细磨筒",sub:"Sanding drum",body:"磨筒伸入内圈，逐级换用更细的磨料。设备形式为示意。",stage:"fine-grinding"},buff:{label:"抛光轮",sub:"Polishing buff",body:"用极细的磨料打出光泽。抛光是正常加工，不是“优化处理”。",stage:"polishing"},"bangle-rough":{label:"镯坯",sub:"Blank",body:"表面粗糙、没有光泽，截面正在由方变圆。",stage:"shaping"},"bangle-fine":{label:"精磨中",sub:"Fine grinding",body:"粗磨痕迹逐渐消失，表面变得平整。",stage:"fine-grinding"},"bangle-polish":{label:"抛光中",sub:"Polishing",body:"高光由模糊变清晰，颜色和透明度显现出来。",stage:"polishing"},inspect:{label:"检查",sub:"Inspection",body:"量圈口，打灯检查裂纹与抛光状态。",stage:"showcase"},edge:{label:"边缘透光",sub:"Translucent edge",body:"光线在薄的边缘处透过并散射，显得温润。",stage:"showcase"},colour:{label:"色带",sub:"Colour band",body:"绿色浓淡不均，是同一块原石内部的天然分布。",stage:"showcase"},lustre:{label:"抛光高光",sub:"Polish lustre",body:"清晰、不变形的反射是做工好的标志之一（GIA）。",stage:"showcase"},bangle:{label:"翡翠手镯",sub:"Jadeite bangle",body:"本作中的手镯由程序生成，用于教学示意，不代表任何真实商品。",stage:"showcase"},wash:{label:"清洗台",sub:"Wash basin",body:"冲去泥沙，让皮壳看得更清楚。",stage:"washing"},lightbox:{label:"灯箱",sub:"Lightbox",body:"从下方透光，便于观察板料内部的裂与颜色。",stage:"marking"},"grind-bench":{label:"磨床",sub:"Grinding bench",body:"可更换磨轮、磨筒和抛光轮。",stage:"shaping"},showcase:{label:"展台",sub:"Showcase",body:"成品展厅。",stage:"showcase"},"grinder-hand":{label:"角磨机",sub:"Angle grinder",body:"用砂轮磨去局部皮壳。",stage:"window"},"inner-diameter":{label:"圈口 ≈ 59.6 mm",sub:"Inner diameter",body:"手镯的内径。本作模型的圈口约 59.6 毫米、条宽约 8.8 毫米，仅为示意，不作为尺码建议。",stage:"showcase"},torch:{label:"强光手电",sub:"Torch",body:"贴住皮壳打光，观察光线透入的深浅与颜色。光只能进入靠近表面的一小部分，看到的只是局部。",stage:"lighting"}},Nv={hotspots:Uv},Fv={"brand.sub":"翡翠诞生记","intro.kicker":"JADEITE JADE · 硬玉翡翠 · 数字工艺馆","intro.title":"翡翠诞生记","intro.lead":"一块未经切割的原石，经过开采、清洗、观察、切片、取圈、打磨与抛光，成为一只绿色翡翠手镯。","intro.start":"开始旅程","intro.explore":"自由探索","intro.note":"全程约 5 分钟 · 可随时暂停、跳转 · 声音默认关闭","tl.label":"工序时间轴","btn.play":"播放","btn.pause":"暂停","btn.replay":"重新播放","btn.prev":"上一道工序","btn.next":"下一道工序","btn.reset":"重置视角","btn.knowledge":"知识","btn.torch":"手动打灯","btn.soundOn":"声音 · 开","btn.soundOff":"声音 · 关","speed.label":"演示速度","scrub.label":"本道工序进度","cam.free":"自由视角 · 点击回到导览",hint:"拖动旋转 · 滚轮或双指缩放 · 空格 播放/暂停 · ←→ 逐帧 · [ ] 切换工序","card.title":"知识卡片","card.terms":"专业术语","card.purpose":"加工目的","card.equipment":"设备","card.cautions":"注意事项","card.sources":"参考来源","card.evidence":"证据","card.simplified":"演示简化",guided:"导览中","show.lights":"灯光","show.gallery":"聚光","show.soft":"柔光","show.back":"背光","show.compare":"表面对比","show.before":"打磨前","show.after":"抛光后","show.orbit":"360° 旋转","torch.note":"打灯观察：光线只能进入靠近表面的一小部分，看到的只是局部。","ph.overview":"沙盘全景","ph.dig":"挖掘","ph.lift":"提起原石","ph.transport":"运送","ph.wash":"冲洗","ph.done":"完成","ph.dim":"调暗环境","ph.torch":"打灯","ph.lightsOn":"恢复照明","ph.approach":"就位","ph.grind":"磨窗","ph.orbit":"环绕观察","ph.lineHalf":"画对半线","ph.lineSlab":"画板料线","ph.feed":"进给","ph.cut":"下切 · 水冷","ph.retract":"退刀","ph.open":"打开切面","ph.slabCut":"切取板料","ph.separate":"分离","ph.lightbox":"灯箱","ph.mark":"画圈","ph.outer":"钻外圈","ph.toolChange":"换钻头","ph.inner":"钻内圈","ph.rough":"粗磨修形","ph.fine":"精磨","ph.polish":"抛光","ph.inspect":"检查","ph.display":"陈列","live.stage":"工序 {no}：{title}","fallback.noWebgl.title":"无法启动三维场景","fallback.noWebgl.body":"你的浏览器或设备没有启用 WebGL 2。请使用最新版 Chrome、Edge、Safari 或 Firefox，并确认已开启硬件加速。","fallback.lost.title":"图形上下文已丢失","fallback.lost.body":"浏览器暂时收回了 3D 渲染资源（常见于切换应用或显存不足）。正在等待恢复，你也可以刷新页面。","fallback.error.title":"三维场景初始化失败","fallback.error.body":"加载过程中出现错误，请刷新页面重试。","fallback.retry":"重试","ph.liftBlank":"取出镯坯","dim.inner":"圈口 ≈ {mm} mm","intro.leadShort":"从一块原石到一只手镯，12 道工序的 3D 工艺馆。","btn.more":"更多控制","more.title":"播放与导航","more.speed":"播放速度","more.stages":"跳到工序","sheet.expand":"展开全部","sheet.half":"收起到半屏","sheet.close":"关闭知识卡片","card.gist":"要点","story.fold":"收起说明","story.unfold":"展开说明"},Ov={strings:Fv},Rc=Lv.stages,ya=Object.fromEntries(Dv.sources.map(i=>[i.id,i])),Bv=Nv.hotspots,zv=Ov.strings;function Lh(i){const t=Rc.find(e=>e.id===i);if(!t)throw new Error(`unknown stage ${i}`);return t}function Ih(i){const t=Bv[i];if(!t)throw new Error(`unknown hotspot ${i}`);return t}function at(i,t={}){const e=zv[i];return e===void 0?i:e.replace(/\{(\w+)\}/g,(n,s)=>String(t[s]??""))}const On=[{id:"mining",duration:25,phases:[[0,"ph.overview"],[.25,"ph.dig"],[.6,"ph.lift"]]},{id:"washing",duration:16,phases:[[0,"ph.transport"],[.25,"ph.wash"],[.9,"ph.done"]]},{id:"lighting",duration:22,phases:[[0,"ph.transport"],[.2,"ph.dim"],[.3,"ph.torch"],[.86,"ph.lightsOn"]]},{id:"window",duration:20,phases:[[0,"ph.approach"],[.25,"ph.grind"],[.8,"ph.done"]]},{id:"planning",duration:24,phases:[[0,"ph.orbit"],[.15,"ph.lineHalf"],[.45,"ph.lineSlab"],[.85,"ph.done"]]},{id:"slabbing",duration:46,phases:[[0,"ph.transport"],[.12,"ph.feed"],[.2,"ph.cut"],[.42,"ph.retract"],[.47,"ph.open"],[.6,"ph.slabCut"],[.92,"ph.separate"]]},{id:"marking",duration:20,phases:[[0,"ph.transport"],[.35,"ph.lightbox"],[.45,"ph.mark"]]},{id:"coring",duration:32,phases:[[0,"ph.transport"],[.14,"ph.outer"],[.45,"ph.toolChange"],[.5,"ph.inner"],[.76,"ph.liftBlank"]]},{id:"shaping",duration:24,phases:[[0,"ph.transport"],[.18,"ph.rough"]]},{id:"fine-grinding",duration:20,phases:[[0,"ph.toolChange"],[.12,"ph.fine"]]},{id:"polishing",duration:20,phases:[[0,"ph.toolChange"],[.12,"ph.polish"]]},{id:"showcase",duration:32,phases:[[0,"ph.transport"],[.16,"ph.inspect"],[.5,"ph.display"]]}],Ma=On.length,kv=i=>On[i].duration;function Dh(i,t){let e=On[i].phases[0][1];for(const[n,s]of On[i].phases)t>=n&&(e=s);return e}const Gv="(max-width: 759px), (max-height: 500px)",Hv="(min-width: 760px) and (max-width: 1179px) and (min-height: 501px) and (orientation: portrait)",Xe={play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5l12 7-12 7z"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',torch:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6h-4z"/><path d="M10 9v11h4V9"/><path d="M18 4l2-1M18 8h2"/></svg>',book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',more:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="fill" cx="5" cy="12" r="1.8"/><circle class="fill" cx="12" cy="12" r="1.8"/><circle class="fill" cx="19" cy="12" r="1.8"/></svg>',expand:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',fold:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',sound:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="wave" d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/><path class="mute" d="M17 9l4 6M21 9l-4 6"/></svg>'},Yt=(i,t="",e="")=>{const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n},Le=(i,t,e,n)=>{const s=Yt("button",i,t);return s.type="button",s.setAttribute("aria-label",e),s.title=e,s.addEventListener("click",n),s},gi=i=>String(i).padStart(2,"0");class Vv{constructor(t,e){this.on=e,this.root=t,this.root.className="ui",this.root.dataset.intro="true";const n=Yt("header","top");this.top=n,n.innerHTML=`<div class="brand"><span class="mark" aria-hidden="true"></span><b>JADE GENESIS</b><i>${at("brand.sub")}</i></div>`,this.guidedChip=Yt("span","guided",`<i aria-hidden="true"></i>${at("guided")}`),this.soundBtn=Le("chip sound",`${Xe.sound}<span>${at("btn.soundOff")}</span>`,at("btn.soundOff"),()=>this.on.toggleSound());const s=Yt("div","tools");s.append(this.guidedChip,this.soundBtn),n.append(s),this.intro=Yt("section","intro"),this.intro.innerHTML=`<div class="kicker">${at("intro.kicker")}</div><h1>${at("intro.title")}</h1><p class="lead">${at("intro.lead")}</p><p class="lead-short">${at("intro.leadShort")}</p>`;const r=Yt("div","cta-row");r.append(Le("pill primary big",`<span>${at("intro.start")}</span>${Xe.play}`,at("intro.start"),()=>this.on.start()),Le("pill big",`<span>${at("intro.explore")}</span>`,at("intro.explore"),()=>this.on.explore())),this.intro.append(r,Yt("p","note",at("intro.note"))),this.story=Yt("section","story"),this.storyBody=Yt("div","story-body"),this.storyFold=Le("story-fold",Xe.fold,at("story.fold"),()=>this.setStoryFolded(!this.story.classList.contains("folded"))),this.storyFold.setAttribute("aria-expanded","true"),this.story.append(this.storyBody,this.storyFold),this.know=Yt("aside","know"),this.know.id="knowledge",this.know.dataset.sheet="closed",this.know.setAttribute("aria-labelledby","know-title"),this.knowHead=Yt("div","kh"),this.knowGrade=Yt("span","grade"),this.sheetSizeBtn=Le("sheet-btn",Xe.expand,at("sheet.expand"),()=>this.setSheet(this.sheet==="full"?"half":"full")),this.sheetSizeBtn.dataset.action="sheet-size",this.sheetCloseBtn=Le("sheet-btn",Xe.close,at("sheet.close"),()=>this.setSheet("closed")),this.sheetCloseBtn.dataset.action="sheet-close";const o=Yt("span","grip");o.setAttribute("aria-hidden","true");const a=Yt("h2","kt",at("card.title"));this.knowTitle=a,a.id="know-title",a.tabIndex=-1,this.knowHead.append(o,a,this.knowGrade,this.sheetSizeBtn,this.sheetCloseBtn),this.knowBody=Yt("div","kb"),this.know.append(this.knowHead,this.knowBody),this.bindSheetDrag();const c=R=>{this.opener=R,this.setSheet(this.sheet==="closed"?"half":"closed")};this.knowToggle=Le("know-toggle",`${Xe.book}<span>${at("btn.knowledge")}</span>`,at("btn.knowledge"),()=>c(this.knowToggle)),this.knowToggle.setAttribute("aria-controls","knowledge"),this.knowToggle.setAttribute("aria-expanded","false"),this.knowBtn=Le("round know-btn",Xe.book,at("btn.knowledge"),()=>c(this.knowBtn)),this.knowBtn.dataset.action="knowledge",this.knowBtn.setAttribute("aria-controls","knowledge"),this.knowBtn.setAttribute("aria-expanded","false");const l=Yt("div","dock");this.dock=l;const h=Yt("nav","timeline");h.setAttribute("aria-label",at("tl.label")),Rc.forEach((R,T)=>{const E=Le("step",`<span class="bar"><span class="fill"></span></span><span class="n">${gi(R.no)}</span><span class="zh">${R.title}</span>`,`${gi(R.no)} ${R.title}`,()=>this.on.goTo(T));E.dataset.stage=String(T),this.steps.push(E),this.stepFill.push(E.querySelector(".fill")),h.append(E)});const u=Yt("div","controls");this.prevBtn=Le("round prev",Xe.prev,at("btn.prev"),()=>this.on.prev()),this.playBtn=Le("round primary play",Xe.play,at("btn.play"),()=>this.on.toggle()),this.nextBtn=Le("round next",Xe.next,at("btn.next"),()=>this.on.next());const d=Yt("div","speed");d.setAttribute("role","group"),d.setAttribute("aria-label",at("speed.label"));for(const R of[.5,1,2]){const T=Le("",`${R}×`,`${R}×`,()=>this.on.speed(R));d.append(T),this.speedBtns.set(R,T)}const f=Yt("div","scrub");this.scrub=Yt("input"),this.scrub.type="range",this.scrub.min="0",this.scrub.max="1000",this.scrub.step="1",this.scrub.setAttribute("aria-label",at("scrub.label")),this.scrub.addEventListener("input",()=>{this.scrubbing=!0,this.on.seek(+this.scrub.value/1e3)}),this.scrub.addEventListener("change",()=>{this.scrubbing=!1}),this.ticks=Yt("div","ticks"),this.ticks.setAttribute("aria-hidden","true"),this.phaseText=Yt("div","phase"),f.append(this.phaseText,this.scrub,this.ticks),this.torchBtn=Le("pill torch",`${Xe.torch}<span>${at("btn.torch")}</span>`,at("btn.torch"),()=>this.on.toggleTorch());const g=Le("round reset",Xe.reset,at("btn.reset"),()=>this.on.resetView());this.moreBtn=Le("round more-btn",Xe.more,at("btn.more"),()=>this.setMoreOpen(!this.morePanel.classList.contains("open"))),this.moreBtn.setAttribute("aria-controls","more-panel"),this.moreBtn.setAttribute("aria-expanded","false"),this.morePanel=Yt("div","secondary"),this.morePanel.id="more-panel",this.morePanel.setAttribute("role","group"),this.morePanel.setAttribute("aria-label",at("more.title"));const _=Yt("div","nav-grid");_.setAttribute("role","group"),_.setAttribute("aria-label",at("more.stages")),Rc.forEach((R,T)=>{const E=Le("nav-step",`<span class="n">${gi(R.no)}</span><span class="zh">${R.title}</span>`,`${gi(R.no)} ${R.title}`,()=>{this.on.goTo(T),this.setMoreOpen(!1)});this.navBtns.push(E),_.append(E)}),this.morePanel.append(Yt("div","more-h",at("more.speed")),d,this.torchBtn,g,Yt("div","more-h stages-h",at("more.stages")),_),u.append(this.knowBtn,this.prevBtn,this.playBtn,this.nextBtn,f,this.moreBtn,this.morePanel),l.append(h,u),this.showcaseBar=Yt("div","showcase-bar");const m=Yt("div","seg");m.setAttribute("role","group"),m.setAttribute("aria-label",at("show.lights"));for(const R of["gallery","soft","back"]){const T=Le("",at(`show.${R}`),at(`show.${R}`),()=>this.on.lightMode(R));m.append(T),this.lightBtns.set(R,T)}const p=Yt("label","compare");this.compareInput=Yt("input"),this.compareInput.type="range",this.compareInput.min="0",this.compareInput.max="100",this.compareInput.value="100",this.compareInput.setAttribute("aria-label",at("show.compare")),this.compareInput.addEventListener("input",()=>this.on.compare(+this.compareInput.value/100)),p.append(Yt("span","",at("show.before")),this.compareInput,Yt("span","",at("show.after"))),this.showcaseBar.append(Yt("span","lbl",at("show.lights")),m,Yt("span","lbl",at("show.compare")),p),this.camChip=Le("cam-chip",at("cam.free"),at("cam.free"),()=>this.on.resetView()),this.hotLayer=Yt("div","hots"),this.popover=Yt("div","popover"),this.popover.setAttribute("role","dialog"),this.popover.hidden=!0,this.toast=Yt("div","toast"),this.toast.setAttribute("role","status"),this.live=Yt("div","sr-only"),this.live.setAttribute("aria-live","polite");const y=Yt("div","hint",at("hint"));this.root.append(n,this.intro,this.story,this.knowToggle,this.hotLayer,this.popover,this.toast,this.camChip,this.showcaseBar,y,l,this.know,this.live),this.panels=[this.story,this.know,l,this.knowToggle,this.intro,this.showcaseBar,this.morePanel],window.addEventListener("keydown",R=>this.onKey(R)),document.addEventListener("pointerdown",R=>{const T=R.target;!this.popover.hidden&&!this.popover.contains(T)&&!T.closest(".pin")&&this.closePopover(),this.morePanel.classList.contains("open")&&!this.morePanel.contains(T)&&!this.moreBtn.contains(T)&&this.setMoreOpen(!1)});const x=()=>{this.root.dataset.layout=this.compactMq.matches?"compact":"regular",this.root.dataset.orient=window.innerWidth>window.innerHeight?"landscape":"portrait",this.setMoreOpen(!1)};this.compactMq.addEventListener("change",x),window.addEventListener("resize",x),x();const v=()=>{this.root.style.setProperty("--dock-h",`${Math.round(window.innerHeight-this.dock.getBoundingClientRect().top)}px`),this.root.style.setProperty("--top-h",`${Math.round(this.top.getBoundingClientRect().bottom)}px`)};new ResizeObserver(v).observe(this.dock),window.addEventListener("resize",v),v()}root;intro;story;know;knowToggle;steps=[];stepFill=[];playBtn;prevBtn;nextBtn;speedBtns=new Map;scrub;phaseText;ticks;torchBtn;soundBtn;showcaseBar;lightBtns=new Map;compareInput;camChip;guidedChip;hotLayer;pins=new Map;popover;toast;live;panels;storyBody;storyFold;knowHead;knowBody;knowGrade;knowBtn;sheetSizeBtn;sheetCloseBtn;moreBtn;morePanel;navBtns=[];dock;top;compactMq=window.matchMedia(Gv);tabletMq=window.matchMedia(Hv);knowTitle;sheet="closed";opener=null;last={};scrubbing=!1;get compact(){return this.compactMq.matches}frameRect(){if(!this.compact&&!this.tabletMq.matches)return null;const t=window.innerWidth,e=window.innerHeight,n={left:0,top:0,right:t,bottom:e},s=(o,a)=>{if(o.offsetParent===null)return;const c=getComputedStyle(o).getPropertyValue("--avoid").trim();if(!c)return;const l=o.getBoundingClientRect(),h={...n};c==="top"?h.top=Math.max(h.top,l.bottom):c==="bottom"?h.bottom=Math.min(h.bottom,l.top):c==="left"?h.left=Math.max(h.left,l.right):c==="right"&&(h.right=Math.min(h.right,l.left)),!(a&&(h.bottom-h.top<e*.25||h.right-h.left<t*.35))&&Object.assign(n,h)};for(const o of[this.top,this.story,this.intro,this.dock,this.showcaseBar])s(o,!1);s(this.know,!0);const r=6;return{left:n.left+r,top:n.top+r,right:n.right-r,bottom:n.bottom-r}}get sheetState(){return this.sheet}setSheet(t){const e=this.sheet;this.sheet=t,this.know.dataset.sheet=t,this.know.classList.toggle("open",t!=="closed");for(const s of[this.knowToggle,this.knowBtn])s.setAttribute("aria-expanded",String(t!=="closed"));const n=t==="full";this.sheetSizeBtn.setAttribute("aria-label",at(n?"sheet.half":"sheet.expand")),this.sheetSizeBtn.title=at(n?"sheet.half":"sheet.expand"),this.sheetSizeBtn.classList.toggle("down",n),this.root.dataset.sheet=t,t!=="closed"&&e==="closed"&&(this.setMoreOpen(!1),this.know.querySelector("#know-title").focus({preventScroll:!0})),t==="closed"&&e!=="closed"&&this.know.contains(document.activeElement)&&(this.opener&&this.opener.offsetParent!==null?this.opener:this.compact?this.knowBtn:this.knowToggle).focus({preventScroll:!0})}setMoreOpen(t){this.morePanel&&(this.morePanel.classList.toggle("open",t),this.moreBtn.setAttribute("aria-expanded",String(t)),t&&this.setSheet("closed"))}setStoryFolded(t){this.story.classList.toggle("folded",t),this.storyFold.setAttribute("aria-expanded",String(!t)),this.storyFold.setAttribute("aria-label",at(t?"story.unfold":"story.fold")),this.storyFold.title=at(t?"story.unfold":"story.fold")}bindSheetDrag(){let t=null;this.knowHead.addEventListener("pointerdown",n=>{n.target.closest("button")||!this.compact||(t={y:n.clientY,id:n.pointerId},this.knowHead.setPointerCapture(n.pointerId))}),this.knowHead.addEventListener("pointermove",n=>{if(!t||n.pointerId!==t.id)return;const s=n.clientY-t.y;this.know.style.setProperty("--drag",`${Math.max(-80,s)}px`)});const e=n=>{if(!t||n.pointerId!==t.id)return;const s=n.clientY-t.y;t=null,this.know.style.removeProperty("--drag"),s<-40?this.setSheet("full"):s>60&&this.setSheet(this.sheet==="full"?"half":"closed")};this.knowHead.addEventListener("pointerup",e),this.knowHead.addEventListener("pointercancel",e)}hideIntro(){this.root.dataset.intro="false"}onKey(t){const e=t.target;if(!(e?.tagName==="INPUT"&&t.key!==" ")&&!(e?.tagName==="BUTTON"&&(t.key===" "||t.key==="Enter")))switch(t.key){case" ":t.preventDefault(),this.on.toggle();break;case"ArrowRight":t.preventDefault(),this.on.step(.02);break;case"ArrowLeft":t.preventDefault(),this.on.step(-.02);break;case"]":this.on.next();break;case"[":this.on.prev();break;case"r":case"R":this.on.resetView();break;case"t":case"T":this.on.toggleTorch();break;case"m":case"M":this.on.toggleSound();break;case"Escape":this.closePopover(),this.setMoreOpen(!1),this.setSheet("closed");break}}update(t){const e=this.last;if(t.stage!==e.stage){const s=Lh(On[t.stage].id);this.renderKnowledge(s),this.steps.forEach((r,o)=>{r.classList.toggle("on",o===t.stage),r.classList.toggle("done",o<t.stage),o===t.stage?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),this.navBtns.forEach((r,o)=>{r.classList.toggle("on",o===t.stage),o===t.stage?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),this.root.dataset.stage=String(t.stage),this.prevBtn.disabled=t.stage===0,this.nextBtn.disabled=t.stage===On.length-1,this.ticks.innerHTML=On[t.stage].phases.map(([r,o])=>`<span style="left:${r*100}%">${at(o)}</span>`).join(""),this.closePopover(),this.live.textContent=at("live.stage",{no:gi(s.no),title:s.title})}if((t.stage!==e.stage||t.progress!==e.progress)&&this.stepFill.forEach((s,r)=>{s.style.transform=`scaleX(${r<t.stage?1:r===t.stage?t.progress:0})`}),t.playing!==e.playing||t.progress>=1!=(e.progress??0)>=1){const s=t.playing?at("btn.pause"):t.progress>=1?at("btn.replay"):at("btn.play");this.playBtn.innerHTML=t.playing?Xe.pause:Xe.play,this.playBtn.setAttribute("aria-label",s),this.playBtn.title=`${s} (Space)`}if(t.speed!==e.speed)for(const[s,r]of this.speedBtns)r.classList.toggle("on",s===t.speed),r.setAttribute("aria-pressed",String(s===t.speed));if(!this.scrubbing&&t.progress!==e.progress&&(this.scrub.value=String(Math.round(t.progress*1e3))),t.phase!==e.phase||t.progress!==e.progress){const s=Math.round(t.progress*100);this.phaseText.textContent=`${t.phase} · ${s}%`,this.scrub.setAttribute("aria-valuetext",`${t.phase}，${s}%`)}t.guided!==e.guided&&this.guidedChip.classList.toggle("show",t.guided),t.cameraMode!==e.cameraMode&&this.camChip.classList.toggle("show",t.cameraMode==="free"),t.torch!==e.torch&&(this.torchBtn.classList.toggle("on",t.torch),this.torchBtn.setAttribute("aria-pressed",String(t.torch)));const n=t.stage===2&&(t.torch||t.progress>.28&&t.progress<.88);if(n!==this.toast.classList.contains("show")&&(this.toast.textContent=at("torch.note"),this.toast.classList.toggle("show",n)),t.sound!==e.sound&&(this.soundBtn.classList.toggle("on",t.sound),this.soundBtn.querySelector("span").textContent=t.sound?at("btn.soundOn"):at("btn.soundOff"),this.soundBtn.setAttribute("aria-pressed",String(t.sound)),this.soundBtn.setAttribute("aria-label",t.sound?at("btn.soundOn"):at("btn.soundOff"))),t.lightMode!==e.lightMode)for(const[s,r]of this.lightBtns)r.classList.toggle("on",s===t.lightMode),r.setAttribute("aria-pressed",String(s===t.lightMode));t.compare!==e.compare&&document.activeElement!==this.compareInput&&(this.compareInput.value=String(Math.round(t.compare*100))),this.root.classList.toggle("showcase-ready",t.stage===On.length-1&&t.progress>=1),Object.assign(this.last,t)}renderKnowledge(t){this.storyBody.innerHTML=`
      <div class="kicker">STAGE ${gi(t.no)} / 12</div>
      <h1>${t.title}<small>${t.en}</small></h1>
      <p>${t.summary}</p>
      <div class="simp"><b>${at("card.simplified")}</b>${t.simplification}</div>`,this.knowTitle.innerHTML=`<span class="kt-stage">${gi(t.no)} ${t.title}<span class="kt-sep"> · </span></span><span class="kt-card">${at("card.title")}</span>`,this.knowGrade.className=`grade g${t.evidence}`,this.knowGrade.textContent=`${at("card.evidence")} ${t.evidence}`,this.knowBody.innerHTML=`
      <div class="gist"><b>${at("card.gist")}</b>${t.purpose}<span class="gist-simp">${at("card.simplified")}：${t.simplification}</span></div>
      <dl>
        <dt>${at("card.terms")}</dt><dd>${t.terms.map(e=>`<b>${e.zh}</b> ${e.en!=="—"?`<i>${e.en}</i>`:""}<br/><span>${e.def}</span>`).join("<br/>")}</dd>
        <dt>${at("card.purpose")}</dt><dd>${t.purpose}</dd>
        <dt>${at("card.equipment")}</dt><dd>${t.equipment.join("、")}</dd>
        <dt>${at("card.cautions")}</dt><dd>${t.cautions.join("<br/>")}</dd>
        <dt>${at("card.sources")}</dt><dd class="src">${t.sources.map(e=>`<a href="${ya[e].url}" target="_blank" rel="noopener">${ya[e].title}</a><em>${ya[e].grade}</em>`).join("")}</dd>
      </dl>`}setHotspots(t){const e=new Set,n=this.panels.filter(r=>r.offsetParent!==null&&getComputedStyle(r).opacity!=="0").map(r=>r.getBoundingClientRect()).filter(r=>r.width>0&&r.height>0),s=(r,o)=>n.some(a=>r>a.left-12&&r<a.right+12&&o>a.top-12&&o<a.bottom+12);for(const r of t){e.add(r.id);let o=this.pins.get(r.id);if(!o){const a=Ih(r.id),c=Yt("button","pin",`<span class="dot" aria-hidden="true"></span><span class="lbl"><b>${a.label}</b><i>${a.sub}</i></span>`);c.type="button",c.setAttribute("aria-label",a.label),c.dataset.id=r.id,c.addEventListener("click",l=>{l.stopPropagation();const h=c.getBoundingClientRect();this.showInfo(r.id,h.left,h.top)}),this.hotLayer.append(c),this.pins.set(r.id,c),o=c}o.hidden=!r.visible||s(r.x,r.y),o.style.transform=`translate(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px)`}for(const[r,o]of this.pins)e.has(r)||(o.hidden=!0)}showInfo(t,e,n){const s=Ih(t),r=Lh(s.stage);this.popover.innerHTML=`<button class="x" type="button" aria-label="close">${Xe.close}</button>
      <div class="kicker">STAGE ${gi(r.no)} · ${r.title}</div>
      <h2>${s.label}<small>${s.sub}</small></h2><p>${s.body}</p>`,this.popover.querySelector(".x").addEventListener("click",()=>this.closePopover()),this.popover.hidden=!1,this.popover.dataset.id=t;const o=Math.min(300,window.innerWidth-32);this.popover.style.left=`${Math.min(Math.max(16,e+18),window.innerWidth-o-16)}px`,this.popover.style.top=`${Math.min(Math.max(72,n-20),window.innerHeight-240)}px`}closePopover(){this.popover.hidden=!0}showFallback(t,e,n){let s=document.querySelector(".fallback");s||(s=Yt("div","fallback"),s.setAttribute("role","alert"),document.body.append(s)),s.innerHTML=`<div class="card"><div class="kicker">JADE GENESIS</div><h1>${t}</h1><p>${e}</p>${n?`<button class="pill primary" type="button">${at("fallback.retry")}</button>`:""}</div>`,s.hidden=!1,n&&s.querySelector("button").addEventListener("click",n)}hideFallback(){const t=document.querySelector(".fallback");t&&(t.hidden=!0)}}const Uh={type:"change"},rl={type:"start"},hd={type:"end"},so=new Po,Nh=new Un,Wv=Math.cos(70*Te.DEG2RAD),Ie=new A,tn=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sa=1e-6;class Xv extends Cv{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.enabled=!0,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new rn,this._lastTargetPosition=new A,this._quat=new rn().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ph,this._sphericalDelta=new Ph,this._scale=1,this._panOffset=new A,this._rotateStart=new Y,this._rotateEnd=new Y,this._rotateDelta=new Y,this._panStart=new Y,this._panEnd=new Y,this._panDelta=new Y,this._dollyStart=new Y,this._dollyEnd=new Y,this._dollyDelta=new Y,this._dollyDirection=new A,this._mouse=new Y,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yv.bind(this),this._onPointerDown=qv.bind(this),this._onPointerUp=jv.bind(this),this._onContextMenu=ex.bind(this),this._onMouseWheel=Jv.bind(this),this._onKeyDown=Kv.bind(this),this._onTouchStart=Qv.bind(this),this._onTouchMove=tx.bind(this),this._onMouseDown=$v.bind(this),this._onMouseMove=Zv.bind(this),this._interceptControlDown=nx.bind(this),this._interceptControlUp=ix.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ie.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new A(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<Wv?this.object.lookAt(this.target):(Nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane(Nh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sa||this._lastTargetPosition.distanceToSquared(this.target)>Sa?(this.dispatchEvent(Uh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ie.copy(s).sub(this.target);let r=Ie.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Y,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function qv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Yv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hd),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $v(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case Rs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case Rs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(rl)}function Zv(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Jv(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(rl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(hd))}function Kv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Qv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(rl)}function tx(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function ex(i){this.enabled!==!1&&i.preventDefault()}function nx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ix(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ud=i=>Math.min(1,Math.max(0,i)),sx=(i,t,e)=>ud((i-t)/(e-t)),rx=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ze=(i,t,e)=>i+(t-i)*e,Fh=(i,t)=>1-Math.exp(-i*t),ox=Math.tan(15*Math.PI/180)*1.6,ax=Math.tan(15*Math.PI/180),cx=.8,lx=1.15,hx=Math.tan(32*Math.PI/180),Oh=new ai(new A(-25,.3,-6),new A(44,5,5));class ux{camera;controls;modeValue="auto";snapNext=!0;listeners=new Set;box=new ai;width=1;height=1;frameTarget=null;frameNow=null;constructor(t){this.camera=new dn(30,1,.1,200),this.controls=new Xv(this.camera,t);const e=this.controls;e.enableDamping=!0,e.dampingFactor=.08,e.minDistance=2.4,e.maxDistance=16,e.minPolarAngle=.15,e.maxPolarAngle=1.42,e.enablePan=!0,e.panSpeed=.6,e.rotateSpeed=.7,e.zoomSpeed=.8,e.addEventListener("start",()=>this.setMode("free"))}get mode(){return this.modeValue}onMode(t){this.listeners.add(t)}setMode(t){t!==this.modeValue&&(this.modeValue=t,this.listeners.forEach(e=>e(t)))}setDistanceLimits(t,e){this.controls.minDistance=t,this.controls.maxDistance=e}reset(t=!1){this.setMode("auto"),t&&(this.snapNext=!0)}resize(t,e){if(this.width=t,this.height=e,this.frameNow){this.applyFrame(this.frameNow);return}const n=this.camera;n.aspect=t/e,n.fov=30,n.setViewOffset(t,e,-t*.06,e*.02,t,e),n.updateProjectionMatrix()}setFrame(t,e=!1){if(this.frameTarget=t,!t){this.frameNow&&(this.frameNow=null,this.resize(this.width,this.height));return}(!this.frameNow||e)&&(this.frameNow={...t},this.applyFrame(this.frameNow))}get frame(){return this.frameNow?{...this.frameNow}:null}applyFrame(t){const e=this.camera,n=Math.max(40,t.right-t.left),s=Math.max(40,t.bottom-t.top),r=n/s,o=Math.min(hx,Math.max(ax*lx,ox*cx/r));e.fov=2*Math.atan(o)*180/Math.PI,e.aspect=r,e.setViewOffset(n,s,-t.left,-t.top,this.width,this.height),e.updateProjectionMatrix()}update(t,e,n){if(this.frameTarget&&this.frameNow&&this.snapNext)Object.assign(this.frameNow,this.frameTarget),this.applyFrame(this.frameNow);else if(this.frameTarget&&this.frameNow){const s=Fh(7,t),r=this.frameNow,o=this.frameTarget,a=Math.abs(r.left-o.left)+Math.abs(r.top-o.top)+Math.abs(r.right-o.right)+Math.abs(r.bottom-o.bottom);a>.5?(r.left+=(o.left-r.left)*s,r.top+=(o.top-r.top)*s,r.right+=(o.right-r.right)*s,r.bottom+=(o.bottom-r.bottom)*s,this.applyFrame(r)):a>0&&(Object.assign(r,o),this.applyFrame(r))}if(this.modeValue==="auto"){const s=this.snapNext?1:Fh(3.2,t);this.snapNext=!1,this.camera.position.lerp(e.position,s),this.controls.target.lerp(e.target,s)}this.controls.target.clamp(Oh.min,Oh.max),n&&this.modeValue==="free"&&(this.box.min.set(n.x-6,.3,n.z-5),this.box.max.set(n.x+6,4,n.z+5),this.controls.target.clamp(this.box.min,this.box.max)),this.controls.update(),this.camera.position.y<.4&&(this.camera.position.y=.4)}dispose(){this.controls.dispose()}}const Ze=new Uint8Array(512);{let i=1234567;const t=()=>{i|=0,i=i+1831565813|0;let n=Math.imul(i^i>>>15,1|i);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296},e=[...Array(256).keys()];for(let n=255;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}for(let n=0;n<512;n++)Ze[n]=e[n&255]}const ba=i=>i*i*i*(i*(i*6-15)+10),Fi=(i,t,e)=>i+(t-i)*e;function _i(i,t,e,n){const s=i<8?t:e,r=i<4?e:i===12||i===14?t:n;return(i&1?-s:s)+(i&2?-r:r)}function Hn(i,t,e){const n=Math.floor(i)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;i-=Math.floor(i),t-=Math.floor(t),e-=Math.floor(e);const o=ba(i),a=ba(t),c=ba(e),l=Ze[n]+s,h=Ze[l]+r,u=Ze[l+1]+r,d=Ze[n+1]+s,f=Ze[d]+r,g=Ze[d+1]+r;return Fi(Fi(Fi(_i(Ze[h]&15,i,t,e),_i(Ze[f]&15,i-1,t,e),o),Fi(_i(Ze[u]&15,i,t-1,e),_i(Ze[g]&15,i-1,t-1,e),o),a),Fi(Fi(_i(Ze[h+1]&15,i,t,e-1),_i(Ze[f+1]&15,i-1,t,e-1),o),Fi(_i(Ze[u+1]&15,i,t-1,e-1),_i(Ze[g+1]&15,i-1,t-1,e-1),o),a),c)}function dx(i,t,e,n=4){let s=0,r=.5;for(let o=0;o<n;o++)s+=r*Hn(i,t,e),i=i*2.03+1.7,t=t*2.03+9.2,e=e*2.03+3.1,r*=.5;return s}const wa=new A(1.32,.95,1.05),ei=.8,oi=new A(.25,.42,1).normalize(),Bh={normal:new A(.3,1,-.15).normalize(),d:.585},lr=0;function Fo(i){const t=1/Math.sqrt((i.x/wa.x)**2+(i.y/wa.y)**2+(i.z/wa.z)**2),e=dx(i.x*1.15+3,i.y*1.15,i.z*1.15,4)*.26+Hn(i.x*4.5,i.y*4.5+2,i.z*4.5)*.035;return t*(1+e)}const Vs=Fo(oi)*.93,zh=new A;function Cc(i,t){if(i.y<-ei||i.dot(oi)>Vs)return!1;const e=i.length();return e<1e-6?!0:(zh.copy(i).divideScalar(e),e<=Fo(zh))}function fx(i,t,e){const n=new A,s=Math.cos(t),r=Math.sin(t);let o=0,a=0;const c=.02;for(let l=c;l<3;l+=c){if(n.set(i,l*s,l*r),!Cc(n)){a=l;break}o=l}for(let l=0;l<18;l++){const h=(o+a)/2;n.set(i,h*s,h*r),Cc(n)?o=h:a=h}return o}function px(){const i=oi,t=new A(1,0,0).cross(i).normalize(),e=i.clone().cross(t);let n=new A,s=1/0;for(let r=-.6;r<=.6;r+=.01)for(let o=-.6;o<=.6;o+=.01){const a=i.clone().multiplyScalar(Vs).addScaledVector(t,r).addScaledVector(e,o);if(!Cc(a.clone().addScaledVector(i,-.01)))continue;const c=Math.abs(a.dot(Bh.normal)-Bh.d)+Math.abs(r)*.02;c<s&&(s=c,n=a)}return n}const dd=`
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
`,mx=`
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
${dd}
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
  // the rind is opaque (see TRANSMISSION_MASK_GLSL); 0.8 keeps the tone approved
  // in Phase 7, when ~45% of a darker backdrop still showed through it
  c *= 0.8;
  return c;
}
vec3 bumpNormal(vec3 surfPos, vec3 surfNorm, float h){
  vec3 sx=dFdx(surfPos), sy=dFdy(surfPos);
  vec3 R1=cross(sy,surfNorm), R2=cross(surfNorm,sx);
  float det=dot(sx,R1);
  vec3 grad=sign(det)*(dFdx(h)*R1+dFdy(h)*R2);
  return normalize(abs(det)*surfNorm-grad);
}
`,gx=`#include <color_fragment>
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
  diffuseColor.rgb = toLinear(col);`,_x=`#include <roughnessmap_fragment>
  roughnessFactor = mix(roughnessFactor, mix(0.9, 0.32, uWet), gRind);
  roughnessFactor = mix(roughnessFactor, 0.78, uRough);
  roughnessFactor = mix(roughnessFactor, 0.85, gMark);`,vx=`#include <normal_fragment_maps>
  // rind relief: broad weathering hollows plus fine grain, no worm-like ridges
  float hb = gRind*(0.45*snoise(vJ*6.)*bumpFade(vJ,6.) + 0.22*snoise(vJ*18.)*bumpFade(vJ,18.) + 0.3*snoise(vJ*60.)*bumpFade(vJ,60.))
           + uRough*(0.35*snoise(vJ*vec3(60.,8.,60.))*bumpFade(vJ,60.) + 0.2*snoise(vJ*140.)*bumpFade(vJ,140.))
           + gCrack*0.25;
  // hand-ground faces are never optically flat: a gentle undulation keeps highlights local
  float wave = uWave*(1.-gRind)*0.07*snoise(vJ*1.7+3.);
  normal = bumpNormal(-vViewPosition, normal, hb*uBump + wave);`,xx=`#include <emissivemap_fragment>
  float td = distance(vJ, uTorch.xyz);
  totalEmissiveRadiance += uTorch.w * gJade * vec3(0.75,1.0,0.8) * exp(-td*td/0.09) * mix(1.0, 0.25, gRind);
  // edge translucency: thin grazing edges let scattered light through
  float edge = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0);
  totalEmissiveRadiance += uEdgeGlow * gJade * edge * (1.0 - gRind) * (1.0 - 0.5*gCotton);
  // body glow: light that entered elsewhere and scatters back out, tinted by the jade
  // (approximation, not a volumetric model); cotton and cracks block it
  totalEmissiveRadiance += uInner * gJade * gJade * (1.0 - gRind) * (1.0 - 0.6*gCotton) * (1.0 - gCrack);`,yx=`
  material.transmission *= (1.-gRind)*(1.-0.45*gCotton)*(1.-0.6*gCrack)*(1.-gMark)*(1.-0.6*uRough);`,Mx=1.67,Ea=oi.clone().multiplyScalar(Vs);class Bn extends Gn{jade;morph;static field=new A(0,0,0);constructor(t={}){super({color:16777215,roughness:t.roughness??.3,transmission:t.transmission??.42,thickness:t.thickness??.6,ior:Mx,attenuationColor:new Lt(6004330),attenuationDistance:t.attenuationDistance??.7,specularIntensity:.7,clearcoat:t.clearcoat??0,clearcoatRoughness:.12}),this.morph=t.morph??!1;const e=s=>Array.from({length:4},(r,o)=>s?.[o]?new A(...s[o]):new A),n=s=>Array.from({length:4},(r,o)=>s?.[o]?new ie(...s[o]):new ie);this.jade={uRindAmt:{value:t.rind??1},uRough:{value:t.rough??0},uWet:{value:t.wet??0},uBump:{value:t.bump??.035},uGreen:{value:t.green??.12},uEdgeGlow:{value:t.edgeGlow??.18},uInner:{value:t.inner??.3},uField:{value:Bn.field},uWave:{value:t.wave??0},uMarks:{value:e(t.marks)},uMarkN:{value:t.marks?.length??0},uMarkSweep:{value:1},uPlans:{value:n(t.plans)},uPlanN:{value:t.plans?.length??0},uPlanSweep:{value:new ie(1,1,1,1)},uHoles:{value:[new A,new A]},uHoleN:{value:0},uKerfs:{value:e()},uKerfN:{value:0},uReveal:{value:1},uFlat:{value:1},uWin:{value:new ie(Ea.x,Ea.y,Ea.z,.95)},uSlot:{value:new ie(0,0,0,0)},uTorch:{value:new ie(0,0,0,0)}}}onBeforeCompile(t){Object.assign(t.uniforms,this.jade);const e=this.morph?`#define JADE_MORPH
attribute vec3 wpos; attribute vec3 wnormal;
`:"";t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${e}uniform float uFlat;
attribute vec3 jpos; attribute float rim; varying vec3 vJ; varying float vRim;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
#ifdef JADE_MORPH
objectNormal = normalize(mix(objectNormal, wnormal, uFlat));
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
vJ = jpos; vRim = rim;
#ifdef JADE_MORPH
transformed = mix(position, wpos, uFlat); vJ = mix(jpos, wpos, uFlat);
#endif`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+mx).replace("#include <color_fragment>",gx).replace("#include <roughnessmap_fragment>",_x).replace("#include <normal_fragment_maps>",vx).replace("#include <emissivemap_fragment>",xx).replace("#include <transmission_fragment>",Zt.transmission_fragment.replace("material.transmission = transmission;","material.transmission = transmission;"+yx))}customProgramCacheKey(){return this.morph?"jade-v4-morph":"jade-v4"}}const sr=new A;function gn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;sr.copy(t),sr[n]=0,sr.normalize();const l=.5*o/(o+a),h=1-sr.angleTo(i)/c;return Math.sign(sr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class fd extends xn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,c=new A,l=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new A,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=gn(g,c,"z","y",r,n),d[p+1]=1-gn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-gn(g,c,"z","y",r,n),d[p+1]=1-gn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-gn(g,c,"x","z",r,t),d[p+1]=gn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-gn(g,c,"x","z",r,t),d[p+1]=1-gn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-gn(g,c,"x","y",r,t),d[p+1]=1-gn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=gn(g,c,"x","y",r,t),d[p+1]=1-gn(g,c,"y","x",r,e);break}}}function ol(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ve;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=kh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=kh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function kh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new be(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function pd(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,x=a.length;y<x;y++){const v=a[y],R=i.attributes[v];c[v]=new R.constructor(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=i.morphAttributes[v];T&&(l[v]||(l[v]=[]),T.forEach((E,P)=>{const b=new E.array.constructor(E.count*E.itemSize);l[v][P]=new E.constructor(b,E.itemSize,E.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let y=0;y<r;y++){const x=n?n.getX(y):y;let v="";for(let R=0,T=a.length;R<T;R++){const E=a[R],P=i.getAttribute(E),b=P.itemSize;for(let M=0;M<b;M++)v+=`${~~(P[u[M]](x)*_+m)},`}if(v in e)h.push(e[v]);else{for(let R=0,T=a.length;R<T;R++){const E=a[R],P=i.getAttribute(E),b=i.morphAttributes[E],M=P.itemSize,L=c[E],z=l[E];for(let D=0;D<M;D++){const O=u[D],k=d[D];if(L[k](o,P[O](x)),b)for(let B=0,X=b.length;B<X;B++)z[B][k](o,b[B][O](x))}}e[v]=o,h.push(o),o++}}const p=i.clone();for(const y in i.attributes){const x=c[y];if(p.setAttribute(y,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),y in l)for(let v=0;v<l[y].length;v++){const R=l[y][v];p.morphAttributes[y][v]=new R.constructor(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}const Ke=128;function md(i){let t=i;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pc(i,t=!1,e=1){const n=new Uint8Array(Ke*Ke*4);for(let r=0;r<Ke;r++)for(let o=0;o<Ke;o++)i(o,r,n,(r*Ke+o)*4);const s=new Ku(n,Ke,Ke);return s.wrapS=s.wrapT=_o,s.repeat.set(e,e),s.magFilter=Ln,s.minFilter=xi,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=nn),s.needsUpdate=!0,s}function Gh(i,t){const e=md(17),n=Array.from({length:Ke},()=>e());return Pc((s,r,o,a)=>{const c=i+t*((n[r]-.5)*1.4+.3*Hn(s/16,r/2,.5));o[a]=o[a+1]=o[a+2]=Math.round(Te.clamp(c,0,1)*255),o[a+3]=255})}function gd(i,t,e=3){const n=md(23),s=new Float32Array(Ke*Ke);for(let u=0;u<s.length;u++)s[u]=n();const r=(u,d)=>s[(d+Ke)%Ke*Ke+(u+Ke)%Ke],o=new Lt(i),a=new Lt(t),c=new Lt,l=Pc((u,d,f,g)=>{const _=r(u,d);c.copy(a).lerp(o,_>.9?1:_<.06?0:.4+.25*_),f[g]=c.r*255,f[g+1]=c.g*255,f[g+2]=c.b*255,f[g+3]=255},!0,e),h=Pc((u,d,f,g)=>{const _=r(u+1,d)-r(u-1,d),m=r(u,d+1)-r(u,d-1),p=new A(-_,-m,1.4).normalize();f[g]=(p.x*.5+.5)*255,f[g+1]=(p.y*.5+.5)*255,f[g+2]=(p.z*.5+.5)*255,f[g+3]=255},!1,e);return{map:l,normalMap:h}}const Hh=gd(10132631,7237739,6),Tn=(i,t,e=0,n={})=>new Gn({color:i,roughness:t,metalness:e,...n}),nt={enamel:Tn(15460319,.42,0,{clearcoat:.35,clearcoatRoughness:.3}),sage:Tn(13226443,.5,0,{clearcoat:.2}),accent:Tn(3107663,.4,0,{clearcoat:.4}),steel:Tn(13159630,1,1,{roughnessMap:Gh(.3,.06)}),darkSteel:Tn(5922659,1,1,{roughnessMap:Gh(.42,.05)}),rubber:Tn(1974562,.85),brass:Tn(13214826,.3,1),grit:Tn(16777215,.95,0,{map:Hh.map,normalMap:Hh.normalMap,normalScale:new Y(.35,.35)}),seam:Tn(11117980,.6),trim:Tn(5988192,.45,0,{clearcoat:.3}),plinth:Tn(16184302,.6),glass:new Gn({color:16054520,roughness:.02,transparent:!0,opacity:.22,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1,depthWrite:!1}),waterSurface:new Gn({color:12573142,roughness:.08,transparent:!0,opacity:.55,clearcoat:1}),water:new je({color:13625070,roughness:.05,metalness:.1,transparent:!0,opacity:.7,depthWrite:!1})};function yn(i){return i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i}function Ft(i,t,e,n,s){const r=n<.012?1:n<.04?2:4;return yn(new Tt(new fd(i,t,e,r,n),s))}function Ot(i,t,e,n,s=64,r=!1){return yn(new Tt(new kn(i,t,e,s,1,r),n))}function Vh(i,t,e=96){return yn(new Tt(new Hs(i.map(([n,s])=>new Y(n,s)),e),t))}function Sr(i,t,e){const n=new td(i.map(s=>new A(...s)));return yn(new Tt(new il(n,64,t,12),e))}function xt(i,t,e,n){return i.position.set(t,e,n),i}function al(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Sx(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,`rgba(0,0,0,${t})`),s.addColorStop(.5,`rgba(0,0,0,${t*.4})`),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const r=new Tt(new Ai(i,i),new ri({map:new Io(e),transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.003,r.renderOrder=-1,r}function Ri(i){const t=new Map;for(const e of i.children){const n=e;if(!n.isMesh||n.isInstancedMesh||Array.isArray(n.material)||n.name||n.userData.info)continue;const s=t.get(n.material)??[];s.push(n),t.set(n.material,s)}for(const[e,n]of t){if(n.length<2)continue;const s=n.map(o=>{o.updateMatrix();const a=(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix);for(const c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&a.deleteAttribute(c);return a}),r=new Tt(ol(s),e);r.castShadow=n.some(o=>o.castShadow),r.receiveShadow=n.some(o=>o.receiveShadow);for(const o of n)i.remove(o);i.add(r)}}function Er(i,t,e,n,s=2){const r=[],[o,a,c]=n,l=Math.min(.09,t*.18);r.push(xt(Ft(i+.012,l,e+.012,.01,nt.trim),o,a-t/2+l/2,c));const h=.012,u=Math.min(.12,t*.16),d=a-t/2+l+u,f=a+t/2-u;if(f-d<.12)return r;const g=(_,m,p)=>{const y=(_==="z"?e:i)/2+.003,x=-m/2+u,v=(m-u*2)/p;for(let R=0;R<p;R++){const T=x+R*v+(R?.02:0),E=x+(R+1)*v-(R<p-1?.02:0),P=[[(T+E)/2,d,E-T,h],[(T+E)/2,f,E-T,h],[T,(d+f)/2,h,f-d],[E,(d+f)/2,h,f-d]];for(const[b,M,L,z]of P){const D=new Tt(new xn(_==="z"?L:.006,z,_==="z"?.006:L),nt.seam);D.position.set(_==="z"?o+b:o+y,M,_==="z"?c+y:c-b),r.push(D)}for(const[b,M]of[[T+.05,d+.05],[E-.05,d+.05],[T+.05,f-.05],[E-.05,f-.05]]){const L=Ot(.018,.018,.012,nt.steel,12);_==="z"?(L.rotation.x=Math.PI/2,L.position.set(o+b,M,c+y)):(L.rotation.z=Math.PI/2,L.position.set(o+y,M,c-b)),r.push(L)}}};return g("z",i,s),g("x",e,1),r}const en={bladeRadius:1.55,bladeZ:-.25,carriageTop:1.22,bladeParkedY:3.5,bladeDownY:1.22-.06+1.55};function bx(){const i=new Qt;i.name="slab-saw";const t=new Qt;t.userData.info="saw",i.add(t),t.add(xt(Ft(5.4,.9,3.4,.08,nt.enamel),0,.45,0)),t.add(xt(Ft(5.42,.08,3.42,.03,nt.accent),0,.87,0));const e=4.9,n=3;t.add(xt(Ft(e,.06,n,.02,nt.darkSteel),0,.93,0));for(const E of[n/2,-n/2])t.add(xt(Ft(e,.22,.05,.02,nt.steel),0,1.04,E));for(const E of[e/2,-e/2])t.add(xt(Ft(.05,.22,n,.02,nt.steel),E,1.04,0));const s=new Tt(new Ai(e-.1,n-.1),nt.waterSurface);s.rotation.x=-Math.PI/2,s.position.y=1.02,s.userData.info="coolant",t.add(s);for(const E of[-1.75,1.75]){const P=Ot(.05,.05,n-.1,nt.steel,24);P.rotation.x=Math.PI/2,P.position.set(E,1.1,0),t.add(P)}const r=new Qt;r.add(xt(Ft(4,.12,2.2,.03,nt.sage),0,1.16,0));for(const E of[-1.42,1.42])r.add(xt(Ft(.18,.55,.9,.03,nt.darkSteel),E,en.carriageTop+.27,0));i.add(r),t.add(xt(Ft(.5,4.6,.6,.06,nt.enamel),2.15,3.1,-1.35));const o=new Qt;o.userData.info="blade",i.add(o),o.add(xt(Ft(2.3,.45,.55,.06,nt.enamel),1.15,0,-0));const a=Ot(.36,.36,.9,nt.sage);a.rotation.z=Math.PI/2,a.position.set(1.5,0,0),o.add(a);const c=Ot(.38,.38,.06,nt.accent);c.rotation.z=Math.PI/2,c.position.set(1.08,0,0),o.add(c);const l=Ot(.06,.06,1.2,nt.steel);l.rotation.z=Math.PI/2,l.position.set(.5,0,0),o.add(l);const h=new Qt,u=en.bladeRadius,d=Ot(u-.03,u-.03,.018,nt.steel,160);d.rotation.z=Math.PI/2,h.add(d);const f=44,g=new yi(new fd(.022,.05,.16,2,.006),nt.grit,f),_=new Ht,m=new rn,p=new on;for(let E=0;E<f;E++){const P=E/f*Math.PI*2;m.setFromEuler(p.set(-P,0,0)),_.compose(new A(0,Math.cos(P)*u,Math.sin(P)*u),m,new A(1,1,1)),g.setMatrixAt(E,_)}g.castShadow=!0,h.add(g);const y=Ot(.28,.28,.1,nt.darkSteel);y.rotation.z=Math.PI/2,h.add(y);for(let E=0;E<6;E++){const P=E/6*Math.PI*2,b=Ot(.03,.03,.13,nt.steel,12);b.rotation.z=Math.PI/2,b.position.set(0,Math.cos(P)*.18,Math.sin(P)*.18),h.add(b)}o.add(h);const x=nt.accent.clone();x.side=sn;const v=yn(new Tt(new kn(u+.14,u+.14,.3,96,1,!0,Math.PI*.12,Math.PI*.76),x));v.rotation.z=Math.PI/2,o.add(v);const R=[];for(const E of[-1,1]){const P=new Ae;P.position.set(E*.12,-.3,u*.55),o.add(Sr([[E*.5,1,.3],[E*.36,.6,u*.55-.2],[E*.12,-.2,u*.55]],.035,nt.rubber));const b=Ot(.03,.02,.14,nt.brass,16);b.position.copy(P.position),b.rotation.x=.6,o.add(b,P),R.push(P)}o.position.set(0,en.bladeParkedY,en.bladeZ);const T=Ft(.9,.5,.08,.03,nt.sage);T.position.set(-1.9,.55,1.72),t.add(T);for(const[E,P]of[[3981946,-.25],[14701373,0],[15909198,.25]]){const b=Ot(.06,.06,.05,new je({color:E,emissive:E,emissiveIntensity:.4}),24);b.rotation.x=Math.PI/2,b.position.set(-1.9+P,.6,1.77),t.add(b)}for(const[E,P]of[[-2.5,-1.5],[2.5,-1.5],[-2.5,1.5],[2.5,1.5]])t.add(xt(Ot(.12,.15,.08,nt.rubber,24),E,.04,P));return t.add(...Er(5.4,.9,3.4,[0,.45,0],3)),Ri(t),{root:i,blade:o,bladeDisc:h,carriage:r,nozzles:R,pickables:[t,o]}}const Me={x0:.17,x1:.31},ni=Me.x1-Me.x0,cl=(Me.x0+Me.x1)/2,ke=[{cy:.02,cz:.45},{cy:.02,cz:-.45}],Be={ri:.28,ro:.41},_d=i=>({xc:cl,cy:ke[i].cy,cz:ke[i].cz}),Wh=[{ri:Be.ri+.006,ro:Be.ro-.006,t:ni-.004,e:.12},{ri:.292,ro:.392,t:.112,e:.64},{ri:.296,ro:.388,t:.104,e:.82},{ri:.298,ro:.386,t:.1,e:1}];function wx(i){const t=[1,.85,.45,0],e=Math.min(2,Math.floor(i)),n=Math.min(1,Math.max(0,i-e));return{rough:t[e]+(t[e+1]-t[e])*n,clearcoat:Math.max(0,i-2)}}function Ss(i){const t=Math.min(2,Math.max(0,Math.floor(i))),e=Math.min(1,Math.max(0,i-t)),n=Wh[t],s=Wh[t+1],r=(o,a)=>o+(a-o)*e;return{ri:r(n.ri,s.ri),ro:r(n.ro,s.ro),t:r(n.t,s.t),e:r(n.e,s.e)}}const Xh=new A,qh=new rn,Yh=new A,jh=new A,$h=new rn,Zh=new A;function rr(i,t){t.decompose(i.position,i.quaternion,i.scale)}const gr=(i,t,e)=>new Ht().makeTranslation(i,t,e),Mi=i=>new Ht().makeTranslation(i.x,i.y,i.z),Ex=i=>new Ht().makeRotationX(i),qi=i=>new Ht().makeRotationY(i),vd=i=>new Ht().makeRotationZ(i),Tx=i=>new Ht().makeScale(i,i,i);function xe(...i){const t=new Ht;for(const e of i)t.multiply(e);return t}function An(i,t,e,n=0){i.decompose(Xh,qh,Yh),t.decompose(jh,$h,Zh);const s=Xh.clone().lerp(jh,e);s.y+=Math.sin(Math.PI*e)*n;const r=qh.clone().slerp($h,e),o=Yh.clone().lerp(Zh,e);return new Ht().compose(s,r,o)}function Ta(i){return new A().setFromMatrixPosition(i)}function ye(i,t,e,n){return new A(t,e,n).applyMatrix4(i)}function xd(i,t=0){const e=i.attributes.position.count;return i.attributes.jpos||i.setAttribute("jpos",i.attributes.position.clone()),i.attributes.rim||i.setAttribute("rim",new Xt(new Float32Array(e).fill(t),1)),i}function Jh(i,t=36){let e=new wr(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=pd(e);const n=e.attributes.position,s=new Float32Array(n.count),r=new A;for(let o=0;o<n.count;o++){r.fromBufferAttribute(n,o).normalize(),r.multiplyScalar(Fo(r)),r.y<-ei&&(r.y=-ei-(r.y+ei)*.04);let a=1;if(i){const c=r.dot(oi)-Vs;c>0&&r.addScaledVector(oi,-c),a=1-Te.smoothstep(c,-.03,.02)}s[o]=a,n.setXYZ(o,r.x,r.y,r.z)}return e.computeVertexNormals(),e.setAttribute("rim",new be(s,1)),xd(e)}function Ax(i,t,e,n=22,s=160,r=.05){const o=[],a=[],c=new A;for(let g=0;g<s;g++){const _=g/s*Math.PI*2;o[g]=fx(i,_),c.set(i,o[g]*Math.cos(_),o[g]*Math.sin(_)),a[g]=c.dot(oi)>Vs-.02}const l=[i,0,0],h=[0],u=[];for(let g=1;g<=n;g++){const _=1-Math.pow(1-g/n,1.6);for(let m=0;m<s;m++){const p=m/s*Math.PI*2,y=o[m]*_;l.push(i,y*Math.cos(p),y*Math.sin(p)),h.push(a[m]?0:Te.smoothstep(_,1-r,1-r*.35))}}const d=(g,_)=>1+(g-1)*s+_%s;for(let g=0;g<s;g++)t>0?u.push(0,d(1,g),d(1,g+1)):u.push(0,d(1,g+1),d(1,g));for(let g=1;g<n;g++)for(let _=0;_<s;_++){const m=d(g,_),p=d(g,_+1),y=d(g+1,_+1),x=d(g+1,_);t>0?u.push(m,x,y,m,y,p):u.push(m,y,x,m,p,y)}const f=new ve;return f.setAttribute("position",new Xt(l,3)),f.setAttribute("rim",new Xt(h,1)),f.setIndex(u),f.computeVertexNormals(),xd(f)}function Kh(i=36){const t=Jh(!1,i),e=Jh(!0,i);return t.setAttribute("wpos",e.attributes.position.clone()),t.setAttribute("wnormal",e.attributes.normal.clone()),t.setAttribute("rim",e.attributes.rim.clone()),e.dispose(),t}function yd(i,t=0){return new Ht().makeTranslation(i.xc+t,i.cy,i.cz).multiply(new Ht().makeRotationZ(-Math.PI/2))}function Rx(i,t=96){const e=(i.ri+i.ro)/2,n=(i.ro-i.ri)/2,s=i.t/2,r=[];for(let o=0;o<=t;o++){const a=-Math.PI/2+o/t*Math.PI*2,c=Math.cos(a),l=Math.sin(a);r.push([e+n*Math.sign(c)*Math.abs(c)**i.e,s*Math.sign(l)*Math.abs(l)**i.e])}return r}class Aa{constructor(t,e,n){this.n=t,this.segs=e,this.frame=n;const s=(t+1)*(e+1);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3),this.jp=new Float32Array(s*3);const r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){const c=o*(t+1)+a,l=c+1,h=(o+1)*(t+1)+a,u=h+1;r.push(c,h,l,l,h,u)}this.geometry.setIndex(r),this.geometry.setAttribute("position",new be(this.pos,3)),this.geometry.setAttribute("normal",new be(this.nor,3)),this.geometry.setAttribute("jpos",new be(this.jp,3)),this.geometry.setAttribute("rim",new be(new Float32Array(s),1))}geometry=new ve;pos;nor;jp;update(t){const{n:e,segs:n,frame:s}=this;for(let r=0;r<=n;r++){const o=r/n*Math.PI*2,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=e;l++){const[h,u]=t[l],[d,f]=t[Math.max(0,l-1)],[g,_]=t[Math.min(e,l+1)];let m=_-f,p=-(g-d);const y=Math.hypot(m,p)||1;m/=y,p/=y;const x=(r*(e+1)+l)*3,v=h*a,R=h*c;this.pos[x]=v,this.pos[x+1]=u,this.pos[x+2]=R,this.nor[x]=m*a,this.nor[x+1]=p,this.nor[x+2]=m*c,this.jp[x]=s.xc+u,this.jp[x+1]=s.cy-v,this.jp[x+2]=s.cz+R}}for(const r of["position","normal","jpos"])this.geometry.getAttribute(r).needsUpdate=!0;this.geometry.computeBoundingSphere()}}function Cx(i,t,e=24){const n=[],s=[[1e-4,-t/2],[i-.004,-t/2],[i,-t/2+.004],[i,t/2-.004],[i-.004,t/2],[1e-4,t/2]],r=s.slice(1).map((a,c)=>Math.hypot(a[0]-s[c][0],a[1]-s[c][1])),o=r.reduce((a,c)=>a+c,0);for(let a=0;a<=e;a++){let c=a/e*o,l=0;for(;l<r.length-1&&c>r[l];)c-=r[l],l++;const h=Math.min(1,c/r[l]);n.push([s[l][0]+(s[l+1][0]-s[l][0])*h,s[l][1]+(s[l+1][1]-s[l][1])*h])}return n}function Px(i,t,e,n=.04){if(t===null&&e===null)return i;const s=i.getAttribute("position"),r=i.getAttribute("wpos")??s,o=i.getIndex(),a=[],c=h=>[s.getX(h),r.getX(h)];for(let h=0;h<o.count;h+=3){const u=[o.getX(h),o.getX(h+1),o.getX(h+2)],d=u.flatMap(c),f=Math.min(...d),g=Math.max(...d);(t===null||g>=t-n)&&(e===null||f<=e+n)&&a.push(...u)}const l=new ve;for(const[h,u]of Object.entries(i.attributes))l.setAttribute(h,u);return l.setIndex(a),l.computeBoundingSphere(),l}const Md={thickness:1.4,attenuationDistance:.38,transmission:.62,roughness:.2,wave:1,morph:!0},Lx={thickness:1.2,attenuationDistance:.6,transmission:.56,roughness:.38,wave:.4},Ra={thickness:ni,attenuationDistance:.35,transmission:.6,roughness:.38,wave:.3},Ca=new Map;function Qh(i,t){const e=`${i}:${t}`;return Ca.has(e)||Ca.set(e,Ax(i,t)),Ca.get(e)}class ys{constructor(t,e,n,s=Lx){this.lo=e,this.hi=n,this.shell=new Tt(Px(t,e,n),new Bn(Md)),this.shell.material.clipShadows=!0,this.shell.userData.info="stone",this.group.add(this.shell),e!==null&&(this.local.push(new Un(new A(1,0,0),-e)),this.caps.push(new Tt(Qh(e,-1),new Bn(s)))),n!==null&&(this.local.push(new Un(new A(-1,0,0),n)),this.caps.push(new Tt(Qh(n,1),new Bn(s))));for(const r of this.caps)r.userData.info="cutface",this.group.add(r);for(const r of[this.shell,...this.caps])r.castShadow=r.receiveShadow=!0;this.shell.material.clippingPlanes=this.local.map(r=>r.clone()),this.group.visible=!1}group=new Qt;shell;caps=[];local=[];updateClipping(){this.group.visible&&(this.shell.updateMatrixWorld(),this.local.forEach((t,e)=>this.shell.material.clippingPlanes[e].copy(t).applyMatrix4(this.shell.matrixWorld)))}}class Ix{intact;intactLow;intactGroup=new Qt;intactTransmission;A;B;B1;BR;S;B2;holeWall;core;bangleGroup=new Qt;bangle;bangleShape;shapeValue=-1;all;constructor(){const t=Kh();this.intact=new Tt(t,new Bn({...Md,thickness:1.6})),this.intact.castShadow=this.intact.receiveShadow=!0,this.intact.userData.info="stone",this.intactGroup.add(this.intact),this.intactTransmission=this.intact.material.transmission,this.intactLow=new Tt(Kh(14),this.intact.material),this.intactLow.castShadow=this.intactLow.receiveShadow=!0,this.intactLow.userData.info="stone",this.intactLow.visible=!1,this.intactGroup.add(this.intactLow),this.A=new ys(t,null,lr),this.B=new ys(t,lr,null),this.B1=new ys(t,lr,Me.x0),this.BR=new ys(t,Me.x0,null),this.S=new ys(t,Me.x0,Me.x1,Ra),this.B2=new ys(t,Me.x1,null);for(const r of this.S.caps)r.userData.info="slab";this.S.shell.userData.info="slab";const e=_d(0),n=new Aa(1,160,e);n.update([[Be.ro,ni/2],[Be.ro,-ni/2]]),this.holeWall=new Tt(n.geometry,new Bn({...Ra,rind:0})),this.holeWall.applyMatrix4(yd(e));const s=new Aa(24,120,e);s.update(Cx(Be.ri-.008,ni)),this.core=new Tt(s.geometry,new Bn({...Ra,rind:0})),this.core.userData.info="core";for(const r of[this.holeWall,this.core])r.castShadow=r.receiveShadow=!0,r.visible=!1,this.S.group.add(r);this.bangleShape=new Aa(96,220,e),this.bangle=new Tt(this.bangleShape.geometry,new Bn({rind:0,thickness:.09,attenuationDistance:.18,transmission:.55,roughness:.1,bump:.02,edgeGlow:.22})),this.bangle.castShadow=this.bangle.receiveShadow=!0,this.bangle.userData.info="bangle",this.bangleGroup.add(this.bangle),this.bangleGroup.visible=!1,this.setBangleShape(0),this.all=[this.intactGroup,...this.clipPieces.map(r=>r.group),this.bangleGroup]}get clipPieces(){return[this.A,this.B,this.B1,this.BR,this.S,this.B2]}get pickables(){return[this.intact,this.intactLow,...this.clipPieces.flatMap(t=>[t.shell,...t.caps]),this.core,this.bangle]}hideAll(){this.intactGroup.visible=!1;for(const e of this.clipPieces)e.group.visible=!1;this.bangleGroup.visible=!1,this.core.visible=this.holeWall.visible=!1;const t=this.intact.material.jade;for(const e of[this.intact,this.B.shell,this.BR.shell])e.material.jade.uSlot.value.w=0,e.material.jade.uPlanN.value=0;t.uPlanN.value=0,t.uTorch.value.w=0,t.uWet.value=0;for(const e of this.S.caps){const n=e.material.jade;n.uMarkN.value=0,n.uKerfN.value=0,n.uHoleN.value=0}}setSlot(t,e,n){t.material.jade.uSlot.value.set(e,.012,n??0,n===null?0:1)}setWindow(t,e){const n=this.intact.material.jade;n.uReveal.value=t,n.uFlat.value=e}setWet(t){this.intact.material.jade.uWet.value=t}setIntactOpaque(t){this.intact.material.transmission=t?0:this.intactTransmission}setIntactLod(t){this.intact.visible=!t,this.intactLow.visible=t}setPlanLines(t){this.setLinesOn(this.intact,[lr,Me.x0,Me.x1],t)}setLinesOn(t,e,n){const s=t.material.jade;e.forEach((r,o)=>s.uPlans.value[o].set(1,0,0,r)),s.uPlanN.value=e.length,s.uPlanSweep.value.set(n[0]??0,n[1]??0,n[2]??0,0)}setMarks(t,e=2){const n=[];for(let s=0;s<e;s++)n.push([ke[s].cy,ke[s].cz,Be.ro],[ke[s].cy,ke[s].cz,Be.ri]);for(const s of this.S.caps){const r=s.material.jade;n.forEach((o,a)=>r.uMarks.value[a].set(...o)),r.uMarkN.value=n.length,r.uMarkSweep.value=t}}setKerfs(t,e){for(const n of this.S.caps){const s=n.material.jade;let r=0;t&&s.uKerfs.value[r++].set(ke[0].cy,ke[0].cz,Be.ro),e&&s.uKerfs.value[r++].set(ke[0].cy,ke[0].cz,Be.ri),s.uKerfN.value=r}}setHole(t){for(const e of this.S.caps){const n=e.material.jade;n.uHoles.value[0].set(ke[0].cy,ke[0].cz,Be.ro),n.uHoleN.value=t?1:0}this.holeWall.visible=t}setBangleShape(t){Math.abs(t-this.shapeValue)>1e-4&&(this.bangleShape.update(Rx(Ss(t))),this.shapeValue=t);const e=wx(t),n=this.bangle.material;n.jade.uRough.value=e.rough,n.roughness=.1+.55*e.rough,n.clearcoat=e.clearcoat}updateClipping(){for(const t of this.clipPieces)t.updateClipping()}}const tu=yd(_d(0)),or=120,Pa=140;class ro{object=new Qt;drops;mist;seeds;m=new Ht;q=new rn;up=new A(0,1,0);p=new A;v=new A;s=new A;constructor(){this.drops=new yi(new Jc(.013,.08,2,6),nt.water,or+Pa),this.drops.frustumCulled=!1,this.drops.userData.info="coolant";const t=al(7);this.seeds=new Float32Array((or+Pa)*4).map(()=>t());const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,0.5)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.mist=new Ju(new jc({map:new Io(e),depthWrite:!1,transparent:!0})),this.object.add(this.drops,this.mist)}update(t,e,n,s){if(this.object.visible=e>.01,!this.object.visible)return;const r=Math.round(or*e);let o=0;for(let l=0;l<r;l++){const h=this.seeds.subarray(l*4,l*4+4),u=n[l%n.length],d=(t*1.6+h[0])%1;this.v.subVectors(s,u),this.p.copy(u).addScaledVector(this.v,d),this.p.y-=Math.sin(d*Math.PI)*.06,this.p.x+=(h[1]-.5)*.05*d,this.p.z+=(h[2]-.5)*.05*d,this.q.setFromUnitVectors(this.up,this.v.normalize()),this.m.compose(this.p,this.q,this.s.set(1,1+h[3],1)),this.drops.setMatrixAt(o++,this.m)}const a=Math.round(Pa*e);for(let l=0;l<a;l++){const h=this.seeds.subarray((or+l)*4,(or+l)*4+4),u=(t*1.3+h[0])%1;this.v.set((h[1]-.5)*1.6,.6+h[2]*1.2,.8+h[3]*1.4),this.p.copy(s).addScaledVector(this.v,u*.6),this.p.y-=2.4*u*u*.36,this.v.y-=4.8*u*.6,this.q.setFromUnitVectors(this.up,this.v.normalize());const d=.6+(1-u);this.m.compose(this.p,this.q,this.s.set(.7,d,.7)),this.drops.setMatrixAt(o++,this.m)}this.drops.count=o,this.drops.instanceMatrix.needsUpdate=!0,this.mist.position.copy(s).add(this.s.set(0,.1,.25));const c=.9+.08*Math.sin(t*3);this.mist.scale.set(c,c*.7,1),this.mist.material.opacity=.6*e}}function Dx(i,t){const e=new Qt,n=.03;return e.add(Vh([[.001,0],[i-n,0],[i,n],[i,t-n*2],[i-n*2,t],[.001,t]],nt.plinth,128)),e.add(Vh([[i*.995,t-.015],[i*1.005,t-.015],[i*1.005,t-.005],[i*.995,t-.005]],nt.sage,128)),e.userData.top=t,e}function Ux(){const i=new Qt,t=yn(new Tt(new nl(.32,.035,24,96),nt.brass)),e=yn(new Tt(new kn(.31,.31,.03,64),nt.glass));e.rotation.x=Math.PI/2;const n=Ot(.04,.05,.16,nt.brass);n.position.y=-.4;const s=Ot(.055,.045,.85,new Gn({color:11109731,roughness:.75}));return s.position.y=-.88,i.add(t,e,n,s),i}function Nx(){const i=new Qt,t=Ot(.07,.07,.9,nt.darkSteel);t.rotation.z=Math.PI/2;const e=Ot(.11,.075,.2,nt.darkSteel);e.rotation.z=-Math.PI/2,e.position.x=.54;const n=Ot(.075,.075,.25,nt.rubber,24);n.rotation.z=Math.PI/2,n.position.x=-.15;const s=Ot(.095,.095,.01,new ri({color:16776170}));return s.rotation.z=Math.PI/2,s.position.x=.645,i.add(t,e,n,s),i}function Fx(i,t=1.15,e=.62){const n=document.createElement("canvas");n.width=720,n.height=Math.round(720*e/t);const s=n.getContext("2d");s.fillStyle="#fbfaf6",s.fillRect(0,0,n.width,n.height),s.strokeStyle="#d9d6cf",s.lineWidth=6,s.strokeRect(3,3,n.width-6,n.height-6),s.fillStyle="#2f6b4f",s.fillRect(40,44,10,70),i.forEach((h,u)=>{s.font=`${h.w??500} ${h.s}px "Noto Sans SC", "PingFang SC", "WenQuanYi Zen Hei", sans-serif`,s.fillStyle=h.c??"#222826",s.fillText(h.t,70,90+u*66)});const r=new Io(n);r.colorSpace=nn,r.anisotropy=8;const o=new je({map:r,roughness:.7}),a=new Tt(new xn(t,e,.012),[nt.enamel,nt.enamel,nt.enamel,nt.enamel,o,nt.enamel]);a.castShadow=!0,a.rotation.x=-.25;const c=yn(new Tt(new xn(.06,e*.7,.3),nt.sage));c.position.set(0,-e*.25,-.12),c.rotation.x=.2;const l=new Qt;return l.add(a,c),l}const Ox=`
uniform float uTop; uniform vec3 uPond;
varying vec3 vLP; varying vec3 vLN; varying float vAo; varying float vRoad;
float tRock, tGrass, tRoad, tWet, tRough;
${dd}
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
`,Bx=`#include <color_fragment>
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
  diffuseColor.rgb = lin3(col);`,zx=`#include <roughnessmap_fragment>
  roughnessFactor = mix(mix(0.96, 0.88, tRock), 0.92, tRoad);
  roughnessFactor = mix(roughnessFactor, 0.42, tWet);`,kx=`#include <normal_fragment_maps>
  float hb = tRock*(0.5*snoise(P*vec3(7.,22.,7.))*bumpFade(P,22.) + 0.35*snoise(P*vec3(18.,55.,18.))*bumpFade(P,55.))
           + (1.-tRock)*(1.-tRoad)*0.4*snoise(P*60.)*bumpFade(P,60.)
           + tGrass*0.4*snoise(P*28.)*bumpFade(P,28.);
  normal = tBump(-vViewPosition, normal, hb*0.012);`,Gx=`#include <aomap_fragment>
  reflectedLight.indirectDiffuse *= vAo;
  reflectedLight.indirectSpecular *= vAo;
  reflectedLight.directDiffuse *= mix(1.0, vAo, 0.45);`;class Hx extends je{uniformsT;constructor(t,e=ii){super({color:16777215,roughness:.95,side:e}),this.uniformsT={uTop:{value:t.top},uPond:{value:new A(...t.pond)}}}onBeforeCompile(t){Object.assign(t.uniforms,this.uniformsT),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aAo; attribute float aRoad; varying vec3 vLP; varying vec3 vLN; varying float vAo; varying float vRoad;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vLN = objectNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position; vAo = aAo; vRoad = aRoad;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+Ox).replace("#include <color_fragment>",Bx).replace("#include <roughnessmap_fragment>",zx).replace("#include <normal_fragment_maps>",kx).replace("#include <aomap_fragment>",Gx)}customProgramCacheKey(){return"terrain-v1"}}const Sd=new je({vertexColors:!0,roughness:.92,flatShading:!1}),eu=new je({vertexColors:!0,roughness:.85}),Vx=new je({color:7034436,roughness:.9}),Wx=new Gn({color:7309952,roughness:.06,metalness:0,transparent:!0,opacity:.9,clearcoat:1,clearcoatRoughness:.05}),qe=new Gn({color:14263871,roughness:.42,clearcoat:.35,clearcoatRoughness:.35}),un=new Gn({color:3882302,roughness:.55,clearcoat:.2}),mo=new je({color:4867133,roughness:.92,metalness:.25}),Xx=new je({color:14277854,roughness:.14,metalness:1}),hr=new je({color:10132636,roughness:.35,metalness:1}),bd=new Gn({color:2371631,roughness:.05,metalness:.1,clearcoat:1,clearcoatRoughness:.03});function ki(i,t,e,n=.006){const s=new Do(i.map(([a,c])=>new Y(a,c))),r=new tl(s,{depth:t-n*2,bevelEnabled:!0,bevelSize:n,bevelThickness:n,bevelSegments:2,curveSegments:10});r.translate(0,0,-(t-n*2)/2),r.computeVertexNormals();const o=new Tt(r,e);return o.castShadow=o.receiveShadow=!0,o}function La(i,t,e,n,s){const r=Ot(n,n,s,hr,16);return r.rotation.x=Math.PI/2,r.position.set(i,t,e),r}function oo(i,t,e,n,s,r){return Array.from({length:r+1},(o,a)=>{const c=n+(s-n)*a/r;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function ao(i,t,e,n,s,r){const o=new Qt;o.position.set(...t),i.add(o);const a=_=>{const m=Math.cos(_),p=Math.sin(_);return new Y(e.position.x+m*n[0]-p*n[1]-t[0],e.position.y+p*n[0]+m*n[1]-t[1])};let c=1/0,l=0;for(let _=0;_<=24;_++){const m=a(s[0]+(s[1]-s[0])*_/24).length();c=Math.min(c,m),l=Math.max(l,m)}const h=c*.92,u=Math.max(l-h+.02,c*.5),d=Ot(r,r,h,qe,16);d.rotation.z=-Math.PI/2,d.position.x=h/2;const f=Ot(r*1.18,r*1.18,.014,qe,16);f.rotation.z=-Math.PI/2,f.position.x=h-.007;const g=Ot(r*.55,r*.55,u,Xx,12);return g.rotation.z=-Math.PI/2,g.name="rod",o.add(d,f,g),Ri(o),()=>{const _=a(e.rotation.z);o.rotation.z=Math.atan2(_.y,_.x),g.position.x=_.length()-u/2}}const qx=new A(.12,.04,.11);function Yx(){const i=new Qt,t=new xn(.03,.016,.12),e=.062,n=.3,s=.068,r=2*n*2+2*Math.PI*e,o=48,a=r/o,c=new yi(t,mo,o*2),l=new Ht,h=new rn,u=new on,d=new A,f=new A(1,1,1);let g=0;for(const L of[-.2,.2]){for(let z=0;z<o;z++){let D=z*a,O,k,B;if(D<2*n)O=-n+D,k=s+e,B=0;else if((D-=2*n)<Math.PI*e){const X=Math.PI/2-D/e;O=n+Math.cos(X)*e,k=s+Math.sin(X)*e,B=X-Math.PI/2}else if((D-=Math.PI*e)<2*n)O=n-D,k=s-e,B=Math.PI;else{D-=2*n;const X=-Math.PI/2-D/e;O=-n+Math.cos(X)*e,k=s+Math.sin(X)*e,B=X-Math.PI/2}h.setFromEuler(u.set(0,0,B)),c.setMatrixAt(g++,l.compose(d.set(O,k,L),h,f))}i.add(xt(Ft(2*n,.07,.07,.015,mo),0,s,L));for(const z of[-n,n]){const D=Ot(.05,.05,.085,un,20);D.rotation.x=Math.PI/2,D.position.set(z,s,L),i.add(D)}for(let z=0;z<4;z++){const D=Ot(.022,.022,.08,hr,12);D.rotation.x=Math.PI/2,D.position.set(-.18+z*.12,s-.035,L),i.add(D)}}c.castShadow=c.receiveShadow=!0,i.add(c),i.add(xt(Ft(.3,.06,.34,.015,mo),0,.12,0)),i.add(xt(Ot(.13,.13,.04,un,32),0,.17,0));const _=new Qt;_.position.y=.2,i.add(_),_.add(xt(Ft(.62,.04,.44,.012,un),-.04,.02,0)),_.add(xt(Ft(.34,.16,.42,.025,qe),-.17,.12,0));for(let L=0;L<5;L++)_.add(xt(Ft(.012,.004,.16,.002,un),-.27+L*.03,.202,-.08));_.add(xt(Ot(.012,.012,.07,un,12),-.1,.235,-.15));const m=ki([...oo(-.33,0,.21,Math.PI*.62,Math.PI*1.38,14),[-.31,-.2],[-.31,.2]],.15,un,.01);m.rotation.x=-Math.PI/2,m.position.set(.07,.12,0),_.add(m);const p={add:(...L)=>{for(const z of L)z.position.add(qx),_.add(z)}};p.add(xt(Ft(.21,.07,.18,.015,qe),0,.035,0)),p.add(xt(Ft(.2,.17,.17,.02,bd),0,.15,0));for(const[L,z]of[[.095,.08],[.095,-.08],[-.095,.08],[-.095,-.08]])p.add(xt(Ft(.018,.17,.018,.005,un),L,.15,z));p.add(xt(Ft(.23,.02,.19,.008,qe),.005,.245,0));for(const L of[-.3,-.17,-.04])_.add(xt(Ot(.004,.004,.06,hr,6),L,.23,-.2));_.add(xt(Ft(.28,.008,.008,.003,hr),-.17,.26,-.2));for(const L of[-.12,-.04])_.add(xt(Ft(.12,.12,.012,.004,un),.17,.12,L));const y=new Qt;y.position.set(.18,.18,-.08),_.add(y),y.add(ki([[-.035,-.035],[.3,.035],[.67,-.025],[.67,.035],[.31,.105],[-.035,.035]],.07,qe,.008)),y.add(La(0,0,0,.018,.1),La(.64,0,0,.016,.09));const x=new Qt;x.position.set(.64,0,0),y.add(x),x.add(ki([[-.08,.02],[-.06,.05],[.5,.02],[.5,-.022],[-.03,-.035],[-.08,-.01]],.055,qe,.007)),x.add(La(.48,0,0,.014,.08));const v=new Qt;v.position.set(.48,0,0),x.add(v);const R=[.07,.03],T=oo(R[0],R[1],.1,Math.PI*.95,Math.PI*2.06,20),E=oo(R[0],R[1],.088,Math.PI*2.06,Math.PI*.95,20);v.add(ki([...T,...E],.15,un,.004));for(const L of[-.075,.075])v.add(xt(ki([...oo(R[0],R[1],.1,Math.PI*.95,Math.PI*2.06,20),[0,.07]],.01,qe,.003),0,0,L));v.add(xt(Ft(.05,.03,.06,.008,un),-.01,.05,0));const P=T[T.length-1];for(let L=0;L<4;L++){const z=ki([[-.012,0],[.012,0],[.004,.034],[-.004,.034]],.022,hr,.003);z.position.set(P[0]-.004,P[1]-.004,-.054+L*.036),z.rotation.z=.12,v.add(z)}const b=[ao(_,[.27,.07,-.115],y,[.29,.03],[.22,.85],.016),ao(_,[.27,.07,-.045],y,[.29,.03],[.22,.85],.016),ao(y,[.3,.1,0],x,[-.07,.04],[-1.55,-1.15],.015),ao(x,[.05,.035,0],v,[-.015,.06],[-1.1,.25],.012)];for(const L of[i,_,y,x,v])Ri(L);const M=()=>{for(const L of b)L()};return M(),{root:i,boom:y,stick:x,bucket:v,sync:M}}const jx=new je({color:2302756,roughness:.88});function $x(i,t){const e=[],n=t*.32;for(const[r,o,a]of[[-Math.PI/2,i-n,-t/2+n],[0,i-n,t/2-n]])for(let c=0;c<=6;c++){const l=r+c/6*(Math.PI/2);e.push(new Y(o+Math.cos(l)*n,a+Math.sin(l)*n))}e.unshift(new Y(i*.62,-t/2)),e.push(new Y(i*.62,t/2));const s=new Hs(e,28);return s.rotateX(Math.PI/2),s}function Zx(){const i=new Qt,t=$x(.085,.065);for(const[c,l]of[[.27,.15],[.27,-.15],[-.2,.15],[-.2,-.15],[-.2,.08],[-.2,-.08]]){const h=new Tt(t,jx);h.position.set(c,.085,l),h.castShadow=h.receiveShadow=!0,i.add(h);const u=Ot(.045,.045,.067,qe,16);u.rotation.x=Math.PI/2,u.position.set(c,.085,l),i.add(u)}i.add(xt(Ft(.72,.05,.16,.012,mo),.02,.15,0)),i.add(xt(Ft(.16,.13,.26,.02,qe),.31,.24,0)),i.add(xt(Ft(.012,.08,.16,.004,un),.392,.235,0)),i.add(xt(Ft(.18,.015,.34,.005,un),.3,.31,0)),i.add(xt(Ft(.12,.12,.12,.015,bd),.3,.375,.09)),i.add(xt(Ft(.13,.02,.13,.006,qe),.3,.44,.09));for(const c of[.033,.147])i.add(xt(Ft(.12,.12,.012,.004,qe),.3,.375,c));const e=.19;i.add(xt(Ft(.5,.025,.34,.008,qe),-.12,e,0));for(const c of[-.165,.165]){i.add(xt(ki([[-.37,0],[.13,0],[.13,.17],[-.33,.17]],.014,qe,.004),0,e,c));for(const l of[-.25,-.12,.01])i.add(xt(Ft(.018,.16,.014,.004,un),l,e+.085,c+Math.sign(c)*.012))}i.add(xt(Ft(.02,.2,.34,.006,qe),.135,e+.1,0)),i.add(xt(Ft(.16,.012,.34,.004,qe),.215,e+.205,0));const n=al(9),s=new yi(Dc().boulder,Sd,14),r=new Ht,o=new rn,a=new Lt;for(let c=0;c<14;c++){const l=.04+n()*.03;o.setFromEuler(new on(n()*3,n()*3,0)),s.setMatrixAt(c,r.compose(new A(-.3+n()*.38,e+.07+n()*.08,-.11+n()*.22),o,new A(l,l,l))),s.setColorAt(c,a.setRGB(.55,.49,.41).lerp(new Lt(.45,.47,.43),n()).convertSRGBToLinear())}return s.castShadow=!0,i.add(s),Ri(i),i}const Gi=6,Ue=Gi/2,Is=1,Lc=-.7,Ee=new Y(.35,.1),Yi=1.15,ji=.9,Pn=5,wo=.32,Wi=2.15,wd=[.25,.29,.26,.28,.27],Ed=wd.reduce((i,t)=>[...i,i[i.length-1]-t],[Is]),Eo=Ed[Pn],Rn={x:Ee.x-1.05,z:Ee.y+.25,r:.5,y:-.08},bs={th0:2.45,th1:4.55,half:.5};function Ic(i,t){const e=(i-Ee.x)/Yi,n=(t-Ee.y)/ji;return[Math.hypot(e,n),Math.atan2(n,e)]}function To(i,t){const e=Math.cos(i),n=Math.sin(i);return .05*Hn(e*1.6,n*1.6,t*1.7)+.02*Hn(e*5,n*5,3+t)}function Jx(i){const t=Te.smoothstep(i,.02,.36),e=Te.smoothstep(i,.3,.55)*.08;return Math.min(1,t*.92+e)}function Kx(i){if(i<=0)return Is;if(i>=Pn)return Eo;const t=Math.floor(i),e=i-t;return Ed[t]-Jx(e)*wd[t]}function Qx(i){let t=i<0?i+Math.PI*2:i;return t<bs.th0||t>bs.th1?null:(t-bs.th0)/(bs.th1-bs.th0)}function Ao(i,t){const[e,n]=Ic(i,t),s=(Wi-e-To(n,e))/wo;let r=Kx(s),o=0;const a=Qx(n);if(a!==null){const h=a*(Pn+.4)-.2,u=Math.abs(s-h)/bs.half,d=Te.smoothstep(a,0,.04)*(1-Te.smoothstep(a,.96,1)),f=(1-Te.smoothstep(u,.75,1.25))*Math.max(d,s<.6||s>Pn-.6?1:0),g=Is+(Eo-Is)*Te.clamp(a*1.04-.02,0,1);r=Te.lerp(r,g,f),o=1-Te.smoothstep(u,.6,.95)}const c=Math.hypot(i-Rn.x,t-Rn.z),l=1-Te.smoothstep(c,Rn.r,Rn.r+.25);return r=Te.lerp(r,Rn.y,l),s>Pn&&(r-=.03*Te.smoothstep(s,Pn,Pn+2)),r+=.012*Hn(i*2.2,.5,t*2.2)+.004*Hn(i*9,1.5,t*9),r>Is-.05&&(o=Math.max(o,(1-Te.smoothstep(go(i,t),.05,.11))*.8)),{y:r,road:o}}const Ia=[new Y(-1.15,1.25),new Y(-1.6,1.7),new Y(-2.05,1.95)];function go(i,t){let e=9;for(let n=0;n<Ia.length-1;n++){const s=Ia[n],r=Ia[n+1],o=r.x-s.x,a=r.y-s.y,c=Te.clamp(((i-s.x)*o+(t-s.y)*a)/(o*o+a*a),0,1);e=Math.min(e,Math.hypot(i-s.x-o*c,t-s.y-a*c))}return e}const ws=(i,t)=>Ao(i,t).y;function nu(i){const t=Math.cos(i)*Yi,e=Math.sin(i)*ji,n=t>1e-9?(Ue-Ee.x)/t:t<-1e-9?(-Ue-Ee.x)/t:1/0,s=e>1e-9?(Ue-Ee.y)/e:e<-1e-9?(-Ue-Ee.y)/e:1/0;return Math.min(n,s)}function ty(){const i=[[Ue,Ue],[-Ue,Ue],[-Ue,-Ue],[Ue,-Ue]].map(([x,v])=>Math.atan2((v-Ee.y)/ji,(x-Ee.x)/Yi)),t=168,e=new Set;for(let x=0;x<t;x++)e.add(-Math.PI+x/t*Math.PI*2);for(const x of i)e.add(x);const n=[...e].sort((x,v)=>x-v),s=(x,v)=>{const R=Wi-x*wo,T=R-To(v,R-To(v,R));return Te.clamp(T,0,nu(v)-.02)},r=[0,.04,.09,.15,.22,.3,.39,.5,.66,.83],o=[Pn,...Array.from({length:Pn},(x,v)=>r.map(R=>v+R)).flat()].sort((x,v)=>v-x),a=[()=>0];for(const x of[.3,.55,.8])a.push(v=>s(Pn,v)*x);for(const x of o)a.push(v=>s(x,v));const c=10;for(let x=1;x<=c;x++){const v=x/c;a.push(R=>{const T=s(0,R);return T+(nu(R)-T)*v})}const l=[],h=[],u=n.length;for(const x of a)for(const v of n){const R=x(v),T=Ee.x+Math.cos(v)*R*Yi,E=Ee.y+Math.sin(v)*R*ji,P=Ao(T,E);l.push(T,P.y,E),h.push(P.road)}const d=[];for(let x=0;x<a.length-1;x++)for(let v=0;v<u;v++){const R=(v+1)%u,T=x*u+v,E=x*u+R,P=(x+1)*u+v,b=(x+1)*u+R;d.push(T,E,P,E,b,P)}const f=new ve;f.setAttribute("position",new Xt(l,3)),f.setAttribute("aRoad",new Xt(h,1)),f.setIndex(d),f.computeVertexNormals();const g=f.attributes.position,_=new Float32Array(g.count),m=Array.from({length:8},(x,v)=>[Math.cos(v/8*Math.PI*2),Math.sin(v/8*Math.PI*2)]);for(let x=0;x<g.count;x++){const v=g.getX(x),R=g.getY(x),T=g.getZ(x);let E=0;for(const[P,b]of m)for(const M of[.07,.16,.3])E+=Math.max(0,Math.atan((ws(v+P*M,T+b*M)-R)/M));_[x]=Te.clamp(1-E/(m.length*3)*1.25,.35,1)}f.setAttribute("aAo",new be(_,1));const p=(a.length-1)*u,y=n.map((x,v)=>new A(g.getX(p+v),g.getY(p+v),g.getZ(p+v)));return{geo:f,rim:y}}function ey(i){const e=i.length,n=[],s=[],r=[];for(let a=0;a<=e;a++){const c=i[a%e],l=Math.abs(Math.abs(c.x)-Ue)<1e-4?[Math.sign(c.x),0,0]:[0,0,Math.sign(c.z)];for(let h=0;h<=28;h++)n.push(c.x,Lc+(c.y-Lc)*(h/28),c.z),s.push(...l)}for(let a=0;a<e;a++)for(let c=0;c<28;c++){const l=a*29+c,h=l+28+1;r.push(l,l+1,h,h,l+1,h+1)}const o=new ve;return o.setAttribute("position",new Xt(n,3)),o.setAttribute("normal",new Xt(s,3)),o.setAttribute("aAo",new Xt(new Array(n.length/3).fill(1),1)),o.setAttribute("aRoad",new Xt(new Array(n.length/3).fill(0),1)),o.setIndex(r),o}function iu(i,t=1){const e=new wr(1,t),n=e.attributes.position,s=new A;for(let c=0;c<n.count;c++){s.fromBufferAttribute(n,c);const l=1+.28*Hn(s.x*1.3+i,s.y*1.3,s.z*1.3);s.multiplyScalar(l),s.y=s.y<-.2?-.2-(s.y+.2)*.25:s.y,n.setXYZ(c,s.x,s.y*.75,s.z)}const r=e.toNonIndexed();r.computeVertexNormals();const o=r.attributes.position,a=new Float32Array(o.count*3);for(let c=0;c<o.count;c++){const l=.7+.3*Te.smoothstep(o.getY(c),-.3,.6);a.set([l,l,l],c*3)}return r.setAttribute("color",new be(a,3)),r}let ny=null;function Dc(){return ny??={boulder:iu(1,1),scree:iu(2,0)}}const iy=[[0,.02,0,1],[.42,-.12,.18,.72],[-.3,-.08,-.3,.78],[.05,.38,-.08,.7]],sy=[[0,0,0,1]];function su(i=iy){const t=[];i.forEach(([r,o,a,c],l)=>{const h=new wr(c,1),u=h.attributes.position,d=new A;for(let f=0;f<u.count;f++)d.fromBufferAttribute(u,f),d.multiplyScalar(1+.16*Hn(d.x*2.1+l*7,d.y*2.1,d.z*2.1)),u.setXYZ(f,d.x+r,d.y*.86+o,d.z+a);t.push(h)});const e=ol(t.map(r=>pd(r.deleteAttribute("normal").deleteAttribute("uv"))));e.computeVertexNormals();const n=e.attributes.position,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){const o=.62+.45*Te.smoothstep(n.getY(r),-.7,.9);s.set([o*.97,o,o*.92],r*3)}return e.setAttribute("color",new be(s,3)),e}function ry(){const i=new kn(.018,.034,.2,7);i.translate(0,.1,0);const t=new kn(.008,.014,.12,5);return t.translate(0,.06,0),t.rotateZ(-.7),t.translate(0,.13,0),ol([i.toNonIndexed(),t.toNonIndexed()])}function oy(){const i=new Qt;i.name="mine";const t=[Ee.x+.35,Ee.y-.25,.42],e=new Hx({top:Is,pond:t}),{geo:n,rim:s}=ty(),r=new Tt(n,e);r.receiveShadow=r.castShadow=!0,r.userData.info="mine",i.add(r);const o=new Tt(ey(s),e);o.receiveShadow=!0,i.add(o),i.add(xt(Ft(Gi+.3,.3,Gi+.3,.06,nt.plinth),0,Lc-.15,0));const a=new Do;for(let D=0;D<=48;D++){const O=D/48*Math.PI*2,k=1+.12*Hn(Math.cos(O)*1.5,Math.sin(O)*1.5,4),B=Math.cos(O)*k*.42*1.4,X=Math.sin(O)*k*.42*.8;D===0?a.moveTo(B,X):a.lineTo(B,X)}const c=new Tt(new el(a,1),Wx);c.rotation.x=-Math.PI/2,c.position.set(t[0],Eo+.012,t[1]),c.receiveShadow=!0,i.add(c);const l=al(3),h=new Ht,u=new rn,d=new on,f=new A,g=new A,_=new Lt,m=[];for(let D=0;D<150;D++){const O=l()*Math.PI*2,B=Math.floor(l()*Pn)+.4+l()*.2,X=Wi-B*wo-To(O,Wi-B*wo),W=Ee.x+Math.cos(O)*X*Yi,st=Ee.y+Math.sin(O)*X*ji;Ao(W,st).road>.2||Math.hypot(W-Rn.x,st-Rn.z)<Rn.r+.1||m.push({x:W,z:st,r:.018+l()*.03,c:l()})}for(let D=0;D<16;D++){const O=l()*Math.PI*2,k=l()*.5,B=Ee.x-.25+Math.cos(O)*k*Yi,X=Ee.y+.15+Math.sin(O)*k*ji;Math.hypot(B-t[0],X-t[1])<.62||m.push({x:B,z:X,r:.04+l()*.05,c:l()})}for(let D=0;D<9;D++){const O=-Ue+.3+l()*(Gi-.6),k=-Ue+.3+l()*(Gi-.6);Ic(O,k)[0]<Wi+.3||go(O,k)<.3||m.push({x:O,z:k,r:.06+l()*.07,c:l()})}const p=m.filter(D=>D.r<.05),y=m.filter(D=>D.r>=.05),v=[[p,Dc().scree,!1],[y,Dc().boulder,!0]].map(([D,O,k])=>{const B=new yi(O,Sd,D.length);return D.forEach(({x:X,z:W,r:st,c:ft},yt)=>{u.setFromEuler(d.set((l()-.5)*.4,l()*6.28,(l()-.5)*.4)),B.setMatrixAt(yt,h.compose(f.set(X,ws(X,W)+st*.1,W),u,g.set(st*(.9+l()*.5),st,st*(.9+l()*.4)))),B.setColorAt(yt,_.setRGB(.56,.5,.43).lerp(new Lt(.44,.46,.42),ft).convertSRGBToLinear())}),B.castShadow=k,B.receiveShadow=!0,i.add(B),B}),R=[];for(let D=0;D<60&&R.length<30;D++){const O=-Ue+.22+l()*(Gi-.44),k=-Ue+.22+l()*(Gi-.44);Ic(O,k)[0]<Wi+.12||go(O,k)<.25||Math.hypot(O+2.1,k-1.9)<.75||R.some(B=>Math.hypot(B.x-O,B.z-k)<.3)||R.push({x:O,z:k,s:.75+l()*.55})}const T=new yi(ry(),Vx,R.length),E=new yi(su(),eu,R.length);R.forEach(({x:D,z:O,s:k},B)=>{const X=ws(D,O);u.setFromEuler(d.set(0,l()*6.28,0)),T.setMatrixAt(B,h.compose(f.set(D,X-.01,O),u,g.set(k,k,k))),E.setMatrixAt(B,h.compose(f.set(D,X+.24*k,O),u,g.set(.15*k,.15*k,.15*k))),E.setColorAt(B,_.setRGB(.42,.55,.34).lerp(new Lt(.55,.6,.38),l()).multiplyScalar(.9+l()*.15).convertSRGBToLinear())}),T.castShadow=E.castShadow=!0,E.receiveShadow=!0,i.add(T,E);const P=[];for(let D=0;D<90&&P.length<34;D++){const O=l()*Math.PI*2,k=Wi+.18+l()*.5,B=Ee.x+Math.cos(O)*k*Yi,X=Ee.y+Math.sin(O)*k*ji;Math.abs(B)>Ue-.15||Math.abs(X)>Ue-.15||go(B,X)<.2||Ao(B,X).road>.1||P.push(new A(B,ws(B,X),X))}const b=new yi(su(sy),eu,P.length);P.forEach((D,O)=>{const k=.05+l()*.04;u.setFromEuler(d.set(0,l()*6.28,0)),b.setMatrixAt(O,h.compose(f.set(D.x,D.y+k*.35,D.z),u,g.set(k,k*.7,k))),b.setColorAt(O,_.setRGB(.47,.56,.36).multiplyScalar(.85+l()*.2).convertSRGBToLinear())}),b.castShadow=!0,i.add(b);const M=Zx();M.position.set(-2.1,ws(-2.1,1.9),1.9),M.rotation.y=-.7,M.scale.setScalar(1.3),i.add(M);const L=Yx();L.root.position.set(Rn.x,Rn.y,Rn.z),L.root.rotation.y=.15,L.root.scale.setScalar(1.35),L.root.userData.info="excavator",i.add(L.root);const z=[v[1],T,b];return{root:i,digger:L,height:ws,pitFloor:new A(Ee.x,Eo,Ee.y),minorCasters:z}}const Ws=(i,t,e={})=>new Gn({color:i,roughness:t,...e}),ay=Ws(11570538,.75),cy=Ws(15525334,1,{sheen:1,sheenColor:new Lt(16777215),sheenRoughness:.6}),ly=Ws(15262422,1,{sheen:1,sheenColor:new Lt(16777215),sheenRoughness:.5}),ru=gd(11843504,9277578,6),hy=Ws(9076596,1,{sheen:1,sheenColor:new Lt(15261136),sheenRoughness:.45}),uy=Ws(16777215,.9,{map:ru.map,normalMap:ru.normalMap,normalScale:new Y(.4,.4)});function dy(){const i=new Qt;i.add(xt(Ft(3.6,.5,2.8,.08,nt.enamel),0,.25,0)),i.add(xt(Ft(3.62,.06,2.82,.03,nt.accent),0,.49,0));const t=new Tt(new Ai(3.3,2.5),nt.waterSurface);t.rotation.x=-Math.PI/2,t.position.y=.47,i.add(t);for(let s=-6;s<=6;s++)i.add(xt(Ft(.16,.08,2.3,.02,ay),s*.24,.55,0));i.add(xt(Ot(.05,.06,2.8,nt.steel,24),-2.2,1.4,1)),i.add(xt(Ot(.25,.3,.06,nt.darkSteel),-2.2,.03,1));const e=new Ae;e.position.set(-1.35,2.9,1.15),i.add(Sr([[-2.2,2.75,1],[-1.9,3.05,1.05],[-1.45,2.95,1.12],[-1.35,2.9,1.15]],.05,nt.accent));const n=Ot(.06,.04,.3,nt.brass,24);return n.position.copy(e.position),n.rotation.set(.5,0,.9),i.add(n,e),i.add(...Er(3.6,.5,2.8,[0,.25,0],3)),Ri(i),i.userData.info="wash",{root:i,nozzle:e,gratingTop:.59}}function fy(){const i=new Qt,t=Ot(.13,.13,.9,nt.accent);t.rotation.z=Math.PI/2,i.add(t);const e=Ft(.3,.26,.3,.05,nt.darkSteel);e.position.x=.55,i.add(e);const n=Ot(.32,.32,.02,nt.grit);n.position.set(.55,-.2,0),n.name="disc",i.add(n);const s=yn(new Tt(new kn(.36,.36,.08,48,1,!0,0,Math.PI),nt.sage.clone()));return s.material.side=sn,s.position.set(.55,-.17,0),i.add(s),i.userData.info="grinder-hand",i}function py(){const i=new Qt;i.add(xt(Ft(4.2,.7,3,.06,nt.enamel),0,.35,0));const t=new je({color:16052972,emissive:16776694,emissiveIntensity:0});i.add(xt(new Tt(new xn(3.2,.03,2.4),t),0,.715,0));const e=new Qt,n=Ot(.04,.04,.7,nt.accent,24),s=Ot(.012,.03,.08,Ws(12073514,.5),16);return s.position.y=-.39,e.add(n,s),i.add(e),i.add(...Er(4.2,.7,3,[0,.35,0],3)),Ri(i),i.userData.info="lightbox",{root:i,panel:t,top:.73,pen:e}}function my(i,t,e=.9){const n=new Qt;n.add(xt(Ft(3.4,.25,2,.05,nt.enamel),.4,.125,0)),n.add(xt(Ft(3.1,.06,1.7,.02,nt.darkSteel),.4,.28,0)),n.add(xt(Ot(.13,.13,3.6,nt.steel),0,2,-.75));const s=new Qt;n.add(s),s.add(xt(Ft(.7,.7,1.1,.08,nt.enamel),0,.95,-.35)),s.add(xt(Ft(.72,.1,1.12,.03,nt.accent),0,.65,-.35)),s.add(xt(Ot(.3,.3,.6,nt.sage),0,1.55,-.35)),s.add(xt(Ot(.09,.09,.4,nt.steel),0,.45,0)),s.add(Sr([[.35,.9,-.1],[.75,1,.2],[.95,1.3,.45]],.025,nt.steel));const r=c=>{const l=new Qt,h=nt.steel.clone();return h.side=sn,l.add(xt(Ot(c+.012,c+.012,e,h,96,!0),0,-e/2,0)),l.add(xt(Ot(c+.016,c+.016,.05,nt.grit,96,!0),0,-e+.02,0)),l.add(xt(Ot(c+.03,c+.03,.06,nt.darkSteel),0,0,0)),l.position.y=.25,l},o=r(t),a=r(i);return s.add(o,a),n.add(Sr([[-.3,3.2,-.2],[-.45,2.9,.1],[-.2,2.6,.3]],.025,nt.rubber)),n.add(...Er(3.4,.25,2,[.4,.125,0])),Ri(n),n.userData.info="drill",{root:n,head:s,outerBit:o,innerBit:a,tableTop:.31,headUp:2.3}}function gy(){const i=new Qt;i.add(xt(Ft(3.4,.9,1.7,.08,nt.enamel),-.4,.45,0)),i.add(xt(Ft(3.42,.07,1.72,.03,nt.accent),-.4,.86,0)),i.add(xt(Ft(1.5,.75,.9,.1,nt.sage),-1.1,1.3,0));const t=Ot(.06,.06,1.7,nt.steel);t.rotation.z=Math.PI/2,t.position.set(.35,1.35,0),i.add(t);const e=Ot(.17,.17,.3,nt.darkSteel);e.rotation.z=Math.PI/2,e.position.set(-.2,1.35,0),i.add(e),i.add(xt(Ft(.3,.5,.4,.04,nt.darkSteel),-.2,1.05,0));const n=new A(1,1.35,0),s=new Qt,r=Ot(.7,.7,.28,nt.grit,128);r.rotation.z=Math.PI/2,s.add(r);const o=Ot(.22,.22,.34,nt.steel);o.rotation.z=Math.PI/2,s.add(o);for(let m=0;m<8;m++){const p=m/8*Math.PI*2,y=Ot(.025,.025,.36,nt.darkSteel,12);y.rotation.z=Math.PI/2,y.position.set(0,Math.cos(p)*.15,Math.sin(p)*.15),s.add(y)}const a=new Qt,c=Ot(.18,.18,.9,uy,64);c.rotation.z=Math.PI/2,c.position.x=.35,a.add(c);const l=Ot(.19,.19,.06,nt.darkSteel,64);l.rotation.z=Math.PI/2,l.position.x=-.1,a.add(l);const h=new Qt,u=Ot(.2,.2,.9,cy,64);u.rotation.z=Math.PI/2,u.position.x=.35,h.add(u);const d=Ot(.21,.21,.06,nt.brass,64);d.rotation.z=Math.PI/2,d.position.x=-.1,h.add(d);const f=nt.sage.clone();f.side=sn;const g=yn(new Tt(new kn(.8,.8,.4,96,1,!0,Math.PI*.6,Math.PI*.8),f));g.rotation.z=Math.PI/2,s.add(g);for(const m of[s,a,h])m.position.copy(n),i.add(m);i.add(Sr([[.2,2.5,-.5],[.7,2.4,-.2],[1,2.25,.15]],.025,nt.rubber));const _=Ot(.025,.018,.12,nt.brass,16);return _.position.set(1,2.18,.18),i.add(_),i.add(...Er(3.4,.9,1.7,[-.4,.45,0],2)),Ri(i),i.userData.info="grind-bench",{root:i,spindle:n,wheel:s,drum:a,buff:h,spinning:[r,c,u]}}function _y(){const i=new Qt,t=1.3,e=1.1,n=.03,s=(h,u)=>yn(new Tt(new Hs(h.map(([d,f])=>new Y(d,f)),128),u));i.add(s([[.001,0],[t-n,0],[t,n],[t,e-n*2],[t-n*2,e],[.001,e]],nt.plinth)),i.add(s([[t*.995,e-.015],[t*1.005,e-.015],[t*1.005,e-.005],[t*.995,e-.005]],nt.brass));const r=yn(new Tt(new kn(1.15,1.15,.04,96),ly));r.position.y=e+.02,i.add(r);const o=Ft(.9,.1,.36,.05,hy);o.position.y=e+.09,i.add(o);const a=new Qt;a.add(xt(Ft(1.3,.06,.02,.01,nt.steel),0,0,0)),a.add(xt(Ft(.05,.32,.025,.01,nt.steel),-.6,-.17,0));const c=xt(Ft(.12,.34,.03,.01,nt.steel),.2,-.16,0);c.name="jaw",a.add(c),a.visible=!1,i.add(a);const l=new Qt;return l.add(xt(Ot(.12,.2,.25,nt.darkSteel),0,0,0)),l.add(xt(Ot(.11,.11,.01,new ri({color:16776170})),0,-.13,0)),l.visible=!1,i.add(l),i.userData.info="showcase",{root:i,top:e+.04,cradle:o,caliper:a,lamp:l}}class vy extends Yc{constructor(){super();const t=new xn;t.deleteAttribute("uv");const e=new je({side:Ge}),n=new je,s=new Tv(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Tt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Tt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Tt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Tt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Tt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Tt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Tt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Tt(t,Ms(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Tt(t,Ms(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Tt(t,Ms(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Tt(t,Ms(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Tt(t,Ms(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Tt(t,Ms(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Ms(i){const t=new ri;return t.color.setScalar(i),t}const ou=15855336,_n={hemi:.8,key:2.3,fill:.45,rim:.9,envIntensity:.85,toneMapping:"aces",exposure:1},au=new A(5,10,6),xy={aces:xu,neutral:Mu,agx:yu};function yy(){const i=new Yc,t=new No(20,48,24),e=new Float32Array(t.attributes.position.count*3),n=new Lt(15329250),s=new Lt(12105134),r=new Lt(7828332),o=new Lt;for(let c=0;c<t.attributes.position.count;c++){const l=t.attributes.position.getY(c)/20;l>0?o.copy(s).lerp(n,l):o.copy(s).lerp(r,Math.min(1,-l*1.6)),e.set([o.r,o.g,o.b],c*3)}t.setAttribute("color",new be(e,3)),i.add(new Tt(t,new ri({vertexColors:!0,side:Ge})));const a=(c,l,h,u,d)=>{const f=new Tt(new Ai(c,l),new ri({color:new Lt(1,.985,.96).multiplyScalar(h),side:sn}));f.position.set(...u),f.lookAt(...d),i.add(f)};return a(10,7,3.2,[1,12,3],[0,0,0]),a(2.2,11,2.2,[-13,3,4],[0,1,0]),a(2.2,11,1.6,[12,3,-6],[0,1,0]),a(6,3,.9,[3,2,14],[0,1,0]),i}const My=4868164;class Sy{constructor(t,e){this.renderer=e;const n=new Lt(ou);e.setClearColor(n),this.backdrop=new ri({color:n.clone(),side:Ge,fog:!1,toneMapped:!1});const s=new Tt(new No(60,48,24),this.backdrop);s.name="backdrop",t.add(s),t.fog=new qc(n.clone(),30,58);const r=new Tt(new Kc(60,64),new je({color:15986922,roughness:1}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r.name="floor",t.add(r),this.scene=t,this.setLook(this.look),t.environmentIntensity=_n.envIntensity,this.hemi=new wv(16777215,14209218,_n.hemi),this.key=new xa(16774890,_n.key),this.key.position.set(9,10,6),this.key.target.position.set(4,0,-.5),this.key.castShadow=!0,this.key.shadow.bias=-3e-4,this.key.shadow.normalBias=.02,Object.assign(this.key.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40}),this.fill=new xa(15397631,_n.fill),this.fill.position.set(-7,3,3),this.rim=new xa(16777215,_n.rim),this.rim.position.set(-1,5,-9),t.add(this.hemi,this.key,this.key.target,this.fill,this.rim),this.base={hemi:_n.hemi,key:_n.key,fill:_n.fill,rim:_n.rim},this.setShadowMapSize(2048)}key;hemi;fill;rim;base;envs={};scene;look={toneMapping:_n.toneMapping,env:"studio"};backdrop;paper=new Lt(ou);dim=new Lt(My);setShadowMapSize(t){this.key.shadow.mapSize.x!==t&&(this.key.shadow.mapSize.set(t,t),this.key.shadow.map?.dispose(),this.key.shadow.map=null)}setLook(t){this.look={...this.look,...t},this.renderer.toneMapping=xy[this.look.toneMapping],this.renderer.toneMappingExposure=_n.exposure;let e=this.envs[this.look.env];if(!e){const n=new Sc(this.renderer),s=this.look.env==="studio"?yy():new vy;e=this.envs[this.look.env]=n.fromScene(s,.04).texture,n.dispose(),s.traverse(r=>{const o=r;o.isMesh&&(o.geometry.dispose(),o.material.dispose())})}this.scene.environment=e,this.scene.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])r.needsUpdate=!0})}focus(t,e){const n=(this.key.shadow.camera.right-this.key.shadow.camera.left)/this.key.shadow.mapSize.x,s=au.clone().normalize(),r=new A(0,1,0).cross(s).normalize(),o=s.clone().cross(r),a=new A(t,0,e),c=f=>Math.round(f/n)*n,l=c(a.dot(r)),h=c(a.dot(o)),u=a.dot(s),d=new A().addScaledVector(r,l).addScaledVector(o,h).addScaledVector(s,u);this.key.target.position.copy(d),this.key.position.copy(d).add(au),this.key.target.updateMatrixWorld()}shadowCovers(t){return this.key.updateMatrixWorld(),this.key.target.updateMatrixWorld(),this.key.shadow.updateMatrices(this.key),this.key.shadow.getFrustum().containsPoint(t)}setMode(t){const e={gallery:[1,1,1,1],soft:[1.5,.35,1.6,.6],back:[.35,.25,.2,3.2]}[t];this.mode=e,this.envMode={gallery:1,soft:1.15,back:.4}[t]}mode=[1,1,1,1];envMode=1;setExposure(t,e){const n=.12+.88*t,[s,r,o,a]=this.mode;this.hemi.intensity=this.base.hemi*n*s,this.key.intensity=this.base.key*n*r,this.fill.intensity=this.base.fill*n*o,this.rim.intensity=this.base.rim*n*a,e.environmentIntensity=_n.envIntensity*this.envMode*(.2+.8*t),this.backdrop.color.lerpColors(this.dim,this.paper,t),e.fog.color.copy(this.backdrop.color),this.renderer.setClearColor(this.backdrop.color)}dispose(){for(const t of Object.values(this.envs))t?.dispose()}}const Ut={mine:new A(-20,0,-2),wash:new A(-10,0,-.5),plinth:new A(0,0,0),saw:new A(8.5,0,-1.2),lightbox:new A(17,0,-.8),drill:new A(23.5,0,-.8),grind:new A(30.5,0,-.8),showcase:new A(39,0,0)},ur={r:1.7,h:.75},Td=1;class by{scene=new Yc;studio;pieces=new Ix;mine;wash;torch=Nx();handGrinder=fy();saw;lightbox;drill;bench;showcase;sawWater=new ro;washWater=new ro;drillWater=new ro;benchWater=new ro;stationObjects=new Map;constructor(t){this.studio=new Sy(this.scene,t);const e=(o,a,c)=>{o.position.add(a),this.scene.add(o);const l=Object.keys(Ut).find(u=>Ut[u]===a),h=this.stationObjects.get(l)??[];if(h.push(o),c){const u=Sx(c,.22);u.position.x+=a.x,u.position.z+=a.z,this.scene.add(u),h.push(u)}this.stationObjects.set(l,h)};this.mine=oy(),this.mine.root.position.y=Td,e(this.mine.root,Ut.mine,9),this.wash=dy(),e(this.wash.root,Ut.wash,5);const n=Dx(ur.r,ur.h);n.userData.info="plinth",e(n,Ut.plinth,5.5);const s=Ux();s.scale.setScalar(.6),s.rotation.set(-Math.PI/2,0,.9),s.position.set(.95,ur.h+.04,1.05);const r=Fx([{t:"JADEITE  硬玉",s:52,w:700},{t:"Rough · 原石 · No.001",s:34,c:"#7d8580"},{t:"程序化示意标本",s:30,c:"#7d8580"}]);r.scale.setScalar(.62),r.position.set(-1.05,ur.h+.2,1.05),r.rotation.y=.35,e(s,Ut.plinth),e(r,Ut.plinth),this.saw=bx(),e(this.saw.root,Ut.saw,7.5),this.lightbox=py(),e(this.lightbox.root,Ut.lightbox,6),this.drill=my(Be.ri,Be.ro),e(this.drill.root,Ut.drill,4.5),this.bench=gy(),e(this.bench.root,Ut.grind,5.5),this.showcase=_y(),e(this.showcase.root,Ut.showcase,4.2);for(const o of this.pieces.all)this.scene.add(o);for(const o of[this.sawWater,this.washWater,this.drillWater,this.benchWater])this.scene.add(o.object);this.torch.visible=!1,this.handGrinder.visible=!1,this.scene.add(this.torch,this.handGrinder)}setShadowDetail(t){for(const e of this.mine.minorCasters)e.castShadow=t}showStations(t){for(const[e,n]of this.stationObjects){const s=t.includes(e);for(const r of n)r.visible=s}}get pickables(){return[...this.pieces.pickables,...this.saw.pickables,this.mine.root,this.wash.root,this.lightbox.root,this.drill.root,this.bench.root,this.showcase.root]}}const Ce=(i,t,e)=>new A(i,t,e),De=(i,t,e,n)=>i.clone().add(Ce(t,e,n)),ee=rx,wt=sx,wy=[["mine"],["mine","wash"],["wash","plinth"],["plinth"],["plinth"],["plinth","saw"],["saw","lightbox"],["lightbox","drill"],["drill","grind"],["grind"],["grind"],["grind","showcase"]],Ey=Object.keys(Ut),Oi={wind:.25,motor:0,water:0,grind:0,buff:0},Ty=.11,Ay=new A,cu=xe(Mi(De(Ut.wash,0,.59+ei,0)),qi(.6)),Jn=xe(Mi(De(Ut.plinth,0,ur.h+ei,0)),qi(-.25)),Da=1.1,Ua=.2,Na=i=>Mi(De(Ut.saw,0,en.carriageTop+ei,i)),Ad=(i,t=0,e=0)=>xe(Mi(i),vd(Math.PI/2),gr(-cl,-t,-e)),lu=Ad(De(Ut.lightbox,0,.73+ni/2,0)),hu=Ad(De(Ut.drill,0,.31+ni/2,0),ke[0].cy,ke[0].cz),hn=(i,t,e,n=0)=>xe(gr(i,t,e),qi(n)),uu=vd(-Math.PI/2),du=.4,Bi=De(Ut.drill,1.45,.31+ni/2,.2),fu=.18;class Si{constructor(t){this.w=t;const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(236,230,214,0.7)"),s.addColorStop(1,"rgba(236,230,214,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.dust=new Ju(new jc({map:new Io(e),depthWrite:!1,transparent:!0})),this.dust.visible=!1,t.scene.add(this.dust);const r=new ve;r.setAttribute("position",new be(new Float32Array(6),3)),this.dimLine=new q_(r,new Qu({color:2847569,depthTest:!1})),this.dimLine.frustumCulled=!1,this.dimLine.renderOrder=10,this.dimLine.visible=!1,t.scene.add(this.dimLine)}fissure=px();dust;dimLine;bladeAngle=0;wheelAngle=0;mineEnd;mineAttach;sixEnd;keyCache=new Map;manualTorch=null;torchMode=!1;lightMode="gallery";compare=1;cullStations=!0;lastExposure=1;static stationOf(t){return[Ut.mine,Ut.wash,Ut.plinth,Ut.plinth,Ut.plinth,Ut.saw,Ut.lightbox,Ut.drill,Ut.grind,Ut.grind,Ut.grind,Ut.showcase][t]}apply(t,e,n,s){const r=this.w;r.pieces.hideAll(),this.idleMachines();const o=Si.stationOf(t);r.studio.focus(o.x,o.z),r.showStations(this.cullStations?wy[t]:Ey),r.studio.setMode(t===11?this.lightMode:"gallery");let a=1,c={...Oi},l=[];switch((t===6&&e<.4||t===8)&&this.showLeftovers(t),t){case 0:{const h=this.mineAttachPose();this.setArm(this.armAt(e));const u=e<.45?h:this.bucketStonePose();this.showIntact(u,{reveal:0,flat:0,opaque:!0}),c={...Oi,wind:.5,motor:.35*(wt(e,.15,.25)-wt(e,.92,1))},r.scene.updateMatrixWorld(),l=[{id:"mine",world:Ut.mine.clone().add(r.mine.pitFloor).add(Ce(.3,Td,0))},{id:"excavator",world:ye(r.mine.digger.root.matrixWorld,0,.5,0)},...e>.5?[{id:"stone",world:Ta(u)}]:[]];break}case 1:{const h=ee(wt(e,0,.25));this.setArm(this.armAt(1));const u=An(this.mineEndPose(),cu,h,3),d=ee(wt(e,.3,.7));this.showIntact(u,{reveal:0,flat:0,wet:d,opaque:!0});const f=wt(e,.25,.32)*(1-wt(e,.85,.92));r.scene.updateMatrixWorld();const g=ye(u,-.4,.6,.3);r.washWater.update(n,f,[r.wash.nozzle.getWorldPosition(new A)],g),c={...Oi,water:f},l=e>.5?[{id:"rind",world:ye(u,.3,.7,.6)}]:[];break}case 2:{const h=ee(wt(e,0,.18)),u=An(cu,Jn,h,1.6),d=1-wt(e,.15,.55);this.showIntact(u,{reveal:0,flat:0,wet:d,opaque:!0}),a=this.torchMode?0:1-wt(e,.2,.3)+wt(e,.86,.96);const f=this.torchMode||e>.28&&e<.88;f&&this.placeTorch(u,e),l=f?[{id:"torch",world:r.torch.position.clone()}]:e>.2?[{id:"rind",world:ye(u,-.9,.55,.55)}]:[];break}case 3:{const h=wt(e,.25,.8);this.showIntact(Jn,{reveal:h,flat:ee(h)}),this.placeHandGrinder(e,n),c={...Oi,grind:wt(e,.2,.25)*(1-wt(e,.8,.85))},l=[{id:"rind",world:ye(Jn,-.9,.55,.55)},...e>.7?[{id:"window",world:this.windowPoint(-.3)}]:[]];break}case 4:{this.showIntact(Jn,{reveal:1,flat:1}),r.pieces.setPlanLines([ee(wt(e,.15,.45)),ee(wt(e,.45,.65)),ee(wt(e,.65,.85))]),l=[{id:"fissure",world:ye(Jn,this.fissure.x,this.fissure.y,this.fissure.z)},...e>.5?[{id:"cutlines",world:ye(Jn,0,.93,.15)}]:[]];break}case 5:{const h=this.slabbing(e,n,s);c=h.sound,l=h.hot;break}case 6:{const h=this.sixEndPoses(),u=An(h.S,lu,ee(wt(e,0,.35)),1.4);this.showPiece(r.pieces.S,u);const d=ee(wt(e,.35,.45));r.lightbox.panel.emissiveIntensity=1.1*d;const f=wt(e,.45,.95);r.pieces.setMarks(f),this.placePen(u,f,e),l=e>.4?[{id:"slab",world:ye(u,Me.x1,-.55,-.2)},{id:"fissure-slab",world:ye(u,Me.x1,.52,-.1)},...e>.95?[{id:"marks",world:ye(u,Me.x1,ke[0].cy,ke[0].cz+Be.ro)}]:[]]:[];break}case 7:{const h=this.coring(e,n);c=h.sound,l=h.hot;break}case 8:case 9:case 10:{const h=this.grinding(t,e,n,s);c=h.sound,l=h.hot;break}case 11:{l=this.showcase(e).hot;break}}return r.studio.setExposure(a,r.scene),this.lastExposure=a,r.scene.updateMatrixWorld(),r.pieces.updateClipping(),{shot:this.shot(t,e),hotspots:l,sound:c,orbitTarget:this.shot(t,e).target}}idleMachines(){const t=this.w;t.torch.visible=!1,t.handGrinder.visible=!1,this.dust.visible=!1,this.dimLine.visible=!1,t.saw.blade.position.y=en.bladeParkedY,t.saw.carriage.position.set(0,0,Da),t.lightbox.panel.emissiveIntensity=0,t.lightbox.pen.visible=!1,t.drill.head.position.y=t.drill.headUp-.7,t.drill.outerBit.visible=!0,t.drill.innerBit.visible=!1,t.bench.wheel.visible=!0,t.bench.drum.visible=t.bench.buff.visible=!1,t.showcase.caliper.visible=t.showcase.lamp.visible=!1;for(const e of[t.sawWater,t.washWater,t.drillWater,t.benchWater])e.update(0,0,[],new A)}showIntact(t,e){const n=this.w.pieces.intactGroup;rr(n,t),n.visible=!0,this.w.pieces.setIntactOpaque(e.opaque??!1),this.w.pieces.setIntactLod(Ay.setFromMatrixScale(t).x<.3),this.w.pieces.setWindow(e.reveal,e.flat),this.w.pieces.setWet(e.wet??0)}showPiece(t,e){rr(t.group,e),t.group.visible=!0}windowPoint(t=0){const e=oi.clone().multiplyScalar(Vs);return ye(Jn,e.x,e.y+t,e.z)}armAt(t){const e=ee(wt(t,.25,.45)),n=ee(wt(t,.45,.6)),s=ee(wt(t,.6,.95));return{boom:ze(ze(ze(.55,.22,e),.22,n),.85,s),stick:ze(ze(-1.35,-1.55,e),-1.15,n)+0*s,bucket:ze(ze(-.9,-1.1,e),-.1,n)+.35*s}}setArm(t){const e=this.w.mine.digger;e.boom.rotation.z=t.boom,e.stick.rotation.z=t.stick,e.bucket.rotation.z=t.bucket,e.sync()}bucketStonePose(){const t=this.w.mine.digger.bucket;t.updateWorldMatrix(!0,!1);const e=ye(t.matrixWorld,.08,.05,0);return xe(Mi(e),qi(.4),Tx(Ty))}mineAttachPose(){return this.mineAttach||(this.setArm(this.armAt(.45)),this.mineAttach=this.bucketStonePose(),this.setArm(this.armAt(0))),this.mineAttach}mineEndPose(){return this.mineEnd||(this.setArm(this.armAt(1)),this.mineEnd=this.bucketStonePose()),this.mineEnd}placeTorch(t,e){let n,s;if(this.torchMode&&this.manualTorch)({point:n,normal:s}=this.manualTorch);else{const c=[Ce(-.55,.45,.7),Ce(.05,.6,.8),Ce(.65,.3,.7)].map(d=>d.normalize()),l=wt(e,.3,.86)*2,h=Math.min(1,Math.floor(l)),u=c[h].clone().lerp(c[h+1],ee(l-h)).normalize();n=u.clone().multiplyScalar(Fo(u)*.99),s=u}this.w.pieces.intact.material.jade.uTorch.value.set(n.x,n.y,n.z,3.2);const r=n.clone().applyMatrix4(t),o=s.clone().transformDirection(t),a=this.w.torch;a.visible=!0,a.quaternion.setFromUnitVectors(Ce(1,0,0),o.clone().negate()),a.position.copy(r).addScaledVector(o,.66)}placeHandGrinder(t,e){const n=this.w.handGrinder,s=oi.clone().transformDirection(Jn),r=this.windowPoint(),o=ee(wt(t,.05,.25))*(1-ee(wt(t,.8,.98)));if(o<=0)return;n.visible=!0;const a=Ce(1,0,0).cross(s).normalize(),c=wt(t,.25,.8)>0&&wt(t,.25,.8)<1?Math.sin(e*5)*.08:0,l=r.clone().addScaledVector(s,ze(1.4,.02,o)).addScaledVector(a,c).add(Ce(0,ze(.8,0,o),0));n.scale.setScalar(du),n.quaternion.setFromUnitVectors(Ce(0,1,0),s),n.position.copy(l).sub(Ce(.55,-.2,0).multiplyScalar(du).applyQuaternion(n.quaternion));const h=n.getObjectByName("disc");h&&(h.rotation.y=e*30);const u=wt(t,.25,.8);if(u>0&&u<1){this.dust.visible=!0,this.dust.position.copy(r).addScaledVector(s,.2);const d=.8+.1*Math.sin(e*7);this.dust.scale.set(d*.6,d*.42,1)}}slabbing(t,e,n){const s=this.w,r=s.pieces,o=ee(wt(t,.12,.2)),a=ze(Da,Ua,o);s.saw.carriage.position.set(0,0,a);const c=An(Jn,Na(Da),ee(wt(t,0,.12)),1.8),l=t<.12?c:Na(a),h=(O,k,B)=>ee(wt(t,O,k))*(1-ee(wt(t,k,B))),u=h(.2,.38,.43),d=h(.66,.72,.75),f=h(.78,.84,.87);s.saw.blade.position.y=ze(en.bladeParkedY,en.bladeDownY,Math.max(u,d,f));const g=wt(t,.15,.2)*(1-wt(t,.43,.47))+wt(t,.62,.66)*(1-wt(t,.87,.9));this.bladeAngle-=n*14*g,s.saw.bladeDisc.rotation.x=this.bladeAngle;const _=ee(wt(t,.43,.55)),m=ee(wt(t,.6,.66)),p=ee(wt(t,.75,.78)),y=ee(wt(t,.87,.97)),x=An(hn(-.8*_,0,.4*_,-.72*_),hn(-2.1,0,.5,-.72),m),v=hn(.8*_,0,.4*_,.72*_),R=hn(-ze(Me.x0,Me.x1,p),0,0),T=An(v,R,m),E=en.carriageTop+ei,P=(O,k)=>ze(en.bladeParkedY,en.bladeDownY,ee(wt(t,O,k)))-en.bladeRadius-E;_<=0?(this.showIntact(l,{reveal:1,flat:1}),r.setPlanLines([t>.2?0:1,1,1]),t>.2&&r.setSlot(r.intact,lr,P(.2,.38))):(this.showPiece(r.A,xe(l,x)),t<.72?(this.showPiece(r.B,xe(l,T)),r.setLinesOn(r.B.shell,[Me.x0,Me.x1],[t>.66?0:1,1]),t>.66&&r.setSlot(r.B.shell,Me.x0,P(.66,.72))):t<.84?(this.showPiece(r.B1,xe(l,T)),this.showPiece(r.BR,xe(l,T)),r.setLinesOn(r.BR.shell,[Me.x1],[t>.78?0:1]),t>.78&&r.setSlot(r.BR.shell,Me.x1,P(.78,.84))):(this.showPiece(r.B1,xe(l,T,hn(-.35*y,0,0))),this.showPiece(r.S,xe(l,T,hn(0,0,.6*y))),this.showPiece(r.B2,xe(l,T,hn(.45*y,0,0))))),s.scene.updateMatrixWorld();const b=s.saw.nozzles.map(O=>O.getWorldPosition(new A)),M=Math.max(u,d,f),L=en.carriageTop+ei+.9,z=De(Ut.saw,0,ze(L,en.carriageTop+.35,M),a+.55);s.sawWater.update(e,g,b,z);const D=[];return t>.1&&D.push({id:"saw",world:De(Ut.saw,-1.9,.9,1.75)}),t>.2&&t<.42&&D.push({id:"blade",world:ye(s.saw.blade.matrixWorld,0,1,.9)},{id:"coolant",world:z}),t>.5&&t<.6&&D.push({id:"cutface",world:ye(xe(l,x),0,.35,-.2)},{id:"fissure-cut",world:ye(xe(l,T),0,.6,0)}),t>.95&&D.push({id:"slab",world:ye(xe(l,T,hn(0,0,.6)),cl,.3,0)}),{sound:{...Oi,motor:g*.8,water:g*.7},hot:D}}sixEndPoses(){if(!this.sixEnd){const t=Na(Ua),e=hn(-.31,0,0);this.sixEnd={A:xe(t,hn(-2.1,0,.5,-.72)),B1:xe(t,e,hn(-.35,0,0)),S:xe(t,e,hn(0,0,.6)),B2:xe(t,e,hn(.45,0,0))}}return this.sixEnd}showLeftovers(t){const e=this.sixEndPoses(),n=this.w.pieces;t===6&&(this.showPiece(n.A,e.A),this.showPiece(n.B1,e.B1),this.showPiece(n.B2,e.B2),this.w.saw.carriage.position.set(0,0,Ua)),t===8&&(this.showPiece(n.S,hu),n.setMarks(1),n.setKerfs(!0,!0),n.setHole(!0),n.core.visible=!0,rr(n.core,Si.CORE_ASIDE))}static CORE_ASIDE=tu;placePen(t,e,n){const s=this.w.lightbox.pen;if(n<.4||n>.98)return;s.visible=!0;const r=Math.min(3,Math.floor(e*4)),o=e*4-r,a=ke[r>>1],c=r%2===0?Be.ro:Be.ri,l=o*Math.PI*2-Math.PI,h=ye(t,Me.x1+.005,a.cy+c*Math.cos(l),a.cz+c*Math.sin(l)),u=Ut.lightbox;s.position.copy(h).sub(u).add(Ce(.12,.4,.12)),s.rotation.set(.3,0,-.3)}coring(t,e){const n=this.w,s=n.pieces,r=n.drill,o=An(lu,hu,ee(wt(t,0,.14)),1.2);this.showPiece(s.S,o),s.setMarks(1);const a=1.12,c=.92,l=r.headUp-.7,h=(y,x,v,R)=>{const T=ee(wt(t,y,x)),E=wt(t,x,v),P=ee(wt(t,v,R));return ze(ze(ze(l,a,T),c,E),l,P)},u=t<.47;r.outerBit.visible=u,r.innerBit.visible=!u,r.head.position.y=u?h(.14,.2,.38,.45):h(.5,.55,.7,.76);const d=wt(t,.2,.38)>0&&wt(t,.2,.38)<1||wt(t,.55,.7)>0&&wt(t,.55,.7)<1;s.setKerfs(t>.3,t>.64);const f=ee(wt(t,.76,.86)),g=ee(wt(t,.86,.95));if(t>.76){s.setHole(!0);const y=xe(o,tu,gr(0,.6*f,0)),x=gr(Bi.x,Bi.y,Bi.z);this.showBangle(An(y,x,g,.3),0)}s.core.visible=!0;const _=Si.CORE_ASIDE;rr(s.core,_),n.scene.updateMatrixWorld();const m=De(Ut.drill,0,.31+ni+.05,0);n.drillWater.update(e,d?.5:0,[De(Ut.drill,-.2,2.6,.3)],m);const p=[];return t>.14&&p.push({id:"drill",world:De(Ut.drill,.4,2.6,-.3)}),t>.2&&t<.47&&p.push({id:"outer-bit",world:De(Ut.drill,Be.ro+.05,.9,0)}),t>.55&&t<.76&&p.push({id:"inner-bit",world:De(Ut.drill,Be.ri+.05,.85,0)}),t>.97&&(p.push({id:"blank",world:Bi.clone().add(Ce(Be.ro,.05,0))}),p.push({id:"core",world:ye(xe(o,_),0,.1,0)}),p.push({id:"offcut",world:ye(o,Me.x1,-.5,-.4)})),{sound:{...Oi,motor:d?.6:r.head.position.y<l-.01?.25:0,water:d?.3:0},hot:p}}showBangle(t,e){const n=this.w.pieces;rr(n.bangleGroup,t),n.bangleGroup.visible=!0,n.setBangleShape(e)}benchPose(t,e,n){const s=Ut.grind.clone().add(this.w.bench.spindle),r=Ss(e);if(t==="wheel")return xe(Mi(s.clone().add(Ce(0,0,.7+r.ro))),uu,qi(n));const o=t==="drum"?fu:fu+.02;return xe(Mi(s.clone().add(Ce(.45,-(r.ri-o),0))),uu,qi(n))}grinding(t,e,n,s){const r=this.w,o=r.bench,a=t-8,c=a===0?.18:.12,l=a+wt(e,c,.95);this.wheelAngle+=s*18*(wt(e,c-.05,c)*(1-wt(e,.95,1))),o.wheel.visible=a===0,o.drum.visible=a===1,o.buff.visible=a===2;for(const p of o.spinning)p.rotation.x=this.wheelAngle;const h=n*.8,u=["wheel","drum","buff"][a],d=this.benchPose(u,l,h);let f;if(a===0){const p=gr(Bi.x,Bi.y,Bi.z);f=An(p,d,ee(wt(e,0,.18)),1.6)}else{const p=this.benchPose(["wheel","drum","buff"][a-1],a,h);f=An(p,d,ee(wt(e,0,.12)),.5)}this.showBangle(f,l),r.scene.updateMatrixWorld();const g=wt(e,c,c+.03)*(1-wt(e,.95,1)),_=Ta(f).add(a===0?Ce(0,0,-Ss(l).ro):Ce(0,Ss(l).ri,0));a<2&&r.benchWater.update(n,g*.45,[De(Ut.grind,1,2.18,.18)],_);const m=[{id:["wheel","drum","buff"][a],world:a===0?De(Ut.grind,1,2.1,0):De(Ut.grind,1.6,1.45,0)}];return e>.3&&m.push({id:["bangle-rough","bangle-fine","bangle-polish"][a],world:Ta(f).add(Ce(0,Ss(l).ro,.2))}),{sound:{...Oi,motor:g*.5,grind:a<2?g*(a===0?.9:.5):0,buff:a===2?g*.6:0,water:a<2?g*.25:0},hot:m}}static SHOWCASE_POSE=xe(Mi(De(Ut.showcase,0,1.14+.1+.386,0)),qi(-.65),Ex(Math.PI/2));showcase(t){const e=this.w,n=e.showcase,s=this.benchPose("buff",3,0),r=An(s,Si.SHOWCASE_POSE,ee(wt(t,0,.16)),1.4);if(this.showBangle(r,3),t>=1&&this.compare<1){const u=e.pieces.bangle.material;u.jade.uRough.value=1-this.compare,u.roughness=.1+.55*(1-this.compare),u.clearcoat=this.compare}const o=wt(t,.2,.36),a=Ss(3).ri;if(t>.2&&t<.5){const u=ee(o),d=ye(r,-a*u,0,0),f=ye(r,a*u,0,0),g=this.dimLine.geometry.getAttribute("position");g.setXYZ(0,d.x,d.y,d.z),g.setXYZ(1,f.x,f.y,f.z),g.needsUpdate=!0,this.dimLine.visible=!0}const c=wt(t,.36,.5);c>0&&c<1?(n.lamp.visible=!0,n.lamp.position.set(.2,2.6,.5),e.pieces.bangle.material.jade.uEdgeGlow.value=.22+.4*Math.sin(c*Math.PI)):e.pieces.bangle.material.jade.uEdgeGlow.value=this.lightMode==="back"&&t>=.5?.6:.22;const l=u=>{const d=u*Math.PI/180;return ye(r,Math.sin(d)*.386,0,Math.cos(d)*.386)},h=t>.5?[{id:"edge",world:l(200)},{id:"colour",world:l(330)},{id:"lustre",world:l(20)}]:t>.36?[{id:"inspect",world:l(90)}]:[];return t>.3&&t<.5&&h.push({id:"inner-diameter",world:ye(r,0,0,0)}),{hot:h}}keys(t){const e=this.keyCache.get(t);if(e)return e;const n=(_,m,p,y)=>({at:_,pos:De(m,...p),target:De(m,...y)}),s=Ut.mine,r=Ut.wash,o=Ut.plinth,a=Ut.saw,c=Ut.lightbox,l=Ut.drill,h=Ut.grind,u=Ut.showcase,d=()=>{const _=this.shot(t-1,1);return{at:0,pos:_.position.clone(),target:_.target.clone()}},g=({0:()=>[n(0,s,[9.4,9.8,10.2],[-.6,.9,.5]),n(.5,s,[8.6,9.2,9.6],[-.6,.9,.5]),n(1,s,[4.4,5.6,6.4],[-.4,1.6,.3])],1:()=>[d(),n(.28,r,[4.2,4.6,7.4],[0,1.3,0]),n(1,r,[3.6,4,6.6],[0,1.3,0])],2:()=>[d(),n(.2,o,[-1.6,3,8.4],[0,1.45,0]),n(.32,o,[2.2,3,7],[.2,1.5,0]),n(1,o,[2.2,3,7],[.2,1.5,0])],3:()=>[d(),n(.2,o,[2.8,3.2,6.4],[.25,1.55,.3]),n(1,o,[2.6,3.1,6.2],[.25,1.55,.3])],5:()=>[d(),n(.12,a,[6.4,6.2,12],[0,2.6,.2]),n(.22,a,[4.6,4.6,8.4],[0,2.4,.5]),n(.4,a,[3.8,4,7.2],[0,2.3,.6]),n(.5,a,[5.2,5.6,11],[0,2.3,.4]),n(.58,a,[1.4,5,11.2],[0,2,.7]),n(.66,a,[3.6,4.2,7],[-.3,2.3,.3]),n(.88,a,[3.4,4,6.8],[-.3,2.2,.4]),n(1,a,[1.8,4.4,8.6],[-.3,2,.7])],6:()=>[d(),n(.35,c,[.8,6.2,4.4],[0,.75,0]),n(1,c,[.4,5.2,3.6],[0,.75,.1])],7:()=>[d(),n(.14,l,[3.8,3.6,5.2],[0,.9,.1]),n(.5,l,[3.2,3,4.2],[0,.85,.2]),n(.8,l,[4,3.6,5.6],[.6,.8,.35]),n(1,l,[4,3.6,5.6],[.6,.8,.35])],8:()=>[d(),n(.18,h,[4.4,3.6,6.8],[.6,1.3,.8]),n(1,h,[3.2,2.5,4.6],[1,1.35,1])],9:()=>[d(),n(.12,h,[3,2.2,4],[1.3,1.25,.1]),n(1,h,[2.6,2,3.6],[1.3,1.25,.1])],10:()=>[d(),n(.12,h,[3,1.8,3],[1.4,1.2,0]),n(1,h,[2.8,1.7,2.8],[1.4,1.2,0])],11:()=>[d(),n(.16,u,[1,2.1,3.4],[0,1.62,0]),n(.5,u,[.9,2,3],[0,1.62,0])]}[t]??(()=>[n(0,o,[0,3,8],[0,1.4,0])]))();return this.keyCache.set(t,g),g}shot(t,e){if(t===4){const c=-.35+ee(e)*Math.PI*2,l=7.2;return{position:Ce(Math.sin(c)*l,3.4,Math.cos(c)*l),target:Ce(0,1.5,0)}}if(t===11&&e>.5){const c=this.keys(11),l=c[c.length-1],h=l.pos.clone().sub(l.target),u=ee(wt(e,.5,1))*Math.PI*2;return h.applyAxisAngle(Ce(0,1,0),u),{position:l.target.clone().add(h),target:l.target.clone()}}const n=this.keys(t);let s=0;for(;s<n.length-2&&e>n[s+1].at;)s++;const r=n[s],o=n[Math.min(s+1,n.length-1)],a=o.at>r.at?ee(wt(e,r.at,o.at)):1;return{position:r.pos.clone().lerp(o.pos,a),target:r.target.clone().lerp(o.target,a)}}}class Ry{s={stage:0,progress:0,playing:!1,speed:1,guided:!1};listeners=new Set;get state(){return this.s}subscribe(t){return this.listeners.add(t),t(this.s),()=>this.listeners.delete(t)}set(t){const e={...this.s,...t};e.stage=Math.max(0,Math.min(Ma-1,Math.round(e.stage))),e.progress=ud(e.progress),Object.keys(e).some(s=>e[s]!==this.s[s])&&(this.s=e,this.listeners.forEach(s=>s(this.s)))}startJourney(){this.set({stage:0,progress:0,playing:!0,guided:!0})}goTo(t,e=!0){this.set({stage:t,progress:0,playing:e,guided:!1})}next(){this.s.stage<Ma-1&&this.set({stage:this.s.stage+1,progress:0,playing:!0})}prev(){this.s.stage>0&&this.set({stage:this.s.stage-1,progress:0,playing:!0})}play(){this.set({playing:!0,progress:this.s.progress>=1?0:this.s.progress})}pause(){this.set({playing:!1})}toggle(){this.s.playing?this.pause():this.play()}setSpeed(t){this.set({speed:t})}seek(t){this.set({progress:t,playing:!1})}step(t){this.seek(this.s.progress+t)}restore(t){this.set(t)}tick(t){if(!this.s.playing)return 0;const e=Math.min(t,.1)*this.s.speed,n=this.s.progress+e/kv(this.s.stage);return n<1?(this.set({progress:n}),e):(this.s.guided&&this.s.stage<Ma-1?this.set({stage:this.s.stage+1,progress:0}):this.set({progress:1,playing:!1,guided:!1}),e)}}const Fa=[{name:"low",dprCap:.75,shadow:1024},{name:"medium",dprCap:1.25,shadow:2048},{name:"high",dprCap:2,shadow:2048},{name:"ultra",dprCap:2,shadow:4096}];class Cy{constructor(t,e){this.onChange=e,this.level=t?1:2,this.budget=t?33.3:16.7}level;samples=[];cooldown=0;budget;get current(){return Fa[this.level]}get avgFrameMs(){return this.samples.length?this.samples.reduce((t,e)=>t+e,0)/this.samples.length:0}sample(t){if(this.samples.push(t),this.samples.length>90&&this.samples.shift(),this.cooldown>0){this.cooldown--;return}if(this.samples.length<90)return;const e=this.avgFrameMs;e>this.budget*1.35&&this.level>0?this.step(-1):e<this.budget*.6&&this.level<Fa.length-1&&this.step(1)}set(t){this.level=Math.max(0,Math.min(Fa.length-1,t)),this.samples=[],this.cooldown=120,this.onChange(this.current)}step(t){this.level+=t,this.samples=[],this.cooldown=120,this.onChange(this.current)}}class Py{ctx=null;master=null;gains=new Map;on=!1;get enabled(){return this.on}async enable(){this.ctx||this.build(),await this.ctx.resume(),this.master.gain.setTargetAtTime(.55,this.ctx.currentTime,.2),this.on=!0}async disable(){this.on=!1,this.ctx&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.08),setTimeout(()=>{this.on||this.ctx?.suspend()},400))}setMix(t){if(!this.on||!this.ctx)return;const e=this.ctx.currentTime;for(const[n,s]of this.gains)s.gain.setTargetAtTime(t[n],e,.15)}build(){const t=window.AudioContext??window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);const n=(g=2,_=!1)=>{const m=e.createBuffer(1,e.sampleRate*g,e.sampleRate),p=m.getChannelData(0);let y=0,x=0,v=0;for(let T=0;T<p.length;T++){const E=Math.random()*2-1;if(!_){p[T]=E;continue}y=.997*y+E*.029591,x=.985*x+E*.032534,v=.95*v+E*.048056,p[T]=(y+x+v+E*.1)*.6}const R=e.createBufferSource();return R.buffer=m,R.loop=!0,R.start(),R},s=(g,_,m=.7)=>{const p=e.createBiquadFilter();return p.type=g,p.frequency.value=_,p.Q.value=m,p},r=(g,..._)=>{const m=e.createGain();m.gain.value=0;for(let p=0;p<_.length-1;p++)_[p].connect(_[p+1]);_[_.length-1].connect(m),m.connect(this.master),this.gains.set(g,m)},o=(g,_,m)=>{const p=e.createOscillator();p.frequency.value=_;const y=e.createGain();y.gain.value=m,p.connect(y).connect(g),p.start()},a=e.createGain();a.gain.value=.35,o(a.gain,.13,.15),r("wind",n(4,!0),s("lowpass",420),a);const c=e.createGain();c.gain.value=.12;for(const g of[92,184.6]){const _=e.createOscillator();_.type="sawtooth",_.frequency.value=g,_.connect(c),_.start()}r("motor",c,s("lowpass",520,.9));const l=e.createGain();l.gain.value=.5,o(l.gain,7.3,.18),r("water",n(2),s("bandpass",1900,.6),l);const h=e.createGain();h.gain.value=.32,n(2).connect(s("bandpass",3600,1.2)).connect(h);const u=e.createOscillator();u.type="square",u.frequency.value=230;const d=e.createGain();d.gain.value=.03,u.connect(d).connect(h),u.start(),r("grind",h);const f=e.createGain();f.gain.value=.3,o(f.gain,2.1,.08),r("buff",n(3,!0),s("bandpass",700,.5),f)}}function Ly(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}class Iy{constructor(t,e){this.canvas=t;const n=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<760;this.renderer=new V_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_u,this.renderer.localClippingEnabled=!0,this.renderer.info.autoReset=!1,this.world=new by(this.renderer),this.director=new Si(this.world),this.rig=new ux(t),this.quality=new Cy(n,r=>this.applyQuality(r.dprCap,r.shadow)),this.ui=new Vv(e,{start:()=>{this.leaveIntro(),this.journey.startJourney(),this.rig.reset()},explore:()=>this.leaveIntro(),goTo:r=>{this.leaveIntro(),this.journey.goTo(r)},prev:()=>{this.leaveIntro(),this.journey.prev()},next:()=>{this.leaveIntro(),this.journey.next()},toggle:()=>{this.leaveIntro(),this.journey.toggle()},speed:r=>this.journey.setSpeed(r),seek:r=>this.journey.seek(r),step:r=>this.journey.step(r),resetView:()=>this.rig.reset(),toggleTorch:()=>this.setTorch(!this.director.torchMode),toggleSound:()=>void this.toggleSound(),lightMode:r=>{this.director.lightMode=r},compare:r=>{this.director.compare=r}});let s=-1;this.journey.subscribe(r=>{r.stage!==s&&(s=r.stage,this.rig.reset(),r.stage!==2&&this.setTorch(!1),this.rig.setDistanceLimits(r.stage===On.length-1?1.4:2.4,r.stage===0?22:16))}),this.bindPointer(),this.bindContextLoss(),window.addEventListener("resize",()=>this.resize()),window.visualViewport?.addEventListener("resize",()=>this.resize()),new ResizeObserver(()=>this.resize()).observe(this.canvas),document.addEventListener("visibilitychange",()=>{document.hidden&&this.sound.enabled&&this.sound.disable()}),this.applyQuality(this.quality.current.dprCap,this.quality.current.shadow),this.resize(),this.exposeDebug()}renderer;world;director;rig;journey=new Ry;ui;quality;sound=new Py;raycaster=new Rv;pointer=new Y;tmp=new A;machineTime=0;last=performance.now();raf=0;running=!1;frameCount=0;frameWaiters=[];hotspots=[];down=null;intro=!0;exposure=1;start(){if(this.running)return;this.running=!0,this.last=performance.now();const t=e=>{this.running&&(this.raf=requestAnimationFrame(t),this.frame(e))};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}leaveIntro(){this.intro&&(this.intro=!1,this.ui.hideIntro())}setTorch(t){t&&this.journey.state.stage!==2||(this.director.torchMode=t,t||(this.director.manualTorch=null),t&&this.journey.pause())}async toggleSound(){this.sound.enabled?await this.sound.disable():await this.sound.enable()}frame(t){const e=t-this.last;this.last=t;const n=Math.min(e/1e3,.1);this.quality.sample(e);const s=this.journey.tick(n),r=this.journey.state.playing?s:n*.25;this.machineTime+=r;const o=this.journey.state,a=this.director.apply(o.stage,o.progress,this.machineTime,r);this.exposure=this.director.lastExposure,this.sound.setMix(a.sound),this.rig.setFrame(this.ui.frameRect()),this.rig.update(n,a.shot,Si.stationOf(o.stage)),this.renderer.info.reset(),this.renderer.render(this.world.scene,this.rig.camera),this.projectHotspots(a.hotspots),this.pushUi(),this.frameCount++,this.frameWaiters=this.frameWaiters.filter(c=>this.frameCount>=c.at?(c.resolve(),!1):!0)}pushUi(){const t=this.journey.state;this.ui.update({...t,phase:at(Dh(t.stage,t.progress)),cameraMode:this.rig.mode,torch:this.director.torchMode,sound:this.sound.enabled,lightMode:this.director.lightMode,compare:this.director.compare})}projectHotspots(t){const e=this.canvas.clientWidth,n=this.canvas.clientHeight,s=this.intro||this.director.torchMode;this.hotspots=t.map(r=>{this.tmp.copy(r.world).project(this.rig.camera);const o=(this.tmp.x*.5+.5)*e,a=(-this.tmp.y*.5+.5)*n,c=!s&&this.tmp.z<1&&o>8&&o<e-8&&a>64&&a<n-8;return{id:r.id,x:o,y:a,visible:c}}),this.ui.setHotspots(this.hotspots)}lastSize="";resize(){const t=window.innerWidth,e=window.innerHeight,n=`${t}x${e}@${window.devicePixelRatio}`;n!==this.lastSize&&(this.lastSize=n,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.current.dprCap)),this.renderer.setSize(t,e,!1),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.rig.resize(t,e))}applyQuality(t,e){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.world.studio.setShadowMapSize(e),this.world.setShadowDetail(e>1024)}setRay(t){const e=this.canvas.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.rig.camera)}aimTorch(){const t=this.world.pieces.intact,e=this.raycaster.intersectObject(t,!1)[0];e?.face&&(this.director.manualTorch={point:t.worldToLocal(e.point.clone()),normal:e.face.normal.clone()})}bindPointer(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.down={x:e.clientX,y:e.clientY,t:performance.now()}}),t.addEventListener("pointermove",e=>{!this.director.torchMode||e.buttons||(this.setRay(e),this.aimTorch())}),t.addEventListener("pointerup",e=>{const n=this.down;if(this.down=null,!n||Math.hypot(e.clientX-n.x,e.clientY-n.y)>6||performance.now()-n.t>600)return;if(this.setRay(e),this.director.torchMode){this.aimTorch();return}const s=this.raycaster.intersectObjects(this.world.pickables,!0).find(o=>o.object.visible);if(!s){this.ui.closePopover();return}let r;for(let o=s.object;o&&!r;o=o.parent)r=o.userData.info;if(r==="stone"&&s.face){const o=s.object.geometry.getAttribute("rim");r=(o.getX(s.face.a)+o.getX(s.face.b)+o.getX(s.face.c))/3<.5&&this.journey.state.stage>=3?"window":"rind"}r&&this.ui.showInfo(r,e.clientX,e.clientY)})}bindContextLoss(){this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.stop(),this.ui.showFallback(at("fallback.lost.title"),at("fallback.lost.body"),()=>location.reload())}),this.canvas.addEventListener("webglcontextrestored",()=>{this.ui.hideFallback(),this.world.studio.setShadowMapSize(this.quality.current.shadow),this.start()})}exposeDebug(){window.__jade={state:()=>{const t=this.journey.state;return{...t,stageId:On[t.stage].id,cameraMode:this.rig.mode,torch:this.director.torchMode,exposure:Math.round(this.exposure*100)/100,sound:this.sound.enabled,lightMode:this.director.lightMode,compare:this.director.compare,quality:this.quality.current.name,dpr:this.renderer.getPixelRatio(),frames:this.frameCount,avgFrameMs:Math.round(this.quality.avgFrameMs*10)/10,phase:at(Dh(t.stage,t.progress)),intro:this.intro,render:{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:this.renderer.info.programs?.length??0}}},start:()=>{this.leaveIntro(),this.journey.startJourney()},goTo:(t,e=!1)=>{this.leaveIntro(),this.journey.goTo(t,e)},restore:t=>{this.leaveIntro(),this.journey.restore(t)},seek:t=>{this.leaveIntro(),this.journey.seek(t)},play:()=>this.journey.play(),pause:()=>this.journey.pause(),setSpeed:t=>this.journey.setSpeed(t),torch:t=>this.setTorch(t),lightMode:t=>{this.director.lightMode=t},compare:t=>{this.director.compare=t},resetView:()=>this.rig.reset(!0),hotspots:()=>this.hotspots.map(t=>({...t})),frames:t=>new Promise(e=>this.frameWaiters.push({at:this.frameCount+t,resolve:e})),freeze:async(t=2)=>{this.running||this.start(),await new Promise(e=>this.frameWaiters.push({at:this.frameCount+t,resolve:e})),this.stop(),this.renderer.getContext().finish()},unfreeze:()=>this.start(),field:(t,e,n)=>Bn.field.set(t,e,n),cull:t=>{this.director.cullStations=t},look:t=>(this.world.studio.setLook(t),this.world.studio.look),setQuality:t=>this.quality.set(t),frameRect:()=>this.rig.frame,sheet:t=>(t&&this.ui.setSheet(t),this.ui.sheetState),shadowCovers:()=>this.world.studio.shadowCovers(Si.stationOf(this.journey.state.stage).clone().setY(.8))}}}function pu(i,t){const e=document.createElement("div");e.className="fallback",e.setAttribute("role","alert"),e.innerHTML=`<div class="card"><div class="kicker">JADE GENESIS</div><h1>${i}</h1><p>${t}</p></div>`,document.body.append(e)}const mu=document.getElementById("stage"),Dy=document.getElementById("ui");if(!Ly())mu.remove(),pu(at("fallback.noWebgl.title"),at("fallback.noWebgl.body")),document.documentElement.dataset.webgl="unavailable";else try{new Iy(mu,Dy).start(),document.documentElement.dataset.webgl="ready"}catch(i){console.error(i),pu(at("fallback.error.title"),at("fallback.error.body")),document.documentElement.dataset.webgl="error"}
