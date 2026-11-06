var Tm=0,Uu=1,Em=2;var Io=1,Ac=2,ha=3,ai=0,Pn=1,bt=2,oi=0,Qs=1,er=2,zu=3,Ou=4,Am=5;var ua=100,Rm=101,Cm=102,Pm=103,Im=104,Lm=200,Nm=201,Dm=202,Um=203,zm=204,Om=205,Fm=206,Bm=207,km=208,Hm=209,Gm=210,Vm=211,Wm=212,Xm=213,jm=214,Fu=0,Bu=1,ku=2,Rc=3,Hu=4,Gu=5,Vu=6,Wu=7,qm=0,Ym=1,Km=2,li=0,Cc=1,Pc=2,Ic=3,da=4,Lc=5,Nc=6,Dc=7,Mu="attached",Zm="detached",Xu=300,pa=301,tr=302,fa=303,Uc=304,Lo=306,un=1e3,bi=1001,Xr=1002,dn=1003,zc=1004;var nr=1005;var Kt=1006,ma=1007;var Vn=1008;var Un=1009,ju=1010,qu=1011,ga=1012,Oc=1013,Zi=1014,zn=1015,vn=1016,Fc=1017,Bc=1018,xa=1020,Yu=35902,Ku=35899,Jm=1021,$m=1022,Wn=1023,vs=1026,ir=1027,kc=1028,Hc=1029,sr=1030,Zu=1031;var Ju=1033,Gc=33776,Vc=33777,Wc=33778,Xc=33779,$u=35840,Qu=35841,ed=35842,td=35843,nd=36196,id=37492,sd=37496,rd=37488,ad=37489,jc=37490,od=37491,ld=37808,cd=37809,hd=37810,ud=37811,dd=37812,pd=37813,fd=37814,md=37815,gd=37816,xd=37817,vd=37818,yd=37819,_d=37820,Md=37821,bd=36492,Sd=36494,wd=36495,Td=36283,Ed=36284,qc=36285,Ad=36286,Rd=2200;var Hs=2300,Gs=2301,Wl=2302,bu=2303,Fs=2400,Bs=2401,Ja=2402,Qm=2500,e0=2501,Cd=0,No=1,va=2;var Pd=0,t0=1,rr="",je="srgb",Mn="srgb-linear",$a="linear",lt="srgb";var Os=7680;var n0=512,i0=513,s0=514,Yc=515,r0=516,a0=517,Kc=518,o0=519,Xl=35044,ya=35048;var Id="300 es",Wi=2e3,jr=2001;function Mx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function qr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function l0(){let n=qr("canvas");return n.style.display="block",n}var Pf={},Yr=null;function Qa(...n){let e="THREE."+n.shift();Yr?Yr("log",e,...n):console.log(e,...n)}function c0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){let e="THREE."+(n=c0(n)).shift();if(Yr)Yr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){let e="THREE."+(n=c0(n)).shift();if(Yr)Yr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ks(...n){let e=n.join(" ");e in Pf||(Pf[e]=!0,Pe(...n))}function h0(n,e,t){return new Promise(function(i,s){setTimeout(function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}},t)})}var u0={[Fu]:1,[ku]:6,[Hu]:7,[Rc]:5,[Bu]:0,[Vu]:2,[Wu]:4,[Gu]:3},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i!==void 0&&i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=1234567,Vr=Math.PI/180,Vs=180/Math.PI;function Gn(){let n=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(gn[255&n]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[255&e]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[63&t|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[255&i]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Su(n,e){return(n%e+e)%e}function Ya(n,e,t){return(1-t)*n+t*e}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(4294967295*n);case Uint16Array:return Math.round(65535*n);case Uint8Array:return Math.round(255*n);case Int32Array:return Math.round(2147483647*n);case Int16Array:return Math.round(32767*n);case Int8Array:return Math.round(127*n);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ji={DEG2RAD:Vr,RAD2DEG:Vs,generateUUID:Gn,clamp:Ze,euclideanModulo:Su,mapLinear:function(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)},inverseLerp:function(n,e,t){return n!==e?(t-n)/(e-n):0},lerp:Ya,damp:function(n,e,t,i){return Ya(n,e,1-Math.exp(-t*i))},pingpong:function(n,e=1){return e-Math.abs(Su(n,2*e)-e)},smoothstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*(3-2*n)},smootherstep:function(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e))*n*n*(n*(6*n-15)+10)},randInt:function(n,e){return n+Math.floor(Math.random()*(e-n+1))},randFloat:function(n,e){return n+Math.random()*(e-n)},randFloatSpread:function(n){return n*(.5-Math.random())},seededRandom:function(n){n!==void 0&&(If=n);let e=If+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(n){return n*Vr},radToDeg:function(n){return n*Vs},isPowerOfTwo:function(n){return!(n&n-1)&&n!==0},ceilPowerOfTwo:function(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))},floorPowerOfTwo:function(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))},setQuaternionFromProperEuler:function(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),p=r((i-e)/2),m=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*m,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*m,o*c);break;case"ZYZ":n.set(l*m,l*p,o*h,o*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}},normalize:pt,denormalize:ti},zd=class zd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zd.prototype.isVector2=!0;var ce=zd,ct=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],p=r[a+1],m=r[a+2],f=r[a+3];if(u!==f||l!==d||c!==p||h!==m){let v=l*d+c*p+h*m+u*f;v<0&&(d=-d,p=-p,m=-m,f=-f,v=-v);let x=1-o;if(v<.9995){let g=Math.acos(v),y=Math.sin(g);x=Math.sin(x*g)/y,l=l*x+d*(o=Math.sin(o*g)/y),c=c*x+p*o,h=h*x+m*o,u=u*x+f*o}else{l=l*x+d*o,c=c*x+p*o,h=h*x+m*o,u=u*x+f*o;let g=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=g,c*=g,h*=g,u*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Od=class Od{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vh.copy(this).projectOnVector(e),this.sub(Vh)}reflect(e){return this.sub(Vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Od.prototype.isVector3=!0;var D=Od,Vh=new D,Lf=new ct,Fd=class Fd{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],m=i[8],f=s[0],v=s[3],x=s[6],g=s[1],y=s[4],M=s[7],S=s[2],b=s[5],E=s[8];return r[0]=a*f+o*g+l*S,r[3]=a*v+o*y+l*b,r[6]=a*x+o*M+l*E,r[1]=c*f+h*g+u*S,r[4]=c*v+h*y+u*b,r[7]=c*x+h*M+u*E,r[2]=d*f+p*g+m*S,r[5]=d*v+p*y+m*b,r[8]=d*x+p*M+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=t*u+i*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/m;return e[0]=u*f,e[1]=(s*c-h*i)*f,e[2]=(o*i-s*a)*f,e[3]=d*f,e[4]=(h*t-s*l)*f,e[5]=(s*r-o*t)*f,e[6]=p*f,e[7]=(i*l-c*t)*f,e[8]=(a*t-i*r)*f,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wh.makeScale(e,t)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wh.makeRotation(-e)),this}translate(e,t){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fd.prototype.isMatrix3=!0;var Ge=Fd,Wh=new Ge,Nf=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Df=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){let n={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,a){return this.enabled!==!1&&r!==a&&r&&a&&(this.spaces[r].transfer===lt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=Wr(s.r),s.g=Wr(s.g),s.b=Wr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mn]:{primaries:e,whitePoint:i,transfer:$a,toXYZ:Nf,fromXYZ:Df,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Nf,fromXYZ:Df,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}var Ke=bx();function Vi(n){return n<.04045?.0773993808*n:Math.pow(.9478672986*n+.0521327014,2.4)}function Wr(n){return n<.0031308?12.92*n:1.055*Math.pow(n,.41666)-.055}var Er,jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Er===void 0&&(Er=qr("canvas")),Er.width=e.width,Er.height=e.height;let s=Er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Er}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=255*Vi(r[a]/255);return i.putImageData(s,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Vi(t[i]/255)):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sx=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xh(s[a].image)):r.push(Xh(s[a]))}else r=Xh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var wx=0,jh=new D,kt=class n extends ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=1001,s=1001,r=1006,a=1008,o=1023,l=1009,c=n.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Gn(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i:Pe(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case un:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case un:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=Xu,kt.DEFAULT_ANISOTROPY=1;var Bd=class Bd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],f=l[2],v=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,M=(p+1)/2,S=(x+1)/2,b=(h+d)/4,E=(u+f)/4,U=(m+v)/4;return y>M&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=b/i,r=E/i):M>S?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=U/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=E/r,s=U/r),this.set(i,s,r,t),this}let g=Math.sqrt((v-m)*(v-m)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(v-m)/g,this.y=(u-f)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bd.prototype.isVector4=!0;var ft=Bd,ql=class extends ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new kt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends ql{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},eo=class extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends kt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ec=class Ec{constructor(e,t,i,s,r,a,o,l,c,h,u,d,p,m,f,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,p,m,f,v)}set(e,t,i,s,r,a,o,l,c,h,u,d,p,m,f,v){let x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=m,x[11]=f,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ec().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,f=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-f*c,t[9]=-o*l,t[2]=f-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,f=c*u;t[0]=d+f*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=f+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,f=c*u;t[0]=d-f*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=f-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,f=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+f,t[1]=l*u,t[5]=f*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,f=o*c;t[0]=l*h,t[4]=f-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-f*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,f=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+f,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=f*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tx,e,Ex)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ss.crossVectors(i,Ln),ss.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ss.crossVectors(i,Ln)),ss.normalize(),hl.crossVectors(Ln,ss),s[0]=ss.x,s[4]=hl.x,s[8]=Ln.x,s[1]=ss.y,s[5]=hl.y,s[9]=Ln.y,s[2]=ss.z,s[6]=hl.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],m=i[2],f=i[6],v=i[10],x=i[14],g=i[3],y=i[7],M=i[11],S=i[15],b=s[0],E=s[4],U=s[8],_=s[12],T=s[1],I=s[5],w=s[9],R=s[13],P=s[2],L=s[6],B=s[10],k=s[14],X=s[3],ee=s[7],le=s[11],ae=s[15];return r[0]=a*b+o*T+l*P+c*X,r[4]=a*E+o*I+l*L+c*ee,r[8]=a*U+o*w+l*B+c*le,r[12]=a*_+o*R+l*k+c*ae,r[1]=h*b+u*T+d*P+p*X,r[5]=h*E+u*I+d*L+p*ee,r[9]=h*U+u*w+d*B+p*le,r[13]=h*_+u*R+d*k+p*ae,r[2]=m*b+f*T+v*P+x*X,r[6]=m*E+f*I+v*L+x*ee,r[10]=m*U+f*w+v*B+x*le,r[14]=m*_+f*R+v*k+x*ae,r[3]=g*b+y*T+M*P+S*X,r[7]=g*E+y*I+M*L+S*ee,r[11]=g*U+y*w+M*B+S*le,r[15]=g*_+y*R+M*k+S*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],f=e[7],v=e[11],x=e[15],g=l*p-c*d,y=o*p-c*u,M=o*d-l*u,S=a*p-c*h,b=a*d-l*h,E=a*u-o*h;return t*(f*g-v*y+x*M)-i*(m*g-v*S+x*b)+s*(m*y-f*S+x*E)-r*(m*M-f*b+v*E)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],f=e[13],v=e[14],x=e[15],g=t*o-i*a,y=t*l-s*a,M=t*c-r*a,S=i*l-s*o,b=i*c-r*o,E=s*c-r*l,U=h*f-u*m,_=h*v-d*m,T=h*x-p*m,I=u*v-d*f,w=u*x-p*f,R=d*x-p*v,P=g*R-y*w+M*I+S*T-b*_+E*U;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/P;return e[0]=(o*R-l*w+c*I)*L,e[1]=(s*w-i*R-r*I)*L,e[2]=(f*E-v*b+x*S)*L,e[3]=(d*b-u*E-p*S)*L,e[4]=(l*T-a*R-c*_)*L,e[5]=(t*R-s*T+r*_)*L,e[6]=(v*M-m*E-x*y)*L,e[7]=(h*E-d*M+p*y)*L,e[8]=(a*w-o*T+c*U)*L,e[9]=(i*T-t*w-r*U)*L,e[10]=(m*b-f*M+x*g)*L,e[11]=(u*M-h*b-p*g)*L,e[12]=(o*_-a*I-l*U)*L,e[13]=(t*I-i*_+s*U)*L,e[14]=(f*y-m*S-v*g)*L,e[15]=(h*S-u*y+d*g)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,f=a*h,v=a*u,x=o*u,g=l*c,y=l*h,M=l*u,S=i.x,b=i.y,E=i.z;return s[0]=(1-(f+x))*S,s[1]=(p+M)*S,s[2]=(m-y)*S,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(d+x))*b,s[6]=(v+g)*b,s[7]=0,s[8]=(m+y)*E,s[9]=(v-g)*E,s[10]=(1-(d+f))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),l=Ar.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$n.copy(this);let c=1/a,h=1/o,u=1/l;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,t.setFromRotationMatrix($n),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=2e3,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,f;if(l)m=r/(a-r),f=a*r/(a-r);else if(o===Wi)m=-(a+r)/(a-r),f=-2*a*r/(a-r);else{if(o!==jr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-r),f=-a*r/(a-r)}return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=2e3,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),p=-(i+s)/(i-s),m,f;if(l)m=1/(a-r),f=a/(a-r);else if(o===Wi)m=-2/(a-r),f=-(a+r)/(a-r);else{if(o!==jr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-r),f=-r/(a-r)}return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ec.prototype.isMatrix4=!0;var Ce=Ec,Ar=new D,$n=new Ce,Tx=new D(0,0,0),Ex=new D(1,1,1),ss=new D,hl=new D,Ln=new D,Uf=new Ce,zf=new ct,ii=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Ax=0,Of=new D,Rr=new ct,Ui=new Ce,ul=new D,za=new D,Rx=new D,Cx=new ct,Ff=new D(1,0,0),Bf=new D(0,1,0),kf=new D(0,0,1),Hf={type:"added"},Px={type:"removed"},Cr={type:"childadded",child:null},qh={type:"childremoved",child:null},_t=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new ii,i=new ct,s=new D(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ge}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,t){return Of.copy(e).applyQuaternion(this.quaternion),this.position.add(Of.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ul.copy(e):ul.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(za,ul,this.up):Ui.lookAt(ul,za,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Rr.setFromRotationMatrix(Ui),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Px),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};_t.DEFAULT_UP=new D(0,1,0),_t.DEFAULT_MATRIX_AUTO_UPDATE=!0,_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ix={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let f of e.hand.values()){let v=t.getJointPose(f,i),x=this._getHandJoint(c,f);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Yh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(e-n)*t:t<.5?e:t<2/3?n+6*(e-n)*(2/3-t):n}var ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ke.workingColorSpace){if(e=Su(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Yh(a,r,e+1/3),this.g=Yh(a,r,e),this.b=Yh(a,r,e-1/3)}return Ke.colorSpaceToWorking(this,s),this}setStyle(e,t=je){function i(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let i=d0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Ke.workingToColorSpace(xn.copy(this),e),65536*Math.round(Ze(255*xn.r,0,255))+256*Math.round(Ze(255*xn.g,0,255))+Math.round(Ze(255*xn.b,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=je){Ke.workingToColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==je?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*s)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(dl);let i=Ya(rs.h,dl.h,t),s=Ya(rs.s,dl.s,t),r=Ya(rs.l,dl.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new ye;ye.NAMES=d0;var to=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var no=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Qn=new D,zi=new D,Kh=new D,Oi=new D,Pr=new D,Ir=new D,Gf=new D,Zh=new D,Jh=new D,$h=new D,Qh=new ft,eu=new ft,tu=new ft,yi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qn.subVectors(e,t),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Qn.subVectors(s,t),zi.subVectors(i,t),Kh.subVectors(e,t);let a=Qn.dot(Qn),o=Qn.dot(zi),l=Qn.dot(Kh),c=zi.dot(zi),h=zi.dot(Kh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Oi)!==null&&Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Qh.setScalar(0),eu.setScalar(0),tu.setScalar(0),Qh.fromBufferAttribute(e,t),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qh,r.x),a.addScaledVector(eu,r.y),a.addScaledVector(tu,r.z),a}static isFrontFacing(e,t,i,s){return Qn.subVectors(i,t),zi.subVectors(e,t),Qn.cross(zi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),.5*Qn.cross(zi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Pr.subVectors(s,i),Ir.subVectors(r,i),Zh.subVectors(e,i);let l=Pr.dot(Zh),c=Ir.dot(Zh);if(l<=0&&c<=0)return t.copy(i);Jh.subVectors(e,s);let h=Pr.dot(Jh),u=Ir.dot(Jh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Pr,a);$h.subVectors(e,r);let p=Pr.dot($h),m=Ir.dot($h);if(m>=0&&p<=m)return t.copy(r);let f=p*c-l*m;if(f<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Ir,o);let v=h*m-p*u;if(v<=0&&u-h>=0&&p-m>=0)return Gf.subVectors(r,s),o=(u-h)/(u-h+(p-m)),t.copy(s).addScaledVector(Gf,o);let x=1/(v+f+d);return a=f*x,o=d*x,t.copy(i).addScaledVector(Pr,a).addScaledVector(Ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pl.copy(i.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),fl.subVectors(this.max,Oa),Lr.subVectors(e.a,Oa),Nr.subVectors(e.b,Oa),Dr.subVectors(e.c,Oa),as.subVectors(Nr,Lr),os.subVectors(Dr,Nr),Ns.subVectors(Lr,Dr);let t=[0,-as.z,as.y,0,-os.z,os.y,0,-Ns.z,Ns.y,as.z,0,-as.x,os.z,0,-os.x,Ns.z,0,-Ns.x,-as.y,as.x,0,-os.y,os.x,0,-Ns.y,Ns.x,0];return!!nu(t,Lr,Nr,Dr,fl)&&(t=[1,0,0,0,1,0,0,0,1],!!nu(t,Lr,Nr,Dr,fl)&&(ml.crossVectors(as,os),t=[ml.x,ml.y,ml.z],nu(t,Lr,Nr,Dr,fl)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ei).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new D,new D,new D,new D,new D,new D,new D,new D],ei=new D,pl=new on,Lr=new D,Nr=new D,Dr=new D,as=new D,os=new D,Ns=new D,Oa=new D,fl=new D,ml=new D,Ds=new D;function nu(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=e.dot(Ds),c=t.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var G_=Lx();function Lx(){let n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,s[l]=24,s[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,s[l]=-c-1,s[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,s[l]=13,s[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,s[l]=24,s[256|l]=24):(i[l]=31744,i[256|l]=64512,s[l]=13,s[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}var Yt=new D,gl=new ce,Nx=0,Mt=class extends ni{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var io=class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var so=class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var be=class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Dx=new on,Fa=new D,iu=new D,bn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Dx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);let t=Fa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=.5*(i-this.radius);this.center.addScaledVector(Fa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(iu)),this.expandByPoint(Fa.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ux=0,Hn=new Ce,su=new _t,Ur=new D,Nn=new on,Ba=new on,an=new D,Ye=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new((function(t){for(let i=t.length-1;i>=0;--i)if(t[i]>=65535)return!0;return!1})(e)?so:io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new D,1/0);if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Nn.min,Ba.min),Nn.expandByPoint(an),an.addVectors(Nn.max,Ba.max),Nn.expandByPoint(an)):(Nn.expandByPoint(Ba.min),Nn.expandByPoint(Ba.max))}Nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(Ur.fromBufferAttribute(e,c),an.add(Ur)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");a!==void 0&&a.count===i.count||(a=new Mt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new D,l[U]=new D;let c=new D,h=new D,u=new D,d=new ce,p=new ce,m=new ce,f=new D,v=new D;function x(U,_,T){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,_),u.fromBufferAttribute(i,T),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,_),m.fromBufferAttribute(r,T),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(I),v.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(I),o[U].add(f),o[_].add(f),o[T].add(f),l[U].add(v),l[_].add(v),l[T].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let U=0,_=g.length;U<_;++U){let T=g[U],I=T.start;for(let w=I,R=I+T.count;w<R;w+=3)x(e.getX(w+0),e.getX(w+1),e.getX(w+2))}let y=new D,M=new D,S=new D,b=new D;function E(U){S.fromBufferAttribute(s,U),b.copy(S);let _=o[U];y.copy(_),y.sub(S.multiplyScalar(S.dot(_))).normalize(),M.crossVectors(b,_);let T=M.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,T)}for(let U=0,_=g.length;U<_;++U){let T=g[U],I=T.start;for(let w=I,R=I+T.count;w<R;w+=3)E(e.getX(w+0)),E(e.getX(w+1)),E(e.getX(w+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),f=e.getX(d+1),v=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),a.fromBufferAttribute(t,v),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,f),c.fromBufferAttribute(i,v),o.add(h),l.add(h),c.add(h),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(f,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let f=0,v=l.length;f<v;f++){p=o.isInterleavedBufferAttribute?l[f]*o.data.stride+o.offset:l[f]*h;for(let x=0;x<h;x++)d[m++]=c[p++]}return new Mt(d,h,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=e(s[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_n=new D,hs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zr,zx=0,Sn=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];s!==void 0?s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i:Pe(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==204&&(i.blendSrc=this.blendSrc),this.blendDst!==205&&(i.blendDst=this.blendDst),this.blendEquation!==100&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Xs=class extends Sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ka=new D,Or=new D,Fr=new D,Br=new ce,Ha=new ce,p0=new Ce,xl=new D,Ga=new D,vl=new D,Vf=new ce,ru=new ce,Wf=new ce,$r=class extends _t{constructor(e=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Ye;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ws(t,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new hs(i,3,0,!1)),zr.setAttribute("uv",new hs(i,2,3,!1))}this.geometry=zr,this.material=e,this.center=new ce(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),p0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-Fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;yl(xl.set(-.5,-.5,0),Fr,a,Or,s,r),yl(Ga.set(.5,-.5,0),Fr,a,Or,s,r),yl(vl.set(.5,.5,0),Fr,a,Or,s,r),Vf.set(0,0),ru.set(1,0),Wf.set(1,1);let o=e.ray.intersectTriangle(xl,Ga,vl,!1,ka);if(o===null&&(yl(Ga.set(-.5,.5,0),Fr,a,Or,s,r),ru.set(0,1),o=e.ray.intersectTriangle(xl,vl,Ga,!1,ka),o===null))return;let l=e.ray.origin.distanceTo(ka);l<e.near||l>e.far||t.push({distance:l,point:ka.clone(),uv:yi.getInterpolation(ka,xl,Ga,vl,Vf,ru,Wf,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function yl(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ha.x=r*Br.x-s*Br.y,Ha.y=s*Br.x+r*Br.y):Ha.copy(Br),n.copy(e),n.x+=Ha.x,n.y+=Ha.y,n.applyMatrix4(p0)}var V_=new D,W_=new D;var Bi=new D,au=new D,_l=new D,ls=new D,ou=new D,Ml=new D,lu=new D,us=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){au.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(au);let r=.5*e.distanceTo(t),a=-this.direction.dot(_l),o=ls.dot(this.direction),l=-ls.dot(_l),c=ls.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let f=1/h;u*=f,d*=f,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(au).addScaledVector(_l,d),p}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);let i=Bi.dot(this.direction),s=Bi.dot(Bi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s?null:((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s?null:((o>i||i!=i)&&(i=o),(l<s||s!=s)&&(s=l),s<0?null:this.at(i>=0?i:s,t)))}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,i,s,r){ou.subVectors(t,e),Ml.subVectors(i,e),lu.crossVectors(ou,Ml);let a,o=this.direction.dot(lu);if(o>0){if(s)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ls.subVectors(this.origin,e);let l=a*this.direction.dot(Ml.crossVectors(ls,Ml));if(l<0)return null;let c=a*this.direction.dot(ou.cross(ls));if(c<0||l+c>o)return null;let h=-a*ls.dot(lu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xf=new Ce,Us=new us,bl=new bn,jf=new D,Sl=new D,wl=new D,Tl=new D,cu=new D,El=new D,qf=new D,Al=new D,ue=class extends _t{constructor(e=new Ye,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){El.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(cu.fromBufferAttribute(u,e),a?El.addScaledVector(cu,h):El.addScaledVector(cu.sub(t),h))}t.add(El)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;if(s!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),Us.copy(e.ray).recast(e.near),bl.containsPoint(Us.origin)===!1&&(Us.intersectSphere(bl,jf)===null||Us.origin.distanceToSquared(jf)>(e.far-e.near)**2))return;Xf.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Xf),i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Us)}}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,f=d.length;m<f;m++){let v=d[m],x=a[v.materialIndex];for(let g=Math.max(v.start,p.start),y=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));g<y;g+=3)s=Rl(this,x,e,i,c,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=v.materialIndex,t.push(s))}else for(let m=Math.max(0,p.start),f=Math.min(o.count,p.start+p.count);m<f;m+=3)s=Rl(this,a,e,i,c,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),s&&(s.faceIndex=Math.floor(m/3),t.push(s));else if(l!==void 0)if(Array.isArray(a))for(let m=0,f=d.length;m<f;m++){let v=d[m],x=a[v.materialIndex];for(let g=Math.max(v.start,p.start),y=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));g<y;g+=3)s=Rl(this,x,e,i,c,h,u,g,g+1,g+2),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=v.materialIndex,t.push(s))}else for(let m=Math.max(0,p.start),f=Math.min(l.count,p.start+p.count);m<f;m+=3)s=Rl(this,a,e,i,c,h,u,m,m+1,m+2),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}};function Rl(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Sl),n.getVertexPosition(l,wl),n.getVertexPosition(c,Tl);let h=(function(u,d,p,m,f,v,x,g){let y;if(y=d.side===1?m.intersectTriangle(x,v,f,!0,g):m.intersectTriangle(f,v,x,d.side===0,g),y===null)return null;Al.copy(g),Al.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(Al);return M<p.near||M>p.far?null:{distance:M,point:Al.clone(),object:u}})(n,e,t,i,Sl,wl,Tl,qf);if(h){let u=new D;yi.getBarycoord(qf,Sl,wl,Tl,u),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,u,new ce)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,u,new ce)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};yi.getNormal(Sl,wl,Tl,d.normal),h.face=d,h.barycoord=u}return h}var Va=new ft,Yf=new ft,Kf=new ft,Ox=new ft,Zf=new Ce,Cl=new D,hu=new bn,Jf=new Ce,uu=new us,ro=class extends ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hu.copy(this.boundingSphere),hu.applyMatrix4(s),e.ray.intersectsSphere(hu)!==!1&&(Jf.copy(s).invert(),uu.copy(e.ray).applyMatrix4(Jf),this.boundingBox!==null&&uu.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,uu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,s=this.geometry;Yf.fromBufferAttribute(s.attributes.skinIndex,e),Kf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Va.copy(t),t.set(0,0,0,0)):(Va.set(...t,1),t.set(0,0,0)),Va.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Kf.getComponent(r);if(a!==0){let o=Yf.getComponent(r);Zf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Ox.copy(Va).applyMatrix4(Zf),a)}}return t.isVector4&&(t.w=Va.w),t.applyMatrix4(this.bindMatrixInverse)}},Qr=class extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}},ea=class extends kt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},$f=new Ce,Fx=new Ce,ao=class n{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ce;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Fx;$f.multiplyMatrices(o,t[r]),$f.toArray(i,16*r)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ea(t,e,e,Wn,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=t[r];a===void 0&&(Pe("Skeleton: No bone found with UUID:",r),a=new Qr),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},ds=class extends Mt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new Ce,Qf=new Ce,Pl=[],em=new on,Bx=new Ce,Wa=new ue,Xa=new bn,si=class extends ue{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Bx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),em.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(em)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Xa.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=s[r+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(i),e.ray.intersectsSphere(Xa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),Qf.multiplyMatrices(i,kr),Wa.matrixWorld=Qf,Wa.raycast(e,Pl);for(let a=0,o=Pl.length;a<o;a++){let l=Pl[a];l.instanceId=r,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,16*e),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ea(new Float32Array(s*this.count),s,this.count,kc,zn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},du=new D,kx=new D,Hx=new Ge,vi=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=du.subVectors(i,t).cross(kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(du),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hx.getNormalMatrix(e),s=this.coplanarPoint(du).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zs=new bn,Gx=new ce(.5,.5),Il=new D,Xi=class{constructor(e=new vi,t=new vi,i=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],f=r[9],v=r[10],x=r[11],g=r[12],y=r[13],M=r[14],S=r[15];if(s[0].setComponents(c-a,p-h,x-m,S-g).normalize(),s[1].setComponents(c+a,p+h,x+m,S+g).normalize(),s[2].setComponents(c+o,p+u,x+f,S+y).normalize(),s[3].setComponents(c-o,p-u,x-f,S-y).normalize(),i)s[4].setComponents(l,d,v,M).normalize(),s[5].setComponents(c-l,p-d,x-v,S-M).normalize();else if(s[4].setComponents(c-l,p-d,x-v,S-M).normalize(),t===Wi)s[5].setComponents(c+l,p+d,x+v,S+M).normalize();else{if(t!==jr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);s[5].setComponents(l,d,v,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);let t=Gx.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Il.x=s.normal.x>0?e.max.x:e.min.x,Il.y=s.normal.y>0?e.max.y:e.min.y,Il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},tm=new Ce,Kl=class n{constructor(){this.coordinateSystem=Wi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];tm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Xi),i[s].setFromProjectionMatrix(tm,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Xi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var wu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,s){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=s}reset(){this.list.length=0,this.index=0}},X_=new Ce,j_=new ye(1,1,1),q_=new Xi,Y_=new Kl,K_=new on,Z_=new bn,J_=new D,$_=new D,Q_=new D,eM=new wu,tM=new ue;var ta=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Zl=new D,Jl=new D,nm=new Ce,ja=new us,Ll=new bn,pu=new D,im=new D,js=class extends _t{constructor(e=new Ye,t=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Zl.fromBufferAttribute(t,s-1),Jl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new be(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Ll.radius+=r,e.ray.intersectsSphere(Ll)===!1)return;nm.copy(s).invert(),ja.copy(e.ray).applyMatrix4(nm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,f=p-1;m<f;m+=c){let v=h.getX(m),x=h.getX(m+1),g=Nl(this,e,ja,l,v,x,m);g&&t.push(g)}if(this.isLineLoop){let m=h.getX(p-1),f=h.getX(d),v=Nl(this,e,ja,l,m,f,p-1);v&&t.push(v)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=d,f=p-1;m<f;m+=c){let v=Nl(this,e,ja,l,m,m+1,m);v&&t.push(v)}if(this.isLineLoop){let m=Nl(this,e,ja,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nl(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(Zl.fromBufferAttribute(o,s),Jl.fromBufferAttribute(o,r),t.distanceSqToSegment(Zl,Jl,pu,im)>i)return;pu.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(pu);return l<e.near||l>e.far?void 0:{distance:l,point:im.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var sm=new D,rm=new D,oo=class extends js{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)sm.fromBufferAttribute(t,s),rm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sm.distanceTo(rm);e.setAttribute("lineDistance",new be(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},lo=class extends js{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},na=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},am=new Ce,Tu=new us,Dl=new bn,Ul=new D,ps=class extends _t{constructor(e=new Ye,t=new na){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;am.copy(s).invert(),Tu.copy(e.ray).applyMatrix4(am);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Ul.fromBufferAttribute(h,p),om(Ul,p,l,s,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Ul.fromBufferAttribute(h,u),om(Ul,u,l,s,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function om(n,e,t,i,s,r,a){let o=Tu.distanceSqToPoint(n);if(o<t){let l=new D;Tu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var co=class extends kt{constructor(e=[],t=301,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tt=class extends kt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends kt{constructor(e,t,i=1014,s,r,a,o=1003,l=1003,c,h=1026,u=1){if(h!==vs&&h!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$l=class extends ji{constructor(e,t=1014,i=301,s,r,a=1003,o=1003,l,c=1026){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ho=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qe=class n extends Ye{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function m(f,v,x,g,y,M,S,b,E,U,_){let T=M/E,I=S/U,w=M/2,R=S/2,P=b/2,L=E+1,B=U+1,k=0,X=0,ee=new D;for(let le=0;le<B;le++){let ae=le*I-R;for(let ne=0;ne<L;ne++){let J=ne*T-w;ee[f]=J*g,ee[v]=ae*y,ee[x]=P,c.push(ee.x,ee.y,ee.z),ee[f]=0,ee[v]=0,ee[x]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(ne/E),u.push(1-le/U),k+=1}}for(let le=0;le<U;le++)for(let ae=0;ae<E;ae++){let ne=d+ae+L*le,J=d+ae+L*(le+1),$=d+(ae+1)+L*(le+1),V=d+(ae+1)+L*le;l.push(ne,J,V),l.push(J,$,V),X+=6}o.addGroup(p,X,_),p+=X,d+=k}m("z","y","x",-1,-1,i,t,e,a,r,0),m("z","y","x",1,-1,i,t,-e,a,r,1),m("x","z","y",1,1,e,i,t,s,a,2),m("x","z","y",1,-1,e,i,-t,s,a,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ri=class n extends Ye{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*i+r,f=s+1,v=new D,x=new D;for(let g=0;g<=m;g++){let y=0,M=0,S=0,b=0;if(g<=i){let _=g/i,T=_*Math.PI/2;M=-h-e*Math.cos(T),S=e*Math.sin(T),b=-e*Math.cos(T),y=_*u}else if(g<=i+r){let _=(g-i)/r;M=_*t-h,S=e,b=0,y=u+_*d}else{let _=(g-i-r)/i,T=_*Math.PI/2;M=h+e*Math.sin(T),S=e*Math.cos(T),b=e*Math.sin(T),y=u+d+_*u}let E=Math.max(0,Math.min(1,y/p)),U=0;g===0?U=.5/s:g===m&&(U=-.5/s);for(let _=0;_<=s;_++){let T=_/s,I=T*Math.PI*2,w=Math.sin(I),R=Math.cos(I);x.x=-S*R,x.y=M,x.z=S*w,o.push(x.x,x.y,x.z),v.set(-S*R,b,S*w),v.normalize(),l.push(v.x,v.y,v.z),c.push(T+U,E)}if(g>0){let _=(g-1)*f;for(let T=0;T<s;T++){let I=_+T,w=_+T+1,R=g*f+T,P=g*f+T+1;a.push(I,w,R),a.push(w,P,R)}}}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ia=class n extends Ye{constructor(e=1,t=32,i=0,s=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=i+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Et=class n extends Ye{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,f=[],v=i/2,x=0;function g(y){let M=m,S=new ce,b=new D,E=0,U=y===!0?e:t,_=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,v*_,0),d.push(0,_,0),p.push(.5,.5),m++;let T=m;for(let I=0;I<=s;I++){let w=I/s*l+o,R=Math.cos(w),P=Math.sin(w);b.x=U*P,b.y=v*_,b.z=U*R,u.push(b.x,b.y,b.z),d.push(0,_,0),S.x=.5*R+.5,S.y=.5*P*_+.5,p.push(S.x,S.y),m++}for(let I=0;I<s;I++){let w=M+I,R=T+I;y===!0?h.push(R,R+1,w):h.push(R+1,R,w),E+=3}c.addGroup(x,E,y===!0?1:2),x+=E}(function(){let y=new D,M=new D,S=0,b=(t-e)/i;for(let E=0;E<=r;E++){let U=[],_=E/r,T=_*(t-e)+e;for(let I=0;I<=s;I++){let w=I/s,R=w*l+o,P=Math.sin(R),L=Math.cos(R);M.x=T*P,M.y=-_*i+v,M.z=T*L,u.push(M.x,M.y,M.z),y.set(P,b,L).normalize(),d.push(y.x,y.y,y.z),p.push(w,1-_),U.push(m++)}f.push(U)}for(let E=0;E<s;E++)for(let U=0;U<r;U++){let _=f[U][E],T=f[U+1][E],I=f[U+1][E+1],w=f[U][E+1];(e>0||U!==0)&&(h.push(_,T,w),S+=3),(t>0||U!==r-1)&&(h.push(T,I,w),S+=3)}c.addGroup(x,S,0),x+=S})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fs=class n extends Et{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ms=class n extends Ye{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];function o(p,m,f,v){let x=v+1,g=[];for(let y=0;y<=x;y++){g[y]=[];let M=p.clone().lerp(f,y/x),S=m.clone().lerp(f,y/x),b=x-y;for(let E=0;E<=b;E++)g[y][E]=E===0&&y===x?M:M.clone().lerp(S,E/b)}for(let y=0;y<x;y++)for(let M=0;M<2*(x-y)-1;M++){let S=Math.floor(M/2);M%2==0?(l(g[y][S+1]),l(g[y+1][S]),l(g[y][S])):(l(g[y][S+1]),l(g[y+1][S+1]),l(g[y+1][S]))}}function l(p){r.push(p.x,p.y,p.z)}function c(p,m){let f=3*p;m.x=e[f+0],m.y=e[f+1],m.z=e[f+2]}function h(p,m,f,v){v<0&&p.x===1&&(a[m]=p.x-1),f.x===0&&f.z===0&&(a[m]=v/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new D,f=new D,v=new D;for(let x=0;x<t.length;x+=3)c(t[x+0],m),c(t[x+1],f),c(t[x+2],v),o(m,f,v,p)})(s),(function(p){let m=new D;for(let f=0;f<r.length;f+=3)m.x=r[f+0],m.y=r[f+1],m.z=r[f+2],m.normalize().multiplyScalar(p),r[f+0]=m.x,r[f+1]=m.y,r[f+2]=m.z})(i),(function(){let p=new D;for(let m=0;m<r.length;m+=3){p.x=r[m+0],p.y=r[m+1],p.z=r[m+2];let f=u(p)/2/Math.PI+.5,v=d(p)/Math.PI+.5;a.push(f,1-v)}(function(){let m=new D,f=new D,v=new D,x=new D,g=new ce,y=new ce,M=new ce;for(let S=0,b=0;S<r.length;S+=9,b+=6){m.set(r[S+0],r[S+1],r[S+2]),f.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),g.set(a[b+0],a[b+1]),y.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),x.copy(m).add(f).add(v).divideScalar(3);let E=u(x);h(g,b+0,m,E),h(y,b+2,f,E),h(M,b+4,v,E)}})(),(function(){for(let m=0;m<a.length;m+=6){let f=a[m+0],v=a[m+2],x=a[m+4],g=Math.max(f,v,x),y=Math.min(f,v,x);g>.9&&y<.1&&(f<.2&&(a[m+0]+=1),v<.2&&(a[m+2]+=1),x<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Ql=class n extends ms{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},zl=new D,Ol=new D,fu=new D,Fl=new yi,ec=class extends Ye{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Vr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:f,b:v,c:x}=Fl;if(f.fromBufferAttribute(o,c[0]),v.fromBufferAttribute(o,c[1]),x.fromBufferAttribute(o,c[2]),Fl.getNormal(fu),u[0]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,u[1]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,M=u[g],S=u[y],b=Fl[h[g]],E=Fl[h[y]],U=`${M}_${S}`,_=`${S}_${M}`;_ in d&&d[_]?(fu.dot(d[_].normal)<=r&&(p.push(b.x,b.y,b.z),p.push(E.x,E.y,E.z)),d[_]=null):U in d||(d[U]={index0:c[g],index1:c[y],normal:fu.clone()})}}for(let m in d)if(d[m]){let{index0:f,index1:v}=d[m];zl.fromBufferAttribute(o,f),Ol.fromBufferAttribute(o,v),p.push(zl.x,zl.y,zl.z),p.push(Ol.x,Ol.y,Ol.z)}this.setAttribute("position",new be(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,c=r-1;for(;l<=c;)if(s=Math.floor(l+(c-l)/2),o=i[s]-a,o<0)l=s+1;else{if(!(o>0)){c=s;break}c=s-1}if(s=c,i[s]===a)return s/(r-1);let h=i[s];return(s+(a-h)/(i[s+1]-h))/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new Ce;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Ze(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sa=class extends Dn{constructor(e=0,t=0,i=1,s=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(r=a?0:s),this.aClockwise!==!0||a||(r===s?r=-s:r-=s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tc=class extends sa{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ld(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,s(a,o,d,p)},calc:function(r){let a=r*r;return n+e*r+t*a+i*(a*r)}}}var lm=new D,cm=new D,mu=new Ld,gu=new Ld,xu=new Ld,ra=class extends Dn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=s[(c-1)%r]:(cm.subVectors(s[0],s[1]).add(s[0]),o=cm);let u=s[c%r],d=s[(c+1)%r];if(this.closed||c+2<r?l=s[(c+2)%r]:(lm.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=lm),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(l),p);f<1e-4&&(f=1),m<1e-4&&(m=f),v<1e-4&&(v=f),mu.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,m,f,v),gu.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,m,f,v),xu.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,m,f,v)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),gu.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),xu.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return i.set(mu.calc(h),gu.calc(h),xu.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hm(n,e,t,i,s){let r=.5*(i-e),a=.5*(s-t),o=n*n;return(2*t-2*i+r+a)*(n*o)+(-3*t+3*i-2*r-a)*o+r*n+t}function Ka(n,e,t,i){return(function(s,r){let a=1-s;return a*a*r})(n,e)+(function(s,r){return 2*(1-s)*s*r})(n,t)+(function(s,r){return s*s*r})(n,i)}function Za(n,e,t,i,s){return(function(r,a){let o=1-r;return o*o*o*a})(n,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(n,t)+(function(r,a){return 3*(1-r)*r*r*a})(n,i)+(function(r,a){return r*r*r*a})(n,s)}var uo=class extends Dn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Za(e,s.x,r.x,a.x,o.x),Za(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nc=class extends Dn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Za(e,s.x,r.x,a.x,o.x),Za(e,s.y,r.y,a.y,o.y),Za(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},po=class extends Dn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Dn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Dn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ka(e,s.x,r.x,a.x),Ka(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mo=class extends Dn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ka(e,s.x,r.x,a.x),Ka(e,s.y,r.y,a.y),Ka(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(hm(o,l.x,c.x,h.x,u.x),hm(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},sc=Object.freeze({__proto__:null,ArcCurve:tc,CatmullRomCurve3:ra,CubicBezierCurve:uo,CubicBezierCurve3:nc,EllipseCurve:sa,LineCurve:po,LineCurve3:ic,QuadraticBezierCurve:fo,QuadraticBezierCurve3:mo,SplineCurve:go}),rc=class extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new sc[s.type]().fromJSON(s))}return this}},xo=class extends rc{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new po(this.currentPoint.clone(),new ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new fo(this.currentPoint.clone(),new ce(e,t),new ce(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new uo(this.currentPoint.clone(),new ce(e,t),new ce(i,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new go(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new sa(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vo=class extends xo{constructor(e){super(e),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new xo().fromJSON(s))}return this}};function Vx(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=um(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=(function(h,u,d,p){let m=[];for(let f=0,v=u.length;f<v;f++){let x=um(h,u[f]*p,f<v-1?u[f+1]*p:h.length,p,!1);x===x.next&&(x.steiner=!0),m.push(Jx(x))}m.sort(Yx);for(let f=0;f<m.length;f++)d=Kx(m[f],d);return d})(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,u=l;for(let d=t;d<s;d+=t){let p=n[d],m=n[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return yo(r,a,t,o,l,c,0),a}function um(n,e,t,i,s){let r;if(s===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=dm(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=dm(a/i|0,n[a],n[a+1],r);return r&&aa(r,r.next)&&(Mo(r),r=r.next),r}function qs(n,e){if(!n)return n;e||(e=n);let t,i=n;do if(t=!1,i.steiner||!aa(i,i.next)&&Dt(i.prev,i,i.next)!==0)i=i.next;else{if(Mo(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function yo(n,e,t,i,s,r,a){if(!n)return;!a&&r&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Eu(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,f=1;do{let v,x=p;p=null;let g=null;for(m=0;x;){m++;let y=x,M=0;for(let b=0;b<f&&(M++,y=y.nextZ,y);b++);let S=f;for(;M>0||S>0&&y;)M!==0&&(S===0||!y||x.z<=y.z)?(v=x,x=x.nextZ,M--):(v=y,y=y.nextZ,S--),g?g.nextZ=v:p=v,v.prevZ=g,g=v;x=y}g.nextZ=null,f*=2}while(m>1)})(d)})(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Xx(n,i,s,r):Wx(n))e.push(l.i,n.i,c.i),Mo(n),n=c.next,o=c.next;else if((n=c)===o){a?a===1?yo(n=jx(qs(n),e),e,t,i,s,r,2):a===2&&qx(n,e,t,i,s,r):yo(qs(n),e,t,i,s,r,1);break}}}function Wx(n){let e=n.prev,t=n,i=n.next;if(Dt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c),m=i.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&qa(s,o,r,l,a,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xx(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),f=Math.max(o,l,c),v=Math.max(h,u,d),x=Eu(p,m,e,t,i),g=Eu(f,v,e,t,i),y=n.prevZ,M=n.nextZ;for(;y&&y.z>=x&&M&&M.z<=g;){if(y.x>=p&&y.x<=f&&y.y>=m&&y.y<=v&&y!==s&&y!==a&&qa(o,h,l,u,c,d,y.x,y.y)&&Dt(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=p&&M.x<=f&&M.y>=m&&M.y<=v&&M!==s&&M!==a&&qa(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=x;){if(y.x>=p&&y.x<=f&&y.y>=m&&y.y<=v&&y!==s&&y!==a&&qa(o,h,l,u,c,d,y.x,y.y)&&Dt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=g;){if(M.x>=p&&M.x<=f&&M.y>=m&&M.y<=v&&M!==s&&M!==a&&qa(o,h,l,u,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function jx(n,e){let t=n;do{let i=t.prev,s=t.next.next;!aa(i,s)&&m0(i,t,t.next,s)&&_o(i,s)&&_o(s,i)&&(e.push(i.i,t.i,s.i),Mo(t),Mo(t.next),t=n=s),t=t.next}while(t!==n);return qs(t)}function qx(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$x(a,o)){let l=g0(a,o);return a=qs(a,a.next),l=qs(l,l.next),yo(a,e,t,i,s,r,0),void yo(l,e,t,i,s,r,0)}o=o.next}a=a.next}while(a!==n)}function Yx(n,e){let t=n.x-e.x;return t===0&&(t=n.y-e.y,t===0)&&(t=(n.next.y-n.y)/(n.next.x-n.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Kx(n,e){let t=(function(s,r){let a=r,o=s.x,l=s.y,c,h=-1/0;if(aa(s,a))return a;do{if(aa(s,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let f=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(f<=o&&f>h&&(h=f,c=a.x<a.next.x?a:a.next,f===o))return c}a=a.next}while(a!==r);if(!c)return null;let u=c,d=c.x,p=c.y,m=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&f0(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let f=Math.abs(l-a.y)/(o-a.x);_o(a,s)&&(f<m||f===m&&(a.x>c.x||a.x===c.x&&Zx(c,a)))&&(c=a,m=f)}a=a.next}while(a!==u);return c})(n,e);if(!t)return e;let i=g0(t,n);return qs(i,i.next),qs(t,t.next)}function Zx(n,e){return Dt(n.prev,n,e.prev)<0&&Dt(e.next,n,n.next)<0}function Eu(n,e,t,i,s){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-t)*s|0)|n<<8))|n<<4))|n<<2))|n<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*s|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Jx(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function f0(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function qa(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&f0(n,e,t,i,s,r,a,o)}function $x(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!(function(t,i){let s=t;do{if(s.i!==t.i&&s.next.i!==t.i&&s.i!==i.i&&s.next.i!==i.i&&m0(s,s.next,t,i))return!0;s=s.next}while(s!==t);return!1})(n,e)&&(_o(n,e)&&_o(e,n)&&(function(t,i){let s=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do s.y>o!=s.next.y>o&&s.next.y!==s.y&&a<(s.next.x-s.x)*(o-s.y)/(s.next.y-s.y)+s.x&&(r=!r),s=s.next;while(s!==t);return r})(n,e)&&(Dt(n.prev,n,e.prev)||Dt(n,e.prev,e))||aa(n,e)&&Dt(n.prev,n,n.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function aa(n,e){return n.x===e.x&&n.y===e.y}function m0(n,e,t,i){let s=kl(Dt(n,e,t)),r=kl(Dt(n,e,i)),a=kl(Dt(t,i,n)),o=kl(Dt(t,i,e));return s!==r&&a!==o||!(s!==0||!Bl(n,t,e))||!(r!==0||!Bl(n,i,e))||!(a!==0||!Bl(t,n,i))||!(o!==0||!Bl(t,e,i))}function Bl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function kl(n){return n>0?1:n<0?-1:0}function _o(n,e){return Dt(n.prev,n,n.next)<0?Dt(n,e,n.next)>=0&&Dt(n,n.prev,e)>=0:Dt(n,e,n.prev)<0||Dt(n,n.next,e)<0}function g0(n,e){let t=Au(n.i,n.x,n.y),i=Au(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function dm(n,e,t,i){let s=Au(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Mo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Au(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Ru=class{static triangulate(e,t,i=2){return Vx(e,t,i)}},_i=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return .5*i}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];pm(e),fm(i,e);let a=e.length;t.forEach(pm);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,fm(i,t[l]);let o=Ru.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function pm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function fm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ac=class n extends Ye{constructor(e=new vo([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Qx,y,M,S,b,E,U=!1;if(x){y=x.getSpacedPoints(h),U=!0,d=!1;let F=!!x.isCatmullRomCurve3&&x.closed;M=x.computeFrenetFrames(h,F),S=new D,b=new D,E=new D}d||(v=0,p=0,m=0,f=0);let _=o.extractPoints(c),T=_.shape,I=_.holes;if(!_i.isClockWise(T)){T=T.reverse();for(let F=0,j=I.length;F<j;F++){let C=I[F];_i.isClockWise(C)&&(I[F]=C.reverse())}}function w(F){let j=10000000000000001e-36,C=F[0];for(let H=1;H<=F.length;H++){let G=H%F.length,z=F[G],K=z.x-C.x,te=z.y-C.y,se=K*K+te*te,fe=Math.max(Math.abs(z.x),Math.abs(z.y),Math.abs(C.x),Math.abs(C.y));se<=j*fe*fe?(F.splice(G,1),H--):C=z}}w(T),I.forEach(w);let R=I.length,P=T;for(let F=0;F<R;F++){let j=I[F];T=T.concat(j)}function L(F,j,C){return j||ze("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(j,C)}let B=T.length;function k(F,j,C){let H,G,z,K=F.x-j.x,te=F.y-j.y,se=C.x-F.x,fe=C.y-F.y,Ee=K*K+te*te,Te=K*fe-te*se;if(Math.abs(Te)>Number.EPSILON){let ve=Math.sqrt(Ee),Me=Math.sqrt(se*se+fe*fe),re=j.x-te/ve,pe=j.y+K/ve,de=((C.x-fe/Me-re)*fe-(C.y+se/Me-pe)*se)/(K*fe-te*se);H=re+K*de-F.x,G=pe+te*de-F.y;let Se=H*H+G*G;if(Se<=2)return new ce(H,G);z=Math.sqrt(Se/2)}else{let ve=!1;K>Number.EPSILON?se>Number.EPSILON&&(ve=!0):K<-Number.EPSILON?se<-Number.EPSILON&&(ve=!0):Math.sign(te)===Math.sign(fe)&&(ve=!0),ve?(H=-te,G=K,z=Math.sqrt(Ee)):(H=K,G=te,z=Math.sqrt(Ee/2))}return new ce(H/z,G/z)}let X=[];for(let F=0,j=P.length,C=j-1,H=F+1;F<j;F++,C++,H++)C===j&&(C=0),H===j&&(H=0),X[F]=k(P[F],P[C],P[H]);let ee=[],le,ae,ne=X.concat();for(let F=0,j=R;F<j;F++){let C=I[F];le=[];for(let H=0,G=C.length,z=G-1,K=H+1;H<G;H++,z++,K++)z===G&&(z=0),K===G&&(K=0),le[H]=k(C[H],C[z],C[K]);ee.push(le),ne=ne.concat(le)}if(v===0)ae=_i.triangulateShape(P,I);else{let F=[],j=[];for(let C=0;C<v;C++){let H=C/v,G=p*Math.cos(H*Math.PI/2),z=m*Math.sin(H*Math.PI/2)+f;for(let K=0,te=P.length;K<te;K++){let se=L(P[K],X[K],z);q(se.x,se.y,-G),H===0&&F.push(se)}for(let K=0,te=R;K<te;K++){let se=I[K];le=ee[K];let fe=[];for(let Ee=0,Te=se.length;Ee<Te;Ee++){let ve=L(se[Ee],le[Ee],z);q(ve.x,ve.y,-G),H===0&&fe.push(ve)}H===0&&j.push(fe)}}ae=_i.triangulateShape(F,j)}let J=ae.length,$=m+f;for(let F=0;F<B;F++){let j=d?L(T[F],ne[F],$):T[F];U?(b.copy(M.normals[0]).multiplyScalar(j.x),S.copy(M.binormals[0]).multiplyScalar(j.y),E.copy(y[0]).add(b).add(S),q(E.x,E.y,E.z)):q(j.x,j.y,0)}for(let F=1;F<=h;F++)for(let j=0;j<B;j++){let C=d?L(T[j],ne[j],$):T[j];U?(b.copy(M.normals[F]).multiplyScalar(C.x),S.copy(M.binormals[F]).multiplyScalar(C.y),E.copy(y[F]).add(b).add(S),q(E.x,E.y,E.z)):q(C.x,C.y,u/h*F)}for(let F=v-1;F>=0;F--){let j=F/v,C=p*Math.cos(j*Math.PI/2),H=m*Math.sin(j*Math.PI/2)+f;for(let G=0,z=P.length;G<z;G++){let K=L(P[G],X[G],H);q(K.x,K.y,u+C)}for(let G=0,z=I.length;G<z;G++){let K=I[G];le=ee[G];for(let te=0,se=K.length;te<se;te++){let fe=L(K[te],le[te],H);U?q(fe.x,fe.y+y[h-1].y,y[h-1].x+C):q(fe.x,fe.y,u+C)}}}function V(F,j){let C=F.length;for(;--C>=0;){let H=C,G=C-1;G<0&&(G=F.length-1);for(let z=0,K=h+2*v;z<K;z++){let te=B*z,se=B*(z+1);W(j+H+te,j+G+te,j+G+se,j+H+se)}}}function q(F,j,C){l.push(F),l.push(j),l.push(C)}function Y(F,j,C){N(F),N(j),N(C);let H=s.length/3,G=g.generateTopUV(i,s,H-3,H-2,H-1);A(G[0]),A(G[1]),A(G[2])}function W(F,j,C,H){N(F),N(j),N(H),N(j),N(C),N(H);let G=s.length/3,z=g.generateSideWallUV(i,s,G-6,G-3,G-2,G-1);A(z[0]),A(z[1]),A(z[3]),A(z[1]),A(z[2]),A(z[3])}function N(F){s.push(l[3*F+0]),s.push(l[3*F+1]),s.push(l[3*F+2])}function A(F){r.push(F.x),r.push(F.y)}(function(){let F=s.length/3;if(d){let j=0,C=B*j;for(let H=0;H<J;H++){let G=ae[H];Y(G[2]+C,G[1]+C,G[0]+C)}j=h+2*v,C=B*j;for(let H=0;H<J;H++){let G=ae[H];Y(G[0]+C,G[1]+C,G[2]+C)}}else{for(let j=0;j<J;j++){let C=ae[j];Y(C[2],C[1],C[0])}for(let j=0;j<J;j++){let C=ae[j];Y(C[0]+B*h,C[1]+B*h,C[2]+B*h)}}i.addGroup(F,s.length/3-F,0)})(),(function(){let F=s.length/3,j=0;V(P,j),j+=P.length;for(let C=0,H=I.length;C<H;C++){let G=I[C];V(G,j),j+=G.length}i.addGroup(F,s.length/3-F,1)})()}this.setAttribute("position",new be(s,3)),this.setAttribute("uv",new be(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i,s){if(s.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];s.shapes.push(o.uuid)}else s.shapes.push(t.uuid);return s.options=Object.assign({},i),i.extrudePath!==void 0&&(s.options.extrudePath=i.extrudePath.toJSON()),s})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sc[s.type]().fromJSON(s)),new n(i,e.options)}},Qx={generateTopUV:function(n,e,t,i,s){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*s],h=e[3*s+1];return[new ce(r,a),new ce(o,l),new ce(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],u=e[3*i+2],d=e[3*s],p=e[3*s+1],m=e[3*s+2],f=e[3*r],v=e[3*r+1],x=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-u),new ce(d,1-m),new ce(f,1-x)]:[new ce(o,1-l),new ce(h,1-u),new ce(p,1-m),new ce(v,1-x)]}},oc=class n extends ms{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},lc=class n extends Ye{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ze(s,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,d=new ce,p=new D,m=new D,f=new D,v=0,x=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:v=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-v,p.z=0*x,f.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(f.x,f.y,f.z);break;default:v=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-v,p.z=0*x,m.copy(p),p.x+=f.x,p.y+=f.y,p.z+=f.z,p.normalize(),l.push(p.x,p.y,p.z),f.copy(m)}for(let g=0;g<=t;g++){let y=i+g*h*s,M=Math.sin(y),S=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*M,u.y=e[b].y,u.z=e[b].x*S,a.push(u.x,u.y,u.z),d.x=g/t,d.y=b/(e.length-1),o.push(d.x,d.y);let E=l[3*b+0]*M,U=l[3*b+1],_=l[3*b+0]*S;c.push(E,U,_)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let M=y+g*e.length,S=M,b=M+e.length,E=M+e.length+1,U=M+1;r.push(S,b,U),r.push(E,U,b)}this.setIndex(r),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},cc=class n extends ms{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},pn=class n extends Ye{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],f=[],v=[];for(let x=0;x<h;x++){let g=x*d-a;for(let y=0;y<c;y++){let M=y*u-r;m.push(M,-g,0),f.push(0,0,1),v.push(y/o),v.push(1-x/l)}}for(let x=0;x<l;x++)for(let g=0;g<o;g++){let y=g+c*x,M=g+c*(x+1),S=g+1+c*(x+1),b=g+1+c*x;p.push(y,M,b),p.push(M,S,b)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},gs=class n extends Ye{constructor(e=.5,t=1,i=32,s=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(s=Math.max(1,s)),p=new D,m=new ce;for(let f=0;f<=s;f++){for(let v=0;v<=i;v++){let x=r+v/i*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let f=0;f<s;f++){let v=f*(i+1);for(let x=0;x<i;x++){let g=x+v,y=g,M=g+i+1,S=g+i+2,b=g+1;o.push(y,M,b),o.push(M,S,b)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},hc=class n extends Ye{constructor(e=new vo([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=s.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;_i.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,x=m.length;v<x;v++){let g=m[v];_i.isClockWise(g)===!0&&(m[v]=g.reverse())}let f=_i.triangulateShape(p,m);for(let v=0,x=m.length;v<x;v++){let g=m[v];p=p.concat(g)}for(let v=0,x=p.length;v<x;v++){let g=p[v];s.push(g.x,g.y,0),r.push(0,0,1),a.push(g.x,g.y)}for(let v=0,x=f.length;v<x;v++){let g=f[v],y=g[0]+u,M=g[1]+u,S=g[2]+u;i.push(y,M,S),l+=3}}this.setIndex(i),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(r,3)),this.setAttribute("uv",new be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,i){if(i.shapes=[],Array.isArray(t))for(let s=0,r=t.length;s<r;s++){let a=t[s];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i})(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}},Rn=class n extends Ye{constructor(e=1,t=32,i=16,s=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,d=new D,p=[],m=[],f=[],v=[];for(let x=0;x<=i;x++){let g=[],y=x/i,M=a+y*o,S=e*Math.cos(M),b=Math.sqrt(e*e-S*S),E=0;x===0&&a===0?E=.5/t:x===i&&l===Math.PI&&(E=-.5/t);for(let U=0;U<=t;U++){let _=U/t,T=s+_*r;u.x=-b*Math.cos(T),u.y=S,u.z=b*Math.sin(T),m.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),v.push(_+E,1-y),g.push(c++)}h.push(g)}for(let x=0;x<i;x++)for(let g=0;g<t;g++){let y=h[x][g+1],M=h[x][g],S=h[x+1][g],b=h[x+1][g+1];(x!==0||a>0)&&p.push(y,M,b),(x!==i-1||l<Math.PI)&&p.push(M,S,b)}this.setIndex(p),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},uc=class n extends ms{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Ys=class n extends Ye{constructor(e=1,t=.4,i=12,s=48,r=2*Math.PI,a=0,o=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new D,p=new D,m=new D;for(let f=0;f<=i;f++){let v=a+f/i*o;for(let x=0;x<=s;x++){let g=x/s*r;p.x=(e+t*Math.cos(v))*Math.cos(g),p.y=(e+t*Math.cos(v))*Math.sin(g),p.z=t*Math.sin(v),c.push(p.x,p.y,p.z),d.x=e*Math.cos(g),d.y=e*Math.sin(g),m.subVectors(p,d).normalize(),h.push(m.x,m.y,m.z),u.push(x/s),u.push(f/i)}}for(let f=1;f<=i;f++)for(let v=1;v<=s;v++){let x=(s+1)*f+v-1,g=(s+1)*(f-1)+v-1,y=(s+1)*(f-1)+v,M=(s+1)*f+v;l.push(x,g,M),l.push(g,y,M)}this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},dc=class n extends Ye{constructor(e=1,t=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);let o=[],l=[],c=[],h=[],u=new D,d=new D,p=new D,m=new D,f=new D,v=new D,x=new D;for(let y=0;y<=i;++y){let M=y/i*r*Math.PI*2;g(M,r,a,e,p),g(M+.01,r,a,e,m),v.subVectors(m,p),x.addVectors(m,p),f.crossVectors(v,x),x.crossVectors(f,v),f.normalize(),x.normalize();for(let S=0;S<=s;++S){let b=S/s*Math.PI*2,E=-t*Math.cos(b),U=t*Math.sin(b);u.x=p.x+(E*x.x+U*f.x),u.y=p.y+(E*x.y+U*f.y),u.z=p.z+(E*x.z+U*f.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(y/i),h.push(S/s)}}for(let y=1;y<=i;y++)for(let M=1;M<=s;M++){let S=(s+1)*(y-1)+(M-1),b=(s+1)*y+(M-1),E=(s+1)*y+M,U=(s+1)*(y-1)+M;o.push(S,b,U),o.push(b,E,U)}function g(y,M,S,b,E){let U=Math.cos(y),_=Math.sin(y),T=S/M*y,I=Math.cos(T);E.x=b*(2+I)*.5*U,E.y=b*(2+I)*_*.5,E.z=b*Math.sin(T)*.5}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},oa=class n extends Ye{constructor(e=new mo(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ce,h=new D,u=[],d=[],p=[],m=[];function f(v){h=e.getPointAt(v/t,h);let x=a.normals[v],g=a.binormals[v];for(let y=0;y<=s;y++){let M=y/s*Math.PI*2,S=Math.sin(M),b=-Math.cos(M);l.x=b*x.x+S*g.x,l.y=b*x.y+S*g.y,l.z=b*x.z+S*g.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let v=0;v<t;v++)f(v);f(r===!1?t:0),(function(){for(let v=0;v<=t;v++)for(let x=0;x<=s;x++)c.x=v/t,c.y=x/s,p.push(c.x,c.y)})(),(function(){for(let v=1;v<=t;v++)for(let x=1;x<=s;x++){let g=(s+1)*(v-1)+(x-1),y=(s+1)*v+(x-1),M=(s+1)*v+x,S=(s+1)*(v-1)+x;m.push(g,y,S),m.push(y,M,S)}})()})(),this.setIndex(m),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},pc=class extends Ye{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,s=new D,r=new D;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let f=0;f<3;f++){let v=o.getX(p+f),x=o.getX(p+(f+1)%3);s.fromBufferAttribute(a,v),r.fromBufferAttribute(a,x),mm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),mm(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function mm(n,e,t){let i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)!==!0&&t.has(s)!==!0&&(t.add(i),t.add(s),!0)}var nM=Object.freeze({__proto__:null,BoxGeometry:Qe,CapsuleGeometry:ri,CircleGeometry:ia,ConeGeometry:fs,CylinderGeometry:Et,DodecahedronGeometry:Ql,EdgesGeometry:ec,ExtrudeGeometry:ac,IcosahedronGeometry:oc,LatheGeometry:lc,OctahedronGeometry:cc,PlaneGeometry:pn,PolyhedronGeometry:ms,RingGeometry:gs,ShapeGeometry:hc,SphereGeometry:Rn,TetrahedronGeometry:uc,TorusGeometry:Ys,TorusKnotGeometry:dc,TubeGeometry:oa,WireframeGeometry:pc});function ar(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(gm(s))s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(gm(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=ar(n[t]);for(let s in i)e[s]=i[s]}return e}function gm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Nd(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var or={clone:ar,merge:yn},Ht=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=(function(t){let i=[];for(let s=0;s<t.length;s++)i.push(t[s].clone());return i})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new ft().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ce().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bo=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ue=class extends Sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends Ue{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var fc=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mc=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hl(n,e){return n&&n.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n):n}function e1(n){let e=n.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(function(i,s){return n[i]-n[s]}),t}function xm(n,e,t){let i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function t1(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}var Si=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gc=class extends Si{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fs,endingEnd:Fs}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bs:r=e,o=2*t-i;break;case Ja:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bs:a=e,l=2*i-t;break;case Ja:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(i-t)/(s-t),f=m*m,v=f*m,x=-d*v+2*d*f-d*m,g=(1+d)*v+(-1.5-2*d)*f+(-.5+d)*m+1,y=(-1-p)*v+(1.5+p)*f+.5*m,M=p*v-p*f;for(let S=0;S!==o;++S)r[S]=x*a[h+S]+g*a[c+S]+y*a[l+S]+M*a[u+S];return r}},So=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},xc=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vc=class extends Si{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(i-t)/(s-t),f=1-m;for(let v=0;v!==o;++v)r[v]=a[c+v]*f+a[l+v]*m;return r}let d=2*o,p=e-1;for(let m=0;m!==o;++m){let f=a[c+m],v=a[l+m],x=p*d+2*m,g=u[x],y=u[x+1],M=e*d+2*m,S=h[M],b=h[M+1],E,U,_,T,I,w=(i-t)/(s-t);for(let R=0;R<8;R++){E=w*w,U=E*w,_=1-w,T=_*_,I=T*_;let P=I*t+3*T*w*g+3*_*E*S+U*s-i;if(Math.abs(P)<1e-10)break;let L=3*T*(g-t)+6*_*w*(S-g)+3*E*(s-S);if(Math.abs(L)<1e-10)break;w-=P/L,w=Math.max(0,Math.min(1,w))}r[m]=I*f+3*T*w*y+3*_*E*b+U*v}return r}},An=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break;case bu:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Mx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*i,u=h-i,d=h+i;for(let p=0;p!==i;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};An.prototype.ValueTypeName="",An.prototype.TimeBufferType=Float32Array,An.prototype.ValueBufferType=Float32Array,An.prototype.DefaultInterpolation=Gs;var Hi=class extends An{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="bool",Hi.prototype.ValueBufferType=Array,Hi.prototype.DefaultInterpolation=Hs,Hi.prototype.InterpolantFactoryMethodLinear=void 0,Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};wo.prototype.ValueTypeName="color";var qi=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};qi.prototype.ValueTypeName="number";var yc=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ct.slerpFlat(r,0,a,c-o,a,c,l);return r}},wi=class extends An{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new yc(this.times,this.values,this.getValueSize(),e)}};wi.prototype.ValueTypeName="quaternion",wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends An{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="string",Gi.prototype.ValueBufferType=Array,Gi.prototype.DefaultInterpolation=Hs,Gi.prototype.InterpolantFactoryMethodLinear=void 0,Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends An{constructor(e,t,i,s){super(e,t,i,s)}};Yi.prototype.ValueTypeName="vector";var xs=class{constructor(e="",t=-1,i=[],s=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(n1(i[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(An.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=e1(l);l=xm(l,1,h),c=xm(c,1,h),s||l[0]!==0||(l.push(r),c.push(c[0])),a.push(new qi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}resetDuration(){let e=0;for(let t=0,i=this.tracks.length;t!==i;++t){let s=this.tracks[t];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function n1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return wo;case"quaternion":return wi;case"bool":case"boolean":return Hi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(n.type);if(n.times===void 0){let t=[],i=[];t1(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Mi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(vm(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!vm(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function vm(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var _c=class{constructor(e,t,i){let s=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zc=new _c,Ti=class{constructor(e){this.manager=e!==void 0?e:Zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var ki={},Cu=class extends Error{constructor(e,t){super(e),this.response=t}},la=class extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Mi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),void setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);if(ki[e]!==void 0)return void ki[e].push({onLoad:t,onProgress:i,onError:s});ki[e]=[],ki[e].push({onLoad:t,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ki[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0,f=0,v=new ReadableStream({start(x){(function g(){u.read().then(({done:y,value:M})=>{if(y)x.close();else{f+=M.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:f,total:p});for(let b=0,E=h.length;b<E;b++){let U=h[b];U.onProgress&&U.onProgress(S)}x.enqueue(M),g()}},y=>{x.error(y)})})()}});return new Response(v)}throw new Cu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Mi.add(`file:${e}`,c);let h=ki[e];delete ki[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete ki[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hr=new WeakMap,Mc=class extends Ti{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Hr.get(a);u===void 0&&(u=[],Hr.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=qr("img");function l(){h(),t&&t(this);let u=Hr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Hr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Mi.remove(`image:${e}`);let d=Hr.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}Hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Mi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ks=class extends Ti{constructor(e){super(e)}load(e,t,i,s){let r=new kt,a=new Mc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Zs=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},To=class extends Zs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},vu=new Ce,ym=new D,_m=new D,Eo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xi,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(ym),_m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_m),t.updateMatrixWorld(),vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===jr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gl=new D,Vl=new ct,xi=new D,ca=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Vl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,xi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gl,Vl,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},cs=new D,Mm=new ce,bm=new ce,Bt=class extends ca{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Vs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Vr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Vs*Math.atan(Math.tan(.5*Vr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cs.x,cs.y).multiplyScalar(-e/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-e/cs.z)}getViewSize(e,t){return this.getViewBounds(e,Mm,bm),t.subVectors(bm,Mm)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Vr*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pu=class extends Eo{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=2*Vs*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;i===t.fov&&s===t.aspect&&r===t.far||(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ao=class extends Zs{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Iu=class extends Eo{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},Ro=class extends Zs{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Iu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ei=class extends ca{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Lu=class extends Eo{constructor(){super(new Ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Lu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ki=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var yu=new WeakMap,Co=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mi.get(`image-bitmap:${e}`);if(a!==void 0)return r.manager.itemStart(e),a.then?void a.then(c=>{yu.has(a)===!0?(s&&s(yu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))}):void setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Mi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),yu.set(l,c),Mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var iM=new Ce,sM=new Ce,rM=new Ce;var Gr=-90,bc=class extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Gr,1,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Gr,1,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Gr,1,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Gr,1,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Gr,1,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Gr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==jr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;v=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(i,0,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=f,e.setRenderTarget(i,5,s),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Sc=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var aM=new D,oM=new ct,lM=new D,cM=new D,hM=new D;var uM=new D,dM=new ct,pM=new D,fM=new D;var wc=class{constructor(e,t,i){let s,r,a;switch(this.binding=e,this.valueSize=i,t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*i),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(5*i);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*i)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){ct.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){let a=this._workIndex*r;ct.multiplyQuaternionsFlat(e,a,e,t,e,i),ct.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){let a=1-s;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*s}}},Dd="\\[\\]\\.:\\/",i1=new RegExp("["+Dd+"]","g"),_u="[^"+Dd+"]",s1="[^"+Dd.replace("\\.","")+"]",r1=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",_u)+/(WCOD+)?/.source.replace("WCOD",s1)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u)+"$"),a1=["material","materials","bones","map"],xt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i1,"")}static parseTrackName(e){let t=r1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);a1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Pe("PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ze("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void ze("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[s];if(a===void 0)return void ze("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+s+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=class{constructor(n,e,t){let i=t||xt.parseTrackName(e);this._targetGroup=n,this._bindings=n.subscribe_(e,i)}getValue(n,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(n,e)}setValue(n,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=t.length;i!==s;++i)t[i].setValue(n,e)}bind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].bind()}unbind(){let n=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=n.length;e!==t;++e)n[e].unbind()}},xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray],xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tc=class{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Fs,endingEnd:Fs};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled)return void this._updateWeight(e);let r=this._startTime;if(r!==null){let l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;if(this.blendMode===e0)for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);else for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping()))}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,s=this.time+e,r=this._loopCount,a=i===2202;if(e===0)return r===-1||!a||1&~r?s:t-s;if(i===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else{if(!(s<0)){this.time=s;break e}s=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=s;if(a&&!(1&~r))return t-s}return s}_setEndings(e,t,i){let s=this._interpolantSettings;i?(s.endingStart=Bs,s.endingEnd=Bs):(s.endingStart=e?this.zeroSlopeAtStart?Bs:Fs:Ja,s.endingEnd=t?this.zeroSlopeAtEnd?Bs:Fs:Ja)}_scheduleFading(e,t,i){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}},o1=new Float32Array(1),$s=class extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],p=d.name,m=h[p];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let f=t&&t._propertyBindings[u].binding.parsedPath;m=new wc(xt.create(i,p,f),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null,delete o.actionByRoot[(e._localRoot||this._root).uuid],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new So(new Float32Array(2),new Float32Array(2),1,o1),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let s=t||this._root,r=s.uuid,a=typeof e=="string"?xs.findByName(s,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(i===void 0&&(i=a!==null?a.blendMode:Qm),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new Tc(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,s=i.uuid,r=typeof e=="string"?xs.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions;for(let t=this._nActiveActions-1;t>=0;--t)e[t].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let r in i){let a=i[r].actionByRoot[t];a!==void 0&&(this._deactivateAction(a),this._removeInactiveAction(a))}let s=this._bindingsByRootAndName[t];if(s!==void 0)for(let r in s){let a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var Sm=new Ce,Po=class{constructor(e,t,i=0,s=1/0){this.ray=new us(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sm),this}intersectObject(e,t=!0,i=[]){return Nu(e,this,i,t),i.sort(wm),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nu(e[s],this,i,t);return i.sort(wm),i}};function wm(n,e){return n.distance-e.distance}function Nu(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Nu(r[a],e,t,!0)}}var kd=class kd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};kd.prototype.isMatrix2=!0;var Du=kd,mM=new ce;var gM=new D,xM=new D,vM=new D,yM=new D,_M=new D,MM=new D,bM=new D;var SM=new D;var wM=new D,TM=new Ce,EM=new Ce;var AM=new D,RM=new ye,CM=new ye;var PM=new D,IM=new D,LM=new D;var NM=new D,DM=new ca;var UM=new on;var zM=new D;function Ud(n,e,t,i){let s=(function(r){switch(r){case Un:case ju:return{byteLength:1,components:1};case ga:case qu:case vn:return{byteLength:2,components:1};case Fc:case Bc:return{byteLength:2,components:4};case Zi:case Oc:case zn:return{byteLength:4,components:1};case Yu:case Ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)})(i);switch(t){case 1021:return n*e;case kc:case Hc:return n*e/s.components*s.byteLength;case 1030:case 1031:return n*e*2/s.components*s.byteLength;case 1022:return n*e*3/s.components*s.byteLength;case Wn:case 1033:return n*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:case 37808:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function B0(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u1(n){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(n.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let s=e.get(t);if(s===void 0)e.set(t,(function(r,a){let o=r.array,l=r.usage,c=o.byteLength,h=n.createBuffer(),u;if(n.bindBuffer(a,h),n.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=n.HALF_FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?n.HALF_FLOAT:n.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=n.SHORT;else if(o instanceof Uint32Array)u=n.UNSIGNED_INT;else if(o instanceof Int32Array)u=n.INT;else if(o instanceof Int8Array)u=n.BYTE;else if(o instanceof Uint8Array)u=n.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=n.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}})(t,i));else if(s.version<t.version){if(s.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let l=a.array,c=a.updateRanges;if(n.bindBuffer(o,r),c.length===0)n.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];n.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(s.buffer,t,i),s.version=t.version}}}}var Je={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},_e={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ri={basic:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:yn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:yn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ye(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:yn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:yn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:yn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:yn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:yn([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:yn([_e.lights,_e.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ri.physical={uniforms:yn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Jc={r:0,b:0,g:0},d1=new Ce,k0=new Ge;function p1(n,e,t,i,s,r){let a=new ye(0),o,l,c=s===!0?0:1,h=null,u=0,d=null;function p(f){let v=f.isScene===!0?f.background:null;if(v&&v.isTexture){let x=f.backgroundBlurriness>0;v=e.get(v,x)}return v}function m(f,v){f.getRGB(Jc,Nd(n)),t.buffers.color.setClear(Jc.r,Jc.g,Jc.b,v,r)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,m(a,c)},render:function(f){let v=!1,x=p(f);x===null?m(a,c):x&&x.isColor&&(m(x,1),v=!0);let g=n.xr.getEnvironmentBlendMode();g==="additive"?t.buffers.color.setClear(0,0,0,1,r):g==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))},addToRenderList:function(f,v){let x=p(v);x&&(x.isCubeTexture||x.mapping===Lo)?(l===void 0&&(l=new ue(new Qe(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:ar(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(g,y,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(d1.makeRotationFromEuler(v.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(k0),l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==lt,h===x&&u===x.version&&d===n.toneMapping||(l.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(o===void 0&&(o=new ue(new pn(2,2),new Ht({name:"BackgroundMaterial",uniforms:ar(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=x,o.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,o.material.toneMapped=Ke.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),o.material.uniforms.uvTransform.value.copy(x.matrix),h===x&&u===x.version&&d===n.toneMapping||(o.material.needsUpdate=!0,h=x,u=x.version,d=n.toneMapping),o.layers.enableAll(),f.unshift(o,o.geometry,o.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}}}function f1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=c(null),r=s,a=!1;function o(x){return n.bindVertexArray(x)}function l(x){return n.deleteVertexArray(x)}function c(x){let g=[],y=[],M=[];for(let S=0;S<t;S++)g[S]=0,y[S]=0,M[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:y,attributeDivisors:M,object:x,attributes:{},index:null}}function h(){let x=r.newAttributes;for(let g=0,y=x.length;g<y;g++)x[g]=0}function u(x){d(x,0)}function d(x,g){let y=r.newAttributes,M=r.enabledAttributes,S=r.attributeDivisors;y[x]=1,M[x]===0&&(n.enableVertexAttribArray(x),M[x]=1),S[x]!==g&&(n.vertexAttribDivisor(x,g),S[x]=g)}function p(){let x=r.newAttributes,g=r.enabledAttributes;for(let y=0,M=g.length;y<M;y++)g[y]!==x[y]&&(n.disableVertexAttribArray(y),g[y]=0)}function m(x,g,y,M,S,b,E){E===!0?n.vertexAttribIPointer(x,g,y,S,b):n.vertexAttribPointer(x,g,y,M,S,b)}function f(){v(),a=!0,r!==s&&(r=s,o(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:function(x,g,y,M,S){let b=!1,E=(function(U,_,T,I){let w=I.wireframe===!0,R=i[_.id];R===void 0&&(R={},i[_.id]=R);let P=U.isInstancedMesh===!0?U.id:0,L=R[P];L===void 0&&(L={},R[P]=L);let B=L[T.id];B===void 0&&(B={},L[T.id]=B);let k=B[w];return k===void 0&&(k=c(n.createVertexArray()),B[w]=k),k})(x,M,y,g);r!==E&&(r=E,o(r.object)),b=(function(U,_,T,I){let w=r.attributes,R=_.attributes,P=0,L=T.getAttributes();for(let B in L)if(L[B].location>=0){let k=w[B],X=R[B];if(X===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),k===void 0||k.attribute!==X||X&&k.data!==X.data)return!0;P++}return r.attributesNum!==P||r.index!==I})(x,M,y,S),b&&(function(U,_,T,I){let w={},R=_.attributes,P=0,L=T.getAttributes();for(let B in L)if(L[B].location>=0){let k=R[B];k===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(k=U.instanceColor));let X={};X.attribute=k,k&&k.data&&(X.data=k.data),w[B]=X,P++}r.attributes=w,r.attributesNum=P,r.index=I})(x,M,y,S),S!==null&&e.update(S,n.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,(function(U,_,T,I){h();let w=I.attributes,R=T.getAttributes(),P=_.defaultAttributeValues;for(let L in R){let B=R[L];if(B.location>=0){let k=w[L];if(k===void 0&&(L==="instanceMatrix"&&U.instanceMatrix&&(k=U.instanceMatrix),L==="instanceColor"&&U.instanceColor&&(k=U.instanceColor)),k!==void 0){let X=k.normalized,ee=k.itemSize,le=e.get(k);if(le===void 0)continue;let ae=le.buffer,ne=le.type,J=le.bytesPerElement,$=ne===n.INT||ne===n.UNSIGNED_INT||k.gpuType===Oc;if(k.isInterleavedBufferAttribute){let V=k.data,q=V.stride,Y=k.offset;if(V.isInstancedInterleavedBuffer){for(let W=0;W<B.locationSize;W++)d(B.location+W,V.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let W=0;W<B.locationSize;W++)u(B.location+W);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let W=0;W<B.locationSize;W++)m(B.location+W,ee/B.locationSize,ne,X,q*J,(Y+ee/B.locationSize*W)*J,$)}else{if(k.isInstancedBufferAttribute){for(let V=0;V<B.locationSize;V++)d(B.location+V,k.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let V=0;V<B.locationSize;V++)u(B.location+V);n.bindBuffer(n.ARRAY_BUFFER,ae);for(let V=0;V<B.locationSize;V++)m(B.location+V,ee/B.locationSize,ne,X,ee*J,ee/B.locationSize*V*J,$)}}else if(P!==void 0){let X=P[L];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(B.location,X);break;case 3:n.vertexAttrib3fv(B.location,X);break;case 4:n.vertexAttrib4fv(B.location,X);break;default:n.vertexAttrib1fv(B.location,X)}}}}p()})(x,g,y,M),S!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:f,resetDefaultState:v,dispose:function(){f();for(let x in i){let g=i[x];for(let y in g){let M=g[y];for(let S in M){let b=M[S];for(let E in b)l(b[E].object),delete b[E];delete M[S]}}delete i[x]}},releaseStatesOfGeometry:function(x){if(i[x.id]===void 0)return;let g=i[x.id];for(let y in g){let M=g[y];for(let S in M){let b=M[S];for(let E in b)l(b[E].object),delete b[E];delete M[S]}}delete i[x.id]},releaseStatesOfObject:function(x){for(let g in i){let y=i[g],M=x.isInstancedMesh===!0?x.id:0,S=y[M];if(S!==void 0){for(let b in S){let E=S[b];for(let U in E)l(E[U].object),delete E[U];delete S[b]}delete y[M],Object.keys(y).length===0&&delete i[g]}}},releaseStatesOfProgram:function(x){for(let g in i){let y=i[g];for(let M in y){let S=y[M];if(S[x.id]===void 0)continue;let b=S[x.id];for(let E in b)l(b[E].object),delete b[E];delete S[x.id]}}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function m1(n,e,t){let i;this.setMode=function(s){i=s},this.render=function(s,r){n.drawArrays(i,s,r),t.update(r,i,1)},this.renderInstances=function(s,r,a){a!==0&&(n.drawArraysInstanced(i,s,r,a),t.update(r,i,a))},this.renderMultiDraw=function(s,r,a){if(a===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,s,0,r,0,a);let o=0;for(let l=0;l<a;l++)o+=r[l];t.update(o,i,1)}}function g1(n,e,t,i){let s;function r(h){if(h==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";h="mediump"}return h==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(Pe("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");return t.reversedDepthBuffer===!0&&c===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),{isWebGL2:!0,getMaxAnisotropy:function(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let h=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s},getMaxPrecision:r,textureFormatReadable:function(h){return h===Wn||i.convert(h)===n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(h){let u=h===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(h!==Un&&i.convert(h)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&h!==zn&&!u)},precision:a,logarithmicDepthBuffer:l,reversedDepthBuffer:c,maxTextures:n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),maxVertexTextures:n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxTextureSize:n.getParameter(n.MAX_TEXTURE_SIZE),maxCubemapSize:n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:n.getParameter(n.MAX_VERTEX_ATTRIBS),maxVertexUniforms:n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:n.getParameter(n.MAX_VARYING_VECTORS),maxFragmentUniforms:n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),maxSamples:n.getParameter(n.MAX_SAMPLES),samples:n.getParameter(n.SAMPLES)}}function x1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new vi,o=new Ge,l={value:null,needsUpdate:!1};function c(h,u,d,p){let m=h!==null?h.length:0,f=null;if(m!==0){if(f=l.value,p!==!0||f===null){let v=d+4*m,x=u.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let g=0,y=d;g!==m;++g,y+=4)a.copy(h[g]).applyMatrix4(x,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||s;return s=u,i=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,f=h.clipShadows,v=n.get(h);if(!s||p===null||p.length===0||r&&!f)r?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0})();else{let x=r?0:i,g=4*x,y=v.clippingState||null;l.value=y,y=c(p,u,g,d);for(let M=0;M!==g;++M)y[M]=t[M];v.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}}}k0.set(-1,0,0,0,1,0,0,0,1);var x0=[.125,.215,.35,.446,.526,.582],Do=20,Uo=new Ei,v0=new ye,Hd=null,Gd=0,Vd=0,Wd=!1,v1=new D,ba=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=v1}=r;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Vd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pa||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:vn,format:Wn,colorSpace:Mn,depthBuffer:!1},s=y0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+x0.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let m=1/p;d>a-4?m=x0[d-a+4-1]:d===0&&(m=0),l.push(m);let f=1/(p-2),v=-f,x=1+f,g=[v,v,x,v,x,x,v,v,x,x,v,x],y=6,M=6,S=3,b=2,E=1,U=new Float32Array(S*M*y),_=new Float32Array(b*M*y),T=new Float32Array(E*M*y);for(let w=0;w<y;w++){let R=w%3*2/3-1,P=w>2?0:-1,L=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];U.set(L,S*M*w),_.set(g,b*M*w);let B=[w,w,w,w,w,w];T.set(B,E*M*w)}let I=new Ye;I.setAttribute("position",new Mt(U,S)),I.setAttribute("uv",new Mt(_,b)),I.setAttribute("faceIndex",new Mt(T,E)),c.push(new ue(I,null)),h>4&&h--}return{lodMeshes:c,sizeLods:o,sigmas:l}})(r)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Do),h=new D(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Do,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})})(r,e,t),this._ggxMaterial=(function(a,o,l){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})})(r,e,t)}return s}_compileMaterial(e){let t=new ue(new Ye,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,i,s,r){let a=new Bt(90,1,t,i),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(v0),c.toneMapping=li,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(s),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new Qe,new Ct({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,m=!1,f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(v0),m=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(a.up.set(0,o[v],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x+l[v],r.y,r.z)):x===1?(a.up.set(0,0,o[v]),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y+l[v],r.z)):(a.up.set(0,o[v],0),a.position.set(r.x,r.y,r.z),a.lookAt(r.x,r.y,r.z+l[v]));let g=this._cubeSize;_a(s,x*g,v>2?g:0,g,g),c.setRenderTarget(s),m&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=h,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===pa||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_0());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r,r.uniforms.envMap.value=e;let o=this._cubeSize;_a(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Uo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h)*(0+1.25*c),{_lodMax:d}=this,p=this._sizeLods[i],m=3*p*(i>d-4?i-d+4:0),f=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=d-t,_a(r,m,f,3*p,2*p),s.setRenderTarget(r),s.render(o,Uo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=d-i,_a(e,m,f,3*p,2*p),s.setRenderTarget(e),s.render(o,Uo)}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[s];h.material=c;let u=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,m=r/p,f=isFinite(r)?1+Math.floor(3*m):Do;f>Do&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let v=[],x=0;for(let M=0;M<Do;++M){let S=M/m,b=Math.exp(-S*S/2);v.push(b),M===0?x+=b:M<f&&(x+=2*b)}for(let M=0;M<v.length;M++)v[M]=v[M]/x;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=v,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-i;let y=this._sizeLods[s];_a(t,3*y*(s>g-4?s-g+4:0),4*(this._cubeSize-y),3*y,2*y),l.setRenderTarget(t),l.render(h,Uo)}};function y0(n,e,t){let i=new Qt(n,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _0(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function M0(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}var eh=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new co(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:oi});r.uniforms.tEquirect.value=t;let a=new ue(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Kt),new bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function y1(n){let e=new WeakMap,t=new WeakMap,i=null;function s(o,l){return l===fa?o.mapping=pa:l===Uc&&(o.mapping=tr),o}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}return{get:function(o,l=!1){return o==null?null:l?(function(c){if(c&&c.isTexture){let h=c.mapping,u=h===fa||h===Uc,d=h===pa||h===tr;if(u||d){let p=t.get(c),m=p!==void 0?p.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==m)return i===null&&(i=new ba(n)),p=u?i.fromEquirectangular(c,p):i.fromCubemap(c,p),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),p.texture;if(p!==void 0)return p.texture;{let f=c.image;return u&&f&&f.height>0||d&&f&&(function(v){let x=0,g=6;for(let y=0;y<g;y++)v[y]!==void 0&&x++;return x===g})(f)?(i===null&&(i=new ba(n)),p=u?i.fromEquirectangular(c):i.fromCubemap(c),p.texture.pmremVersion=c.pmremVersion,t.set(c,p),c.addEventListener("dispose",a),p.texture):null}}}return c})(o):(function(c){if(c&&c.isTexture){let h=c.mapping;if(h===fa||h===Uc){if(e.has(c))return s(e.get(c).texture,c.mapping);{let u=c.image;if(u&&u.height>0){let d=new eh(u.height);return d.fromEquirectangularTexture(n,c),e.set(c,d),c.addEventListener("dispose",r),s(d.texture,c.mapping)}return null}}}return c})(o)},dispose:function(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}}}function _1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ks("WebGLRenderer: "+i+" extension not supported."),s}}}function M1(n,e,t,i){let s={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete s[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(u===void 0)return;if(h!==null){let f=h.array;d=h.version;for(let v=0,x=f.length;v<x;v+=3){let g=f[v+0],y=f[v+1],M=f[v+2];c.push(g,y,y,M,M,g)}}else{let f=u.array;d=u.version;for(let v=0,x=f.length/3-1;v<x;v+=3){let g=v+0,y=v+1,M=v+2;c.push(g,y,y,M,M,g)}}let p=new(u.count>=65535?so:io)(c,1);p.version=d;let m=r.get(l);m&&e.remove(m),r.set(l,p)}return{get:function(l,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],n.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function b1(n,e,t){let i,s,r;this.setMode=function(a){i=a},this.setIndex=function(a){s=a.type,r=a.bytesPerElement},this.render=function(a,o){n.drawElements(i,o,s,a*r),t.update(o,i,1)},this.renderInstances=function(a,o,l){l!==0&&(n.drawElementsInstanced(i,o,s,a*r,l),t.update(o,i,l))},this.renderMultiDraw=function(a,o,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,o,0,s,a,0,l);let c=0;for(let h=0;h<l;h++)c+=o[h];t.update(c,i,1)}}function S1(n){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,s){switch(e.calls++,i){case n.TRIANGLES:e.triangles+=s*(t/3);break;case n.LINES:e.lines+=s*(t/2);break;case n.LINE_STRIP:e.lines+=s*(t-1);break;case n.LINE_LOOP:e.lines+=s*t;break;case n.POINTS:e.points+=s*t;break;default:ze("WebGLInfo: Unknown draw mode:",i)}}}}function w1(n,e,t){let i=new WeakMap,s=new ft;return{update:function(r,a,o){let l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==h){let U=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),m===!0&&(g=3);let y=a.attributes.position.count*g,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*M*4*h),b=new eo(S,y,M,h);b.type=zn,b.needsUpdate=!0;let E=4*g;for(let _=0;_<h;_++){let T=f[_],I=v[_],w=x[_],R=y*M*4*_;for(let P=0;P<T.count;P++){let L=P*E;d===!0&&(s.fromBufferAttribute(T,P),S[R+L+0]=s.x,S[R+L+1]=s.y,S[R+L+2]=s.z,S[R+L+3]=0),p===!0&&(s.fromBufferAttribute(I,P),S[R+L+4]=s.x,S[R+L+5]=s.y,S[R+L+6]=s.z,S[R+L+7]=0),m===!0&&(s.fromBufferAttribute(w,P),S[R+L+8]=s.x,S[R+L+9]=s.y,S[R+L+10]=s.z,S[R+L+11]=w.itemSize===4?s.w:1)}}u={count:h,texture:b,size:new ce(y,M)},i.set(a,u),a.addEventListener("dispose",U)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(n,"morphTargetBaseInfluence",p),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}}}function T1(n,e,t,i,s){let r=new WeakMap;function a(o){let l=o.target;l.removeEventListener("dispose",a),i.releaseStatesOfObject(l),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(o){let l=s.render.frame,c=o.geometry,h=e.get(o,c);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==l&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,l))),o.isSkinnedMesh){let u=o.skeleton;r.get(u)!==l&&(u.update(),r.set(u,l))}return h},dispose:function(){r=new WeakMap}}}var E1={[Cc]:"LINEAR_TONE_MAPPING",[Pc]:"REINHARD_TONE_MAPPING",[Ic]:"CINEON_TONE_MAPPING",[da]:"ACES_FILMIC_TONE_MAPPING",[Nc]:"AGX_TONE_MAPPING",[Dc]:"NEUTRAL_TONE_MAPPING",[Lc]:"CUSTOM_TONE_MAPPING"};function A1(n,e,t,i,s,r){let a=new Qt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ji(e,t):void 0}),o=new Qt(e,t,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye;l.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new be([0,2,0,0,2,0],2));let c=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ue(l,c),u=new Ei(-1,1,1,-1,0,1),d,p=null,m=null,f=!1,v=null,x=[],g=!1;this.setSize=function(y,M){a.setSize(y,M),o.setSize(y,M);for(let S=0;S<x.length;S++){let b=x[S];b.setSize&&b.setSize(y,M)}},this.setEffects=function(y){x=y,g=x.length>0&&x[0].isRenderPass===!0;let M=a.width,S=a.height;for(let b=0;b<x.length;b++){let E=x[b];E.setSize&&E.setSize(M,S)}},this.begin=function(y,M){if(f||y.toneMapping===li&&x.length===0)return!1;if(v=M,M!==null){let S=M.width,b=M.height;a.width===S&&a.height===b||this.setSize(S,b)}return g===!1&&y.setRenderTarget(a),d=y.toneMapping,y.toneMapping=li,!0},this.hasRenderPass=function(){return g},this.end=function(y,M){y.toneMapping=d,f=!0;let S=a,b=o;for(let E=0;E<x.length;E++){let U=x[E];if(U.enabled!==!1&&(U.render(y,b,S,M),U.needsSwap!==!1)){let _=S;S=b,b=_}}if(p!==y.outputColorSpace||m!==y.toneMapping){p=y.outputColorSpace,m=y.toneMapping,c.defines={},Ke.getTransfer(p)===lt&&(c.defines.SRGB_TRANSFER="");let E=E1[m];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(v),y.render(h,u),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var H0=new kt,qd=new ji(1,1),G0=new eo,V0=new Yl,W0=new co,b0=[],S0=[],w0=new Float32Array(16),T0=new Float32Array(9),E0=new Float32Array(4);function Sa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=b0[s];if(r===void 0&&(r=new Float32Array(s),b0[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nh(n,e){let t=S0[e];t===void 0&&(t=new Int32Array(e),S0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function P1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function I1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function L1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;E0.set(i),n.uniformMatrix2fv(this.addr,!1,E0),tn(t,i)}}function N1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;T0.set(i),n.uniformMatrix3fv(this.addr,!1,T0),tn(t,i)}}function D1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;w0.set(i),n.uniformMatrix4fv(this.addr,!1,w0),tn(t,i)}}function U1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function O1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function B1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function k1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function H1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function G1(n,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function V1(n,e,t){let i=this.cache,s=t.allocateTextureUnit(),r;i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),this.type===n.SAMPLER_2D_SHADOW?(qd.compareFunction=t.isReversedDepthBuffer()?Kc:Yc,r=qd):r=H0,t.setTexture2D(e||r,s)}function W1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||V0,s)}function X1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||W0,s)}function j1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||G0,s)}function q1(n,e){n.uniform1fv(this.addr,e)}function Y1(n,e){let t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function K1(n,e){let t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function Z1(n,e){let t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function J1(n,e){let t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function $1(n,e){let t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q1(n,e){let t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ev(n,e){n.uniform1iv(this.addr,e)}function tv(n,e){n.uniform2iv(this.addr,e)}function nv(n,e){n.uniform3iv(this.addr,e)}function iv(n,e){n.uniform4iv(this.addr,e)}function sv(n,e){n.uniform1uiv(this.addr,e)}function rv(n,e){n.uniform2uiv(this.addr,e)}function av(n,e){n.uniform3uiv(this.addr,e)}function ov(n,e){n.uniform4uiv(this.addr,e)}function lv(n,e,t){let i=this.cache,s=e.length,r=nh(t,s),a;en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r)),a=this.type===n.SAMPLER_2D_SHADOW?qd:H0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function cv(n,e,t){let i=this.cache,s=e.length,r=nh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||V0,r[a])}function hv(n,e,t){let i=this.cache,s=e.length,r=nh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||W0,r[a])}function uv(n,e,t){let i=this.cache,s=e.length,r=nh(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||G0,r[a])}var Yd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=(function(s){switch(s){case 5126:return R1;case 35664:return C1;case 35665:return P1;case 35666:return I1;case 35674:return L1;case 35675:return N1;case 35676:return D1;case 5124:case 35670:return U1;case 35667:case 35671:return z1;case 35668:case 35672:return O1;case 35669:case 35673:return F1;case 5125:return B1;case 36294:return k1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return V1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return j1}})(t.type)}},Kd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(s){switch(s){case 5126:return q1;case 35664:return Y1;case 35665:return K1;case 35666:return Z1;case 35674:return J1;case 35675:return $1;case 35676:return Q1;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return av;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}})(t.type)}},Zd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Xd=/(\w+)(\])?(\[|\.)?/g;function A0(n,e){n.seq.push(e),n.map[e.id]=e}function dv(n,e,t){let i=n.name,s=i.length;for(Xd.lastIndex=0;;){let r=Xd.exec(i),a=Xd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===s){A0(t,c===void 0?new Yd(o,n,e):new Kd(o,n,e));break}{let h=t.map[o];h===void 0&&(h=new Zd(o),A0(t,h)),t=h}}}var Ma=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a);dv(o,e.getUniformLocation(t,o.name),this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function R0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pv=0,C0=new Ge;function P0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===l?">":" "} ${m}: ${c[p]}`)}return h.join(`
`)})(n.getShaderSource(e),a)}return s}function fv(n,e){let t=(function(i){Ke._getMatrix(C0,Ke.workingColorSpace,i);let s=`mat3( ${C0.elements.map(r=>r.toFixed(4))} )`;switch(Ke.getTransfer(i)){case $a:return[s,"LinearTransferOETF"];case lt:return[s,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[s,"LinearTransferOETF"]}})(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var mv={[Cc]:"Linear",[Pc]:"Reinhard",[Ic]:"Cineon",[da]:"ACESFilmic",[Nc]:"AgX",[Dc]:"Neutral",[Lc]:"Custom"};function gv(n,e){let t=mv[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $c=new D;function xv(){return Ke.getLuminanceCoefficients($c),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${$c.x.toFixed(4)}, ${$c.y.toFixed(4)}, ${$c.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zo(n){return n!==""}function I0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function L0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(n){return n.replace(vv,_v)}var yv=new Map;function _v(n,e){let t=Je[e];if(t===void 0){let i=yv.get(e);if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");t=Je[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Jd(t)}var Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N0(n){return n.replace(Mv,bv)}function bv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function D0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Sv={[Io]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"},wv={[pa]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE_UV"},Tv={[tr]:"ENVMAP_MODE_REFRACTION"},Ev={[qm]:"ENVMAP_BLENDING_MULTIPLY",[Ym]:"ENVMAP_BLENDING_MIX",[Km]:"ENVMAP_BLENDING_ADD"};function Av(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(I){return Sv[I.shadowMapType]||"SHADOWMAP_TYPE_BASIC"})(t),c=(function(I){return I.envMap===!1?"ENVMAP_TYPE_CUBE":wv[I.envMapMode]||"ENVMAP_TYPE_CUBE"})(t),h=(function(I){return I.envMap===!1?"ENVMAP_MODE_REFLECTION":Tv[I.envMapMode]||"ENVMAP_MODE_REFLECTION"})(t),u=(function(I){return I.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[I.combine]||"ENVMAP_BLENDING_NONE"})(t),d=(function(I){let w=I.envMapCubeUVHeight;if(w===null)return null;let R=Math.log2(w)-2,P=1/w;return{texelWidth:1/(3*Math.max(Math.pow(2,R),112)),texelHeight:P,maxMip:R}})(t),p=(function(I){return[I.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",I.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)})(t),m=(function(I){let w=[];for(let R in I){let P=I[R];P!==!1&&w.push("#define "+R+" "+P)}return w.join(`
`)})(r),f=s.createProgram(),v,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(zo).join(`
`),x.length>0&&(x+=`
`)):(v=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),x=[D0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Je.tonemapping_pars_fragment:"",t.toneMapping!==li?gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),a=Jd(a),a=I0(a,t),a=L0(a,t),o=Jd(o),o=I0(o,t),o=L0(o,t),a=N0(a),o=N0(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",t.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=g+v+a,M=g+x+o,S=R0(s,s.VERTEX_SHADER,y),b=R0(s,s.FRAGMENT_SHADER,M);function E(I){if(n.debug.checkShaderErrors){let w=s.getProgramInfoLog(f)||"",R=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(b)||"",L=w.trim(),B=R.trim(),k=P.trim(),X=!0,ee=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,S,b);else{let le=P0(s,S,"vertex"),ae=P0(s,b,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+le+`
`+ae)}else L!==""?Pe("WebGLProgram: Program Info Log:",L):B!==""&&k!==""||(ee=!1);ee&&(I.diagnostics={runnable:X,programLog:L,vertexShader:{log:B,prefix:v},fragmentShader:{log:k,prefix:x}})}s.deleteShader(S),s.deleteShader(b),U=new Ma(s,f),_=(function(w,R){let P={},L=w.getProgramParameter(R,w.ACTIVE_ATTRIBUTES);for(let B=0;B<L;B++){let k=w.getActiveAttrib(R,B),X=k.name,ee=1;k.type===w.FLOAT_MAT2&&(ee=2),k.type===w.FLOAT_MAT3&&(ee=3),k.type===w.FLOAT_MAT4&&(ee=4),P[X]={type:k.type,location:w.getAttribLocation(R,X),locationSize:ee}}return P})(s,f)}let U,_;s.attachShader(f,S),s.attachShader(f,b),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f),this.getUniforms=function(){return U===void 0&&E(this),U},this.getAttributes=function(){return _===void 0&&E(this),_};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(f,37297)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=b,this}var Rv=0,$d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Qd(e),t.set(e,i)),i}},Qd=class{constructor(e){this.id=Rv++,this.code=e,this.usedTimes=0}};function Cv(n,e,t,i,s,r){let a=new Zr,o=new $d,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,v,x,g,y,M){let S=g.fog,b=y.geometry,E=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?g.environment:null,U=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,_=e.get(f.envMap||E,U),T=_&&_.mapping===Lo?_.image.height:null,I=p[f.type];f.precision!==null&&(d=i.getMaxPrecision(f.precision),d!==f.precision&&Pe("WebGLProgram.getParameters:",f.precision,"not supported, using",d,"instead."));let w=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,R=w!==void 0?w.length:0,P,L,B,k,X=0;if(b.morphAttributes.position!==void 0&&(X=1),b.morphAttributes.normal!==void 0&&(X=2),b.morphAttributes.color!==void 0&&(X=3),I){let Yn=Ri[I];P=Yn.vertexShader,L=Yn.fragmentShader}else{P=f.vertexShader,L=f.fragmentShader;let Yn=o.getVertexShaderStage(f),Ps=o.getFragmentShaderStage(f);o.update(f,Yn,Ps),B=Yn.id,k=Ps.id}let ee=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),ae=y.isInstancedMesh===!0,ne=y.isBatchedMesh===!0,J=!!f.map,$=!!f.matcap,V=!!_,q=!!f.aoMap,Y=!!f.lightMap,W=!!f.bumpMap&&f.wireframe===!1,N=!!f.normalMap,A=!!f.displacementMap,F=!!f.emissiveMap,j=!!f.metalnessMap,C=!!f.roughnessMap,H=f.anisotropy>0,G=f.clearcoat>0,z=f.dispersion>0,K=f.iridescence>0,te=f.sheen>0,se=f.transmission>0,fe=H&&!!f.anisotropyMap,Ee=G&&!!f.clearcoatMap,Te=G&&!!f.clearcoatNormalMap,ve=G&&!!f.clearcoatRoughnessMap,Me=K&&!!f.iridescenceMap,re=K&&!!f.iridescenceThicknessMap,pe=te&&!!f.sheenColorMap,de=te&&!!f.sheenRoughnessMap,Se=!!f.specularMap,ut=!!f.specularColorMap,Xe=!!f.specularIntensityMap,yt=se&&!!f.transmissionMap,Zt=se&&!!f.thicknessMap,Ie=!!f.gradientMap,dt=!!f.alphaMap,$e=f.alphaTest>0,cn=!!f.alphaHash,wt=!!f.extensions,Jt=li;f.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(Jt=n.toneMapping));let Ut={shaderID:I,shaderType:f.type,shaderName:f.name,vertexShader:P,fragmentShader:L,defines:f.defines,customVertexShaderID:B,customFragmentShaderID:k,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:d,batching:ne,batchingColor:ne&&y._colorsTexture!==null,instancing:ae,instancingColor:ae&&y.instanceColor!==null,instancingMorph:ae&&y.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ke.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:J,matcap:$,envMap:V,envMapMode:V&&_.mapping,envMapCubeUVHeight:T,aoMap:q,lightMap:Y,bumpMap:W,normalMap:N,displacementMap:A,emissiveMap:F,normalMapObjectSpace:N&&f.normalMapType===t0,normalMapTangentSpace:N&&f.normalMapType===Pd,packedNormalMap:N&&f.normalMapType===Pd&&(Bn=f.normalMap.format,Bn===sr||Bn===jc||Bn===qc),metalnessMap:j,roughnessMap:C,anisotropy:H,anisotropyMap:fe,clearcoat:G,clearcoatMap:Ee,clearcoatNormalMap:Te,clearcoatRoughnessMap:ve,dispersion:z,iridescence:K,iridescenceMap:Me,iridescenceThicknessMap:re,sheen:te,sheenColorMap:pe,sheenRoughnessMap:de,specularMap:Se,specularColorMap:ut,specularIntensityMap:Xe,transmission:se,transmissionMap:yt,thicknessMap:Zt,gradientMap:Ie,opaque:f.transparent===!1&&f.blending===Qs&&f.alphaToCoverage===!1,alphaMap:dt,alphaTest:$e,alphaHash:cn,combine:f.combine,mapUv:J&&m(f.map.channel),aoMapUv:q&&m(f.aoMap.channel),lightMapUv:Y&&m(f.lightMap.channel),bumpMapUv:W&&m(f.bumpMap.channel),normalMapUv:N&&m(f.normalMap.channel),displacementMapUv:A&&m(f.displacementMap.channel),emissiveMapUv:F&&m(f.emissiveMap.channel),metalnessMapUv:j&&m(f.metalnessMap.channel),roughnessMapUv:C&&m(f.roughnessMap.channel),anisotropyMapUv:fe&&m(f.anisotropyMap.channel),clearcoatMapUv:Ee&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:Te&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(f.sheenRoughnessMap.channel),specularMapUv:Se&&m(f.specularMap.channel),specularColorMapUv:ut&&m(f.specularColorMap.channel),specularIntensityMapUv:Xe&&m(f.specularIntensityMap.channel),transmissionMapUv:yt&&m(f.transmissionMap.channel),thicknessMapUv:Zt&&m(f.thicknessMap.channel),alphaMapUv:dt&&m(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(N||H),vertexNormals:!!b.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!b.attributes.uv&&(J||dt),fog:!!S,useFog:f.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||b.attributes.normal===void 0&&N===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:y.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:X,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:M.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:f.dithering,shadowMapEnabled:n.shadowMap.enabled&&x.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:J&&f.map.isVideoTexture===!0&&Ke.getTransfer(f.map.colorSpace)===lt,decodeVideoTextureEmissive:F&&f.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(f.emissiveMap.colorSpace)===lt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===bt,flipSided:f.side===Pn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:wt&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&f.extensions.multiDraw===!0||ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};var Bn;return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut},getProgramCacheKey:function(f){let v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(let x in f.defines)v.push(x),v.push(f.defines[x]);return f.isRawShaderMaterial===!1&&((function(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapCubeUVHeight),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.morphAttributeCount),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)})(v,f),(function(x,g){a.disableAll(),g.instancing&&a.enable(0),g.instancingColor&&a.enable(1),g.instancingMorph&&a.enable(2),g.matcap&&a.enable(3),g.envMap&&a.enable(4),g.normalMapObjectSpace&&a.enable(5),g.normalMapTangentSpace&&a.enable(6),g.clearcoat&&a.enable(7),g.iridescence&&a.enable(8),g.alphaTest&&a.enable(9),g.vertexColors&&a.enable(10),g.vertexAlphas&&a.enable(11),g.vertexUv1s&&a.enable(12),g.vertexUv2s&&a.enable(13),g.vertexUv3s&&a.enable(14),g.vertexTangents&&a.enable(15),g.anisotropy&&a.enable(16),g.alphaHash&&a.enable(17),g.batching&&a.enable(18),g.dispersion&&a.enable(19),g.batchingColor&&a.enable(20),g.gradientMap&&a.enable(21),g.packedNormalMap&&a.enable(22),g.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),g.numLightProbeGrids>0&&a.enable(22),g.hasPositionAttribute&&a.enable(23),x.push(a.mask)})(v,f),v.push(n.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()},getUniforms:function(f){let v=p[f.type],x;if(v){let g=Ri[v];x=or.clone(g.uniforms)}else x=f.uniforms;return x},acquireProgram:function(f,v){let x=h.get(v);return x!==void 0?++x.usedTimes:(x=new Av(n,v,f,s),c.push(x),h.set(v,x)),x},releaseProgram:function(f){if(--f.usedTimes===0){let v=c.indexOf(f);c[v]=c[c.length-1],c.pop(),h.delete(f.cacheKey),f.destroy()}},releaseShaderCache:function(f){o.remove(f)},programs:c,dispose:function(){o.dispose()}}}function Pv(){let n=new WeakMap;return{has:function(e){return n.has(e)},get:function(e){let t=n.get(e);return t===void 0&&(t={},n.set(e,t)),t},remove:function(e){n.delete(e)},update:function(e,t,i){n.get(e)[t]=i},dispose:function(){n=new WeakMap}}}function Iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function U0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function z0(){let n=[],e=0,t=[],i=[],s=[];function r(o){let l=0;return o.isInstancedMesh&&(l+=2),o.isSkinnedMesh&&(l+=1),l}function a(o,l,c,h,u,d){let p=n[e];return p===void 0?(p={id:o.id,object:o,geometry:l,material:c,materialVariant:r(o),groupOrder:h,renderOrder:o.renderOrder,z:u,group:d},n[e]=p):(p.id=o.id,p.object=o,p.geometry=l,p.material=c,p.materialVariant=r(o),p.groupOrder=h,p.renderOrder=o.renderOrder,p.z=u,p.group=d),e++,p}return{opaque:t,transmissive:i,transparent:s,init:function(){e=0,t.length=0,i.length=0,s.length=0},push:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.push(p):c.transparent===!0?s.push(p):t.push(p)},unshift:function(o,l,c,h,u,d){let p=a(o,l,c,h,u,d);c.transmission>0?i.unshift(p):c.transparent===!0?s.unshift(p):t.unshift(p)},finish:function(){for(let o=e,l=n.length;o<l;o++){let c=n[o];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(o,l,c){t.length>1&&t.sort(o||Iv),i.length>1&&i.sort(l||U0),s.length>1&&s.sort(l||U0),c&&(t.reverse(),i.reverse(),s.reverse())}}}function Lv(){let n=new WeakMap;return{get:function(e,t){let i=n.get(e),s;return i===void 0?(s=new z0,n.set(e,[s])):t>=i.length?(s=new z0,i.push(s)):s=i[t],s},dispose:function(){n=new WeakMap}}}function Nv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ye};break;case"SpotLight":t={position:new D,direction:new D,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new D,halfWidth:new D,halfHeight:new D}}return n[e.id]=t,t}}}var Dv=0;function Uv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zv(n){let e=new Nv,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new D);let s=new D,r=new Ce,a=new Ce;return{setup:function(o){let l=0,c=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let u=0,d=0,p=0,m=0,f=0,v=0,x=0,g=0,y=0,M=0,S=0;o.sort(Uv);for(let E=0,U=o.length;E<U;E++){let _=o[E],T=_.color,I=_.intensity,w=_.distance,R=null;if(_.shadow&&_.shadow.map&&(R=_.shadow.map.texture.format===sr?_.shadow.map.texture:_.shadow.map.depthTexture||_.shadow.map.texture),_.isAmbientLight)l+=T.r*I,c+=T.g*I,h+=T.b*I;else if(_.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(_.sh.coefficients[P],I);S++}else if(_.isDirectionalLight){let P=e.get(_);if(P.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){let L=_.shadow,B=t.get(_);B.shadowIntensity=L.intensity,B.shadowBias=L.bias,B.shadowNormalBias=L.normalBias,B.shadowRadius=L.radius,B.shadowMapSize=L.mapSize,i.directionalShadow[u]=B,i.directionalShadowMap[u]=R,i.directionalShadowMatrix[u]=_.shadow.matrix,v++}i.directional[u]=P,u++}else if(_.isSpotLight){let P=e.get(_);P.position.setFromMatrixPosition(_.matrixWorld),P.color.copy(T).multiplyScalar(I),P.distance=w,P.coneCos=Math.cos(_.angle),P.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),P.decay=_.decay,i.spot[p]=P;let L=_.shadow;if(_.map&&(i.spotLightMap[y]=_.map,y++,L.updateMatrices(_),_.castShadow&&M++),i.spotLightMatrix[p]=L.matrix,_.castShadow){let B=t.get(_);B.shadowIntensity=L.intensity,B.shadowBias=L.bias,B.shadowNormalBias=L.normalBias,B.shadowRadius=L.radius,B.shadowMapSize=L.mapSize,i.spotShadow[p]=B,i.spotShadowMap[p]=R,g++}p++}else if(_.isRectAreaLight){let P=e.get(_);P.color.copy(T).multiplyScalar(I),P.halfWidth.set(.5*_.width,0,0),P.halfHeight.set(0,.5*_.height,0),i.rectArea[m]=P,m++}else if(_.isPointLight){let P=e.get(_);if(P.color.copy(_.color).multiplyScalar(_.intensity),P.distance=_.distance,P.decay=_.decay,_.castShadow){let L=_.shadow,B=t.get(_);B.shadowIntensity=L.intensity,B.shadowBias=L.bias,B.shadowNormalBias=L.normalBias,B.shadowRadius=L.radius,B.shadowMapSize=L.mapSize,B.shadowCameraNear=L.camera.near,B.shadowCameraFar=L.camera.far,i.pointShadow[d]=B,i.pointShadowMap[d]=R,i.pointShadowMatrix[d]=_.shadow.matrix,x++}i.point[d]=P,d++}else if(_.isHemisphereLight){let P=e.get(_);P.skyColor.copy(_.color).multiplyScalar(I),P.groundColor.copy(_.groundColor).multiplyScalar(I),i.hemi[f]=P,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let b=i.hash;b.directionalLength===u&&b.pointLength===d&&b.spotLength===p&&b.rectAreaLength===m&&b.hemiLength===f&&b.numDirectionalShadows===v&&b.numPointShadows===x&&b.numSpotShadows===g&&b.numSpotMaps===y&&b.numLightProbes===S||(i.directional.length=u,i.spot.length=p,i.rectArea.length=m,i.point.length=d,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=g+y-M,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=S,b.directionalLength=u,b.pointLength=d,b.spotLength=p,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=g,b.numSpotMaps=y,b.numLightProbes=S,i.version=Dv++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,m=l.matrixWorldInverse;for(let f=0,v=o.length;f<v;f++){let x=o[f];if(x.isDirectionalLight){let g=i.directional[c];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),c++}else if(x.isSpotLight){let g=i.spot[u];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),u++}else if(x.isRectAreaLight){let g=i.rectArea[d];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),g.halfWidth.set(.5*x.width,0,0),g.halfHeight.set(0,.5*x.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(x.isPointLight){let g=i.point[h];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){let g=i.hemi[p];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(m),p++}}},state:i}}function O0(n){let e=new zv(n),t=[],i=[],s=[],r={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:function(a){r.camera=a,t.length=0,i.length=0,s.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(a){e.setupView(t,a)},pushLight:function(a){t.push(a)},pushShadow:function(a){i.push(a)},pushLightProbeGrid:function(a){s.push(a)}}}function Ov(n){let e=new WeakMap;return{get:function(t,i=0){let s=e.get(t),r;return s===void 0?(r=new O0(n),e.set(t,[r])):i>=s.length?(r=new O0(n),s.push(r)):r=s[i],r},dispose:function(){e=new WeakMap}}}var Fv=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Bv=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],F0=new Ce,Oo=new D,jd=new D;function kv(n,e,t){let i=new Xi,s=new ce,r=new ce,a=new ft,o=new fc,l=new mc,c={},h=t.maxTextureSize,u={[ai]:Pn,[Pn]:ai,[bt]:bt},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ye;m.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new ue(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let x=this.type;function g(b,E){let U=e.update(f);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qt(s.x,s.y,{format:sr,type:vn})),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,U,d,f,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,U,p,f,null)}function y(b,E,U,_){let T=null,I=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)T=I;else if(T=U.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let w=T.uuid,R=E.uuid,P=c[w];P===void 0&&(P={},c[w]=P);let L=P[R];L===void 0&&(L=T.clone(),P[R]=L,E.addEventListener("dispose",S)),T=L}return T.visible=E.visible,T.wireframe=E.wireframe,T.side=_===ha?E.shadowSide!==null?E.shadowSide:E.side:E.shadowSide!==null?E.shadowSide:u[E.side],T.alphaMap=E.alphaMap,T.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,T.map=E.map,T.clipShadows=E.clipShadows,T.clippingPlanes=E.clippingPlanes,T.clipIntersection=E.clipIntersection,T.displacementMap=E.displacementMap,T.displacementScale=E.displacementScale,T.displacementBias=E.displacementBias,T.wireframeLinewidth=E.wireframeLinewidth,T.linewidth=E.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(n.properties.get(T).light=U),T}function M(b,E,U,_,T){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===ha)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);let w=e.update(b),R=b.material;if(Array.isArray(R)){let P=w.groups;for(let L=0,B=P.length;L<B;L++){let k=P[L],X=R[k.materialIndex];if(X&&X.visible){let ee=y(b,X,_,T);b.onBeforeShadow(n,b,E,U,w,ee,k),n.renderBufferDirect(U,null,w,ee,b,k),b.onAfterShadow(n,b,E,U,w,ee,k)}}}else if(R.visible){let P=y(b,R,_,T);b.onBeforeShadow(n,b,E,U,w,P,null),n.renderBufferDirect(U,null,w,P,b,null),b.onAfterShadow(n,b,E,U,w,P,null)}}let I=b.children;for(let w=0,R=I.length;w<R;w++)M(I[w],E,U,_,T)}function S(b){b.target.removeEventListener("dispose",S);for(let E in c){let U=c[E],_=b.target.uuid;_ in U&&(U[_].dispose(),delete U[_])}}this.render=function(b,E,U){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;this.type===Ac&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Io);let _=n.getRenderTarget(),T=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),w=n.state;w.setBlending(oi),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);let R=x!==this.type;R&&E.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(L=>L.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,L=b.length;P<L;P++){let B=b[P],k=B.shadow;if(k===void 0){Pe("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let X=k.getFrameExtents();s.multiply(X),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,k.mapSize.y=r.y));let ee=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ee,k.map===null||R===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ha){if(B.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Qt(s.x,s.y,{format:sr,type:vn,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new ji(s.x,s.y,zn),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=vs,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn}else B.isPointLight?(k.map=new eh(s.x),k.map.depthTexture=new $l(s.x,Zi)):(k.map=new Qt(s.x,s.y),k.map.depthTexture=new ji(s.x,s.y,Zi)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=vs,this.type===Io?(k.map.depthTexture.compareFunction=ee?Kc:Yc,k.map.depthTexture.minFilter=Kt,k.map.depthTexture.magFilter=Kt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn);k.camera.updateProjectionMatrix()}let le=k.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<le;ae++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ae),n.clear();else{ae===0&&(n.setRenderTarget(k.map),n.clear());let ne=k.getViewport(ae);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),w.viewport(a)}if(B.isPointLight){let ne=k.camera,J=k.matrix,$=B.distance||ne.far;$!==ne.far&&(ne.far=$,ne.updateProjectionMatrix()),Oo.setFromMatrixPosition(B.matrixWorld),ne.position.copy(Oo),jd.copy(ne.position),jd.add(Fv[ae]),ne.up.copy(Bv[ae]),ne.lookAt(jd),ne.updateMatrixWorld(),J.makeTranslation(-Oo.x,-Oo.y,-Oo.z),F0.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),k._frustum.setFromProjectionMatrix(F0,ne.coordinateSystem,ne.reversedDepth)}else k.updateMatrices(B);i=k.getFrustum(),M(E,U,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===ha&&g(k,U),k.needsUpdate=!1}x=this.type,v.needsUpdate=!1,n.setRenderTarget(_,T,I)}}function Hv(n,e){let t=new function(){let C=!1,H=new ft,G=null,z=new ft(0,0,0,0);return{setMask:function(K){G===K||C||(n.colorMask(K,K,K,K),G=K)},setLocked:function(K){C=K},setClear:function(K,te,se,fe,Ee){Ee===!0&&(K*=fe,te*=fe,se*=fe),H.set(K,te,se,fe),z.equals(H)===!1&&(n.clearColor(K,te,se,fe),z.copy(H))},reset:function(){C=!1,G=null,z.set(-1,0,0,0)}}},i=new function(){let C=!1,H=!1,G=null,z=null,K=null;return{setReversed:function(te){if(H!==te){let se=e.get("EXT_clip_control");te?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),H=te;let fe=K;K=null,this.setClear(fe)}},getReversed:function(){return H},setTest:function(te){te?V(n.DEPTH_TEST):q(n.DEPTH_TEST)},setMask:function(te){G===te||C||(n.depthMask(te),G=te)},setFunc:function(te){if(H&&(te=u0[te]),z!==te){switch(te){case Fu:n.depthFunc(n.NEVER);break;case Bu:n.depthFunc(n.ALWAYS);break;case ku:n.depthFunc(n.LESS);break;case Rc:n.depthFunc(n.LEQUAL);break;case Hu:n.depthFunc(n.EQUAL);break;case Gu:n.depthFunc(n.GEQUAL);break;case Vu:n.depthFunc(n.GREATER);break;case Wu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=te}},setLocked:function(te){C=te},setClear:function(te){K!==te&&(K=te,H&&(te=1-te),n.clearDepth(te))},reset:function(){C=!1,G=null,z=null,K=null,H=!1}}},s=new function(){let C=!1,H=null,G=null,z=null,K=null,te=null,se=null,fe=null,Ee=null;return{setTest:function(Te){C||(Te?V(n.STENCIL_TEST):q(n.STENCIL_TEST))},setMask:function(Te){H===Te||C||(n.stencilMask(Te),H=Te)},setFunc:function(Te,ve,Me){G===Te&&z===ve&&K===Me||(n.stencilFunc(Te,ve,Me),G=Te,z=ve,K=Me)},setOp:function(Te,ve,Me){te===Te&&se===ve&&fe===Me||(n.stencilOp(Te,ve,Me),te=Te,se=ve,fe=Me)},setLocked:function(Te){C=Te},setClear:function(Te){Ee!==Te&&(n.clearStencil(Te),Ee=Te)},reset:function(){C=!1,H=null,G=null,z=null,K=null,te=null,se=null,fe=null,Ee=null}}},r=new WeakMap,a=new WeakMap,o={},l={},c={},h=new WeakMap,u=[],d=null,p=!1,m=null,f=null,v=null,x=null,g=null,y=null,M=null,S=new ye(0,0,0),b=0,E=!1,U=null,_=null,T=null,I=null,w=null,R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,L=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(B)[1]),P=L>=1):B.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),P=L>=2);let k=null,X={},ee=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),ae=new ft().fromArray(ee),ne=new ft().fromArray(le);function J(C,H,G,z){let K=new Uint8Array(4),te=n.createTexture();n.bindTexture(C,te),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<G;se++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(H,0,n.RGBA,1,1,z,0,n.RGBA,n.UNSIGNED_BYTE,K):n.texImage2D(H+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,K);return te}let $={};function V(C){o[C]!==!0&&(n.enable(C),o[C]=!0)}function q(C){o[C]!==!1&&(n.disable(C),o[C]=!1)}$[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),s.setClear(0),V(n.DEPTH_TEST),i.setFunc(Rc),A(!1),F(Uu),V(n.CULL_FACE),N(oi);let Y={[ua]:n.FUNC_ADD,[Rm]:n.FUNC_SUBTRACT,[Cm]:n.FUNC_REVERSE_SUBTRACT};Y[Pm]=n.MIN,Y[Im]=n.MAX;let W={[Lm]:n.ZERO,[Nm]:n.ONE,[Dm]:n.SRC_COLOR,[zm]:n.SRC_ALPHA,[Gm]:n.SRC_ALPHA_SATURATE,[km]:n.DST_COLOR,[Fm]:n.DST_ALPHA,[Um]:n.ONE_MINUS_SRC_COLOR,[Om]:n.ONE_MINUS_SRC_ALPHA,[Hm]:n.ONE_MINUS_DST_COLOR,[Bm]:n.ONE_MINUS_DST_ALPHA,[Vm]:n.CONSTANT_COLOR,[Wm]:n.ONE_MINUS_CONSTANT_COLOR,[Xm]:n.CONSTANT_ALPHA,[jm]:n.ONE_MINUS_CONSTANT_ALPHA};function N(C,H,G,z,K,te,se,fe,Ee,Te){if(C!==oi){if(p===!1&&(V(n.BLEND),p=!0),C===Am)K=K||H,te=te||G,se=se||z,H===f&&K===g||(n.blendEquationSeparate(Y[H],Y[K]),f=H,g=K),G===v&&z===x&&te===y&&se===M||(n.blendFuncSeparate(W[G],W[z],W[te],W[se]),v=G,x=z,y=te,M=se),fe.equals(S)!==!1&&Ee===b||(n.blendColor(fe.r,fe.g,fe.b,Ee),S.copy(fe),b=Ee),m=C,E=!1;else if(C!==m||Te!==E){if(f===ua&&g===ua||(n.blendEquation(n.FUNC_ADD),f=ua,g=ua),Te)switch(C){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFunc(n.ONE,n.ONE);break;case zu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",C)}else switch(C){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zu:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",C)}v=null,x=null,y=null,M=null,S.set(0,0,0),b=0,m=C,E=Te}}else p===!0&&(q(n.BLEND),p=!1)}function A(C){U!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),U=C)}function F(C){C!==Tm?(V(n.CULL_FACE),C!==_&&(C===Uu?n.cullFace(n.BACK):C===Em?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):q(n.CULL_FACE),_=C}function j(C,H,G){C?(V(n.POLYGON_OFFSET_FILL),I===H&&w===G||(I=H,w=G,i.getReversed()&&(H=-H),n.polygonOffset(H,G))):q(n.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:s},enable:V,disable:q,bindFramebuffer:function(C,H){return c[C]!==H&&(n.bindFramebuffer(C,H),c[C]=H,C===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=H),C===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=H),!0)},drawBuffers:function(C,H){let G=u,z=!1;if(C){G=h.get(H),G===void 0&&(G=[],h.set(H,G));let K=C.textures;if(G.length!==K.length||G[0]!==n.COLOR_ATTACHMENT0){for(let te=0,se=K.length;te<se;te++)G[te]=n.COLOR_ATTACHMENT0+te;G.length=K.length,z=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,z=!0);z&&n.drawBuffers(G)},useProgram:function(C){return d!==C&&(n.useProgram(C),d=C,!0)},setBlending:N,setMaterial:function(C,H){C.side===bt?q(n.CULL_FACE):V(n.CULL_FACE);let G=C.side===Pn;H&&(G=!G),A(G),C.blending===Qs&&C.transparent===!1?N(oi):N(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),i.setFunc(C.depthFunc),i.setTest(C.depthTest),i.setMask(C.depthWrite),t.setMask(C.colorWrite);let z=C.stencilWrite;s.setTest(z),z&&(s.setMask(C.stencilWriteMask),s.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),s.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),j(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):q(n.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:A,setCullFace:F,setLineWidth:function(C){C!==T&&(P&&n.lineWidth(C),T=C)},setPolygonOffset:j,setScissorTest:function(C){C?V(n.SCISSOR_TEST):q(n.SCISSOR_TEST)},activeTexture:function(C){C===void 0&&(C=n.TEXTURE0+R-1),k!==C&&(n.activeTexture(C),k=C)},bindTexture:function(C,H,G){G===void 0&&(G=k===null?n.TEXTURE0+R-1:k);let z=X[G];z===void 0&&(z={type:void 0,texture:void 0},X[G]=z),z.type===C&&z.texture===H||(k!==G&&(n.activeTexture(G),k=G),n.bindTexture(C,H||$[C]),z.type=C,z.texture=H)},unbindTexture:function(){let C=X[k];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)},compressedTexImage2D:function(){try{n.compressedTexImage2D(...arguments)}catch(C){ze("WebGLState:",C)}},compressedTexImage3D:function(){try{n.compressedTexImage3D(...arguments)}catch(C){ze("WebGLState:",C)}},texImage2D:function(){try{n.texImage2D(...arguments)}catch(C){ze("WebGLState:",C)}},texImage3D:function(){try{n.texImage3D(...arguments)}catch(C){ze("WebGLState:",C)}},pixelStorei:function(C,H){l[C]!==H&&(n.pixelStorei(C,H),l[C]=H)},getParameter:function(C){return l[C]!==void 0?l[C]:n.getParameter(C)},updateUBOMapping:function(C,H){let G=a.get(H);G===void 0&&(G=new WeakMap,a.set(H,G));let z=G.get(C);z===void 0&&(z=n.getUniformBlockIndex(H,C.name),G.set(C,z))},uniformBlockBinding:function(C,H){let G=a.get(H).get(C);r.get(H)!==G&&(n.uniformBlockBinding(H,G,C.__bindingPointIndex),r.set(H,G))},texStorage2D:function(){try{n.texStorage2D(...arguments)}catch(C){ze("WebGLState:",C)}},texStorage3D:function(){try{n.texStorage3D(...arguments)}catch(C){ze("WebGLState:",C)}},texSubImage2D:function(){try{n.texSubImage2D(...arguments)}catch(C){ze("WebGLState:",C)}},texSubImage3D:function(){try{n.texSubImage3D(...arguments)}catch(C){ze("WebGLState:",C)}},compressedTexSubImage2D:function(){try{n.compressedTexSubImage2D(...arguments)}catch(C){ze("WebGLState:",C)}},compressedTexSubImage3D:function(){try{n.compressedTexSubImage3D(...arguments)}catch(C){ze("WebGLState:",C)}},scissor:function(C){ae.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),ae.copy(C))},viewport:function(C){ne.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),ne.copy(C))},reset:function(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),i.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),o={},l={},k=null,X={},c={},h=new WeakMap,u=[],d=null,p=!1,m=null,f=null,v=null,x=null,g=null,y=null,M=null,S=new ye(0,0,0),b=0,E=!1,U=null,_=null,T=null,I=null,w=null,ae.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),t.reset(),i.reset(),s.reset()}}}function Gv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u=new Set,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(N,A){return m?new OffscreenCanvas(N,A):qr("canvas")}function v(N,A,F){let j=1,C=W(N);if((C.width>F||C.height>F)&&(j=F/Math.max(C.width,C.height)),j<1){if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let H=Math.floor(j*C.width),G=Math.floor(j*C.height);d===void 0&&(d=f(H,G));let z=A?f(H,G):d;return z.width=H,z.height=G,z.getContext("2d").drawImage(N,0,0,H,G),Pe("WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+H+"x"+G+")."),z}return"data"in N&&Pe("WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),N}return N}function x(N){return N.generateMipmaps}function g(N){n.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(N,A,F,j,C,H=!1){if(N!==null){if(n[N]!==void 0)return n[N];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let G;j&&(G=e.get("EXT_texture_norm16"),G||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=A;if(A===n.RED&&(F===n.FLOAT&&(z=n.R32F),F===n.HALF_FLOAT&&(z=n.R16F),F===n.UNSIGNED_BYTE&&(z=n.R8),F===n.UNSIGNED_SHORT&&G&&(z=G.R16_EXT),F===n.SHORT&&G&&(z=G.R16_SNORM_EXT)),A===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.R8UI),F===n.UNSIGNED_SHORT&&(z=n.R16UI),F===n.UNSIGNED_INT&&(z=n.R32UI),F===n.BYTE&&(z=n.R8I),F===n.SHORT&&(z=n.R16I),F===n.INT&&(z=n.R32I)),A===n.RG&&(F===n.FLOAT&&(z=n.RG32F),F===n.HALF_FLOAT&&(z=n.RG16F),F===n.UNSIGNED_BYTE&&(z=n.RG8),F===n.UNSIGNED_SHORT&&G&&(z=G.RG16_EXT),F===n.SHORT&&G&&(z=G.RG16_SNORM_EXT)),A===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RG8UI),F===n.UNSIGNED_SHORT&&(z=n.RG16UI),F===n.UNSIGNED_INT&&(z=n.RG32UI),F===n.BYTE&&(z=n.RG8I),F===n.SHORT&&(z=n.RG16I),F===n.INT&&(z=n.RG32I)),A===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(z=n.RGB16UI),F===n.UNSIGNED_INT&&(z=n.RGB32UI),F===n.BYTE&&(z=n.RGB8I),F===n.SHORT&&(z=n.RGB16I),F===n.INT&&(z=n.RGB32I)),A===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(z=n.RGBA16UI),F===n.UNSIGNED_INT&&(z=n.RGBA32UI),F===n.BYTE&&(z=n.RGBA8I),F===n.SHORT&&(z=n.RGBA16I),F===n.INT&&(z=n.RGBA32I)),A===n.RGB&&(F===n.UNSIGNED_SHORT&&G&&(z=G.RGB16_EXT),F===n.SHORT&&G&&(z=G.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(z=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(z=n.R11F_G11F_B10F)),A===n.RGBA){let K=H?$a:Ke.getTransfer(C);F===n.FLOAT&&(z=n.RGBA32F),F===n.HALF_FLOAT&&(z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(z=K===lt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&G&&(z=G.RGBA16_EXT),F===n.SHORT&&G&&(z=G.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(z=n.RGB5_A1)}return z!==n.R16F&&z!==n.R32F&&z!==n.RG16F&&z!==n.RG32F&&z!==n.RGBA16F&&z!==n.RGBA32F||e.get("EXT_color_buffer_float"),z}function S(N,A){let F;return N?A===null||A===Zi||A===xa?F=n.DEPTH24_STENCIL8:A===zn?F=n.DEPTH32F_STENCIL8:A===ga&&(F=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Zi||A===xa?F=n.DEPTH_COMPONENT24:A===zn?F=n.DEPTH_COMPONENT32F:A===ga&&(F=n.DEPTH_COMPONENT16),F}function b(N,A){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==Kt?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function E(N){let A=N.target;A.removeEventListener("dispose",E),(function(F){let j=i.get(F);if(j.__webglInit===void 0)return;let C=F.source,H=p.get(C);if(H){let G=H[j.__cacheKey];G.usedTimes--,G.usedTimes===0&&_(F),Object.keys(H).length===0&&p.delete(C)}i.remove(F)})(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function U(N){let A=N.target;A.removeEventListener("dispose",U),(function(F){let j=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(j.__webglFramebuffer[H]))for(let G=0;G<j.__webglFramebuffer[H].length;G++)n.deleteFramebuffer(j.__webglFramebuffer[H][G]);else n.deleteFramebuffer(j.__webglFramebuffer[H]);j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer[H])}else{if(Array.isArray(j.__webglFramebuffer))for(let H=0;H<j.__webglFramebuffer.length;H++)n.deleteFramebuffer(j.__webglFramebuffer[H]);else n.deleteFramebuffer(j.__webglFramebuffer);if(j.__webglDepthbuffer&&n.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&n.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let H=0;H<j.__webglColorRenderbuffer.length;H++)j.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(j.__webglColorRenderbuffer[H]);j.__webglDepthRenderbuffer&&n.deleteRenderbuffer(j.__webglDepthRenderbuffer)}let C=F.textures;for(let H=0,G=C.length;H<G;H++){let z=i.get(C[H]);z.__webglTexture&&(n.deleteTexture(z.__webglTexture),a.memory.textures--),i.remove(C[H])}i.remove(F)})(A)}function _(N){let A=i.get(N);n.deleteTexture(A.__webglTexture);let F=N.source;delete p.get(F)[A.__cacheKey],a.memory.textures--}let T=0;function I(N,A){let F=i.get(N);if(N.isVideoTexture&&(function(j){let C=a.render.frame;h.get(j)!==C&&(h.set(j,C),j.update())})(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&F.__version!==N.version){let j=N.image;if(j===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else{if(j.complete!==!1)return void X(F,N,A);Pe("WebGLRenderer: Texture marked for update but image is incomplete")}}else N.isExternalTexture&&(F.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+A)}let w={[un]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Xr]:n.MIRRORED_REPEAT},R={[dn]:n.NEAREST,[zc]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[ma]:n.LINEAR_MIPMAP_NEAREST,[Vn]:n.LINEAR_MIPMAP_LINEAR},P={[n0]:n.NEVER,[o0]:n.ALWAYS,[i0]:n.LESS,[Yc]:n.LEQUAL,[s0]:n.EQUAL,[Kc]:n.GEQUAL,[r0]:n.GREATER,[a0]:n.NOTEQUAL};function L(N,A){if(A.type!==zn||e.has("OES_texture_float_linear")!==!1||A.magFilter!==Kt&&A.magFilter!==ma&&A.magFilter!==nr&&A.magFilter!==Vn&&A.minFilter!==Kt&&A.minFilter!==ma&&A.minFilter!==nr&&A.minFilter!==Vn||Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,w[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,w[A.wrapT]),N!==n.TEXTURE_3D&&N!==n.TEXTURE_2D_ARRAY||n.texParameteri(N,n.TEXTURE_WRAP_R,w[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,R[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,R[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,P[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===dn||A.minFilter!==nr&&A.minFilter!==Vn||A.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function B(N,A){let F=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",E));let j=A.source,C=p.get(j);C===void 0&&(C={},p.set(j,C));let H=(function(G){let z=[];return z.push(G.wrapS),z.push(G.wrapT),z.push(G.wrapR||0),z.push(G.magFilter),z.push(G.minFilter),z.push(G.anisotropy),z.push(G.internalFormat),z.push(G.format),z.push(G.type),z.push(G.generateMipmaps),z.push(G.premultiplyAlpha),z.push(G.flipY),z.push(G.unpackAlignment),z.push(G.colorSpace),z.join()})(A);if(H!==N.__cacheKey){C[H]===void 0&&(C[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),C[H].usedTimes++;let G=C[N.__cacheKey];G!==void 0&&(C[N.__cacheKey].usedTimes--,G.usedTimes===0&&_(A)),N.__cacheKey=H,N.__webglTexture=C[H].texture}return F}function k(N,A,F){return Math.floor(Math.floor(N/F)/A)}function X(N,A,F){let j=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(j=n.TEXTURE_3D);let C=B(N,A),H=A.source;t.bindTexture(j,N.__webglTexture,n.TEXTURE0+F);let G=i.get(H);if(H.version!==G.__version||C===!0){if(t.activeTexture(n.TEXTURE0+F),!(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)){let pe=Ke.getPrimaries(Ke.workingColorSpace),de=A.colorSpace===rr?null:Ke.getPrimaries(A.colorSpace),Se=A.colorSpace===rr||pe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment);let z=v(A.image,!1,s.maxTextureSize);z=Y(A,z);let K=r.convert(A.format,A.colorSpace),te=r.convert(A.type),se,fe=M(A.internalFormat,K,te,A.normalized,A.colorSpace,A.isVideoTexture);L(j,A);let Ee=A.mipmaps,Te=A.isVideoTexture!==!0,ve=G.__version===void 0||C===!0,Me=H.dataReady,re=b(A,z);if(A.isDepthTexture)fe=S(A.format===ir,A.type),ve&&(Te?t.texStorage2D(n.TEXTURE_2D,1,fe,z.width,z.height):t.texImage2D(n.TEXTURE_2D,0,fe,z.width,z.height,0,K,te,null));else if(A.isDataTexture)if(Ee.length>0){Te&&ve&&t.texStorage2D(n.TEXTURE_2D,re,fe,Ee[0].width,Ee[0].height);for(let pe=0,de=Ee.length;pe<de;pe++)se=Ee[pe],Te?Me&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,se.width,se.height,K,te,se.data):t.texImage2D(n.TEXTURE_2D,pe,fe,se.width,se.height,0,K,te,se.data);A.generateMipmaps=!1}else Te?(ve&&t.texStorage2D(n.TEXTURE_2D,re,fe,z.width,z.height),Me&&(function(pe,de,Se,ut){let Xe=pe.updateRanges;if(Xe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Se,ut,de.data);else{Xe.sort(($e,cn)=>$e.start-cn.start);let yt=0;for(let $e=1;$e<Xe.length;$e++){let cn=Xe[yt],wt=Xe[$e],Jt=cn.start+cn.count,Ut=k(wt.start,de.width,4),Bn=k(cn.start,de.width,4);wt.start<=Jt+1&&Ut===Bn&&k(wt.start+wt.count-1,de.width,4)===Ut?cn.count=Math.max(cn.count,wt.start+wt.count-cn.start):(++yt,Xe[yt]=wt)}Xe.length=yt+1;let Zt=t.getParameter(n.UNPACK_ROW_LENGTH),Ie=t.getParameter(n.UNPACK_SKIP_PIXELS),dt=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,de.width);for(let $e=0,cn=Xe.length;$e<cn;$e++){let wt=Xe[$e],Jt=Math.floor(wt.start/4),Ut=Math.ceil(wt.count/4),Bn=Jt%de.width,Yn=Math.floor(Jt/de.width),Ps=Ut;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Bn),t.pixelStorei(n.UNPACK_SKIP_ROWS,Yn),t.texSubImage2D(n.TEXTURE_2D,0,Bn,Yn,Ps,1,Se,ut,de.data)}pe.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Zt),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}})(A,z,K,te)):t.texImage2D(n.TEXTURE_2D,0,fe,z.width,z.height,0,K,te,z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Te&&ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,fe,Ee[0].width,Ee[0].height,z.depth);for(let pe=0,de=Ee.length;pe<de;pe++)if(se=Ee[pe],A.format!==Wn)if(K!==null)if(Te){if(Me)if(A.layerUpdates.size>0){let Se=Ud(se.width,se.height,A.format,A.type);for(let ut of A.layerUpdates){let Xe=se.data.subarray(ut*Se/se.data.BYTES_PER_ELEMENT,(ut+1)*Se/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,ut,se.width,se.height,1,K,Xe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,se.width,se.height,z.depth,K,se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pe,fe,se.width,se.height,z.depth,0,se.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,pe,0,0,0,se.width,se.height,z.depth,K,te,se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,pe,fe,se.width,se.height,z.depth,0,K,te,se.data)}else{Te&&ve&&t.texStorage2D(n.TEXTURE_2D,re,fe,Ee[0].width,Ee[0].height);for(let pe=0,de=Ee.length;pe<de;pe++)se=Ee[pe],A.format!==Wn?K!==null?Te?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,pe,0,0,se.width,se.height,K,se.data):t.compressedTexImage2D(n.TEXTURE_2D,pe,fe,se.width,se.height,0,se.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Me&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,se.width,se.height,K,te,se.data):t.texImage2D(n.TEXTURE_2D,pe,fe,se.width,se.height,0,K,te,se.data)}else if(A.isDataArrayTexture)if(Te){if(ve&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,fe,z.width,z.height,z.depth),Me)if(A.layerUpdates.size>0){let pe=Ud(z.width,z.height,A.format,A.type);for(let de of A.layerUpdates){let Se=z.data.subarray(de*pe/z.data.BYTES_PER_ELEMENT,(de+1)*pe/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,z.width,z.height,1,K,te,Se)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,K,te,z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,z.width,z.height,z.depth,0,K,te,z.data);else if(A.isData3DTexture)Te?(ve&&t.texStorage3D(n.TEXTURE_3D,re,fe,z.width,z.height,z.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,K,te,z.data)):t.texImage3D(n.TEXTURE_3D,0,fe,z.width,z.height,z.depth,0,K,te,z.data);else if(A.isFramebufferTexture){if(ve)if(Te)t.texStorage2D(n.TEXTURE_2D,re,fe,z.width,z.height);else{let pe=z.width,de=z.height;for(let Se=0;Se<re;Se++)t.texImage2D(n.TEXTURE_2D,Se,fe,pe,de,0,K,te,null),pe>>=1,de>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in n){let pe=n.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),z.parentNode!==pe)return pe.appendChild(z),u.add(A),pe.onpaint=de=>{let Se=de.changedElements;for(let ut of u)Se.includes(ut.image)&&(ut.needsUpdate=!0)},void pe.requestPaint();if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,z);else{let Se=n.RGBA,ut=n.RGBA,Xe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,ut,Xe,z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Te&&ve){let pe=W(Ee[0]);t.texStorage2D(n.TEXTURE_2D,re,fe,pe.width,pe.height)}for(let pe=0,de=Ee.length;pe<de;pe++)se=Ee[pe],Te?Me&&t.texSubImage2D(n.TEXTURE_2D,pe,0,0,K,te,se):t.texImage2D(n.TEXTURE_2D,pe,fe,K,te,se);A.generateMipmaps=!1}else if(Te){if(ve){let pe=W(z);t.texStorage2D(n.TEXTURE_2D,re,fe,pe.width,pe.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,K,te,z)}else t.texImage2D(n.TEXTURE_2D,0,fe,K,te,z);x(A)&&g(j),G.__version=H.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function ee(N,A,F,j,C,H){let G=r.convert(F.format,F.colorSpace),z=r.convert(F.type),K=M(F.internalFormat,G,z,F.normalized,F.colorSpace),te=i.get(A),se=i.get(F);if(se.__renderTarget=A,!te.__hasExternalTextures){let fe=Math.max(1,A.width>>H),Ee=Math.max(1,A.height>>H);C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?t.texImage3D(C,H,K,fe,Ee,A.depth,0,G,z,null):t.texImage2D(C,H,K,fe,Ee,0,G,z,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),q(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,C,se.__webglTexture,0,V(A)):(C===n.TEXTURE_2D||C>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,C,se.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(N,A,F){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){let j=A.depthTexture,C=j&&j.isDepthTexture?j.type:null,H=S(A.stencilBuffer,C),G=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;q(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V(A),H,A.width,A.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,V(A),H,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,H,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,N)}else{let j=A.textures;for(let C=0;C<j.length;C++){let H=j[C],G=r.convert(H.format,H.colorSpace),z=r.convert(H.type),K=M(H.internalFormat,G,z,H.normalized,H.colorSpace);q(A)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V(A),K,A.width,A.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,V(A),K,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,K,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(N,A,F){let j=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let C=i.get(A.depthTexture);if(C.__renderTarget=A,C.__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j){if(C.__webglInit===void 0&&(C.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),C.__webglTexture===void 0){C.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture),L(n.TEXTURE_CUBE_MAP,A.depthTexture);let te=r.convert(A.depthTexture.format),se=r.convert(A.depthTexture.type),fe;A.depthTexture.format===vs?fe=n.DEPTH_COMPONENT24:A.depthTexture.format===ir&&(fe=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,fe,A.width,A.height,0,te,se,null)}}else I(A.depthTexture,0);let H=C.__webglTexture,G=V(A),z=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,K=A.depthTexture.format===ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===vs)q(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,z,H,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,K,z,H,0);else{if(A.depthTexture.format!==ir)throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");q(A)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,z,H,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,K,z,H,0)}}function ne(N){let A=i.get(N),F=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){let j=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),j){let C=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,j.removeEventListener("dispose",C)};j.addEventListener("dispose",C),A.__depthDisposeCallback=C}A.__boundDepthTexture=j}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(F)for(let j=0;j<6;j++)ae(A.__webglFramebuffer[j],N,j);else{let j=N.texture.mipmaps;j&&j.length>0?ae(A.__webglFramebuffer[0],N,0):ae(A.__webglFramebuffer,N,0)}else if(F){A.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[j]),A.__webglDepthbuffer[j]===void 0)A.__webglDepthbuffer[j]=n.createRenderbuffer(),le(A.__webglDepthbuffer[j],N,!1);else{let C=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,C,n.RENDERBUFFER,H)}}else{let j=N.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),le(A.__webglDepthbuffer,N,!1);else{let C=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,C,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}let J=[],$=[];function V(N){return Math.min(s.maxSamples,N.samples)}function q(N){let A=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Y(N,A){let F=N.colorSpace,j=N.format,C=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||F!==Mn&&F!==rr&&(Ke.getTransfer(F)===lt?j===Wn&&C===Un||Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",F)),A}function W(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=function(){let N=T;return N>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),T+=1,N},this.resetTextureUnits=function(){T=0},this.getTextureUnits=function(){return T},this.setTextureUnits=function(N){T=N},this.setTexture2D=I,this.setTexture2DArray=function(N,A){let F=i.get(N);N.isRenderTargetTexture===!1&&N.version>0&&F.__version!==N.version?X(F,N,A):(N.isExternalTexture&&(F.__webglTexture=N.sourceTexture?N.sourceTexture:null),t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+A))},this.setTexture3D=function(N,A){let F=i.get(N);N.isRenderTargetTexture===!1&&N.version>0&&F.__version!==N.version?X(F,N,A):t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+A)},this.setTextureCube=function(N,A){let F=i.get(N);N.isCubeDepthTexture!==!0&&N.version>0&&F.__version!==N.version?(function(j,C,H){if(C.image.length!==6)return;let G=B(j,C),z=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+H);let K=i.get(z);if(z.version!==K.__version||G===!0){t.activeTexture(n.TEXTURE0+H);let te=Ke.getPrimaries(Ke.workingColorSpace),se=C.colorSpace===rr?null:Ke.getPrimaries(C.colorSpace),fe=C.colorSpace===rr||te===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,Te=C.image[0]&&C.image[0].isDataTexture,ve=[];for(let Ie=0;Ie<6;Ie++)ve[Ie]=Ee||Te?Te?C.image[Ie].image:C.image[Ie]:v(C.image[Ie],!0,s.maxCubemapSize),ve[Ie]=Y(C,ve[Ie]);let Me=ve[0],re=r.convert(C.format,C.colorSpace),pe=r.convert(C.type),de=M(C.internalFormat,re,pe,C.normalized,C.colorSpace),Se=C.isVideoTexture!==!0,ut=K.__version===void 0||G===!0,Xe=z.dataReady,yt,Zt=b(C,Me);if(L(n.TEXTURE_CUBE_MAP,C),Ee){Se&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Zt,de,Me.width,Me.height);for(let Ie=0;Ie<6;Ie++){yt=ve[Ie].mipmaps;for(let dt=0;dt<yt.length;dt++){let $e=yt[dt];C.format!==Wn?re!==null?Se?Xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,0,0,$e.width,$e.height,re,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,de,$e.width,$e.height,0,$e.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,0,0,$e.width,$e.height,re,pe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt,de,$e.width,$e.height,0,re,pe,$e.data)}}}else{if(yt=C.mipmaps,Se&&ut){yt.length>0&&Zt++;let Ie=W(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Zt,de,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(Te){Se?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,ve[Ie].width,ve[Ie].height,re,pe,ve[Ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,de,ve[Ie].width,ve[Ie].height,0,re,pe,ve[Ie].data);for(let dt=0;dt<yt.length;dt++){let $e=yt[dt].image[Ie].image;Se?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,0,0,$e.width,$e.height,re,pe,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,de,$e.width,$e.height,0,re,pe,$e.data)}}else{Se?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,re,pe,ve[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,de,re,pe,ve[Ie]);for(let dt=0;dt<yt.length;dt++){let $e=yt[dt];Se?Xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,0,0,re,pe,$e.image[Ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,dt+1,de,re,pe,$e.image[Ie])}}}x(C)&&g(n.TEXTURE_CUBE_MAP),K.__version=z.version,C.onUpdate&&C.onUpdate(C)}j.__version=C.version})(F,N,A):t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+A)},this.rebindTextures=function(N,A,F){let j=i.get(N);A!==void 0&&ee(j.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ne(N)},this.setupRenderTarget=function(N){let A=N.texture,F=i.get(N),j=i.get(A);N.addEventListener("dispose",U);let C=N.textures,H=N.isWebGLCubeRenderTarget===!0,G=C.length>1;if(G||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=A.version,a.memory.textures++),H){F.__webglFramebuffer=[];for(let z=0;z<6;z++)if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer[z]=[];for(let K=0;K<A.mipmaps.length;K++)F.__webglFramebuffer[z][K]=n.createFramebuffer()}else F.__webglFramebuffer[z]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){F.__webglFramebuffer=[];for(let z=0;z<A.mipmaps.length;z++)F.__webglFramebuffer[z]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(G)for(let z=0,K=C.length;z<K;z++){let te=i.get(C[z]);te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture(),a.memory.textures++)}if(N.samples>0&&q(N)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let z=0;z<C.length;z++){let K=C[z];F.__webglColorRenderbuffer[z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[z]);let te=r.convert(K.format,K.colorSpace),se=r.convert(K.type),fe=M(K.internalFormat,te,se,K.normalized,K.colorSpace,N.isXRRenderTarget===!0),Ee=V(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,fe,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+z,n.RENDERBUFFER,F.__webglColorRenderbuffer[z])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),le(F.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),L(n.TEXTURE_CUBE_MAP,A);for(let z=0;z<6;z++)if(A.mipmaps&&A.mipmaps.length>0)for(let K=0;K<A.mipmaps.length;K++)ee(F.__webglFramebuffer[z][K],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,K);else ee(F.__webglFramebuffer[z],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);x(A)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let z=0,K=C.length;z<K;z++){let te=C[z],se=i.get(te),fe=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(fe=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),L(fe,te),ee(F.__webglFramebuffer,N,te,n.COLOR_ATTACHMENT0+z,fe,0),x(te)&&g(fe)}t.unbindTexture()}else{let z=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(z=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(z,j.__webglTexture),L(z,A),A.mipmaps&&A.mipmaps.length>0)for(let K=0;K<A.mipmaps.length;K++)ee(F.__webglFramebuffer[K],N,A,n.COLOR_ATTACHMENT0,z,K);else ee(F.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,z,0);x(A)&&g(z),t.unbindTexture()}N.depthBuffer&&ne(N)},this.updateRenderTargetMipmap=function(N){let A=N.textures;for(let F=0,j=A.length;F<j;F++){let C=A[F];if(x(C)){let H=y(N),G=i.get(C).__webglTexture;t.bindTexture(H,G),g(H),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(N){if(N.samples>0){if(q(N)===!1){let A=N.textures,F=N.width,j=N.height,C=n.COLOR_BUFFER_BIT,H=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=i.get(N),z=A.length>1;if(z)for(let te=0;te<A.length;te++)t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);let K=N.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let te=0;te<A.length;te++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(C|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(C|=n.STENCIL_BUFFER_BIT)),z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,G.__webglColorRenderbuffer[te]);let se=i.get(A[te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,F,j,0,0,F,j,C,n.NEAREST),l===!0&&(J.length=0,$.length=0,J.push(n.COLOR_ATTACHMENT0+te),N.depthBuffer&&N.resolveDepthBuffer===!1&&(J.push(H),$.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),z)for(let te=0;te<A.length;te++){t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,G.__webglColorRenderbuffer[te]);let se=i.get(A[te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,G.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}},this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vv(n,e){return{convert:function(t,i=rr){let s,r=Ke.getTransfer(i);if(t===Un)return n.UNSIGNED_BYTE;if(t===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(t===Bc)return n.UNSIGNED_SHORT_5_5_5_1;if(t===Yu)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===Ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(t===ju)return n.BYTE;if(t===qu)return n.SHORT;if(t===ga)return n.UNSIGNED_SHORT;if(t===Oc)return n.INT;if(t===Zi)return n.UNSIGNED_INT;if(t===zn)return n.FLOAT;if(t===vn)return n.HALF_FLOAT;if(t===Jm)return n.ALPHA;if(t===$m)return n.RGB;if(t===Wn)return n.RGBA;if(t===vs)return n.DEPTH_COMPONENT;if(t===ir)return n.DEPTH_STENCIL;if(t===kc)return n.RED;if(t===Hc)return n.RED_INTEGER;if(t===sr)return n.RG;if(t===Zu)return n.RG_INTEGER;if(t===Ju)return n.RGBA_INTEGER;if(t===Gc||t===Vc||t===Wc||t===Xc)if(r===lt){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(t===Gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(t===Gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===$u||t===Qu||t===ed||t===td){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(t===$u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Qu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===ed)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===nd||t===id||t===sd||t===rd||t===ad||t===jc||t===od){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(t===nd||t===id)return r===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===sd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(t===rd)return s.COMPRESSED_R11_EAC;if(t===ad)return s.COMPRESSED_SIGNED_R11_EAC;if(t===jc)return s.COMPRESSED_RG11_EAC;if(t===od)return s.COMPRESSED_SIGNED_RG11_EAC}if(t===ld||t===cd||t===hd||t===ud||t===dd||t===pd||t===fd||t===md||t===gd||t===xd||t===vd||t===yd||t===_d||t===Md){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(t===ld)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===cd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===hd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ud)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===dd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===pd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===fd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===md)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===gd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===xd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===vd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===yd)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===_d)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Md)return r===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===bd||t===Sd||t===wd){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(t===bd)return r===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Sd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Td||t===Ed||t===qc||t===Ad){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(t===Td)return s.COMPRESSED_RED_RGTC1_EXT;if(t===Ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ad)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===xa?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}}}var ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ho(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ht({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new pn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tp=class extends ni{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,f=typeof XRWebGLBinding<"u",v=new ep,x={},g=t.getContextAttributes(),y=null,M=null,S=[],b=[],E=new ce,U=null,_=new Bt;_.viewport=new ft;let T=new Bt;T.viewport=new ft;let I=[_,T],w=new Sc,R=null,P=null;function L(J){let $=b.indexOf(J.inputSource);if($===-1)return;let V=S[$];V!==void 0&&(V.update(J.inputSource,J.frame,c||a),V.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",k);for(let J=0;J<S.length;J++){let $=b[J];$!==null&&(b[J]=null,S[J].disconnect($))}R=null,P=null,v.reset();for(let J in x)delete x[J];e.setRenderTarget(y),p=null,d=null,u=null,s=null,M=null,ne.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}function k(J){for(let $=0;$<J.removed.length;$++){let V=J.removed[$],q=b.indexOf(V);q>=0&&(b[q]=null,S[q].disconnect(V))}for(let $=0;$<J.added.length;$++){let V=J.added[$],q=b.indexOf(V);if(q===-1){for(let W=0;W<S.length;W++){if(W>=b.length){b.push(V),q=W;break}if(b[W]===null){b[W]=V,q=W;break}}if(q===-1)break}let Y=S[q];Y&&Y.connect(V)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=S[J];return $===void 0&&($=new Jr,S[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=S[J];return $===void 0&&($=new Jr,S[J]=$),$.getGripSpace()},this.getHand=function(J){let $=S[J];return $===void 0&&($=new Jr,S[J]=$),$.getHandSpace()},this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&f&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(E),f&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,V=null,q=null;g.depth&&(q=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?ir:vs,V=g.stencil?xa:Zi);let Y={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Y),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Qt(d.textureWidth,d.textureHeight,{format:Wn,type:Un,depthTexture:new ji(d.textureWidth,d.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let $={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let X=new D,ee=new D;function le(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let $=J.near,V=J.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(V=v.depthFar)),w.near=T.near=_.near=$,w.far=T.far=_.far=V,R===w.near&&P===w.far||(s.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,P=w.far),w.layers.mask=6|J.layers.mask,_.layers.mask=-5&w.layers.mask,T.layers.mask=-3&w.layers.mask;let q=J.parent,Y=w.cameras;le(w,q);for(let W=0;W<Y.length;W++)le(Y[W],q);Y.length===2?(function(W,N,A){X.setFromMatrixPosition(N.matrixWorld),ee.setFromMatrixPosition(A.matrixWorld);let F=X.distanceTo(ee),j=N.projectionMatrix.elements,C=A.projectionMatrix.elements,H=j[14]/(j[10]-1),G=j[14]/(j[10]+1),z=(j[9]+1)/j[5],K=(j[9]-1)/j[5],te=(j[8]-1)/j[0],se=(C[8]+1)/C[0],fe=H*te,Ee=H*se,Te=F/(-te+se),ve=Te*-te;if(N.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ve),W.translateZ(Te),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),j[10]===-1)W.projectionMatrix.copy(N.projectionMatrix),W.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Me=H+Te,re=G+Te,pe=fe-ve,de=Ee+(F-ve),Se=z*G/re*Me,ut=K*G/re*Me;W.projectionMatrix.makePerspective(pe,de,Se,ut,Me,re),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}})(w,_,T):w.projectionMatrix.copy(_.projectionMatrix),(function(W,N,A){A===null?W.matrix.copy(N.matrixWorld):(W.matrix.copy(A.matrixWorld),W.matrix.invert(),W.matrix.multiply(N.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(N.projectionMatrix),W.projectionMatrixInverse.copy(N.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=2*Vs*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)})(J,w,q)},this.getCamera=function(){return w},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)},this.getCameraTexture=function(J){return x[J]};let ae=null,ne=new B0;ne.setAnimationLoop(function(J,$){if(h=$.getViewerPose(c||a),m=$,h!==null){let V=h.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let q=!1;V.length!==w.cameras.length&&(w.cameras.length=0,q=!0);for(let W=0;W<V.length;W++){let N=V[W],A=null;if(p!==null)A=p.getViewport(N);else{let j=u.getViewSubImage(d,N);A=j.viewport,W===0&&(e.setRenderTargetTextures(M,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(M))}let F=I[W];F===void 0&&(F=new Bt,F.layers.enable(W),F.viewport=new ft,I[W]=F),F.matrix.fromArray(N.transform.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),F.projectionMatrix.fromArray(N.projectionMatrix),F.projectionMatrixInverse.copy(F.projectionMatrix).invert(),F.viewport.set(A.x,A.y,A.width,A.height),W===0&&(w.matrix.copy(F.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),q===!0&&w.cameras.push(F)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){u=i.getBinding();let W=u.getDepthInformation(V[0]);W&&W.isValid&&W.texture&&v.init(W,s.renderState)}if(Y&&Y.includes("camera-access")&&f){e.state.unbindTexture(),u=i.getBinding();for(let W=0;W<V.length;W++){let N=V[W].camera;if(N){let A=x[N];A||(A=new ho,x[N]=A);let F=u.getCameraImage(N);A.sourceTexture=F}}}}for(let V=0;V<S.length;V++){let q=b[V],Y=S[V];q!==null&&Y!==void 0&&Y.update(q,$,c||a)}ae&&ae(J,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),m=null}),this.setAnimationLoop=function(J){ae=J},this.dispose=function(){}}},Wv=new Ce,X0=new Ge;function Xv(n,e){function t(s,r){s.matrixAutoUpdate===!0&&s.updateMatrix(),r.value.copy(s.matrix)}function i(s,r){s.opacity.value=r.opacity,r.color&&s.diffuse.value.copy(r.color),r.emissive&&s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(s.map.value=r.map,t(r.map,s.mapTransform)),r.alphaMap&&(s.alphaMap.value=r.alphaMap,t(r.alphaMap,s.alphaMapTransform)),r.bumpMap&&(s.bumpMap.value=r.bumpMap,t(r.bumpMap,s.bumpMapTransform),s.bumpScale.value=r.bumpScale,r.side===Pn&&(s.bumpScale.value*=-1)),r.normalMap&&(s.normalMap.value=r.normalMap,t(r.normalMap,s.normalMapTransform),s.normalScale.value.copy(r.normalScale),r.side===Pn&&s.normalScale.value.negate()),r.displacementMap&&(s.displacementMap.value=r.displacementMap,t(r.displacementMap,s.displacementMapTransform),s.displacementScale.value=r.displacementScale,s.displacementBias.value=r.displacementBias),r.emissiveMap&&(s.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,s.emissiveMapTransform)),r.specularMap&&(s.specularMap.value=r.specularMap,t(r.specularMap,s.specularMapTransform)),r.alphaTest>0&&(s.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(s.envMap.value=o,s.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(l)).transpose(),o.isCubeTexture&&o.isRenderTargetTexture===!1&&s.envMapRotation.value.premultiply(X0),s.reflectivity.value=r.reflectivity,s.ior.value=r.ior,s.refractionRatio.value=r.refractionRatio),r.lightMap&&(s.lightMap.value=r.lightMap,s.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,s.lightMapTransform)),r.aoMap&&(s.aoMap.value=r.aoMap,s.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,s.aoMapTransform))}return{refreshFogUniforms:function(s,r){r.color.getRGB(s.fogColor.value,Nd(n)),r.isFog?(s.fogNear.value=r.near,s.fogFar.value=r.far):r.isFogExp2&&(s.fogDensity.value=r.density)},refreshMaterialUniforms:function(s,r,a,o,l){r.isNodeMaterial?r.uniformsNeedUpdate=!1:r.isMeshBasicMaterial?i(s,r):r.isMeshLambertMaterial?(i(s,r),r.envMap&&(s.envMapIntensity.value=r.envMapIntensity)):r.isMeshToonMaterial?(i(s,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(s,r)):r.isMeshPhongMaterial?(i(s,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(s,r),r.envMap&&(s.envMapIntensity.value=r.envMapIntensity)):r.isMeshStandardMaterial?(i(s,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(s,r),r.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Pn&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(s,r,l)):r.isMeshMatcapMaterial?(i(s,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(s,r)):r.isMeshDepthMaterial?i(s,r):r.isMeshDistanceMaterial?(i(s,r),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(s,r)):r.isMeshNormalMaterial?i(s,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(s,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(s,r)):r.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(s,r,a,o):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(s,r):r.isShadowMaterial?(s.color.value.copy(r.color),s.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function jv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,p,m,f){if((function(v,x,g,y){let M=v.value,S=x+"_"+g;if(y[S]===void 0)return typeof M=="number"||typeof M=="boolean"?y[S]=M:ArrayBuffer.isView(M)?y[S]=M.slice():y[S]=M.clone(),!0;{let b=y[S];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return y[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(b.equals(M)===!1)return b.copy(M),!0}}return!1})(d,p,m,f)===!0){let v=d.__offset,x=d.value;if(Array.isArray(x)){let g=0;for(let y=0;y<x.length;y++){let M=x[y],S=h(M);c(M,d.__data,g),typeof M=="number"||typeof M=="boolean"||M.isMatrix3||ArrayBuffer.isView(M)||(g+=S.storage/Float32Array.BYTES_PER_ELEMENT)}}else c(x,d.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,d.__data)}}function c(d,p,m){typeof d=="number"||typeof d=="boolean"?p[0]=d:d.isMatrix3?(p[0]=d.elements[0],p[1]=d.elements[1],p[2]=d.elements[2],p[3]=0,p[4]=d.elements[3],p[5]=d.elements[4],p[6]=d.elements[5],p[7]=0,p[8]=d.elements[6],p[9]=d.elements[7],p[10]=d.elements[8],p[11]=0):ArrayBuffer.isView(d)?p.set(new d.constructor(d.buffer,d.byteOffset,p.length)):d.toArray(p,m)}function h(d){let p={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(p.boundary=16,p.storage=d.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",d),p}function u(d){let p=d.target;p.removeEventListener("dispose",u);let m=a.indexOf(p.__bindingPointIndex);a.splice(m,1),n.deleteBuffer(s[p.id]),delete s[p.id],delete r[p.id]}return{bind:function(d,p){let m=p.program;i.uniformBlockBinding(d,m)},update:function(d,p){let m=s[d.id];m===void 0&&((function(x){let g=x.uniforms,y=0,M=16;for(let b=0,E=g.length;b<E;b++){let U=Array.isArray(g[b])?g[b]:[g[b]];for(let _=0,T=U.length;_<T;_++){let I=U[_],w=Array.isArray(I.value)?I.value:[I.value];for(let R=0,P=w.length;R<P;R++){let L=h(w[R]),B=y%M,k=B%L.boundary,X=B+k;y+=k,X!==0&&M-X<L.storage&&(y+=M-X),I.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=L.storage}}}let S=y%M;S>0&&(y+=M-S),x.__size=y,x.__cache={}})(d),m=(function(x){let g=(function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();x.__bindingPointIndex=g;let y=n.createBuffer(),M=x.__size,S=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,M,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,y),y})(d),s[d.id]=m,d.addEventListener("dispose",u));let f=p.program;i.updateUBOMapping(d,f);let v=e.render.frame;r[d.id]!==v&&((function(x){let g=s[x.id],y=x.uniforms,M=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let S=0,b=y.length;S<b;S++){let E=y[S];if(Array.isArray(E))for(let U=0,_=E.length;U<_;U++)l(E[U],S,U,M);else l(E,S,0,M)}n.bindBuffer(n.UNIFORM_BUFFER,null)})(d),r[d.id]=v)},dispose:function(){for(let d in s)n.deleteBuffer(s[d]);a=[],s={},r={}}}}X0.set(-1,0,0,0,1,0,0,0,1);var qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null,th=class{constructor(e={}){let{canvas:t=l0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Un}=e,m;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let f=p,v=new Set([Ju,Zu,Hc]),x=new Set([Un,Zi,ga,xa,Fc,Bc]),g=new Uint32Array(4),y=new Int32Array(4),M=new D,S=null,b=null,E=[],U=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,I=!1,w=null,R=null,P=null,L=null;this._outputColorSpace=je;let B=0,k=0,X=null,ee=-1,le=null,ae=new ft,ne=new ft,J=null,$=new ye(0),V=0,q=t.width,Y=t.height,W=1,N=null,A=null,F=new ft(0,0,q,Y),j=new ft(0,0,q,Y),C=!1,H=new Xi,G=!1,z=!1,K=new Ce,te=new D,se=new ft,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function Te(){return X===null?W:1}let ve,Me,re,pe,de,Se,ut,Xe,yt,Zt,Ie,dt,$e,cn,wt,Jt,Ut,Bn,Yn,Ps,pi,ns,al,Z=i;function pf(O,Q){return t.getContext(O,Q)}try{let O={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",mf,!1),t.addEventListener("webglcontextrestored",gf,!1),t.addEventListener("webglcontextcreationerror",xf,!1),Z===null){let Q="webgl2";if(Z=pf(Q,O),Z===null)throw pf(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(O){throw ze("WebGLRenderer: "+O.message),O}function ff(){ve=new _1(Z),ve.init(),pi=new Vv(Z,ve),Me=new g1(Z,ve,e,pi),re=new Hv(Z,ve),Me.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),R=Z.createFramebuffer(),P=Z.createFramebuffer(),L=Z.createFramebuffer(),pe=new S1(Z),de=new Pv,Se=new Gv(Z,ve,re,de,Me,pi,pe),ut=new y1(T),Xe=new u1(Z),ns=new f1(Z,Xe),yt=new M1(Z,Xe,pe,ns),Zt=new T1(Z,yt,Xe,ns,pe),Bn=new w1(Z,Me,Se),wt=new x1(de),Ie=new Cv(T,ut,ve,Me,ns,wt),dt=new Xv(T,de),$e=new Lv,cn=new Ov(ve),Ut=new p1(T,ut,re,Zt,m,l),Jt=new kv(T,Zt,Me),al=new jv(Z,pe,Me,re),Yn=new m1(Z,ve,pe),Ps=new b1(Z,ve,pe),pe.programs=Ie.programs,T.capabilities=Me,T.extensions=ve,T.properties=de,T.renderLists=$e,T.shadowMap=Jt,T.state=re,T.info=pe}ff(),f!==Un&&(_=new A1(f,t.width,t.height,o,s,r));let Xt=new tp(T,Z);function mf(O){O.preventDefault(),Qa("WebGLRenderer: Context Lost."),I=!0}function gf(){Qa("WebGLRenderer: Context Restored."),I=!1;let O=pe.autoReset,Q=Jt.enabled,ie=Jt.autoUpdate,he=Jt.needsUpdate,oe=Jt.type;ff(),pe.autoReset=O,Jt.enabled=Q,Jt.autoUpdate=ie,Jt.needsUpdate=he,Jt.type=oe}function xf(O){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function vf(O){let Q=O.target;Q.removeEventListener("dispose",vf),(function(ie){(function(he){let oe=de.get(he).programs;oe!==void 0&&(oe.forEach(function(xe){Ie.releaseProgram(xe)}),he.isShaderMaterial&&Ie.releaseShaderCache(he))})(ie),de.remove(ie)})(Q)}function yf(O,Q,ie){O.transparent===!0&&O.side===bt&&O.forceSinglePass===!1?(O.side=Pn,O.needsUpdate=!0,ll(O,Q,ie),O.side=ai,O.needsUpdate=!0,ll(O,Q,ie),O.side=bt):ll(O,Q,ie)}this.xr=Xt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let O=ve.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=ve.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(O){O!==void 0&&(W=O,this.setSize(q,Y,!1))},this.getSize=function(O){return O.set(q,Y)},this.setSize=function(O,Q,ie=!0){Xt.isPresenting?Pe("WebGLRenderer: Can't change size while VR device is presenting."):(q=O,Y=Q,t.width=Math.floor(O*W),t.height=Math.floor(Q*W),ie===!0&&(t.style.width=O+"px",t.style.height=Q+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,O,Q))},this.getDrawingBufferSize=function(O){return O.set(q*W,Y*W).floor()},this.setDrawingBufferSize=function(O,Q,ie){q=O,Y=Q,W=ie,t.width=Math.floor(O*ie),t.height=Math.floor(Q*ie),this.setViewport(0,0,O,Q)},this.setEffects=function(O){if(f!==Un){if(O){for(let Q=0;Q<O.length;Q++)if(O[Q].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(O||[])}else ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.")},this.getCurrentViewport=function(O){return O.copy(ae)},this.getViewport=function(O){return O.copy(F)},this.setViewport=function(O,Q,ie,he){O.isVector4?F.set(O.x,O.y,O.z,O.w):F.set(O,Q,ie,he),re.viewport(ae.copy(F).multiplyScalar(W).round())},this.getScissor=function(O){return O.copy(j)},this.setScissor=function(O,Q,ie,he){O.isVector4?j.set(O.x,O.y,O.z,O.w):j.set(O,Q,ie,he),re.scissor(ne.copy(j).multiplyScalar(W).round())},this.getScissorTest=function(){return C},this.setScissorTest=function(O){re.setScissorTest(C=O)},this.setOpaqueSort=function(O){N=O},this.setTransparentSort=function(O){A=O},this.getClearColor=function(O){return O.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(O=!0,Q=!0,ie=!0){let he=0;if(O){let oe=!1;if(X!==null){let xe=X.texture.format;oe=v.has(xe)}if(oe){let xe=X.texture.type,we=x.has(xe),Re=Ut.getClearColor(),Le=Ut.getClearAlpha(),Be=Re.r,st=Re.g,rt=Re.b;we?(g[0]=Be,g[1]=st,g[2]=rt,g[3]=Le,Z.clearBufferuiv(Z.COLOR,0,g)):(y[0]=Be,y[1]=st,y[2]=rt,y[3]=Le,Z.clearBufferiv(Z.COLOR,0,y))}else he|=Z.COLOR_BUFFER_BIT}Q&&(he|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ie&&(he|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&Z.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),w=O},this.dispose=function(){t.removeEventListener("webglcontextlost",mf,!1),t.removeEventListener("webglcontextrestored",gf,!1),t.removeEventListener("webglcontextcreationerror",xf,!1),Ut.dispose(),$e.dispose(),cn.dispose(),de.dispose(),ut.dispose(),Zt.dispose(),ns.dispose(),al.dispose(),Ie.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",_f),Xt.removeEventListener("sessionend",Mf),Is.stop()},this.renderBufferDirect=function(O,Q,ie,he,oe,xe){Q===null&&(Q=fe);let we=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Re=(function(it,Lt,hn,ke,Ve){Lt.isScene!==!0&&(Lt=fe),Se.resetTextureUnits();let Kn=Lt.fog,Oh=ke.isMeshStandardMaterial||ke.isMeshLambertMaterial||ke.isMeshPhongMaterial?Lt.environment:null,cl=X===null?T.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ke.workingColorSpace,Ua=ke.isMeshStandardMaterial||ke.isMeshLambertMaterial&&!ke.envMap||ke.isMeshPhongMaterial&&!ke.envMap,fi=ut.get(ke.envMap||Oh,Ua),br=ke.vertexColors===!0&&!!hn.attributes.color&&hn.attributes.color.itemSize===4,Di=!!hn.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),Fh=!!hn.morphAttributes.position,Sr=!!hn.morphAttributes.normal,vx=!!hn.morphAttributes.color,Af=li;ke.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(Af=T.toneMapping));let Rf=hn.morphAttributes.position||hn.morphAttributes.normal||hn.morphAttributes.color,yx=Rf!==void 0?Rf.length:0,He=de.get(ke),Ls=b.state.lights;if(G===!0&&(z===!0||it!==le)){let qt=it===le&&ke.id===ee;wt.setState(ke,it,qt)}let Zn=!1;ke.version===He.__version?He.needsLights&&He.lightsStateVersion!==Ls.state.version||He.outputColorSpace!==cl||Ve.isBatchedMesh&&He.batching===!1?Zn=!0:Ve.isBatchedMesh||He.batching!==!0?Ve.isBatchedMesh&&He.batchingColor===!0&&Ve.colorTexture===null||Ve.isBatchedMesh&&He.batchingColor===!1&&Ve.colorTexture!==null||Ve.isInstancedMesh&&He.instancing===!1?Zn=!0:Ve.isInstancedMesh||He.instancing!==!0?Ve.isSkinnedMesh&&He.skinning===!1?Zn=!0:Ve.isSkinnedMesh||He.skinning!==!0?Ve.isInstancedMesh&&He.instancingColor===!0&&Ve.instanceColor===null||Ve.isInstancedMesh&&He.instancingColor===!1&&Ve.instanceColor!==null||Ve.isInstancedMesh&&He.instancingMorph===!0&&Ve.morphTexture===null||Ve.isInstancedMesh&&He.instancingMorph===!1&&Ve.morphTexture!==null||He.envMap!==fi||ke.fog===!0&&He.fog!==Kn?Zn=!0:He.numClippingPlanes===void 0||He.numClippingPlanes===wt.numPlanes&&He.numIntersection===wt.numIntersection?(He.vertexAlphas!==br||He.vertexTangents!==Di||He.morphTargets!==Fh||He.morphNormals!==Sr||He.morphColors!==vx||He.toneMapping!==Af||He.morphTargetsCount!==yx||!!He.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Zn=!0):Zn=!0:Zn=!0:Zn=!0:Zn=!0:(Zn=!0,He.__version=ke.version);let is=He.currentProgram;Zn===!0&&(is=ll(ke,Lt,Ve),w&&ke.isNodeMaterial&&w.onUpdateProgram(ke,is,He));let Cf=!1,wr=!1,Bh=!1,Nt=is.getUniforms(),kn=He.uniforms;if(re.useProgram(is.program)&&(Cf=!0,wr=!0,Bh=!0),ke.id!==ee&&(ee=ke.id,wr=!0),He.needsLights){let qt=(function(gi,Hh){if(gi.length===0)return null;if(gi.length===1)return gi[0].texture!==null?gi[0]:null;M.setFromMatrixPosition(Hh.matrixWorld);for(let Tr=0,_x=gi.length;Tr<_x;Tr++){let Gh=gi[Tr];if(Gh.texture!==null&&Gh.boundingBox.containsPoint(M))return Gh}return null})(b.state.lightProbeGridArray,Ve);He.lightProbeGrid!==qt&&(He.lightProbeGrid=qt,wr=!0)}if(Cf||le!==it){re.buffers.depth.getReversed()&&it.reversedDepth!==!0&&(it._reversedDepth=!0,it.updateProjectionMatrix()),Nt.setValue(Z,"projectionMatrix",it.projectionMatrix),Nt.setValue(Z,"viewMatrix",it.matrixWorldInverse);let qt=Nt.map.cameraPosition;qt!==void 0&&qt.setValue(Z,te.setFromMatrixPosition(it.matrixWorld)),Me.logarithmicDepthBuffer&&Nt.setValue(Z,"logDepthBufFC",2/(Math.log(it.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&Nt.setValue(Z,"isOrthographic",it.isOrthographicCamera===!0),le!==it&&(le=it,wr=!0,Bh=!0)}if(He.needsLights&&(Ls.state.directionalShadowMap.length>0&&Nt.setValue(Z,"directionalShadowMap",Ls.state.directionalShadowMap,Se),Ls.state.spotShadowMap.length>0&&Nt.setValue(Z,"spotShadowMap",Ls.state.spotShadowMap,Se),Ls.state.pointShadowMap.length>0&&Nt.setValue(Z,"pointShadowMap",Ls.state.pointShadowMap,Se)),Ve.isSkinnedMesh){Nt.setOptional(Z,Ve,"bindMatrix"),Nt.setOptional(Z,Ve,"bindMatrixInverse");let qt=Ve.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(Z,"boneTexture",qt.boneTexture,Se))}Ve.isBatchedMesh&&(Nt.setOptional(Z,Ve,"batchingTexture"),Nt.setValue(Z,"batchingTexture",Ve._matricesTexture,Se),Nt.setOptional(Z,Ve,"batchingIdTexture"),Nt.setValue(Z,"batchingIdTexture",Ve._indirectTexture,Se),Nt.setOptional(Z,Ve,"batchingColorTexture"),Ve._colorsTexture!==null&&Nt.setValue(Z,"batchingColorTexture",Ve._colorsTexture,Se));let kh=hn.morphAttributes;if(kh.position===void 0&&kh.normal===void 0&&kh.color===void 0||Bn.update(Ve,hn,is),(wr||He.receiveShadow!==Ve.receiveShadow)&&(He.receiveShadow=Ve.receiveShadow,Nt.setValue(Z,"receiveShadow",Ve.receiveShadow)),(ke.isMeshStandardMaterial||ke.isMeshLambertMaterial||ke.isMeshPhongMaterial)&&ke.envMap===null&&Lt.environment!==null&&(kn.envMapIntensity.value=Lt.environmentIntensity),kn.dfgLUT!==void 0&&(kn.dfgLUT.value=(Ai===null&&(Ai=new ea(qv,16,16,sr,vn),Ai.name="DFG_LUT",Ai.minFilter=Kt,Ai.magFilter=Kt,Ai.wrapS=bi,Ai.wrapT=bi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai)),wr){if(Nt.setValue(Z,"toneMappingExposure",T.toneMappingExposure),He.needsLights&&(Jn=Bh,(mi=kn).ambientLightColor.needsUpdate=Jn,mi.lightProbe.needsUpdate=Jn,mi.directionalLights.needsUpdate=Jn,mi.directionalLightShadows.needsUpdate=Jn,mi.pointLights.needsUpdate=Jn,mi.pointLightShadows.needsUpdate=Jn,mi.spotLights.needsUpdate=Jn,mi.spotLightShadows.needsUpdate=Jn,mi.rectAreaLights.needsUpdate=Jn,mi.hemisphereLights.needsUpdate=Jn),Kn&&ke.fog===!0&&dt.refreshFogUniforms(kn,Kn),dt.refreshMaterialUniforms(kn,ke,W,Y,b.state.transmissionRenderTarget[it.id]),He.needsLights&&He.lightProbeGrid){let qt=He.lightProbeGrid;kn.probesSH.value=qt.texture,kn.probesMin.value.copy(qt.boundingBox.min),kn.probesMax.value.copy(qt.boundingBox.max),kn.probesResolution.value.copy(qt.resolution)}Ma.upload(Z,Tf(He),kn,Se)}var mi,Jn;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(Ma.upload(Z,Tf(He),kn,Se),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&Nt.setValue(Z,"center",Ve.center),Nt.setValue(Z,"modelViewMatrix",Ve.modelViewMatrix),Nt.setValue(Z,"normalMatrix",Ve.normalMatrix),Nt.setValue(Z,"modelMatrix",Ve.matrixWorld),ke.uniformsGroups!==void 0){let qt=ke.uniformsGroups;for(let gi=0,Hh=qt.length;gi<Hh;gi++){let Tr=qt[gi];al.update(Tr,is),al.bind(Tr,is)}}return is})(O,Q,ie,he,oe);re.setMaterial(he,we);let Le=ie.index,Be=1;if(he.wireframe===!0){if(Le=yt.getWireframeAttribute(ie),Le===void 0)return;Be=2}let st=ie.drawRange,rt=ie.attributes.position,Fe=st.start*Be,at=(st.start+st.count)*Be;xe!==null&&(Fe=Math.max(Fe,xe.start*Be),at=Math.min(at,(xe.start+xe.count)*Be)),Le!==null?(Fe=Math.max(Fe,0),at=Math.min(at,Le.count)):rt!=null&&(Fe=Math.max(Fe,0),at=Math.min(at,rt.count));let $t=at-Fe;if($t<0||$t===1/0)return;let jt;ns.setup(oe,he,Re,ie,Le);let It=Yn;if(Le!==null&&(jt=Xe.get(Le),It=Ps,It.setIndex(jt)),oe.isMesh)he.wireframe===!0?(re.setLineWidth(he.wireframeLinewidth*Te()),It.setMode(Z.LINES)):It.setMode(Z.TRIANGLES);else if(oe.isLine){let it=he.linewidth;it===void 0&&(it=1),re.setLineWidth(it*Te()),oe.isLineSegments?It.setMode(Z.LINES):oe.isLineLoop?It.setMode(Z.LINE_LOOP):It.setMode(Z.LINE_STRIP)}else oe.isPoints?It.setMode(Z.POINTS):oe.isSprite&&It.setMode(Z.TRIANGLES);if(oe.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))It.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{let it=oe._multiDrawStarts,Lt=oe._multiDrawCounts,hn=oe._multiDrawCount,ke=Le?Xe.get(Le).bytesPerElement:1,Ve=de.get(he).currentProgram.getUniforms();for(let Kn=0;Kn<hn;Kn++)Ve.setValue(Z,"_gl_DrawID",Kn),It.render(it[Kn]/ke,Lt[Kn])}else if(oe.isInstancedMesh)It.renderInstances(Fe,$t,oe.count);else if(ie.isInstancedBufferGeometry){let it=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Lt=Math.min(ie.instanceCount,it);It.renderInstances(Fe,$t,Lt)}else It.render(Fe,$t)},this.compile=function(O,Q,ie=null){ie===null&&(ie=O),b=cn.get(ie),b.init(Q),U.push(b),ie.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(b.pushLight(oe),oe.castShadow&&b.pushShadow(oe))}),O!==ie&&O.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(b.pushLight(oe),oe.castShadow&&b.pushShadow(oe))}),b.setupLights();let he=new Set;return O.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;let xe=oe.material;if(xe)if(Array.isArray(xe))for(let we=0;we<xe.length;we++){let Re=xe[we];yf(Re,ie,oe),he.add(Re)}else yf(xe,ie,oe),he.add(xe)}),b=U.pop(),he},this.compileAsync=function(O,Q,ie=null){let he=this.compile(O,Q,ie);return new Promise(oe=>{function xe(){he.forEach(function(we){de.get(we).currentProgram.isReady()&&he.delete(we)}),he.size!==0?setTimeout(xe,10):oe(O)}ve.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Uh=null;function _f(){Is.stop()}function Mf(){Is.start()}let Is=new B0;function zh(O,Q,ie,he){if(O.visible===!1)return;if(O.layers.test(Q.layers)){if(O.isGroup)ie=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Q);else if(O.isLightProbeGrid)b.pushLightProbeGrid(O);else if(O.isLight)b.pushLight(O),O.castShadow&&b.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||H.intersectsSprite(O)){he&&se.setFromMatrixPosition(O.matrixWorld).applyMatrix4(K);let xe=Zt.update(O),we=O.material;we.visible&&S.push(O,xe,we,ie,se.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||H.intersectsObject(O))){let xe=Zt.update(O),we=O.material;if(he&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),se.copy(O.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),se.copy(xe.boundingSphere.center)),se.applyMatrix4(O.matrixWorld).applyMatrix4(K)),Array.isArray(we)){let Re=xe.groups;for(let Le=0,Be=Re.length;Le<Be;Le++){let st=Re[Le],rt=we[st.materialIndex];rt&&rt.visible&&S.push(O,xe,rt,ie,se.z,st)}}else we.visible&&S.push(O,xe,we,ie,se.z,null)}}let oe=O.children;for(let xe=0,we=oe.length;xe<we;xe++)zh(oe[xe],Q,ie,he)}function bf(O,Q,ie,he){let{opaque:oe,transmissive:xe,transparent:we}=O;b.setupLightsView(ie),G===!0&&wt.setGlobalState(T.clippingPlanes,ie),he&&re.viewport(ae.copy(he)),oe.length>0&&ol(oe,Q,ie),xe.length>0&&ol(xe,Q,ie),we.length>0&&ol(we,Q,ie),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Sf(O,Q,ie,he){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[he.id]===void 0){let rt=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[he.id]=new Qt(1,1,{generateMipmaps:!0,type:rt?vn:Un,minFilter:Vn,samples:Math.max(4,Me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let oe=b.state.transmissionRenderTarget[he.id],xe=he.viewport||ae;oe.setSize(xe.z*T.transmissionResolutionScale,xe.w*T.transmissionResolutionScale);let we=T.getRenderTarget(),Re=T.getActiveCubeFace(),Le=T.getActiveMipmapLevel();T.setRenderTarget(oe),T.getClearColor($),V=T.getClearAlpha(),V<1&&T.setClearColor(16777215,.5),T.clear(),Ee&&Ut.render(ie);let Be=T.toneMapping;T.toneMapping=li;let st=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),b.setupLightsView(he),G===!0&&wt.setGlobalState(T.clippingPlanes,he),ol(O,ie,he),Se.updateMultisampleRenderTarget(oe),Se.updateRenderTargetMipmap(oe),ve.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Fe=0,at=Q.length;Fe<at;Fe++){let $t=Q[Fe],{object:jt,geometry:It,material:it,group:Lt}=$t;if(it.side===bt&&jt.layers.test(he.layers)){let hn=it.side;it.side=Pn,it.needsUpdate=!0,wf(jt,ie,he,It,it,Lt),it.side=hn,it.needsUpdate=!0,rt=!0}}rt===!0&&(Se.updateMultisampleRenderTarget(oe),Se.updateRenderTargetMipmap(oe))}T.setRenderTarget(we,Re,Le),T.setClearColor($,V),st!==void 0&&(he.viewport=st),T.toneMapping=Be}function ol(O,Q,ie){let he=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,xe=O.length;oe<xe;oe++){let we=O[oe],{object:Re,geometry:Le,group:Be}=we,st=we.material;st.allowOverride===!0&&he!==null&&(st=he),Re.layers.test(ie.layers)&&wf(Re,Q,ie,Le,st,Be)}}function wf(O,Q,ie,he,oe,xe){O.onBeforeRender(T,Q,ie,he,oe,xe),O.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),oe.onBeforeRender(T,Q,ie,he,O,xe),oe.transparent===!0&&oe.side===bt&&oe.forceSinglePass===!1?(oe.side=Pn,oe.needsUpdate=!0,T.renderBufferDirect(ie,Q,he,oe,O,xe),oe.side=ai,oe.needsUpdate=!0,T.renderBufferDirect(ie,Q,he,oe,O,xe),oe.side=bt):T.renderBufferDirect(ie,Q,he,oe,O,xe),O.onAfterRender(T,Q,ie,he,oe,xe)}function ll(O,Q,ie){Q.isScene!==!0&&(Q=fe);let he=de.get(O),oe=b.state.lights,xe=b.state.shadowsArray,we=oe.state.version,Re=Ie.getParameters(O,oe.state,xe,Q,ie,b.state.lightProbeGridArray),Le=Ie.getProgramCacheKey(Re),Be=he.programs;he.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?Q.environment:null,he.fog=Q.fog;let st=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;he.envMap=ut.get(O.envMap||he.environment,st),he.envMapRotation=he.environment!==null&&O.envMap===null?Q.environmentRotation:O.envMapRotation,Be===void 0&&(O.addEventListener("dispose",vf),Be=new Map,he.programs=Be);let rt=Be.get(Le);if(rt!==void 0){if(he.currentProgram===rt&&he.lightsStateVersion===we)return Ef(O,Re),rt}else Re.uniforms=Ie.getUniforms(O),w!==null&&O.isNodeMaterial&&w.build(O,ie,Re),O.onBeforeCompile(Re,T),rt=Ie.acquireProgram(Re,Le),Be.set(Le,rt),he.uniforms=Re.uniforms;let Fe=he.uniforms;return(O.isShaderMaterial||O.isRawShaderMaterial)&&O.clipping!==!0||(Fe.clippingPlanes=wt.uniform),Ef(O,Re),he.needsLights=(function(at){return at.isMeshLambertMaterial||at.isMeshToonMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isShadowMaterial||at.isShaderMaterial&&at.lights===!0})(O),he.lightsStateVersion=we,he.needsLights&&(Fe.ambientLightColor.value=oe.state.ambient,Fe.lightProbe.value=oe.state.probe,Fe.directionalLights.value=oe.state.directional,Fe.directionalLightShadows.value=oe.state.directionalShadow,Fe.spotLights.value=oe.state.spot,Fe.spotLightShadows.value=oe.state.spotShadow,Fe.rectAreaLights.value=oe.state.rectArea,Fe.ltc_1.value=oe.state.rectAreaLTC1,Fe.ltc_2.value=oe.state.rectAreaLTC2,Fe.pointLights.value=oe.state.point,Fe.pointLightShadows.value=oe.state.pointShadow,Fe.hemisphereLights.value=oe.state.hemi,Fe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Fe.spotLightMatrix.value=oe.state.spotLightMatrix,Fe.spotLightMap.value=oe.state.spotLightMap,Fe.pointShadowMatrix.value=oe.state.pointShadowMatrix),he.lightProbeGrid=b.state.lightProbeGridArray.length>0,he.currentProgram=rt,he.uniformsList=null,rt}function Tf(O){if(O.uniformsList===null){let Q=O.currentProgram.getUniforms();O.uniformsList=Ma.seqWithValue(Q.seq,O.uniforms)}return O.uniformsList}function Ef(O,Q){let ie=de.get(O);ie.outputColorSpace=Q.outputColorSpace,ie.batching=Q.batching,ie.batchingColor=Q.batchingColor,ie.instancing=Q.instancing,ie.instancingColor=Q.instancingColor,ie.instancingMorph=Q.instancingMorph,ie.skinning=Q.skinning,ie.morphTargets=Q.morphTargets,ie.morphNormals=Q.morphNormals,ie.morphColors=Q.morphColors,ie.morphTargetsCount=Q.morphTargetsCount,ie.numClippingPlanes=Q.numClippingPlanes,ie.numIntersection=Q.numClipIntersection,ie.vertexAlphas=Q.vertexAlphas,ie.vertexTangents=Q.vertexTangents,ie.toneMapping=Q.toneMapping}Is.setAnimationLoop(function(O){Uh&&Uh(O)}),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(O){Uh=O,Xt.setAnimationLoop(O),O===null?Is.stop():Is.start()},Xt.addEventListener("sessionstart",_f),Xt.addEventListener("sessionend",Mf),this.render=function(O,Q){if(Q!==void 0&&Q.isCamera!==!0)return void ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(I===!0)return;w!==null&&w.renderStart(O,Q);let ie=Xt.enabled===!0&&Xt.isPresenting===!0,he=_!==null&&(X===null||ie)&&_.begin(T,X);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Xt.enabled!==!0||Xt.isPresenting!==!0||_!==null&&_.isCompositing()!==!1||(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(Q),Q=Xt.getCamera()),O.isScene===!0&&O.onBeforeRender(T,O,Q,X),b=cn.get(O,U.length),b.init(Q),b.state.textureUnits=Se.getTextureUnits(),U.push(b),K.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H.setFromProjectionMatrix(K,Wi,Q.reversedDepth),z=this.localClippingEnabled,G=wt.init(this.clippingPlanes,z),S=$e.get(O,E.length),S.init(),E.push(S),Xt.enabled===!0&&Xt.isPresenting===!0){let xe=T.xr.getDepthSensingMesh();xe!==null&&zh(xe,Q,-1/0,T.sortObjects)}zh(O,Q,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(N,A,Q.reversedDepth),Ee=Xt.enabled===!1||Xt.isPresenting===!1||Xt.hasDepthSensing()===!1,Ee&&Ut.addToRenderList(S,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&wt.beginShadows();let oe=b.state.shadowsArray;if(Jt.render(oe,O,Q),G===!0&&wt.endShadows(),(he&&_.hasRenderPass())===!1){let xe=S.opaque,we=S.transmissive;if(b.setupLights(),Q.isArrayCamera){let Re=Q.cameras;if(we.length>0)for(let Le=0,Be=Re.length;Le<Be;Le++)Sf(xe,we,O,Re[Le]);Ee&&Ut.render(O);for(let Le=0,Be=Re.length;Le<Be;Le++){let st=Re[Le];bf(S,O,st,st.viewport)}}else we.length>0&&Sf(xe,we,O,Q),Ee&&Ut.render(O),bf(S,O,Q)}X!==null&&k===0&&(Se.updateMultisampleRenderTarget(X),Se.updateRenderTargetMipmap(X)),he&&_.end(T),O.isScene===!0&&O.onAfterRender(T,O,Q),ns.resetDefaultState(),ee=-1,le=null,U.pop(),U.length>0?(b=U[U.length-1],Se.setTextureUnits(b.state.textureUnits),G===!0&&wt.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,E.pop(),S=E.length>0?E[E.length-1]:null,w!==null&&w.renderEnd()},this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(O,Q,ie){let he=de.get(O);he.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),de.get(O.texture).__webglTexture=Q,de.get(O.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ie,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,Q){let ie=de.get(O);ie.__webglFramebuffer=Q,ie.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(O,Q=0,ie=0){X=O,B=Q,k=ie;let he=null,oe=!1,xe=!1;if(O){let we=de.get(O);if(we.__useDefaultFramebuffer!==void 0)return re.bindFramebuffer(Z.FRAMEBUFFER,we.__webglFramebuffer),ae.copy(O.viewport),ne.copy(O.scissor),J=O.scissorTest,re.viewport(ae),re.scissor(ne),re.setScissorTest(J),void(ee=-1);if(we.__webglFramebuffer===void 0)Se.setupRenderTarget(O);else if(we.__hasExternalTextures)Se.rebindTextures(O,de.get(O.texture).__webglTexture,de.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let Be=O.depthTexture;if(we.__boundDepthTexture!==Be){if(Be!==null&&de.has(Be)&&(O.width!==Be.image.width||O.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Se.setupDepthRenderbuffer(O)}}let Re=O.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(xe=!0);let Le=de.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(he=Array.isArray(Le[Q])?Le[Q][ie]:Le[Q],oe=!0):he=O.samples>0&&Se.useMultisampledRTT(O)===!1?de.get(O).__webglMultisampledFramebuffer:Array.isArray(Le)?Le[ie]:Le,ae.copy(O.viewport),ne.copy(O.scissor),J=O.scissorTest}else ae.copy(F).multiplyScalar(W).floor(),ne.copy(j).multiplyScalar(W).floor(),J=C;if(ie!==0&&(he=R),re.bindFramebuffer(Z.FRAMEBUFFER,he)&&re.drawBuffers(O,he),re.viewport(ae),re.scissor(ne),re.setScissorTest(J),oe){let we=de.get(O.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we.__webglTexture,ie)}else if(xe){let we=Q;for(let Re=0;Re<O.textures.length;Re++){let Le=de.get(O.textures[Re]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Re,Le.__webglTexture,ie,we)}}else if(O!==null&&ie!==0){let we=de.get(O.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,we.__webglTexture,ie)}ee=-1},this.readRenderTargetPixels=function(O,Q,ie,he,oe,xe,we,Re=0){if(!O||!O.isWebGLRenderTarget)return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=de.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){re.bindFramebuffer(Z.FRAMEBUFFER,Le);try{let Be=O.textures[Re],st=Be.format,rt=Be.type;if(O.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Re),!Me.textureFormatReadable(st))return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(rt))return void ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Q>=0&&Q<=O.width-he&&ie>=0&&ie<=O.height-oe&&Z.readPixels(Q,ie,he,oe,pi.convert(st),pi.convert(rt),xe)}finally{let Be=X!==null?de.get(X).__webglFramebuffer:null;re.bindFramebuffer(Z.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(O,Q,ie,he,oe,xe,we,Re=0){if(!O||!O.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=de.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){if(Q>=0&&Q<=O.width-he&&ie>=0&&ie<=O.height-oe){re.bindFramebuffer(Z.FRAMEBUFFER,Le);let Be=O.textures[Re],st=Be.format,rt=Be.type;if(O.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Re),!Me.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Fe),Z.bufferData(Z.PIXEL_PACK_BUFFER,xe.byteLength,Z.STREAM_READ),Z.readPixels(Q,ie,he,oe,pi.convert(st),pi.convert(rt),0);let at=X!==null?de.get(X).__webglFramebuffer:null;re.bindFramebuffer(Z.FRAMEBUFFER,at);let $t=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await h0(Z,$t,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Fe),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,xe),Z.deleteBuffer(Fe),Z.deleteSync($t),xe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,Q=null,ie=0){let he=Math.pow(2,-ie),oe=Math.floor(O.image.width*he),xe=Math.floor(O.image.height*he),we=Q!==null?Q.x:0,Re=Q!==null?Q.y:0;Se.setTexture2D(O,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ie,0,0,we,Re,oe,xe),re.unbindTexture()},this.copyTextureToTexture=function(O,Q,ie=null,he=null,oe=0,xe=0){let we,Re,Le,Be,st,rt,Fe,at,$t,jt=O.isCompressedTexture?O.mipmaps[xe]:O.image;if(ie!==null)we=ie.max.x-ie.min.x,Re=ie.max.y-ie.min.y,Le=ie.isBox3?ie.max.z-ie.min.z:1,Be=ie.min.x,st=ie.min.y,rt=ie.isBox3?ie.min.z:0;else{let fi=Math.pow(2,-oe);we=Math.floor(jt.width*fi),Re=Math.floor(jt.height*fi),Le=O.isDataArrayTexture?jt.depth:O.isData3DTexture?Math.floor(jt.depth*fi):1,Be=0,st=0,rt=0}he!==null?(Fe=he.x,at=he.y,$t=he.z):(Fe=0,at=0,$t=0);let It=pi.convert(Q.format),it=pi.convert(Q.type),Lt;Q.isData3DTexture?(Se.setTexture3D(Q,0),Lt=Z.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Se.setTexture2DArray(Q,0),Lt=Z.TEXTURE_2D_ARRAY):(Se.setTexture2D(Q,0),Lt=Z.TEXTURE_2D),re.activeTexture(Z.TEXTURE0),re.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),re.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),re.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);let hn=re.getParameter(Z.UNPACK_ROW_LENGTH),ke=re.getParameter(Z.UNPACK_IMAGE_HEIGHT),Ve=re.getParameter(Z.UNPACK_SKIP_PIXELS),Kn=re.getParameter(Z.UNPACK_SKIP_ROWS),Oh=re.getParameter(Z.UNPACK_SKIP_IMAGES);re.pixelStorei(Z.UNPACK_ROW_LENGTH,jt.width),re.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,jt.height),re.pixelStorei(Z.UNPACK_SKIP_PIXELS,Be),re.pixelStorei(Z.UNPACK_SKIP_ROWS,st),re.pixelStorei(Z.UNPACK_SKIP_IMAGES,rt);let cl=O.isDataArrayTexture||O.isData3DTexture,Ua=Q.isDataArrayTexture||Q.isData3DTexture;if(O.isDepthTexture){let fi=de.get(O),br=de.get(Q),Di=de.get(fi.__renderTarget),Fh=de.get(br.__renderTarget);re.bindFramebuffer(Z.READ_FRAMEBUFFER,Di.__webglFramebuffer),re.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Fh.__webglFramebuffer);for(let Sr=0;Sr<Le;Sr++)cl&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,de.get(O).__webglTexture,oe,rt+Sr),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,de.get(Q).__webglTexture,xe,$t+Sr)),Z.blitFramebuffer(Be,st,we,Re,Fe,at,we,Re,Z.DEPTH_BUFFER_BIT,Z.NEAREST);re.bindFramebuffer(Z.READ_FRAMEBUFFER,null),re.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||O.isRenderTargetTexture||de.has(O)){let fi=de.get(O),br=de.get(Q);re.bindFramebuffer(Z.READ_FRAMEBUFFER,P),re.bindFramebuffer(Z.DRAW_FRAMEBUFFER,L);for(let Di=0;Di<Le;Di++)cl?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,fi.__webglTexture,oe,rt+Di):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,fi.__webglTexture,oe),Ua?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,br.__webglTexture,xe,$t+Di):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,br.__webglTexture,xe),oe!==0?Z.blitFramebuffer(Be,st,we,Re,Fe,at,we,Re,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ua?Z.copyTexSubImage3D(Lt,xe,Fe,at,$t+Di,Be,st,we,Re):Z.copyTexSubImage2D(Lt,xe,Fe,at,Be,st,we,Re);re.bindFramebuffer(Z.READ_FRAMEBUFFER,null),re.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ua?O.isDataTexture||O.isData3DTexture?Z.texSubImage3D(Lt,xe,Fe,at,$t,we,Re,Le,It,it,jt.data):Q.isCompressedArrayTexture?Z.compressedTexSubImage3D(Lt,xe,Fe,at,$t,we,Re,Le,It,jt.data):Z.texSubImage3D(Lt,xe,Fe,at,$t,we,Re,Le,It,it,jt):O.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,xe,Fe,at,we,Re,It,it,jt.data):O.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,xe,Fe,at,jt.width,jt.height,It,jt.data):Z.texSubImage2D(Z.TEXTURE_2D,xe,Fe,at,we,Re,It,it,jt);re.pixelStorei(Z.UNPACK_ROW_LENGTH,hn),re.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ke),re.pixelStorei(Z.UNPACK_SKIP_PIXELS,Ve),re.pixelStorei(Z.UNPACK_SKIP_ROWS,Kn),re.pixelStorei(Z.UNPACK_SKIP_IMAGES,Oh),xe===0&&Q.generateMipmaps&&Z.generateMipmap(Lt),re.unbindTexture()},this.initRenderTarget=function(O){de.get(O).__webglFramebuffer===void 0&&Se.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?Se.setTextureCube(O,0):O.isData3DTexture?Se.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?Se.setTexture2DArray(O,0):Se.setTexture2D(O,0),re.unbindTexture()},this.resetState=function(){B=0,k=0,X=null,re.reset(),ns.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var wa={title:"WIRE ESCAPE",titleJa:"ワイヤーエスケープ",maxPlayers:8,minPlayers:1,countdownSec:4,finishGraceSec:45,respawnFreezeSec:1.2,wreckRespawnSec:1.3,knockSec:1.1,wreckRepairTo:.55,fallY:-32,step:.016666666666666666,netHz:30,snapHz:20},j0={driftMaxTan:.62,driftGrip:.42,brakeDriftGrip:.55,driftYaw:1.9,straighten:4,gravity:22,rideHeight:.55,suspTravel:.38,stepUp:1.1,carRadius:1.15,carHalfLen:1.2,aeroDrag:45e-5,rolling:.9,airRate:2.6,safeLand:14,maxPlausibleSpeed:95};var np={cone:{breakAt:1,absorb:.01,hard:.1,debris:3,color:16742938,w:.6,l:.6,h:.8},barricade:{breakAt:3,absorb:.04,hard:.3,debris:6,color:16053492,w:3,l:.5,h:1.1},fence:{breakAt:5,absorb:.06,hard:.4,debris:8,color:10185276,w:4,l:.3,h:1.4},tempfence:{breakAt:6,absorb:.07,hard:.4,debris:6,color:9085104,w:4,l:.3,h:2},sign:{breakAt:5,absorb:.05,hard:.4,debris:5,color:3050456,w:2.4,l:.4,h:2.6},lamp:{breakAt:9,absorb:.08,hard:.7,debris:4,color:7173248,w:.5,l:.5,h:6.5},lumber:{breakAt:19,absorb:.25,hard:1.1,debris:12,color:12881999,w:3.2,l:2.2,h:1.6},guardrail:{breakAt:13,absorb:.12,hard:.9,debris:4,color:13225686,w:4.2,l:.4,h:.9},wall:{breakAt:31,absorb:.42,hard:1.6,debris:22,color:10902079,w:16,l:1.2,h:6},tree:{breakAt:8,absorb:.14,hard:.8,debris:8,color:4160058,w:.9,l:.9,h:14},parked:{breakAt:15,absorb:.22,hard:.9,debris:6,color:7173248,w:1.9,l:4.3,h:1.4},signal:{breakAt:9,absorb:.08,hard:.7,debris:4,color:2829875,w:.5,l:.5,h:5.2},tower:{breakAt:14,absorb:.18,hard:.9,debris:8,color:14721056,w:1.6,l:1.6,h:48}};var et=n=>n*1.625,We=n=>40+(n-40)*1.625,ih={x0:et(-360),x1:et(360),z0:-20,z1:We(880)},Gt=[-320,-240,-160,-80,0,80,160,240,320].map(et),mt=[40,120,200,280,360,440,520,600,680,760,840].map(We),rh=new Set([et(-240),0,et(240)]),ah=new Set([We(40),We(680)]),oh=We(332),St={z0:oh-15,z1:oh+15,floor:-8},sh=[-240,-80,0,240].map(et),Fo=et(160),ys=28,ko=18,Bo=9,q0=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)};function ip(n,e){let t=q0(St.z0-2,St.z0,e)*(1-q0(St.z1,St.z1+2,e));return t>0?St.floor*t:0}var Ci=(n,e)=>(n==="x"?rh.has(e):ah.has(e))?ys:ko,Y0={};for(let[n,e,t]of[[-80,440,"park"],[80,120,"park"],[0,520,"plaza"],[-160,200,"parking"],[160,440,"site"],[-320,280,"bank"],[-240,280,"bank"],[-160,280,"bank"],[-80,280,"bank"],[0,280,"bank"],[80,280,"bank"],[160,280,"bank"],[240,280,"bank"],[-240,520,"park"],[160,120,"parking"],[240,680,"park"],[-320,760,"parking"],[0,760,"plaza"],[-160,760,"site"],[-240,360,"lot:se-nw"],[-240,600,"lot:sw-ne"],[80,600,"lot:ne-sw"],[80,40,"lot:nw-se"]])Y0[`${et(n)},${We(e)}`]=t;function K0(){let n=[],e=[],t=[],i=[],s=[],r=[],a=[],o=[],l=[],c=[],h=[],u=[],d=[],p=[],m=(V,q,Y=.62)=>{h.push({x:V,y:0,z:q,s:Y,r:V*.37+q}),i.push({type:"tree",x:V,z:q,yaw:0,y:-.5,ti:h.length-1})},f=(V,q=12,Y="road")=>n.push({pts:V,w:q,surf:Y}),v=(V,q,Y,W,N,A="building",F=0)=>t.push({cx:(V+Y)/2,cz:(q+W)/2,yaw:0,hw:Math.abs(Y-V)/2,hl:Math.abs(W-q)/2,y0:F,h:N,kind:A}),x=(V,q,Y,W=0,N)=>i.push({type:V,x:q,z:Y,yaw:W,y:N}),g=23,y=()=>(g=g*16807%2147483647)/2147483647;for(let V of Gt){let q=Ci("x",V);sh.includes(V)||V===Fo?f([[V,mt[0]-10],[V,mt[mt.length-1]+10]],q):(f([[V,mt[0]-10],[V,St.z0-4]],q),f([[V,St.z1+4],[V,mt[mt.length-1]+10]],q))}for(let V of mt)f([[Gt[0]-10,V],[Gt[Gt.length-1]+10,V]],Ci("z",V));for(let V of sh){let q=Ci("x",V)/2;e.push({cx:V,cz:(St.z0+St.z1)/2,yaw:0,hw:q,hl:(St.z1-St.z0)/2+3,y0:0,y1:0,thick:1.4,surf:"road",solid:!0,kind:"bridge"});for(let Y of[-1,1])t.push({cx:V+Y*(q+.3),cz:(St.z0+St.z1)/2,yaw:0,hw:.3,hl:(St.z1-St.z0)/2+3,y0:0,h:1.1,kind:"rail"})}e.push({cx:Fo,cz:St.z1+11,yaw:0,hw:ko/2,hl:11,y0:3.8,y1:0,thick:.8,surf:"road",solid:!0,kind:"kicker"}),e.push({cx:Fo,cz:St.z0-11,yaw:0,hw:ko/2,hl:11,y0:0,y1:1,thick:.8,surf:"road",solid:!0,kind:"bridge"});let M=[...sh.map(V=>[V,Ci("x",V)/2+.6]),[Fo,ko/2+.6]];for(let V of[St.z0-1,St.z1+1]){let q=ih.x0,Y=M.map(([W,N])=>[W-N,W+N]).sort((W,N)=>W[0]-N[0]);for(let[W,N]of Y)W>q&&t.push({cx:(q+W)/2,cz:V,yaw:0,hw:(W-q)/2,hl:.25,y0:0,h:.95,kind:"rail"}),q=N;t.push({cx:(q+ih.x1)/2,cz:V,yaw:0,hw:(ih.x1-q)/2,hl:.25,y0:0,h:.95,kind:"rail"})}o.push({x:Fo,z:oh,t:"JUMP"});for(let V=0;V<Gt.length-1;V++)for(let q=0;q<mt.length-1;q++){let C=function(H,G,z,K){let te=j?40+y()*80:14+y()*24;v(H,G,z,K,te,"building")},Y=Gt[V]+Ci("x",Gt[V])/2+4,W=Gt[V+1]-Ci("x",Gt[V+1])/2-4,N=mt[q]+Ci("z",mt[q])/2+4,A=mt[q+1]-Ci("z",mt[q+1])/2-4,F=Y0[`${Gt[V]},${mt[q]}`]||"buildings",j=Math.abs((Gt[V]+Gt[V+1])/2)<et(130)&&mt[q]>=We(360);if(F==="buildings")if(y()<.55){let H=y()<.5,G=Bo/2;if(H){let z=(Y+W)/2+(y()-.5)*16;C(Y,N,z-G,A),C(z+G,N,W,A),f([[z,N-4],[z,A+4]],Bo)}else{let z=(N+A)/2+(y()-.5)*16;C(Y,N,W,z-G),C(Y,z+G,W,A),f([[Y-4,z],[W+4,z]],Bo)}}else C(Y,N,W,A);else if(F==="park"){l.push({x0:Y,z0:N,x1:W,z1:A});for(let H=Y+8;H<=W-8;H+=4.2)x("fence",H,N,0),x("fence",H,A,0);for(let H=N+8;H<=A-8;H+=4.2)x("fence",Y,H,Math.PI/2),x("fence",W,H,Math.PI/2);for(let H=0;H<9;H++)a.push({kind:"parktree",x:Y+8+y()*(W-Y-16),z:N+8+y()*(A-N-16)});o.push({x:(Y+W)/2,z:(N+A)/2,t:"PARK"})}else if(F==="plaza"){v((Y+W)/2-4,(N+A)/2-4,(Y+W)/2+4,(N+A)/2+4,1.2,"fountain");for(let[H,G]of[[Y+4,N+4],[W-4,N+4],[Y+4,A-4],[W-4,A-4]])x("lamp",H,G)}else if(F==="parking")for(let H=0;H<4;H++)for(let G=0;G<14;G++)y()<.7&&x("parked",Y+8+G*6.6,N+14+H*22,Math.PI/2+(y()-.5)*.1);else if(F==="site"){c.push({x0:Y,z0:N,x1:W,z1:A});for(let H=Y+6;H<=W-6;H+=4)x("tempfence",H,N,0);for(let H=N+6;H<=A-6;H+=4)x("tempfence",W,H,Math.PI/2);e.push({cx:(Y+W)/2-12,cz:(N+A)/2,yaw:Math.PI/2,hw:3.2,hl:4.5,y0:.02,y1:2.2,thick:.4,surf:"wood",solid:!0,kind:"roll",roll:1}),e.push({cx:(Y+W)/2+10,cz:(N+A)/2-10,yaw:0,hw:3.2,hl:4.5,y0:.02,y1:1.9,thick:.4,surf:"wood",solid:!0,kind:"kicker"}),x("lumber",Y+10,A-10,.3),x("lumber",W-12,A-8,-.2),o.push({x:(Y+W)/2,z:(N+A)/2,t:"SITE"})}else if(F.startsWith("lot")){let H=(Me,re)=>{let de=Me==="s"||Me==="n"?W-Y:A-N;return re=Math.max(18/de,Math.min(1-18/de,re)),Me==="s"?{a:[Y+(W-Y)*re-15,N],b:[Y+(W-Y)*re+15,N],mid:[Y+(W-Y)*re,N],out:[0,-1]}:Me==="n"?{a:[Y+(W-Y)*re-15,A],b:[Y+(W-Y)*re+15,A],mid:[Y+(W-Y)*re,A],out:[0,1]}:Me==="w"?{a:[Y,N+(A-N)*re-15],b:[Y,N+(A-N)*re+15],mid:[Y,N+(A-N)*re],out:[-1,0]}:{a:[W,N+(A-N)*re-15],b:[W,N+(A-N)*re+15],mid:[W,N+(A-N)*re],out:[1,0]}},G={"lot:se-nw":[["s",1],["w",1]],"lot:sw-ne":[["w",0],["n",1]],"lot:ne-sw":[["n",0],["e",0]],"lot:nw-se":[["e",1],["s",0]]}[F],z=H(...G[0]),K=H(...G[1]),te=(Me,re,pe,de)=>{Math.hypot(pe-Me,de-re)<1||t.push({cx:(Me+pe)/2,cz:(re+de)/2,yaw:0,hw:Math.max(.4,Math.abs(pe-Me)/2),hl:Math.max(.4,Math.abs(de-re)/2),y0:0,h:1.3,kind:"lotwall"})},se={s:[[Y,N],[W,N]],n:[[Y,A],[W,A]],w:[[Y,N],[Y,A]],e:[[W,N],[W,A]]};for(let[Me,[[re,pe],[de,Se]]]of Object.entries(se)){let ut=[z,K].filter(Xe=>Me==="s"||Me==="n"?Math.abs(Xe.a[1]-pe)<.1&&Math.abs(Xe.b[1]-pe)<.1:Math.abs(Xe.a[0]-re)<.1&&Math.abs(Xe.b[0]-re)<.1);if(Me==="s"||Me==="n"){let Xe=re;for(let yt of ut.sort((Zt,Ie)=>Zt.a[0]-Ie.a[0]))te(Xe,pe,yt.a[0],pe),Xe=yt.b[0];te(Xe,pe,de,pe)}else{let Xe=pe;for(let yt of ut.sort((Zt,Ie)=>Zt.a[1]-Ie.a[1]))te(re,Xe,re,yt.a[1]),Xe=yt.b[1];te(re,Xe,re,Se)}}for(let Me of[z,K]){let re=Math.abs(Me.a[1]-Me.b[1])<.1,pe=10;for(let de=0;de<pe;de++){let Se=(de+.5)/pe;x("barricade",Me.a[0]+(Me.b[0]-Me.a[0])*Se,Me.a[1]+(Me.b[1]-Me.a[1])*Se,re?0:Math.PI/2)}}let fe=(z.mid[0]+K.mid[0])/2,Ee=(z.mid[1]+K.mid[1])/2,Te=K.mid[0]-z.mid[0],ve=K.mid[1]-z.mid[1];e.push({cx:fe,cz:Ee,yaw:Math.atan2(Te,ve),hw:3.6,hl:5,y0:.02,y1:2,thick:.4,surf:"wood",solid:!0,kind:u.length%2?"roll":"kicker",roll:u.length%2?1:0});for(let Me of[.25,.68,.85])p.push({x:z.mid[0]+Te*Me,z:z.mid[1]+ve*Me,amount:.3});u.push({entry:[z.mid[0]+z.out[0]*8,z.mid[1]+z.out[1]*8],inA:z.mid,outB:K.mid,exit:[K.mid[0]+K.out[0]*8,K.mid[1]+K.out[1]*8],out:z.out}),d.push({x0:Y,z0:N,x1:W,z1:A})}else if(F==="bank")for(let H=Y+6;H<W-4;H+=14)a.push({kind:"parktree",x:H,z:N+4}),x("lamp",H+7,A-2)}let S=Gt[Gt.length-1]+ys/2+4,b=mt[0]-ys/2-4,E=mt[mt.length-1]+ys/2+4;v(-S-80,-60,-S,E+80,30,"building"),v(S,-60,S+80,E+80,30,"building"),v(-S,-60,S,b,26,"building"),v(-S,E,S,E+80,34,"building");let U=ys/2+1.4,_=(V,q)=>q.some(Y=>Math.abs(V-Y)<ys/2+6);for(let V of rh)for(let q=mt[0]+30;q<mt[mt.length-1];q+=40)q>St.z0-12&&q<St.z1+12||_(q,mt)||(x("lamp",V-U,q),x("lamp",V+U,q+20));for(let V of ah)for(let q=Gt[0]+30;q<Gt[Gt.length-1];q+=40)_(q,Gt)||x("lamp",q,V+(V===mt[0]?-U:U));for(let V of Gt)for(let q of mt){if(!(rh.has(V)||ah.has(q)))continue;let Y=Ci("x",V)/2+1.6,W=Ci("z",q)/2+1.6;x("signal",V-Y,q-W,0),x("signal",V+Y,q+W,Math.PI)}for(let V=mt[0]+20;V<mt[mt.length-1];V+=26)if(!(V>St.z0-14&&V<St.z1+14)&&!_(V,mt))for(let q of[-1,1]){let Y=q*(ys/2+2.6);n.some(W=>W.w<=Bo&&Math.abs(W.pts[0][1]-V)<Bo&&Math.min(W.pts[0][0],W.pts[1][0])-4<Y&&Math.max(W.pts[0][0],W.pts[1][0])+4>Y)||m(Y,V)}for(let V of a)V.kind==="parktree"&&m(V.x,V.z,.7);let T=(V,q,Y,W,N=0)=>e.push({cx:V,cz:q,yaw:Math.atan2(Y,W),hw:3.4,hl:5,y0:.02,y1:2,thick:.4,surf:"wood",solid:!0,kind:N?"roll":"kicker",roll:N});T(-7,We(200),0,1,1),T(7,We(560),0,1,0),T(et(-240)-7,We(460),0,1,-1),T(et(120),We(680)+7,1,0,1),T(et(240)+7,We(200),0,-1,0),T(et(-60),We(360)-4,-1,0,-1);let I=(V,q)=>r.push({x0:V+2,z0:q-12,x1:V+13,z1:q+12,name:"REPAIR"}),w=(V,q)=>r.push({x0:V-12,z0:q+2,x1:V+12,z1:q+13,name:"REPAIR"});I(et(-240),We(160)),I(et(240),We(480)),I(0,We(800)),w(et(-120),We(680));let R=ys/2+1,P=ko/2+1,L=[{a:{x:et(-120),z:We(360)-P},b:{x:et(-120),z:We(360)+P},nx:-1,nz:0,name:"CP1",respawn:{x:et(-120)-6,z:We(360),yaw:-Math.PI/2}},{a:{x:et(-240)-R,z:We(560)},b:{x:et(-240)+R,z:We(560)},nx:0,nz:1,name:"CP2",respawn:{x:et(-240),z:We(560)+6,yaw:0}},{a:{x:et(40),z:We(680)-R},b:{x:et(40),z:We(680)+R},nx:1,nz:0,name:"CP3",respawn:{x:et(40)+6,z:We(680),yaw:Math.PI/2}},{a:{x:et(160)-P,z:We(480)},b:{x:et(160)+P,z:We(480)},nx:0,nz:-1,name:"CP4",respawn:{x:et(160),z:We(480)-6,yaw:Math.PI}},{a:{x:et(40),z:We(40)-R},b:{x:et(40),z:We(40)+R},nx:-1,nz:0,name:"CP5",respawn:{x:et(40)-6,z:We(40),yaw:-Math.PI/2}},{a:{x:-R,z:We(80)},b:{x:R,z:We(80)},nx:0,nz:1,name:"FINISH",respawn:{x:0,z:We(80)+6,yaw:0}}],B=[];for(let V=0;V<8;V++)B.push({x:V%2?5:-5,z:We(80)-14-Math.floor(V/2)*9,yaw:0});let k=V=>V.map(([q,Y])=>[et(q),We(Y)]),X=(V,q,Y)=>[q,V.entry,V.inA,V.outB,V.exit,Y],[ee,le,ae,ne]=u,J=[[{id:"A",risk:0,pts:k([[0,92],[0,346],[-5,355],[-16,360],[-126,360]])}],[{id:"A",risk:0,pts:k([[-126,360],[-226,360],[-236,365],[-240,376],[-240,566]])},{id:"B",risk:.4,pts:[...k([[-126,360]]),...X(ee,[ee.entry[0]+30,We(360)],[et(-240),ee.exit[1]+30]),...k([[-240,566]])]}],[{id:"A",risk:0,pts:k([[-240,566],[-240,668],[-235,676],[-224,680],[46,680]])},{id:"B",risk:.4,pts:[...k([[-240,566]]),...X(le,[et(-240),le.entry[1]-30],[le.exit[0]+30,We(680)]),...k([[46,680]])]}],[{id:"A",risk:0,pts:k([[46,680],[146,680],[156,675],[160,664],[160,474]])},{id:"B",risk:.4,pts:[...k([[46,680]]),...X(ne,[ne.entry[0]-30,We(680)],[et(160),ne.exit[1]-30]),...k([[160,474]])]}],[{id:"E",risk:.6,pts:k([[160,474],[160,380],[160,300],[160,56],[155,45],[144,40],[34,40]])},{id:"A",risk:0,pts:k([[160,474],[160,454],[165,444],[176,440],[226,440],[236,435],[240,424],[240,56],[235,45],[224,40],[34,40]])},{id:"B",risk:.5,pts:[...k([[160,474],[160,380],[160,300]]),...X(ae,[et(160),ae.entry[1]+30],[ae.exit[0]-30,We(40)]),...k([[34,40]])]}],[{id:"A",risk:0,pts:k([[34,40],[12,40],[3,45],[0,56],[0,86]])}]],$=[[-160,120,-80,200],[0,200,80,280],[-240,440,-160,600],[80,440,160,600],[160,120,240,280],[-80,520,0,680],[80,600,240,680],[-240,40,-80,120],[-80,360,80,440],[0,40,160,120],[-240,120,0,280],[0,520,240,600],[-160,600,80,680]].map(([V,q,Y,W])=>[et(V),We(q),et(Y),We(W)]);return{roads:n,slabs:e,boxes:t,props:i,dirt:c,repair:r,decor:[],gates:L,grid:B,labels:o,routes:J,trees:h,laps:2,shortcuts:u,lotRects:d,pickups:p,bounds:ih,fallY:-3,water:{z0:St.z0,z1:St.z1,y:-2.2},trafficLoops:$,grassRects:l,cityGrid:{XS:Gt,ZS:mt,WIDE_X:[...rh],WIDE_Z:[...ah]},nav:{XS:Gt,ZS:mt,canal:{z0:St.z0,z1:St.z1},bridges:sh,downtownX:et(130),downtownZ:We(360),mid:oh},ground:(V,q)=>l.some(Y=>V>Y.x0&&V<Y.x1&&q>Y.z0&&q<Y.z1)?"grass":"road"}}var Yv=1.6,_s=(n,e,t)=>{let i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)},ch=(n,e,t)=>n+(e-n)*t,vt={x0:-305,x1:235,z0:-60,z1:2330},Kv={x0:-230,x1:150,z0:660,z1:760,floor:-70,wall:6},Zv={x0:-50,x1:50,z0:910,z1:1045,top:20,slope:40,cliff:2};function Jv(n){return n<760?0:n<770?ch(0,-4,(n-760)/10):n<830?-4:n<870?ch(-4,0,_s(830,870,n)):0}function sp(n,e){return Math.sin(n*.11+e*.07)*.35+Math.sin(n*.043-e*.061+1.7)*.5+Math.sin(e*.19+n*.02)*.12}var $0=null;function nn(n,e){return($0||rp)(n,e)}function rp(n,e){let t=Jv(e),i=Kv,s=_s(i.z0-i.wall,i.z0,e)*(1-_s(i.z1,i.z1+i.wall,e)),r=_s(i.x0-i.wall,i.x0,n)*(1-_s(i.x1,i.x1+i.wall,n)),a=s*r;a>0&&(t=ch(t,i.floor+sp(n,e)*3,a));let o=Zv,l=Math.max(o.x0-n,n-o.x1,0),c=Math.max(o.z0-e,0),h=Math.max(e-o.z1,0),u=(1-_s(0,o.slope,Math.hypot(l,c)))*(1-_s(0,o.cliff,h));if(u>0&&(t+=o.top*u),e>1240&&e<2220){let f=(e-1240)/980;t+=Math.pow(Math.sin(Math.PI*f),1.15)*78*(1-.22*Math.exp(-((n/140)**2)))}e>640&&a<.5&&(t+=sp(n,e)*_s(640,700,e)*(1-a*2));let d=Math.max(vt.x0-n,n-vt.x1,0),p=Math.max(vt.z0-e,e-vt.z1,0),m=d+p;return m>0&&(t+=Math.pow(Math.min(1,m/70),1.4)*70+sp(n*2,e*2)*Math.min(1,m/20)*4),t}function ap(n,e){let t=Math.sin(n*.021+1.3)*Math.cos(e*.017)+Math.sin(n*.051-e*.033)*.6+Math.sin((n+e)*.009)*.5,i=Math.max(0,Math.min(1,(t+.55)/1.4));return e>1240?Math.min(1,i+.35):i}function Z0(n,e,t,i,s,r){let a=s-t,o=r-i,l=a*a+o*o,c=l?((n-t)*a+(e-i)*o)/l:0;return c=Math.max(0,Math.min(1,c)),Math.hypot(n-(t+a*c),e-(i+o*c))}function $v(){let n=[],e=[],t=[],i=[],s=[],r=[],a=[],o=[],l=(w,R=14,P="road")=>n.push({pts:w,w:R,surf:P}),c=(w,R,P,L,B,k="building",X=null,ee=0)=>t.push({cx:(w+P)/2,cz:(R+L)/2,yaw:0,hw:Math.abs(P-w)/2,hl:Math.abs(L-R)/2,y0:ee,h:B,kind:k,color:X}),h=(w,R,P,L=0,B)=>i.push({type:w,x:R,z:P,yaw:L,y:B}),u=(w,R,P,L,B,k=0)=>{for(let X=R;X<=P+1e-6;X+=B)h(w,X,L,k)},d=(w,R,P,L,B,k=Math.PI/2)=>{for(let X=P;X<=L+1e-6;X+=B)h(w,R,X,k)};l([[0,-45],[0,128]],16),l([[-96,128],[44,128]],16),l([[-96,128],[-96,308]],16),l([[-96,308],[58,308]],16),l([[0,308],[0,360]],16),l([[0,136],[0,300]],14),l([[34,128],[34,180],[60,180],[60,240],[34,240],[34,308]],9),o.push({x:-96,z:220,t:"A"},{x:0,z:220,t:"B"},{x:47,z:210,t:"D"});let p=[[-110,-45,-12,118,"w"],[12,-45,110,118,"e"],[-84,138,-12,186,"w"],[-84,190,-12,246,"w"],[-84,250,-12,298,"w"],[11,138,29.5,196,"e"],[11,200,29.5,298,"e"],[38.5,184.5,55.5,235.5,"e"],[38.5,138,64.5,175.5,"e"],[64.5,138,110,210,"e"],[64.5,214,110,298,"e"],[38.5,244.5,64.5,298,"e"],[-130,118,-106,330,"w"],[-110,318,-12,346,"w"],[12,318,45,340,"e"],[59,318,110,340,"e"],[66,300,110,318,"e"]],m=0;for(let[w,R,P,L]of p)c(w,R,P,L,10+m++*7919%5*5,"building");c(-12,-60,12,-52,4,"wall"),h("sign",-9.2,134,0),h("sign",9.2,134,0);for(let w=10;w<=110;w+=25)h("lamp",-9.5,w),h("lamp",9.5,w);for(let w=150;w<=290;w+=28)h("lamp",-86.5,w);h("sign",-86.8,200,Math.PI/2),h("sign",37.5,160,Math.PI/2),l([[0,360],[0,400]],16),l([[-62,400],[8,400]],14),l([[-62,400],[-62,568]],14),l([[-62,568],[0,568]],14),l([[0,568],[0,640]],16),l([[0,400],[0,418]],14),l([[0,546],[0,568]],14),l([[52,308],[52,336],[56,352],[56,362]],12),l([[56,590],[56,600],[6,616]],12),l([[64,452],[74,470],[74,590],[60,600]],8,"dirt"),o.push({x:-62,z:480,t:"A"},{x:0,z:480,t:"B"},{x:56,z:470,t:"C"}),s.push({x0:42,z0:362,x1:92,z1:600}),r.push({x0:-88,z0:455,x1:-69.5,z1:505,name:"PIT 1"});let f={x0:-40,x1:40,z0:418,z1:546};c(f.x0,f.z0,-8,f.z0+1.2,8,"whouse"),c(8,f.z0,f.x1,f.z0+1.2,8,"whouse"),c(f.x0,f.z1-1.2,-8,f.z1,8,"whouse"),c(8,f.z1-1.2,f.x1,f.z1,8,"whouse"),c(f.x0,f.z0,f.x0+1.2,f.z1,8,"whouse"),c(f.x1-1.2,f.z0,f.x1,f.z1,8,"whouse"),h("wall",0,f.z0+.6),h("wall",0,f.z1-.6);for(let[w,R]of[[-18,450],[18,450],[-18,515],[18,515]])c(w-.8,R-.8,w+.8,R+.8,8,"pillar");h("lumber",-6,470,.4),h("lumber",7,495,-.3),h("lumber",-2,525,0),h("sign",-9.5,410,0),h("sign",9.5,410,0),c(-125,346,-110,625,6,"wall"),c(95,346,110,625,6,"wall"),c(-110,346,-12,392,9,"building"),c(12,366,44,392,9,"building"),c(-110,408,-90,452,12,"building"),c(-110,508,-90,560,12,"building"),c(-53,408,-42,560,7,"building"),c(-110,576,-12,612,9,"building"),c(12,576,44,600,7,"building");for(let[w,R]of[[46,405],[46,420],[88,380],[86,560]])c(w-1.3,R-6,w+1.3,R+6,2.6,"container");for(let w=410;w<=560;w+=30)h("lamp",-70.5,w);e.push({cx:56,cz:381,yaw:0,hw:6,hl:19,y0:0,y1:8,thick:1.2,surf:"road",solid:!0,kind:"ramp"}),e.push({cx:56,cz:426,yaw:0,hw:6,hl:26,y0:8,y1:8,thick:1.4,surf:"road",solid:!0,kind:"deck"}),e.push({cx:54,cz:448,yaw:0,hw:3.85,hl:4,y0:8,y1:9.8,thick:.4,surf:"wood",solid:!0,kind:"kicker"}),e.push({cx:56,cz:519,yaw:0,hw:6,hl:31,y0:7,y1:7,thick:1.4,surf:"road",solid:!0,kind:"deck"}),e.push({cx:56,cz:570,yaw:0,hw:6,hl:20,y0:7,y1:0,thick:1.2,surf:"road",solid:!0,kind:"ramp"});for(let w of[49.6,62.4])c(w-.3,362,w+.3,400,9,"sidewall"),c(w-.3,550,w+.3,590,8,"sidewall");e.push({cx:59.6,cz:437.5,yaw:0,hw:1.6,hl:3.5,y0:8,y1:9.2,thick:.6,surf:"wood",solid:!1,kind:"wedge",needs:"tower"}),e.push({cx:59.6,cz:464.75,yaw:0,hw:1.6,hl:23.75,y0:9.2,y1:8.2,thick:.6,surf:"wood",solid:!0,kind:"plank",needs:"tower"}),h("tower",59.6,440,0,8);for(let w of[49.8,62.2])t.push({cx:w,cz:426,yaw:0,hw:.25,hl:26,y0:8,h:1,kind:"rail"}),t.push({cx:w,cz:519,yaw:0,hw:.25,hl:31,y0:7,h:1,kind:"rail"});for(let w=405;w<=445;w+=20)for(let R of[51,61])c(R-.7,w-.7,R+.7,w+.7,6.6,"pillar");for(let w=495;w<=545;w+=25)for(let R of[51,61])c(R-.7,w-.7,R+.7,w+.7,5.6,"pillar");c(48,547,64,549,3,"wall"),l([[0,640],[0,650]],14),l([[0,640],[-260,640],[-260,800],[0,800],[0,860]],14),l([[0,640],[150,640],[172,652],[168,690],[184,712],[170,745],[178,778],[150,800],[0,800]],7,"dirt"),o.push({x:-255,z:720,t:"A"},{x:0,z:720,t:"E"},{x:178,z:720,t:"D"}),r.push({x0:-300,z0:690,x1:-268,z1:740,name:"PIT 2"}),e.push({cx:0,cz:666,yaw:0,hw:7,hl:16,y0:0,y1:0,thick:2.2,surf:"road",solid:!0,kind:"bridge"}),e.push({cx:0,cz:686,yaw:0,hw:7,hl:4,y0:0,y1:1.8,thick:2.2,surf:"road",solid:!0,kind:"bridge"}),e.push({cx:0,cz:766,yaw:0,hw:8,hl:16,y0:0,y1:-4,thick:2.2,surf:"road",solid:!0,kind:"bridge"});for(let w of[-7.3,7.3])t.push({cx:w,cz:669,yaw:0,hw:.3,hl:19,y0:0,h:1.1,kind:"rail"}),t.push({cx:w*8.3/7.3,cz:774,yaw:0,hw:.3,hl:8,y0:-4,h:1.1,kind:"rail"});for(let w of[650,776])for(let R of[-9.2,9.2])t.push({cx:R,cz:w,yaw:0,hw:1.2,hl:1.2,y0:-70,h:108,kind:"pylon"});for(let w of[664,680,756])for(let R of[-5,5])t.push({cx:R,cz:w,yaw:0,hw:1.1,hl:1.1,y0:-72,h:70,kind:"pillar"});a.push({kind:"debris",x:3,z:712,y:-66,s:6},{kind:"debris",x:-4,z:725,y:-67,s:5}),t.push({cx:-120,cz:650.5,yaw:0,hw:112,hl:.25,y0:0,h:.9,kind:"rail"}),t.push({cx:79,cz:650.5,yaw:0,hw:71,hl:.25,y0:0,h:.9,kind:"rail"}),t.push({cx:-120,cz:790,yaw:0,hw:112,hl:.25,y0:-4,h:.9,kind:"rail"}),t.push({cx:79,cz:790,yaw:0,hw:71,hl:.25,y0:-4,h:.9,kind:"rail"}),h("sign",-10,646,0),h("sign",10,646,0);for(let[w,R,P]of[[160,670,3],[180,690,2.5],[158,720,3],[192,740,3],[162,760,2.5],[188,790,3]])t.push({cx:w,cz:R,yaw:w*.3,hw:P,hl:P*.8,y0:-2,h:P*1.6,kind:"rock"});for(let w=660;w<=790;w+=22)h("fence",196,w,Math.PI/2);l([[0,860],[0,872],[110,892],[145,925],[148,990],[125,1065],[50,1112],[0,1130]],14),l([[0,860],[-70,876],[-98,918],[-76,948],[-100,982],[-78,1016],[-98,1054],[-55,1100],[0,1130]],8),l([[0,872],[0,1046]],9,"dirt"),l([[0,1060],[0,1262]],16);let v=[[0,1262],[40,1276],[150,1300],[168,1318],[160,1338],[120,1350],[-150,1380],[-168,1398],[-160,1418],[-120,1430],[150,1460],[168,1478],[160,1498],[120,1510],[-140,1545],[-158,1563],[-150,1583],[-110,1595],[120,1625],[136,1643],[128,1663],[90,1675],[-50,1698],[-68,1708],[-62,1724],[-30,1738],[0,1750]],x=[[0,1262],[-42,1288],[12,1318],[-58,1352],[6,1392],[-62,1428],[2,1468],[-58,1508],[6,1548],[-54,1588],[6,1628],[-48,1668],[2,1702],[-24,1728],[0,1750]],g=[[0,1750],[20,1770],[90,1800],[110,1830],[60,1870],[-60,1900],[-110,1935],[-80,1975],[40,2005],[100,2040],[70,2085],[-40,2110],[-80,2150],[-40,2190],[0,2210],[0,2330]];l(v,10),l(x,6,"dirt"),l(g,10),o.push({x:160,z:1400,t:"A"},{x:-30,z:1500,t:"D"},{x:100,z:1950,t:"A"}),r.push({x0:175,z0:1450,x1:200,z1:1490,name:"PIT 4"}),c(-40,1752,-24,1764,5,"building"),c(24,1736,40,1746,4,"building"),h("sign",12,1745,.6),h("sign",-12,1756,.6);for(let[w,R,P,L]of[[-70,2235,-14,2262],[-70,2278,-14,2310],[14,2235,70,2262],[14,2278,70,2310]])c(w,R,P,L,7+m++*7919%3*3,"building");for(let w=2230;w<=2310;w+=20)h("lamp",-10,w),h("lamp",10,w);l([[-60,1100],[60,1100]],10),o.push({x:128,z:990,t:"A"},{x:0,z:980,t:"B/E"},{x:-112,z:990,t:"D"}),r.push({x0:156,z0:935,x1:180,z1:985,name:"PIT 3"}),h("sign",-6.5,880,0),h("sign",6.5,880,0),u("guardrail",-18,18,1043.5,4),e.push({cx:0,cz:1038,yaw:0,hw:4,hl:4,y0:20,y1:21.6,thick:.4,surf:"wood",solid:!0,kind:"kicker"}),e.push({cx:0,cz:1103,yaw:0,hw:9,hl:25,y0:10,y1:0,thick:10,surf:"dirt",solid:!0,kind:"mound"});for(let[w,R,P,L]of[[-90,1140,-14,1170],[-90,1174,-14,1210],[14,1140,90,1170],[14,1174,90,1210]])c(w,R,P,L,9+m++*7919%4*4,"building");for(let w=1120;w<=1200;w+=20)h("lamp",-10,w),h("lamp",10,w);for(let w=880;w<=1040;w+=30)h("sign",140,w,Math.PI/2);c(vt.x0-10,vt.z0,vt.x0,vt.z1,40,"bound"),c(vt.x1,vt.z0,vt.x1+10,vt.z1,40,"bound"),c(vt.x0,vt.z1,vt.x1,vt.z1+10,40,"bound");let y=[{z:330,x0:-110,x1:100,name:"CP1",respawn:{x:0,z:338,yaw:0}},{z:625,x0:-110,x1:95,name:"CP2",respawn:{x:0,z:588,yaw:0}},{z:850,x0:vt.x0,x1:vt.x1,name:"CP3",respawn:{x:0,z:856,yaw:0}},{z:1170,x0:vt.x0,x1:vt.x1,name:"CP4",respawn:{x:0,z:1175,yaw:0}},{z:1750,x0:vt.x0,x1:vt.x1,name:"CP5",respawn:{x:6,z:1756,yaw:.75}},{z:2270,x0:vt.x0,x1:vt.x1,name:"GOAL",respawn:{x:0,z:2275,yaw:0}}],M=[];for(let w=0;w<8;w++)M.push({x:w%2?3.6:-3.6,z:2-Math.floor(w/2)*9,yaw:0});let S=(w,R,P,L,B=0,k=9,X=1.7,ee=3.2)=>{let le=Math.hypot(P,L);P/=le,L/=le;let ae=nn(w-P*k/2,R-L*k/2),ne=nn(w+P*k/2,R+L*k/2);e.push({cx:w,cz:R,yaw:Math.atan2(P,L),hw:ee,hl:k/2,y0:ae+.02,y1:ne+X,thick:.4,surf:"wood",solid:!0,kind:B?"roll":"kicker",roll:B})};S(-4.5,62,0,1,1),S(3.5,205,0,1,0),S(-3.5,262,0,1,-1),S(-66,482,0,1,1),S(-120,636,-1,0,-1),S(-150,804,1,0,1),S(150,955,.05,1,0,10,2.2),S(-30,1897,-1,.25,1),S(70,2022,.85,.5,-1),S(-62,2135,-.5,.75,0);let b=[];n.forEach((w,R)=>{for(let P=0;P<w.pts.length-1;P++)b.push({ri:R,i:P,ax:w.pts[P][0],az:w.pts[P][1],bx:w.pts[P+1][0],bz:w.pts[P+1][1],hw:w.w/2})});let E=(w,R)=>e.some(P=>{let L=Q0(P,w,R);return Math.abs(L.u)<P.hw+1&&Math.abs(L.v)<P.hl+1});n.forEach((w,R)=>{if(w.surf==="road")for(let P=0;P<w.pts.length-1;P++){let[L,B]=w.pts[P],[k,X]=w.pts[P+1],ee=Math.hypot(k-L,X-B),le=(k-L)/ee,ae=(X-B)/ee;for(let ne=3;ne<ee-1;ne+=4.2){let J=L+le*ne,$=B+ae*ne;if(!($<640||$>1050&&$<1262||$>2225))for(let V of[-1,1]){let q=w.w/2+.9,Y=J-ae*q*V,W=$+le*q*V;if(nn(Y,W)<-3||E(Y,W))continue;let N=!1;for(let A of b){if(A.ri===R&&A.i===P)continue;let F=A.ri===R?.4:2.2;if(Z0(Y,W,A.ax,A.az,A.bx,A.bz)<A.hw+F){N=!0;break}}N||i.push({type:"guardrail",x:Y,z:W,yaw:Math.atan2(-ae,le),rail:!0})}}}});let U=[];{let w=11,R=()=>(w=w*16807%2147483647)/2147483647,P=8;for(let L=640;L<vt.z1;L+=P)for(let B=vt.x0+4;B<vt.x1-4;B+=P){let k=B+(R()-.5)*P*.9,X=L+(R()-.5)*P*.9,ee=.75+R()*.65,le=R()*6.28,ae=R();if(X>1050&&X<1240||ae>ap(k,X)*.95)continue;let ne=nn(k,X);ne<-2.5||Math.max(Math.abs(nn(k+4,X)-ne),Math.abs(nn(k-4,X)-ne),Math.abs(nn(k,X+4)-ne),Math.abs(nn(k,X-4)-ne))>1.6||b.some($=>Z0(k,X,$.ax,$.az,$.bx,$.bz)<$.hw+3.5)||t.some($=>Math.abs(k-$.cx)<$.hw+3&&Math.abs(X-$.cz)<$.hl+3)||r.some($=>k>$.x0-4&&k<$.x1+4&&X>$.z0-4&&X<$.z1+4)||E(k,X)||U.push({x:k,y:ne,z:X,s:ee,r:le})}U.forEach((L,B)=>i.push({type:"tree",x:L.x,z:L.z,yaw:0,y:L.y-.5,ti:B}))}let _=[[{id:"A",risk:0,pts:[[0,10],[0,122],[-90,128],[-96,140],[-96,300],[-88,308],[0,310]]},{id:"B",risk:.5,pts:[[0,10],[0,132],[2.5,165],[3.8,180],[3.8,200],[-1,212],[-3.8,222],[-3.8,238],[1,248],[3.8,258],[3.8,266],[-1,274],[0,290],[0,310]]},{id:"D",risk:.3,pts:[[0,10],[0,110],[4,122],[16,127],[28,129],[33.5,136],[34,172],[37,179],[44,180],[55,180.5],[59.5,186],[60,232],[57,239],[50,240],[40,240],[35,244],[34,250],[34,300],[30,307],[20,309],[0,310]]}],[{id:"A",risk:0,pts:[[0,310],[0,394],[-8,400],[-56,400],[-62,408],[-62,560],[-54,568],[-4,568],[0,576],[0,632]]},{id:"B",risk:.7,need:"boost",boostFrom:372,pts:[[0,310],[0,418],[0,440],[3,470],[0,482],[-3.5,495],[0,508],[4,525],[0,546],[0,632]]},{id:"C",risk:.6,need:"boost",boostFrom:405,pts:[[0,310],[30,309],[44,310],[51,316],[52,334],[55,350],[56,362],[55,395],[53.5,410],[53.5,452],[54,490],[56,552],[56,590],[52,602],[20,612],[0,622],[0,632]]}],[{id:"A",risk:0,pts:[[0,632],[0,636],[-8,640],[-252,640],[-260,648],[-260,792],[-252,800],[-8,800],[0,808],[0,858]]},{id:"D",risk:.4,pts:[[0,632],[0,636],[8,640],[148,640],[170,652],[168,690],[182,712],[170,745],[176,778],[150,800],[8,800],[0,808],[0,858]]},{id:"E",risk:.8,need:"boost",boostFrom:650,pts:[[0,632],[0,690],[0,760],[0,858]]}],[{id:"A",risk:0,pts:[[0,858],[0,868],[20,875],[105,890],[140,920],[148,990],[125,1065],[50,1112],[10,1128],[0,1140],[0,1190]]},{id:"D",risk:.3,pts:[[0,858],[-20,864],[-70,876],[-98,918],[-76,948],[-100,982],[-78,1016],[-98,1054],[-55,1100],[-10,1128],[0,1140],[0,1190]]},{id:"BE",risk:.7,pts:[[0,858],[0,900],[0,1046],[0,1092],[0,1140],[0,1190]]}],[{id:"A",risk:0,pts:[[0,1190],...v,[10,1760]]},{id:"D",risk:.5,pts:[[0,1190],...x,[10,1760]]}],[{id:"A",risk:0,pts:[[10,1760],...g.slice(1,-1),[0,2290]]}]];return{roads:n,slabs:e,boxes:t,props:i,dirt:s,repair:r,decor:a,gates:y,grid:M,labels:o,routes:_,trees:U,shortcuts:[{entry:[0,400],inA:[0,418],outB:[0,546],exit:[0,560],out:[0,-1],label:"WALL"},{entry:[40,345],inA:[56,362],outB:[56,590],exit:[40,610],out:[0,-1],label:"JUMP"},{entry:[0,640],inA:[0,650],outB:[0,782],exit:[0,800],out:[0,-1],label:"JUMP"},{entry:[0,862],inA:[0,872],outB:[0,1046],exit:[0,1100],out:[0,-1],label:"CLIFF"},{entry:[0,1262],inA:[-42,1288],outB:[-24,1728],exit:[0,1750],out:[0,-1],label:"OLD ROAD"}],pickups:[{x:0,z:470,amount:.3},{x:0,z:520,amount:.3},{x:56,z:420,amount:.3},{x:0,z:960,amount:.3},{x:0,z:1020,amount:.3},{x:-10,z:1340,amount:.3},{x:2,z:1468,amount:.3},{x:6,z:1628,amount:.3}]}}var Ta=24,J0=(n,e)=>n*73856093^e*19349663,Ho=class{constructor(){this.m=new Map}add(e,t,i,s,r){for(let a=Math.floor(t/Ta);a<=Math.floor(s/Ta);a++)for(let o=Math.floor(i/Ta);o<=Math.floor(r/Ta);o++){let l=J0(a,o),c=this.m.get(l);c||this.m.set(l,c=[]),c.push(e)}}at(e,t){return this.m.get(J0(Math.floor(e/Ta),Math.floor(t/Ta)))||Qv}},Qv=[];function lh(n,e=0){let t=Math.abs(Math.cos(n.yaw||0)),i=Math.abs(Math.sin(n.yaw||0)),s=n.hw*t+n.hl*i+e,r=n.hw*i+n.hl*t+e;return[n.cx-s,n.cz-r,n.cx+s,n.cz+r]}function Q0(n,e,t){let i=Math.cos(n.yaw||0),s=Math.sin(n.yaw||0),r=e-n.cx,a=t-n.cz;return{u:r*i-a*s,v:r*s+a*i}}function lr(n,e,t){let i=Math.cos(n.yaw||0),s=Math.sin(n.yaw||0);return{x:n.cx+e*i+t*s,z:n.cz-e*s+t*i}}function hh(n,e){return ch(n.y0,n.y1,(e+n.hl)/(2*n.hl))}function eg(n="touge"){let e=n==="city",t=e?K0():$v();$0=e?ip:rp;let i={...t,stage:e?"city":"touge",terrain:e?ip:rp,bounds:t.bounds||vt,fallY:t.fallY??wa.fallY,gates:ty(t.gates),laps:t.laps||1,destroyed:new Set,destroyedAt:new Map,time:0,objects:[],colliders:[],slabGrid:new Ho,colGrid:new Ho,roadGrid:new Ho,segs:[]};for(let r of t.roads)for(let a=0;a<r.pts.length-1;a++){let[o,l]=r.pts[a],[c,h]=r.pts[a+1],u={ax:o,az:l,bx:c,bz:h,hw:r.w/2,surf:r.surf};i.segs.push(u),i.roadGrid.add(u,Math.min(o,c)-r.w,Math.min(l,h)-r.w,Math.max(o,c)+r.w,Math.max(l,h)+r.w)}t.slabs.forEach((r,a)=>{r.id="slab"+a;let o=lh(r);i.slabGrid.add(r,...o)});for(let r of t.boxes){let a={...r,y1:r.y0+r.h};i.colliders.push(a),i.colGrid.add(a,...lh(a,1))}for(let r of t.slabs)if(r.solid){let a={cx:r.cx,cz:r.cz,yaw:r.yaw,hw:r.hw,hl:r.hl,slab:r,kind:"slab"};i.colliders.push(a),i.colGrid.add(a,...lh(a,1))}t.props.forEach((r,a)=>{let o=np[r.type],l=`${r.type}${a}`,c=r.y??i.terrain(r.x,r.z),h={id:l,type:r.type,cx:r.x,cz:r.z,yaw:r.yaw||0,hw:o.w/2,hl:o.l/2,y0:c,y1:c+o.h,def:o};r.ti!=null&&(h.ti=r.ti,t.trees[r.ti].id=l),i.objects.push(h),i.colGrid.add(h,...lh(h,1))}),i.objectById=new Map(i.objects.map(r=>[r.id,r]));let s=i.objects.find(r=>r.type==="tower");for(let r of t.slabs)r.needs==="tower"&&(r.needs=s.id);return i.isBroken=r=>i.destroyed.has(r),i.slabActive=r=>!r.needs||i.destroyed.has(r.needs)&&i.time-(i.destroyedAt.get(r.needs)??-99)>=Yv,i.breakObj=r=>{i.destroyed.has(r)||(i.destroyed.add(r),i.destroyedAt.set(r,i.time))},i.groundAt=(r,a,o=1e9)=>{let l=i.terrain(r,a),c=null,h=null;for(let u of i.slabGrid.at(r,a)){if(!i.slabActive(u))continue;let d=Q0(u,r,a);if(Math.abs(d.u)>u.hw||Math.abs(d.v)>u.hl)continue;let p=hh(u,d.v);p>l&&p<=o+j0.stepUp&&(l=p,c=u.surf,h=u)}return c||(c=i.surfaceAt(r,a)),{h:l,surf:c,slab:h}},i.surfaceAt=(r,a)=>{let o=null;for(let l of i.roadGrid.at(r,a))if(ey(r,a,l)<=l.hw){if(l.surf==="road")return"road";o=l.surf}if(o)return o;for(let l of t.dirt)if(r>=l.x0&&r<=l.x1&&a>=l.z0&&a<=l.z1)return"dirt";return t.ground?t.ground(r,a):a<625?"dirt":"grass"},i.inRepair=(r,a)=>t.repair.find(o=>r>=o.x0&&r<=o.x1&&a>=o.z0&&a<=o.z1)||null,i.nearby=(r,a)=>i.colGrid.at(r,a),i.reset=()=>{i.destroyed.clear(),i.destroyedAt.clear(),i.time=0},i}function ey(n,e,t){let i=t.bx-t.ax,s=t.bz-t.az,r=i*i+s*s,a=r?((n-t.ax)*i+(e-t.az)*s)/r:0;return a=Math.max(0,Math.min(1,a)),Math.hypot(n-(t.ax+i*a),e-(t.az+s*a))}function ty(n){return n.map(e=>{if(e.a){let s=(e.a.x+e.b.x)/2,r=(e.a.z+e.b.z)/2;return{...e,cx:s,cz:r,len:Math.hypot(e.b.x-e.a.x,e.b.z-e.a.z)}}let t={x:e.x0,z:e.z},i={x:e.x1,z:e.z};return{...e,a:t,b:i,nx:0,nz:1,cx:e.respawn.x,cz:e.z,len:e.x1-e.x0}})}var Pi=new ye,Pt=class{constructor(){this.pos=[],this.nor=[],this.col=[],this.uv=[]}hexa(e,t,{top:i=null,uvScale:s=0,shade:r=!0,noTop:a=!1,noBottom:o=!1}={}){let l=[[4,5,6,7,"top"],[3,2,1,0,"bottom"],[0,1,5,4,"s"],[1,2,6,5,"s"],[2,3,7,6,"s"],[3,0,4,7,"s"]];for(let[c,h,u,d,p]of l){if(a&&p==="top"||o&&p==="bottom")continue;let m=p==="top"&&i!=null?i:t;Pi.set(m),r&&p==="s"&&Pi.multiplyScalar(.86),p==="bottom"&&Pi.multiplyScalar(.6);let f=e[c],v=e[h],x=e[u],g=e[d],y=new D().crossVectors(new D(x[0]-f[0],x[1]-f[1],x[2]-f[2]),new D(v[0]-f[0],v[1]-f[1],v[2]-f[2])).normalize(),M=Math.hypot(v[0]-f[0],v[1]-f[1],v[2]-f[2]),S=Math.hypot(g[0]-f[0],g[1]-f[1],g[2]-f[2]),b=s&&p==="s"?M/s:0,E=s&&p==="s"?S/s:0,U=p==="s"&&s?[[0,0],[b,0],[b,E],[0,E]]:[[.01,.01],[.01,.01],[.01,.01],[.01,.01]];for(let[_,T]of[[0,f],[2,x],[1,v],[0,f],[3,g],[2,x]])this.pos.push(...T),this.nor.push(y.x,y.y,y.z),this.col.push(Pi.r,Pi.g,Pi.b),this.uv.push(...U[_])}}box(e,t,i,s,r,a,o,l=0,c){let h=Math.cos(l),u=Math.sin(l),d=(p,m,f)=>[e+p*h+f*u,t+m,i-p*u+f*h];this.hexa([d(-s,-r,-a),d(s,-r,-a),d(s,-r,a),d(-s,-r,a),d(-s,r,-a),d(s,r,-a),d(s,r,a),d(-s,r,a)],o,c)}tri(e,t,i,s){Pi.set(s);let r=new D().crossVectors(new D(t[0]-e[0],t[1]-e[1],t[2]-e[2]),new D(i[0]-e[0],i[1]-e[1],i[2]-e[2])).normalize();for(let a of[e,t,i])this.pos.push(...a),this.nor.push(r.x,r.y,r.z),this.col.push(Pi.r,Pi.g,Pi.b),this.uv.push(.01,.01)}geometry(){let e=new Ye;return e.setAttribute("position",new be(this.pos,3)),e.setAttribute("normal",new be(this.nor,3)),e.setAttribute("color",new be(this.col,3)),e.setAttribute("uv",new be(this.uv,2)),e.computeBoundingSphere(),e}get empty(){return this.pos.length===0}};function Go(n,{bg:e="#f2c230",fg:t="#14161a",w:i=256,h:s=96,font:r="bold 44px sans-serif",stripes:a=!1}={}){let o=document.createElement("canvas");o.width=i,o.height=s;let l=o.getContext("2d");if(l.fillStyle=e,l.fillRect(0,0,i,s),a){l.fillStyle="#14161a";for(let u=-s;u<i;u+=36)l.beginPath(),l.moveTo(u,s),l.lineTo(u+18,s),l.lineTo(u+18+s,0),l.lineTo(u+s,0),l.fill();l.fillStyle=e,l.fillRect(10,14,i-20,s-28)}l.fillStyle=t,l.font=r,l.textAlign="center",l.textBaseline="middle";let c=Number((r.match(/(\d+)px/)||[0,40])[1]);for(;l.measureText(n).width>i*.9&&c>12;)c-=2,l.font=r.replace(/\d+px/,c+"px");l.fillText(n,i/2,s/2+2);let h=new Tt(o);return h.colorSpace=je,h}function tg(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Tt(n)}var ny=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,iy=Math.min(screen.width,screen.height)<700,sy=ny||iy,Vt=sy?{pixelRatio:Math.min(devicePixelRatio,1.25),shadow:1024,shadowRange:45,trees:.45,tufts:.3,bloom:!1,msaa:0,tex:"tex512",sky:"sky_1k",carLite:!0}:{pixelRatio:Math.min(devicePixelRatio,1.75),shadow:2048,shadowRange:70,trees:1,tufts:1,bloom:!0,msaa:4,tex:"tex",sky:"sky_2k",carLite:!1};var Vo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ms=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ry=new Ei(-1,1,1,-1,0,1),op=class extends Ye{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}},ay=new op,Ea=class{constructor(e){this._mesh=new ue(ay,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ry)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ng={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Wo=class n extends Ms{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,a,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Qt(r,a,{type:vn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Qt(r,a,{type:vn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=ng;this.highPassUniforms=or.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=or.clone(Vo.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:Vo.vertexShader,fragmentShader:Vo.fragmentShader,premultipliedAlpha:!0,blending:er,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Ct,this._fsQuad=new Ea(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Wo.BlurDirectionX=new ce(1,0);Wo.BlurDirectionY=new ce(0,1);var lp=new Map,ly={asphalt_02:"#5b5a55",concrete_panels:"#97846e",concrete_wall_004:"#757364",corrugated_iron:"#aab3ae",dirt:"#63533e",forest_leaves_02:"#8e713a",japanese_cedar_bark:"#483523",plastered_wall_04:"#8d8a87",rectangular_facade_tiles:"#59564f",red_brick_03:"#6a544b",rock_face:"#614631",rocky_terrain_02:"#504f1b"},cy={nor_gl:"#8080ff",rough:"#d0d0d0"},cp=[],Aa={queued:0,loaded:0,failed:0,done:!1},sg,ig=!1,hy=new Promise(n=>{sg=n}),rg=()=>hy;function uy(n){let e=document.createElement("canvas");e.width=e.height=2;let t=e.getContext("2d");return t.fillStyle=n,t.fillRect(0,0,2,2),e}function hp(n,e){let t=new kt(uy(e));return t.needsUpdate=!0,cp.push({t,url:n}),Aa.queued++,t}function dy({t:n,url:e}){return new Promise(t=>{let i=new Image;i.onerror=()=>{Aa.failed++,t()},i.onload=()=>{let s=()=>{n.dispose(),n.image=i,n.needsUpdate=!0,Aa.loaded++,t()};i.decode?i.decode().then(s,s):s()},i.src=e})}function ag(){if(ig)return Promise.resolve();ig=!0,sg();let n=async()=>{for(;cp.length;)await dy(cp.shift())},e=Promise.all(Array.from({length:6},n));return Promise.race([e,new Promise(t=>setTimeout(t,25e3))]).then(()=>{Aa.done=!0})}var og=8;function lg(n){og=Math.min(8,n.capabilities.getMaxAnisotropy())}function uh(n,e,t=!1){let i=n+e;if(lp.has(i))return lp.get(i);let s=hp(`assets/${Vt.tex}/${n}_${e}.webp`,cy[e]||ly[n]||"#808080");return s.wrapS=s.wrapT=un,s.anisotropy=og,t&&(s.colorSpace=je),lp.set(i,s),s}function Xo(n,{repeat:e=1,color:t=16777215,roughness:i=1,normalScale:s=1,...r}={}){let a=uh(n,"diff",!0),o=uh(n,"nor_gl"),l=uh(n,"rough");return new Ue({map:a,normalMap:o,roughnessMap:l,roughness:i,color:t,normalScale:new ce(s,s),...r})}var py=[.5546,.742,.3767];function cg(n,e,t,i,s){new Ks().load(`assets/hdri/${Vt.sky}.webp`,r=>{r.mapping=fa,r.colorSpace=je;let a=new ba(n);e.environment=a.fromEquirectangular(r).texture,e.background=r,e.backgroundIntensity=1,e.environmentIntensity=1,a.dispose();let o=new D(...py).normalize();t.userData.dir=o,i&&i(o)},void 0,()=>{s&&s()})}var qw={uniforms:{tDiffuse:{value:null},speed:{value:0},vignette:{value:.32},sat:{value:1.08},contrast:{value:1.04},hurt:{value:0}},vertexShader:`varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:["uniform sampler2D tDiffuse;","uniform float speed;","uniform float vignette;","uniform float sat;","uniform float contrast;","uniform float hurt;","varying vec2 vUv;","void main() {","  vec2 c = vUv - 0.5;","  vec4 col = texture2D(tDiffuse, vUv);","  if (speed > 0.01) {","    float k = speed * smoothstep(0.12, 0.7, length(c));","    vec4 acc = col;","    for (int i = 1; i <= 6; i++) { acc += texture2D(tDiffuse, vUv - c * k * 0.02 * float(i)); }","    col = acc / 7.0;","  }","  float l = dot(col.rgb, vec3(0.2126, 0.7152, 0.0722));","  col.rgb = mix(vec3(l), col.rgb, sat);","  col.rgb = (col.rgb - 0.18) * contrast + 0.18;","  col.rgb *= 1.0 - vignette * smoothstep(0.35, 0.85, length(c * vec2(1.25, 1.0)));","  col.rgb = mix(col.rgb, col.rgb * vec3(1.25, 0.55, 0.5), hurt * smoothstep(0.25, 0.8, length(c)));","  gl_FragColor = col;","}"].join(`
`)};function cr(n,e=.25){return n.onBeforeCompile=t=>{t.uniforms.boxScale={value:e},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float boxScale;`).replace("#include <uv_vertex>",["#include <uv_vertex>","vec4 bwp = vec4(position, 1.0);","#ifdef USE_INSTANCING","bwp = instanceMatrix * bwp;","#endif","bwp = modelMatrix * bwp;","vec3 bnr = normal;","#ifdef USE_INSTANCING","bnr = mat3(instanceMatrix) * bnr;","#endif","bnr = abs(normalize(mat3(modelMatrix) * bnr));","vec2 buv = bnr.y > max(bnr.x, bnr.z) ? bwp.xz : (bnr.x > bnr.z ? vec2(bwp.z, bwp.y) : bwp.xy);","buv *= boxScale;","#ifdef USE_MAP","vMapUv = buv;","#endif","#ifdef USE_NORMALMAP","vNormalMapUv = buv;","#endif","#ifdef USE_ROUGHNESSMAP","vRoughnessMapUv = buv;","#endif"].join(`
`))},n.customProgramCacheKey=()=>"box"+e,n}function hg(){let n=i=>uh(i,"diff",!0),e=new Ue({roughness:.95,metalness:0,vertexColors:!1}),t={tGrass:n("rocky_terrain_02"),tDirt:n("forest_leaves_02"),tRock:n("rock_face"),tCity:n("concrete_wall_004"),tSoil:n("dirt")};return e.onBeforeCompile=i=>{for(let[s,r]of Object.entries(t))i.uniforms[s]={value:r};i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat;
attribute float soil;
varying vec4 vSplat;
varying float vSoil;
varying vec3 vTW;
varying vec3 vTN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSplat = splat; vSoil = soil;
vTW = (modelMatrix * vec4(transformed, 1.0)).xyz;
vTN = normalize(mat3(modelMatrix) * objectNormal);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tGrass, tDirt, tRock, tCity, tSoil;
varying vec4 vSplat;
varying float vSoil;
varying vec3 vTW;
varying vec3 vTN;
vec3 tri(sampler2D s, vec3 p, vec3 n, float k) { vec3 w = pow(abs(n), vec3(4.0)); w /= (w.x + w.y + w.z); return texture2D(s, p.zy * k).rgb * w.x + texture2D(s, p.xz * k).rgb * w.y + texture2D(s, p.xy * k).rgb * w.z; }`).replace("#include <map_fragment>",["vec2 wp = vTW.xz;","vec3 g = mix(texture2D(tGrass, wp * 0.21).rgb, texture2D(tGrass, wp * 0.043).rgb, 0.45) * vec3(1.0, 1.02, 0.95);","vec3 d = mix(texture2D(tDirt, wp * 0.17).rgb, texture2D(tDirt, wp * 0.05).rgb, 0.4) * vec3(0.8, 0.85, 0.7);","vec3 r = tri(tRock, vTW, vTN, 0.06);","vec3 c = texture2D(tCity, wp * 0.12).rgb * vec3(0.92, 0.92, 0.95);","vec3 so = texture2D(tSoil, wp * 0.15).rgb;","vec4 w = vSplat / max(1e-3, vSplat.x + vSplat.y + vSplat.z + vSplat.w);","vec3 col = g * w.x + d * w.y + r * w.z + c * w.w;","col = mix(col, so, vSoil);","float mac = texture2D(tGrass, wp * 0.004).g;","col *= 0.8 + mac * 0.45;","diffuseColor.rgb *= col;"].join(`
`)).replace("#include <roughnessmap_fragment>","float roughnessFactor = roughness - vSplat.w * 0.12;")},e.customProgramCacheKey=()=>"terrain",e}function fy(){let t=document.createElement("canvas");t.width=512,t.height=512;let i=t.getContext("2d"),s=7,r=()=>(s=s*16807%2147483647)/2147483647,a=512/2,o=512*.5,l=512*.46,c=512*.44;for(let u=0;u<900;u++){let d=r()*Math.PI*2,p=Math.sqrt(r()),m=a+Math.cos(d)*l*p,f=o+Math.sin(d)*c*p,v=p,x=10+r()*18*(1.1-v*.5),g=.45+.4*(1-(f-(o-c))/(2*c))+.2*((m-a)/l)*.5+(r()-.5)*.18-(1-v)*.12,y=52*g+10,M=92*g+22,S=36*g+8;i.fillStyle=`rgb(${y|0},${M|0},${S|0})`,i.beginPath(),i.ellipse(m,f,x,x*.7,r()*3,0,Math.PI*2),i.fill()}i.strokeStyle="rgba(70,55,40,0.8)",i.lineWidth=5;for(let u=0;u<5;u++){let d=-Math.PI/2+(u-2)*.45;i.beginPath(),i.moveTo(a,512),i.quadraticCurveTo(a+Math.cos(d)*40,o+60,a+Math.cos(d)*l*.55,o+Math.sin(d)*c*.3),i.stroke()}let h=new Tt(t);return h.colorSpace=je,h.anisotropy=4,h}function my(){let n=[],e=[],t=[],i=[];for(let r=0;r<3;r++){let a=r*Math.PI/3,o=Math.cos(a),l=Math.sin(a),c=n.length/3,h=[[-.5,0],[.5,0],[.5,1],[-.5,1]];for(let[u,d]of h){n.push(u*o,d,u*l);let p=new D(u*o*.35,1,u*l*.35).normalize();e.push(p.x,p.y,p.z),t.push(u+.5,d)}i.push(c,c+1,c+2,c,c+2,c+3,c,c+2,c+1,c,c+3,c+2)}let s=new Ye;return s.setAttribute("position",new be(n,3)),s.setAttribute("normal",new be(e,3)),s.setAttribute("uv",new be(t,2)),s.setIndex(i),s}function ug(n,e){let t=e.length,i=new Et(.16,.34,1,7,1,!0).translate(0,.5,0),s=hp(`assets/${Vt.tex}/japanese_cedar_bark_diff.webp`,"#483523");s.colorSpace=je,s.wrapS=s.wrapT=un,s.repeat.set(1,6);let r=new Ue({map:s,roughness:.95,color:12101784}),a=new Ue({map:fy(),alphaTest:.45,alphaToCoverage:Vt.msaa>0,side:ai,roughness:.9,metalness:0}),o=new si(i,r,t),l=new si(my(),a,t),c=new Ce,h=new ct,u=new D,d=new D,p=new ye;e.forEach((x,g)=>{let y=9.5*x.s;h.setFromAxisAngle(new D(0,1,0),x.r),c.compose(d.set(x.x,x.y-.3,x.z),h,u.set(x.s*.8,y*.6,x.s*.8)),o.setMatrixAt(g,c);let M=y*.8;c.compose(d.set(x.x,x.y+y*.3,x.z),h,u.set(M,y*.7,M)),l.setMatrixAt(g,c);let S=.78+g*7919%100/100*.38;l.setColorAt(g,p.setRGB(S*(.9+g*31%7*.03),S,S*.85))});for(let x of[o,l])x.castShadow=!0,x.receiveShadow=!0,x.instanceMatrix.needsUpdate=!0,n.add(x);l.instanceColor.needsUpdate=!0,l.frustumCulled=o.frustumCulled=!1;let m=o.instanceMatrix.array.slice(),f=l.instanceMatrix.array.slice(),v=new Ce().makeScale(0,0,0);return{trunks:o,crowns:l,hide(x){o.setMatrixAt(x,v),l.setMatrixAt(x,v),o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0},show(x){for(let[g,y]of[[o,m],[l,f]])g.instanceMatrix.array.set(y.subarray(x*16,x*16+16),x*16),g.instanceMatrix.needsUpdate=!0},reset(){o.instanceMatrix.array.set(m),l.instanceMatrix.array.set(f),o.instanceMatrix.needsUpdate=l.instanceMatrix.needsUpdate=!0},single(x){let g=new tt,y=new Ce,M=new D,S=new ct,b=new D;o.getMatrixAt(x,y),y.decompose(M,S,b);let E=M.clone();for(let U of[o,l]){U.getMatrixAt(x,y);let _=new ue(U.geometry,U.material);y.decompose(_.position,_.quaternion,_.scale),_.position.sub(E),_.castShadow=!0,g.add(_)}return g.position.copy(E),g}}}function gy(){let n=document.createElement("canvas");n.width=256,n.height=128;let e=n.getContext("2d"),t=9,i=()=>(t=t*16807%2147483647)/2147483647;for(let r=0;r<260;r++){let a=i()*256,o=40+i()*85,l=(i()-.5)*30,c=.55+i()*.45;e.strokeStyle=`rgb(${60*c|0},${105*c+20|0},${38*c|0})`,e.lineWidth=1.5+i()*2,e.beginPath(),e.moveTo(a,128),e.quadraticCurveTo(a+l*.3,128-o*.6,a+l,128-o),e.stroke()}let s=new Tt(n);return s.colorSpace=je,s}function dg(n,e){let t=[],i=[],s=[],r=[];for(let p=0;p<2;p++){let m=p*Math.PI/2,f=Math.cos(m),v=Math.sin(m),x=t.length/3;for(let[g,y]of[[-.5,0],[.5,0],[.5,1],[-.5,1]])t.push(g*f,y,g*v),i.push(g+.5,y),s.push(0,1,0);r.push(x,x+1,x+2,x,x+2,x+3)}let a=new Ye;a.setAttribute("position",new be(t,3)),a.setAttribute("uv",new be(i,2)),a.setAttribute("normal",new be(s,3)),a.setIndex(r);let o=new Ue({map:gy(),alphaTest:.4,alphaToCoverage:Vt.msaa>0,side:ai,roughness:1}),l=new si(a,o,e.length),c=new Ce,h=new ct,u=new D,d=new D;return e.forEach((p,m)=>{h.setFromAxisAngle(new D(0,1,0),p.r),c.compose(u.set(p.x,p.y-.05,p.z),h,d.set(p.s*1.6,p.s,p.s*1.6)),l.setMatrixAt(m,c)}),l.receiveShadow=!0,l.frustumCulled=!1,n.add(l),l}var ht=6,Qi=7.2,ln=4.5,pg={tiles:["rectangular_facade_tiles",2],panels:["concrete_panels",4],brick:["red_brick_03",1.2],plaster:["plastered_wall_04",3.2],iron:["corrugated_iron",1.12]},xy={done:!1};function fg(){let n=Vt.tex==="tex512"?1024:2048,e=n/4,t=n/4,i=()=>{let R=document.createElement("canvas");return R.width=R.height=n,R},s={a:i(),n:i(),r:i(),e:i()},r={a:s.a.getContext("2d"),n:s.n.getContext("2d"),r:s.r.getContext("2d"),e:s.e.getContext("2d")},a={a:new Tt(s.a),n:new Tt(s.n),r:new Tt(s.r),e:new Tt(s.e)};a.a.colorSpace=je,a.e.colorSpace=je;for(let R of Object.values(a))R.anisotropy=8,R.generateMipmaps=!0,R.minFilter=Vn;let o=null;f();let l=(R,P)=>new Promise(L=>{let B=`assets/${Vt.tex}/${R}_${P}.webp`,k=new Image;k.onload=()=>L(k),k.onerror=()=>L(null),k.src=B});rg().then(()=>Promise.all(Object.entries(pg).map(async([R,[P]])=>[R,{a:await l(P,"diff"),n:await l(P,"nor_gl"),r:await l(P,"rough")}])).then(R=>{o=Object.fromEntries(R),f();for(let P of Object.values(a))P.needsUpdate=!0;xy.done=!0}));function c(R,P,L,B,k=1){let X=R*e,ee=n-(P+1)*t;for(let le of"anre"){let ae=r[le];ae.setTransform(e*k/L,0,0,-t/B,X,ee+t),ae.save(),ae.beginPath(),ae.rect(0,0,L,B),ae.clip()}}function h(){for(let R of"anre")r[R].restore(),r[R].setTransform(1,0,0,1,0,0)}function u(R,P,L,B,k,X,ee=220,le=null){let ae=o&&o[R],ne=pg[R][1];for(let J of"anr"){let $=r[J],V=ae&&ae[J];if(!V){$.fillStyle=J==="a"?X:J==="n"?"rgb(128,128,255)":`rgb(${ee},${ee},${ee})`,$.fillRect(P,L,B,k);continue}$.save(),$.beginPath(),$.rect(P,L,B,k),$.clip();for(let q=L;q<L+k;q+=ne)for(let Y=P;Y<P+B;Y+=ne)$.save(),$.translate(Y,q+ne),$.scale(1,-1),$.drawImage(V,0,0,ne,ne),$.restore();$.restore()}if(le){let J=r.a;J.save(),J.globalCompositeOperation="multiply",J.fillStyle=le,J.fillRect(P,L,B,k),J.restore()}r.e.fillStyle="#000",r.e.fillRect(P,L,B,k)}function d(R,P,L,B,{frame:k="#4d535b",glass:X=["#6c8196","#1e2834"],depth:ee=.12,lit:le="#ffd9a0",mull:ae=!0}={}){let ne=r.a,J=r.n,$=r.r,V=r.e,q=ne.createLinearGradient(0,P+B,0,P);q.addColorStop(0,X[0]),q.addColorStop(1,X[1]),ne.fillStyle=q,ne.fillRect(R,P,L,B),J.fillStyle="rgb(128,128,255)",J.fillRect(R,P,L,B),$.fillStyle="rgb(18,18,18)",$.fillRect(R,P,L,B),V.fillStyle=le,V.fillRect(R,P,L,B);let Y=ee;J.fillStyle="rgb(224,128,190)",J.fillRect(R,P,Y,B),J.fillStyle="rgb(32,128,190)",J.fillRect(R+L-Y,P,Y,B),J.fillStyle="rgb(128,32,190)",J.fillRect(R,P+B-Y,L,Y),J.fillStyle="rgb(128,224,190)",J.fillRect(R,P,L,Y*1.4),ne.fillStyle="rgba(0,0,0,0.35)",ne.fillRect(R,P+B-Y*2,L,Y*2),ne.fillStyle=k,ne.fillRect(R-.06,P-.06,L+.12,.08),ne.fillRect(R-.06,P+B-.02,L+.12,.08),ne.fillRect(R-.06,P,.08,B),ne.fillRect(R+L-.02,P,.08,B),ae&&(ne.fillRect(R+L/2-.03,P,.06,B),V.fillStyle="#000",V.fillRect(R+L/2-.03,P,.06,B)),$.fillStyle="rgb(90,90,90)",$.fillRect(R+L/2-.03,P,ae?.06:0,B)}function p(R,P,L,B,k,X="rgb(128,200,220)"){r.a.fillStyle=k,r.a.fillRect(R,P,L,B),r.n.fillStyle=X,r.n.fillRect(R,P+B-.05,L,.05),r.e.fillStyle="#000",r.e.fillRect(R,P,L,B)}function m(R,P,L,B,k,{vertical:X=!1,glow:ee=!0,font:le="900"}={}){for(let ae of ee?"ae":"a"){let ne=r[ae];ne.save(),ne.scale(1,-1),ne.fillStyle=k,ne.font=`${le} ${B}px "Hiragino Sans","Noto Sans JP",sans-serif`,ne.textAlign="center",ne.textBaseline="middle",X?[...R].forEach((J,$)=>ne.fillText(J,P,-(L-$*B*1.05))):ne.fillText(R,P,-L),ne.restore()}}function f(){for(let R of"anre")r[R].setTransform(1,0,0,1,0,0),r[R].fillStyle=R==="n"?"rgb(128,128,255)":"#000",r[R].fillRect(0,0,n,n);c(0,0,ht,Qi),u("panels",0,0,ht,Qi,"#b9b6ae",200,"#e6e2da");for(let R=0;R<2;R++)for(let P=0;P<2;P++)d(P*3+.35,R*3.6+.95,2.3,2.2,{glass:["#7d93a8","#26313d"]});for(let R=0;R<2;R++)p(0,R*3.6+3.5,ht,.1,"rgba(70,70,70,0.35)");h(),c(1,0,ht,Qi),u("tiles",0,0,ht,Qi,"#c9b39a",210);for(let R=0;R<2;R++)for(let P=0;P<2;P++){d(P*3+.5,R*3.6+1.25,2,1.9,{frame:"#d8d8d8",glass:["#8aa0b2","#2c3640"]}),p(P*3+.15,R*3.6+.2,2.7,.18,"#d9d6cf");let L=r.a;L.fillStyle="rgba(70,78,88,0.85)",L.fillRect(P*3+.15,R*3.6+1.15,2.7,.06);for(let B=0;B<=2.7;B+=.15)L.fillRect(P*3+.15+B,R*3.6+.38,.025,.8)}h(),c(2,0,ht,Qi),u("panels",0,0,ht,Qi,"#5c6670",120,"#5d6873");for(let R=0;R<2;R++)for(let P=0;P<4;P++)d(P*1.5+.04,R*3.6+.55,1.42,2.95,{frame:"#a9b1ba",glass:["#9fb6c9","#33465a"],depth:.04,mull:!1});h(),c(3,0,ht,Qi),u("brick",0,0,ht,Qi,"#8a4a38",230);for(let R=0;R<2;R++)for(let P=0;P<2;P++)d(P*3+.85,R*3.6+.9,1.3,2.1,{frame:"#e8e4dc",glass:["#7a8c9a","#232c35"],depth:.16}),p(P*3+.7,R*3.6+.75,1.6,.14,"#d9d2c4");h(),c(0,1,ht,ln),u("plaster",0,0,ht,ln,"#cfc8bc",220),d(.3,.05,5.4,3.1,{frame:"#3a3f46",glass:["#9fb0bd","#3a4652"],lit:"#6a5638",depth:.06}),p(0,3.45,ht,.8,"#1f5d8c"),m("クリーニング",3,3.85,.46,"#ffffff"),h(),c(1,1,ht,ln),u("plaster",0,0,ht,ln,"#bdb7ad",220),r.a.save(),r.a.beginPath(),r.a.rect(.3,0,5.4,3.3),r.a.clip(),r.n.save(),r.n.beginPath(),r.n.rect(.3,0,5.4,3.3),r.n.clip(),u("iron",.3,0,5.4,3.3,"#9aa0a6",150,"#c4c8cc"),r.a.restore(),r.n.restore(),p(.2,3.3,5.6,.25,"#7b8086"),p(0,3.6,ht,.75,"#3b3230"),m("酒 まるや",3,3.98,.48,"#f2e2b8"),h(),c(2,1,ht,ln),u("panels",0,0,ht,ln,"#8d8a84",160,"#9a968e"),d(.6,.05,4.8,3.6,{frame:"#20242a",glass:["#b4c2cc","#46525e"],lit:"#6e6250",depth:.08}),p(.6,3.75,4.8,.12,"#c9c4ba"),h(),c(3,1,ht,ln),u("brick",0,0,ht,ln,"#7d4535",230),d(.5,.05,5,2.9,{frame:"#2e3a2c",glass:["#a5b4b8","#3d4848"],lit:"#6f5432",depth:.08});for(let R=0;R<10;R++)p(R*.6,3.05,.6,.85,R%2?"#f2efe6":"#2f7a4a","rgb(128,190,230)");m("CAFE",3,4.15,.36,"#2f7a4a",{glow:!1}),h(),c(0,2,ht,ln),u("plaster",0,0,ht,ln,"#eeeeea",230),d(.25,.05,5.5,3,{frame:"#cfd3d6",glass:["#c8d6de","#55636e"],lit:"#e8e0c8",depth:.05}),p(0,3.2,ht,.22,"#3a8a4a"),p(0,3.42,ht,.1,"#e07a2a"),m("まちマート",3,3.95,.42,"#3a8a4a",{glow:!1}),h(),c(1,2,ht,ln),u("tiles",0,0,ht,ln,"#d8d2c6",220),d(.4,.05,5.2,3,{frame:"#5c6266",glass:["#b0c0c8","#40505a"],lit:"#d8d0b0",depth:.06}),p(0,3.35,ht,.85,"#1d7a5a"),m("くすり",3,3.78,.52,"#ffffff"),h(),c(2,2,ht,ln),u("plaster",0,0,ht,ln,"#a89276",200),d(.4,.05,1.5,2.6,{frame:"#3b2a1c",glass:["#7a5a3a","#2b1c12"],lit:"#8a6232",depth:.1}),d(2.3,.9,3.3,1.8,{frame:"#3b2a1c",glass:["#a59a88","#3a3228"],lit:"#7a5a30",depth:.1});for(let R=0;R<6;R++)p(2.2+R*.6,2.85,.6,.55,R%2?"#7a1f2a":"#8f2a34");m("喫茶 ひだまり",3.9,3.9,.38,"#3b2a1c",{glow:!1}),h(),c(3,2,ht,ln),u("panels",0,0,ht,ln,"#2c2c2e",120,"#3a3a3c"),d(.6,.05,4.8,3.2,{frame:"#111214",glass:["#c4ccd2","#4a525a"],lit:"#e6dcc8",depth:.06}),m("HAIR  nico",3,3.85,.34,"#f2f2f2",{font:"300"}),h(),c(0,3,1,4),p(0,0,1,4,"#c8102e"),r.e.fillStyle="#5a0010",r.e.fillRect(0,0,1,4),m("ホテル",.5,3.35,.62,"#fff4d8",{vertical:!0}),h(),c(1,3,1,4),p(0,0,1,4,"#13324f"),r.e.fillStyle="#04101c",r.e.fillRect(0,0,1,4),m("居酒屋",.5,3.35,.62,"#ffd23a",{vertical:!0}),h(),c(2,3,2,1,2),p(0,0,2,1,"#111418"),r.e.fillStyle="#060708",r.e.fillRect(0,0,2,1),p(.04,.06,1.92,.88,"#ff5a1f"),m("頭上注意 ベランダ点検中",1,.62,.15,"#ffffff"),m("24H 駐車場 P",1,.3,.17,"#ffd23a"),h()}let v=new Ue({map:a.a,normalMap:a.n,roughnessMap:a.r,emissiveMap:a.e,emissive:16777215,emissiveIntensity:.28,vertexColors:!0,roughness:1,metalness:0});v.onBeforeCompile=R=>{R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 fac;
attribute float fseed;
varying vec4 vFac;
varying float vSeed;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vFac = fac; vSeed = fseed;
#ifdef USE_NORMALMAP
vNormalMapUv = fac.xy;
#endif`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vFac;
varying float vSeed;
vec2 fUv; vec2 fGx; vec2 fGy; float fLit;
float fHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("void main() {",`void main() {
  {
    float st = floor(vFac.z + 0.5);
    vec2 cs = vec2(0.25, 0.25);
    vec2 rep = vFac.xy, local; vec2 org; vec2 size = cs;
    fLit = 1.0;
    if (vFac.w > 0.5) {
      // 看板
      local = clamp(rep, 0.004, 0.996);
      if (st < 1.5) org = vec2(st, 3.0) * cs; else { org = vec2(0.5, 0.75); size = vec2(0.5, 0.25); }
    } else if (rep.y < 1.0) {
      // 1階は区画（6m）ごとに違う店にする（同じ看板が並ばないように）
      float shop = floor(fHash(vec2(floor(rep.x), vSeed * 31.0)) * 7.999);
      local = vec2(fract(rep.x), clamp(rep.y, 0.0, 1.0)); org = vec2(mod(shop, 4.0), 1.0 + floor(shop / 4.0)) * cs;
    } else {
      local = fract(vec2(rep.x, rep.y - 1.0)); org = vec2(st, 0.0) * cs;
      // 部屋ごとに明かりが点いているかどうか（ビルごとに違う並び）
      vec2 room = floor(vec2(rep.x * (st > 1.5 && st < 2.5 ? 4.0 : 2.0), (rep.y - 1.0) * 2.0));
      fLit = step(fHash(room + vSeed * 17.0), 0.08);
    }
    local = clamp(local, 0.003, 0.997);
    fUv = org + local * size;
    fGx = dFdx(rep) * size; fGy = dFdy(rep) * size;
  }`).replace("#include <map_fragment>",`#ifdef USE_MAP
 diffuseColor *= textureGrad(map, fUv, fGx, fGy);
#endif`).replace("#include <roughnessmap_fragment>",`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
 roughnessFactor *= textureGrad(roughnessMap, fUv, fGx, fGy).g;
#endif`).replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP_TANGENTSPACE
 vec3 mapN = textureGrad(normalMap, fUv, fGx, fGy).xyz * 2.0 - 1.0;
 mapN.xy *= normalScale;
 normal = normalize(tbn * mapN);
#endif`).replace("#include <emissivemap_fragment>",`#ifdef USE_EMISSIVEMAP
 totalEmissiveRadiance *= textureGrad(emissiveMap, fUv, fGx, fGy).rgb * fLit;
#endif`)},v.customProgramCacheKey=()=>"facade3";let x=[],g=[],y=[],M=[],S=[],b=[],E=new ye;function U(R,P,L,B,k,X,ee,le,ae,ne,J,$,V){E.set(X);for(let[q,Y]of[[R,ee],[L,ae],[P,le],[R,ee],[B,ne],[L,ae]])x.push(...q),g.push(...k),y.push(E.r,E.g,E.b),M.push(Y[0],Y[1]),S.push(Y[0],Y[1],J,$),b.push(V)}function _(R,P,L,B,k,X,ee,le,ae){let ne=Math.max(1,Math.round((X-ln)/Qi)),J=[[[L,P],[R,P],[0,0,-1]],[[L,B],[L,P],[1,0,0]],[[R,B],[L,B],[0,0,1]],[[R,P],[R,B],[-1,0,0]]],$=k+Math.min(ln,X*.4);for(let[V,q,Y]of J){let W=Math.max(1,Math.round(Math.hypot(q[0]-V[0],q[1]-V[1])/ht)),N=(A,F,j,C)=>U([q[0],A,q[1]],[V[0],A,V[1]],[V[0],F,V[1]],[q[0],F,q[1]],Y,le,[W,j],[0,j],[0,C],[W,C],ee,0,ae);N(k,$,0,1),N($,k+X,1,1+ne)}}function T(R,P,L,B,k,X,ee,le,ae){let ne=-k,J=B,$=.15,V=X,q=[R+B*$,P,L+k*$],Y=[R+B*($+V),P,L+k*($+V)];for(let W of[1,-1]){let N=.05*W,A=[q[0]+ne*N,q[1],q[2]+J*N],F=[Y[0]+ne*N,Y[1],Y[2]+J*N],j=[ne*W,0,J*W],C=[[1,0],[0,0],[0,1],[1,1]];W>0?U(F,A,[A[0],A[1]+ee,A[2]],[F[0],F[1]+ee,F[2]],j,16777215,...C,le,1,ae):U(A,F,[F[0],F[1]+ee,F[2]],[A[0],A[1]+ee,A[2]],j,16777215,...C,le,1,ae)}}function I(R,P,L,B,k,X,ee,le){let ae=-k,ne=B,J=[R-ae*X/2,P,L-ne*X/2],$=[R+ae*X/2,P,L+ne*X/2];for(let V of[1,-1]){let q=[B*V,0,k*V],Y=[B*.05*V,k*.05*V],W=[J[0]+Y[0],J[1],J[2]+Y[1]],N=[$[0]+Y[0],$[1],$[2]+Y[1]];V>0?U(W,N,[N[0],N[1]+ee,N[2]],[W[0],W[1]+ee,W[2]],q,16777215,[1,0],[0,0],[0,1],[1,1],2,1,le):U(N,W,[W[0],W[1]+ee,W[2]],[N[0],N[1]+ee,N[2]],q,16777215,[1,0],[0,0],[0,1],[1,1],2,1,le)}}function w(){let R=new Ye;return R.setAttribute("position",new be(x,3)),R.setAttribute("normal",new be(g,3)),R.setAttribute("color",new be(y,3)),R.setAttribute("uv",new be(M,2)),R.setAttribute("fac",new be(S,4)),R.setAttribute("fseed",new be(b,1)),R.computeBoundingSphere(),R}return{material:v,building:_,sign:T,billboard:I,geometry:w,get empty(){return!x.length}}}var dh=[14272424,13095129,14726298,11057348,14209728,12036506,10466209,14932422];function mg(n,e){let t=e.bounds,i=e.stage==="city",s=new tt;n.add(s);let r=new Ue({vertexColors:!0,roughness:.9,metalness:.02}),a=cr(Xo("concrete_wall_004",{vertexColors:!0,roughness:1}),.22),o=cr(Xo("rock_face",{vertexColors:!0}),.12),l=cr(Xo("asphalt_02",{roughness:1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),.16),c=cr(Xo("dirt",{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),.18),h=cr(new Ue({map:yy(),vertexColors:!0,roughness:.8}),.3),u=new Ue({vertexColors:!0,roughness:.32,metalness:.85}),d=_y(),p=cr(new Ue({vertexColors:!0,map:d.map,roughnessMap:d.rough,metalness:0,roughness:1}),1/9);{let g=t.x0-90,y=t.x1+90,M=t.z0-90,S=t.z1+90,b=4,E=Math.ceil((y-g)/b),U=Math.ceil((S-M)/b),_=new pn(y-g,S-M,E,U);_.rotateX(-Math.PI/2),_.translate((g+y)/2,0,(M+S)/2);let T=_.attributes.position,I=new Float32Array(T.count*4),w=new Float32Array(T.count),R=(L,B,k)=>{let X=Math.max(0,Math.min(1,(k-L)/(B-L)));return X*X*(3-2*X)};for(let L=0;L<T.count;L++){let B=T.getX(L),k=T.getZ(L),X=nn(B,k);T.setY(L,X);let ee=nn(B+2,k)-nn(B-2,k),le=nn(B,k+2)-nn(B,k-2),ae=Math.hypot(ee,le)/4,ne=B>t.x0&&B<t.x1,J=1,$=0,V=0,q=0;i?(q=1,J=0,(e.grassRects||[]).some(Y=>B>Y.x0-1&&B<Y.x1+1&&k>Y.z0-1&&k<Y.z1+1)&&(q=0,J=1)):k<626&&ne&&X<2&&(q=k<346?1:.35,J=0,k>=346&&(w[L]=.75)),V=Math.max(V,R(.5,.95,ae)),X<-3&&(V=1),(!ne||k<t.z0||k>t.z1)&&(V=Math.max(V,R(8,40,X)*.8)),$=i?0:Math.max(0,ap(B,k)-.35)*1.2*(1-V),J=Math.max(0,1-V-$-q),I.set([J,$,V,q],L*4)}for(let L of e.dirt)for(let B=0;B<T.count;B++){let k=T.getX(B),X=T.getZ(B);k>=L.x0-2&&k<=L.x1+2&&X>=L.z0-2&&X<=L.z1+2&&(w[B]=1)}_.setAttribute("splat",new Mt(I,4)),_.setAttribute("soil",new Mt(w,1)),_.computeVertexNormals();let P=new ue(_,hg());P.receiveShadow=!0,s.add(P)}{let g=new Pt,y=new Pt,M=new Pt,S=(R,P)=>nn(R,P),b=.06,E=15921384,U=15774745,_=(R,P,L,B,k,X,ee,le,ae,ne=0,J=0)=>{let $=Math.hypot(B-P,k-L),V=(B-P)/$,Y=-((k-L)/$),W=V,N=Math.max(1,Math.ceil($/3));for(let A=0;A<N;A++){if(ne&&(A+J)%4>=2)continue;let F=A/N,j=(A+1)/N,C=P+(B-P)*F+Y*X,H=L+(k-L)*F+W*X,G=P+(B-P)*j+Y*X,z=L+(k-L)*j+W*X,K=(Te,ve)=>[Te,S(Te,ve)+le,ve],te=K(C+Y*ee,H+W*ee),se=K(C-Y*ee,H-W*ee),fe=K(G-Y*ee,z-W*ee),Ee=K(G+Y*ee,z+W*ee);te[1]<-3||se[1]<-3||fe[1]<-3||Ee[1]<-3||(R.tri(te,fe,se,ae),R.tri(te,Ee,fe,ae))}};for(let R of e.roads){b+=.004;let P=R.pts.every(([,L])=>L<626);for(let L=0;L<R.pts.length-1;L++){let[B,k]=R.pts[L],[X,ee]=R.pts[L+1],le=Math.hypot(X-B,ee-k),ae=(X-B)/le,ne=(ee-k)/le,J=R.w/2,$=B-ae*J,V=k-ne*J,q=X+ae*J,Y=ee+ne*J;if(R.surf==="dirt"){_(y,$,V,q,Y,0,R.w/2,b,16777215);continue}if(_(g,$,V,q,Y,0,R.w/2,b,16777215),R.w<8)continue;let W=B+ae*J*.9,N=k+ne*J*.9,A=X-ae*J*.9,F=ee-ne*J*.9;if(!(Math.hypot(A-W,F-N)<2||(A-W)*ae+(F-N)*ne<0)){for(let j of[-1,1])_(M,W,N,A,F,j*(R.w/2-.55),.09,b+.015,E);if(P)_(M,W,N,A,F,0,.08,b+.015,E,1,L);else for(let j of[-1,1])_(M,W,N,A,F,j*.16,.07,b+.015,U)}}}let T=new ue(g.geometry(),l);T.receiveShadow=!0,s.add(T);let I=new ue(y.geometry(),c);I.receiveShadow=!0,s.add(I);let w=new ue(M.geometry(),new Ue({vertexColors:!0,roughness:.55,side:bt,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}));w.receiveShadow=!0,s.add(w)}if(i){let g=new Pt,y=new Pt,M=e.cityGrid;for(let P of e.roads){if(P.w<12)continue;let[[L,B],[k,X]]=P.pts,ee=Math.hypot(k-L,X-B),le=(k-L)/ee,ae=(X-B)/ee;for(let ne of[-1,1]){let J=P.w/2+2,$=(L+k)/2-ae*J*ne,V=(B+X)/2+le*J*ne;g.box($,.08,V,Math.abs(ae)*2+Math.abs(le)*ee/2,.08,Math.abs(le)*2+Math.abs(ae)*ee/2,13223356,0)}}for(let P of e.roads){if(P.w<28)continue;let[[L,B],[k,X]]=P.pts,ee=Math.abs(k-L)<1,le=Math.floor(P.w/2/2.4);for(let ae of ee?M.ZS:M.XS){let ne=(ee?M.WIDE_Z.includes(ae)?28:18:M.WIDE_X.includes(ae)?28:18)/2+2.5;for(let J of[-1,1])for(let $=-le;$<=le;$++)ee?y.box(L+$*2.4,.07,ae+J*ne,.6,.02,1.4,15921384,0):y.box(ae+J*ne,.07,B+$*2.4,1.4,.02,.6,15921384,0)}}let S=new ue(g.geometry(),a);if(S.receiveShadow=!0,s.add(S),s.add(new ue(y.geometry(),new Ue({vertexColors:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}))),e.water){let P=e.water,L=new ue(new pn(t.x1-t.x0+80,P.z1-P.z0+4).rotateX(-Math.PI/2),new Ue({color:2049622,roughness:.08,metalness:.3,transparent:!0,opacity:.92}));L.position.set((t.x0+t.x1)/2,P.y,(P.z0+P.z1)/2),s.add(L)}let b=new Pt,E=3,U=()=>(E=E*16807%2147483647)/2147483647,_=(t.x0+t.x1)/2,T=(t.z0+t.z1)/2,I=(t.x1-t.x0)/2+120,w=(t.z1-t.z0)/2+120;for(let P=0;P<160;P++){let L=U()*Math.PI*2,B=1+U()*.9,k=_+Math.cos(L)*I*B*1.15,X=T+Math.sin(L)*w*B*1.1;if(Math.abs(k-_)<I&&Math.abs(X-T)<w)continue;let ee=25+U()*110,le=14+U()*26;b.box(k,ee/2,X,le,ee/2,le*(.6+U()*.8),dh[P%dh.length],U(),{noTop:!0,shade:!1})}let R=new ue(b.geometry(),p);s.add(R)}let m=[],f=null;{let g=new Pt,y=new Pt,M=new Pt,S=new Pt,b=new Pt;for(let E of e.slabs){if(E.needs)continue;let U=(P,L,B)=>{let k=lr(E,P,L);return[k.x,B,k.z]},_=E.y0,T=E.y1,I=E.thick,w=[U(-E.hw,-E.hl,_-I),U(E.hw,-E.hl,_-I),U(E.hw,E.hl,T-I),U(-E.hw,E.hl,T-I),U(-E.hw,-E.hl,_),U(E.hw,-E.hl,_),U(E.hw,E.hl,T),U(-E.hw,E.hl,T)];if(E.surf==="wood"){S.hexa(w,16777215);continue}if(g.hexa(w,E.surf==="dirt"?10125416:14605268,{noTop:!0}),(E.surf==="dirt"?M:y).hexa(w,16777215,{noBottom:!0,shade:!1}),E.surf==="road"&&E.hw>=5)for(let P of[-E.hw+.55,E.hw-.55]){let L=lr(E,P,-E.hl),B=lr(E,P,E.hl);b.box((L.x+B.x)/2,(_+T)/2+.02,(L.z+B.z)/2,.09,.02,E.hl,15921384,E.yaw)}if(E.kind==="mound")for(let P=0;P<18;P++){let L=Math.sin(P*7.1)*.9*E.hw,B=Math.cos(P*3.3)*.9*E.hl,k=lr(E,L,B);g.box(k.x,hh(E,B)+.2,k.z,.6+P%3*.3,.35,.5,9071176,P)}}for(let E of e.slabs)if(E.kind==="kicker"||E.kind==="roll"){let U=lr(E,0,E.hl-.3);b.box(U.x,E.y1-.02,U.z,E.hw,.08,.3,15909424,E.yaw);for(let _=0;_<3;_++){let T=-E.hl+1.5+_*(E.hl*2-3)/2,I=lr(E,0,T),w=hh(E,T)+.03;E.roll?b.box(I.x,w,I.z,E.hw*.9,.03,.35,_%2?1316378:15909424,E.yaw+E.roll*.5):b.box(I.x,w,I.z,E.hw*.25,.03,.6,15921384,E.yaw)}}for(let[E,U]of[[g,a],[y,l],[M,c],[S,h],[b,r]]){if(E.empty)continue;let _=new ue(E.geometry(),U);_.castShadow=!0,_.receiveShadow=!0,s.add(_)}}{let g=new Pt,y=new Pt,M=new Pt,S=new Pt,b=new Pt,E=fg(),U=0;for(let _ of e.colliders){if(_.slab||_.kind==="bound"||_.kind==="pylon"||_.kind==="tree")continue;let T=_.y0+_.h/2;if(_.kind==="building"){let I=U++,w=(I*2654435761>>>0)/4294967296,R=new ye(dh[I*5%dh.length]).lerp(new ye(w<.5?16777215:14207152),.12+w*.4).offsetHSL((w-.5)*.04,(w-.5)*.12,(I*7%5-2)*.025),P=_.h>55?[2,0,1,2,0][I%5]:[1,0,3,1,2,3,0][I%7];if(_.yaw?g.box(_.cx,T,_.cz,_.hw,_.h/2,_.hl,R.getHex(),_.yaw,{noTop:!0,shade:!1}):E.building(_.cx-_.hw,_.cz-_.hl,_.cx+_.hw,_.cz+_.hl,_.y0,_.h,P,R.getHex(),I*.618%1),!_.yaw&&I%3===0&&_.hw<80&&E.sign(_.cx+_.hw-2.2,_.y0+5.2,_.cz+_.hl,0,1,1.25,5,I%2,I),!_.yaw&&I%3===1&&_.hl<80&&E.sign(_.cx-_.hw,_.y0+5.2,_.cz-_.hl+2.2,-1,0,1.25,5,(I+1)%2,I),!_.yaw&&I%5===2&&_.h<45&&_.hw>8){let L=_.y0+_.h+2.2;E.billboard(_.cx,L,_.cz+_.hl-3,0,1,12,6,I);for(let B of[-4.5,4.5])S.box(_.cx+B,_.y0+_.h+1.1,_.cz+_.hl-3.3,.15,1.1,.15,7172728,0)}I%4===3&&S.box(_.cx-_.hw*.3,_.y0+_.h+1.6,_.cz+_.hl*.25,1.4,1.3,1.4,10134443,0),_.h>55&&S.box(_.cx,_.y0+_.h+5,_.cz,.12,5,.12,13225686,0),y.box(_.cx,_.y0+_.h+.15,_.cz,_.hw+.25,.3,_.hl+.25,12236462,_.yaw),y.box(_.cx+_.hw*.3,_.y0+_.h+1.4,_.cz-_.hl*.2,Math.min(3,_.hw*.3),1.2,Math.min(2.5,_.hl*.25),13617858,0);for(let L=0;L<3;L++)S.box(_.cx-_.hw*.4+L*1.6,_.y0+_.h+.75,_.cz+_.hl*.4,.6,.45,.6,12106946,0)}else if(_.kind==="whouse")y.box(_.cx,T,_.cz,_.hw,_.h/2,_.hl,10135218,_.yaw);else if(_.kind==="rail"){let I=Math.max(_.hw,_.hl),w=_.hl>_.hw;S.box(_.cx,_.y0+_.h*.72,_.cz,w?.06:_.hw,.17,w?_.hl:.06,14146528,_.yaw);for(let R=-I;R<=I;R+=2)S.box(_.cx+(w?0:R),_.y0+_.h*.4,_.cz+(w?R:0),.06,_.h*.4,.06,10133672,0)}else if(_.kind==="pillar"||_.kind==="sidewall"||_.kind==="wall")y.box(_.cx,T,_.cz,_.hw,_.h/2,_.hl,14736854,_.yaw);else if(_.kind==="container"){let I=[11023658,2776984,3045968,12614187][U++%4];S.box(_.cx,T,_.cz,_.hw,_.h/2,_.hl,I,_.yaw);for(let w=-_.hl+.5;w<_.hl;w+=.6)S.box(_.cx+_.hw+.02,T,_.cz+w,.03,_.h/2-.1,.1,I,0,{shade:!1})}else _.kind==="rock"?(M.box(_.cx,T,_.cz,_.hw,_.h/2,_.hl,14209224,_.yaw),M.box(_.cx+.4,_.y0+_.h*.9,_.cz-.3,_.hw*.6,_.h*.25,_.hl*.6,14998738,_.yaw+.5)):y.box(_.cx,T,_.cz,_.hw,_.h/2,_.hl,13683908,_.yaw)}for(let[_,T]of[[g,p],[y,a],[M,o],[S,u],[b,r]]){if(_.empty)continue;let I=new ue(_.geometry(),T);I.castShadow=!0,I.receiveShadow=!0,s.add(I)}if(!E.empty){let _=new ue(E.geometry(),E.material);_.castShadow=!0,_.receiveShadow=!0,s.add(_)}}if(!i){let g=new Pt,y=11879470,M=11183515;for(let U of[650,776]){let _=U===650?0:-4;for(let T of[-9.2,9.2])g.box(T,_-20,U,1.2,50,1.2,M),g.box(T,_+34,U,.9,4,.9,y);g.box(0,_+37,U,10.1,.8,.8,y),g.box(0,_+26,U,10.1,.5,.5,y)}let S=(U,_,T,I,w)=>{for(let P=0;P<10;P++){let L=P/10,B=(P+1)/10,k=_+(I-_)*L-Math.sin(L*Math.PI)*4,X=_+(I-_)*B-Math.sin(B*Math.PI)*4,ee=T+(w-T)*L,le=T+(w-T)*B,ae=Math.hypot(X-k,le-ee)/2,ne=Math.atan2(X-k,le-ee),J=new Pt;J.box(0,0,0,.12,.12,ae,2829875);let $=J.geometry();$.rotateX(-ne),$.translate(U,(k+X)/2,(ee+le)/2);let V=$.attributes.position.array,q=$.attributes.normal.array,Y=$.attributes.color.array;for(let W=0;W<V.length;W+=3)g.pos.push(V[W],V[W+1],V[W+2]),g.nor.push(q[W],q[W+1],q[W+2]),g.col.push(Y[W],Y[W+1],Y[W+2]),g.uv.push(.01,.01)}};for(let U of[-8.6,8.6])S(U,37,650,1,686),S(U,37,650,-60,704),S(U,33,776,0,752),S(U,33,776,-55,735);let b=(U,_,T,I,w)=>{let R=new Pt;R.box(0,0,0,6.5,.9,I,7301730,0,{top:3882822});let P=R.geometry();P.translate(0,0,w*I),P.rotateX(T*w),P.translate(0,_,U);let L=P.attributes.position.array,B=P.attributes.normal.array,k=P.attributes.color.array;for(let X=0;X<L.length;X+=3)g.pos.push(L[X],L[X+1],L[X+2]),g.nor.push(B[X],B[X+1],B[X+2]),g.col.push(k[X],k[X+1],k[X+2]),g.uv.push(.01,.01)};b(691,-2.4,1.15,7,1),b(749,-2.6,1.2,8,-1);for(let U=-6;U<=6;U+=1.5)g.box(U,1.2,691,.06,.06,1.6,5913130,0),g.box(U,-.6,749.2,.06,.06,1.4,5913130,0);let E=new ue(g.geometry(),r);E.castShadow=!0,s.add(E)}{let g=[],y=11,M=()=>(y=y*16807%2147483647)/2147483647,S=(_,T)=>{for(let I of e.roadGrid.at(_,T)){let w=I.bx-I.ax,R=I.bz-I.az,P=w*w+R*R,L=P?((_-I.ax)*w+(T-I.az)*R)/P:0;if(L=Math.max(0,Math.min(1,L)),Math.hypot(_-(I.ax+w*L),T-(I.az+R*L))<I.hw+3.5)return!1}for(let I of e.nearby(_,T)){let w=Math.cos(I.yaw||0),R=Math.sin(I.yaw||0),P=_-I.cx,L=T-I.cz;if(Math.abs(P*w-L*R)<I.hw+3&&Math.abs(P*R+L*w)<I.hl+3)return!1}for(let I of e.repair)if(_>I.x0-4&&_<I.x1+4&&T>I.z0-4&&T<I.z1+4)return!1;return!0};for(let _ of e.trees)g.push(_);let b=9;if(!i)for(let _=t.z0-80;_<t.z1+80;_+=b)for(let T=t.x0-80;T<t.x1+80;T+=b){let I=T+(M()-.5)*b*.9,w=_+(M()-.5)*b*.9;if(I>t.x0&&I<t.x1&&w>t.z0&&w<t.z1||M()>.7*Vt.trees)continue;let P=nn(I,w);g.push({x:I,y:P,z:w,s:.75+M()*.65,r:M()*6.28})}f=ug(s,g);let E=[];for(let _ of e.segs){if(i||Math.min(_.az,_.bz)<626&&Math.max(_.az,_.bz)<626)continue;let T=Math.hypot(_.bx-_.ax,_.bz-_.az);for(let I=0;I<T;I+=1.6)for(let w of[-1,1]){if(M()<1-.65*Vt.tufts)continue;let R=_.hw+1.5+Math.pow(M(),1.6)*22,P=_.ax+(_.bx-_.ax)*I/T+-(_.bz-_.az)/T*R*w+(M()-.5)*2,L=_.az+(_.bz-_.az)*I/T+(_.bx-_.ax)/T*R*w+(M()-.5)*2,B=nn(P,L);B<-2.5||e.surfaceAt(P,L)!=="grass"||!S(P,L)||E.push({x:P,y:B,z:L,s:.45+M()*.6,r:M()*6.28})}}dg(s,E);let U=new Pt;for(let _ of e.decor)if(_.kind==="debris")for(let T=0;T<6;T++)U.box(_.x+Math.sin(T*2)*_.s,_.y+T%3,_.z+Math.cos(T*3)*_.s,2+T%2,.8,3,13683908,T);if(!U.empty){let _=new ue(U.geometry(),a);_.castShadow=!0,s.add(_)}}let v=[];e.gates.forEach((g,y)=>{let M=new tt,S=y===e.gates.length-1,b=(g.b.x-g.a.x)/g.len,E=(g.b.z-g.a.z)/g.len,U=Math.min(16,g.len),_=g.respawn.x,T=g.respawn.z,I=e.groundAt(_,T,60).h,w=new Ue({color:S?16777215:2041395,roughness:.6});for(let k of[-U/2,U/2]){let X=new ue(new Qe(.6,7,.6),w);X.position.set(_+b*k,I+3.5,T+E*k),X.castShadow=!0,M.add(X)}let R=S?e.laps>1?"FINISH":"GOAL":g.name,P=S?vy():Go(R,{bg:"#ff5a1f",fg:"#fff",font:"bold 56px sans-serif"}),L=new ue(new Qe(U+.6,1.6,.3),[w,w,w,w,new Ue({map:P}),new Ue({map:P})]);L.position.set(_,I+7,T),L.rotation.y=Math.atan2(-E,b),M.add(L);let B=new ue(new pn(g.len,1.2),new Ct({color:16756768,transparent:!0,opacity:0,side:bt,depthWrite:!1}));B.position.set(g.cx,e.groundAt(g.cx,g.cz,60).h+.7,g.cz),B.rotation.y=Math.atan2(-E,b),M.add(B),s.add(M),v.push({grp:M,beam:B})});let x=i?[]:[{x:0,z:116,t:"ROAD CLOSED",yaw:Math.PI,y:0,stripes:!0},{x:0,z:405,t:"NO ENTRY",yaw:Math.PI,y:0,stripes:!0},{x:0,z:626,t:"BRIDGE OUT",yaw:Math.PI,y:0,stripes:!0},{x:-14,z:632,t:"< DETOUR",yaw:Math.PI,y:0},{x:0,z:872,t:"MINE ROAD",yaw:Math.PI,y:0,stripes:!0},{x:56,z:358,t:"UNDER CONSTRUCTION",yaw:Math.PI,y:4}];for(let g of x){let y=Go(g.t,{stripes:g.stripes,w:512,h:128,font:"bold 54px sans-serif"}),M=nn(g.x,g.z)+g.y,S=new ue(new pn(8,2),new Ue({map:y,side:bt}));S.position.set(g.x,M+5.5,g.z),S.rotation.y=g.yaw,s.add(S);for(let b of[-3.6,3.6]){let E=new ue(new Qe(.2,5.5,.2),new Ue({color:5593955}));E.position.set(g.x+b*Math.cos(g.yaw),M+2.75,g.z),s.add(E)}}{let g=new Pt;for(let y of e.shortcuts||[]){let[M,S]=y.inA,[b,E]=y.outB,U=Math.hypot(b-M,E-S),_=(b-M)/U,T=(E-S)/U,I=Math.atan2(_,T);for(let ee=6;ee<U-4;ee+=9){let le=M+_*ee,ae=S+T*ee,ne=e.groundAt(le,ae,50).h+.06;for(let J of[-1,1])g.box(le+Math.cos(I)*J*.9-_*.6,ne,ae-Math.sin(I)*J*.9-T*.6,.35,.02,1.3,16747039,I+J*.6)}let[w,R]=y.out,P=y.inA[0]+w*4,L=y.inA[1]+R*4,B=e.groundAt(P,L,50).h,k=(y.label||"")+"  近道 SHORTCUT",X=new ue(new pn(9,2.6),new Ue({map:Go(k.trim(),{bg:"#ff6a1a",fg:"#fff",w:512,h:148,font:"bold 52px sans-serif",stripes:!1}),emissive:16738842,emissiveIntensity:.35,side:bt}));X.position.set(P,B+5.2,L),X.rotation.y=Math.atan2(w,R),s.add(X);for(let ee of[-4,4]){let le=new ue(new Qe(.22,4,.22),new Ue({color:2829875}));le.position.set(P+Math.cos(X.rotation.y)*ee,B+2,L-Math.sin(X.rotation.y)*ee),s.add(le)}}g.empty||s.add(new ue(g.geometry(),new Ue({vertexColors:!0,roughness:.6,emissive:16734736,emissiveIntensity:.25,polygonOffset:!0,polygonOffsetFactor:-7,polygonOffsetUnits:-7})))}for(let g of e.repair){let y=(g.x0+g.x1)/2,M=(g.z0+g.z1)/2,S=nn(y,M),b=Go("REPAIR",{bg:"#1d6fd1",fg:"#fff",w:256,h:256,font:"bold 56px sans-serif"});b.wrapS=un,b.repeat.x=-1;let E=new ue(new pn(g.x1-g.x0,g.z1-g.z0).rotateX(-Math.PI/2),new Ue({map:b,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-6}));E.position.set(y,S+.12,M),s.add(E);let U=new ue(new Qe(g.x1-g.x0,.4,g.z1-g.z0),new Ue({color:2848982,roughness:.6}));U.position.set(y,S+6,M),U.castShadow=!0,s.add(U);for(let[_,T]of[[g.x0,g.z0],[g.x1,g.z0],[g.x0,g.z1],[g.x1,g.z1]]){let I=new ue(new Qe(.4,6,.4),new Ue({color:14540253}));I.position.set(_,S+3,T),s.add(I)}}return{root:s,gates:v,plankMeshes:m,forest:f}}function vy(){let n=document.createElement("canvas");n.width=256,n.height=32;let e=n.getContext("2d");for(let i=0;i<2;i++)for(let s=0;s<16;s++)e.fillStyle=(s+i)%2?"#111":"#fff",e.fillRect(s*16,i*16,16,16);let t=new Tt(n);return t.colorSpace=je,t.magFilter=dn,t}function yy(){let n=document.createElement("canvas");n.width=n.height=256;let e=n.getContext("2d");for(let i=0;i<8;i++){let s=150+i*37%50;e.fillStyle=`rgb(${s},${s*.72|0},${s*.45|0})`,e.fillRect(0,i*32,256,31),e.strokeStyle="rgba(60,35,15,0.25)";for(let r=0;r<6;r++)e.beginPath(),e.moveTo(0,i*32+4+r*5),e.bezierCurveTo(80,i*32+r*5,170,i*32+9+r*5,256,i*32+3+r*5),e.stroke()}let t=new Tt(n);return t.wrapS=t.wrapT=un,t.colorSpace=je,t}function _y(){let e=()=>{let d=document.createElement("canvas");return d.width=d.height=512,[d,d.getContext("2d")]},[t,i]=e(),[s,r]=e(),a=5,o=()=>(a=a*16807%2147483647)/2147483647;i.fillStyle="#d9d6cf",i.fillRect(0,0,512,512);for(let d=0;d<1800;d++){let p=190+o()*50;i.fillStyle=`rgba(${p},${p},${p-6},0.25)`,i.fillRect(o()*512,o()*512,2+o()*6,2+o()*6)}r.fillStyle="rgb(225,225,225)",r.fillRect(0,0,512,512);let l=512/3,c=512/3;for(let d=0;d<3;d++){i.fillStyle="rgba(120,118,112,0.55)",i.fillRect(0,d*l+l-10,512,7);for(let p=0;p<3;p++){let m=p*c+18,f=d*l+26,v=c-36,x=l-60;i.fillStyle="#5d6168",i.fillRect(m-5,f-5,v+10,x+10);let g=i.createLinearGradient(0,f,0,f+x),y=o()<.12;g.addColorStop(0,y?"#d9c79a":"#5f7387"),g.addColorStop(1,y?"#a78e5c":"#1f2833"),i.fillStyle=g,i.fillRect(m,f,v,x),!y&&o()<.4&&(i.fillStyle="rgba(230,225,210,0.55)",i.fillRect(m,f,v*(.3+o()*.5),x)),i.fillStyle="#5d6168",i.fillRect(m+v/2-2,f,4,x),i.fillRect(m,f+x*.35,v,3),r.fillStyle="rgb(28,28,28)",r.fillRect(m,f,v,x)}}let h=new Tt(t),u=new Tt(s);for(let d of[h,u])d.wrapS=d.wrapT=un,d.anisotropy=8;return h.colorSpace=je,{map:h,rough:u}}var jo=420,Ra=900,ph=class{constructor(e,t){this.scene=e,this.world=t,this.debrisMesh=new si(new Qe(1,1,1),new Ue({roughness:.8}),jo),this.debrisMesh.castShadow=!0,this.debrisMesh.instanceMatrix.setUsage(ya),this.debrisMesh.count=jo,this.debrisMesh.frustumCulled=!1,e.add(this.debrisMesh),this.debris=[];let i=new Ce().makeScale(0,0,0);for(let o=0;o<jo;o++)this.debris.push({alive:!1,p:new D,v:new D,q:new ct,w:new D,s:new D(1,1,1),life:0,rest:!1}),this.debrisMesh.setMatrixAt(o,i),this.debrisMesh.setColorAt(o,new ye(16777215));this.di=0;let s=new Ye;this.pPos=new Float32Array(Ra*3),this.pCol=new Float32Array(Ra*4),this.pSize=new Float32Array(Ra),s.setAttribute("position",new Mt(this.pPos,3).setUsage(ya)),s.setAttribute("color4",new Mt(this.pCol,4).setUsage(ya)),s.setAttribute("size",new Mt(this.pSize,1).setUsage(ya));let r=o=>new Ht({uniforms:{map:{value:tg()},scale:{value:600}},vertexShader:["attribute vec4 color4;","attribute float size;","varying vec4 vC;","uniform float scale;","void main() {","  vC = color4;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  gl_PointSize = size * scale / max(1.0, -mv.z);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["uniform sampler2D map;","varying vec4 vC;","void main() {","  vec4 t = texture2D(map, gl_PointCoord);","  gl_FragColor = vec4(vC.rgb, vC.a * t.a);","  if (gl_FragColor.a < 0.01) discard;","}"].join(`
`),transparent:!0,depthWrite:!1,blending:o});this.parts=[];for(let o=0;o<Ra;o++)this.parts.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0,max:1,size:1,grow:0,r:1,g:1,b:1,a:1,drag:0,grav:0,add:!1});this.pi=0,this.pointsN=new ps(s,r(Qs)),this.pointsN.frustumCulled=!1,e.add(this.pointsN);let a=s.clone();this.aPos=a.attributes.position.array,this.aCol=a.attributes.color4.array,this.aSize=a.attributes.size.array,this.pointsA=new ps(a,r(er)),this.pointsA.frustumCulled=!1,e.add(this.pointsA),this.bodies=[],this.shake=0,this._m=new Ce,this._c=new ye}addShake(e){this.shake=Math.min(1.6,this.shake+e)}debrisAt(e,t,i,s,r,{speed:a=8,up:o=6,size:l=.4,dir:c=null,spread:h=1,plank:u=!1}={}){let d=this._c.set(r);for(let p=0;p<s;p++){let m=this.debris[this.di],f=this.di;this.di=(this.di+1)%jo,m.alive=!0,m.rest=!1,m.life=14+Math.random()*6,m.p.set(e+(Math.random()-.5)*h,t+Math.random()*h,i+(Math.random()-.5)*h);let v=Math.random()*Math.PI*2;m.v.set(Math.cos(v)*a*Math.random(),o*(.4+Math.random()),Math.sin(v)*a*Math.random()),c&&m.v.add(new D(c.x,0,c.z).multiplyScalar(.55+Math.random()*.4)),m.q.setFromEuler(new ii(Math.random()*6,Math.random()*6,Math.random()*6)),m.w.set((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14);let x=l*(.6+Math.random()*.8);u?m.s.set(x*.6,x*.4,x*5):m.s.set(x,x*(.5+Math.random()*.6),x*(.7+Math.random()*.6));let g=.75+Math.random()*.35;this.debrisMesh.setColorAt(f,this._c.copy(d).multiplyScalar(g))}this.debrisMesh.instanceColor.needsUpdate=!0}emit(e,t,i,s){let r=this.parts[this.pi];this.pi=(this.pi+1)%Ra,r.alive=!0,r.x=e,r.y=t,r.z=i,r.vx=s.vx||0,r.vy=s.vy||0,r.vz=s.vz||0,r.life=0,r.max=s.life||1,r.size=s.size||1,r.grow=s.grow||0,r.r=s.r??1,r.g=s.g??1,r.b=s.b??1,r.a=s.a??1,r.drag=s.drag??1,r.grav=s.grav??0,r.add=!!s.add}sparks(e,t,i,s,r=null,a=10){for(let o=0;o<s;o++){let l=Math.random()*Math.PI*2;this.emit(e,t,i,{vx:Math.cos(l)*a*Math.random()+(r?r.x*.3:0),vy:2+Math.random()*a*.7,vz:Math.sin(l)*a*Math.random()+(r?r.z*.3:0),life:.35+Math.random()*.4,size:.35,r:1,g:.75+Math.random()*.2,b:.3,a:1,drag:1.5,grav:18,add:!0})}}smoke(e,t,i,{dark:s=.25,size:r=2.2,life:a=1.6,vy:o=1.6,a:l=.5}={}){this.emit(e+(Math.random()-.5)*.4,t,i+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*.8,vy:o,vz:(Math.random()-.5)*.8,life:a,size:r,grow:r*1.2,r:s,g:s,b:s*1.05,a:l,drag:.6})}dust(e,t,i,s,r=[.66,.58,.46],a=1){for(let o=0;o<s;o++){let l=Math.random()*Math.PI*2;this.emit(e,t+.3,i,{vx:Math.cos(l)*6*a*Math.random(),vy:1+Math.random()*2.5*a,vz:Math.sin(l)*6*a*Math.random(),life:1.2+Math.random()*1.2,size:2.4*a,grow:3*a,r:r[0],g:r[1],b:r[2],a:.5,drag:1.4})}}flash(e,t,i){this.emit(e,t,i,{life:.18,size:9,grow:8,r:1,g:.7,b:.35,a:.9,add:!0})}launch(e,{vx:t=0,vy:i=5,vz:s=0,spin:r=6,life:a=20,pivotFall:o=null}={}){e.parent||this.scene.add(e),this.bodies.push({mesh:e,vx:t,vy:i,vz:s,wx:(Math.random()-.5)*r,wy:(Math.random()-.5)*r,wz:(Math.random()-.5)*r,life:a,rest:!1,pivotFall:o,t:0})}update(e){let t=this.world,i=!1;for(let a=0;a<jo;a++){let o=this.debris[a];if(!o.alive)continue;if(i=!0,o.life-=e,o.life<=0){o.alive=!1,this.debrisMesh.setMatrixAt(a,this._m.makeScale(0,0,0));continue}if(!o.rest){o.v.y-=22*e,o.p.addScaledVector(o.v,e);let c=t.groundAt(o.p.x,o.p.z,o.p.y).h+o.s.y*.5;o.p.y<c&&(o.p.y=c,Math.abs(o.v.y)<2.5&&Math.hypot(o.v.x,o.v.z)<1.5&&(o.rest=!0),o.v.y=-o.v.y*.3,o.v.x*=.6,o.v.z*=.6,o.w.multiplyScalar(.6));let h=o.w.length();h>.01&&o.q.multiply(new ct().setFromAxisAngle(this._tmpAxis(o.w,h),h*e))}let l=o.life<2?o.life/2:1;this._m.compose(o.p,o.q,this._tmpScale(o.s,l)),this.debrisMesh.setMatrixAt(a,this._m)}i&&(this.debrisMesh.instanceMatrix.needsUpdate=!0);for(let a=this.bodies.length-1;a>=0;a--){let o=this.bodies[a];o.life-=e,o.t+=e;let l=o.mesh;if(o.pivotFall){let c=o.pivotFall,h=Math.min(1,o.t/c.dur);c.angle=c.target*h*h,l.quaternion.setFromAxisAngle(c.axis,c.angle).premultiply(c.base);let u=c.offset.clone().applyQuaternion(new ct().setFromAxisAngle(c.axis,c.angle));l.position.copy(c.pivot).sub(u),h>=1&&!c.done&&(c.done=!0,c.onDone&&c.onDone());continue}if(!o.rest){o.vy-=22*e,l.position.x+=o.vx*e,l.position.y+=o.vy*e,l.position.z+=o.vz*e,l.rotation.x+=o.wx*e,l.rotation.y+=o.wy*e,l.rotation.z+=o.wz*e;let c=t.groundAt(l.position.x,l.position.z,l.position.y+1).h+.15;l.position.y<c&&(l.position.y=c,o.vy=-o.vy*.25,o.vx*=.55,o.vz*=.55,o.wx*=.5,o.wy*=.5,o.wz*=.5,Math.abs(o.vy)<1.5&&Math.hypot(o.vx,o.vz)<1&&(o.rest=!0,l.rotation.x=Math.round(l.rotation.x/(Math.PI/2))*(Math.PI/2),l.rotation.z=Math.round(l.rotation.z/(Math.PI/2))*(Math.PI/2)))}o.life<=0&&(l.position.y-=e*.5,o.life<-3&&(l.parent&&l.parent.remove(l),this.bodies.splice(a,1)))}let s=0,r=0;for(let a=0;a<Ra;a++){let o=this.parts[a];if(!o.alive)continue;if(o.life+=e,o.life>=o.max){o.alive=!1;continue}let l=Math.exp(-o.drag*e);o.vx*=l,o.vz*=l,o.vy=o.vy*l-o.grav*e,o.x+=o.vx*e,o.y+=o.vy*e,o.z+=o.vz*e;let c=o.life/o.max,h=o.a*(1-c)*Math.min(1,o.life*12),u=o.size+o.grow*c;o.add?this._put(this.aPos,this.aCol,this.aSize,r++,o,h,u):this._put(this.pPos,this.pCol,this.pSize,s++,o,h,u)}this.pointsN.geometry.setDrawRange(0,s),this.pointsA.geometry.setDrawRange(0,r);for(let a of[this.pointsN,this.pointsA]){let o=a.geometry;o.attributes.position.needsUpdate=!0,o.attributes.color4.needsUpdate=!0,o.attributes.size.needsUpdate=!0}this.shake=Math.max(0,this.shake-e*2.4)}setScale(e){for(let t of[this.pointsN,this.pointsA])t.material.uniforms.scale.value=e*.9}_put(e,t,i,s,r,a,o){e[s*3]=r.x,e[s*3+1]=r.y,e[s*3+2]=r.z,t[s*4]=r.r,t[s*4+1]=r.g,t[s*4+2]=r.b,t[s*4+3]=a,i[s]=o}_tmpAxis(e,t){return(this.__ax||(this.__ax=new D)).copy(e).divideScalar(t)}_tmpScale(e,t){return(this.__sc||(this.__sc=new D)).copy(e).multiplyScalar(t)}};var My=14263422,by=15657696,Sy=2831174,gg=14251818,wy=12174028;function wn(n,e={}){return new Ue({color:n,roughness:.75,metalness:.05,...e})}function fh(n,e,t,i){let s=new tt,r=new Et(t,e,n,7);r.translate(0,-n/2,0);let a=new ue(r,i);return a.castShadow=!0,s.add(a),s}var mh=class{constructor({police:e=!1}={}){let t=e?1912668:by;this.group=new tt,this.paintColor=null;let i=wn(t),s=wn(Sy),r=wn(My,{roughness:.6}),a=wn(gg,{emissive:gg,emissiveIntensity:.35}),o=wn(wy,{metalness:.7,roughness:.35});this.mats=[i,s,r,a,o];let l=this.body=new tt;l.position.y=.95,this.group.add(l);let c=this.hips=new tt;l.add(c);let h=new ue(new Qe(.4,.52,.24).translate(0,.3,0),i);h.castShadow=!0,c.add(h);let u=new ue(new Qe(.42,.05,.26).translate(0,.38,0),a);c.add(u);let d=new ue(new Qe(.44,.08,.28).translate(0,.05,0),o);c.add(d);for(let g of[-1,1]){let y=new ue(new Et(.07,.07,.1,10).rotateZ(Math.PI/2).translate(g*.26,.05,0),o);c.add(y)}let p=this.neck=new tt;p.position.y=.58,c.add(p);let m=new ue(new Rn(.13,12,10).translate(0,.14,.01),r);m.castShadow=!0,p.add(m);let f=new ue(new Rn(.155,12,10,0,Math.PI*2,0,Math.PI*.62).rotateX(-.35).translate(0,.15,-.02),i);if(p.add(f),e){f.visible=!1;let g=new ue(new Et(.15,.14,.09,12).translate(0,.27,0),wn(1318973)),y=new ue(new Qe(.22,.02,.1).translate(0,.23,.13),wn(922920)),M=new ue(new Qe(.06,.05,.02).translate(0,.29,.15),wn(15909424,{metalness:.6}));p.add(g,y,M),u.material=wn(14221114,{emissive:12116010,emissiveIntensity:.4})}else{f.visible=!1;let g=new ue(new Rn(.138,12,10,0,Math.PI*2,0,Math.PI*.5).translate(0,.16,-.005),wn(2366486)),y=new ue(new Et(.142,.142,.045,14,1,!0).translate(0,.2,0),wn(2042436,{side:bt})),M=new ue(new Qe(.06,.04,.09).rotateX(.5).translate(0,.2,-.17),wn(2042436));p.add(g,y,M)}let v=g=>{let y=fh(.3,.06,.055,i);y.position.set(g*.25,.52,0);let M=fh(.28,.05,.045,i);M.position.y=-.3,y.add(M);let S=new ue(new Qe(.08,.12,.09).translate(0,-.22,.02),a);M.add(S);let b=new ue(new Rn(.05,8,6).translate(0,-.32,0),r);M.add(b);let E=new _t;return E.position.set(0,-.34,0),M.add(E),c.add(y),{sh:y,el:M,tip:E}};this.armL=v(1),this.armR=v(-1);{let g=this.okamochi=new tt,y=wn(13225683,{metalness:.75,roughness:.3}),M=new ue(new Qe(.34,.3,.22).translate(0,-.24,0),y);M.castShadow=!0;let S=new ue(new Qe(.05,.1,.03).translate(0,-.04,0),y),b=new ue(new Qe(.2,.1,.005).translate(0,-.22,.113),wn(11676194));g.add(M,S,b),g.position.set(.33,.2,.04),this.hips.add(g)}let x=g=>{let y=fh(.44,.085,.07,s);y.position.set(g*.11,0,0);let M=fh(.44,.065,.05,s);M.position.y=-.44,y.add(M);let S=new ue(new Qe(.11,.08,.24).translate(0,-.47,.05),wn(15263976));return S.castShadow=!0,M.add(S),l.add(y),{hp:y,kn:M}};this.legL=x(1),this.legR=x(-1),this.phase=0,this.handWorld=new D,this._v=new D,this.state="idle"}update(e,t){let i=this.group;i.position.set(e.x,e.y,e.z);let s=Math.hypot(e.vx,e.vz),r=this.body,a=0,o=0,l=this.legL,c=this.legR,h=this.armL,u=this.armR,d=(f,v=0,x=0,g=0)=>f.rotation.set(v,x,g),p=1-Math.exp(-t*14),m=(f,v,x=0)=>{f.rotation.x+=(v-f.rotation.x)*p,f.rotation.z+=(x-f.rotation.z)*p};if(e.wreck>0)this.state="down",i.rotation.set(0,e.yaw,0),r.position.y=.18,a=-Math.PI/2,m(l.hp,.2),m(c.hp,-.1),m(l.kn,.4),m(c.kn,.2),m(h.sh,-.6,.9),m(u.sh,-.3,-1.1),m(h.el,-.3),m(u.el,-.2);else if(e.climbing){this.state="climb",this.phase+=t*9;let f=Math.sin(this.phase);i.rotation.set(0,Math.atan2(-e.climbing.nx,-e.climbing.nz),0),r.position.y=.95,a=.12,m(h.sh,-2.6+f*.5),m(u.sh,-2.6-f*.5),m(h.el,-.5),m(u.el,-.5),m(l.hp,-.9-f*.5),m(c.hp,-.9+f*.5),m(l.kn,1.2),m(c.kn,1.2)}else if(e.rope){this.state=e.zipping?"zip":"swing";let f=e.rope.x-e.x,v=e.rope.y-(e.y+1.2),x=e.rope.z-e.z,g=Math.cos(e.yaw),y=Math.sin(e.yaw),M=f*g-x*y,S=f*y+x*g;i.rotation.set(0,e.yaw,0),r.position.y=.95,a=Math.atan2(S,Math.max(.5,v))*.9,o=-Math.atan2(M,Math.max(.5,v))*.9;let b=M>=0?h:u,E=M>=0?u:h;m(b.sh,-Math.PI+.15,0),m(b.el,0),m(E.sh,e.zipping?-2.6:-.9,M>=0?-.6:.6),m(E.el,-.6);let U=Math.sin(this.phase+=t*3)*.2;m(l.hp,e.zipping?.3:-.5+U),m(c.hp,e.zipping?.1:-.2-U),m(l.kn,e.zipping?.3:.9),m(c.kn,e.zipping?.2:.5)}else if(e.grounded)if(e.sneaking){this.state="sneak",i.rotation.set(0,e.yaw,0),this.phase+=t*(s>.3?5:0);let f=Math.sin(this.phase),v=s>.3?1:0;r.position.y=.68,a=.55,m(l.hp,-1.1-f*.35*v),m(c.hp,-1.1+f*.35*v),m(l.kn,1.6),m(c.kn,1.6),m(h.sh,-.7,.2),m(u.sh,-.7,-.2),m(h.el,-1.2),m(u.el,-1.2)}else if(s>.6){this.state="run",i.rotation.set(0,e.yaw,0),this.phase+=t*(4+s*.95);let f=Math.sin(this.phase),v=Math.min(1,s/10);r.position.y=.92+Math.abs(Math.cos(this.phase))*.06*v,a=.08+v*.22,d(l.hp,-f*.9*v),d(c.hp,f*.9*v),d(l.kn,Math.max(0,f)*1.3*v+.1),d(c.kn,Math.max(0,-f)*1.3*v+.1),d(h.sh,f*.8*v,0,.12),d(u.sh,-f*.8*v,0,-.12),d(h.el,-.9*v-.2),d(u.el,-.9*v-.2)}else this.state="idle",i.rotation.set(0,e.yaw,0),this.phase+=t*2,r.position.y=.95+Math.sin(this.phase)*.01,m(l.hp,0),m(c.hp,0),m(l.kn,.05),m(c.kn,.05),m(h.sh,.05,.15),m(u.sh,.05,-.15),m(h.el,-.25),m(u.el,-.25);else{this.state="air",i.rotation.set(0,e.yaw,0),r.position.y=.95;let f=e.vy>0;a=f?.15:.35,e.stun>0&&(this.phase+=t*14,o=Math.sin(this.phase)*.8,a=Math.cos(this.phase*.7)*.9),m(h.sh,-1.2,1.1),m(u.sh,-1.2,-1.1),m(h.el,-.4),m(u.el,-.4),m(l.hp,f?-1.1:-.4),m(c.hp,f?-.3:.2),m(l.kn,f?1.6:.6),m(c.kn,f?.9:.3)}if(r.rotation.x+=(a-r.rotation.x)*(1-Math.exp(-t*10)),r.rotation.z+=(o-r.rotation.z)*(1-Math.exp(-t*10)),e.rope){let f=e.rope.x-e.x,v=e.rope.z-e.z,x=f*Math.cos(e.yaw)-v*Math.sin(e.yaw);i.updateMatrixWorld(!0),(x>=0?this.armL:this.armR).tip.getWorldPosition(this.handWorld)}}updateParts(){return[]}applyDents(){}resetParts(){}dispose(){this.group.traverse(e=>{e.geometry&&e.geometry.dispose()});for(let e of this.mats)e.dispose()}};function up(n,e){if(e===Cd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===va||e===No){let t=n.getIndex();if(t===null){let a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,s=[];if(e===va)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function qo(n){let e=new Map,t=new Map,i=n.clone();return xg(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),i}function xg(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)xg(n.children[i],e.children[i],t)}var Ko=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vp(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new Rp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Mp(t)}),this.register(function(t){return new bp(t)}),this.register(function(t){return new Sp(t)}),this.register(function(t){return new wp(t)}),this.register(function(t){return new xp(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new mp(t)}),this.register(function(t){return new gh(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new gh(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ip(t)})}load(e,t,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ki.extractUrlBase(e);a=Ki.resolveURL(c,this.path)}else a=Ki.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new la(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bg){try{a[nt.KHR_BINARY_GLTF]=new Lp(e)}catch(u){s&&s(u);return}r=JSON.parse(a[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Bp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:a[u]=new gp;break;case nt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Np(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:a[u]=new Dp;break;case nt.KHR_MESH_QUANTIZATION:a[u]=new Up;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}};function Ty(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Wt(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},mp=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,s=t.cache.get(i);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ye(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Js(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ro(h),c.distance=u;break;case"spot":c=new Ao(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ii(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}},gp=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,i){let s=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Mn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,je))}return Promise.all(s)}},xp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},vp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(r,r)}return Promise.all(s)}},yp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},_p=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Mp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,je)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},bp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},Sp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}},wp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Tp=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(r[0],r[1],r[2],Mn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,je)),Promise.all(s)}},Ep=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}},Ap=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Wt(this.parser,e,this.name)!==null?Cn:null}extendMaterialParams(e,t){let i=Wt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},Rp=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Cp=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},Pp=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=i.textureLoader;if(o.uri){let c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return i.loadTextureImage(e,a.source,l)}},gh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},Ip=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=t.meshes[i.mesh];for(let c of s.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let m of u){let f=new Ce,v=new D,x=new ct,g=new D(1,1,1),y=new si(m.geometry,m.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&v.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&x.fromBufferAttribute(l.ROTATION,M),l.SCALE&&g.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,f.compose(v,x,g));for(let M in l)if(M==="_COLOR_0"){let S=l[M];y.instanceColor=new ds(S.array,S.itemSize,S.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&m.geometry.setAttribute(M,l[M]);_t.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},bg="glTF",Yo=12,vg={JSON:1313821514,BIN:5130562},Lp=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Yo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Yo,r=new DataView(e,Yo),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===vg.JSON){let c=new Uint8Array(e,Yo+a,o);this.content=i.decode(c)}else if(l===vg.BIN){let c=Yo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Np=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Op[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Op[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],p=Ca[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let m in p.attributes){let f=p.attributes[m],v=l[m];v!==void 0&&(f.normalized=v)}u(p)},o,c,Mn,d)})})}},Dp=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Up=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},xh=class extends Si{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(i-t)/h,d=u*u,p=d*u,m=e*c,f=m-c,v=-2*p+3*d,x=p-d,g=1-v,y=x-d+u;for(let M=0;M!==o;M++){let S=a[f+M+o],b=a[f+M+l]*h,E=a[m+M+o],U=a[m+M]*h;r[M]=g*S+y*b+v*E+x*U}return r}},Ey=new ct,zp=class extends xh{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return Ey.fromArray(r).normalize().toArray(r),r}},Xn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yg={9728:dn,9729:Kt,9984:zc,9985:ma,9986:nr,9987:Vn},_g={33071:bi,33648:Xr,10497:un},dp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Op={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ay={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Hs},pp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ry(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ue({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),n.DefaultMaterial}function hr(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ii(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cy(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function Py(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Iy(n){let e,t=n.extensions&&n.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fp(t.attributes):e=n.indices+":"+fp(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+fp(n.targets[i]);return e}function fp(n){let e="",t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Fp(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ly(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ny=new Ce,Bp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ty,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Ks(this.options.manager):this.textureLoader=new Co(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new la(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return hr(r,o,s),Ii(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Ki.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=dp[s.type],o=Ca[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Mt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=dp[s.type],c=Ca[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,f,v;if(p&&p!==u){let x=Math.floor(d/p),g="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count,y=t.cache.get(g);y||(f=new c(o,x*p,s.count*p/h),y=new Ws(f,p/h),t.cache.add(g,y)),v=new hs(y,l,d%p/h,m)}else o===null?f=new c(s.count*l):f=new c(o,d,s.count*l),v=new Mt(f,l,m);if(s.sparse!==void 0){let x=dp.SCALAR,g=Ca[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,S=new g(a[1],y,s.sparse.count*x),b=new c(a[2],M,s.sparse.count*l);o!==null&&(v=new Mt(v.array.slice(),v.itemSize,v.normalized)),v.normalized=!1;for(let E=0,U=S.length;E<U;E++){let _=S[E];if(v.setX(_,b[E*l]),l>=2&&v.setY(_,b[E*l+1]),l>=3&&v.setZ(_,b[E*l+2]),l>=4&&v.setW(_,b[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}v.normalized=m}return v})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=yg[d.magFilter]||Kt,h.minFilter=yg[d.minFilter]||Vn,h.wrapS=_g[d.wrapS]||un,h.wrapT=_g[d.wrapT]||un,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==dn&&h.minFilter!==Kt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(f){let v=new kt(f);v.needsUpdate=!0,d(v)}),t.load(Ki.resolveURL(u,r.path),m,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Ii(u,a),u.userData.mimeType=a.mimeType||Ly(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new na,Sn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,l=this.cache.get(o);l||(l=new ta,Sn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ue}loadMaterial(e){let t=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Mn),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,je)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=bt);let h=r.alphaMode||pp.OPAQUE;if(h===pp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===pp.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ct){let u=r.emissiveFactor;o.emissive=new ye().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&a!==Ct&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,je)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ii(u,r),t.associations.set(u,{materials:e}),r.extensions&&hr(s,u,r),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Mg(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Iy(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Mg(new Ye,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Ry(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let f=h[p],v=a[p],x,g=c[p];if(v.mode===Xn.TRIANGLES||v.mode===Xn.TRIANGLE_STRIP||v.mode===Xn.TRIANGLE_FAN||v.mode===void 0)x=r.isSkinnedMesh===!0?new ro(f,g):new ue(f,g),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),v.mode===Xn.TRIANGLE_STRIP?x.geometry=up(x.geometry,No):v.mode===Xn.TRIANGLE_FAN&&(x.geometry=up(x.geometry,va));else if(v.mode===Xn.LINES)x=new oo(f,g);else if(v.mode===Xn.LINE_STRIP)x=new js(f,g);else if(v.mode===Xn.LINE_LOOP)x=new lo(f,g);else if(v.mode===Xn.POINTS)x=new ps(f,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(x.geometry.morphAttributes).length>0&&Py(x,r),x.name=t.createUniqueName(r.name||"mesh_"+e),Ii(x,r),v.extensions&&hr(s,x,v),t.assignFinalMaterial(x),u.push(x)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&hr(s,u[0],r),u[0];let d=new tt;r.extensions&&hr(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,m=u.length;p<m;p++)d.add(u[p]);return d})}loadCamera(e){let t,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Bt(Ji.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ei(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ii(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ce;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ao(o,l)})}loadAnimation(e){let t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],m=s.samplers[p.sampler],f=p.target,v=f.node,x=s.parameters!==void 0?s.parameters[m.input]:m.input,g=s.parameters!==void 0?s.parameters[m.output]:m.output;f.node!==void 0&&(a.push(this.getDependency("node",v)),o.push(this.getDependency("accessor",x)),l.push(this.getDependency("accessor",g)),c.push(m),h.push(f))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],m=u[2],f=u[3],v=u[4],x=[];for(let y=0,M=d.length;y<M;y++){let S=d[y],b=p[y],E=m[y],U=f[y],_=v[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let T=i._createAnimationTracks(S,b,E,U,_);if(T)for(let I=0;I<T.length;I++)x.push(T[I])}let g=new xs(r,void 0,x);return Ii(g,s),g})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Ny)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,m=u[0];h.pivot=new D().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Qr:c.length>1?h=new tt:c.length===1?h=c[0]:h=new _t,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ii(h,r),r.extensions&&hr(i,h,r),r.matrix!==void 0){let u=new Ce;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],s=this,r=new tt;i.name&&(r.name=s.createUniqueName(i.name)),Ii(r,i),i.extensions&&hr(t,r,i);let a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(qo(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof Sn||d instanceof kt)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}bs[r.path]===bs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(bs[r.path]){case bs.weights:h=qi;break;case bs.rotation:h=wi;break;case bs.translation:case bs.scale:h=Yi;break;default:i.itemSize===1?h=qi:h=Yi;break}let u=s.interpolation!==void 0?Ay[s.interpolation]:Gs,d=this._getArrayFromAccessor(i);for(let p=0,m=l.length;p<m;p++){let f=new h(l[p]+"."+bs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Fp(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof wi?zp:xh;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Dy(n,e,t){let i=e.attributes,s=new on;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let h=Fp(Ca[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){let f=Fp(Ca[d.componentType]);l.multiplyScalar(f)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;let a=new bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function Mg(n,e,t){let i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(let a in i){let o=Op[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){let a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return Ke.workingColorSpace!==Mn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Ii(n,e),Dy(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Cy(n,e.targets,t):n})}var wg="assets/chars/",Uy=.55,At={ready:!1,failed:!1,ranger:null,clips:{},custs:[]},ur=At;function zy(n){let e=document.createElement("canvas");e.width=n.width,e.height=n.height;let t=e.getContext("2d");t.drawImage(n,0,0);let i=n.width/8,s=n.height/4,r=(o,l,c,h,u=1)=>{let d=t.createLinearGradient(0,l*s,0,(l+1)*s);d.addColorStop(0,c),d.addColorStop(1,h),t.fillStyle=d,t.fillRect(o*i,l*s,i*u,s)};r(5,0,"#ff9a3c","#d4601a",2),r(2,2,"#ff9a3c","#c95a18"),r(0,1,"#3a4766","#151b2c"),r(1,2,"#3a4766","#151b2c");let a=new Tt(e);return a.colorSpace=je,a.flipY=!1,a}function Tg(){if(At.loading)return At.loading;let n=new Ko,e=t=>new Promise((i,s)=>n.load(wg+t,i,void 0,s));return At.loading=Promise.all([e("Ranger.glb"),e("Rig_Medium_General.glb"),e("Rig_Medium_MovementBasic.glb")]).then(([t,i,s])=>{t.scene.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.frustumCulled=!1,/Quiver|Cape/.test(r.name)&&(r.visible=!1),r.material&&r.material.map&&!At._tex&&(At._tex=zy(r.material.map.image)),r.material&&At._tex&&(r.material=r.material.clone(),r.material.map=At._tex,r.material.roughness=.7,r.material.metalness=0))}),At.ranger=t.scene;for(let r of[...i.animations,...s.animations])At.clips[r.name]=r;return At.ready=!0,At}).catch(t=>(At.failed=!0,console.warn("char load failed",t),At)),At.loading}function Eg(){let n=new Ko,e=t=>new Promise(i=>n.load(wg+t,i,void 0,()=>i(null)));return Promise.all(["male-d","female-b","male-e","female-d","male-a","female-f"].map(t=>e("character-"+t+".glb"))).then(t=>{At.custs=t.filter(Boolean).map(i=>({scene:i.scene,clips:i.animations}));for(let i of At.custs)i.scene.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.frustumCulled=!1)});return At.custs.length})}var Sg=new ct,vh=new ct,In=new D,_h=new D,yh=new D,kp=new D;function Hp(n,e,t,i){if(n.getWorldPosition(In),e.getWorldPosition(_h),yh.subVectors(_h,In).normalize(),kp.subVectors(t,In).normalize(),yh.lengthSq()<1e-6||kp.lengthSq()<1e-6)return;Sg.setFromUnitVectors(yh,kp),n.getWorldQuaternion(vh),vh.premultiply(Sg);let s=new ct;n.parent.getWorldQuaternion(s),vh.premultiply(s.invert()),n.quaternion.slerp(vh,i),n.updateMatrixWorld(!0)}var Zo=class{constructor(){this.group=new tt,this.tilt=new tt,this.group.add(this.tilt);let e=this.char=qo(At.ranger),t=new on().setFromObject(e),i=t.max.y-t.min.y;this.k=1.8/i,e.scale.setScalar(this.k),this.hipY=.85,this.tilt.position.y=this.hipY,e.position.y=-this.hipY-t.min.y*this.k,this.tilt.add(e),this.bones={},e.traverse(c=>{c.isBone&&(this.bones[c.name]=this.bones[c.name.replace(/([lr])$/,".$1")]=c)}),this.mixer=new $s(e),this.acts={};for(let c of["Idle_A","Running_A","Walking_A","Jump_Idle","Jump_Start","Jump_Land","Hit_A","Death_A","Throw","Interact"]){if(!At.clips[c])continue;let h=this.mixer.clipAction(At.clips[c]);this.acts[c]=h,/Death|Jump_Land|Jump_Start|Throw|Hit/.test(c)&&(h.setLoop(Rd),h.clampWhenFinished=!0)}this.cur=null,this.play("Idle_A");let s=this.okamochi=new tt,r=new Ue({color:13225683,metalness:.75,roughness:.3}),a=new ue(new Qe(.36,.3,.24).translate(0,-.2,0),r);a.castShadow=!0;let o=new ue(new Ys(.07,.015,6,12,Math.PI).translate(0,-.02,0),r),l=new ue(new Qe(.2,.1,.005).translate(0,-.18,.123),new Ue({color:11676194}));s.add(a,o,l),this.group.add(s),s.visible=!1,this.guns=[];for(let c of["l","r"]){let h=this.bones["wrist."+c];if(!h)continue;let u=new ue(new Qe(.09,.09,.14),new Ue({color:14251818,emissive:14251818,emissiveIntensity:.3}));u.scale.setScalar(1/this.k),h.add(u),this.guns.push(u)}this.handWorld=new D,this.state="idle",this.phase=0,this.lastThrow=0,this._t=new D}play(e,t=.18){let i=this.acts[e];!i||this.cur===i||(i.reset().setEffectiveWeight(1).fadeIn(t).play(),this.cur&&this.cur.fadeOut(t),this.cur=i)}update(e,t){let i=this.group;i.position.set(e.x,e.y,e.z);let s=Math.hypot(e.vx,e.vz),r=0,a=0,o;e.wreck>0?o="down":e.climbing?o="climb":e.rope?o=e.zipping?"zip":"swing":e.grounded?s>.6?o="run":o="idle":o="air",o!==this.state&&this.state==="air"&&(o==="run"||o==="idle")&&this.play("Jump_Land",.08);let l=this.cur===this.acts.Jump_Land&&this.cur.time<.35;this.state=o;let c=e.yaw;if(o==="down"?this.play("Death_A",.15):o==="climb"?(c=Math.atan2(-e.climbing.nx,-e.climbing.nz),this.play("Running_A"),this.acts.Running_A.timeScale=.55,r=.1):o==="swing"||o==="zip"||o==="air"?this.play("Jump_Idle",.2):o==="run"&&!l?(this.play("Running_A"),this.acts.Running_A.timeScale=Math.min(1.5,.55+s*.09),r=Math.min(.2,s*.015)):o==="idle"&&!l&&this.play("Idle_A"),i.rotation.set(0,c,0),o==="swing"||o==="zip"){let d=e.rope.x-e.x,p=e.rope.y-(e.y+1.2),m=e.rope.z-e.z,f=Math.cos(c),v=Math.sin(c),x=d*f-m*v,g=d*v+m*f;r=Math.atan2(g,Math.max(.5,p))*.8,a=-Math.atan2(x,Math.max(.5,p))*.8}e.stun>0&&o==="air"&&(this.phase+=t*14,a=Math.sin(this.phase)*.8,r=Math.cos(this.phase*.7)*.9);let h=1-Math.exp(-t*10);if(e.rollT>0&&e.grounded){this.play("Jump_Idle",.06);let d=1-e.rollT/Uy;this.tilt.rotation.x=d*Math.PI*2,this.tilt.rotation.z=0,this.tilt.position.y=this.hipY*(1-.45*Math.sin(d*Math.PI)),this.rolling=!0}else this.rolling&&(this.rolling=!1,this.tilt.rotation.x=0,this.tilt.position.y=this.hipY),this.tilt.rotation.x+=(r-this.tilt.rotation.x)*h,this.tilt.rotation.z+=(a-this.tilt.rotation.z)*h;this.mixer.update(t),i.updateMatrixWorld(!0);let u=this.bones;if(e.rope&&u["upperarm.l"]){this._t.set(e.rope.x,e.rope.y,e.rope.z),u["upperarm.l"].getWorldPosition(In),u["upperarm.r"].getWorldPosition(_h);let p=In.distanceToSquared(this._t)<=_h.distanceToSquared(this._t)?"l":"r";Hp(u["upperarm."+p],u["lowerarm."+p],this._t,1),Hp(u["lowerarm."+p],u["wrist."+p],this._t,1),u["hand."+p].getWorldPosition(this.handWorld)}else if(o==="climb"&&u["upperarm.l"]){this.phase+=t*9;for(let[d,p]of[["l",0],["r",Math.PI]]){let m=.5+.5*Math.sin(this.phase+p);u["upperarm."+d].getWorldPosition(In),this._t.set(In.x,In.y+1,In.z).addScaledVector(yh.set(Math.sin(c),0,Math.cos(c)),.25+m*.15),this._t.y+=m*.3,Hp(u["upperarm."+d],u["lowerarm."+d],this._t,.9)}}u.hips&&(u.hips.getWorldPosition(In),i.worldToLocal(In),this.okamochi.position.set(In.x+.36,In.y+.38,In.z+.04),this.okamochi.rotation.set(this.tilt.rotation.x*.4,0,this.tilt.rotation.z*.4))}updateParts(){return[]}applyDents(){}resetParts(){}dispose(){this.mixer.stopAllAction(),this.group.traverse(e=>{e.geometry&&!e.isSkinnedMesh&&e.geometry.dispose()})}};var On=n=>new Ue({color:n,roughness:.8});function Oy(){let n=new tt,e=On(14256442),t=On(2759956),i=On(15983300),s=new ue(new ri(.16,.34,4,10),e);s.rotation.x=Math.PI/2,s.position.y=.3;let r=new ue(new ri(.11,.24,4,8),i);r.rotation.x=Math.PI/2,r.position.set(0,.24,.02);let a=new ue(new Rn(.15,12,10),e);a.scale.set(1.1,.95,1),a.position.set(0,.42,.3);for(let l of[-1,1]){let c=new ue(new fs(.06,.12,4),e);c.position.set(l*.08,.56,.29),c.rotation.z=-l*.25,n.add(c);let h=new ue(new Rn(.025,6,6),t);h.position.set(l*.06,.45,.43),n.add(h);for(let u of[-.16,.16]){let d=new ue(new Et(.035,.03,.2,6),e);d.position.set(l*.09,.12,u),n.add(d)}}for(let l of[-.12,0,.12]){let c=new ue(new Ys(.165,.012,4,14,Math.PI),On(10246688));c.rotation.set(0,Math.PI/2,0),c.position.set(0,.3,l),n.add(c)}let o=new ue(new oa(new ra([new D(0,.32,-.3),new D(0,.45,-.45),new D(0,.62,-.4)]),8,.03,6),e);return n.add(s,r,a,o),n.traverse(l=>{l.isMesh&&(l.castShadow=!0)}),n}function Fy(){let n=new pn(.55,3,1,18);n.translate(0,1.5,0);let e=new ue(n,new Ue({color:16052712,roughness:.95,side:bt}));e.castShadow=!0;let t=new tt;t.add(e);for(let i of[-1,1]){let s=new ue(new ia(.045,10),new Ct({color:1118481,side:bt}));s.position.set(i*.1,2.75,.02),s.userData.eye=!0,t.add(s)}return t.userData.cloth=e,t.userData.base=n.attributes.position.array.slice(),t}function By(){let n=new tt,e=new ue(new fs(.75,.9,12,1,!0),new Ue({color:8011663,roughness:.7,side:bt}));e.position.y=1.15;for(let o=0;o<12;o++){let l=o/12*Math.PI*2,c=new ue(new Et(.012,.012,1.17,4),On(15259304));c.position.set(Math.sin(l)*.37,1.15,Math.cos(l)*.37),c.rotation.set(Math.cos(l)*.69,0,-Math.sin(l)*.69),n.add(c)}let t=new ue(new Rn(.17,12,10),On(16777215));t.scale.z=.5,t.position.set(0,1.08,.5);let i=new ue(new Rn(.08,10,8),On(1118481));i.position.set(0,1.08,.58);let s=new ue(new ri(.06,.3,4,8),On(14169146));s.position.set(0,.78,.48),s.rotation.x=.5;let r=new ue(new Et(.05,.05,.8,8),On(15123610));r.position.y=.35;let a=new ue(new Qe(.16,.06,.32),On(9067051));return a.position.y=0,n.add(e,t,i,s,r,a),n.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),n.userData.tongue=s,n}function ky(n){let e=new tt,t=new ue(new fs(.75,.35,10,1,!0),new Ue({color:n,roughness:.6,side:bt}));t.position.y=.9;let i=new ue(new Et(.015,.015,.95,5),On(3355443));return i.position.y=.45,e.add(t,i),e}var Jo=class{constructor(e,t="normal"){if(this.group=new tt,this.t=Math.random()*10,this.ok=!1,this.kind=t,this.look=e,this.body=new tt,this.group.add(this.body),t==="cat"){this.prop=Oy(),this.body.add(this.prop),this.ok=!0;return}if(t==="ittan"){this.prop=Fy(),this.body.add(this.prop),this.ok=!0;return}if(t==="karakasa"){this.prop=By(),this.body.add(this.prop),this.ok=!0;return}if(!At.custs.length)return;let i=At.custs[(e%At.custs.length+At.custs.length)%At.custs.length],s=qo(i.scene),r=new on().setFromObject(s),a=1.35/(r.max.y-r.min.y);s.scale.setScalar(a),s.position.y=-r.min.y*a,t==="heavy"&&s.scale.set(a*1.55,a*1.02,a*1.5),this.body.add(s),this.mixer=new $s(s);let o=i.clips.find(c=>c.name==="idle");o&&this.mixer.clipAction(o).play();let l={};if(s.traverse(c=>{c.name&&(l[c.name]=c),c.isMesh&&(c.castShadow=!0)}),t==="kappa"){s.traverse(u=>{u.isMesh&&u.material&&(u.material=u.material.clone(),u.material.color=new ye(8176746))});let c=new ue(new Et(.17,.15,.04,14),On(15921902));c.position.y=1.4;let h=new ue(new Et(.13,.13,.02,14),new Ue({color:8374527,roughness:.1,metalness:.2}));h.position.y=1.425,this.body.add(c,h),this.water=h}if(t==="salary"&&(this.umb=ky(1909811),this.umb.position.set(.18,.9,0),this.body.add(this.umb)),t==="selfie"){let c=new ue(new Qe(.08,.15,.015),On(2106408));this.phone=c,(l["arm-right"]||this.body).add(c),c.position.set(0,-.35,.08)}this.b=l,this.ok=!0}update(e,t){if(!this.ok)return;this.t+=t;let i=this.t,s=this.kind;if(this.body.rotation.set(0,0,0),this.body.position.set(0,0,0),s==="cat"){e==="fall"?this.body.rotation.set(i*7,i*3,0):e==="warn"?this.body.rotation.z=Math.sin(i*6)*.25:e==="landed"&&(this.body.rotation.x=Math.sin(i*4)*.1);return}if(s==="ittan"){let u=this.prop.userData.cloth.geometry.attributes.position,d=this.prop.userData.base,p=e==="fall"?.35:e==="carried"?.12:.2;for(let m=0;m<u.count;m++){let f=d[m*3+1];u.array[m*3+2]=Math.sin(f*2.2-i*5)*p*(f/3)}u.needsUpdate=!0,e==="fall"&&this.body.rotation.set(.9+Math.sin(i*2)*.3,0,Math.sin(i*1.3)*.5),e==="carried"&&(this.body.rotation.x=1.3,this.body.position.set(0,-.2,-.6));return}if(s==="karakasa"){let u=this.prop;e==="fall"?this.body.rotation.set(Math.sin(i*3)*.2,i*1.5,Math.cos(i*2.5)*.2):e==="warn"&&(this.body.position.y=Math.abs(Math.sin(i*6))*.25),u.userData.tongue.rotation.x=.5+Math.sin(i*8)*.3,e==="carried"?this.body.scale.setScalar(.7):this.body.scale.setScalar(1);return}let r=this.b;this.mixer.update(t);let a=r["arm-right"],o=r["arm-left"],l=r["leg-right"],c=r["leg-left"],h=r.head;if(e==="warn")this.body.rotation.x=Math.sin(i*5)*.28,a&&a.rotation.set(i*11,0,.4),o&&o.rotation.set(i*11+Math.PI,0,-.4),s==="selfie"&&a&&a.rotation.set(-2.2,0,.6),s==="thrill"&&(a&&a.rotation.set(-3,0,.3),o&&o.rotation.set(-3,0,-.3));else if(e==="fall")if(s==="salary")this.body.rotation.z=Math.sin(i*2)*.15,a&&a.rotation.set(-2.9,0,.2),l&&(l.rotation.x=Math.sin(i*3)*.2),c&&(c.rotation.x=-Math.sin(i*3)*.2);else if(s==="selfie")this.body.rotation.set(-.3,i*.6,0),a&&a.rotation.set(-2.2,0,.6),o&&o.rotation.set(-2.8,0,-.4);else if(s==="thrill")this.body.rotation.set(-.5,i*2.2,0),a&&a.rotation.set(-3,0,.9),o&&o.rotation.set(-3,0,-.9),l&&(l.rotation.z=.5),c&&(c.rotation.z=-.5);else{let u=s==="heavy"?.6:1;this.body.rotation.set(Math.sin(i*2.2*u)*.6,i*1.4*u,Math.cos(i*1.7*u)*.4),a&&a.rotation.set(-2.6+Math.sin(i*18)*.7,0,.3),o&&o.rotation.set(-2.6+Math.cos(i*18)*.7,0,-.3),l&&(l.rotation.x=Math.sin(i*16)*.8),c&&(c.rotation.x=-Math.sin(i*16)*.8),h&&(h.rotation.x=-.4)}else e==="carried"?(s==="thrill"?(a&&a.rotation.set(-1.2,0,-.9),o&&o.rotation.set(-1.2,0,.9),h&&(h.rotation.y=Math.sin(i*1.5)*.5)):(a&&a.rotation.set(-1.4,0,.5),o&&o.rotation.set(-1.4,0,-.5)),l&&(l.rotation.x=-.5+Math.sin(i*6)*.15),c&&(c.rotation.x=-.5-Math.sin(i*6)*.15)):e==="landed"?(this.body.rotation.x=-.35,this.body.position.y=-.35,l&&(l.rotation.x=-1.5),c&&(c.rotation.x=-1.4),s==="thrill"?(a&&a.rotation.set(-3+Math.sin(i*9)*.3,0,.4),o&&o.rotation.set(-3,0,-.4)):(a&&a.rotation.set(.6+Math.sin(i*7)*.3,0,.2),o&&o.rotation.set(0,0,-.2)),h&&(h.rotation.z=Math.sin(i*3)*.15)):e==="saved"&&(a&&a.rotation.set(-2.75+Math.sin(i*9)*.35,0,0),h&&(h.rotation.z=Math.sin(i*2.3)*.08));this.umb&&(this.umb.visible=e!=="carried")}};var me={radius:.42,height:1.75,walk:8,back:4,accel:38,airAccel:9,turn:3.4,airTurn:1.8,gravity:21,jump:8.6,coyote:.12,stepUp:1.3,climb:11,wireRange:75,wireMinUp:3,pump:13,steerAssist:2.2,reel:4,reelK:.14,reelMax:12,reelVmax:26,minRope:6,swingLow:6,zip:18,reelSpeed:7,zipAcc:22,zipCd:1,zipExit:7.5,groundWireAcc:48,groundWireBoost:9,groundWireRelease:4,groundWireKick:4,groundWireHop:3.5,groundWireMaxT:3,maxSpeed:38,ropeG:1,releaseVyMax:9,drag:.012,releaseKick:1.2,downSec:3.2,waterY:-1.2,hitSpeed:7,stompVy:7,stompBounce:11,hideCombo:6,hideCd:20,hideSec:4,sneak:2.6,netSec:2.6,netMash:.12,pitSec:2.2,pitMash:.15,pitDepth:2.2,crawlUp:11,crawlDown:7,crawlSide:5,wallKick:6,rollSpeed:17,rollSec:.55,rollCd:.3},Vp=(n,e,t)=>n<e?e:n>t?t:n;function Ag({id:n,name:e="",spawn:t,paint:i=null,bot:s=!1}){return{id:n,name:e,bot:s,isRunner:!0,carId:"runner",paint:i,levels:{},stats:{durability:1,maxSpeed:me.maxSpeed,boostCap:1,mass:.2},x:t.x,y:t.y||0,z:t.z,vx:0,vy:0,vz:0,yaw:t.yaw||0,pitch:0,roll:0,wp:0,wr:0,grounded:!0,airTime:0,lastAir:0,surf:"road",coyote:0,boost:0,boostLock:!1,boosting:!1,heat:0,overheat:!1,zipCd:0,zipping:!1,zipPrev:!1,dmg:{body:1,engine:1,tires:1,susp:1,cool:1},dents:[],flat:!1,wreck:0,freeze:0,stun:0,falling:!1,knock:!1,rollT:0,rollCdT:0,rollDir:null,respawnPoint:{x:t.x,y:t.y||0,z:t.z,yaw:t.yaw||0},safeHist:[],safeT:0,rope:null,wirePrev:!1,jumpPrev:!1,combo:0,swings:0,climbing:null,onRoof:!1,roofTime:0,groundY:0,net:0,pit:0,pitAt:null,sneaking:!1,sneakPrev:!1,breaks:0,maxAir:0,t:0,drifting:!1,slip:0,repairing:!1,events:[]}}function Hy(n){return Math.hypot(n.vx,n.vz)}function Rg(n,e,t){return n.nearby(e,t).filter(i=>!i.def&&!i.slab&&i.y1!=null)}function Cg(n,e,t){let i=Math.cos(n.yaw||0),s=Math.sin(n.yaw||0),r=e-n.cx,a=t-n.cz;return{u:r*i-a*s,v:r*s+a*i,c:i,s}}function Pa(n,e,t,i){let s=n.groundAt(e,t,i+.5).h,r=null;for(let a of Rg(n,e,t)){if(a.y1>i+.6||a.y1<=s)continue;let o=Cg(a,e,t);Math.abs(o.u)<=a.hw+.15&&Math.abs(o.v)<=a.hl+.15&&(s=a.y1,r=a)}return{h:s,roof:r}}function Pg(n,e,t,i,s,r,a,o){let l=Math.cos(n.yaw||0),c=Math.sin(n.yaw||0),h=(e-n.cx)*l-(i-n.cz)*c,u=(e-n.cx)*c+(i-n.cz)*l,d=s*l-a*c,p=s*c+a*l,m=0,f=o;for(let[v,x,g,y]of[[h,d,-n.hw,n.hw],[t,r,n.y0,n.y1],[u,p,-n.hl,n.hl]]){if(Math.abs(x)<1e-9){if(v<g||v>y)return-1;continue}let M=(g-v)/x,S=(y-v)/x;if(M>S){let b=M;M=S,S=b}if(M>m&&(m=M),S<f&&(f=S),m>f)return-1}return m}function Ig(n){return n._anchorBoxes||(n._anchorBoxes=n.colliders.filter(e=>!e.slab&&e.y1!=null&&e.y1-e.y0>6&&(e.kind==="building"||e.kind==="bound"))),n._anchorBoxes}function Lg(n,e,t,i,s,r,a,o=400){let l=-1;for(let c of Ig(n)){let h=Pg(c,e,t,i,s,r,a,o);h>0&&(l<0||h<l)&&(l=h)}return l<0?null:{x:e+s*l,y:t+r*l,z:i+a*l}}var Gy=[58,48,68,40,76,32],Vy=[0,18,-18,36,-36,54,-54,70,-70,84,-84];function pr(n,e,t=null,i=null){let s=i?i.pitch:56,r=i?i.yawK:.012,a=Math.hypot(e.vx,e.vz),o=Math.sin(t??e.yaw),l=Math.cos(t??e.yaw);if(a>6&&t==null){o=o*(1-.45)+e.vx/a*.45,l=l*(1-.45)+e.vz/a*.45;let x=Math.hypot(o,l);o/=x,l/=x}let c=e.x,h=e.y+1.5,u=e.z,p=Ig(n).filter(v=>Math.abs(v.cx-c)<me.wireRange+v.hw&&Math.abs(v.cz-u)<me.wireRange+v.hl&&v.y1>h+me.wireMinUp),m=null,f=-1e9;for(let v of Vy){let x=Math.atan2(o,l)+v*Math.PI/180,g=Math.sin(x),y=Math.cos(x);for(let M of Gy){let S=M*Math.PI/180,b=g*Math.cos(S),E=Math.sin(S),U=y*Math.cos(S),_=-1;for(let R of p){let P=Pg(R,c,h,u,b,E,U,me.wireRange);P>0&&(_<0||P<_)&&(_=P)}if(_<0)continue;let T=h+E*_,I=_*Math.cos(S);if(T<h+me.wireMinUp||I<5)continue;let w=-Math.abs(v)*r-Math.abs(M-s)*.04-Math.abs(_-28)*.05-(_>55?(_-55)*.1:0);w>f&&(f=w,m={x:c+b*_,y:T,z:u+U*_,len:_})}}return m}function Ng(n,e=null){let t=n.safeHist,i=e||(t.length>=4?t[Math.max(0,t.length-8)]:n.respawnPoint);n.x=i.x,n.z=i.z,n.y=i.y||0,n.vx=n.vy=n.vz=0,n.yaw=i.yaw||n.yaw,n.rope=null,n.climbing=null,n.stun=0,n.falling=!1,n.grounded=!0,n.airTime=0,n.freeze=.5,n.safeHist=[],n.events.push({t:"respawn",repair:!1})}function Wp(n,e,t,i){n.t+=t,n.repairing=!1,n.boosting=!1;let s=n.events;if(n.wreck>0){n.wreck-=t,n.rope=null,n.climbing=null,Mh(n,0,t,i,!0),n.vx*=.9,n.vz*=.9,n.wreck<=0&&(n.wreck=0,n.dmg.body=Math.max(n.dmg.body,wa.wreckRepairTo),n.freeze=.4,s.push({t:"respawn",repair:!0}));return}if(n.freeze>0){n.freeze-=t,n.rope=null,Mh(n,0,t,i,!0),n.vx*=.8,n.vz*=.8;return}if(e.respawn){Ng(n);return}let r=!!e.jump,a=!!e.wire,o=r&&!n.jumpPrev||a&&!n.wirePrev;if(n.net>0){n.jumpPrev=r,n.wirePrev=a,o&&(n.net-=me.netMash,s.push({t:"struggle"})),n.net-=t,n.rope=null,n.climbing=null,Mh(n,0,t,i,!0),n.grounded&&(n.vx*=.85,n.vz*=.85),n.net<=0&&(n.net=0,s.push({t:"netFree"}));return}if(n.pit>0){n.jumpPrev=r;let T=a&&!n.wirePrev;n.wirePrev=a,n.pit-=t,r&&o&&(n.pit-=me.pitMash,s.push({t:"struggle"})),n.vx=n.vz=0,n.vy=0,n.x=n.pitAt.x+(n.x-n.pitAt.x)*.9,n.z=n.pitAt.z+(n.z-n.pitAt.z)*.9,n.y=n.pitAt.y-me.pitDepth,n.grounded=!0;let I=null;if(T&&(n.y=n.pitAt.y,I=pr(i,n),n.y=n.pitAt.y-me.pitDepth,I||s.push({t:"wireMiss"})),I||n.pit<=0){if(n.pit=0,n.y=n.pitAt.y+.1,n.vy=I?me.jump*1.1:me.jump,n.grounded=!1,I){let w=Math.hypot(I.x-n.x,I.y-(n.y+1.2),I.z-n.z);n.rope={x:I.x,y:I.y,z:I.z,len:Math.max(me.minRope,w*.9),t:0},n.combo=1,s.push({t:"wire",x:I.x,y:I.y,z:I.z,combo:1})}s.push({t:"pitOut",wire:!!I})}return}let l=!!e.sneak;l&&!n.sneakPrev&&n.grounded&&n.stun<=0&&(n.sneaking=!n.sneaking,s.push({t:"sneak",on:n.sneaking})),n.sneakPrev=l;let c=e.throttle||0,h=e.brake||0,u=e.steer||0,d=!!e.jump,p=!!e.wire,m=d&&!n.jumpPrev,f=p&&!n.wirePrev;n.jumpPrev=d,n.wirePrev=p;let v=!!e.roll,x=v&&!n.rollPrev;n.rollPrev=v,n.rollT>0&&(n.rollT=Math.max(0,n.rollT-t)),n.rollCdT>0&&(n.rollCdT=Math.max(0,n.rollCdT-t)),(!n.grounded||n.climbing)&&(n.rollT=0),n.stun>0&&(n.stun-=t,c=h=u=0);let g=!1,y=!1;n.zipPrev=g,n.zipCd=0,g&&n.rope&&n.stun<=0?(n.zipping||s.push({t:"zip"}),n.zipping=!0):(n.zipping=!1,y&&!n.rope&&n.stun<=0&&s.push({t:"zipNo"}));let M=n.stun>0||n.climbing?null:e.moveDir;if(M){let I=Math.atan2(M.x,M.z)-n.yaw;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;let w=(n.grounded?me.turn:me.airTurn)*4*t;n.yaw+=Math.max(-w,Math.min(w,I)),n.grounded&&(c*=Math.max(.15,Math.cos(Math.min(Math.abs(I),Math.PI/2)))),u=0}let S=n.climbing?0:(n.grounded?me.turn:n.rope?me.airTurn*1.2:me.airTurn)*u;n.yaw-=S*t;let b=Math.sin(n.yaw),E=Math.cos(n.yaw),U=M?M.x:b,_=M?M.z:E;if(f&&n.stun<=0)if(n.rope)dr(n,!0);else if(n.climbing&&!e.wireAt){let T=n.climbing;n.climbing=null,n.vy=me.jump*.9,n.vx=T.nx*me.wallKick,n.vz=T.nz*me.wallKick,n.yaw=Math.atan2(T.nx,T.nz),s.push({t:"jump",wall:!0})}else if(e.wireAt&&e.wireAt.ground){let T=e.wireAt,I=Math.hypot(T.x-n.x,T.y-(n.y+1.2),T.z-n.z);if(n.grounded||n.climbing||I>me.wireRange||T.y>n.y-1)s.push({t:"wireMiss",ground:!0,far:I>me.wireRange,x:T.x,y:T.y,z:T.z,d:I});else{n.rope={x:T.x,y:T.y,z:T.z,len:I,t:0,ground:!0},n.swings++;let w=(T.x-n.x)/I,R=(T.y-(n.y+1.2))/I,P=(T.z-n.z)/I;n.vx+=w*me.groundWireBoost,n.vy+=R*me.groundWireBoost,n.vz+=P*me.groundWireBoost;let L=Math.hypot(n.vx,n.vy,n.vz);if(L>me.maxSpeed){let B=me.maxSpeed/L;n.vx*=B,n.vy*=B,n.vz*=B}s.push({t:"wire",ground:!0,x:T.x,y:T.y,z:T.z,combo:n.combo})}}else{n.sneaking=!1;let T=n.grounded;n.grounded&&(n.vy=Math.max(n.vy,me.jump*.85),n.grounded=!1,n.y+=.05,s.push({t:"jump"}));let I=null,w=e.wireAt;if(w){let R=Math.hypot(w.x-n.x,w.y-(n.y+1.5),w.z-n.z);R<=me.wireRange&&w.y>n.y+2?I={x:w.x,y:w.y,z:w.z,len:R}:(I=pr(i,n,Math.atan2(w.x-n.x,w.z-n.z)),I||(s.push({t:"wireMiss",far:!0,x:w.x,y:w.y,z:w.z,d:R}),I=!1))}if(I===null&&(I=pr(i,n,e.wireYaw,e.wireAim)),I){let R=Math.hypot(I.x-n.x,I.y-(n.y+1.2),I.z-n.z),P=Pa(i,n.x,n.z,n.y).h+me.swingLow,L=Math.max(me.minRope,I.y-(P+1.2));n.rope={x:I.x,y:I.y,z:I.z,len:Math.min(L,R*1.5,me.wireRange),t:0},n.climbing=null;let B=Hy(n);B<12&&(n.vx+=b*(12-B),n.vz+=E*(12-B)),n.combo=T?1:n.combo+1,n.swings++,n.bestCombo=Math.max(n.bestCombo||0,n.combo),s.push({t:"wire",x:I.x,y:I.y,z:I.z,combo:n.combo})}else I==null&&s.push({t:"wireMiss"})}if(m&&n.stun<=0&&(n.grounded||n.coyote>0)&&!n.rope)n.sneaking=!1,n.vy=me.jump,n.grounded=!1,n.coyote=0,n.y+=.05,s.push({t:"jump"});else if(m&&n.rope)dr(n,!0);else if(m&&n.climbing&&n.stun<=0){let T=n.climbing;n.climbing=null,n.vy=me.jump*.9,n.vx=T.nx*me.wallKick,n.vz=T.nz*me.wallKick,n.yaw=Math.atan2(T.nx,T.nz),s.push({t:"jump",wall:!0})}if(n.climbing){let T=n.climbing,I=e.cy!=null?e.cy:c>0?c:h>0?-h:0,w=e.cx!=null?e.cx:u;if(n.stun>0)n.climbing=null,n.vy=Math.min(n.vy,2),n.vx+=T.nx*3,n.vz+=T.nz*3;else if(n.vy=I>.15?me.crawlUp*I:I<-.15?me.crawlDown*I:0,I<-.15&&n.y<=n.groundY+.05)n.climbing=null,n.vy=0,n.vx=T.nx*3,n.vz=T.nz*3,n.yaw=Math.atan2(T.nx,T.nz),s.push({t:"climbOff"});else{let R=Math.abs(w)>.15?w*me.crawlSide:0;n.vx=-T.nx*2+T.nz*R,n.vz=-T.nz*2-T.nx*R,n.yaw=Math.atan2(-T.nx,-T.nz),n.y>=T.top-.2&&I>.15&&(n.climbing=null,n.y=T.top+.05,n.vy=3.5,n.vx=-T.nx*5,n.vz=-T.nz*5,s.push({t:"vault"}))}}else if(n.grounded&&(n.rollT>0||x&&n.rollCdT<=0&&n.stun<=0&&!n.rope)){if(n.rollT<=0){let I=e.moveDir||{x:b,z:E};n.rollDir=I,n.rollT=me.rollSec,n.rollCdT=me.rollSec+me.rollCd,n.yaw=Math.atan2(I.x,I.z),s.push({t:"roll"})}let T=.75+.25*(n.rollT/me.rollSec);n.vx=n.rollDir.x*me.rollSpeed*T,n.vz=n.rollDir.z*me.rollSpeed*T}else if(n.grounded){let T=(c>0?(n.sneaking?me.sneak:me.walk)*c:h>0?-me.back*(n.sneaking?.5:1):0)*(n.speedMul||1)*(1-(n.load||0)),I=n.vx*b+n.vz*E,w=n.vx*E-n.vz*b,R=I+Vp(T-I,-me.accel*t*(h>0&&I>0?1.6:1),me.accel*t),P=w*Math.max(0,1-14*t);n.vx=b*R+E*P,n.vz=E*R-b*P}else if(c>0&&(n.vx+=U*me.airAccel*c*t,n.vz+=_*me.airAccel*c*t),h>0&&(n.vx*=1-.8*t,n.vz*=1-.8*t),n.rope&&!n.rope.ground){if(c>0&&n.vy<2){let I=me.pump*(1-(n.load||0)*1.2);n.vx+=U*I*t,n.vz+=_*I*t}let T=Math.hypot(n.vx,n.vz);if(T>3){let I=Math.min(1,me.steerAssist*t),w=n.vx/T*(1-I)+U*I,R=n.vz/T*(1-I)+_*I,P=Math.hypot(w,R)||1;n.vx=w/P*T,n.vz=R/P*T}}if(n.rope&&n.zipping){let T=n.rope,I=T.len,w=Math.max(me.minRope,I-me.reelSpeed*t);if(w<I){let R=n.x-T.x,P=n.y+1.2-T.y,L=n.z-T.z,B=Math.hypot(R,P,L)||1,k=R/B,X=P/B,ee=L/B,le=n.vx*k+n.vy*X+n.vz*ee,ae=n.vx-le*k,ne=n.vy-le*X,J=n.vz-le*ee,$=Math.min(1.25,I/w);n.vx=le*k+ae*$,n.vy=le*X+ne*$,n.vz=le*ee+J*$,T.len=w}n.boosting=!0,T.len<=me.minRope+.01&&(n.zipping=!1)}else n.zipping=!1;Mh(n,c,t,i,!1),n.grounded&&n.y>me.waterY+.5&&(n.safeT+=t,n.safeT>.3&&(n.safeT=0,n.safeHist.push({x:n.x,y:n.y,z:n.z,yaw:n.yaw}),n.safeHist.length>14&&n.safeHist.shift()))}function Gp(n,e=!0){if(!n.rope)return;let t=Math.hypot(n.vx,n.vz);if(t>.5&&(n.vx+=n.vx/t*me.groundWireKick,n.vz+=n.vz/t*me.groundWireKick),e)n.vy=Math.max(n.vy,me.groundWireHop);else{let i=Math.max(0,-n.vy-6),s=Math.hypot(n.vx,n.vz);n.vy=Math.min(Math.max(n.vy,-6),0),s>.5&&i>0&&(n.vx+=n.vx/s*i*.5,n.vz+=n.vz/s*i*.5)}n.rope=null,n.zipping=!1,n.events.push({t:"unwire",auto:!1,ground:!0})}function dr(n,e){n.rope&&(n.rope=null,n.zipping=!1,n.vy>-4&&(n.vy+=me.releaseKick),n.zipExit||(n.vy=Math.min(n.vy,me.releaseVyMax)),n.events.push({t:"unwire",auto:!e}))}function Mh(n,e,t,i,s){let r=me.radius;if(n.climbing||(n.vy-=me.gravity*(n.rope?me.ropeG:1)*t),!n.grounded){let f=1-me.drag*t*Math.hypot(n.vx,n.vy,n.vz)*.1;n.vx*=f,n.vz*=f}let a=Math.hypot(n.vx,n.vy,n.vz),o=me.maxSpeed*(1-(n.load||0)*.5);if(a>o){let f=o/a;n.vx*=f,n.vy*=f,n.vz*=f}let l=n.x,c=n.y,h=n.z;if(n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t,n.rope&&n.rope.ground){let f=n.rope;f.t+=t;let v=f.x-n.x,x=f.y-(n.y+1.2),g=f.z-n.z,y=Math.hypot(v,x,g)||1,M=(n.vx*v+n.vy*x+n.vz*g)/y,S=n.y-Pa(i,n.x,n.z,n.y).h;if(y<me.groundWireRelease||M<0&&f.t>.25||f.t>me.groundWireMaxT)Gp(n,S>3);else if(S<.8)Gp(n,!1);else{let b=me.groundWireAcc*t;n.vx+=v/y*b,n.vy+=x/y*b+me.gravity*(me.ropeG||1)*t*.9,n.vz+=g/y*b}}if(n.rope&&!n.rope.ground){let f=n.rope;f.t+=t;let v=n.x,x=n.y+1.2,g=n.z,y=v-f.x,M=x-f.y,S=g-f.z,b=Math.hypot(y,M,S);if(b>f.len){let U=y/b,_=M/b,T=S/b;n.x=f.x+U*f.len,n.y=f.y+_*f.len-1.2,n.z=f.z+T*f.len;let I=n.vx*U+n.vy*_+n.vz*T;if(I>0&&(n.vx-=I*U,n.vy-=I*_,n.vz-=I*T),_<-.35&&Math.hypot(n.vx,n.vy,n.vz)<me.reelVmax){let w=f.len,R=Math.max(me.minRope,w-Math.min(me.reelMax,me.reel+w*me.reelK)*t);if(R<w){let P=n.vx*U+n.vy*_+n.vz*T,L=Math.min(1.02,w/R);n.vx=P*U+(n.vx-P*U)*L,n.vy=P*_+(n.vy-P*_)*L,n.vz=P*T+(n.vz-P*T)*L,n.x=f.x+U*R,n.y=f.y+_*R-1.2,n.z=f.z+T*R,f.len=R}}b=f.len}let E=(n.x-f.x)*n.vx+(n.z-f.z)*n.vz>0;n.zipping||(E&&n.vy>0&&n.y+1.2-f.y>-b*.6&&f.t>.4||n.y+1.2>f.y+1||f.t>6)&&dr(n,!1)}let u=null;for(let f of Rg(i,n.x,n.z)){if(n.y>=f.y1-.05||n.y+me.height<=f.y0)continue;let v=Cg(f,n.x,n.z),x=f.hw+r-Math.abs(v.u),g=f.hl+r-Math.abs(v.v);if(x<=0||g<=0)continue;if(f.y1-n.y<=me.stepUp&&!s){n.y=f.y1,n.vy<0&&(n.vy=0);continue}if(c>=f.y1-.25){n.y=f.y1,n.vy<0&&(n.vy=0);continue}let y=0,M=0;x<g?y=Math.sign(v.u)||1:M=Math.sign(v.v)||1;let S=Math.min(x,g),b=y*v.c+M*v.s,E=-y*v.s+M*v.c;n.x+=b*S,n.z+=E*S;let U=n.vx*b+n.vz*E;U<0&&(-U>14&&!n.rope&&n.events.push({t:"bonk",speed:-U}),n.vx-=U*b,n.vz-=U*E),(!u||f.y1>u.top)&&(u={nx:b,nz:E,top:f.y1,o:f})}if(u&&!s&&!n.climbing&&!n.sneaking&&e>0&&u.top-n.y>me.stepUp){let f=Math.sin(n.yaw),v=Math.cos(n.yaw);f*-u.nx+v*-u.nz>.55&&(n.rope&&dr(n,!1),n.climbing={nx:u.nx,nz:u.nz,top:u.top},n.events.push({t:"climb"}))}n.climbing&&u&&(n.climbing.top=u.top,n.climbing.nx=u.nx,n.climbing.nz=u.nz),n.climbing&&!u&&(n.climbing=null);let d=Pa(i,n.x,n.z,Math.max(n.y,c)),p=n.grounded;if(n.y<=d.h+.02&&n.vy<=.01){let f=-n.vy;if(n.y=d.h,n.vy=0,!p){let v=n.airTime;n.lastAir=v,n.maxAir=Math.max(n.maxAir,v),n.events.push({t:"land",air:v,impact:f,roof:!!d.roof,combo:n.combo}),n.combo>=2&&n.events.push({t:"comboEnd",n:n.combo}),n.combo=0,n.groundedSince=n.t,n.rope&&dr(n,!1)}n.grounded=!0,n.airTime=0,n.coyote=me.coyote,n.climbing&&n.vy<-.1&&(n.climbing=null),n.onRoof=!!d.roof,n.surf=d.roof?"roof":i.surfaceAt(n.x,n.z)}else n.y>d.h+.25||n.vy>.01?(p&&(n.coyote=me.coyote),n.grounded=!1,n.coyote=Math.max(0,n.coyote-t),n.airTime+=t,n.onRoof=!1):(n.y=d.h,n.vy=0,n.grounded=!0,n.airTime=0);if(n.grounded&&n.rope&&n.rope.ground?Gp(n,!1):n.grounded&&n.rope&&n.rope.t>.3&&dr(n,!1),n.groundY=d.h,n.y>(n.maxY||0)&&(n.maxY=n.y),n.roofTime=n.onRoof&&n.grounded?n.roofTime+t:0,n.y<me.waterY&&!n.falling){n.falling=!0,n.events.push({t:"splash",x:n.x,z:n.z}),n.rope=null,n.climbing=null;let f=n.safeHist.length?n.safeHist[Math.max(0,n.safeHist.length-6)]:n.respawnPoint;Ng(n,f)}let m=i.bounds;n.x=Vp(n.x,m.x0+2,m.x1-2),n.z=Vp(n.z,m.z0+2,m.z1-2)}var Ae={roundSec:90,warn:5.5,gap:[2.6,1.8],firstAt:2.5,maxActive:1,pairAfter:40,pairOdds:.35,fallGap:3.5,nearPair:[6,20],fallG:5,fallMax:6.5,catchR:4,catchV:5.4,assistR:14,assistA:22,catchAir:1.9,carryMax:3,matR:4.6,ptsSave:100,ptsChain:50,ptsSwing:50,ptsGround:60,chainMax:6,nearMin:25,nearMax:80,hMin:30,hMax:62},Tn={gap:[2.6,.9],gapK:.016,active:[[0,1],[40,2],[110,3],[220,4]],warn:[7.5,4.5],warnK:.015,near:[45,.3],fallGap:[3.5,2.6],fallGapK:.006,apart:70,apartMin:45,easyUntil:30},fn={normal:{w:38,fallG:5,fallMax:6.5,catchK:1,pts:100,load:0,ja:"住人",en:"Resident"},cat:{w:10,fallG:6.5,fallMax:8,catchK:.68,pts:130,load:0,spin:!0,ja:"猫",en:"Cat"},heavy:{w:9,fallG:6,fallMax:7.6,catchK:1.2,pts:170,load:.32,ja:"ふくよかな人",en:"Big guy"},salary:{w:8,fallG:3.5,fallMax:4.4,catchK:.9,pts:90,load:0,umbrella:!0,ja:"傘のサラリーマン",en:"Umbrella salaryman"},selfie:{w:8,fallG:5,fallMax:6.5,catchK:1,pts:110,load:0,ja:"自撮りの人",en:"Selfie taker"},ittan:{w:6,fallG:2,fallMax:3.6,catchK:.9,pts:140,load:0,sway:3.2,ja:"一反木綿",en:"Ittan-momen"},kappa:{w:6,fallG:5,fallMax:6.5,catchK:1,pts:140,load:.08,ja:"河童",en:"Kappa"},karakasa:{w:6,fallG:4,fallMax:5.2,catchK:.9,pts:140,load:0,hop:1.5,ja:"から傘おばけ",en:"Umbrella spirit"},thrill:{w:3,fallG:5.5,fallMax:7,catchK:1,pts:60,load:0,ja:"落ちるのが好きな人",en:"Thrill seeker"}},Wy=Object.keys(fn),Yp={cat:{why:[["鳩を追いかけて","Chased a pigeon"],["ベランダの手すりで昼寝してた","Napping on the railing"],["蝶々に手を出した","Swatted at a butterfly"]],thanks:[["ニャッ（飼い主のおばあちゃんが泣いて喜んでる）","Mrrp. (Grandma is crying with joy)"],["ニャー（ひっかかれた）","Mew. (You got scratched)"]],oops:[["ニャッ（くるっと回って着地した）","Mrrp. (Landed on its feet)"],["（何事もなかった顔で毛づくろい）","(Grooming like nothing happened)"]],fall:[["ニャーッ","Nyaaa!"],["フシャー","Hsss!"]]},heavy:{why:[["手すりにもたれたら手すりが負けた","The railing lost"],["ベランダでスクワット","Squats on the balcony"],["布団を干そうとして布団ごと","Went with the futon"]],thanks:[["すまんのう、重いやろ","Sorry, I know I am heavy"],["ダイエットは明日からや","Diet starts tomorrow"]],oops:[["地面がへこんだだけや、平気平気","Just dented the ground. I am fine"],["おなかで弾んだ","Bounced off my belly"]],fall:[["うおおお","Whoooa"],["腹から落ちる！","Belly first!"]]},salary:{why:[["傘を開いたら風につかまった","Opened my umbrella, the wind took it"],["取引先に電話しながら","On a call with a client"]],thanks:[["恐縮です。名刺をどうぞ","Much obliged. My card"],["定時に間に合います","I will make it home on time"]],oops:[["傘のおかげでふんわり着地","The umbrella saved me"],["（スーツの汚れを払っている）","(Dusting off the suit)"]],fall:[["お先に失礼します","Excuse me, going down"],["ふわ〜","Floaty..."]]},selfie:{why:[["屋上で自撮りしてたら一歩下がりすぎた","Stepped back for a selfie"],["映える角度を探して","Looking for a good angle"]],thanks:[["今の撮れた！ ありがと","Got it on video! Thanks"],["一緒に撮ってええ？","Selfie with me?"]],oops:[["撮れ高はあった","Great footage though"],["スマホは無事","The phone is fine"]],fall:[["ライブ配信中です！","I am live!"],["いいね押して！","Smash that like!"]]},ittan:{why:[["風に乗りすぎた","Rode the wind too far"],["洗濯物にまぎれて干されていた","Got hung out with the laundry"]],thanks:[["ひらり。礼を言う","Flutter. Thank you"],["布団と間違えんといて","I am not a futon"]],oops:[["ひらひら…地面も悪くない","Flutter... the ground is fine"],["電線にひっかかるよりまし","Better than the power line"]],fall:[["ひら〜り","Flutter..."],["風よ〜","Oh wind..."]]},kappa:{why:[["屋上の貯水槽で泳いでた","Swimming in the roof tank"],["きゅうりを取ろうとして","Reaching for a cucumber"]],thanks:[["皿の水、無事や。かたじけない","My plate is still wet. Thanks"],["きゅうりを一本やろう","Have a cucumber"]],spill:[["皿の水こぼれた！ 乱暴やな","You spilled my plate! Rough!"]],oops:[["皿が乾く〜","My plate is drying!"],["尻子玉は取らんといたる","I will spare you this time"]],fall:[["皿が〜","My plate!"],["キュウッ","Kyuu!"]]},karakasa:{why:[["雨やと思って飛び出した","Thought it was raining"],["一本足で跳ねすぎた","Hopped one hop too far"]],thanks:[["ベロ〜ン（なめられた）","Bleeeh (it licked you)"],["百年使うてや","Use me for a hundred years"]],oops:[["ぴょん。平気や","Boing. All good"],["骨が一本ゆるんだ","One rib got loose"]],fall:[["ばさっ","Fwump"],["ぴょ〜ん","Boooing"]]},thrill:{why:[["わざと飛んだ","Jumped on purpose"],["バンジーのひもを忘れた","Forgot the bungee cord"]],thanks:[["えー、今ええとこやったのに","Aw, it was getting good"],["もう一回落としてくれへん？","Can you drop me again?"]],oops:[["最高やった！","That was awesome!"],["もう一回！","Again!"]],fall:[["ひゃっほー！","Wheee!"],["最高〜！","Yesss!"]]}},qp=[["布団をたたいてたら布団ごと","Beat the futon, went with it"],["屋上で自撮りしてたら一歩下がりすぎた","Took one step back for a selfie"],["鳩にパンをあげてたら押された","Shoved by pigeons I was feeding"],["飛んだ洗濯物をつかもうとして","Reached for the laundry"],["看板の電球を替えてたら","Changing a sign bulb"],["ドローンをキャッチしようとして","Tried to catch a drone"],["強い風で傘ごと持っていかれた","The wind took me and my umbrella"],["屋上で昼寝して寝返りを打った","Rolled over during a rooftop nap"],["ゴルフの素振りで勢いがつきすぎた","Golf swing, too much follow-through"],["猫を追いかけてたら猫だけ止まった","Chased a cat. The cat stopped"],["ラジオ体操で跳びすぎた","Jumped too hard at morning exercise"],["アンテナの向きを直してたら","Adjusting the antenna"],["プランターの水やりで身を乗り出した","Leaned out to water the plants"],["屋上ビアガーデンで乾杯しすぎた","Too many toasts at the rooftop bar"],["ハンモックのひもがほどけた","The hammock knot came loose"],["エアコンの室外機に話しかけてた","Was chatting with the AC unit"]],Dg={thanks:[["助かった…","Saved…"],["惚れてまうやろ","I might fall for you"],["生きてる！","I am alive!"],["ナイスキャッチ","Nice catch"],["お礼に今度おごるわ","Drinks are on me"],["もう屋上行かへん","Never going on a roof again"]],oops:[["痛ったぁ…自分で病院行くわ","Ouch… I will walk to the clinic"],["植え込みがなかったら終わってた","Thank goodness for the hedge"],["段ボールの山でよかった","Lucky there were boxes"],["誰も受けとめてくれへんやん","Nobody caught me?"]]};function Xy(n){let e=n>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ug=130/80,jy=[-320,-240,-160,-80,0,80,160,240,320].map(n=>n*Ug),qy=[40,120,200,280,360,440,520,600,680,760,840].map(n=>40+(n-40)*Ug);function Yy(n){let e=[[0,6],[1,7],[-1,5],[2,6],[0,8],[-2,7],[1,4],[3,8],[-1,9],[2,4]],t=[];for(let[i,s]of e){let r=jy[4+i],a=qy[s];r==null||a==null||n.surfaceAt(r,a)!=="road"||t.push({x:r,y:n.groundAt(r,a).h,z:a})}return t}function Ky(n,e,t,i){let r=(n._catchBlds||(n._catchBlds=n.colliders.filter(a=>a.kind==="building"&&a.y1>=Ae.hMin+4))).filter(a=>!a.yaw&&Math.abs(a.cx-t.fx)<a.hw+22&&Math.abs(a.cz-t.fz)<a.hl+22);for(let a=0;a<400&&r.length;a++){let o=r[Math.floor(e()*r.length)],l=Math.floor(e()*4),c=[1,-1,0,0][l],h=[0,0,1,-1][l],u=(e()*2-1)*.8,d=o.cx+(c?c*o.hw:u*o.hw),p=o.cz+(h?h*o.hl:u*o.hl),m=Math.hypot(d+c*1.3-t.fx,p+h*1.3-t.fz);if(m<Ae.nearPair[0]||m>Ae.nearPair[1]||n.surfaceAt(d+c*7,p+h*7)!=="road"||n.surfaceAt(d+c*12,p+h*12)!=="road"||n.colliders.some(v=>v!==o&&v.kind==="building"&&Math.abs(d+c*6-v.cx)<v.hw+1&&Math.abs(p+h*6-v.cz)<v.hl+1)||i.some(v=>Math.hypot(v.x-d,v.z-p)<Ae.nearPair[0]))continue;let f=Math.min(o.y1-2,Ae.hMin+e()*(Ae.hMax-Ae.hMin));return{ex:d,ez:p,nx:c,nz:h,top:f,roof:o.y1,bld:o}}return null}function Xp(n,e,t,i,s=Ae.nearMax,r=30){let a=n._catchBlds||(n._catchBlds=n.colliders.filter(o=>o.kind==="building"&&o.y1>=Ae.hMin+4));for(let o=0;o<1200;o++){let l=o<400?s:o<800?s*1.6:s*2.5,c=a[Math.floor(t()*a.length)];if(c.yaw)continue;let h=Math.floor(t()*4),u=[1,-1,0,0][h],d=[0,0,1,-1][h],p=(t()*2-1)*.6,m=c.cx+(u?u*c.hw:p*c.hw),f=c.cz+(d?d*c.hl:p*c.hl),v=Math.hypot(m-e.x,f-e.z);if(v<Ae.nearMin||v>l||n.surfaceAt(m+u*7,f+d*7)!=="road"||n.surfaceAt(m+u*12,f+d*12)!=="road"||n.colliders.some(g=>g!==c&&g.kind==="building"&&Math.abs(m+u*6-g.cx)<g.hw+1&&Math.abs(f+d*6-g.cz)<g.hl+1)||i.some(g=>Math.hypot(g.x-m,g.z-f)<r))continue;let x=Math.min(c.y1-2,Ae.hMin+t()*(Ae.hMax-Ae.hMin));return{ex:m,ez:f,nx:u,nz:d,top:x,roof:c.y1,bld:c}}return null}function Sh(n,e=1,t="normal"){return{mode:t,t:0,over:!1,seed:e,kinds:{},rnd:Xy(e),next:Ae.firstAt,n:0,fallers:[],carry:[],saved:0,missed:0,chain:0,bestChain:0,score:0,swingCatches:0,mats:Yy(n),log:[],events:[],fullT:0}}function Zy(n,e,t){let i=n.fallers.filter(h=>h.state==="warn"||h.state==="fall"),s;if(n.mode==="endless"){let h=Math.min(Ae.nearMax,Tn.near[0]+n.t*Tn.near[1]);s=Xp(e,t,n.rnd,i,h,i.length?Tn.apart:30)||(i.length?Xp(e,t,n.rnd,i,h,Tn.apartMin):null)}else s=i.length&&Ky(e,n.rnd,i[i.length-1],i)||Xp(e,t,n.rnd,i,Ae.nearMax);if(!s)return!1;let r=Jy(n),a=fn[r],o=Yp[r],l=Math.floor(n.rnd()*(o?o.why.length:qp.length)),c={id:n.n++,state:"warn",t:0,look:n.n%6,reason:l,kind:r,ph:n.rnd()*6,warnT:n.mode==="endless"?Math.max(Tn.warn[1],Tn.warn[0]-n.t*Tn.warnK):Ae.warn,x:s.ex+s.nx*.5,z:s.ez+s.nz*.5,y:s.top,fx:s.ex+s.nx*1.3,fz:s.ez+s.nz*1.3,top:s.top,roof:s.roof,nx:s.nx,nz:s.nz,vy:0,ground:e.groundAt(s.ex+s.nx*1.3,s.ez+s.nz*1.3).h};return n.fallers.push(c),n.events.push({t:"spawn",id:c.id,reason:l,kind:r,x:c.x,y:c.y,z:c.z}),!0}function Jy(n){if(n.n<2)return"normal";let e=n.mode==="endless"&&n.t<Tn.easyUntil,t=Wy.filter(r=>!(e&&(r==="cat"||r==="heavy"))),i=0;for(let r of t)i+=fn[r].w;let s=n.rnd()*i;for(let r of t)if(s-=fn[r].w,s<0)return r;return"normal"}var Kp=n=>{let e=Yp[n.kind];return e?e.why[n.reason%e.why.length]:qp[n.reason%qp.length]},wh=(n,e,t)=>{let i=Yp[n],s=i&&i[e]||Dg[e]||Dg.thanks;return s[t%s.length]},$y=n=>n.y+1.2,jp=n=>{if(n.mode==="endless")return Math.max(Tn.gap[1],Tn.gap[0]-n.t*Tn.gapK);let e=Math.min(1,n.t/Ae.roundSec);return Ae.gap[0]+(Ae.gap[1]-Ae.gap[0])*e},Qy=n=>{let e=1;for(let[t,i]of Tn.active)n>=t&&(e=i);return e};function Zp(n,e,t,i){if(n.over)return;if(n.t+=t,n.mode!=="endless"&&n.t>=Ae.roundSec){n.over=!0,n.events.push({t:"timeUp"});return}let s=n.fallers.filter(o=>o.state==="warn"||o.state==="fall").length,r=n.mode==="endless"?Qy(n.t):n.t>=Ae.pairAfter&&n.pair?2:Ae.maxActive;s>=r?n.next=Math.max(n.next,n.t+jp(n)):n.t>=n.next&&(Zy(n,i,e)?n.mode==="endless"?n.next=n.t+(s+1<r?1.2:jp(n)):!n.pair&&s===0&&n.t>=Ae.pairAfter&&n.rnd()<Ae.pairOdds?(n.pair=!0,n.next=n.t+.8):(n.pair=!1,n.next=n.t+jp(n)):n.next=n.t+.5);let a=!e.grounded&&e.y-(e.groundY||0)>Ae.catchAir;for(let o of n.fallers)if(o.t+=t,o.state==="warn"){let l=n.mode==="endless"?Math.max(Tn.fallGap[1],Tn.fallGap[0]-n.t*Tn.fallGapK):Ae.fallGap;o.t>=(o.warnT||Ae.warn)&&n.t-(n.lastFall??-99)>=l&&(n.lastFall=n.t,o.state="fall",o.t=0,o.x=o.fx,o.z=o.fz,o.vy=1.5,n.events.push({t:"fall",id:o.id,kind:o.kind,x:o.x,y:o.y,z:o.z}))}else if(o.state==="fall"){let l=fn[o.kind]||fn.normal;if(o.vy=Math.max(-l.fallMax,o.vy-l.fallG*t),l.hop&&o.t%l.hop<t&&o.t>.5&&(o.vy=Math.max(o.vy,1.6)),o.y+=o.vy*t,l.sway){let u=Math.sin(o.t*1.3+o.ph)*l.sway;o.x=o.fx+o.nz*u,o.z=o.fz-o.nx*u}let c=Math.hypot(o.x-e.x,o.z-e.z),h=o.y+.8-$y(e);if(a&&!e.climbing&&n.carry.length<Ae.carryMax&&c<Ae.assistR&&Math.abs(h)<Ae.assistR){let u=Math.hypot(o.x-e.x,h,o.z-e.z)||1,d=Ae.assistA*t;e.vx+=(o.x-e.x)/u*d,e.vz+=(o.z-e.z)/u*d,e.vy+=h/u*d*.6}if(c<Ae.catchR*l.catchK&&Math.abs(h)<Ae.catchV*l.catchK)if(n.carry.length>=Ae.carryMax)n.fullT<=0&&(n.fullT=1.5,n.events.push({t:"full"}));else{o.state="carried",o.slot=n.carry.length,n.carry.push(o),n.caught=(n.caught||0)+1;let u=!!e.rope;u&&n.swingCatches++,o.swing=u,o.catchY=Math.round(o.y-o.ground),o.onGround=!a,o.spill=o.kind==="kappa"&&Math.hypot(e.vx,e.vy,e.vz)>20,n.events.push({t:"catch",id:o.id,kind:o.kind,spill:o.spill,swing:u,h:o.catchY,n:n.carry.length,x:o.x,y:o.y,z:o.z,ground:!a});continue}if(o.y<=o.ground&&(o.y=o.ground,o.state="landed",o.t=0,n.missed++,n.chain=0,n.log.push({id:o.id,reason:o.reason,kind:o.kind,ok:!1}),n.events.push({t:"miss",id:o.id,kind:o.kind,x:o.x,y:o.y,z:o.z}),n.mode==="endless")){n.over=!0,n.lost=o.kind,n.events.push({t:"gameOver",id:o.id,kind:o.kind});return}}if(n.fullT-=t,e.load=Math.min(.5,n.carry.reduce((o,l)=>o+((fn[l.kind]||fn.normal).load||0),0)),n.carry.length&&e.grounded){let o=n.mats.find(l=>Math.hypot(l.x-e.x,l.z-e.z)<Ae.matR);if(o){let l=0;for(let c of n.carry){n.saved++;let h,u=(fn[c.kind]||fn.normal).pts;c.onGround?h=Math.round(Ae.ptsGround*u/100):(n.chain++,n.bestChain=Math.max(n.bestChain,n.chain),h=u+Ae.ptsChain*(Math.min(n.chain,Ae.chainMax)-1)+(c.swing?Ae.ptsSwing:0)),c.spill&&(h=Math.round(h/2)),n.kinds[c.kind]=(n.kinds[c.kind]||0)+1,l+=h,c.state="saved",c.t=0,c.x=o.x+(c.slot-1)*1.1,c.z=o.z+1.2,c.y=o.y,n.log.push({id:c.id,reason:c.reason,kind:c.kind,ok:!0,swing:c.swing,ground:c.onGround,h:c.catchY,pts:h})}n.score+=l,n.events.push({t:"save",n:n.carry.length,pts:l,chain:n.chain,mat:o}),n.carry=[],e.load=0}}n.fallers=n.fallers.filter(o=>!((o.state==="landed"||o.state==="saved")&&o.t>6))}var Th=n=>n.fallers.filter(e=>e.state==="warn"||e.state==="fall");function Ia(n){let e=Th(n);if(!e.length)return null;let t=i=>i.state==="warn"?(i.warnT||Ae.warn)-i.t+bh(i.top-i.ground,1.5,i.kind):bh(i.y-i.ground,i.vy,i.kind);return e.sort((i,s)=>t(i)-t(s))[0]}function bh(n,e=1.5,t="normal"){let i=fn[t]||fn.normal,s=0,r=n,a=e;for(;r>0&&s<60;)a=Math.max(-i.fallMax,a-i.fallG/30),r+=a/30,s+=1/30;return s}function $o(n,e,t){let i=null,s=1e9;for(let r of n.mats){let a=Math.hypot(r.x-e,r.z-t);a<s&&(s=a,i=r)}return i}function zg(n){return n>=1400?3:n>=800?2:n>=300?1:0}var Bg=130/80,Og=[-320,-240,-160,-80,0,80,160,240,320].map(n=>n*Bg),Fg=[40,120,200,280,360,440,520,600,680,760,840].map(n=>40+(n-40)*Bg),Eh=(n,e)=>n.reduce((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t),e_=n=>{for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n};function t_(n,e){let t=Eh(Og,n.x),i=Eh(Fg,n.z),s=Eh(Og,e.fx),r=Eh(Fg,e.fz),a={x:e.fx,z:e.fz},o=Math.abs(e.fx-s)<14,l=[{x:t,z:i},o?{x:s,z:i}:{x:t,z:r},a];for(l=l.filter((c,h)=>h===0||Math.hypot(c.x-l[h-1].x,c.z-l[h-1].z)>1);l.length>1;){let c=l[0],h=l[1];if(Math.hypot(c.x-n.x,c.z-n.z)<9||Math.hypot(h.x-n.x,h.z-n.z)<Math.hypot(h.x-c.x,h.z-c.z)+2)l.shift();else break}return l}function kg(n,e=1){let t=e*7919+13>>>0||1;return{kind:n,plan:null,idx:0,replan:0,wT:0,prevW:!1,prevJ:!1,stuck:0,lx:0,lz:0,tgt:null,seen:0,rnd:()=>(t=t*16807%2147483647,t/2147483647)}}function Hg(n,e,t,i,s){let r={throttle:0,steer:0};if(t.over||n.kind==="idle")return r;let a=n.kind==="clumsy",o=t.mode==="endless"?t.carry.length>=Ae.carryMax||t.carry.length>=1&&!Ia(t):t.carry.length>=2||t.carry.length>=1&&t.t>Ae.roundSec-15,l=t.carry.length<Ae.carryMax&&!o?Ia(t):null;if(l&&n.tgt!==l.id&&(n.tgt=l.id,n.seen=0),n.seen+=s,l&&a&&n.seen<1&&(l=null),!l&&!t.carry.length)return n.plan=null,e.climbing&&(r.wire=!n.prevJ,n.prevJ=r.wire),r;let c,h=null;if(l){let g=l.fx-l.nx*1.3,y=l.fz-l.nz*1.3;h={ex:g,ez:y,nx:l.nx,nz:l.nz},c={fx:g+l.nx*7,fz:y+l.nz*7,x:g,z:y}}else{let g=$o(t,e.x,e.z);c={fx:g.x,fz:g.z,x:g.x,z:g.z}}n.replan-=s;let u=c.fx.toFixed(0)+","+c.fz.toFixed(0);for((!n.plan||n.goalKey!==u||n.replan<=0)&&(n.plan=t_(e,c),n.idx=0,n.replan=1.5,n.goalKey=u);n.idx<n.plan.length-1&&Math.hypot(n.plan[n.idx].x-e.x,n.plan[n.idx].z-e.z)<9;)n.idx++;let d=Math.hypot(c.x-e.x,c.z-e.z);if(e.climbing&&h&&Math.hypot(h.ex-e.x,h.ez-e.z)<14){let g=e.climbing.nz,y=-e.climbing.nx,M=(l.fx-e.x)*g+(l.fz-e.z)*y,S=l.state==="warn"?Math.min(l.top-4,l.top*.6):l.y+.2;return r.cx=Math.abs(M)>.4?Math.sign(M):0,r.cy=e.y+1.2<S-.6?1:e.y+1.2>S+2.5&&l.state==="fall"?-.6:0,a&&(r.cx*=.6,n.rnd()<.3&&(r.cy=0)),l.state==="fall"&&e.y+1.2>l.y+2&&Math.abs(M)<1.5?(r.wire=!n.prevJ,n.prevJ=r.wire,r):(n.prevJ=!1,r)}if(e.climbing)return r.wire=!n.prevJ,n.prevJ=r.wire,r;n.prevJ=!1;let p=n.plan[n.idx],m=n.idx>=n.plan.length-1&&Math.hypot(c.fx-e.x,c.fz-e.z)<9;m&&h&&(p={x:h.ex-h.nx*2,z:h.ez-h.nz*2}),m&&!h&&(p={x:c.x,z:c.z});let f=Math.atan2(p.x-e.x,p.z-e.z);a&&(f+=(n.rnd()-.5)*.5);let v=e_(f-e.yaw);r.steer=Math.max(-1,Math.min(1,-v*2.5)),r.throttle=Math.abs(v)>1.6&&e.grounded?.3:1,n.wT+=s;let x=!1;if(n.kind!=="walker"){let g=d>(h?24:18);if(!e.rope&&!e.climbing&&n.wT>(a?.9:.35)&&(e.grounded||e.vy<-1)){let y=null;if(l){let M=a?(n.rnd()-.5)*8*Math.abs(l.nz):0,S=a?(n.rnd()-.5)*8*Math.abs(l.nx):0,b=a?(n.rnd()-.5)*8:0,E=Math.min(l.roof-.5,l.top+10+b),U=l.fx-l.nx*1.35+M,_=l.fz-l.nz*1.35+S;Math.hypot(U-e.x,E-(e.y+1.5),_-e.z)<=me.wireRange*.95&&E>e.y+4&&Math.hypot(U-e.x,_-e.z)>8&&(y={x:U,y:E,z:_})}if(!y&&g){let M=Math.max(8,Math.hypot(e.vx,e.vz));y=pr(i,{...e,yaw:f,vx:Math.sin(f)*M,vz:Math.cos(f)*M})}y&&(x=!0,n.wT=0,n.aim=y,n.direct=!!(l&&Math.abs(y.x-(l.fx-l.nx*1.35))<5&&Math.abs(y.z-(l.fz-l.nz*1.35))<5))}e.rope||(n.direct=!1),e.rope&&(!n.direct||!h)&&d<(h?22:16)&&(a?n.rnd()<.05:e.y<7||d<10&&e.vy<0)&&(x=!0)}return r.wire=x&&!n.prevW,n.prevW=x,r.wire&&!e.rope&&n.aim&&(r.wireAt=n.aim),n.aim=null,n.stuck=Math.hypot(e.x-n.lx,e.z-n.lz)<.05&&!e.climbing?n.stuck+s:0,n.lx=e.x,n.lz=e.z,n.stuck>1.2&&(n.kind==="walker"?r.jump=!0:e.rope||(r.wire=!0),n.stuck=0,n.replan=0),r}var Jp='"Yuji Syuku","Hiragino Mincho ProN",serif',Ah='"Klee One","Hiragino Maru Gothic ProN",sans-serif',Rh='"BIZ UDPGothic","Hiragino Sans",sans-serif';function Gg(n,e){n.width=1080,n.height=1350;let t=n.getContext("2d"),i=1080,s=1350,r=e.lang==="ja";t.fillStyle="#fbf6e6",t.fillRect(0,0,i,s);for(let f=0;f<2600;f++)t.fillStyle=`rgba(150,120,70,${Math.random()*.05})`,t.fillRect(Math.random()*i,Math.random()*s,2,2);t.strokeStyle="#b48a2c",t.lineWidth=14,t.strokeRect(36,36,i-72,s-72),t.lineWidth=3,t.strokeRect(62,62,i-124,s-124);for(let[f,v]of[[62,62],[i-62,62],[62,s-62],[i-62,s-62]])t.beginPath(),t.arc(f,v,16,0,Math.PI*2),t.fillStyle="#b48a2c",t.fill();t.fillStyle="#1b1712",t.textAlign="center",t.textBaseline="alphabetic",t.font=`${r?132:96}px ${r?Jp:"Georgia,serif"}`,t.fillText(r?"感 謝 状":"Certificate of Thanks",i/2,220),t.font=`600 40px ${Ah}`,t.fillText(r?"空中キャッチ隊員　殿":"To the Sky Catcher",i/2,300),t.font=`600 34px ${Ah}`,t.textAlign="left";let a=i_(t,e.body,i-260);a.forEach((f,v)=>t.fillText(f,130,372+v*54));let o=372+a.length*54+10,l=e.photo;if(l){t.save(),t.translate(130,o),t.rotate(-.025),t.fillStyle="#fff",t.fillRect(-10,-10,420,320),t.shadowColor="rgba(0,0,0,.25)";let x=Math.max(400/l.width,300/l.height),g=400/x,y=300/x;t.drawImage(l,(l.width-g)/2,(l.height-y)/2,g,y,0,0,400,300),t.restore()}let c=l?580:130;t.textAlign="left",t.fillStyle="#1b1712";let h=(f,v,x,g)=>{t.font=`700 28px ${Rh}`,t.fillStyle="#6b5a3a",t.fillText(f,c,x),t.font=`700 ${g?76:46}px ${Rh}`,t.fillStyle="#1b1712",t.fillText(v,c,x+(g?76:50))};h(r?"救った人":"Saved",r?`${e.saved}名`:`${e.saved}`,o+20,!0),e.endless?(h(r?"続いた時間":"Lasted",r?`${e.sec}秒`:`${e.sec}s`,o+150),h(r?"点数":"Score",`${e.score}`,o+250)):(h(r?"連続で救った":"Best streak",r?`${e.chain}名`:`${e.chain}`,o+150),h(r?"点数":"Score",`${e.score}`,o+250)),o+=300,t.font=`700 28px ${Rh}`,t.fillStyle="#6b5a3a",t.fillText(e.endless?r?"エンドレスの記録":"Endless log":r?"本日の記録":"Today's log",130,o+20),t.font=`600 27px ${Ah}`;let u=Math.max(1,Math.floor((s-196-(o+64))/38)),d=e.rows.length?e.rows:[{text:r?"（落ちてきた人はいなかった）":"(nobody fell)",ok:!0}],p=d.length>u?d.length-(u-1):0,m=p?d.slice(0,u-1):d;return m.forEach((f,v)=>{let x=o+64+v*38;t.fillStyle=f.ok?"#1b1712":"#9a8f7c",t.fillText((f.ok?"○ ":"× ")+f.text,130,x,560)}),p&&(t.fillStyle="#9a8f7c",t.fillText(r?`ほか ${p}名`:`+${p} more`,130,o+64+m.length*38)),t.textAlign="right",t.fillStyle="#1b1712",t.font=`600 30px ${Ah}`,t.fillText(e.date,i-130,s-172),t.font=`${r?44:34}px ${r?Jp:"Georgia,serif"}`,t.fillText(e.chief,i-130,s-118),n_(t,i-250,s-330,e.ranks[e.rank],e.stampK==null?1:e.stampK,r),t.textAlign="center",t.font=`700 22px ${Rh}`,t.fillStyle="#a08a5c",t.fillText(e.footer,i/2,s-78),n}function n_(n,e,t,i,s,r){if(s<=0)return;n.save(),n.translate(e,t),n.rotate(-.12),n.globalAlpha=.88*Math.min(1,s);let a=1+(1-Math.min(1,s))*.6;n.scale(a,a),n.strokeStyle="#c3271c",n.lineWidth=9,n.beginPath(),n.arc(0,0,112,0,Math.PI*2),n.stroke(),n.lineWidth=3,n.beginPath(),n.arc(0,0,96,0,Math.PI*2),n.stroke(),n.fillStyle="#c3271c",n.textAlign="center",n.textBaseline="middle";let o=i.split(`
`),l=r?o.length>1?58:Math.min(70,300/Math.max(2,i.length)):34;n.font=`${l}px ${r?Jp:"Georgia,serif"}`,o.forEach((c,h)=>n.fillText(c,0,(h-(o.length-1)/2)*l*1.05)),n.restore()}function i_(n,e,t){let i=[],s="",a=/[぀-ヿ一-龯]/.test(e)?e.match(/\d+[名人]?|./gu):e.split(/(\s+)/);for(let o of a){if(o===`
`){i.push(s),s="";continue}let l=s+o;n.measureText(l).width>t&&s?(i.push(s.trimEnd()),s=o.trimStart()):s=l}s&&i.push(s);for(let o=1;o<i.length;o++)for(;/^[、。」）]/.test(i[o]);)i[o-1]+=i[o][0],i[o]=i[o].slice(1);return i}var Oe=n=>document.getElementById(n),Vg=Zc,Es={done:0,total:0,sky:!1,fonts:!1};{let n=()=>{Es.fonts=!0},e=document.fonts;e&&e.load?Promise.all(['700 16px "BIZ UDPGothic"','600 16px "Klee One"'].map(t=>e.load(t).catch(()=>{}))).then(n):n(),setTimeout(n,2e3)}Vg.onStart=Vg.onProgress=(n,e,t)=>{Es.done=e,Es.total=t,Es.at=performance.now(),window.__bootSet&&window.__bootSet(.2+.8*(t?e/t:0))};function s_(n){let e=performance.now(),t=()=>{if((ur.ready||ur.failed)&&Es.sky&&Es.fonts||performance.now()-e>12e3){window.__bootDone=!0,window.__bootSet&&window.__bootSet(1);let s=Oe("boot");s.classList.add("out"),setTimeout(()=>s.classList.add("hidden"),380),n();return}setTimeout(t,120)};t()}var Ss=wa.step,r_="https://tom3games.github.io/sky-catch/",Mr={get:n=>{try{return localStorage.getItem(n)}catch{return null}},set:(n,e)=>{try{localStorage.setItem(n,e)}catch{}}},a_={ja:{signTop:"頭上注意",logo:"空中キャッチ",signSub:"落ちてくる人を受けとめろ",radioName:"無線",radioLine:"この街、ベランダから人がよく落ちる。地面に着く前に受けとめてくれ。",start:"出動",how:"遊び方",lang:"EN",more:"ほかのゲーム",muteOn:"音 入",muteOff:"音 切",loading:"救護マットをふくらませ中",howTitle:"隊員手帳",ok:"わかった",howItems:["ビルを<b>タッチ</b>か<b>大きいボタン</b>でワイヤー。もう一回で離す","ぐらついている人のそばへ。落ちてきたら受けとめる。<b>空中なら</b>点が多い","壁に張り付いたら<b>上下左右に這える</b>。大きいボタンで壁から離れる","地面では<b>ローリング</b>で素早く転がって移動できる","抱えた人は青い<b>救護マット</b>に着地して引き渡す。続けて救うほど点が増える"],keysPc:"PC: WASD・矢印で移動　クリックでワイヤー（E でも可）　Shift でローリング　Space でも離れる　ドラッグで見回す",credit:"音: Kenney, rubberduck, artisticdude, poinl, Almitory, eXpl0it3r ほか（CC0）／人物: KayKit, Kenney（CC0）。詳しくは CREDITS.md",saved:"救助",carry:n=>n?`抱え${n}`:"",chain:n=>`${n}連続`,pause:"休憩",paused:"休憩中",resume:"戻る",quit:"やめる",jump:"跳ぶ",roll:"ローリング",tooFar:"届かない",viewLab:"視点",view3:"三人称",view1:"一人称",hintWire:"ビルをタッチかボタンでワイヤー",hintWirePc:"ビルをクリック（か E）でワイヤー",hintClimb:"壁ではスティックで這う。大きいボタンで離れる",hintMat:"青い救護マットに着地して引き渡そう",warnTag:n=>`あと${n}秒`,fallingShort:"落下中",hUp:n=>`上に ${n}m`,hDown:n=>`下に ${n}m`,hSame:"同じ高さ",lookUp:"上を見て",falling:"わーっ！",full:"もう抱えられない！",caught:(n,e,t)=>t?"地面でキャッチ":e?`スイングキャッチ！ 地上${n}m`:`キャッチ！ 地上${n}m`,saveMsg:(n,e)=>`${n}人引き渡した +${e}点`,missTag:"受けとめそこねた",timeUp:"交代の時間",modeNormal:"通常 90秒",modeEndless:"エンドレス",modeHint:"1人でも落としたら終わり",gameOver:"落としてしもた…",endlessTime:n=>`${n}秒`,bodyEndless:(n,e,t)=>`あなたは${e}秒のあいだ、1人も落とさずに${n}名${t?`（${t}）`:""}を受けとめ続けました。最後の1人は惜しくも地面へ。その粘りと腕前をたたえ、ここに感謝の意を表します。`,postEndless:(n,e)=>`空中キャッチのエンドレスで${e}秒・${n}人受けとめた`,chief:"町内会長　宙野 守",again:"もう一回",save:"画像を保存",post:"Xでポスト",toTitle:"タイトル",body:(n,e)=>n?`あなたは本日、ベランダから落ちてきた${n+e}名のうち${n}名を空中で受けとめ、救護マットまで運びました。その勇気と腕前をたたえ、ここに感謝の意を表します。`:`あなたは本日、街の上空を飛び回りました。落ちてきた${e}名は、植え込みと段ボールに助けられました。次はぜひ受けとめてください。`,ranks:["見習い","一人前","名人",`空の
守り神`],postText:(n,e)=>`空中キャッチで${n}人受けとめて${e}点でした`},en:{signTop:"WATCH OUT ABOVE",logo:"Sky Catch",signSub:"Catch the people who fall",radioName:"RADIO",radioLine:"People keep falling off balconies in this town. Catch them before they hit the ground.",start:"Go",how:"How to play",lang:"JP",more:"More games",muteOn:"Sound on",muteOff:"Muted",loading:"Inflating the rescue mats",howTitle:"Field notes",ok:"Got it",howItems:["<b>Tap</b> a building or the big button to swing. Press again to let go","Get close to anyone wobbling and catch them. <b>Mid-air</b> catches score more","On a wall you can <b>crawl in any direction</b>. The big button lets go of the wall","On the ground, <b>roll</b> to get somewhere fast","Land on a blue <b>rescue mat</b> to hand them over. Streaks score more"],keysPc:"PC: WASD / arrows move · click to wire (or E) · Shift to roll · Space also lets go · drag to look",credit:"Sounds: Kenney, rubberduck, artisticdude, poinl, Almitory, eXpl0it3r and others (CC0) / Characters: KayKit, Kenney (CC0). See CREDITS.md",saved:"SAVED",carry:n=>n?`holding ${n}`:"",chain:n=>`${n} streak`,pause:"Break",paused:"On break",resume:"Back",quit:"Quit",jump:"Jump",roll:"ROLL",tooFar:"Too far",viewLab:"VIEW",view3:"3rd",view1:"1st",hintWire:"Tap a building or the big button to wire",hintWirePc:"Click a building (or E) to wire",hintClimb:"Crawl with the stick. The big button lets go",hintMat:"Land on a blue rescue mat to hand them over",warnTag:n=>`${n}s`,fallingShort:"Falling",hUp:n=>`${n}m up`,hDown:n=>`${n}m down`,hSame:"Same height",lookUp:"Look up",falling:"Waaah!",full:"Hands full!",caught:(n,e,t)=>t?"Ground catch":e?`Swing catch! ${n}m up`:`Caught! ${n}m up`,saveMsg:(n,e)=>`Handed over ${n} +${e}`,missTag:"Missed",timeUp:"Shift over",modeNormal:"Normal 90s",modeEndless:"Endless",modeHint:"One miss and it is over",gameOver:"Dropped one...",endlessTime:n=>`${n}s`,bodyEndless:(n,e,t)=>`For ${e} seconds you kept catching without a single drop, ${n} saved${t?` (${t})`:""}. The last one hit the ground. We thank you for your grit and skill.`,postEndless:(n,e)=>`Sky Catch endless: ${e}s, ${n} caught`,chief:"Neighborhood Chief",again:"Again",save:"Save image",post:"Post on X",toTitle:"Title",body:(n,e)=>n?`Today you caught ${n} of the ${n+e} people who fell from balconies, in mid-air, and carried them to the rescue mats. We thank you for your courage and skill.`:`Today you flew all over town. The ${e} people who fell were saved by hedges and cardboard boxes. Please catch them next time.`,ranks:["ROOKIE","PRO","MASTER",`SKY
GUARDIAN`],postText:(n,e)=>`I caught ${n} falling people in Sky Catch and scored ${e}`}},As=new URLSearchParams(location.search).has("first")?"first":"third";function tx(){Oe("viewNow").textContent=ot(As==="first"?"view1":"view3"),Oe("btnView").classList.toggle("on",As==="first")}function nx(n){As=n==="first"?"first":"third",Mr.set("catch.view",As),tx()}var ui=()=>Ft==="play"&&!!Ne&&As==="first",yr=Mr.get("catch.mode")==="endless"?"endless":"normal",jn=Mr.get("catch.lang")||((navigator.language||"ja").startsWith("ja")?"ja":"en"),ot=n=>a_[jn][n],mr=n=>n[jn==="ja"?0:1];function Lh(){document.documentElement.lang=jn;for(let n of document.querySelectorAll("[data-t]")){let e=ot(n.dataset.t);typeof e=="string"&&(n.textContent=e)}Oe("howList").innerHTML=ot("howItems").map((n,e)=>`<li data-n="${e+1}"><span>${n}</span></li>`).join(""),Oe("howKeys").textContent=di?"":ot("keysPc"),Oe("btnMute").textContent=Snd.muted?ot("muteOff"):ot("muteOn"),tx()}Snd.muted=Mr.get("catch.mute")==="1";Snd.pre=["snd/bgm_play.mp3","snd/wind_loop.wav","snd/city_street_loop.wav"];Snd.def({wire:["snd/swish-1.mp3","snd/swish-2.mp3","snd/swish-3.mp3"],hook:["snd/metalClick.mp3","snd/metal_02.mp3"],land:["snd/footstep_01.mp3","snd/footstep_02.mp3"],bonk:["snd/thwack-01.mp3","snd/thwack-03.mp3"],grunt:["snd/grunt_01.mp3","snd/grunt_02.mp3","snd/grunt_03.mp3","snd/grunt_04.mp3"],roll:"snd/swish-5.mp3",whoosh:"snd/swish-5.mp3",cat:["snd/cat_mew1.mp3","snd/cat_mew2.mp3"],alert:"snd/bong.mp3",catch:["snd/thwack-01.mp3","snd/thwack-03.mp3"],save:"snd/confirm.mp3",applause:"snd/applause.mp3",thud:"snd/drop.mp3",boing:"snd/spring.mp3",pop:"snd/plop.mp3",click:"snd/click_001.mp3",tick:"snd/tick_002.mp3",ding:"snd/bell_ding1.mp3",win:"snd/jingles_SAX01.mp3",meh:"snd/jingles_SAX03.mp3",lose:"snd/jingles_PIZZA07.mp3"});var Rt=(n,e)=>Snd.play(n,e),sn=new th({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0});sn.setPixelRatio(Vt.pixelRatio);sn.outputColorSpace=je;sn.toneMapping=da;sn.toneMappingExposure=1;lg(sn);sn.shadowMap.enabled=!0;sn.shadowMap.type=Ac;Oe("view").appendChild(sn.domElement);var gt=new no;gt.fog=new to(13227746,.0022);gt.background=new ye(11125984);var qn=new Js(16773596,3);qn.userData.dir=new D(-.45,.62,-.64).normalize();qn.castShadow=!0;qn.shadow.mapSize.set(Vt.shadow,Vt.shadow);Object.assign(qn.shadow.camera,{left:-Vt.shadowRange,right:Vt.shadowRange,top:Vt.shadowRange,bottom:-Vt.shadowRange,near:1,far:400});qn.shadow.normalBias=.04;qn.shadow.bias=-4e-4;gt.add(qn,qn.target);var ix=new To(12900607,6969928,1.8);gt.add(ix);cg(sn,gt,qn,()=>{ix.intensity=.4,Es.sky=!0},()=>{Es.sky=!0});var qe=new Bt(64,1,.3,2400),rn=eg("city"),o_=mg(gt,rn);for(let n of o_.gates)n.grp.visible=!1;var En=new ph(gt,rn);function l_(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Tt(i);return s.colorSpace=je,s}var sx=l_(256,256,(n,e,t)=>{n.fillStyle="#2a6fd6",n.fillRect(0,0,e,t),n.strokeStyle="#1b4a96",n.lineWidth=10,n.strokeRect(5,5,e-10,t-10),n.fillStyle="#fff",n.fillRect(e/2-22,50,44,t-100),n.fillRect(50,t/2-22,e-100,44)}),c_=new Qe(Ae.matR*1.5,.6,Ae.matR*1.5),tl=[new Ue({color:2781142,roughness:.8}),null,null,null,null,null];tl[2]=new Ue({map:sx,roughness:.8});for(let n=0;n<6;n++)tl[n]||(tl[n]=tl[0]);var nl=[];function rx(n){for(let e of nl)gt.remove(e);nl.length=0;for(let e of n){let t=new tt,i=new ue(c_,tl);i.position.y=.3,i.receiveShadow=i.castShadow=!0;let s=new ue(new gs(Ae.matR-.4,Ae.matR,48),new Ct({color:9421055,transparent:!0,opacity:0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.66;let r=new ue(new Et(.08,.08,7,6),new Ue({color:14540253}));r.position.set(Ae.matR*.7,3.5,Ae.matR*.7);let a=new ue(new pn(1.8,1.1),new Ct({map:sx,side:bt}));a.position.set(Ae.matR*.7+.9,6.3,Ae.matR*.7),t.add(i,s,r,a),t.position.set(e.x,e.y,e.z),t.userData={ring:s,flag:a},gt.add(t),nl.push(t)}}var $p=new Ue({color:10133414,roughness:.6,metalness:.3});function h_(){let n=new tt,e=new ue(new Qe(2.4,.18,1.3),$p);e.position.set(0,-.09,.15);let t=new ue(new Qe(2.4,.06,.06),$p);t.position.set(0,.95,.78),n.add(e,t);for(let i of[-1.15,-.4,.4,1.15]){let s=new ue(new Qe(.05,.95,.05),$p);s.position.set(i,.47,.78),n.add(s)}return e.castShadow=!0,n}var Rs=new Map;function u_(n){let e=Rs.get(n.id);if(!e){let t=new Jo(n.look,n.kind),i=h_();i.position.set(n.x-n.nx*.5,n.top,n.z-n.nz*.5),i.rotation.y=Math.atan2(n.nx,n.nz),gt.add(i);let s=t.ok?null:new ue(new ri(.3,.7,4,8),new Ue({color:13658682}));s&&(s.position.y=.7,t.group.add(s)),gt.add(t.group),e={p:t,b:i},Rs.set(n.id,e)}return e}function d_(){for(let n of Rs.values())if(!n.p.ok){let e=new Jo(n.p.look,n.p.kind);if(!e.ok)continue;n.p.group.parent&&n.p.group.parent.remove(n.p.group),n.p=e}}function sl(){for(let n of Rs.values())gt.remove(n.p.group),gt.remove(n.b);Rs.clear(),Oe("bubbles").innerHTML="",el.clear()}var Ni=new ue(new Et(.025,.025,1,5).rotateX(Math.PI/2).translate(0,0,.5),new Ct({color:2829099}));Ni.visible=!1;gt.add(Ni);var p_=Ni.geometry,f_=new Et(.07,.005,1,6).rotateX(Math.PI/2).translate(0,0,.5),ws=(()=>{let n=(r,a,o)=>{let l=new ue(r,new Ue({color:a,roughness:.75,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}));return l.renderOrder=o,l.frustumCulled=!1,l},e=n(new Et(.021,.036,1,10),14251818,20),t=n(new ri(.023,.05,4,10),7031346,21),i=n(new Et(.007,.012,.035,8),2237996,22),s=new tt;return s.add(e,t,i),s.visible=!1,{g:s,sleeve:e,glove:t,nozzle:i,k:0,hand:new D,elbow:new D,dir:new D,up:new D(0,1,0),world:new D}})();qe.add(ws.g);gt.add(qe);var Fn=new ue(new gs(.5,.75,24),new Ct({color:16777215,transparent:!0,opacity:.85,depthTest:!1}));Fn.renderOrder=5;Fn.visible=!1;gt.add(Fn);var m_=16765470,Wg=(()=>{let n=document.createElement("canvas");n.width=4,n.height=128;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,128);t.addColorStop(0,"rgba(255,210,30,0)"),t.addColorStop(.12,"rgba(255,210,30,.95)"),t.addColorStop(1,"rgba(255,200,20,.6)"),e.fillStyle=t,e.fillRect(0,0,4,128);let i=new Tt(n);i.colorSpace=je;let s=document.createElement("canvas");s.width=s.height=128;let r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,220,40,.25)"),a.addColorStop(.45,"rgba(255,220,40,.3)"),a.addColorStop(.62,"rgba(255,214,30,1)"),a.addColorStop(.74,"rgba(255,214,30,.75)"),a.addColorStop(1,"rgba(255,214,30,0)"),r.fillStyle=a,r.fillRect(0,0,128,128);let o=new Tt(s);return o.colorSpace=je,{beamT:i,haloT:o}})(),g_=new gs(1.15,1.75,32),x_=new Et(1,1,1,16,1,!0).translate(0,.5,0),gr=[];function v_(n){if(gr[n])return gr[n];let e=new Ct({map:Wg.beamT,transparent:!0,depthWrite:!1,side:bt,fog:!1,toneMapped:!1}),t=new ue(x_,e);t.renderOrder=3;let i=new tt;i.add(t),i.visible=!1,gt.add(i);let s=new $r(new Xs({map:Wg.haloT,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}));s.renderOrder=5,s.visible=!1,gt.add(s);let r=new ue(g_,new Ct({color:m_,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,toneMapped:!1}));return r.rotation.x=-Math.PI/2,r.visible=!1,gt.add(r),gr[n]={g:i,col:t,mat:e,halo:s,ring:r,id:null}}var La=(()=>{let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.translate(64,64),e.rotate(Math.PI/4),e.fillStyle="#f2c230",e.strokeStyle="#16140f",e.lineWidth=8,e.fillRect(-38,-38,76,76),e.strokeRect(-38,-38,76,76),e.setTransform(1,0,0,1,0,0),e.fillStyle="#16140f",e.fillRect(58,30,12,46),e.beginPath(),e.arc(64,92,7,0,Math.PI*2),e.fill();let t=new Tt(n);t.colorSpace=je;let i=new $r(new Xs({map:t,transparent:!0,depthTest:!1,depthWrite:!1}));return i.renderOrder=6,i.visible=!1,gt.add(i),i})(),Ft="title",Ne=null,De=null,Ot=null,mn=null,Cs=!1,ax=!1,Na=0,lf=null,nf=-1,di=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("is-touch",di);var il=0,Da=0,xr=0,ox=-1.25,ge={air:0,hd:0,pitch:.15,userT:-1e9,pos:new D,off:new D(-6,3,0),look:new D,lookOff:new D,fov:64},vr=new D,ts=new D,y_=new Bt(50,4/3,.3,2400);function lx(n,e){let t=e.mats[0];return Ag({id:n,spawn:{x:t.x,y:t.y,z:t.z-6,yaw:0}})}function cf(){return Ot&&(gt.remove(Ot.group),Ot.dispose()),Ot=ur.ready?new Zo:new mh,Ot.okamochi&&(Ot.okamochi.visible=!1),gt.add(Ot.group),Ot}Tg().then(()=>{ur.ready&&Ot&&!(Ot instanceof Zo)&&cf(),ur.ready&&sl()});var ci=new Set,Ts={jump:!1,roll:!1},es=null;addEventListener("keydown",n=>{Ft==="play"&&(n.repeat||(ci.add(n.code),n.code==="KeyE"&&(es={at:null,key:!0}),n.code==="Space"&&(Ts.jump=!0,n.preventDefault()),(n.code==="ShiftLeft"||n.code==="ShiftRight")&&(Ts.roll=!0),(n.code==="Escape"||n.code==="KeyP")&&Dh(!Cs)))});addEventListener("keyup",n=>ci.delete(n.code));var _r=new Map,Qp=new Po,Xg=new ce;sn.domElement.addEventListener("pointerdown",n=>{Snd.init(),!(Ft!=="play"||Cs)&&_r.set(n.pointerId,{x:n.clientX,y:n.clientY,lx:n.clientX,ly:n.clientY,t:performance.now(),moved:!1})});addEventListener("pointermove",n=>{let e=_r.get(n.pointerId);if(!e)return;let t=n.clientX-e.lx,i=n.clientY-e.ly;e.lx=n.clientX,e.ly=n.clientY,!e.moved&&Math.hypot(n.clientX-e.x,n.clientY-e.y)>12&&(e.moved=!0),e.moved&&(ge.hd-=t*.00792,ge.pitch=Math.max(ox,Math.min(1,ge.pitch+i*.00528)),ge.userT=performance.now())});addEventListener("pointerup",n=>{let e=_r.get(n.pointerId);e&&(_r.delete(n.pointerId),!e.moved&&performance.now()-e.t<450&&Ft==="play"&&!Cs&&cx(n.clientX,n.clientY))});addEventListener("pointercancel",n=>_r.delete(n.pointerId));function cx(n,e){let t=sn.domElement.getBoundingClientRect();Xg.set((n-t.left)/t.width*2-1,-((e-t.top)/t.height)*2+1),Qp.setFromCamera(Xg,qe);let i=Qp.ray.origin,s=Qp.ray.direction,r=Ne&&Ne.rope?null:Lg(rn,i.x,i.y,i.z,s.x,s.y,s.z,400),a=r;if(Ne&&!Ne.rope&&!Ne.grounded&&!Ne.climbing){let o=__(i,s,me.wireRange+60),l=r?Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z):1/0;o&&!(l<o.t+6)&&(a={x:o.x,y:o.y,z:o.z,ground:!0})}es={at:a,sx:n,sy:e}}function __(n,e,t){let i=s=>{let r=n.x+e.x*s,a=n.y+e.y*s,o=n.z+e.z*s;return a<=Pa(rn,r,o,a).h};for(let s=1;s<t;s+=1){if(!i(s))continue;let r=s-1,a=s;for(let c=0;c<6;c++){let h=(r+a)/2;i(h)?a=h:r=h}let o=n.x+e.x*a,l=n.z+e.z*a;return{x:o,y:Pa(rn,o,l,n.y+e.y*a+.5).h,z:l,t:a}}return null}var zt={x:0,y:0,id:null};{let n=Oe("stick"),e=n.querySelector(".knob"),t=()=>{let a=n.getBoundingClientRect();return{x:a.left+a.width/2,y:a.top+a.height/2,R:a.width/2}},i=a=>{let o=t(),l=(a.clientX-o.x)/o.R,c=(a.clientY-o.y)/o.R,h=Math.hypot(l,c);h>1&&(l/=h,c/=h),zt.x=l,zt.y=c,e.style.transform=`translate(${l*36}px,${c*36}px)`},s=a=>{zt.id=a.pointerId,n.classList.add("held"),i(a)};n.addEventListener("pointerdown",a=>{Snd.init(),zt.id==null&&(a.preventDefault(),a.stopPropagation(),s(a))}),addEventListener("pointermove",a=>{if(a.pointerId===zt.id){i(a);return}if(zt.id==null&&_r.has(a.pointerId)){let o=t();Math.hypot(a.clientX-o.x,a.clientY-o.y)<o.R&&(_r.delete(a.pointerId),s(a))}},!0);let r=a=>{a.pointerId===zt.id&&(zt.id=null,zt.x=zt.y=0,e.style.transform="",n.classList.remove("held"))};addEventListener("pointerup",r,!0),addEventListener("pointercancel",r,!0),window.__stickCenter=()=>t();for(let a of document.querySelectorAll(".tbtn"))a.addEventListener("pointerdown",o=>{o.preventDefault(),Snd.init(),a.dataset.k==="wire"&&(es={at:null,key:!0}),a.dataset.k==="roll"&&(Ts.roll=!0)})}var hx,ux=()=>({pitch:Math.max(32,Math.min(76,-ge.pitch*180/Math.PI+30)),yawK:.05});function jg(){let n=qe.matrixWorld.elements,e=n[0],t=n[2],i=-n[8],s=-n[10],r=Math.hypot(e,t)||1,a=Math.hypot(i,s)||1;return{r:{x:e/r,z:t/r},f:{x:i/a,z:s/a}}}function M_(){let n=0,e=0,t=0,i=0,s=0;(ci.has("KeyW")||ci.has("ArrowUp"))&&(n=1,s=1),(ci.has("KeyS")||ci.has("ArrowDown"))&&(e=1,s=-1),(ci.has("KeyA")||ci.has("ArrowLeft"))&&(t-=1,i-=1),(ci.has("KeyD")||ci.has("ArrowRight"))&&(t+=1,i+=1);let r=jg().r,a=jg().f,o=null;if(zt.id!=null){let c=Math.min(1,Math.hypot(zt.x,zt.y));if(c>.15){let h=r.x*zt.x-a.x*zt.y,u=r.z*zt.x-a.z*zt.y,d=Math.hypot(h,u)||1;o={x:h/d,z:u/d},t=0,n=Math.max(n,Math.min(1,c*1.3))}if(s=Math.abs(zt.y)>.25?-zt.y:0,i=0,Ne.climbing&&Math.abs(zt.x)>.25){let h=Ne.climbing,u=r.x*h.nz-r.z*h.nx>=0?1:-1;i=zt.x*u}}let l={throttle:n,brake:e,steer:t,jump:Ts.jump,wire:!1,cx:i,cy:s,moveDir:o,roll:Ts.roll};return l.wireYaw=o?Math.atan2(o.x,o.z):di?Math.atan2(a.x,a.z):void 0,hx=l.wireYaw,ui()&&(l.wireAim=ux()),es&&(l.wire=!0,es.at&&(l.wireAt=es.at),Ne._tap=es,es=null),Ts.jump=!1,Ts.roll=!1,l}function rl(n){for(let e of["title","how","pause","result"])Oe(e).classList.toggle("hidden",e!==n);Oe("hud").classList.toggle("hidden",Ft!=="play")}function Nh(){Ft="title",Cs=!1,Ne=null,De=null;let n=Sh(rn,3);mn={rd:n,r:lx("demo",n),b:kg("skilled",3)},sl(),rx(n.mats),cf(),rl("title"),Oe("touch").classList.add("hidden"),Snd.loop("bgm","snd/bgm_title.mp3",.22),Snd.loop("amb","snd/city_street_loop.wav",.2)}var Ih=[];function hf(n=Math.floor(Math.random()*1e6)){Snd.init(),Rt("click"),Ft="play",Cs=!1,mn=null,lf=null,nf=-1,Na=0,De=Sh(rn,n,yr),Ne=lx("me",De),sl(),rx(De.mats),cf(),ge.hd=0,ge.pitch=As==="first"?-.15:.15,ge.userT=-1e9,rl(null),Oe("touch").classList.toggle("hidden",!di),Snd.loop("bgm","snd/bgm_play.mp3",.16),Snd.loop("amb","snd/city_street_loop.wav",.26),Snd.loop("wind","snd/wind_loop.wav",1e-4),hi(`<small>${ot("radioName")}</small>${ot("radioLine")}`,2.6),Ih=[{at:3.2,k:di?"hintWire":"hintWirePc",once:"wire"}],sf=!1,rf=!1}var sf=!1,rf=!1;function Dh(n){Ft==="play"&&(Cs=n,Oe("pause").classList.toggle("hidden",!n))}var Ph=0;function hi(n,e=1.8){let t=Oe("say");t.innerHTML=n,Ph=e,t.classList.remove("hidden")}var el=new Map;function ef(n,e,t){let i=vr.set(n,e,t).project(qe);return{x:(i.x*.5+.5)*innerWidth,y:(-i.y*.5+.5)*innerHeight,behind:i.z>1}}function b_(n){let e=String(Math.min(999,De.saved)).padStart(3,"0");if(Oe("cNum").textContent!==e){Oe("cNum").textContent=e;let v=Oe("counter");v.classList.remove("bump"),v.offsetWidth,v.classList.add("bump")}Oe("cCarry").textContent=ot("carry")(De.carry.length);let t=Oe("chain");t.classList.toggle("hidden",De.chain<2),t.textContent=ot("chain")(De.chain);let i=De.mode==="endless",s=i?De.t:Math.max(0,Ae.roundSec-De.t),r=i?De.t%60/60||.001:s/Ae.roundSec;Oe("wNum").textContent=i?Math.floor(De.t):Math.ceil(s),Oe("watch").classList.toggle("hurry",!i&&s<=10);let a=Math.PI*2*r,o=32+Math.sin(a)*25,l=35-Math.cos(a)*25;Oe("wArc").setAttribute("d",r<=0?"":r>=.999?"M32 10 A25 25 0 1 1 31.99 10 Z":`M32 35 L32 10 A25 25 0 ${a>Math.PI?1:0} 1 ${o.toFixed(2)} ${l.toFixed(2)} Z`),Ph>0&&(Ph-=n,Ph<=0&&Oe("say").classList.add("hidden"));let c=new Set;for(let v of Th(De)){c.add(v.id);let x=el.get(v.id);x||(x=document.createElement("div"),x.className="bub",Oe("bubbles").appendChild(x),el.set(v.id,x));let g=ef(v.x,v.y+2,v.z),y=Math.hypot(v.x-Ne.x,v.z-Ne.z);if(g.behind||g.x<10||g.x>innerWidth-10||g.y<0||g.y>innerHeight-10){x.style.display="none";continue}let M=ef(v.x,v.y+.7,v.z),S=qe.position.distanceTo(ts.set(v.x,v.y+.7,v.z)),b=innerHeight/(1.25*Math.max(1,S))*fx(S)*.38,E=Math.max(90,Math.min(innerWidth-90,g.x)),U=Math.max(190,Math.min(g.y,M.y-b-12));x.style.display="",x.style.left=E+"px",x.style.top=U+"px",x.classList.toggle("far",y>45);let _=v.kind&&v.kind!=="normal"?`<b>${mr([fn[v.kind].ja,fn[v.kind].en])}</b>`:"",T=v.state==="warn"?`<i>${ot("warnTag")(Math.max(1,Math.ceil((v.warnT||Ae.warn)-v.t)))}・${Math.round(y)}m</i>${_}${mr(Kp(v))}`:`<i>${v.kind&&v.kind!=="normal"?mr(wh(v.kind,"fall",v.id)):ot("falling")}</i>${_}`;x._h!==T&&(x.innerHTML=T,x._h=T)}for(let[v,x]of el)c.has(v)||(x.remove(),el.delete(v));let h=De.carry.length<Ae.carryMax?Ia(De):null,u=De.carry.length?$o(De,Ne.x,Ne.z):null,d=u&&(!h||De.carry.length>=Ae.carryMax),p=Oe("arrow");if(!h&&!u){p.classList.add("hidden");return}let m=d?ts.set(u.x,3,u.z):ts.set(h.x,h.y+1,h.z);p.classList.remove("hidden"),p.classList.toggle("mat",!!d),Oe("arrowD").textContent=Math.round(Math.hypot(m.x-Ne.x,m.z-Ne.z))+"m",p.querySelector("svg").style.transform=`rotate(${dx(m.x,m.z)}rad)`;let f=Oe("heightBox");if(d||!h)f.classList.add("hidden");else{f.classList.remove("hidden");let v=h.y+1-(Ne.y+1.2),x=Math.round(Math.abs(v)),g=Math.abs(v)<2.5?"same":v>0?"up":"down",y=h.state==="warn"?ot("warnTag")(Math.max(1,Math.ceil((h.warnT||Ae.warn)-h.t))):ot("fallingShort"),M=ef(h.x,h.y+1,h.z),S=!M.behind&&M.y<0,b=g+x+y+S+jn;f._k!==b&&(f._k=b,f.dataset.dir=g,f.classList.toggle("look-up",S),Oe("hDiff").textContent=g==="same"?ot("hSame"):ot(g==="up"?"hUp":"hDown")(x),Oe("hSec").textContent=y,Oe("hLook").textContent=S?ot("lookUp"):"")}}function dx(n,e){qe.updateMatrixWorld();let t=qe.matrixWorld.elements,i=-t[8],s=-t[10],r=-s,a=i,o=n-Ne.x,l=e-Ne.z;return Math.atan2(o*r+l*a,o*i+l*s)}var uf=[];function S_(n){if(uf.push({src:"r",t:n.t,at:De?+De.t.toFixed(2):0}),n.t==="roll"&&(Rt("roll",{vol:.6}),Rt("land",{vol:.35,delay:.25})),n.t==="wire")Rt("wire",{vol:.7}),Rt("hook",{vol:.5,delay:.06}),Ih=Ih.filter(e=>e.once!=="wire");else if(n.t==="wireMiss"){Rt("wire",{vol:.4,rate:1.3});let e=Ne._tap;if(n.far&&e&&e.sx!=null){let t=Oe("miss");t.style.left=e.sx+"px",t.style.top=e.sy+"px",t.classList.remove("hidden"),t.style.animation="none",t.offsetWidth,t.style.animation="",clearTimeout(t._t),t._t=setTimeout(()=>t.classList.add("hidden"),800)}}else if(n.t==="land")Rt("land",{vol:Math.min(1,.3+n.impact/20)}),n.impact>14&&(Rt("bonk",{vol:.5}),En.addShake(Math.min(.6,n.impact/40)));else if(n.t==="bonk")Rt("bonk",{vol:.8}),En.addShake(.4);else if(n.t==="unwire"&&!n.auto){let e=Math.hypot(Ne.vx,Ne.vy,Ne.vz);e>16&&(Rt("whoosh",{vol:Math.min(.8,e/50),rate:.9+Math.random()*.2}),Da=Math.min(6,(e-16)*.3))}else n.t==="climb"&&!sf&&(sf=!0,hi(ot("hintClimb"),2.4))}function w_(n){if(uf.push({src:"c",...n,mat:void 0,at:+De.t.toFixed(2)}),n.t==="spawn")Rt("alert",{vol:.5});else if(n.t==="fall")Rt("grunt",{vol:.6});else if(n.t==="catch"){Rt("catch",{vol:.9}),Rt("pop",{vol:.6,delay:.05}),En.addShake(n.ground?.25:n.swing?.6:.4),il=n.ground?.04:n.swing?.1:.07,Da=n.ground?-3:-7,xr=n.ground?.5:1,En.debrisAt(n.x,n.y+1,n.z,16,16773576,{speed:9,up:5,size:.12}),hi(`${ot("caught")(n.h,n.swing,n.ground)}<small>${mr(wh(n.kind,n.spill?"spill":"thanks",n.id))}</small>`,2),n.kind==="cat"?Rt("cat",{vol:.9}):n.kind==="heavy"?(Rt("grunt",{vol:.8,rate:.75}),En.addShake(.3)):n.kind==="karakasa"&&Rt("boing",{vol:.6});let e=n.h+(n.swing?20:0);e>nf&&(nf=e,af=!0),rf||(rf=!0,setTimeout(()=>{Ft==="play"&&De&&De.carry.length&&hi(ot("hintMat"),2.6)},2e3))}else n.t==="save"?(Rt("save",{vol:.8}),Rt("applause",{vol:.6,delay:.1}),il=Math.min(.12,.05+n.n*.025),xr=Math.max(xr,.6+n.n*.15),Da=-4,En.addShake(.3+n.n*.1),n.mat&&En.debrisAt(n.mat.x,(n.mat.y||0)+.6,n.mat.z,10+n.n*6,3837912,{speed:7,up:6,size:.1}),hi(ot("saveMsg")(n.n,n.pts),2)):n.t==="miss"?(Rt("thud",{vol:.8}),Rt("boing",{vol:.5,delay:.08}),Math.hypot(n.x-Ne.x,n.z-Ne.z)<80&&hi(`${ot("missTag")}<small>${mr(wh(n.kind,"oops",n.id))}</small>`,1.8),n.kind==="cat"&&Rt("cat",{vol:.7,rate:1.1}),En.debrisAt(n.x,n.y+.3,n.z,10,11569754,{speed:4,up:4,size:.12})):n.t==="full"?hi(ot("full"),1.2):n.t==="timeUp"?(hi(ot("timeUp"),2),Na=1.6):n.t==="gameOver"?(hi(ot("gameOver"),2.2),Na=2.4):n.t==="fall"&&n.kind==="cat"&&Rt("cat",{vol:.6*Math.max(.2,1-Math.hypot(n.x-Ne.x,n.z-Ne.z)/90)})}var af=!1;function px(){Ft="result",Snd.loop("wind",null),Snd.loop("bgm",null);let n=De.mode==="endless",e=Math.floor(De.t),t=n?De.saved>=20?3:De.saved>=10?2:De.saved>=4?1:0:zg(De.score),i=o=>mr([fn[o].ja,fn[o].en]),s=De.log.map(o=>({text:(o.kind&&o.kind!=="normal"?`［${i(o.kind)}］`:"")+mr(Kp(o)),ok:o.ok})),r=Object.entries(De.kinds).filter(([o])=>o!=="normal").map(([o,l])=>`${i(o)}${l>1?"×"+l:""}`).join(jn==="ja"?"・":", "),a={lang:jn,saved:De.saved,missed:De.missed,chain:De.bestChain,score:De.score,rank:t,ranks:ot("ranks"),body:n?ot("bodyEndless")(De.saved,e,r):ot("body")(De.saved,De.missed)+(r?jn==="ja"?`（${r}）`:` (${r})`:""),rows:s,endless:n,sec:e,chief:ot("chief"),date:new Date().toISOString().slice(0,10).replace(/-/g,"."),photo:lf,footer:"tom3games.github.io/sky-catch",stampK:1};Gg(Oe("cert"),a),Rt(t>=2?"win":t>=1?"meh":"lose",{vol:.8}),Oe("btnPost").href="https://twitter.com/intent/tweet?text="+encodeURIComponent(n?ot("postEndless")(De.saved,e):ot("postText")(De.saved,De.score))+"&url="+encodeURIComponent(r_),Oe("touch").classList.add("hidden"),sl(),rl("result"),window.__lastScore=De.score}Oe("btnSave").onclick=()=>{Oe("cert").toBlob(n=>{let e=document.createElement("a");e.href=URL.createObjectURL(n),e.download="sky-catch.png",e.click(),setTimeout(()=>URL.revokeObjectURL(e.href),4e3)})};Oe("btnStart").onclick=()=>hf();var df=()=>{for(let n of document.querySelectorAll(".mode-btn"))n.classList.toggle("on",n.dataset.mode===yr);Oe("modeHint").classList.toggle("hidden",yr!=="endless")};for(let n of document.querySelectorAll(".mode-btn"))n.onclick=()=>{yr=n.dataset.mode,Mr.set("catch.mode",yr),Rt("click"),df()};df();Oe("btnAgain").onclick=()=>hf();Oe("btnTitle").onclick=()=>Nh();Oe("btnHow").onclick=()=>{Snd.init(),rl("how")};for(let n of document.querySelectorAll("[data-close]"))n.onclick=()=>rl("title");Oe("btnLang").onclick=()=>{jn=jn==="ja"?"en":"ja",Mr.set("catch.lang",jn),Lh()};Oe("btnMute").onclick=()=>{Snd.init(),Snd.setMute(!Snd.muted),Mr.set("catch.mute",Snd.muted?"1":"0"),Lh()};Oe("btnView").onclick=n=>{nx(As==="first"?"third":"first"),Rt("click"),n.currentTarget.blur()};Oe("btnPause").onclick=()=>Dh(!0);Oe("btnResume").onclick=()=>Dh(!1);Oe("btnQuit").onclick=()=>{Dh(!1),Nh()};var fx=n=>ui()?Math.max(n*.12,Math.min(4.5,n*.55)):Math.max(4.5,n*.12);function qg(){let n=De&&Ft==="play"&&!De.over?Th(De):[],e=performance.now()/1e3,t=ui();n.forEach((s,r)=>{let a=v_(r),o=s.state==="warn"?s.fx:s.x,l=s.state==="warn"?s.fz:s.z,c=(s.roof!=null?s.roof:s.top)+25,h=Math.hypot(qe.position.x-o,qe.position.z-l),u=Math.max(.7,h*.011);a.id=s.id,a.g.visible=a.halo.visible=a.ring.visible=!0,a.g.position.set(o,s.ground,l),a.col.scale.set(u,c-s.ground,u),a.mat.opacity=t&&h<u+.6?.07:.2+Math.max(0,Math.min(1,(h-12)/30))*.65;let d=qe.position.distanceTo(ts.set(s.x,s.y+.7,s.z));a.halo.position.copy(ts),a.halo.scale.setScalar(fx(d)*(1+Math.sin(e*6+s.id)*.06)),a.ring.position.set(s.fx,s.ground+.07,s.fz),a.ring.scale.setScalar(1+(Math.sin(e*5+s.id)+1)*.12)});for(let s=n.length;s<gr.length;s++){let r=gr[s];r.id=null,r.g.visible=r.halo.visible=r.ring.visible=!1}let i=n.length&&De.carry.length<Ae.carryMax?Ia(De):null;La.visible=!!i,i&&(La.position.set(i.x,i.y+2.6+Math.sin(e*4)*.12,i.z),La.material.rotation=Math.sin(e*5)*.18,La.scale.setScalar(Math.max(1.4,qe.position.distanceTo(La.position)*.045)))}var T_=(n,e,t)=>{let i=e-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*t};function E_(n,e){if(window.__freeze)return;let t=Ot.group.position,i=Math.hypot(e.vx,e.vz),s=Math.sin(e.yaw),r=Math.cos(e.yaw);if(i>8){let S=e.grounded?.25:.45;s=s*(1-S)+e.vx/i*S,r=r*(1-S)+e.vz/i*S;let b=Math.hypot(s,r);s/=b,r/=b}if(di||performance.now()-ge.userT<1800||(ge.hd=T_(ge.hd,Math.atan2(s,r),1-Math.exp(-n*(di?2.2:5))),ui()||(ge.pitch+=((e.climbing?.45:.15)-ge.pitch)*(1-Math.exp(-n*1.5)))),s=Math.sin(ge.hd),r=Math.cos(ge.hd),ui()){O_(n,e,t,s,r),Yg(n,e,U_),F_(n,e);return}qe.near=.3;let o=5.2+Math.min(2.4,i*.07),l=2.1;qe.aspect<1&&(o+=.6,l+=.5);let c=!e.grounded&&!e.climbing?Math.min(1,Math.max(0,(i-A_)/R_)):0;ge.air+=(c-ge.air)*(1-Math.exp(-n*2.5)),o*=1-C_*ge.air,l-=P_*ge.air,l+=ge.pitch>0?ge.pitch*4.2:Math.max(-.35,ge.pitch)*4.2,o*=1-Math.max(0,ge.pitch)*.15;let h=Math.min(1,Math.max(0,-ge.pitch-.35)/.9);o+=(1.6-o)*h,l+=(.85-l)*h;let u=t.x-s*o,d=t.z-r*o,p=t.y+l;for(let S=1;S<=6;S++){let b=S/6,E=t.x+(u-t.x)*b,U=t.z+(d-t.z)*b,_=t.y+(p-t.y)*b,T=!1;for(let I of rn.nearby(E,U)){if(I.slab||I.kind==="bound"||I.y0==null||_<I.y0||_>I.y1)continue;let w=Math.cos(I.yaw||0),R=Math.sin(I.yaw||0),P=E-I.cx,L=U-I.cz;if(Math.abs(P*w-L*R)<I.hw+.4&&Math.abs(P*R+L*w)<I.hl+.4){T=!0;break}}if(T){let I=Math.max(.25,(S-1)/6);u=t.x+(u-t.x)*I,d=t.z+(d-t.z)*I,p=t.y+l*.8+(1-I)*2;break}}let m=rn.groundAt(u,d,p).h+.8;p<m&&(p=m),ge.off.lerp(vr.set(u-t.x,p-t.y,d-t.z),1-Math.exp(-n*10)),ge.pos.set(t.x+ge.off.x,t.y+ge.off.y,t.z+ge.off.z);let f=Math.atan2(1.6-l,o),v=Ji.degToRad(qe.fov/2),x=Math.min(Ji.degToRad(66),f+v-Ji.degToRad(7)),g=(qe.aspect<1?.4:1.1)+1.3-ge.pitch*1.2,y=l+(10+o)*Math.tan(Math.max(0,x));ge.lookOff.lerp(vr.set(s*10,g+(y-g)*h,r*10),1-Math.exp(-n*12)),ge.look.set(t.x+ge.lookOff.x,t.y+ge.lookOff.y,t.z+ge.lookOff.z),qe.position.copy(ge.pos);let M=En.shake;M>0&&qe.position.add(vr.set((Math.random()-.5)*M,(Math.random()-.5)*M*.7,(Math.random()-.5)*M)),qe.lookAt(ge.look),Yg(n,e,1)}function Yg(n,e,t){let i=qe.aspect,s=i>=1?60:Math.min(84,2*Math.atan(Math.tan(Ji.degToRad(37))/i)*180/Math.PI),r=Math.min(104,s+(ui()?I_:0)+Math.min(18,Math.max(0,Math.hypot(e.vx,e.vy,e.vz)-6)*.5));ge.fov+=(r-ge.fov)*(1-Math.exp(-n*4)),Da*=Math.exp(-n*6),qe.fov=ge.fov+Da,qe.updateProjectionMatrix();let a=qe.matrixWorld.elements,o=Math.hypot(a[0],a[2])||1,l=(e.vx*a[0]+e.vz*a[2])/o;ge.bank=(ge.bank||0)+(Math.max(-.1,Math.min(.1,(e.rope?l:0)*-.004))*t-(ge.bank||0))*(1-Math.exp(-n*3)),qe.rotateZ(ge.bank)}var A_=9,R_=13,C_=.3,P_=.8,I_=8,L_=1.6,N_=.15,Ch=.3,Kg=.5,D_=-.95,U_=1/3,z_=.3;function Zg(n){for(let e=0;e<2;e++){let t=!1;for(let i of rn.nearby(n.x,n.z)){if(i.slab||i.kind==="bound"||i.y0==null||n.y<i.y0||n.y>i.y1)continue;let s=Math.cos(i.yaw||0),r=Math.sin(i.yaw||0),a=n.x-i.cx,o=n.z-i.cz,l=a*s-o*r,c=a*r+o*s,h=i.hw+Ch-Math.abs(l),u=i.hl+Ch-Math.abs(c);h<=0||u<=0||(h<u?l=Math.sign(l||1)*(i.hw+Ch):c=Math.sign(c||1)*(i.hl+Ch),n.x=i.cx+l*s+c*r,n.z=i.cz-l*r+c*s,t=!0)}if(!t)break}}function O_(n,e,t,i,s){qe.near=N_;let r=e.rollT>0&&e.grounded?1:L_;ge.eye=ge.eye==null?r:ge.eye+(r-ge.eye)*(1-Math.exp(-n*14)),ge.pos.set(t.x,Math.max(t.y+ge.eye,rn.groundAt(t.x,t.z,t.y+ge.eye).h+.3),t.z);let a=e.climbing;ge.wallK=(ge.wallK||0)+((a?1:0)-(ge.wallK||0))*(1-Math.exp(-n*8)),a&&(ge.wallN=a,ge.wasClimb||(ge.climbLook=i*a.nx+s*a.nz<-.4&&performance.now()-ge.userT>300?.5:0)),ge.wasClimb=!!a,ge.climbLook>0&&(ge.climbLook=performance.now()-ge.userT<300?0:ge.climbLook-n,ge.pitch+=(D_-ge.pitch)*(1-Math.exp(-n*7))),ge.wallN&&(ge.pos.x+=ge.wallN.nx*Kg*ge.wallK,ge.pos.z+=ge.wallN.nz*Kg*ge.wallK),Zg(ge.pos);let o=-ge.pitch,l=Math.cos(o),c=En.shake*z_;ts.set(i*l,Math.sin(o),s*l),qe.position.copy(ge.pos),c>0&&(qe.position.add(vr.set((Math.random()-.5)*c,(Math.random()-.5)*c*.7,(Math.random()-.5)*c)),Zg(qe.position)),qe.lookAt(vr.copy(qe.position).add(ts)),ge.off.subVectors(ge.pos,t),ge.lookOff.copy(ge.off).addScaledVector(ts,10),ge.look.copy(t).add(ge.lookOff)}function F_(n,e){let t=ws,i=Math.tan(Ji.degToRad(qe.fov/2)),s=i*qe.aspect;t.k+=((e.rope?1:0)-t.k)*(1-Math.exp(-n*12));let r=.42,a=.3-.04*t.k,o=-.5+.16*t.k;t.hand.set(a*s*r,o*i*r,-r),t.elbow.set(1.15*s*.3,-1.4*i*.3,-.3),t.dir.subVectors(t.hand,t.elbow);let l=t.dir.length();t.dir.divideScalar(l),t.sleeve.position.copy(t.elbow).lerp(t.hand,.5),t.sleeve.scale.y=l,t.sleeve.quaternion.setFromUnitVectors(t.up,t.dir),t.glove.position.copy(t.hand),t.glove.quaternion.copy(t.sleeve.quaternion),t.nozzle.position.copy(t.hand).addScaledVector(t.dir,.058),t.nozzle.quaternion.copy(t.sleeve.quaternion),qe.updateMatrixWorld(),t.world.copy(t.nozzle.position),qe.localToWorld(t.world)}function mx(){let n=innerWidth,e=innerHeight;sn.setSize(n,e,!1),qe.aspect=n/e,qe.updateProjectionMatrix(),En.setScale&&En.setScale(e)}addEventListener("resize",mx);mx();var Jg=performance.now(),Qo=0,$g=0;function gx(){if(Ft==="play"&&!Cs&&Ne&&!De.over){let n=M_();Ne.events.length=0,Wp(Ne,n,Ss,rn),Zp(De,Ne,Ss,rn);for(let e of Ne.events)S_(e);for(let e of De.events)w_(e);De.events.length=0}else if(Ft==="title"&&mn){let n=Hg(mn.b,mn.r,mn.rd,rn,Ss);if(mn.r.events.length=0,Wp(mn.r,n,Ss,rn),Zp(mn.rd,mn.r,Ss,rn),mn.rd.events.length=0,mn.rd.over){let e=Math.floor(Math.random()*1e3);mn.rd=Sh(rn,e),sl()}}}function xx(){requestAnimationFrame(xx);let n=performance.now(),e=Math.min(.1,(n-Jg)/1e3);if(Jg=n,il>0)il-=e,Qo=0;else if(ax)e=0;else{Qo+=e;let t=0;for(;Qo>=Ss&&t<6;)gx(),Qo-=Ss,t++;t>=6&&(Qo=0)}of(e||.016)}var fr=Oe("speedfx"),Li=fr.getContext("2d"),B_=Oe("hitflash"),Qg=Array.from({length:46},()=>({a:Math.random()*Math.PI*2,p:Math.random(),s:.6+Math.random()*.8,w:1+Math.random()*2})),tf=!1;function k_(n,e){window.__holdFx||(xr=Math.max(0,xr-e*5)),B_.style.opacity=xr.toFixed(2);let t=Math.max(0,Math.min(1,(n-20)/18));if(window.__speedK=t,t<=0){tf&&(Li.clearRect(0,0,fr.width,fr.height),tf=!1);return}tf=!0;let i=innerWidth,s=innerHeight,r=Math.min(2,devicePixelRatio||1);(fr.width!==Math.round(i*r)||fr.height!==Math.round(s*r))&&(fr.width=Math.round(i*r),fr.height=Math.round(s*r)),Li.setTransform(r,0,0,r,0,0),Li.clearRect(0,0,i,s);let a=i/2,o=s*.45,l=Math.hypot(i,s)*.55;Li.lineCap="round";let c=Math.round(Qg.length*(.35+.65*t));for(let h=0;h<c;h++){let u=Qg[h];u.p+=e*u.s*(1.6+t*2.4),u.p>1&&(u.p-=1,u.a=Math.random()*Math.PI*2);let d=l*(1.05-u.p*.45),p=d-l*(.12+.2*t)*u.s,m=Math.cos(u.a),f=Math.sin(u.a);Li.strokeStyle=`rgba(255,255,255,${(.1+.32*t)*Math.min(1,u.p*4)})`,Li.lineWidth=u.w,Li.beginPath(),Li.moveTo(a+m*p,o+f*p),Li.lineTo(a+m*d,o+f*d),Li.stroke()}}var ex=[{p:[0,.82,-.36],r:[.3,0,0]},{p:[0,1.62,-.08],r:[-.1,0,0]},{p:[0,.7,.36],r:[-.2,Math.PI,0]}],H_=document.querySelector(".tbtn[data-k=roll]");function of(n){let e=Ft==="title"?mn&&mn.r:Ne,t=Ft==="title"?mn&&mn.rd:De;if(e&&Ot){Ot.update(e,n),Ft==="play"&&di&&H_.classList.toggle("hidden",!(e.grounded&&!e.climbing&&!e.rope&&e.stun<=0&&!e.pit));let s=ui();if(Ot.group.visible=!s,ws.g.visible=s,E_(n,e),e.rope){let a=s?ws.world:Ot.handWorld;Ni.geometry=s?f_:p_,Ni.visible=!0,Ni.position.copy(a),Ni.lookAt(e.rope.x,e.rope.y,e.rope.z),Ni.scale.set(1,1,Math.max(.1,a.distanceTo(vr.set(e.rope.x,e.rope.y,e.rope.z))))}else Ni.visible=!1;let r=qn.userData.dir;qn.position.set(e.x+r.x*150,e.y+r.y*150,e.z+r.z*150),qn.target.position.set(e.x,e.y,e.z)}if(t){let s=new Set;for(let o of t.fallers){s.add(o.id);let l=u_(o),c=l.p.group;if(l.p.update(o.state,n),o.state==="carried"&&Ot){let h=ex[o.slot]||ex[0];c.position.set(h.p[0],h.p[1],h.p[2]),c.rotation.set(h.r[0],h.r[1],h.r[2]),c.parent!==Ot.group&&Ot.group.add(c)}else c.parent!==gt&&gt.add(c),c.position.set(o.x,o.y,o.z),c.rotation.set(0,Math.atan2(o.nx,o.nz)+(o.state==="saved"?Math.PI:0),0);l.b.visible=o.state==="warn"||o.state==="fall"||o.state!=="carried"&&o.t<3}for(let[o,l]of Rs)s.has(o)||(l.p.group.parent&&l.p.group.parent.remove(l.p.group),gt.remove(l.b),Rs.delete(o));let r=t.carry.length?$o(t,e.x,e.z):null,a=.5+Math.sin(performance.now()/220)*.4;t.mats.forEach((o,l)=>{let c=nl[l]&&nl[l].userData;c&&(c.ring.material.opacity=o===r?a:0,c.flag.rotation.y=Math.sin(performance.now()/600+l)*.3)})}Fn.visible=!1;let i=Ft==="play"&&Ne&&!Ne.rope&&(!di||ui()&&!Ne.climbing);if(i&&$g%4===0&&(Fn.userData.p=pr(rn,Ne,di?hx:null,ui()?ux():null)),i&&Fn.userData.p){let s=Fn.userData.p;Fn.visible=!0,Fn.position.set(s.x,s.y,s.z),Fn.lookAt(qe.position),Fn.scale.setScalar(ui()?Math.max(1,qe.position.distanceTo(Fn.position)*.02):1)}if(Ft==="play"&&Ne){let s=Math.hypot(Ne.vx,Ne.vy,Ne.vz),r=Snd.loops.wind;if(r&&r.g){let a=Ne.grounded?0:Math.min(.35,Math.max(0,(s-16)/40));r.g.gain.value=Number.isFinite(a)?a:0}}if(k_(Ft==="play"&&Ne?Math.hypot(Ne.vx,Ne.vy,Ne.vz):0,n),Ft!=="play"&&qg(),En.update(n),En.shake=Math.max(0,En.shake-n*2.5),Ft==="play"&&De){for(let s of Ih)!Cs&&De.t>=s.at&&!s.done&&(s.done=!0,hi(ot(s.k),3));b_(n),qg(n),Na>0&&(Na-=n,Na<=0&&px())}if(sn.render(gt,qe),af&&Ne){af=!1;let s=y_,r=ts.set(Ne.x,Ne.y+1.1,Ne.z),a=Math.cos(ge.hd),o=-Math.sin(ge.hd);Ne.climbing&&(a=Ne.climbing.nx,o=Ne.climbing.nz),s.aspect=qe.aspect,s.fov=qe.aspect<1?70:45,s.updateProjectionMatrix(),s.position.set(r.x+a*6.5,r.y+1.2,r.z+o*6.5),s.lookAt(r);let l=ws.g.visible,c=Ot.group.visible;ws.g.visible=!1,Ot.group.visible=!0,sn.render(gt,s),ws.g.visible=l,Ot.group.visible=c;let h=document.createElement("canvas");h.width=640,h.height=480;let u=sn.domElement.width,d=sn.domElement.height,p=Math.min(u,d*4/3),m=p*3/4;h.getContext("2d").drawImage(sn.domElement,(u-p)/2,(d-m)/2,p,m,0,0,640,480),lf=h,sn.render(gt,qe)}$g++}window.sky={texState:Aa,charAssets:ur,get vis(){return Rs},get mode(){return Ft},marks:()=>gr.filter(n=>n.g.visible).map(n=>({id:n.id,beamX:n.g.position.x,beamZ:n.g.position.z,beamBottom:n.g.position.y,beamTop:n.g.position.y+n.col.scale.y,beamOpacity:n.mat.opacity,haloX:n.halo.position.x,haloY:n.halo.position.y,haloZ:n.halo.position.z,haloSize:n.halo.scale.x,ringX:n.ring.position.x,ringZ:n.ring.position.z,ringY:n.ring.position.y})),markPool:gr,renderer:sn,scene:gt,CATCH:Ae,headSign:La,PITCH_MIN:ox,log:uf,get hitStop(){return il},get flashA(){return xr},get fovKick(){return Da},get me(){return Ne},get rd(){return De},CATCH:Ae,RUN:me,world:rn,camera:qe,touchMode:di,cam:ge,get camAir(){return ge.air},get view(){return As},setView:nx,get fpOn(){return ui()},fpArm:ws,ropeMesh:Ni,aimMark:Fn,start:n=>hf(n),setMode:n=>{yr=n,df()},get gameMode(){return yr},toTitle:Nh,showResult:px,setLang:n=>{jn=n,Lh()},get lang(){return jn},dbg:{pause:n=>{ax=n},step:n=>{for(let e=0;e<n;e++)gx();of(Ss)},teleport:(n,e,t,i)=>{Object.assign(Ne,{x:n,y:e,z:t,vx:0,vy:0,vz:0,rope:null,climbing:null,grounded:e<.1}),i!=null&&(Ne.yaw=i)},pressWire:(n,e)=>cx(n,e),compass:(n,e)=>dx(n,e),pressJump:()=>{Ts.jump=!0},wireAuto:()=>{es={at:null,key:!0}},keys:ci,stick:zt,say:hi,get model(){return Ot},fallTime:bh,render:n=>{for(let e=0;e<n;e++)of(1/30)}}};Lh();Nh();requestAnimationFrame(xx);s_(()=>{window.__catchReady=!0,document.fonts&&document.fonts.load&&document.fonts.load('16px "Yuji Syuku"',"感謝状").catch(()=>{}),Eg().then(()=>(d_(),ag())).then(()=>{window.__assetsDone=!0,Snd.prefetch()})});
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
