(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ha="170",os={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,yc=1,fu=2,ch=1,lh=2,Bn=3,ci=0,Be=1,qe=2,oi=0,as=1,Sc=2,bc=3,wc=4,pu=5,Si=100,mu=101,gu=102,_u=103,vu=104,xu=200,Mu=201,yu=202,Su=203,Zo=204,Ko=205,bu=206,wu=207,Eu=208,Tu=209,Au=210,Ru=211,Cu=212,Pu=213,Lu=214,Qo=0,ta=1,ea=2,hs=3,na=4,ia=5,sa=6,ra=7,hh=0,Du=1,Iu=2,ai=0,Uu=1,Nu=2,Fu=3,uh=4,Ou=5,Bu=6,zu=7,dh=300,us=301,ds=302,oa=303,aa=304,Wr=306,ca=1e3,wi=1001,la=1002,en=1003,ku=1004,ir=1005,bn=1006,to=1007,Ei=1008,Wn=1009,fh=1010,ph=1011,Ys=1012,Va=1013,Ri=1014,wn=1015,Ks=1016,Wa=1017,Xa=1018,fs=1020,mh=35902,gh=1021,_h=1022,xn=1023,vh=1024,xh=1025,cs=1026,ps=1027,qa=1028,Ya=1029,Mh=1030,ja=1031,$a=1033,Ir=33776,Ur=33777,Nr=33778,Fr=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37808,va=37809,xa=37810,Ma=37811,ya=37812,Sa=37813,ba=37814,wa=37815,Ea=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,Or=36492,La=36494,Da=36495,yh=36283,Ia=36284,Ua=36285,Na=36286,Gu=3200,Hu=3201,Sh=0,Vu=1,si="",Ke="srgb",gs="srgb-linear",Xr="linear",ce="srgb",Ni=7680,Ec=519,Wu=512,Xu=513,qu=514,bh=515,Yu=516,ju=517,$u=518,Ju=519,Fa=35044,Tc="300 es",zn=2e3,zr=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ac=1234567;const Hs=Math.PI/180,js=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Ja(i,t){return(i%t+t)%t}function Zu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ku(i,t,e){return i!==t?(e-i)/(t-i):0}function Vs(i,t,e){return(1-e)*i+e*t}function Qu(i,t,e,n){return Vs(i,t,1-Math.exp(-e*n))}function td(i,t=1){return t-Math.abs(Ja(i,t*2)-t)}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function sd(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function od(i){i!==void 0&&(Ac=i);let t=Ac+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*Hs}function cd(i){return i*js}function ld(i){return(i&i-1)===0&&i!==0}function hd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $s={DEG2RAD:Hs,RAD2DEG:js,generateUUID:kn,clamp:Ee,euclideanModulo:Ja,mapLinear:Zu,inverseLerp:Ku,lerp:Vs,damp:Qu,pingpong:td,smoothstep:ed,smootherstep:nd,randInt:id,randFloat:sd,randFloatSpread:rd,seededRandom:od,degToRad:ad,radToDeg:cd,isPowerOfTwo:ld,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:ae,denormalize:vn};class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],x=s[1],y=s[4],v=s[7],P=s[2],A=s[5],T=s[8];return r[0]=o*_+a*x+c*P,r[3]=o*m+a*y+c*A,r[6]=o*d+a*v+c*T,r[1]=l*_+h*x+u*P,r[4]=l*m+h*y+u*A,r[7]=l*d+h*v+u*T,r[2]=f*_+p*x+g*P,r[5]=f*m+p*y+g*A,r[8]=f*d+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new kt;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){const i=kr("canvas");return i.style.display="block",i}const Rc={};function Bs(i){i in Rc||(Rc[i]=!0,console.warn(i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function md(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:gs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===si?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Cc=[.64,.33,.3,.6,.15,.06],Pc=[.2126,.7152,.0722],Lc=[.3127,.329],Dc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ic=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[gs]:{primaries:Cc,whitePoint:Lc,transfer:Xr,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:Pc,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:Cc,whitePoint:Lc,transfer:ce,toXYZ:Dc,fromXYZ:Ic,luminanceCoefficients:Pc,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let Fi;class _d{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fi===void 0&&(Fi=kr("canvas")),Fi.width=t.width,Fi.height=t.height;const n=Fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(no(s[o].image)):r.push(no(s[o]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class ze extends Li{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=wi,s=wi,r=bn,o=Ei,a=xn,c=Wn,l=ze.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=kn(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ca:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ca:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=dh;ze.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,s=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(p+1)/2,P=(d+1)/2,A=(h+f)/4,T=(u+_)/4,C=(g+m)/4;return y>v&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=T/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),A=Math.atan2(P,d*x);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const v=a*x;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new E,Uc=new nn;class qn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),rr.subVectors(this.max,Ss),Oi.subVectors(t.a,Ss),Bi.subVectors(t.b,Ss),zi.subVectors(t.c,Ss),Jn.subVectors(Bi,Oi),Zn.subVectors(zi,Bi),di.subVectors(Oi,zi);let e=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-di.z,di.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,di.z,0,-di.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-di.y,di.x,0];return!so(e,Oi,Bi,zi,rr)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Oi,Bi,zi,rr))?!1:(or.crossVectors(Jn,Zn),e=[or.x,or.y,or.z],so(e,Oi,Bi,zi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new E,new E,new E,new E,new E,new E,new E,new E],fn=new E,sr=new qn,Oi=new E,Bi=new E,zi=new E,Jn=new E,Zn=new E,di=new E,Ss=new E,rr=new E,or=new E,fi=new E;function so(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fi.fromArray(i,r);const a=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),c=t.dot(fi),l=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sd=new qn,bs=new E,ro=new E;class _s{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(ro)),this.expandByPoint(bs.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new E,oo=new E,ar=new E,Kn=new E,ao=new E,cr=new E,co=new E;class qr{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oo.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(oo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=Kn.dot(this.direction),c=-Kn.dot(ar),l=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oo).addScaledVector(ar,f),p}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){ao.subVectors(e,t),cr.subVectors(n,t),co.crossVectors(ao,cr);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(cr.crossVectors(Kn,cr));if(c<0)return null;const l=a*this.direction.dot(ao.cross(Kn));if(l<0||c+l>o)return null;const h=-a*Kn.dot(co);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),o=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,wd)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Qn.crossVectors(n,je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Qn.crossVectors(n,je)),Qn.normalize(),lr.crossVectors(je,Qn),s[0]=Qn.x,s[4]=lr.x,s[8]=je.x,s[1]=Qn.y,s[5]=lr.y,s[9]=je.y,s[2]=Qn.z,s[6]=lr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],x=n[3],y=n[7],v=n[11],P=n[15],A=s[0],T=s[4],C=s[8],b=s[12],S=s[1],L=s[5],z=s[9],O=s[13],F=s[2],W=s[6],k=s[10],Y=s[14],V=s[3],Q=s[7],ot=s[11],vt=s[15];return r[0]=o*A+a*S+c*F+l*V,r[4]=o*T+a*L+c*W+l*Q,r[8]=o*C+a*z+c*k+l*ot,r[12]=o*b+a*O+c*Y+l*vt,r[1]=h*A+u*S+f*F+p*V,r[5]=h*T+u*L+f*W+p*Q,r[9]=h*C+u*z+f*k+p*ot,r[13]=h*b+u*O+f*Y+p*vt,r[2]=g*A+_*S+m*F+d*V,r[6]=g*T+_*L+m*W+d*Q,r[10]=g*C+_*z+m*k+d*ot,r[14]=g*b+_*O+m*Y+d*vt,r[3]=x*A+y*S+v*F+P*V,r[7]=x*T+y*L+v*W+P*Q,r[11]=x*C+y*z+v*k+P*ot,r[15]=x*b+y*O+v*Y+P*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],x=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,y=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,P=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,A=e*x+n*y+s*v+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=x*T,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*d+n*c*d)*T,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*p-n*c*p)*T,t[4]=y*T,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*T,t[8]=v*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*d+e*a*d)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*T,t[12]=P*T,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,x=c*l,y=c*h,v=c*u,P=n.x,A=n.y,T=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(p-v)*A,s[5]=(1-(f+d))*A,s[6]=(m+x)*A,s[7]=0,s[8]=(g+y)*T,s[9]=(m-x)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),a=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const l=1/r,h=1/o,u=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=zn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===zn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===zr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=zn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,p=(n+s)*h;let g,_;if(a===zn)g=(o+r)*u,_=-2*u;else if(a===zr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ki=new E,pn=new Ft,bd=new E(0,0,0),wd=new E(1,1,1),Qn=new E,lr=new E,je=new E,Nc=new Ft,Fc=new nn;class ln{constructor(t=0,e=0,n=0,s=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Za{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ed=0;const Oc=new E,Gi=new nn,In=new Ft,hr=new E,ws=new E,Td=new E,Ad=new nn,Bc=new E(1,0,0),zc=new E(0,1,0),kc=new E(0,0,1),Gc={type:"added"},Rd={type:"removed"},Hi={type:"childadded",child:null},lo={type:"childremoved",child:null};class ye extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new E,e=new ln,n=new nn,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new kt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(kc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hr.copy(t):hr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ws,hr,this.up):In.lookAt(hr,ws,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(In),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,Td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ye.DEFAULT_UP=new E(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new E,Un=new E,ho=new E,Nn=new E,Vi=new E,Wi=new E,Hc=new E,uo=new E,fo=new E,po=new E,mo=new Zt,go=new Zt,_o=new Zt;class cn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Un.subVectors(n,e),ho.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Un),c=mn.dot(ho),l=Un.dot(Un),h=Un.dot(ho),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mo,r.x),o.addScaledVector(go,r.y),o.addScaledVector(_o,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Un.subVectors(t,e),mn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,n),Wi.subVectors(r,n),uo.subVectors(t,n);const c=Vi.dot(uo),l=Wi.dot(uo);if(c<=0&&l<=0)return e.copy(n);fo.subVectors(t,s);const h=Vi.dot(fo),u=Wi.dot(fo);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vi,o);po.subVectors(t,r);const p=Vi.dot(po),g=Wi.dot(po);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Wi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Hc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Hc,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Vi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},ur={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ja(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vo(o,r,t+1/3),this.g=vo(o,r,t),this.b=vo(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return ee.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ee(Oe.r*255,0,255))*65536+Math.round(Ee(Oe.g*255,0,255))*256+Math.round(Ee(Oe.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Ke){ee.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(ur);const n=Vs(ti.h,ur.h,e),s=Vs(ti.s,ur.s,e),r=Vs(ti.l,ur.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new Ut;Ut.NAMES=Ah;let Cd=0;class Di extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=kn(),this.name="",this.blending=as,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Ko,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends Di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new E,dr=new et;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class Rh extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ch extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pd=0;const on=new Ft,xo=new ye,Xi=new E,$e=new qn,Es=new qn,Le=new E;class Se extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Ch:Rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors($e.min,Es.min),$e.expandByPoint(Le),Le.addVectors($e.max,Es.max),$e.expandByPoint(Le)):($e.expandByPoint(Es.min),$e.expandByPoint(Es.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(Xi.fromBufferAttribute(t,l),Le.add(Xi)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new E,c[C]=new E;const l=new E,h=new E,u=new E,f=new et,p=new et,g=new et,_=new E,m=new E;function d(C,b,S){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(_),a[b].add(_),a[S].add(_),c[C].add(m),c[b].add(m),c[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,b=x.length;C<b;++C){const S=x[C],L=S.start,z=S.count;for(let O=L,F=L+z;O<F;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new E,v=new E,P=new E,A=new E;function T(C){P.fromBufferAttribute(s,C),A.copy(P);const b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(A,b);const L=v.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,L)}for(let C=0,b=x.length;C<b;++C){const S=x[C],L=S.start,z=S.count;for(let O=L,F=L+z;O<F;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new E,r=new E,o=new E,a=new E,c=new E,l=new E,h=new E,u=new E;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Re(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new Ft,pi=new qr,fr=new _s,Wc=new E,pr=new E,mr=new E,gr=new E,Mo=new E,_r=new E,Xc=new E,vr=new E;class Et extends ye{constructor(t=new Se,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){_r.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Mo.fromBufferAttribute(u,t),o?_r.addScaledVector(Mo,h):_r.addScaledVector(Mo.sub(e),h))}e.add(_r)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(fr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(fr,Wc)===null||pi.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Vc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Vc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,P=y;v<P;v+=3){const A=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=xr(this,d,t,n,l,h,u,A,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=xr(this,o,t,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,P=y;v<P;v+=3){const A=v,T=v+1,C=v+2;s=xr(this,d,t,n,l,h,u,A,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const x=m,y=m+1,v=m+2;s=xr(this,o,t,n,l,h,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ld(i,t,e,n,s,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ci,a),c===null)return null;vr.copy(a),vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(vr);return l<e.near||l>e.far?null:{distance:l,point:vr.clone(),object:i}}function xr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,pr),i.getVertexPosition(c,mr),i.getVertexPosition(l,gr);const h=Ld(i,t,e,n,pr,mr,gr,Xc);if(h){const u=new E;cn.getBarycoord(Xc,pr,mr,gr,u),s&&(h.uv=cn.getInterpolatedAttribute(s,a,c,l,u,new et)),r&&(h.uv1=cn.getInterpolatedAttribute(r,a,c,l,u,new et)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new E,materialIndex:0};cn.getNormal(pr,mr,gr,f.normal),h.face=f,h.barycoord=u}return h}class An extends Se{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(_,m,d,x,y,v,P,A,T,C,b){const S=v/T,L=P/C,z=v/2,O=P/2,F=A/2,W=T+1,k=C+1;let Y=0,V=0;const Q=new E;for(let ot=0;ot<k;ot++){const vt=ot*L-O;for(let Pt=0;Pt<W;Pt++){const Yt=Pt*S-z;Q[_]=Yt*x,Q[m]=vt*y,Q[d]=F,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[d]=A>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Pt/T),u.push(1-ot/C),Y+=1}}for(let ot=0;ot<C;ot++)for(let vt=0;vt<T;vt++){const Pt=f+vt+W*ot,Yt=f+vt+W*(ot+1),q=f+(vt+1)+W*(ot+1),tt=f+(vt+1)+W*ot;c.push(Pt,Yt,tt),c.push(Yt,q,tt),V+=6}a.addGroup(p,V,b),p+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=ms(i[e]);for(const s in n)t[s]=n[s]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ph(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Id={clone:ms,merge:He};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lh extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new E,qc=new et,Yc=new et;class Qe extends Lh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,qc,Yc),e.subVectors(Yc,qc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const qi=-90,Yi=1;class Fd extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(qi,Yi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(qi,Yi,t,e);r.layers=this.layers,this.add(r);const o=new Qe(qi,Yi,t,e);o.layers=this.layers,this.add(o);const a=new Qe(qi,Yi,t,e);a.layers=this.layers,this.add(a);const c=new Qe(qi,Yi,t,e);c.layers=this.layers,this.add(c);const l=new Qe(qi,Yi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dh extends ze{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Od extends Ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:oi});r.uniforms.tEquirect.value=e;const o=new Et(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=bn),new Fd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const yo=new E,Bd=new E,zd=new kt;class yn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new _s,Mr=new E;class Ka{constructor(t=new yn,e=new yn,n=new yn,s=new yn,r=new yn,o=new yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,f-l,m-p,v-d).normalize(),n[1].setComponents(c+r,f+l,m+p,v+d).normalize(),n[2].setComponents(c+o,f+h,m+g,v+x).normalize(),n[3].setComponents(c-o,f-h,m-g,v-x).normalize(),n[4].setComponents(c-a,f-u,m-_,v-y).normalize(),e===zn)n[5].setComponents(c+a,f+u,m+_,v+y).normalize();else if(e===zr)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class hi extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const x=d*f-o;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<a;x++){const y=x+l*d,v=x+l*(d+1),P=x+1+l*(d+1),A=x+1+l*d;p.push(y,v,A),p.push(v,P,A)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$d=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ff=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,kf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_p=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tp=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`#include <common>
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
}`,jp=`#if DEPTH_PACKING == 3200
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
}`,$p=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 diffuse;
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
}`,im=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,om=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,lm=`#define PHONG
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
}`,hm=`#define PHONG
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
}`,um=`#define STANDARD
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
}`,dm=`#define STANDARD
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
}`,fm=`#define TOON
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
}`,pm=`#define TOON
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
}`,mm=`uniform float size;
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
}`,gm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Gd,alphahash_pars_fragment:Hd,alphamap_fragment:Vd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:jd,batching_pars_vertex:$d,batching_vertex:Jd,begin_vertex:Zd,beginnormal_vertex:Kd,bsdfs:Qd,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:rf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:cf,color_pars_vertex:lf,color_vertex:hf,common:uf,cube_uv_reflection_fragment:df,defaultnormal_vertex:ff,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:_f,colorspace_fragment:vf,colorspace_pars_fragment:xf,envmap_fragment:Mf,envmap_common_pars_fragment:yf,envmap_pars_fragment:Sf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Uf,envmap_vertex:wf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Af,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_pars_fragment:Pf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Df,lights_pars_begin:If,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Of,lights_phong_pars_fragment:Bf,lights_physical_fragment:zf,lights_physical_pars_fragment:kf,lights_fragment_begin:Gf,lights_fragment_maps:Hf,lights_fragment_end:Vf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:jf,map_pars_fragment:$f,map_particle_fragment:Jf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Qf,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:op,normal_pars_fragment:ap,normal_pars_vertex:cp,normal_vertex:lp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:dp,clearcoat_pars_fragment:fp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:_p,project_vertex:vp,dithering_fragment:xp,dithering_pars_fragment:Mp,roughnessmap_fragment:yp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:bp,shadowmap_pars_vertex:wp,shadowmap_vertex:Ep,shadowmask_pars_fragment:Tp,skinbase_vertex:Ap,skinning_pars_vertex:Rp,skinning_vertex:Cp,skinnormal_vertex:Pp,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Up,transmission_fragment:Np,transmission_pars_fragment:Fp,uv_pars_fragment:Op,uv_pars_vertex:Bp,uv_vertex:zp,worldpos_vertex:kp,background_vert:Gp,background_frag:Hp,backgroundCube_vert:Vp,backgroundCube_frag:Wp,cube_vert:Xp,cube_frag:qp,depth_vert:Yp,depth_frag:jp,distanceRGBA_vert:$p,distanceRGBA_frag:Jp,equirect_vert:Zp,equirect_frag:Kp,linedashed_vert:Qp,linedashed_frag:tm,meshbasic_vert:em,meshbasic_frag:nm,meshlambert_vert:im,meshlambert_frag:sm,meshmatcap_vert:rm,meshmatcap_frag:om,meshnormal_vert:am,meshnormal_frag:cm,meshphong_vert:lm,meshphong_frag:hm,meshphysical_vert:um,meshphysical_frag:dm,meshtoon_vert:fm,meshtoon_frag:pm,points_vert:mm,points_frag:gm,shadow_vert:_m,shadow_frag:vm,sprite_vert:xm,sprite_frag:Mm},rt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Sn={basic:{uniforms:He([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:He([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:He([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:He([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:He([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:He([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:He([rt.points,rt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:He([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:He([rt.common,rt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:He([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:He([rt.sprite,rt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:He([rt.common,rt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:He([rt.lights,rt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Sn.physical={uniforms:He([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const yr={r:0,b:0,g:0},gi=new ln,ym=new Ft;function Sm(i,t,e,n,s,r,o){const a=new Ut(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1;const v=g(x);v===null?d(a,c):v&&v.isColor&&(d(v,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Wr)?(h===void 0&&(h=new Et(new An(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:ms(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ym.makeRotationFromEuler(gi)),h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Et(new hi(2,2),new li({name:"BackgroundMaterial",uniforms:ms(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,y){x.getRGB(yr,Ph(i)),n.buffers.color.setClear(yr.r,yr.g,yr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(a,c)},render:_,addToRenderList:m}}function bm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,z,O,F){let W=!1;const k=u(O,z,L);r!==k&&(r=k,l(r.object)),W=p(S,O,z,F),W&&g(S,O,z,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(S,L,z,O),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,z){const O=z.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let W=F[L.id];W===void 0&&(W={},F[L.id]=W);let k=W[O];return k===void 0&&(k=f(c()),W[O]=k),k}function f(S){const L=[],z=[],O=[];for(let F=0;F<e;F++)L[F]=0,z[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,L,z,O){const F=r.attributes,W=L.attributes;let k=0;const Y=z.getAttributes();for(const V in Y)if(Y[V].location>=0){const ot=F[V];let vt=W[V];if(vt===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(vt=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(vt=S.instanceColor)),ot===void 0||ot.attribute!==vt||vt&&ot.data!==vt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(S,L,z,O){const F={},W=L.attributes;let k=0;const Y=z.getAttributes();for(const V in Y)if(Y[V].location>=0){let ot=W[V];ot===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor));const vt={};vt.attribute=ot,ot&&ot.data&&(vt.data=ot.data),F[V]=vt,k++}r.attributes=F,r.attributesNum=k,r.index=O}function _(){const S=r.newAttributes;for(let L=0,z=S.length;L<z;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const z=r.newAttributes,O=r.enabledAttributes,F=r.attributeDivisors;z[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),F[S]!==L&&(i.vertexAttribDivisor(S,L),F[S]=L)}function x(){const S=r.newAttributes,L=r.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==S[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function y(S,L,z,O,F,W,k){k===!0?i.vertexAttribIPointer(S,L,z,F,W):i.vertexAttribPointer(S,L,z,O,F,W)}function v(S,L,z,O){_();const F=O.attributes,W=z.getAttributes(),k=L.defaultAttributeValues;for(const Y in W){const V=W[Y];if(V.location>=0){let Q=F[Y];if(Q===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const ot=Q.normalized,vt=Q.itemSize,Pt=t.get(Q);if(Pt===void 0)continue;const Yt=Pt.buffer,q=Pt.type,tt=Pt.bytesPerElement,gt=q===i.INT||q===i.UNSIGNED_INT||Q.gpuType===Va;if(Q.isInterleavedBufferAttribute){const st=Q.data,Rt=st.stride,Dt=Q.offset;if(st.isInstancedInterleavedBuffer){for(let Xt=0;Xt<V.locationSize;Xt++)d(V.location+Xt,st.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Xt=0;Xt<V.locationSize;Xt++)m(V.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Xt=0;Xt<V.locationSize;Xt++)y(V.location+Xt,vt/V.locationSize,q,ot,Rt*tt,(Dt+vt/V.locationSize*Xt)*tt,gt)}else{if(Q.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)d(V.location+st,Q.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let st=0;st<V.locationSize;st++)y(V.location+st,vt/V.locationSize,q,ot,vt*tt,vt/V.locationSize*st*tt,gt)}}else if(k!==void 0){const ot=k[Y];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(V.location,ot);break;case 3:i.vertexAttrib3fv(V.location,ot);break;case 4:i.vertexAttrib4fv(V.location,ot);break;default:i.vertexAttrib1fv(V.location,ot)}}}}x()}function P(){C();for(const S in n){const L=n[S];for(const z in L){const O=L[z];for(const F in O)h(O[F].object),delete O[F];delete L[z]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const z in L){const O=L[z];for(const F in O)h(O[F].object),delete O[F];delete L[z]}delete n[S.id]}function T(S){for(const L in n){const z=n[L];if(z[S.id]===void 0)continue;const O=z[S.id];for(const F in O)h(O[F].object),delete O[F];delete z[S.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function wm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function Tm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new yn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let v=d.clippingState||null;c.value=v,v=h(g,f,y,p);for(let P=0;P!==y;++P)v[P]=e[P];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Am(i){let t=new WeakMap;function e(o,a){return a===oa?o.mapping=us:a===aa&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===oa||a===aa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Uh extends Lh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,jc=[.125,.215,.35,.446,.526,.582],bi=20,So=new Uh,$c=new Ut;let bo=null,wo=0,Eo=0,To=!1;const yi=(1+Math.sqrt(5))/2,ji=1/yi,Jc=[new E(-yi,ji,0),new E(yi,ji,0),new E(-ji,0,yi),new E(ji,0,yi),new E(0,yi,-ji),new E(0,yi,ji),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Oa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){bo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bo,wo,Eo),this._renderer.xr.enabled=To,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bo=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Eo=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:Ks,format:xn,colorSpace:gs,depthBuffer:!1},s=Zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rm(r)),this._blurMaterial=Cm(r,t,e)}return s}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,So)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($c),h.toneMapping=ai,h.autoClear=!1;const p=new Ii({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Et(new An,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy($c),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):x===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const y=this._cubeSize;Sr(s,x*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,So)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jc[(s-r-1)%Jc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Et(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*bi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const d=[];let x=0;for(let T=0;T<bi;++T){const C=T/_,b=Math.exp(-C*C/2);d.push(b),T===0?x+=b:T<m&&(x+=2*b)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[s],P=3*v*(s>y-ss?s-y+ss:0),A=4*(this._cubeSize-v);Sr(e,P,A,3*v,2*v),c.setRenderTarget(e),c.render(u,So)}}function Rm(i){const t=[],e=[],n=[];let s=i;const r=i-ss+1+jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ss?c=jc[o-i+ss-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(b,_*g*A),y.set(f,m*g*A);const S=[A,A,A,A,A,A];v.set(S,d*g*A)}const P=new Se;P.setAttribute("position",new Re(x,_)),P.setAttribute("uv",new Re(y,m)),P.setAttribute("faceIndex",new Re(v,d)),t.push(P),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zc(i,t,e){const n=new Ci(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cm(i,t,e){const n=new Float32Array(bi),s=new E(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Kc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Qc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function Pm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===oa||c===aa,h=c===us||c===ds;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Oa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Oa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,v=x.length;y<v;y+=3){const P=x[y+0],A=x[y+1],T=x[y+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const P=y+0,A=y+1,T=y+2;f.push(P,A,A,T,T,P)}}else return;const m=new(wh(f)?Ch:Rh)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Im(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=p[x]*_[x];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Um(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nm(i,t,e){const n=new WeakMap,s=new Zt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*A*4*u),C=new Th(T,P,A,u);C.type=wn,C.needsUpdate=!0;const b=v*4;for(let L=0;L<u;L++){const z=d[L],O=x[L],F=y[L],W=P*A*4*L;for(let k=0;k<z.count;k++){const Y=k*b;g===!0&&(s.fromBufferAttribute(z,k),T[W+Y+0]=s.x,T[W+Y+1]=s.y,T[W+Y+2]=s.z,T[W+Y+3]=0),_===!0&&(s.fromBufferAttribute(O,k),T[W+Y+4]=s.x,T[W+Y+5]=s.y,T[W+Y+6]=s.z,T[W+Y+7]=0),m===!0&&(s.fromBufferAttribute(F,k),T[W+Y+8]=s.x,T[W+Y+9]=s.y,T[W+Y+10]=s.z,T[W+Y+11]=F.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new et(P,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fm(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Nh extends ze{constructor(t,e,n,s,r,o,a,c,l,h=cs){if(h!==cs&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===cs&&(n=Ri),n===void 0&&h===ps&&(n=fs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fh=new ze,tl=new Nh(1,1),Oh=new Th,Bh=new yd,zh=new Dh,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function vs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=el[s];if(r===void 0&&(r=new Float32Array(s),el[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yr(i,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Om(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function Gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),Pe(e,n)}}function Hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),Pe(e,n)}}function Vm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),Pe(e,n)}}function Wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function Ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function Zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=bh,r=tl):r=Fh,e.setTexture2D(t||r,s)}function Qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Bh,s)}function t0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zh,s)}function e0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Oh,s)}function n0(i){switch(i){case 5126:return Om;case 35664:return Bm;case 35665:return zm;case 35666:return km;case 35674:return Gm;case 35675:return Hm;case 35676:return Vm;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return jm;case 36294:return $m;case 36295:return Jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return e0}}function i0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){const e=vs(t,this.size,2);i.uniform2fv(this.addr,e)}function r0(i,t){const e=vs(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){const e=vs(t,this.size,4);i.uniform4fv(this.addr,e)}function a0(i,t){const e=vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c0(i,t){const e=vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function l0(i,t){const e=vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h0(i,t){i.uniform1iv(this.addr,t)}function u0(i,t){i.uniform2iv(this.addr,t)}function d0(i,t){i.uniform3iv(this.addr,t)}function f0(i,t){i.uniform4iv(this.addr,t)}function p0(i,t){i.uniform1uiv(this.addr,t)}function m0(i,t){i.uniform2uiv(this.addr,t)}function g0(i,t){i.uniform3uiv(this.addr,t)}function _0(i,t){i.uniform4uiv(this.addr,t)}function v0(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fh,r[o])}function x0(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bh,r[o])}function M0(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||zh,r[o])}function y0(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Ce(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Oh,r[o])}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return c0;case 35676:return l0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return v0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return y0}}class b0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=n0(e.type)}}class w0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}}class E0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function T0(i,t,e){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ol(e,l===void 0?new b0(a,i,t):new w0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new E0(a),ol(e,u)),e=u}}}class Br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);T0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function al(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const A0=37297;let R0=0;function C0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const cl=new kt;function P0(i){ee._getMatrix(cl,ee.workingColorSpace,i);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+C0(i.getShaderSource(t),o)}else return s}function L0(i,t){const e=P0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function D0(i,t){let e;switch(t){case Uu:e="Linear";break;case Nu:e="Reinhard";break;case Fu:e="Cineon";break;case uh:e="ACESFilmic";break;case Bu:e="AgX";break;case zu:e="Neutral";break;case Ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new E;function I0(){ee.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function N0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function F0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const O0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(O0,z0)}const B0=new Map;function z0(i,t){let e=Ht[t];if(e===void 0){const n=B0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ba(e)}const k0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dl(i){return i.replace(k0,G0)}function G0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function H0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function V0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function X0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Du:t="ENVMAP_BLENDING_MIX";break;case Iu:t="ENVMAP_BLENDING_ADD";break}return t}function q0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Y0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=H0(e),l=V0(e),h=W0(e),u=X0(e),f=q0(e),p=U0(e),g=N0(r),_=s.createProgram();let m,d,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),d.length>0&&(d+=`
`)):(m=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),d=[fl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ai?D0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,L0("linearToOutputTexel",e.outputColorSpace),I0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=Ba(o),o=hl(o,e),o=ul(o,e),a=Ba(a),a=hl(a,e),a=ul(a,e),o=dl(o),a=dl(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+m+o,v=x+d+a,P=al(s,s.VERTEX_SHADER,y),A=al(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(L){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(P).trim(),F=s.getShaderInfoLog(A).trim();let W=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,A);else{const Y=ll(s,P,"vertex"),V=ll(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+Y+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||F==="")&&(k=!1);k&&(L.diagnostics={runnable:W,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:F,prefix:d}})}s.deleteShader(P),s.deleteShader(A),C=new Br(s,_),b=F0(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,A0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let j0=0;class $0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new J0(t),e.set(t,n)),n}}class J0{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}}function Z0(i,t,e,n,s,r,o){const a=new Za,c=new $0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,S,L,z,O){const F=z.fog,W=O.geometry,k=b.isMeshStandardMaterial?z.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||k),V=Y&&Y.mapping===Wr?Y.image.height:null,Q=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,vt=ot!==void 0?ot.length:0;let Pt=0;W.morphAttributes.position!==void 0&&(Pt=1),W.morphAttributes.normal!==void 0&&(Pt=2),W.morphAttributes.color!==void 0&&(Pt=3);let Yt,q,tt,gt;if(Q){const oe=Sn[Q];Yt=oe.vertexShader,q=oe.fragmentShader}else Yt=b.vertexShader,q=b.fragmentShader,c.update(b),tt=c.getVertexShaderID(b),gt=c.getFragmentShaderID(b);const st=i.getRenderTarget(),Rt=i.state.buffers.depth.getReversed(),Dt=O.isInstancedMesh===!0,Xt=O.isBatchedMesh===!0,ge=!!b.map,Qt=!!b.matcap,Me=!!Y,N=!!b.aoMap,sn=!!b.lightMap,jt=!!b.bumpMap,$t=!!b.normalMap,Ct=!!b.displacementMap,de=!!b.emissiveMap,Tt=!!b.metalnessMap,R=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,$=b.dispersion>0,Z=b.iridescence>0,j=b.sheen>0,St=b.transmission>0,ct=M&&!!b.anisotropyMap,dt=B&&!!b.clearcoatMap,te=B&&!!b.clearcoatNormalMap,nt=B&&!!b.clearcoatRoughnessMap,ft=Z&&!!b.iridescenceMap,Lt=Z&&!!b.iridescenceThicknessMap,It=j&&!!b.sheenColorMap,pt=j&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,Gt=!!b.specularColorMap,he=!!b.specularIntensityMap,D=St&&!!b.transmissionMap,at=St&&!!b.thicknessMap,X=!!b.gradientMap,J=!!b.alphaMap,ut=b.alphaTest>0,lt=!!b.alphaHash,Bt=!!b.extensions;let xe=ai;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Ne={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:q,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Xt,batchingColor:Xt&&O._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&O.instanceColor!==null,instancingMorph:Dt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:gs,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:Qt,envMap:Me,envMapMode:Me&&Y.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:sn,bumpMap:jt,normalMap:$t,displacementMap:f&&Ct,emissiveMap:de,normalMapObjectSpace:$t&&b.normalMapType===Vu,normalMapTangentSpace:$t&&b.normalMapType===Sh,metalnessMap:Tt,roughnessMap:R,anisotropy:M,anisotropyMap:ct,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:te,clearcoatRoughnessMap:nt,dispersion:$,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:Lt,sheen:j,sheenColorMap:It,sheenRoughnessMap:pt,specularMap:Jt,specularColorMap:Gt,specularIntensityMap:he,transmission:St,transmissionMap:D,thicknessMap:at,gradientMap:X,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:lt,combine:b.combine,mapUv:ge&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:sn&&_(b.lightMap.channel),bumpMapUv:jt&&_(b.bumpMap.channel),normalMapUv:$t&&_(b.normalMap.channel),displacementMapUv:Ct&&_(b.displacementMap.channel),emissiveMapUv:de&&_(b.emissiveMap.channel),metalnessMapUv:Tt&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:dt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(b.sheenRoughnessMap.channel),specularMapUv:Jt&&_(b.specularMap.channel),specularColorMapUv:Gt&&_(b.specularColorMap.channel),specularIntensityMapUv:he&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:at&&_(b.thicknessMap.channel),alphaMapUv:J&&_(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($t||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(ge||J),fog:!!F,useFog:b.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&ee.getTransfer(b.map.colorSpace)===ce,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&ee.getTransfer(b.emissiveMap.colorSpace)===ce,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qe,flipSided:b.side===Be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function d(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)S.push(L),S.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(S,b),y(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function x(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function y(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=g[b.type];let L;if(S){const z=Sn[S];L=Id.clone(z.uniforms)}else L=b.uniforms;return L}function P(b,S){let L;for(let z=0,O=h.length;z<O;z++){const F=h[z];if(F.cacheKey===S){L=F,++L.usedTimes;break}}return L===void 0&&(L=new Y0(i,S,b,r),h.push(L)),L}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function T(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function K0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ml(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Q0),n.length>1&&n.sort(f||pl),s.length>1&&s.sort(f||pl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function tg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ml,i.set(n,[o])):s>=r.length?(o=new ml,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Ut};break;case"SpotLight":e={position:new E,direction:new E,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ig=0;function sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rg(i){const t=new eg,e=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const s=new E,r=new Ft,o=new Ft;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,x=0,y=0,v=0,P=0,A=0,T=0;l.sort(sg);for(let b=0,S=l.length;b<S;b++){const L=l[b],z=L.color,O=L.intensity,F=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*O,u+=z.g*O,f+=z.b*O;else if(L.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(L.sh.coefficients[k],O);T++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Y=L.shadow,V=e.get(L);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=L.shadow.matrix,x++}n.directional[p]=k,p++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(z).multiplyScalar(O),k.distance=F,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,n.spot[_]=k;const Y=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,Y.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=W,v++}_++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(z).multiplyScalar(O),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const Y=L.shadow,V=e.get(L);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,y++}n.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(O),k.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[d]=k,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=T,n.version=ig++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,x=l.length;d<x;d++){const y=l[d];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function gl(i){const t=new rg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function og(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gl(i),t.set(s,[a])):r>=o.length?(a=new gl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ag extends Di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cg extends Di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
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
}`;function ug(i,t,e){let n=new Ka;const s=new et,r=new et,o=new Zt,a=new ag({depthPacking:Hu}),c=new cg,l={},h=e.maxTextureSize,u={[ci]:Be,[Be]:ci,[qe]:qe},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:lg,fragmentShader:hg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let d=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),z=i.state;z.setBlending(oi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=d!==Bn&&this.type===Bn,F=d===Bn&&this.type!==Bn;for(let W=0,k=A.length;W<k;W++){const Y=A[W],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();if(s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||O===!0||F===!0){const vt=this.type!==Bn?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(s.x,s.y,vt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ot=V.getViewportCount();for(let vt=0;vt<ot;vt++){const Pt=V.getViewport(vt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),z.viewport(o),V.updateMatrices(Y,vt),n=V.getFrustum(),v(T,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&x(V,C),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(b,S,L)};function x(A,T){const C=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,C,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,C,p,_,null)}function y(A,T,C,b){let S=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=S.uuid,O=T.uuid;let F=l[z];F===void 0&&(F={},l[z]=F);let W=F[O];W===void 0&&(W=S.clone(),F[O]=W,T.addEventListener("dispose",P)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,b===Bn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=C}return S}function v(A,T,C,b,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const O=t.update(A),F=A.material;if(Array.isArray(F)){const W=O.groups;for(let k=0,Y=W.length;k<Y;k++){const V=W[k],Q=F[V.materialIndex];if(Q&&Q.visible){const ot=y(A,Q,b,S);A.onBeforeShadow(i,A,T,C,O,ot,V),i.renderBufferDirect(C,null,O,ot,A,V),A.onAfterShadow(i,A,T,C,O,ot,V)}}}else if(F.visible){const W=y(A,F,b,S);A.onBeforeShadow(i,A,T,C,O,W,null),i.renderBufferDirect(C,null,O,W,A,null),A.onAfterShadow(i,A,T,C,O,W,null)}}const z=A.children;for(let O=0,F=z.length;O<F;O++)v(z[O],T,C,b,S)}function P(A){A.target.removeEventListener("dispose",P);for(const C in l){const b=l[C],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const dg={[Qo]:ta,[ea]:sa,[na]:ra,[hs]:ia,[ta]:Qo,[sa]:ea,[ra]:na,[ia]:hs};function fg(i,t){function e(){let D=!1;const at=new Zt;let X=null;const J=new Zt(0,0,0,0);return{setMask:function(ut){X!==ut&&!D&&(i.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){D=ut},setClear:function(ut,lt,Bt,xe,Ne){Ne===!0&&(ut*=xe,lt*=xe,Bt*=xe),at.set(ut,lt,Bt,xe),J.equals(at)===!1&&(i.clearColor(ut,lt,Bt,xe),J.copy(at))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,X=null,J=null,ut=null;return{setReversed:function(lt){if(at!==lt){const Bt=t.get("EXT_clip_control");at?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const xe=ut;ut=null,this.setClear(xe)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?st(i.DEPTH_TEST):Rt(i.DEPTH_TEST)},setMask:function(lt){X!==lt&&!D&&(i.depthMask(lt),X=lt)},setFunc:function(lt){if(at&&(lt=dg[lt]),J!==lt){switch(lt){case Qo:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ut!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),ut=lt)},reset:function(){D=!1,X=null,J=null,ut=null,at=!1}}}function s(){let D=!1,at=null,X=null,J=null,ut=null,lt=null,Bt=null,xe=null,Ne=null;return{setTest:function(oe){D||(oe?st(i.STENCIL_TEST):Rt(i.STENCIL_TEST))},setMask:function(oe){at!==oe&&!D&&(i.stencilMask(oe),at=oe)},setFunc:function(oe,un,Cn){(X!==oe||J!==un||ut!==Cn)&&(i.stencilFunc(oe,un,Cn),X=oe,J=un,ut=Cn)},setOp:function(oe,un,Cn){(lt!==oe||Bt!==un||xe!==Cn)&&(i.stencilOp(oe,un,Cn),lt=oe,Bt=un,xe=Cn)},setLocked:function(oe){D=oe},setClear:function(oe){Ne!==oe&&(i.clearStencil(oe),Ne=oe)},reset:function(){D=!1,at=null,X=null,J=null,ut=null,lt=null,Bt=null,xe=null,Ne=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,y=null,v=null,P=null,A=null,T=new Ut(0,0,0),C=0,b=!1,S=null,L=null,z=null,O=null,F=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=Y>=2);let Q=null,ot={};const vt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Yt=new Zt().fromArray(vt),q=new Zt().fromArray(Pt);function tt(D,at,X,J){const ut=new Uint8Array(4),lt=i.createTexture();i.bindTexture(D,lt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<X;Bt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(at+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return lt}const gt={};gt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(hs),jt(!1),$t(yc),st(i.CULL_FACE),N(oi);function st(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Rt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Dt(D,at){return u[D]!==at?(i.bindFramebuffer(D,at),u[D]=at,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Xt(D,at){let X=p,J=!1;if(D){X=f.get(at),X===void 0&&(X=[],f.set(at,X));const ut=D.textures;if(X.length!==ut.length||X[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Bt=ut.length;lt<Bt;lt++)X[lt]=i.COLOR_ATTACHMENT0+lt;X.length=ut.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function ge(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Qt={[Si]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};Qt[_u]=i.MIN,Qt[vu]=i.MAX;const Me={[xu]:i.ZERO,[Mu]:i.ONE,[yu]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[Au]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[bu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Cu]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,at,X,J,ut,lt,Bt,xe,Ne,oe){if(D===oi){_===!0&&(Rt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),D!==pu){if(D!==m||oe!==b){if((d!==Si||v!==Si)&&(i.blendEquation(i.FUNC_ADD),d=Si,v=Si),oe)switch(D){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,P=null,A=null,T.set(0,0,0),C=0,m=D,b=oe}return}ut=ut||at,lt=lt||X,Bt=Bt||J,(at!==d||ut!==v)&&(i.blendEquationSeparate(Qt[at],Qt[ut]),d=at,v=ut),(X!==x||J!==y||lt!==P||Bt!==A)&&(i.blendFuncSeparate(Me[X],Me[J],Me[lt],Me[Bt]),x=X,y=J,P=lt,A=Bt),(xe.equals(T)===!1||Ne!==C)&&(i.blendColor(xe.r,xe.g,xe.b,Ne),T.copy(xe),C=Ne),m=D,b=!1}function sn(D,at){D.side===qe?Rt(i.CULL_FACE):st(i.CULL_FACE);let X=D.side===Be;at&&(X=!X),jt(X),D.blending===as&&D.transparent===!1?N(oi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function $t(D){D!==du?(st(i.CULL_FACE),D!==L&&(D===yc?i.cullFace(i.BACK):D===fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Rt(i.CULL_FACE),L=D}function Ct(D){D!==z&&(k&&i.lineWidth(D),z=D)}function de(D,at,X){D?(st(i.POLYGON_OFFSET_FILL),(O!==at||F!==X)&&(i.polygonOffset(at,X),O=at,F=X)):Rt(i.POLYGON_OFFSET_FILL)}function Tt(D){D?st(i.SCISSOR_TEST):Rt(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+W-1),Q!==D&&(i.activeTexture(D),Q=D)}function M(D,at,X){X===void 0&&(Q===null?X=i.TEXTURE0+W-1:X=Q);let J=ot[X];J===void 0&&(J={type:void 0,texture:void 0},ot[X]=J),(J.type!==D||J.texture!==at)&&(Q!==X&&(i.activeTexture(X),Q=X),i.bindTexture(D,at||gt[D]),J.type=D,J.texture=at)}function B(){const D=ot[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){Yt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function pt(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Jt(D,at){let X=l.get(at);X===void 0&&(X=new WeakMap,l.set(at,X));let J=X.get(D);J===void 0&&(J=i.getUniformBlockIndex(at,D.name),X.set(D,J))}function Gt(D,at){const J=l.get(at).get(D);c.get(at)!==J&&(i.uniformBlockBinding(at,J,D.__bindingPointIndex),c.set(at,J))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,ot={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,x=null,y=null,v=null,P=null,A=null,T=new Ut(0,0,0),C=0,b=!1,S=null,L=null,z=null,O=null,F=null,Yt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Rt,bindFramebuffer:Dt,drawBuffers:Xt,useProgram:ge,setBlending:N,setMaterial:sn,setFlipSided:jt,setCullFace:$t,setLineWidth:Ct,setPolygonOffset:de,setScissorTest:Tt,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:ft,texImage3D:Lt,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:te,texStorage3D:nt,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:dt,scissor:It,viewport:pt,reset:he}}function _l(i,t,e,n){const s=pg(n);switch(e){case gh:return i*t;case vh:return i*t;case xh:return i*t*2;case qa:return i*t/s.components*s.byteLength;case Ya:return i*t/s.components*s.byteLength;case Mh:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case xn:return i*t*4/s.components*s.byteLength;case $a:return i*t*4/s.components*s.byteLength;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Or:case La:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yh:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ua:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pg(i){switch(i){case Wn:case fh:return{byteLength:1,components:1};case Ys:case ph:case Ks:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Ri:case Va:case wn:return{byteLength:4,components:1};case mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):kr("canvas")}function _(R,M,B){let $=1;const Z=Tt(R);if((Z.width>B||Z.height>B)&&($=B/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor($*Z.width),St=Math.floor($*Z.height);u===void 0&&(u=g(j,St));const ct=M?g(j,St):u;return ct.width=j,ct.height=St,ct.getContext("2d").drawImage(R,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+St+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,B,$,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),M===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const St=Z?Xr:ee.getTransfer($);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=St===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(R,M){let B;return R?M===null||M===Ri||M===fs?B=i.DEPTH24_STENCIL8:M===wn?B=i.DEPTH32F_STENCIL8:M===Ys&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===fs?B=i.DEPTH_COMPONENT24:M===wn?B=i.DEPTH_COMPONENT32F:M===Ys&&(B=i.DEPTH_COMPONENT16),B}function P(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==en&&R.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){const M=R.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function T(R){const M=R.target;M.removeEventListener("dispose",T),S(M)}function C(R){const M=n.get(R);if(M.__webglInit===void 0)return;const B=R.source,$=f.get(B);if($){const Z=$[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(R),Object.keys($).length===0&&f.delete(B)}n.remove(R)}function b(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const B=R.source,$=f.get(B);delete $[M.__cacheKey],o.memory.textures--}function S(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Z=0;Z<M.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let $=0,Z=B.length;$<Z;$++){const j=n.get(B[$]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[$])}n.remove(R)}let L=0;function z(){L=0}function O(){const R=L;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const B=n.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,R,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function k(R,M){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function Y(R,M){const B=n.get(R);if(R.version>0&&B.__version!==R.version){q(B,R,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function V(R,M){const B=n.get(R);if(R.version>0&&B.__version!==R.version){tt(B,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const Q={[ca]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},ot={[en]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[ir]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},vt={[Wu]:i.NEVER,[Ju]:i.ALWAYS,[Xu]:i.LESS,[bh]:i.LEQUAL,[qu]:i.EQUAL,[$u]:i.GEQUAL,[Yu]:i.GREATER,[ju]:i.NOTEQUAL};function Pt(R,M){if(M.type===wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===bn||M.magFilter===to||M.magFilter===ir||M.magFilter===Ei||M.minFilter===bn||M.minFilter===to||M.minFilter===ir||M.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ot[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,vt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==ir&&M.minFilter!==Ei||M.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Yt(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const j=F(M);if(j!==R.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[j].usedTimes++;const St=Z[R.__cacheKey];St!==void 0&&(Z[R.__cacheKey].usedTimes--,St.usedTimes===0&&b(M)),R.__cacheKey=j,R.__webglTexture=Z[j].texture}return B}function q(R,M,B){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);const Z=Yt(R,M),j=M.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+B);const St=n.get(j);if(j.version!==St.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const ct=ee.getPrimaries(ee.workingColorSpace),dt=M.colorSpace===si?null:ee.getPrimaries(M.colorSpace),te=M.colorSpace===si||ct===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let nt=_(M.image,!1,s.maxTextureSize);nt=de(M,nt);const ft=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type);let It=y(M.internalFormat,ft,Lt,M.colorSpace,M.isVideoTexture);Pt($,M);let pt;const Jt=M.mipmaps,Gt=M.isVideoTexture!==!0,he=St.__version===void 0||Z===!0,D=j.dataReady,at=P(M,nt);if(M.isDepthTexture)It=v(M.format===ps,M.type),he&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,It,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,It,nt.width,nt.height,0,ft,Lt,null));else if(M.isDataTexture)if(Jt.length>0){Gt&&he&&e.texStorage2D(i.TEXTURE_2D,at,It,Jt[0].width,Jt[0].height);for(let X=0,J=Jt.length;X<J;X++)pt=Jt[X],Gt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,ft,Lt,pt.data):e.texImage2D(i.TEXTURE_2D,X,It,pt.width,pt.height,0,ft,Lt,pt.data);M.generateMipmaps=!1}else Gt?(he&&e.texStorage2D(i.TEXTURE_2D,at,It,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,ft,Lt,nt.data)):e.texImage2D(i.TEXTURE_2D,0,It,nt.width,nt.height,0,ft,Lt,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,Jt[0].width,Jt[0].height,nt.depth);for(let X=0,J=Jt.length;X<J;X++)if(pt=Jt[X],M.format!==xn)if(ft!==null)if(Gt){if(D)if(M.layerUpdates.size>0){const ut=_l(pt.width,pt.height,M.format,M.type);for(const lt of M.layerUpdates){const Bt=pt.data.subarray(lt*ut/pt.data.BYTES_PER_ELEMENT,(lt+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,lt,pt.width,pt.height,1,ft,Bt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,nt.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,It,pt.width,pt.height,nt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,nt.depth,ft,Lt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,It,pt.width,pt.height,nt.depth,0,ft,Lt,pt.data)}else{Gt&&he&&e.texStorage2D(i.TEXTURE_2D,at,It,Jt[0].width,Jt[0].height);for(let X=0,J=Jt.length;X<J;X++)pt=Jt[X],M.format!==xn?ft!==null?Gt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,It,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,ft,Lt,pt.data):e.texImage2D(i.TEXTURE_2D,X,It,pt.width,pt.height,0,ft,Lt,pt.data)}else if(M.isDataArrayTexture)if(Gt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,nt.width,nt.height,nt.depth),D)if(M.layerUpdates.size>0){const X=_l(nt.width,nt.height,M.format,M.type);for(const J of M.layerUpdates){const ut=nt.data.subarray(J*X/nt.data.BYTES_PER_ELEMENT,(J+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,ft,Lt,ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Lt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,nt.width,nt.height,nt.depth,0,ft,Lt,nt.data);else if(M.isData3DTexture)Gt?(he&&e.texStorage3D(i.TEXTURE_3D,at,It,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Lt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,It,nt.width,nt.height,nt.depth,0,ft,Lt,nt.data);else if(M.isFramebufferTexture){if(he)if(Gt)e.texStorage2D(i.TEXTURE_2D,at,It,nt.width,nt.height);else{let X=nt.width,J=nt.height;for(let ut=0;ut<at;ut++)e.texImage2D(i.TEXTURE_2D,ut,It,X,J,0,ft,Lt,null),X>>=1,J>>=1}}else if(Jt.length>0){if(Gt&&he){const X=Tt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,at,It,X.width,X.height)}for(let X=0,J=Jt.length;X<J;X++)pt=Jt[X],Gt?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ft,Lt,pt):e.texImage2D(i.TEXTURE_2D,X,It,ft,Lt,pt);M.generateMipmaps=!1}else if(Gt){if(he){const X=Tt(nt);e.texStorage2D(i.TEXTURE_2D,at,It,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Lt,nt)}else e.texImage2D(i.TEXTURE_2D,0,It,ft,Lt,nt);m(M)&&d($),St.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function tt(R,M,B){if(M.image.length!==6)return;const $=Yt(R,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const j=n.get(Z);if(Z.version!==j.__version||$===!0){e.activeTexture(i.TEXTURE0+B);const St=ee.getPrimaries(ee.workingColorSpace),ct=M.colorSpace===si?null:ee.getPrimaries(M.colorSpace),dt=M.colorSpace===si||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const te=M.isCompressedTexture||M.image[0].isCompressedTexture,nt=M.image[0]&&M.image[0].isDataTexture,ft=[];for(let J=0;J<6;J++)!te&&!nt?ft[J]=_(M.image[J],!0,s.maxCubemapSize):ft[J]=nt?M.image[J].image:M.image[J],ft[J]=de(M,ft[J]);const Lt=ft[0],It=r.convert(M.format,M.colorSpace),pt=r.convert(M.type),Jt=y(M.internalFormat,It,pt,M.colorSpace),Gt=M.isVideoTexture!==!0,he=j.__version===void 0||$===!0,D=Z.dataReady;let at=P(M,Lt);Pt(i.TEXTURE_CUBE_MAP,M);let X;if(te){Gt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Jt,Lt.width,Lt.height);for(let J=0;J<6;J++){X=ft[J].mipmaps;for(let ut=0;ut<X.length;ut++){const lt=X[ut];M.format!==xn?It!==null?Gt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,lt.width,lt.height,It,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,Jt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,0,0,lt.width,lt.height,It,pt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut,Jt,lt.width,lt.height,0,It,pt,lt.data)}}}else{if(X=M.mipmaps,Gt&&he){X.length>0&&at++;const J=Tt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Jt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Gt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ft[J].width,ft[J].height,It,pt,ft[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,ft[J].width,ft[J].height,0,It,pt,ft[J].data);for(let ut=0;ut<X.length;ut++){const Bt=X[ut].image[J].image;Gt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,Bt.width,Bt.height,It,pt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,Jt,Bt.width,Bt.height,0,It,pt,Bt.data)}}else{Gt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,It,pt,ft[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,It,pt,ft[J]);for(let ut=0;ut<X.length;ut++){const lt=X[ut];Gt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,0,0,It,pt,lt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ut+1,Jt,It,pt,lt.image[J])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),j.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function gt(R,M,B,$,Z,j){const St=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),dt=y(B.internalFormat,St,ct,B.colorSpace),te=n.get(M),nt=n.get(B);if(nt.__renderTarget=M,!te.__hasExternalTextures){const ft=Math.max(1,M.width>>j),Lt=Math.max(1,M.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,j,dt,ft,Lt,M.depth,0,St,ct,null):e.texImage2D(Z,j,dt,ft,Lt,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),$t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,nt.__webglTexture,0,jt(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,nt.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const $=M.depthTexture,Z=$&&$.isDepthTexture?$.type:null,j=v(M.stencilBuffer,Z),St=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=jt(M);$t(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,j,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{const $=M.textures;for(let Z=0;Z<$.length;Z++){const j=$[Z],St=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),dt=y(j.internalFormat,St,ct,j.colorSpace),te=jt(M);B&&$t(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,dt,M.width,M.height):$t(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,dt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,dt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Rt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const Z=$.__webglTexture,j=jt(M);if(M.depthTexture.format===cs)$t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===ps)$t(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Dt(R){const M=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),st(M.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(R,M,B){const $=n.get(R);M!==void 0&&gt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(R)}function ge(R){const M=R.texture,B=n.get(R),$=n.get(M);R.addEventListener("dispose",T);const Z=R.textures,j=R.isWebGLCubeRenderTarget===!0,St=Z.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let dt=0;dt<M.mipmaps.length;dt++)B.__webglFramebuffer[ct][dt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<M.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,dt=Z.length;ct<dt;ct++){const te=n.get(Z[ct]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&$t(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<Z.length;ct++){const dt=Z[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const te=r.convert(dt.format,dt.colorSpace),nt=r.convert(dt.type),ft=y(dt.internalFormat,te,nt,dt.colorSpace,R.isXRRenderTarget===!0),Lt=jt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),st(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,M);for(let ct=0;ct<6;ct++)if(M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)gt(B.__webglFramebuffer[ct][dt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,dt);else gt(B.__webglFramebuffer[ct],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,dt=Z.length;ct<dt;ct++){const te=Z[ct],nt=n.get(te);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Pt(i.TEXTURE_2D,te),gt(B.__webglFramebuffer,R,te,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(te)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),Pt(ct,M),M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)gt(B.__webglFramebuffer[dt],R,M,i.COLOR_ATTACHMENT0,ct,dt);else gt(B.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ct,0);m(M)&&d(ct),e.unbindTexture()}R.depthBuffer&&Dt(R)}function Qt(R){const M=R.textures;for(let B=0,$=M.length;B<$;B++){const Z=M[B];if(m(Z)){const j=x(R),St=n.get(Z).__webglTexture;e.bindTexture(j,St),d(j),e.unbindTexture()}}}const Me=[],N=[];function sn(R){if(R.samples>0){if($t(R)===!1){const M=R.textures,B=R.width,$=R.height;let Z=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),ct=M.length>1;if(ct)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const te=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,$,0,0,B,$,Z,i.NEAREST),c===!0&&(Me.length=0,N.length=0,Me.push(i.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(j),N.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,St.__webglColorRenderbuffer[dt]);const te=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function jt(R){return Math.min(s.maxSamples,R.samples)}function $t(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ct(R){const M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function de(R,M){const B=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==gs&&B!==si&&(ee.getTransfer(B)===ce?($!==xn||Z!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Xt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=$t}function gg(i,t){function e(n,s=si){let r;const o=ee.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===Ks)return i.HALF_FLOAT;if(n===gh)return i.ALPHA;if(n===_h)return i.RGB;if(n===xn)return i.RGBA;if(n===vh)return i.LUMINANCE;if(n===xh)return i.LUMINANCE_ALPHA;if(n===cs)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===qa)return i.RED;if(n===Ya)return i.RED_INTEGER;if(n===Mh)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Ir||n===Ur||n===Nr||n===Fr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ir)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===ba||n===wa||n===Ea||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Or||n===La||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Or)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yh||n===Ia||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Or)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class _g extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Wt extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
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

}`;class yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:xg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sg extends Li{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=new yg,m=e.getContextAttributes();let d=null,x=null;const y=[],v=[],P=new et;let A=null;const T=new Qe;T.viewport=new Zt;const C=new Qe;C.viewport=new Zt;const b=[T,C],S=new _g;let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=y[q];return tt===void 0&&(tt=new Ro,y[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=y[q];return tt===void 0&&(tt=new Ro,y[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=y[q];return tt===void 0&&(tt=new Ro,y[q]=tt),tt.getHandSpace()};function O(q){const tt=v.indexOf(q.inputSource);if(tt===-1)return;const gt=y[tt];gt!==void 0&&(gt.update(q.inputSource,q.frame,l||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let q=0;q<y.length;q++){const tt=v[q];tt!==null&&(v[q]=null,y[q].disconnect(tt))}L=null,z=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,x=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ci(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,gt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?ps:cs,gt=m.stencil?fs:Ri);const Rt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ci(f.textureWidth,f.textureHeight,{format:xn,type:Wn,depthTexture:new Nh(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(q){for(let tt=0;tt<q.removed.length;tt++){const gt=q.removed[tt],st=v.indexOf(gt);st>=0&&(v[st]=null,y[st].disconnect(gt))}for(let tt=0;tt<q.added.length;tt++){const gt=q.added[tt];let st=v.indexOf(gt);if(st===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=v.length){v.push(gt),st=Dt;break}else if(v[Dt]===null){v[Dt]=gt,st=Dt;break}if(st===-1)break}const Rt=y[st];Rt&&Rt.connect(gt)}}const k=new E,Y=new E;function V(q,tt,gt){k.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const st=k.distanceTo(Y),Rt=tt.projectionMatrix.elements,Dt=gt.projectionMatrix.elements,Xt=Rt[14]/(Rt[10]-1),ge=Rt[14]/(Rt[10]+1),Qt=(Rt[9]+1)/Rt[5],Me=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],sn=(Dt[8]+1)/Dt[0],jt=Xt*N,$t=Xt*sn,Ct=st/(-N+sn),de=Ct*-N;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(Ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Tt=Xt+Ct,R=ge+Ct,M=jt-de,B=$t+(st-de),$=Qt*ge/R*Tt,Z=Me*ge/R*Tt;q.projectionMatrix.makePerspective(M,B,$,Z,Tt,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,gt=q.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),S.near=C.near=T.near=tt,S.far=C.far=T.far=gt,(L!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,z=S.far),T.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const st=q.parent,Rt=S.cameras;Q(S,st);for(let Dt=0;Dt<Rt.length;Dt++)Q(Rt[Dt],st);Rt.length===2?V(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),ot(q,S,st)};function ot(q,tt,gt){gt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=js*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let vt=null;function Pt(q,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let st=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,st=!0);for(let Dt=0;Dt<gt.length;Dt++){const Xt=gt[Dt];let ge=null;if(p!==null)ge=p.getViewport(Xt);else{const Me=u.getViewSubImage(f,Xt);ge=Me.viewport,Dt===0&&(t.setRenderTargetTextures(x,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(x))}let Qt=b[Dt];Qt===void 0&&(Qt=new Qe,Qt.layers.enable(Dt),Qt.viewport=new Zt,b[Dt]=Qt),Qt.matrix.fromArray(Xt.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Xt.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ge.x,ge.y,ge.width,ge.height),Dt===0&&(S.matrix.copy(Qt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),st===!0&&S.cameras.push(Qt)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Dt=u.getDepthInformation(gt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let gt=0;gt<y.length;gt++){const st=v[gt],Rt=y[gt];st!==null&&Rt!==void 0&&Rt.update(st,tt,l||o)}vt&&vt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const Yt=new Ih;Yt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){vt=q},this.dispose=function(){}}}const _i=new ln,bg=new Ft;function wg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ph(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,x,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,x,y):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=t.get(d),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,_i.copy(v),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,x,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const x=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Eg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(x,P);const A=t.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function h(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),P=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=s[x.id],v=x.uniforms,P=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,T=v.length;A<T;A++){const C=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,S=C.length;b<S;b++){const L=C[b];if(p(L,A,b,P)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let F=0;for(let W=0;W<O.length;W++){const k=O[W],Y=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,z+F,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,v,P){const A=x.value,T=y+"_"+v;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const C=P[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(x){const y=x.uniforms;let v=0;const P=16;for(let T=0,C=y.length;T<C;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,L=b.length;S<L;S++){const z=b[S],O=Array.isArray(z.value)?z.value:[z.value];for(let F=0,W=O.length;F<W;F++){const k=O[F],Y=_(k),V=v%P,Q=V%Y.boundary,ot=V+Q;v+=Q,ot!==0&&P-ot<Y.storage&&(v+=P-ot),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Y.storage}}}const A=v%P;return A>0&&(v+=P-A),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Tg{constructor(t={}){const{canvas:e=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let P=!1,A=0,T=0,C=null,b=-1,S=null;const L=new Zt,z=new Zt;let O=null;const F=new Ut(0);let W=0,k=e.width,Y=e.height,V=1,Q=null,ot=null;const vt=new Zt(0,0,k,Y),Pt=new Zt(0,0,k,Y);let Yt=!1;const q=new Ka;let tt=!1,gt=!1;const st=new Ft,Rt=new Ft,Dt=new E,Xt=new Zt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Me(){return C===null?V:1}let N=n;function sn(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ha}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){const I="webgl2";if(N=sn(I,w),N===null)throw sn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let jt,$t,Ct,de,Tt,R,M,B,$,Z,j,St,ct,dt,te,nt,ft,Lt,It,pt,Jt,Gt,he,D;function at(){jt=new Lm(N),jt.init(),Gt=new gg(N,jt),$t=new Em(N,jt,t,Gt),Ct=new fg(N,jt),$t.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),de=new Um(N),Tt=new K0,R=new mg(N,jt,Ct,Tt,$t,Gt,de),M=new Am(v),B=new Pm(v),$=new kd(N),he=new bm(N,$),Z=new Dm(N,$,de,he),j=new Fm(N,Z,$,de),It=new Nm(N,$t,R),nt=new Tm(Tt),St=new Z0(v,M,B,jt,$t,he,nt),ct=new wg(v,Tt),dt=new tg,te=new og(jt),Lt=new Sm(v,M,B,Ct,j,p,c),ft=new ug(v,j,$t),D=new Eg(N,de,$t,Ct),pt=new wm(N,jt,de),Jt=new Im(N,jt,de),de.programs=St.programs,v.capabilities=$t,v.extensions=jt,v.properties=Tt,v.renderLists=dt,v.shadowMap=ft,v.state=Ct,v.info=de}at();const X=new Sg(v,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=jt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=jt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(k,Y,!1))},this.getSize=function(w){return w.set(k,Y)},this.setSize=function(w,I,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,Y=I,e.width=Math.floor(w*V),e.height=Math.floor(I*V),G===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(k*V,Y*V).floor()},this.setDrawingBufferSize=function(w,I,G){k=w,Y=I,V=G,e.width=Math.floor(w*G),e.height=Math.floor(I*G),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,I,G,H){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,I,G,H),Ct.viewport(L.copy(vt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Pt)},this.setScissor=function(w,I,G,H){w.isVector4?Pt.set(w.x,w.y,w.z,w.w):Pt.set(w,I,G,H),Ct.scissor(z.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){Ct.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(w=!0,I=!0,G=!0){let H=0;if(w){let U=!1;if(C!==null){const it=C.texture.format;U=it===$a||it===ja||it===Ya}if(U){const it=C.texture.type,ht=it===Wn||it===Ri||it===Ys||it===fs||it===Wa||it===Xa,xt=Lt.getClearColor(),Mt=Lt.getClearAlpha(),Nt=xt.r,zt=xt.g,yt=xt.b;ht?(g[0]=Nt,g[1]=zt,g[2]=yt,g[3]=Mt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Nt,_[1]=zt,_[2]=yt,_[3]=Mt,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}I&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),dt.dispose(),te.dispose(),Tt.dispose(),M.dispose(),B.dispose(),j.dispose(),he.dispose(),D.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",fc),X.removeEventListener("sessionend",pc),ui.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=de.autoReset,I=ft.enabled,G=ft.autoUpdate,H=ft.needsUpdate,U=ft.type;at(),de.autoReset=w,ft.enabled=I,ft.autoUpdate=G,ft.needsUpdate=H,ft.type=U}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Bt(w){const I=w.target;I.removeEventListener("dispose",Bt),xe(I)}function xe(w){Ne(w),Tt.remove(w)}function Ne(w){const I=Tt.get(w).programs;I!==void 0&&(I.forEach(function(G){St.releaseProgram(G)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,G,H,U,it){I===null&&(I=ge);const ht=U.isMesh&&U.matrixWorld.determinant()<0,xt=lu(w,I,G,H,U);Ct.setMaterial(H,ht);let Mt=G.index,Nt=1;if(H.wireframe===!0){if(Mt=Z.getWireframeAttribute(G),Mt===void 0)return;Nt=2}const zt=G.drawRange,yt=G.attributes.position;let ne=zt.start*Nt,ue=(zt.start+zt.count)*Nt;it!==null&&(ne=Math.max(ne,it.start*Nt),ue=Math.min(ue,(it.start+it.count)*Nt)),Mt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,Mt.count)):yt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,yt.count));const fe=ue-ne;if(fe<0||fe===1/0)return;he.setup(U,H,xt,G,Mt);let Ve,se=pt;if(Mt!==null&&(Ve=$.get(Mt),se=Jt,se.setIndex(Ve)),U.isMesh)H.wireframe===!0?(Ct.setLineWidth(H.wireframeLinewidth*Me()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(U.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),Ct.setLineWidth(bt*Me()),U.isLineSegments?se.setMode(N.LINES):U.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else U.isPoints?se.setMode(N.POINTS):U.isSprite&&se.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)se.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))se.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,Pn=U._multiDrawCounts,re=U._multiDrawCount,dn=Mt?$.get(Mt).bytesPerElement:1,Ui=Tt.get(H).currentProgram.getUniforms();for(let Ye=0;Ye<re;Ye++)Ui.setValue(N,"_gl_DrawID",Ye),se.render(bt[Ye]/dn,Pn[Ye])}else if(U.isInstancedMesh)se.renderInstances(ne,fe,U.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pn=Math.min(G.instanceCount,bt);se.renderInstances(ne,fe,Pn)}else se.render(ne,fe)};function oe(w,I,G){w.transparent===!0&&w.side===qe&&w.forceSinglePass===!1?(w.side=Be,w.needsUpdate=!0,nr(w,I,G),w.side=ci,w.needsUpdate=!0,nr(w,I,G),w.side=qe):nr(w,I,G)}this.compile=function(w,I,G=null){G===null&&(G=w),d=te.get(G),d.init(I),y.push(d),G.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),w!==G&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const H=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const xt=it[ht];oe(xt,G,U),H.add(xt)}else oe(it,G,U),H.add(it)}),y.pop(),d=null,H},this.compileAsync=function(w,I,G=null){const H=this.compile(w,I,G);return new Promise(U=>{function it(){if(H.forEach(function(ht){Tt.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){U(w);return}setTimeout(it,10)}jt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let un=null;function Cn(w){un&&un(w)}function fc(){ui.stop()}function pc(){ui.start()}const ui=new Ih;ui.setAnimationLoop(Cn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(w){un=w,X.setAnimationLoop(w),w===null?ui.stop():ui.start()},X.addEventListener("sessionstart",fc),X.addEventListener("sessionend",pc),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,I,C),d=te.get(w,y.length),d.init(I),y.push(d),Rt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Rt),gt=this.localClippingEnabled,tt=nt.init(this.clippingPlanes,gt),m=dt.get(w,x.length),m.init(),x.push(m),X.enabled===!0&&X.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&Qr(it,I,-1/0,v.sortObjects)}Qr(w,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Q,ot),Qt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Qt&&Lt.addToRenderList(m,w),this.info.render.frame++,tt===!0&&nt.beginShadows();const G=d.state.shadowsArray;ft.render(G,w,I),tt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(d.setupLights(),I.isArrayCamera){const it=I.cameras;if(U.length>0)for(let ht=0,xt=it.length;ht<xt;ht++){const Mt=it[ht];gc(H,U,w,Mt)}Qt&&Lt.render(w);for(let ht=0,xt=it.length;ht<xt;ht++){const Mt=it[ht];mc(m,w,Mt,Mt.viewport)}}else U.length>0&&gc(H,U,w,I),Qt&&Lt.render(w),mc(m,w,I);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,I),he.resetDefaultState(),b=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],tt===!0&&nt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Qr(w,I,G,H){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){H&&Xt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const ht=j.update(w),xt=w.material;xt.visible&&m.push(w,ht,xt,G,Xt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ht=j.update(w),xt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Xt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Xt.copy(ht.boundingSphere.center)),Xt.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(xt)){const Mt=ht.groups;for(let Nt=0,zt=Mt.length;Nt<zt;Nt++){const yt=Mt[Nt],ne=xt[yt.materialIndex];ne&&ne.visible&&m.push(w,ht,ne,G,Xt.z,yt)}}else xt.visible&&m.push(w,ht,xt,G,Xt.z,null)}}const it=w.children;for(let ht=0,xt=it.length;ht<xt;ht++)Qr(it[ht],I,G,H)}function mc(w,I,G,H){const U=w.opaque,it=w.transmissive,ht=w.transparent;d.setupLightsView(G),tt===!0&&nt.setGlobalState(v.clippingPlanes,G),H&&Ct.viewport(L.copy(H)),U.length>0&&er(U,I,G),it.length>0&&er(it,I,G),ht.length>0&&er(ht,I,G),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function gc(w,I,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new Ci(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Ks:Wn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const it=d.state.transmissionRenderTarget[H.id],ht=H.viewport||L;it.setSize(ht.z,ht.w);const xt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(F),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Qt&&Lt.render(G);const Mt=v.toneMapping;v.toneMapping=ai;const Nt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),tt===!0&&nt.setGlobalState(v.clippingPlanes,H),er(w,G,H),R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it),jt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let yt=0,ne=I.length;yt<ne;yt++){const ue=I[yt],fe=ue.object,Ve=ue.geometry,se=ue.material,bt=ue.group;if(se.side===qe&&fe.layers.test(H.layers)){const Pn=se.side;se.side=Be,se.needsUpdate=!0,_c(fe,G,H,Ve,se,bt),se.side=Pn,se.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(it),R.updateRenderTargetMipmap(it))}v.setRenderTarget(xt),v.setClearColor(F,W),Nt!==void 0&&(H.viewport=Nt),v.toneMapping=Mt}function er(w,I,G){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,it=w.length;U<it;U++){const ht=w[U],xt=ht.object,Mt=ht.geometry,Nt=H===null?ht.material:H,zt=ht.group;xt.layers.test(G.layers)&&_c(xt,I,G,Mt,Nt,zt)}}function _c(w,I,G,H,U,it){w.onBeforeRender(v,I,G,H,U,it),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,I,G,H,w,it),U.transparent===!0&&U.side===qe&&U.forceSinglePass===!1?(U.side=Be,U.needsUpdate=!0,v.renderBufferDirect(G,I,H,U,w,it),U.side=ci,U.needsUpdate=!0,v.renderBufferDirect(G,I,H,U,w,it),U.side=qe):v.renderBufferDirect(G,I,H,U,w,it),w.onAfterRender(v,I,G,H,U,it)}function nr(w,I,G){I.isScene!==!0&&(I=ge);const H=Tt.get(w),U=d.state.lights,it=d.state.shadowsArray,ht=U.state.version,xt=St.getParameters(w,U.state,it,I,G),Mt=St.getProgramCacheKey(xt);let Nt=H.programs;H.environment=w.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",Bt),Nt=new Map,H.programs=Nt);let zt=Nt.get(Mt);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===ht)return xc(w,xt),zt}else xt.uniforms=St.getUniforms(w),w.onBeforeCompile(xt,v),zt=St.acquireProgram(xt,Mt),Nt.set(Mt,zt),H.uniforms=xt.uniforms;const yt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(yt.clippingPlanes=nt.uniform),xc(w,xt),H.needsLights=uu(w),H.lightsStateVersion=ht,H.needsLights&&(yt.ambientLightColor.value=U.state.ambient,yt.lightProbe.value=U.state.probe,yt.directionalLights.value=U.state.directional,yt.directionalLightShadows.value=U.state.directionalShadow,yt.spotLights.value=U.state.spot,yt.spotLightShadows.value=U.state.spotShadow,yt.rectAreaLights.value=U.state.rectArea,yt.ltc_1.value=U.state.rectAreaLTC1,yt.ltc_2.value=U.state.rectAreaLTC2,yt.pointLights.value=U.state.point,yt.pointLightShadows.value=U.state.pointShadow,yt.hemisphereLights.value=U.state.hemi,yt.directionalShadowMap.value=U.state.directionalShadowMap,yt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,yt.spotShadowMap.value=U.state.spotShadowMap,yt.spotLightMatrix.value=U.state.spotLightMatrix,yt.spotLightMap.value=U.state.spotLightMap,yt.pointShadowMap.value=U.state.pointShadowMap,yt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function vc(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Br.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function xc(w,I){const G=Tt.get(w);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function lu(w,I,G,H,U){I.isScene!==!0&&(I=ge),R.resetTextureUnits();const it=I.fog,ht=H.isMeshStandardMaterial?I.environment:null,xt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:gs,Mt=(H.isMeshStandardMaterial?B:M).get(H.envMap||ht),Nt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,zt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!G.morphAttributes.position,ne=!!G.morphAttributes.normal,ue=!!G.morphAttributes.color;let fe=ai;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Ve=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=Ve!==void 0?Ve.length:0,bt=Tt.get(H),Pn=d.state.lights;if(tt===!0&&(gt===!0||w!==S)){const rn=w===S&&H.id===b;nt.setState(H,w,rn)}let re=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Pn.state.version||bt.outputColorSpace!==xt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==Mt||H.fog===!0&&bt.fog!==it||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Nt||bt.vertexTangents!==zt||bt.morphTargets!==yt||bt.morphNormals!==ne||bt.morphColors!==ue||bt.toneMapping!==fe||bt.morphTargetsCount!==se)&&(re=!0):(re=!0,bt.__version=H.version);let dn=bt.currentProgram;re===!0&&(dn=nr(H,I,U));let Ui=!1,Ye=!1,Ms=!1;const pe=dn.getUniforms(),Mn=bt.uniforms;if(Ct.useProgram(dn.program)&&(Ui=!0,Ye=!0,Ms=!0),H.id!==b&&(b=H.id,Ye=!0),Ui||S!==w){Ct.buffers.depth.getReversed()?(st.copy(w.projectionMatrix),md(st),gd(st),pe.setValue(N,"projectionMatrix",st)):pe.setValue(N,"projectionMatrix",w.projectionMatrix),pe.setValue(N,"viewMatrix",w.matrixWorldInverse);const jn=pe.map.cameraPosition;jn!==void 0&&jn.setValue(N,Dt.setFromMatrixPosition(w.matrixWorld)),$t.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ye=!0,Ms=!0)}if(U.isSkinnedMesh){pe.setOptional(N,U,"bindMatrix"),pe.setOptional(N,U,"bindMatrixInverse");const rn=U.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),pe.setValue(N,"boneTexture",rn.boneTexture,R))}U.isBatchedMesh&&(pe.setOptional(N,U,"batchingTexture"),pe.setValue(N,"batchingTexture",U._matricesTexture,R),pe.setOptional(N,U,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",U._indirectTexture,R),pe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",U._colorsTexture,R));const ys=G.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0)&&It.update(U,G,dn),(Ye||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,pe.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Mn.envMap.value=Mt,Mn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Mn.envMapIntensity.value=I.environmentIntensity),Ye&&(pe.setValue(N,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&hu(Mn,Ms),it&&H.fog===!0&&ct.refreshFogUniforms(Mn,it),ct.refreshMaterialUniforms(Mn,H,V,Y,d.state.transmissionRenderTarget[w.id]),Br.upload(N,vc(bt),Mn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Br.upload(N,vc(bt),Mn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(N,"center",U.center),pe.setValue(N,"modelViewMatrix",U.modelViewMatrix),pe.setValue(N,"normalMatrix",U.normalMatrix),pe.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const rn=H.uniformsGroups;for(let jn=0,$n=rn.length;jn<$n;jn++){const Mc=rn[jn];D.update(Mc,dn),D.bind(Mc,dn)}}return dn}function hu(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function uu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,I,G){Tt.get(w.texture).__webglTexture=I,Tt.get(w.depthTexture).__webglTexture=G;const H=Tt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const G=Tt.get(w);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,G=0){C=w,A=I,T=G;let H=!0,U=null,it=!1,ht=!1;if(w){const Mt=Tt.get(w);if(Mt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(Mt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Mt.__hasExternalTextures)R.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const yt=w.depthTexture;if(Mt.__boundDepthTexture!==yt){if(yt!==null&&Tt.has(yt)&&(w.width!==yt.image.width||w.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(ht=!0);const zt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(zt[I])?U=zt[I][G]:U=zt[I],it=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?U=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(zt)?U=zt[G]:U=zt,L.copy(w.viewport),z.copy(w.scissor),O=w.scissorTest}else L.copy(vt).multiplyScalar(V).floor(),z.copy(Pt).multiplyScalar(V).floor(),O=Yt;if(Ct.bindFramebuffer(N.FRAMEBUFFER,U)&&H&&Ct.drawBuffers(w,U),Ct.viewport(L),Ct.scissor(z),Ct.setScissorTest(O),it){const Mt=Tt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Mt.__webglTexture,G)}else if(ht){const Mt=Tt.get(w.texture),Nt=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,G||0,Nt)}b=-1},this.readRenderTargetPixels=function(w,I,G,H,U,it,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){Ct.bindFramebuffer(N.FRAMEBUFFER,xt);try{const Mt=w.texture,Nt=Mt.format,zt=Mt.type;if(!$t.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-H&&G>=0&&G<=w.height-U&&N.readPixels(I,G,H,U,Gt.convert(Nt),Gt.convert(zt),it)}finally{const Mt=C!==null?Tt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(w,I,G,H,U,it,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(xt=xt[ht]),xt){const Mt=w.texture,Nt=Mt.format,zt=Mt.type;if(!$t.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-H&&G>=0&&G<=w.height-U){Ct.bindFramebuffer(N.FRAMEBUFFER,xt);const yt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(I,G,H,U,Gt.convert(Nt),Gt.convert(zt),0);const ne=C!==null?Tt.get(C).__webglFramebuffer:null;Ct.bindFramebuffer(N.FRAMEBUFFER,ne);const ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await pd(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,yt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(yt),N.deleteSync(ue),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,G=0){w.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-G),U=Math.floor(w.image.width*H),it=Math.floor(w.image.height*H),ht=I!==null?I.x:0,xt=I!==null?I.y:0;R.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ht,xt,U,it),Ct.unbindTexture()},this.copyTextureToTexture=function(w,I,G=null,H=null,U=0){w.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,G=null);let it,ht,xt,Mt,Nt,zt,yt,ne,ue;const fe=w.isCompressedTexture?w.mipmaps[U]:w.image;G!==null?(it=G.max.x-G.min.x,ht=G.max.y-G.min.y,xt=G.isBox3?G.max.z-G.min.z:1,Mt=G.min.x,Nt=G.min.y,zt=G.isBox3?G.min.z:0):(it=fe.width,ht=fe.height,xt=fe.depth||1,Mt=0,Nt=0,zt=0),H!==null?(yt=H.x,ne=H.y,ue=H.z):(yt=0,ne=0,ue=0);const Ve=Gt.convert(I.format),se=Gt.convert(I.type);let bt;I.isData3DTexture?(R.setTexture3D(I,0),bt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(R.setTexture2DArray(I,0),bt=N.TEXTURE_2D_ARRAY):(R.setTexture2D(I,0),bt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const Pn=N.getParameter(N.UNPACK_ROW_LENGTH),re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ui=N.getParameter(N.UNPACK_SKIP_ROWS),Ye=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Nt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);const Ms=w.isDataArrayTexture||w.isData3DTexture,pe=I.isDataArrayTexture||I.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Mn=Tt.get(w),ys=Tt.get(I),rn=Tt.get(Mn.__renderTarget),jn=Tt.get(ys.__renderTarget);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let $n=0;$n<xt;$n++)Ms&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,U,zt+$n),w.isDepthTexture?(pe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(I).__webglTexture,U,ue+$n),N.blitFramebuffer(Mt,Nt,it,ht,yt,ne,it,ht,N.DEPTH_BUFFER_BIT,N.NEAREST)):pe?N.copyTexSubImage3D(bt,U,yt,ne,ue+$n,Mt,Nt,it,ht):N.copyTexSubImage2D(bt,U,yt,ne,ue+$n,Mt,Nt,it,ht);Ct.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pe?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(bt,U,yt,ne,ue,it,ht,xt,Ve,se,fe.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(bt,U,yt,ne,ue,it,ht,xt,Ve,fe.data):N.texSubImage3D(bt,U,yt,ne,ue,it,ht,xt,Ve,se,fe):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,yt,ne,it,ht,Ve,se,fe.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,yt,ne,fe.width,fe.height,Ve,fe.data):N.texSubImage2D(N.TEXTURE_2D,U,yt,ne,it,ht,Ve,se,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Pn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ui),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye),U===0&&I.generateMipmaps&&N.generateMipmap(bt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(w,I,G=null,H=null,U=0){return w.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,G,H,U)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Ct.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Ct.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class tc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ut(t),this.near=e,this.far=n}clone(){return new tc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kh extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new E;class Gr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Gr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ec extends Di{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let $i;const Ts=new E,Ji=new E,Zi=new E,Ki=new et,As=new et,Gh=new Ft,wr=new E,Rs=new E,Er=new E,vl=new et,Co=new et,xl=new et;class Hh extends ye{constructor(t=new ec){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Se;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ag(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new Gr(n,3,0,!1)),$i.setAttribute("uv",new Gr(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),Gh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Zi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Tr(wr.set(-.5,-.5,0),Zi,o,Ji,s,r),Tr(Rs.set(.5,-.5,0),Zi,o,Ji,s,r),Tr(Er.set(.5,.5,0),Zi,o,Ji,s,r),vl.set(0,0),Co.set(1,0),xl.set(1,1);let a=t.ray.intersectTriangle(wr,Rs,Er,!1,Ts);if(a===null&&(Tr(Rs.set(-.5,.5,0),Zi,o,Ji,s,r),Co.set(0,1),a=t.ray.intersectTriangle(wr,Er,Rs,!1,Ts),a===null))return;const c=t.ray.origin.distanceTo(Ts);c<t.near||c>t.far||e.push({distance:c,point:Ts.clone(),uv:cn.getInterpolation(Ts,wr,Rs,Er,vl,Co,xl,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Tr(i,t,e,n,s,r){Ki.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(As.x=r*Ki.x-s*Ki.y,As.y=s*Ki.x+r*Ki.y):As.copy(Ki),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(Gh)}class Rg extends ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=en,h=en,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Qi=new Ft,yl=new Ft,Ar=[],Sl=new qn,Cg=new Ft,Cs=new Et,Ps=new _s;class Js extends Et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Sl.copy(t.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _s),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qi),Ps.copy(t.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qi),yl.multiplyMatrices(n,Qi),Cs.matrixWorld=yl,Cs.raycast(t,Ar);for(let o=0,a=Ar.length;o<a;o++){const c=Ar[o];c.instanceId=r,c.object=this,e.push(c)}Ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rg(new Float32Array(s*this.count),s,this.count,qa,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vh extends Di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hr=new E,Vr=new E,bl=new Ft,Ls=new qr,Rr=new _s,Po=new E,wl=new E;class Pg extends ye{constructor(t=new Se,e=new Vh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Hr.fromBufferAttribute(e,s-1),Vr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Hr.distanceTo(Vr);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;bl.copy(s).invert(),Ls.copy(t.ray).applyMatrix4(bl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),x=h.getX(_+1),y=Cr(this,t,Ls,c,d,x);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Cr(this,t,Ls,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=Cr(this,t,Ls,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Cr(this,t,Ls,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Hr.fromBufferAttribute(o,s),Vr.fromBufferAttribute(o,r),e.distanceSqToSegment(Hr,Vr,Po,wl)>n)return;Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:wl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class jr extends ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new et:new E);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,s=[],r=[],o=[],a=new E,c=new Ft;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ee(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ee(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nc extends Rn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Lg extends nc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ic(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Pr=new E,Lo=new ic,Do=new ic,Io=new ic;class Wh extends Rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),l=Pr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Lo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Do.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Io.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Do.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Io.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Lo.calc(c),Do.calc(c),Io.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function El(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Dg(i,t){const e=1-i;return e*e*t}function Ig(i,t){return 2*(1-i)*i*t}function Ug(i,t){return i*i*t}function Ws(i,t,e,n){return Dg(i,t)+Ig(i,e)+Ug(i,n)}function Ng(i,t){const e=1-i;return e*e*e*t}function Fg(i,t){const e=1-i;return 3*e*e*i*t}function Og(i,t){return 3*(1-i)*i*i*t}function Bg(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return Ng(i,t)+Fg(i,e)+Og(i,n)+Bg(i,s)}class Xh extends Rn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zg extends Rn{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Rn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kg extends Rn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends Rn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends Rn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(El(a,c.x,l.x,h.x,u.x),El(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var za=Object.freeze({__proto__:null,ArcCurve:Lg,CatmullRomCurve3:Wh,CubicBezierCurve:Xh,CubicBezierCurve3:zg,EllipseCurve:nc,LineCurve:qh,LineCurve3:kg,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:jh,SplineCurve:$h});class Gg extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new za[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new za[s.type]().fromJSON(s))}return this}}class Hg extends Gg{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yh(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Xh(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new $h(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new nc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qs extends Se{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new E,f=new et,p=new E,g=new E,_=new E;let m=0,d=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,d=t[x+1].y-t[x].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let x=0;x<=e;x++){const y=n+x*h*s,v=Math.sin(y),P=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*v,u.y=t[A].y,u.z=t[A].x*P,o.push(u.x,u.y,u.z),f.x=x/e,f.y=A/(t.length-1),a.push(f.x,f.y);const T=c[3*A+0]*v,C=c[3*A+1],b=c[3*A+0]*P;l.push(T,C,b)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,P=v,A=v+t.length,T=v+t.length+1,C=v+1;r.push(P,A,C),r.push(T,C,A)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.points,t.segments,t.phiStart,t.phiLength)}}class sc extends Qs{constructor(t=1,e=1,n=4,s=8){const r=new Hg;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new sc(t.radius,t.length,t.capSegments,t.radialSegments)}}class $r extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new E,h=new et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yn extends Se{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function x(){const v=new E,P=new E;let A=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const b=[],S=C/r,L=S*(e-t)+t;for(let z=0;z<=s;z++){const O=z/s,F=O*c+a,W=Math.sin(F),k=Math.cos(F);P.x=L*W,P.y=-S*n+m,P.z=L*k,u.push(P.x,P.y,P.z),v.set(W,T,k).normalize(),f.push(v.x,v.y,v.z),p.push(O,1-S),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const S=_[b][C],L=_[b+1][C],z=_[b+1][C+1],O=_[b][C+1];(t>0||b!==0)&&(h.push(S,L,O),A+=3),(e>0||b!==r-1)&&(h.push(L,z,O),A+=3)}l.addGroup(d,A,0),d+=A}function y(v){const P=g,A=new et,T=new E;let C=0;const b=v===!0?t:e,S=v===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let z=0;z<=s;z++){const F=z/s*c+a,W=Math.cos(F),k=Math.sin(F);T.x=b*k,T.y=m*S,T.z=b*W,u.push(T.x,T.y,T.z),f.push(0,S,0),A.x=W*.5+.5,A.y=k*.5*S+.5,p.push(A.x,A.y),g++}for(let z=0;z<s;z++){const O=P+z,F=L+z;v===!0?h.push(F,F+1,O):h.push(F+1,F,O),C+=3}l.addGroup(d,C,v===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jr extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new E,v=new E,P=new E;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],v),p(e[A+2],P),c(y,v,P,x)}function c(x,y,v,P){const A=P+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const b=x.clone().lerp(v,C/A),S=y.clone().lerp(v,C/A),L=A-C;for(let z=0;z<=L;z++)z===0&&C===A?T[C][z]=b:T[C][z]=b.clone().lerp(S,z/L)}for(let C=0;C<A;C++)for(let b=0;b<2*(A-C)-1;b++){const S=Math.floor(b/2);b%2===0?(f(T[C][S+1]),f(T[C+1][S]),f(T[C][S])):(f(T[C][S+1]),f(T[C+1][S+1]),f(T[C+1][S]))}}function l(x){const y=new E;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new E;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,P=d(x)/Math.PI+.5;o.push(v,1-P)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],P=o[x+4],A=Math.max(y,v,P),T=Math.min(y,v,P);A>.9&&T<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),P<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new E,y=new E,v=new E,P=new E,A=new et,T=new et,C=new et;for(let b=0,S=0;b<r.length;b+=9,S+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),A.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),P.copy(x).add(y).add(v).divideScalar(3);const L=m(P);_(A,S+0,x,L),_(T,S+2,y,L),_(C,S+4,v,L)}}function _(x,y,v,P){P<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.vertices,t.indices,t.radius,t.details)}}class rc extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rc(t.radius,t.detail)}}class Zr extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zr(t.radius,t.detail)}}class oc extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new E,f=new E,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const x=[],y=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+v,1-y),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<e;x++){const y=h[d][x+1],v=h[d][x],P=h[d+1][x],A=h[d+1][x+1];(d!==0||o>0)&&p.push(y,v,A),(d!==n-1||c<Math.PI)&&p.push(v,P,A)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ac extends Se{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new E,u=new E,f=new E;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,x=(s+1)*p+g;o.push(_,m,x),o.push(m,d,x)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cc extends Se{constructor(t=new jh(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,c=new E,l=new et;let h=new E;const u=[],f=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),d()}function m(y){h=t.getPointAt(y/e,h);const v=o.normals[y],P=o.binormals[y];for(let A=0;A<=s;A++){const T=A/s*Math.PI*2,C=Math.sin(T),b=-Math.cos(T);c.x=b*v.x+C*P.x,c.y=b*v.y+C*P.y,c.z=b*v.z+C*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const P=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),T=(s+1)*y+v,C=(s+1)*(y-1)+v;g.push(P,A,C),g.push(A,T,C)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new cc(new za[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class tn extends Di{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pi extends tn{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lc extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Vg extends lc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Uo=new Ft,Tl=new E,Al=new E;class Jh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Tl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Tl),Al.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Al),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rl=new Ft,Ds=new E,No=new E;class Wg extends Jh{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),No.copy(n.position),No.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(No),n.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class Xg extends lc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class qg extends Jh{constructor(){super(new Uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fo extends lc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new qg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Cl=new Ft;class Yg{constructor(t,e,n=0,s=1/0){this.ray=new qr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Za,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(t,e=!0,n=[]){return ka(t,this,n,e),n.sort(Pl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ka(t[s],this,n,e);return n.sort(Pl),n}}function Pl(i,t){return i.distance-t.distance}function ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ka(r[o],t,e,!0)}}class Ll{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ee(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jg extends Li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ha);const $g=[{id:"mining",no:1,title:"开采",en:"Mining",summary:"缅甸帕敢（Hpakant）一带是宝石级硬玉翡翠的主要产地。如今的开采以次生矿为主：翡翠以巨砾形式埋在乌鲁河沿岸的砾岩层里，大型露天矿用挖掘机等重型机械剥土、挖掘。",terms:[{zh:"原生矿",en:"primary deposit",def:"产于蛇纹石化橄榄岩中的硬玉岩岩脉。"},{zh:"次生矿",en:"secondary deposit",def:"原生矿体经风化、搬运后沉积在砾岩或河床中的巨砾与砾石。"}],purpose:"获得翡翠原石。",equipment:["挖掘机","运输车"],cautions:["实际矿区既有大型机械化露天开采，也有手工开采，方式差异很大。","露天矿边坡风险高，帕敢曾发生严重滑坡事故。本作品只呈现示意性的开采，不美化矿区环境。"],sources:["GG-BURMA","HPK-2021","IGC-2019"],evidence:"B",simplification:"沙盘为示意，地形、比例与设备都不对应任何真实矿区；不展示爆破、排水与手工采矿。"},{id:"washing",no:2,title:"清洗",en:"Washing",summary:"用水冲去原石表面的泥沙，让皮壳的颜色、颗粒和裂纹更容易看清。",terms:[{zh:"皮壳 / 石皮",en:"rind / skin",def:"原石表面因风化形成的外层，会遮挡内部的真实品质。"}],purpose:"看清原石外表，为后续观察做准备。",equipment:["水枪","毛刷"],cautions:["清洗只改善表面观察，不会改变原石本身。"],sources:["GG-BURMA","ZH-TRADE"],evidence:"C",simplification:"资料中很少单独描述这一步。它属于合理的示意性步骤，并非标准化工序。"},{id:"lighting",no:3,title:"打灯观察",en:"Lighting",summary:"用强光手电贴住皮壳或擦口，观察光线透入的深浅与颜色。",terms:[{zh:"打灯",en:"torch inspection",def:"以强光照射原石表面，观察局部透光与颜色的经验方法。"}],purpose:"初步了解局部的透明度与颜色。",equipment:["强光手电"],cautions:["光线只能进入靠近表面的一小部分，看到的只是局部。","内部的裂、颜色变化和整体品质无法通过打灯完整判断。"],sources:["GG-BURMA","ZH-TRADE"],evidence:"C",simplification:"画面中的透光光晕是视觉示意，不代表真实的透光范围。"},{id:"window",no:4,title:"开窗",en:"Windowing",summary:"在皮壳上磨出一小块（擦口），或切磨出一个平面（开窗，行内也叫“门子”），露出内部石质，便于观察颜色与质地。",terms:[{zh:"擦口",en:"polished spot",def:"在皮壳上擦磨出的小口。"},{zh:"开窗 / 门子",en:"window",def:"在原石外皮上磨出、用来观察内部的切口。"}],purpose:"暴露局部内部，便于观察颜色、透明度与质地。",equipment:["角磨机","砂轮"],cautions:["窗口所见只代表这一个位置，不能推断整块原石。"],sources:["ZH-TRADE","EN-TRADE"],evidence:"C",simplification:"本作只开一个窗。实际操作中窗口的数量和位置因人而异。"},{id:"planning",no:5,title:"切割规划",en:"Cut planning",summary:"根据窗口与外观所见的颜色、裂纹和尺寸，决定下刀位置。本作选择的路线是：先对半剖开，再从其中一半切取板料。",terms:[{zh:"绺裂",en:"fracture",def:"原石中的裂隙，会影响取料位置与成品价值。"}],purpose:"尽量保留颜色、避开裂隙、提高出材率。",equipment:["记号笔 / 粉笔","卡尺"],cautions:["切割路线因原石形态和工厂经验而不同；“先对半、再取板”是本作的示意路线。"],sources:["GIA-HSU","ZH-TRADE"],evidence:"C",simplification:"真实的规划往往需要反复试切与讨论，本作把它压缩为一次性画线。"},{id:"slabbing",no:6,title:"水冷切片",en:"Slabbing",summary:"用镶有金刚石的锯片剖开原石、切出平整的板料。切割时持续加水，既降温又带走岩粉。",terms:[{zh:"金刚石锯片",en:"diamond blade",def:"刃口镶有金刚石的圆锯片。"},{zh:"板料",en:"slab",def:"从原石上切下的平板，手镯将从板料中取出。"}],purpose:"剖开原石，并获得厚度合适的板料。",equipment:["水冷切割机（金刚石锯片）"],cautions:["切开后，只能看到切面所在平面的内部结构。","板料厚度会限制镯子的条宽（行业资料，待核实）。"],sources:["GIA-HSU","EN-TRADE"],evidence:"B",simplification:"大型原石可能采用其他切割设备；本作统一用圆锯片表现。"},{id:"marking",no:7,title:"画圈",en:"Marking",summary:"在板料上评估裂纹与颜色分布，按不同的手镯尺寸画出轮廓。画面中的两组圆圈刻意避开了那条贯穿裂隙。",terms:[{zh:"圈口",en:"inner diameter",def:"手镯的内径，决定佩戴尺寸。"}],purpose:"确定取镯位置与尺寸。",equipment:["灯箱 / 光源","记号笔"],cautions:["尺寸选择受裂纹、颜色和板料大小共同限制。"],sources:["GIA-HSU","ZH-TRADE"],evidence:"B",simplification:"画面中的圈口为示意比例，不作为尺码建议。"},{id:"coring",no:8,title:"套取镯坯",en:"Coring",summary:"钻床先沿外轮廓切出圆形，再换用较小的圆形钻头切出内径。中间切下的圆柱是镯芯，四周剩下余料。",terms:[{zh:"镯坯",en:"bangle blank",def:"切出后、尚未修形的环形毛坯。"},{zh:"镯芯",en:"core",def:"内圈切下的圆柱料，可另作吊坠等。"},{zh:"余料",en:"offcut",def:"取镯后剩下的板料边角。"}],purpose:"从板料中取出环形毛坯。",equipment:["钻床 / 套料机","管状金刚石钻头"],cautions:["不同资料对内外圈的先后顺序说法不一；本作依据 GIA 对平洲工厂的描述（先外后内）。","钻切过程需要加水冷却（行业资料）。"],sources:["GIA-HSU","ZH-TRADE","EN-TRADE"],evidence:"B",simplification:"两次钻切在画面中会被加速。"},{id:"shaping",no:9,title:"粗加工",en:"Rough shaping",summary:"去除镯坯上的瑕疵与绺裂（打顶），磨掉方形截面的棱角（拍边），粗磨出内外圈与条形轮廓。",terms:[{zh:"打顶",en:"—",def:"去除镯坯上的瑕疵与绺裂（行业术语）。"},{zh:"拍边",en:"edge rounding",def:"磨去镯坯截面的棱角（行业术语）。"}],purpose:"定出手镯的基本形状。",equipment:["粗砂轮 / 磨轮"],cautions:["术语与做法因地区和工厂而异。"],sources:["ZH-TRADE"],evidence:"C",simplification:"截面由方变圆的过程在画面中是连续变形，实际是多次磨削。"},{id:"fine-grinding",no:10,title:"精磨",en:"Fine grinding",summary:"逐级换用更细的磨料，去除粗磨痕迹，使表面平整。",terms:[{zh:"细磨",en:"fine grinding",def:"用更细的磨料修整表面。"}],purpose:"提高表面平整度，为抛光做准备。",equipment:["细磨轮 / 磨筒","冷却水"],cautions:["不同工厂使用的磨料种类和目数顺序不同，本作不给出具体数值。"],sources:["EN-TRADE","ZH-TRADE"],evidence:"C",simplification:"画面用“粗糙 → 平整”的连续过渡表现多道工序。"},{id:"polishing",no:11,title:"抛光",en:"Polishing",summary:"用极细的磨料与抛光工具打出光泽，使表面反射清晰、不变形。",terms:[{zh:"抛光",en:"polishing",def:"在表面形成光泽的最后一道磨削工序。"}],purpose:"形成光泽，让颜色与透明度得以展现。",equipment:["抛光轮"],cautions:["抛光是正常加工，不属于“优化处理”。","资料中提到竹、氧化铈等材料，但各厂做法不同，本作不指定具体材料。"],sources:["GIA-QF","EN-TRADE"],evidence:"C",simplification:"画面以高光由模糊变锐利来表现抛光效果。"},{id:"showcase",no:12,title:"检查展示",en:"Inspection & showcase",summary:"检查裂纹、尺寸、抛光与整体完整性，然后在展台上呈现完整的手镯。GIA 评价翡翠时，最看重颜色，其次是透明度和质地，同时也看净度与做工。",terms:[{zh:"A 货",en:"Type A",def:"未经漂白、充填或染色的天然翡翠（表面打蜡通常被接受，待以 GIA 原文核对）。"},{zh:"B 货",en:"Type B",def:"经酸洗漂白、再注入聚合物充填的翡翠。"},{zh:"C 货",en:"Type C",def:"经染色的翡翠。"}],purpose:"检验成品，并展示最终效果。",equipment:["光源","卡尺"],cautions:["天然与否只能由实验室检测确定，不能凭外观判断。","本作展示的是概念中的天然翡翠，不代表任何真实商品。"],sources:["GIA-QF","GG-DYED","GG-COAT"],evidence:"A",simplification:"画面中的颜色与纹理是程序化生成的，用于教学示意。"}],Jg={stages:$g},Zg=[{id:"GIA-ENC",grade:"A",retrieved:"search-summary",title:"GIA Gem Encyclopedia — Jade (overview & properties)",url:"https://www.gia.edu/jade"},{id:"GIA-DESC",grade:"A",retrieved:"not-retrieved",title:"GIA — Jade description",url:"https://www.gia.edu/jade-description"},{id:"GIA-QF",grade:"A",retrieved:"search-summary",title:"GIA — Jadeite jade quality factors",url:"https://www.gia.edu/jade-quality-factor"},{id:"GIA-BUY",grade:"A",retrieved:"not-retrieved",title:"GIA — Jade buyer's guide",url:"https://www.gia.edu/jade/buyers-guide"},{id:"GIA-HSU",grade:"B",retrieved:"search-summary",title:"Hsu, T. (2013) Jadeite Manufacturing and Trading Hubs in Guangdong, China — GIA News from Research (Pingzhou bangle factory visit)",url:"https://www.gia.edu/gia-news-research-jadeite-trading-centers-hsu"},{id:"GG-BURMA",grade:"B",retrieved:"search-summary",title:"Hughes, R.W. et al. (2000) Burmese Jade: The Inscrutable Gem — Gems & Gemology, Spring 2000",url:"https://www.gia.edu/dam/jcr:4b5d009c-53ed-464a-a8cd-4d5ab23f56c6/SP00.pdf"},{id:"GG-DYED",grade:"A",retrieved:"search-summary",title:"Gems & Gemology Lab Notes (Fall 2015) — Dyed and natural green jadeite",url:"https://www.gia.edu/gems-gemology/fall-2015-labnotes-dyed-natural-green-jadeite"},{id:"GG-COAT",grade:"A",retrieved:"search-summary",title:"Gems & Gemology — Gemological characteristics of coated jadeite jade",url:"https://www.gia.edu/gems-gemology/gemological-characteristics-coated-jadeite-jade"},{id:"PENN",grade:"B",retrieved:"search-summary",title:"Penn Museum, Expedition — jade (specific gravity of jadeite vs nephrite)",url:"https://www.penn.museum/sites/expedition/jade/"},{id:"HPK-2021",grade:"B",retrieved:"search-summary",title:"The 2020 Hpakant jade mine disaster: a multi-sensor investigation for slope failure (ISPRS J. Photogramm. Remote Sens., 2021)",url:"https://sciencedirect.com/science/article/pii/S0924271621001489"},{id:"IGC-2019",grade:"B",retrieved:"search-summary",title:"Loiacono et al. (2019) Artisanal jade mining in Myanmar — International Growth Centre report",url:"https://www.theigc.org/sites/default/files/2020/04/Loiacono-et-al-2019-Final-Report-1-1.pdf"},{id:"ZH-TRADE",grade:"C",retrieved:"search-summary",title:"中文行业科普文章（知乎：翡翠赌石三大法宝；手镯加工流程；翡翠手镯制作全过程）",url:"https://zhuanlan.zhihu.com/p/38353244"},{id:"EN-TRADE",grade:"C",retrieved:"search-summary",title:"English trade articles on bangle making (Mays Gems; Jade Bangle Co.; Jade Fiend)",url:"https://mays.us/blogs/jade-education/how-jade-bangle-is-made-traditionally"}],Kg={sources:Zg},Qg={rind:{label:"石皮",sub:"Rind",body:"原石表面因风化形成的外层。它会遮挡内部的真实品质。",stage:"washing"},window:{label:"开窗",sub:"Window",body:"磨去一小块皮壳露出的内部石质。窗口所见只代表这一个位置。",stage:"window"},fissure:{label:"裂隙",sub:"Fissure",body:"一条贯穿原石的裂隙。它会在窗口、切面和板料上的同一位置出现，决定后面从哪里取镯。",stage:"planning"},stone:{label:"翡翠原石",sub:"Jadeite rough",body:"本作中的原石是程序化生成的教学示意，并非真实标本。",stage:"lighting"},saw:{label:"水冷切割机",sub:"Slab saw",body:"用镶有金刚石的圆锯片剖开原石。工作台可前后进给，锯头可升降。",stage:"slabbing"},blade:{label:"金刚石锯片",sub:"Diamond blade",body:"锯片刃口镶有金刚石。切割时锯片高速旋转，并持续加冷却水。",stage:"slabbing"},coolant:{label:"冷却水",sub:"Coolant",body:"持续冲向切口的水流：降温，并带走切割产生的岩粉。",stage:"slabbing"},cutface:{label:"切面",sub:"Cut face",body:"两个切面互为镜像。它们的色带、棉絮和裂隙都来自同一块原石的内部。",stage:"slabbing"},"fissure-cut":{label:"裂隙在切面上",sub:"Same fissure",body:"窗口上看到的那条裂隙，在切面上出现在对应的位置。",stage:"planning"},plinth:{label:"展台",sub:"Plinth",body:"原石观察工位。",stage:"lighting"},mine:{label:"矿坑",sub:"Open pit",body:"示意性的阶梯式露天矿。实际矿区既有机械化开采，也有手工开采，方式差异很大。",stage:"mining"},excavator:{label:"挖掘机",sub:"Excavator",body:"剥离覆土、挖出原石。帕敢一带的大型露天矿以重型机械开采为主。",stage:"mining"},cutlines:{label:"切割线",sub:"Cut lines",body:"三条粉笔线：中间一条先把原石对半剖开，另外两条从其中一半取出板料。",stage:"planning"},slab:{label:"板料",sub:"Slab",body:"约 14 毫米厚的平板。它的两个面都来自原石内部，手镯将从这里取出。",stage:"slabbing"},"fissure-slab":{label:"裂隙",sub:"Fissure",body:"窗口上看到的那条裂隙，也穿过这块板料。画圈时要避开它。",stage:"marking"},marks:{label:"画好的圈",sub:"Marked rings",body:"每处两圈：外圈决定手镯外径，内圈决定圈口。两组都避开了裂隙。",stage:"marking"},drill:{label:"钻床",sub:"Core drill",body:"带管状金刚石钻头的钻床，钻切时加水冷却。",stage:"coring"},"outer-bit":{label:"外圈钻头",sub:"Outer bit",body:"先沿外轮廓钻切出圆形（依据 GIA 对平洲工厂的描述）。",stage:"coring"},"inner-bit":{label:"内圈钻头",sub:"Inner bit",body:"再换用较小的钻头切出内径。不同资料对先后顺序说法不一。",stage:"coring"},blank:{label:"镯坯",sub:"Bangle blank",body:"切出后、尚未修形的环形毛坯，截面还是方的。",stage:"coring"},core:{label:"镯芯",sub:"Core",body:"内圈切下的圆柱料，可另作吊坠等（行业资料）。",stage:"coring"},offcut:{label:"余料",sub:"Offcut",body:"取镯后剩下的板料。另一处画好的圈还可以再取一只。",stage:"coring"},wheel:{label:"粗磨轮",sub:"Coarse wheel",body:"磨去方形截面的棱角，定出内外圈与条形轮廓。",stage:"shaping"},drum:{label:"细磨筒",sub:"Sanding drum",body:"磨筒伸入内圈，逐级换用更细的磨料。设备形式为示意。",stage:"fine-grinding"},buff:{label:"抛光轮",sub:"Polishing buff",body:"用极细的磨料打出光泽。抛光是正常加工，不是“优化处理”。",stage:"polishing"},"bangle-rough":{label:"镯坯",sub:"Blank",body:"表面粗糙、没有光泽，截面正在由方变圆。",stage:"shaping"},"bangle-fine":{label:"精磨中",sub:"Fine grinding",body:"粗磨痕迹逐渐消失，表面变得平整。",stage:"fine-grinding"},"bangle-polish":{label:"抛光中",sub:"Polishing",body:"高光由模糊变清晰，颜色和透明度显现出来。",stage:"polishing"},inspect:{label:"检查",sub:"Inspection",body:"量圈口，打灯检查裂纹与抛光状态。",stage:"showcase"},edge:{label:"边缘透光",sub:"Translucent edge",body:"光线在薄的边缘处透过并散射，显得温润。",stage:"showcase"},colour:{label:"色带",sub:"Colour band",body:"绿色浓淡不均，是同一块原石内部的天然分布。",stage:"showcase"},lustre:{label:"抛光高光",sub:"Polish lustre",body:"清晰、不变形的反射是做工好的标志之一（GIA）。",stage:"showcase"},bangle:{label:"翡翠手镯",sub:"Jadeite bangle",body:"本作中的手镯由程序生成，用于教学示意，不代表任何真实商品。",stage:"showcase"},wash:{label:"清洗台",sub:"Wash basin",body:"冲去泥沙，让皮壳看得更清楚。",stage:"washing"},lightbox:{label:"灯箱",sub:"Lightbox",body:"从下方透光，便于观察板料内部的裂与颜色。",stage:"marking"},"grind-bench":{label:"磨床",sub:"Grinding bench",body:"可更换磨轮、磨筒和抛光轮。",stage:"shaping"},showcase:{label:"展台",sub:"Showcase",body:"成品展厅。",stage:"showcase"},"grinder-hand":{label:"角磨机",sub:"Angle grinder",body:"用砂轮磨去局部皮壳。",stage:"window"},"inner-diameter":{label:"圈口 ≈ 59.6 mm",sub:"Inner diameter",body:"手镯的内径。本作模型的圈口约 59.6 毫米、条宽约 8.8 毫米，仅为示意，不作为尺码建议。",stage:"showcase"},torch:{label:"强光手电",sub:"Torch",body:"贴住皮壳打光，观察光线透入的深浅与颜色。光只能进入靠近表面的一小部分，看到的只是局部。",stage:"lighting"}},t_={hotspots:Qg},e_={"brand.sub":"翡翠诞生记","intro.kicker":"JADEITE JADE · 硬玉翡翠 · 数字工艺馆","intro.title":"翡翠诞生记","intro.lead":"一块未经切割的原石，经过开采、清洗、观察、切片、取圈、打磨与抛光，成为一只绿色翡翠手镯。","intro.start":"开始旅程","intro.explore":"自由探索","intro.note":"全程约 5 分钟 · 可随时暂停、跳转 · 声音默认关闭","tl.label":"工序时间轴","btn.play":"播放","btn.pause":"暂停","btn.replay":"重新播放","btn.prev":"上一道工序","btn.next":"下一道工序","btn.reset":"重置视角","btn.knowledge":"知识","btn.torch":"手动打灯","btn.soundOn":"声音 · 开","btn.soundOff":"声音 · 关","speed.label":"演示速度","scrub.label":"本道工序进度","cam.free":"自由视角 · 点击回到导览",hint:"拖动旋转 · 滚轮或双指缩放 · 空格 播放/暂停 · ←→ 逐帧 · [ ] 切换工序","card.title":"知识卡片","card.terms":"专业术语","card.purpose":"加工目的","card.equipment":"设备","card.cautions":"注意事项","card.sources":"参考来源","card.evidence":"证据","card.simplified":"演示简化",guided:"导览中","show.lights":"灯光","show.gallery":"聚光","show.soft":"柔光","show.back":"背光","show.compare":"表面对比","show.before":"打磨前","show.after":"抛光后","show.orbit":"360° 旋转","torch.note":"打灯观察：光线只能进入靠近表面的一小部分，看到的只是局部。","ph.overview":"沙盘全景","ph.dig":"挖掘","ph.lift":"提起原石","ph.transport":"运送","ph.wash":"冲洗","ph.done":"完成","ph.dim":"调暗环境","ph.torch":"打灯","ph.lightsOn":"恢复照明","ph.approach":"就位","ph.grind":"磨窗","ph.orbit":"环绕观察","ph.lineHalf":"画对半线","ph.lineSlab":"画板料线","ph.feed":"进给","ph.cut":"下切 · 水冷","ph.retract":"退刀","ph.open":"打开切面","ph.slabCut":"切取板料","ph.separate":"分离","ph.lightbox":"灯箱","ph.mark":"画圈","ph.outer":"钻外圈","ph.toolChange":"换钻头","ph.inner":"钻内圈","ph.rough":"粗磨修形","ph.fine":"精磨","ph.polish":"抛光","ph.inspect":"检查","ph.display":"陈列","live.stage":"工序 {no}：{title}","fallback.noWebgl.title":"无法启动三维场景","fallback.noWebgl.body":"你的浏览器或设备没有启用 WebGL 2。请使用最新版 Chrome、Edge、Safari 或 Firefox，并确认已开启硬件加速。","fallback.lost.title":"图形上下文已丢失","fallback.lost.body":"浏览器暂时收回了 3D 渲染资源（常见于切换应用或显存不足）。正在等待恢复，你也可以刷新页面。","fallback.error.title":"三维场景初始化失败","fallback.error.body":"加载过程中出现错误，请刷新页面重试。","fallback.retry":"重试","ph.liftBlank":"取出镯坯","dim.inner":"圈口 ≈ {mm} mm"},n_={strings:e_},Zh=Jg.stages,Oo=Object.fromEntries(Kg.sources.map(i=>[i.id,i])),i_=t_.hotspots,s_=n_.strings;function Dl(i){const t=Zh.find(e=>e.id===i);if(!t)throw new Error(`unknown stage ${i}`);return t}function Il(i){const t=i_[i];if(!t)throw new Error(`unknown hotspot ${i}`);return t}function _t(i,t={}){const e=s_[i];return e===void 0?i:e.replace(/\{(\w+)\}/g,(n,s)=>String(t[s]??""))}const En=[{id:"mining",duration:25,phases:[[0,"ph.overview"],[.25,"ph.dig"],[.6,"ph.lift"]]},{id:"washing",duration:16,phases:[[0,"ph.transport"],[.25,"ph.wash"],[.9,"ph.done"]]},{id:"lighting",duration:22,phases:[[0,"ph.transport"],[.2,"ph.dim"],[.3,"ph.torch"],[.86,"ph.lightsOn"]]},{id:"window",duration:20,phases:[[0,"ph.approach"],[.25,"ph.grind"],[.8,"ph.done"]]},{id:"planning",duration:24,phases:[[0,"ph.orbit"],[.15,"ph.lineHalf"],[.45,"ph.lineSlab"],[.85,"ph.done"]]},{id:"slabbing",duration:46,phases:[[0,"ph.transport"],[.12,"ph.feed"],[.2,"ph.cut"],[.42,"ph.retract"],[.47,"ph.open"],[.6,"ph.slabCut"],[.92,"ph.separate"]]},{id:"marking",duration:20,phases:[[0,"ph.transport"],[.35,"ph.lightbox"],[.45,"ph.mark"]]},{id:"coring",duration:32,phases:[[0,"ph.transport"],[.14,"ph.outer"],[.45,"ph.toolChange"],[.5,"ph.inner"],[.76,"ph.liftBlank"]]},{id:"shaping",duration:24,phases:[[0,"ph.transport"],[.18,"ph.rough"]]},{id:"fine-grinding",duration:20,phases:[[0,"ph.toolChange"],[.12,"ph.fine"]]},{id:"polishing",duration:20,phases:[[0,"ph.toolChange"],[.12,"ph.polish"]]},{id:"showcase",duration:32,phases:[[0,"ph.transport"],[.16,"ph.inspect"],[.5,"ph.display"]]}],Bo=En.length,r_=i=>En[i].duration;function Ul(i,t){let e=En[i].phases[0][1];for(const[n,s]of En[i].phases)t>=n&&(e=s);return e}const gn={play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5l12 7-12 7z"/></svg>',pause:'<svg viewBox="0 0 24 24" aria-hidden="true"><path class="fill" d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',prev:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',next:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',reset:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 3-6.2"/><path d="M4 4v5h5"/></svg>',torch:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l-1 6h-4z"/><path d="M10 9v11h4V9"/><path d="M18 4l2-1M18 8h2"/></svg>',book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4zM20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z"/></svg>',close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',sound:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/><path class="wave" d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11"/><path class="mute" d="M17 9l4 6M21 9l-4 6"/></svg>'},ie=(i,t="",e="")=>{const n=document.createElement(i);return t&&(n.className=t),e&&(n.innerHTML=e),n},Je=(i,t,e,n)=>{const s=ie("button",i,t);return s.type="button",s.setAttribute("aria-label",e),s.title=e,s.addEventListener("click",n),s},Is=i=>String(i).padStart(2,"0");class o_{constructor(t,e){this.on=e,this.root=t,this.root.className="ui",this.root.dataset.intro="true";const n=ie("header","top");n.innerHTML=`<div class="brand"><span class="mark" aria-hidden="true"></span><b>JADE GENESIS</b><i>${_t("brand.sub")}</i></div>`,this.guidedChip=ie("span","guided",`<i aria-hidden="true"></i>${_t("guided")}`),this.soundBtn=Je("chip sound",`${gn.sound}<span>${_t("btn.soundOff")}</span>`,_t("btn.soundOff"),()=>this.on.toggleSound());const s=ie("div","tools");s.append(this.guidedChip,this.soundBtn),n.append(s),this.intro=ie("section","intro"),this.intro.innerHTML=`<div class="kicker">${_t("intro.kicker")}</div><h1>${_t("intro.title")}</h1><p class="lead">${_t("intro.lead")}</p>`;const r=ie("div","cta-row");r.append(Je("pill primary big",`<span>${_t("intro.start")}</span>${gn.play}`,_t("intro.start"),()=>this.on.start()),Je("pill big",`<span>${_t("intro.explore")}</span>`,_t("intro.explore"),()=>this.on.explore())),this.intro.append(r,ie("p","note",_t("intro.note"))),this.story=ie("section","story"),this.know=ie("aside","know"),this.know.id="knowledge",this.know.setAttribute("aria-label",_t("card.title")),this.knowToggle=Je("know-toggle",`${gn.book}<span>${_t("btn.knowledge")}</span>`,_t("btn.knowledge"),()=>this.setKnowOpen(!this.know.classList.contains("open"))),this.knowToggle.setAttribute("aria-controls","knowledge"),this.knowToggle.setAttribute("aria-expanded","false");const o=ie("div","dock"),a=ie("nav","timeline");a.setAttribute("aria-label",_t("tl.label")),Zh.forEach((_,m)=>{const d=Je("step",`<span class="bar"><span class="fill"></span></span><span class="n">${Is(_.no)}</span><span class="zh">${_.title}</span>`,`${Is(_.no)} ${_.title}`,()=>this.on.goTo(m));d.dataset.stage=String(m),this.steps.push(d),this.stepFill.push(d.querySelector(".fill")),a.append(d)});const c=ie("div","controls");this.prevBtn=Je("round",gn.prev,_t("btn.prev"),()=>this.on.prev()),this.playBtn=Je("round primary play",gn.play,_t("btn.play"),()=>this.on.toggle()),this.nextBtn=Je("round",gn.next,_t("btn.next"),()=>this.on.next());const l=ie("div","speed");l.setAttribute("role","group"),l.setAttribute("aria-label",_t("speed.label"));for(const _ of[.5,1,2]){const m=Je("",`${_}×`,`${_}×`,()=>this.on.speed(_));l.append(m),this.speedBtns.set(_,m)}const h=ie("div","scrub");this.scrub=ie("input"),this.scrub.type="range",this.scrub.min="0",this.scrub.max="1000",this.scrub.step="1",this.scrub.setAttribute("aria-label",_t("scrub.label")),this.scrub.addEventListener("input",()=>{this.scrubbing=!0,this.on.seek(+this.scrub.value/1e3)}),this.scrub.addEventListener("change",()=>{this.scrubbing=!1}),this.ticks=ie("div","ticks"),this.ticks.setAttribute("aria-hidden","true"),this.phaseText=ie("div","phase"),h.append(this.phaseText,this.scrub,this.ticks),this.torchBtn=Je("pill torch",`${gn.torch}<span>${_t("btn.torch")}</span>`,_t("btn.torch"),()=>this.on.toggleTorch());const u=Je("round",gn.reset,_t("btn.reset"),()=>this.on.resetView());c.append(this.prevBtn,this.playBtn,this.nextBtn,l,h,this.torchBtn,u),o.append(a,c),this.showcaseBar=ie("div","showcase-bar");const f=ie("div","seg");f.setAttribute("role","group"),f.setAttribute("aria-label",_t("show.lights"));for(const _ of["gallery","soft","back"]){const m=Je("",_t(`show.${_}`),_t(`show.${_}`),()=>this.on.lightMode(_));f.append(m),this.lightBtns.set(_,m)}const p=ie("label","compare");this.compareInput=ie("input"),this.compareInput.type="range",this.compareInput.min="0",this.compareInput.max="100",this.compareInput.value="100",this.compareInput.setAttribute("aria-label",_t("show.compare")),this.compareInput.addEventListener("input",()=>this.on.compare(+this.compareInput.value/100)),p.append(ie("span","",_t("show.before")),this.compareInput,ie("span","",_t("show.after"))),this.showcaseBar.append(ie("span","lbl",_t("show.lights")),f,ie("span","lbl",_t("show.compare")),p),this.camChip=Je("cam-chip",_t("cam.free"),_t("cam.free"),()=>this.on.resetView()),this.hotLayer=ie("div","hots"),this.popover=ie("div","popover"),this.popover.setAttribute("role","dialog"),this.popover.hidden=!0,this.toast=ie("div","toast"),this.toast.setAttribute("role","status"),this.live=ie("div","sr-only"),this.live.setAttribute("aria-live","polite");const g=ie("div","hint",_t("hint"));this.root.append(n,this.intro,this.story,this.knowToggle,this.know,this.hotLayer,this.popover,this.toast,this.camChip,this.showcaseBar,g,o,this.live),this.panels=[this.story,this.know,o,this.knowToggle,this.intro,this.showcaseBar],window.addEventListener("keydown",_=>this.onKey(_)),document.addEventListener("pointerdown",_=>{!this.popover.hidden&&!this.popover.contains(_.target)&&!_.target.closest(".pin")&&this.closePopover()})}root;intro;story;know;knowToggle;steps=[];stepFill=[];playBtn;prevBtn;nextBtn;speedBtns=new Map;scrub;phaseText;ticks;torchBtn;soundBtn;showcaseBar;lightBtns=new Map;compareInput;camChip;guidedChip;hotLayer;pins=new Map;popover;toast;live;panels;last={};scrubbing=!1;hideIntro(){this.root.dataset.intro="false"}onKey(t){const e=t.target;if(!(e?.tagName==="INPUT"&&t.key!==" ")&&!(e?.tagName==="BUTTON"&&(t.key===" "||t.key==="Enter")))switch(t.key){case" ":t.preventDefault(),this.on.toggle();break;case"ArrowRight":t.preventDefault(),this.on.step(.02);break;case"ArrowLeft":t.preventDefault(),this.on.step(-.02);break;case"]":this.on.next();break;case"[":this.on.prev();break;case"r":case"R":this.on.resetView();break;case"t":case"T":this.on.toggleTorch();break;case"m":case"M":this.on.toggleSound();break;case"Escape":this.closePopover(),this.setKnowOpen(!1);break}}setKnowOpen(t){this.know.classList.toggle("open",t),this.knowToggle.setAttribute("aria-expanded",String(t))}update(t){const e=this.last;if(t.stage!==e.stage){const s=Dl(En[t.stage].id);this.renderKnowledge(s),this.steps.forEach((r,o)=>{r.classList.toggle("on",o===t.stage),r.classList.toggle("done",o<t.stage),o===t.stage?r.setAttribute("aria-current","step"):r.removeAttribute("aria-current")}),this.root.dataset.stage=String(t.stage),this.prevBtn.disabled=t.stage===0,this.nextBtn.disabled=t.stage===En.length-1,this.ticks.innerHTML=En[t.stage].phases.map(([r,o])=>`<span style="left:${r*100}%">${_t(o)}</span>`).join(""),this.closePopover(),this.live.textContent=_t("live.stage",{no:Is(s.no),title:s.title})}if((t.stage!==e.stage||t.progress!==e.progress)&&this.stepFill.forEach((s,r)=>{s.style.transform=`scaleX(${r<t.stage?1:r===t.stage?t.progress:0})`}),t.playing!==e.playing||t.progress>=1!=(e.progress??0)>=1){const s=t.playing?_t("btn.pause"):t.progress>=1?_t("btn.replay"):_t("btn.play");this.playBtn.innerHTML=t.playing?gn.pause:gn.play,this.playBtn.setAttribute("aria-label",s),this.playBtn.title=`${s} (Space)`}if(t.speed!==e.speed)for(const[s,r]of this.speedBtns)r.classList.toggle("on",s===t.speed),r.setAttribute("aria-pressed",String(s===t.speed));if(!this.scrubbing&&t.progress!==e.progress&&(this.scrub.value=String(Math.round(t.progress*1e3))),t.phase!==e.phase||t.progress!==e.progress){const s=Math.round(t.progress*100);this.phaseText.textContent=`${t.phase} · ${s}%`,this.scrub.setAttribute("aria-valuetext",`${t.phase}，${s}%`)}t.guided!==e.guided&&this.guidedChip.classList.toggle("show",t.guided),t.cameraMode!==e.cameraMode&&this.camChip.classList.toggle("show",t.cameraMode==="free"),t.torch!==e.torch&&(this.torchBtn.classList.toggle("on",t.torch),this.torchBtn.setAttribute("aria-pressed",String(t.torch)));const n=t.stage===2&&(t.torch||t.progress>.28&&t.progress<.88);if(n!==this.toast.classList.contains("show")&&(this.toast.textContent=_t("torch.note"),this.toast.classList.toggle("show",n)),t.sound!==e.sound&&(this.soundBtn.classList.toggle("on",t.sound),this.soundBtn.querySelector("span").textContent=t.sound?_t("btn.soundOn"):_t("btn.soundOff"),this.soundBtn.setAttribute("aria-pressed",String(t.sound)),this.soundBtn.setAttribute("aria-label",t.sound?_t("btn.soundOn"):_t("btn.soundOff"))),t.lightMode!==e.lightMode)for(const[s,r]of this.lightBtns)r.classList.toggle("on",s===t.lightMode),r.setAttribute("aria-pressed",String(s===t.lightMode));t.compare!==e.compare&&document.activeElement!==this.compareInput&&(this.compareInput.value=String(Math.round(t.compare*100))),this.root.classList.toggle("showcase-ready",t.stage===En.length-1&&t.progress>=1),Object.assign(this.last,t)}renderKnowledge(t){this.story.innerHTML=`
      <div class="kicker">STAGE ${Is(t.no)} / 12</div>
      <h1>${t.title}<small>${t.en}</small></h1>
      <p>${t.summary}</p>
      <div class="simp"><b>${_t("card.simplified")}</b>${t.simplification}</div>`,this.know.innerHTML=`
      <div class="kh"><span>${_t("card.title")}</span><span class="grade g${t.evidence}">${_t("card.evidence")} ${t.evidence}</span></div>
      <dl>
        <dt>${_t("card.terms")}</dt><dd>${t.terms.map(e=>`<b>${e.zh}</b> ${e.en!=="—"?`<i>${e.en}</i>`:""}<br/><span>${e.def}</span>`).join("<br/>")}</dd>
        <dt>${_t("card.purpose")}</dt><dd>${t.purpose}</dd>
        <dt>${_t("card.equipment")}</dt><dd>${t.equipment.join("、")}</dd>
        <dt>${_t("card.cautions")}</dt><dd>${t.cautions.join("<br/>")}</dd>
        <dt>${_t("card.sources")}</dt><dd class="src">${t.sources.map(e=>`<a href="${Oo[e].url}" target="_blank" rel="noopener">${Oo[e].title}</a><em>${Oo[e].grade}</em>`).join("")}</dd>
      </dl>`}setHotspots(t){const e=new Set,n=this.panels.filter(r=>r.offsetParent!==null&&getComputedStyle(r).opacity!=="0").map(r=>r.getBoundingClientRect()).filter(r=>r.width>0&&r.height>0),s=(r,o)=>n.some(a=>r>a.left-12&&r<a.right+12&&o>a.top-12&&o<a.bottom+12);for(const r of t){e.add(r.id);let o=this.pins.get(r.id);if(!o){const a=Il(r.id),c=ie("button","pin",`<span class="dot" aria-hidden="true"></span><span class="lbl"><b>${a.label}</b><i>${a.sub}</i></span>`);c.type="button",c.setAttribute("aria-label",a.label),c.dataset.id=r.id,c.addEventListener("click",l=>{l.stopPropagation();const h=c.getBoundingClientRect();this.showInfo(r.id,h.left,h.top)}),this.hotLayer.append(c),this.pins.set(r.id,c),o=c}o.hidden=!r.visible||s(r.x,r.y),o.style.transform=`translate(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px)`}for(const[r,o]of this.pins)e.has(r)||(o.hidden=!0)}showInfo(t,e,n){const s=Il(t),r=Dl(s.stage);this.popover.innerHTML=`<button class="x" type="button" aria-label="close">${gn.close}</button>
      <div class="kicker">STAGE ${Is(r.no)} · ${r.title}</div>
      <h2>${s.label}<small>${s.sub}</small></h2><p>${s.body}</p>`,this.popover.querySelector(".x").addEventListener("click",()=>this.closePopover()),this.popover.hidden=!1,this.popover.dataset.id=t;const o=Math.min(300,window.innerWidth-32);this.popover.style.left=`${Math.min(Math.max(16,e+18),window.innerWidth-o-16)}px`,this.popover.style.top=`${Math.min(Math.max(72,n-20),window.innerHeight-240)}px`}closePopover(){this.popover.hidden=!0}showFallback(t,e,n){let s=document.querySelector(".fallback");s||(s=ie("div","fallback"),s.setAttribute("role","alert"),document.body.append(s)),s.innerHTML=`<div class="card"><div class="kicker">JADE GENESIS</div><h1>${t}</h1><p>${e}</p>${n?`<button class="pill primary" type="button">${_t("fallback.retry")}</button>`:""}</div>`,s.hidden=!1,n&&s.querySelector("button").addEventListener("click",n)}hideFallback(){const t=document.querySelector(".fallback");t&&(t.hidden=!0)}}const Nl={type:"change"},hc={type:"start"},Kh={type:"end"},Lr=new qr,Fl=new yn,a_=Math.cos(70*$s.DEG2RAD),Te=new E,We=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zo=1e-6;class c_ extends jg{constructor(t,e=null){super(t,e),this.state=le.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new nn,this._lastTargetPosition=new E,this._quat=new nn().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ll,this._sphericalDelta=new Ll,this._scale=1,this._panOffset=new E,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new E,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=h_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=u_.bind(this),this._onContextMenu=v_.bind(this),this._onMouseWheel=p_.bind(this),this._onKeyDown=m_.bind(this),this._onTouchStart=g_.bind(this),this._onTouchMove=__.bind(this),this._onMouseDown=d_.bind(this),this._onMouseMove=f_.bind(this),this._interceptControlDown=x_.bind(this),this._interceptControlUp=M_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nl),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),s<-Math.PI?s+=We:s>Math.PI&&(s-=We),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Te.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new E(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Lr.origin.copy(this.object.position),Lr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lr.direction))<a_?this.object.lookAt(this.target):(Fl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lr.intersectPlane(Fl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zo||this._lastTargetPosition.distanceToSquared(this.target)>zo?(this.dispatchEvent(Nl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Te.copy(s).sub(this.target);let r=Te.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(We*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-We*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function l_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function h_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function u_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kh),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function d_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(hc)}function f_(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function p_(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(hc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kh))}function m_(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function g_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(hc)}function __(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function v_(i){this.enabled!==!1&&i.preventDefault()}function x_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Qh=i=>Math.min(1,Math.max(0,i)),y_=(i,t,e)=>Qh((i-t)/(e-t)),S_=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ie=(i,t,e)=>i+(t-i)*e,b_=(i,t)=>1-Math.exp(-3.2*t),Ol=new qn(new E(-25,.3,-6),new E(44,5,5));class w_{camera;controls;modeValue="auto";snapNext=!0;listeners=new Set;box=new qn;constructor(t){this.camera=new Qe(30,1,.1,200),this.controls=new c_(this.camera,t);const e=this.controls;e.enableDamping=!0,e.dampingFactor=.08,e.minDistance=2.4,e.maxDistance=16,e.minPolarAngle=.15,e.maxPolarAngle=1.42,e.enablePan=!0,e.panSpeed=.6,e.rotateSpeed=.7,e.zoomSpeed=.8,e.addEventListener("start",()=>this.setMode("free"))}get mode(){return this.modeValue}onMode(t){this.listeners.add(t)}setMode(t){t!==this.modeValue&&(this.modeValue=t,this.listeners.forEach(e=>e(t)))}setDistanceLimits(t,e){this.controls.minDistance=t,this.controls.maxDistance=e}reset(t=!1){this.setMode("auto"),t&&(this.snapNext=!0)}resize(t,e){const n=this.camera;n.aspect=t/e;const s=t<760;n.fov=s?42:30,s?n.setViewOffset(t,e,0,e*.1,t,e):n.setViewOffset(t,e,-t*.06,e*.02,t,e),n.updateProjectionMatrix()}update(t,e,n){if(this.modeValue==="auto"){const s=this.snapNext?1:b_(3.2,t);this.snapNext=!1,this.camera.position.lerp(e.position,s),this.controls.target.lerp(e.target,s)}this.controls.target.clamp(Ol.min,Ol.max),n&&this.modeValue==="free"&&(this.box.min.set(n.x-6,.3,n.z-5),this.box.max.set(n.x+6,4,n.z+5),this.controls.target.clamp(this.box.min,this.box.max)),this.controls.update(),this.camera.position.y<.4&&(this.camera.position.y=.4)}dispose(){this.controls.dispose()}}const Ge=new Uint8Array(512);{let i=1234567;const t=()=>{i|=0,i=i+1831565813|0;let n=Math.imul(i^i>>>15,1|i);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296},e=[...Array(256).keys()];for(let n=255;n>0;n--){const s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}for(let n=0;n<512;n++)Ge[n]=e[n&255]}const ko=i=>i*i*i*(i*(i*6-15)+10),vi=(i,t,e)=>i+(t-i)*e;function ni(i,t,e,n){const s=i<8?t:e,r=i<4?e:i===12||i===14?t:n;return(i&1?-s:s)+(i&2?-r:r)}function tu(i,t,e){const n=Math.floor(i)&255,s=Math.floor(t)&255,r=Math.floor(e)&255;i-=Math.floor(i),t-=Math.floor(t),e-=Math.floor(e);const o=ko(i),a=ko(t),c=ko(e),l=Ge[n]+s,h=Ge[l]+r,u=Ge[l+1]+r,f=Ge[n+1]+s,p=Ge[f]+r,g=Ge[f+1]+r;return vi(vi(vi(ni(Ge[h]&15,i,t,e),ni(Ge[p]&15,i-1,t,e),o),vi(ni(Ge[u]&15,i,t-1,e),ni(Ge[g]&15,i-1,t-1,e),o),a),vi(vi(ni(Ge[h+1]&15,i,t,e-1),ni(Ge[p+1]&15,i-1,t,e-1),o),vi(ni(Ge[u+1]&15,i,t-1,e-1),ni(Ge[g+1]&15,i-1,t-1,e-1),o),a),c)}function E_(i,t,e,n=4){let s=0,r=.5;for(let o=0;o<n;o++)s+=r*tu(i,t,e),i=i*2.03+1.7,t=t*2.03+9.2,e=e*2.03+3.1,r*=.5;return s}const Go=new E(1.32,.95,1.05),Hn=.8,Xn=new E(.25,.42,1).normalize(),Bl={normal:new E(.3,1,-.15).normalize(),d:.585},ks=0;function Kr(i){const t=1/Math.sqrt((i.x/Go.x)**2+(i.y/Go.y)**2+(i.z/Go.z)**2),e=E_(i.x*1.15+3,i.y*1.15,i.z*1.15,4)*.26+tu(i.x*4.5,i.y*4.5+2,i.z*4.5)*.035;return t*(1+e)}const xs=Kr(Xn)*.93,zl=new E;function Ga(i,t){if(i.y<-Hn||i.dot(Xn)>xs)return!1;const e=i.length();return e<1e-6?!0:(zl.copy(i).divideScalar(e),e<=Kr(zl))}function T_(i,t,e){const n=new E,s=Math.cos(t),r=Math.sin(t);let o=0,a=0;const c=.02;for(let l=c;l<3;l+=c){if(n.set(i,l*s,l*r),!Ga(n)){a=l;break}o=l}for(let l=0;l<18;l++){const h=(o+a)/2;n.set(i,h*s,h*r),Ga(n)?o=h:a=h}return o}function A_(){const i=Xn,t=new E(1,0,0).cross(i).normalize(),e=i.clone().cross(t);let n=new E,s=1/0;for(let r=-.6;r<=.6;r+=.01)for(let o=-.6;o<=.6;o+=.01){const a=i.clone().multiplyScalar(xs).addScaledVector(t,r).addScaledVector(e,o);if(!Ga(a.clone().addScaledVector(i,-.01)))continue;const c=Math.abs(a.dot(Bl.normal)-Bl.d)+Math.abs(r)*.02;c<s&&(s=c,n=a)}return n}const R_=`
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
`,C_=`
uniform float uRindAmt, uRough, uWet, uBump, uGreen, uEdgeGlow, uWave;
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
${R_}
vec3 toLinear(vec3 c){ return pow(c, vec3(2.2)); }
vec3 jadeColor(vec3 p, out float cotton, out float crack){
  vec3 q = p*0.85 + uField;
  vec3 w = vec3(fbm(q+1.7), fbm(q+9.2), fbm(q+4.4));
  float g = fbm(vec3(q.x*0.55, q.y*1.25, q.z*1.1) + w*1.25);
  float green = smoothstep(0.08, 0.5, g + uGreen);
  float deep  = smoothstep(0.40, 0.78, g + uGreen + 0.10*snoise(p*5.5));
  vec3 base = mix(vec3(0.74,0.82,0.70), vec3(0.58,0.71,0.56), smoothstep(-0.3,0.3,fbm(q*2.1+7.)));
  vec3 c = mix(base, vec3(0.36,0.64,0.41), green*0.9);
  c = mix(c, vec3(0.10,0.46,0.23), deep*0.85);
  cotton = clamp(smoothstep(0.35,0.75, fbm(p*3.2+w*1.5+5.))*0.7 + smoothstep(0.55,0.85, snoise(p*11.+w*2.))*0.45, 0., 1.);
  c = mix(c, vec3(0.90,0.93,0.88), cotton*0.28);
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
  vec3 c = mix(vec3(0.66,0.53,0.36), vec3(0.47,0.37,0.25), smoothstep(-0.25,0.45,a));
  c = mix(c, vec3(0.72,0.68,0.58), smoothstep(0.35,0.75,b)*0.55);
  c = mix(c, vec3(0.25,0.24,0.20), smoothstep(0.6,0.82,snoise(p*4.2+20.))*0.65);
  c *= 0.88 + 0.16*snoise(p*55.)*aaFade(p,55.) + 0.1*snoise(p*140.)*aaFade(p,140.);
  return c;
}
vec3 bumpNormal(vec3 surfPos, vec3 surfNorm, float h){
  vec3 sx=dFdx(surfPos), sy=dFdy(surfPos);
  vec3 R1=cross(sy,surfNorm), R2=cross(surfNorm,sx);
  float det=dot(sx,R1);
  vec3 grad=sign(det)*(dFdx(h)*R1+dFdy(h)*R2);
  return normalize(abs(det)*surfNorm-grad);
}
`,P_=`#include <color_fragment>
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
  diffuseColor.rgb = toLinear(col);`,L_=`#include <roughnessmap_fragment>
  roughnessFactor = mix(roughnessFactor, mix(0.9, 0.32, uWet), gRind);
  roughnessFactor = mix(roughnessFactor, 0.78, uRough);
  roughnessFactor = mix(roughnessFactor, 0.85, gMark);`,D_=`#include <normal_fragment_maps>
  float hb = gRind*(0.6*snoise(vJ*13.)*bumpFade(vJ,13.)+0.35*snoise(vJ*31.)*bumpFade(vJ,31.))
           + uRough*(0.35*snoise(vJ*vec3(60.,8.,60.))*bumpFade(vJ,60.) + 0.2*snoise(vJ*140.)*bumpFade(vJ,140.))
           + gCrack*0.25;
  // hand-ground faces are never optically flat: a gentle undulation keeps highlights local
  float wave = uWave*(1.-gRind)*0.07*snoise(vJ*1.7+3.);
  normal = bumpNormal(-vViewPosition, normal, hb*uBump + wave);`,I_=`#include <emissivemap_fragment>
  float td = distance(vJ, uTorch.xyz);
  totalEmissiveRadiance += uTorch.w * gJade * vec3(0.75,1.0,0.8) * exp(-td*td/0.09) * mix(1.0, 0.25, gRind);
  // edge translucency: thin grazing edges let scattered light through
  float edge = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0);
  totalEmissiveRadiance += uEdgeGlow * gJade * edge * (1.0 - gRind) * (1.0 - 0.5*gCotton);`,U_=`#include <lights_physical_fragment>
  #ifdef USE_TRANSMISSION
  material.transmission *= (1.-gRind)*(1.-0.45*gCotton)*(1.-0.6*gCrack)*(1.-gMark)*(1.-0.6*uRough);
  #endif`,N_=1.67,Ho=Xn.clone().multiplyScalar(xs);class Tn extends Pi{jade;morph;static field=new E(0,0,0);constructor(t={}){super({color:16777215,roughness:t.roughness??.3,transmission:t.transmission??.42,thickness:t.thickness??.6,ior:N_,attenuationColor:new Ut(6004330),attenuationDistance:t.attenuationDistance??.7,specularIntensity:.7,clearcoat:t.clearcoat??0,clearcoatRoughness:.12}),this.morph=t.morph??!1;const e=s=>Array.from({length:4},(r,o)=>s?.[o]?new E(...s[o]):new E),n=s=>Array.from({length:4},(r,o)=>s?.[o]?new Zt(...s[o]):new Zt);this.jade={uRindAmt:{value:t.rind??1},uRough:{value:t.rough??0},uWet:{value:t.wet??0},uBump:{value:t.bump??.035},uGreen:{value:t.green??.08},uEdgeGlow:{value:t.edgeGlow??.18},uField:{value:Tn.field},uWave:{value:t.wave??0},uMarks:{value:e(t.marks)},uMarkN:{value:t.marks?.length??0},uMarkSweep:{value:1},uPlans:{value:n(t.plans)},uPlanN:{value:t.plans?.length??0},uPlanSweep:{value:new Zt(1,1,1,1)},uHoles:{value:[new E,new E]},uHoleN:{value:0},uKerfs:{value:e()},uKerfN:{value:0},uReveal:{value:1},uFlat:{value:1},uWin:{value:new Zt(Ho.x,Ho.y,Ho.z,.95)},uSlot:{value:new Zt(0,0,0,0)},uTorch:{value:new Zt(0,0,0,0)}}}onBeforeCompile(t){Object.assign(t.uniforms,this.jade);const e=this.morph?`#define JADE_MORPH
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
`+C_).replace("#include <color_fragment>",P_).replace("#include <roughnessmap_fragment>",L_).replace("#include <normal_fragment_maps>",D_).replace("#include <emissivemap_fragment>",I_).replace("#include <lights_physical_fragment>",U_)}customProgramCacheKey(){return this.morph?"jade-v3-morph":"jade-v3"}}const Us=new E;function an(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Us.copy(t),Us[n]=0,Us.normalize();const l=.5*o/(o+a),h=1-Us.angleTo(i)/c;return Math.sign(Us[e])===1?h*l:a/(o+a)+l+l*(1-h)}class eu extends An{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new E,c=new E,l=new E(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new E,_=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=an(g,c,"z","y",r,n),f[d+1]=1-an(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[d+0]=1-an(g,c,"z","y",r,n),f[d+1]=1-an(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[d+0]=1-an(g,c,"x","z",r,t),f[d+1]=an(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-an(g,c,"x","z",r,t),f[d+1]=1-an(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-an(g,c,"x","y",r,t),f[d+1]=1-an(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[d+0]=an(g,c,"x","y",r,t),f[d+1]=1-an(g,c,"y","x",r,e);break}}}const Fn=(i,t,e=0,n={})=>new Pi({color:i,roughness:t,metalness:e,...n}),K={enamel:Fn(15460319,.42,0,{clearcoat:.35,clearcoatRoughness:.3}),sage:Fn(13226443,.5,0,{clearcoat:.2}),accent:Fn(3107663,.4,0,{clearcoat:.4}),steel:Fn(13159630,.28,1),darkSteel:Fn(5922659,.4,1),rubber:Fn(1974562,.85),brass:Fn(13214826,.3,1),grit:Fn(7171948,.95),plinth:Fn(16184302,.6),glass:new Pi({color:16777215,roughness:.02,transmission:1,thickness:.05,ior:1.5}),waterSurface:new Pi({color:12573142,roughness:.08,transparent:!0,opacity:.55,clearcoat:1}),water:new tn({color:13625070,roughness:.05,metalness:.1,transparent:!0,opacity:.7,depthWrite:!1})};function hn(i){return i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i}function Vt(i,t,e,n,s){return hn(new Et(new eu(i,t,e,4,n),s))}function Ot(i,t,e,n,s=64,r=!1){return hn(new Et(new Yn(i,t,e,s,1,r),n))}function kl(i,t,e=96){return hn(new Et(new Qs(i.map(([n,s])=>new et(n,s)),e),t))}function Zs(i,t,e){const n=new Wh(i.map(s=>new E(...s)));return hn(new Et(new cc(n,64,t,12),e))}function At(i,t,e,n){return i.position.set(t,e,n),i}function uc(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function F_(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,`rgba(0,0,0,${t})`),s.addColorStop(.5,`rgba(0,0,0,${t*.4})`),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,128,128);const r=new Et(new hi(i,i),new Ii({map:new jr(e),transparent:!0,depthWrite:!1}));return r.rotation.x=-Math.PI/2,r.position.y=.003,r.renderOrder=-1,r}const Xe={bladeRadius:1.55,bladeZ:-.25,carriageTop:1.22,bladeParkedY:3.5,bladeDownY:1.22-.06+1.55};function O_(){const i=new Wt;i.name="slab-saw";const t=new Wt;t.userData.info="saw",i.add(t),t.add(At(Vt(5.4,.9,3.4,.08,K.enamel),0,.45,0)),t.add(At(Vt(5.42,.08,3.42,.03,K.accent),0,.87,0));const e=4.9,n=3;t.add(At(Vt(e,.06,n,.02,K.darkSteel),0,.93,0));for(const T of[n/2,-n/2])t.add(At(Vt(e,.22,.05,.02,K.steel),0,1.04,T));for(const T of[e/2,-e/2])t.add(At(Vt(.05,.22,n,.02,K.steel),T,1.04,0));const s=new Et(new hi(e-.1,n-.1),K.waterSurface);s.rotation.x=-Math.PI/2,s.position.y=1.02,s.userData.info="coolant",t.add(s);for(const T of[-1.75,1.75]){const C=Ot(.05,.05,n-.1,K.steel,24);C.rotation.x=Math.PI/2,C.position.set(T,1.1,0),t.add(C)}const r=new Wt;r.add(At(Vt(4,.12,2.2,.03,K.sage),0,1.16,0));for(const T of[-1.42,1.42])r.add(At(Vt(.18,.55,.9,.03,K.darkSteel),T,Xe.carriageTop+.27,0));i.add(r),t.add(At(Vt(.5,4.6,.6,.06,K.enamel),2.15,3.1,-1.35));const o=new Wt;o.userData.info="blade",i.add(o),o.add(At(Vt(2.3,.45,.55,.06,K.enamel),1.15,0,-0));const a=Ot(.36,.36,.9,K.sage);a.rotation.z=Math.PI/2,a.position.set(1.5,0,0),o.add(a);const c=Ot(.38,.38,.06,K.accent);c.rotation.z=Math.PI/2,c.position.set(1.08,0,0),o.add(c);const l=Ot(.06,.06,1.2,K.steel);l.rotation.z=Math.PI/2,l.position.set(.5,0,0),o.add(l);const h=new Wt,u=Xe.bladeRadius,f=Ot(u-.03,u-.03,.018,K.steel,160);f.rotation.z=Math.PI/2,h.add(f);const p=44,g=new Js(new eu(.022,.05,.16,2,.006),K.grit,p),_=new Ft,m=new nn,d=new ln;for(let T=0;T<p;T++){const C=T/p*Math.PI*2;m.setFromEuler(d.set(-C,0,0)),_.compose(new E(0,Math.cos(C)*u,Math.sin(C)*u),m,new E(1,1,1)),g.setMatrixAt(T,_)}g.castShadow=!0,h.add(g);const x=Ot(.28,.28,.1,K.darkSteel);x.rotation.z=Math.PI/2,h.add(x);for(let T=0;T<6;T++){const C=T/6*Math.PI*2,b=Ot(.03,.03,.13,K.steel,12);b.rotation.z=Math.PI/2,b.position.set(0,Math.cos(C)*.18,Math.sin(C)*.18),h.add(b)}o.add(h);const y=K.accent.clone();y.side=qe;const v=hn(new Et(new Yn(u+.14,u+.14,.3,96,1,!0,Math.PI*.12,Math.PI*.76),y));v.rotation.z=Math.PI/2,o.add(v);const P=[];for(const T of[-1,1]){const C=new ye;C.position.set(T*.12,-.3,u*.55),o.add(Zs([[T*.5,1,.3],[T*.36,.6,u*.55-.2],[T*.12,-.2,u*.55]],.035,K.rubber));const b=Ot(.03,.02,.14,K.brass,16);b.position.copy(C.position),b.rotation.x=.6,o.add(b,C),P.push(C)}o.position.set(0,Xe.bladeParkedY,Xe.bladeZ);const A=Vt(.9,.5,.08,.03,K.sage);A.position.set(-1.9,.55,1.72),t.add(A);for(const[T,C]of[[3981946,-.25],[14701373,0],[15909198,.25]]){const b=Ot(.06,.06,.05,new tn({color:T,emissive:T,emissiveIntensity:.4}),24);b.rotation.x=Math.PI/2,b.position.set(-1.9+C,.6,1.77),t.add(b)}for(const[T,C]of[[-2.5,-1.5],[2.5,-1.5],[-2.5,1.5],[2.5,1.5]])t.add(At(Ot(.12,.15,.08,K.rubber,24),T,.04,C));return{root:i,blade:o,bladeDisc:h,carriage:r,nozzles:P,pickables:[t,o]}}const ve={x0:.17,x1:.31},Vn=ve.x1-ve.x0,dc=(ve.x0+ve.x1)/2,Ue=[{cy:.02,cz:.45},{cy:.02,cz:-.45}],De={ri:.28,ro:.41},nu=i=>({xc:dc,cy:Ue[i].cy,cz:Ue[i].cz}),Gl=[{ri:De.ri+.006,ro:De.ro-.006,t:Vn-.004,e:.12},{ri:.292,ro:.392,t:.112,e:.64},{ri:.296,ro:.388,t:.104,e:.82},{ri:.298,ro:.386,t:.1,e:1}];function B_(i){const t=[1,.85,.45,0],e=Math.min(2,Math.floor(i)),n=Math.min(1,Math.max(0,i-e));return{rough:t[e]+(t[e+1]-t[e])*n,clearcoat:Math.max(0,i-2)}}function ns(i){const t=Math.min(2,Math.max(0,Math.floor(i))),e=Math.min(1,Math.max(0,i-t)),n=Gl[t],s=Gl[t+1],r=(o,a)=>o+(a-o)*e;return{ri:r(n.ri,s.ri),ro:r(n.ro,s.ro),t:r(n.t,s.t),e:r(n.e,s.e)}}const Hl=new E,Vl=new nn,Wl=new E,Xl=new E,ql=new nn,Yl=new E;function Ns(i,t){t.decompose(i.position,i.quaternion,i.scale)}const qs=(i,t,e)=>new Ft().makeTranslation(i,t,e),ri=i=>new Ft().makeTranslation(i.x,i.y,i.z),z_=i=>new Ft().makeRotationX(i),Ti=i=>new Ft().makeRotationY(i),iu=i=>new Ft().makeRotationZ(i),k_=i=>new Ft().makeScale(i,i,i);function me(...i){const t=new Ft;for(const e of i)t.multiply(e);return t}function _n(i,t,e,n=0){i.decompose(Hl,Vl,Wl),t.decompose(Xl,ql,Yl);const s=Hl.clone().lerp(Xl,e);s.y+=Math.sin(Math.PI*e)*n;const r=Vl.clone().slerp(ql,e),o=Wl.clone().lerp(Yl,e);return new Ft().compose(s,r,o)}function Vo(i){return new E().setFromMatrixPosition(i)}function _e(i,t,e,n){return new E(t,e,n).applyMatrix4(i)}function G_(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,y=a.length;x<y;x++){const v=a[x],P=i.attributes[v];c[v]=new P.constructor(new P.array.constructor(P.count*P.itemSize),P.itemSize,P.normalized);const A=i.morphAttributes[v];A&&(l[v]||(l[v]=[]),A.forEach((T,C)=>{const b=new T.array.constructor(T.count*T.itemSize);l[v][C]=new T.constructor(b,T.itemSize,T.normalized)}))}const p=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=p*_;for(let x=0;x<r;x++){const y=n?n.getX(x):x;let v="";for(let P=0,A=a.length;P<A;P++){const T=a[P],C=i.getAttribute(T),b=C.itemSize;for(let S=0;S<b;S++)v+=`${~~(C[u[S]](y)*_+m)},`}if(v in e)h.push(e[v]);else{for(let P=0,A=a.length;P<A;P++){const T=a[P],C=i.getAttribute(T),b=i.morphAttributes[T],S=C.itemSize,L=c[T],z=l[T];for(let O=0;O<S;O++){const F=u[O],W=f[O];if(L[W](o,C[F](y)),b)for(let k=0,Y=b.length;k<Y;k++)z[k][W](o,b[k][F](y))}}e[v]=o,h.push(o),o++}}const d=i.clone();for(const x in i.attributes){const y=c[x];if(d.setAttribute(x,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),x in l)for(let v=0;v<l[x].length;v++){const P=l[x][v];d.morphAttributes[x][v]=new P.constructor(P.array.slice(0,o*P.itemSize),P.itemSize,P.normalized)}}return d.setIndex(h),d}function su(i,t=0){const e=i.attributes.position.count;return i.attributes.jpos||i.setAttribute("jpos",i.attributes.position.clone()),i.attributes.rim||i.setAttribute("rim",new Kt(new Float32Array(e).fill(t),1)),i}function jl(i,t=36){let e=new Zr(1,t);e.deleteAttribute("normal"),e.deleteAttribute("uv"),e=G_(e);const n=e.attributes.position,s=new Float32Array(n.count),r=new E;for(let o=0;o<n.count;o++){r.fromBufferAttribute(n,o).normalize(),r.multiplyScalar(Kr(r)),r.y<-Hn&&(r.y=-Hn-(r.y+Hn)*.04);let a=1;if(i){const c=r.dot(Xn)-xs;c>0&&r.addScaledVector(Xn,-c),a=1-$s.smoothstep(c,-.03,.02)}s[o]=a,n.setXYZ(o,r.x,r.y,r.z)}return e.computeVertexNormals(),e.setAttribute("rim",new Re(s,1)),su(e)}function H_(i,t,e,n=22,s=160,r=.05){const o=[],a=[],c=new E;for(let g=0;g<s;g++){const _=g/s*Math.PI*2;o[g]=T_(i,_),c.set(i,o[g]*Math.cos(_),o[g]*Math.sin(_)),a[g]=c.dot(Xn)>xs-.02}const l=[i,0,0],h=[0],u=[];for(let g=1;g<=n;g++){const _=1-Math.pow(1-g/n,1.6);for(let m=0;m<s;m++){const d=m/s*Math.PI*2,x=o[m]*_;l.push(i,x*Math.cos(d),x*Math.sin(d)),h.push(a[m]?0:$s.smoothstep(_,1-r,1-r*.35))}}const f=(g,_)=>1+(g-1)*s+_%s;for(let g=0;g<s;g++)t>0?u.push(0,f(1,g),f(1,g+1)):u.push(0,f(1,g+1),f(1,g));for(let g=1;g<n;g++)for(let _=0;_<s;_++){const m=f(g,_),d=f(g,_+1),x=f(g+1,_+1),y=f(g+1,_);t>0?u.push(m,y,x,m,x,d):u.push(m,x,y,m,d,x)}const p=new Se;return p.setAttribute("position",new Kt(l,3)),p.setAttribute("rim",new Kt(h,1)),p.setIndex(u),p.computeVertexNormals(),su(p)}function V_(i=36){const t=jl(!1,i),e=jl(!0,i);return t.setAttribute("wpos",e.attributes.position.clone()),t.setAttribute("wnormal",e.attributes.normal.clone()),t.setAttribute("rim",e.attributes.rim.clone()),e.dispose(),t}function ru(i,t=0){return new Ft().makeTranslation(i.xc+t,i.cy,i.cz).multiply(new Ft().makeRotationZ(-Math.PI/2))}function W_(i,t=96){const e=(i.ri+i.ro)/2,n=(i.ro-i.ri)/2,s=i.t/2,r=[];for(let o=0;o<=t;o++){const a=-Math.PI/2+o/t*Math.PI*2,c=Math.cos(a),l=Math.sin(a);r.push([e+n*Math.sign(c)*Math.abs(c)**i.e,s*Math.sign(l)*Math.abs(l)**i.e])}return r}class Wo{constructor(t,e,n){this.n=t,this.segs=e,this.frame=n;const s=(t+1)*(e+1);this.pos=new Float32Array(s*3),this.nor=new Float32Array(s*3),this.jp=new Float32Array(s*3);const r=[];for(let o=0;o<e;o++)for(let a=0;a<t;a++){const c=o*(t+1)+a,l=c+1,h=(o+1)*(t+1)+a,u=h+1;r.push(c,h,l,l,h,u)}this.geometry.setIndex(r),this.geometry.setAttribute("position",new Re(this.pos,3)),this.geometry.setAttribute("normal",new Re(this.nor,3)),this.geometry.setAttribute("jpos",new Re(this.jp,3)),this.geometry.setAttribute("rim",new Re(new Float32Array(s),1))}geometry=new Se;pos;nor;jp;update(t){const{n:e,segs:n,frame:s}=this;for(let r=0;r<=n;r++){const o=r/n*Math.PI*2,a=Math.sin(o),c=Math.cos(o);for(let l=0;l<=e;l++){const[h,u]=t[l],[f,p]=t[Math.max(0,l-1)],[g,_]=t[Math.min(e,l+1)];let m=_-p,d=-(g-f);const x=Math.hypot(m,d)||1;m/=x,d/=x;const y=(r*(e+1)+l)*3,v=h*a,P=h*c;this.pos[y]=v,this.pos[y+1]=u,this.pos[y+2]=P,this.nor[y]=m*a,this.nor[y+1]=d,this.nor[y+2]=m*c,this.jp[y]=s.xc+u,this.jp[y+1]=s.cy-v,this.jp[y+2]=s.cz+P}}for(const r of["position","normal","jpos"])this.geometry.getAttribute(r).needsUpdate=!0;this.geometry.computeBoundingSphere()}}function X_(i,t,e=24){const n=[],s=[[1e-4,-t/2],[i-.004,-t/2],[i,-t/2+.004],[i,t/2-.004],[i-.004,t/2],[1e-4,t/2]],r=s.slice(1).map((a,c)=>Math.hypot(a[0]-s[c][0],a[1]-s[c][1])),o=r.reduce((a,c)=>a+c,0);for(let a=0;a<=e;a++){let c=a/e*o,l=0;for(;l<r.length-1&&c>r[l];)c-=r[l],l++;const h=Math.min(1,c/r[l]);n.push([s[l][0]+(s[l+1][0]-s[l][0])*h,s[l][1]+(s[l+1][1]-s[l][1])*h])}return n}function q_(i,t,e,n=.04){if(t===null&&e===null)return i;const s=i.getAttribute("position"),r=i.getAttribute("wpos")??s,o=i.getIndex(),a=[],c=h=>[s.getX(h),r.getX(h)];for(let h=0;h<o.count;h+=3){const u=[o.getX(h),o.getX(h+1),o.getX(h+2)],f=u.flatMap(c),p=Math.min(...f),g=Math.max(...f);(t===null||g>=t-n)&&(e===null||p<=e+n)&&a.push(...u)}const l=new Se;for(const[h,u]of Object.entries(i.attributes))l.setAttribute(h,u);return l.setIndex(a),l.computeBoundingSphere(),l}const ou={thickness:1.4,attenuationDistance:.45,transmission:.42,roughness:.24,wave:1,morph:!0},Y_={thickness:1.2,attenuationDistance:.6,transmission:.45,roughness:.38,wave:.4},Xo={thickness:Vn,attenuationDistance:.35,transmission:.5,roughness:.38,wave:.3},qo=new Map;function $l(i,t){const e=`${i}:${t}`;return qo.has(e)||qo.set(e,H_(i,t)),qo.get(e)}class ts{constructor(t,e,n,s=Y_){this.lo=e,this.hi=n,this.shell=new Et(q_(t,e,n),new Tn(ou)),this.shell.material.clipShadows=!0,this.shell.userData.info="stone",this.group.add(this.shell),e!==null&&(this.local.push(new yn(new E(1,0,0),-e)),this.caps.push(new Et($l(e,-1),new Tn(s)))),n!==null&&(this.local.push(new yn(new E(-1,0,0),n)),this.caps.push(new Et($l(n,1),new Tn(s))));for(const r of this.caps)r.userData.info="cutface",this.group.add(r);for(const r of[this.shell,...this.caps])r.castShadow=r.receiveShadow=!0;this.shell.material.clippingPlanes=this.local.map(r=>r.clone()),this.group.visible=!1}group=new Wt;shell;caps=[];local=[];updateClipping(){this.group.visible&&(this.shell.updateMatrixWorld(),this.local.forEach((t,e)=>this.shell.material.clippingPlanes[e].copy(t).applyMatrix4(this.shell.matrixWorld)))}}class j_{intact;intactGroup=new Wt;A;B;B1;BR;S;B2;holeWall;core;bangleGroup=new Wt;bangle;bangleShape;shapeValue=-1;all;constructor(){const t=V_();this.intact=new Et(t,new Tn({...ou,thickness:1.6})),this.intact.castShadow=this.intact.receiveShadow=!0,this.intact.userData.info="stone",this.intactGroup.add(this.intact),this.A=new ts(t,null,ks),this.B=new ts(t,ks,null),this.B1=new ts(t,ks,ve.x0),this.BR=new ts(t,ve.x0,null),this.S=new ts(t,ve.x0,ve.x1,Xo),this.B2=new ts(t,ve.x1,null);for(const r of this.S.caps)r.userData.info="slab";this.S.shell.userData.info="slab";const e=nu(0),n=new Wo(1,160,e);n.update([[De.ro,Vn/2],[De.ro,-Vn/2]]),this.holeWall=new Et(n.geometry,new Tn({...Xo,rind:0})),this.holeWall.applyMatrix4(ru(e));const s=new Wo(24,120,e);s.update(X_(De.ri-.008,Vn)),this.core=new Et(s.geometry,new Tn({...Xo,rind:0})),this.core.userData.info="core";for(const r of[this.holeWall,this.core])r.castShadow=r.receiveShadow=!0,r.visible=!1,this.S.group.add(r);this.bangleShape=new Wo(96,220,e),this.bangle=new Et(this.bangleShape.geometry,new Tn({rind:0,green:.18,thickness:.09,attenuationDistance:.18,transmission:.55,roughness:.1,bump:.02,edgeGlow:.22})),this.bangle.castShadow=this.bangle.receiveShadow=!0,this.bangle.userData.info="bangle",this.bangleGroup.add(this.bangle),this.bangleGroup.visible=!1,this.setBangleShape(0),this.all=[this.intactGroup,...this.clipPieces.map(r=>r.group),this.bangleGroup]}get clipPieces(){return[this.A,this.B,this.B1,this.BR,this.S,this.B2]}get pickables(){return[this.intact,...this.clipPieces.flatMap(t=>[t.shell,...t.caps]),this.core,this.bangle]}hideAll(){this.intactGroup.visible=!1;for(const e of this.clipPieces)e.group.visible=!1;this.bangleGroup.visible=!1,this.core.visible=this.holeWall.visible=!1;const t=this.intact.material.jade;for(const e of[this.intact,this.B.shell,this.BR.shell])e.material.jade.uSlot.value.w=0,e.material.jade.uPlanN.value=0;t.uPlanN.value=0,t.uTorch.value.w=0,t.uWet.value=0;for(const e of this.S.caps){const n=e.material.jade;n.uMarkN.value=0,n.uKerfN.value=0,n.uHoleN.value=0}}setSlot(t,e,n){t.material.jade.uSlot.value.set(e,.012,n??0,n===null?0:1)}setWindow(t,e){const n=this.intact.material.jade;n.uReveal.value=t,n.uFlat.value=e}setWet(t){this.intact.material.jade.uWet.value=t}setPlanLines(t){this.setLinesOn(this.intact,[ks,ve.x0,ve.x1],t)}setLinesOn(t,e,n){const s=t.material.jade;e.forEach((r,o)=>s.uPlans.value[o].set(1,0,0,r)),s.uPlanN.value=e.length,s.uPlanSweep.value.set(n[0]??0,n[1]??0,n[2]??0,0)}setMarks(t,e=2){const n=[];for(let s=0;s<e;s++)n.push([Ue[s].cy,Ue[s].cz,De.ro],[Ue[s].cy,Ue[s].cz,De.ri]);for(const s of this.S.caps){const r=s.material.jade;n.forEach((o,a)=>r.uMarks.value[a].set(...o)),r.uMarkN.value=n.length,r.uMarkSweep.value=t}}setKerfs(t,e){for(const n of this.S.caps){const s=n.material.jade;let r=0;t&&s.uKerfs.value[r++].set(Ue[0].cy,Ue[0].cz,De.ro),e&&s.uKerfs.value[r++].set(Ue[0].cy,Ue[0].cz,De.ri),s.uKerfN.value=r}}setHole(t){for(const e of this.S.caps){const n=e.material.jade;n.uHoles.value[0].set(Ue[0].cy,Ue[0].cz,De.ro),n.uHoleN.value=t?1:0}this.holeWall.visible=t}setBangleShape(t){Math.abs(t-this.shapeValue)>1e-4&&(this.bangleShape.update(W_(ns(t))),this.shapeValue=t);const e=B_(t),n=this.bangle.material;n.jade.uRough.value=e.rough,n.roughness=.1+.55*e.rough,n.clearcoat=e.clearcoat}updateClipping(){for(const t of this.clipPieces)t.updateClipping()}}const Jl=ru(nu(0)),Fs=120,Yo=140;class Dr{object=new Wt;drops;mist;seeds;m=new Ft;q=new nn;up=new E(0,1,0);p=new E;v=new E;s=new E;constructor(){this.drops=new Js(new sc(.013,.08,2,6),K.water,Fs+Yo),this.drops.frustumCulled=!1,this.drops.userData.info="coolant";const t=uc(7);this.seeds=new Float32Array((Fs+Yo)*4).map(()=>t());const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,255,255,0.5)"),s.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.mist=new Hh(new ec({map:new jr(e),depthWrite:!1,transparent:!0})),this.object.add(this.drops,this.mist)}update(t,e,n,s){if(this.object.visible=e>.01,!this.object.visible)return;const r=Math.round(Fs*e);let o=0;for(let l=0;l<r;l++){const h=this.seeds.subarray(l*4,l*4+4),u=n[l%n.length],f=(t*1.6+h[0])%1;this.v.subVectors(s,u),this.p.copy(u).addScaledVector(this.v,f),this.p.y-=Math.sin(f*Math.PI)*.06,this.p.x+=(h[1]-.5)*.05*f,this.p.z+=(h[2]-.5)*.05*f,this.q.setFromUnitVectors(this.up,this.v.normalize()),this.m.compose(this.p,this.q,this.s.set(1,1+h[3],1)),this.drops.setMatrixAt(o++,this.m)}const a=Math.round(Yo*e);for(let l=0;l<a;l++){const h=this.seeds.subarray((Fs+l)*4,(Fs+l)*4+4),u=(t*1.3+h[0])%1;this.v.set((h[1]-.5)*1.6,.6+h[2]*1.2,.8+h[3]*1.4),this.p.copy(s).addScaledVector(this.v,u*.6),this.p.y-=2.4*u*u*.36,this.v.y-=4.8*u*.6,this.q.setFromUnitVectors(this.up,this.v.normalize());const f=.6+(1-u);this.m.compose(this.p,this.q,this.s.set(.7,f,.7)),this.drops.setMatrixAt(o++,this.m)}this.drops.count=o,this.drops.instanceMatrix.needsUpdate=!0,this.mist.position.copy(s).add(this.s.set(0,.1,.25));const c=.9+.08*Math.sin(t*3);this.mist.scale.set(c,c*.7,1),this.mist.material.opacity=.6*e}}function $_(i,t){const e=new Wt,n=.03;return e.add(kl([[.001,0],[i-n,0],[i,n],[i,t-n*2],[i-n*2,t],[.001,t]],K.plinth,128)),e.add(kl([[i*.995,t-.015],[i*1.005,t-.015],[i*1.005,t-.005],[i*.995,t-.005]],K.sage,128)),e.userData.top=t,e}function J_(){const i=new Wt,t=hn(new Et(new ac(.32,.035,24,96),K.brass)),e=hn(new Et(new Yn(.31,.31,.03,64),K.glass));e.rotation.x=Math.PI/2;const n=Ot(.04,.05,.16,K.brass);n.position.y=-.4;const s=Ot(.055,.045,.85,new Pi({color:11109731,roughness:.75}));return s.position.y=-.88,i.add(t,e,n,s),i}function Z_(){const i=new Wt,t=Ot(.07,.07,.9,K.darkSteel);t.rotation.z=Math.PI/2;const e=Ot(.11,.075,.2,K.darkSteel);e.rotation.z=-Math.PI/2,e.position.x=.54;const n=Ot(.075,.075,.25,K.rubber,24);n.rotation.z=Math.PI/2,n.position.x=-.15;const s=Ot(.095,.095,.01,new Ii({color:16776170}));return s.rotation.z=Math.PI/2,s.position.x=.645,i.add(t,e,n,s),i}function K_(i,t=1.15,e=.62){const n=document.createElement("canvas");n.width=720,n.height=Math.round(720*e/t);const s=n.getContext("2d");s.fillStyle="#fbfaf6",s.fillRect(0,0,n.width,n.height),s.strokeStyle="#d9d6cf",s.lineWidth=6,s.strokeRect(3,3,n.width-6,n.height-6),s.fillStyle="#2f6b4f",s.fillRect(40,44,10,70),i.forEach((h,u)=>{s.font=`${h.w??500} ${h.s}px "Noto Sans SC", "PingFang SC", "WenQuanYi Zen Hei", sans-serif`,s.fillStyle=h.c??"#222826",s.fillText(h.t,70,90+u*66)});const r=new jr(n);r.colorSpace=Ke,r.anisotropy=8;const o=new tn({map:r,roughness:.7}),a=new Et(new An(t,e,.012),[K.enamel,K.enamel,K.enamel,K.enamel,o,K.enamel]);a.castShadow=!0,a.rotation.x=-.25;const c=hn(new Et(new An(.06,e*.7,.3),K.sage));c.position.set(0,-e*.25,-.12),c.rotation.x=.2;const l=new Wt;return l.add(a,c),l}const ii=(i,t,e)=>new Ut(i,t,e).convertSRGBToLinear(),Os=(i,t)=>Math.sin(i*1.7+Math.sin(t*1.3))*.5+Math.sin(t*2.1+Math.cos(i*.7))*.5,rs=new Pi({color:13804106,roughness:.5,clearcoat:.3});function Q_(){const i=new Wt;for(const r of[-.2,.2])i.add(At(Vt(.75,.14,.13,.06,K.rubber),0,.07,r));i.add(At(Ot(.12,.12,.07,K.darkSteel,24),0,.17,0));const t=new Wt;t.position.y=.2,i.add(t),t.add(At(Vt(.6,.2,.42,.04,rs),-.05,.1,0)),t.add(At(Vt(.22,.24,.2,.03,rs),.12,.32,.1)),t.add(At(Vt(.2,.18,.21,.02,K.glass),.13,.33,.1)),t.add(At(Vt(.2,.16,.4,.03,K.darkSteel),-.28,.24,0));const e=new Wt;e.position.set(.18,.18,-.08),t.add(e),e.add(At(Vt(.65,.08,.07,.02,rs),.32,0,0));const n=new Wt;n.position.set(.64,0,0),e.add(n),n.add(At(Vt(.48,.06,.06,.02,rs),.24,0,0));const s=new Wt;return s.position.set(.48,0,0),n.add(s),s.add(At(Vt(.16,.12,.16,.02,K.darkSteel),.07,-.02,0)),{root:i,boom:e,stick:n,bucket:s}}function tv(){const i=new Wt;for(const[r,o]of[[-.2,.15],[-.2,-.15],[.25,.15],[.25,-.15]]){const a=Ot(.07,.07,.06,K.rubber,20);a.rotation.x=Math.PI/2,a.position.set(r,.07,o),i.add(a)}i.add(At(Vt(.75,.06,.32,.02,K.darkSteel),.02,.13,0)),i.add(At(Vt(.2,.2,.3,.03,rs),.3,.26,0)),i.add(At(Vt(.18,.1,.31,.02,K.glass),.32,.31,0)),i.add(At(Vt(.48,.16,.34,.03,rs),-.1,.25,0));const t=uc(9),e=new Js(new rc(1,0),new tn({color:9139032,roughness:1}),9),n=new Ft,s=new nn;for(let r=0;r<9;r++){const o=.05+t()*.03;s.setFromEuler(new ln(t()*3,t()*3,0)),e.setMatrixAt(r,n.compose(new E(-.25+t()*.3,.34+t()*.04,-.1+t()*.2),s,new E(o,o,o)))}return e.castShadow=!0,i.add(e),i}function ev(){const i=new Wt;i.name="mine";const t=6,e=100,n=1,s=-.7,r=new et(.35,.1),o=5,a=.27,c=.32,l=2.15,h=(F,W)=>{const k=(F-r.x)/1.15,Y=(W-r.y)/.9,V=Math.sqrt(k*k+Y*Y),Q=$s.clamp((l-V)/c,0,o),ot=Math.floor(Q),vt=Q-ot;let Pt=n-(ot+$s.smoothstep(vt,0,.38))*a;return Q>=o&&(Pt=n-o*a),Pt+Os(F*3,W*3)*.025+Os(F*9,W*9)*.01},u=new hi(t,t,e,e);u.rotateX(-Math.PI/2);const f=u.attributes.position;for(let F=0;F<f.count;F++)f.setY(F,h(f.getX(F),f.getZ(F)));u.computeVertexNormals();const p=u.attributes.normal,g=new Float32Array(f.count*3);for(let F=0;F<f.count;F++){const W=f.getY(F),k=1-p.getY(F),Y=f.getX(F),V=f.getZ(F);let Q;W>n-.02?Q=ii(.62,.66,.5).lerp(ii(.55,.6,.44),(Os(Y*2,V*2)+1)/2):k>.25?Q=ii(.6,.45,.33).lerp(ii(.48,.38,.3),(Math.sin(W*34)+1)/2):Q=ii(.8,.71,.56).lerp(ii(.72,.66,.58),(Os(Y*4,V*4)+1)/2),g.set([Q.r,Q.g,Q.b],F*3)}u.setAttribute("color",new Re(g,3));const _=new Et(u,new tn({vertexColors:!0,roughness:.95}));_.receiveShadow=_.castShadow=!0,_.userData.info="mine",i.add(_);const m=new tn({vertexColors:!0,roughness:.95,side:qe}),d=[[.58,.44,.32],[.66,.55,.4],[.5,.42,.34],[.72,.62,.48]].map(([F,W,k])=>ii(F,W,k)),x=t/2,y=F=>{const W=[],k=[],Y=[],V=e,Q=14;for(let Pt=0;Pt<=V;Pt++){const[Yt,q]=F(Pt/V),tt=h(Yt,q);for(let gt=0;gt<=Q;gt++){const st=s+(tt-s)*(gt/Q);W.push(Yt,st,q);const Rt=Math.abs(Math.floor((st+2)*9+Os(Yt*3,st*4)*1.4))%4,Dt=gt===Q?ii(.55,.6,.44):d[Rt];k.push(Dt.r,Dt.g,Dt.b)}}for(let Pt=0;Pt<V;Pt++)for(let Yt=0;Yt<Q;Yt++){const q=Pt*(Q+1)+Yt,tt=q+Q+1;Y.push(q,tt,q+1,tt,tt+1,q+1)}const ot=new Se;ot.setAttribute("position",new Kt(W,3)),ot.setAttribute("color",new Kt(k,3)),ot.setIndex(Y),ot.computeVertexNormals();const vt=new Et(ot,m);return vt.castShadow=vt.receiveShadow=!0,vt};i.add(y(F=>[-x+F*t,x]),y(F=>[x,x-F*t]),y(F=>[x-F*t,-x]),y(F=>[-x,-x+F*t])),i.add(At(Vt(t+.3,.3,t+.3,.06,K.plinth),0,s-.15,0));const v=new Et(new $r(.42,48),K.waterSurface);v.rotation.x=-Math.PI/2,v.scale.set(1.4,.8,1),v.position.set(r.x+.35,n-o*a+.03,r.y-.25),i.add(v);const P=uc(3),A=[];for(let F=0;F<26;F++){const W=-x+.25+P()*(t-.5),k=-x+.25+P()*(t-.5),Y=.6+P()*.6;h(W,k)>=n-.02&&A.push({x:W,z:k,s:Y})}const T=new Js(new Yn(.025,.03,.12,8),new tn({color:7165506,roughness:.9}),A.length),C=new Js(new Zr(.16,1),new tn({color:6257234,roughness:.9}),A.length),b=new Ft,S=new nn;A.forEach(({x:F,z:W,s:k},Y)=>{const V=h(F,W);T.setMatrixAt(Y,b.compose(new E(F,V+.06*k,W),S,new E(k,k,k))),C.setMatrixAt(Y,b.compose(new E(F,V+.24*k,W),S,new E(k,k*1.25,k)))}),C.castShadow=!0,i.add(T,C);const L=tv();L.position.set(-2.1,h(-2.1,1.9),1.9),L.rotation.y=-.7,L.scale.setScalar(1.3),i.add(L);const z=Q_(),O=new E(r.x-1.05,0,r.y+.25);return O.y=h(O.x,O.z),z.root.position.copy(O),z.root.rotation.y=.15,z.root.scale.setScalar(1.35),z.root.userData.info="excavator",i.add(z.root),{root:i,digger:z,height:h,pitFloor:new E(r.x,n-o*a,r.y)}}const tr=(i,t,e={})=>new Pi({color:i,roughness:t,...e}),nv=tr(11570538,.75),iv=tr(15525334,1,{sheen:1,sheenColor:new Ut(16777215),sheenRoughness:.6}),Zl=tr(15262422,1,{sheen:1,sheenColor:new Ut(16777215),sheenRoughness:.5}),sv=tr(10132887,.9);function rv(){const i=new Wt;i.add(At(Vt(3.6,.5,2.8,.08,K.enamel),0,.25,0)),i.add(At(Vt(3.62,.06,2.82,.03,K.accent),0,.49,0));const t=new Et(new hi(3.3,2.5),K.waterSurface);t.rotation.x=-Math.PI/2,t.position.y=.47,i.add(t);for(let s=-6;s<=6;s++)i.add(At(Vt(.16,.08,2.3,.02,nv),s*.24,.55,0));i.add(At(Ot(.05,.06,2.8,K.steel,24),-2.2,1.4,1)),i.add(At(Ot(.25,.3,.06,K.darkSteel),-2.2,.03,1));const e=new ye;e.position.set(-1.35,2.9,1.15),i.add(Zs([[-2.2,2.75,1],[-1.9,3.05,1.05],[-1.45,2.95,1.12],[-1.35,2.9,1.15]],.05,K.accent));const n=Ot(.06,.04,.3,K.brass,24);return n.position.copy(e.position),n.rotation.set(.5,0,.9),i.add(n,e),i.userData.info="wash",{root:i,nozzle:e,gratingTop:.59}}function ov(){const i=new Wt,t=Ot(.13,.13,.9,K.accent);t.rotation.z=Math.PI/2,i.add(t);const e=Vt(.3,.26,.3,.05,K.darkSteel);e.position.x=.55,i.add(e);const n=Ot(.32,.32,.02,K.grit);n.position.set(.55,-.2,0),n.name="disc",i.add(n);const s=hn(new Et(new Yn(.36,.36,.08,48,1,!0,0,Math.PI),K.sage.clone()));return s.material.side=qe,s.position.set(.55,-.17,0),i.add(s),i.userData.info="grinder-hand",i}function av(){const i=new Wt;i.add(At(Vt(4.2,.7,3,.06,K.enamel),0,.35,0));const t=new tn({color:16052972,emissive:16776694,emissiveIntensity:0});i.add(At(new Et(new An(3.2,.03,2.4),t),0,.715,0));const e=new Wt,n=Ot(.04,.04,.7,K.accent,24),s=Ot(.012,.03,.08,tr(12073514,.5),16);return s.position.y=-.39,e.add(n,s),i.add(e),i.userData.info="lightbox",{root:i,panel:t,top:.73,pen:e}}function cv(i,t,e=.9){const n=new Wt;n.add(At(Vt(3.4,.25,2,.05,K.enamel),.4,.125,0)),n.add(At(Vt(3.1,.06,1.7,.02,K.darkSteel),.4,.28,0)),n.add(At(Ot(.13,.13,3.6,K.steel),0,2,-.75));const s=new Wt;n.add(s),s.add(At(Vt(.7,.7,1.1,.08,K.enamel),0,.95,-.35)),s.add(At(Vt(.72,.1,1.12,.03,K.accent),0,.65,-.35)),s.add(At(Ot(.3,.3,.6,K.sage),0,1.55,-.35)),s.add(At(Ot(.09,.09,.4,K.steel),0,.45,0)),s.add(Zs([[.35,.9,-.1],[.75,1,.2],[.95,1.3,.45]],.025,K.steel));const r=c=>{const l=new Wt,h=K.steel.clone();return h.side=qe,l.add(At(Ot(c+.012,c+.012,e,h,96,!0),0,-e/2,0)),l.add(At(Ot(c+.016,c+.016,.05,K.grit,96,!0),0,-e+.02,0)),l.add(At(Ot(c+.03,c+.03,.06,K.darkSteel),0,0,0)),l.position.y=.25,l},o=r(t),a=r(i);return s.add(o,a),n.add(Zs([[-.3,3.2,-.2],[-.45,2.9,.1],[-.2,2.6,.3]],.025,K.rubber)),n.userData.info="drill",{root:n,head:s,outerBit:o,innerBit:a,tableTop:.31,headUp:2.3}}function lv(){const i=new Wt;i.add(At(Vt(3.4,.9,1.7,.08,K.enamel),-.4,.45,0)),i.add(At(Vt(3.42,.07,1.72,.03,K.accent),-.4,.86,0)),i.add(At(Vt(1.5,.75,.9,.1,K.sage),-1.1,1.3,0));const t=Ot(.06,.06,1.7,K.steel);t.rotation.z=Math.PI/2,t.position.set(.35,1.35,0),i.add(t);const e=Ot(.17,.17,.3,K.darkSteel);e.rotation.z=Math.PI/2,e.position.set(-.2,1.35,0),i.add(e),i.add(At(Vt(.3,.5,.4,.04,K.darkSteel),-.2,1.05,0));const n=new E(1,1.35,0),s=new Wt,r=Ot(.7,.7,.28,K.grit,128);r.rotation.z=Math.PI/2,s.add(r);const o=Ot(.22,.22,.34,K.steel);o.rotation.z=Math.PI/2,s.add(o);for(let m=0;m<8;m++){const d=m/8*Math.PI*2,x=Ot(.025,.025,.36,K.darkSteel,12);x.rotation.z=Math.PI/2,x.position.set(0,Math.cos(d)*.15,Math.sin(d)*.15),s.add(x)}const a=new Wt,c=Ot(.18,.18,.9,sv,64);c.rotation.z=Math.PI/2,c.position.x=.35,a.add(c);const l=Ot(.19,.19,.06,K.darkSteel,64);l.rotation.z=Math.PI/2,l.position.x=-.1,a.add(l);const h=new Wt,u=Ot(.2,.2,.9,iv,64);u.rotation.z=Math.PI/2,u.position.x=.35,h.add(u);const f=Ot(.21,.21,.06,K.brass,64);f.rotation.z=Math.PI/2,f.position.x=-.1,h.add(f);const p=K.sage.clone();p.side=qe;const g=hn(new Et(new Yn(.8,.8,.4,96,1,!0,Math.PI*.6,Math.PI*.8),p));g.rotation.z=Math.PI/2,s.add(g);for(const m of[s,a,h])m.position.copy(n),i.add(m);i.add(Zs([[.2,2.5,-.5],[.7,2.4,-.2],[1,2.25,.15]],.025,K.rubber));const _=Ot(.025,.018,.12,K.brass,16);return _.position.set(1,2.18,.18),i.add(_),i.userData.info="grind-bench",{root:i,spindle:n,wheel:s,drum:a,buff:h,spinning:[r,c,u]}}function hv(){const i=new Wt,t=1.3,e=1.1,n=.03,s=(h,u)=>hn(new Et(new Qs(h.map(([f,p])=>new et(f,p)),128),u));i.add(s([[.001,0],[t-n,0],[t,n],[t,e-n*2],[t-n*2,e],[.001,e]],K.plinth)),i.add(s([[t*.995,e-.015],[t*1.005,e-.015],[t*1.005,e-.005],[t*.995,e-.005]],K.brass));const r=hn(new Et(new Yn(1.15,1.15,.04,96),Zl));r.position.y=e+.02,i.add(r);const o=Vt(.9,.1,.36,.05,Zl);o.position.y=e+.09,i.add(o);const a=new Wt;a.add(At(Vt(1.3,.06,.02,.01,K.steel),0,0,0)),a.add(At(Vt(.05,.32,.025,.01,K.steel),-.6,-.17,0));const c=At(Vt(.12,.34,.03,.01,K.steel),.2,-.16,0);c.name="jaw",a.add(c),a.visible=!1,i.add(a);const l=new Wt;return l.add(At(Ot(.12,.2,.25,K.darkSteel),0,0,0)),l.add(At(Ot(.11,.11,.01,new Ii({color:16776170})),0,-.13,0)),l.visible=!1,i.add(l),i.userData.info="showcase",{root:i,top:e+.04,cradle:o,caliper:a,lamp:l}}class uv extends kh{constructor(){super();const t=new An;t.deleteAttribute("uv");const e=new tn({side:Be}),n=new tn,s=new Xg(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Et(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Et(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Et(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Et(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Et(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new Et(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Et(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new Et(t,es(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const p=new Et(t,es(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Et(t,es(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Et(t,es(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Et(t,es(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new Et(t,es(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function es(i){const t=new Ii;return t.color.setScalar(i),t}const Kl=15855336,dv=4868164;class fv{constructor(t,e){this.renderer=e;const n=new Ut(Kl);e.setClearColor(n),this.backdrop=new Ii({color:n.clone(),side:Be,fog:!1,toneMapped:!1});const s=new Et(new oc(60,48,24),this.backdrop);s.name="backdrop",t.add(s),t.fog=new tc(n.clone(),30,58);const r=new Et(new $r(60,64),new tn({color:15986922,roughness:1}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,r.name="floor",t.add(r);const o=new Oa(e);this.envTexture=o.fromScene(new uv,.04).texture,o.dispose(),t.environment=this.envTexture,t.environmentIntensity=.85,this.hemi=new Vg(16777215,14209218,.85),this.key=new Fo(16774890,2.3),this.key.position.set(9,10,6),this.key.target.position.set(4,0,-.5),this.key.castShadow=!0,this.key.shadow.bias=-3e-4,this.key.shadow.normalBias=.02,Object.assign(this.key.shadow.camera,{left:-9,right:9,top:9,bottom:-9,near:.5,far:40}),this.fill=new Fo(15397631,.45),this.fill.position.set(-7,3,3),this.rim=new Fo(16777215,.9),this.rim.position.set(-1,5,-9),t.add(this.hemi,this.key,this.key.target,this.fill,this.rim),this.base={hemi:.85,key:2.3,fill:.45,rim:.9},this.setShadowMapSize(2048)}key;hemi;fill;rim;base;envTexture;backdrop;paper=new Ut(Kl);dim=new Ut(dv);setShadowMapSize(t){this.key.shadow.mapSize.x!==t&&(this.key.shadow.mapSize.set(t,t),this.key.shadow.map?.dispose(),this.key.shadow.map=null)}focus(t,e){this.key.target.position.set(t,0,e),this.key.position.set(t+5,10,e+6),this.key.target.updateMatrixWorld()}setMode(t){const e={gallery:[1,1,1,1],soft:[1.5,.35,1.6,.6],back:[.35,.25,.2,3.2]}[t];this.mode=e}mode=[1,1,1,1];setExposure(t,e){const n=.12+.88*t,[s,r,o,a]=this.mode;this.hemi.intensity=this.base.hemi*n*s,this.key.intensity=this.base.key*n*r,this.fill.intensity=this.base.fill*n*o,this.rim.intensity=this.base.rim*n*a,e.environmentIntensity=.85*(.2+.8*t),this.backdrop.color.lerpColors(this.dim,this.paper,t),e.fog.color.copy(this.backdrop.color),this.renderer.setClearColor(this.backdrop.color)}dispose(){this.envTexture.dispose()}}const wt={mine:new E(-20,0,-2),wash:new E(-10,0,-.5),plinth:new E(0,0,0),saw:new E(8.5,0,-1.2),lightbox:new E(17,0,-.8),drill:new E(23.5,0,-.8),grind:new E(30.5,0,-.8),showcase:new E(39,0,0)},Gs={r:1.7,h:.75},au=1;class pv{scene=new kh;studio;pieces=new j_;mine;wash;torch=Z_();handGrinder=ov();saw;lightbox;drill;bench;showcase;sawWater=new Dr;washWater=new Dr;drillWater=new Dr;benchWater=new Dr;stationObjects=new Map;constructor(t){this.studio=new fv(this.scene,t);const e=(o,a,c)=>{o.position.add(a),this.scene.add(o);const l=Object.keys(wt).find(u=>wt[u]===a),h=this.stationObjects.get(l)??[];if(h.push(o),c){const u=F_(c,.22);u.position.x+=a.x,u.position.z+=a.z,this.scene.add(u),h.push(u)}this.stationObjects.set(l,h)};this.mine=ev(),this.mine.root.position.y=au,e(this.mine.root,wt.mine,9),this.wash=rv(),e(this.wash.root,wt.wash,5);const n=$_(Gs.r,Gs.h);n.userData.info="plinth",e(n,wt.plinth,5.5);const s=J_();s.scale.setScalar(.6),s.rotation.set(-Math.PI/2,0,.9),s.position.set(.95,Gs.h+.04,1.05);const r=K_([{t:"JADEITE  硬玉",s:52,w:700},{t:"Rough · 原石 · No.001",s:34,c:"#7d8580"},{t:"程序化示意标本",s:30,c:"#7d8580"}]);r.scale.setScalar(.62),r.position.set(-1.05,Gs.h+.2,1.05),r.rotation.y=.35,e(s,wt.plinth),e(r,wt.plinth),this.saw=O_(),e(this.saw.root,wt.saw,7.5),this.lightbox=av(),e(this.lightbox.root,wt.lightbox,6),this.drill=cv(De.ri,De.ro),e(this.drill.root,wt.drill,4.5),this.bench=lv(),e(this.bench.root,wt.grind,5.5),this.showcase=hv(),e(this.showcase.root,wt.showcase,4.2);for(const o of this.pieces.all)this.scene.add(o);for(const o of[this.sawWater,this.washWater,this.drillWater,this.benchWater])this.scene.add(o.object);this.torch.visible=!1,this.handGrinder.visible=!1,this.scene.add(this.torch,this.handGrinder)}showStations(t){for(const[e,n]of this.stationObjects){const s=t.includes(e);for(const r of n)r.visible=s}}get pickables(){return[...this.pieces.pickables,...this.saw.pickables,this.mine.root,this.wash.root,this.lightbox.root,this.drill.root,this.bench.root,this.showcase.root]}}const we=(i,t,e)=>new E(i,t,e),Ae=(i,t,e,n)=>i.clone().add(we(t,e,n)),qt=S_,mt=y_,mv=[["mine"],["mine","wash"],["wash","plinth"],["plinth"],["plinth"],["plinth","saw"],["saw","lightbox"],["lightbox","drill"],["drill","grind"],["grind"],["grind"],["grind","showcase"]],gv=Object.keys(wt),xi={wind:.25,motor:0,water:0,grind:0,buff:0},_v=.11,Ql=me(ri(Ae(wt.wash,0,.59+Hn,0)),Ti(.6)),On=me(ri(Ae(wt.plinth,0,Gs.h+Hn,0)),Ti(-.25)),jo=1.1,$o=.2,Jo=i=>ri(Ae(wt.saw,0,Xe.carriageTop+Hn,i)),cu=(i,t=0,e=0)=>me(ri(i),iu(Math.PI/2),qs(-dc,-t,-e)),th=cu(Ae(wt.lightbox,0,.73+Vn/2,0)),eh=cu(Ae(wt.drill,0,.31+Vn/2,0),Ue[0].cy,Ue[0].cz),Ze=(i,t,e,n=0)=>me(qs(i,t,e),Ti(n)),nh=iu(-Math.PI/2),ih=.4,Mi=Ae(wt.drill,1.45,.31+Vn/2,.2),sh=.18;class Ai{constructor(t){this.w=t;const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),s=n.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(236,230,214,0.7)"),s.addColorStop(1,"rgba(236,230,214,0)"),n.fillStyle=s,n.fillRect(0,0,128,128),this.dust=new Hh(new ec({map:new jr(e),depthWrite:!1,transparent:!0})),this.dust.visible=!1,t.scene.add(this.dust);const r=new Se;r.setAttribute("position",new Re(new Float32Array(6),3)),this.dimLine=new Pg(r,new Vh({color:2847569,depthTest:!1})),this.dimLine.frustumCulled=!1,this.dimLine.renderOrder=10,this.dimLine.visible=!1,t.scene.add(this.dimLine)}fissure=A_();dust;dimLine;bladeAngle=0;wheelAngle=0;mineEnd;mineAttach;sixEnd;keyCache=new Map;manualTorch=null;torchMode=!1;lightMode="gallery";compare=1;cullStations=!0;lastExposure=1;static stationOf(t){return[wt.mine,wt.wash,wt.plinth,wt.plinth,wt.plinth,wt.saw,wt.lightbox,wt.drill,wt.grind,wt.grind,wt.grind,wt.showcase][t]}apply(t,e,n,s){const r=this.w;r.pieces.hideAll(),this.idleMachines();const o=Ai.stationOf(t);r.studio.focus(o.x,o.z),r.showStations(this.cullStations?mv[t]:gv),r.studio.setMode(t===11?this.lightMode:"gallery");let a=1,c={...xi},l=[];switch((t===6&&e<.4||t===8)&&this.showLeftovers(t),t){case 0:{const h=this.mineAttachPose();this.setArm(this.armAt(e));const u=e<.45?h:this.bucketStonePose();this.showIntact(u,{reveal:0,flat:0}),c={...xi,wind:.5,motor:.35*(mt(e,.15,.25)-mt(e,.92,1))},r.scene.updateMatrixWorld(),l=[{id:"mine",world:wt.mine.clone().add(r.mine.pitFloor).add(we(.3,au,0))},{id:"excavator",world:_e(r.mine.digger.root.matrixWorld,0,.5,0)},...e>.5?[{id:"stone",world:Vo(u)}]:[]];break}case 1:{const h=qt(mt(e,0,.25));this.setArm(this.armAt(1));const u=_n(this.mineEndPose(),Ql,h,3),f=qt(mt(e,.3,.7));this.showIntact(u,{reveal:0,flat:0,wet:f});const p=mt(e,.25,.32)*(1-mt(e,.85,.92));r.scene.updateMatrixWorld();const g=_e(u,-.4,.6,.3);r.washWater.update(n,p,[r.wash.nozzle.getWorldPosition(new E)],g),c={...xi,water:p},l=e>.5?[{id:"rind",world:_e(u,.3,.7,.6)}]:[];break}case 2:{const h=qt(mt(e,0,.18)),u=_n(Ql,On,h,1.6),f=1-mt(e,.15,.55);this.showIntact(u,{reveal:0,flat:0,wet:f}),a=this.torchMode?0:1-mt(e,.2,.3)+mt(e,.86,.96);const p=this.torchMode||e>.28&&e<.88;p&&this.placeTorch(u,e),l=p?[{id:"torch",world:r.torch.position.clone()}]:e>.2?[{id:"rind",world:_e(u,-.9,.55,.55)}]:[];break}case 3:{const h=mt(e,.25,.8);this.showIntact(On,{reveal:h,flat:qt(h)}),this.placeHandGrinder(e,n),c={...xi,grind:mt(e,.2,.25)*(1-mt(e,.8,.85))},l=[{id:"rind",world:_e(On,-.9,.55,.55)},...e>.7?[{id:"window",world:this.windowPoint(-.3)}]:[]];break}case 4:{this.showIntact(On,{reveal:1,flat:1}),r.pieces.setPlanLines([qt(mt(e,.15,.45)),qt(mt(e,.45,.65)),qt(mt(e,.65,.85))]),l=[{id:"fissure",world:_e(On,this.fissure.x,this.fissure.y,this.fissure.z)},...e>.5?[{id:"cutlines",world:_e(On,0,.93,.15)}]:[]];break}case 5:{const h=this.slabbing(e,n,s);c=h.sound,l=h.hot;break}case 6:{const h=this.sixEndPoses(),u=_n(h.S,th,qt(mt(e,0,.35)),1.4);this.showPiece(r.pieces.S,u);const f=qt(mt(e,.35,.45));r.lightbox.panel.emissiveIntensity=1.1*f;const p=mt(e,.45,.95);r.pieces.setMarks(p),this.placePen(u,p,e),l=e>.4?[{id:"slab",world:_e(u,ve.x1,-.55,-.2)},{id:"fissure-slab",world:_e(u,ve.x1,.52,-.1)},...e>.95?[{id:"marks",world:_e(u,ve.x1,Ue[0].cy,Ue[0].cz+De.ro)}]:[]]:[];break}case 7:{const h=this.coring(e,n);c=h.sound,l=h.hot;break}case 8:case 9:case 10:{const h=this.grinding(t,e,n,s);c=h.sound,l=h.hot;break}case 11:{l=this.showcase(e).hot;break}}return r.studio.setExposure(a,r.scene),this.lastExposure=a,r.scene.updateMatrixWorld(),r.pieces.updateClipping(),{shot:this.shot(t,e),hotspots:l,sound:c,orbitTarget:this.shot(t,e).target}}idleMachines(){const t=this.w;t.torch.visible=!1,t.handGrinder.visible=!1,this.dust.visible=!1,this.dimLine.visible=!1,t.saw.blade.position.y=Xe.bladeParkedY,t.saw.carriage.position.set(0,0,jo),t.lightbox.panel.emissiveIntensity=0,t.lightbox.pen.visible=!1,t.drill.head.position.y=t.drill.headUp-.7,t.drill.outerBit.visible=!0,t.drill.innerBit.visible=!1,t.bench.wheel.visible=!0,t.bench.drum.visible=t.bench.buff.visible=!1,t.showcase.caliper.visible=t.showcase.lamp.visible=!1;for(const e of[t.sawWater,t.washWater,t.drillWater,t.benchWater])e.update(0,0,[],new E)}showIntact(t,e){const n=this.w.pieces.intactGroup;Ns(n,t),n.visible=!0,this.w.pieces.setWindow(e.reveal,e.flat),this.w.pieces.setWet(e.wet??0)}showPiece(t,e){Ns(t.group,e),t.group.visible=!0}windowPoint(t=0){const e=Xn.clone().multiplyScalar(xs);return _e(On,e.x,e.y+t,e.z)}armAt(t){const e=qt(mt(t,.25,.45)),n=qt(mt(t,.45,.6)),s=qt(mt(t,.6,.95));return{boom:Ie(Ie(Ie(.55,.22,e),.22,n),.85,s),stick:Ie(Ie(-1.35,-1.55,e),-1.15,n)+0*s,bucket:Ie(Ie(-.9,-1.1,e),-.1,n)+.35*s}}setArm(t){const e=this.w.mine.digger;e.boom.rotation.z=t.boom,e.stick.rotation.z=t.stick,e.bucket.rotation.z=t.bucket}bucketStonePose(){const t=this.w.mine.digger.bucket;t.updateWorldMatrix(!0,!1);const e=_e(t.matrixWorld,.08,.05,0);return me(ri(e),Ti(.4),k_(_v))}mineAttachPose(){return this.mineAttach||(this.setArm(this.armAt(.45)),this.mineAttach=this.bucketStonePose(),this.setArm(this.armAt(0))),this.mineAttach}mineEndPose(){return this.mineEnd||(this.setArm(this.armAt(1)),this.mineEnd=this.bucketStonePose()),this.mineEnd}placeTorch(t,e){let n,s;if(this.torchMode&&this.manualTorch)({point:n,normal:s}=this.manualTorch);else{const c=[we(-.55,.45,.7),we(.05,.6,.8),we(.65,.3,.7)].map(f=>f.normalize()),l=mt(e,.3,.86)*2,h=Math.min(1,Math.floor(l)),u=c[h].clone().lerp(c[h+1],qt(l-h)).normalize();n=u.clone().multiplyScalar(Kr(u)*.99),s=u}this.w.pieces.intact.material.jade.uTorch.value.set(n.x,n.y,n.z,3.2);const r=n.clone().applyMatrix4(t),o=s.clone().transformDirection(t),a=this.w.torch;a.visible=!0,a.quaternion.setFromUnitVectors(we(1,0,0),o.clone().negate()),a.position.copy(r).addScaledVector(o,.66)}placeHandGrinder(t,e){const n=this.w.handGrinder,s=Xn.clone().transformDirection(On),r=this.windowPoint(),o=qt(mt(t,.05,.25))*(1-qt(mt(t,.8,.98)));if(o<=0)return;n.visible=!0;const a=we(1,0,0).cross(s).normalize(),c=mt(t,.25,.8)>0&&mt(t,.25,.8)<1?Math.sin(e*5)*.08:0,l=r.clone().addScaledVector(s,Ie(1.4,.02,o)).addScaledVector(a,c).add(we(0,Ie(.8,0,o),0));n.scale.setScalar(ih),n.quaternion.setFromUnitVectors(we(0,1,0),s),n.position.copy(l).sub(we(.55,-.2,0).multiplyScalar(ih).applyQuaternion(n.quaternion));const h=n.getObjectByName("disc");h&&(h.rotation.y=e*30);const u=mt(t,.25,.8);if(u>0&&u<1){this.dust.visible=!0,this.dust.position.copy(r).addScaledVector(s,.2);const f=.8+.1*Math.sin(e*7);this.dust.scale.set(f*.6,f*.42,1)}}slabbing(t,e,n){const s=this.w,r=s.pieces,o=qt(mt(t,.12,.2)),a=Ie(jo,$o,o);s.saw.carriage.position.set(0,0,a);const c=_n(On,Jo(jo),qt(mt(t,0,.12)),1.8),l=t<.12?c:Jo(a),h=(F,W,k)=>qt(mt(t,F,W))*(1-qt(mt(t,W,k))),u=h(.2,.38,.43),f=h(.66,.72,.75),p=h(.78,.84,.87);s.saw.blade.position.y=Ie(Xe.bladeParkedY,Xe.bladeDownY,Math.max(u,f,p));const g=mt(t,.15,.2)*(1-mt(t,.43,.47))+mt(t,.62,.66)*(1-mt(t,.87,.9));this.bladeAngle-=n*14*g,s.saw.bladeDisc.rotation.x=this.bladeAngle;const _=qt(mt(t,.43,.55)),m=qt(mt(t,.6,.66)),d=qt(mt(t,.75,.78)),x=qt(mt(t,.87,.97)),y=_n(Ze(-.8*_,0,.4*_,-.72*_),Ze(-2.1,0,.5,-.72),m),v=Ze(.8*_,0,.4*_,.72*_),P=Ze(-Ie(ve.x0,ve.x1,d),0,0),A=_n(v,P,m),T=Xe.carriageTop+Hn,C=(F,W)=>Ie(Xe.bladeParkedY,Xe.bladeDownY,qt(mt(t,F,W)))-Xe.bladeRadius-T;_<=0?(this.showIntact(l,{reveal:1,flat:1}),r.setPlanLines([t>.2?0:1,1,1]),t>.2&&r.setSlot(r.intact,ks,C(.2,.38))):(this.showPiece(r.A,me(l,y)),t<.72?(this.showPiece(r.B,me(l,A)),r.setLinesOn(r.B.shell,[ve.x0,ve.x1],[t>.66?0:1,1]),t>.66&&r.setSlot(r.B.shell,ve.x0,C(.66,.72))):t<.84?(this.showPiece(r.B1,me(l,A)),this.showPiece(r.BR,me(l,A)),r.setLinesOn(r.BR.shell,[ve.x1],[t>.78?0:1]),t>.78&&r.setSlot(r.BR.shell,ve.x1,C(.78,.84))):(this.showPiece(r.B1,me(l,A,Ze(-.35*x,0,0))),this.showPiece(r.S,me(l,A,Ze(0,0,.6*x))),this.showPiece(r.B2,me(l,A,Ze(.45*x,0,0))))),s.scene.updateMatrixWorld();const b=s.saw.nozzles.map(F=>F.getWorldPosition(new E)),S=Math.max(u,f,p),L=Xe.carriageTop+Hn+.9,z=Ae(wt.saw,0,Ie(L,Xe.carriageTop+.35,S),a+.55);s.sawWater.update(e,g,b,z);const O=[];return t>.1&&O.push({id:"saw",world:Ae(wt.saw,-1.9,.9,1.75)}),t>.2&&t<.42&&O.push({id:"blade",world:_e(s.saw.blade.matrixWorld,0,1,.9)},{id:"coolant",world:z}),t>.5&&t<.6&&O.push({id:"cutface",world:_e(me(l,y),0,.35,-.2)},{id:"fissure-cut",world:_e(me(l,A),0,.6,0)}),t>.95&&O.push({id:"slab",world:_e(me(l,A,Ze(0,0,.6)),dc,.3,0)}),{sound:{...xi,motor:g*.8,water:g*.7},hot:O}}sixEndPoses(){if(!this.sixEnd){const t=Jo($o),e=Ze(-.31,0,0);this.sixEnd={A:me(t,Ze(-2.1,0,.5,-.72)),B1:me(t,e,Ze(-.35,0,0)),S:me(t,e,Ze(0,0,.6)),B2:me(t,e,Ze(.45,0,0))}}return this.sixEnd}showLeftovers(t){const e=this.sixEndPoses(),n=this.w.pieces;t===6&&(this.showPiece(n.A,e.A),this.showPiece(n.B1,e.B1),this.showPiece(n.B2,e.B2),this.w.saw.carriage.position.set(0,0,$o)),t===8&&(this.showPiece(n.S,eh),n.setMarks(1),n.setKerfs(!0,!0),n.setHole(!0),n.core.visible=!0,Ns(n.core,Ai.CORE_ASIDE))}static CORE_ASIDE=Jl;placePen(t,e,n){const s=this.w.lightbox.pen;if(n<.4||n>.98)return;s.visible=!0;const r=Math.min(3,Math.floor(e*4)),o=e*4-r,a=Ue[r>>1],c=r%2===0?De.ro:De.ri,l=o*Math.PI*2-Math.PI,h=_e(t,ve.x1+.005,a.cy+c*Math.cos(l),a.cz+c*Math.sin(l)),u=wt.lightbox;s.position.copy(h).sub(u).add(we(.12,.4,.12)),s.rotation.set(.3,0,-.3)}coring(t,e){const n=this.w,s=n.pieces,r=n.drill,o=_n(th,eh,qt(mt(t,0,.14)),1.2);this.showPiece(s.S,o),s.setMarks(1);const a=1.12,c=.92,l=r.headUp-.7,h=(x,y,v,P)=>{const A=qt(mt(t,x,y)),T=mt(t,y,v),C=qt(mt(t,v,P));return Ie(Ie(Ie(l,a,A),c,T),l,C)},u=t<.47;r.outerBit.visible=u,r.innerBit.visible=!u,r.head.position.y=u?h(.14,.2,.38,.45):h(.5,.55,.7,.76);const f=mt(t,.2,.38)>0&&mt(t,.2,.38)<1||mt(t,.55,.7)>0&&mt(t,.55,.7)<1;s.setKerfs(t>.3,t>.64);const p=qt(mt(t,.76,.86)),g=qt(mt(t,.86,.95));if(t>.76){s.setHole(!0);const x=me(o,Jl,qs(0,.6*p,0)),y=qs(Mi.x,Mi.y,Mi.z);this.showBangle(_n(x,y,g,.3),0)}s.core.visible=!0;const _=Ai.CORE_ASIDE;Ns(s.core,_),n.scene.updateMatrixWorld();const m=Ae(wt.drill,0,.31+Vn+.05,0);n.drillWater.update(e,f?.5:0,[Ae(wt.drill,-.2,2.6,.3)],m);const d=[];return t>.14&&d.push({id:"drill",world:Ae(wt.drill,.4,2.6,-.3)}),t>.2&&t<.47&&d.push({id:"outer-bit",world:Ae(wt.drill,De.ro+.05,.9,0)}),t>.55&&t<.76&&d.push({id:"inner-bit",world:Ae(wt.drill,De.ri+.05,.85,0)}),t>.97&&(d.push({id:"blank",world:Mi.clone().add(we(De.ro,.05,0))}),d.push({id:"core",world:_e(me(o,_),0,.1,0)}),d.push({id:"offcut",world:_e(o,ve.x1,-.5,-.4)})),{sound:{...xi,motor:f?.6:r.head.position.y<l-.01?.25:0,water:f?.3:0},hot:d}}showBangle(t,e){const n=this.w.pieces;Ns(n.bangleGroup,t),n.bangleGroup.visible=!0,n.setBangleShape(e)}benchPose(t,e,n){const s=wt.grind.clone().add(this.w.bench.spindle),r=ns(e);if(t==="wheel")return me(ri(s.clone().add(we(0,0,.7+r.ro))),nh,Ti(n));const o=t==="drum"?sh:sh+.02;return me(ri(s.clone().add(we(.45,-(r.ri-o),0))),nh,Ti(n))}grinding(t,e,n,s){const r=this.w,o=r.bench,a=t-8,c=a===0?.18:.12,l=a+mt(e,c,.95);this.wheelAngle+=s*18*(mt(e,c-.05,c)*(1-mt(e,.95,1))),o.wheel.visible=a===0,o.drum.visible=a===1,o.buff.visible=a===2;for(const d of o.spinning)d.rotation.x=this.wheelAngle;const h=n*.8,u=["wheel","drum","buff"][a],f=this.benchPose(u,l,h);let p;if(a===0){const d=qs(Mi.x,Mi.y,Mi.z);p=_n(d,f,qt(mt(e,0,.18)),1.6)}else{const d=this.benchPose(["wheel","drum","buff"][a-1],a,h);p=_n(d,f,qt(mt(e,0,.12)),.5)}this.showBangle(p,l),r.scene.updateMatrixWorld();const g=mt(e,c,c+.03)*(1-mt(e,.95,1)),_=Vo(p).add(a===0?we(0,0,-ns(l).ro):we(0,ns(l).ri,0));a<2&&r.benchWater.update(n,g*.45,[Ae(wt.grind,1,2.18,.18)],_);const m=[{id:["wheel","drum","buff"][a],world:a===0?Ae(wt.grind,1,2.1,0):Ae(wt.grind,1.6,1.45,0)}];return e>.3&&m.push({id:["bangle-rough","bangle-fine","bangle-polish"][a],world:Vo(p).add(we(0,ns(l).ro,.2))}),{sound:{...xi,motor:g*.5,grind:a<2?g*(a===0?.9:.5):0,buff:a===2?g*.6:0,water:a<2?g*.25:0},hot:m}}static SHOWCASE_POSE=me(ri(Ae(wt.showcase,0,1.14+.1+.386,0)),Ti(-.65),z_(Math.PI/2));showcase(t){const e=this.w,n=e.showcase,s=this.benchPose("buff",3,0),r=_n(s,Ai.SHOWCASE_POSE,qt(mt(t,0,.16)),1.4);if(this.showBangle(r,3),t>=1&&this.compare<1){const u=e.pieces.bangle.material;u.jade.uRough.value=1-this.compare,u.roughness=.1+.55*(1-this.compare),u.clearcoat=this.compare}const o=mt(t,.2,.36),a=ns(3).ri;if(t>.2&&t<.5){const u=qt(o),f=_e(r,-a*u,0,0),p=_e(r,a*u,0,0),g=this.dimLine.geometry.getAttribute("position");g.setXYZ(0,f.x,f.y,f.z),g.setXYZ(1,p.x,p.y,p.z),g.needsUpdate=!0,this.dimLine.visible=!0}const c=mt(t,.36,.5);c>0&&c<1?(n.lamp.visible=!0,n.lamp.position.set(.2,2.6,.5),e.pieces.bangle.material.jade.uEdgeGlow.value=.22+.4*Math.sin(c*Math.PI)):e.pieces.bangle.material.jade.uEdgeGlow.value=.22;const l=u=>{const f=u*Math.PI/180;return _e(r,Math.sin(f)*.386,0,Math.cos(f)*.386)},h=t>.5?[{id:"edge",world:l(200)},{id:"colour",world:l(330)},{id:"lustre",world:l(20)}]:t>.36?[{id:"inspect",world:l(90)}]:[];return t>.3&&t<.5&&h.push({id:"inner-diameter",world:_e(r,0,0,0)}),{hot:h}}keys(t){const e=this.keyCache.get(t);if(e)return e;const n=(_,m,d,x)=>({at:_,pos:Ae(m,...d),target:Ae(m,...x)}),s=wt.mine,r=wt.wash,o=wt.plinth,a=wt.saw,c=wt.lightbox,l=wt.drill,h=wt.grind,u=wt.showcase,f=()=>{const _=this.shot(t-1,1);return{at:0,pos:_.position.clone(),target:_.target.clone()}},g=({0:()=>[n(0,s,[9.4,9.8,10.2],[-.6,.9,.5]),n(.5,s,[8.6,9.2,9.6],[-.6,.9,.5]),n(1,s,[4.4,5.6,6.4],[-.4,1.6,.3])],1:()=>[f(),n(.28,r,[4.2,4.6,7.4],[0,1.3,0]),n(1,r,[3.6,4,6.6],[0,1.3,0])],2:()=>[f(),n(.2,o,[-1.6,3,8.4],[0,1.45,0]),n(.32,o,[2.2,3,7],[.2,1.5,0]),n(1,o,[2.2,3,7],[.2,1.5,0])],3:()=>[f(),n(.2,o,[2.8,3.2,6.4],[.25,1.55,.3]),n(1,o,[2.6,3.1,6.2],[.25,1.55,.3])],5:()=>[f(),n(.12,a,[6.4,6.2,12],[0,2.6,.2]),n(.22,a,[4.6,4.6,8.4],[0,2.4,.5]),n(.4,a,[3.8,4,7.2],[0,2.3,.6]),n(.5,a,[5.2,5.6,11],[0,2.3,.4]),n(.58,a,[1.4,5,11.2],[0,2,.7]),n(.66,a,[3.6,4.2,7],[-.3,2.3,.3]),n(.88,a,[3.4,4,6.8],[-.3,2.2,.4]),n(1,a,[1.8,4.4,8.6],[-.3,2,.7])],6:()=>[f(),n(.35,c,[.8,6.2,4.4],[0,.75,0]),n(1,c,[.4,5.2,3.6],[0,.75,.1])],7:()=>[f(),n(.14,l,[3.8,3.6,5.2],[0,.9,.1]),n(.5,l,[3.2,3,4.2],[0,.85,.2]),n(.8,l,[4,3.6,5.6],[.6,.8,.35]),n(1,l,[4,3.6,5.6],[.6,.8,.35])],8:()=>[f(),n(.18,h,[4.4,3.6,6.8],[.6,1.3,.8]),n(1,h,[3.2,2.5,4.6],[1,1.35,1])],9:()=>[f(),n(.12,h,[3,2.2,4],[1.3,1.25,.1]),n(1,h,[2.6,2,3.6],[1.3,1.25,.1])],10:()=>[f(),n(.12,h,[3,1.8,3],[1.4,1.2,0]),n(1,h,[2.8,1.7,2.8],[1.4,1.2,0])],11:()=>[f(),n(.16,u,[1,2.1,3.4],[0,1.62,0]),n(.5,u,[.9,2,3],[0,1.62,0])]}[t]??(()=>[n(0,o,[0,3,8],[0,1.4,0])]))();return this.keyCache.set(t,g),g}shot(t,e){if(t===4){const c=-.35+qt(e)*Math.PI*2,l=7.2;return{position:we(Math.sin(c)*l,3.4,Math.cos(c)*l),target:we(0,1.5,0)}}if(t===11&&e>.5){const c=this.keys(11),l=c[c.length-1],h=l.pos.clone().sub(l.target),u=qt(mt(e,.5,1))*Math.PI*2;return h.applyAxisAngle(we(0,1,0),u),{position:l.target.clone().add(h),target:l.target.clone()}}const n=this.keys(t);let s=0;for(;s<n.length-2&&e>n[s+1].at;)s++;const r=n[s],o=n[Math.min(s+1,n.length-1)],a=o.at>r.at?qt(mt(e,r.at,o.at)):1;return{position:r.pos.clone().lerp(o.pos,a),target:r.target.clone().lerp(o.target,a)}}}class vv{s={stage:0,progress:0,playing:!1,speed:1,guided:!1};listeners=new Set;get state(){return this.s}subscribe(t){return this.listeners.add(t),t(this.s),()=>this.listeners.delete(t)}set(t){const e={...this.s,...t};e.stage=Math.max(0,Math.min(Bo-1,Math.round(e.stage))),e.progress=Qh(e.progress),Object.keys(e).some(s=>e[s]!==this.s[s])&&(this.s=e,this.listeners.forEach(s=>s(this.s)))}startJourney(){this.set({stage:0,progress:0,playing:!0,guided:!0})}goTo(t,e=!0){this.set({stage:t,progress:0,playing:e,guided:!1})}next(){this.s.stage<Bo-1&&this.set({stage:this.s.stage+1,progress:0,playing:!0})}prev(){this.s.stage>0&&this.set({stage:this.s.stage-1,progress:0,playing:!0})}play(){this.set({playing:!0,progress:this.s.progress>=1?0:this.s.progress})}pause(){this.set({playing:!1})}toggle(){this.s.playing?this.pause():this.play()}setSpeed(t){this.set({speed:t})}seek(t){this.set({progress:t,playing:!1})}step(t){this.seek(this.s.progress+t)}restore(t){this.set(t)}tick(t){if(!this.s.playing)return 0;const e=Math.min(t,.1)*this.s.speed,n=this.s.progress+e/r_(this.s.stage);return n<1?(this.set({progress:n}),e):(this.s.guided&&this.s.stage<Bo-1?this.set({stage:this.s.stage+1,progress:0}):this.set({progress:1,playing:!1,guided:!1}),e)}}const rh=[{name:"low",dprCap:.75,shadow:1024},{name:"medium",dprCap:1.25,shadow:2048},{name:"high",dprCap:2,shadow:2048},{name:"ultra",dprCap:2,shadow:4096}];class xv{constructor(t,e){this.onChange=e,this.level=t?1:2,this.budget=t?33.3:16.7}level;samples=[];cooldown=0;budget;get current(){return rh[this.level]}get avgFrameMs(){return this.samples.length?this.samples.reduce((t,e)=>t+e,0)/this.samples.length:0}sample(t){if(this.samples.push(t),this.samples.length>90&&this.samples.shift(),this.cooldown>0){this.cooldown--;return}if(this.samples.length<90)return;const e=this.avgFrameMs;e>this.budget*1.35&&this.level>0?this.step(-1):e<this.budget*.6&&this.level<rh.length-1&&this.step(1)}step(t){this.level+=t,this.samples=[],this.cooldown=120,this.onChange(this.current)}}class Mv{ctx=null;master=null;gains=new Map;on=!1;get enabled(){return this.on}async enable(){this.ctx||this.build(),await this.ctx.resume(),this.master.gain.setTargetAtTime(.55,this.ctx.currentTime,.2),this.on=!0}async disable(){this.on=!1,this.ctx&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.08),setTimeout(()=>{this.on||this.ctx?.suspend()},400))}setMix(t){if(!this.on||!this.ctx)return;const e=this.ctx.currentTime;for(const[n,s]of this.gains)s.gain.setTargetAtTime(t[n],e,.15)}build(){const t=window.AudioContext??window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);const n=(g=2,_=!1)=>{const m=e.createBuffer(1,e.sampleRate*g,e.sampleRate),d=m.getChannelData(0);let x=0,y=0,v=0;for(let A=0;A<d.length;A++){const T=Math.random()*2-1;if(!_){d[A]=T;continue}x=.997*x+T*.029591,y=.985*y+T*.032534,v=.95*v+T*.048056,d[A]=(x+y+v+T*.1)*.6}const P=e.createBufferSource();return P.buffer=m,P.loop=!0,P.start(),P},s=(g,_,m=.7)=>{const d=e.createBiquadFilter();return d.type=g,d.frequency.value=_,d.Q.value=m,d},r=(g,..._)=>{const m=e.createGain();m.gain.value=0;for(let d=0;d<_.length-1;d++)_[d].connect(_[d+1]);_[_.length-1].connect(m),m.connect(this.master),this.gains.set(g,m)},o=(g,_,m)=>{const d=e.createOscillator();d.frequency.value=_;const x=e.createGain();x.gain.value=m,d.connect(x).connect(g),d.start()},a=e.createGain();a.gain.value=.35,o(a.gain,.13,.15),r("wind",n(4,!0),s("lowpass",420),a);const c=e.createGain();c.gain.value=.12;for(const g of[92,184.6]){const _=e.createOscillator();_.type="sawtooth",_.frequency.value=g,_.connect(c),_.start()}r("motor",c,s("lowpass",520,.9));const l=e.createGain();l.gain.value=.5,o(l.gain,7.3,.18),r("water",n(2),s("bandpass",1900,.6),l);const h=e.createGain();h.gain.value=.32,n(2).connect(s("bandpass",3600,1.2)).connect(h);const u=e.createOscillator();u.type="square",u.frequency.value=230;const f=e.createGain();f.gain.value=.03,u.connect(f).connect(h),u.start(),r("grind",h);const p=e.createGain();p.gain.value=.3,o(p.gain,2.1,.08),r("buff",n(3,!0),s("bandpass",700,.5),p)}}function yv(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}class Sv{constructor(t,e){this.canvas=t;const n=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<760;this.renderer=new Tg({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.toneMapping=uh,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lh,this.renderer.localClippingEnabled=!0,this.renderer.info.autoReset=!1,this.world=new pv(this.renderer),this.director=new Ai(this.world),this.rig=new w_(t),this.quality=new xv(n,r=>this.applyQuality(r.dprCap,r.shadow)),this.ui=new o_(e,{start:()=>{this.leaveIntro(),this.journey.startJourney(),this.rig.reset()},explore:()=>this.leaveIntro(),goTo:r=>{this.leaveIntro(),this.journey.goTo(r)},prev:()=>{this.leaveIntro(),this.journey.prev()},next:()=>{this.leaveIntro(),this.journey.next()},toggle:()=>{this.leaveIntro(),this.journey.toggle()},speed:r=>this.journey.setSpeed(r),seek:r=>this.journey.seek(r),step:r=>this.journey.step(r),resetView:()=>this.rig.reset(),toggleTorch:()=>this.setTorch(!this.director.torchMode),toggleSound:()=>void this.toggleSound(),lightMode:r=>{this.director.lightMode=r},compare:r=>{this.director.compare=r}});let s=-1;this.journey.subscribe(r=>{r.stage!==s&&(s=r.stage,this.rig.reset(),r.stage!==2&&this.setTorch(!1),this.rig.setDistanceLimits(r.stage===En.length-1?1.4:2.4,r.stage===0?22:16))}),this.bindPointer(),this.bindContextLoss(),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.sound.enabled&&this.sound.disable()}),this.applyQuality(this.quality.current.dprCap,this.quality.current.shadow),this.resize(),this.exposeDebug()}renderer;world;director;rig;journey=new vv;ui;quality;sound=new Mv;raycaster=new Yg;pointer=new et;tmp=new E;machineTime=0;last=performance.now();raf=0;running=!1;frameCount=0;frameWaiters=[];hotspots=[];down=null;intro=!0;exposure=1;start(){if(this.running)return;this.running=!0,this.last=performance.now();const t=e=>{this.running&&(this.raf=requestAnimationFrame(t),this.frame(e))};this.raf=requestAnimationFrame(t)}stop(){this.running=!1,cancelAnimationFrame(this.raf)}leaveIntro(){this.intro&&(this.intro=!1,this.ui.hideIntro())}setTorch(t){t&&this.journey.state.stage!==2||(this.director.torchMode=t,t||(this.director.manualTorch=null),t&&this.journey.pause())}async toggleSound(){this.sound.enabled?await this.sound.disable():await this.sound.enable()}frame(t){const e=t-this.last;this.last=t;const n=Math.min(e/1e3,.1);this.quality.sample(e);const s=this.journey.tick(n),r=this.journey.state.playing?s:n*.25;this.machineTime+=r;const o=this.journey.state,a=this.director.apply(o.stage,o.progress,this.machineTime,r);this.exposure=this.director.lastExposure,this.sound.setMix(a.sound),this.rig.update(n,a.shot,Ai.stationOf(o.stage)),this.renderer.info.reset(),this.renderer.render(this.world.scene,this.rig.camera),this.projectHotspots(a.hotspots),this.pushUi(),this.frameCount++,this.frameWaiters=this.frameWaiters.filter(c=>this.frameCount>=c.at?(c.resolve(),!1):!0)}pushUi(){const t=this.journey.state;this.ui.update({...t,phase:_t(Ul(t.stage,t.progress)),cameraMode:this.rig.mode,torch:this.director.torchMode,sound:this.sound.enabled,lightMode:this.director.lightMode,compare:this.director.compare})}projectHotspots(t){const e=this.canvas.clientWidth,n=this.canvas.clientHeight,s=this.intro||this.director.torchMode;this.hotspots=t.map(r=>{this.tmp.copy(r.world).project(this.rig.camera);const o=(this.tmp.x*.5+.5)*e,a=(-this.tmp.y*.5+.5)*n,c=!s&&this.tmp.z<1&&o>8&&o<e-8&&a>64&&a<n-8;return{id:r.id,x:o,y:a,visible:c}}),this.ui.setHotspots(this.hotspots)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality.current.dprCap)),this.renderer.setSize(t,e,!1),this.canvas.style.width=`${t}px`,this.canvas.style.height=`${e}px`,this.rig.resize(t,e)}applyQuality(t,e){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t)),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.world.studio.setShadowMapSize(e)}setRay(t){const e=this.canvas.getBoundingClientRect();this.pointer.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.rig.camera)}aimTorch(){const t=this.world.pieces.intact,e=this.raycaster.intersectObject(t,!1)[0];e?.face&&(this.director.manualTorch={point:t.worldToLocal(e.point.clone()),normal:e.face.normal.clone()})}bindPointer(){const t=this.canvas;t.addEventListener("pointerdown",e=>{this.down={x:e.clientX,y:e.clientY,t:performance.now()}}),t.addEventListener("pointermove",e=>{!this.director.torchMode||e.buttons||(this.setRay(e),this.aimTorch())}),t.addEventListener("pointerup",e=>{const n=this.down;if(this.down=null,!n||Math.hypot(e.clientX-n.x,e.clientY-n.y)>6||performance.now()-n.t>600)return;if(this.setRay(e),this.director.torchMode){this.aimTorch();return}const s=this.raycaster.intersectObjects(this.world.pickables,!0).find(o=>o.object.visible);if(!s){this.ui.closePopover();return}let r;for(let o=s.object;o&&!r;o=o.parent)r=o.userData.info;if(r==="stone"&&s.face){const o=s.object.geometry.getAttribute("rim");r=(o.getX(s.face.a)+o.getX(s.face.b)+o.getX(s.face.c))/3<.5&&this.journey.state.stage>=3?"window":"rind"}r&&this.ui.showInfo(r,e.clientX,e.clientY)})}bindContextLoss(){this.canvas.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.stop(),this.ui.showFallback(_t("fallback.lost.title"),_t("fallback.lost.body"),()=>location.reload())}),this.canvas.addEventListener("webglcontextrestored",()=>{this.ui.hideFallback(),this.world.studio.setShadowMapSize(this.quality.current.shadow),this.start()})}exposeDebug(){window.__jade={state:()=>{const t=this.journey.state;return{...t,stageId:En[t.stage].id,cameraMode:this.rig.mode,torch:this.director.torchMode,exposure:Math.round(this.exposure*100)/100,sound:this.sound.enabled,lightMode:this.director.lightMode,compare:this.director.compare,quality:this.quality.current.name,dpr:this.renderer.getPixelRatio(),frames:this.frameCount,avgFrameMs:Math.round(this.quality.avgFrameMs*10)/10,phase:_t(Ul(t.stage,t.progress)),intro:this.intro,render:{calls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometries:this.renderer.info.memory.geometries,textures:this.renderer.info.memory.textures,programs:this.renderer.info.programs?.length??0}}},start:()=>{this.leaveIntro(),this.journey.startJourney()},goTo:(t,e=!1)=>{this.leaveIntro(),this.journey.goTo(t,e)},restore:t=>{this.leaveIntro(),this.journey.restore(t)},seek:t=>{this.leaveIntro(),this.journey.seek(t)},play:()=>this.journey.play(),pause:()=>this.journey.pause(),setSpeed:t=>this.journey.setSpeed(t),torch:t=>this.setTorch(t),lightMode:t=>{this.director.lightMode=t},compare:t=>{this.director.compare=t},resetView:()=>this.rig.reset(!0),hotspots:()=>this.hotspots.map(t=>({...t})),frames:t=>new Promise(e=>this.frameWaiters.push({at:this.frameCount+t,resolve:e})),freeze:async(t=2)=>{this.running||this.start(),await new Promise(e=>this.frameWaiters.push({at:this.frameCount+t,resolve:e})),this.stop(),this.renderer.getContext().finish()},unfreeze:()=>this.start(),field:(t,e,n)=>Tn.field.set(t,e,n),cull:t=>{this.director.cullStations=t}}}}function oh(i,t){const e=document.createElement("div");e.className="fallback",e.setAttribute("role","alert"),e.innerHTML=`<div class="card"><div class="kicker">JADE GENESIS</div><h1>${i}</h1><p>${t}</p></div>`,document.body.append(e)}const ah=document.getElementById("stage"),bv=document.getElementById("ui");if(!yv())ah.remove(),oh(_t("fallback.noWebgl.title"),_t("fallback.noWebgl.body")),document.documentElement.dataset.webgl="unavailable";else try{new Sv(ah,bv).start(),document.documentElement.dataset.webgl="ready"}catch(i){console.error(i),oh(_t("fallback.error.title"),_t("fallback.error.body")),document.documentElement.dataset.webgl="error"}
