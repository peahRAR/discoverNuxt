import{r as Q1,g as n2,i as h8,n as H8,a as K1,w as un,b as X3,o as pn,c as Vn,d as dn,u as Y,e as u8,v as p8,t as V8,h as d8,f as Mn,j as Cn,k as b6,l as b1,m as M8,p as k,q as B,s as A,F as D1,x as J1,y as t1,z as A3,A as Z,B as r1,C as C8,D as L8,E as Ln,G as g8,H as gn,I as xn,J as x8,K as b8,L as X,M as c2,S as N8,N as y8,O as bn,P as Nn,Q as yn,R as Sn,T as wn,U as An,V as kn,W as Pn}from"./swiper-vue.9633145e.js";const Tn=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Fn=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Rn=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Bn(c,a){if(c!=="__proto__"&&!(c==="constructor"&&a&&typeof a=="object"&&"prototype"in a))return a}function En(c,a={}){if(typeof c!="string")return c;const r=c.toLowerCase().trim();if(r==="true")return!0;if(r==="false")return!1;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r!=="undefined"){if(!Rn.test(c)){if(a.strict)throw new SyntaxError("Invalid JSON");return c}try{return Tn.test(c)||Fn.test(c)?JSON.parse(c,Bn):JSON.parse(c)}catch(e){if(a.strict)throw e;return c}}}const Dn=/#/g,On=/&/g,$n=/=/g,S8=/\+/g,In=/%5e/gi,Un=/%60/gi,qn=/%7c/gi,Gn=/%20/gi;function jn(c){return encodeURI(""+c).replace(qn,"|")}function k3(c){return jn(typeof c=="string"?c:JSON.stringify(c)).replace(S8,"%2B").replace(Gn,"+").replace(Dn,"%23").replace(On,"%26").replace(Un,"`").replace(In,"^")}function V3(c){return k3(c).replace($n,"%3D")}function B2(c=""){try{return decodeURIComponent(""+c)}catch{return""+c}}function Wn(c){return B2(c.replace(S8," "))}function w8(c=""){const a={};c[0]==="?"&&(c=c.slice(1));for(const r of c.split("&")){const e=r.match(/([^=]+)=?(.*)/)||[];if(e.length<2)continue;const s=B2(e[1]);if(s==="__proto__"||s==="constructor")continue;const i=Wn(e[2]||"");typeof a[s]<"u"?Array.isArray(a[s])?a[s].push(i):a[s]=[a[s],i]:a[s]=i}return a}function Zn(c,a){return(typeof a=="number"||typeof a=="boolean")&&(a=String(a)),a?Array.isArray(a)?a.map(r=>`${V3(c)}=${k3(r)}`).join("&"):`${V3(c)}=${k3(a)}`:V3(c)}function A8(c){return Object.keys(c).filter(a=>c[a]!==void 0).map(a=>Zn(a,c[a])).join("&")}const _n=/^\w{2,}:([/\\]{1,2})/,Kn=/^\w{2,}:([/\\]{2})?/,Yn=/^([/\\]\s*){2,}[^/\\]/;function j2(c,a={}){return typeof a=="boolean"&&(a={acceptRelative:a}),a.strict?_n.test(c):Kn.test(c)||(a.acceptRelative?Yn.test(c):!1)}const Xn=/\/$|\/\?/;function P3(c="",a=!1){return a?Xn.test(c):c.endsWith("/")}function k8(c="",a=!1){if(!a)return(P3(c)?c.slice(0,-1):c)||"/";if(!P3(c,!0))return c||"/";const[r,...e]=c.split("?");return(r.slice(0,-1)||"/")+(e.length>0?`?${e.join("?")}`:"")}function T3(c="",a=!1){if(!a)return c.endsWith("/")?c:c+"/";if(P3(c,!0))return c||"/";const[r,...e]=c.split("?");return r+"/"+(e.length>0?`?${e.join("?")}`:"")}function P8(c=""){return c.startsWith("/")}function Qn(c=""){return(P8(c)?c.slice(1):c)||"/"}function N6(c=""){return P8(c)?c:"/"+c}function Jn(c,a){if(T8(a)||j2(c))return c;const r=k8(a);return c.startsWith(r)?c:o2(r,c)}function co(c,a){if(T8(a))return c;const r=k8(a);if(!c.startsWith(r))return c;const e=c.slice(r.length);return e[0]==="/"?e:"/"+e}function ao(c,a){const r=f2(c),e={...w8(r.search),...a};return r.search=A8(e),F8(r)}function T8(c){return!c||c==="/"}function eo(c){return c&&c!=="/"}function o2(c,...a){let r=c||"";for(const e of a.filter(s=>eo(s)))r=r?T3(r)+Qn(e):e;return r}function ro(c,a,r={}){return r.trailingSlash||(c=T3(c),a=T3(a)),r.leadingSlash||(c=N6(c),a=N6(a)),r.encoding||(c=B2(c),a=B2(a)),c===a}function f2(c="",a){if(!j2(c,{acceptRelative:!0}))return a?f2(a+c):y6(c);const[r="",e,s=""]=(c.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[i="",n=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:o,search:f,hash:l}=y6(n.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:r,auth:e?e.slice(0,Math.max(0,e.length-1)):"",host:i,pathname:o,search:f,hash:l}}function y6(c=""){const[a="",r="",e=""]=(c.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:a,search:r,hash:e}}function F8(c){const a=c.pathname+(c.search?(c.search.startsWith("?")?"":"?")+c.search:"")+c.hash;return c.protocol?c.protocol+"//"+(c.auth?c.auth+"@":"")+c.host+a:a}class io extends Error{constructor(){super(...arguments),this.name="FetchError"}}function so(c,a,r){let e="";a&&(e=a.message),c&&r?e=`${e} (${r.status} ${r.statusText} (${c.toString()}))`:c&&(e=`${e} (${c.toString()})`);const s=new io(e);return Object.defineProperty(s,"request",{get(){return c}}),Object.defineProperty(s,"response",{get(){return r}}),Object.defineProperty(s,"data",{get(){return r&&r._data}}),Object.defineProperty(s,"status",{get(){return r&&r.status}}),Object.defineProperty(s,"statusText",{get(){return r&&r.statusText}}),Object.defineProperty(s,"statusCode",{get(){return r&&r.status}}),Object.defineProperty(s,"statusMessage",{get(){return r&&r.statusText}}),s}const no=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function S6(c="GET"){return no.has(c.toUpperCase())}function oo(c){if(c===void 0)return!1;const a=typeof c;return a==="string"||a==="number"||a==="boolean"||a===null?!0:a!=="object"?!1:Array.isArray(c)?!0:c.constructor&&c.constructor.name==="Object"||typeof c.toJSON=="function"}const fo=new Set(["image/svg","application/xml","application/xhtml","application/html"]),lo=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function to(c=""){if(!c)return"json";const a=c.split(";").shift()||"";return lo.test(a)?"json":fo.has(a)||a.startsWith("text/")?"text":"blob"}const mo=new Set([408,409,425,429,500,502,503,504]);function R8(c){const{fetch:a,Headers:r}=c;function e(n){const o=n.error&&n.error.name==="AbortError"||!1;if(n.options.retry!==!1&&!o){let l;typeof n.options.retry=="number"?l=n.options.retry:l=S6(n.options.method)?0:1;const t=n.response&&n.response.status||500;if(l>0&&mo.has(t))return s(n.request,{...n.options,retry:l-1})}const f=so(n.request,n.error,n.response);throw Error.captureStackTrace&&Error.captureStackTrace(f,s),f}const s=async function(o,f={}){const l={request:o,options:{...c.defaults,...f},response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=Jn(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=ao(l.request,{...l.options.params,...l.options.query})),l.options.body&&S6(l.options.method)&&oo(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new r(l.options.headers),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json"))),l.response=await a(l.request,l.options).catch(async m=>(l.error=m,l.options.onRequestError&&await l.options.onRequestError(l),e(l)));const t=(l.options.parseResponse?"json":l.options.responseType)||to(l.response.headers.get("content-type")||"");if(t==="json"){const m=await l.response.text(),v=l.options.parseResponse||En;l.response._data=v(m)}else t==="stream"?l.response._data=l.response.body:l.response._data=await l.response[t]();return l.options.onResponse&&await l.options.onResponse(l),l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),e(l)):l.response},i=function(o,f){return s(o,f).then(l=>l._data)};return i.raw=s,i.native=a,i.create=(n={})=>R8({...c,defaults:{...c.defaults,...n}}),i}const B8=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),vo=B8.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),zo=B8.Headers,ho=R8({fetch:vo,Headers:zo}),Ho=ho,uo=()=>{var c;return((c=window==null?void 0:window.__NUXT__)==null?void 0:c.config)||{}},E2=uo().app,po=()=>E2.baseURL,Vo=()=>E2.buildAssetsDir,Mo=(...c)=>o2(E8(),Vo(),...c),E8=(...c)=>{const a=E2.cdnURL||E2.baseURL;return c.length?o2(a,...c):a};globalThis.__buildAssetsURL=Mo,globalThis.__publicAssetsURL=E8;function F3(c,a={},r){for(const e in c){const s=c[e],i=r?`${r}:${e}`:e;typeof s=="object"&&s!==null?F3(s,a,i):typeof s=="function"&&(a[i]=s)}return a}const Co={run:c=>c()},Lo=()=>Co,D8=typeof console.createTask<"u"?console.createTask:Lo;function go(c,a){const r=a.shift(),e=D8(r);return c.reduce((s,i)=>s.then(()=>e.run(()=>i(...a))),Promise.resolve())}function xo(c,a){const r=a.shift(),e=D8(r);return Promise.all(c.map(s=>e.run(()=>s(...a))))}function d3(c,a){for(const r of[...c])r(a)}class bo{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(a,r,e={}){if(!a||typeof r!="function")return()=>{};const s=a;let i;for(;this._deprecatedHooks[a];)i=this._deprecatedHooks[a],a=i.to;if(i&&!e.allowDeprecated){let n=i.message;n||(n=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(n)||(console.warn(n),this._deprecatedMessages.add(n))}if(!r.name)try{Object.defineProperty(r,"name",{get:()=>"_"+a.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[a]=this._hooks[a]||[],this._hooks[a].push(r),()=>{r&&(this.removeHook(a,r),r=void 0)}}hookOnce(a,r){let e,s=(...i)=>(typeof e=="function"&&e(),e=void 0,s=void 0,r(...i));return e=this.hook(a,s),e}removeHook(a,r){if(this._hooks[a]){const e=this._hooks[a].indexOf(r);e!==-1&&this._hooks[a].splice(e,1),this._hooks[a].length===0&&delete this._hooks[a]}}deprecateHook(a,r){this._deprecatedHooks[a]=typeof r=="string"?{to:r}:r;const e=this._hooks[a]||[];delete this._hooks[a];for(const s of e)this.hook(a,s)}deprecateHooks(a){Object.assign(this._deprecatedHooks,a);for(const r in a)this.deprecateHook(r,a[r])}addHooks(a){const r=F3(a),e=Object.keys(r).map(s=>this.hook(s,r[s]));return()=>{for(const s of e.splice(0,e.length))s()}}removeHooks(a){const r=F3(a);for(const e in r)this.removeHook(e,r[e])}removeAllHooks(){for(const a in this._hooks)delete this._hooks[a]}callHook(a,...r){return r.unshift(a),this.callHookWith(go,a,...r)}callHookParallel(a,...r){return r.unshift(a),this.callHookWith(xo,a,...r)}callHookWith(a,r,...e){const s=this._before||this._after?{name:r,args:e,context:{}}:void 0;this._before&&d3(this._before,s);const i=a(r in this._hooks?[...this._hooks[r]]:[],e);return i instanceof Promise?i.finally(()=>{this._after&&s&&d3(this._after,s)}):(this._after&&s&&d3(this._after,s),i)}beforeEach(a){return this._before=this._before||[],this._before.push(a),()=>{if(this._before!==void 0){const r=this._before.indexOf(a);r!==-1&&this._before.splice(r,1)}}}afterEach(a){return this._after=this._after||[],this._after.push(a),()=>{if(this._after!==void 0){const r=this._after.indexOf(a);r!==-1&&this._after.splice(r,1)}}}}function O8(){return new bo}function No(c={}){let a,r=!1;const e=n=>{if(a&&a!==n)throw new Error("Context conflict")};let s;if(c.asyncContext){const n=c.AsyncLocalStorage||globalThis.AsyncLocalStorage;n?s=new n:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&a===void 0){const n=s.getStore();if(n!==void 0)return n}return a};return{use:()=>{const n=i();if(n===void 0)throw new Error("Context is not available");return n},tryUse:()=>i(),set:(n,o)=>{o||e(n),a=n,r=!0},unset:()=>{a=void 0,r=!1},call:(n,o)=>{e(n),a=n;try{return s?s.run(n,o):o()}finally{r||(a=void 0)}},async callAsync(n,o){a=n;const f=()=>{a=n},l=()=>a===n?f:void 0;k6.add(l);try{const t=s?s.run(n,o):o();return r||(a=void 0),await t}finally{k6.delete(l)}}}}function yo(c={}){const a={};return{get(r,e={}){return a[r]||(a[r]=No({...c,...e})),a[r],a[r]}}}const D2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},w6="__unctx__",So=D2[w6]||(D2[w6]=yo()),wo=(c,a={})=>So.get(c,a),A6="__unctx_async_handlers__",k6=D2[A6]||(D2[A6]=new Set),$8=wo("nuxt-app"),Ao="__nuxt_plugin";function ko(c){let a=0;const r={provide:void 0,globalName:"nuxt",payload:Q1({data:{},state:{},_errors:{},...window.__NUXT__}),static:{data:{}},isHydrating:!0,deferHydration(){if(!r.isHydrating)return()=>{};a++;let i=!1;return()=>{if(!i&&(i=!0,a--,a===0))return r.isHydrating=!1,r.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},...c};r.hooks=O8(),r.hook=r.hooks.hook,r.callHook=r.hooks.callHook,r.provide=(i,n)=>{const o="$"+i;g2(r,o,n),g2(r.vueApp.config.globalProperties,o,n)},g2(r.vueApp,"$nuxt",r),g2(r.vueApp.config.globalProperties,"$nuxt",r),window.addEventListener("nuxt.preloadError",i=>{r.callHook("app:chunkError",{error:i.payload})}),r.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});const e=Q1(r.payload.config),s=new Proxy(e,{get(i,n){return n==="public"?i.public:i[n]??i.public[n]},set(i,n,o){return n==="public"||n==="app"?!1:(i[n]=o,i.public[n]=o,!0)}});return r.provide("config",s),r}async function Po(c,a){if(typeof a!="function")return;const{provide:r}=await R1(c,a,[c])||{};if(r&&typeof r=="object")for(const e in r)c.provide(e,r[e])}async function To(c,a){for(const r of a)await Po(c,r)}function Fo(c){return c.map(r=>typeof r!="function"?null:r.length>1?e=>r(e,e.provide):r).filter(Boolean)}function l2(c){return c[Ao]=!0,c}function R1(c,a,r){const e=()=>r?a(...r):a();return $8.set(c),e()}function c1(){const c=$8.tryUse();if(!c){const a=n2();if(!a)throw new Error("nuxt instance unavailable");return a.appContext.app.$nuxt}return c}function S1(){return c1().$config}function g2(c,a,r){Object.defineProperty(c,a,{get:()=>r})}const M3={},Ro=l2(c=>{for(const a in M3)c.vueApp.component(a,M3[a]),c.vueApp.component("Lazy"+a,M3[a])});function Bo(c){return Array.isArray(c)?c:[c]}const I8=["title","script","style","noscript"],Q3=["base","meta","link","style","script","noscript"],Eo=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Do=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Oo=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function U8(c){let a=9;for(let r=0;r<c.length;)a=Math.imul(a^c.charCodeAt(r++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function O2(c){return U8(`${c.tag}:${c.textContent||c.innerHTML||""}:${Object.entries(c.props).map(([a,r])=>`${a}:${String(r)}`).join(",")}`)}function $o(c){let a=9;for(const r of c)for(let e=0;e<r.length;)a=Math.imul(a^r.charCodeAt(e++),9**9);return((a^a>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function q8(c,a){const{props:r,tag:e}=c;if(Do.includes(e))return e;if(e==="link"&&r.rel==="canonical")return"canonical";if(r.charset)return"charset";const s=["id"];e==="meta"&&s.push("name","property","http-equiv");for(const i of s)if(typeof r[i]<"u"){const n=String(r[i]);return a&&!a(n)?!1:`${e}:${i}:${n}`}return!1}const P6=(c,a)=>c==null?a||null:typeof c=="function"?c(a):c,x2=(c,a=!1,r)=>{const{tag:e,$el:s}=c;s&&(Object.entries(e.props).forEach(([i,n])=>{n=String(n);const o=`attr:${i}`;if(i==="class"){if(!n)return;for(const f of n.split(" ")){const l=`${o}:${f}`;r&&r(c,l,()=>s.classList.remove(f)),s.classList.contains(f)||s.classList.add(f)}return}r&&!i.startsWith("data-h-")&&r(c,o,()=>s.removeAttribute(i)),(a||s.getAttribute(i)!==n)&&s.setAttribute(i,n)}),I8.includes(e.tag)&&(e.textContent&&e.textContent!==s.textContent?s.textContent=e.textContent:e.innerHTML&&e.innerHTML!==s.innerHTML&&(s.innerHTML=e.innerHTML)))};let Z1=!1;async function G8(c,a={}){var v,H;const r={shouldRender:!0};if(await c.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const e=a.document||c.resolvedOptions.document||window.document,s=(await c.resolveTags()).map(o);if(c.resolvedOptions.experimentalHashHydration&&(Z1=Z1||c._hash||!1,Z1)){const h=$o(s.map(u=>u.tag._h));if(Z1===h)return;Z1=h}const i=c._popSideEffectQueue();c.headEntries().map(h=>h._sde).forEach(h=>{Object.entries(h).forEach(([u,C])=>{i[u]=C})});const n=(h,u,C)=>{u=`${h.renderId}:${u}`,h.entry&&(h.entry._sde[u]=C),delete i[u]};function o(h){const u=c.headEntries().find(p=>p._i===h._e),C={renderId:h._d||O2(h),$el:null,shouldRender:!0,tag:h,entry:u,markSideEffect:(p,z)=>n(C,p,z)};return C}const f=[],l={body:[],head:[]},t=h=>{c._elMap[h.renderId]=h.$el,f.push(h),n(h,"el",()=>{var u;(u=h.$el)==null||u.remove(),delete c._elMap[h.renderId]})};for(const h of s){if(await c.hooks.callHook("dom:beforeRenderTag",h),!h.shouldRender)continue;const{tag:u}=h;if(u.tag==="title"){e.title=u.textContent||"",f.push(h);continue}if(u.tag==="htmlAttrs"||u.tag==="bodyAttrs"){h.$el=e[u.tag==="htmlAttrs"?"documentElement":"body"],x2(h,!1,n),f.push(h);continue}if(h.$el=c._elMap[h.renderId],!h.$el&&u.key&&(h.$el=e.querySelector(`${(v=u.tagPosition)!=null&&v.startsWith("body")?"body":"head"} > ${u.tag}[data-h-${u._h}]`)),h.$el){h.tag._d&&x2(h),t(h);continue}l[(H=u.tagPosition)!=null&&H.startsWith("body")?"body":"head"].push(h)}const m={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([h,u])=>{var p;if(!u.length)return;const C=(p=e==null?void 0:e[h])==null?void 0:p.children;if(C){for(const z of[...C].reverse()){const V=z.tagName.toLowerCase();if(!Q3.includes(V))continue;const d=z.getAttributeNames().reduce((L,N)=>({...L,[N]:z.getAttribute(N)}),{}),M={tag:V,props:d};z.innerHTML&&(M.innerHTML=z.innerHTML);const g=O2(M);let S=u.findIndex(L=>(L==null?void 0:L.renderId)===g);if(S===-1){const L=q8(M);S=u.findIndex(N=>(N==null?void 0:N.tag._d)&&N.tag._d===L)}if(S!==-1){const L=u[S];L.$el=z,x2(L),t(L),delete u[S]}}u.forEach(z=>{const V=z.tag.tagPosition||"head";m[V]=m[V]||e.createDocumentFragment(),z.$el||(z.$el=e.createElement(z.tag.tag),x2(z,!0)),m[V].appendChild(z.$el),t(z)})}}),m.head&&e.head.appendChild(m.head),m.bodyOpen&&e.body.insertBefore(m.bodyOpen,e.body.firstChild),m.bodyClose&&e.body.appendChild(m.bodyClose);for(const h of f)await c.hooks.callHook("dom:renderTag",h);Object.values(i).forEach(h=>h())}let C3=null;async function j8(c,a={}){function r(){return C3=null,G8(c,a)}const e=a.delayFn||(s=>setTimeout(s,10));return C3=C3||new Promise(s=>e(()=>s(r())))}const Io=c=>({hooks:{"entries:updated":function(a){if(typeof(c==null?void 0:c.document)>"u"&&typeof window>"u")return;let r=c==null?void 0:c.delayFn;!r&&typeof requestAnimationFrame<"u"&&(r=requestAnimationFrame),j8(a,{document:(c==null?void 0:c.document)||window.document,delayFn:r})}}});function Uo(c){var a;return((a=c==null?void 0:c.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:a.getAttribute("content"))||!1}const T6={critical:2,high:9,low:12,base:-1,title:1,meta:10};function F6(c){if(typeof c.tagPriority=="number")return c.tagPriority;if(c.tag==="meta"){if(c.props.charset)return-2;if(c.props["http-equiv"]==="content-security-policy")return 0}const a=c.tagPriority||c.tag;return a in T6?T6[a]:10}const qo=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Go(){return{hooks:{"tags:resolve":c=>{const a=r=>{var e;return(e=c.tags.find(s=>s._d===r))==null?void 0:e._p};for(const{prefix:r,offset:e}of qo)for(const s of c.tags.filter(i=>typeof i.tagPriority=="string"&&i.tagPriority.startsWith(r))){const i=a(s.tagPriority.replace(r,""));typeof i<"u"&&(s._p=i+e)}c.tags.sort((r,e)=>r._p-e._p).sort((r,e)=>F6(r)-F6(e))}}}}const jo=()=>({hooks:{"tags:resolve":c=>{const{tags:a}=c;let r=a.findIndex(s=>s.tag==="titleTemplate");const e=a.findIndex(s=>s.tag==="title");if(e!==-1&&r!==-1){const s=P6(a[r].textContent,a[e].textContent);s!==null?a[e].textContent=s||a[e].textContent:delete a[e]}else if(r!==-1){const s=P6(a[r].textContent);s!==null&&(a[r].textContent=s,a[r].tag="title",r=-1)}r!==-1&&delete a[r],c.tags=a.filter(Boolean)}}}),Wo=()=>({hooks:{"tag:normalise":function({tag:c}){typeof c.props.body<"u"&&(c.tagPosition="bodyClose",delete c.props.body)}}}),W8=typeof window<"u",Zo=()=>({hooks:{"tag:normalise":c=>{var i,n;const{tag:a,entry:r,resolvedOptions:e}=c;e.experimentalHashHydration===!0&&(a._h=O2(a));const s=typeof a.props._dynamic<"u";!Q3.includes(a.tag)||!a.key||W8||(n=(i=_8())==null?void 0:i.resolvedOptions)!=null&&n.document||(r._m==="server"||s)&&(a._h=a._h||O2(a),a.props[`data-h-${a._h}`]="")},"tags:resolve":c=>{c.tags=c.tags.map(a=>(delete a.props._dynamic,a))}}}),R6=["script","link","bodyAttrs"],_o=()=>{const c=(a,r)=>{const e={},s={};Object.entries(r.props).forEach(([n,o])=>{n.startsWith("on")&&typeof o=="function"?s[n]=o:e[n]=o});let i;return a==="dom"&&r.tag==="script"&&typeof e.src=="string"&&typeof s.onload<"u"&&(i=e.src,delete e.src),{props:e,eventHandlers:s,delayedSrc:i}};return{hooks:{"ssr:render":function(a){a.tags=a.tags.map(r=>(!R6.includes(r.tag)||!Object.entries(r.props).find(([e,s])=>e.startsWith("on")&&typeof s=="function")||(r.props=c("ssr",r).props),r))},"dom:beforeRenderTag":function(a){if(!R6.includes(a.tag.tag)||!Object.entries(a.tag.props).find(([i,n])=>i.startsWith("on")&&typeof n=="function"))return;const{props:r,eventHandlers:e,delayedSrc:s}=c("dom",a.tag);Object.keys(e).length&&(a.tag.props=r,a.tag._eventHandlers=e,a.tag._delayedSrc=s)},"dom:renderTag":function(a){const r=a.$el;if(!a.tag._eventHandlers||!r)return;const e=a.tag.tag==="bodyAttrs"&&typeof window<"u"?window:r;Object.entries(a.tag._eventHandlers).forEach(([s,i])=>{const n=`${a.tag._d||a.tag._p}:${s}`,o=s.slice(2).toLowerCase(),f=`data-h-${o}`;if(a.markSideEffect(n,()=>{}),r.hasAttribute(f))return;const l=i;r.setAttribute(f,""),e.addEventListener(o,l),a.entry&&(a.entry._sde[n]=()=>{e.removeEventListener(o,l),r.removeAttribute(f)})}),a.tag._delayedSrc&&r.setAttribute("src",a.tag._delayedSrc)}}}},Ko=["templateParams","htmlAttrs","bodyAttrs"],Yo=c=>{c=c||{};const a=c.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:r}){a.forEach(s=>{r.props[s]&&(r.key=r.props[s],delete r.props[s])});const e=r.key?`${r.tag}:${r.key}`:q8(r);e&&(r._d=e)},"tags:resolve":function(r){const e={};r.tags.forEach(i=>{const n=i._d||i._p,o=e[n];if(o){let f=i==null?void 0:i.tagDuplicateStrategy;if(!f&&Ko.includes(i.tag)&&(f="merge"),f==="merge"){const t=o.props;["class","style"].forEach(m=>{i.props[m]&&t[m]&&(m==="style"&&!t[m].endsWith(";")&&(t[m]+=";"),i.props[m]=`${t[m]} ${i.props[m]}`)}),e[n].props={...t,...i.props};return}else if(i._e===o._e){o._duped=o._duped||[],i._d=`${o._d}:${o._duped.length+1}`,o._duped.push(i);return}const l=Object.keys(i.props).length;if((l===0||l===1&&typeof i.props["data-h-key"]<"u")&&!i.innerHTML&&!i.textContent){delete e[n];return}}e[n]=i});const s=[];Object.values(e).forEach(i=>{const n=i._duped;delete i._duped,s.push(i),n&&s.push(...n)}),r.tags=s}}}};function L3(c,a){const r=(s,i)=>{let n;return i==="pageTitle"||i==="s"?n=a.pageTitle:i.includes(".")?n=i.split(".").reduce((o,f)=>o[f]||"",a):n=a[i],n||""};let e=c.replace(/%(\w+\.+\w+)/g,r).replace(/%(\w+)/g,r).trim();return a.separator&&(e.endsWith(a.separator)&&(e=e.slice(0,-a.separator.length).trim()),e.startsWith(a.separator)&&(e=e.slice(a.separator.length).trim()),e=e.replace(new RegExp(`\\${a.separator}\\s*\\${a.separator}`,"g"),a.separator)),e}function Xo(){return{hooks:{"tags:resolve":c=>{var i;const{tags:a}=c,r=(i=a.find(n=>n.tag==="title"))==null?void 0:i.textContent,e=a.findIndex(n=>n.tag==="templateParams"),s=e!==-1?a[e].textContent:{};s.pageTitle=s.pageTitle||r||"";for(const n of a)if(["titleTemplate","title"].includes(n.tag)&&typeof n.textContent=="string")n.textContent=L3(n.textContent,s);else if(n.tag==="meta"&&typeof n.props.content=="string")n.props.content=L3(n.props.content,s);else if(n.tag==="script"&&["application/json","application/ld+json"].includes(n.props.type)&&typeof n.innerHTML=="string")try{n.innerHTML=JSON.stringify(JSON.parse(n.innerHTML),(o,f)=>typeof f=="string"?L3(f,s):f)}catch{}c.tags=a.filter(n=>n.tag!=="templateParams")}}}}let Z8;const Qo=c=>Z8=c,_8=()=>Z8;async function Jo(c,a){const r={tag:c,props:{}};return["title","titleTemplate","templateParams"].includes(c)?(r.textContent=a instanceof Promise?await a:a,r):typeof a=="string"?["script","noscript","style"].includes(c)?(c==="script"&&(/^(https?:)?\/\//.test(a)||a.startsWith("/"))?r.props.src=a:(r.innerHTML=a,r.key=U8(a)),r):!1:(r.props=await af(c,{...a}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(e=>Oo.includes(e)).forEach(e=>{(!["innerHTML","textContent"].includes(e)||I8.includes(r.tag))&&(r[e]=r.props[e]),delete r.props[e]}),["innerHTML","textContent"].forEach(e=>{if(r.tag==="script"&&typeof r[e]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[e]=JSON.parse(r[e])}catch{r[e]=""}typeof r[e]=="object"&&(r[e]=JSON.stringify(r[e]))}),r.props.class&&(r.props.class=cf(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(e=>({...r,props:{...r.props,content:e}})):r)}function cf(c){return typeof c=="object"&&!Array.isArray(c)&&(c=Object.keys(c).filter(a=>c[a])),(Array.isArray(c)?c.join(" "):c).split(" ").filter(a=>a.trim()).filter(Boolean).join(" ")}async function af(c,a){for(const r of Object.keys(a)){const e=r.startsWith("data-");a[r]instanceof Promise&&(a[r]=await a[r]),String(a[r])==="true"?a[r]=e?"true":"":String(a[r])==="false"&&(e?a[r]="false":delete a[r])}return a}const ef=10;async function rf(c){const a=[];return Object.entries(c.resolvedInput).filter(([r,e])=>typeof e<"u"&&Eo.includes(r)).forEach(([r,e])=>{const s=Bo(e);a.push(...s.map(i=>Jo(r,i)).flat())}),(await Promise.all(a)).flat().filter(Boolean).map((r,e)=>(r._e=c._i,r._p=(c._i<<ef)+e,r))}const sf=()=>[Yo(),Go(),Xo(),jo(),Zo(),_o(),Wo()],nf=(c={})=>[Io({document:c==null?void 0:c.document,delayFn:c==null?void 0:c.domDelayFn})];function of(c={}){const a=ff({...c,plugins:[...nf(c),...(c==null?void 0:c.plugins)||[]]});return c.experimentalHashHydration&&a.resolvedOptions.document&&(a._hash=Uo(a.resolvedOptions.document)),Qo(a),a}function ff(c={}){let a=[],r={},e=0;const s=O8();c!=null&&c.hooks&&s.addHooks(c.hooks),c.plugins=[...sf(),...(c==null?void 0:c.plugins)||[]],c.plugins.forEach(o=>o.hooks&&s.addHooks(o.hooks)),c.document=c.document||(W8?document:void 0);const i=()=>s.callHook("entries:updated",n),n={resolvedOptions:c,headEntries(){return a},get hooks(){return s},use(o){o.hooks&&s.addHooks(o.hooks)},push(o,f){const l={_i:e++,input:o,_sde:{}};return f!=null&&f.mode&&(l._m=f==null?void 0:f.mode),f!=null&&f.transform&&(l._t=f==null?void 0:f.transform),a.push(l),i(),{dispose(){a=a.filter(t=>t._i!==l._i?!0:(r={...r,...t._sde||{}},t._sde={},i(),!1))},patch(t){a=a.map(m=>(m._i===l._i&&(l.input=m.input=t,i()),m))}}},async resolveTags(){const o={tags:[],entries:[...a]};await s.callHook("entries:resolve",o);for(const f of o.entries){const l=f._t||(t=>t);f.resolvedInput=l(f.resolvedInput||f.input);for(const t of await rf(f)){const m={tag:t,entry:f,resolvedOptions:n.resolvedOptions};await s.callHook("tag:normalise",m),o.tags.push(m.tag)}}return await s.callHook("tags:resolve",o),o.tags},_popSideEffectQueue(){const o={...r};return r={},o},_elMap:{}};return n.hooks.callHook("init",n),n}function lf(c){return typeof c=="function"?c():Y(c)}function $2(c,a=""){if(c instanceof Promise)return c;const r=lf(c);if(!c||!r)return r;if(Array.isArray(r))return r.map(e=>$2(e,a));if(typeof r=="object"){let e=!1;const s=Object.fromEntries(Object.entries(r).map(([i,n])=>i==="titleTemplate"||i.startsWith("on")?[i,Y(n)]:((typeof n=="function"||u8(n))&&(e=!0),[i,$2(n,i)])));return e&&Q3.includes(String(a))&&(s._dynamic=!0),s}return r}const tf=p8.startsWith("3"),mf=typeof window<"u",K8="usehead";function J3(){return n2()&&h8(K8)||_8()}function vf(c){return{install(r){tf&&(r.config.globalProperties.$unhead=c,r.config.globalProperties.$head=c,r.provide(K8,c))}}.install}function zf(c={}){const a=of({...c,domDelayFn:r=>setTimeout(()=>H8(()=>r()),10),plugins:[hf(),...(c==null?void 0:c.plugins)||[]]});return a.install=vf(a),a}const hf=()=>({hooks:{"entries:resolve":function(c){for(const a of c.entries)a.resolvedInput=$2(a.input)}}});function Hf(c,a={}){const r=J3(),e=K1(!1),s=K1({});un(()=>{s.value=e.value?{}:$2(c)});const i=r.push(s.value,a);return X3(s,o=>{i.patch(o)}),n2()&&(pn(()=>{i.dispose()}),Vn(()=>{e.value=!0}),dn(()=>{e.value=!1})),i}function uf(c,a={}){return J3().push(c,a)}function Y8(c,a={}){var e;const r=J3();if(r){const s=mf||!!((e=r.resolvedOptions)!=null&&e.document);return a.mode==="server"&&s||a.mode==="client"&&!s?void 0:s?Hf(c,a):uf(c,a)}}function pf(c,a){const r=zf(a||{}),e={unhead:r,install(s){p8.startsWith("3")&&(s.config.globalProperties.$head=r,s.provide("usehead",r))},use(s){r.use(s)},resolveTags(){return r.resolveTags()},headEntries(){return r.headEntries()},headTags(){return r.resolveTags()},push(s,i){return r.push(s,i)},addEntry(s,i){return r.push(s,i)},addHeadObjs(s,i){return r.push(s,i)},addReactiveEntry(s,i){const n=Y8(s,i);return typeof n<"u"?n.dispose:()=>{}},removeHeadObjs(){},updateDOM(s,i){i?G8(r,{document:s}):j8(r,{delayFn:n=>setTimeout(()=>n(),50),document:s})},internalHooks:r.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return r.addHeadObjs=e.addHeadObjs,r.updateDOM=e.updateDOM,r.hooks.hook("dom:beforeRender",s=>{for(const i of e.hooks["before:dom"])i()===!1&&(s.shouldRender=!1)}),c&&e.addHeadObjs(c),e}const Vf={meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"WatchGuide est un guide en ligne pour les amateurs de films et de séries. Trouvez facilement où regarder vos films et séries préférés en streaming, en location ou en achat. Notre plateforme vous permet de découvrir les dernières sorties, les classiques du cinéma, les séries en vogue, ainsi que les critiques et les évaluations des utilisateurs. Avec WatchGuide, profitez d'une expérience cinématographique sans tracas et sans perdre de temps à chercher où regarder vos contenus préférés."}],link:[],style:[],script:[{src:"https://www.youtube.com/iframe_api",id:"youtube-iframe-js-api-script"}],noscript:[],title:"WatchGuide"},df="__nuxt",Mf=l2(c=>{const a=pf();a.push(Vf),c.vueApp.use(a);{let r=!0;const e=()=>{r=!1,a.internalHooks.callHook("entries:updated",a.unhead)};a.internalHooks.hook("dom:beforeRender",s=>{s.shouldRender=!r}),c.hooks.hook("page:start",()=>{r=!0}),c.hooks.hook("page:finish",e),c.hooks.hook("app:mounted",e)}c._useHead=Y8});function g3(c){return c!==null&&typeof c=="object"}function R3(c,a,r=".",e){if(!g3(a))return R3(c,{},r,e);const s=Object.assign({},a);for(const i in c){if(i==="__proto__"||i==="constructor")continue;const n=c[i];n!=null&&(e&&e(s,i,n,r)||(Array.isArray(n)&&Array.isArray(s[i])?s[i]=[...n,...s[i]]:g3(n)&&g3(s[i])?s[i]=R3(n,s[i],(r?`${r}.`:"")+i.toString(),e):s[i]=n))}return s}function Cf(c){return(...a)=>a.reduce((r,e)=>R3(r,e,"",c),{})}const Lf=Cf((c,a,r)=>{if(typeof c[a]<"u"&&typeof r=="function")return c[a]=r(c[a]),!0});class B3 extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1,this.statusMessage=void 0}toJSON(){const a={message:this.message,statusCode:this.statusCode};return this.statusMessage&&(a.statusMessage=this.statusMessage),this.data!==void 0&&(a.data=this.data),a}}B3.__h3_error__=!0;function gf(c){if(typeof c=="string")return new B3(c);if(xf(c))return c;const a=new B3(c.message??c.statusMessage,c.cause?{cause:c.cause}:void 0);if("stack"in c)try{Object.defineProperty(a,"stack",{get(){return c.stack}})}catch{try{a.stack=c.stack}catch{}}return c.data&&(a.data=c.data),c.statusCode?a.statusCode=c.statusCode:c.status&&(a.statusCode=c.status),c.statusMessage?a.statusMessage=c.statusMessage:c.statusText&&(a.statusMessage=c.statusText),c.fatal!==void 0&&(a.fatal=c.fatal),c.unhandled!==void 0&&(a.unhandled=c.unhandled),a}function xf(c){var a;return((a=c==null?void 0:c.constructor)==null?void 0:a.__h3_error__)===!0}const c4=()=>V8(c1().payload,"error"),bf=c=>{const a=E3(c);try{c1().callHook("app:error",a);const e=c4();e.value=e.value||a}catch{throw a}return a},Nf=async(c={})=>{const a=c1(),r=c4();a.callHook("app:error:cleared",c),c.redirect&&await a.$router.replace(c.redirect),r.value=null},yf=c=>!!(c&&typeof c=="object"&&"__nuxt_error"in c),E3=c=>{const a=gf(c);return a.__nuxt_error=!0,a};function Sf(...c){const a=typeof c[c.length-1]=="string"?c.pop():void 0;typeof c[0]!="string"&&c.unshift(a);const[r,e]=c;if(!r||typeof r!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+r);if(e!==void 0&&typeof e!="function")throw new Error("[nuxt] [useState] init must be a function: "+e);const s="$s"+r,i=c1(),n=V8(i.payload.state,s);if(n.value===void 0&&e){const o=e();if(u8(o))return i.payload.state[s]=o,o;n.value=o}return n}function wf(c=c1()){var a;return(a=c.ssrContext)==null?void 0:a.event}const X8=()=>{var c;return(c=c1())==null?void 0:c.$router},Af=()=>n2()?h8("_route",c1()._route):c1()._route,kf=()=>{try{if(c1()._processingMiddleware)return!0}catch{return!0}return!1},Pf=(c,a)=>{c||(c="/");const r=typeof c=="string"?c:c.path||"/",e=j2(r,!0);if(e&&!(a!=null&&a.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(e&&f2(r).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");if(!e&&kf())return c;const s=X8();return e?(a!=null&&a.replace?location.replace(r):location.href=r,Promise.resolve()):a!=null&&a.replace?s.replace(c):s.push(c)},Tf=[];function x3(c){typeof c=="object"&&(c=F8({pathname:c.path||"",search:A8(c.query||{}),hash:c.hash||""}));const a=f2(c.toString());return{path:a.pathname,fullPath:c,query:w8(a.search),hash:a.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c}}const Ff=l2(c=>{const a=co(window.location.pathname,S1().app.baseURL)+window.location.search+window.location.hash,r=[],e={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(t,m)=>(e[t].push(m),()=>e[t].splice(e[t].indexOf(m),1)),i=S1().app.baseURL,n=Q1(x3(a));async function o(t,m){try{const v=x3(t);for(const H of e["navigate:before"]){const h=await H(v,n);if(h===!1||h instanceof Error)return;if(h)return o(h,!0)}for(const H of e["resolve:before"])await H(v,n);Object.assign(n,v),window.history[m?"replaceState":"pushState"]({},"",o2(i,v.fullPath)),c.isHydrating||await R1(c,Nf);for(const H of e["navigate:after"])await H(v,n)}catch(v){for(const H of e.error)await H(v)}}const f={currentRoute:n,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:t=>o(t,!1),replace:t=>o(t,!0),back:()=>window.history.go(-1),go:t=>window.history.go(t),forward:()=>window.history.go(1),beforeResolve:t=>s("resolve:before",t),beforeEach:t=>s("navigate:before",t),afterEach:t=>s("navigate:after",t),onError:t=>s("error",t),resolve:x3,addRoute:(t,m)=>{r.push(m)},getRoutes:()=>r,hasRoute:t=>r.some(m=>m.name===t),removeRoute:t=>{const m=r.findIndex(v=>v.name===t);m!==-1&&r.splice(m,1)}};c.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(t,{slots:m})=>{const v=()=>o(t.to,t.replace);return()=>{var h;const H=f.resolve(t.to);return t.custom?(h=m.default)==null?void 0:h.call(m,{href:t.to,navigate:v,route:H}):d8("a",{href:t.to,onClick:u=>(u.preventDefault(),v())},m)}}}),window.addEventListener("popstate",t=>{const m=t.target.location;f.replace(m.href.replace(m.origin,""))}),c._route=n,c._middleware=c._middleware||{global:[],named:{}};const l=Sf("_layout");return c.hooks.hookOnce("app:created",async()=>{if(f.beforeEach(async(t,m)=>{t.meta=Q1(t.meta||{}),c.isHydrating&&l.value&&!Mn(t.meta.layout)&&(t.meta.layout=l.value),c._processingMiddleware=!0;const v=new Set([...Tf,...c._middleware.global]);for(const H of v){const h=await R1(c,H,[t,m]);if(h||h===!1)return h}}),f.afterEach(()=>{delete c._processingMiddleware}),await f.replace(a),!ro(n.fullPath,a)){const t=await R1(c,wf),m={redirectCode:t.node.res.statusCode!==200&&t.node.res.statusCode||302};await R1(c,Pf,[n.fullPath,m])}}),{provide:{route:n,router:f}}}),Rf="modulepreload",Bf=function(c,a){return c.startsWith(".")?new URL(c,a).href:c},B6={},Q8=function(a,r,e){if(!r||r.length===0)return a();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Bf(i,e),i in B6)return;B6[i]=!0;const n=i.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(!!e)for(let t=s.length-1;t>=0;t--){const m=s[t];if(m.href===i&&(!n||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":Rf,n||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),n)return new Promise((t,m)=>{l.addEventListener("load",t),l.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>a())};function E6(c,a={}){const r=Ef(c,a),e=c1(),s=e._payloadCache=e._payloadCache||{};return s[c]||(s[c]=Df(r).then(i=>i||(delete s[c],null))),s[c]}function Ef(c,a={}){const r=new URL(c,"http://localhost");if(r.search)throw new Error("Payload URL cannot contain search params: "+c);if(r.host!=="localhost"||j2(r.pathname,!0))throw new Error("Payload URL must not include hostname: "+c);const e=a.hash||(a.fresh?Date.now():"");return o2(S1().app.baseURL,r.pathname,e?`_payload.${e}.js`:"_payload.js")}async function Df(c){const a=await Q8(()=>import(c),[],import.meta.url).catch(r=>{console.warn("[nuxt] Cannot load payload ",c,r)});return(a==null?void 0:a.default)||null}function Of(){return!!c1().payload.prerenderedAt}const $f=l2(c=>{Of()&&(c.hooks.hook("link:prefetch",a=>{if(!f2(a).protocol)return E6(a)}),X8().beforeResolve(async(a,r)=>{if(a.path===r.path)return;const e=await E6(a.path);e&&Object.assign(c.static.data,e.data)}))}),If=()=>null;function Uf(...c){var v;const a=typeof c[c.length-1]=="string"?c.pop():void 0;typeof c[0]!="string"&&c.unshift(a);let[r,e,s={}]=c;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");s.server=s.server??!0,s.default=s.default??If,s.lazy=s.lazy??!1,s.immediate=s.immediate??!0;const i=c1(),n=()=>i.isHydrating?i.payload.data[r]:i.static.data[r],o=()=>n()!==void 0;i._asyncData[r]||(i._asyncData[r]={data:K1(n()??((v=s.default)==null?void 0:v.call(s))??null),pending:K1(!o()),error:K1(i.payload._errors[r]?E3(i.payload._errors[r]):null)});const f={...i._asyncData[r]};f.refresh=f.execute=(H={})=>{if(i._asyncDataPromises[r]){if(H.dedupe===!1)return i._asyncDataPromises[r];i._asyncDataPromises[r].cancelled=!0}if(H._initial&&o())return n();f.pending.value=!0;const h=new Promise((u,C)=>{try{u(e(i))}catch(p){C(p)}}).then(u=>{if(h.cancelled)return i._asyncDataPromises[r];s.transform&&(u=s.transform(u)),s.pick&&(u=qf(u,s.pick)),f.data.value=u,f.error.value=null}).catch(u=>{var C;if(h.cancelled)return i._asyncDataPromises[r];f.error.value=u,f.data.value=Y(((C=s.default)==null?void 0:C.call(s))??null)}).finally(()=>{h.cancelled||(f.pending.value=!1,i.payload.data[r]=f.data.value,f.error.value&&(i.payload._errors[r]=E3(f.error.value)),delete i._asyncDataPromises[r])});return i._asyncDataPromises[r]=h,i._asyncDataPromises[r]};const l=()=>f.refresh({_initial:!0}),t=s.server!==!1&&i.payload.serverRendered;{const H=n2();if(H&&!H._nuxtOnBeforeMountCbs){H._nuxtOnBeforeMountCbs=[];const u=H._nuxtOnBeforeMountCbs;H&&(Cn(()=>{u.forEach(C=>{C()}),u.splice(0,u.length)}),b6(()=>u.splice(0,u.length)))}t&&i.isHydrating&&o()?f.pending.value=!1:H&&(i.payload.serverRendered&&i.isHydrating||s.lazy)&&s.immediate?H._nuxtOnBeforeMountCbs.push(l):s.immediate&&l(),s.watch&&X3(s.watch,()=>f.refresh());const h=i.hook("app:data:refresh",u=>{if(!u||u.includes(r))return f.refresh()});H&&b6(h)}const m=Promise.resolve(i._asyncDataPromises[r]).then(()=>f);return Object.assign(m,f),m}function qf(c,a){const r={};for(const e of a)r[e]=c[e];return r}const Gf={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function jf(c,a={}){a={...Gf,...a};const r=J8(a);return r.dispatch(c),r.toString()}function J8(c){const a=[];let r=[];const e=s=>{a.push(s)};return{toString(){return a.join("")},getContext(){return r},dispatch(s){return c.replacer&&(s=c.replacer(s)),this["_"+(s===null?"null":typeof s)](s)},_object(s){if(s&&typeof s.toJSON=="function")return this._object(s.toJSON());const i=/\[object (.*)]/i,n=Object.prototype.toString.call(s),o=i.exec(n),f=o?o[1].toLowerCase():"unknown:["+n.toLowerCase()+"]";let l=null;if((l=r.indexOf(s))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(r.push(s),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(s))return e("buffer:"),e(s.toString("utf8"));if(f!=="object"&&f!=="function"&&f!=="asyncfunction")this["_"+f]?this["_"+f](s):c.ignoreUnknown||this._unkown(s,f);else{let t=Object.keys(s);c.unorderedObjects&&(t=t.sort()),c.respectType!==!1&&!D6(s)&&t.splice(0,0,"prototype","__proto__","letructor"),c.excludeKeys&&(t=t.filter(function(m){return!c.excludeKeys(m)})),e("object:"+t.length+":");for(const m of t)this.dispatch(m),e(":"),c.excludeValues||this.dispatch(s[m]),e(",")}},_array(s,i){if(i=typeof i<"u"?i:c.unorderedArrays!==!1,e("array:"+s.length+":"),!i||s.length<=1){for(const f of s)this.dispatch(f);return}const n=[],o=s.map(f=>{const l=J8(c);return l.dispatch(f),n.push(l.getContext()),l.toString()});return r=[...r,...n],o.sort(),this._array(o,!1)},_date(s){return e("date:"+s.toJSON())},_symbol(s){return e("symbol:"+s.toString())},_unkown(s,i){if(e(i),!!s&&(e(":"),s&&typeof s.entries=="function"))return this._array(Array.from(s.entries()),!0)},_error(s){return e("error:"+s.toString())},_boolean(s){return e("boolean:"+s.toString())},_string(s){e("string:"+s.length+":"),e(s.toString())},_function(s){e("fn:"),D6(s)?this.dispatch("[native]"):this.dispatch(s.toString()),c.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(s.name)),c.respectFunctionProperties&&this._object(s)},_number(s){return e("number:"+s.toString())},_xml(s){return e("xml:"+s.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(s){return e("regex:"+s.toString())},_uint8array(s){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(s))},_uint8clampedarray(s){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(s))},_int8array(s){return e("int8array:"),this.dispatch(Array.prototype.slice.call(s))},_uint16array(s){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(s))},_int16array(s){return e("int16array:"),this.dispatch(Array.prototype.slice.call(s))},_uint32array(s){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(s))},_int32array(s){return e("int32array:"),this.dispatch(Array.prototype.slice.call(s))},_float32array(s){return e("float32array:"),this.dispatch(Array.prototype.slice.call(s))},_float64array(s){return e("float64array:"),this.dispatch(Array.prototype.slice.call(s))},_arraybuffer(s){return e("arraybuffer:"),this.dispatch(new Uint8Array(s))},_url(s){return e("url:"+s.toString())},_map(s){e("map:");const i=[...s];return this._array(i,c.unorderedSets!==!1)},_set(s){e("set:");const i=[...s];return this._array(i,c.unorderedSets!==!1)},_file(s){return e("file:"),this.dispatch([s.name,s.size,s.type,s.lastModfied])},_blob(){if(c.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(s){return e("bigint:"+s.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function D6(c){return typeof c!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(c))!=null}class $1{constructor(a,r){a=this.words=a||[],this.sigBytes=r!==void 0?r:a.length*4}toString(a){return(a||Wf).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new $1([...this.words])}}const Wf={stringify(c){const a=[];for(let r=0;r<c.sigBytes;r++){const e=c.words[r>>>2]>>>24-r%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},Zf={stringify(c){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<c.sigBytes;e+=3){const s=c.words[e>>>2]>>>24-e%4*8&255,i=c.words[e+1>>>2]>>>24-(e+1)%4*8&255,n=c.words[e+2>>>2]>>>24-(e+2)%4*8&255,o=s<<16|i<<8|n;for(let f=0;f<4&&e*8+f*6<c.sigBytes*8;f++)r.push(a.charAt(o>>>6*(3-f)&63))}return r.join("")}},_f={parse(c){const a=c.length,r=[];for(let e=0;e<a;e++)r[e>>>2]|=(c.charCodeAt(e)&255)<<24-e%4*8;return new $1(r,a)}},Kf={parse(c){return _f.parse(unescape(encodeURIComponent(c)))}};class Yf{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new $1,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=Kf.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const s=e*this.blockSize,i=Math.min(s*4,this._data.sigBytes);if(s){for(let n=0;n<s;n+=this.blockSize)this._doProcessBlock(this._data.words,n);r=this._data.words.splice(0,s),this._data.sigBytes-=i}return new $1(r,i)}}class Xf extends Yf{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const Qf=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Jf=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x1=[];class cl extends Xf{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new $1([...Qf])}_doProcessBlock(a,r){const e=this._hash.words;let s=e[0],i=e[1],n=e[2],o=e[3],f=e[4],l=e[5],t=e[6],m=e[7];for(let v=0;v<64;v++){if(v<16)x1[v]=a[r+v]|0;else{const V=x1[v-15],d=(V<<25|V>>>7)^(V<<14|V>>>18)^V>>>3,M=x1[v-2],g=(M<<15|M>>>17)^(M<<13|M>>>19)^M>>>10;x1[v]=d+x1[v-7]+g+x1[v-16]}const H=f&l^~f&t,h=s&i^s&n^i&n,u=(s<<30|s>>>2)^(s<<19|s>>>13)^(s<<10|s>>>22),C=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),p=m+C+H+Jf[v]+x1[v],z=u+h;m=t,t=l,l=f,f=o+p|0,o=n,n=i,i=s,s=p+z|0}e[0]=e[0]+s|0,e[1]=e[1]+i|0,e[2]=e[2]+n|0,e[3]=e[3]+o|0,e[4]=e[4]+f|0,e[5]=e[5]+l|0,e[6]=e[6]+t|0,e[7]=e[7]+m|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function al(c){return new cl().finalize(c).toString(Zf)}function el(c,a={}){const r=typeof c=="string"?c:jf(c,a);return al(r).slice(0,10)}function s1(c,a,r){const[e={},s]=typeof a=="string"?[{},a]:[a,r],i=e.key||el([s,Y(e.baseURL),typeof c=="string"?c:"",Y(e.params||e.query)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!c)throw new Error("[nuxt] [useFetch] request is missing.");const n=i===s?"$f"+i:i,o=b1(()=>{let d=c;return typeof d=="function"&&(d=d()),Y(d)}),{server:f,lazy:l,default:t,transform:m,pick:v,watch:H,immediate:h,...u}=e,C=Q1({...u,cache:typeof e.cache=="boolean"?void 0:e.cache}),p={server:f,lazy:l,default:t,transform:m,pick:v,immediate:h,watch:[C,o,...H||[]]};let z;return Uf(n,()=>{var M;return(M=z==null?void 0:z.abort)==null||M.call(z),z=typeof AbortController<"u"?new AbortController:{},typeof o.value=="string"&&o.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(o.value,{signal:z.signal,...C})},p)}const rl={};Lf(rl);function O6(c,a){var r=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),r.push.apply(r,e)}return r}function b(c){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?O6(Object(r),!0).forEach(function(e){j(c,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(r)):O6(Object(r)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(r,e))})}return c}function I2(c){return I2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},I2(c)}function il(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function $6(c,a){for(var r=0;r<a.length;r++){var e=a[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function sl(c,a,r){return a&&$6(c.prototype,a),r&&$6(c,r),Object.defineProperty(c,"prototype",{writable:!1}),c}function j(c,a,r){return a in c?Object.defineProperty(c,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):c[a]=r,c}function a4(c,a){return ol(c)||ll(c,a)||c0(c,a)||ml()}function t2(c){return nl(c)||fl(c)||c0(c)||tl()}function nl(c){if(Array.isArray(c))return D3(c)}function ol(c){if(Array.isArray(c))return c}function fl(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ll(c,a){var r=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(r!=null){var e=[],s=!0,i=!1,n,o;try{for(r=r.call(c);!(s=(n=r.next()).done)&&(e.push(n.value),!(a&&e.length===a));s=!0);}catch(f){i=!0,o=f}finally{try{!s&&r.return!=null&&r.return()}finally{if(i)throw o}}return e}}function c0(c,a){if(c){if(typeof c=="string")return D3(c,a);var r=Object.prototype.toString.call(c).slice(8,-1);if(r==="Object"&&c.constructor&&(r=c.constructor.name),r==="Map"||r==="Set")return Array.from(c);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return D3(c,a)}}function D3(c,a){(a==null||a>c.length)&&(a=c.length);for(var r=0,e=new Array(a);r<a;r++)e[r]=c[r];return e}function tl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ml(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I6=function(){},e4={},a0={},e0=null,r0={mark:I6,measure:I6};try{typeof window<"u"&&(e4=window),typeof document<"u"&&(a0=document),typeof MutationObserver<"u"&&(e0=MutationObserver),typeof performance<"u"&&(r0=performance)}catch{}var vl=e4.navigator||{},U6=vl.userAgent,q6=U6===void 0?"":U6,M1=e4,$=a0,G6=e0,b2=r0;M1.document;var h1=!!$.documentElement&&!!$.head&&typeof $.addEventListener=="function"&&typeof $.createElement=="function",i0=~q6.indexOf("MSIE")||~q6.indexOf("Trident/"),N2,y2,S2,w2,A2,m1="___FONT_AWESOME___",O3=16,s0="fa",n0="svg-inline--fa",w1="data-fa-i2svg",$3="data-fa-pseudo-element",zl="data-fa-pseudo-element-pending",r4="data-prefix",i4="data-icon",j6="fontawesome-i2svg",hl="async",Hl=["HTML","HEAD","STYLE","SCRIPT"],o0=function(){try{return!0}catch{return!1}}(),O="classic",I="sharp",s4=[O,I];function m2(c){return new Proxy(c,{get:function(r,e){return e in r?r[e]:r[O]}})}var a2=m2((N2={},j(N2,O,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),j(N2,I,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),N2)),e2=m2((y2={},j(y2,O,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),j(y2,I,{solid:"fass",regular:"fasr"}),y2)),r2=m2((S2={},j(S2,O,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),j(S2,I,{fass:"fa-solid",fasr:"fa-regular"}),S2)),ul=m2((w2={},j(w2,O,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),j(w2,I,{"fa-solid":"fass","fa-regular":"fasr"}),w2)),pl=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,f0="fa-layers-text",Vl=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,dl=m2((A2={},j(A2,O,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),j(A2,I,{900:"fass",400:"fasr"}),A2)),l0=[1,2,3,4,5,6,7,8,9,10],Ml=l0.concat([11,12,13,14,15,16,17,18,19,20]),Cl=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],N1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},i2=new Set;Object.keys(e2[O]).map(i2.add.bind(i2));Object.keys(e2[I]).map(i2.add.bind(i2));var Ll=[].concat(s4,t2(i2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",N1.GROUP,N1.SWAP_OPACITY,N1.PRIMARY,N1.SECONDARY]).concat(l0.map(function(c){return"".concat(c,"x")})).concat(Ml.map(function(c){return"w-".concat(c)})),Y1=M1.FontAwesomeConfig||{};function gl(c){var a=$.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function xl(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if($&&typeof $.querySelector=="function"){var bl=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bl.forEach(function(c){var a=a4(c,2),r=a[0],e=a[1],s=xl(gl(r));s!=null&&(Y1[e]=s)})}var t0={styleDefault:"solid",familyDefault:"classic",cssPrefix:s0,replacementClass:n0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y1.familyPrefix&&(Y1.cssPrefix=Y1.familyPrefix);var I1=b(b({},t0),Y1);I1.autoReplaceSvg||(I1.observeMutations=!1);var y={};Object.keys(t0).forEach(function(c){Object.defineProperty(y,c,{enumerable:!0,set:function(r){I1[c]=r,X1.forEach(function(e){return e(y)})},get:function(){return I1[c]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(a){I1.cssPrefix=a,X1.forEach(function(r){return r(y)})},get:function(){return I1.cssPrefix}});M1.FontAwesomeConfig=y;var X1=[];function Nl(c){return X1.push(c),function(){X1.splice(X1.indexOf(c),1)}}var d1=O3,n1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yl(c){if(!(!c||!h1)){var a=$.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var r=$.head.childNodes,e=null,s=r.length-1;s>-1;s--){var i=r[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=i)}return $.head.insertBefore(a,e),c}}var Sl="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function s2(){for(var c=12,a="";c-- >0;)a+=Sl[Math.random()*62|0];return a}function U1(c){for(var a=[],r=(c||[]).length>>>0;r--;)a[r]=c[r];return a}function n4(c){return c.classList?U1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function m0(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function wl(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,'="').concat(m0(c[r]),'" ')},"").trim()}function W2(c){return Object.keys(c||{}).reduce(function(a,r){return a+"".concat(r,": ").concat(c[r].trim(),";")},"")}function o4(c){return c.size!==n1.size||c.x!==n1.x||c.y!==n1.y||c.rotate!==n1.rotate||c.flipX||c.flipY}function Al(c){var a=c.transform,r=c.containerWidth,e=c.iconWidth,s={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(i," ").concat(n," ").concat(o)},l={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:f,path:l}}function kl(c){var a=c.transform,r=c.width,e=r===void 0?O3:r,s=c.height,i=s===void 0?O3:s,n=c.startCentered,o=n===void 0?!1:n,f="";return o&&i0?f+="translate(".concat(a.x/d1-e/2,"em, ").concat(a.y/d1-i/2,"em) "):o?f+="translate(calc(-50% + ".concat(a.x/d1,"em), calc(-50% + ").concat(a.y/d1,"em)) "):f+="translate(".concat(a.x/d1,"em, ").concat(a.y/d1,"em) "),f+="scale(".concat(a.size/d1*(a.flipX?-1:1),", ").concat(a.size/d1*(a.flipY?-1:1),") "),f+="rotate(".concat(a.rotate,"deg) "),f}var Pl=`:root, :host {
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
}`;function v0(){var c=s0,a=n0,r=y.cssPrefix,e=y.replacementClass,s=Pl;if(r!==c||e!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(o,".".concat(e))}return s}var W6=!1;function b3(){y.autoAddCss&&!W6&&(yl(v0()),W6=!0)}var Tl={mixout:function(){return{dom:{css:v0,insertCss:b3}}},hooks:function(){return{beforeDOMElementCreation:function(){b3()},beforeI2svg:function(){b3()}}}},v1=M1||{};v1[m1]||(v1[m1]={});v1[m1].styles||(v1[m1].styles={});v1[m1].hooks||(v1[m1].hooks={});v1[m1].shims||(v1[m1].shims=[]);var e1=v1[m1],z0=[],Fl=function c(){$.removeEventListener("DOMContentLoaded",c),U2=1,z0.map(function(a){return a()})},U2=!1;h1&&(U2=($.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($.readyState),U2||$.addEventListener("DOMContentLoaded",Fl));function Rl(c){h1&&(U2?setTimeout(c,0):z0.push(c))}function v2(c){var a=c.tag,r=c.attributes,e=r===void 0?{}:r,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?m0(c):"<".concat(a," ").concat(wl(e),">").concat(i.map(v2).join(""),"</").concat(a,">")}function Z6(c,a,r){if(c&&c[a]&&c[a][r])return{prefix:a,iconName:r,icon:c[a][r]}}var Bl=function(a,r){return function(e,s,i,n){return a.call(r,e,s,i,n)}},N3=function(a,r,e,s){var i=Object.keys(a),n=i.length,o=s!==void 0?Bl(r,s):r,f,l,t;for(e===void 0?(f=1,t=a[i[0]]):(f=0,t=e);f<n;f++)l=i[f],t=o(t,a[l],l,a);return t};function El(c){for(var a=[],r=0,e=c.length;r<e;){var s=c.charCodeAt(r++);if(s>=55296&&s<=56319&&r<e){var i=c.charCodeAt(r++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),r--)}else a.push(s)}return a}function I3(c){var a=El(c);return a.length===1?a[0].toString(16):null}function Dl(c,a){var r=c.length,e=c.charCodeAt(a),s;return e>=55296&&e<=56319&&r>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function _6(c){return Object.keys(c).reduce(function(a,r){var e=c[r],s=!!e.icon;return s?a[e.iconName]=e.icon:a[r]=e,a},{})}function U3(c,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,s=e===void 0?!1:e,i=_6(a);typeof e1.hooks.addPack=="function"&&!s?e1.hooks.addPack(c,_6(a)):e1.styles[c]=b(b({},e1.styles[c]||{}),i),c==="fas"&&U3("fa",a)}var k2,P2,T2,B1=e1.styles,Ol=e1.shims,$l=(k2={},j(k2,O,Object.values(r2[O])),j(k2,I,Object.values(r2[I])),k2),f4=null,h0={},H0={},u0={},p0={},V0={},Il=(P2={},j(P2,O,Object.keys(a2[O])),j(P2,I,Object.keys(a2[I])),P2);function Ul(c){return~Ll.indexOf(c)}function ql(c,a){var r=a.split("-"),e=r[0],s=r.slice(1).join("-");return e===c&&s!==""&&!Ul(s)?s:null}var d0=function(){var a=function(i){return N3(B1,function(n,o,f){return n[f]=N3(o,i,{}),n},{})};h0=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var o=i[2].filter(function(f){return typeof f=="number"});o.forEach(function(f){s[f.toString(16)]=n})}return s}),H0=a(function(s,i,n){if(s[n]=n,i[2]){var o=i[2].filter(function(f){return typeof f=="string"});o.forEach(function(f){s[f]=n})}return s}),V0=a(function(s,i,n){var o=i[2];return s[n]=n,o.forEach(function(f){s[f]=n}),s});var r="far"in B1||y.autoFetchSvg,e=N3(Ol,function(s,i){var n=i[0],o=i[1],f=i[2];return o==="far"&&!r&&(o="fas"),typeof n=="string"&&(s.names[n]={prefix:o,iconName:f}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:o,iconName:f}),s},{names:{},unicodes:{}});u0=e.names,p0=e.unicodes,f4=Z2(y.styleDefault,{family:y.familyDefault})};Nl(function(c){f4=Z2(c.styleDefault,{family:y.familyDefault})});d0();function l4(c,a){return(h0[c]||{})[a]}function Gl(c,a){return(H0[c]||{})[a]}function y1(c,a){return(V0[c]||{})[a]}function M0(c){return u0[c]||{prefix:null,iconName:null}}function jl(c){var a=p0[c],r=l4("fas",c);return a||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function C1(){return f4}var t4=function(){return{prefix:null,iconName:null,rest:[]}};function Z2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.family,e=r===void 0?O:r,s=a2[e][c],i=e2[e][c]||e2[e][s],n=c in e1.styles?c:null;return i||n||null}var K6=(T2={},j(T2,O,Object.keys(r2[O])),j(T2,I,Object.keys(r2[I])),T2);function _2(c){var a,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,s=e===void 0?!1:e,i=(a={},j(a,O,"".concat(y.cssPrefix,"-").concat(O)),j(a,I,"".concat(y.cssPrefix,"-").concat(I)),a),n=null,o=O;(c.includes(i[O])||c.some(function(l){return K6[O].includes(l)}))&&(o=O),(c.includes(i[I])||c.some(function(l){return K6[I].includes(l)}))&&(o=I);var f=c.reduce(function(l,t){var m=ql(y.cssPrefix,t);if(B1[t]?(t=$l[o].includes(t)?ul[o][t]:t,n=t,l.prefix=t):Il[o].indexOf(t)>-1?(n=t,l.prefix=Z2(t,{family:o})):m?l.iconName=m:t!==y.replacementClass&&t!==i[O]&&t!==i[I]&&l.rest.push(t),!s&&l.prefix&&l.iconName){var v=n==="fa"?M0(l.iconName):{},H=y1(l.prefix,l.iconName);v.prefix&&(n=null),l.iconName=v.iconName||H||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!B1.far&&B1.fas&&!y.autoFetchSvg&&(l.prefix="fas")}return l},t4());return(c.includes("fa-brands")||c.includes("fab"))&&(f.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===I&&(B1.fass||y.autoFetchSvg)&&(f.prefix="fass",f.iconName=y1(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||n==="fa")&&(f.prefix=C1()||"fas"),f}var Wl=function(){function c(){il(this,c),this.definitions={}}return sl(c,[{key:"add",value:function(){for(var r=this,e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){r.definitions[o]=b(b({},r.definitions[o]||{}),n[o]),U3(o,n[o]);var f=r2[O][o];f&&U3(f,n[o]),d0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(function(i){var n=s[i],o=n.prefix,f=n.iconName,l=n.icon,t=l[2];r[o]||(r[o]={}),t.length>0&&t.forEach(function(m){typeof m=="string"&&(r[o][m]=l)}),r[o][f]=l}),r}}]),c}(),Y6=[],E1={},O1={},Zl=Object.keys(O1);function _l(c,a){var r=a.mixoutsTo;return Y6=c,E1={},Object.keys(O1).forEach(function(e){Zl.indexOf(e)===-1&&delete O1[e]}),Y6.forEach(function(e){var s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(r[n]=s[n]),I2(s[n])==="object"&&Object.keys(s[n]).forEach(function(o){r[n]||(r[n]={}),r[n][o]=s[n][o]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(n){E1[n]||(E1[n]=[]),E1[n].push(i[n])})}e.provides&&e.provides(O1)}),r}function q3(c,a){for(var r=arguments.length,e=new Array(r>2?r-2:0),s=2;s<r;s++)e[s-2]=arguments[s];var i=E1[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function A1(c){for(var a=arguments.length,r=new Array(a>1?a-1:0),e=1;e<a;e++)r[e-1]=arguments[e];var s=E1[c]||[];s.forEach(function(i){i.apply(null,r)})}function z1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return O1[c]?O1[c].apply(null,a):void 0}function G3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,r=c.prefix||C1();if(a)return a=y1(r,a)||a,Z6(C0.definitions,r,a)||Z6(e1.styles,r,a)}var C0=new Wl,Kl=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,A1("noAuto")},Yl={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return h1?(A1("beforeI2svg",a),z1("pseudoElements2svg",a),z1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,Rl(function(){Ql({autoReplaceSvgRoot:r}),A1("watch",a)})}},Xl={icon:function(a){if(a===null)return null;if(I2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:y1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var r=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=Z2(a[0]);return{prefix:e,iconName:y1(e,r)||r}}if(typeof a=="string"&&(a.indexOf("".concat(y.cssPrefix,"-"))>-1||a.match(pl))){var s=_2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||C1(),iconName:y1(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=C1();return{prefix:i,iconName:y1(i,a)||a}}}},a1={noAuto:Kl,config:y,dom:Yl,parse:Xl,library:C0,findIconDefinition:G3,toHtml:v2},Ql=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.autoReplaceSvgRoot,e=r===void 0?$:r;(Object.keys(e1.styles).length>0||y.autoFetchSvg)&&h1&&y.autoReplaceSvg&&a1.dom.i2svg({node:e})};function K2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return v2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(h1){var e=$.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function Jl(c){var a=c.children,r=c.main,e=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(o4(n)&&r.found&&!e.found){var o=r.width,f=r.height,l={x:o/f/2,y:.5};s.style=W2(b(b({},i),{},{"transform-origin":"".concat(l.x+n.x/16,"em ").concat(l.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function ct(c){var a=c.prefix,r=c.iconName,e=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(y.cssPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:b(b({},s),{},{id:n}),children:e}]}]}function m4(c){var a=c.icons,r=a.main,e=a.mask,s=c.prefix,i=c.iconName,n=c.transform,o=c.symbol,f=c.title,l=c.maskId,t=c.titleId,m=c.extra,v=c.watchable,H=v===void 0?!1:v,h=e.found?e:r,u=h.width,C=h.height,p=s==="fak",z=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(N){return m.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(m.classes).join(" "),V={children:[],attributes:b(b({},m.attributes),{},{"data-prefix":s,"data-icon":i,class:z,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(C)})},d=p&&!~m.classes.indexOf("fa-fw")?{width:"".concat(u/C*16*.0625,"em")}:{};H&&(V.attributes[w1]=""),f&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(t||s2())},children:[f]}),delete V.attributes.title);var M=b(b({},V),{},{prefix:s,iconName:i,main:r,mask:e,maskId:l,transform:n,symbol:o,styles:b(b({},d),m.styles)}),g=e.found&&r.found?z1("generateAbstractMask",M)||{children:[],attributes:{}}:z1("generateAbstractIcon",M)||{children:[],attributes:{}},S=g.children,L=g.attributes;return M.children=S,M.attributes=L,o?ct(M):Jl(M)}function X6(c){var a=c.content,r=c.width,e=c.height,s=c.transform,i=c.title,n=c.extra,o=c.watchable,f=o===void 0?!1:o,l=b(b(b({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});f&&(l[w1]="");var t=b({},n.styles);o4(s)&&(t.transform=kl({transform:s,startCentered:!0,width:r,height:e}),t["-webkit-transform"]=t.transform);var m=W2(t);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function at(c){var a=c.content,r=c.title,e=c.extra,s=b(b(b({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),i=W2(e.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var y3=e1.styles;function j3(c){var a=c[0],r=c[1],e=c.slice(4),s=a4(e,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(N1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(N1.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(N1.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:r,icon:n}}var et={found:!1,width:512,height:512};function rt(c,a){!o0&&!y.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function W3(c,a){var r=a;return a==="fa"&&y.styleDefault!==null&&(a=C1()),new Promise(function(e,s){if(z1("missingIconAbstract"),r==="fa"){var i=M0(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&y3[a]&&y3[a][c]){var n=y3[a][c];return e(j3(n))}rt(c,a),e(b(b({},et),{},{icon:y.showMissingIcons&&c?z1("missingIconAbstract")||{}:{}}))})}var Q6=function(){},Z3=y.measurePerformance&&b2&&b2.mark&&b2.measure?b2:{mark:Q6,measure:Q6},_1='FA "6.3.0"',it=function(a){return Z3.mark("".concat(_1," ").concat(a," begins")),function(){return L0(a)}},L0=function(a){Z3.mark("".concat(_1," ").concat(a," ends")),Z3.measure("".concat(_1," ").concat(a),"".concat(_1," ").concat(a," begins"),"".concat(_1," ").concat(a," ends"))},v4={begin:it,end:L0},F2=function(){};function J6(c){var a=c.getAttribute?c.getAttribute(w1):null;return typeof a=="string"}function st(c){var a=c.getAttribute?c.getAttribute(r4):null,r=c.getAttribute?c.getAttribute(i4):null;return a&&r}function nt(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(y.replacementClass)}function ot(){if(y.autoReplaceSvg===!0)return R2.replace;var c=R2[y.autoReplaceSvg];return c||R2.replace}function ft(c){return $.createElementNS("http://www.w3.org/2000/svg",c)}function lt(c){return $.createElement(c)}function g0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.ceFn,e=r===void 0?c.tag==="svg"?ft:lt:r;if(typeof c=="string")return $.createTextNode(c);var s=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(g0(n,{ceFn:e}))}),s}function tt(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var R2={replace:function(a){var r=a[0];if(r.parentNode)if(a[1].forEach(function(s){r.parentNode.insertBefore(g0(s),r)}),r.getAttribute(w1)===null&&y.keepOriginalSource){var e=$.createComment(tt(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(a){var r=a[0],e=a[1];if(~n4(r).indexOf(y.replacementClass))return R2.replace(a);var s=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(o,f){return f===y.replacementClass||f.match(s)?o.toSvg.push(f):o.toNode.push(f),o},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}var n=e.map(function(o){return v2(o)}).join(`
`);r.setAttribute(w1,""),r.innerHTML=n}};function c8(c){c()}function x0(c,a){var r=typeof a=="function"?a:F2;if(c.length===0)r();else{var e=c8;y.mutateApproach===hl&&(e=M1.requestAnimationFrame||c8),e(function(){var s=ot(),i=v4.begin("mutate");c.map(s),i(),r()})}}var z4=!1;function b0(){z4=!0}function _3(){z4=!1}var q2=null;function a8(c){if(G6&&y.observeMutations){var a=c.treeCallback,r=a===void 0?F2:a,e=c.nodeCallback,s=e===void 0?F2:e,i=c.pseudoElementsCallback,n=i===void 0?F2:i,o=c.observeMutationsRoot,f=o===void 0?$:o;q2=new G6(function(l){if(!z4){var t=C1();U1(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!J6(m.addedNodes[0])&&(y.searchPseudoElements&&n(m.target),r(m.target)),m.type==="attributes"&&m.target.parentNode&&y.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&J6(m.target)&&~Cl.indexOf(m.attributeName))if(m.attributeName==="class"&&st(m.target)){var v=_2(n4(m.target)),H=v.prefix,h=v.iconName;m.target.setAttribute(r4,H||t),h&&m.target.setAttribute(i4,h)}else nt(m.target)&&s(m.target)})}}),h1&&q2.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mt(){q2&&q2.disconnect()}function vt(c){var a=c.getAttribute("style"),r=[];return a&&(r=a.split(";").reduce(function(e,s){var i=s.split(":"),n=i[0],o=i.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),r}function zt(c){var a=c.getAttribute("data-prefix"),r=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=_2(n4(c));return s.prefix||(s.prefix=C1()),a&&r&&(s.prefix=a,s.iconName=r),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=Gl(s.prefix,c.innerText)||l4(s.prefix,I3(c.innerText))),!s.iconName&&y.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function ht(c){var a=U1(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),r=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return y.autoA11y&&(r?a["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(e||s2()):(a["aria-hidden"]="true",a.focusable="false")),a}function Ht(){return{iconName:null,title:null,titleId:null,prefix:null,transform:n1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=zt(c),e=r.iconName,s=r.prefix,i=r.rest,n=ht(c),o=q3("parseNodeAttributes",{},c),f=a.styleParser?vt(c):[];return b({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:n1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:n}},o)}var ut=e1.styles;function N0(c){var a=y.autoReplaceSvg==="nest"?e8(c,{styleParser:!1}):e8(c);return~a.extra.classes.indexOf(f0)?z1("generateLayersText",c,a):z1("generateSvgReplacementMutation",c,a)}var L1=new Set;s4.map(function(c){L1.add("fa-".concat(c))});Object.keys(a2[O]).map(L1.add.bind(L1));Object.keys(a2[I]).map(L1.add.bind(L1));L1=t2(L1);function r8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!h1)return Promise.resolve();var r=$.documentElement.classList,e=function(m){return r.add("".concat(j6,"-").concat(m))},s=function(m){return r.remove("".concat(j6,"-").concat(m))},i=y.autoFetchSvg?L1:s4.map(function(t){return"fa-".concat(t)}).concat(Object.keys(ut));i.includes("fa")||i.push("fa");var n=[".".concat(f0,":not([").concat(w1,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(w1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var o=[];try{o=U1(c.querySelectorAll(n))}catch{}if(o.length>0)e("pending"),s("complete");else return Promise.resolve();var f=v4.begin("onTree"),l=o.reduce(function(t,m){try{var v=N0(m);v&&t.push(v)}catch(H){o0||H.name==="MissingIcon"&&console.error(H)}return t},[]);return new Promise(function(t,m){Promise.all(l).then(function(v){x0(v,function(){e("active"),e("complete"),s("pending"),typeof a=="function"&&a(),f(),t()})}).catch(function(v){f(),m(v)})})}function pt(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;N0(c).then(function(r){r&&x0([r],a)})}function Vt(c){return function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:G3(a||{}),s=r.mask;return s&&(s=(s||{}).icon?s:G3(s||{})),c(e,b(b({},r),{},{mask:s}))}}var dt=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,s=e===void 0?n1:e,i=r.symbol,n=i===void 0?!1:i,o=r.mask,f=o===void 0?null:o,l=r.maskId,t=l===void 0?null:l,m=r.title,v=m===void 0?null:m,H=r.titleId,h=H===void 0?null:H,u=r.classes,C=u===void 0?[]:u,p=r.attributes,z=p===void 0?{}:p,V=r.styles,d=V===void 0?{}:V;if(a){var M=a.prefix,g=a.iconName,S=a.icon;return K2(b({type:"icon"},a),function(){return A1("beforeDOMElementCreation",{iconDefinition:a,params:r}),y.autoA11y&&(v?z["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(h||s2()):(z["aria-hidden"]="true",z.focusable="false")),m4({icons:{main:j3(S),mask:f?j3(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:g,transform:b(b({},n1),s),symbol:n,title:v,maskId:t,titleId:h,extra:{attributes:z,styles:d,classes:C}})})}},Mt={mixout:function(){return{icon:Vt(dt)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=r8,r.nodeCallback=pt,r}}},provides:function(a){a.i2svg=function(r){var e=r.node,s=e===void 0?$:e,i=r.callback,n=i===void 0?function(){}:i;return r8(s,n)},a.generateSvgReplacementMutation=function(r,e){var s=e.iconName,i=e.title,n=e.titleId,o=e.prefix,f=e.transform,l=e.symbol,t=e.mask,m=e.maskId,v=e.extra;return new Promise(function(H,h){Promise.all([W3(s,o),t.iconName?W3(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(u){var C=a4(u,2),p=C[0],z=C[1];H([r,m4({icons:{main:p,mask:z},prefix:o,iconName:s,transform:f,symbol:l,maskId:m,title:i,titleId:n,extra:v,watchable:!0})])}).catch(h)})},a.generateAbstractIcon=function(r){var e=r.children,s=r.attributes,i=r.main,n=r.transform,o=r.styles,f=W2(o);f.length>0&&(s.style=f);var l;return o4(n)&&(l=z1("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),e.push(l||i.icon),{children:e,attributes:s}}}},Ct={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.classes,i=s===void 0?[]:s;return K2({type:"layer"},function(){A1("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(o){Array.isArray(o)?o.map(function(f){n=n.concat(f.abstract)}):n=n.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(t2(i)).join(" ")},children:n}]})}}}},Lt={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.title,i=s===void 0?null:s,n=e.classes,o=n===void 0?[]:n,f=e.attributes,l=f===void 0?{}:f,t=e.styles,m=t===void 0?{}:t;return K2({type:"counter",content:r},function(){return A1("beforeDOMElementCreation",{content:r,params:e}),at({content:r.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(t2(o))}})})}}}},gt={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=e.transform,i=s===void 0?n1:s,n=e.title,o=n===void 0?null:n,f=e.classes,l=f===void 0?[]:f,t=e.attributes,m=t===void 0?{}:t,v=e.styles,H=v===void 0?{}:v;return K2({type:"text",content:r},function(){return A1("beforeDOMElementCreation",{content:r,params:e}),X6({content:r,transform:b(b({},n1),i),title:o,extra:{attributes:m,styles:H,classes:["".concat(y.cssPrefix,"-layers-text")].concat(t2(l))}})})}}},provides:function(a){a.generateLayersText=function(r,e){var s=e.title,i=e.transform,n=e.extra,o=null,f=null;if(i0){var l=parseInt(getComputedStyle(r).fontSize,10),t=r.getBoundingClientRect();o=t.width/l,f=t.height/l}return y.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,X6({content:r.innerHTML,width:o,height:f,transform:i,title:s,extra:n,watchable:!0})])}}},xt=new RegExp('"',"ug"),i8=[1105920,1112319];function bt(c){var a=c.replace(xt,""),r=Dl(a,0),e=r>=i8[0]&&r<=i8[1],s=a.length===2?a[0]===a[1]:!1;return{value:I3(s?a[0]:a),isSecondary:e||s}}function s8(c,a){var r="".concat(zl).concat(a.replace(":","-"));return new Promise(function(e,s){if(c.getAttribute(r)!==null)return e();var i=U1(c.children),n=i.filter(function(S){return S.getAttribute($3)===a})[0],o=M1.getComputedStyle(c,a),f=o.getPropertyValue("font-family").match(Vl),l=o.getPropertyValue("font-weight"),t=o.getPropertyValue("content");if(n&&!f)return c.removeChild(n),e();if(f&&t!=="none"&&t!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?I:O,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?e2[v][f[2].toLowerCase()]:dl[v][l],h=bt(m),u=h.value,C=h.isSecondary,p=f[0].startsWith("FontAwesome"),z=l4(H,u),V=z;if(p){var d=jl(u);d.iconName&&d.prefix&&(z=d.iconName,H=d.prefix)}if(z&&!C&&(!n||n.getAttribute(r4)!==H||n.getAttribute(i4)!==V)){c.setAttribute(r,V),n&&c.removeChild(n);var M=Ht(),g=M.extra;g.attributes[$3]=a,W3(z,H).then(function(S){var L=m4(b(b({},M),{},{icons:{main:S,mask:t4()},prefix:H,iconName:V,extra:g,watchable:!0})),N=$.createElement("svg");a==="::before"?c.insertBefore(N,c.firstChild):c.appendChild(N),N.outerHTML=L.map(function(F){return v2(F)}).join(`
\v\f\r                　\u2028\u2029\uFEFF`},"58a8":function(e,s,i){var n=i("1d80"),o=i("5899"),f="["+o+"]",l=RegExp("^"+f+f+"*"),t=RegExp(f+f+"*$"),m=function(v){return function(H){var h=String(n(H));return v&1&&(h=h.replace(l,"")),v&2&&(h=h.replace(t,"")),h}};e.exports={start:m(1),end:m(2),trim:m(3)}},"5c6c":function(e,s){e.exports=function(i,n){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:n}}},"65f0":function(e,s,i){var n=i("861d"),o=i("e8b5"),f=i("b622"),l=f("species");e.exports=function(t,m){var v;return o(t)&&(v=t.constructor,typeof v=="function"&&(v===Array||o(v.prototype))?v=void 0:n(v)&&(v=v[l],v===null&&(v=void 0))),new(v===void 0?Array:v)(m===0?0:m)}},"69f3":function(e,s,i){var n=i("7f9a"),o=i("da84"),f=i("861d"),l=i("9112"),t=i("5135"),m=i("f772"),v=i("d012"),H=o.WeakMap,h,u,C,p=function(L){return C(L)?u(L):h(L,{})},z=function(L){return function(N){var F;if(!f(N)||(F=u(N)).type!==L)throw TypeError("Incompatible receiver, "+L+" required");return F}};if(n){var V=new H,d=V.get,M=V.has,g=V.set;h=function(L,N){return g.call(V,L,N),N},u=function(L){return d.call(V,L)||{}},C=function(L){return M.call(V,L)}}else{var S=m("state");v[S]=!0,h=function(L,N){return l(L,S,N),N},u=function(L){return t(L,S)?L[S]:{}},C=function(L){return t(L,S)}}e.exports={set:h,get:u,has:C,enforce:p,getterFor:z}},"6eeb":function(e,s,i){var n=i("da84"),o=i("9112"),f=i("5135"),l=i("ce4e"),t=i("8925"),m=i("69f3"),v=m.get,H=m.enforce,h=String(String).split("String");(e.exports=function(u,C,p,z){var V=z?!!z.unsafe:!1,d=z?!!z.enumerable:!1,M=z?!!z.noTargetGet:!1;if(typeof p=="function"&&(typeof C=="string"&&!f(p,"name")&&o(p,"name",C),H(p).source=h.join(typeof C=="string"?C:"")),u===n){d?u[C]=p:l(C,p);return}else V?!M&&u[C]&&(d=!0):delete u[C];d?u[C]=p:o(u,C,p)})(Function.prototype,"toString",function(){return typeof this=="function"&&v(this).source||t(this)})},7156:function(e,s,i){var n=i("861d"),o=i("d2bb");e.exports=function(f,l,t){var m,v;return o&&typeof(m=l.constructor)=="function"&&m!==t&&n(v=m.prototype)&&v!==t.prototype&&o(f,v),f}},7418:function(e,s){s.f=Object.getOwnPropertySymbols},7839:function(e,s){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,s,i){var n=i("1d80");e.exports=function(o){return Object(n(o))}},"7c73":function(e,s,i){var n=i("825a"),o=i("37e8"),f=i("7839"),l=i("d012"),t=i("1be4"),m=i("cc12"),v=i("f772"),H=">",h="<",u="prototype",C="script",p=v("IE_PROTO"),z=function(){},V=function(L){return h+C+H+L+h+"/"+C+H},d=function(L){L.write(V("")),L.close();var N=L.parentWindow.Object;return L=null,N},M=function(){var L=m("iframe"),N="java"+C+":",F;return L.style.display="none",t.appendChild(L),L.src=String(N),F=L.contentWindow.document,F.open(),F.write(V("document.F=Object")),F.close(),F.F},g,S=function(){try{g=document.domain&&new ActiveXObject("htmlfile")}catch{}S=g?d(g):M();for(var L=f.length;L--;)delete S[u][f[L]];return S()};l[p]=!0,e.exports=Object.create||function(N,F){var U;return N!==null?(z[u]=n(N),U=new z,z[u]=null,U[p]=N):U=S(),F===void 0?U:o(U,F)}},"7f9a":function(e,s,i){var n=i("da84"),o=i("8925"),f=n.WeakMap;e.exports=typeof f=="function"&&/native code/.test(o(f))},"825a":function(e,s,i){var n=i("861d");e.exports=function(o){if(!n(o))throw TypeError(String(o)+" is not an object");return o}},"83ab":function(e,s,i){var n=i("d039");e.exports=!n(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},"861d":function(e,s){e.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},8875:function(e,s,i){var n,o,f;(function(l,t){o=[],n=t,f=typeof n=="function"?n.apply(s,o):n,f!==void 0&&(e.exports=f)})(typeof self<"u"?self:this,function(){function l(){var t=Object.getOwnPropertyDescriptor(document,"currentScript");if(!t&&"currentScript"in document&&document.currentScript||t&&t.get!==l&&document.currentScript)return document.currentScript;try{throw new Error}catch(g){var m=/.*at [^(]*\((.*):(.+):(.+)\)$/ig,v=/@([^@]*):(\d+):(\d+)\s*$/ig,H=m.exec(g.stack)||v.exec(g.stack),h=H&&H[1]||!1,u=H&&H[2]||!1,C=document.location.href.replace(document.location.hash,""),p,z,V,d=document.getElementsByTagName("script");h===C&&(p=document.documentElement.outerHTML,z=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),V=p.replace(z,"$1").trim());for(var M=0;M<d.length;M++)if(d[M].readyState==="interactive"||d[M].src===h||h===C&&d[M].innerHTML&&d[M].innerHTML.trim()===V)return d[M];return null}}return l})},8925:function(e,s,i){var n=i("c6cd"),o=Function.toString;typeof n.inspectSource!="function"&&(n.inspectSource=function(f){return o.call(f)}),e.exports=n.inspectSource},"8bbf":function(e,s){e.exports=r},"90e3":function(e,s){var i=0,n=Math.random();e.exports=function(o){return"Symbol("+String(o===void 0?"":o)+")_"+(++i+n).toString(36)}},9112:function(e,s,i){var n=i("83ab"),o=i("9bf2"),f=i("5c6c");e.exports=n?function(l,t,m){return o.f(l,t,f(1,m))}:function(l,t,m){return l[t]=m,l}},"94ca":function(e,s,i){var n=i("d039"),o=/#|\.prototype\./,f=function(H,h){var u=t[l(H)];return u==v?!0:u==m?!1:typeof h=="function"?n(h):!!h},l=f.normalize=function(H){return String(H).replace(o,".").toLowerCase()},t=f.data={},m=f.NATIVE="N",v=f.POLYFILL="P";e.exports=f},"9bdd":function(e,s,i){var n=i("825a");e.exports=function(o,f,l,t){try{return t?f(n(l)[0],l[1]):f(l)}catch(v){var m=o.return;throw m!==void 0&&n(m.call(o)),v}}},"9bf2":function(e,s,i){var n=i("83ab"),o=i("0cfb"),f=i("825a"),l=i("c04e"),t=Object.defineProperty;s.f=n?t:function(v,H,h){if(f(v),H=l(H,!0),f(h),o)try{return t(v,H,h)}catch{}if("get"in h||"set"in h)throw TypeError("Accessors not supported");return"value"in h&&(v[H]=h.value),v}},"9fab":function(e,s,i){(function(n,o){e.exports=o()})(this,function(n){return function(o,f){if(f==null&&(f={fuzzy:!0}),/youtu\.?be/.test(o)){var l,t=[/youtu\.be\/([^#\&\?]{11})/,/\?v=([^#\&\?]{11})/,/\&v=([^#\&\?]{11})/,/embed\/([^#\&\?]{11})/,/\/v\/([^#\&\?]{11})/];for(l=0;l<t.length;++l)if(t[l].test(o))return t[l].exec(o)[1];if(f.fuzzy){var m=o.split(/[\/\&\?=#\.\s]/g);for(l=0;l<m.length;++l)if(/^[^#\&\?]{11}$/.test(m[l]))return m[l]}}return null}})},a640:function(e,s,i){var n=i("d039");e.exports=function(o,f){var l=[][o];return!!l&&n(function(){l.call(null,f||function(){throw 1},1)})}},a691:function(e,s){var i=Math.ceil,n=Math.floor;e.exports=function(o){return isNaN(o=+o)?0:(o>0?n:i)(o)}},a9e3:function(e,s,i){var n=i("83ab"),o=i("da84"),f=i("94ca"),l=i("6eeb"),t=i("5135"),m=i("c6b6"),v=i("7156"),H=i("c04e"),h=i("d039"),u=i("7c73"),C=i("241c").f,p=i("06cf").f,z=i("9bf2").f,V=i("58a8").trim,d="Number",M=o[d],g=M.prototype,S=m(u(g))==d,L=function(E){var D=H(E,!1),_,W,q1,Q,g1,V2,k1,q;if(typeof D=="string"&&D.length>2){if(D=V(D),_=D.charCodeAt(0),_===43||_===45){if(W=D.charCodeAt(2),W===88||W===120)return NaN}else if(_===48){switch(D.charCodeAt(1)){case 66:case 98:q1=2,Q=49;break;case 79:case 111:q1=8,Q=55;break;default:return+D}for(g1=D.slice(2),V2=g1.length,k1=0;k1<V2;k1++)if(q=g1.charCodeAt(k1),q<48||q>Q)return NaN;return parseInt(g1,q1)}}return+D};if(f(d,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var N=function(D){var _=arguments.length<1?0:D,W=this;return W instanceof N&&(S?h(function(){g.valueOf.call(W)}):m(W)!=d)?v(new M(L(_)),W,N):L(_)},F=n?C(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),U=0,G;F.length>U;U++)t(M,G=F[U])&&!t(N,G)&&z(N,G,p(M,G));N.prototype=g,g.constructor=N,l(o,d,N)}},ae40:function(e,s,i){var n=i("83ab"),o=i("d039"),f=i("5135"),l=Object.defineProperty,t={},m=function(v){throw v};e.exports=function(v,H){if(f(t,v))return t[v];H||(H={});var h=[][v],u=f(H,"ACCESSORS")?H.ACCESSORS:!1,C=f(H,0)?H[0]:m,p=f(H,1)?H[1]:void 0;return t[v]=!!h&&!o(function(){if(u&&!n)return!0;var z={length:-1};u?l(z,1,{enumerable:!0,get:m}):z[1]=1,h.call(z,C,p)})}},b041:function(e,s,i){var n=i("00ee"),o=i("f5df");e.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},b575:function(e,s,i){var n=i("da84"),o=i("06cf").f,f=i("c6b6"),l=i("2cf4").set,t=i("1cdc"),m=n.MutationObserver||n.WebKitMutationObserver,v=n.process,H=n.Promise,h=f(v)=="process",u=o(n,"queueMicrotask"),C=u&&u.value,p,z,V,d,M,g,S,L;C||(p=function(){var N,F;for(h&&(N=v.domain)&&N.exit();z;){F=z.fn,z=z.next;try{F()}catch(U){throw z?d():V=void 0,U}}V=void 0,N&&N.enter()},h?d=function(){v.nextTick(p)}:m&&!t?(M=!0,g=document.createTextNode(""),new m(p).observe(g,{characterData:!0}),d=function(){g.data=M=!M}):H&&H.resolve?(S=H.resolve(void 0),L=S.then,d=function(){L.call(S,p)}):d=function(){l.call(n,p)}),e.exports=C||function(N){var F={fn:N,next:void 0};V&&(V.next=F),z||(z=F,d()),V=F}},b622:function(e,s,i){var n=i("da84"),o=i("5692"),f=i("5135"),l=i("90e3"),t=i("4930"),m=i("fdbf"),v=o("wks"),H=n.Symbol,h=m?H:H&&H.withoutSetter||l;e.exports=function(u){return f(v,u)||(t&&f(H,u)?v[u]=H[u]:v[u]=h("Symbol."+u)),v[u]}},b727:function(e,s,i){var n=i("0366"),o=i("44ad"),f=i("7b0b"),l=i("50c4"),t=i("65f0"),m=[].push,v=function(H){var h=H==1,u=H==2,C=H==3,p=H==4,z=H==6,V=H==5||z;return function(d,M,g,S){for(var L=f(d),N=o(L),F=n(M,g,3),U=l(N.length),G=0,E=S||t,D=h?E(d,U):u?E(d,0):void 0,_,W;U>G;G++)if((V||G in N)&&(_=N[G],W=F(_,G,L),H)){if(h)D[G]=W;else if(W)switch(H){case 3:return!0;case 5:return _;case 6:return G;case 2:m.call(D,_)}else if(p)return!1}return z?-1:C||p?p:D}};e.exports={forEach:v(0),map:v(1),filter:v(2),some:v(3),every:v(4),find:v(5),findIndex:v(6)}},c04e:function(e,s,i){var n=i("861d");e.exports=function(o,f){if(!n(o))return o;var l,t;if(f&&typeof(l=o.toString)=="function"&&!n(t=l.call(o))||typeof(l=o.valueOf)=="function"&&!n(t=l.call(o))||!f&&typeof(l=o.toString)=="function"&&!n(t=l.call(o)))return t;throw TypeError("Can't convert object to primitive value")}},c430:function(e,s){e.exports=!1},c6b6:function(e,s){var i={}.toString;e.exports=function(n){return i.call(n).slice(8,-1)}},c6cd:function(e,s,i){var n=i("da84"),o=i("ce4e"),f="__core-js_shared__",l=n[f]||o(f,{});e.exports=l},c8ba:function(e,s){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch{typeof window=="object"&&(i=window)}e.exports=i},ca84:function(e,s,i){var n=i("5135"),o=i("fc6a"),f=i("4d64").indexOf,l=i("d012");e.exports=function(t,m){var v=o(t),H=0,h=[],u;for(u in v)!n(l,u)&&n(v,u)&&h.push(u);for(;m.length>H;)n(v,u=m[H++])&&(~f(h,u)||h.push(u));return h}},cc12:function(e,s,i){var n=i("da84"),o=i("861d"),f=n.document,l=o(f)&&o(f.createElement);e.exports=function(t){return l?f.createElement(t):{}}},cdf9:function(e,s,i){var n=i("825a"),o=i("861d"),f=i("f069");e.exports=function(l,t){if(n(l),o(t)&&t.constructor===l)return t;var m=f.f(l),v=m.resolve;return v(t),m.promise}},ce4e:function(e,s,i){var n=i("da84"),o=i("9112");e.exports=function(f,l){try{o(n,f,l)}catch{n[f]=l}return l}},d012:function(e,s){e.exports={}},d039:function(e,s){e.exports=function(i){try{return!!i()}catch{return!0}}},d066:function(e,s,i){var n=i("428f"),o=i("da84"),f=function(l){return typeof l=="function"?l:void 0};e.exports=function(l,t){return arguments.length<2?f(n[l])||f(o[l]):n[l]&&n[l][t]||o[l]&&o[l][t]}},d1e7:function(e,s,i){var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,f=o&&!n.call({1:2},1);s.f=f?function(t){var m=o(this,t);return!!m&&m.enumerable}:n},d2bb:function(e,s,i){var n=i("825a"),o=i("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var f=!1,l={},t;try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(l,[]),f=l instanceof Array}catch{}return function(v,H){return n(v),o(H),f?t.call(v,H):v.__proto__=H,v}}():void 0)},d3b7:function(e,s,i){var n=i("00ee"),o=i("6eeb"),f=i("b041");n||o(Object.prototype,"toString",f,{unsafe:!0})},d44e:function(e,s,i){var n=i("9bf2").f,o=i("5135"),f=i("b622"),l=f("toStringTag");e.exports=function(t,m,v){t&&!o(t=v?t:t.prototype,l)&&n(t,l,{configurable:!0,value:m})}},da84:function(e,s,i){(function(n){var o=function(f){return f&&f.Math==Math&&f};e.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof n=="object"&&n)||Function("return this")()}).call(this,i("c8ba"))},df75:function(e,s,i){var n=i("ca84"),o=i("7839");e.exports=Object.keys||function(l){return n(l,o)}},e2cc:function(e,s,i){var n=i("6eeb");e.exports=function(o,f,l){for(var t in f)n(o,t,f[t],l);return o}},e667:function(e,s){e.exports=function(i){try{return{error:!1,value:i()}}catch(n){return{error:!0,value:n}}}},e6cf:function(e,s,i){var n=i("23e7"),o=i("c430"),f=i("da84"),l=i("d066"),t=i("fea9"),m=i("6eeb"),v=i("e2cc"),H=i("d44e"),h=i("2626"),u=i("861d"),C=i("1c0b"),p=i("19aa"),z=i("c6b6"),V=i("8925"),d=i("2266"),M=i("1c7e"),g=i("4840"),S=i("2cf4").set,L=i("b575"),N=i("cdf9"),F=i("44de"),U=i("f069"),G=i("e667"),E=i("69f3"),D=i("94ca"),_=i("b622"),W=i("2d00"),q1=_("species"),Q="Promise",g1=E.get,V2=E.set,k1=E.getterFor(Q),q=t,h6=f.TypeError,z3=f.document,d2=f.process,H6=l("fetch"),P1=U.f,fn=P1,G1=z(d2)=="process",ln=!!(z3&&z3.createEvent&&f.dispatchEvent),u6="unhandledrejection",tn="rejectionhandled",p6=0,V6=1,mn=2,h3=1,d6=2,M2,M6,H3,C6,j1=D(Q,function(){var w=V(q)!==String(q);if(!w&&(W===66||!G1&&typeof PromiseRejectionEvent!="function")||o&&!q.prototype.finally)return!0;if(W>=51&&/native code/.test(q))return!1;var x=q.resolve(1),P=function(R){R(function(){},function(){})},T=x.constructor={};return T[q1]=P,!(x.then(function(){})instanceof P)}),vn=j1||!M(function(w){q.all(w).catch(function(){})}),L6=function(w){var x;return u(w)&&typeof(x=w.then)=="function"?x:!1},u3=function(w,x,P){if(!x.notified){x.notified=!0;var T=x.reactions;L(function(){for(var R=x.value,K=x.state==V6,f1=0;T.length>f1;){var i1=T[f1++],H1=K?i1.ok:i1.fail,C2=i1.resolve,u1=i1.reject,p1=i1.domain,V1,W1,L2;try{H1?(K||(x.rejection===d6&&hn(w,x),x.rejection=h3),H1===!0?V1=R:(p1&&p1.enter(),V1=H1(R),p1&&(p1.exit(),L2=!0)),V1===i1.promise?u1(h6("Promise-chain cycle")):(W1=L6(V1))?W1.call(V1,C2,u1):C2(V1)):u1(R)}catch(Hn){p1&&!L2&&p1.exit(),u1(Hn)}}x.reactions=[],x.notified=!1,P&&!x.rejection&&zn(w,x)})}},g6=function(w,x,P){var T,R;ln?(T=z3.createEvent("Event"),T.promise=x,T.reason=P,T.initEvent(w,!1,!0),f.dispatchEvent(T)):T={promise:x,reason:P},(R=f["on"+w])?R(T):w===u6&&F("Unhandled promise rejection",P)},zn=function(w,x){S.call(f,function(){var P=x.value,T=x6(x),R;if(T&&(R=G(function(){G1?d2.emit("unhandledRejection",P,w):g6(u6,w,P)}),x.rejection=G1||x6(x)?d6:h3,R.error))throw R.value})},x6=function(w){return w.rejection!==h3&&!w.parent},hn=function(w,x){S.call(f,function(){G1?d2.emit("rejectionHandled",w):g6(tn,w,x.value)})},T1=function(w,x,P,T){return function(R){w(x,P,R,T)}},F1=function(w,x,P,T){x.done||(x.done=!0,T&&(x=T),x.value=P,x.state=mn,u3(w,x,!0))},p3=function(w,x,P,T){if(!x.done){x.done=!0,T&&(x=T);try{if(w===P)throw h6("Promise can't be resolved itself");var R=L6(P);R?L(function(){var K={done:!1};try{R.call(P,T1(p3,w,K,x),T1(F1,w,K,x))}catch(f1){F1(w,K,f1,x)}}):(x.value=P,x.state=V6,u3(w,x,!1))}catch(K){F1(w,{done:!1},K,x)}}};j1&&(q=function(x){p(this,q,Q),C(x),M2.call(this);var P=g1(this);try{x(T1(p3,this,P),T1(F1,this,P))}catch(T){F1(this,P,T)}},M2=function(x){V2(this,{type:Q,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:p6,value:void 0})},M2.prototype=v(q.prototype,{then:function(x,P){var T=k1(this),R=P1(g(this,q));return R.ok=typeof x=="function"?x:!0,R.fail=typeof P=="function"&&P,R.domain=G1?d2.domain:void 0,T.parent=!0,T.reactions.push(R),T.state!=p6&&u3(this,T,!1),R.promise},catch:function(w){return this.then(void 0,w)}}),M6=function(){var w=new M2,x=g1(w);this.promise=w,this.resolve=T1(p3,w,x),this.reject=T1(F1,w,x)},U.f=P1=function(w){return w===q||w===H3?new M6(w):fn(w)},!o&&typeof t=="function"&&(C6=t.prototype.then,m(t.prototype,"then",function(x,P){var T=this;return new q(function(R,K){C6.call(T,R,K)}).then(x,P)},{unsafe:!0}),typeof H6=="function"&&n({global:!0,enumerable:!0,forced:!0},{fetch:function(x){return N(q,H6.apply(f,arguments))}}))),n({global:!0,wrap:!0,forced:j1},{Promise:q}),H(q,Q,!1,!0),h(Q),H3=l(Q),n({target:Q,stat:!0,forced:j1},{reject:function(x){var P=P1(this);return P.reject.call(void 0,x),P.promise}}),n({target:Q,stat:!0,forced:o||j1},{resolve:function(x){return N(o&&this===H3?q:this,x)}}),n({target:Q,stat:!0,forced:vn},{all:function(x){var P=this,T=P1(P),R=T.resolve,K=T.reject,f1=G(function(){var i1=C(P.resolve),H1=[],C2=0,u1=1;d(x,function(p1){var V1=C2++,W1=!1;H1.push(void 0),u1++,i1.call(P,p1).then(function(L2){W1||(W1=!0,H1[V1]=L2,--u1||R(H1))},K)}),--u1||R(H1)});return f1.error&&K(f1.value),T.promise},race:function(x){var P=this,T=P1(P),R=T.reject,K=G(function(){var f1=C(P.resolve);d(x,function(i1){f1.call(P,i1).then(T.resolve,R)})});return K.error&&R(K.value),T.promise}})},e893:function(e,s,i){var n=i("5135"),o=i("56ef"),f=i("06cf"),l=i("9bf2");e.exports=function(t,m){for(var v=o(m),H=l.f,h=f.f,u=0;u<v.length;u++){var C=v[u];n(t,C)||H(t,C,h(m,C))}}},e8b5:function(e,s,i){var n=i("c6b6");e.exports=Array.isArray||function(f){return n(f)=="Array"}},e95a:function(e,s,i){var n=i("b622"),o=i("3f8c"),f=n("iterator"),l=Array.prototype;e.exports=function(t){return t!==void 0&&(o.Array===t||l[f]===t)}},f069:function(e,s,i){var n=i("1c0b"),o=function(f){var l,t;this.promise=new f(function(m,v){if(l!==void 0||t!==void 0)throw TypeError("Bad Promise constructor");l=m,t=v}),this.resolve=n(l),this.reject=n(t)};e.exports.f=function(f){return new o(f)}},f5df:function(e,s,i){var n=i("00ee"),o=i("c6b6"),f=i("b622"),l=f("toStringTag"),t=o(function(){return arguments}())=="Arguments",m=function(v,H){try{return v[H]}catch{}};e.exports=n?o:function(v){var H,h,u;return v===void 0?"Undefined":v===null?"Null":typeof(h=m(H=Object(v),l))=="string"?h:t?o(H):(u=o(H))=="Object"&&typeof H.callee=="function"?"Arguments":u}},f772:function(e,s,i){var n=i("5692"),o=i("90e3"),f=n("keys");e.exports=function(l){return f[l]||(f[l]=o(l))}},fb15:function(e,s,i){if(i.r(s),i.d(s,"PlayerState",function(){return H}),typeof window<"u"){var n=window.document.currentScript;{var o=i("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o})}var f=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);f&&(i.p=f[1])}var l=i("8bbf");function t(p,z,V,d,M,g){return Object(l.openBlock)(),Object(l.createBlock)("div",{style:p.wrapperStyle},[Object(l.createVNode)("div",{ref:"youtube",style:p.wrapperStyle},null,4)],4)}i("4160"),i("a9e3"),i("d3b7"),i("e6cf"),i("159b");var m=i("9fab"),v=i.n(m),H={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},h=Object(l.defineComponent)({name:"YouTube",props:{src:{type:String,required:!0},height:{type:[Number,String],default:360},width:{type:[Number,String],default:640},host:{type:String,default:"https://www.youtube.com"},vars:Object},computed:{id:function(){return v()(this.src)||this.src},wrapperStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),position:"relative"}}},data:function(){var z=function(){},V=new Promise(function(M){z=M}),d={promise:V,resolver:z,player:null,initiated:!1,ready:!1,iframeStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}};return d},mounted:function(){var z=this;window.onYouTubeIframeAPIReadyResolvers||(window.onYouTubeIframeAPIReadyResolvers=[]),window.onYouTubeIframeAPIReady||(window.onYouTubeIframeAPIReady=function(){var S;(S=window.onYouTubeIframeAPIReadyResolvers)===null||S===void 0||S.forEach(function(L){L()})}),this.promise.then(function(){return z.initPlayer()});var V="youtube-iframe-js-api-script",d=document.getElementById(V);if(d)this.resolver();else{var M;(M=window.onYouTubeIframeAPIReadyResolvers)===null||M===void 0||M.push(this.resolver),d=document.createElement("script"),d.id=V,d.src="https://www.youtube.com/iframe_api";var g=document.getElementsByTagName("script")[0];g&&g.parentNode&&g.parentNode.insertBefore(d,g)}},methods:{initPlayer:function(){var z=this;this.initiated=!0,this.player=new YT.Player(this.$refs.youtube,{height:this.height,width:this.width,videoId:this.id,host:this.host,playerVars:this.vars,events:{onReady:function(d){z.ready=!0,setTimeout(function(){return z.$emit("ready",d)})},onStateChange:function(d){return z.$emit("state-change",d)},onPlaybackQualityChange:function(d){return z.$emit("playback-quality-change",d)},onPlaybackRateChange:function(d){return z.$emit("playback-rate-change",d)},onError:function(d){return z.$emit("error",d)},onApiChange:function(d){return z.$emit("api-change",d)}}})},cueVideoById:function(z,V,d){var M;(M=this.player)===null||M===void 0||M.cueVideoById(z,V,d)},loadVideoById:function(z,V,d){var M;(M=this.player)===null||M===void 0||M.loadVideoById(z,V,d)},cueVideoByUrl:function(z,V,d){var M;(M=this.player)===null||M===void 0||M.cueVideoByUrl(z,V,d)},loadVideoByUrl:function(z,V,d){var M;(M=this.player)===null||M===void 0||M.loadVideoByUrl(z,V,d)},cuePlaylist:function(z,V,d,M){var g;(g=this.player)===null||g===void 0||g.cuePlaylist(z,V,d,M)},loadPlaylist:function(z,V,d,M){var g;(g=this.player)===null||g===void 0||g.loadPlaylist(z,V,d,M)},playVideo:function(){var z;(z=this.player)===null||z===void 0||z.playVideo()},pauseVideo:function(){var z;(z=this.player)===null||z===void 0||z.pauseVideo()},stopVideo:function(){var z;(z=this.player)===null||z===void 0||z.stopVideo()},seekTo:function(z,V){var d;(d=this.player)===null||d===void 0||d.seekTo(z,V)},nextVideo:function(){var z;(z=this.player)===null||z===void 0||z.nextVideo()},previousVideo:function(){var z;(z=this.player)===null||z===void 0||z.previousVideo()},playVideoAt:function(z){var V;(V=this.player)===null||V===void 0||V.playVideoAt(z)},mute:function(){var z;(z=this.player)===null||z===void 0||z.mute()},unMute:function(){var z;(z=this.player)===null||z===void 0||z.unMute()},isMuted:function(){return this.player?this.player.isMuted():!1},setVolume:function(z){var V;(V=this.player)===null||V===void 0||V.setVolume(z)},getVolume:function(){return this.player?this.player.getVolume():0},getPlaybackRate:function(){return this.player?this.player.getPlaybackRate():0},setPlaybackRate:function(z){var V;(V=this.player)===null||V===void 0||V.setPlaybackRate(z)},getAvailablePlaybackRates:function(){return this.player?this.player.getAvailablePlaybackRates():[]},setLoop:function(z){var V;(V=this.player)===null||V===void 0||V.setLoop(z)},setShuffle:function(z){var V;(V=this.player)===null||V===void 0||V.setShuffle(z)},getVideoLoadedFraction:function(){return this.player?this.player.getVideoLoadedFraction():0},getPlayerState:function(){return this.player?this.player.getPlayerState():H.UNSTARTED},getCurrentTime:function(){return this.player?this.player.getCurrentTime():0},getPlaybackQuality:function(){return this.player?this.player.getPlaybackQuality():"default"},setPlaybackQuality:function(z){var V;(V=this.player)===null||V===void 0||V.setPlaybackQuality(z)},getAvailableQualityLevels:function(){return this.player?this.player.getAvailableQualityLevels():[]},getDuration:function(){return this.player?this.player.getDuration():0},getVideoUrl:function(){return this.player?this.player.getVideoUrl():""},getVideoEmbedCode:function(){return this.player?this.player.getVideoEmbedCode():""},getPlaylist:function(){return this.player?this.player.getPlaylist():[]},getPlaylistIndex:function(){return this.player?this.player.getPlaylistIndex():0}},watch:{width:function(){var z;(z=this.player)===null||z===void 0||z.setSize(+this.width,+this.height)},height:function(){var z;(z=this.player)===null||z===void 0||z.setSize(+this.width,+this.height)},src:function(){this.initiated&&this.player&&this.player.loadVideoById(this.id)}},beforeUnmount:function(){var z;(z=this.player)===null||z===void 0||z.destroy()}}),u=h;u.render=t;var C=u;s.default=C},fc6a:function(e,s,i){var n=i("44ad"),o=i("1d80");e.exports=function(f){return n(o(f))}},fdbc:function(e,s){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,s,i){var n=i("4930");e.exports=n&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},fea9:function(e,s,i){var n=i("da84");e.exports=n.Promise}}).default})})(JY);const aX=XY(Y3),eX=M8({components:{YouTube:aX},props:{item:Object,currentItemId:Number},async mounted(){const c=S1(),a=await s1(`https://api.themoviedb.org/3/movie/${this.item.id}/videos?api_key=${c.public.apiKey}&language=fr-FR`,"$UsSLG1epa5");this.trailer=null,a.data.value.results.length>0&&a.data.value.results[0].site==="YouTube"&&(this.trailer=a.data.value.results[0])},data(){return{trailer:{},isMuted:!0,hovered:!1}},methods:{onReady(){this.$refs[`youtube${this.item.id}`].mute(),this.isMuted=!0,this.$refs[`youtube${this.item.id}`].playVideo()},onStateChange(c){c.data===0&&this.$refs[`youtube${this.item.id}`].player.playVideo()},toggleMute(c){const a=this.$refs[`youtube${c}`].player;this.isMuted=!this.isMuted,this.isMuted?a.mute():a.unMute()}},computed:{varsPlayer(){return{autoplay:1,controls:0,rel:0,loop:1,modestbranding:1,iv_load_policy:3,fullscreen:1,playinline:0,frameborder:0,enablejsapi:1,origin:" https://"+window.location.host}},isActive(){return this.item.id===this.currentItemId},hScreen(){return window.innerHeight},wScreen(){return window.innerWidth}}}),rX={class:"w-full m-auto relative mt-16"},iX={key:0,class:"player"},sX=["src","alt"],nX=A("div",{class:"absolute bottom-0 top-0 left-0 right-0 z-30 bg-gradient-to-t from-black overlay"},null,-1),oX={class:"absolute top-0 right-0 left-0 z-4 mt-56"},fX={class:"mt-12 m-auto container"},lX={class:"desc-box absolute z-50 flex flex-col justify-start bg-teal-900/30 rounded-lg p-4 drop-shadow-xl w-2/6"},tX={class:"title text-4xl text-white font-bold mb-4"},mX=A("div",{class:"title text-4xl text-white font-bold mb-4"},null,-1),vX={class:"desc text-white mb-4"},zX={class:"flex items-center content-center"};function hX(c,a,r,e,s,i){const n=A3("YouTube"),o=A3("font-awesome-icon");return k(),B("div",rX,[c.isActive&&c.trailer!=null&&c.trailer.key?(k(),B("div",iX,[r1(n,{host:"https://www.youtube.com",height:c.hScreen,width:c.wScreen,src:c.trailer.key,vars:c.varsPlayer,onReady:c.onReady,onStateChange:c.onStateChange,ref:`youtube${c.item.id}`,class:"-mt-44"},null,8,["height","width","src","vars","onReady","onStateChange"]),A("div",{onClick:a[2]||(a[2]=f=>c.toggleMute(c.item.id)),class:"sound-remote absolute right-24 bottom-80 z-50 text-white text-4xl"},[A("button",null,[A("i",{class:g8(["border-4 m-auto h-14 w-14 rounded-full py-2 px-1",[c.hovered?c.isMuted?"fa fa-volume-up":"fa fa-volume-mute":c.isMuted?"fa fa-volume-mute":"fa fa-volume-up"]]),onMouseover:a[0]||(a[0]=f=>c.hovered=!0),onMouseout:a[1]||(a[1]=f=>c.hovered=!1)},null,34)])])])):(k(),B("img",{key:1,class:"w-full object-cover h-screen",src:`https://image.tmdb.org/t/p/original/${c.item.backdrop_path}`,alt:c.item.title},null,8,sX)),nX,A("div",oX,[A("div",fX,[A("div",lX,[A("div",tX,t1(c.item.title),1),mX,A("div",vX,t1(c.item.overview),1),A("div",null,[A("button",{class:"button flex align-middle items-center justify-center w-full px-6 mt-2 text-center rounded-xl border-2 border-white py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-teal-900/50 active:bg-red-700/5",onClick:a[3]||(a[3]=f=>c.$emit("show-modal",c.item))},[A("p",zX,[r1(o,{class:"px-2 text-xl text-white",icon:["fas","circle-info"]}),gn(" Plus d'infos ")])])])])])])])}const HX=o1(eX,[["render",hX]]);xn();const uX={props:{movies:Array,loading:Boolean,error:Object},data(){return{activeItemId:this.movies[0].id,isModalVisible:!1,selectedItem:null}},methods:{showModal(c){this.selectedItem=c,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},handleSlideChange(c){const a=c.realIndex;this.activeItemId=this.movies[a].id}}},pX={class:"relative"};function VX(c,a,r,e,s,i){const n=nn,o=HX,f=N8,l=y8;return k(),B("section",pX,[s.selectedItem?x8((k(),X(n,{onClose:i.closeModal,movie:s.selectedItem,key:s.selectedItem},null,8,["onClose","movie"])),[[b8,s.isModalVisible]]):Z("",!0),r1(l,{"slides-per-view":1,loop:!0,slidesPerGroup:1,pagination:!0,autoplay:{delay:15e3,disableOnInteraction:!0},onSlideChange:i.handleSlideChange},{default:c2(()=>[(k(!0),B(D1,null,J1(r.movies,(t,m)=>(k(),X(f,{class:"w-full",key:t.id,id:m},{default:c2(()=>[r1(o,{item:t,currentItemId:s.activeItemId,onShowModal:a[0]||(a[0]=v=>i.showModal(v))},null,8,["item","currentItemId"])]),_:2},1032,["id"]))),128))]),_:1},8,["onSlideChange"])])}const dX=o1(uX,[["render",VX]]);const MX={data(){return{items:[{id:1,name:"Item 1"},{id:2,name:"Item 2"},{id:3,name:"Item 3"},{id:4,name:"Item 4"},{id:5,name:"Item 5"},{id:6,name:"Item 6"}]}},props:{rounded:Boolean}},on=c=>(C8("data-v-5cbc8543"),c=c(),L8(),c),CX={key:0,class:"content flex justify-between opacity-60 animate-pulse"},LX={class:"bg-gray-800 card w-full h-full aspect-square mx-2 shadow-lg p-2 animate-pulse flex justify-center items-center"},gX=on(()=>A("div",{class:"w-6 h-6 border-t-4 border-teal-900 rounded-full animate-spin"},null,-1)),xX=[gX],bX={key:1,class:"content flex justify-between opacity-60 animate-pulse"},NX={class:"bg-gray-800 profile-pic rounded-full w-full h-full aspect-square mx-6 shadow-lg animate-pulse flex justify-center items-center"},yX=on(()=>A("div",{class:"w-6 h-6 border-t-4 border-teal-900 rounded-full animate-spin"},null,-1)),SX=[yX];function wX(c,a,r,e,s,i){return k(),B(D1,null,[r.rounded?Z("",!0):(k(),B("div",CX,[(k(!0),B(D1,null,J1(s.items,n=>(k(),B("div",LX,xX))),256))])),r.rounded?(k(),B("div",bX,[(k(!0),B(D1,null,J1(s.items,n=>(k(),B("div",NX,SX))),256))])):Z("",!0)],64)}const AX=o1(MX,[["render",wX],["__scopeId","data-v-5cbc8543"]]);const kX={props:{categoryName:String,movies:Object,loading:Boolean,error:Object,poster:Boolean,profilPicture:Boolean,classCard:String},data(){return{slideActive:!1,isModalVisible:!1,selectedItem:null}},methods:{clickNext(){if(this.$refs.next){this.slideActive=!0;const c=this.$refs.prev;c.style.display=this.slideActive?"flex":"none"}},showModal(c){this.selectedItem=c,this.isModalVisible=!0},closeModal(){this.isModalVisible=!1}}},PX={class:"text-white"},TX={class:"mx-auto"},FX={class:"categories text-2xl font-bold mx-4 py-2"},RX={key:0},BX={key:1},EX={key:2},DX=["onClick"],OX=["src","alt"],$X={key:1,class:"group profile-picture mx-6 relative rounded-full overflow-hidden"},IX={class:"img-container relative"},UX=["src","alt"],qX={class:"opacity-0 group-hover:opacity-70 transition-opacity flex justify-center absolute left-0 right-0 pb-10 pt-2 bg-black bottom-0"},GX={class:"text-ellipsis overflow-hidden text-center"},jX={class:"swiper-button-prev bg-opacity-60 h-full top-0 bottom-0 left-0",ref:"prev"};function WX(c,a,r,e,s,i){const n=nn,o=AX,f=N8,l=y8;return k(),B("section",PX,[s.selectedItem?x8((k(),X(n,{onClose:i.closeModal,movie:s.selectedItem,key:s.selectedItem},null,8,["onClose","movie"])),[[b8,s.isModalVisible]]):Z("",!0),A("div",TX,[A("h2",FX,t1(r.categoryName),1),r.loading?(k(),B("div",RX,[r1(o,{rounded:r.profilPicture},null,8,["rounded"])])):r.error?(k(),B("div",BX,t1(r.error.message),1)):(k(),B("div",EX,[r1(l,{modules:["SwiperEffectCreative"in c?c.SwiperEffectCreative:Y(bn),"SwiperNavigation"in c?c.SwiperNavigation:Y(Nn)],"slides-per-view":3,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerGroup:1,breakpoints:{480:{slidesPerView:3,slidesPerGroup:2},768:{slidesPerView:5,slidesPerGroup:4},1024:{slidesPerView:5,slidesPerGroup:4},1201:{slidesPerView:6,slidesPerGroup:5}},class:"slide-container flex flex-row transition-transform duration-300 overflow-x-visible",id:"swipper"},{default:c2(()=>[(k(!0),B(D1,null,J1(r.movies,(t,m)=>(k(),X(f,{class:g8(["slide h-max card mx-1 flex flex-col justify-center hover:cursor-pointer",r.classCard]),key:t.id,id:m},{default:c2(()=>[r.poster&&t.overview?(k(),B("div",{key:0,onClick:v=>i.showModal(t),class:"poster"},[A("img",{class:"w-fit shadow-md object-cover movie-poster",src:`https://image.tmdb.org/t/p/w400${t.poster_path}`,alt:`${t.title}`},null,8,OX)],8,DX)):Z("",!0),r.profilPicture&&t.profile_path?(k(),B("figure",$X,[A("div",IX,[A("img",{class:"w-fit shadow-md object-cover actor-poster aspect-square",src:`https://image.tmdb.org/t/p/w400${t.profile_path}`,alt:`${t.title}`},null,8,UX)]),A("figcaption",qX,[A("p",GX,t1(t.name),1)])])):Z("",!0)]),_:2},1032,["class","id"]))),128)),A("button",{class:"swiper-button-next bg-opacity-60 h-fulltop-0 bottom-0 right-0",ref:"next",onClick:a[0]||(a[0]=(...t)=>i.clickNext&&i.clickNext(...t))},null,512),A("button",jX,null,512)]),_:1},8,["modules","navigation"])]))])])}const ZX=o1(kX,[["render",WX],["__scopeId","data-v-1214058b"]]),_X={},KX={class:"bg-black text-white flex justify-center"},YX=A("h3",null,"Mon footer",-1),XX=[YX];function QX(c,a){return k(),B("div",KX,XX)}const JX=o1(_X,[["render",QX]]),cQ={data(){return{hero:{data:[],error:null,loading:!0},trendMovie:{data:null,error:null,loading:!0},trendSerie:{data:null,error:null,loading:!0},trendCelebrity:{data:null,error:null,loading:!0},aventure:{data:null,error:null,loading:!0},horror:{data:null,error:null,loading:!0},anime:{data:null,error:null,loading:!0},comedie:{data:null,error:null,loading:!0}}},computed:{async randomMovies(){const c=S1();for(;this.hero.data.length<5;){let a=Math.round(Math.random()*499)+1;const{data:r,error:e,pending:s}=await s1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&include_video=true&page=${a}&include_video=true&include_adult=false`,"$9HdNoigZVa");this.hero.data=this.hero.data.concat(r.value.results.filter(i=>i.backdrop_path&&i.overview)),this.hero.data=this.hero.data.slice(0,5),this.hero.data=Array.from(new Set(this.hero.data)),this.hero.error=e,this.hero.loading=s}}},async mounted(){const c=S1();this.randomMovies;const{data:a,error:r,pending:e}=await s1(`https://api.themoviedb.org/3/trending/movie/day?api_key=${c.public.apiKey}&language=fr-FR`,"$SPC3DsYQm5");this.trendMovie.data=a,this.trendMovie.error=r,this.trendMovie.loading=e;const{data:s,error:i,pending:n}=await s1(`https://api.themoviedb.org/3/trending/tv/day?api_key=${c.public.apiKey}&language=fr-FR`,"$qcey1wh1uB");this.trendSerie.data=s,this.trendSerie.error=i,this.trendSerie.loading=n;const{data:o,error:f,pending:l}=await s1(`https://api.themoviedb.org/3/trending/person/day?api_key=${c.public.apiKey}&language=fr-FR`,"$Q9Rpnu1ilG");this.trendCelebrity.data=o,this.trendCelebrity.error=f,this.trendCelebrity.loading=l;const{data:t,error:m,pending:v}=await s1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&with_genres=27`,"$t0gtXewoKu");this.horror.data=t,this.horror.error=m,this.horror.loading=v;const{data:H,error:h,pending:u}=await s1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&with_genres=12`,"$EgOtDIRplU");this.aventure.data=H,this.aventure.error=h,this.aventure.loading=u;const{data:C,error:p,pending:z}=await s1(`https://api.themoviedb.org/3/discover/movie?api_key=${c.public.apiKey}&language=fr-FR&with_genres=16`,"$5mNqztdQDT");this.anime.data=C,this.anime.error=p,this.anime.loading=z;const{data:V,error:d,pending:M}=await s1(`https://api.themoviedb.org/3/discover/tv?api_key=${c.public.apiKey}&language=fr-FR&with_genres=35&sort_by=popularity.desc&screened_theatrically=true`,"$Xj5Sd1ikeQ");this.comedie.data=V,this.comedie.error=d,this.comedie.loading=M}},aQ={class:"relative"},eQ={class:"hero"},rQ={class:"all-section mt-[80vh] absolute left-0 right-0 top-0"},iQ={class:"absolute top-0 right-0 left-0 z-50"},sQ={class:"bg bg-gradient-to-b from-black to-teal-900"};function nQ(c,a,r,e,s,i){var l,t,m,v,H,h,u;const n=dX,o=ZX,f=JX;return k(),B("div",aQ,[A("div",eQ,[s.hero.data&&s.hero.data.length===5?(k(),X(n,{key:0,movies:s.hero.data},null,8,["movies"])):Z("",!0)]),A("div",rQ,[A("div",iQ,[(l=s.trendMovie.data)!=null&&l.results?(k(),X(o,{key:0,movies:s.trendMovie.data.results,error:s.trendMovie.error,loading:s.trendMovie.loading,poster:"","category-name":"Les tendances - Films"},null,8,["movies","error","loading"])):Z("",!0),A("div",sQ,[(t=s.trendSerie.data)!=null&&t.results?(k(),X(o,{key:0,movies:s.trendSerie.data.results,error:s.trendSerie.error,loading:s.trendSerie.loading,poster:"","category-name":"Les tendances - Séries"},null,8,["movies","error","loading"])):Z("",!0),(m=s.trendCelebrity.data)!=null&&m.results?(k(),X(o,{key:1,movies:s.trendCelebrity.data.results,error:s.trendCelebrity.error,loading:s.trendCelebrity.loading,"profil-picture":"","class-card":"mx-6 w-max aspect-auto","category-name":"Vos célébrités préférées"},null,8,["movies","error","loading"])):Z("",!0),(v=s.aventure.data)!=null&&v.results?(k(),X(o,{key:2,movies:s.aventure.data.results,error:s.aventure.error,loading:s.aventure.loading,poster:"","category-name":"Aventure"},null,8,["movies","error","loading"])):Z("",!0),(H=s.horror.data)!=null&&H.results?(k(),X(o,{key:3,movies:s.horror.data.results,error:s.horror.error,loading:s.horror.loading,poster:"","category-name":"Horreur"},null,8,["movies","error","loading"])):Z("",!0),(h=s.anime.data)!=null&&h.results?(k(),X(o,{key:4,movies:s.anime.data.results,error:s.anime.error,loading:s.anime.loading,poster:"","category-name":"Animation"},null,8,["movies","error","loading"])):Z("",!0),(u=s.comedie.data)!=null&&u.results?(k(),X(o,{key:5,movies:s.comedie.data.results,error:s.comedie.error,loading:s.comedie.loading,poster:"","category-name":"Série comique"},null,8,["movies","error","loading"])):Z("",!0),r1(f)])])])])}const oQ=o1(cQ,[["render",nQ]]);const fQ={},lQ={class:"relative"};function tQ(c,a){const r=LY,e=oQ;return k(),B("div",lQ,[r1(r,{class:"fixed top-0 left-0 right-0"}),r1(e)])}const mQ=o1(fQ,[["render",tQ]]),v8={__name:"nuxt-root",setup(c){const a=An(()=>Q8(()=>import("./error-component.7e90f0b9.js"),["./error-component.7e90f0b9.js","./swiper-vue.9633145e.js","./swiper-vue.d7b5818e.css"],import.meta.url).then(o=>o.default||o)),r=()=>null,e=c1(),s=e.deferHydration();yn("_route",Af()),e.hooks.callHookWith(o=>o.map(f=>f()),"vue:setup");const i=c4();Sn((o,f,l)=>{e.hooks.callHook("vue:error",o,f,l).catch(t=>console.error("[nuxt] Error in `vue:error` hook",t)),yf(o)&&(o.fatal||o.unhandled)&&R1(e,bf,[o])});const{islandContext:n}=!1;return(o,f)=>(k(),X(wn,{onResolve:Y(s)},{default:c2(()=>[Y(i)?(k(),X(Y(a),{key:0,error:Y(i)},null,8,["error"])):Y(n)?(k(),X(Y(r),{key:1,context:Y(n)},null,8,["context"])):(k(),X(Y(mQ),{key:2}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=Ho.create({baseURL:po()}));let z8;const vQ=Fo(HY);z8=async function(){var s;const r=Boolean((s=window.__NUXT__)==null?void 0:s.serverRendered)?kn(v8):Pn(v8),e=ko({vueApp:r});try{await To(e,vQ)}catch(i){await e.callHook("app:error",i),e.payload.error=e.payload.error||i}try{await e.hooks.callHook("app:created",r),await e.hooks.callHook("app:beforeMount",r),r.mount("#"+df),await e.hooks.callHook("app:mounted",r),await H8()}catch(i){await e.callHook("app:error",i),e.payload.error=e.payload.error||i}},z8().catch(c=>{console.error("Error while mounting app:",c)});export{Q8 as _,X8 as a,w8 as b,o1 as c,j2 as h,Pf as n,f2 as p,c1 as u};