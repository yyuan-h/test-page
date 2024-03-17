define(["./RuntimeError-5b082e8f","./when-4bbc8319","./createTaskProcessorWorker"],(function(e,t,n){"use strict";function i(t,n){if(i.passThroughDataForTesting)return n;const r=t.byteLength;if(0===r||r%4!=0)throw new e.RuntimeError("The length of key must be greater than 0 and a multiple of 4.");const a=new DataView(n),o=a.getUint32(0,!0);if(1953029805===o||2917034100===o)return n;const s=new DataView(t);let f=0;const l=n.byteLength,d=l-l%8,h=r;let c,u=8;for(;f<d;)for(u=(u+8)%24,c=u;f<d&&c<h;)a.setUint32(f,a.getUint32(f,!0)^s.getUint32(c,!0),!0),a.setUint32(f+4,a.getUint32(f+4,!0)^s.getUint32(c+4,!0),!0),f+=8,c+=24;if(f<l)for(c>=h&&(u=(u+8)%24,c=u);f<l;)a.setUint8(f,a.getUint8(f)^s.getUint8(c)),f++,c++}function r(e,t){return 0!=(e&t)}i.passThroughDataForTesting=!1;const a=[1,2,4,8];function o(e,t,n,i,r,a){this._bits=e,this.cnodeVersion=t,this.imageryVersion=n,this.terrainVersion=i,this.imageryProvider=r,this.terrainProvider=a,this.ancestorHasTerrain=!1,this.terrainState=void 0}o.clone=function(e,n){return t.defined(n)?(n._bits=e._bits,n.cnodeVersion=e.cnodeVersion,n.imageryVersion=e.imageryVersion,n.terrainVersion=e.terrainVersion,n.imageryProvider=e.imageryProvider,n.terrainProvider=e.terrainProvider):n=new o(e._bits,e.cnodeVersion,e.imageryVersion,e.terrainVersion,e.imageryProvider,e.terrainProvider),n.ancestorHasTerrain=e.ancestorHasTerrain,n.terrainState=e.terrainState,n},o.prototype.setParent=function(e){this.ancestorHasTerrain=e.ancestorHasTerrain||this.hasTerrain()},o.prototype.hasSubtree=function(){return r(this._bits,16)},o.prototype.hasImagery=function(){return r(this._bits,64)},o.prototype.hasTerrain=function(){return r(this._bits,128)},o.prototype.hasChildren=function(){return r(this._bits,15)},o.prototype.hasChild=function(e){return r(this._bits,a[e])},o.prototype.getChildBitmask=function(){return 15&this._bits};var s=t.createCommonjsModule((function(e,t){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var r in n)i(n,r)&&(e[r]=n[r])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var r={arraySet:function(e,t,n,i,r){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+i),r);else for(var a=0;a<i;a++)e[r+a]=t[n+a]},flattenChunks:function(e){var t,n,i,r,a,o;for(i=0,t=0,n=e.length;t<n;t++)i+=e[t].length;for(o=new Uint8Array(i),r=0,t=0,n=e.length;t<n;t++)a=e[t],o.set(a,r),r+=a.length;return o}},a={arraySet:function(e,t,n,i,r){for(var a=0;a<i;a++)e[r+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,r)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,a))},t.setTyped(n)})),f=function(e,t,n,i){for(var r=65535&e,a=e>>>16&65535,o=0;0!==n;){n-=o=n>2e3?2e3:n;do{a=a+(r=r+t[i++]|0)|0}while(--o);r%=65521,a%=65521}return r|a<<16},l=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var i=0;i<8;i++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}(),d=function(e,t,n,i){var r=l,a=i+n;e^=-1;for(var o=i;o<a;o++)e=e>>>8^r[255&(e^t[o])];return~e},h=function(e,t){var n,i,r,a,o,s,f,l,d,h,c,u,w,b,m,g,k,v,p,y,_,x,B,E,A;n=e.state,i=e.next_in,E=e.input,r=i+(e.avail_in-5),a=e.next_out,A=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),f=n.dmax,l=n.wsize,d=n.whave,h=n.wnext,c=n.window,u=n.hold,w=n.bits,b=n.lencode,m=n.distcode,g=(1<<n.lenbits)-1,k=(1<<n.distbits)-1;e:do{w<15&&(u+=E[i++]<<w,w+=8,u+=E[i++]<<w,w+=8),v=b[u&g];t:for(;;){if(u>>>=p=v>>>24,w-=p,0===(p=v>>>16&255))A[a++]=65535&v;else{if(!(16&p)){if(0==(64&p)){v=b[(65535&v)+(u&(1<<p)-1)];continue t}if(32&p){n.mode=12;break e}e.msg="invalid literal/length code",n.mode=30;break e}y=65535&v,(p&=15)&&(w<p&&(u+=E[i++]<<w,w+=8),y+=u&(1<<p)-1,u>>>=p,w-=p),w<15&&(u+=E[i++]<<w,w+=8,u+=E[i++]<<w,w+=8),v=m[u&k];n:for(;;){if(u>>>=p=v>>>24,w-=p,!(16&(p=v>>>16&255))){if(0==(64&p)){v=m[(65535&v)+(u&(1<<p)-1)];continue n}e.msg="invalid distance code",n.mode=30;break e}if(_=65535&v,w<(p&=15)&&(u+=E[i++]<<w,(w+=8)<p&&(u+=E[i++]<<w,w+=8)),(_+=u&(1<<p)-1)>f){e.msg="invalid distance too far back",n.mode=30;break e}if(u>>>=p,w-=p,_>(p=a-o)){if((p=_-p)>d&&n.sane){e.msg="invalid distance too far back",n.mode=30;break e}if(x=0,B=c,0===h){if(x+=l-p,p<y){y-=p;do{A[a++]=c[x++]}while(--p);x=a-_,B=A}}else if(h<p){if(x+=l+h-p,(p-=h)<y){y-=p;do{A[a++]=c[x++]}while(--p);if(x=0,h<y){y-=p=h;do{A[a++]=c[x++]}while(--p);x=a-_,B=A}}}else if(x+=h-p,p<y){y-=p;do{A[a++]=c[x++]}while(--p);x=a-_,B=A}for(;y>2;)A[a++]=B[x++],A[a++]=B[x++],A[a++]=B[x++],y-=3;y&&(A[a++]=B[x++],y>1&&(A[a++]=B[x++]))}else{x=a-_;do{A[a++]=A[x++],A[a++]=A[x++],A[a++]=A[x++],y-=3}while(y>2);y&&(A[a++]=A[x++],y>1&&(A[a++]=A[x++]))}break}}break}}while(i<r&&a<s);i-=y=w>>3,u&=(1<<(w-=y<<3))-1,e.next_in=i,e.next_out=a,e.avail_in=i<r?r-i+5:5-(i-r),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=u,n.bits=w},c=15,u=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],w=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],b=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],g=function(e,t,n,i,r,a,o,f){var l,d,h,g,k,v,p,y,_,x=f.bits,B=0,E=0,A=0,T=0,U=0,S=0,R=0,C=0,I=0,z=0,D=null,V=0,P=new s.Buf16(16),O=new s.Buf16(16),M=null,j=0;for(B=0;B<=c;B++)P[B]=0;for(E=0;E<i;E++)P[t[n+E]]++;for(U=x,T=c;T>=1&&0===P[T];T--);if(U>T&&(U=T),0===T)return r[a++]=20971520,r[a++]=20971520,f.bits=1,0;for(A=1;A<T&&0===P[A];A++);for(U<A&&(U=A),C=1,B=1;B<=c;B++)if(C<<=1,(C-=P[B])<0)return-1;if(C>0&&(0===e||1!==T))return-1;for(O[1]=0,B=1;B<c;B++)O[B+1]=O[B]+P[B];for(E=0;E<i;E++)0!==t[n+E]&&(o[O[t[n+E]]++]=E);if(0===e?(D=M=o,v=19):1===e?(D=u,V-=257,M=w,j-=257,v=256):(D=b,M=m,v=-1),z=0,E=0,B=A,k=a,S=U,R=0,h=-1,g=(I=1<<U)-1,1===e&&I>852||2===e&&I>592)return 1;for(;;){p=B-R,o[E]<v?(y=0,_=o[E]):o[E]>v?(y=M[j+o[E]],_=D[V+o[E]]):(y=96,_=0),l=1<<B-R,A=d=1<<S;do{r[k+(z>>R)+(d-=l)]=p<<24|y<<16|_}while(0!==d);for(l=1<<B-1;z&l;)l>>=1;if(0!==l?(z&=l-1,z+=l):z=0,E++,0==--P[B]){if(B===T)break;B=t[n+o[E]]}if(B>U&&(z&g)!==h){for(0===R&&(R=U),k+=A,C=1<<(S=B-R);S+R<T&&!((C-=P[S+R])<=0);)S++,C<<=1;if(I+=1<<S,1===e&&I>852||2===e&&I>592)return 1;r[h=z&g]=U<<24|S<<16|k-a}}return 0!==z&&(r[k+z]=B-R<<24|64<<16),f.bits=U,0},k=-2,v=12,p=30;function y(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function _(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=1,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new s.Buf32(852),t.distcode=t.distdyn=new s.Buf32(592),t.sane=1,t.back=-1,0):k}function B(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,x(e)):k}function E(e,t){var n,i;return e&&e.state?(i=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?k:(null!==i.window&&i.wbits!==t&&(i.window=null),i.wrap=n,i.wbits=t,B(e))):k}function A(e,t){var n,i;return e?(i=new _,e.state=i,i.window=null,0!==(n=E(e,t))&&(e.state=null),n):k}var T,U,S=!0;function R(e){if(S){var t;for(T=new s.Buf32(512),U=new s.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(g(1,e.lens,0,288,T,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;g(2,e.lens,0,32,U,0,e.work,{bits:5}),S=!1}e.lencode=T,e.lenbits=9,e.distcode=U,e.distbits=5}function C(e,t,n,i){var r,a=e.state;return null===a.window&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new s.Buf8(a.wsize)),i>=a.wsize?(s.arraySet(a.window,t,n-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):((r=a.wsize-a.wnext)>i&&(r=i),s.arraySet(a.window,t,n-i,r,a.wnext),(i-=r)?(s.arraySet(a.window,t,n-i,i,0),a.wnext=i,a.whave=a.wsize):(a.wnext+=r,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=r))),0}var I={inflateReset:B,inflateReset2:E,inflateResetKeep:x,inflateInit:function(e){return A(e,15)},inflateInit2:A,inflate:function(e,t){var n,i,r,a,o,l,c,u,w,b,m,_,x,B,E,A,T,U,S,I,z,D,V,P,O=0,M=new s.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return k;(n=e.state).mode===v&&(n.mode=13),o=e.next_out,r=e.output,c=e.avail_out,a=e.next_in,i=e.input,l=e.avail_in,u=n.hold,w=n.bits,b=l,m=c,D=0;e:for(;;)switch(n.mode){case 1:if(0===n.wrap){n.mode=13;break}for(;w<16;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(2&n.wrap&&35615===u){n.check=0,M[0]=255&u,M[1]=u>>>8&255,n.check=d(n.check,M,2,0),u=0,w=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&u)<<8)+(u>>8))%31){e.msg="incorrect header check",n.mode=p;break}if(8!=(15&u)){e.msg="unknown compression method",n.mode=p;break}if(w-=4,z=8+(15&(u>>>=4)),0===n.wbits)n.wbits=z;else if(z>n.wbits){e.msg="invalid window size",n.mode=p;break}n.dmax=1<<z,e.adler=n.check=1,n.mode=512&u?10:v,u=0,w=0;break;case 2:for(;w<16;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(n.flags=u,8!=(255&n.flags)){e.msg="unknown compression method",n.mode=p;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=p;break}n.head&&(n.head.text=u>>8&1),512&n.flags&&(M[0]=255&u,M[1]=u>>>8&255,n.check=d(n.check,M,2,0)),u=0,w=0,n.mode=3;case 3:for(;w<32;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}n.head&&(n.head.time=u),512&n.flags&&(M[0]=255&u,M[1]=u>>>8&255,M[2]=u>>>16&255,M[3]=u>>>24&255,n.check=d(n.check,M,4,0)),u=0,w=0,n.mode=4;case 4:for(;w<16;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}n.head&&(n.head.xflags=255&u,n.head.os=u>>8),512&n.flags&&(M[0]=255&u,M[1]=u>>>8&255,n.check=d(n.check,M,2,0)),u=0,w=0,n.mode=5;case 5:if(1024&n.flags){for(;w<16;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}n.length=u,n.head&&(n.head.extra_len=u),512&n.flags&&(M[0]=255&u,M[1]=u>>>8&255,n.check=d(n.check,M,2,0)),u=0,w=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&((_=n.length)>l&&(_=l),_&&(n.head&&(z=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),s.arraySet(n.head.extra,i,a,_,z)),512&n.flags&&(n.check=d(n.check,i,_,a)),l-=_,a+=_,n.length-=_),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(0===l)break e;_=0;do{z=i[a+_++],n.head&&z&&n.length<65536&&(n.head.name+=String.fromCharCode(z))}while(z&&_<l);if(512&n.flags&&(n.check=d(n.check,i,_,a)),l-=_,a+=_,z)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(0===l)break e;_=0;do{z=i[a+_++],n.head&&z&&n.length<65536&&(n.head.comment+=String.fromCharCode(z))}while(z&&_<l);if(512&n.flags&&(n.check=d(n.check,i,_,a)),l-=_,a+=_,z)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;w<16;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(u!==(65535&n.check)){e.msg="header crc mismatch",n.mode=p;break}u=0,w=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=v;break;case 10:for(;w<32;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}e.adler=n.check=y(u),u=0,w=0,n.mode=11;case 11:if(0===n.havedict)return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=l,n.hold=u,n.bits=w,2;e.adler=n.check=1,n.mode=v;case v:if(5===t||6===t)break e;case 13:if(n.last){u>>>=7&w,w-=7&w,n.mode=27;break}for(;w<3;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}switch(n.last=1&u,w-=1,3&(u>>>=1)){case 0:n.mode=14;break;case 1:if(R(n),n.mode=20,6===t){u>>>=2,w-=2;break e}break;case 2:n.mode=17;break;case 3:e.msg="invalid block type",n.mode=p}u>>>=2,w-=2;break;case 14:for(u>>>=7&w,w-=7&w;w<32;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if((65535&u)!=(u>>>16^65535)){e.msg="invalid stored block lengths",n.mode=p;break}if(n.length=65535&u,u=0,w=0,n.mode=15,6===t)break e;case 15:n.mode=16;case 16:if(_=n.length){if(_>l&&(_=l),_>c&&(_=c),0===_)break e;s.arraySet(r,i,a,_,o),l-=_,a+=_,c-=_,o+=_,n.length-=_;break}n.mode=v;break;case 17:for(;w<14;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(n.nlen=257+(31&u),u>>>=5,w-=5,n.ndist=1+(31&u),u>>>=5,w-=5,n.ncode=4+(15&u),u>>>=4,w-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=p;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;w<3;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}n.lens[j[n.have++]]=7&u,u>>>=3,w-=3}for(;n.have<19;)n.lens[j[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,V={bits:n.lenbits},D=g(0,n.lens,0,19,n.lencode,0,n.work,V),n.lenbits=V.bits,D){e.msg="invalid code lengths set",n.mode=p;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(O=n.lencode[u&(1<<n.lenbits)-1])>>>16&255,T=65535&O,!((E=O>>>24)<=w);){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(T<16)u>>>=E,w-=E,n.lens[n.have++]=T;else{if(16===T){for(P=E+2;w<P;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(u>>>=E,w-=E,0===n.have){e.msg="invalid bit length repeat",n.mode=p;break}z=n.lens[n.have-1],_=3+(3&u),u>>>=2,w-=2}else if(17===T){for(P=E+3;w<P;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}w-=E,z=0,_=3+(7&(u>>>=E)),u>>>=3,w-=3}else{for(P=E+7;w<P;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}w-=E,z=0,_=11+(127&(u>>>=E)),u>>>=7,w-=7}if(n.have+_>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=p;break}for(;_--;)n.lens[n.have++]=z}}if(n.mode===p)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=p;break}if(n.lenbits=9,V={bits:n.lenbits},D=g(1,n.lens,0,n.nlen,n.lencode,0,n.work,V),n.lenbits=V.bits,D){e.msg="invalid literal/lengths set",n.mode=p;break}if(n.distbits=6,n.distcode=n.distdyn,V={bits:n.distbits},D=g(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,V),n.distbits=V.bits,D){e.msg="invalid distances set",n.mode=p;break}if(n.mode=20,6===t)break e;case 20:n.mode=21;case 21:if(l>=6&&c>=258){e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=l,n.hold=u,n.bits=w,h(e,m),o=e.next_out,r=e.output,c=e.avail_out,a=e.next_in,i=e.input,l=e.avail_in,u=n.hold,w=n.bits,n.mode===v&&(n.back=-1);break}for(n.back=0;A=(O=n.lencode[u&(1<<n.lenbits)-1])>>>16&255,T=65535&O,!((E=O>>>24)<=w);){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(A&&0==(240&A)){for(U=E,S=A,I=T;A=(O=n.lencode[I+((u&(1<<U+S)-1)>>U)])>>>16&255,T=65535&O,!(U+(E=O>>>24)<=w);){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}u>>>=U,w-=U,n.back+=U}if(u>>>=E,w-=E,n.back+=E,n.length=T,0===A){n.mode=26;break}if(32&A){n.back=-1,n.mode=v;break}if(64&A){e.msg="invalid literal/length code",n.mode=p;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(P=n.extra;w<P;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}n.length+=u&(1<<n.extra)-1,u>>>=n.extra,w-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(O=n.distcode[u&(1<<n.distbits)-1])>>>16&255,T=65535&O,!((E=O>>>24)<=w);){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(0==(240&A)){for(U=E,S=A,I=T;A=(O=n.distcode[I+((u&(1<<U+S)-1)>>U)])>>>16&255,T=65535&O,!(U+(E=O>>>24)<=w);){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}u>>>=U,w-=U,n.back+=U}if(u>>>=E,w-=E,n.back+=E,64&A){e.msg="invalid distance code",n.mode=p;break}n.offset=T,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(P=n.extra;w<P;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}n.offset+=u&(1<<n.extra)-1,u>>>=n.extra,w-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=p;break}n.mode=25;case 25:if(0===c)break e;if(_=m-c,n.offset>_){if((_=n.offset-_)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=p;break}_>n.wnext?(_-=n.wnext,x=n.wsize-_):x=n.wnext-_,_>n.length&&(_=n.length),B=n.window}else B=r,x=o-n.offset,_=n.length;_>c&&(_=c),c-=_,n.length-=_;do{r[o++]=B[x++]}while(--_);0===n.length&&(n.mode=21);break;case 26:if(0===c)break e;r[o++]=n.length,c--,n.mode=21;break;case 27:if(n.wrap){for(;w<32;){if(0===l)break e;l--,u|=i[a++]<<w,w+=8}if(m-=c,e.total_out+=m,n.total+=m,m&&(e.adler=n.check=n.flags?d(n.check,r,m,o-m):f(n.check,r,m,o-m)),m=c,(n.flags?u:y(u))!==n.check){e.msg="incorrect data check",n.mode=p;break}u=0,w=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;w<32;){if(0===l)break e;l--,u+=i[a++]<<w,w+=8}if(u!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=p;break}u=0,w=0}n.mode=29;case 29:D=1;break e;case p:D=-3;break e;case 31:return-4;default:return k}return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=l,n.hold=u,n.bits=w,(n.wsize||m!==e.avail_out&&n.mode<p&&(n.mode<27||4!==t))&&C(e,e.output,e.next_out,m-e.avail_out),b-=e.avail_in,m-=e.avail_out,e.total_in+=b,e.total_out+=m,n.total+=m,n.wrap&&m&&(e.adler=n.check=n.flags?d(n.check,r,m,e.next_out-m):f(n.check,r,m,e.next_out-m)),e.data_type=n.bits+(n.last?64:0)+(n.mode===v?128:0)+(20===n.mode||15===n.mode?256:0),(0===b&&0===m||4===t)&&0===D&&(D=-5),D},inflateEnd:function(e){if(!e||!e.state)return k;var t=e.state;return t.window&&(t.window=null),e.state=null,0},inflateGetHeader:function(e,t){var n;return e&&e.state?0==(2&(n=e.state).wrap)?k:(n.head=t,t.done=!1,0):k},inflateSetDictionary:function(e,t){var n,i=t.length;return e&&e.state?0!==(n=e.state).wrap&&11!==n.mode?k:11===n.mode&&f(1,t,i,0)!==n.check?-3:C(e,t,i,i)?(n.mode=31,-4):(n.havedict=1,0):k},inflateInfo:"pako inflate (from Nodeca project)"},z=!0,D=!0;try{String.fromCharCode.apply(null,[0])}catch(e){z=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){D=!1}for(var V=new s.Buf8(256),P=0;P<256;P++)V[P]=P>=252?6:P>=248?5:P>=240?4:P>=224?3:P>=192?2:1;function O(e,t){if(t<65534&&(e.subarray&&D||!e.subarray&&z))return String.fromCharCode.apply(null,s.shrinkBuf(e,t));for(var n="",i=0;i<t;i++)n+=String.fromCharCode(e[i]);return n}V[254]=V[254]=1;var M=function(e){var t,n,i,r,a,o=e.length,f=0;for(r=0;r<o;r++)55296==(64512&(n=e.charCodeAt(r)))&&r+1<o&&56320==(64512&(i=e.charCodeAt(r+1)))&&(n=65536+(n-55296<<10)+(i-56320),r++),f+=n<128?1:n<2048?2:n<65536?3:4;for(t=new s.Buf8(f),a=0,r=0;a<f;r++)55296==(64512&(n=e.charCodeAt(r)))&&r+1<o&&56320==(64512&(i=e.charCodeAt(r+1)))&&(n=65536+(n-55296<<10)+(i-56320),r++),n<128?t[a++]=n:n<2048?(t[a++]=192|n>>>6,t[a++]=128|63&n):n<65536?(t[a++]=224|n>>>12,t[a++]=128|n>>>6&63,t[a++]=128|63&n):(t[a++]=240|n>>>18,t[a++]=128|n>>>12&63,t[a++]=128|n>>>6&63,t[a++]=128|63&n);return t},j=function(e){for(var t=new s.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},H=function(e,t){var n,i,r,a,o=t||e.length,s=new Array(2*o);for(i=0,n=0;n<o;)if((r=e[n++])<128)s[i++]=r;else if((a=V[r])>4)s[i++]=65533,n+=a-1;else{for(r&=2===a?31:3===a?15:7;a>1&&n<o;)r=r<<6|63&e[n++],a--;a>1?s[i++]=65533:r<65536?s[i++]=r:(r-=65536,s[i++]=55296|r>>10&1023,s[i++]=56320|1023&r)}return O(s,i)},N=function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;n>=0&&128==(192&e[n]);)n--;return n<0||0===n?t:n+V[e[n]]>t?n:t},L=0,Y=2,F=4,G=0,K=1,Q=2,q=-5,W={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},J=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},X=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},Z=Object.prototype.toString;function $(e){if(!(this instanceof $))return new $(e);this.options=s.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new J,this.strm.avail_out=0;var n=I.inflateInit2(this.strm,t.windowBits);if(n!==G)throw new Error(W[n]);if(this.header=new X,I.inflateGetHeader(this.strm,this.header),t.dictionary&&("string"==typeof t.dictionary?t.dictionary=M(t.dictionary):"[object ArrayBuffer]"===Z.call(t.dictionary)&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=I.inflateSetDictionary(this.strm,t.dictionary))!==G))throw new Error(W[n])}function ee(e,t){var n=new $(t);if(n.push(e,!0),n.err)throw n.msg||W[n.err];return n.result}$.prototype.push=function(e,t){var n,i,r,a,o,f=this.strm,l=this.options.chunkSize,d=this.options.dictionary,h=!1;if(this.ended)return!1;i=t===~~t?t:!0===t?F:L,"string"==typeof e?f.input=j(e):"[object ArrayBuffer]"===Z.call(e)?f.input=new Uint8Array(e):f.input=e,f.next_in=0,f.avail_in=f.input.length;do{if(0===f.avail_out&&(f.output=new s.Buf8(l),f.next_out=0,f.avail_out=l),(n=I.inflate(f,L))===Q&&d&&(n=I.inflateSetDictionary(this.strm,d)),n===q&&!0===h&&(n=G,h=!1),n!==K&&n!==G)return this.onEnd(n),this.ended=!0,!1;f.next_out&&(0!==f.avail_out&&n!==K&&(0!==f.avail_in||i!==F&&i!==Y)||("string"===this.options.to?(r=N(f.output,f.next_out),a=f.next_out-r,o=H(f.output,r),f.next_out=a,f.avail_out=l-a,a&&s.arraySet(f.output,f.output,r,a,0),this.onData(o)):this.onData(s.shrinkBuf(f.output,f.next_out)))),0===f.avail_in&&0===f.avail_out&&(h=!0)}while((f.avail_in>0||0===f.avail_out)&&n!==K);return n===K&&(i=F),i===F?(n=I.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===G):i!==Y||(this.onEnd(G),f.avail_out=0,!0)},$.prototype.onData=function(e){this.chunks.push(e)},$.prototype.onEnd=function(e){e===G&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=s.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var te={Inflate:$,inflate:ee,inflateRaw:function(e,t){return(t=t||{}).raw=!0,ee(e,t)},ungzip:ee};const ne=Uint16Array.BYTES_PER_ELEMENT,ie=Int32Array.BYTES_PER_ELEMENT,re=Uint32Array.BYTES_PER_ELEMENT,ae={METADATA:0,TERRAIN:1,DBROOT:2,fromString:function(e){return"Metadata"===e?ae.METADATA:"Terrain"===e?ae.TERRAIN:"DbRoot"===e?ae.DBROOT:void 0}},oe=1953029805,se=2917034100;return n((function(t,n){const r=ae.fromString(t.type);let a=t.buffer;i(t.key,a);const s=function(t){const n=new DataView(t);let i=0;const r=n.getUint32(i,!0);if(i+=re,r!==oe&&r!==se)throw new e.RuntimeError("Invalid magic");const a=n.getUint32(i,r===oe);i+=re;const o=new Uint8Array(t,i),s=te.inflate(o);if(s.length!==a)throw new e.RuntimeError("Size of packet doesn't match header");return s}(a);a=s.buffer;const f=s.length;switch(r){case ae.METADATA:return function(t,n,i){const r=new DataView(t);let a=0;const s=r.getUint32(a,!0);if(a+=re,32301!==s)throw new e.RuntimeError("Invalid magic");const f=r.getUint32(a,!0);if(a+=re,1!==f)throw new e.RuntimeError("Invalid data type. Must be 1 for QuadTreePacket");const l=r.getUint32(a,!0);if(a+=re,2!==l)throw new e.RuntimeError("Invalid QuadTreePacket version. Only version 2 is supported.");const d=r.getInt32(a,!0);a+=ie;const h=r.getInt32(a,!0);if(a+=ie,32!==h)throw new e.RuntimeError("Invalid instance size.");const c=r.getInt32(a,!0);a+=ie;const u=r.getInt32(a,!0);a+=ie;const w=r.getInt32(a,!0);if(a+=ie,c!==d*h+a)throw new e.RuntimeError("Invalid dataBufferOffset");if(c+u+w!==n)throw new e.RuntimeError("Invalid packet offsets");const b=[];for(let e=0;e<d;++e){const e=r.getUint8(a);++a,++a;const t=r.getUint16(a,!0);a+=ne;const n=r.getUint16(a,!0);a+=ne;const i=r.getUint16(a,!0);a+=ne,a+=ne,a+=ne,a+=ie,a+=ie,a+=8;const s=r.getUint8(a++),f=r.getUint8(a++);a+=ne,b.push(new o(e,t,n,i,s,f))}const m=[];let g=0;function k(e,t,n){let i=!1;if(4===n){if(t.hasSubtree())return;i=!0}for(let r=0;r<4;++r){const a=e+r.toString();if(i)m[a]=null;else if(n<4)if(t.hasChild(r)){if(g===d)return void console.log("Incorrect number of instances");const e=b[g++];m[a]=e,k(a,e,n+1)}else m[a]=null}}let v=0;const p=b[g++];return""===i?++v:m[i]=p,k(i,p,v),m}(a,f,t.quadKey);case ae.TERRAIN:return function(t,n,i){const r=new DataView(t),a=function(t){for(let i=0;i<4;++i){const i=r.getUint32(t,!0);if(t+=re,(t+=i)>n)throw new e.RuntimeError("Malformed terrain packet found.")}return t};let o=0;const s=[];for(;s.length<5;){const e=o;o=a(o);const n=t.slice(e,o);i.push(n),s.push(n)}return s}(a,f,n);case ae.DBROOT:return n.push(a),{buffer:a}}}))}));