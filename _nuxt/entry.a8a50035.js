import{r as Q1,g as s2,i as h8,n as H8,a as K1,w as hn,b as X3,o as Hn,c as un,d as pn,u as j,e as u8,v as p8,t as V8,h as M8,f as Vn,j as Mn,k as b6,l as b1,m as d8,p as F,q as D,s as P,x as A3,y as M1,z as s1,A as Y,B as dn,C as Cn,D as C8,E as L8,F as r1,G as Ln,H as J1,I as _1,J as R2,K as g8,L as gn,N as x8,S as b8,M as N8,O as xn,P as bn,Q as Nn,R as yn,T as Sn,U as wn,V as An,W as kn,X as Pn}from"./swiper-vue.8516a05a.js";const Tn=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Fn=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Rn=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Bn(c,a){if(c!=="__proto__"&&!(c==="constructor"&&a&&typeof a=="object"&&"prototype"in a))return a}function En(c,a={}){if(typeof c!="string")return c;const r=c.toLowerCase().trim();if(r==="true")return!0;if(r==="false")return!1;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r!=="undefined"){if(!Rn.test(c)){if(a.strict)throw new SyntaxError("Invalid JSON");return c}try{return Tn.test(c)||Fn.test(c)?JSON.parse(c,Bn):JSON.parse(c)}catch(e){if(a.strict)throw e;return c}}}const Dn=/#/g,On=/&/g,$n=/=/g,y8=/\+/g,In=/%5e/gi,Un=/%60/gi,qn=/%7c/gi,Gn=/%20/gi;function jn(c){return encodeURI(""+c).replace(qn,"|")}function k3(c){return jn(typeof c=="string"?c:JSON.stringify(c)).replace(y8,"%2B").replace(Gn,"+").replace(Dn,"%23").replace(On,"%26").replace(Un,"`").replace(In,"^")}function V3(c){return k3(c).replace($n,"%3D")}function B2(c=""){try{return decodeURIComponent(""+c)}catch{return""+c}}function Wn(c){return B2(c.replace(y8," "))}function S8(c=""){const a={};c[0]==="?"&&(c=c.slice(1));for(const r of c.split("&")){const e=r.match(/([^=]+)=?(.*)/)||[];if(e.length<2)continue;const s=B2(e[1]);if(s==="__proto__"||s==="constructor")continue;const i=Wn(e[2]||"");typeof a[s]<"u"?Array.isArray(a[s])?a[s].push(i):a[s]=[a[s],i]:a[s]=i}return a}function Zn(c,a){return(typeof a=="number"||typeof a=="boolean")&&(a=String(a)),a?Array.isArray(a)?a.map(r=>`${V3(c)}=${k3(r)}`).join("&"):`${V3(c)}=${k3(a)}`:V3(c)}function w8(c){return Object.keys(c).filter(a=>c[a]!==void 0).map(a=>Zn(a,c[a])).join("&")}const Kn=/^\w{2,}:([/\\]{1,2})/,_n=/^\w{2,}:([/\\]{2})?/,Yn=/^([/\\]\s*){2,}[^/\\]/;function j2(c,a={}){return typeof a=="boolean"&&(a={acceptRelative:a}),a.strict?Kn.test(c):_n.test(c)||(a.acceptRelative?Yn.test(c):!1)}const Xn=/\/$|\/\?/;function P3(c="",a=!1){return a?Xn.test(c):c.endsWith("/")}function A8(c="",a=!1){if(!a)return(P3(c)?c.slice(0,-1):c)||"/";if(!P3(c,!0))return c||"/";const[r,...e]=c.split("?");return(r.slice(0,-1)||"/")+(e.length>0?`?${e.join("?")}`:"")}function T3(c="",a=!1){if(!a)return c.endsWith("/")?c:c+"/";if(P3(c,!0))return c||"/";const[r,...e]=c.split("?");return r+"/"+(e.length>0?`?${e.join("?")}`:"")}function k8(c=""){return c.startsWith("/")}function Qn(c=""){return(k8(c)?c.slice(1):c)||"/"}function N6(c=""){return k8(c)?c:"/"+c}function Jn(c,a){if(P8(a)||j2(c))return c;const r=A8(a);return c.startsWith(r)?c:n2(r,c)}function cf(c,a){if(P8(a))return c;const r=A8(a);if(!c.startsWith(r))return c;const e=c.slice(r.length);return e[0]==="/"?e:"/"+e}function af(c,a){const r=f2(c),e={...S8(r.search),...a};return r.search=w8(e),T8(r)}function P8(c){return!c||c==="/"}function ef(c){return c&&c!=="/"}function n2(c,...a){let r=c||"";for(const e of a.filter(s=>ef(s)))r=r?T3(r)+Qn(e):e;return r}function rf(c,a,r={}){return r.trailingSlash||(c=T3(c),a=T3(a)),r.leadingSlash||(c=N6(c),a=N6(a)),r.encoding||(c=B2(c),a=B2(a)),c===a}function f2(c="",a){if(!j2(c,{acceptRelative:!0}))return a?f2(a+c):y6(c);const[r="",e,s=""]=(c.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",n=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:f,search:o,hash:l}=y6(n.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:e?e.slice(0,Math.max(0,e.length-1)):"",host:i,pathname:f,search:o,hash:l}}function y6(c=""){const[a="",r="",e=""]=(c.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:a,search:r,hash:e}}function T8(c){const a=c.pathname+(c.search?(c.search.startsWith("?")?"":"?")+c.search:"")+c.hash;return c.protocol?c.protocol+"//"+(c.auth?c.auth+"@":"")+c.host+a:a}class sf extends Error{constructor(){super(...arguments),this.name="FetchError"}}function nf(c,a,r){let e="";a&&(e=a.message),c&&r?e=`${e} (${r.status} ${r.statusText} (${c.toString()}))`:c&&(e=`${e} (${c.toString()})`);const s=new sf(e);return Object.defineProperty(s,"request",{get(){return c}}),Object.defineProperty(s,"response",{get(){return r}}),Object.defineProperty(s,"data",{get(){return r&&r._data}}),Object.defineProperty(s,"status",{get(){return r&&r.status}}),Object.defineProperty(s,"statusText",{get(){return r&&r.statusText}}),Object.defineProperty(s,"statusCode",{get(){return r&&r.status}}),Object.defineProperty(s,"statusMessage",{get(){return r&&r.statusText}}),s}const ff=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function S6(c="GET"){return ff.has(c.toUpperCase())}function of(c){if(c===void 0)return!1;const a=typeof c;return a==="string"||a==="number"||a==="boolean"||a===null?!0:a!=="object"?!1:Array.isArray(c)?!0:c.constructor&&c.constructor.name==="Object"||typeof c.toJSON=="function"}const lf=new Set(["image/svg","application/xml","application/xhtml","application/html"]),tf=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function mf(c=""){if(!c)return"json";const a=c.split(";").shift()||"";return tf.test(a)?"json":lf.has(a)||a.startsWith("text/")?"text":"blob"}const vf=new Set([408,409,425,429,500,502,503,504]);function F8(c){const{fetch:a,Headers:r}=c;function e(n){const f=n.error&&n.error.name==="AbortError"||!1;if(n.options.retry!==!1&&!f){let l;typeof n.options.retry=="number"?l=n.options.retry:l=S6(n.options.method)?0:1;const t=n.response&&n.response.status||500;if(l>0&&vf.has(t))return s(n.request,{...n.options,retry:l-1})}const o=nf(n.request,n.error,n.response);throw Error.captureStackTrace&&Error.captureStackTrace(o,s),o}const s=async function(f,o={}){const l={request:f,options:{...c.defaults,...o},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Jn(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=af(l.request,{...l.options.params,...l.options.query})),l.options.body&&S6(l.options.method)&&of(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new r(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await a(l.request,l.options).catch(async m=>(l.error=m,l.options.onRequestError&&await l.options.onRequestError(l),e(l)));const t=(l.options.parseResponse?"json":l.options.responseType)||mf(l.response.headers.get("content-type")||"");if(t==="json"){const m=await l.response.text(),v=l.options.parseResponse||En;l.response._data=v(m)}else t==="stream"?l.response._data=l.response.body:l.response._data=await l.response[t]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),e(l)):l.response},i=function(f,o){return s(f,o).then(l=>l._data)};return i.raw=s,i.native=a,i.create=(n={})=>F8({...c,defaults:{...c.defaults,...n}}),i}const R8=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),zf=R8.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),hf=R8.Headers,Hf=F8({fetch:zf,Headers:hf}),uf=Hf,pf=()=>{var c;return((c=window==null?void 0:window.__NUXT__)==null?void 0:c.config)||{}},E2=pf().app,Vf=()=>E2.baseURL,Mf=()=>E2.buildAssetsDir,df=(...c)=>n2(B8(),Mf(),...c),B8=(...c)=>{const a=E2.cdnURL||E2.baseURL;return c.length?n2(a,...c):a};globalThis.__buildAssetsURL=df,globalThis.__publicAssetsURL=B8;function F3(c,a={},r){for(const e in c){const s=c[e],i=r?`${r}:${e}`:e;typeof s=="object"&&s!==null?F3(s,a,i):typeof s=="function"&&(a[i]=s)}return a}function Cf(c,a){return c.reduce((r,e)=>r.then(()=>e.apply(void 0,a)),Promise.resolve())}function Lf(c,a){return Promise.all(c.map(r=>r.apply(void 0,a)))}function M3(c,a){for(const r of c)r(a)}class gf{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(a,r,e={}){if(!a||typeof r!="function")return()=>{};const s=a;let i;for(;this._deprecatedHooks[a];)i=this._deprecatedHooks[a],a=i.to;if(i&&!e.allowDeprecated){let n=i.message;n||(n=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(n)||(console.warn(n),this._deprecatedMessages.add(n))}return this._hooks[a]=this._hooks[a]||[],this._hooks[a].push(r),()=>{r&&(this.removeHook(a,r),r=void 0)}}hookOnce(a,r){let e,s=(...i)=>(typeof e=="function"&&e(),e=void 0,s=void 0,r(...i));return e=this.hook(a,s),e}removeHook(a,r){if(this._hooks[a]){const e=this._hooks[a].indexOf(r);e!==-1&&this._hooks[a].splice(e,1),this._hooks[a].length===0&&delete this._hooks[a]}}deprecateHook(a,r){this._deprecatedHooks[a]=typeof r=="string"?{to:r}:r;const e=this._hooks[a]||[];this._hooks[a]=void 0;for(const s of e)this.hook(a,s)}deprecateHooks(a){Object.assign(this._deprecatedHooks,a);for(const r in a)this.deprecateHook(r,a[r])}addHooks(a){const r=F3(a),e=Object.keys(r).map(s=>this.hook(s,r[s]));return()=>{for(const s of e.splice(0,e.length))s()}}removeHooks(a){const r=F3(a);for(const e in r)this.removeHook(e,r[e])}callHook(a,...r){return this.callHookWith(Cf,a,...r)}callHookParallel(a,...r){return this.callHookWith(Lf,a,...r)}callHookWith(a,r,...e){const s=this._before||this._after?{name:r,args:e,context:{}}:void 0;this._before&&M3(this._before,s);const i=a(this._hooks[r]||[],e);return i instanceof Promise?i.finally(()=>{this._after&&s&&M3(this._after,s)}):(this._after&&s&&M3(this._after,s),i)}beforeEach(a){return this._before=this._before||[],this._before.push(a),()=>{const r=this._before.indexOf(a);r!==-1&&this._before.splice(r,1)}}afterEach(a){return this._after=this._after||[],this._after.push(a),()=>{const r=this._after.indexOf(a);r!==-1&&this._after.splice(r,1)}}}function E8(){return new gf}function xf(){let c,a=!1;const r=e=>{if(c&&c!==e)throw new Error("Context conflict")};return{use:()=>{if(c===void 0)throw new Error("Context is not available");return c},tryUse:()=>c,set:(e,s)=>{s||r(e),c=e,a=!0},unset:()=>{c=void 0,a=!1},call:(e,s)=>{r(e),c=e;try{return s()}finally{a||(c=void 0)}},async callAsync(e,s){c=e;const i=()=>{c=e},n=()=>c===e?i:void 0;k6.add(n);try{const f=s();return a||(c=void 0),await f}finally{k6.delete(n)}}}}function bf(){const c={};return{get(a){return c[a]||(c[a]=xf()),c[a],c[a]}}}const D2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},w6="__unctx__",Nf=D2[w6]||(D2[w6]=bf()),yf=c=>Nf.get(c),A6="__unctx_async_handlers__",k6=D2[A6]||(D2[A6]=new Set),D8=yf("nuxt-app"),Sf="__nuxt_plugin";function wf(c){let a=0;const r={provide:void 0,globalName:"nuxt",payload:Q1({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!r.isHydrating)return()=>{};a++;let i=!1;return()=>{if(!i&&(i=!0,a--,a===0))return r.isHydrating=!1,r.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...c};r.hooks=E8(),r.hook=r.hooks.hook,r.callHook=r.hooks.callHook,r.provide=(i,n)=>{const f="$"+i;L2(r,f,n),L2(r.vueApp.config.globalProperties,f,n)},L2(r.vueApp,"$nuxt",r),L2(r.vueApp.config.globalProperties,"$nuxt",r),window.addEventListener("nuxt.preloadError",i=>{r.callHook("app:chunkError",{error:i.payload})}),r.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});const e=Q1(r.payload.config),s=new Proxy(e,{get(i,n){return n==="public"?i.public:i[n]??i.public[n]},set(i,n,f){return n==="public"||n==="app"?!1:(i[n]=f,i.public[n]=f,!0)}});return r.provide("config",s),r}async function Af(c,a){if(typeof a!="function")return;const{provide:r}=await F1(c,a,[c])||{};if(r&&typeof r=="object")for(const e in r)c.provide(e,r[e])}async function kf(c,a){for(const r of a)await Af(c,r)}function Pf(c){return c.map(r=>typeof r!="function"?null:r.length>1?e=>r(e,e.provide):r).filter(Boolean)}function o2(c){return c[Sf]=!0,c}function F1(c,a,r){const e=()=>r?a(...r):a();return D8.set(c),e()}function J(){const c=D8.tryUse();if(!c){const a=s2();if(!a)throw new Error("nuxt instance unavailable");return a.appContext.app.$nuxt}return c}function D1(){return J().$config}function L2(c,a,r){Object.defineProperty(c,a,{get:()=>r})}const d3={},Tf=o2(c=>{for(const a in d3)c.vueApp.component(a,d3[a]),c.vueApp.component("Lazy"+a,d3[a])});function Ff(c){return Array.isArray(c)?c:[c]}const O8=["title","script","style","noscript"],Q3=["base","meta","link","style","script","noscript"],Rf=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Bf=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Ef=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function $8(c){let a=9;for(let r=0;r<c.length;)a=Math.imul(a^c.charCodeAt(r++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function O2(c){return $8(`${c.tag}:${c.textContent||c.innerHTML||""}:${Object.entries(c.props).map(([a,r])=>`${a}:${String(r)}`).join(",")}`)}function Df(c){let a=9;for(const r of c)for(let e=0;e<r.length;)a=Math.imul(a^r.charCodeAt(e++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function I8(c,a){const{props:r,tag:e}=c;if(Bf.includes(e))return e;if(e==="link"&&r.rel==="canonical")return"canonical";if(r.charset)return"charset";const s=["id"];e==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof r[i]<"u"){const n=String(r[i]);return a&&!a(n)?!1:`${e}:${i}:${n}`}return!1}const P6=(c,a)=>c==null?a||null:typeof c=="function"?c(a):c,g2=(c,a=!1,r)=>{const{tag:e,$el:s}=c;s&&(Object.entries(e.props).forEach(([i,n])=>{n=String(n);const f=`attr:${i}`;if(i==="class"){if(!n)return;for(const o of n.split(" ")){const l=`${f}:${o}`;r&&r(c,l,()=>s.classList.remove(o)),s.classList.contains(o)||s.classList.add(o)}return}r&&!i.startsWith("data-h-")&&r(c,f,()=>s.removeAttribute(i)),(a||s.getAttribute(i)!==n)&&s.setAttribute(i,n)}),O8.includes(e.tag)&&(e.textContent&&e.textContent!==s.textContent?s.textContent=e.textContent:e.innerHTML&&e.innerHTML!==s.innerHTML&&(s.innerHTML=e.innerHTML)))};let W1=!1;async function U8(c,a={}){var v,H;const r={shouldRender:!0};if(await c.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const e=a.document||c.resolvedOptions.document||window.document,s=(await c.resolveTags()).map(f);if(c.resolvedOptions.experimentalHashHydration&&(W1=W1||c._hash||!1,W1)){const h=Df(s.map(u=>u.tag._h));if(W1===h)return;W1=h}const i=c._popSideEffectQueue();c.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([u,C])=>{i[u]=C})});const n=(h,u,C)=>{u=`${h.renderId}:${u}`,h.entry&&(h.entry._sde[u]=C),delete i[u]};function f(h){const u=c.headEntries().find(p=>p._i===h._e),C={renderId:h._d||O2(h),$el:null,shouldRender:!0,tag:h,entry:u,markSideEffect:(p,z)=>n(C,p,z)};return C}const o=[],l={body:[],head:[]},t=h=>{c._elMap[h.renderId]=h.$el,o.push(h),n(h,"el",()=>{var u;(u=h.$el)==null||u.remove(),delete c._elMap[h.renderId]})};for(const h of s){if(await c.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:u}=h;if(u.tag==="title"){e.title=u.textContent||"",o.push(h);continue}if(u.tag==="htmlAttrs"||u.tag==="bodyAttrs"){h.$el=e[u.tag==="htmlAttrs"?"documentElement":"body"],g2(h,!1,n),o.push(h);continue}if(h.$el=c._elMap[h.renderId],!h.$el&&u.key&&(h.$el=e.querySelector(`${(v=u.tagPosition)!=null&&v.startsWith("body")?"body":"head"} > ${u.tag}[data-h-${u._h}]`)),h.$el){h.tag._d&&g2(h),t(h);continue}l[(H=u.tagPosition)!=null&&H.startsWith("body")?"body":"head"].push(h)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([h,u])=>{var p;if(!u.length)return;const C=(p=e==null?void 0:e[h])==null?void 0:p.children;if(C){for(const z of[...C].reverse()){const V=z.tagName.toLowerCase();if(!Q3.includes(V))continue;const M=z.getAttributeNames().reduce((L,N)=>({...L,[N]:z.getAttribute(N)}),{}),d={tag:V,props:M};z.innerHTML&&(d.innerHTML=z.innerHTML);const g=O2(d);let S=u.findIndex(L=>(L==null?void 0:L.renderId)===g);if(S===-1){const L=I8(d);S=u.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===L)}if(S!==-1){const L=u[S];L.$el=z,g2(L),t(L),delete u[S]}}u.forEach(z=>{const V=z.tag.tagPosition||"head";m[V]=m[V]||e.createDocumentFragment(),z.$el||(z.$el=e.createElement(z.tag.tag),g2(z,!0)),m[V].appendChild(z.$el),t(z)})}}),m.head&&e.head.appendChild(m.head),m.bodyOpen&&e.body.insertBefore(m.bodyOpen,e.body.firstChild),m.bodyClose&&e.body.appendChild(m.bodyClose);for(const h of o)await c.hooks.callHook("dom:renderTag",h);Object.values(i).forEach(h=>h())}let C3=null;async function q8(c,a={}){function r(){return C3=null,U8(c,a)}const e=a.delayFn||(s=>setTimeout(s,10));return C3=C3||new Promise(s=>e(()=>s(r())))}const Of=c=>({hooks:{"entries:updated":function(a){if(typeof(c==null?void 0:c.document)>"u"&&typeof window>"u")return;let r=c==null?void 0:c.delayFn;!r&&typeof requestAnimationFrame<"u"&&(r=requestAnimationFrame),q8(a,{document:(c==null?void 0:c.document)||window.document,delayFn:r})}}});function $f(c){var a;return((a=c==null?void 0:c.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:a.getAttribute("content"))||!1}const T6={critical:2,high:9,low:12,base:-1,title:1,meta:10};function F6(c){if(typeof c.tagPriority=="number")return c.tagPriority;if(c.tag==="meta"){if(c.props.charset)return-2;if(c.props["http-equiv"]==="content-security-policy")return 0}const a=c.tagPriority||c.tag;return a in T6?T6[a]:10}const If=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Uf(){return{hooks:{"tags:resolve":c=>{const a=r=>{var e;return(e=c.tags.find(s=>s._d===r))==null?void 0:e._p};for(const{prefix:r,offset:e}of If)for(const s of c.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(r))){const i=a(s.tagPriority.replace(r,""));typeof i<"u"&&(s._p=i+e)}c.tags.sort((r,e)=>r._p-e._p).sort((r,e)=>F6(r)-F6(e))}}}}const qf=()=>({hooks:{"tags:resolve":c=>{const{tags:a}=c;let r=a.findIndex(s=>s.tag==="titleTemplate");const e=a.findIndex(s=>s.tag==="title");if(e!==-1&&r!==-1){const s=P6(a[r].textContent,a[e].textContent);s!==null?a[e].textContent=s||a[e].textContent:delete a[e]}else if(r!==-1){const s=P6(a[r].textContent);s!==null&&(a[r].textContent=s,a[r].tag="title",r=-1)}r!==-1&&delete a[r],c.tags=a.filter(Boolean)}}}),Gf=()=>({hooks:{"tag:normalise":function({tag:c}){typeof c.props.body<"u"&&(c.tagPosition="bodyClose",delete c.props.body)}}}),G8=typeof window<"u",jf=()=>({hooks:{"tag:normalise":c=>{var i,n;const{tag:a,entry:r,resolvedOptions:e}=c;e.experimentalHashHydration===!0&&(a._h=O2(a));const s=typeof a.props._dynamic<"u";!Q3.includes(a.tag)||!a.key||G8||(n=(i=W8())==null?void 0:i.resolvedOptions)!=null&&n.document||(r._m==="server"||s)&&(a._h=a._h||O2(a),a.props[`data-h-${a._h}`]="")},"tags:resolve":c=>{c.tags=c.tags.map(a=>(delete a.props._dynamic,a))}}}),R6=["script","link","bodyAttrs"],Wf=()=>{const c=(a,r)=>{const e={},s={};Object.entries(r.props).forEach(([n,f])=>{n.startsWith("on")&&typeof f=="function"?s[n]=f:e[n]=f});let i;return a==="dom"&&r.tag==="script"&&typeof e.src=="string"&&typeof s.onload<"u"&&(i=e.src,delete e.src),{props:e,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(a){a.tags=a.tags.map(r=>(!R6.includes(r.tag)||!Object.entries(r.props).find(([e,s])=>e.startsWith("on")&&typeof s=="function")||(r.props=c("ssr",r).props),r))},"dom:beforeRenderTag":function(a){if(!R6.includes(a.tag.tag)||!Object.entries(a.tag.props).find(([i,n])=>i.startsWith("on")&&typeof n=="function"))return;const{props:r,eventHandlers:e,delayedSrc:s}=c("dom",a.tag);Object.keys(e).length&&(a.tag.props=r,a.tag._eventHandlers=e,a.tag._delayedSrc=s)},"dom:renderTag":function(a){const r=a.$el;if(!a.tag._eventHandlers||!r)return;const e=a.tag.tag==="bodyAttrs"&&typeof window<"u"?window:r;Object.entries(a.tag._eventHandlers).forEach(([s,i])=>{const n=`${a.tag._d||a.tag._p}:${s}`,f=s.slice(2).toLowerCase(),o=`data-h-${f}`;if(a.markSideEffect(n,()=>{}),r.hasAttribute(o))return;const l=i;r.setAttribute(o,""),e.addEventListener(f,l),a.entry&&(a.entry._sde[n]=()=>{e.removeEventListener(f,l),r.removeAttribute(o)})}),a.tag._delayedSrc&&r.setAttribute("src",a.tag._delayedSrc)}}}},Zf=["templateParams","htmlAttrs","bodyAttrs"],Kf=c=>{c=c||{};const a=c.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:r}){a.forEach(s=>{r.props[s]&&(r.key=r.props[s],delete r.props[s])});const e=r.key?`${r.tag}:${r.key}`:I8(r);e&&(r._d=e)},"tags:resolve":function(r){const e={};r.tags.forEach(i=>{const n=i._d||i._p,f=e[n];if(f){let o=i==null?void 0:i.tagDuplicateStrategy;if(!o&&Zf.includes(i.tag)&&(o="merge"),o==="merge"){const t=f.props;["class","style"].forEach(m=>{i.props[m]&&t[m]&&(m==="style"&&!t[m].endsWith(";")&&(t[m]+=";"),i.props[m]=`${t[m]} ${i.props[m]}`)}),e[n].props={...t,...i.props};return}else if(i._e===f._e){f._duped=f._duped||[],i._d=`${f._d}:${f._duped.length+1}`,f._duped.push(i);return}const l=Object.keys(i.props).length;if((l===0||l===1&&typeof i.props["data-h-key"]<"u")&&!i.innerHTML&&!i.textContent){delete e[n];return}}e[n]=i});const s=[];Object.values(e).forEach(i=>{const n=i._duped;delete i._duped,s.push(i),n&&s.push(...n)}),r.tags=s}}}};function L3(c,a){const r=(s,i)=>{let n;return i==="pageTitle"||i==="s"?n=a.pageTitle:i.includes(".")?n=i.split(".").reduce((f,o)=>f[o]||"",a):n=a[i],n||""};let e=c.replace(/%(\w+\.+\w+)/g,r).replace(/%(\w+)/g,r).trim();return a.separator&&(e.endsWith(a.separator)&&(e=e.slice(0,-a.separator.length).trim()),e.startsWith(a.separator)&&(e=e.slice(a.separator.length).trim()),e=e.replace(new RegExp(`\\${a.separator}\\s*\\${a.separator}`,"g"),a.separator)),e}function _f(){return{hooks:{"tags:resolve":c=>{var i;const{tags:a}=c,r=(i=a.find(n=>n.tag==="title"))==null?void 0:i.textContent,e=a.findIndex(n=>n.tag==="templateParams"),s=e!==-1?a[e].textContent:{};s.pageTitle=s.pageTitle||r||"";for(const n of a)if(["titleTemplate","title"].includes(n.tag)&&typeof n.textContent=="string")n.textContent=L3(n.textContent,s);else if(n.tag==="meta"&&typeof n.props.content=="string")n.props.content=L3(n.props.content,s);else if(n.tag==="script"&&["application/json","application/ld+json"].includes(n.props.type)&&typeof n.innerHTML=="string")try{n.innerHTML=JSON.stringify(JSON.parse(n.innerHTML),(f,o)=>typeof o=="string"?L3(o,s):o)}catch{}c.tags=a.filter(n=>n.tag!=="templateParams")}}}}let j8;const Yf=c=>j8=c,W8=()=>j8;async function Xf(c,a){const r={tag:c,props:{}};return["title","titleTemplate","templateParams"].includes(c)?(r.textContent=a instanceof Promise?await a:a,r):typeof a=="string"?["script","noscript","style"].includes(c)?(c==="script"&&(/^(https?:)?\/\//.test(a)||a.startsWith("/"))?r.props.src=a:(r.innerHTML=a,r.key=$8(a)),r):!1:(r.props=await Jf(c,{...a}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(e=>Ef.includes(e)).forEach(e=>{(!["innerHTML","textContent"].includes(e)||O8.includes(r.tag))&&(r[e]=r.props[e]),delete r.props[e]}),["innerHTML","textContent"].forEach(e=>{if(r.tag==="script"&&typeof r[e]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[e]=JSON.parse(r[e])}catch{r[e]=""}typeof r[e]=="object"&&(r[e]=JSON.stringify(r[e]))}),r.props.class&&(r.props.class=Qf(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(e=>({...r,props:{...r.props,content:e}})):r)}function Qf(c){return typeof c=="object"&&!Array.isArray(c)&&(c=Object.keys(c).filter(a=>c[a])),(Array.isArray(c)?c.join(" "):c).split(" ").filter(a=>a.trim()).filter(Boolean).join(" ")}async function Jf(c,a){for(const r of Object.keys(a)){const e=r.startsWith("data-");a[r]instanceof Promise&&(a[r]=await a[r]),String(a[r])==="true"?a[r]=e?"true":"":String(a[r])==="false"&&(e?a[r]="false":delete a[r])}return a}const co=10;async function ao(c){const a=[];return Object.entries(c.resolvedInput).filter(([r,e])=>typeof e<"u"&&Rf.includes(r)).forEach(([r,e])=>{const s=Ff(e);a.push(...s.map(i=>Xf(r,i)).flat())}),(await Promise.all(a)).flat().filter(Boolean).map((r,e)=>(r._e=c._i,r._p=(c._i<<co)+e,r))}const eo=()=>[Kf(),Uf(),_f(),qf(),jf(),Wf(),Gf()],ro=(c={})=>[Of({document:c==null?void 0:c.document,delayFn:c==null?void 0:c.domDelayFn})];function io(c={}){const a=so({...c,plugins:[...ro(c),...(c==null?void 0:c.plugins)||[]]});return c.experimentalHashHydration&&a.resolvedOptions.document&&(a._hash=$f(a.resolvedOptions.document)),Yf(a),a}function so(c={}){let a=[],r={},e=0;const s=E8();c!=null&&c.hooks&&s.addHooks(c.hooks),c.plugins=[...eo(),...(c==null?void 0:c.plugins)||[]],c.plugins.forEach(f=>f.hooks&&s.addHooks(f.hooks)),c.document=c.document||(G8?document:void 0);const i=()=>s.callHook("entries:updated",n),n={resolvedOptions:c,headEntries(){return a},get hooks(){return s},use(f){f.hooks&&s.addHooks(f.hooks)},push(f,o){const l={_i:e++,input:f,_sde:{}};return o!=null&&o.mode&&(l._m=o==null?void 0:o.mode),o!=null&&o.transform&&(l._t=o==null?void 0:o.transform),a.push(l),i(),{dispose(){a=a.filter(t=>t._i!==l._i?!0:(r={...r,...t._sde||{}},t._sde={},i(),!1))},patch(t){a=a.map(m=>(m._i===l._i&&(l.input=m.input=t,i()),m))}}},async resolveTags(){const f={tags:[],entries:[...a]};await s.callHook("entries:resolve",f);for(const o of f.entries){const l=o._t||(t=>t);o.resolvedInput=l(o.resolvedInput||o.input);for(const t of await ao(o)){const m={tag:t,entry:o,resolvedOptions:n.resolvedOptions};await s.callHook("tag:normalise",m),f.tags.push(m.tag)}}return await s.callHook("tags:resolve",f),f.tags},_popSideEffectQueue(){const f={...r};return r={},f},_elMap:{}};return n.hooks.callHook("init",n),n}function no(c){return typeof c=="function"?c():j(c)}function $2(c,a=""){if(c instanceof Promise)return c;const r=no(c);if(!c||!r)return r;if(Array.isArray(r))return r.map(e=>$2(e,a));if(typeof r=="object"){let e=!1;const s=Object.fromEntries(Object.entries(r).map(([i,n])=>i==="titleTemplate"||i.startsWith("on")?[i,j(n)]:((typeof n=="function"||u8(n))&&(e=!0),[i,$2(n,i)])));return e&&Q3.includes(String(a))&&(s._dynamic=!0),s}return r}const fo=p8.startsWith("3"),oo=typeof window<"u",Z8="usehead";function J3(){return s2()&&h8(Z8)||W8()}function lo(c){return{install(r){fo&&(r.config.globalProperties.$unhead=c,r.config.globalProperties.$head=c,r.provide(Z8,c))}}.install}function to(c={}){const a=io({...c,domDelayFn:r=>setTimeout(()=>H8(()=>r()),10),plugins:[mo(),...(c==null?void 0:c.plugins)||[]]});return a.install=lo(a),a}const mo=()=>({hooks:{"entries:resolve":function(c){for(const a of c.entries)a.resolvedInput=$2(a.input)}}});function vo(c,a={}){const r=J3(),e=K1(!1),s=K1({});hn(()=>{s.value=e.value?{}:$2(c)});const i=r.push(s.value,a);return X3(s,f=>{i.patch(f)}),s2()&&(Hn(()=>{i.dispose()}),un(()=>{e.value=!0}),pn(()=>{e.value=!1})),i}function zo(c,a={}){return J3().push(c,a)}function K8(c,a={}){var e;const r=J3();if(r){const s=oo||!!((e=r.resolvedOptions)!=null&&e.document);return a.mode==="server"&&s||a.mode==="client"&&!s?void 0:s?vo(c,a):zo(c,a)}}function ho(c,a){const r=to(a||{}),e={unhead:r,install(s){p8.startsWith("3")&&(s.config.globalProperties.$head=r,s.provide("usehead",r))},use(s){r.use(s)},resolveTags(){return r.resolveTags()},headEntries(){return r.headEntries()},headTags(){return r.resolveTags()},push(s,i){return r.push(s,i)},addEntry(s,i){return r.push(s,i)},addHeadObjs(s,i){return r.push(s,i)},addReactiveEntry(s,i){const n=K8(s,i);return typeof n<"u"?n.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?U8(r,{document:s}):q8(r,{delayFn:n=>setTimeout(()=>n(),50),document:s})},internalHooks:r.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return r.addHeadObjs=e.addHeadObjs,r.updateDOM=e.updateDOM,r.hooks.hook("dom:beforeRender",s=>{for(const i of e.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),c&&e.addHeadObjs(c),e}const Ho={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[{src:"https://www.youtube.com/iframe_api",id:"youtube-iframe-js-api-script"}],noscript:[]},uo="__nuxt",po=o2(c=>{const a=ho();a.push(Ho),c.vueApp.use(a);{let r=!0;const e=()=>{r=!1,a.internalHooks.callHook("entries:updated",a.unhead)};a.internalHooks.hook("dom:beforeRender",s=>{s.shouldRender=!r}),c.hooks.hook("page:start",()=>{r=!0}),c.hooks.hook("page:finish",e),c.hooks.hook("app:mounted",e)}c._useHead=K8});function g3(c){return c!==null&&typeof c=="object"}function R3(c,a,r=".",e){if(!g3(a))return R3(c,{},r,e);const s=Object.assign({},a);for(const i in c){if(i==="__proto__"||i==="constructor")continue;const n=c[i];n!=null&&(e&&e(s,i,n,r)||(Array.isArray(n)&&Array.isArray(s[i])?s[i]=[...n,...s[i]]:g3(n)&&g3(s[i])?s[i]=R3(n,s[i],(r?`${r}.`:"")+i.toString(),e):s[i]=n))}return s}function Vo(c){return(...a)=>a.reduce((r,e)=>R3(r,e,"",c),{})}const Mo=Vo((c,a,r)=>{if(typeof c[a]<"u"&&typeof r=="function")return c[a]=r(c[a]),!0});class B3 extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const a={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(a.statusMessage=this.statusMessage),this.data!==void 0&&(a.data=this.data),a}}B3.__h3_error__=!0;function Co(c){if(typeof c=="string")return new B3(c);if(Lo(c))return c;const a=new B3(c.message??c.statusMessage,c.cause?{cause:c.cause}:void 0);if("stack"in c)try{Object.defineProperty(a,"stack",{get(){return c.stack}})}catch{try{a.stack=c.stack}catch{}}return c.data&&(a.data=c.data),c.statusCode?a.statusCode=c.statusCode:c.status&&(a.statusCode=c.status),c.statusMessage?a.statusMessage=c.statusMessage:c.statusText&&(a.statusMessage=c.statusText),c.fatal!==void 0&&(a.fatal=c.fatal),c.unhandled!==void 0&&(a.unhandled=c.unhandled),a}function Lo(c){var a;return((a=c==null?void 0:c.constructor)==null?void 0:a.__h3_error__)===!0}const c4=()=>V8(J().payload,"error"),go=c=>{const a=E3(c);try{J().callHook("app:error",a);const e=c4();e.value=e.value||a}catch{throw a}return a},xo=async(c={})=>{const a=J(),r=c4();a.callHook("app:error:cleared",c),c.redirect&&await a.$router.replace(c.redirect),r.value=null},bo=c=>!!(c&&typeof c=="object"&&"__nuxt_error"in c),E3=c=>{const a=Co(c);return a.__nuxt_error=!0,a};function No(...c){const a=typeof c[c.length-1]=="string"?c.pop():void 0;typeof c[0]!="string"&&c.unshift(a);const[r,e]=c;if(!r||typeof r!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+r);if(e!==void 0&&typeof e!="function")throw new Error("[nuxt] [useState] init must be a function: "+e);const s="$s"+r,i=J(),n=V8(i.payload.state,s);if(n.value===void 0&&e){const f=e();if(u8(f))return i.payload.state[s]=f,f;n.value=f}return n}function yo(c=J()){var a;return(a=c.ssrContext)==null?void 0:a.event}const _8=()=>{var c;return(c=J())==null?void 0:c.$router},So=()=>s2()?h8("_route",J()._route):J()._route,wo=()=>{try{if(J()._processingMiddleware)return!0}catch{return!0}return!1},Ao=(c,a)=>{c||(c="/");const r=typeof c=="string"?c:c.path||"/",e=j2(r,!0);if(e&&!(a!=null&&a.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(e&&f2(r).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!e&&wo())return c;const s=_8();return e?(a!=null&&a.replace?location.replace(r):location.href=r,Promise.resolve()):a!=null&&a.replace?s.replace(c):s.push(c)},ko=[];function x3(c){typeof c=="object"&&(c=T8({pathname:c.path||"",search:w8(c.query||{}),hash:c.hash||""}));const a=f2(c.toString());return{path:a.pathname,fullPath:c,query:S8(a.search),hash:a.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c}}const Po=o2(c=>{const a=cf(window.location.pathname,D1().app.baseURL)+window.location.search+window.location.hash,r=[],e={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(t,m)=>(e[t].push(m),()=>e[t].splice(e[t].indexOf(m),1)),i=D1().app.baseURL,n=Q1(x3(a));async function f(t,m){try{const v=x3(t);for(const H of e["navigate:before"]){const h=await H(v,n);if(h===!1||h instanceof Error)return;if(h)return f(h,!0)}for(const H of e["resolve:before"])await H(v,n);Object.assign(n,v),window.history[m?"replaceState":"pushState"]({},"",n2(i,v.fullPath)),c.isHydrating||await F1(c,xo);for(const H of e["navigate:after"])await H(v,n)}catch(v){for(const H of e.error)await H(v)}}const o={currentRoute:n,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:t=>f(t,!1),replace:t=>f(t,!0),back:()=>window.history.go(-1),go:t=>window.history.go(t),forward:()=>window.history.go(1),beforeResolve:t=>s("resolve:before",t),beforeEach:t=>s("navigate:before",t),afterEach:t=>s("navigate:after",t),onError:t=>s("error",t),resolve:x3,addRoute:(t,m)=>{r.push(m)},getRoutes:()=>r,hasRoute:t=>r.some(m=>m.name===t),removeRoute:t=>{const m=r.findIndex(v=>v.name===t);m!==-1&&r.splice(m,1)}};c.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(t,{slots:m})=>{const v=()=>f(t.to,t.replace);return()=>{var h;const H=o.resolve(t.to);return t.custom?(h=m.default)==null?void 0:h.call(m,{href:t.to,navigate:v,route:H}):M8("a",{href:t.to,onClick:u=>(u.preventDefault(),v())},m)}}}),window.addEventListener("popstate",t=>{const m=t.target.location;o.replace(m.href.replace(m.origin,""))}),c._route=n,c._middleware=c._middleware||{global:[],named:{}};const l=No("_layout");return c.hooks.hookOnce("app:created",async()=>{if(o.beforeEach(async(t,m)=>{t.meta=Q1(t.meta||{}),c.isHydrating&&l.value&&!Vn(t.meta.layout)&&(t.meta.layout=l.value),c._processingMiddleware=!0;const v=new Set([...ko,...c._middleware.global]);for(const H of v){const h=await F1(c,H,[t,m]);if(h||h===!1)return h}}),o.afterEach(()=>{delete c._processingMiddleware}),await o.replace(a),!rf(n.fullPath,a)){const t=await F1(c,yo),m={redirectCode:t.node.res.statusCode!==200&&t.node.res.statusCode||302};await F1(c,Ao,[n.fullPath,m])}}),{provide:{route:n,router:o}}}),To="modulepreload",Fo=function(c,a){return c.startsWith(".")?new URL(c,a).href:c},B6={},Y8=function(a,r,e){if(!r||r.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Fo(i,e),i in B6)return;B6[i]=!0;const n=i.endsWith(".css"),f=n?'[rel="stylesheet"]':"";if(!!e)for(let t=s.length-1;t>=0;t--){const m=s[t];if(m.href===i&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${f}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":To,n||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),n)return new Promise((t,m)=>{l.addEventListener("load",t),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a())};function E6(c,a={}){const r=Ro(c,a),e=J(),s=e._payloadCache=e._payloadCache||{};return s[c]||(s[c]=Bo(r).then(i=>i||(delete s[c],null))),s[c]}function Ro(c,a={}){const r=new URL(c,"http://localhost");if(r.search)throw new Error("Payload URL cannot contain search params: "+c);if(r.host!=="localhost"||j2(r.pathname,!0))throw new Error("Payload URL must not include hostname: "+c);const e=a.hash||(a.fresh?Date.now():"");return n2(D1().app.baseURL,r.pathname,e?`_payload.${e}.js`:"_payload.js")}async function Bo(c){const a=await Y8(()=>import(c),[],import.meta.url).catch(r=>{console.warn("[nuxt] Cannot load payload ",c,r)});return(a==null?void 0:a.default)||null}function Eo(){return!!J().payload.prerenderedAt}const Do=o2(c=>{Eo()&&(c.hooks.hook("link:prefetch",a=>{if(!f2(a).protocol)return E6(a)}),_8().beforeResolve(async(a,r)=>{if(a.path===r.path)return;const e=await E6(a.path);e&&Object.assign(c.static.data,e.data)}))}),Oo=()=>null;function $o(...c){var v;const a=typeof c[c.length-1]=="string"?c.pop():void 0;typeof c[0]!="string"&&c.unshift(a);let[r,e,s={}]=c;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??Oo,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const i=J(),n=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],f=()=>n()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:K1(n()??((v=s.default)==null?void 0:v.call(s))??null),pending:K1(!f()),error:K1(i.payload._errors[r]?E3(i.payload._errors[r]):null)});const o={...i._asyncData[r]};o.refresh=o.execute=(H={})=>{if(i._asyncDataPromises[r]){if(H.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if(H._initial&&f())return n();o.pending.value=!0;const h=new Promise((u,C)=>{try{u(e(i))}catch(p){C(p)}}).then(u=>{if(h.cancelled)return i._asyncDataPromises[r];s.transform&&(u=s.transform(u)),s.pick&&(u=Io(u,s.pick)),o.data.value=u,o.error.value=null}).catch(u=>{var C;if(h.cancelled)return i._asyncDataPromises[r];o.error.value=u,o.data.value=j(((C=s.default)==null?void 0:C.call(s))??null)}).finally(()=>{h.cancelled||(o.pending.value=!1,i.payload.data[r]=o.data.value,o.error.value&&(i.payload._errors[r]=E3(o.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=h,i._asyncDataPromises[r]};const l=()=>o.refresh({_initial:!0}),t=s.server!==!1&&i.payload.serverRendered;{const H=s2();if(H&&!H._nuxtOnBeforeMountCbs){H._nuxtOnBeforeMountCbs=[];const u=H._nuxtOnBeforeMountCbs;H&&(Mn(()=>{u.forEach(C=>{C()}),u.splice(0,u.length)}),b6(()=>u.splice(0,u.length)))}t&&i.isHydrating&&f()?o.pending.value=!1:H&&(i.payload.serverRendered&&i.isHydrating||s.lazy)&&s.immediate?H._nuxtOnBeforeMountCbs.push(l):s.immediate&&l(),s.watch&&X3(s.watch,()=>o.refresh());const h=i.hook("app:data:refresh",u=>{if(!u||u.includes(r))return o.refresh()});H&&b6(h)}const m=Promise.resolve(i._asyncDataPromises[r]).then(()=>o);return Object.assign(m,o),m}function Io(c,a){const r={};for(const e of a)r[e]=c[e];return r}const Uo={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function qo(c,a={}){a={...Uo,...a};const r=X8(a);return r.dispatch(c),r.toString()}function X8(c){const a=[];let r=[];const e=s=>{a.push(s)};return{toString(){return a.join("")},getContext(){return r},dispatch(s){return c.replacer&&(s=c.replacer(s)),this["_"+(s===null?"null":typeof s)](s)},_object(s){const i=/\[object (.*)]/i,n=Object.prototype.toString.call(s),f=i.exec(n),o=f?f[1].toLowerCase():"unknown:["+n.toLowerCase()+"]";let l=null;if((l=r.indexOf(s))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(r.push(s),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return e("buffer:"),e(s.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](s);else{if(c.ignoreUnknown)return e("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let t=Object.keys(s);c.unorderedObjects&&(t=t.sort()),c.respectType!==!1&&!D6(s)&&t.splice(0,0,"prototype","__proto__","letructor"),c.excludeKeys&&(t=t.filter(function(m){return!c.excludeKeys(m)})),e("object:"+t.length+":");for(const m of t)this.dispatch(m),e(":"),c.excludeValues||this.dispatch(s[m]),e(",")}},_array(s,i){if(i=typeof i<"u"?i:c.unorderedArrays!==!1,e("array:"+s.length+":"),!i||s.length<=1){for(const o of s)this.dispatch(o);return}const n=[],f=s.map(o=>{const l=X8(c);return l.dispatch(o),n.push(l.getContext()),l.toString()});return r=[...r,...n],f.sort(),this._array(f,!1)},_date(s){return e("date:"+s.toJSON())},_symbol(s){return e("symbol:"+s.toString())},_error(s){return e("error:"+s.toString())},_boolean(s){return e("bool:"+s.toString())},_string(s){e("string:"+s.length+":"),e(s.toString())},_function(s){e("fn:"),D6(s)?this.dispatch("[native]"):this.dispatch(s.toString()),c.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),c.respectFunctionProperties&&this._object(s)},_number(s){return e("number:"+s.toString())},_xml(s){return e("xml:"+s.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(s){return e("regex:"+s.toString())},_uint8array(s){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},_uint8clampedarray(s){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},_int8array(s){return e("int8array:"),this.dispatch(Array.prototype.slice.call(s))},_uint16array(s){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},_int16array(s){return e("int16array:"),this.dispatch(Array.prototype.slice.call(s))},_uint32array(s){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},_int32array(s){return e("int32array:"),this.dispatch(Array.prototype.slice.call(s))},_float32array(s){return e("float32array:"),this.dispatch(Array.prototype.slice.call(s))},_float64array(s){return e("float64array:"),this.dispatch(Array.prototype.slice.call(s))},_arraybuffer(s){return e("arraybuffer:"),this.dispatch(new Uint8Array(s))},_url(s){return e("url:"+s.toString())},_map(s){e("map:");const i=[...s];return this._array(i,c.unorderedSets!==!1)},_set(s){e("set:");const i=[...s];return this._array(i,c.unorderedSets!==!1)},_file(s){return e("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},_blob(){if(c.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(s){return e("bigint:"+s.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function D6(c){return typeof c!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(c))!=null}class O1{constructor(a,r){a=this.words=a||[],this.sigBytes=r!==void 0?r:a.length*4}toString(a){return(a||Go).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new O1([...this.words])}}const Go={stringify(c){const a=[];for(let r=0;r<c.sigBytes;r++){const e=c.words[r>>>2]>>>24-r%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},jo={stringify(c){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<c.sigBytes;e+=3){const s=c.words[e>>>2]>>>24-e%4*8&255,i=c.words[e+1>>>2]>>>24-(e+1)%4*8&255,n=c.words[e+2>>>2]>>>24-(e+2)%4*8&255,f=s<<16|i<<8|n;for(let o=0;o<4&&e*8+o*6<c.sigBytes*8;o++)r.push(a.charAt(f>>>6*(3-o)&63))}return r.join("")}},Wo={parse(c){const a=c.length,r=[];for(let e=0;e<a;e++)r[e>>>2]|=(c.charCodeAt(e)&255)<<24-e%4*8;return new O1(r,a)}},Zo={parse(c){return Wo.parse(unescape(encodeURIComponent(c)))}};class Ko{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new O1,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=Zo.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const s=e*this.blockSize,i=Math.min(s*4,this._data.sigBytes);if(s){for(let n=0;n<s;n+=this.blockSize)this._doProcessBlock(this._data.words,n);r=this._data.words.splice(0,s),this._data.sigBytes-=i}return new O1(r,i)}}class _o extends Ko{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const Yo=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Xo=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x1=[];class Qo extends _o{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new O1([...Yo])}_doProcessBlock(a,r){const e=this._hash.words;let s=e[0],i=e[1],n=e[2],f=e[3],o=e[4],l=e[5],t=e[6],m=e[7];for(let v=0;v<64;v++){if(v<16)x1[v]=a[r+v]|0;else{const V=x1[v-15],M=(V<<25|V>>>7)^(V<<14|V>>>18)^V>>>3,d=x1[v-2],g=(d<<15|d>>>17)^(d<<13|d>>>19)^d>>>10;x1[v]=M+x1[v-7]+g+x1[v-16]}const H=o&l^~o&t,h=s&i^s&n^i&n,u=(s<<30|s>>>2)^(s<<19|s>>>13)^(s<<10|s>>>22),C=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),p=m+C+H+Xo[v]+x1[v],z=u+h;m=t,t=l,l=o,o=f+p|0,f=n,n=i,i=s,s=p+z|0}e[0]=e[0]+s|0,e[1]=e[1]+i|0,e[2]=e[2]+n|0,e[3]=e[3]+f|0,e[4]=e[4]+o|0,e[5]=e[5]+l|0,e[6]=e[6]+t|0,e[7]=e[7]+m|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Jo(c){return new Qo().finalize(c).toString(jo)}function cl(c,a={}){const r=typeof c=="string"?c:qo(c,a);return Jo(r).slice(0,10)}function f1(c,a,r){const[e={},s]=typeof a=="string"?[{},a]:[a,r],i=e.key||cl([s,j(e.baseURL),typeof c=="string"?c:"",j(e.params||e.query)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!c)throw new Error("[nuxt] [useFetch] request is missing.");const n=i===s?"$f"+i:i,f=b1(()=>{let M=c;return typeof M=="function"&&(M=M()),j(M)}),{server:o,lazy:l,default:t,transform:m,pick:v,watch:H,immediate:h,...u}=e,C=Q1({...u,cache:typeof e.cache=="boolean"?void 0:e.cache}),p={server:o,lazy:l,default:t,transform:m,pick:v,immediate:h,watch:[C,f,...H||[]]};let z;return $o(n,()=>{var d;return(d=z==null?void 0:z.abort)==null||d.call(z),z=typeof AbortController<"u"?new AbortController:{},typeof f.value=="string"&&f.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(f.value,{signal:z.signal,...C})},p)}const al={};Mo(al);function O6(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),r.push.apply(r,e)}return r}function b(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?O6(Object(r),!0).forEach(function(e){W(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):O6(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function I2(c){return I2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},I2(c)}function el(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function $6(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function rl(c,a,r){return a&&$6(c.prototype,a),r&&$6(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function W(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function a4(c,a){return sl(c)||fl(c,a)||Q8(c,a)||ll()}function l2(c){return il(c)||nl(c)||Q8(c)||ol()}function il(c){if(Array.isArray(c))return D3(c)}function sl(c){if(Array.isArray(c))return c}function nl(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function fl(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],s=!0,i=!1,n,f;try{for(r=r.call(c);!(s=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));s=!0);}catch(o){i=!0,f=o}finally{try{!s&&r.return!=null&&r.return()}finally{if(i)throw f}}return e}}function Q8(c,a){if(c){if(typeof c=="string")return D3(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D3(c,a)}}function D3(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function ol(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ll(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I6=function(){},e4={},J8={},c0=null,a0={mark:I6,measure:I6};try{typeof window<"u"&&(e4=window),typeof document<"u"&&(J8=document),typeof MutationObserver<"u"&&(c0=MutationObserver),typeof performance<"u"&&(a0=performance)}catch{}var tl=e4.navigator||{},U6=tl.userAgent,q6=U6===void 0?"":U6,d1=e4,$=J8,G6=c0,x2=a0;d1.document;var v1=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",e0=~q6.indexOf("MSIE")||~q6.indexOf("Trident/"),b2,N2,y2,S2,w2,l1="___FONT_AWESOME___",O3=16,r0="fa",i0="svg-inline--fa",S1="data-fa-i2svg",$3="data-fa-pseudo-element",ml="data-fa-pseudo-element-pending",r4="data-prefix",i4="data-icon",j6="fontawesome-i2svg",vl="async",zl=["HTML","HEAD","STYLE","SCRIPT"],s0=function(){try{return!0}catch{return!1}}(),O="classic",I="sharp",s4=[O,I];function t2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[O]}})}var c2=t2((b2={},W(b2,O,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),W(b2,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),b2)),a2=t2((N2={},W(N2,O,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),W(N2,I,{solid:"fass",regular:"fasr"}),N2)),e2=t2((y2={},W(y2,O,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),W(y2,I,{fass:"fa-solid",fasr:"fa-regular"}),y2)),hl=t2((S2={},W(S2,O,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),W(S2,I,{"fa-solid":"fass","fa-regular":"fasr"}),S2)),Hl=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,n0="fa-layers-text",ul=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pl=t2((w2={},W(w2,O,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),W(w2,I,{900:"fass",400:"fasr"}),w2)),f0=[1,2,3,4,5,6,7,8,9,10],Vl=f0.concat([11,12,13,14,15,16,17,18,19,20]),Ml=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r2=new Set;Object.keys(a2[O]).map(r2.add.bind(r2));Object.keys(a2[I]).map(r2.add.bind(r2));var dl=[].concat(s4,l2(r2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N1.GROUP,N1.SWAP_OPACITY,N1.PRIMARY,N1.SECONDARY]).concat(f0.map(function(c){return"".concat(c,"x")})).concat(Vl.map(function(c){return"w-".concat(c)})),Y1=d1.FontAwesomeConfig||{};function Cl(c){var a=$.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Ll(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if($&&typeof $.querySelector=="function"){var gl=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gl.forEach(function(c){var a=a4(c,2),r=a[0],e=a[1],s=Ll(Cl(r));s!=null&&(Y1[e]=s)})}var o0={styleDefault:"solid",familyDefault:"classic",cssPrefix:r0,replacementClass:i0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y1.familyPrefix&&(Y1.cssPrefix=Y1.familyPrefix);var $1=b(b({},o0),Y1);$1.autoReplaceSvg||($1.observeMutations=!1);var y={};Object.keys(o0).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(r){$1[c]=r,X1.forEach(function(e){return e(y)})},get:function(){return $1[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){$1.cssPrefix=a,X1.forEach(function(r){return r(y)})},get:function(){return $1.cssPrefix}});d1.FontAwesomeConfig=y;var X1=[];function xl(c){return X1.push(c),function(){X1.splice(X1.indexOf(c),1)}}var V1=O3,i1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function bl(c){if(!(!c||!v1)){var a=$.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=$.head.childNodes,e=null,s=r.length-1;s>-1;s--){var i=r[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return $.head.insertBefore(a,e),c}}var Nl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function i2(){for(var c=12,a="";c-- >0;)a+=Nl[Math.random()*62|0];return a}function I1(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function n4(c){return c.classList?I1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function l0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yl(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(l0(c[r]),'" ')},"").trim()}function W2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function f4(c){return c.size!==i1.size||c.x!==i1.x||c.y!==i1.y||c.rotate!==i1.rotate||c.flipX||c.flipY}function Sl(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(i," ").concat(n," ").concat(f)},l={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:o,path:l}}function wl(c){var a=c.transform,r=c.width,e=r===void 0?O3:r,s=c.height,i=s===void 0?O3:s,n=c.startCentered,f=n===void 0?!1:n,o="";return f&&e0?o+="translate(".concat(a.x/V1-e/2,"em, ").concat(a.y/V1-i/2,"em) "):f?o+="translate(calc(-50% + ".concat(a.x/V1,"em), calc(-50% + ").concat(a.y/V1,"em)) "):o+="translate(".concat(a.x/V1,"em, ").concat(a.y/V1,"em) "),o+="scale(".concat(a.size/V1*(a.flipX?-1:1),", ").concat(a.size/V1*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Al=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function t0(){var c=r0,a=i0,r=y.cssPrefix,e=y.replacementClass,s=Al;if(r!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(f,".".concat(e))}return s}var W6=!1;function b3(){y.autoAddCss&&!W6&&(bl(t0()),W6=!0)}var kl={mixout:function(){return{dom:{css:t0,insertCss:b3}}},hooks:function(){return{beforeDOMElementCreation:function(){b3()},beforeI2svg:function(){b3()}}}},t1=d1||{};t1[l1]||(t1[l1]={});t1[l1].styles||(t1[l1].styles={});t1[l1].hooks||(t1[l1].hooks={});t1[l1].shims||(t1[l1].shims=[]);var a1=t1[l1],m0=[],Pl=function c(){$.removeEventListener("DOMContentLoaded",c),U2=1,m0.map(function(a){return a()})},U2=!1;v1&&(U2=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),U2||$.addEventListener("DOMContentLoaded",Pl));function Tl(c){v1&&(U2?setTimeout(c,0):m0.push(c))}function m2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?l0(c):"<".concat(a," ").concat(yl(e),">").concat(i.map(m2).join(""),"</").concat(a,">")}function Z6(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var Fl=function(a,r){return function(e,s,i,n){return a.call(r,e,s,i,n)}},N3=function(a,r,e,s){var i=Object.keys(a),n=i.length,f=s!==void 0?Fl(r,s):r,o,l,t;for(e===void 0?(o=1,t=a[i[0]]):(o=0,t=e);o<n;o++)l=i[o],t=f(t,a[l],l,a);return t};function Rl(c){for(var a=[],r=0,e=c.length;r<e;){var s=c.charCodeAt(r++);if(s>=55296&&s<=56319&&r<e){var i=c.charCodeAt(r++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),r--)}else a.push(s)}return a}function I3(c){var a=Rl(c);return a.length===1?a[0].toString(16):null}function Bl(c,a){var r=c.length,e=c.charCodeAt(a),s;return e>=55296&&e<=56319&&r>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function K6(c){return Object.keys(c).reduce(function(a,r){var e=c[r],s=!!e.icon;return s?a[e.iconName]=e.icon:a[r]=e,a},{})}function U3(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,s=e===void 0?!1:e,i=K6(a);typeof a1.hooks.addPack=="function"&&!s?a1.hooks.addPack(c,K6(a)):a1.styles[c]=b(b({},a1.styles[c]||{}),i),c==="fas"&&U3("fa",a)}var A2,k2,P2,R1=a1.styles,El=a1.shims,Dl=(A2={},W(A2,O,Object.values(e2[O])),W(A2,I,Object.values(e2[I])),A2),o4=null,v0={},z0={},h0={},H0={},u0={},Ol=(k2={},W(k2,O,Object.keys(c2[O])),W(k2,I,Object.keys(c2[I])),k2);function $l(c){return~dl.indexOf(c)}function Il(c,a){var r=a.split("-"),e=r[0],s=r.slice(1).join("-");return e===c&&s!==""&&!$l(s)?s:null}var p0=function(){var a=function(i){return N3(R1,function(n,f,o){return n[o]=N3(f,i,{}),n},{})};v0=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(o){return typeof o=="number"});f.forEach(function(o){s[o.toString(16)]=n})}return s}),z0=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(o){return typeof o=="string"});f.forEach(function(o){s[o]=n})}return s}),u0=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(o){s[o]=n}),s});var r="far"in R1||y.autoFetchSvg,e=N3(El,function(s,i){var n=i[0],f=i[1],o=i[2];return f==="far"&&!r&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:o}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:o}),s},{names:{},unicodes:{}});h0=e.names,H0=e.unicodes,o4=Z2(y.styleDefault,{family:y.familyDefault})};xl(function(c){o4=Z2(c.styleDefault,{family:y.familyDefault})});p0();function l4(c,a){return(v0[c]||{})[a]}function Ul(c,a){return(z0[c]||{})[a]}function y1(c,a){return(u0[c]||{})[a]}function V0(c){return h0[c]||{prefix:null,iconName:null}}function ql(c){var a=H0[c],r=l4("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function C1(){return o4}var t4=function(){return{prefix:null,iconName:null,rest:[]}};function Z2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?O:r,s=c2[e][c],i=a2[e][c]||a2[e][s],n=c in a1.styles?c:null;return i||n||null}var _6=(P2={},W(P2,O,Object.keys(e2[O])),W(P2,I,Object.keys(e2[I])),P2);function K2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,s=e===void 0?!1:e,i=(a={},W(a,O,"".concat(y.cssPrefix,"-").concat(O)),W(a,I,"".concat(y.cssPrefix,"-").concat(I)),a),n=null,f=O;(c.includes(i[O])||c.some(function(l){return _6[O].includes(l)}))&&(f=O),(c.includes(i[I])||c.some(function(l){return _6[I].includes(l)}))&&(f=I);var o=c.reduce(function(l,t){var m=Il(y.cssPrefix,t);if(R1[t]?(t=Dl[f].includes(t)?hl[f][t]:t,n=t,l.prefix=t):Ol[f].indexOf(t)>-1?(n=t,l.prefix=Z2(t,{family:f})):m?l.iconName=m:t!==y.replacementClass&&t!==i[O]&&t!==i[I]&&l.rest.push(t),!s&&l.prefix&&l.iconName){var v=n==="fa"?V0(l.iconName):{},H=y1(l.prefix,l.iconName);v.prefix&&(n=null),l.iconName=v.iconName||H||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!R1.far&&R1.fas&&!y.autoFetchSvg&&(l.prefix="fas")}return l},t4());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&f===I&&(R1.fass||y.autoFetchSvg)&&(o.prefix="fass",o.iconName=y1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=C1()||"fas"),o}var Gl=function(){function c(){el(this,c),this.definitions={}}return rl(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){r.definitions[f]=b(b({},r.definitions[f]||{}),n[f]),U3(f,n[f]);var o=e2[O][f];o&&U3(o,n[f]),p0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,o=n.iconName,l=n.icon,t=l[2];r[f]||(r[f]={}),t.length>0&&t.forEach(function(m){typeof m=="string"&&(r[f][m]=l)}),r[f][o]=l}),r}}]),c}(),Y6=[],B1={},E1={},jl=Object.keys(E1);function Wl(c,a){var r=a.mixoutsTo;return Y6=c,B1={},Object.keys(E1).forEach(function(e){jl.indexOf(e)===-1&&delete E1[e]}),Y6.forEach(function(e){var s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(r[n]=s[n]),I2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){r[n]||(r[n]={}),r[n][f]=s[n][f]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){B1[n]||(B1[n]=[]),B1[n].push(i[n])})}e.provides&&e.provides(E1)}),r}function q3(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),s=2;s<r;s++)e[s-2]=arguments[s];var i=B1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function w1(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var s=B1[c]||[];s.forEach(function(i){i.apply(null,r)})}function m1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return E1[c]?E1[c].apply(null,a):void 0}function G3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||C1();if(a)return a=y1(r,a)||a,Z6(M0.definitions,r,a)||Z6(a1.styles,r,a)}var M0=new Gl,Zl=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,w1("noAuto")},Kl={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return v1?(w1("beforeI2svg",a),m1("pseudoElements2svg",a),m1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Tl(function(){Yl({autoReplaceSvgRoot:r}),w1("watch",a)})}},_l={icon:function(a){if(a===null)return null;if(I2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:y1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Z2(a[0]);return{prefix:e,iconName:y1(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(Hl))){var s=K2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||C1(),iconName:y1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=C1();return{prefix:i,iconName:y1(i,a)||a}}}},c1={noAuto:Zl,config:y,dom:Kl,parse:_l,library:M0,findIconDefinition:G3,toHtml:m2},Yl=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?$:r;(Object.keys(a1.styles).length>0||y.autoFetchSvg)&&v1&&y.autoReplaceSvg&&c1.dom.i2svg({node:e})};function _2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return m2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(v1){var e=$.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function Xl(c){var a=c.children,r=c.main,e=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(f4(n)&&r.found&&!e.found){var f=r.width,o=r.height,l={x:f/o/2,y:.5};s.style=W2(b(b({},i),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function Ql(c){var a=c.prefix,r=c.iconName,e=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},s),{},{id:n}),children:e}]}]}function m4(c){var a=c.icons,r=a.main,e=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,o=c.title,l=c.maskId,t=c.titleId,m=c.extra,v=c.watchable,H=v===void 0?!1:v,h=e.found?e:r,u=h.width,C=h.height,p=s==="fak",z=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(N){return m.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(m.classes).join(" "),V={children:[],attributes:b(b({},m.attributes),{},{"data-prefix":s,"data-icon":i,class:z,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(C)})},M=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(u/C*16*.0625,"em")}:{};H&&(V.attributes[S1]=""),o&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(t||i2())},children:[o]}),delete V.attributes.title);var d=b(b({},V),{},{prefix:s,iconName:i,main:r,mask:e,maskId:l,transform:n,symbol:f,styles:b(b({},M),m.styles)}),g=e.found&&r.found?m1("generateAbstractMask",d)||{children:[],attributes:{}}:m1("generateAbstractIcon",d)||{children:[],attributes:{}},S=g.children,L=g.attributes;return d.children=S,d.attributes=L,f?Ql(d):Xl(d)}function X6(c){var a=c.content,r=c.width,e=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,o=f===void 0?!1:f,l=b(b(b({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});o&&(l[S1]="");var t=b({},n.styles);f4(s)&&(t.transform=wl({transform:s,startCentered:!0,width:r,height:e}),t["-webkit-transform"]=t.transform);var m=W2(t);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Jl(c){var a=c.content,r=c.title,e=c.extra,s=b(b(b({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),i=W2(e.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var y3=a1.styles;function j3(c){var a=c[0],r=c[1],e=c.slice(4),s=a4(e,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(N1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(N1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(N1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:r,icon:n}}var ct={found:!1,width:512,height:512};function at(c,a){!s0&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function W3(c,a){var r=a;return a==="fa"&&y.styleDefault!==null&&(a=C1()),new Promise(function(e,s){if(m1("missingIconAbstract"),r==="fa"){var i=V0(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&y3[a]&&y3[a][c]){var n=y3[a][c];return e(j3(n))}at(c,a),e(b(b({},ct),{},{icon:y.showMissingIcons&&c?m1("missingIconAbstract")||{}:{}}))})}var Q6=function(){},Z3=y.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:Q6,measure:Q6},Z1='FA "6.3.0"',et=function(a){return Z3.mark("".concat(Z1," ").concat(a," begins")),function(){return d0(a)}},d0=function(a){Z3.mark("".concat(Z1," ").concat(a," ends")),Z3.measure("".concat(Z1," ").concat(a),"".concat(Z1," ").concat(a," begins"),"".concat(Z1," ").concat(a," ends"))},v4={begin:et,end:d0},T2=function(){};function J6(c){var a=c.getAttribute?c.getAttribute(S1):null;return typeof a=="string"}function rt(c){var a=c.getAttribute?c.getAttribute(r4):null,r=c.getAttribute?c.getAttribute(i4):null;return a&&r}function it(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function st(){if(y.autoReplaceSvg===!0)return F2.replace;var c=F2[y.autoReplaceSvg];return c||F2.replace}function nt(c){return $.createElementNS("http://www.w3.org/2000/svg",c)}function ft(c){return $.createElement(c)}function C0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?nt:ft:r;if(typeof c=="string")return $.createTextNode(c);var s=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(C0(n,{ceFn:e}))}),s}function ot(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var F2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(s){r.parentNode.insertBefore(C0(s),r)}),r.getAttribute(S1)===null&&y.keepOriginalSource){var e=$.createComment(ot(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~n4(r).indexOf(y.replacementClass))return F2.replace(a);var s=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(f,o){return o===y.replacementClass||o.match(s)?f.toSvg.push(o):f.toNode.push(o),f},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(f){return m2(f)}).join(`
`);r.setAttribute(S1,""),r.innerHTML=n}};function c8(c){c()}function L0(c,a){var r=typeof a=="function"?a:T2;if(c.length===0)r();else{var e=c8;y.mutateApproach===vl&&(e=d1.requestAnimationFrame||c8),e(function(){var s=st(),i=v4.begin("mutate");c.map(s),i(),r()})}}var z4=!1;function g0(){z4=!0}function K3(){z4=!1}var q2=null;function a8(c){if(G6&&y.observeMutations){var a=c.treeCallback,r=a===void 0?T2:a,e=c.nodeCallback,s=e===void 0?T2:e,i=c.pseudoElementsCallback,n=i===void 0?T2:i,f=c.observeMutationsRoot,o=f===void 0?$:f;q2=new G6(function(l){if(!z4){var t=C1();I1(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!J6(m.addedNodes[0])&&(y.searchPseudoElements&&n(m.target),r(m.target)),m.type==="attributes"&&m.target.parentNode&&y.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&J6(m.target)&&~Ml.indexOf(m.attributeName))if(m.attributeName==="class"&&rt(m.target)){var v=K2(n4(m.target)),H=v.prefix,h=v.iconName;m.target.setAttribute(r4,H||t),h&&m.target.setAttribute(i4,h)}else it(m.target)&&s(m.target)})}}),v1&&q2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function lt(){q2&&q2.disconnect()}function tt(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(e[n]=f.join(":").trim()),e},{})),r}function mt(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=K2(n4(c));return s.prefix||(s.prefix=C1()),a&&r&&(s.prefix=a,s.iconName=r),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=Ul(s.prefix,c.innerText)||l4(s.prefix,I3(c.innerText))),!s.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function vt(c){var a=I1(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return y.autoA11y&&(r?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(e||i2()):(a["aria-hidden"]="true",a.focusable="false")),a}function zt(){return{iconName:null,title:null,titleId:null,prefix:null,transform:i1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=mt(c),e=r.iconName,s=r.prefix,i=r.rest,n=vt(c),f=q3("parseNodeAttributes",{},c),o=a.styleParser?tt(c):[];return b({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:i1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:n}},f)}var ht=a1.styles;function x0(c){var a=y.autoReplaceSvg==="nest"?e8(c,{styleParser:!1}):e8(c);return~a.extra.classes.indexOf(n0)?m1("generateLayersText",c,a):m1("generateSvgReplacementMutation",c,a)}var L1=new Set;s4.map(function(c){L1.add("fa-".concat(c))});Object.keys(c2[O]).map(L1.add.bind(L1));Object.keys(c2[I]).map(L1.add.bind(L1));L1=l2(L1);function r8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!v1)return Promise.resolve();var r=$.documentElement.classList,e=function(m){return r.add("".concat(j6,"-").concat(m))},s=function(m){return r.remove("".concat(j6,"-").concat(m))},i=y.autoFetchSvg?L1:s4.map(function(t){return"fa-".concat(t)}).concat(Object.keys(ht));i.includes("fa")||i.push("fa");var n=[".".concat(n0,":not([").concat(S1,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(S1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=I1(c.querySelectorAll(n))}catch{}if(f.length>0)e("pending"),s("complete");else return Promise.resolve();var o=v4.begin("onTree"),l=f.reduce(function(t,m){try{var v=x0(m);v&&t.push(v)}catch(H){s0||H.name==="MissingIcon"&&console.error(H)}return t},[]);return new Promise(function(t,m){Promise.all(l).then(function(v){L0(v,function(){e("active"),e("complete"),s("pending"),typeof a=="function"&&a(),o(),t()})}).catch(function(v){o(),m(v)})})}function Ht(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;x0(c).then(function(r){r&&L0([r],a)})}function ut(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:G3(a||{}),s=r.mask;return s&&(s=(s||{}).icon?s:G3(s||{})),c(e,b(b({},r),{},{mask:s}))}}var pt=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,s=e===void 0?i1:e,i=r.symbol,n=i===void 0?!1:i,f=r.mask,o=f===void 0?null:f,l=r.maskId,t=l===void 0?null:l,m=r.title,v=m===void 0?null:m,H=r.titleId,h=H===void 0?null:H,u=r.classes,C=u===void 0?[]:u,p=r.attributes,z=p===void 0?{}:p,V=r.styles,M=V===void 0?{}:V;if(a){var d=a.prefix,g=a.iconName,S=a.icon;return _2(b({type:"icon"},a),function(){return w1("beforeDOMElementCreation",{iconDefinition:a,params:r}),y.autoA11y&&(v?z["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(h||i2()):(z["aria-hidden"]="true",z.focusable="false")),m4({icons:{main:j3(S),mask:o?j3(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:g,transform:b(b({},i1),s),symbol:n,title:v,maskId:t,titleId:h,extra:{attributes:z,styles:M,classes:C}})})}},Vt={mixout:function(){return{icon:ut(pt)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=r8,r.nodeCallback=Ht,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,s=e===void 0?$:e,i=r.callback,n=i===void 0?function(){}:i;return r8(s,n)},a.generateSvgReplacementMutation=function(r,e){var s=e.iconName,i=e.title,n=e.titleId,f=e.prefix,o=e.transform,l=e.symbol,t=e.mask,m=e.maskId,v=e.extra;return new Promise(function(H,h){Promise.all([W3(s,f),t.iconName?W3(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(u){var C=a4(u,2),p=C[0],z=C[1];H([r,m4({icons:{main:p,mask:z},prefix:f,iconName:s,transform:o,symbol:l,maskId:m,title:i,titleId:n,extra:v,watchable:!0})])}).catch(h)})},a.generateAbstractIcon=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.transform,f=r.styles,o=W2(f);o.length>0&&(s.style=o);var l;return f4(n)&&(l=m1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(l||i.icon),{children:e,attributes:s}}}},Mt={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.classes,i=s===void 0?[]:s;return _2({type:"layer"},function(){w1("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(f){Array.isArray(f)?f.map(function(o){n=n.concat(o.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(l2(i)).join(" ")},children:n}]})}}}},dt={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.title,i=s===void 0?null:s,n=e.classes,f=n===void 0?[]:n,o=e.attributes,l=o===void 0?{}:o,t=e.styles,m=t===void 0?{}:t;return _2({type:"counter",content:r},function(){return w1("beforeDOMElementCreation",{content:r,params:e}),Jl({content:r.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(l2(f))}})})}}}},Ct={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,i=s===void 0?i1:s,n=e.title,f=n===void 0?null:n,o=e.classes,l=o===void 0?[]:o,t=e.attributes,m=t===void 0?{}:t,v=e.styles,H=v===void 0?{}:v;return _2({type:"text",content:r},function(){return w1("beforeDOMElementCreation",{content:r,params:e}),X6({content:r,transform:b(b({},i1),i),title:f,extra:{attributes:m,styles:H,classes:["".concat(y.cssPrefix,"-layers-text")].concat(l2(l))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var s=e.title,i=e.transform,n=e.extra,f=null,o=null;if(e0){var l=parseInt(getComputedStyle(r).fontSize,10),t=r.getBoundingClientRect();f=t.width/l,o=t.height/l}return y.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,X6({content:r.innerHTML,width:f,height:o,transform:i,title:s,extra:n,watchable:!0})])}}},Lt=new RegExp('"',"ug"),i8=[1105920,1112319];function gt(c){var a=c.replace(Lt,""),r=Bl(a,0),e=r>=i8[0]&&r<=i8[1],s=a.length===2?a[0]===a[1]:!1;return{value:I3(s?a[0]:a),isSecondary:e||s}}function s8(c,a){var r="".concat(ml).concat(a.replace(":","-"));return new Promise(function(e,s){if(c.getAttribute(r)!==null)return e();var i=I1(c.children),n=i.filter(function(S){return S.getAttribute($3)===a})[0],f=d1.getComputedStyle(c,a),o=f.getPropertyValue("font-family").match(ul),l=f.getPropertyValue("font-weight"),t=f.getPropertyValue("content");if(n&&!o)return c.removeChild(n),e();if(o&&t!=="none"&&t!==""){var m=f.getPropertyValue("content"),v=~["Sharp"].indexOf(o[2])?I:O,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?a2[v][o[2].toLowerCase()]:pl[v][l],h=gt(m),u=h.value,C=h.isSecondary,p=o[0].startsWith("FontAwesome"),z=l4(H,u),V=z;if(p){var M=ql(u);M.iconName&&M.prefix&&(z=M.iconName,H=M.prefix)}if(z&&!C&&(!n||n.getAttribute(r4)!==H||n.getAttribute(i4)!==V)){c.setAttribute(r,V),n&&c.removeChild(n);var d=zt(),g=d.extra;g.attributes[$3]=a,W3(z,H).then(function(S){var L=m4(b(b({},d),{},{icons:{main:S,mask:t4()},prefix:H,iconName:V,extra:g,watchable:!0})),N=$.createElement("svg");a==="::before"?c.insertBefore(N,c.firstChild):c.appendChild(N),N.outerHTML=L.map(function(T){return m2(T)}).join(`
\v\f\r                　\u2028\u2029\uFEFF`},"58a8":function(e,s,i){var n=i("1d80"),f=i("5899"),o="["+f+"]",l=RegExp("^"+o+o+"*"),t=RegExp(o+o+"*$"),m=function(v){return function(H){var h=String(n(H));return v&1&&(h=h.replace(l,"")),v&2&&(h=h.replace(t,"")),h}};e.exports={start:m(1),end:m(2),trim:m(3)}},"5c6c":function(e,s){e.exports=function(i,n){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:n}}},"65f0":function(e,s,i){var n=i("861d"),f=i("e8b5"),o=i("b622"),l=o("species");e.exports=function(t,m){var v;return f(t)&&(v=t.constructor,typeof v=="function"&&(v===Array||f(v.prototype))?v=void 0:n(v)&&(v=v[l],v===null&&(v=void 0))),new(v===void 0?Array:v)(m===0?0:m)}},"69f3":function(e,s,i){var n=i("7f9a"),f=i("da84"),o=i("861d"),l=i("9112"),t=i("5135"),m=i("f772"),v=i("d012"),H=f.WeakMap,h,u,C,p=function(L){return C(L)?u(L):h(L,{})},z=function(L){return function(N){var T;if(!o(N)||(T=u(N)).type!==L)throw TypeError("Incompatible receiver, "+L+" required");return T}};if(n){var V=new H,M=V.get,d=V.has,g=V.set;h=function(L,N){return g.call(V,L,N),N},u=function(L){return M.call(V,L)||{}},C=function(L){return d.call(V,L)}}else{var S=m("state");v[S]=!0,h=function(L,N){return l(L,S,N),N},u=function(L){return t(L,S)?L[S]:{}},C=function(L){return t(L,S)}}e.exports={set:h,get:u,has:C,enforce:p,getterFor:z}},"6eeb":function(e,s,i){var n=i("da84"),f=i("9112"),o=i("5135"),l=i("ce4e"),t=i("8925"),m=i("69f3"),v=m.get,H=m.enforce,h=String(String).split("String");(e.exports=function(u,C,p,z){var V=z?!!z.unsafe:!1,M=z?!!z.enumerable:!1,d=z?!!z.noTargetGet:!1;if(typeof p=="function"&&(typeof C=="string"&&!o(p,"name")&&f(p,"name",C),H(p).source=h.join(typeof C=="string"?C:"")),u===n){M?u[C]=p:l(C,p);return}else V?!d&&u[C]&&(M=!0):delete u[C];M?u[C]=p:f(u,C,p)})(Function.prototype,"toString",function(){return typeof this=="function"&&v(this).source||t(this)})},7156:function(e,s,i){var n=i("861d"),f=i("d2bb");e.exports=function(o,l,t){var m,v;return f&&typeof(m=l.constructor)=="function"&&m!==t&&n(v=m.prototype)&&v!==t.prototype&&f(o,v),o}},7418:function(e,s){s.f=Object.getOwnPropertySymbols},7839:function(e,s){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,s,i){var n=i("1d80");e.exports=function(f){return Object(n(f))}},"7c73":function(e,s,i){var n=i("825a"),f=i("37e8"),o=i("7839"),l=i("d012"),t=i("1be4"),m=i("cc12"),v=i("f772"),H=">",h="<",u="prototype",C="script",p=v("IE_PROTO"),z=function(){},V=function(L){return h+C+H+L+h+"/"+C+H},M=function(L){L.write(V("")),L.close();var N=L.parentWindow.Object;return L=null,N},d=function(){var L=m("iframe"),N="java"+C+":",T;return L.style.display="none",t.appendChild(L),L.src=String(N),T=L.contentWindow.document,T.open(),T.write(V("document.F=Object")),T.close(),T.F},g,S=function(){try{g=document.domain&&new ActiveXObject("htmlfile")}catch{}S=g?M(g):d();for(var L=o.length;L--;)delete S[u][o[L]];return S()};l[p]=!0,e.exports=Object.create||function(N,T){var U;return N!==null?(z[u]=n(N),U=new z,z[u]=null,U[p]=N):U=S(),T===void 0?U:f(U,T)}},"7f9a":function(e,s,i){var n=i("da84"),f=i("8925"),o=n.WeakMap;e.exports=typeof o=="function"&&/native code/.test(f(o))},"825a":function(e,s,i){var n=i("861d");e.exports=function(f){if(!n(f))throw TypeError(String(f)+" is not an object");return f}},"83ab":function(e,s,i){var n=i("d039");e.exports=!n(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},"861d":function(e,s){e.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},8875:function(e,s,i){var n,f,o;(function(l,t){f=[],n=t,o=typeof n=="function"?n.apply(s,f):n,o!==void 0&&(e.exports=o)})(typeof self<"u"?self:this,function(){function l(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript||t&&t.get!==l&&document.currentScript)return document.currentScript;try{throw new Error}catch(g){var m=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,v=/@([^@]*):(\d+):(\d+)\s*$/ig,H=m.exec(g.stack)||v.exec(g.stack),h=H&&H[1]||!1,u=H&&H[2]||!1,C=document.location.href.replace(document.location.hash,""),p,z,V,M=document.getElementsByTagName("script");h===C&&(p=document.documentElement.outerHTML,z=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),V=p.replace(z,"$1").trim());for(var d=0;d<M.length;d++)if(M[d].readyState==="interactive"||M[d].src===h||h===C&&M[d].innerHTML&&M[d].innerHTML.trim()===V)return M[d];return null}}return l})},8925:function(e,s,i){var n=i("c6cd"),f=Function.toString;typeof n.inspectSource!="function"&&(n.inspectSource=function(o){return f.call(o)}),e.exports=n.inspectSource},"8bbf":function(e,s){e.exports=r},"90e3":function(e,s){var i=0,n=Math.random();e.exports=function(f){return"Symbol("+String(f===void 0?"":f)+")_"+(++i+n).toString(36)}},9112:function(e,s,i){var n=i("83ab"),f=i("9bf2"),o=i("5c6c");e.exports=n?function(l,t,m){return f.f(l,t,o(1,m))}:function(l,t,m){return l[t]=m,l}},"94ca":function(e,s,i){var n=i("d039"),f=/#|\.prototype\./,o=function(H,h){var u=t[l(H)];return u==v?!0:u==m?!1:typeof h=="function"?n(h):!!h},l=o.normalize=function(H){return String(H).replace(f,".").toLowerCase()},t=o.data={},m=o.NATIVE="N",v=o.POLYFILL="P";e.exports=o},"9bdd":function(e,s,i){var n=i("825a");e.exports=function(f,o,l,t){try{return t?o(n(l)[0],l[1]):o(l)}catch(v){var m=f.return;throw m!==void 0&&n(m.call(f)),v}}},"9bf2":function(e,s,i){var n=i("83ab"),f=i("0cfb"),o=i("825a"),l=i("c04e"),t=Object.defineProperty;s.f=n?t:function(v,H,h){if(o(v),H=l(H,!0),o(h),f)try{return t(v,H,h)}catch{}if("get"in h||"set"in h)throw TypeError("Accessors not supported");return"value"in h&&(v[H]=h.value),v}},"9fab":function(e,s,i){(function(n,f){e.exports=f()})(this,function(n){return function(f,o){if(o==null&&(o={fuzzy:!0}),/youtu\.?be/.test(f)){var l,t=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(l=0;l<t.length;++l)if(t[l].test(f))return t[l].exec(f)[1];if(o.fuzzy){var m=f.split(/[\/\&\?=#\.\s]/g);for(l=0;l<m.length;++l)if(/^[^#\&\?]{11}$/.test(m[l]))return m[l]}}return null}})},a640:function(e,s,i){var n=i("d039");e.exports=function(f,o){var l=[][f];return!!l&&n(function(){l.call(null,o||function(){throw 1},1)})}},a691:function(e,s){var i=Math.ceil,n=Math.floor;e.exports=function(f){return isNaN(f=+f)?0:(f>0?n:i)(f)}},a9e3:function(e,s,i){var n=i("83ab"),f=i("da84"),o=i("94ca"),l=i("6eeb"),t=i("5135"),m=i("c6b6"),v=i("7156"),H=i("c04e"),h=i("d039"),u=i("7c73"),C=i("241c").f,p=i("06cf").f,z=i("9bf2").f,V=i("58a8").trim,M="Number",d=f[M],g=d.prototype,S=m(u(g))==M,L=function(B){var E=H(B,!1),K,Z,U1,X,g1,p2,A1,q;if(typeof E=="string"&&E.length>2){if(E=V(E),K=E.charCodeAt(0),K===43||K===45){if(Z=E.charCodeAt(2),Z===88||Z===120)return NaN}else if(K===48){switch(E.charCodeAt(1)){case 66:case 98:U1=2,X=49;break;case 79:case 111:U1=8,X=55;break;default:return+E}for(g1=E.slice(2),p2=g1.length,A1=0;A1<p2;A1++)if(q=g1.charCodeAt(A1),q<48||q>X)return NaN;return parseInt(g1,U1)}}return+E};if(o(M,!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var N=function(E){var K=arguments.length<1?0:E,Z=this;return Z instanceof N&&(S?h(function(){g.valueOf.call(Z)}):m(Z)!=M)?v(new d(L(K)),Z,N):L(K)},T=n?C(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),U=0,G;T.length>U;U++)t(d,G=T[U])&&!t(N,G)&&z(N,G,p(d,G));N.prototype=g,g.constructor=N,l(f,M,N)}},ae40:function(e,s,i){var n=i("83ab"),f=i("d039"),o=i("5135"),l=Object.defineProperty,t={},m=function(v){throw v};e.exports=function(v,H){if(o(t,v))return t[v];H||(H={});var h=[][v],u=o(H,"ACCESSORS")?H.ACCESSORS:!1,C=o(H,0)?H[0]:m,p=o(H,1)?H[1]:void 0;return t[v]=!!h&&!f(function(){if(u&&!n)return!0;var z={length:-1};u?l(z,1,{enumerable:!0,get:m}):z[1]=1,h.call(z,C,p)})}},b041:function(e,s,i){var n=i("00ee"),f=i("f5df");e.exports=n?{}.toString:function(){return"[object "+f(this)+"]"}},b575:function(e,s,i){var n=i("da84"),f=i("06cf").f,o=i("c6b6"),l=i("2cf4").set,t=i("1cdc"),m=n.MutationObserver||n.WebKitMutationObserver,v=n.process,H=n.Promise,h=o(v)=="process",u=f(n,"queueMicrotask"),C=u&&u.value,p,z,V,M,d,g,S,L;C||(p=function(){var N,T;for(h&&(N=v.domain)&&N.exit();z;){T=z.fn,z=z.next;try{T()}catch(U){throw z?M():V=void 0,U}}V=void 0,N&&N.enter()},h?M=function(){v.nextTick(p)}:m&&!t?(d=!0,g=document.createTextNode(""),new m(p).observe(g,{characterData:!0}),M=function(){g.data=d=!d}):H&&H.resolve?(S=H.resolve(void 0),L=S.then,M=function(){L.call(S,p)}):M=function(){l.call(n,p)}),e.exports=C||function(N){var T={fn:N,next:void 0};V&&(V.next=T),z||(z=T,M()),V=T}},b622:function(e,s,i){var n=i("da84"),f=i("5692"),o=i("5135"),l=i("90e3"),t=i("4930"),m=i("fdbf"),v=f("wks"),H=n.Symbol,h=m?H:H&&H.withoutSetter||l;e.exports=function(u){return o(v,u)||(t&&o(H,u)?v[u]=H[u]:v[u]=h("Symbol."+u)),v[u]}},b727:function(e,s,i){var n=i("0366"),f=i("44ad"),o=i("7b0b"),l=i("50c4"),t=i("65f0"),m=[].push,v=function(H){var h=H==1,u=H==2,C=H==3,p=H==4,z=H==6,V=H==5||z;return function(M,d,g,S){for(var L=o(M),N=f(L),T=n(d,g,3),U=l(N.length),G=0,B=S||t,E=h?B(M,U):u?B(M,0):void 0,K,Z;U>G;G++)if((V||G in N)&&(K=N[G],Z=T(K,G,L),H)){if(h)E[G]=Z;else if(Z)switch(H){case 3:return!0;case 5:return K;case 6:return G;case 2:m.call(E,K)}else if(p)return!1}return z?-1:C||p?p:E}};e.exports={forEach:v(0),map:v(1),filter:v(2),some:v(3),every:v(4),find:v(5),findIndex:v(6)}},c04e:function(e,s,i){var n=i("861d");e.exports=function(f,o){if(!n(f))return f;var l,t;if(o&&typeof(l=f.toString)=="function"&&!n(t=l.call(f))||typeof(l=f.valueOf)=="function"&&!n(t=l.call(f))||!o&&typeof(l=f.toString)=="function"&&!n(t=l.call(f)))return t;throw TypeError("Can't convert object to primitive value")}},c430:function(e,s){e.exports=!1},c6b6:function(e,s){var i={}.toString;e.exports=function(n){return i.call(n).slice(8,-1)}},c6cd:function(e,s,i){var n=i("da84"),f=i("ce4e"),o="__core-js_shared__",l=n[o]||f(o,{});e.exports=l},c8ba:function(e,s){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch{typeof window=="object"&&(i=window)}e.exports=i},ca84:function(e,s,i){var n=i("5135"),f=i("fc6a"),o=i("4d64").indexOf,l=i("d012");e.exports=function(t,m){var v=f(t),H=0,h=[],u;for(u in v)!n(l,u)&&n(v,u)&&h.push(u);for(;m.length>H;)n(v,u=m[H++])&&(~o(h,u)||h.push(u));return h}},cc12:function(e,s,i){var n=i("da84"),f=i("861d"),o=n.document,l=f(o)&&f(o.createElement);e.exports=function(t){return l?o.createElement(t):{}}},cdf9:function(e,s,i){var n=i("825a"),f=i("861d"),o=i("f069");e.exports=function(l,t){if(n(l),f(t)&&t.constructor===l)return t;var m=o.f(l),v=m.resolve;return v(t),m.promise}},ce4e:function(e,s,i){var n=i("da84"),f=i("9112");e.exports=function(o,l){try{f(n,o,l)}catch{n[o]=l}return l}},d012:function(e,s){e.exports={}},d039:function(e,s){e.exports=function(i){try{return!!i()}catch{return!0}}},d066:function(e,s,i){var n=i("428f"),f=i("da84"),o=function(l){return typeof l=="function"?l:void 0};e.exports=function(l,t){return arguments.length<2?o(n[l])||o(f[l]):n[l]&&n[l][t]||f[l]&&f[l][t]}},d1e7:function(e,s,i){var n={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,o=f&&!n.call({1:2},1);s.f=o?function(t){var m=f(this,t);return!!m&&m.enumerable}:n},d2bb:function(e,s,i){var n=i("825a"),f=i("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var o=!1,l={},t;try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(l,[]),o=l instanceof Array}catch{}return function(v,H){return n(v),f(H),o?t.call(v,H):v.__proto__=H,v}}():void 0)},d3b7:function(e,s,i){var n=i("00ee"),f=i("6eeb"),o=i("b041");n||f(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,s,i){var n=i("9bf2").f,f=i("5135"),o=i("b622"),l=o("toStringTag");e.exports=function(t,m,v){t&&!f(t=v?t:t.prototype,l)&&n(t,l,{configurable:!0,value:m})}},da84:function(e,s,i){(function(n){var f=function(o){return o&&o.Math==Math&&o};e.exports=f(typeof globalThis=="object"&&globalThis)||f(typeof window=="object"&&window)||f(typeof self=="object"&&self)||f(typeof n=="object"&&n)||Function("return this")()}).call(this,i("c8ba"))},df75:function(e,s,i){var n=i("ca84"),f=i("7839");e.exports=Object.keys||function(l){return n(l,f)}},e2cc:function(e,s,i){var n=i("6eeb");e.exports=function(f,o,l){for(var t in o)n(f,t,o[t],l);return f}},e667:function(e,s){e.exports=function(i){try{return{error:!1,value:i()}}catch(n){return{error:!0,value:n}}}},e6cf:function(e,s,i){var n=i("23e7"),f=i("c430"),o=i("da84"),l=i("d066"),t=i("fea9"),m=i("6eeb"),v=i("e2cc"),H=i("d44e"),h=i("2626"),u=i("861d"),C=i("1c0b"),p=i("19aa"),z=i("c6b6"),V=i("8925"),M=i("2266"),d=i("1c7e"),g=i("4840"),S=i("2cf4").set,L=i("b575"),N=i("cdf9"),T=i("44de"),U=i("f069"),G=i("e667"),B=i("69f3"),E=i("94ca"),K=i("b622"),Z=i("2d00"),U1=K("species"),X="Promise",g1=B.get,p2=B.set,A1=B.getterFor(X),q=t,h6=o.TypeError,z3=o.document,V2=o.process,H6=l("fetch"),k1=U.f,nn=k1,q1=z(V2)=="process",fn=!!(z3&&z3.createEvent&&o.dispatchEvent),u6="unhandledrejection",on="rejectionhandled",p6=0,V6=1,ln=2,h3=1,M6=2,M2,d6,H3,C6,G1=E(X,function(){var w=V(q)!==String(q);if(!w&&(Z===66||!q1&&typeof PromiseRejectionEvent!="function")||f&&!q.prototype.finally)return!0;if(Z>=51&&/native code/.test(q))return!1;var x=q.resolve(1),A=function(R){R(function(){},function(){})},k=x.constructor={};return k[U1]=A,!(x.then(function(){})instanceof A)}),tn=G1||!d(function(w){q.all(w).catch(function(){})}),L6=function(w){var x;return u(w)&&typeof(x=w.then)=="function"?x:!1},u3=function(w,x,A){if(!x.notified){x.notified=!0;var k=x.reactions;L(function(){for(var R=x.value,_=x.state==V6,n1=0;k.length>n1;){var e1=k[n1++],h1=_?e1.ok:e1.fail,d2=e1.resolve,H1=e1.reject,u1=e1.domain,p1,j1,C2;try{h1?(_||(x.rejection===M6&&vn(w,x),x.rejection=h3),h1===!0?p1=R:(u1&&u1.enter(),p1=h1(R),u1&&(u1.exit(),C2=!0)),p1===e1.promise?H1(h6("Promise-chain cycle")):(j1=L6(p1))?j1.call(p1,d2,H1):d2(p1)):H1(R)}catch(zn){u1&&!C2&&u1.exit(),H1(zn)}}x.reactions=[],x.notified=!1,A&&!x.rejection&&mn(w,x)})}},g6=function(w,x,A){var k,R;fn?(k=z3.createEvent("Event"),k.promise=x,k.reason=A,k.initEvent(w,!1,!0),o.dispatchEvent(k)):k={promise:x,reason:A},(R=o["on"+w])?R(k):w===u6&&T("Unhandled promise rejection",A)},mn=function(w,x){S.call(o,function(){var A=x.value,k=x6(x),R;if(k&&(R=G(function(){q1?V2.emit("unhandledRejection",A,w):g6(u6,w,A)}),x.rejection=q1||x6(x)?M6:h3,R.error))throw R.value})},x6=function(w){return w.rejection!==h3&&!w.parent},vn=function(w,x){S.call(o,function(){q1?V2.emit("rejectionHandled",w):g6(on,w,x.value)})},P1=function(w,x,A,k){return function(R){w(x,A,R,k)}},T1=function(w,x,A,k){x.done||(x.done=!0,k&&(x=k),x.value=A,x.state=ln,u3(w,x,!0))},p3=function(w,x,A,k){if(!x.done){x.done=!0,k&&(x=k);try{if(w===A)throw h6("Promise can't be resolved itself");var R=L6(A);R?L(function(){var _={done:!1};try{R.call(A,P1(p3,w,_,x),P1(T1,w,_,x))}catch(n1){T1(w,_,n1,x)}}):(x.value=A,x.state=V6,u3(w,x,!1))}catch(_){T1(w,{done:!1},_,x)}}};G1&&(q=function(x){p(this,q,X),C(x),M2.call(this);var A=g1(this);try{x(P1(p3,this,A),P1(T1,this,A))}catch(k){T1(this,A,k)}},M2=function(x){p2(this,{type:X,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:p6,value:void 0})},M2.prototype=v(q.prototype,{then:function(x,A){var k=A1(this),R=k1(g(this,q));return R.ok=typeof x=="function"?x:!0,R.fail=typeof A=="function"&&A,R.domain=q1?V2.domain:void 0,k.parent=!0,k.reactions.push(R),k.state!=p6&&u3(this,k,!1),R.promise},catch:function(w){return this.then(void 0,w)}}),d6=function(){var w=new M2,x=g1(w);this.promise=w,this.resolve=P1(p3,w,x),this.reject=P1(T1,w,x)},U.f=k1=function(w){return w===q||w===H3?new d6(w):nn(w)},!f&&typeof t=="function"&&(C6=t.prototype.then,m(t.prototype,"then",function(x,A){var k=this;return new q(function(R,_){C6.call(k,R,_)}).then(x,A)},{unsafe:!0}),typeof H6=="function"&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(x){return N(q,H6.apply(o,arguments))}}))),n({global:!0,wrap:!0,forced:G1},{Promise:q}),H(q,X,!1,!0),h(X),H3=l(X),n({target:X,stat:!0,forced:G1},{reject:function(x){var A=k1(this);return A.reject.call(void 0,x),A.promise}}),n({target:X,stat:!0,forced:f||G1},{resolve:function(x){return N(f&&this===H3?q:this,x)}}),n({target:X,stat:!0,forced:tn},{all:function(x){var A=this,k=k1(A),R=k.resolve,_=k.reject,n1=G(function(){var e1=C(A.resolve),h1=[],d2=0,H1=1;M(x,function(u1){var p1=d2++,j1=!1;h1.push(void 0),H1++,e1.call(A,u1).then(function(C2){j1||(j1=!0,h1[p1]=C2,--H1||R(h1))},_)}),--H1||R(h1)});return n1.error&&_(n1.value),k.promise},race:function(x){var A=this,k=k1(A),R=k.reject,_=G(function(){var n1=C(A.resolve);M(x,function(e1){n1.call(A,e1).then(k.resolve,R)})});return _.error&&R(_.value),k.promise}})},e893:function(e,s,i){var n=i("5135"),f=i("56ef"),o=i("06cf"),l=i("9bf2");e.exports=function(t,m){for(var v=f(m),H=l.f,h=o.f,u=0;u<v.length;u++){var C=v[u];n(t,C)||H(t,C,h(m,C))}}},e8b5:function(e,s,i){var n=i("c6b6");e.exports=Array.isArray||function(o){return n(o)=="Array"}},e95a:function(e,s,i){var n=i("b622"),f=i("3f8c"),o=n("iterator"),l=Array.prototype;e.exports=function(t){return t!==void 0&&(f.Array===t||l[o]===t)}},f069:function(e,s,i){var n=i("1c0b"),f=function(o){var l,t;this.promise=new o(function(m,v){if(l!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");l=m,t=v}),this.resolve=n(l),this.reject=n(t)};e.exports.f=function(o){return new f(o)}},f5df:function(e,s,i){var n=i("00ee"),f=i("c6b6"),o=i("b622"),l=o("toStringTag"),t=f(function(){return arguments}())=="Arguments",m=function(v,H){try{return v[H]}catch{}};e.exports=n?f:function(v){var H,h,u;return v===void 0?"Undefined":v===null?"Null":typeof(h=m(H=Object(v),l))=="string"?h:t?f(H):(u=f(H))=="Object"&&typeof H.callee=="function"?"Arguments":u}},f772:function(e,s,i){var n=i("5692"),f=i("90e3"),o=n("keys");e.exports=function(l){return o[l]||(o[l]=f(l))}},fb15:function(e,s,i){if(i.r(s),i.d(s,"PlayerState",function(){return H}),typeof window<"u"){var n=window.document.currentScript;{var f=i("8875");n=f(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:f})}var o=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(i.p=o[1])}var l=i("8bbf");function t(p,z,V,M,d,g){return Object(l.openBlock)(),Object(l.createBlock)("div",{style:p.wrapperStyle},[Object(l.createVNode)("div",{ref:"youtube",style:p.wrapperStyle},null,4)],4)}i("4160"),i("a9e3"),i("d3b7"),i("e6cf"),i("159b");var m=i("9fab"),v=i.n(m),H={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},h=Object(l.defineComponent)({name:"YouTube",props:{src:{type:String,required:!0},height:{type:[Number,String],default:360},width:{type:[Number,String],default:640},host:{type:String,default:"https://www.youtube.com"},vars:Object},computed:{id:function(){return v()(this.src)||this.src},wrapperStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),position:"relative"}}},data:function(){var z=function(){},V=new Promise(function(d){z=d}),M={promise:V,resolver:z,player:null,initiated:!1,ready:!1,iframeStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}};return M},mounted:function(){var z=this;window.onYouTubeIframeAPIReadyResolvers||(window.onYouTubeIframeAPIReadyResolvers=[]),window.onYouTubeIframeAPIReady||(window.onYouTubeIframeAPIReady=function(){var S;(S=window.onYouTubeIframeAPIReadyResolvers)===null||S===void 0||S.forEach(function(L){L()})}),this.promise.then(function(){return z.initPlayer()});var V="youtube-iframe-js-api-script",M=document.getElementById(V);if(M)this.resolver();else{var d;(d=window.onYouTubeIframeAPIReadyResolvers)===null||d===void 0||d.push(this.resolver),M=document.createElement("script"),M.id=V,M.src="https://www.youtube.com/iframe_api";var g=document.getElementsByTagName("script")[0];g&&g.parentNode&&g.parentNode.insertBefore(M,g)}},methods:{initPlayer:function(){var z=this;this.initiated=!0,this.player=new YT.Player(this.$refs.youtube,{height:this.height,width:this.width,videoId:this.id,host:this.host,playerVars:this.vars,events:{onReady:function(M){z.ready=!0,setTimeout(function(){return z.$emit("ready",M)})},onStateChange:function(M){return z.$emit("state-change",M)},onPlaybackQualityChange:function(M){return z.$emit("playback-quality-change",M)},onPlaybackRateChange:function(M){return z.$emit("playback-rate-change",M)},onError:function(M){return z.$emit("error",M)},onApiChange:function(M){return z.$emit("api-change",M)}}})},cueVideoById:function(z,V,M){var d;(d=this.player)===null||d===void 0||d.cueVideoById(z,V,M)},loadVideoById:function(z,V,M){var d;(d=this.player)===null||d===void 0||d.loadVideoById(z,V,M)},cueVideoByUrl:function(z,V,M){var d;(d=this.player)===null||d===void 0||d.cueVideoByUrl(z,V,M)},loadVideoByUrl:function(z,V,M){var d;(d=this.player)===null||d===void 0||d.loadVideoByUrl(z,V,M)},cuePlaylist:function(z,V,M,d){var g;(g=this.player)===null||g===void 0||g.cuePlaylist(z,V,M,d)},loadPlaylist:function(z,V,M,d){var g;(g=this.player)===null||g===void 0||g.loadPlaylist(z,V,M,d)},playVideo:function(){var z;(z=this.player)===null||z===void 0||z.playVideo()},pauseVideo:function(){var z;(z=this.player)===null||z===void 0||z.pauseVideo()},stopVideo:function(){var z;(z=this.player)===null||z===void 0||z.stopVideo()},seekTo:function(z,V){var M;(M=this.player)===null||M===void 0||M.seekTo(z,V)},nextVideo:function(){var z;(z=this.player)===null||z===void 0||z.nextVideo()},previousVideo:function(){var z;(z=this.player)===null||z===void 0||z.previousVideo()},playVideoAt:function(z){var V;(V=this.player)===null||V===void 0||V.playVideoAt(z)},mute:function(){var z;(z=this.player)===null||z===void 0||z.mute()},unMute:function(){var z;(z=this.player)===null||z===void 0||z.unMute()},isMuted:function(){return this.player?this.player.isMuted():!1},setVolume:function(z){var V;(V=this.player)===null||V===void 0||V.setVolume(z)},getVolume:function(){return this.player?this.player.getVolume():0},getPlaybackRate:function(){return this.player?this.player.getPlaybackRate():0},setPlaybackRate:function(z){var V;(V=this.player)===null||V===void 0||V.setPlaybackRate(z)},getAvailablePlaybackRates:function(){return this.player?this.player.getAvailablePlaybackRates():[]},setLoop:function(z){var V;(V=this.player)===null||V===void 0||V.setLoop(z)},setShuffle:function(z){var V;(V=this.player)===null||V===void 0||V.setShuffle(z)},getVideoLoadedFraction:function(){return this.player?this.player.getVideoLoadedFraction():0},getPlayerState:function(){return this.player?this.player.getPlayerState():H.UNSTARTED},getCurrentTime:function(){return this.player?this.player.getCurrentTime():0},getPlaybackQuality:function(){return this.player?this.player.getPlaybackQuality():"default"},setPlaybackQuality:function(z){var V;(V=this.player)===null||V===void 0||V.setPlaybackQuality(z)},getAvailableQualityLevels:function(){return this.player?this.player.getAvailableQualityLevels():[]},getDuration:function(){return this.player?this.player.getDuration():0},getVideoUrl:function(){return this.player?this.player.getVideoUrl():""},getVideoEmbedCode:function(){return this.player?this.player.getVideoEmbedCode():""},getPlaylist:function(){return this.player?this.player.getPlaylist():[]},getPlaylistIndex:function(){return this.player?this.player.getPlaylistIndex():0}},watch:{width:function(){var z;(z=this.player)===null||z===void 0||z.setSize(+this.width,+this.height)},height:function(){var z;(z=this.player)===null||z===void 0||z.setSize(+this.width,+this.height)},src:function(){this.initiated&&this.player&&this.player.loadVideoById(this.id)}},beforeUnmount:function(){var z;(z=this.player)===null||z===void 0||z.destroy()}}),u=h;u.render=t;var C=u;s.default=C},fc6a:function(e,s,i){var n=i("44ad"),f=i("1d80");e.exports=function(o){return n(f(o))}},fdbc:function(e,s){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,s,i){var n=i("4930");e.exports=n&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},fea9:function(e,s,i){var n=i("da84");e.exports=n.Promise}}).default})})(DY);const $Y=BY(Y3),IY=d8({components:{YouTube:$Y},props:{item:Object},async mounted(){const c=D1(),a=await f1(`https://api.themoviedb.org/3/movie/${this.item.id}/videos?api_key=${c.public.apiKey}&language=fr-FR`,"$UsSLG1epa5");this.trailer=null,a.data.value.results.length>0&&a.data.value.results[0].site==="YouTube"&&(this.trailer=a.data.value.results[0])},data(){return{isModalVisible:!1,selectedItem:!1,trailer:{}}},methods:{onReady(){this.$refs.youtube.playVideo()},showModal(c){this.selectedItem=c,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}},computed:{varsPlayer(){return{autoplay:1,mute:1,controls:0,rel:0,loop:1,modestbranding:1,iv_load_policy:3,fullscreen:1,playinline:0,frameborder:0,playlist:this.trailer.key,enablejsapi:1,origin:window.location.host}},hScreen(){return window.innerHeight},wScreen(){return window.innerWidth}}}),UY={class:"w-full m-auto relative mt-16"},qY=["src","alt"],GY=P("div",{class:"absolute bottom-0 top-0 left-0 right-0 z-30 bg-gradient-to-t from-black overlay"},null,-1),jY={class:"absolute top-0 right-0 left-0 z-4 mt-56"},WY={class:"mt-6 m-auto container"},ZY={class:"desc-box absolute z-50 flex flex-col justify-start bg-teal-900/30 rounded-lg p-4 drop-shadow-xl w-2/6"},KY={class:"title text-4xl text-white font-bold mb-4"},_Y=P("div",{class:"title text-4xl text-white font-bold mb-4"},null,-1),YY={class:"desc text-white mb-4"},XY={class:"flex items-center content-center"};function QY(c,a,r,e,s,i){const n=rn,f=A3("YouTube"),o=A3("font-awesome-icon");return F(),D("div",UY,[c.selectedItem?C8((F(),r1(n,{key:0,onClose:c.closeModal,movie:c.selectedItem},null,8,["onClose","movie"])),[[L8,c.isModalVisible]]):s1("",!0),c.trailer!=null&&c.trailer.key?(F(),r1(f,{key:1,host:"https://www.youtube.com",height:c.hScreen,width:c.wScreen,src:c.trailer.key,vars:c.varsPlayer,onReady:c.onReady,ref:"youtube",class:"-mt-44"},null,8,["height","width","src","vars","onReady"])):(F(),D("img",{key:2,class:"w-full object-cover h-screen",src:`https://image.tmdb.org/t/p/original/${c.item.backdrop_path}`,alt:c.item.title},null,8,qY)),GY,P("div",jY,[P("div",WY,[P("div",ZY,[P("div",KY,M1(c.item.title),1),_Y,P("div",YY,M1(c.item.overview),1),P("div",null,[P("button",{class:"button flex align-middle items-center justify-center w-full px-6 mt-2 text-center rounded-xl border-2 border-white py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-900/50 active:bg-red-700/5",onClick:a[0]||(a[0]=l=>c.showModal(c.item))},[P("p",XY,[Y(o,{class:"px-2 text-xl text-white",icon:["fas","circle-info"]}),Ln(" Plus d'infos ")])])])])])])])}const JY=z1(IY,[["render",QY]]),cX={props:{movies:Array,loading:Boolean,error:Object},methods:{showModal(c){this.selectedItem=c,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}},aX={class:"relative"};function eX(c,a,r,e,s,i){const n=JY,f=b8,o=N8;return F(),D("section",aX,[Y(o,{modules:["SwiperEffectCreative"in c?c.SwiperEffectCreative:j(g8),"SwiperAutoplay"in c?c.SwiperAutoplay:j(gn),"SwiperNavigation"in c?c.SwiperNavigation:j(x8)],"slides-per-view":1,loop:!0,slidesPerGroup:1,pagination:!0,autoplay:{delay:15e3,disableOnInteraction:!0}},{default:J1(()=>[(F(!0),D(_1,null,R2(r.movies,(l,t)=>(F(),r1(f,{class:"w-full",key:l.id,id:t},{default:J1(()=>[Y(n,{item:l},null,8,["item"])]),_:2},1032,["id"]))),128))]),_:1},8,["modules"])])}const rX=z1(cX,[["render",eX]]);const iX={data(){return{items:[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},{id:5,name:"Item 5"},{id:6,name:"Item 6"}]}},props:{rounded:Boolean}},sn=c=>(xn("data-v-5cbc8543"),c=c(),bn(),c),sX={key:0,class:"content flex justify-between opacity-60 animate-pulse"},nX={class:"bg-gray-800 card w-full h-full aspect-square mx-2 shadow-lg p-2 animate-pulse flex justify-center items-center"},fX=sn(()=>P("div",{class:"w-6 h-6 border-t-4 border-teal-900 rounded-full animate-spin"},null,-1)),oX=[fX],lX={key:1,class:"content flex justify-between opacity-60 animate-pulse"},tX={class:"bg-gray-800 profile-pic rounded-full w-full h-full aspect-square mx-6 shadow-lg animate-pulse flex justify-center items-center"},mX=sn(()=>P("div",{class:"w-6 h-6 border-t-4 border-teal-900 rounded-full animate-spin"},null,-1)),vX=[mX];function zX(c,a,r,e,s,i){return F(),D(_1,null,[r.rounded?s1("",!0):(F(),D("div",sX,[(F(!0),D(_1,null,R2(s.items,n=>(F(),D("div",nX,oX))),256))])),r.rounded?(F(),D("div",lX,[(F(!0),D(_1,null,R2(s.items,n=>(F(),D("div",tX,vX))),256))])):s1("",!0)],64)}const hX=z1(iX,[["render",zX],["__scopeId","data-v-5cbc8543"]]);const HX={props:{categoryName:String,movies:Object,loading:Boolean,error:Object,poster:Boolean,profilPicture:Boolean,classCard:String},data(){return{slideActive:!1,isModalVisible:!1,selectedItem:null}},methods:{clickNext(){if(this.$refs.next){this.slideActive=!0;const c=this.$refs.prev;c.style.display=this.slideActive?"flex":"none"}},showModal(c){this.selectedItem=c,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}},uX={class:"text-white"},pX={class:"mx-auto"},VX={class:"categories text-2xl font-bold mx-4 py-2"},MX={key:0},dX={key:1},CX={key:2},LX=["onClick"],gX=["src","alt"],xX={key:1,class:"group profile-picture mx-6 relative rounded-full overflow-hidden"},bX={class:"img-container relative"},NX=["src","alt"],yX={class:"opacity-0 group-hover:opacity-70 transition-opacity flex justify-center absolute left-0 right-0 pb-10 pt-2 bg-black bottom-0"},SX={class:"text-ellipsis overflow-hidden text-center"},wX={class:"swiper-button-prev bg-opacity-60 h-full top-0 bottom-0 left-0",ref:"prev"};function AX(c,a,r,e,s,i){const n=rn,f=hX,o=b8,l=N8;return F(),D("section",uX,[s.selectedItem?C8((F(),r1(n,{key:0,onClose:i.closeModal,movie:s.selectedItem},null,8,["onClose","movie"])),[[L8,s.isModalVisible]]):s1("",!0),P("div",pX,[P("h2",VX,M1(r.categoryName),1),r.loading?(F(),D("div",MX,[Y(f,{rounded:r.profilPicture},null,8,["rounded"])])):r.error?(F(),D("div",dX,M1(r.error.message),1)):(F(),D("div",CX,[Y(l,{modules:["SwiperEffectCreative"in c?c.SwiperEffectCreative:j(g8),"SwiperNavigation"in c?c.SwiperNavigation:j(x8)],"slides-per-view":3,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerGroup:1,breakpoints:{480:{slidesPerView:3,slidesPerGroup:2},768:{slidesPerView:5,slidesPerGroup:4},1024:{slidesPerView:5,slidesPerGroup:4},1201:{slidesPerView:6,slidesPerGroup:5}},class:"slide-container flex flex-row transition-transform duration-300 overflow-x-visible",id:"swipper"},{default:J1(()=>[(F(!0),D(_1,null,R2(r.movies.results,(t,m)=>(F(),r1(o,{class:Nn(["slide h-max card mx-1 flex flex-col justify-center hover:cursor-pointer",r.classCard]),key:t.id,id:m},{default:J1(()=>[r.poster&&t.overview?(F(),D("div",{key:0,onClick:v=>i.showModal(t),class:"poster"},[P("img",{class:"w-fit shadow-md object-cover movie-poster",src:`https://image.tmdb.org/t/p/w400${t.poster_path}`,alt:`${t.title}`},null,8,gX)],8,LX)):s1("",!0),r.profilPicture&&t.profile_path?(F(),D("figure",xX,[P("div",bX,[P("img",{class:"w-fit shadow-md object-cover actor-poster aspect-square",src:`https://image.tmdb.org/t/p/w400${t.profile_path}`,alt:`${t.title}`},null,8,NX)]),P("figcaption",yX,[P("p",SX,M1(t.name),1)])])):s1("",!0)]),_:2},1032,["class","id"]))),128)),P("button",{class:"swiper-button-next bg-opacity-60 h-fulltop-0 bottom-0 right-0",ref:"next",onClick:a[0]||(a[0]=(...t)=>i.clickNext&&i.clickNext(...t))},null,512),P("button",wX,null,512)]),_:1},8,["modules","navigation"])]))])])}const kX=z1(HX,[["render",AX],["__scopeId","data-v-b8f6de5f"]]),PX={},TX={class:"bg-black text-white flex justify-center"},FX=P("h3",null,"Mon footer",-1),RX=[FX];function BX(c,a){return F(),D("div",TX,RX)}const EX=z1(PX,[["render",BX]]),DX={data(){return{hero:{data:[],error:null,loading:!0},trendMovie:{data:null,error:null,loading:!0},trendSerie:{data:null,error:null,loading:!0},trendCelebrity:{data:null,error:null,loading:!0},aventure:{data:null,error:null,loading:!0},horror:{data:null,error:null,loading:!0},anime:{data:null,error:null,loading:!0},comedie:{data:null,error:null,loading:!0}}},computed:{async randomMovies(){const c=D1();for(;this.hero.data.length<5;){let a=Math.round(Math.random()*499)+1;const{data:r,error:e,pending:s}=await f1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&include_video=true&page=${a}&include_video=true&include_adult=false`,"$9HdNoigZVa");this.hero.data=this.hero.data.concat(r.value.results.filter(i=>i.backdrop_path&&i.overview)),this.hero.data=this.hero.data.slice(0,5),this.hero.data=Array.from(new Set(this.hero.data)),this.hero.error=e,this.hero.loading=s}}},async mounted(){const c=D1();this.randomMovies;const{data:a,error:r,pending:e}=await f1(`https://api.themoviedb.org/3/trending/movie/day?api_key=${c.public.apiKey}&language=fr-FR`,"$SPC3DsYQm5");this.trendMovie.data=a,this.trendMovie.error=r,this.trendMovie.loading=e;const{data:s,error:i,pending:n}=await f1(`https://api.themoviedb.org/3/trending/tv/day?api_key=${c.public.apiKey}&language=fr-FR`,"$qcey1wh1uB");this.trendSerie.data=s,this.trendSerie.error=i,this.trendSerie.loading=n;const{data:f,error:o,pending:l}=await f1(`https://api.themoviedb.org/3/trending/person/day?api_key=${c.public.apiKey}&language=fr-FR`,"$Q9Rpnu1ilG");this.trendCelebrity.data=f,this.trendCelebrity.error=o,this.trendCelebrity.loading=l;const{data:t,error:m,pending:v}=await f1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&with_genres=27`,"$t0gtXewoKu");this.horror.data=t,this.horror.error=m,this.horror.loading=v;const{data:H,error:h,pending:u}=await f1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&with_genres=12`,"$EgOtDIRplU");this.aventure.data=H,this.aventure.error=h,this.aventure.loading=u;const{data:C,error:p,pending:z}=await f1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&with_genres=16`,"$5mNqztdQDT");this.anime.data=C,this.anime.error=p,this.anime.loading=z;const{data:V,error:M,pending:d}=await f1(`https://api.themoviedb.org/3/discover/tv?api_key=${c.public.apiKey}&language=fr-FR&with_genres=35&sort_by=popularity.desc&screened_theatrically=true`,"$Xj5Sd1ikeQ");this.comedie.data=V,this.comedie.error=M,this.comedie.loading=d}},OX={class:"relative"},$X={class:"hero"},IX={class:"all-section mt-[80vh] absolute left-0 right-0 top-0"},UX={class:"absolute top-0 right-0 left-0 z-50"},qX={class:"bg bg-gradient-to-t from-teal-900 to-black"};function GX(c,a,r,e,s,i){const n=rX,f=kX,o=EX;return F(),D("div",OX,[P("div",$X,[s.hero.data&&s.hero.data.length===5?(F(),r1(n,{key:0,movies:s.hero.data},null,8,["movies"])):s1("",!0)]),P("div",IX,[P("div",UX,[Y(f,{movies:s.trendMovie.data,error:s.trendMovie.error,loading:s.trendMovie.loading,poster:"","category-name":"Les tendances - Films"},null,8,["movies","error","loading"]),P("div",qX,[Y(f,{movies:s.trendSerie.data,error:s.trendSerie.error,loading:s.trendSerie.loading,poster:"","category-name":"Les tendances - Séries"},null,8,["movies","error","loading"]),Y(f,{movies:s.trendCelebrity.data,error:s.trendCelebrity.error,loading:s.trendCelebrity.loading,"profil-picture":"","class-card":"mx-6 w-max aspect-auto","category-name":"Vos célébrités préférées"},null,8,["movies","error","loading"]),Y(f,{movies:s.aventure.data,error:s.aventure.error,loading:s.aventure.loading,poster:"","category-name":"Aventure"},null,8,["movies","error","loading"]),Y(f,{movies:s.horror.data,error:s.horror.error,loading:s.horror.loading,poster:"","category-name":"Horreur"},null,8,["movies","error","loading"]),Y(f,{movies:s.anime.data,error:s.anime.error,loading:s.anime.loading,poster:"","category-name":"Animation"},null,8,["movies","error","loading"]),Y(f,{movies:s.comedie.data,error:s.comedie.error,loading:s.comedie.loading,poster:"","category-name":"Série comique"},null,8,["movies","error","loading"]),Y(o)])])])])}const jX=z1(DX,[["render",GX]]);const WX={},ZX={class:"relative"};function KX(c,a){const r=MY,e=jX;return F(),D("div",ZX,[Y(r,{class:"fixed top-0 left-0 right-0"}),Y(e)])}const _X=z1(WX,[["render",KX]]),v8={__name:"nuxt-root",setup(c){const a=An(()=>Y8(()=>import("./error-component.aa2139b1.js"),["./error-component.aa2139b1.js","./swiper-vue.8516a05a.js","./swiper-vue.b3c86702.css"],import.meta.url).then(f=>f.default||f)),r=()=>null,e=J(),s=e.deferHydration();yn("_route",So()),e.hooks.callHookWith(f=>f.map(o=>o()),"vue:setup");const i=c4();Sn((f,o,l)=>{e.hooks.callHook("vue:error",f,o,l).catch(t=>console.error("[nuxt] Error in `vue:error` hook",t)),bo(f)&&(f.fatal||f.unhandled)&&F1(e,go,[f])});const{islandContext:n}=!1;return(f,o)=>(F(),r1(wn,{onResolve:j(s)},{default:J1(()=>[j(i)?(F(),r1(j(a),{key:0,error:j(i)},null,8,["error"])):j(n)?(F(),r1(j(r),{key:1,context:j(n)},null,8,["context"])):(F(),r1(j(_X),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=uf.create({baseURL:Vf()}));let z8;const YX=Pf(zY);z8=async function(){var s;const r=Boolean((s=window.__NUXT__)==null?void 0:s.serverRendered)?kn(v8):Pn(v8),e=wf({vueApp:r});try{await kf(e,YX)}catch(i){await e.callHook("app:error",i),e.payload.error=e.payload.error||i}try{await e.hooks.callHook("app:created",r),await e.hooks.callHook("app:beforeMount",r),r.mount("#"+uo),await e.hooks.callHook("app:mounted",r),await H8()}catch(i){await e.callHook("app:error",i),e.payload.error=e.payload.error||i}},z8().catch(c=>{console.error("Error while mounting app:",c)});export{Y8 as _,_8 as a,S8 as b,z1 as c,j2 as h,Ao as n,f2 as p,J as u};