(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="170",As={ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ad=0,fl=1,Rd=2,lu=1,hu=2,Jn=3,ni=0,ke=1,en=2,Si=0,Rs=1,pl=2,ml=3,gl=4,Cd=5,Gi=100,Pd=101,Ld=102,Id=103,Dd=104,Ud=200,Nd=201,Fd=202,Od=203,Ua=204,Na=205,Bd=206,zd=207,kd=208,Gd=209,Hd=210,Vd=211,Wd=212,Xd=213,qd=214,Fa=0,Oa=1,Ba=2,Is=3,za=4,ka=5,Ga=6,Ha=7,uu=0,Yd=1,jd=2,bi=0,Zd=1,$d=2,Jd=3,du=4,Kd=5,fu=6,pu=7,mu=300,Ds=301,Us=302,Va=303,Wa=304,To=306,_o=1e3,Wi=1001,Xa=1002,dn=1003,Qd=1004,Rr=1005,Pn=1006,Fo=1007,vi=1008,ii=1009,gu=1010,_u=1011,_r=1012,Lc=1013,ji=1014,Nn=1015,br=1016,Ic=1017,Dc=1018,Ns=1020,vu=35902,xu=1021,yu=1022,Ln=1023,Mu=1024,Su=1025,Cs=1026,Fs=1027,Uc=1028,Nc=1029,bu=1030,Fc=1031,Oc=1033,co=33776,lo=33777,ho=33778,uo=33779,qa=35840,Ya=35841,ja=35842,Za=35843,$a=36196,Ja=37492,Ka=37496,Qa=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,cc=37817,lc=37818,hc=37819,uc=37820,dc=37821,fo=36492,fc=36494,pc=36495,wu=36283,mc=36284,gc=36285,_c=36286,tf=3200,ef=3201,Eu=0,nf=1,gi="",tn="srgb",Bs="srgb-linear",Ao="linear",de="srgb",ts=7680,_l=519,sf=512,rf=513,of=514,Tu=515,af=516,cf=517,lf=518,hf=519,vc=35044,vl="300 es",Kn=2e3,vo=2001;class Ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const dr=Math.PI/180,vr=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Bc(i,t){return(i%t+t)%t}function uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function df(i,t,e){return i!==t?(e-i)/(t-i):0}function fr(i,t,e){return(1-e)*i+e*t}function ff(i,t,e,n){return fr(i,t,1-Math.exp(-e*n))}function pf(i,t=1){return t-Math.abs(Bc(i,t*2)-t)}function mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _f(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vf(i,t){return i+Math.random()*(t-i)}function xf(i){return i*(.5-Math.random())}function yf(i){i!==void 0&&(xl=i);let t=xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(i){return i*dr}function Sf(i){return i*vr}function bf(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ce={DEG2RAD:dr,RAD2DEG:vr,generateUUID:Bn,clamp:Pe,euclideanModulo:Bc,mapLinear:uf,inverseLerp:df,lerp:fr,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:_f,randFloat:vf,randFloatSpread:xf,seededRandom:yf,degToRad:Mf,radToDeg:Sf,isPowerOfTwo:bf,ceilPowerOfTwo:wf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Tf,normalize:ue,denormalize:Cn};class q{constructor(t=0,e=0){q.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],L=s[2],R=s[5],E=s[8];return r[0]=o*_+a*x+c*L,r[3]=o*m+a*y+c*R,r[6]=o*p+a*v+c*E,r[1]=l*_+h*x+u*L,r[4]=l*m+h*y+u*R,r[7]=l*p+h*v+u*E,r[2]=d*_+f*x+g*L,r[5]=d*m+f*y+g*R,r[8]=d*p+f*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Oo.makeScale(t,e)),this}rotate(t){return this.premultiply(Oo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oo=new Zt;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){const i=xo("canvas");return i.style.display="block",i}const yl={};function ar(i){i in yl||(yl[i]=!0,console.warn(i))}function Rf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ml=[.64,.33,.3,.6,.15,.06],Sl=[.2126,.7152,.0722],bl=[.3127,.329],wl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Bs]:{primaries:Ml,whitePoint:bl,transfer:Ao,toXYZ:wl,fromXYZ:El,luminanceCoefficients:Sl,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:Ml,whitePoint:bl,transfer:de,toXYZ:wl,fromXYZ:El,luminanceCoefficients:Sl,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});let es;class Lf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=xo("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class Ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Bo(s[o].image)):r.push(Bo(s[o]))}else r=Bo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Bo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;class Xe extends Ji{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Wi,s=Wi,r=Pn,o=vi,a=Ln,c=ii,l=Xe.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Bn(),this.name="",this.source=new Ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new q(0,0),this.repeat=new q(1,1),this.center=new q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=mu;Xe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,L=(p+1)/2,R=(h+d)/4,E=(u+_)/4,P=(g+m)/4;return y>v&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=E/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends Ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ru(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Cu extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nf extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),R=Math.atan2(L,p*x);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const v=a*x;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zo.copy(this).projectOnVector(t),this.sub(zo)}reflect(t){return this.sub(zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zo=new T,Tl=new nn;class oi{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Pr.subVectors(this.max,qs),ns.subVectors(t.a,qs),is.subVectors(t.b,qs),ss.subVectors(t.c,qs),li.subVectors(is,ns),hi.subVectors(ss,is),Ci.subVectors(ns,ss);let e=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Ci.z,Ci.y,li.z,0,-li.x,hi.z,0,-hi.x,Ci.z,0,-Ci.x,-li.y,li.x,0,-hi.y,hi.x,0,-Ci.y,Ci.x,0];return!ko(e,ns,is,ss,Pr)||(e=[1,0,0,0,1,0,0,0,1],!ko(e,ns,is,ss,Pr))?!1:(Lr.crossVectors(li,hi),e=[Lr.x,Lr.y,Lr.z],ko(e,ns,is,ss,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new T,new T,new T,new T,new T,new T,new T,new T],Sn=new T,Cr=new oi,ns=new T,is=new T,ss=new T,li=new T,hi=new T,Ci=new T,qs=new T,Pr=new T,Lr=new T,Pi=new T;function ko(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ff=new oi,Ys=new T,Go=new T;class zs{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ff.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);const e=Ys.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Go)),this.expandByPoint(Ys.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new T,Ho=new T,Ir=new T,ui=new T,Vo=new T,Dr=new T,Wo=new T;class Ro{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ho.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Ho);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ir),a=ui.dot(this.direction),c=-ui.dot(Ir),l=ui.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ho).addScaledVector(Ir,d),f}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Vo.subVectors(e,t),Dr.subVectors(n,t),Wo.crossVectors(Vo,Dr);let o=this.direction.dot(Wo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const c=a*this.direction.dot(Dr.crossVectors(ui,Dr));if(c<0)return null;const l=a*this.direction.dot(Vo.cross(ui));if(l<0||c+l>o)return null;const h=-a*ui.dot(Wo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),di.crossVectors(n,on),di.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),di.crossVectors(n,on)),di.normalize(),Ur.crossVectors(on,di),s[0]=di.x,s[4]=Ur.x,s[8]=on.x,s[1]=di.y,s[5]=Ur.y,s[9]=on.y,s[2]=di.z,s[6]=Ur.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],L=n[15],R=s[0],E=s[4],P=s[8],S=s[12],M=s[1],A=s[5],U=s[9],D=s[13],z=s[2],V=s[6],H=s[10],$=s[14],W=s[3],ct=s[7],mt=s[11],bt=s[15];return r[0]=o*R+a*M+c*z+l*W,r[4]=o*E+a*A+c*V+l*ct,r[8]=o*P+a*U+c*H+l*mt,r[12]=o*S+a*D+c*$+l*bt,r[1]=h*R+u*M+d*z+f*W,r[5]=h*E+u*A+d*V+f*ct,r[9]=h*P+u*U+d*H+f*mt,r[13]=h*S+u*D+d*$+f*bt,r[2]=g*R+_*M+m*z+p*W,r[6]=g*E+_*A+m*V+p*ct,r[10]=g*P+_*U+m*H+p*mt,r[14]=g*S+_*D+m*$+p*bt,r[3]=x*R+y*M+v*z+L*W,r[7]=x*E+y*A+v*V+L*ct,r[11]=x*P+y*U+v*H+L*mt,r[15]=x*S+y*D+v*$+L*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,L=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,R=e*x+n*y+s*v+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/R;return t[0]=x*E,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=y*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=v*E,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=L*E,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=c*l,y=c*h,v=c*u,L=n.x,R=n.y,E=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+v)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+x)*R,s[7]=0,s[8]=(g+y)*E,s[9]=(m-x)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],bn.copy(this);const l=1/r,h=1/o,u=1/a;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,e.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Kn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Kn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===Kn)g=(o+r)*u,_=-2*u;else if(a===vo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new T,bn=new Ht,Of=new T(0,0,0),Bf=new T(1,1,1),di=new T,Ur=new T,on=new T,Al=new Ht,Rl=new nn;class sn{constructor(t=0,e=0,n=0,s=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const Cl=new T,os=new nn,Yn=new Ht,Nr=new T,js=new T,kf=new T,Gf=new nn,Pl=new T(1,0,0),Ll=new T(0,1,0),Il=new T(0,0,1),Dl={type:"added"},Hf={type:"removed"},as={type:"childadded",child:null},Xo={type:"childremoved",child:null};class Te extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new T,e=new sn,n=new nn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Zt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(js,Nr,this.up):Yn.lookAt(Nr,js,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Yn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Xo.child=t,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new T(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new T,jn=new T,qo=new T,Zn=new T,cs=new T,ls=new T,Ul=new T,Yo=new T,jo=new T,Zo=new T,$o=new ne,Jo=new ne,Ko=new ne;class _n{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),jn.subVectors(n,e),qo.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(jn),c=wn.dot(qo),l=jn.dot(jn),h=jn.dot(qo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return $o.setScalar(0),Jo.setScalar(0),Ko.setScalar(0),$o.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),Ko.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($o,r.x),o.addScaledVector(Jo,r.y),o.addScaledVector(Ko,r.z),o}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),jn.subVectors(t,e),wn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;cs.subVectors(s,n),ls.subVectors(r,n),Yo.subVectors(t,n);const c=cs.dot(Yo),l=ls.dot(Yo);if(c<=0&&l<=0)return e.copy(n);jo.subVectors(t,s);const h=cs.dot(jo),u=ls.dot(jo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(cs,o);Zo.subVectors(t,r);const f=cs.dot(Zo),g=ls.dot(Zo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ls,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ul.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Ul,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(cs,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Bc(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qo(o,r,t+1/3),this.g=Qo(o,r,t),this.b=Qo(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=Pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return se.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Pe(Ve.r*255,0,255))*65536+Math.round(Pe(Ve.g*255,0,255))*256+Math.round(Pe(Ve.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=tn){se.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,s=Ve.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Fr);const n=fr(fi.h,Fr.h,e),s=fr(fi.s,Fr.s,e),r=fr(fi.l,Fr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Lt;Lt.NAMES=Pu;let Vf=0;class Ki extends Ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Bn(),this.name="",this.blending=Rs,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends Ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new T,Or=new q;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}}class Lu extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Iu extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wf=0;const pn=new Ht,ta=new Te,hs=new T,an=new oi,Zs=new oi,Fe=new T;class ve extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?Iu:Lu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return ta.lookAt(t),ta.updateMatrix(),this.applyMatrix4(ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(an.min,Zs.min),an.expandByPoint(Fe),Fe.addVectors(an.max,Zs.max),an.expandByPoint(Fe)):(an.expandByPoint(Zs.min),an.expandByPoint(Zs.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Fe.add(hs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new T,c[P]=new T;const l=new T,h=new T,u=new T,d=new q,f=new q,g=new q,_=new T,m=new T;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[P].add(_),a[S].add(_),a[M].add(_),c[P].add(m),c[S].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,S=x.length;P<S;++P){const M=x[P],A=M.start,U=M.count;for(let D=A,z=A+U;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new T,v=new T,L=new T,R=new T;function E(P){L.fromBufferAttribute(s,P),R.copy(L);const S=a[P];y.copy(S),y.sub(L.multiplyScalar(L.dot(S))).normalize(),v.crossVectors(R,S);const A=v.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,A)}for(let P=0,S=x.length;P<S;++P){const M=x[P],A=M.start,U=M.count;for(let D=A,z=A+U;D<z;D+=3)E(t.getX(D+0)),E(t.getX(D+1)),E(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Ht,Li=new Ro,Br=new zs,Fl=new T,zr=new T,kr=new T,Gr=new T,ea=new T,Hr=new T,Ol=new T,Vr=new T;class At extends Te{constructor(t=new ve,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ea.fromBufferAttribute(u,t),o?Hr.addScaledVector(ea,h):Hr.addScaledVector(ea.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Br.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Br,Fl)===null||Li.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,L=y;v<L;v+=3){const R=a.getX(v),E=a.getX(v+1),P=a.getX(v+2);s=Wr(this,p,t,n,l,h,u,R,E,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Wr(this,o,t,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,L=y;v<L;v+=3){const R=v,E=v+1,P=v+2;s=Wr(this,p,t,n,l,h,u,R,E,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=Wr(this,o,t,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xf(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ni,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,zr),i.getVertexPosition(c,kr),i.getVertexPosition(l,Gr);const h=Xf(i,t,e,n,zr,kr,Gr,Ol);if(h){const u=new T;_n.getBarycoord(Ol,zr,kr,Gr,u),s&&(h.uv=_n.getInterpolatedAttribute(s,a,c,l,u,new q)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,c,l,u,new q)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new T,materialIndex:0};_n.getNormal(zr,kr,Gr,d.normal),h.face=d,h.barycoord=u}return h}class vn extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(_,m,p,x,y,v,L,R,E,P,S){const M=v/E,A=L/P,U=v/2,D=L/2,z=R/2,V=E+1,H=P+1;let $=0,W=0;const ct=new T;for(let mt=0;mt<H;mt++){const bt=mt*A-D;for(let qt=0;qt<V;qt++){const ae=qt*M-U;ct[_]=ae*x,ct[m]=bt*y,ct[p]=z,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[p]=R>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(qt/E),u.push(1-mt/P),$+=1}}for(let mt=0;mt<P;mt++)for(let bt=0;bt<E;bt++){const qt=d+bt+V*mt,ae=d+bt+V*(mt+1),Z=d+(bt+1)+V*(mt+1),st=d+(bt+1)+V*mt;c.push(qt,ae,st),c.push(ae,Z,st),W+=6}a.addGroup(f,W,S),f+=W,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=Os(i[e]);for(const s in n)t[s]=n[s]}return t}function qf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Du(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Yf={clone:Os,merge:Ze};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new T,Bl=new q,zl=new q;class un extends Uu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Bl,zl),e.subVectors(zl,Bl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,ds=1;class $f extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(us,ds,t,e);s.layers=this.layers,this.add(s);const r=new un(us,ds,t,e);r.layers=this.layers,this.add(r);const o=new un(us,ds,t,e);o.layers=this.layers,this.add(o);const a=new un(us,ds,t,e);a.layers=this.layers,this.add(a);const c=new un(us,ds,t,e);c.layers=this.layers,this.add(c);const l=new un(us,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nu extends Xe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ds,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jf extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vn(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Si});r.uniforms.tEquirect.value=e;const o=new At(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=Pn),new $f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const na=new T,Kf=new T,Qf=new Zt;class Dn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=na.subVectors(n,e).cross(Kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(na),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(na).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new zs,Xr=new T;class kc{constructor(t=new Dn,e=new Dn,n=new Dn,s=new Dn,r=new Dn,o=new Dn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Kn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+x).normalize(),n[3].setComponents(c-o,d-h,m-g,v-x).normalize(),n[4].setComponents(c-a,d-u,m-_,v-y).normalize(),e===Kn)n[5].setComponents(c+a,d+u,m+_,v+y).normalize();else if(e===vo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ti extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const y=x+l*p,v=x+l*(p+1),L=x+1+l*(p+1),R=x+1+l*p;f.push(y,v,R),f.push(v,L,R)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.width,t.height,t.widthSegments,t.heightSegments)}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qp=`uniform bool receiveShadow;
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
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,a0=`#if DEPTH_PACKING == 3200
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
}`,c0=`#define DISTANCE
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
}`,l0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,_0=`#define LAMBERT
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
}`,v0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,S0=`#define PHONG
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
}`,b0=`#define PHONG
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
}`,w0=`#define STANDARD
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
}`,E0=`#define STANDARD
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
}`,T0=`#define TOON
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
}`,A0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,L0=`uniform vec3 color;
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
}`,I0=`uniform float rotation;
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
}`,D0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:rp,alphatest_pars_fragment:op,aomap_fragment:ap,aomap_pars_fragment:cp,batching_pars_vertex:lp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:dp,bsdfs:fp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:_p,clipping_planes_pars_vertex:vp,clipping_planes_vertex:xp,color_fragment:yp,color_pars_fragment:Mp,color_pars_vertex:Sp,color_vertex:bp,common:wp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Ip,envmap_fragment:Dp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Yp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Vp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:qp,lights_toon_fragment:jp,lights_toon_pars_fragment:Zp,lights_phong_fragment:$p,lights_phong_pars_fragment:Jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:cm,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:vm,normal_fragment_maps:xm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:Sm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Lm,dithering_fragment:Im,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Om,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:km,skinning_pars_vertex:Gm,skinning_vertex:Hm,skinnormal_vertex:Vm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:jm,transmission_pars_fragment:Zm,uv_pars_fragment:$m,uv_pars_vertex:Jm,uv_vertex:Km,worldpos_vertex:Qm,background_vert:t0,background_frag:e0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:o0,depth_frag:a0,distanceRGBA_vert:c0,distanceRGBA_frag:l0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:_0,meshmatcap_vert:v0,meshmatcap_frag:x0,meshnormal_vert:y0,meshnormal_frag:M0,meshphong_vert:S0,meshphong_frag:b0,meshphysical_vert:w0,meshphysical_frag:E0,meshtoon_vert:T0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:L0,sprite_vert:I0,sprite_frag:D0},lt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Un={basic:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ze([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ze([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ze([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ze([lt.points,lt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ze([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ze([lt.common,lt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ze([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ze([lt.sprite,lt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ze([lt.common,lt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ze([lt.lights,lt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Un.physical={uniforms:Ze([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const qr={r:0,b:0,g:0},Di=new sn,U0=new Ht;function N0(i,t,e,n,s,r,o){const a=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?p(a,c):v&&v.isColor&&(p(v,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===To)?(h===void 0&&(h=new At(new vn(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Os(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(y.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(Di)),h.material.toneMapped=se.getTransfer(v.colorSpace)!==de,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new At(new Ti(2,2),new Ei({name:"BackgroundMaterial",uniforms:Os(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(qr,Du(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:m}}function F0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,A,U,D,z){let V=!1;const H=u(D,U,A);r!==H&&(r=H,l(r.object)),V=f(M,D,U,z),V&&g(M,D,U,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(M,A,U,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,A,U){const D=U.wireframe===!0;let z=n[M.id];z===void 0&&(z={},n[M.id]=z);let V=z[A.id];V===void 0&&(V={},z[A.id]=V);let H=V[D];return H===void 0&&(H=d(c()),V[D]=H),H}function d(M){const A=[],U=[],D=[];for(let z=0;z<e;z++)A[z]=0,U[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,A,U,D){const z=r.attributes,V=A.attributes;let H=0;const $=U.getAttributes();for(const W in $)if($[W].location>=0){const mt=z[W];let bt=V[W];if(bt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),mt===void 0||mt.attribute!==bt||bt&&mt.data!==bt.data)return!0;H++}return r.attributesNum!==H||r.index!==D}function g(M,A,U,D){const z={},V=A.attributes;let H=0;const $=U.getAttributes();for(const W in $)if($[W].location>=0){let mt=V[W];mt===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));const bt={};bt.attribute=mt,mt&&mt.data&&(bt.data=mt.data),z[W]=bt,H++}r.attributes=z,r.attributesNum=H,r.index=D}function _(){const M=r.newAttributes;for(let A=0,U=M.length;A<U;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const U=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;U[M]=1,D[M]===0&&(i.enableVertexAttribArray(M),D[M]=1),z[M]!==A&&(i.vertexAttribDivisor(M,A),z[M]=A)}function x(){const M=r.newAttributes,A=r.enabledAttributes;for(let U=0,D=A.length;U<D;U++)A[U]!==M[U]&&(i.disableVertexAttribArray(U),A[U]=0)}function y(M,A,U,D,z,V,H){H===!0?i.vertexAttribIPointer(M,A,U,z,V):i.vertexAttribPointer(M,A,U,D,z,V)}function v(M,A,U,D){_();const z=D.attributes,V=U.getAttributes(),H=A.defaultAttributeValues;for(const $ in V){const W=V[$];if(W.location>=0){let ct=z[$];if(ct===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor)),ct!==void 0){const mt=ct.normalized,bt=ct.itemSize,qt=t.get(ct);if(qt===void 0)continue;const ae=qt.buffer,Z=qt.type,st=qt.bytesPerElement,Et=Z===i.INT||Z===i.UNSIGNED_INT||ct.gpuType===Lc;if(ct.isInterleavedBufferAttribute){const ot=ct.data,Nt=ot.stride,Vt=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let kt=0;kt<W.locationSize;kt++)p(W.location+kt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let kt=0;kt<W.locationSize;kt++)m(W.location+kt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let kt=0;kt<W.locationSize;kt++)y(W.location+kt,bt/W.locationSize,Z,mt,Nt*st,(Vt+bt/W.locationSize*kt)*st,Et)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,ct.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let ot=0;ot<W.locationSize;ot++)y(W.location+ot,bt/W.locationSize,Z,mt,bt*st,bt/W.locationSize*ot*st,Et)}}else if(H!==void 0){const mt=H[$];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(W.location,mt);break;case 3:i.vertexAttrib3fv(W.location,mt);break;case 4:i.vertexAttrib4fv(W.location,mt);break;default:i.vertexAttrib1fv(W.location,mt)}}}}x()}function L(){P();for(const M in n){const A=n[M];for(const U in A){const D=A[U];for(const z in D)h(D[z].object),delete D[z];delete A[U]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const U in A){const D=A[U];for(const z in D)h(D[z].object),delete D[z];delete A[U]}delete n[M.id]}function E(M){for(const A in n){const U=n[A];if(U[M.id]===void 0)continue;const D=U[M.id];for(const z in D)h(D[z].object),delete D[z];delete U[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function O0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function B0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ii&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Nn&&!P)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:R}}function z0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Dn,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let L=0;L!==y;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function k0(i){let t=new WeakMap;function e(o,a){return a===Va?o.mapping=Ds:a===Wa&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Wa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ou extends Uu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,kl=[.125,.215,.35,.446,.526,.582],Hi=20,ia=new Ou,Gl=new Lt;let sa=null,ra=0,oa=0,aa=!1;const Bi=(1+Math.sqrt(5))/2,fs=1/Bi,Hl=[new T(-Bi,fs,0),new T(Bi,fs,0),new T(-fs,0,Bi),new T(fs,0,Bi),new T(0,Bi,-fs),new T(0,Bi,fs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sa,ra,oa),this._renderer.xr.enabled=aa,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sa=this._renderer.getRenderTarget(),ra=this._renderer.getActiveCubeFace(),oa=this._renderer.getActiveMipmapLevel(),aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:br,format:Ln,colorSpace:Bs,depthBuffer:!1},s=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G0(r)),this._blurMaterial=H0(r,t,e)}return s}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s){const a=new un(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gl),h.toneMapping=bi,h.autoClear=!1;const f=new si({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),g=new At(new vn,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Gl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Yr(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ds||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hl[(s-r-1)%Hl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Hi;m>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let x=0;for(let E=0;E<Hi;++E){const P=E/_,S=Math.exp(-P*P/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],L=3*v*(s>y-Es?s-y+Es:0),R=4*(this._cubeSize-v);Yr(e,L,R,3*v,2*v),c.setRenderTarget(e),c.render(u,ia)}}function G0(i){const t=[],e=[],n=[];let s=i;const r=i-Es+1+kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Es?c=kl[o-i+Es-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let R=0;R<f;R++){const E=R%3*2/3-1,P=R>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];x.set(S,_*g*R),y.set(d,m*g*R);const M=[R,R,R,R,R,R];v.set(M,p*g*R)}const L=new ve;L.setAttribute("position",new be(x,_)),L.setAttribute("uv",new be(y,m)),L.setAttribute("faceIndex",new be(v,p)),t.push(L),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vl(i,t,e){const n=new Zi(i,t,e);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function H0(i,t,e){const n=new Float32Array(Hi),s=new T(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Wl(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Xl(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function V0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Va||c===Wa,h=c===Ds||c===Us;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new xc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new xc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function W0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const L=x[y+0],R=x[y+1],E=x[y+2];d.push(L,R,R,E,E,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const L=y+0,R=y+1,E=y+2;d.push(L,R,R,E,E,L)}}else return;const m=new(Au(d)?Iu:Lu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function q0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Y0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function j0(i,t,e){const n=new WeakMap,s=new ne;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*R*4*u),P=new Cu(E,L,R,u);P.type=Nn,P.needsUpdate=!0;const S=v*4;for(let A=0;A<u;A++){const U=p[A],D=x[A],z=y[A],V=L*R*4*A;for(let H=0;H<U.count;H++){const $=H*S;g===!0&&(s.fromBufferAttribute(U,H),E[V+$+0]=s.x,E[V+$+1]=s.y,E[V+$+2]=s.z,E[V+$+3]=0),_===!0&&(s.fromBufferAttribute(D,H),E[V+$+4]=s.x,E[V+$+5]=s.y,E[V+$+6]=s.z,E[V+$+7]=0),m===!0&&(s.fromBufferAttribute(z,H),E[V+$+8]=s.x,E[V+$+9]=s.y,E[V+$+10]=s.z,E[V+$+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new q(L,R)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Z0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Bu extends Xe{constructor(t,e,n,s,r,o,a,c,l,h=Cs){if(h!==Cs&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=ji),n===void 0&&h===Fs&&(n=Ns),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zu=new Xe,ql=new Bu(1,1),ku=new Cu,Gu=new Nf,Hu=new Nu,Yl=[],jl=[],Zl=new Float32Array(16),$l=new Float32Array(9),Jl=new Float32Array(4);function ks(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yl[s];if(r===void 0&&(r=new Float32Array(s),Yl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Co(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),Ne(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;$l.set(n),i.uniformMatrix3fv(this.addr,!1,$l),Ne(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Zl.set(n),i.uniformMatrix4fv(this.addr,!1,Zl),Ne(e,n)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=Tu,r=ql):r=zu,e.setTexture2D(t||r,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gu,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hu,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function mg(i){switch(i){case 5126:return $0;case 35664:return J0;case 35665:return K0;case 35666:return Q0;case 35674:return tg;case 35675:return eg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return ag;case 36294:return cg;case 36295:return lg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){const e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){const e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function xg(i,t){const e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){const e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mg(i,t){const e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sg(i,t){const e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function wg(i,t){i.uniform2iv(this.addr,t)}function Eg(i,t){i.uniform3iv(this.addr,t)}function Tg(i,t){i.uniform4iv(this.addr,t)}function Ag(i,t){i.uniform1uiv(this.addr,t)}function Rg(i,t){i.uniform2uiv(this.addr,t)}function Cg(i,t){i.uniform3uiv(this.addr,t)}function Pg(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zu,r[o])}function Ig(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Gu,r[o])}function Dg(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hu,r[o])}function Ug(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ku,r[o])}function Ng(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return vg;case 35666:return xg;case 35674:return yg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Eg;case 35669:case 35673:return Tg;case 5125:return Ag;case 36294:return Rg;case 36295:return Cg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ug}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mg(e.type)}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ng(e.type)}}class Bg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function Kl(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kl(e,l===void 0?new Fg(a,i,t):new Og(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Bg(a),Kl(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kg=37297;let Gg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const th=new Zt;function Vg(i){se._getMatrix(th,se.workingColorSpace,i);const t=`mat3( ${th.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ao:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function eh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Hg(i.getShaderSource(t),o)}else return s}function Wg(i,t){const e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,t){let e;switch(t){case Zd:e="Linear";break;case $d:e="Reinhard";break;case Jd:e="Cineon";break;case du:e="ACESFilmic";break;case fu:e="AgX";break;case pu:e="Neutral";break;case Kd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const jr=new T;function qg(){se.getLuminanceCoefficients(jr);const i=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function jg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function cr(i){return i!==""}function nh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ih(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(i){return i.replace($g,Kg)}const Jg=new Map;function Kg(i,t){let e=Jt[t];if(e===void 0){const n=Jg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yc(e)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(i){return i.replace(Qg,t_)}function t_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function e_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function n_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case To:t="ENVMAP_TYPE_CUBE_UV";break}return t}function i_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function s_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case Yd:t="ENVMAP_BLENDING_MIX";break;case jd:t="ENVMAP_BLENDING_ADD";break}return t}function r_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function o_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=e_(e),l=n_(e),h=i_(e),u=s_(e),d=r_(e),f=Yg(e),g=jg(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(m=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==bi?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=yc(o),o=nh(o,e),o=ih(o,e),a=yc(a),a=nh(a,e),a=ih(a,e),o=sh(o),a=sh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,L=Ql(s,s.VERTEX_SHADER,y),R=Ql(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(L).trim(),z=s.getShaderInfoLog(R).trim();let V=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,R);else{const $=eh(s,L,"vertex"),W=eh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+U+`
`+$+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||z==="")&&(H=!1);H&&(A.diagnostics={runnable:V,programLog:U,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(L),s.deleteShader(R),P=new po(s,_),S=Zg(s,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,kg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=R,this}let a_=0;class c_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new l_(t),e.set(t,n)),n}}class l_{constructor(t){this.id=a_++,this.code=t,this.usedTimes=0}}function h_(i,t,e,n,s,r,o){const a=new zc,c=new c_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,U,D){const z=U.fog,V=D.geometry,H=S.isMeshStandardMaterial?U.environment:null,$=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),W=$&&$.mapping===To?$.image.height:null,ct=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const mt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,bt=mt!==void 0?mt.length:0;let qt=0;V.morphAttributes.position!==void 0&&(qt=1),V.morphAttributes.normal!==void 0&&(qt=2),V.morphAttributes.color!==void 0&&(qt=3);let ae,Z,st,Et;if(ct){const he=Un[ct];ae=he.vertexShader,Z=he.fragmentShader}else ae=S.vertexShader,Z=S.fragmentShader,c.update(S),st=c.getVertexShaderID(S),Et=c.getFragmentShaderID(S);const ot=i.getRenderTarget(),Nt=i.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,kt=D.isBatchedMesh===!0,ie=!!S.map,K=!!S.matcap,it=!!$,I=!!S.aoMap,It=!!S.lightMap,tt=!!S.bumpMap,xt=!!S.normalMap,at=!!S.displacementMap,Bt=!!S.emissiveMap,gt=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,B=S.clearcoat>0,Y=S.dispersion>0,Q=S.iridescence>0,j=S.sheen>0,Tt=S.transmission>0,ht=b&&!!S.anisotropyMap,_t=B&&!!S.clearcoatMap,Qt=B&&!!S.clearcoatNormalMap,et=B&&!!S.clearcoatRoughnessMap,yt=Q&&!!S.iridescenceMap,zt=Q&&!!S.iridescenceThicknessMap,Gt=j&&!!S.sheenColorMap,Mt=j&&!!S.sheenRoughnessMap,ee=!!S.specularMap,$t=!!S.specularColorMap,pe=!!S.specularIntensityMap,N=Tt&&!!S.transmissionMap,ut=Tt&&!!S.thicknessMap,X=!!S.gradientMap,J=!!S.alphaMap,pt=S.alphaTest>0,dt=!!S.alphaHash,Yt=!!S.extensions;let we=bi;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(we=i.toneMapping);const Ge={shaderID:ct,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:Z,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:kt,batchingColor:kt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Bs,alphaToCoverage:!!S.alphaToCoverage,map:ie,matcap:K,envMap:it,envMapMode:it&&$.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:It,bumpMap:tt,normalMap:xt,displacementMap:d&&at,emissiveMap:Bt,normalMapObjectSpace:xt&&S.normalMapType===nf,normalMapTangentSpace:xt&&S.normalMapType===Eu,metalnessMap:gt,roughnessMap:C,anisotropy:b,anisotropyMap:ht,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:Qt,clearcoatRoughnessMap:et,dispersion:Y,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:zt,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:Mt,specularMap:ee,specularColorMap:$t,specularIntensityMap:pe,transmission:Tt,transmissionMap:N,thicknessMap:ut,gradientMap:X,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:dt,combine:S.combine,mapUv:ie&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:It&&_(S.lightMap.channel),bumpMapUv:tt&&_(S.bumpMap.channel),normalMapUv:xt&&_(S.normalMap.channel),displacementMapUv:at&&_(S.displacementMap.channel),emissiveMapUv:Bt&&_(S.emissiveMap.channel),metalnessMapUv:gt&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(S.sheenRoughnessMap.channel),specularMapUv:ee&&_(S.specularMap.channel),specularColorMapUv:$t&&_(S.specularColorMap.channel),specularIntensityMapUv:pe&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ut&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ie||J),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Nt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&se.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:Bt&&S.emissiveMap.isVideoTexture===!0&&se.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===en,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let A;if(M){const U=Un[M];A=Yf.clone(U.uniforms)}else A=S.uniforms;return A}function L(S,M){let A;for(let U=0,D=h.length;U<D;U++){const z=h[U];if(z.cacheKey===M){A=z,++A.usedTimes;break}}return A===void 0&&(A=new o_(i,M,S,r),h.push(A)),A}function R(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:R,releaseShaderCache:E,programs:h,dispose:P}}function u_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function d_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function oh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ah(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||d_),n.length>1&&n.sort(d||oh),s.length>1&&s.sort(d||oh)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function f_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ah,i.set(n,[o])):s>=r.length?(o=new ah,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function p_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Lt};break;case"SpotLight":e={position:new T,direction:new T,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function m_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let g_=0;function __(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){const t=new p_,e=m_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,r=new Ht,o=new Ht;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,L=0,R=0,E=0;l.sort(__);for(let S=0,M=l.length;S<M;S++){const A=l[S],U=A.color,D=A.intensity,z=A.distance,V=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=U.r*D,u+=U.g*D,d+=U.b*D;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],D);E++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const $=A.shadow,W=e.get(A);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=A.shadow.matrix,x++}n.directional[f]=H,f++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(U).multiplyScalar(D),H.distance=z,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[_]=H;const $=A.shadow;if(A.map&&(n.spotLightMap[L]=A.map,L++,$.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[_]=$.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,v++}_++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(U).multiplyScalar(D),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const $=A.shadow,W=e.get(A);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=A.shadow.matrix,y++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(D),H.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==L||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=L,P.numLightProbes=E,n.version=g_++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ch(i){const t=new v_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function x_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ch(i),t.set(s,[a])):r>=o.length?(a=new ch(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class y_ extends Ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M_ extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
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
}`;function w_(i,t,e){let n=new kc;const s=new q,r=new q,o=new ne,a=new y_({depthPacking:ef}),c=new M_,l={},h=e.maxTextureSize,u={[ni]:ke,[ke]:ni,[en]:en},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q},radius:{value:4}},vertexShader:S_,fragmentShader:b_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let p=this.type;this.render=function(R,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Si),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=p!==Jn&&this.type===Jn,z=p===Jn&&this.type!==Jn;for(let V=0,H=R.length;V<H;V++){const $=R[V],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ct=W.getFrameExtents();if(s.multiply(ct),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,W.mapSize.y=r.y)),W.map===null||D===!0||z===!0){const bt=this.type!==Jn?{minFilter:dn,magFilter:dn}:{};W.map!==null&&W.map.dispose(),W.map=new Zi(s.x,s.y,bt),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const mt=W.getViewportCount();for(let bt=0;bt<mt;bt++){const qt=W.getViewport(bt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),U.viewport(o),W.updateMatrices($,bt),n=W.getFrustum(),v(E,P,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Jn&&x(W,P),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,A)};function x(R,E){const P=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(E,null,P,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(E,null,P,f,_,null)}function y(R,E,P,S){let M=null;const A=P.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=M.uuid,D=E.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let V=z[D];V===void 0&&(V=M.clone(),z[D]=V,E.addEventListener("dispose",L)),M=V}if(M.visible=E.visible,M.wireframe=E.wireframe,S===Jn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=P}return M}function v(R,E,P,S,M){if(R.visible===!1)return;if(R.layers.test(E.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Jn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,R.matrixWorld);const D=t.update(R),z=R.material;if(Array.isArray(z)){const V=D.groups;for(let H=0,$=V.length;H<$;H++){const W=V[H],ct=z[W.materialIndex];if(ct&&ct.visible){const mt=y(R,ct,S,M);R.onBeforeShadow(i,R,E,P,D,mt,W),i.renderBufferDirect(P,null,D,mt,R,W),R.onAfterShadow(i,R,E,P,D,mt,W)}}}else if(z.visible){const V=y(R,z,S,M);R.onBeforeShadow(i,R,E,P,D,V,null),i.renderBufferDirect(P,null,D,V,R,null),R.onAfterShadow(i,R,E,P,D,V,null)}}const U=R.children;for(let D=0,z=U.length;D<z;D++)v(U[D],E,P,S,M)}function L(R){R.target.removeEventListener("dispose",L);for(const P in l){const S=l[P],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const E_={[Fa]:Oa,[Ba]:Ga,[za]:Ha,[Is]:ka,[Oa]:Fa,[Ga]:Ba,[Ha]:za,[ka]:Is};function T_(i,t){function e(){let N=!1;const ut=new ne;let X=null;const J=new ne(0,0,0,0);return{setMask:function(pt){X!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){N=pt},setClear:function(pt,dt,Yt,we,Ge){Ge===!0&&(pt*=we,dt*=we,Yt*=we),ut.set(pt,dt,Yt,we),J.equals(ut)===!1&&(i.clearColor(pt,dt,Yt,we),J.copy(ut))},reset:function(){N=!1,X=null,J.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,X=null,J=null,pt=null;return{setReversed:function(dt){if(ut!==dt){const Yt=t.get("EXT_clip_control");ut?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const we=pt;pt=null,this.setClear(we)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?ot(i.DEPTH_TEST):Nt(i.DEPTH_TEST)},setMask:function(dt){X!==dt&&!N&&(i.depthMask(dt),X=dt)},setFunc:function(dt){if(ut&&(dt=E_[dt]),J!==dt){switch(dt){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){N=dt},setClear:function(dt){pt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){N=!1,X=null,J=null,pt=null,ut=!1}}}function s(){let N=!1,ut=null,X=null,J=null,pt=null,dt=null,Yt=null,we=null,Ge=null;return{setTest:function(he){N||(he?ot(i.STENCIL_TEST):Nt(i.STENCIL_TEST))},setMask:function(he){ut!==he&&!N&&(i.stencilMask(he),ut=he)},setFunc:function(he,yn,Vn){(X!==he||J!==yn||pt!==Vn)&&(i.stencilFunc(he,yn,Vn),X=he,J=yn,pt=Vn)},setOp:function(he,yn,Vn){(dt!==he||Yt!==yn||we!==Vn)&&(i.stencilOp(he,yn,Vn),dt=he,Yt=yn,we=Vn)},setLocked:function(he){N=he},setClear:function(he){Ge!==he&&(i.clearStencil(he),Ge=he)},reset:function(){N=!1,ut=null,X=null,J=null,pt=null,dt=null,Yt=null,we=null,Ge=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,L=null,R=null,E=new Lt(0,0,0),P=0,S=!1,M=null,A=null,U=null,D=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let ct=null,mt={};const bt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),ae=new ne().fromArray(bt),Z=new ne().fromArray(qt);function st(N,ut,X,J){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<X;Yt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ut+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const Et={};Et[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(Is),tt(!1),xt(fl),ot(i.CULL_FACE),I(Si);function ot(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Nt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Vt(N,ut){return u[N]!==ut?(i.bindFramebuffer(N,ut),u[N]=ut,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function kt(N,ut){let X=f,J=!1;if(N){X=d.get(ut),X===void 0&&(X=[],d.set(ut,X));const pt=N.textures;if(X.length!==pt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Yt=pt.length;dt<Yt;dt++)X[dt]=i.COLOR_ATTACHMENT0+dt;X.length=pt.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function ie(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const K={[Gi]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Ld]:i.FUNC_REVERSE_SUBTRACT};K[Id]=i.MIN,K[Dd]=i.MAX;const it={[Ud]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[Od]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Gd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[qd]:i.ONE_MINUS_CONSTANT_ALPHA};function I(N,ut,X,J,pt,dt,Yt,we,Ge,he){if(N===Si){_===!0&&(Nt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),N!==Cd){if(N!==m||he!==S){if((p!==Gi||v!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,v=Gi),he)switch(N){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,L=null,R=null,E.set(0,0,0),P=0,m=N,S=he}return}pt=pt||ut,dt=dt||X,Yt=Yt||J,(ut!==p||pt!==v)&&(i.blendEquationSeparate(K[ut],K[pt]),p=ut,v=pt),(X!==x||J!==y||dt!==L||Yt!==R)&&(i.blendFuncSeparate(it[X],it[J],it[dt],it[Yt]),x=X,y=J,L=dt,R=Yt),(we.equals(E)===!1||Ge!==P)&&(i.blendColor(we.r,we.g,we.b,Ge),E.copy(we),P=Ge),m=N,S=!1}function It(N,ut){N.side===en?Nt(i.CULL_FACE):ot(i.CULL_FACE);let X=N.side===ke;ut&&(X=!X),tt(X),N.blending===Rs&&N.transparent===!1?I(Si):I(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function xt(N){N!==Ad?(ot(i.CULL_FACE),N!==A&&(N===fl?i.cullFace(i.BACK):N===Rd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Nt(i.CULL_FACE),A=N}function at(N){N!==U&&(H&&i.lineWidth(N),U=N)}function Bt(N,ut,X){N?(ot(i.POLYGON_OFFSET_FILL),(D!==ut||z!==X)&&(i.polygonOffset(ut,X),D=ut,z=X)):Nt(i.POLYGON_OFFSET_FILL)}function gt(N){N?ot(i.SCISSOR_TEST):Nt(i.SCISSOR_TEST)}function C(N){N===void 0&&(N=i.TEXTURE0+V-1),ct!==N&&(i.activeTexture(N),ct=N)}function b(N,ut,X){X===void 0&&(ct===null?X=i.TEXTURE0+V-1:X=ct);let J=mt[X];J===void 0&&(J={type:void 0,texture:void 0},mt[X]=J),(J.type!==N||J.texture!==ut)&&(ct!==X&&(i.activeTexture(X),ct=X),i.bindTexture(N,ut||Et[N]),J.type=N,J.texture=ut)}function B(){const N=mt[ct];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(N){ae.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ae.copy(N))}function Mt(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function ee(N,ut){let X=l.get(ut);X===void 0&&(X=new WeakMap,l.set(ut,X));let J=X.get(N);J===void 0&&(J=i.getUniformBlockIndex(ut,N.name),X.set(N,J))}function $t(N,ut){const J=l.get(ut).get(N);c.get(ut)!==J&&(i.uniformBlockBinding(ut,J,N.__bindingPointIndex),c.set(ut,J))}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ct=null,mt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,L=null,R=null,E=new Lt(0,0,0),P=0,S=!1,M=null,A=null,U=null,D=null,z=null,ae.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Nt,bindFramebuffer:Vt,drawBuffers:kt,useProgram:ie,setBlending:I,setMaterial:It,setFlipSided:tt,setCullFace:xt,setLineWidth:at,setPolygonOffset:Bt,setScissorTest:gt,activeTexture:C,bindTexture:b,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Q,texImage2D:yt,texImage3D:zt,updateUBOMapping:ee,uniformBlockBinding:$t,texStorage2D:Qt,texStorage3D:et,texSubImage2D:j,texSubImage3D:Tt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Gt,viewport:Mt,reset:pe}}function lh(i,t,e,n){const s=A_(n);switch(e){case xu:return i*t;case Mu:return i*t;case Su:return i*t*2;case Uc:return i*t/s.components*s.byteLength;case Nc:return i*t/s.components*s.byteLength;case bu:return i*t*2/s.components*s.byteLength;case Fc:return i*t*2/s.components*s.byteLength;case yu:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case Oc:return i*t*4/s.components*s.byteLength;case co:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Za:return Math.max(i,16)*Math.max(t,8)/4;case qa:case ja:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case fc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case wu:case mc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case gc:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function A_(i){switch(i){case ii:case gu:return{byteLength:1,components:1};case _r:case _u:case br:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case ji:case Lc:case Nn:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function R_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):xo("canvas")}function _(C,b,B){let Y=1;const Q=gt(C);if((Q.width>B||Q.height>B)&&(Y=B/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Y*Q.width),Tt=Math.floor(Y*Q.height);u===void 0&&(u=g(j,Tt));const ht=b?g(j,Tt):u;return ht.width=j,ht.height=Tt,ht.getContext("2d").drawImage(C,0,0,j,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Tt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,b,B,Y,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=b;if(b===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),b===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),b===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),b===i.RGBA){const Tt=Q?Ao:se.getTransfer(Y);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=Tt===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(C,b){let B;return C?b===null||b===ji||b===Ns?B=i.DEPTH24_STENCIL8:b===Nn?B=i.DEPTH32F_STENCIL8:b===_r&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===Ns?B=i.DEPTH_COMPONENT24:b===Nn?B=i.DEPTH_COMPONENT32F:b===_r&&(B=i.DEPTH_COMPONENT16),B}function L(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==dn&&C.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){const b=C.target;b.removeEventListener("dispose",R),P(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),M(b)}function P(C){const b=n.get(C);if(b.__webglInit===void 0)return;const B=C.source,Y=d.get(B);if(Y){const Q=Y[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(Y).length===0&&d.delete(B)}n.remove(C)}function S(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const B=C.source,Y=d.get(B);delete Y[b.__cacheKey],o.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let Q=0;Q<b.__webglFramebuffer[Y].length;Q++)i.deleteFramebuffer(b.__webglFramebuffer[Y][Q]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=C.textures;for(let Y=0,Q=B.length;Y<Q;Y++){const j=n.get(B[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(C)}let A=0;function U(){A=0}function D(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function z(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function V(C,b){const B=n.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,C,b);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+b)}function H(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Z(B,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+b)}function $(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){Z(B,C,b);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+b)}function W(C,b){const B=n.get(C);if(C.version>0&&B.__version!==C.version){st(B,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+b)}const ct={[_o]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},mt={[dn]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Fo]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},bt={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Tu]:i.LEQUAL,[of]:i.EQUAL,[lf]:i.GEQUAL,[af]:i.GREATER,[cf]:i.NOTEQUAL};function qt(C,b){if(b.type===Nn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===Fo||b.magFilter===Rr||b.magFilter===vi||b.minFilter===Pn||b.minFilter===Fo||b.minFilter===Rr||b.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ct[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ct[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ct[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,mt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,mt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Rr&&b.minFilter!==vi||b.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(C,b){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",R));const Y=b.source;let Q=d.get(Y);Q===void 0&&(Q={},d.set(Y,Q));const j=z(b);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[j].usedTimes++;const Tt=Q[C.__cacheKey];Tt!==void 0&&(Q[C.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(b)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return B}function Z(C,b,B){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const Q=ae(C,b),j=b.source;e.bindTexture(Y,C.__webglTexture,i.TEXTURE0+B);const Tt=n.get(j);if(j.version!==Tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const ht=se.getPrimaries(se.workingColorSpace),_t=b.colorSpace===gi?null:se.getPrimaries(b.colorSpace),Qt=b.colorSpace===gi||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let et=_(b.image,!1,s.maxTextureSize);et=Bt(b,et);const yt=r.convert(b.format,b.colorSpace),zt=r.convert(b.type);let Gt=y(b.internalFormat,yt,zt,b.colorSpace,b.isVideoTexture);qt(Y,b);let Mt;const ee=b.mipmaps,$t=b.isVideoTexture!==!0,pe=Tt.__version===void 0||Q===!0,N=j.dataReady,ut=L(b,et);if(b.isDepthTexture)Gt=v(b.format===Fs,b.type),pe&&($t?e.texStorage2D(i.TEXTURE_2D,1,Gt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Gt,et.width,et.height,0,yt,zt,null));else if(b.isDataTexture)if(ee.length>0){$t&&pe&&e.texStorage2D(i.TEXTURE_2D,ut,Gt,ee[0].width,ee[0].height);for(let X=0,J=ee.length;X<J;X++)Mt=ee[X],$t?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt.width,Mt.height,yt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,X,Gt,Mt.width,Mt.height,0,yt,zt,Mt.data);b.generateMipmaps=!1}else $t?(pe&&e.texStorage2D(i.TEXTURE_2D,ut,Gt,et.width,et.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,yt,zt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,et.width,et.height,0,yt,zt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Gt,ee[0].width,ee[0].height,et.depth);for(let X=0,J=ee.length;X<J;X++)if(Mt=ee[X],b.format!==Ln)if(yt!==null)if($t){if(N)if(b.layerUpdates.size>0){const pt=lh(Mt.width,Mt.height,b.format,b.type);for(const dt of b.layerUpdates){const Yt=Mt.data.subarray(dt*pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,dt,Mt.width,Mt.height,1,yt,Yt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,et.depth,yt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Gt,Mt.width,Mt.height,et.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Mt.width,Mt.height,et.depth,yt,zt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Gt,Mt.width,Mt.height,et.depth,0,yt,zt,Mt.data)}else{$t&&pe&&e.texStorage2D(i.TEXTURE_2D,ut,Gt,ee[0].width,ee[0].height);for(let X=0,J=ee.length;X<J;X++)Mt=ee[X],b.format!==Ln?yt!==null?$t?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Gt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Mt.width,Mt.height,yt,zt,Mt.data):e.texImage2D(i.TEXTURE_2D,X,Gt,Mt.width,Mt.height,0,yt,zt,Mt.data)}else if(b.isDataArrayTexture)if($t){if(pe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Gt,et.width,et.height,et.depth),N)if(b.layerUpdates.size>0){const X=lh(et.width,et.height,b.format,b.type);for(const J of b.layerUpdates){const pt=et.data.subarray(J*X/et.data.BYTES_PER_ELEMENT,(J+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,yt,zt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,yt,zt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,et.width,et.height,et.depth,0,yt,zt,et.data);else if(b.isData3DTexture)$t?(pe&&e.texStorage3D(i.TEXTURE_3D,ut,Gt,et.width,et.height,et.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,yt,zt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,et.width,et.height,et.depth,0,yt,zt,et.data);else if(b.isFramebufferTexture){if(pe)if($t)e.texStorage2D(i.TEXTURE_2D,ut,Gt,et.width,et.height);else{let X=et.width,J=et.height;for(let pt=0;pt<ut;pt++)e.texImage2D(i.TEXTURE_2D,pt,Gt,X,J,0,yt,zt,null),X>>=1,J>>=1}}else if(ee.length>0){if($t&&pe){const X=gt(ee[0]);e.texStorage2D(i.TEXTURE_2D,ut,Gt,X.width,X.height)}for(let X=0,J=ee.length;X<J;X++)Mt=ee[X],$t?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,yt,zt,Mt):e.texImage2D(i.TEXTURE_2D,X,Gt,yt,zt,Mt);b.generateMipmaps=!1}else if($t){if(pe){const X=gt(et);e.texStorage2D(i.TEXTURE_2D,ut,Gt,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,zt,et)}else e.texImage2D(i.TEXTURE_2D,0,Gt,yt,zt,et);m(b)&&p(Y),Tt.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function st(C,b,B){if(b.image.length!==6)return;const Y=ae(C,b),Q=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const j=n.get(Q);if(Q.version!==j.__version||Y===!0){e.activeTexture(i.TEXTURE0+B);const Tt=se.getPrimaries(se.workingColorSpace),ht=b.colorSpace===gi?null:se.getPrimaries(b.colorSpace),_t=b.colorSpace===gi||Tt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Qt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let J=0;J<6;J++)!Qt&&!et?yt[J]=_(b.image[J],!0,s.maxCubemapSize):yt[J]=et?b.image[J].image:b.image[J],yt[J]=Bt(b,yt[J]);const zt=yt[0],Gt=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),ee=y(b.internalFormat,Gt,Mt,b.colorSpace),$t=b.isVideoTexture!==!0,pe=j.__version===void 0||Y===!0,N=Q.dataReady;let ut=L(b,zt);qt(i.TEXTURE_CUBE_MAP,b);let X;if(Qt){$t&&pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,ee,zt.width,zt.height);for(let J=0;J<6;J++){X=yt[J].mipmaps;for(let pt=0;pt<X.length;pt++){const dt=X[pt];b.format!==Ln?Gt!==null?$t?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Gt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,ee,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,dt.width,dt.height,Gt,Mt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,ee,dt.width,dt.height,0,Gt,Mt,dt.data)}}}else{if(X=b.mipmaps,$t&&pe){X.length>0&&ut++;const J=gt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,ee,J.width,J.height)}for(let J=0;J<6;J++)if(et){$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,yt[J].width,yt[J].height,Gt,Mt,yt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,yt[J].width,yt[J].height,0,Gt,Mt,yt[J].data);for(let pt=0;pt<X.length;pt++){const Yt=X[pt].image[J].image;$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Yt.width,Yt.height,Gt,Mt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,ee,Yt.width,Yt.height,0,Gt,Mt,Yt.data)}}else{$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Gt,Mt,yt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ee,Gt,Mt,yt[J]);for(let pt=0;pt<X.length;pt++){const dt=X[pt];$t?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Gt,Mt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,ee,Gt,Mt,dt.image[J])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),j.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Et(C,b,B,Y,Q,j){const Tt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),_t=y(B.internalFormat,Tt,ht,B.colorSpace),Qt=n.get(b),et=n.get(B);if(et.__renderTarget=b,!Qt.__hasExternalTextures){const yt=Math.max(1,b.width>>j),zt=Math.max(1,b.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,_t,yt,zt,b.depth,0,Tt,ht,null):e.texImage2D(Q,j,_t,yt,zt,0,Tt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Q,et.__webglTexture,0,tt(b)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Q,et.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,b,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const Y=b.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=v(b.stencilBuffer,Q),Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=tt(b);xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,j,b.width,b.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,C)}else{const Y=b.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],Tt=r.convert(j.format,j.colorSpace),ht=r.convert(j.type),_t=y(j.internalFormat,Tt,ht,j.colorSpace),Qt=tt(b);B&&xt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,_t,b.width,b.height):xt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,_t,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_t,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const Q=Y.__webglTexture,j=tt(b);if(b.depthTexture.format===Cs)xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Fs)xt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const b=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Y}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Nt(b.__webglFramebuffer,C)}else if(B){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),ot(b.__webglDepthbuffer[Y],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ot(b.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(C,b,B){const Y=n.get(C);b!==void 0&&Et(Y.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Vt(C)}function ie(C){const b=C.texture,B=n.get(C),Y=n.get(b);C.addEventListener("dispose",E);const Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let _t=0;_t<b.mipmaps.length;_t++)B.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ht=0,_t=Q.length;ht<_t;ht++){const Qt=n.get(Q[ht]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&xt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const _t=Q[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Qt=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),yt=y(_t.internalFormat,Qt,et,_t.colorSpace,C.isXRRenderTarget===!0),zt=tt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),qt(i.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)Et(B.__webglFramebuffer[ht][_t],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else Et(B.__webglFramebuffer[ht],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ht=0,_t=Q.length;ht<_t;ht++){const Qt=Q[ht],et=n.get(Qt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),qt(i.TEXTURE_2D,Qt),Et(B.__webglFramebuffer,C,Qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,Y.__webglTexture),qt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)Et(B.__webglFramebuffer[_t],C,b,i.COLOR_ATTACHMENT0,ht,_t);else Et(B.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ht,0);m(b)&&p(ht),e.unbindTexture()}C.depthBuffer&&Vt(C)}function K(C){const b=C.textures;for(let B=0,Y=b.length;B<Y;B++){const Q=b[B];if(m(Q)){const j=x(C),Tt=n.get(Q).__webglTexture;e.bindTexture(j,Tt),p(j),e.unbindTexture()}}}const it=[],I=[];function It(C){if(C.samples>0){if(xt(C)===!1){const b=C.textures,B=C.width,Y=C.height;let Q=i.COLOR_BUFFER_BIT;const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(C),ht=b.length>1;if(ht)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Qt=n.get(b[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,B,Y,0,0,B,Y,Q,i.NEAREST),c===!0&&(it.length=0,I.length=0,it.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(j),I.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Qt=n.get(b[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function tt(C){return Math.min(s.maxSamples,C.samples)}function xt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function at(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Bt(C,b){const B=C.colorSpace,Y=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Bs&&B!==gi&&(se.getTransfer(B)===de?(Y!==Ln||Q!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function gt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=kt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=xt}function C_(i,t){function e(n,s=gi){let r;const o=se.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===Ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return i.BYTE;if(n===_u)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Lc)return i.INT;if(n===ji)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===xu)return i.ALPHA;if(n===yu)return i.RGB;if(n===Ln)return i.RGBA;if(n===Mu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Uc)return i.RED;if(n===Nc)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===co||n===lo||n===ho||n===uo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===ja||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Ja||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$a||n===Ja)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ic)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===fc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===mc||n===gc||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class P_ extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Kt extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
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

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ei({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends Ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new U_,m=e.getContextAttributes();let p=null,x=null;const y=[],v=[],L=new q;let R=null;const E=new un;E.viewport=new ne;const P=new un;P.viewport=new ne;const S=[E,P],M=new P_;let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let st=y[Z];return st===void 0&&(st=new la,y[Z]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Z){let st=y[Z];return st===void 0&&(st=new la,y[Z]=st),st.getGripSpace()},this.getHand=function(Z){let st=y[Z];return st===void 0&&(st=new la,y[Z]=st),st.getHandSpace()};function D(Z){const st=v.indexOf(Z.inputSource);if(st===-1)return;const Et=y[st];Et!==void 0&&(Et.update(Z.inputSource,Z.frame,l||o),Et.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let Z=0;Z<y.length;Z++){const st=v[Z];st!==null&&(v[Z]=null,y[Z].disconnect(st))}A=null,U=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Zi(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Et=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Fs:Cs,Et=m.stencil?Ns:ji);const Nt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Zi(d.textureWidth,d.textureHeight,{format:Ln,type:ii,depthTexture:new Bu(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(Z){for(let st=0;st<Z.removed.length;st++){const Et=Z.removed[st],ot=v.indexOf(Et);ot>=0&&(v[ot]=null,y[ot].disconnect(Et))}for(let st=0;st<Z.added.length;st++){const Et=Z.added[st];let ot=v.indexOf(Et);if(ot===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=v.length){v.push(Et),ot=Vt;break}else if(v[Vt]===null){v[Vt]=Et,ot=Vt;break}if(ot===-1)break}const Nt=y[ot];Nt&&Nt.connect(Et)}}const H=new T,$=new T;function W(Z,st,Et){H.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const ot=H.distanceTo($),Nt=st.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,kt=Nt[14]/(Nt[10]-1),ie=Nt[14]/(Nt[10]+1),K=(Nt[9]+1)/Nt[5],it=(Nt[9]-1)/Nt[5],I=(Nt[8]-1)/Nt[0],It=(Vt[8]+1)/Vt[0],tt=kt*I,xt=kt*It,at=ot/(-I+It),Bt=at*-I;if(st.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Bt),Z.translateZ(at),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const gt=kt+at,C=ie+at,b=tt-Bt,B=xt+(ot-Bt),Y=K*ie/C*gt,Q=it*ie/C*gt;Z.projectionMatrix.makePerspective(b,B,Y,Q,gt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ct(Z,st){st===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(st.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let st=Z.near,Et=Z.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),M.near=P.near=E.near=st,M.far=P.far=E.far=Et,(A!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far),E.layers.mask=Z.layers.mask|2,P.layers.mask=Z.layers.mask|4,M.layers.mask=E.layers.mask|P.layers.mask;const ot=Z.parent,Nt=M.cameras;ct(M,ot);for(let Vt=0;Vt<Nt.length;Vt++)ct(Nt[Vt],ot);Nt.length===2?W(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),mt(Z,M,ot)};function mt(Z,st,Et){Et===null?Z.matrix.copy(st.matrixWorld):(Z.matrix.copy(Et.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(st.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(st.projectionMatrix),Z.projectionMatrixInverse.copy(st.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let bt=null;function qt(Z,st){if(h=st.getViewerPose(l||o),g=st,h!==null){const Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let ot=!1;Et.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Vt=0;Vt<Et.length;Vt++){const kt=Et[Vt];let ie=null;if(f!==null)ie=f.getViewport(kt);else{const it=u.getViewSubImage(d,kt);ie=it.viewport,Vt===0&&(t.setRenderTargetTextures(x,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(x))}let K=S[Vt];K===void 0&&(K=new un,K.layers.enable(Vt),K.viewport=new ne,S[Vt]=K),K.matrix.fromArray(kt.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(kt.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ie.x,ie.y,ie.width,ie.height),Vt===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(K)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Vt=u.getDepthInformation(Et[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let Et=0;Et<y.length;Et++){const ot=v[Et],Nt=y[Et];ot!==null&&Nt!==void 0&&Nt.update(ot,st,l||o)}bt&&bt(Z,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const ae=new Fu;ae.setAnimationLoop(qt),this.setAnimationLoop=function(Z){bt=Z},this.dispose=function(){}}}const Ui=new sn,F_=new Ht;function O_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Du(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Ui.copy(v),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(x,L);const R=t.render.frame;r[x.id]!==R&&(d(x),r[x.id]=R)}function h(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),L=x.__size,R=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,E=v.length;R<E;R++){const P=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,M=P.length;S<M;S++){const A=P[S];if(f(A,R,S,L)===!0){const U=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let z=0;for(let V=0;V<D.length;V++){const H=D[V],$=_(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+z,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,L){const R=x.value,E=y+"_"+v;if(L[E]===void 0)return typeof R=="number"||typeof R=="boolean"?L[E]=R:L[E]=R.clone(),!0;{const P=L[E];if(typeof R=="number"||typeof R=="boolean"){if(P!==R)return L[E]=R,!0}else if(P.equals(R)===!1)return P.copy(R),!0}return!1}function g(x){const y=x.uniforms;let v=0;const L=16;for(let E=0,P=y.length;E<P;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,A=S.length;M<A;M++){const U=S[M],D=Array.isArray(U.value)?U.value:[U.value];for(let z=0,V=D.length;z<V;z++){const H=D[z],$=_(H),W=v%L,ct=W%$.boundary,mt=W+ct;v+=ct,mt!==0&&L-mt<$.storage&&(v+=L-mt),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=$.storage}}}const R=v%L;return R>0&&(v+=L-R),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class z_{constructor(t={}){const{canvas:e=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=bi,this.toneMappingExposure=1;const v=this;let L=!1,R=0,E=0,P=null,S=-1,M=null;const A=new ne,U=new ne;let D=null;const z=new Lt(0);let V=0,H=e.width,$=e.height,W=1,ct=null,mt=null;const bt=new ne(0,0,H,$),qt=new ne(0,0,H,$);let ae=!1;const Z=new kc;let st=!1,Et=!1;const ot=new Ht,Nt=new Ht,Vt=new T,kt=new ne,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function it(){return P===null?W:1}let I=n;function It(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),I===null){const F="webgl2";if(I=It(F,w),I===null)throw It(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let tt,xt,at,Bt,gt,C,b,B,Y,Q,j,Tt,ht,_t,Qt,et,yt,zt,Gt,Mt,ee,$t,pe,N;function ut(){tt=new W0(I),tt.init(),$t=new C_(I,tt),xt=new B0(I,tt,t,$t),at=new T_(I,tt),xt.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Bt=new Y0(I),gt=new u_,C=new R_(I,tt,at,gt,xt,$t,Bt),b=new k0(v),B=new V0(v),Y=new tp(I),pe=new F0(I,Y),Q=new X0(I,Y,Bt,pe),j=new Z0(I,Q,Y,Bt),Gt=new j0(I,xt,C),et=new z0(gt),Tt=new h_(v,b,B,tt,xt,pe,et),ht=new O_(v,gt),_t=new f_,Qt=new x_(tt),zt=new N0(v,b,B,at,j,f,c),yt=new w_(v,j,xt),N=new B_(I,Bt,xt,at),Mt=new O0(I,tt,Bt),ee=new q0(I,tt,Bt),Bt.programs=Tt.programs,v.capabilities=xt,v.extensions=tt,v.properties=gt,v.renderLists=_t,v.shadowMap=yt,v.state=at,v.info=Bt}ut();const X=new N_(v,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(H,$,!1))},this.getSize=function(w){return w.set(H,$)},this.setSize=function(w,F,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,$=F,e.width=Math.floor(w*W),e.height=Math.floor(F*W),k===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(H*W,$*W).floor()},this.setDrawingBufferSize=function(w,F,k){H=w,$=F,W=k,e.width=Math.floor(w*k),e.height=Math.floor(F*k),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(bt)},this.setViewport=function(w,F,k,G){w.isVector4?bt.set(w.x,w.y,w.z,w.w):bt.set(w,F,k,G),at.viewport(A.copy(bt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,F,k,G){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,F,k,G),at.scissor(U.copy(qt).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){at.setScissorTest(ae=w)},this.setOpaqueSort=function(w){ct=w},this.setTransparentSort=function(w){mt=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,F=!0,k=!0){let G=0;if(w){let O=!1;if(P!==null){const rt=P.texture.format;O=rt===Oc||rt===Fc||rt===Nc}if(O){const rt=P.texture.type,ft=rt===ii||rt===ji||rt===_r||rt===Ns||rt===Ic||rt===Dc,Rt=zt.getClearColor(),Ct=zt.getClearAlpha(),Wt=Rt.r,jt=Rt.g,Pt=Rt.b;ft?(g[0]=Wt,g[1]=jt,g[2]=Pt,g[3]=Ct,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Wt,_[1]=jt,_[2]=Pt,_[3]=Ct,I.clearBufferiv(I.COLOR,0,_))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT),k&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),Qt.dispose(),gt.dispose(),b.dispose(),B.dispose(),j.dispose(),pe.dispose(),N.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",rl),X.removeEventListener("sessionend",ol),Ri.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=Bt.autoReset,F=yt.enabled,k=yt.autoUpdate,G=yt.needsUpdate,O=yt.type;ut(),Bt.autoReset=w,yt.enabled=F,yt.autoUpdate=k,yt.needsUpdate=G,yt.type=O}function dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const F=w.target;F.removeEventListener("dispose",Yt),we(F)}function we(w){Ge(w),gt.remove(w)}function Ge(w){const F=gt.get(w).programs;F!==void 0&&(F.forEach(function(k){Tt.releaseProgram(k)}),w.isShaderMaterial&&Tt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,k,G,O,rt){F===null&&(F=ie);const ft=O.isMesh&&O.matrixWorld.determinant()<0,Rt=wd(w,F,k,G,O);at.setMaterial(G,ft);let Ct=k.index,Wt=1;if(G.wireframe===!0){if(Ct=Q.getWireframeAttribute(k),Ct===void 0)return;Wt=2}const jt=k.drawRange,Pt=k.attributes.position;let re=jt.start*Wt,me=(jt.start+jt.count)*Wt;rt!==null&&(re=Math.max(re,rt.start*Wt),me=Math.min(me,(rt.start+rt.count)*Wt)),Ct!==null?(re=Math.max(re,0),me=Math.min(me,Ct.count)):Pt!=null&&(re=Math.max(re,0),me=Math.min(me,Pt.count));const ge=me-re;if(ge<0||ge===1/0)return;pe.setup(O,G,Rt,k,Ct);let Je,ce=Mt;if(Ct!==null&&(Je=Y.get(Ct),ce=ee,ce.setIndex(Je)),O.isMesh)G.wireframe===!0?(at.setLineWidth(G.wireframeLinewidth*it()),ce.setMode(I.LINES)):ce.setMode(I.TRIANGLES);else if(O.isLine){let Dt=G.linewidth;Dt===void 0&&(Dt=1),at.setLineWidth(Dt*it()),O.isLineSegments?ce.setMode(I.LINES):O.isLineLoop?ce.setMode(I.LINE_LOOP):ce.setMode(I.LINE_STRIP)}else O.isPoints?ce.setMode(I.POINTS):O.isSprite&&ce.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ce.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Dt=O._multiDrawStarts,Wn=O._multiDrawCounts,le=O._multiDrawCount,Mn=Ct?Y.get(Ct).bytesPerElement:1,Qi=gt.get(G).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)Qi.setValue(I,"_gl_DrawID",rn),ce.render(Dt[rn]/Mn,Wn[rn])}else if(O.isInstancedMesh)ce.renderInstances(re,ge,O.count);else if(k.isInstancedBufferGeometry){const Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Wn=Math.min(k.instanceCount,Dt);ce.renderInstances(re,ge,Wn)}else ce.render(re,ge)};function he(w,F,k){w.transparent===!0&&w.side===en&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,Ar(w,F,k),w.side=ni,w.needsUpdate=!0,Ar(w,F,k),w.side=en):Ar(w,F,k)}this.compile=function(w,F,k=null){k===null&&(k=w),p=Qt.get(k),p.init(F),y.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==k&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const Rt=rt[ft];he(Rt,k,O),G.add(Rt)}else he(rt,k,O),G.add(rt)}),y.pop(),p=null,G},this.compileAsync=function(w,F,k=null){const G=this.compile(w,F,k);return new Promise(O=>{function rt(){if(G.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){O(w);return}setTimeout(rt,10)}tt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let yn=null;function Vn(w){yn&&yn(w)}function rl(){Ri.stop()}function ol(){Ri.start()}const Ri=new Fu;Ri.setAnimationLoop(Vn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(w){yn=w,X.setAnimationLoop(w),w===null?Ri.stop():Ri.start()},X.addEventListener("sessionstart",rl),X.addEventListener("sessionend",ol),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,P),p=Qt.get(w,y.length),p.init(F),y.push(p),Nt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(Nt),Et=this.localClippingEnabled,st=et.init(this.clippingPlanes,Et),m=_t.get(w,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&No(rt,F,-1/0,v.sortObjects)}No(w,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,mt),K=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,K&&zt.addToRenderList(m,w),this.info.render.frame++,st===!0&&et.beginShadows();const k=p.state.shadowsArray;yt.render(k,w,F),st===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const rt=F.cameras;if(O.length>0)for(let ft=0,Rt=rt.length;ft<Rt;ft++){const Ct=rt[ft];cl(G,O,w,Ct)}K&&zt.render(w);for(let ft=0,Rt=rt.length;ft<Rt;ft++){const Ct=rt[ft];al(m,w,Ct,Ct.viewport)}}else O.length>0&&cl(G,O,w,F),K&&zt.render(w),al(m,w,F);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,F),pe.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],st===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function No(w,F,k,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){G&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Nt);const ft=j.update(w),Rt=w.material;Rt.visible&&m.push(w,ft,Rt,k,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const ft=j.update(w),Rt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),kt.copy(ft.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(Nt)),Array.isArray(Rt)){const Ct=ft.groups;for(let Wt=0,jt=Ct.length;Wt<jt;Wt++){const Pt=Ct[Wt],re=Rt[Pt.materialIndex];re&&re.visible&&m.push(w,ft,re,k,kt.z,Pt)}}else Rt.visible&&m.push(w,ft,Rt,k,kt.z,null)}}const rt=w.children;for(let ft=0,Rt=rt.length;ft<Rt;ft++)No(rt[ft],F,k,G)}function al(w,F,k,G){const O=w.opaque,rt=w.transmissive,ft=w.transparent;p.setupLightsView(k),st===!0&&et.setGlobalState(v.clippingPlanes,k),G&&at.viewport(A.copy(G)),O.length>0&&Tr(O,F,k),rt.length>0&&Tr(rt,F,k),ft.length>0&&Tr(ft,F,k),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function cl(w,F,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Zi(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?br:ii,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const rt=p.state.transmissionRenderTarget[G.id],ft=G.viewport||A;rt.setSize(ft.z,ft.w);const Rt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(z),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),K&&zt.render(k);const Ct=v.toneMapping;v.toneMapping=bi;const Wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),st===!0&&et.setGlobalState(v.clippingPlanes,G),Tr(w,k,G),C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pt=0,re=F.length;Pt<re;Pt++){const me=F[Pt],ge=me.object,Je=me.geometry,ce=me.material,Dt=me.group;if(ce.side===en&&ge.layers.test(G.layers)){const Wn=ce.side;ce.side=ke,ce.needsUpdate=!0,ll(ge,k,G,Je,ce,Dt),ce.side=Wn,ce.needsUpdate=!0,jt=!0}}jt===!0&&(C.updateMultisampleRenderTarget(rt),C.updateRenderTargetMipmap(rt))}v.setRenderTarget(Rt),v.setClearColor(z,V),Wt!==void 0&&(G.viewport=Wt),v.toneMapping=Ct}function Tr(w,F,k){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=w.length;O<rt;O++){const ft=w[O],Rt=ft.object,Ct=ft.geometry,Wt=G===null?ft.material:G,jt=ft.group;Rt.layers.test(k.layers)&&ll(Rt,F,k,Ct,Wt,jt)}}function ll(w,F,k,G,O,rt){w.onBeforeRender(v,F,k,G,O,rt),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,F,k,G,w,rt),O.transparent===!0&&O.side===en&&O.forceSinglePass===!1?(O.side=ke,O.needsUpdate=!0,v.renderBufferDirect(k,F,G,O,w,rt),O.side=ni,O.needsUpdate=!0,v.renderBufferDirect(k,F,G,O,w,rt),O.side=en):v.renderBufferDirect(k,F,G,O,w,rt),w.onAfterRender(v,F,k,G,O,rt)}function Ar(w,F,k){F.isScene!==!0&&(F=ie);const G=gt.get(w),O=p.state.lights,rt=p.state.shadowsArray,ft=O.state.version,Rt=Tt.getParameters(w,O.state,rt,F,k),Ct=Tt.getProgramCacheKey(Rt);let Wt=G.programs;G.environment=w.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(w.isMeshStandardMaterial?B:b).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Wt===void 0&&(w.addEventListener("dispose",Yt),Wt=new Map,G.programs=Wt);let jt=Wt.get(Ct);if(jt!==void 0){if(G.currentProgram===jt&&G.lightsStateVersion===ft)return ul(w,Rt),jt}else Rt.uniforms=Tt.getUniforms(w),w.onBeforeCompile(Rt,v),jt=Tt.acquireProgram(Rt,Ct),Wt.set(Ct,jt),G.uniforms=Rt.uniforms;const Pt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=et.uniform),ul(w,Rt),G.needsLights=Td(w),G.lightsStateVersion=ft,G.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=jt,G.uniformsList=null,jt}function hl(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=po.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ul(w,F){const k=gt.get(w);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function wd(w,F,k,G,O){F.isScene!==!0&&(F=ie),C.resetTextureUnits();const rt=F.fog,ft=G.isMeshStandardMaterial?F.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bs,Ct=(G.isMeshStandardMaterial?B:b).get(G.envMap||ft),Wt=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,jt=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!k.morphAttributes.position,re=!!k.morphAttributes.normal,me=!!k.morphAttributes.color;let ge=bi;G.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ge=v.toneMapping);const Je=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=Je!==void 0?Je.length:0,Dt=gt.get(G),Wn=p.state.lights;if(st===!0&&(Et===!0||w!==M)){const fn=w===M&&G.id===S;et.setState(G,w,fn)}let le=!1;G.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Wn.state.version||Dt.outputColorSpace!==Rt||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==Ct||G.fog===!0&&Dt.fog!==rt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==et.numPlanes||Dt.numIntersection!==et.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==jt||Dt.morphTargets!==Pt||Dt.morphNormals!==re||Dt.morphColors!==me||Dt.toneMapping!==ge||Dt.morphTargetsCount!==ce)&&(le=!0):(le=!0,Dt.__version=G.version);let Mn=Dt.currentProgram;le===!0&&(Mn=Ar(G,F,O));let Qi=!1,rn=!1,Ws=!1;const _e=Mn.getUniforms(),In=Dt.uniforms;if(at.useProgram(Mn.program)&&(Qi=!0,rn=!0,Ws=!0),G.id!==S&&(S=G.id,rn=!0),Qi||M!==w){at.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),Cf(ot),Pf(ot),_e.setValue(I,"projectionMatrix",ot)):_e.setValue(I,"projectionMatrix",w.projectionMatrix),_e.setValue(I,"viewMatrix",w.matrixWorldInverse);const ai=_e.map.cameraPosition;ai!==void 0&&ai.setValue(I,Vt.setFromMatrixPosition(w.matrixWorld)),xt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,rn=!0,Ws=!0)}if(O.isSkinnedMesh){_e.setOptional(I,O,"bindMatrix"),_e.setOptional(I,O,"bindMatrixInverse");const fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),_e.setValue(I,"boneTexture",fn.boneTexture,C))}O.isBatchedMesh&&(_e.setOptional(I,O,"batchingTexture"),_e.setValue(I,"batchingTexture",O._matricesTexture,C),_e.setOptional(I,O,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",O._indirectTexture,C),_e.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",O._colorsTexture,C));const Xs=k.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&Gt.update(O,k,Mn),(rn||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,_e.setValue(I,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(In.envMap.value=Ct,In.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(In.envMapIntensity.value=F.environmentIntensity),rn&&(_e.setValue(I,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&Ed(In,Ws),rt&&G.fog===!0&&ht.refreshFogUniforms(In,rt),ht.refreshMaterialUniforms(In,G,W,$,p.state.transmissionRenderTarget[w.id]),po.upload(I,hl(Dt),In,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(po.upload(I,hl(Dt),In,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(I,"center",O.center),_e.setValue(I,"modelViewMatrix",O.modelViewMatrix),_e.setValue(I,"normalMatrix",O.normalMatrix),_e.setValue(I,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const fn=G.uniformsGroups;for(let ai=0,ci=fn.length;ai<ci;ai++){const dl=fn[ai];N.update(dl,Mn),N.bind(dl,Mn)}}return Mn}function Ed(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Td(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,F,k){gt.get(w.texture).__webglTexture=F,gt.get(w.depthTexture).__webglTexture=k;const G=gt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const k=gt.get(w);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,k=0){P=w,R=F,E=k;let G=!0,O=null,rt=!1,ft=!1;if(w){const Ct=gt.get(w);if(Ct.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(I.FRAMEBUFFER,null),G=!1;else if(Ct.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Ct.__hasExternalTextures)C.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&gt.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(ft=!0);const jt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[F])?O=jt[F][k]:O=jt[F],rt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?O=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?O=jt[k]:O=jt,A.copy(w.viewport),U.copy(w.scissor),D=w.scissorTest}else A.copy(bt).multiplyScalar(W).floor(),U.copy(qt).multiplyScalar(W).floor(),D=ae;if(at.bindFramebuffer(I.FRAMEBUFFER,O)&&G&&at.drawBuffers(w,O),at.viewport(A),at.scissor(U),at.setScissorTest(D),rt){const Ct=gt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,k)}else if(ft){const Ct=gt.get(w.texture),Wt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,k||0,Wt)}S=-1},this.readRenderTargetPixels=function(w,F,k,G,O,rt,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Rt=Rt[ft]),Rt){at.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Ct=w.texture,Wt=Ct.format,jt=Ct.type;if(!xt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&k>=0&&k<=w.height-O&&I.readPixels(F,k,G,O,$t.convert(Wt),$t.convert(jt),rt)}finally{const Ct=P!==null?gt.get(P).__webglFramebuffer:null;at.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,F,k,G,O,rt,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Rt=Rt[ft]),Rt){const Ct=w.texture,Wt=Ct.format,jt=Ct.type;if(!xt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-G&&k>=0&&k<=w.height-O){at.bindFramebuffer(I.FRAMEBUFFER,Rt);const Pt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pt),I.bufferData(I.PIXEL_PACK_BUFFER,rt.byteLength,I.STREAM_READ),I.readPixels(F,k,G,O,$t.convert(Wt),$t.convert(jt),0);const re=P!==null?gt.get(P).__webglFramebuffer:null;at.bindFramebuffer(I.FRAMEBUFFER,re);const me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rf(I,me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,rt),I.deleteBuffer(Pt),I.deleteSync(me),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,k=0){w.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-k),O=Math.floor(w.image.width*G),rt=Math.floor(w.image.height*G),ft=F!==null?F.x:0,Rt=F!==null?F.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,ft,Rt,O,rt),at.unbindTexture()},this.copyTextureToTexture=function(w,F,k=null,G=null,O=0){w.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,k=null);let rt,ft,Rt,Ct,Wt,jt,Pt,re,me;const ge=w.isCompressedTexture?w.mipmaps[O]:w.image;k!==null?(rt=k.max.x-k.min.x,ft=k.max.y-k.min.y,Rt=k.isBox3?k.max.z-k.min.z:1,Ct=k.min.x,Wt=k.min.y,jt=k.isBox3?k.min.z:0):(rt=ge.width,ft=ge.height,Rt=ge.depth||1,Ct=0,Wt=0,jt=0),G!==null?(Pt=G.x,re=G.y,me=G.z):(Pt=0,re=0,me=0);const Je=$t.convert(F.format),ce=$t.convert(F.type);let Dt;F.isData3DTexture?(C.setTexture3D(F,0),Dt=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Dt=I.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Wn=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Qi=I.getParameter(I.UNPACK_SKIP_ROWS),rn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const Ws=w.isDataArrayTexture||w.isData3DTexture,_e=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const In=gt.get(w),Xs=gt.get(F),fn=gt.get(In.__renderTarget),ai=gt.get(Xs.__renderTarget);at.bindFramebuffer(I.READ_FRAMEBUFFER,fn.__webglFramebuffer),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let ci=0;ci<Rt;ci++)Ws&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(w).__webglTexture,O,jt+ci),w.isDepthTexture?(_e&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.get(F).__webglTexture,O,me+ci),I.blitFramebuffer(Ct,Wt,rt,ft,Pt,re,rt,ft,I.DEPTH_BUFFER_BIT,I.NEAREST)):_e?I.copyTexSubImage3D(Dt,O,Pt,re,me+ci,Ct,Wt,rt,ft):I.copyTexSubImage2D(Dt,O,Pt,re,me+ci,Ct,Wt,rt,ft);at.bindFramebuffer(I.READ_FRAMEBUFFER,null),at.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _e?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Dt,O,Pt,re,me,rt,ft,Rt,Je,ce,ge.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Dt,O,Pt,re,me,rt,ft,Rt,Je,ge.data):I.texSubImage3D(Dt,O,Pt,re,me,rt,ft,Rt,Je,ce,ge):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Pt,re,rt,ft,Je,ce,ge.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Pt,re,ge.width,ge.height,Je,ge.data):I.texSubImage2D(I.TEXTURE_2D,O,Pt,re,rt,ft,Je,ce,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,Wn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rn),O===0&&F.generateMipmaps&&I.generateMipmap(Dt),at.unbindTexture()},this.copyTextureToTexture3D=function(w,F,k=null,G=null,O=0){return w.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,G=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,k,G,O)},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){R=0,E=0,P=null,at.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class Hc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vc extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class k_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new T;class yo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wc extends Ki{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ps;const $s=new T,ms=new T,gs=new T,_s=new q,Js=new q,Vu=new Ht,Zr=new T,Ks=new T,$r=new T,hh=new q,ha=new q,uh=new q;class Wu extends Te{constructor(t=new Wc){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new k_(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new yo(n,3,0,!1)),ps.setAttribute("uv",new yo(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Vu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Jr(Zr.set(-.5,-.5,0),gs,o,ms,s,r),Jr(Ks.set(.5,-.5,0),gs,o,ms,s,r),Jr($r.set(.5,.5,0),gs,o,ms,s,r),hh.set(0,0),ha.set(1,0),uh.set(1,1);let a=t.ray.intersectTriangle(Zr,Ks,$r,!1,$s);if(a===null&&(Jr(Ks.set(-.5,.5,0),gs,o,ms,s,r),ha.set(0,1),a=t.ray.intersectTriangle(Zr,$r,Ks,!1,$s),a===null))return;const c=t.ray.origin.distanceTo($s);c<t.near||c>t.far||e.push({distance:c,point:$s.clone(),uv:_n.getInterpolation($s,Zr,Ks,$r,hh,ha,uh,new q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,s,r){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Js.x=r*_s.x-s*_s.y,Js.y=s*_s.x+r*_s.y):Js.copy(_s),i.copy(t),i.x+=Js.x,i.y+=Js.y,i.applyMatrix4(Vu)}class Xu extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=dn,h=dn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vs=new Ht,fh=new Ht,Kr=[],ph=new oi,G_=new Ht,Qs=new At,tr=new zs;class xi extends At{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,G_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),ph.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),tr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),t.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),fh.multiplyMatrices(n,vs),Qs.matrixWorld=fh,Qs.raycast(t,Kr);for(let o=0,a=Kr.length;o<a;o++){const c=Kr[o];c.instanceId=r,c.object=this,e.push(c)}Kr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xu(new Float32Array(s*this.count),s,this.count,Uc,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class qu extends Ki{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mo=new T,So=new T,mh=new Ht,er=new Ro,Qr=new zs,ua=new T,gh=new T;class H_ extends Te{constructor(t=new ve,e=new qu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mo.fromBufferAttribute(e,s-1),So.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(So);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;mh.copy(s).invert(),er.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),x=h.getX(_+1),y=to(this,t,er,c,p,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=to(this,t,er,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=to(this,t,er,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=to(this,t,er,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function to(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Mo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),e.distanceSqToSegment(Mo,So,ua,gh)>n)return;ua.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ua);if(!(c<t.near||c>t.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Po extends Xe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new q:new T);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,s=[],r=[],o=[],a=new T,c=new Ht;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new T)}r[0]=new T,o[0]=new T;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Pe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Pe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xc extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new q){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class V_ extends Xc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const eo=new T,da=new qc,fa=new qc,pa=new qc;class Yu extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(eo.subVectors(s[0],s[1]).add(s[0]),l=eo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=eo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),da.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),fa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),pa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(da.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),fa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),pa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(da.calc(c),fa.calc(c),pa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _h(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function W_(i,t){const e=1-i;return e*e*t}function X_(i,t){return 2*(1-i)*i*t}function q_(i,t){return i*i*t}function pr(i,t,e,n){return W_(i,t)+X_(i,e)+q_(i,n)}function Y_(i,t){const e=1-i;return e*e*e*t}function j_(i,t){const e=1-i;return 3*e*e*i*t}function Z_(i,t){return 3*(1-i)*i*i*t}function $_(i,t){return i*i*i*t}function mr(i,t,e,n,s){return Y_(i,t)+j_(i,e)+Z_(i,n)+$_(i,s)}class ju extends Hn{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class J_ extends Hn{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,s.x,r.x,o.x,a.x),mr(t,s.y,r.y,o.y,a.y),mr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zu extends Hn{constructor(t=new q,e=new q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends Hn{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $u extends Hn{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ju extends Hn{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(t,s.x,r.x,o.x),pr(t,s.y,r.y,o.y),pr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ku extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new q){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(_h(a,c.x,l.x,h.x,u.x),_h(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this}}var bo=Object.freeze({__proto__:null,ArcCurve:V_,CatmullRomCurve3:Yu,CubicBezierCurve:ju,CubicBezierCurve3:J_,EllipseCurve:Xc,LineCurve:Zu,LineCurve3:K_,QuadraticBezierCurve:$u,QuadraticBezierCurve3:Ju,SplineCurve:Ku});class Q_ extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new bo[s.type]().fromJSON(s))}return this}}class Mc extends Q_{constructor(t){super(),this.type="Path",this.currentPoint=new q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zu(this.currentPoint.clone(),new q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $u(this.currentPoint.clone(),new q(t,e),new q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ju(this.currentPoint.clone(),new q(t,e),new q(n,s),new q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ku(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Xc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gs extends ve{constructor(t=[new q(0,-.5),new q(.5,0),new q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new T,d=new q,f=new T,g=new T,_=new T;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=e;x++){const y=n+x*h*s,v=Math.sin(y),L=Math.cos(y);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*v,u.y=t[R].y,u.z=t[R].x*L,o.push(u.x,u.y,u.z),d.x=x/e,d.y=R/(t.length-1),a.push(d.x,d.y);const E=c[3*R+0]*v,P=c[3*R+1],S=c[3*R+0]*L;l.push(E,P,S)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,L=v,R=v+t.length,E=v+t.length+1,P=v+1;r.push(L,R,P),r.push(E,P,R)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.points,t.segments,t.phiStart,t.phiLength)}}class Yc extends Gs{constructor(t=1,e=1,n=4,s=8){const r=new Mc;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Yc(t.radius,t.length,t.capSegments,t.radialSegments)}}class jc extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new T,h=new q;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class zn extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function x(){const v=new T,L=new T;let R=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,A=M*(e-t)+t;for(let U=0;U<=s;U++){const D=U/s,z=D*c+a,V=Math.sin(z),H=Math.cos(z);L.x=A*V,L.y=-M*n+m,L.z=A*H,u.push(L.x,L.y,L.z),v.set(V,E,H).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=_[S][P],A=_[S+1][P],U=_[S+1][P+1],D=_[S][P+1];(t>0||S!==0)&&(h.push(M,A,D),R+=3),(e>0||S!==r-1)&&(h.push(A,U,D),R+=3)}l.addGroup(p,R,0),p+=R}function y(v){const L=g,R=new q,E=new T;let P=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const A=g;for(let U=0;U<=s;U++){const z=U/s*c+a,V=Math.cos(z),H=Math.sin(z);E.x=S*H,E.y=m*M,E.z=S*V,u.push(E.x,E.y,E.z),d.push(0,M,0),R.x=V*.5+.5,R.y=H*.5*M+.5,f.push(R.x,R.y),g++}for(let U=0;U<s;U++){const D=L+U,z=A+U;v===!0?h.push(z,z+1,D):h.push(z+1,z,D),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zc extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new T,v=new T,L=new T;for(let R=0;R<e.length;R+=3)f(e[R+0],y),f(e[R+1],v),f(e[R+2],L),c(y,v,L,x)}function c(x,y,v,L){const R=L+1,E=[];for(let P=0;P<=R;P++){E[P]=[];const S=x.clone().lerp(v,P/R),M=y.clone().lerp(v,P/R),A=R-P;for(let U=0;U<=A;U++)U===0&&P===R?E[P][U]=S:E[P][U]=S.clone().lerp(M,U/A)}for(let P=0;P<R;P++)for(let S=0;S<2*(R-P)-1;S++){const M=Math.floor(S/2);S%2===0?(d(E[P][M+1]),d(E[P+1][M]),d(E[P][M])):(d(E[P][M+1]),d(E[P+1][M+1]),d(E[P+1][M]))}}function l(x){const y=new T;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new T;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;o.push(v,1-L)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],L=o[x+4],R=Math.max(y,v,L),E=Math.min(y,v,L);R>.9&&E<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),L<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new T,y=new T,v=new T,L=new T,R=new q,E=new q,P=new q;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),R.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),L.copy(x).add(y).add(v).divideScalar(3);const A=m(L);_(R,M+0,x,A),_(E,M+2,y,A),_(P,M+4,v,A)}}function _(x,y,v,L){L<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=L/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.vertices,t.indices,t.radius,t.details)}}class Lo extends Mc{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Mc().fromJSON(s))}return this}}const tv={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Qu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=rv(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return xr(r,o,e,a,c,f,0),o}};function Qu(i,t,e,n,s){let r,o;if(s===gv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=vh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=vh(r,i[r],i[r+1],o);return o&&Io(o,o.next)&&(Mr(o),o=o.next),o}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Io(e,e.next)||Se(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hv(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?nv(i,n,s,r):ev(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Mr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=iv($i(i),t,e),xr(i,t,e,n,s,r,2)):o===2&&sv(i,t,e,n,s,r):xr($i(i),t,e,n,s,r,1);break}}}function ev(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ts(s,a,r,c,o,l,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function nv(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Sc(f,g,t,e,n),x=Sc(_,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ts(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ts(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ts(a,h,c,u,l,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ts(a,h,c,u,l,d,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function iv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Io(s,r)&&td(s,n,n.next,r)&&yr(s,r)&&yr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=i=r),n=n.next}while(n!==i);return $i(n)}function sv(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fv(o,a)){let c=ed(o,a);o=$i(o,o.next),c=$i(c,c.next),xr(o,t,e,n,s,r,0),xr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function rv(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Qu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(dv(l));for(s.sort(ov),r=0;r<s.length;r++)e=av(s[r],e);return e}function ov(i,t){return i.x-t.x}function av(i,t){const e=cv(i,t);if(!e)return t;const n=ed(e,i);return $i(n,n.next),$i(e,e.next)}function cv(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Ts(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),yr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&lv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function lv(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function hv(i,t,e,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,uv(s)}function uv(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Sc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ts(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!pv(i,t)&&(yr(i,t)&&yr(t,i)&&mv(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Io(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Io(i,t){return i.x===t.x&&i.y===t.y}function td(i,t,e,n){const s=io(Se(i,t,e)),r=io(Se(i,t,n)),o=io(Se(e,n,i)),a=io(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&no(i,e,t)||r===0&&no(i,n,t)||o===0&&no(e,i,n)||a===0&&no(e,t,n))}function no(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function io(i){return i>0?1:i<0?-1:0}function pv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&td(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function mv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ed(i,t){const e=new bc(i.i,i.x,i.y),n=new bc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(i,t,e,n){const s=new bc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class wi{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return wi.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xh(t),yh(n,t);let o=t.length;e.forEach(xh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,yh(n,e[c]);const a=tv.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function xh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function yh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $c extends ve{constructor(t=new Lo([new q(.5,.5),new q(-.5,.5),new q(-.5,-.5),new q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:_v;let y,v=!1,L,R,E,P;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,L=p.computeFrenetFrames(h,!1),R=new T,E=new T,P=new T),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(l);let M=S.shape;const A=S.holes;if(!wi.isClockWise(M)){M=M.reverse();for(let K=0,it=A.length;K<it;K++){const I=A[K];wi.isClockWise(I)&&(A[K]=I.reverse())}}const D=wi.triangulateShape(M,A),z=M;for(let K=0,it=A.length;K<it;K++){const I=A[K];M=M.concat(I)}function V(K,it,I){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(it,I)}const H=M.length,$=D.length;function W(K,it,I){let It,tt,xt;const at=K.x-it.x,Bt=K.y-it.y,gt=I.x-K.x,C=I.y-K.y,b=at*at+Bt*Bt,B=at*C-Bt*gt;if(Math.abs(B)>Number.EPSILON){const Y=Math.sqrt(b),Q=Math.sqrt(gt*gt+C*C),j=it.x-Bt/Y,Tt=it.y+at/Y,ht=I.x-C/Q,_t=I.y+gt/Q,Qt=((ht-j)*C-(_t-Tt)*gt)/(at*C-Bt*gt);It=j+at*Qt-K.x,tt=Tt+Bt*Qt-K.y;const et=It*It+tt*tt;if(et<=2)return new q(It,tt);xt=Math.sqrt(et/2)}else{let Y=!1;at>Number.EPSILON?gt>Number.EPSILON&&(Y=!0):at<-Number.EPSILON?gt<-Number.EPSILON&&(Y=!0):Math.sign(Bt)===Math.sign(C)&&(Y=!0),Y?(It=-Bt,tt=at,xt=Math.sqrt(b)):(It=at,tt=Bt,xt=Math.sqrt(b/2))}return new q(It/xt,tt/xt)}const ct=[];for(let K=0,it=z.length,I=it-1,It=K+1;K<it;K++,I++,It++)I===it&&(I=0),It===it&&(It=0),ct[K]=W(z[K],z[I],z[It]);const mt=[];let bt,qt=ct.concat();for(let K=0,it=A.length;K<it;K++){const I=A[K];bt=[];for(let It=0,tt=I.length,xt=tt-1,at=It+1;It<tt;It++,xt++,at++)xt===tt&&(xt=0),at===tt&&(at=0),bt[It]=W(I[It],I[xt],I[at]);mt.push(bt),qt=qt.concat(bt)}for(let K=0;K<m;K++){const it=K/m,I=f*Math.cos(it*Math.PI/2),It=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,xt=z.length;tt<xt;tt++){const at=V(z[tt],ct[tt],It);ot(at.x,at.y,-I)}for(let tt=0,xt=A.length;tt<xt;tt++){const at=A[tt];bt=mt[tt];for(let Bt=0,gt=at.length;Bt<gt;Bt++){const C=V(at[Bt],bt[Bt],It);ot(C.x,C.y,-I)}}}const ae=g+_;for(let K=0;K<H;K++){const it=d?V(M[K],qt[K],ae):M[K];v?(E.copy(L.normals[0]).multiplyScalar(it.x),R.copy(L.binormals[0]).multiplyScalar(it.y),P.copy(y[0]).add(E).add(R),ot(P.x,P.y,P.z)):ot(it.x,it.y,0)}for(let K=1;K<=h;K++)for(let it=0;it<H;it++){const I=d?V(M[it],qt[it],ae):M[it];v?(E.copy(L.normals[K]).multiplyScalar(I.x),R.copy(L.binormals[K]).multiplyScalar(I.y),P.copy(y[K]).add(E).add(R),ot(P.x,P.y,P.z)):ot(I.x,I.y,u/h*K)}for(let K=m-1;K>=0;K--){const it=K/m,I=f*Math.cos(it*Math.PI/2),It=g*Math.sin(it*Math.PI/2)+_;for(let tt=0,xt=z.length;tt<xt;tt++){const at=V(z[tt],ct[tt],It);ot(at.x,at.y,u+I)}for(let tt=0,xt=A.length;tt<xt;tt++){const at=A[tt];bt=mt[tt];for(let Bt=0,gt=at.length;Bt<gt;Bt++){const C=V(at[Bt],bt[Bt],It);v?ot(C.x,C.y+y[h-1].y,y[h-1].x+I):ot(C.x,C.y,u+I)}}}Z(),st();function Z(){const K=s.length/3;if(d){let it=0,I=H*it;for(let It=0;It<$;It++){const tt=D[It];Nt(tt[2]+I,tt[1]+I,tt[0]+I)}it=h+m*2,I=H*it;for(let It=0;It<$;It++){const tt=D[It];Nt(tt[0]+I,tt[1]+I,tt[2]+I)}}else{for(let it=0;it<$;it++){const I=D[it];Nt(I[2],I[1],I[0])}for(let it=0;it<$;it++){const I=D[it];Nt(I[0]+H*h,I[1]+H*h,I[2]+H*h)}}n.addGroup(K,s.length/3-K,0)}function st(){const K=s.length/3;let it=0;Et(z,it),it+=z.length;for(let I=0,It=A.length;I<It;I++){const tt=A[I];Et(tt,it),it+=tt.length}n.addGroup(K,s.length/3-K,1)}function Et(K,it){let I=K.length;for(;--I>=0;){const It=I;let tt=I-1;tt<0&&(tt=K.length-1);for(let xt=0,at=h+m*2;xt<at;xt++){const Bt=H*xt,gt=H*(xt+1),C=it+It+Bt,b=it+tt+Bt,B=it+tt+gt,Y=it+It+gt;Vt(C,b,B,Y)}}}function ot(K,it,I){c.push(K),c.push(it),c.push(I)}function Nt(K,it,I){kt(K),kt(it),kt(I);const It=s.length/3,tt=x.generateTopUV(n,s,It-3,It-2,It-1);ie(tt[0]),ie(tt[1]),ie(tt[2])}function Vt(K,it,I,It){kt(K),kt(it),kt(It),kt(it),kt(I),kt(It);const tt=s.length/3,xt=x.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);ie(xt[0]),ie(xt[1]),ie(xt[3]),ie(xt[1]),ie(xt[2]),ie(xt[3])}function kt(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function ie(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vv(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new bo[s.type]().fromJSON(s)),new $c(n,t.options)}}const _v={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new q(r,o),new q(a,c),new q(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new q(o,1-c),new q(l,1-u),new q(d,1-g),new q(_,1-p)]:[new q(a,1-c),new q(h,1-u),new q(f,1-g),new q(m,1-p)]}};function vv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class wr extends Zc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wr(t.radius,t.detail)}}class Jc extends ve{constructor(t=new Lo([new q(0,.5),new q(-.5,-.5),new q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Xt(s,3)),this.setAttribute("normal",new Xt(r,3)),this.setAttribute("uv",new Xt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;wi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const x=g[m];wi.isClockWise(x)===!0&&(g[m]=x.reverse())}const _=wi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){const x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=_.length;m<p;m++){const x=_[m],y=x[0]+u,v=x[1]+u,L=x[2]+u;n.push(y,v,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return xv(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Jc(n,t.curveSegments)}}function xv(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Do extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new T,d=new T,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const R=L/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+v,1-y),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],L=h[p+1][x],R=h[p+1][x+1];(p!==0||o>0)&&f.push(y,v,R),(p!==n-1||c<Math.PI)&&f.push(v,L,R)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Kc extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qc extends ve{constructor(t=new Ju(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new T,c=new T,l=new q;let h=new T;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),p()}function m(y){h=t.getPointAt(y/e,h);const v=o.normals[y],L=o.binormals[y];for(let R=0;R<=s;R++){const E=R/s*Math.PI*2,P=Math.sin(E),S=-Math.cos(E);c.x=S*v.x+P*L.x,c.y=S*v.y+P*L.y,c.z=S*v.z+P*L.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const L=(s+1)*(y-1)+(v-1),R=(s+1)*y+(v-1),E=(s+1)*y+v,P=(s+1)*(y-1)+v;g.push(L,R,P),g.push(R,E,P)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Qc(new bo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class qe extends Ki{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eu,this.normalScale=new q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kn extends qe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class tl extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yv extends tl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ma=new Ht,Mh=new T,Sh=new T;class nd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new q(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bh=new Ht,nr=new T,ga=new T;class Mv extends nd{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new q(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),nr.setFromMatrixPosition(t.matrixWorld),n.position.copy(nr),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-nr.x,-nr.y,-nr.z),bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh)}}class Sv extends tl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bv extends nd{constructor(){super(new Ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _a extends tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new bv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wh=new Ht;class wv{constructor(t,e,n=0,s=1/0){this.ray=new Ro(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(t,e=!0,n=[]){return wc(t,this,n,e),n.sort(Eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)wc(t[s],this,n,e);return n.sort(Eh),n}}function Eh(i,t){return i.distance-t.distance}function wc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)wc(r[o],t,e,!0)}}class Th{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ev extends Ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);const Tv=[{id:"mining",no:1,title:"开采",en:"Mining",summary:"缅甸帕敢（Hpakant）一带是宝石级硬玉翡翠的主要产地。如今的开采以次生矿为主：翡翠以巨砾形式埋在乌鲁河沿岸的砾岩层里，大型露天矿用挖掘机等重型机械剥土、挖掘。",terms:[{zh:"原生矿",en:"primary deposit",def:"产于蛇纹石化橄榄岩中的硬玉岩岩脉。"},{zh:"次生矿",en:"secondary deposit",def:"原生矿体经风化、搬运后沉积在砾岩或河床中的巨砾与砾石。"}],purpose:"获得翡翠原石。",equipment:["挖掘机","运输车"],cautions:["实际矿区既有大型机械化露天开采，也有手工开采，方式差异很大。","露天矿边坡风险高，帕敢曾发生严重滑坡事故。本作品只呈现示意性的开采，不美化矿区环境。"],sources:["GG-BURMA","HPK-2021","IGC-2019"],evidence:"B",simplification:"沙盘为示意，地形、比例与设备都不对应任何真实矿区；不展示爆破、排水与手工采矿。"},{id:"washing",no:2,title:"清洗",en:"Washing",summary:"用水冲去原石表面的泥沙，让皮壳的颜色、颗粒和裂纹更容易看清。",terms:[{zh:"皮壳 / 石皮",en:"rind / skin",def:"原石表面因风化形成的外层，会遮挡内部的真实品质。"}],purpose:"看清原石外表，为后续观察做准备。",equipment:["水枪","毛刷"],cautions:["清洗只改善表面观察，不会改变原石本身。"],sources:["GG-BURMA","ZH-TRADE"],evidence:"C",simplification:"资料中很少单独描述这一步。它属于合理的示意性步骤，并非标准化工序。"},{id:"lighting",no:3,title:"打灯观察",en:"Lighting",summary:"用强光手电贴住皮壳或擦口，观察光线透入的深浅与颜色。",terms:[{zh:"打灯",en:"torch inspection",def:"以强光照射原石表面，观察局部透光与颜色的经验方法。"}],purpose:"初步了解局部的透明度与颜色。",equipment:["强光手电"],cautions:["光线只能进入靠近表面的一小部分，看到的只是局部。","内部的裂、颜色变化和整体品质无法通过打灯完整判断。"],sources:["GG-BURMA","ZH-TRADE"],evidence:"C",simplification:"画面中的透光光晕是视觉示意，不代表真实的透光范围。"},{id:"window",no:4,title:"开窗",en:"Windowing",summary:"在皮壳上磨出一小块（擦口），或切磨出一个平面（开窗，行内也叫“门子”），露出内部石质，便于观察颜色与质地。",terms:[{zh:"擦口",en:"polished spot",def:"在皮壳上擦磨出的小口。"},{zh:"开窗 / 门子",en:"window",def:"在原石外皮上磨出、用来观察内部的切口。"}],purpose:"暴露局部内部，便于观察颜色、透明度与质地。",equipment:["角磨机","砂轮"],cautions:["窗口所见只代表这一个位置，不能推断整块原石。"],sources:["ZH-TRADE","EN-TRADE"],evidence:"C",simplification:"本作只开一个窗。实际操作中窗口的数量和位置因人而异。"},{id:"planning",no:5,title:"切割规划",en:"Cut planning",summary:"根据窗口与外观所见的颜色、裂纹和尺寸，决定下刀位置。本作选择的路线是：先对半剖开，再从其中一半切取板料。",terms:[{zh:"绺裂",en:"fracture",def:"原石中的裂隙，会影响取料位置与成品价值。"}],purpose:"尽量保留颜色、避开裂隙、提高出材率。",equipment:["记号笔 / 粉笔","卡尺"],cautions:["切割路线因原石形态和工厂经验而不同；“先对半、再取板”是本作的示意路线。"],sources:["GIA-HSU","ZH-TRADE"],evidence:"C",simplification:"真实的规划往往需要反复试切与讨论，本作把它压缩为一次性画线。"},{id:"slabbing",no:6,title:"水冷切片",en:"Slabbing",summary:"用镶有金刚石的锯片剖开原石、切出平整的板料。切割时持续加水，既降温又带走岩粉。",terms:[{zh:"金刚石锯片",en:"diamond blade",def:"刃口镶有金刚石的圆锯片。"},{zh:"板料",en:"slab",def:"从原石上切下的平板，手镯将从板料中取出。"}],purpose:"剖开原石，并获得厚度合适的板料。",equipment:["水冷切割机（金刚石锯片）"],cautions:["切开后，只能看到切面所在平面的内部结构。","板料厚度会限制镯子的条宽（行业资料，待核实）。"],sources:["GIA-HSU","EN-TRADE"],evidence:"B",simplification:"大型原石可能采用其他切割设备；本作统一用圆锯片表现。"},{id:"marking",no:7,title:"画圈",en:"Marking",summary:"在板料上评估裂纹与颜色分布，按不同的手镯尺寸画出轮廓。画面中的两组圆圈刻意避开了那条贯穿裂隙。",terms:[{zh:"圈口",en:"inner diameter",def:"手镯的内径，决定佩戴尺寸。"}],purpose:"确定取镯位置与尺寸。",equipment:["灯箱 / 光源","记号笔"],cautions:["尺寸选择受裂纹、颜色和板料大小共同限制。"],sources:["GIA-HSU","ZH-TRADE"],evidence:"B",simplification:"画面中的圈口为示意比例，不作为尺码建议。"},{id:"coring",no:8,title:"套取镯坯",en:"Coring",summary:"钻床先沿外轮廓切出圆形，再换用较小的圆形钻头切出内径。中间切下的圆柱是镯芯，四周剩下余料。",terms:[{zh:"镯坯",en:"bangle blank",def:"切出后、尚未修形的环形毛坯。"},{zh:"镯芯",en:"core",def:"内圈切下的圆柱料，可另作吊坠等。"},{zh:"余料",en:"offcut",def:"取镯后剩下的板料边角。"}],purpose:"从板料中取出环形毛坯。",equipment:["钻床 / 套料机","管状金刚石钻头"],cautions:["不同资料对内外圈的先后顺序说法不一；本作依据 GIA 对平洲工厂的描述（先外后内）。","钻切过程需要加水冷却（行业资料）。"],sources:["GIA-HSU","ZH-TRADE","EN-TRADE"],evidence:"B",simplification:"两次钻切在画面中会被加速。"},{id:"shaping",no:9,title:"粗加工",en:"Rough shaping",summary:"去除镯坯上的瑕疵与绺裂（打顶），磨掉方形截面的棱角（拍边），粗磨出内外圈与条形轮廓。",terms:[{zh:"打顶",en:"—",def:"去除镯坯上的瑕疵与绺裂（行业术语）。"},{zh:"拍边",en:"edge rounding",def:"磨去镯坯截面的棱角（行业术语）。"}],purpose:"定出手镯的基本形状。",equipment:["粗砂轮 / 磨轮"],cautions:["术语与做法因地区和工厂而异。"],sources:["ZH-TRADE"],evidence:"C",simplification:"截面由方变圆的过程在画面中是连续变形，实际是多次磨削。"},{id:"fine-grinding",no:10,title:"精磨",en:"Fine grinding",summary:"逐级换用更细的磨料，去除粗磨痕迹，使表面平整。",terms:[{zh:"细磨",en:"fine grinding",def:"用更细的磨料修整表面。"}],purpose:"提高表面平整度，为抛光做准备。",equipment:["细磨轮 / 磨筒","冷却水"],cautions:["不同工厂使用的磨料种类和目数顺序不同，本作不给出具体数值。"],sources:["EN-TRADE","ZH-TRADE"],evidence:"C",simplification:"画面用“粗糙 → 平整”的连续过渡表现多道工序。"},{id:"polishing",no:11,title:"抛光",en:"Polishing",summary:"用极细的磨料与抛光工具打出光泽，使表面反射清晰、不变形。",terms:[{zh:"抛光",en:"polishing",def:"在表面形成光泽的最后一道磨削工序。"}],purpose:"形成光泽，让颜色与透明度得以展现。",equipment:["抛光轮"],cautions:["抛光是正常加工，不属于“优化处理”。","资料中提到竹、氧化铈等材料，但各厂做法不同，本作不指定具体材料。"],sources:["GIA-QF","EN-TRADE"],evidence:"C",simplification:"画面以高光由模糊变锐利来表现抛光效果。"},{id:"showcase",no:12,title:"检查展示",en:"Inspection & showcase",summary:"检查裂纹、尺寸、抛光与整体完整性，然后在展台上呈现完整的手镯。GIA 评价翡翠时，最看重颜色，其次是透明度和质地，同时也看净度与做工。",terms:[{zh:"A 货",en:"Type A",def:"未经漂白、充填或染色的天然翡翠（表面打蜡通常被接受，待以 GIA 原文核对）。"},{zh:"B 货",en:"Type B",def:"经酸洗漂白、再注入聚合物充填的翡翠。"},{zh:"C 货",en:"Type C",def:"经染色的翡翠。"}],purpose:"检验成品，并展示最终效果。",equipment:["光源","卡尺"],cautions:["天然与否只能由实验室检测确定，不能凭外观判断。","本作展示的是概念中的天然翡翠，不代表任何真实商品。"],sources:["GIA-QF","GG-DYED","GG-COAT"],evidence:"A",simplification:"画面中的颜色与纹理是程序化生成的，用于教学示意。"}],Av={stages:Tv},Rv=[{id:"GIA-ENC",grade:"A",retrieved:"search-summary",title:"GIA Gem Encyclopedia — Jade (overview & properties)",url:"https://www.gia.edu/jade"},{id:"GIA-DESC",grade:"A",retrieved:"not-retrieved",title:"GIA — Jade description",url:"https://www.gia.edu/jade-description"},{id:"GIA-QF",grade:"A",retrieved:"search-summary",title:"GIA — Jadeite jade quality factors",url:"https://www.gia.edu/jade-quality-factor"},{id:"GIA-BUY",grade:"A",retrieved:"not-retrieved",title:"GIA — Jade buyer's guide",url:"https://www.gia.edu/jade/buyers-guide"},{id:"GIA-HSU",grade:"B",retrieved:"search-summary",title:"Hsu, T. (2013) Jadeite Manufacturing and Trading Hubs in Guangdong, China — GIA News from Research (Pingzhou bangle factory visit)",url:"https://www.gia.edu/gia-news-research-jadeite-trading-centers-hsu"},{id:"GG-BURMA",grade:"B",retrieved:"search-summary",title:"Hughes, R.W. et al. (2000) Burmese Jade: The Inscrutable Gem — Gems & Gemology, Spring 2000",url:"https://www.gia.edu/dam/jcr:4b5d009c-53ed-464a-a8cd-4d5ab23f56c6/SP00.pdf"},{id:"GG-DYED",grade:"A",retrieved:"search-summary",title:"Gems & Gemology Lab Notes (Fall 2015) — Dyed and natural green jadeite",url:"https://www.gia.edu/gems-gemology/fall-2015-labnotes-dyed-natural-green-jadeite"},{id:"GG-COAT",grade:"A",retrieved:"search-summary",title:"Gems & Gemology — Gemological characteristics of coated jadeite jade",url:"https://www.gia.edu/gems-gemology/gemological-characteristics-coated-jadeite-jade"},{id:"PENN",grade:"B",retrieved:"search-summary",title:"Penn Museum, Expedition — jade (specific gravity of jadeite vs nephrite)",url:"https://www.penn.museum/sites/expedition/jade/"},{id:"HPK-2021",grade:"B",retrieved:"search-summary",title:"The 2020 Hpakant jade mine disaster: a multi-sensor investigation for slope failure (ISPRS J. Photogramm. Remote Sens., 2021)",url:"https://sciencedirect.com/science/article/pii/S0924271621001489"},{id:"IGC-2019",grade:"B",retrieved:"search-summary",title:"Loiacono et al. (2019) Artisanal jade mining in Myanmar — International Growth Centre report",url:"https://www.theigc.org/sites/default/files/2020/04/Loiacono-et-al-2019-Final-Report-1-1.pdf"},{id:"ZH-TRADE",grade:"C",retrieved:"search-summary",title:"中文行业科普文章（知乎：翡翠赌石三大法宝；手镯加工流程；翡翠手镯制作全过程）",url:"https://zhuanlan.zhihu.com/p/38353244"},{id:"EN-TRADE",grade:"C",retrieved:"search-summary",title:"English trade articles on bangle making (Mays Gems; Jade Bangle Co.; Jade Fiend)",url:"https://mays.us/blogs/jade-education/how-jade-bangle-is-made-traditionally"}],Cv={sources:Rv},Pv={rind:{label:"石皮",sub:"Rind",body:"原石表面因风化形成的外层。它会遮挡内部的真实品质。",stage:"washing"},window:{label:"开窗",sub:"Window",body:"磨去一小块皮壳露出的内部石质。窗口所见只代表这一个位置。",stage:"window"},fissure:{label:"裂隙",sub:"Fissure",body:"一条贯穿原石的裂隙。它会在窗口、切面和板料上的同一位置出现，决定后面从哪里取镯。",stage:"planning"},stone:{label:"翡翠原石",sub:"Jadeite rough",body:"本作中的原石是程序化生成的教学示意，并非真实标本。",stage:"lighting"},saw:{label:"水冷切割机",sub:"Slab saw",body:"用镶有金刚石的圆锯片剖开原石。工作台可前后进给，锯头可升降。",stage:"slabbing"},blade:{label:"金刚石锯片",sub:"Diamond blade",body:"锯片刃口镶有金刚石。切割时锯片高速旋转，并持续加冷却水。",stage:"slabbing"},coolant:{label:"冷却水",sub:"Coolant",body:"持续冲向切口的水流：降温，并带走切割产生的岩粉。",stage:"slabbing"},cutface:{label:"切面",sub:"Cut face",body:"两个切面互为镜像。它们的色带、棉絮和裂隙都来自同一块原石的内部。",stage:"slabbing"},"fissure-cut":{label:"裂隙在切面上",sub:"Same fissure",body:"窗口上看到的那条裂隙，在切面上出现在对应的位置。",stage:"planning"},plinth:{label:"展台",sub:"Plinth",body:"原石观察工位。",stage:"lighting"},mine:{label:"矿坑",sub:"Open pit",body:"示意性的阶梯式露天矿。实际矿区既有机械化开采，也有手工开采，方式差异很大。",stage:"mining"},excavator:{label:"挖掘机",sub:"Excavator",body:"剥离覆土、挖出原石。帕敢一带的大型露天矿以重型机械开采为主。",stage:"mining"},cutlines:{label:"切割线",sub:"Cut lines",body:"三条粉笔线：中间一条先把原石对半剖开，另外两条从其中一半取出板料。",stage:"planning"},slab:{label:"板料",sub:"Slab",body:"约 14 毫米厚的平板。它的两个面都来自原石内部，手镯将从这里取出。",stage:"slabbing"},"fissure-slab":{label:"裂隙",sub:"Fissure",body:"窗口上看到的那条裂隙，也穿过这块板料。画圈时要避开它。",stage:"marking"},marks:{label:"画好的圈",sub:"Marked rings",body:"每处两圈：外圈决定手镯外径，内圈决定圈口。两组都避开了裂隙。",stage:"marking"},drill:{label:"钻床",sub:"Core drill",body:"带管状金刚石钻头的钻床，钻切时加水冷却。",stage:"coring"},"outer-bit":{label:"外圈钻头",sub:"Outer bit",body:"先沿外轮廓钻切出圆形（依据 GIA 对平洲工厂的描述）。",stage:"coring"},"inner-bit":{label:"内圈钻头",sub:"Inner bit",body:"再换用较小的钻头切出内径。不同资料对先后顺序说法不一。",stage:"coring"},blank:{label:"镯坯",sub:"Bangle blank",body:"切出后、尚未修形的环形毛坯，截面还是方的。",stage:"coring"},core:{label:"镯芯",sub:"Core",body:"内圈切下的圆柱料，可另作吊坠等（行业资料）。",stage:"coring"},offcut:{label:"余料",sub:"Offcut",body:"取镯后剩下的板料。另一处画好的圈还可以再取一只。",stage:"coring"},wheel:{label:"粗磨轮",sub:"Coarse wheel",body:"磨去方形截面的棱角，定出内外圈与条形轮廓。",stage:"shaping"},drum:{label:"细磨筒",sub:"Sanding drum",body:"磨筒伸入内圈，逐级换用更细的磨料。设备形式为示意。",stage:"fine-grinding"},buff:{label:"抛光轮",sub:"Polishing buff",body:"用极细的磨料打出光泽。抛光是正常加工，不是“优化处理”。",stage:"polishing"},"bangle-rough":{label:"镯坯",sub:"Blank",body:"表面粗糙、没有光泽，截面正在由方变圆。",stage:"shaping"},"bangle-fine":{label:"精磨中",sub:"Fine grinding",body:"粗磨痕迹逐渐消失，表面变得平整。",stage:"fine-grinding"},"bangle-polish":{label:"抛光中",sub:"Polishing",body:"高光由模糊变清晰，颜色和透明度显现出来。",stage:"polishing"},inspect:{label:"检查",sub:"Inspection",body:"量圈口，打灯检查裂纹与抛光状态。",stage:"showcase"},edge:{label:"边缘透光",sub:"Translucent edge",body:"光线在薄的边缘处透过并散射，显得温润。",stage:"showcase"},colour:{label:"色带",sub:"Colour band",body:"绿色浓淡不均，是同一块原石内部的天然分布。",stage:"showcase"},lustre:{label:"抛光高光",sub:"Polish lustre",body:"清晰、不变形的反射是做工好的标志之一（GIA）。",stage:"showcase"},bangle:{label:"翡翠手镯",sub:"Jadeite bangle",body:"本作中的手镯由程序生成，用于教学示意，不代表任何真实商品。",stage:"showcase"},wash:{label:"清洗台",sub:"Wash basin",body:"冲去泥沙，让皮壳看得更清楚。",stage:"washing"},lightbox:{label:"灯箱",sub:"Lightbox",body:"从下方透光，便于观察板料内部的裂与颜色。",stage:"marking"},"grind-bench":{label:"磨床",sub:"Grinding bench",body:"可更换磨轮、磨筒和抛光轮。",stage:"shaping"},showcase:{label:"展台",sub:"Showcase",body:"成品展厅。",stage:"showcase"},"grinder-hand":{label:"角磨机",sub:"Angle grinder",body:"用砂轮磨去局部皮壳。",stage:"window"},"inner-diameter":{label:"圈口 ≈ 59.6 mm",sub:"Inner diameter",body:"手镯的内径。本作模型的圈口约 59.6 毫米、条宽约 8.8 毫米，仅为示意，不作为尺码建议。",stage:"showcase"},torch:{label:"强光手电",sub:"Torch",body:"贴住皮壳打光，观察光线透入的深浅与颜色。光只能进入靠近表面的一小部分，看到的只是局部。",stage:"lighting"}},Lv={hotspots:Pv},Iv={"brand.sub":"翡翠诞生记","intro.kicker":"JADEITE JADE · 硬玉翡翠 · 数字工艺馆","intro.title":"翡翠诞生记","intro.lead":"一块未经切割的原石，经过开采、清洗、观察、切片、取圈、打磨与抛光，成为一只绿色翡翠手镯。","intro.start":"开始旅程","intro.explore":"自由探索","intro.note":"全程约 5 分钟 · 可随时暂停、跳转 · 声音默认关闭","tl.label":"工序时间轴","btn.play":"播放","btn.pause":"暂停","btn.replay":"重新播放","btn.prev":"上一道工序","btn.next":"下一道工序","btn.reset":"重置视角","btn.knowledge":"知识","btn.torch":"手动打灯","btn.soundOn":"声音 · 开","btn.soundOff":"声音 · 关","speed.label":"演示速度","scrub.label":"本道工序进度","cam.free":"自由视角 · 点击回到导览",hint:"拖动旋转 · 滚轮或双指缩放 · 空格 播放/暂停 · ←→ 逐帧 · [ ] 切换工序","card.title":"知识卡片","card.terms":"专业术语","card.purpose":"加工目的","card.equipment":"设备","card.cautions":"注意事项","card.sources":"参考来源","card.evidence":"证据","card.simplified":"演示简化",guided:"导览中","show.lights":"灯光","show.gallery":"聚光","show.soft":"柔光","show.back":"背光","show.compare":"表面对比","show.before":"打磨前","show.after":"抛光后","show.orbit":"360° 旋转","torch.note":"打灯观察：光线只能进入靠近表面的一小部分，看到的只是局部。","ph.overview":"沙盘全景","ph.dig":"挖掘","ph.lift":"提起原石","ph.transport":"运送","ph.wash":"冲洗","ph.done":"完成","ph.dim":"调暗环境","ph.torch":"打灯","ph.lightsOn":"恢复照明","ph.approach":"就位","ph.grind":"磨窗","ph.orbit":"环绕观察","ph.lineHalf":"画对半线","ph.lineSlab":"画板料线","ph.feed":"进给","ph.cut":"下切 · 水冷","ph.retract":"退刀","ph.open":"打开切面","ph.slabCut":"切取板料","ph.separate":"分离","ph.lightbox":"灯箱","ph.mark":"画圈","ph.outer":"钻外圈","ph.toolChange":"换钻头","ph.inner":"钻内圈","ph.rough":"粗磨修形","ph.fine":"精磨","ph.polish":"抛光","ph.inspect":"检查","ph.display":"陈列","live.stage":"工序 {no}：{title}","fallback.noWebgl.title":"无法启动三维场景","fallback.noWebgl.body":"你的浏览器或设备没有启用 WebGL 2。请使用最新版 Chrome、Edge、Safari 或 Firefox，并确认已开启硬件加速。","fallback.lost.title":"图形上下文已丢失","fallback.lost.body":"浏览器暂时收回了 3D 渲染资源（常见于切换应用或显存不足）。正在等待恢复，你也可以刷新页面。","fallback.error.title":"三维场景初始化失败","fallback.error.body":"加载过程中出现错误，请刷新页面重试。","fallback.retry":"重试","ph.liftBlank":"取出镯坯","dim.inner":"圈口 ≈ {mm} mm"},Dv={strings:Iv},id=Av.stages,va=Object.fromEntries(Cv.sources.map(i=>[i.id,i])),Uv=Lv.hotspots,Nv=Dv.strings;function Ah(i){const t=id.find(e=>e.id===i);if(!t)throw new Error(`unknown stage ${i}`);return t}function Rh(i){const t=Uv[i];if(!t)throw new Error(`unknown hotspot ${i}`);return t}function wt(i,t={}){const e=Nv[i];return e===void 0?i:e.replace(/\{(\w+)\}/g,(n,s)=>String(t[s]??""))}const Fn=[{id:"mining",duration:25,phases:[[0,"ph.overview"],[.25,"ph.dig"],[.6,"ph.lift"]]},{id:"washing",duration:16,phases:[[0,"ph.transport"],[.25,"ph.wash"],[.9,"ph.done"]]},{id:"lighting",duration:22,phases:[[0,"ph.transport"],[.2,"ph.dim"],[.3,"ph.torch"],[.86,"ph.lightsOn"]]},{id:"window",duration:20,phases:[[0,"ph.approach"],[.25,"ph.grind"],[.8,"ph.done"]]},{id:"planning",duration:24,phases:[[0,"ph.orbit"],[.15,"ph.lineHalf"],[.45,"ph.lineSlab"],[.85,"ph.done"]]},{id:"slabbing",duration:46,phases:[[0,"ph.transport"],[.12,"ph.feed"],[.2,"ph.cut"],[.42,"ph.retract"],[.47,"ph.open"],[.6,"ph.slabCut"],[.92,"ph.separate"]]},{id:"marking",duration:20,phases:[[0,"ph.transport"],[.35,"ph.lightbox"],[.45,"ph.mark"]]},{id:"coring",duration:32,phases:[[0,"ph.transport"],[.14,"ph.outer"],[.45,"ph.toolChange"],[.5,"ph.inner"],[.76,"ph.liftBlank"]]},{id:"shaping",duration:24,phases:[[0,"ph.transport"],[.18,"ph.rough"]]},{id:"fine-grinding",duration:20,phases:[[0,"ph.toolChange"],[.12,"ph.fine"]]},{id:"polishing",duration:20,phases:[[0,"ph.toolChange"],[.12,"ph.polish"]]},{id:"showcase",duration:32,phases:[[0,"ph.transport"],[.16,"ph.inspect"],[.5,"ph.display"]]}],xa=Fn.length,Fv=i=>Fn[i].duration;function Ch(i,t){let e=Fn[i].phases[0][1];for(const[n,s]of Fn[i].phases)t>=n&&(e=s);return e}const En={play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5l12 7-12 7z"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',torch:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6h-4z"/><path d="M10 9v11h4V9"/><path d="M18 4l2-1M18 8h2"/></svg>',book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',sound:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="wave" d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/><path class="mute" d="M17 9l4 6M21 9l-4 6"/></svg>'},oe=(i,t="",e="")=>{const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n},cn=(i,t,e,n)=>{const s=oe("button",i,t);return s.type="button",s.setAttribute("aria-label",e),s.title=e,s.addEventListener("click",n),s},ir=i=>String(i).padStart(2,"0");class Ov{constructor(t,e){this.on=e,this.root=t,this.root.className="ui",this.root.dataset.intro="true";const n=oe("header","top");n.innerHTML=`<div class="brand"><span class="mark" aria-hidden="true"></span><b>JADE GENESIS</b><i>${wt("brand.sub")}</i></div>`,this.guidedChip=oe("span","guided",`<i aria-hidden="true"></i>${wt("guided")}`),this.soundBtn=cn("chip sound",`${En.sound}<span>${wt("btn.soundOff")}</span>`,wt("btn.soundOff"),()=>this.on.toggleSound());const s=oe("div","tools");s.append(this.guidedChip,this.soundBtn),n.append(s),this.intro=oe("section","intro"),this.intro.innerHTML=`<div class="kicker">${wt("intro.kicker")}</div><h1>${wt("intro.title")}</h1><p class="lead">${wt("intro.lead")}</p>`;const r=oe("div","cta-row");r.append(cn("pill primary big",`<span>${wt("intro.start")}</span>${En.play}`,wt("intro.start"),()=>this.on.start()),cn("pill big",`<span>${wt("intro.explore")}</span>`,wt("intro.explore"),()=>this.on.explore())),this.intro.append(r,oe("p","note",wt("intro.note"))),this.story=oe("section","story"),this.know=oe("aside","know"),this.know.id="knowledge",this.know.setAttribute("aria-label",wt("card.title")),this.knowToggle=cn("know-toggle",`${En.book}<span>${wt("btn.knowledge")}</span>`,wt("btn.knowledge"),()=>this.setKnowOpen(!this.know.classList.contains("open"))),this.knowToggle.setAttribute("aria-controls","knowledge"),this.knowToggle.setAttribute("aria-expanded","false");const o=oe("div","dock"),a=oe("nav","timeline");a.setAttribute("aria-label",wt("tl.label")),id.forEach((_,m)=>{const p=cn("step",`<span class="bar"><span class="fill"></span></span><span class="n">${ir(_.no)}</span><span class="zh">${_.title}</span>`,`${ir(_.no)} ${_.title}`,()=>this.on.goTo(m));p.dataset.stage=String(m),this.steps.push(p),this.stepFill.push(p.querySelector(".fill")),a.append(p)});const c=oe("div","controls");this.prevBtn=cn("round",En.prev,wt("btn.prev"),()=>this.on.prev()),this.playBtn=cn("round primary play",En.play,wt("btn.play"),()=>this.on.toggle()),this.nextBtn=cn("round",En.next,wt("btn.next"),()=>this.on.next());const l=oe("div","speed");l.setAttribute("role","group"),l.setAttribute("aria-label",wt("speed.label"));for(const _ of[.5,1,2]){const m=cn("",`${_}×`,`${_}×`,()=>this.on.speed(_));l.append(m),this.speedBtns.set(_,m)}const h=oe("div","scrub");this.scrub=oe("input"),this.scrub.type="range",this.scrub.min="0",this.scrub.max="1000",this.scrub.step="1",this.scrub.setAttribute("aria-label",wt("scrub.label")),this.scrub.addEventListener("input",()=>{this.scrubbing=!0,this.on.seek(+this.scrub.value/1e3)}),this.scrub.addEventListener("change",()=>{this.scrubbing=!1}),this.ticks=oe("div","ticks"),this.ticks.setAttribute("aria-hidden","true"),this.phaseText=oe("div","phase"),h.append(this.phaseText,this.scrub,this.ticks),this.torchBtn=cn("pill torch",`${En.torch}<span>${wt("btn.torch")}</span>`,wt("btn.torch"),()=>this.on.toggleTorch());const u=cn("round",En.reset,wt("btn.reset"),()=>this.on.resetView());c.append(this.prevBtn,this.playBtn,this.nextBtn,l,h,this.torchBtn,u),o.append(a,c),this.showcaseBar=oe("div","showcase-bar");const d=oe("div","seg");d.setAttribute("role","group"),d.setAttribute("aria-label",wt("show.lights"));for(const _ of["gallery","soft","back"]){const m=cn("",wt(`show.${_}`),wt(`show.${_}`),()=>this.on.lightMode(_));d.append(m),this.lightBtns.set(_,m)}const f=oe("label","compare");this.compareInput=oe("input"),this.compareInput.type="range",this.compareInput.min="0",this.compareInput.max="100",this.compareInput.value="100",this.compareInput.setAttribute("aria-label",wt("show.compare")),this.compareInput.addEventListener("input",()=>this.on.compare(+this.compareInput.value/100)),f.append(oe("span","",wt("show.before")),this.compareInput,oe("span","",wt("show.after"))),this.showcaseBar.append(oe("span","lbl",wt("show.lights")),d,oe("span","lbl",wt("show.compare")),f),this.camChip=cn("cam-chip",wt("cam.free"),wt("cam.free"),()=>this.on.resetView()),this.hotLayer=oe("div","hots"),this.popover=oe("div","popover"),this.popover.setAttribute("role","dialog"),this.popover.hidden=!0,this.toast=oe("div","toast"),this.toast.setAttribute("role","status"),this.live=oe("div","sr-only"),this.live.setAttribute("aria-live","polite");const g=oe("div","hint",wt("hint"));this.root.append(n,this.intro,this.story,this.knowToggle,this.know,this.hotLayer,this.popover,this.toast,this.camChip,this.showcaseBar,g,o,this.live),this.panels=[this.story,this.know,o,this.knowToggle,this.intro,this.showcaseBar],window.addEventListener("keydown",_=>this.onKey(_)),document.addEventListener("pointerdown",_=>{!this.popover.hidden&&!this.popover.contains(_.target)&&!_.target.closest(".pin")&&this.closePopover()})}root;intro;story;know;knowToggle;steps=[];stepFill=[];playBtn;prevBtn;nextBtn;speedBtns=new Map;scrub;phaseText;ticks;torchBtn;soundBtn;showcaseBar;lightBtns=new Map;compareInput;camChip;guidedChip;hotLayer;pins=new Map;popover;toast;live;panels;last={};scrubbing=!1;hideIntro(){this.root.dataset.intro="false"}onKey(t){const e=t.target;if(!(e?.tagName==="INPUT"&&t.key!==" ")&&!(e?.tagName==="BUTTON"&&(t.key===" "||t.key==="Enter")))switch(t.key){case" ":t.preventDefault(),this.on.toggle();break;case"ArrowRight":t.preventDefault(),this.on.step(.02);break;case"ArrowLeft":t.preventDefault(),this.on.step(-.02);break;case"]":this.on.next();break;case"[":this.on.prev();break;case"r":case"R":this.on.resetView();break;case"t":case"T":this.on.toggleTorch();break;case"m":case"M":this.on.toggleSound();break;case"Escape":this.closePopover(),this.setKnowOpen(!1);break}}setKnowOpen(t){this.know.classList.toggle("open",t),this.knowToggle.setAttribute("aria-expanded",String(t))}update(t){const e=this.last;if(t.stage!==e.stage){const s=Ah(Fn[t.stage].id);this.renderKnowledge(s),this.steps.forEach((r,o)=>{r.classList.toggle("on",o===t.stage),r.classList.toggle("done",o<t.stage),o===t.stage?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),this.root.dataset.stage=String(t.stage),this.prevBtn.disabled=t.stage===0,this.nextBtn.disabled=t.stage===Fn.length-1,this.ticks.innerHTML=Fn[t.stage].phases.map(([r,o])=>`<span style="left:${r*100}%">${wt(o)}</span>`).join(""),this.closePopover(),this.live.textContent=wt("live.stage",{no:ir(s.no),title:s.title})}if((t.stage!==e.stage||t.progress!==e.progress)&&this.stepFill.forEach((s,r)=>{s.style.transform=`scaleX(${r<t.stage?1:r===t.stage?t.progress:0})`}),t.playing!==e.playing||t.progress>=1!=(e.progress??0)>=1){const s=t.playing?wt("btn.pause"):t.progress>=1?wt("btn.replay"):wt("btn.play");this.playBtn.innerHTML=t.playing?En.pause:En.play,this.playBtn.setAttribute("aria-label",s),this.playBtn.title=`${s} (Space)`}if(t.speed!==e.speed)for(const[s,r]of this.speedBtns)r.classList.toggle("on",s===t.speed),r.setAttribute("aria-pressed",String(s===t.speed));if(!this.scrubbing&&t.progress!==e.progress&&(this.scrub.value=String(Math.round(t.progress*1e3))),t.phase!==e.phase||t.progress!==e.progress){const s=Math.round(t.progress*100);this.phaseText.textContent=`${t.phase} · ${s}%`,this.scrub.setAttribute("aria-valuetext",`${t.phase}，${s}%`)}t.guided!==e.guided&&this.guidedChip.classList.toggle("show",t.guided),t.cameraMode!==e.cameraMode&&this.camChip.classList.toggle("show",t.cameraMode==="free"),t.torch!==e.torch&&(this.torchBtn.classList.toggle("on",t.torch),this.torchBtn.setAttribute("aria-pressed",String(t.torch)));const n=t.stage===2&&(t.torch||t.progress>.28&&t.progress<.88);if(n!==this.toast.classList.contains("show")&&(this.toast.textContent=wt("torch.note"),this.toast.classList.toggle("show",n)),t.sound!==e.sound&&(this.soundBtn.classList.toggle("on",t.sound),this.soundBtn.querySelector("span").textContent=t.sound?wt("btn.soundOn"):wt("btn.soundOff"),this.soundBtn.setAttribute("aria-pressed",String(t.sound)),this.soundBtn.setAttribute("aria-label",t.sound?wt("btn.soundOn"):wt("btn.soundOff"))),t.lightMode!==e.lightMode)for(const[s,r]of this.lightBtns)r.classList.toggle("on",s===t.lightMode),r.setAttribute("aria-pressed",String(s===t.lightMode));t.compare!==e.compare&&document.activeElement!==this.compareInput&&(this.compareInput.value=String(Math.round(t.compare*100))),this.root.classList.toggle("showcase-ready",t.stage===Fn.length-1&&t.progress>=1),Object.assign(this.last,t)}renderKnowledge(t){this.story.innerHTML=`
      <div class="kicker">STAGE ${ir(t.no)} / 12</div>
      <h1>${t.title}<small>${t.en}</small></h1>
      <p>${t.summary}</p>
      <div class="simp"><b>${wt("card.simplified")}</b>${t.simplification}</div>`,this.know.innerHTML=`
      <div class="kh"><span>${wt("card.title")}</span><span class="grade g${t.evidence}">${wt("card.evidence")} ${t.evidence}</span></div>
      <dl>
        <dt>${wt("card.terms")}</dt><dd>${t.terms.map(e=>`<b>${e.zh}</b> ${e.en!=="—"?`<i>${e.en}</i>`:""}<br/><span>${e.def}</span>`).join("<br/>")}</dd>
        <dt>${wt("card.purpose")}</dt><dd>${t.purpose}</dd>
        <dt>${wt("card.equipment")}</dt><dd>${t.equipment.join("、")}</dd>
        <dt>${wt("card.cautions")}</dt><dd>${t.cautions.join("<br/>")}</dd>
        <dt>${wt("card.sources")}</dt><dd class="src">${t.sources.map(e=>`<a href="${va[e].url}" target="_blank" rel="noopener">${va[e].title}</a><em>${va[e].grade}</em>`).join("")}</dd>
      </dl>`}setHotspots(t){const e=new Set,n=this.panels.filter(r=>r.offsetParent!==null&&getComputedStyle(r).opacity!=="0").map(r=>r.getBoundingClientRect()).filter(r=>r.width>0&&r.height>0),s=(r,o)=>n.some(a=>r>a.left-12&&r<a.right+12&&o>a.top-12&&o<a.bottom+12);for(const r of t){e.add(r.id);let o=this.pins.get(r.id);if(!o){const a=Rh(r.id),c=oe("button","pin",`<span class="dot" aria-hidden="true"></span><span class="lbl"><b>${a.label}</b><i>${a.sub}</i></span>`);c.type="button",c.setAttribute("aria-label",a.label),c.dataset.id=r.id,c.addEventListener("click",l=>{l.stopPropagation();const h=c.getBoundingClientRect();this.showInfo(r.id,h.left,h.top)}),this.hotLayer.append(c),this.pins.set(r.id,c),o=c}o.hidden=!r.visible||s(r.x,r.y),o.style.transform=`translate(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px)`}for(const[r,o]of this.pins)e.has(r)||(o.hidden=!0)}showInfo(t,e,n){const s=Rh(t),r=Ah(s.stage);this.popover.innerHTML=`<button class="x" type="button" aria-label="close">${En.close}</button>
      <div class="kicker">STAGE ${ir(r.no)} · ${r.title}</div>
      <h2>${s.label}<small>${s.sub}</small></h2><p>${s.body}</p>`,this.popover.querySelector(".x").addEventListener("click",()=>this.closePopover()),this.popover.hidden=!1,this.popover.dataset.id=t;const o=Math.min(300,window.innerWidth-32);this.popover.style.left=`${Math.min(Math.max(16,e+18),window.innerWidth-o-16)}px`,this.popover.style.top=`${Math.min(Math.max(72,n-20),window.innerHeight-240)}px`}closePopover(){this.popover.hidden=!0}showFallback(t,e,n){let s=document.querySelector(".fallback");s||(s=oe("div","fallback"),s.setAttribute("role","alert"),document.body.append(s)),s.innerHTML=`<div class="card"><div class="kicker">JADE GENESIS</div><h1>${t}</h1><p>${e}</p>${n?`<button class="pill primary" type="button">${wt("fallback.retry")}</button>`:""}</div>`,s.hidden=!1,n&&s.querySelector("button").addEventListener("click",n)}hideFallback(){const t=document.querySelector(".fallback");t&&(t.hidden=!0)}}const Ph={type:"change"},el={type:"start"},sd={type:"end"},so=new Ro,Lh=new Dn,Bv=Math.cos(70*Ce.DEG2RAD),Le=new T,Ke=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ya=1e-6;class zv extends Ev{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new nn,this._lastTargetPosition=new T,this._quat=new nn().setFromUnitVectors(t.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Th,this._sphericalDelta=new Th,this._scale=1,this._panOffset=new T,this._rotateStart=new q,this._rotateEnd=new q,this._rotateDelta=new q,this._panStart=new q,this._panEnd=new q,this._panDelta=new q,this._dollyStart=new q,this._dollyEnd=new q,this._dollyDelta=new q,this._dollyDirection=new T,this._mouse=new q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gv.bind(this),this._onPointerDown=kv.bind(this),this._onPointerUp=Hv.bind(this),this._onContextMenu=Zv.bind(this),this._onMouseWheel=Xv.bind(this),this._onKeyDown=qv.bind(this),this._onTouchStart=Yv.bind(this),this._onTouchMove=jv.bind(this),this._onMouseDown=Vv.bind(this),this._onMouseMove=Wv.bind(this),this._interceptControlDown=$v.bind(this),this._interceptControlUp=Jv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ph),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),s<-Math.PI?s+=Ke:s>Math.PI&&(s-=Ke),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new T(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<Bv?this.object.lookAt(this.target):(Lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane(Lh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ya||this._lastTargetPosition.distanceToSquared(this.target)>ya?(this.dispatchEvent(Ph),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ke*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new q,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Gv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sd),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case As.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case As.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(el)}function Wv(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Xv(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sd))}function qv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Yv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(el)}function jv(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function Zv(i){this.enabled!==!1&&i.preventDefault()}function $v(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Jv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const rd=i=>Math.min(1,Math.max(0,i)),Kv=(i,t,e)=>rd((i-t)/(e-t)),Qv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Be=(i,t,e)=>i+(t-i)*e,tx=(i,t)=>1-Math.exp(-3.2*t),Ih=new oi(new T(-25,.3,-6),new T(44,5,5));class ex{camera;controls;modeValue="auto";snapNext=!0;listeners=new Set;box=new oi;constructor(t){this.camera=new un(30,1,.1,200),this.controls=new zv(this.camera,t);const e=this.controls;e.enableDamping=!0,e.dampingFactor=.08,e.minDistance=2.4,e.maxDistance=16,e.minPolarAngle=.15,e.maxPolarAngle=1.42,e.enablePan=!0,e.panSpeed=.6,e.rotateSpeed=.7,e.zoomSpeed=.8,e.addEventListener("start",()=>this.setMode("free"))}get mode(){return this.modeValue}onMode(t){this.listeners.add(t)}setMode(t){t!==this.modeValue&&(this.modeValue=t,this.listeners.forEach(e=>e(t)))}setDistanceLimits(t,e){this.controls.minDistance=t,this.controls.maxDistance=e}reset(t=!1){this.setMode("auto"),t&&(this.snapNext=!0)}resize(t,e){const n=this.camera;n.aspect=t/e;const s=t<760;n.fov=s?42:30,s?n.setViewOffset(t,e,0,e*.1,t,e):n.setViewOffset(t,e,-t*.06,e*.02,t,e),n.updateProjectionMatrix()}update(t,e,n){if(this.modeValue==="auto"){const s=this.snapNext?1:tx(3.2,t);this.snapNext=!1,this.camera.position.lerp(e.position,s),this.controls.target.lerp(e.target,s)}this.controls.target.clamp(Ih.min,Ih.max),n&&this.modeValue==="free"&&(this.box.min.set(n.x-6,.3,n.z-5),this.box.max.set(n.x+6,4,n.z+5),this.controls.target.clamp(this.box.min,this.box.max)),this.controls.update(),this.camera.position.y<.4&&(this.camera.position.y=.4)}dispose(){this.controls.dispose()}}const je=new Uint8Array(512);{let i=1234567;const t=()=>{i|=0,i=i+1831565813|0;let n=Math.imul(i^i>>>15,1|i);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296},e=[...Array(256).keys()];for(let n=255;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}for(let n=0;n<512;n++)je[n]=e[n&255]}const Ma=i=>i*i*i*(i*(i*6-15)+10),Ni=(i,t,e)=>i+(t-i)*e;function mi(i,t,e,n){const s=i<8?t:e,r=i<4?e:i===12||i===14?t:n;return(i&1?-s:s)+(i&2?-r:r)}function Gn(i,t,e){const n=Math.floor(i)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;i-=Math.floor(i),t-=Math.floor(t),e-=Math.floor(e);const o=Ma(i),a=Ma(t),c=Ma(e),l=je[n]+s,h=je[l]+r,u=je[l+1]+r,d=je[n+1]+s,f=je[d]+r,g=je[d+1]+r;return Ni(Ni(Ni(mi(je[h]&15,i,t,e),mi(je[f]&15,i-1,t,e),o),Ni(mi(je[u]&15,i,t-1,e),mi(je[g]&15,i-1,t-1,e),o),a),Ni(Ni(mi(je[h+1]&15,i,t,e-1),mi(je[f+1]&15,i-1,t,e-1),o),Ni(mi(je[u+1]&15,i,t-1,e-1),mi(je[g+1]&15,i-1,t-1,e-1),o),a),c)}function nx(i,t,e,n=4){let s=0,r=.5;for(let o=0;o<n;o++)s+=r*Gn(i,t,e),i=i*2.03+1.7,t=t*2.03+9.2,e=e*2.03+3.1,r*=.5;return s}const Sa=new T(1.32,.95,1.05),ti=.8,ri=new T(.25,.42,1).normalize(),Dh={normal:new T(.3,1,-.15).normalize(),d:.585},lr=0;function Uo(i){const t=1/Math.sqrt((i.x/Sa.x)**2+(i.y/Sa.y)**2+(i.z/Sa.z)**2),e=nx(i.x*1.15+3,i.y*1.15,i.z*1.15,4)*.26+Gn(i.x*4.5,i.y*4.5+2,i.z*4.5)*.035;return t*(1+e)}const Hs=Uo(ri)*.93,Uh=new T;function Ec(i,t){if(i.y<-ti||i.dot(ri)>Hs)return!1;const e=i.length();return e<1e-6?!0:(Uh.copy(i).divideScalar(e),e<=Uo(Uh))}function ix(i,t,e){const n=new T,s=Math.cos(t),r=Math.sin(t);let o=0,a=0;const c=.02;for(let l=c;l<3;l+=c){if(n.set(i,l*s,l*r),!Ec(n)){a=l;break}o=l}for(let l=0;l<18;l++){const h=(o+a)/2;n.set(i,h*s,h*r),Ec(n)?o=h:a=h}return o}function sx(){const i=ri,t=new T(1,0,0).cross(i).normalize(),e=i.clone().cross(t);let n=new T,s=1/0;for(let r=-.6;r<=.6;r+=.01)for(let o=-.6;o<=.6;o+=.01){const a=i.clone().multiplyScalar(Hs).addScaledVector(t,r).addScaledVector(e,o);if(!Ec(a.clone().addScaledVector(i,-.01)))continue;const c=Math.abs(a.dot(Dh.normal)-Dh.d)+Math.abs(r)*.02;c<s&&(s=c,n=a)}return n}const od=`
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
`,rx=`
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
${od}
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
`,ox=`#include <color_fragment>
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
  diffuseColor.rgb = toLinear(col);`,ax=`#include <roughnessmap_fragment>
  roughnessFactor = mix(roughnessFactor, mix(0.9, 0.32, uWet), gRind);
  roughnessFactor = mix(roughnessFactor, 0.78, uRough);
  roughnessFactor = mix(roughnessFactor, 0.85, gMark);`,cx=`#include <normal_fragment_maps>
  // rind relief: broad weathering hollows plus fine grain, no worm-like ridges
  float hb = gRind*(0.45*snoise(vJ*6.)*bumpFade(vJ,6.) + 0.22*snoise(vJ*18.)*bumpFade(vJ,18.) + 0.3*snoise(vJ*60.)*bumpFade(vJ,60.))
           + uRough*(0.35*snoise(vJ*vec3(60.,8.,60.))*bumpFade(vJ,60.) + 0.2*snoise(vJ*140.)*bumpFade(vJ,140.))
           + gCrack*0.25;
  // hand-ground faces are never optically flat: a gentle undulation keeps highlights local
  float wave = uWave*(1.-gRind)*0.07*snoise(vJ*1.7+3.);
  normal = bumpNormal(-vViewPosition, normal, hb*uBump + wave);`,lx=`#include <emissivemap_fragment>
  float td = distance(vJ, uTorch.xyz);
  totalEmissiveRadiance += uTorch.w * gJade * vec3(0.75,1.0,0.8) * exp(-td*td/0.09) * mix(1.0, 0.25, gRind);
  // edge translucency: thin grazing edges let scattered light through
  float edge = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0);
  totalEmissiveRadiance += uEdgeGlow * gJade * edge * (1.0 - gRind) * (1.0 - 0.5*gCotton);
  // body glow: light that entered elsewhere and scatters back out, tinted by the jade
  // (approximation, not a volumetric model); cotton and cracks block it
  totalEmissiveRadiance += uInner * gJade * gJade * (1.0 - gRind) * (1.0 - 0.6*gCotton) * (1.0 - gCrack);`,hx=`#include <lights_physical_fragment>
  #ifdef USE_TRANSMISSION
  material.transmission *= (1.-gRind)*(1.-0.45*gCotton)*(1.-0.6*gCrack)*(1.-gMark)*(1.-0.6*uRough);
  #endif`,ux=1.67,ba=ri.clone().multiplyScalar(Hs);class On extends kn{jade;morph;static field=new T(0,0,0);constructor(t={}){super({color:16777215,roughness:t.roughness??.3,transmission:t.transmission??.42,thickness:t.thickness??.6,ior:ux,attenuationColor:new Lt(6004330),attenuationDistance:t.attenuationDistance??.7,specularIntensity:.7,clearcoat:t.clearcoat??0,clearcoatRoughness:.12}),this.morph=t.morph??!1;const e=s=>Array.from({length:4},(r,o)=>s?.[o]?new T(...s[o]):new T),n=s=>Array.from({length:4},(r,o)=>s?.[o]?new ne(...s[o]):new ne);this.jade={uRindAmt:{value:t.rind??1},uRough:{value:t.rough??0},uWet:{value:t.wet??0},uBump:{value:t.bump??.035},uGreen:{value:t.green??.12},uEdgeGlow:{value:t.edgeGlow??.18},uInner:{value:t.inner??.3},uField:{value:On.field},uWave:{value:t.wave??0},uMarks:{value:e(t.marks)},uMarkN:{value:t.marks?.length??0},uMarkSweep:{value:1},uPlans:{value:n(t.plans)},uPlanN:{value:t.plans?.length??0},uPlanSweep:{value:new ne(1,1,1,1)},uHoles:{value:[new T,new T]},uHoleN:{value:0},uKerfs:{value:e()},uKerfN:{value:0},uReveal:{value:1},uFlat:{value:1},uWin:{value:new ne(ba.x,ba.y,ba.z,.95)},uSlot:{value:new ne(0,0,0,0)},uTorch:{value:new ne(0,0,0,0)}}}onBeforeCompile(t){Object.assign(t.uniforms,this.jade);const e=this.morph?`#define JADE_MORPH
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
`+rx).replace("#include <color_fragment>",ox).replace("#include <roughnessmap_fragment>",ax).replace("#include <normal_fragment_maps>",cx).replace("#include <emissivemap_fragment>",lx).replace("#include <lights_physical_fragment>",hx)}customProgramCacheKey(){return this.morph?"jade-v3-morph":"jade-v3"}}const sr=new T;function mn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;sr.copy(t),sr[n]=0,sr.normalize();const l=.5*o/(o+a),h=1-sr.angleTo(i)/c;return Math.sign(sr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class ad extends vn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new T,c=new T,l=new T(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new T,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=mn(g,c,"z","y",r,n),d[p+1]=1-mn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[p+0]=1-mn(g,c,"z","y",r,n),d[p+1]=1-mn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[p+0]=1-mn(g,c,"x","z",r,t),d[p+1]=mn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[p+0]=1-mn(g,c,"x","z",r,t),d[p+1]=1-mn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[p+0]=1-mn(g,c,"x","y",r,t),d[p+1]=1-mn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[p+0]=mn(g,c,"x","y",r,t),d[p+1]=1-mn(g,c,"y","x",r,e);break}}}function nl(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new ve;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Nh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const g=Nh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Nh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new be(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function cd(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let x=0,y=a.length;x<y;x++){const v=a[x],L=i.attributes[v];c[v]=new L.constructor(new L.array.constructor(L.count*L.itemSize),L.itemSize,L.normalized);const R=i.morphAttributes[v];R&&(l[v]||(l[v]=[]),R.forEach((E,P)=>{const S=new E.array.constructor(E.count*E.itemSize);l[v][P]=new E.constructor(S,E.itemSize,E.normalized)}))}const f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let x=0;x<r;x++){const y=n?n.getX(x):x;let v="";for(let L=0,R=a.length;L<R;L++){const E=a[L],P=i.getAttribute(E),S=P.itemSize;for(let M=0;M<S;M++)v+=`${~~(P[u[M]](y)*_+m)},`}if(v in e)h.push(e[v]);else{for(let L=0,R=a.length;L<R;L++){const E=a[L],P=i.getAttribute(E),S=i.morphAttributes[E],M=P.itemSize,A=c[E],U=l[E];for(let D=0;D<M;D++){const z=u[D],V=d[D];if(A[V](o,P[z](y)),S)for(let H=0,$=S.length;H<$;H++)U[H][V](o,S[H][z](y))}}e[v]=o,h.push(o),o++}}const p=i.clone();for(const x in i.attributes){const y=c[x];if(p.setAttribute(x,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),x in l)for(let v=0;v<l[x].length;v++){const L=l[x][v];p.morphAttributes[x][v]=new L.constructor(L.array.slice(0,o*L.itemSize),L.itemSize,L.normalized)}}return p.setIndex(h),p}const $e=128;function ld(i){let t=i;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Tc(i,t=!1,e=1){const n=new Uint8Array($e*$e*4);for(let r=0;r<$e;r++)for(let o=0;o<$e;o++)i(o,r,n,(r*$e+o)*4);const s=new Xu(n,$e,$e);return s.wrapS=s.wrapT=_o,s.repeat.set(e,e),s.magFilter=Pn,s.minFilter=vi,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=tn),s.needsUpdate=!0,s}function Fh(i,t){const e=ld(17),n=Array.from({length:$e},()=>e());return Tc((s,r,o,a)=>{const c=i+t*((n[r]-.5)*1.4+.3*Gn(s/16,r/2,.5));o[a]=o[a+1]=o[a+2]=Math.round(Ce.clamp(c,0,1)*255),o[a+3]=255})}function hd(i,t,e=3){const n=ld(23),s=new Float32Array($e*$e);for(let u=0;u<s.length;u++)s[u]=n();const r=(u,d)=>s[(d+$e)%$e*$e+(u+$e)%$e],o=new Lt(i),a=new Lt(t),c=new Lt,l=Tc((u,d,f,g)=>{const _=r(u,d);c.copy(a).lerp(o,_>.9?1:_<.06?0:.4+.25*_),f[g]=c.r*255,f[g+1]=c.g*255,f[g+2]=c.b*255,f[g+3]=255},!0,e),h=Tc((u,d,f,g)=>{const _=r(u+1,d)-r(u-1,d),m=r(u,d+1)-r(u,d-1),p=new T(-_,-m,1.4).normalize();f[g]=(p.x*.5+.5)*255,f[g+1]=(p.y*.5+.5)*255,f[g+2]=(p.z*.5+.5)*255,f[g+3]=255},!1,e);return{map:l,normalMap:h}}const Oh=hd(10132631,7237739,6),Tn=(i,t,e=0,n={})=>new kn({color:i,roughness:t,metalness:e,...n}),nt={enamel:Tn(15460319,.42,0,{clearcoat:.35,clearcoatRoughness:.3}),sage:Tn(13226443,.5,0,{clearcoat:.2}),accent:Tn(3107663,.4,0,{clearcoat:.4}),steel:Tn(13159630,1,1,{roughnessMap:Fh(.3,.06)}),darkSteel:Tn(5922659,1,1,{roughnessMap:Fh(.42,.05)}),rubber:Tn(1974562,.85),brass:Tn(13214826,.3,1),grit:Tn(16777215,.95,0,{map:Oh.map,normalMap:Oh.normalMap,normalScale:new q(.35,.35)}),seam:Tn(11117980,.6),trim:Tn(5988192,.45,0,{clearcoat:.3}),plinth:Tn(16184302,.6),glass:new kn({color:16777215,roughness:.02,transmission:1,thickness:.05,ior:1.5}),waterSurface:new kn({color:12573142,roughness:.08,transparent:!0,opacity:.55,clearcoat:1}),water:new qe({color:13625070,roughness:.05,metalness:.1,transparent:!0,opacity:.7,depthWrite:!1})};function xn(i){return i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i}function Ft(i,t,e,n,s){return xn(new At(new ad(i,t,e,4,n),s))}function Ot(i,t,e,n,s=64,r=!1){return xn(new At(new zn(i,t,e,s,1,r),n))}function Bh(i,t,e=96){return xn(new At(new Gs(i.map(([n,s])=>new q(n,s)),e),t))}function Sr(i,t,e){const n=new Yu(i.map(s=>new T(...s)));return xn(new At(new Qc(n,64,t,12),e))}function vt(i,t,e,n){return i.position.set(t,e,n),i}function il(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function dx(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,`rgba(0,0,0,${t})`),s.addColorStop(.5,`rgba(0,0,0,${t*.4})`),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const r=new At(new Ti(i,i),new si({map:new Po(e),transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.003,r.renderOrder=-1,r}function Ai(i){const t=new Map;for(const e of i.children){const n=e;if(!n.isMesh||n.isInstancedMesh||Array.isArray(n.material)||n.name||n.userData.info)continue;const s=t.get(n.material)??[];s.push(n),t.set(n.material,s)}for(const[e,n]of t){if(n.length<2)continue;const s=n.map(o=>{o.updateMatrix();const a=(o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()).applyMatrix4(o.matrix);for(const c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&c!=="uv"&&a.deleteAttribute(c);return a}),r=new At(nl(s),e);r.castShadow=n.some(o=>o.castShadow),r.receiveShadow=n.some(o=>o.receiveShadow);for(const o of n)i.remove(o);i.add(r)}}function Er(i,t,e,n,s=2){const r=[],[o,a,c]=n,l=Math.min(.09,t*.18);r.push(vt(Ft(i+.012,l,e+.012,.01,nt.trim),o,a-t/2+l/2,c));const h=.012,u=Math.min(.12,t*.16),d=a-t/2+l+u,f=a+t/2-u;if(f-d<.12)return r;const g=(_,m,p)=>{const x=(_==="z"?e:i)/2+.003,y=-m/2+u,v=(m-u*2)/p;for(let L=0;L<p;L++){const R=y+L*v+(L?.02:0),E=y+(L+1)*v-(L<p-1?.02:0),P=[[(R+E)/2,d,E-R,h],[(R+E)/2,f,E-R,h],[R,(d+f)/2,h,f-d],[E,(d+f)/2,h,f-d]];for(const[S,M,A,U]of P){const D=new At(new vn(_==="z"?A:.006,U,_==="z"?.006:A),nt.seam);D.position.set(_==="z"?o+S:o+x,M,_==="z"?c+x:c-S),r.push(D)}for(const[S,M]of[[R+.05,d+.05],[E-.05,d+.05],[R+.05,f-.05],[E-.05,f-.05]]){const A=Ot(.018,.018,.012,nt.steel,12);_==="z"?(A.rotation.x=Math.PI/2,A.position.set(o+S,M,c+x)):(A.rotation.z=Math.PI/2,A.position.set(o+x,M,c-S)),r.push(A)}}};return g("z",i,s),g("x",e,1),r}const Qe={bladeRadius:1.55,bladeZ:-.25,carriageTop:1.22,bladeParkedY:3.5,bladeDownY:1.22-.06+1.55};function fx(){const i=new Kt;i.name="slab-saw";const t=new Kt;t.userData.info="saw",i.add(t),t.add(vt(Ft(5.4,.9,3.4,.08,nt.enamel),0,.45,0)),t.add(vt(Ft(5.42,.08,3.42,.03,nt.accent),0,.87,0));const e=4.9,n=3;t.add(vt(Ft(e,.06,n,.02,nt.darkSteel),0,.93,0));for(const E of[n/2,-n/2])t.add(vt(Ft(e,.22,.05,.02,nt.steel),0,1.04,E));for(const E of[e/2,-e/2])t.add(vt(Ft(.05,.22,n,.02,nt.steel),E,1.04,0));const s=new At(new Ti(e-.1,n-.1),nt.waterSurface);s.rotation.x=-Math.PI/2,s.position.y=1.02,s.userData.info="coolant",t.add(s);for(const E of[-1.75,1.75]){const P=Ot(.05,.05,n-.1,nt.steel,24);P.rotation.x=Math.PI/2,P.position.set(E,1.1,0),t.add(P)}const r=new Kt;r.add(vt(Ft(4,.12,2.2,.03,nt.sage),0,1.16,0));for(const E of[-1.42,1.42])r.add(vt(Ft(.18,.55,.9,.03,nt.darkSteel),E,Qe.carriageTop+.27,0));i.add(r),t.add(vt(Ft(.5,4.6,.6,.06,nt.enamel),2.15,3.1,-1.35));const o=new Kt;o.userData.info="blade",i.add(o),o.add(vt(Ft(2.3,.45,.55,.06,nt.enamel),1.15,0,-0));const a=Ot(.36,.36,.9,nt.sage);a.rotation.z=Math.PI/2,a.position.set(1.5,0,0),o.add(a);const c=Ot(.38,.38,.06,nt.accent);c.rotation.z=Math.PI/2,c.position.set(1.08,0,0),o.add(c);const l=Ot(.06,.06,1.2,nt.steel);l.rotation.z=Math.PI/2,l.position.set(.5,0,0),o.add(l);const h=new Kt,u=Qe.bladeRadius,d=Ot(u-.03,u-.03,.018,nt.steel,160);d.rotation.z=Math.PI/2,h.add(d);const f=44,g=new xi(new ad(.022,.05,.16,2,.006),nt.grit,f),_=new Ht,m=new nn,p=new sn;for(let E=0;E<f;E++){const P=E/f*Math.PI*2;m.setFromEuler(p.set(-P,0,0)),_.compose(new T(0,Math.cos(P)*u,Math.sin(P)*u),m,new T(1,1,1)),g.setMatrixAt(E,_)}g.castShadow=!0,h.add(g);const x=Ot(.28,.28,.1,nt.darkSteel);x.rotation.z=Math.PI/2,h.add(x);for(let E=0;E<6;E++){const P=E/6*Math.PI*2,S=Ot(.03,.03,.13,nt.steel,12);S.rotation.z=Math.PI/2,S.position.set(0,Math.cos(P)*.18,Math.sin(P)*.18),h.add(S)}o.add(h);const y=nt.accent.clone();y.side=en;const v=xn(new At(new zn(u+.14,u+.14,.3,96,1,!0,Math.PI*.12,Math.PI*.76),y));v.rotation.z=Math.PI/2,o.add(v);const L=[];for(const E of[-1,1]){const P=new Te;P.position.set(E*.12,-.3,u*.55),o.add(Sr([[E*.5,1,.3],[E*.36,.6,u*.55-.2],[E*.12,-.2,u*.55]],.035,nt.rubber));const S=Ot(.03,.02,.14,nt.brass,16);S.position.copy(P.position),S.rotation.x=.6,o.add(S,P),L.push(P)}o.position.set(0,Qe.bladeParkedY,Qe.bladeZ);const R=Ft(.9,.5,.08,.03,nt.sage);R.position.set(-1.9,.55,1.72),t.add(R);for(const[E,P]of[[3981946,-.25],[14701373,0],[15909198,.25]]){const S=Ot(.06,.06,.05,new qe({color:E,emissive:E,emissiveIntensity:.4}),24);S.rotation.x=Math.PI/2,S.position.set(-1.9+P,.6,1.77),t.add(S)}for(const[E,P]of[[-2.5,-1.5],[2.5,-1.5],[-2.5,1.5],[2.5,1.5]])t.add(vt(Ot(.12,.15,.08,nt.rubber,24),E,.04,P));return t.add(...Er(5.4,.9,3.4,[0,.45,0],3)),Ai(t),{root:i,blade:o,bladeDisc:h,carriage:r,nozzles:L,pickables:[t,o]}}const Me={x0:.17,x1:.31},ei=Me.x1-Me.x0,sl=(Me.x0+Me.x1)/2,ze=[{cy:.02,cz:.45},{cy:.02,cz:-.45}],Oe={ri:.28,ro:.41},ud=i=>({xc:sl,cy:ze[i].cy,cz:ze[i].cz}),zh=[{ri:Oe.ri+.006,ro:Oe.ro-.006,t:ei-.004,e:.12},{ri:.292,ro:.392,t:.112,e:.64},{ri:.296,ro:.388,t:.104,e:.82},{ri:.298,ro:.386,t:.1,e:1}];function px(i){const t=[1,.85,.45,0],e=Math.min(2,Math.floor(i)),n=Math.min(1,Math.max(0,i-e));return{rough:t[e]+(t[e+1]-t[e])*n,clearcoat:Math.max(0,i-2)}}function Ms(i){const t=Math.min(2,Math.max(0,Math.floor(i))),e=Math.min(1,Math.max(0,i-t)),n=zh[t],s=zh[t+1],r=(o,a)=>o+(a-o)*e;return{ri:r(n.ri,s.ri),ro:r(n.ro,s.ro),t:r(n.t,s.t),e:r(n.e,s.e)}}const kh=new T,Gh=new nn,Hh=new T,Vh=new T,Wh=new nn,Xh=new T;function rr(i,t){t.decompose(i.position,i.quaternion,i.scale)}const gr=(i,t,e)=>new Ht().makeTranslation(i,t,e),yi=i=>new Ht().makeTranslation(i.x,i.y,i.z),mx=i=>new Ht().makeRotationX(i),Xi=i=>new Ht().makeRotationY(i),dd=i=>new Ht().makeRotationZ(i),gx=i=>new Ht().makeScale(i,i,i);function xe(...i){const t=new Ht;for(const e of i)t.multiply(e);return t}function An(i,t,e,n=0){i.decompose(kh,Gh,Hh),t.decompose(Vh,Wh,Xh);const s=kh.clone().lerp(Vh,e);s.y+=Math.sin(Math.PI*e)*n;const r=Gh.clone().slerp(Wh,e),o=Hh.clone().lerp(Xh,e);return new Ht().compose(s,r,o)}function wa(i){return new T().setFromMatrixPosition(i)}function ye(i,t,e,n){return new T(t,e,n).applyMatrix4(i)}function fd(i,t=0){const e=i.attributes.position.count;return i.attributes.jpos||i.setAttribute("jpos",i.attributes.position.clone()),i.attributes.rim||i.setAttribute("rim",new Xt(new Float32Array(e).fill(t),1)),i}function qh(i,t=36){let e=new wr(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=cd(e);const n=e.attributes.position,s=new Float32Array(n.count),r=new T;for(let o=0;o<n.count;o++){r.fromBufferAttribute(n,o).normalize(),r.multiplyScalar(Uo(r)),r.y<-ti&&(r.y=-ti-(r.y+ti)*.04);let a=1;if(i){const c=r.dot(ri)-Hs;c>0&&r.addScaledVector(ri,-c),a=1-Ce.smoothstep(c,-.03,.02)}s[o]=a,n.setXYZ(o,r.x,r.y,r.z)}return e.computeVertexNormals(),e.setAttribute("rim",new be(s,1)),fd(e)}function _x(i,t,e,n=22,s=160,r=.05){const o=[],a=[],c=new T;for(let g=0;g<s;g++){const _=g/s*Math.PI*2;o[g]=ix(i,_),c.set(i,o[g]*Math.cos(_),o[g]*Math.sin(_)),a[g]=c.dot(ri)>Hs-.02}const l=[i,0,0],h=[0],u=[];for(let g=1;g<=n;g++){const _=1-Math.pow(1-g/n,1.6);for(let m=0;m<s;m++){const p=m/s*Math.PI*2,x=o[m]*_;l.push(i,x*Math.cos(p),x*Math.sin(p)),h.push(a[m]?0:Ce.smoothstep(_,1-r,1-r*.35))}}const d=(g,_)=>1+(g-1)*s+_%s;for(let g=0;g<s;g++)t>0?u.push(0,d(1,g),d(1,g+1)):u.push(0,d(1,g+1),d(1,g));for(let g=1;g<n;g++)for(let _=0;_<s;_++){const m=d(g,_),p=d(g,_+1),x=d(g+1,_+1),y=d(g+1,_);t>0?u.push(m,y,x,m,x,p):u.push(m,x,y,m,p,x)}const f=new ve;return f.setAttribute("position",new Xt(l,3)),f.setAttribute("rim",new Xt(h,1)),f.setIndex(u),f.computeVertexNormals(),fd(f)}function vx(i=36){const t=qh(!1,i),e=qh(!0,i);return t.setAttribute("wpos",e.attributes.position.clone()),t.setAttribute("wnormal",e.attributes.normal.clone()),t.setAttribute("rim",e.attributes.rim.clone()),e.dispose(),t}function pd(i,t=0){return new Ht().makeTranslation(i.xc+t,i.cy,i.cz).multiply(new Ht().makeRotationZ(-Math.PI/2))}function xx(i,t=96){const e=(i.ri+i.ro)/2,n=(i.ro-i.ri)/2,s=i.t/2,r=[];for(let o=0;o<=t;o++){const a=-Math.PI/2+o/t*Math.PI*2,c=Math.cos(a),l=Math.sin(a);r.push([e+n*Math.sign(c)*Math.abs(c)**i.e,s*Math.sign(l)*Math.abs(l)**i.e])}return r}class Ea{constructor(t,e,n){this.n=t,this.segs=e,this.frame=n;const s=(t+1)*(e+1);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3),this.jp=new Float32Array(s*3);const r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){const c=o*(t+1)+a,l=c+1,h=(o+1)*(t+1)+a,u=h+1;r.push(c,h,l,l,h,u)}this.geometry.setIndex(r),this.geometry.setAttribute("position",new be(this.pos,3)),this.geometry.setAttribute("normal",new be(this.nor,3)),this.geometry.setAttribute("jpos",new be(this.jp,3)),this.geometry.setAttribute("rim",new be(new Float32Array(s),1))}geometry=new ve;pos;nor;jp;update(t){const{n:e,segs:n,frame:s}=this;for(let r=0;r<=n;r++){const o=r/n*Math.PI*2,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=e;l++){const[h,u]=t[l],[d,f]=t[Math.max(0,l-1)],[g,_]=t[Math.min(e,l+1)];let m=_-f,p=-(g-d);const x=Math.hypot(m,p)||1;m/=x,p/=x;const y=(r*(e+1)+l)*3,v=h*a,L=h*c;this.pos[y]=v,this.pos[y+1]=u,this.pos[y+2]=L,this.nor[y]=m*a,this.nor[y+1]=p,this.nor[y+2]=m*c,this.jp[y]=s.xc+u,this.jp[y+1]=s.cy-v,this.jp[y+2]=s.cz+L}}for(const r of["position","normal","jpos"])this.geometry.getAttribute(r).needsUpdate=!0;this.geometry.computeBoundingSphere()}}function yx(i,t,e=24){const n=[],s=[[1e-4,-t/2],[i-.004,-t/2],[i,-t/2+.004],[i,t/2-.004],[i-.004,t/2],[1e-4,t/2]],r=s.slice(1).map((a,c)=>Math.hypot(a[0]-s[c][0],a[1]-s[c][1])),o=r.reduce((a,c)=>a+c,0);for(let a=0;a<=e;a++){let c=a/e*o,l=0;for(;l<r.length-1&&c>r[l];)c-=r[l],l++;const h=Math.min(1,c/r[l]);n.push([s[l][0]+(s[l+1][0]-s[l][0])*h,s[l][1]+(s[l+1][1]-s[l][1])*h])}return n}function Mx(i,t,e,n=.04){if(t===null&&e===null)return i;const s=i.getAttribute("position"),r=i.getAttribute("wpos")??s,o=i.getIndex(),a=[],c=h=>[s.getX(h),r.getX(h)];for(let h=0;h<o.count;h+=3){const u=[o.getX(h),o.getX(h+1),o.getX(h+2)],d=u.flatMap(c),f=Math.min(...d),g=Math.max(...d);(t===null||g>=t-n)&&(e===null||f<=e+n)&&a.push(...u)}const l=new ve;for(const[h,u]of Object.entries(i.attributes))l.setAttribute(h,u);return l.setIndex(a),l.computeBoundingSphere(),l}const md={thickness:1.4,attenuationDistance:.38,transmission:.5,roughness:.2,wave:1,morph:!0},Sx={thickness:1.2,attenuationDistance:.6,transmission:.45,roughness:.38,wave:.4},Ta={thickness:ei,attenuationDistance:.35,transmission:.5,roughness:.38,wave:.3},Aa=new Map;function Yh(i,t){const e=`${i}:${t}`;return Aa.has(e)||Aa.set(e,_x(i,t)),Aa.get(e)}class xs{constructor(t,e,n,s=Sx){this.lo=e,this.hi=n,this.shell=new At(Mx(t,e,n),new On(md)),this.shell.material.clipShadows=!0,this.shell.userData.info="stone",this.group.add(this.shell),e!==null&&(this.local.push(new Dn(new T(1,0,0),-e)),this.caps.push(new At(Yh(e,-1),new On(s)))),n!==null&&(this.local.push(new Dn(new T(-1,0,0),n)),this.caps.push(new At(Yh(n,1),new On(s))));for(const r of this.caps)r.userData.info="cutface",this.group.add(r);for(const r of[this.shell,...this.caps])r.castShadow=r.receiveShadow=!0;this.shell.material.clippingPlanes=this.local.map(r=>r.clone()),this.group.visible=!1}group=new Kt;shell;caps=[];local=[];updateClipping(){this.group.visible&&(this.shell.updateMatrixWorld(),this.local.forEach((t,e)=>this.shell.material.clippingPlanes[e].copy(t).applyMatrix4(this.shell.matrixWorld)))}}class bx{intact;intactGroup=new Kt;A;B;B1;BR;S;B2;holeWall;core;bangleGroup=new Kt;bangle;bangleShape;shapeValue=-1;all;constructor(){const t=vx();this.intact=new At(t,new On({...md,thickness:1.6})),this.intact.castShadow=this.intact.receiveShadow=!0,this.intact.userData.info="stone",this.intactGroup.add(this.intact),this.A=new xs(t,null,lr),this.B=new xs(t,lr,null),this.B1=new xs(t,lr,Me.x0),this.BR=new xs(t,Me.x0,null),this.S=new xs(t,Me.x0,Me.x1,Ta),this.B2=new xs(t,Me.x1,null);for(const r of this.S.caps)r.userData.info="slab";this.S.shell.userData.info="slab";const e=ud(0),n=new Ea(1,160,e);n.update([[Oe.ro,ei/2],[Oe.ro,-ei/2]]),this.holeWall=new At(n.geometry,new On({...Ta,rind:0})),this.holeWall.applyMatrix4(pd(e));const s=new Ea(24,120,e);s.update(yx(Oe.ri-.008,ei)),this.core=new At(s.geometry,new On({...Ta,rind:0})),this.core.userData.info="core";for(const r of[this.holeWall,this.core])r.castShadow=r.receiveShadow=!0,r.visible=!1,this.S.group.add(r);this.bangleShape=new Ea(96,220,e),this.bangle=new At(this.bangleShape.geometry,new On({rind:0,thickness:.09,attenuationDistance:.18,transmission:.55,roughness:.1,bump:.02,edgeGlow:.22})),this.bangle.castShadow=this.bangle.receiveShadow=!0,this.bangle.userData.info="bangle",this.bangleGroup.add(this.bangle),this.bangleGroup.visible=!1,this.setBangleShape(0),this.all=[this.intactGroup,...this.clipPieces.map(r=>r.group),this.bangleGroup]}get clipPieces(){return[this.A,this.B,this.B1,this.BR,this.S,this.B2]}get pickables(){return[this.intact,...this.clipPieces.flatMap(t=>[t.shell,...t.caps]),this.core,this.bangle]}hideAll(){this.intactGroup.visible=!1;for(const e of this.clipPieces)e.group.visible=!1;this.bangleGroup.visible=!1,this.core.visible=this.holeWall.visible=!1;const t=this.intact.material.jade;for(const e of[this.intact,this.B.shell,this.BR.shell])e.material.jade.uSlot.value.w=0,e.material.jade.uPlanN.value=0;t.uPlanN.value=0,t.uTorch.value.w=0,t.uWet.value=0;for(const e of this.S.caps){const n=e.material.jade;n.uMarkN.value=0,n.uKerfN.value=0,n.uHoleN.value=0}}setSlot(t,e,n){t.material.jade.uSlot.value.set(e,.012,n??0,n===null?0:1)}setWindow(t,e){const n=this.intact.material.jade;n.uReveal.value=t,n.uFlat.value=e}setWet(t){this.intact.material.jade.uWet.value=t}setPlanLines(t){this.setLinesOn(this.intact,[lr,Me.x0,Me.x1],t)}setLinesOn(t,e,n){const s=t.material.jade;e.forEach((r,o)=>s.uPlans.value[o].set(1,0,0,r)),s.uPlanN.value=e.length,s.uPlanSweep.value.set(n[0]??0,n[1]??0,n[2]??0,0)}setMarks(t,e=2){const n=[];for(let s=0;s<e;s++)n.push([ze[s].cy,ze[s].cz,Oe.ro],[ze[s].cy,ze[s].cz,Oe.ri]);for(const s of this.S.caps){const r=s.material.jade;n.forEach((o,a)=>r.uMarks.value[a].set(...o)),r.uMarkN.value=n.length,r.uMarkSweep.value=t}}setKerfs(t,e){for(const n of this.S.caps){const s=n.material.jade;let r=0;t&&s.uKerfs.value[r++].set(ze[0].cy,ze[0].cz,Oe.ro),e&&s.uKerfs.value[r++].set(ze[0].cy,ze[0].cz,Oe.ri),s.uKerfN.value=r}}setHole(t){for(const e of this.S.caps){const n=e.material.jade;n.uHoles.value[0].set(ze[0].cy,ze[0].cz,Oe.ro),n.uHoleN.value=t?1:0}this.holeWall.visible=t}setBangleShape(t){Math.abs(t-this.shapeValue)>1e-4&&(this.bangleShape.update(xx(Ms(t))),this.shapeValue=t);const e=px(t),n=this.bangle.material;n.jade.uRough.value=e.rough,n.roughness=.1+.55*e.rough,n.clearcoat=e.clearcoat}updateClipping(){for(const t of this.clipPieces)t.updateClipping()}}const jh=pd(ud(0)),or=120,Ra=140;class ro{object=new Kt;drops;mist;seeds;m=new Ht;q=new nn;up=new T(0,1,0);p=new T;v=new T;s=new T;constructor(){this.drops=new xi(new Yc(.013,.08,2,6),nt.water,or+Ra),this.drops.frustumCulled=!1,this.drops.userData.info="coolant";const t=il(7);this.seeds=new Float32Array((or+Ra)*4).map(()=>t());const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,0.5)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.mist=new Wu(new Wc({map:new Po(e),depthWrite:!1,transparent:!0})),this.object.add(this.drops,this.mist)}update(t,e,n,s){if(this.object.visible=e>.01,!this.object.visible)return;const r=Math.round(or*e);let o=0;for(let l=0;l<r;l++){const h=this.seeds.subarray(l*4,l*4+4),u=n[l%n.length],d=(t*1.6+h[0])%1;this.v.subVectors(s,u),this.p.copy(u).addScaledVector(this.v,d),this.p.y-=Math.sin(d*Math.PI)*.06,this.p.x+=(h[1]-.5)*.05*d,this.p.z+=(h[2]-.5)*.05*d,this.q.setFromUnitVectors(this.up,this.v.normalize()),this.m.compose(this.p,this.q,this.s.set(1,1+h[3],1)),this.drops.setMatrixAt(o++,this.m)}const a=Math.round(Ra*e);for(let l=0;l<a;l++){const h=this.seeds.subarray((or+l)*4,(or+l)*4+4),u=(t*1.3+h[0])%1;this.v.set((h[1]-.5)*1.6,.6+h[2]*1.2,.8+h[3]*1.4),this.p.copy(s).addScaledVector(this.v,u*.6),this.p.y-=2.4*u*u*.36,this.v.y-=4.8*u*.6,this.q.setFromUnitVectors(this.up,this.v.normalize());const d=.6+(1-u);this.m.compose(this.p,this.q,this.s.set(.7,d,.7)),this.drops.setMatrixAt(o++,this.m)}this.drops.count=o,this.drops.instanceMatrix.needsUpdate=!0,this.mist.position.copy(s).add(this.s.set(0,.1,.25));const c=.9+.08*Math.sin(t*3);this.mist.scale.set(c,c*.7,1),this.mist.material.opacity=.6*e}}function wx(i,t){const e=new Kt,n=.03;return e.add(Bh([[.001,0],[i-n,0],[i,n],[i,t-n*2],[i-n*2,t],[.001,t]],nt.plinth,128)),e.add(Bh([[i*.995,t-.015],[i*1.005,t-.015],[i*1.005,t-.005],[i*.995,t-.005]],nt.sage,128)),e.userData.top=t,e}function Ex(){const i=new Kt,t=xn(new At(new Kc(.32,.035,24,96),nt.brass)),e=xn(new At(new zn(.31,.31,.03,64),nt.glass));e.rotation.x=Math.PI/2;const n=Ot(.04,.05,.16,nt.brass);n.position.y=-.4;const s=Ot(.055,.045,.85,new kn({color:11109731,roughness:.75}));return s.position.y=-.88,i.add(t,e,n,s),i}function Tx(){const i=new Kt,t=Ot(.07,.07,.9,nt.darkSteel);t.rotation.z=Math.PI/2;const e=Ot(.11,.075,.2,nt.darkSteel);e.rotation.z=-Math.PI/2,e.position.x=.54;const n=Ot(.075,.075,.25,nt.rubber,24);n.rotation.z=Math.PI/2,n.position.x=-.15;const s=Ot(.095,.095,.01,new si({color:16776170}));return s.rotation.z=Math.PI/2,s.position.x=.645,i.add(t,e,n,s),i}function Ax(i,t=1.15,e=.62){const n=document.createElement("canvas");n.width=720,n.height=Math.round(720*e/t);const s=n.getContext("2d");s.fillStyle="#fbfaf6",s.fillRect(0,0,n.width,n.height),s.strokeStyle="#d9d6cf",s.lineWidth=6,s.strokeRect(3,3,n.width-6,n.height-6),s.fillStyle="#2f6b4f",s.fillRect(40,44,10,70),i.forEach((h,u)=>{s.font=`${h.w??500} ${h.s}px "Noto Sans SC", "PingFang SC", "WenQuanYi Zen Hei", sans-serif`,s.fillStyle=h.c??"#222826",s.fillText(h.t,70,90+u*66)});const r=new Po(n);r.colorSpace=tn,r.anisotropy=8;const o=new qe({map:r,roughness:.7}),a=new At(new vn(t,e,.012),[nt.enamel,nt.enamel,nt.enamel,nt.enamel,o,nt.enamel]);a.castShadow=!0,a.rotation.x=-.25;const c=xn(new At(new vn(.06,e*.7,.3),nt.sage));c.position.set(0,-e*.25,-.12),c.rotation.x=.2;const l=new Kt;return l.add(a,c),l}const Rx=`
uniform float uTop; uniform vec3 uPond;
varying vec3 vLP; varying vec3 vLN; varying float vAo; varying float vRoad;
float tRock, tGrass, tRoad, tWet, tRough;
${od}
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
`,Cx=`#include <color_fragment>
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
  diffuseColor.rgb = lin3(col);`,Px=`#include <roughnessmap_fragment>
  roughnessFactor = mix(mix(0.96, 0.88, tRock), 0.92, tRoad);
  roughnessFactor = mix(roughnessFactor, 0.42, tWet);`,Lx=`#include <normal_fragment_maps>
  float hb = tRock*(0.5*snoise(P*vec3(7.,22.,7.))*bumpFade(P,22.) + 0.35*snoise(P*vec3(18.,55.,18.))*bumpFade(P,55.))
           + (1.-tRock)*(1.-tRoad)*0.4*snoise(P*60.)*bumpFade(P,60.)
           + tGrass*0.4*snoise(P*28.)*bumpFade(P,28.);
  normal = tBump(-vViewPosition, normal, hb*0.012);`,Ix=`#include <aomap_fragment>
  reflectedLight.indirectDiffuse *= vAo;
  reflectedLight.indirectSpecular *= vAo;
  reflectedLight.directDiffuse *= mix(1.0, vAo, 0.45);`;class Dx extends qe{uniformsT;constructor(t,e=ni){super({color:16777215,roughness:.95,side:e}),this.uniformsT={uTop:{value:t.top},uPond:{value:new T(...t.pond)}}}onBeforeCompile(t){Object.assign(t.uniforms,this.uniformsT),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float aAo; attribute float aRoad; varying vec3 vLP; varying vec3 vLN; varying float vAo; varying float vRoad;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vLN = objectNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position; vAo = aAo; vRoad = aRoad;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+Rx).replace("#include <color_fragment>",Cx).replace("#include <roughnessmap_fragment>",Px).replace("#include <normal_fragment_maps>",Lx).replace("#include <aomap_fragment>",Ix)}customProgramCacheKey(){return"terrain-v1"}}const gd=new qe({vertexColors:!0,roughness:.92,flatShading:!1}),Zh=new qe({vertexColors:!0,roughness:.85}),Ux=new qe({color:7034436,roughness:.9}),Nx=new kn({color:7309952,roughness:.06,metalness:0,transparent:!0,opacity:.9,clearcoat:1,clearcoatRoughness:.05}),We=new kn({color:14263871,roughness:.42,clearcoat:.35,clearcoatRoughness:.35}),hn=new kn({color:3882302,roughness:.55,clearcoat:.2}),mo=new qe({color:4867133,roughness:.92,metalness:.25}),Fx=new qe({color:14277854,roughness:.14,metalness:1}),hr=new qe({color:10132636,roughness:.35,metalness:1}),_d=new kn({color:2371631,roughness:.05,metalness:.1,clearcoat:1,clearcoatRoughness:.03});function zi(i,t,e,n=.006){const s=new Lo(i.map(([a,c])=>new q(a,c))),r=new $c(s,{depth:t-n*2,bevelEnabled:!0,bevelSize:n,bevelThickness:n,bevelSegments:2,curveSegments:10});r.translate(0,0,-(t-n*2)/2),r.computeVertexNormals();const o=new At(r,e);return o.castShadow=o.receiveShadow=!0,o}function Ca(i,t,e,n,s){const r=Ot(n,n,s,hr,16);return r.rotation.x=Math.PI/2,r.position.set(i,t,e),r}function oo(i,t,e,n,s,r){return Array.from({length:r+1},(o,a)=>{const c=n+(s-n)*a/r;return[i+Math.cos(c)*e,t+Math.sin(c)*e]})}function ao(i,t,e,n,s,r){const o=new Kt;o.position.set(...t),i.add(o);const a=_=>{const m=Math.cos(_),p=Math.sin(_);return new q(e.position.x+m*n[0]-p*n[1]-t[0],e.position.y+p*n[0]+m*n[1]-t[1])};let c=1/0,l=0;for(let _=0;_<=24;_++){const m=a(s[0]+(s[1]-s[0])*_/24).length();c=Math.min(c,m),l=Math.max(l,m)}const h=c*.92,u=Math.max(l-h+.02,c*.5),d=Ot(r,r,h,We,16);d.rotation.z=-Math.PI/2,d.position.x=h/2;const f=Ot(r*1.18,r*1.18,.014,We,16);f.rotation.z=-Math.PI/2,f.position.x=h-.007;const g=Ot(r*.55,r*.55,u,Fx,12);return g.rotation.z=-Math.PI/2,g.name="rod",o.add(d,f,g),Ai(o),()=>{const _=a(e.rotation.z);o.rotation.z=Math.atan2(_.y,_.x),g.position.x=_.length()-u/2}}const Ox=new T(.12,.04,.11);function Bx(){const i=new Kt,t=new vn(.03,.016,.12),e=.062,n=.3,s=.068,r=2*n*2+2*Math.PI*e,o=48,a=r/o,c=new xi(t,mo,o*2),l=new Ht,h=new nn,u=new sn,d=new T,f=new T(1,1,1);let g=0;for(const A of[-.2,.2]){for(let U=0;U<o;U++){let D=U*a,z,V,H;if(D<2*n)z=-n+D,V=s+e,H=0;else if((D-=2*n)<Math.PI*e){const $=Math.PI/2-D/e;z=n+Math.cos($)*e,V=s+Math.sin($)*e,H=$-Math.PI/2}else if((D-=Math.PI*e)<2*n)z=n-D,V=s-e,H=Math.PI;else{D-=2*n;const $=-Math.PI/2-D/e;z=-n+Math.cos($)*e,V=s+Math.sin($)*e,H=$-Math.PI/2}h.setFromEuler(u.set(0,0,H)),c.setMatrixAt(g++,l.compose(d.set(z,V,A),h,f))}i.add(vt(Ft(2*n,.07,.07,.015,mo),0,s,A));for(const U of[-n,n]){const D=Ot(.05,.05,.085,hn,20);D.rotation.x=Math.PI/2,D.position.set(U,s,A),i.add(D)}for(let U=0;U<4;U++){const D=Ot(.022,.022,.08,hr,12);D.rotation.x=Math.PI/2,D.position.set(-.18+U*.12,s-.035,A),i.add(D)}}c.castShadow=c.receiveShadow=!0,i.add(c),i.add(vt(Ft(.3,.06,.34,.015,mo),0,.12,0)),i.add(vt(Ot(.13,.13,.04,hn,32),0,.17,0));const _=new Kt;_.position.y=.2,i.add(_),_.add(vt(Ft(.62,.04,.44,.012,hn),-.04,.02,0)),_.add(vt(Ft(.34,.16,.42,.025,We),-.17,.12,0));for(let A=0;A<5;A++)_.add(vt(Ft(.012,.004,.16,.002,hn),-.27+A*.03,.202,-.08));_.add(vt(Ot(.012,.012,.07,hn,12),-.1,.235,-.15));const m=zi([...oo(-.33,0,.21,Math.PI*.62,Math.PI*1.38,14),[-.31,-.2],[-.31,.2]],.15,hn,.01);m.rotation.x=-Math.PI/2,m.position.set(.07,.12,0),_.add(m);const p={add:(...A)=>{for(const U of A)U.position.add(Ox),_.add(U)}};p.add(vt(Ft(.21,.07,.18,.015,We),0,.035,0)),p.add(vt(Ft(.2,.17,.17,.02,_d),0,.15,0));for(const[A,U]of[[.095,.08],[.095,-.08],[-.095,.08],[-.095,-.08]])p.add(vt(Ft(.018,.17,.018,.005,hn),A,.15,U));p.add(vt(Ft(.23,.02,.19,.008,We),.005,.245,0));for(const A of[-.3,-.17,-.04])_.add(vt(Ot(.004,.004,.06,hr,6),A,.23,-.2));_.add(vt(Ft(.28,.008,.008,.003,hr),-.17,.26,-.2));for(const A of[-.12,-.04])_.add(vt(Ft(.12,.12,.012,.004,hn),.17,.12,A));const x=new Kt;x.position.set(.18,.18,-.08),_.add(x),x.add(zi([[-.035,-.035],[.3,.035],[.67,-.025],[.67,.035],[.31,.105],[-.035,.035]],.07,We,.008)),x.add(Ca(0,0,0,.018,.1),Ca(.64,0,0,.016,.09));const y=new Kt;y.position.set(.64,0,0),x.add(y),y.add(zi([[-.08,.02],[-.06,.05],[.5,.02],[.5,-.022],[-.03,-.035],[-.08,-.01]],.055,We,.007)),y.add(Ca(.48,0,0,.014,.08));const v=new Kt;v.position.set(.48,0,0),y.add(v);const L=[.07,.03],R=oo(L[0],L[1],.1,Math.PI*.95,Math.PI*2.06,20),E=oo(L[0],L[1],.088,Math.PI*2.06,Math.PI*.95,20);v.add(zi([...R,...E],.15,hn,.004));for(const A of[-.075,.075])v.add(vt(zi([...oo(L[0],L[1],.1,Math.PI*.95,Math.PI*2.06,20),[0,.07]],.01,We,.003),0,0,A));v.add(vt(Ft(.05,.03,.06,.008,hn),-.01,.05,0));const P=R[R.length-1];for(let A=0;A<4;A++){const U=zi([[-.012,0],[.012,0],[.004,.034],[-.004,.034]],.022,hr,.003);U.position.set(P[0]-.004,P[1]-.004,-.054+A*.036),U.rotation.z=.12,v.add(U)}const S=[ao(_,[.27,.07,-.115],x,[.29,.03],[.22,.85],.016),ao(_,[.27,.07,-.045],x,[.29,.03],[.22,.85],.016),ao(x,[.3,.1,0],y,[-.07,.04],[-1.55,-1.15],.015),ao(y,[.05,.035,0],v,[-.015,.06],[-1.1,.25],.012)];for(const A of[i,_,x,y,v])Ai(A);const M=()=>{for(const A of S)A()};return M(),{root:i,boom:x,stick:y,bucket:v,sync:M}}const zx=new qe({color:2302756,roughness:.88});function kx(i,t){const e=[],n=t*.32;for(const[r,o,a]of[[-Math.PI/2,i-n,-t/2+n],[0,i-n,t/2-n]])for(let c=0;c<=6;c++){const l=r+c/6*(Math.PI/2);e.push(new q(o+Math.cos(l)*n,a+Math.sin(l)*n))}e.unshift(new q(i*.62,-t/2)),e.push(new q(i*.62,t/2));const s=new Gs(e,28);return s.rotateX(Math.PI/2),s}function Gx(){const i=new Kt,t=kx(.085,.065);for(const[c,l]of[[.27,.15],[.27,-.15],[-.2,.15],[-.2,-.15],[-.2,.08],[-.2,-.08]]){const h=new At(t,zx);h.position.set(c,.085,l),h.castShadow=h.receiveShadow=!0,i.add(h);const u=Ot(.045,.045,.067,We,16);u.rotation.x=Math.PI/2,u.position.set(c,.085,l),i.add(u)}i.add(vt(Ft(.72,.05,.16,.012,mo),.02,.15,0)),i.add(vt(Ft(.16,.13,.26,.02,We),.31,.24,0)),i.add(vt(Ft(.012,.08,.16,.004,hn),.392,.235,0)),i.add(vt(Ft(.18,.015,.34,.005,hn),.3,.31,0)),i.add(vt(Ft(.12,.12,.12,.015,_d),.3,.375,.09)),i.add(vt(Ft(.13,.02,.13,.006,We),.3,.44,.09));for(const c of[.033,.147])i.add(vt(Ft(.12,.12,.012,.004,We),.3,.375,c));const e=.19;i.add(vt(Ft(.5,.025,.34,.008,We),-.12,e,0));for(const c of[-.165,.165]){i.add(vt(zi([[-.37,0],[.13,0],[.13,.17],[-.33,.17]],.014,We,.004),0,e,c));for(const l of[-.25,-.12,.01])i.add(vt(Ft(.018,.16,.014,.004,hn),l,e+.085,c+Math.sign(c)*.012))}i.add(vt(Ft(.02,.2,.34,.006,We),.135,e+.1,0)),i.add(vt(Ft(.16,.012,.34,.004,We),.215,e+.205,0));const n=il(9),s=new xi(Md(4),gd,14),r=new Ht,o=new nn,a=new Lt;for(let c=0;c<14;c++){const l=.04+n()*.03;o.setFromEuler(new sn(n()*3,n()*3,0)),s.setMatrixAt(c,r.compose(new T(-.3+n()*.38,e+.07+n()*.08,-.11+n()*.22),o,new T(l,l,l))),s.setColorAt(c,a.setRGB(.55,.49,.41).lerp(new Lt(.45,.47,.43),n()).convertSRGBToLinear())}return s.castShadow=!0,i.add(s),Ai(i),i}const ki=6,De=ki/2,Ls=1,Ac=-.7,Ee=new q(.35,.1),qi=1.15,Yi=.9,_i=5,Rc=.32,Vi=2.15,vd=[.25,.29,.26,.28,.27],xd=vd.reduce((i,t)=>[...i,i[i.length-1]-t],[Ls]),wo=xd[_i],Rn={x:Ee.x-1.05,z:Ee.y+.25,r:.5,y:-.08},Ss={th0:2.45,th1:4.55,half:.5};function Cc(i,t){const e=(i-Ee.x)/qi,n=(t-Ee.y)/Yi;return[Math.hypot(e,n),Math.atan2(n,e)]}function yd(i,t){const e=Math.cos(i),n=Math.sin(i);return .05*Gn(e*1.6,n*1.6,t*1.7)+.02*Gn(e*5,n*5,3+t)}function Hx(i){const t=Ce.smoothstep(i,.02,.36),e=Ce.smoothstep(i,.3,.55)*.08;return Math.min(1,t*.92+e)}function Vx(i){if(i<=0)return Ls;if(i>=_i)return wo;const t=Math.floor(i),e=i-t;return xd[t]-Hx(e)*vd[t]}function Wx(i){let t=i<0?i+Math.PI*2:i;return t<Ss.th0||t>Ss.th1?null:(t-Ss.th0)/(Ss.th1-Ss.th0)}function Eo(i,t){const[e,n]=Cc(i,t),s=(Vi-e-yd(n,e))/Rc;let r=Vx(s),o=0;const a=Wx(n);if(a!==null){const h=a*(_i+.4)-.2,u=Math.abs(s-h)/Ss.half,d=Ce.smoothstep(a,0,.04)*(1-Ce.smoothstep(a,.96,1)),f=(1-Ce.smoothstep(u,.75,1.25))*Math.max(d,s<.6||s>_i-.6?1:0),g=Ls+(wo-Ls)*Ce.clamp(a*1.04-.02,0,1);r=Ce.lerp(r,g,f),o=1-Ce.smoothstep(u,.6,.95)}const c=Math.hypot(i-Rn.x,t-Rn.z),l=1-Ce.smoothstep(c,Rn.r,Rn.r+.25);return r=Ce.lerp(r,Rn.y,l),s>_i&&(r-=.03*Ce.smoothstep(s,_i,_i+2)),r+=.012*Gn(i*2.2,.5,t*2.2)+.004*Gn(i*9,1.5,t*9),r>Ls-.05&&(o=Math.max(o,(1-Ce.smoothstep(go(i,t),.05,.11))*.8)),{y:r,road:o}}const Pa=[new q(-1.15,1.25),new q(-1.6,1.7),new q(-2.05,1.95)];function go(i,t){let e=9;for(let n=0;n<Pa.length-1;n++){const s=Pa[n],r=Pa[n+1],o=r.x-s.x,a=r.y-s.y,c=Ce.clamp(((i-s.x)*o+(t-s.y)*a)/(o*o+a*a),0,1);e=Math.min(e,Math.hypot(i-s.x-o*c,t-s.y-a*c))}return e}const bs=(i,t)=>Eo(i,t).y;function Xx(i){const t=Math.cos(i)*qi,e=Math.sin(i)*Yi,n=t>1e-9?(De-Ee.x)/t:t<-1e-9?(-De-Ee.x)/t:1/0,s=e>1e-9?(De-Ee.y)/e:e<-1e-9?(-De-Ee.y)/e:1/0;return Math.min(n,s)}function qx(){const i=[[De,De],[-De,De],[-De,-De],[De,-De]].map(([x,y])=>Math.atan2((y-Ee.y)/Yi,(x-Ee.x)/qi)),t=192,e=new Set;for(let x=0;x<t;x++)e.add(-Math.PI+x/t*Math.PI*2);for(const x of i)e.add(x);const n=[...e].sort((x,y)=>x-y),s=Vi+.35,r=120,o=18,a=[];for(let x=0;x<=r;x++){const y=x/r*s;a.push(()=>y)}for(let x=1;x<=o;x++){const y=x/o;a.push(v=>s+(Xx(v)-s)*y)}const c=[],l=[],h=n.length;for(const x of a)for(const y of n){const v=x(y),L=Ee.x+Math.cos(y)*v*qi,R=Ee.y+Math.sin(y)*v*Yi,E=Eo(L,R);c.push(L,E.y,R),l.push(E.road)}const u=[];for(let x=0;x<a.length-1;x++)for(let y=0;y<h;y++){const v=(y+1)%h,L=x*h+y,R=x*h+v,E=(x+1)*h+y,P=(x+1)*h+v;u.push(L,R,E,R,P,E)}const d=new ve;d.setAttribute("position",new Xt(c,3)),d.setAttribute("aRoad",new Xt(l,1)),d.setIndex(u),d.computeVertexNormals();const f=d.attributes.position,g=new Float32Array(f.count),_=Array.from({length:8},(x,y)=>[Math.cos(y/8*Math.PI*2),Math.sin(y/8*Math.PI*2)]);for(let x=0;x<f.count;x++){const y=f.getX(x),v=f.getY(x),L=f.getZ(x);let R=0;for(const[E,P]of _)for(const S of[.07,.16,.3])R+=Math.max(0,Math.atan((bs(y+E*S,L+P*S)-v)/S));g[x]=Ce.clamp(1-R/(_.length*3)*1.25,.35,1)}d.setAttribute("aAo",new be(g,1));const m=(a.length-1)*h,p=n.map((x,y)=>new T(f.getX(m+y),f.getY(m+y),f.getZ(m+y)));return{geo:d,rim:p}}function Yx(i){const e=i.length,n=[],s=[],r=[];for(let a=0;a<=e;a++){const c=i[a%e],l=Math.abs(Math.abs(c.x)-De)<1e-4?[Math.sign(c.x),0,0]:[0,0,Math.sign(c.z)];for(let h=0;h<=28;h++)n.push(c.x,Ac+(c.y-Ac)*(h/28),c.z),s.push(...l)}for(let a=0;a<e;a++)for(let c=0;c<28;c++){const l=a*29+c,h=l+28+1;r.push(l,l+1,h,h,l+1,h+1)}const o=new ve;return o.setAttribute("position",new Xt(n,3)),o.setAttribute("normal",new Xt(s,3)),o.setAttribute("aAo",new Xt(new Array(n.length/3).fill(1),1)),o.setAttribute("aRoad",new Xt(new Array(n.length/3).fill(0),1)),o.setIndex(r),o}function Md(i){const t=new wr(1,1),e=t.attributes.position,n=new T;for(let a=0;a<e.count;a++){n.fromBufferAttribute(e,a);const c=1+.28*Gn(n.x*1.3+i,n.y*1.3,n.z*1.3);n.multiplyScalar(c),n.y=n.y<-.2?-.2-(n.y+.2)*.25:n.y,e.setXYZ(a,n.x,n.y*.75,n.z)}const s=t.toNonIndexed();s.computeVertexNormals();const r=s.attributes.position,o=new Float32Array(r.count*3);for(let a=0;a<r.count;a++){const c=.7+.3*Ce.smoothstep(r.getY(a),-.3,.6);o.set([c,c,c],a*3)}return s.setAttribute("color",new be(o,3)),s}function $h(){const i=[];[[0,.02,0,1],[.42,-.12,.18,.72],[-.3,-.08,-.3,.78],[.05,.38,-.08,.7]].forEach(([r,o,a,c],l)=>{const h=new wr(c,1),u=h.attributes.position,d=new T;for(let f=0;f<u.count;f++)d.fromBufferAttribute(u,f),d.multiplyScalar(1+.16*Gn(d.x*2.1+l*7,d.y*2.1,d.z*2.1)),u.setXYZ(f,d.x+r,d.y*.86+o,d.z+a);i.push(h)});const e=nl(i.map(r=>cd(r.deleteAttribute("normal").deleteAttribute("uv"))));e.computeVertexNormals();const n=e.attributes.position,s=new Float32Array(n.count*3);for(let r=0;r<n.count;r++){const o=.62+.45*Ce.smoothstep(n.getY(r),-.7,.9);s.set([o*.97,o,o*.92],r*3)}return e.setAttribute("color",new be(s,3)),e}function jx(){const i=new zn(.018,.034,.2,7);i.translate(0,.1,0);const t=new zn(.008,.014,.12,5);return t.translate(0,.06,0),t.rotateZ(-.7),t.translate(0,.13,0),nl([i.toNonIndexed(),t.toNonIndexed()])}function Zx(){const i=new Kt;i.name="mine";const t=[Ee.x+.35,Ee.y-.25,.42],e=new Dx({top:Ls,pond:t}),{geo:n,rim:s}=qx(),r=new At(n,e);r.receiveShadow=r.castShadow=!0,r.userData.info="mine",i.add(r);const o=new At(Yx(s),e);o.receiveShadow=!0,i.add(o),i.add(vt(Ft(ki+.3,.3,ki+.3,.06,nt.plinth),0,Ac-.15,0));const a=new Lo;for(let S=0;S<=48;S++){const M=S/48*Math.PI*2,A=1+.12*Gn(Math.cos(M)*1.5,Math.sin(M)*1.5,4),U=Math.cos(M)*A*.42*1.4,D=Math.sin(M)*A*.42*.8;S===0?a.moveTo(U,D):a.lineTo(U,D)}const c=new At(new Jc(a,1),Nx);c.rotation.x=-Math.PI/2,c.position.set(t[0],wo+.012,t[1]),c.receiveShadow=!0,i.add(c);const l=il(3),h=new Ht,u=new nn,d=new sn,f=new T,g=new T,_=new Lt,m=[];for(let S=0;S<150;S++){const M=l()*Math.PI*2,U=Math.floor(l()*_i)+.4+l()*.2,D=Vi-U*Rc-yd(M,Vi-U*Rc),z=Ee.x+Math.cos(M)*D*qi,V=Ee.y+Math.sin(M)*D*Yi;Eo(z,V).road>.2||Math.hypot(z-Rn.x,V-Rn.z)<Rn.r+.1||m.push({x:z,z:V,r:.018+l()*.03,c:l()})}for(let S=0;S<16;S++){const M=l()*Math.PI*2,A=l()*.5,U=Ee.x-.25+Math.cos(M)*A*qi,D=Ee.y+.15+Math.sin(M)*A*Yi;Math.hypot(U-t[0],D-t[1])<.62||m.push({x:U,z:D,r:.04+l()*.05,c:l()})}for(let S=0;S<9;S++){const M=-De+.3+l()*(ki-.6),A=-De+.3+l()*(ki-.6);Cc(M,A)[0]<Vi+.3||go(M,A)<.3||m.push({x:M,z:A,r:.06+l()*.07,c:l()})}const p=new xi(Md(1),gd,m.length);m.forEach(({x:S,z:M,r:A,c:U},D)=>{u.setFromEuler(d.set((l()-.5)*.4,l()*6.28,(l()-.5)*.4)),p.setMatrixAt(D,h.compose(f.set(S,bs(S,M)+A*.1,M),u,g.set(A*(.9+l()*.5),A,A*(.9+l()*.4)))),p.setColorAt(D,_.setRGB(.56,.5,.43).lerp(new Lt(.44,.46,.42),U).convertSRGBToLinear())}),p.castShadow=p.receiveShadow=!0,i.add(p);const x=[];for(let S=0;S<60&&x.length<30;S++){const M=-De+.22+l()*(ki-.44),A=-De+.22+l()*(ki-.44);Cc(M,A)[0]<Vi+.12||go(M,A)<.25||Math.hypot(M+2.1,A-1.9)<.75||x.some(U=>Math.hypot(U.x-M,U.z-A)<.3)||x.push({x:M,z:A,s:.75+l()*.55})}const y=new xi(jx(),Ux,x.length),v=new xi($h(),Zh,x.length);x.forEach(({x:S,z:M,s:A},U)=>{const D=bs(S,M);u.setFromEuler(d.set(0,l()*6.28,0)),y.setMatrixAt(U,h.compose(f.set(S,D-.01,M),u,g.set(A,A,A))),v.setMatrixAt(U,h.compose(f.set(S,D+.24*A,M),u,g.set(.15*A,.15*A,.15*A))),v.setColorAt(U,_.setRGB(.42,.55,.34).lerp(new Lt(.55,.6,.38),l()).multiplyScalar(.9+l()*.15).convertSRGBToLinear())}),y.castShadow=v.castShadow=!0,v.receiveShadow=!0,i.add(y,v);const L=[];for(let S=0;S<90&&L.length<34;S++){const M=l()*Math.PI*2,A=Vi+.18+l()*.5,U=Ee.x+Math.cos(M)*A*qi,D=Ee.y+Math.sin(M)*A*Yi;Math.abs(U)>De-.15||Math.abs(D)>De-.15||go(U,D)<.2||Eo(U,D).road>.1||L.push(new T(U,bs(U,D),D))}const R=new xi($h(),Zh,L.length);L.forEach((S,M)=>{const A=.05+l()*.04;u.setFromEuler(d.set(0,l()*6.28,0)),R.setMatrixAt(M,h.compose(f.set(S.x,S.y+A*.35,S.z),u,g.set(A,A*.7,A))),R.setColorAt(M,_.setRGB(.47,.56,.36).multiplyScalar(.85+l()*.2).convertSRGBToLinear())}),R.castShadow=!0,i.add(R);const E=Gx();E.position.set(-2.1,bs(-2.1,1.9),1.9),E.rotation.y=-.7,E.scale.setScalar(1.3),i.add(E);const P=Bx();return P.root.position.set(Rn.x,Rn.y,Rn.z),P.root.rotation.y=.15,P.root.scale.setScalar(1.35),P.root.userData.info="excavator",i.add(P.root),{root:i,digger:P,height:bs,pitFloor:new T(Ee.x,wo,Ee.y)}}const Vs=(i,t,e={})=>new kn({color:i,roughness:t,...e}),$x=Vs(11570538,.75),Jx=Vs(15525334,1,{sheen:1,sheenColor:new Lt(16777215),sheenRoughness:.6}),Kx=Vs(15262422,1,{sheen:1,sheenColor:new Lt(16777215),sheenRoughness:.5}),Jh=hd(11843504,9277578,6),Qx=Vs(9076596,1,{sheen:1,sheenColor:new Lt(15261136),sheenRoughness:.45}),ty=Vs(16777215,.9,{map:Jh.map,normalMap:Jh.normalMap,normalScale:new q(.4,.4)});function ey(){const i=new Kt;i.add(vt(Ft(3.6,.5,2.8,.08,nt.enamel),0,.25,0)),i.add(vt(Ft(3.62,.06,2.82,.03,nt.accent),0,.49,0));const t=new At(new Ti(3.3,2.5),nt.waterSurface);t.rotation.x=-Math.PI/2,t.position.y=.47,i.add(t);for(let s=-6;s<=6;s++)i.add(vt(Ft(.16,.08,2.3,.02,$x),s*.24,.55,0));i.add(vt(Ot(.05,.06,2.8,nt.steel,24),-2.2,1.4,1)),i.add(vt(Ot(.25,.3,.06,nt.darkSteel),-2.2,.03,1));const e=new Te;e.position.set(-1.35,2.9,1.15),i.add(Sr([[-2.2,2.75,1],[-1.9,3.05,1.05],[-1.45,2.95,1.12],[-1.35,2.9,1.15]],.05,nt.accent));const n=Ot(.06,.04,.3,nt.brass,24);return n.position.copy(e.position),n.rotation.set(.5,0,.9),i.add(n,e),i.add(...Er(3.6,.5,2.8,[0,.25,0],3)),Ai(i),i.userData.info="wash",{root:i,nozzle:e,gratingTop:.59}}function ny(){const i=new Kt,t=Ot(.13,.13,.9,nt.accent);t.rotation.z=Math.PI/2,i.add(t);const e=Ft(.3,.26,.3,.05,nt.darkSteel);e.position.x=.55,i.add(e);const n=Ot(.32,.32,.02,nt.grit);n.position.set(.55,-.2,0),n.name="disc",i.add(n);const s=xn(new At(new zn(.36,.36,.08,48,1,!0,0,Math.PI),nt.sage.clone()));return s.material.side=en,s.position.set(.55,-.17,0),i.add(s),i.userData.info="grinder-hand",i}function iy(){const i=new Kt;i.add(vt(Ft(4.2,.7,3,.06,nt.enamel),0,.35,0));const t=new qe({color:16052972,emissive:16776694,emissiveIntensity:0});i.add(vt(new At(new vn(3.2,.03,2.4),t),0,.715,0));const e=new Kt,n=Ot(.04,.04,.7,nt.accent,24),s=Ot(.012,.03,.08,Vs(12073514,.5),16);return s.position.y=-.39,e.add(n,s),i.add(e),i.add(...Er(4.2,.7,3,[0,.35,0],3)),Ai(i),i.userData.info="lightbox",{root:i,panel:t,top:.73,pen:e}}function sy(i,t,e=.9){const n=new Kt;n.add(vt(Ft(3.4,.25,2,.05,nt.enamel),.4,.125,0)),n.add(vt(Ft(3.1,.06,1.7,.02,nt.darkSteel),.4,.28,0)),n.add(vt(Ot(.13,.13,3.6,nt.steel),0,2,-.75));const s=new Kt;n.add(s),s.add(vt(Ft(.7,.7,1.1,.08,nt.enamel),0,.95,-.35)),s.add(vt(Ft(.72,.1,1.12,.03,nt.accent),0,.65,-.35)),s.add(vt(Ot(.3,.3,.6,nt.sage),0,1.55,-.35)),s.add(vt(Ot(.09,.09,.4,nt.steel),0,.45,0)),s.add(Sr([[.35,.9,-.1],[.75,1,.2],[.95,1.3,.45]],.025,nt.steel));const r=c=>{const l=new Kt,h=nt.steel.clone();return h.side=en,l.add(vt(Ot(c+.012,c+.012,e,h,96,!0),0,-e/2,0)),l.add(vt(Ot(c+.016,c+.016,.05,nt.grit,96,!0),0,-e+.02,0)),l.add(vt(Ot(c+.03,c+.03,.06,nt.darkSteel),0,0,0)),l.position.y=.25,l},o=r(t),a=r(i);return s.add(o,a),n.add(Sr([[-.3,3.2,-.2],[-.45,2.9,.1],[-.2,2.6,.3]],.025,nt.rubber)),n.add(...Er(3.4,.25,2,[.4,.125,0])),Ai(n),n.userData.info="drill",{root:n,head:s,outerBit:o,innerBit:a,tableTop:.31,headUp:2.3}}function ry(){const i=new Kt;i.add(vt(Ft(3.4,.9,1.7,.08,nt.enamel),-.4,.45,0)),i.add(vt(Ft(3.42,.07,1.72,.03,nt.accent),-.4,.86,0)),i.add(vt(Ft(1.5,.75,.9,.1,nt.sage),-1.1,1.3,0));const t=Ot(.06,.06,1.7,nt.steel);t.rotation.z=Math.PI/2,t.position.set(.35,1.35,0),i.add(t);const e=Ot(.17,.17,.3,nt.darkSteel);e.rotation.z=Math.PI/2,e.position.set(-.2,1.35,0),i.add(e),i.add(vt(Ft(.3,.5,.4,.04,nt.darkSteel),-.2,1.05,0));const n=new T(1,1.35,0),s=new Kt,r=Ot(.7,.7,.28,nt.grit,128);r.rotation.z=Math.PI/2,s.add(r);const o=Ot(.22,.22,.34,nt.steel);o.rotation.z=Math.PI/2,s.add(o);for(let m=0;m<8;m++){const p=m/8*Math.PI*2,x=Ot(.025,.025,.36,nt.darkSteel,12);x.rotation.z=Math.PI/2,x.position.set(0,Math.cos(p)*.15,Math.sin(p)*.15),s.add(x)}const a=new Kt,c=Ot(.18,.18,.9,ty,64);c.rotation.z=Math.PI/2,c.position.x=.35,a.add(c);const l=Ot(.19,.19,.06,nt.darkSteel,64);l.rotation.z=Math.PI/2,l.position.x=-.1,a.add(l);const h=new Kt,u=Ot(.2,.2,.9,Jx,64);u.rotation.z=Math.PI/2,u.position.x=.35,h.add(u);const d=Ot(.21,.21,.06,nt.brass,64);d.rotation.z=Math.PI/2,d.position.x=-.1,h.add(d);const f=nt.sage.clone();f.side=en;const g=xn(new At(new zn(.8,.8,.4,96,1,!0,Math.PI*.6,Math.PI*.8),f));g.rotation.z=Math.PI/2,s.add(g);for(const m of[s,a,h])m.position.copy(n),i.add(m);i.add(Sr([[.2,2.5,-.5],[.7,2.4,-.2],[1,2.25,.15]],.025,nt.rubber));const _=Ot(.025,.018,.12,nt.brass,16);return _.position.set(1,2.18,.18),i.add(_),i.add(...Er(3.4,.9,1.7,[-.4,.45,0],2)),Ai(i),i.userData.info="grind-bench",{root:i,spindle:n,wheel:s,drum:a,buff:h,spinning:[r,c,u]}}function oy(){const i=new Kt,t=1.3,e=1.1,n=.03,s=(h,u)=>xn(new At(new Gs(h.map(([d,f])=>new q(d,f)),128),u));i.add(s([[.001,0],[t-n,0],[t,n],[t,e-n*2],[t-n*2,e],[.001,e]],nt.plinth)),i.add(s([[t*.995,e-.015],[t*1.005,e-.015],[t*1.005,e-.005],[t*.995,e-.005]],nt.brass));const r=xn(new At(new zn(1.15,1.15,.04,96),Kx));r.position.y=e+.02,i.add(r);const o=Ft(.9,.1,.36,.05,Qx);o.position.y=e+.09,i.add(o);const a=new Kt;a.add(vt(Ft(1.3,.06,.02,.01,nt.steel),0,0,0)),a.add(vt(Ft(.05,.32,.025,.01,nt.steel),-.6,-.17,0));const c=vt(Ft(.12,.34,.03,.01,nt.steel),.2,-.16,0);c.name="jaw",a.add(c),a.visible=!1,i.add(a);const l=new Kt;return l.add(vt(Ot(.12,.2,.25,nt.darkSteel),0,0,0)),l.add(vt(Ot(.11,.11,.01,new si({color:16776170})),0,-.13,0)),l.visible=!1,i.add(l),i.userData.info="showcase",{root:i,top:e+.04,cradle:o,caliper:a,lamp:l}}class ay extends Vc{constructor(){super();const t=new vn;t.deleteAttribute("uv");const e=new qe({side:ke}),n=new qe,s=new Sv(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new At(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new At(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new At(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new At(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new At(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new At(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new At(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new At(t,ys(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new At(t,ys(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new At(t,ys(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new At(t,ys(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new At(t,ys(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new At(t,ys(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ys(i){const t=new si;return t.color.setScalar(i),t}const Kh=15855336,gn={hemi:.8,key:2.3,fill:.45,rim:.9,envIntensity:.85,toneMapping:"aces",exposure:1},Qh=new T(5,10,6),cy={aces:du,neutral:pu,agx:fu};function ly(){const i=new Vc,t=new Do(20,48,24),e=new Float32Array(t.attributes.position.count*3),n=new Lt(15329250),s=new Lt(12105134),r=new Lt(7828332),o=new Lt;for(let c=0;c<t.attributes.position.count;c++){const l=t.attributes.position.getY(c)/20;l>0?o.copy(s).lerp(n,l):o.copy(s).lerp(r,Math.min(1,-l*1.6)),e.set([o.r,o.g,o.b],c*3)}t.setAttribute("color",new be(e,3)),i.add(new At(t,new si({vertexColors:!0,side:ke})));const a=(c,l,h,u,d)=>{const f=new At(new Ti(c,l),new si({color:new Lt(1,.985,.96).multiplyScalar(h),side:en}));f.position.set(...u),f.lookAt(...d),i.add(f)};return a(10,7,3.2,[1,12,3],[0,0,0]),a(2.2,11,2.2,[-13,3,4],[0,1,0]),a(2.2,11,1.6,[12,3,-6],[0,1,0]),a(6,3,.9,[3,2,14],[0,1,0]),i}const hy=4868164;class uy{constructor(t,e){this.renderer=e;const n=new Lt(Kh);e.setClearColor(n),this.backdrop=new si({color:n.clone(),side:ke,fog:!1,toneMapped:!1});const s=new At(new Do(60,48,24),this.backdrop);s.name="backdrop",t.add(s),t.fog=new Hc(n.clone(),30,58);const r=new At(new jc(60,64),new qe({color:15986922,roughness:1}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r.name="floor",t.add(r),this.scene=t,this.setLook(this.look),t.environmentIntensity=gn.envIntensity,this.hemi=new yv(16777215,14209218,gn.hemi),this.key=new _a(16774890,gn.key),this.key.position.set(9,10,6),this.key.target.position.set(4,0,-.5),this.key.castShadow=!0,this.key.shadow.bias=-3e-4,this.key.shadow.normalBias=.02,Object.assign(this.key.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40}),this.fill=new _a(15397631,gn.fill),this.fill.position.set(-7,3,3),this.rim=new _a(16777215,gn.rim),this.rim.position.set(-1,5,-9),t.add(this.hemi,this.key,this.key.target,this.fill,this.rim),this.base={hemi:gn.hemi,key:gn.key,fill:gn.fill,rim:gn.rim},this.setShadowMapSize(2048)}key;hemi;fill;rim;base;envs={};scene;look={toneMapping:gn.toneMapping,env:"studio"};backdrop;paper=new Lt(Kh);dim=new Lt(hy);setShadowMapSize(t){this.key.shadow.mapSize.x!==t&&(this.key.shadow.mapSize.set(t,t),this.key.shadow.map?.dispose(),this.key.shadow.map=null)}setLook(t){this.look={...this.look,...t},this.renderer.toneMapping=cy[this.look.toneMapping],this.renderer.toneMappingExposure=gn.exposure;let e=this.envs[this.look.env];if(!e){const n=new xc(this.renderer),s=this.look.env==="studio"?ly():new ay;e=this.envs[this.look.env]=n.fromScene(s,.04).texture,n.dispose(),s.traverse(r=>{const o=r;o.isMesh&&(o.geometry.dispose(),o.material.dispose())})}this.scene.environment=e,this.scene.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])r.needsUpdate=!0})}focus(t,e){const n=(this.key.shadow.camera.right-this.key.shadow.camera.left)/this.key.shadow.mapSize.x,s=Qh.clone().normalize(),r=new T(0,1,0).cross(s).normalize(),o=s.clone().cross(r),a=new T(t,0,e),c=f=>Math.round(f/n)*n,l=c(a.dot(r)),h=c(a.dot(o)),u=a.dot(s),d=new T().addScaledVector(r,l).addScaledVector(o,h).addScaledVector(s,u);this.key.target.position.copy(d),this.key.position.copy(d).add(Qh),this.key.target.updateMatrixWorld()}shadowCovers(t){return this.key.updateMatrixWorld(),this.key.target.updateMatrixWorld(),this.key.shadow.updateMatrices(this.key),this.key.shadow.getFrustum().containsPoint(t)}setMode(t){const e={gallery:[1,1,1,1],soft:[1.5,.35,1.6,.6],back:[.35,.25,.2,3.2]}[t];this.mode=e,this.envMode={gallery:1,soft:1.15,back:.4}[t]}mode=[1,1,1,1];envMode=1;setExposure(t,e){const n=.12+.88*t,[s,r,o,a]=this.mode;this.hemi.intensity=this.base.hemi*n*s,this.key.intensity=this.base.key*n*r,this.fill.intensity=this.base.fill*n*o,this.rim.intensity=this.base.rim*n*a,e.environmentIntensity=gn.envIntensity*this.envMode*(.2+.8*t),this.backdrop.color.lerpColors(this.dim,this.paper,t),e.fog.color.copy(this.backdrop.color),this.renderer.setClearColor(this.backdrop.color)}dispose(){for(const t of Object.values(this.envs))t?.dispose()}}const Ut={mine:new T(-20,0,-2),wash:new T(-10,0,-.5),plinth:new T(0,0,0),saw:new T(8.5,0,-1.2),lightbox:new T(17,0,-.8),drill:new T(23.5,0,-.8),grind:new T(30.5,0,-.8),showcase:new T(39,0,0)},ur={r:1.7,h:.75},Sd=1;class dy{scene=new Vc;studio;pieces=new bx;mine;wash;torch=Tx();handGrinder=ny();saw;lightbox;drill;bench;showcase;sawWater=new ro;washWater=new ro;drillWater=new ro;benchWater=new ro;stationObjects=new Map;constructor(t){this.studio=new uy(this.scene,t);const e=(o,a,c)=>{o.position.add(a),this.scene.add(o);const l=Object.keys(Ut).find(u=>Ut[u]===a),h=this.stationObjects.get(l)??[];if(h.push(o),c){const u=dx(c,.22);u.position.x+=a.x,u.position.z+=a.z,this.scene.add(u),h.push(u)}this.stationObjects.set(l,h)};this.mine=Zx(),this.mine.root.position.y=Sd,e(this.mine.root,Ut.mine,9),this.wash=ey(),e(this.wash.root,Ut.wash,5);const n=wx(ur.r,ur.h);n.userData.info="plinth",e(n,Ut.plinth,5.5);const s=Ex();s.scale.setScalar(.6),s.rotation.set(-Math.PI/2,0,.9),s.position.set(.95,ur.h+.04,1.05);const r=Ax([{t:"JADEITE  硬玉",s:52,w:700},{t:"Rough · 原石 · No.001",s:34,c:"#7d8580"},{t:"程序化示意标本",s:30,c:"#7d8580"}]);r.scale.setScalar(.62),r.position.set(-1.05,ur.h+.2,1.05),r.rotation.y=.35,e(s,Ut.plinth),e(r,Ut.plinth),this.saw=fx(),e(this.saw.root,Ut.saw,7.5),this.lightbox=iy(),e(this.lightbox.root,Ut.lightbox,6),this.drill=sy(Oe.ri,Oe.ro),e(this.drill.root,Ut.drill,4.5),this.bench=ry(),e(this.bench.root,Ut.grind,5.5),this.showcase=oy(),e(this.showcase.root,Ut.showcase,4.2);for(const o of this.pieces.all)this.scene.add(o);for(const o of[this.sawWater,this.washWater,this.drillWater,this.benchWater])this.scene.add(o.object);this.torch.visible=!1,this.handGrinder.visible=!1,this.scene.add(this.torch,this.handGrinder)}showStations(t){for(const[e,n]of this.stationObjects){const s=t.includes(e);for(const r of n)r.visible=s}}get pickables(){return[...this.pieces.pickables,...this.saw.pickables,this.mine.root,this.wash.root,this.lightbox.root,this.drill.root,this.bench.root,this.showcase.root]}}const Re=(i,t,e)=>new T(i,t,e),Ie=(i,t,e,n)=>i.clone().add(Re(t,e,n)),te=Qv,St=Kv,fy=[["mine"],["mine","wash"],["wash","plinth"],["plinth"],["plinth"],["plinth","saw"],["saw","lightbox"],["lightbox","drill"],["drill","grind"],["grind"],["grind"],["grind","showcase"]],py=Object.keys(Ut),Fi={wind:.25,motor:0,water:0,grind:0,buff:0},my=.11,tu=xe(yi(Ie(Ut.wash,0,.59+ti,0)),Xi(.6)),$n=xe(yi(Ie(Ut.plinth,0,ur.h+ti,0)),Xi(-.25)),La=1.1,Ia=.2,Da=i=>yi(Ie(Ut.saw,0,Qe.carriageTop+ti,i)),bd=(i,t=0,e=0)=>xe(yi(i),dd(Math.PI/2),gr(-sl,-t,-e)),eu=bd(Ie(Ut.lightbox,0,.73+ei/2,0)),nu=bd(Ie(Ut.drill,0,.31+ei/2,0),ze[0].cy,ze[0].cz),ln=(i,t,e,n=0)=>xe(gr(i,t,e),Xi(n)),iu=dd(-Math.PI/2),su=.4,Oi=Ie(Ut.drill,1.45,.31+ei/2,.2),ru=.18;class Mi{constructor(t){this.w=t;const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(236,230,214,0.7)"),s.addColorStop(1,"rgba(236,230,214,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.dust=new Wu(new Wc({map:new Po(e),depthWrite:!1,transparent:!0})),this.dust.visible=!1,t.scene.add(this.dust);const r=new ve;r.setAttribute("position",new be(new Float32Array(6),3)),this.dimLine=new H_(r,new qu({color:2847569,depthTest:!1})),this.dimLine.frustumCulled=!1,this.dimLine.renderOrder=10,this.dimLine.visible=!1,t.scene.add(this.dimLine)}fissure=sx();dust;dimLine;bladeAngle=0;wheelAngle=0;mineEnd;mineAttach;sixEnd;keyCache=new Map;manualTorch=null;torchMode=!1;lightMode="gallery";compare=1;cullStations=!0;lastExposure=1;static stationOf(t){return[Ut.mine,Ut.wash,Ut.plinth,Ut.plinth,Ut.plinth,Ut.saw,Ut.lightbox,Ut.drill,Ut.grind,Ut.grind,Ut.grind,Ut.showcase][t]}apply(t,e,n,s){const r=this.w;r.pieces.hideAll(),this.idleMachines();const o=Mi.stationOf(t);r.studio.focus(o.x,o.z),r.showStations(this.cullStations?fy[t]:py),r.studio.setMode(t===11?this.lightMode:"gallery");let a=1,c={...Fi},l=[];switch((t===6&&e<.4||t===8)&&this.showLeftovers(t),t){case 0:{const h=this.mineAttachPose();this.setArm(this.armAt(e));const u=e<.45?h:this.bucketStonePose();this.showIntact(u,{reveal:0,flat:0}),c={...Fi,wind:.5,motor:.35*(St(e,.15,.25)-St(e,.92,1))},r.scene.updateMatrixWorld(),l=[{id:"mine",world:Ut.mine.clone().add(r.mine.pitFloor).add(Re(.3,Sd,0))},{id:"excavator",world:ye(r.mine.digger.root.matrixWorld,0,.5,0)},...e>.5?[{id:"stone",world:wa(u)}]:[]];break}case 1:{const h=te(St(e,0,.25));this.setArm(this.armAt(1));const u=An(this.mineEndPose(),tu,h,3),d=te(St(e,.3,.7));this.showIntact(u,{reveal:0,flat:0,wet:d});const f=St(e,.25,.32)*(1-St(e,.85,.92));r.scene.updateMatrixWorld();const g=ye(u,-.4,.6,.3);r.washWater.update(n,f,[r.wash.nozzle.getWorldPosition(new T)],g),c={...Fi,water:f},l=e>.5?[{id:"rind",world:ye(u,.3,.7,.6)}]:[];break}case 2:{const h=te(St(e,0,.18)),u=An(tu,$n,h,1.6),d=1-St(e,.15,.55);this.showIntact(u,{reveal:0,flat:0,wet:d}),a=this.torchMode?0:1-St(e,.2,.3)+St(e,.86,.96);const f=this.torchMode||e>.28&&e<.88;f&&this.placeTorch(u,e),l=f?[{id:"torch",world:r.torch.position.clone()}]:e>.2?[{id:"rind",world:ye(u,-.9,.55,.55)}]:[];break}case 3:{const h=St(e,.25,.8);this.showIntact($n,{reveal:h,flat:te(h)}),this.placeHandGrinder(e,n),c={...Fi,grind:St(e,.2,.25)*(1-St(e,.8,.85))},l=[{id:"rind",world:ye($n,-.9,.55,.55)},...e>.7?[{id:"window",world:this.windowPoint(-.3)}]:[]];break}case 4:{this.showIntact($n,{reveal:1,flat:1}),r.pieces.setPlanLines([te(St(e,.15,.45)),te(St(e,.45,.65)),te(St(e,.65,.85))]),l=[{id:"fissure",world:ye($n,this.fissure.x,this.fissure.y,this.fissure.z)},...e>.5?[{id:"cutlines",world:ye($n,0,.93,.15)}]:[]];break}case 5:{const h=this.slabbing(e,n,s);c=h.sound,l=h.hot;break}case 6:{const h=this.sixEndPoses(),u=An(h.S,eu,te(St(e,0,.35)),1.4);this.showPiece(r.pieces.S,u);const d=te(St(e,.35,.45));r.lightbox.panel.emissiveIntensity=1.1*d;const f=St(e,.45,.95);r.pieces.setMarks(f),this.placePen(u,f,e),l=e>.4?[{id:"slab",world:ye(u,Me.x1,-.55,-.2)},{id:"fissure-slab",world:ye(u,Me.x1,.52,-.1)},...e>.95?[{id:"marks",world:ye(u,Me.x1,ze[0].cy,ze[0].cz+Oe.ro)}]:[]]:[];break}case 7:{const h=this.coring(e,n);c=h.sound,l=h.hot;break}case 8:case 9:case 10:{const h=this.grinding(t,e,n,s);c=h.sound,l=h.hot;break}case 11:{l=this.showcase(e).hot;break}}return r.studio.setExposure(a,r.scene),this.lastExposure=a,r.scene.updateMatrixWorld(),r.pieces.updateClipping(),{shot:this.shot(t,e),hotspots:l,sound:c,orbitTarget:this.shot(t,e).target}}idleMachines(){const t=this.w;t.torch.visible=!1,t.handGrinder.visible=!1,this.dust.visible=!1,this.dimLine.visible=!1,t.saw.blade.position.y=Qe.bladeParkedY,t.saw.carriage.position.set(0,0,La),t.lightbox.panel.emissiveIntensity=0,t.lightbox.pen.visible=!1,t.drill.head.position.y=t.drill.headUp-.7,t.drill.outerBit.visible=!0,t.drill.innerBit.visible=!1,t.bench.wheel.visible=!0,t.bench.drum.visible=t.bench.buff.visible=!1,t.showcase.caliper.visible=t.showcase.lamp.visible=!1;for(const e of[t.sawWater,t.washWater,t.drillWater,t.benchWater])e.update(0,0,[],new T)}showIntact(t,e){const n=this.w.pieces.intactGroup;rr(n,t),n.visible=!0,this.w.pieces.setWindow(e.reveal,e.flat),this.w.pieces.setWet(e.wet??0)}showPiece(t,e){rr(t.group,e),t.group.visible=!0}windowPoint(t=0){const e=ri.clone().multiplyScalar(Hs);return ye($n,e.x,e.y+t,e.z)}armAt(t){const e=te(St(t,.25,.45)),n=te(St(t,.45,.6)),s=te(St(t,.6,.95));return{boom:Be(Be(Be(.55,.22,e),.22,n),.85,s),stick:Be(Be(-1.35,-1.55,e),-1.15,n)+0*s,bucket:Be(Be(-.9,-1.1,e),-.1,n)+.35*s}}setArm(t){const e=this.w.mine.digger;e.boom.rotation.z=t.boom,e.stick.rotation.z=t.stick,e.bucket.rotation.z=t.bucket,e.sync()}bucketStonePose(){const t=this.w.mine.digger.bucket;t.updateWorldMatrix(!0,!1);const e=ye(t.matrixWorld,.08,.05,0);return xe(yi(e),Xi(.4),gx(my))}mineAttachPose(){return this.mineAttach||(this.setArm(this.armAt(.45)),this.mineAttach=this.bucketStonePose(),this.setArm(this.armAt(0))),this.mineAttach}mineEndPose(){return this.mineEnd||(this.setArm(this.armAt(1)),this.mineEnd=this.bucketStonePose()),this.mineEnd}placeTorch(t,e){let n,s;if(this.torchMode&&this.manualTorch)({point:n,normal:s}=this.manualTorch);else{const c=[Re(-.55,.45,.7),Re(.05,.6,.8),Re(.65,.3,.7)].map(d=>d.normalize()),l=St(e,.3,.86)*2,h=Math.min(1,Math.floor(l)),u=c[h].clone().lerp(c[h+1],te(l-h)).normalize();n=u.clone().multiplyScalar(Uo(u)*.99),s=u}this.w.pieces.intact.material.jade.uTorch.value.set(n.x,n.y,n.z,3.2);const r=n.clone().applyMatrix4(t),o=s.clone().transformDirection(t),a=this.w.torch;a.visible=!0,a.quaternion.setFromUnitVectors(Re(1,0,0),o.clone().negate()),a.position.copy(r).addScaledVector(o,.66)}placeHandGrinder(t,e){const n=this.w.handGrinder,s=ri.clone().transformDirection($n),r=this.windowPoint(),o=te(St(t,.05,.25))*(1-te(St(t,.8,.98)));if(o<=0)return;n.visible=!0;const a=Re(1,0,0).cross(s).normalize(),c=St(t,.25,.8)>0&&St(t,.25,.8)<1?Math.sin(e*5)*.08:0,l=r.clone().addScaledVector(s,Be(1.4,.02,o)).addScaledVector(a,c).add(Re(0,Be(.8,0,o),0));n.scale.setScalar(su),n.quaternion.setFromUnitVectors(Re(0,1,0),s),n.position.copy(l).sub(Re(.55,-.2,0).multiplyScalar(su).applyQuaternion(n.quaternion));const h=n.getObjectByName("disc");h&&(h.rotation.y=e*30);const u=St(t,.25,.8);if(u>0&&u<1){this.dust.visible=!0,this.dust.position.copy(r).addScaledVector(s,.2);const d=.8+.1*Math.sin(e*7);this.dust.scale.set(d*.6,d*.42,1)}}slabbing(t,e,n){const s=this.w,r=s.pieces,o=te(St(t,.12,.2)),a=Be(La,Ia,o);s.saw.carriage.position.set(0,0,a);const c=An($n,Da(La),te(St(t,0,.12)),1.8),l=t<.12?c:Da(a),h=(z,V,H)=>te(St(t,z,V))*(1-te(St(t,V,H))),u=h(.2,.38,.43),d=h(.66,.72,.75),f=h(.78,.84,.87);s.saw.blade.position.y=Be(Qe.bladeParkedY,Qe.bladeDownY,Math.max(u,d,f));const g=St(t,.15,.2)*(1-St(t,.43,.47))+St(t,.62,.66)*(1-St(t,.87,.9));this.bladeAngle-=n*14*g,s.saw.bladeDisc.rotation.x=this.bladeAngle;const _=te(St(t,.43,.55)),m=te(St(t,.6,.66)),p=te(St(t,.75,.78)),x=te(St(t,.87,.97)),y=An(ln(-.8*_,0,.4*_,-.72*_),ln(-2.1,0,.5,-.72),m),v=ln(.8*_,0,.4*_,.72*_),L=ln(-Be(Me.x0,Me.x1,p),0,0),R=An(v,L,m),E=Qe.carriageTop+ti,P=(z,V)=>Be(Qe.bladeParkedY,Qe.bladeDownY,te(St(t,z,V)))-Qe.bladeRadius-E;_<=0?(this.showIntact(l,{reveal:1,flat:1}),r.setPlanLines([t>.2?0:1,1,1]),t>.2&&r.setSlot(r.intact,lr,P(.2,.38))):(this.showPiece(r.A,xe(l,y)),t<.72?(this.showPiece(r.B,xe(l,R)),r.setLinesOn(r.B.shell,[Me.x0,Me.x1],[t>.66?0:1,1]),t>.66&&r.setSlot(r.B.shell,Me.x0,P(.66,.72))):t<.84?(this.showPiece(r.B1,xe(l,R)),this.showPiece(r.BR,xe(l,R)),r.setLinesOn(r.BR.shell,[Me.x1],[t>.78?0:1]),t>.78&&r.setSlot(r.BR.shell,Me.x1,P(.78,.84))):(this.showPiece(r.B1,xe(l,R,ln(-.35*x,0,0))),this.showPiece(r.S,xe(l,R,ln(0,0,.6*x))),this.showPiece(r.B2,xe(l,R,ln(.45*x,0,0))))),s.scene.updateMatrixWorld();const S=s.saw.nozzles.map(z=>z.getWorldPosition(new T)),M=Math.max(u,d,f),A=Qe.carriageTop+ti+.9,U=Ie(Ut.saw,0,Be(A,Qe.carriageTop+.35,M),a+.55);s.sawWater.update(e,g,S,U);const D=[];return t>.1&&D.push({id:"saw",world:Ie(Ut.saw,-1.9,.9,1.75)}),t>.2&&t<.42&&D.push({id:"blade",world:ye(s.saw.blade.matrixWorld,0,1,.9)},{id:"coolant",world:U}),t>.5&&t<.6&&D.push({id:"cutface",world:ye(xe(l,y),0,.35,-.2)},{id:"fissure-cut",world:ye(xe(l,R),0,.6,0)}),t>.95&&D.push({id:"slab",world:ye(xe(l,R,ln(0,0,.6)),sl,.3,0)}),{sound:{...Fi,motor:g*.8,water:g*.7},hot:D}}sixEndPoses(){if(!this.sixEnd){const t=Da(Ia),e=ln(-.31,0,0);this.sixEnd={A:xe(t,ln(-2.1,0,.5,-.72)),B1:xe(t,e,ln(-.35,0,0)),S:xe(t,e,ln(0,0,.6)),B2:xe(t,e,ln(.45,0,0))}}return this.sixEnd}showLeftovers(t){const e=this.sixEndPoses(),n=this.w.pieces;t===6&&(this.showPiece(n.A,e.A),this.showPiece(n.B1,e.B1),this.showPiece(n.B2,e.B2),this.w.saw.carriage.position.set(0,0,Ia)),t===8&&(this.showPiece(n.S,nu),n.setMarks(1),n.setKerfs(!0,!0),n.setHole(!0),n.core.visible=!0,rr(n.core,Mi.CORE_ASIDE))}static CORE_ASIDE=jh;placePen(t,e,n){const s=this.w.lightbox.pen;if(n<.4||n>.98)return;s.visible=!0;const r=Math.min(3,Math.floor(e*4)),o=e*4-r,a=ze[r>>1],c=r%2===0?Oe.ro:Oe.ri,l=o*Math.PI*2-Math.PI,h=ye(t,Me.x1+.005,a.cy+c*Math.cos(l),a.cz+c*Math.sin(l)),u=Ut.lightbox;s.position.copy(h).sub(u).add(Re(.12,.4,.12)),s.rotation.set(.3,0,-.3)}coring(t,e){const n=this.w,s=n.pieces,r=n.drill,o=An(eu,nu,te(St(t,0,.14)),1.2);this.showPiece(s.S,o),s.setMarks(1);const a=1.12,c=.92,l=r.headUp-.7,h=(x,y,v,L)=>{const R=te(St(t,x,y)),E=St(t,y,v),P=te(St(t,v,L));return Be(Be(Be(l,a,R),c,E),l,P)},u=t<.47;r.outerBit.visible=u,r.innerBit.visible=!u,r.head.position.y=u?h(.14,.2,.38,.45):h(.5,.55,.7,.76);const d=St(t,.2,.38)>0&&St(t,.2,.38)<1||St(t,.55,.7)>0&&St(t,.55,.7)<1;s.setKerfs(t>.3,t>.64);const f=te(St(t,.76,.86)),g=te(St(t,.86,.95));if(t>.76){s.setHole(!0);const x=xe(o,jh,gr(0,.6*f,0)),y=gr(Oi.x,Oi.y,Oi.z);this.showBangle(An(x,y,g,.3),0)}s.core.visible=!0;const _=Mi.CORE_ASIDE;rr(s.core,_),n.scene.updateMatrixWorld();const m=Ie(Ut.drill,0,.31+ei+.05,0);n.drillWater.update(e,d?.5:0,[Ie(Ut.drill,-.2,2.6,.3)],m);const p=[];return t>.14&&p.push({id:"drill",world:Ie(Ut.drill,.4,2.6,-.3)}),t>.2&&t<.47&&p.push({id:"outer-bit",world:Ie(Ut.drill,Oe.ro+.05,.9,0)}),t>.55&&t<.76&&p.push({id:"inner-bit",world:Ie(Ut.drill,Oe.ri+.05,.85,0)}),t>.97&&(p.push({id:"blank",world:Oi.clone().add(Re(Oe.ro,.05,0))}),p.push({id:"core",world:ye(xe(o,_),0,.1,0)}),p.push({id:"offcut",world:ye(o,Me.x1,-.5,-.4)})),{sound:{...Fi,motor:d?.6:r.head.position.y<l-.01?.25:0,water:d?.3:0},hot:p}}showBangle(t,e){const n=this.w.pieces;rr(n.bangleGroup,t),n.bangleGroup.visible=!0,n.setBangleShape(e)}benchPose(t,e,n){const s=Ut.grind.clone().add(this.w.bench.spindle),r=Ms(e);if(t==="wheel")return xe(yi(s.clone().add(Re(0,0,.7+r.ro))),iu,Xi(n));const o=t==="drum"?ru:ru+.02;return xe(yi(s.clone().add(Re(.45,-(r.ri-o),0))),iu,Xi(n))}grinding(t,e,n,s){const r=this.w,o=r.bench,a=t-8,c=a===0?.18:.12,l=a+St(e,c,.95);this.wheelAngle+=s*18*(St(e,c-.05,c)*(1-St(e,.95,1))),o.wheel.visible=a===0,o.drum.visible=a===1,o.buff.visible=a===2;for(const p of o.spinning)p.rotation.x=this.wheelAngle;const h=n*.8,u=["wheel","drum","buff"][a],d=this.benchPose(u,l,h);let f;if(a===0){const p=gr(Oi.x,Oi.y,Oi.z);f=An(p,d,te(St(e,0,.18)),1.6)}else{const p=this.benchPose(["wheel","drum","buff"][a-1],a,h);f=An(p,d,te(St(e,0,.12)),.5)}this.showBangle(f,l),r.scene.updateMatrixWorld();const g=St(e,c,c+.03)*(1-St(e,.95,1)),_=wa(f).add(a===0?Re(0,0,-Ms(l).ro):Re(0,Ms(l).ri,0));a<2&&r.benchWater.update(n,g*.45,[Ie(Ut.grind,1,2.18,.18)],_);const m=[{id:["wheel","drum","buff"][a],world:a===0?Ie(Ut.grind,1,2.1,0):Ie(Ut.grind,1.6,1.45,0)}];return e>.3&&m.push({id:["bangle-rough","bangle-fine","bangle-polish"][a],world:wa(f).add(Re(0,Ms(l).ro,.2))}),{sound:{...Fi,motor:g*.5,grind:a<2?g*(a===0?.9:.5):0,buff:a===2?g*.6:0,water:a<2?g*.25:0},hot:m}}static SHOWCASE_POSE=xe(yi(Ie(Ut.showcase,0,1.14+.1+.386,0)),Xi(-.65),mx(Math.PI/2));showcase(t){const e=this.w,n=e.showcase,s=this.benchPose("buff",3,0),r=An(s,Mi.SHOWCASE_POSE,te(St(t,0,.16)),1.4);if(this.showBangle(r,3),t>=1&&this.compare<1){const u=e.pieces.bangle.material;u.jade.uRough.value=1-this.compare,u.roughness=.1+.55*(1-this.compare),u.clearcoat=this.compare}const o=St(t,.2,.36),a=Ms(3).ri;if(t>.2&&t<.5){const u=te(o),d=ye(r,-a*u,0,0),f=ye(r,a*u,0,0),g=this.dimLine.geometry.getAttribute("position");g.setXYZ(0,d.x,d.y,d.z),g.setXYZ(1,f.x,f.y,f.z),g.needsUpdate=!0,this.dimLine.visible=!0}const c=St(t,.36,.5);c>0&&c<1?(n.lamp.visible=!0,n.lamp.position.set(.2,2.6,.5),e.pieces.bangle.material.jade.uEdgeGlow.value=.22+.4*Math.sin(c*Math.PI)):e.pieces.bangle.material.jade.uEdgeGlow.value=this.lightMode==="back"&&t>=.5?.6:.22;const l=u=>{const d=u*Math.PI/180;return ye(r,Math.sin(d)*.386,0,Math.cos(d)*.386)},h=t>.5?[{id:"edge",world:l(200)},{id:"colour",world:l(330)},{id:"lustre",world:l(20)}]:t>.36?[{id:"inspect",world:l(90)}]:[];return t>.3&&t<.5&&h.push({id:"inner-diameter",world:ye(r,0,0,0)}),{hot:h}}keys(t){const e=this.keyCache.get(t);if(e)return e;const n=(_,m,p,x)=>({at:_,pos:Ie(m,...p),target:Ie(m,...x)}),s=Ut.mine,r=Ut.wash,o=Ut.plinth,a=Ut.saw,c=Ut.lightbox,l=Ut.drill,h=Ut.grind,u=Ut.showcase,d=()=>{const _=this.shot(t-1,1);return{at:0,pos:_.position.clone(),target:_.target.clone()}},g=({0:()=>[n(0,s,[9.4,9.8,10.2],[-.6,.9,.5]),n(.5,s,[8.6,9.2,9.6],[-.6,.9,.5]),n(1,s,[4.4,5.6,6.4],[-.4,1.6,.3])],1:()=>[d(),n(.28,r,[4.2,4.6,7.4],[0,1.3,0]),n(1,r,[3.6,4,6.6],[0,1.3,0])],2:()=>[d(),n(.2,o,[-1.6,3,8.4],[0,1.45,0]),n(.32,o,[2.2,3,7],[.2,1.5,0]),n(1,o,[2.2,3,7],[.2,1.5,0])],3:()=>[d(),n(.2,o,[2.8,3.2,6.4],[.25,1.55,.3]),n(1,o,[2.6,3.1,6.2],[.25,1.55,.3])],5:()=>[d(),n(.12,a,[6.4,6.2,12],[0,2.6,.2]),n(.22,a,[4.6,4.6,8.4],[0,2.4,.5]),n(.4,a,[3.8,4,7.2],[0,2.3,.6]),n(.5,a,[5.2,5.6,11],[0,2.3,.4]),n(.58,a,[1.4,5,11.2],[0,2,.7]),n(.66,a,[3.6,4.2,7],[-.3,2.3,.3]),n(.88,a,[3.4,4,6.8],[-.3,2.2,.4]),n(1,a,[1.8,4.4,8.6],[-.3,2,.7])],6:()=>[d(),n(.35,c,[.8,6.2,4.4],[0,.75,0]),n(1,c,[.4,5.2,3.6],[0,.75,.1])],7:()=>[d(),n(.14,l,[3.8,3.6,5.2],[0,.9,.1]),n(.5,l,[3.2,3,4.2],[0,.85,.2]),n(.8,l,[4,3.6,5.6],[.6,.8,.35]),n(1,l,[4,3.6,5.6],[.6,.8,.35])],8:()=>[d(),n(.18,h,[4.4,3.6,6.8],[.6,1.3,.8]),n(1,h,[3.2,2.5,4.6],[1,1.35,1])],9:()=>[d(),n(.12,h,[3,2.2,4],[1.3,1.25,.1]),n(1,h,[2.6,2,3.6],[1.3,1.25,.1])],10:()=>[d(),n(.12,h,[3,1.8,3],[1.4,1.2,0]),n(1,h,[2.8,1.7,2.8],[1.4,1.2,0])],11:()=>[d(),n(.16,u,[1,2.1,3.4],[0,1.62,0]),n(.5,u,[.9,2,3],[0,1.62,0])]}[t]??(()=>[n(0,o,[0,3,8],[0,1.4,0])]))();return this.keyCache.set(t,g),g}shot(t,e){if(t===4){const c=-.35+te(e)*Math.PI*2,l=7.2;return{position:Re(Math.sin(c)*l,3.4,Math.cos(c)*l),target:Re(0,1.5,0)}}if(t===11&&e>.5){const c=this.keys(11),l=c[c.length-1],h=l.pos.clone().sub(l.target),u=te(St(e,.5,1))*Math.PI*2;return h.applyAxisAngle(Re(0,1,0),u),{position:l.target.clone().add(h),target:l.target.clone()}}const n=this.keys(t);let s=0;for(;s<n.length-2&&e>n[s+1].at;)s++;const r=n[s],o=n[Math.min(s+1,n.length-1)],a=o.at>r.at?te(St(e,r.at,o.at)):1;return{position:r.pos.clone().lerp(o.pos,a),target:r.target.clone().lerp(o.target,a)}}}class gy{s={stage:0,progress:0,playing:!1,speed:1,guided:!1};listeners=new Set;get state(){return this.s}subscribe(t){return this.listeners.add(t),t(this.s),()=>this.listeners.delete(t)}set(t){const e={...this.s,...t};e.stage=Math.max(0,Math.min(xa-1,Math.round(e.stage))),e.progress=rd(e.progress),Object.keys(e).some(s=>e[s]!==this.s[s])&&(this.s=e,this.listeners.forEach(s=>s(this.s)))}startJourney(){this.set({stage:0,progress:0,playing:!0,guided:!0})}goTo(t,e=!0){this.set({stage:t,progress:0,playing:e,guided:!1})}next(){this.s.stage<xa-1&&this.set({stage:this.s.stage+1,progress:0,playing:!0})}prev(){this.s.stage>0&&this.set({stage:this.s.stage-1,progress:0,playing:!0})}play(){this.set({playing:!0,progress:this.s.progress>=1?0:this.s.progress})}pause(){this.set({playing:!1})}toggle(){this.s.playing?this.pause():this.play()}setSpeed(t){this.set({speed:t})}seek(t){this.set({progress:t,playing:!1})}step(t){this.seek(this.s.progress+t)}restore(t){this.set(t)}tick(t){if(!this.s.playing)return 0;const e=Math.min(t,.1)*this.s.speed,n=this.s.progress+e/Fv(this.s.stage);return n<1?(this.set({progress:n}),e):(this.s.guided&&this.s.stage<xa-1?this.set({stage:this.s.stage+1,progress:0}):this.set({progress:1,playing:!1,guided:!1}),e)}}const ou=[{name:"low",dprCap:.75,shadow:1024},{name:"medium",dprCap:1.25,shadow:2048},{name:"high",dprCap:2,shadow:2048},{name:"ultra",dprCap:2,shadow:4096}];class _y{constructor(t,e){this.onChange=e,this.level=t?1:2,this.budget=t?33.3:16.7}level;samples=[];cooldown=0;budget;get current(){return ou[this.level]}get avgFrameMs(){return this.samples.length?this.samples.reduce((t,e)=>t+e,0)/this.samples.length:0}sample(t){if(this.samples.push(t),this.samples.length>90&&this.samples.shift(),this.cooldown>0){this.cooldown--;return}if(this.samples.length<90)return;const e=this.avgFrameMs;e>this.budget*1.35&&this.level>0?this.step(-1):e<this.budget*.6&&this.level<ou.length-1&&this.step(1)}step(t){this.level+=t,this.samples=[],this.cooldown=120,this.onChange(this.current)}}class vy{ctx=null;master=null;gains=new Map;on=!1;get enabled(){return this.on}async enable(){this.ctx||this.build(),await this.ctx.resume(),this.master.gain.setTargetAtTime(.55,this.ctx.currentTime,.2),this.on=!0}async disable(){this.on=!1,this.ctx&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.08),setTimeout(()=>{this.on||this.ctx?.suspend()},400))}setMix(t){if(!this.on||!this.ctx)return;const e=this.ctx.currentTime;for(const[n,s]of this.gains)s.gain.setTargetAtTime(t[n],e,.15)}build(){const t=window.AudioContext??window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);const n=(g=2,_=!1)=>{const m=e.createBuffer(1,e.sampleRate*g,e.sampleRate),p=m.getChannelData(0);let x=0,y=0,v=0;for(let R=0;R<p.length;R++){const E=Math.random()*2-1;if(!_){p[R]=E;continue}x=.997*x+E*.029591,y=.985*y+E*.032534,v=.95*v+E*.048056,p[R]=(x+y+v+E*.1)*.6}const L=e.createBufferSource();return L.buffer=m,L.loop=!0,L.start(),L},s=(g,_,m=.7)=>{const p=e.createBiquadFilter();return p.type=g,p.frequency.value=_,p.Q.value=m,p},r=(g,..._)=>{const m=e.createGain();m.gain.value=0;for(let p=0;p<_.length-1;p++)_[p].connect(_[p+1]);_[_.length-1].connect(m),m.connect(this.master),this.gains.set(g,m)},o=(g,_,m)=>{const p=e.createOscillator();p.frequency.value=_;const x=e.createGain();x.gain.value=m,p.connect(x).connect(g),p.start()},a=e.createGain();a.gain.value=.35,o(a.gain,.13,.15),r("wind",n(4,!0),s("lowpass",420),a);const c=e.createGain();c.gain.value=.12;for(const g of[92,184.6]){const _=e.createOscillator();_.type="sawtooth",_.frequency.value=g,_.connect(c),_.start()}r("motor",c,s("lowpass",520,.9));const l=e.createGain();l.gain.value=.5,o(l.gain,7.3,.18),r("water",n(2),s("bandpass",1900,.6),l);const h=e.createGain();h.gain.value=.32,n(2).connect(s("bandpass",3600,1.2)).connect(h);const u=e.createOscillator();u.type="square",u.frequency.value=230;const d=e.createGain();d.gain.value=.03,u.connect(d).connect(h),u.start(),r("grind",h);const f=e.createGain();f.gain.value=.3,o(f.gain,2.1,.08),r("buff",n(3,!0),s("bandpass",700,.5),f)}}function xy(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}class yy{constructor(t,e){this.canvas=t;const n=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<760;this.renderer=new z_({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=hu,this.renderer.localClippingEnabled=!0,this.renderer.info.autoReset=!1,this.world=new dy(this.renderer),this.director=new Mi(this.world),this.rig=new ex(t),this.quality=new _y(n,r=>this.applyQuality(r.dprCap,r.shadow)),this.ui=new Ov(e,{start:()=>{this.leaveIntro(),this.journey.startJourney(),this.rig.reset()},explore:()=>this.leaveIntro(),goTo:r=>{this.leaveIntro(),this.journey.goTo(r)},prev:()=>{this.leaveIntro(),this.journey.prev()},next:()=>{this.leaveIntro(),this.journey.next()},toggle:()=>{this.leaveIntro(),this.journey.toggle()},speed:r=>this.journey.setSpeed(r),seek:r=>this.journey.seek(r),step:r=>this.journey.step(r),resetView:()=>this.rig.reset(),toggleTorch:()=>this.setTorch(!this.director.torchMode),toggleSound:()=>void this.toggleSound(),lightMode:r=>{this.director.lightMode=r},compare:r=>{this.director.compare=r}});let s=-1;this.journey.subscribe(r=>{r.stage!==s&&(s=r.stage,this.rig.reset(),r.stage!==2&&this.setTorch(!1),this.rig.setDistanceLimits(r.stage===Fn.length-1?1.4:2.4,r.stage===0?22:16))}),this.bindPointer(),this.bindContextLoss(),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.sound.enabled&&this.sound.disable()}),this.applyQuality(this.quality.current.dprCap,this.quality.current.shadow),this.resize(),this.exposeDebug()}renderer;world;director;rig;journey=new gy;ui;quality;sound=new vy;raycaster=new wv;pointer=new q;tmp=new T;machineTime=0;last=performance.now();raf=0;running=!1;frameCount=0;frameWaiters=[];hotspots=[];down=null;intro=!0;exposure=1;start(){if(this.running)return;this.running=!0,this.last=performance.now();const t=e=>{this.running&&(this.raf=requestAnimationFrame(t),this.frame(e))};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}leaveIntro(){this.intro&&(this.intro=!1,this.ui.hideIntro())}setTorch(t){t&&this.journey.state.stage!==2||(this.director.torchMode=t,t||(this.director.manualTorch=null),t&&this.journey.pause())}async toggleSound(){this.sound.enabled?await this.sound.disable():await this.sound.enable()}frame(t){const e=t-this.last;this.last=t;const n=Math.min(e/1e3,.1);this.quality.sample(e);const s=this.journey.tick(n),r=this.journey.state.playing?s:n*.25;this.machineTime+=r;const o=this.journey.state,a=this.director.apply(o.stage,o.progress,this.machineTime,r);this.exposure=this.director.lastExposure,this.sound.setMix(a.sound),this.rig.update(n,a.shot,Mi.stationOf(o.stage)),this.renderer.info.reset(),this.renderer.render(this.world.scene,this.rig.camera),this.projectHotspots(a.hotspots),this.pushUi(),this.frameCount++,this.frameWaiters=this.frameWaiters.filter(c=>this.frameCount>=c.at?(c.resolve(),!1):!0)}pushUi(){const t=this.journey.state;this.ui.update({...t,phase:wt(Ch(t.stage,t.progress)),cameraMode:this.rig.mode,torch:this.director.torchMode,sound:this.sound.enabled,lightMode:this.director.lightMode,compare:this.director.compare})}projectHotspots(t){const e=this.canvas.clientWidth,n=this.canvas.clientHeight,s=this.intro||this.director.torchMode;this.hotspots=t.map(r=>{this.tmp.copy(r.world).project(this.rig.camera);const o=(this.tmp.x*.5+.5)*e,a=(-this.tmp.y*.5+.5)*n,c=!s&&this.tmp.z<1&&o>8&&o<e-8&&a>64&&a<n-8;return{id:r.id,x:o,y:a,visible:c}}),this.ui.setHotspots(this.hotspots)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.current.dprCap)),this.renderer.setSize(t,e,!1),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.rig.resize(t,e)}applyQuality(t,e){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.world.studio.setShadowMapSize(e)}setRay(t){const e=this.canvas.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.rig.camera)}aimTorch(){const t=this.world.pieces.intact,e=this.raycaster.intersectObject(t,!1)[0];e?.face&&(this.director.manualTorch={point:t.worldToLocal(e.point.clone()),normal:e.face.normal.clone()})}bindPointer(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.down={x:e.clientX,y:e.clientY,t:performance.now()}}),t.addEventListener("pointermove",e=>{!this.director.torchMode||e.buttons||(this.setRay(e),this.aimTorch())}),t.addEventListener("pointerup",e=>{const n=this.down;if(this.down=null,!n||Math.hypot(e.clientX-n.x,e.clientY-n.y)>6||performance.now()-n.t>600)return;if(this.setRay(e),this.director.torchMode){this.aimTorch();return}const s=this.raycaster.intersectObjects(this.world.pickables,!0).find(o=>o.object.visible);if(!s){this.ui.closePopover();return}let r;for(let o=s.object;o&&!r;o=o.parent)r=o.userData.info;if(r==="stone"&&s.face){const o=s.object.geometry.getAttribute("rim");r=(o.getX(s.face.a)+o.getX(s.face.b)+o.getX(s.face.c))/3<.5&&this.journey.state.stage>=3?"window":"rind"}r&&this.ui.showInfo(r,e.clientX,e.clientY)})}bindContextLoss(){this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.stop(),this.ui.showFallback(wt("fallback.lost.title"),wt("fallback.lost.body"),()=>location.reload())}),this.canvas.addEventListener("webglcontextrestored",()=>{this.ui.hideFallback(),this.world.studio.setShadowMapSize(this.quality.current.shadow),this.start()})}exposeDebug(){window.__jade={state:()=>{const t=this.journey.state;return{...t,stageId:Fn[t.stage].id,cameraMode:this.rig.mode,torch:this.director.torchMode,exposure:Math.round(this.exposure*100)/100,sound:this.sound.enabled,lightMode:this.director.lightMode,compare:this.director.compare,quality:this.quality.current.name,dpr:this.renderer.getPixelRatio(),frames:this.frameCount,avgFrameMs:Math.round(this.quality.avgFrameMs*10)/10,phase:wt(Ch(t.stage,t.progress)),intro:this.intro,render:{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:this.renderer.info.programs?.length??0}}},start:()=>{this.leaveIntro(),this.journey.startJourney()},goTo:(t,e=!1)=>{this.leaveIntro(),this.journey.goTo(t,e)},restore:t=>{this.leaveIntro(),this.journey.restore(t)},seek:t=>{this.leaveIntro(),this.journey.seek(t)},play:()=>this.journey.play(),pause:()=>this.journey.pause(),setSpeed:t=>this.journey.setSpeed(t),torch:t=>this.setTorch(t),lightMode:t=>{this.director.lightMode=t},compare:t=>{this.director.compare=t},resetView:()=>this.rig.reset(!0),hotspots:()=>this.hotspots.map(t=>({...t})),frames:t=>new Promise(e=>this.frameWaiters.push({at:this.frameCount+t,resolve:e})),freeze:async(t=2)=>{this.running||this.start(),await new Promise(e=>this.frameWaiters.push({at:this.frameCount+t,resolve:e})),this.stop(),this.renderer.getContext().finish()},unfreeze:()=>this.start(),field:(t,e,n)=>On.field.set(t,e,n),cull:t=>{this.director.cullStations=t},look:t=>(this.world.studio.setLook(t),this.world.studio.look),shadowCovers:()=>this.world.studio.shadowCovers(Mi.stationOf(this.journey.state.stage).clone().setY(.8))}}}function au(i,t){const e=document.createElement("div");e.className="fallback",e.setAttribute("role","alert"),e.innerHTML=`<div class="card"><div class="kicker">JADE GENESIS</div><h1>${i}</h1><p>${t}</p></div>`,document.body.append(e)}const cu=document.getElementById("stage"),My=document.getElementById("ui");if(!xy())cu.remove(),au(wt("fallback.noWebgl.title"),wt("fallback.noWebgl.body")),document.documentElement.dataset.webgl="unavailable";else try{new yy(cu,My).start(),document.documentElement.dataset.webgl="ready"}catch(i){console.error(i),au(wt("fallback.error.title"),wt("fallback.error.body")),document.documentElement.dataset.webgl="error"}
