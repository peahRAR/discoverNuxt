import{u as b,a as w,h as S,p as N,b as q,n as A,c as P}from"./entry.420e3610.js";import{m as I,l as y,a as _,Z as R,o as B,h as C,A as T,p as E,q as z,s as m,y as g,B as j,M as L,G as U,H as V,I as H}from"./swiper-vue.e47c63dc.js";import{u as M}from"./composables.c88afd8b.js";const x=globalThis.requestIdleCallback||(e=>{const a=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{e(t)},1)}),D=globalThis.cancelIdleCallback||(e=>{clearTimeout(e)}),O=e=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{x(e)}):x(e)};async function k(e,a=w()){if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(e))return;const t=a._preloadPromises=a._preloadPromises||[];if(t.length>4)return Promise.all(t).then(()=>k(e,a));a._routePreloaded.add(e);const r=a.resolve(e).matched.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of r){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>t.splice(t.indexOf(o)));t.push(o)}await Promise.all(t)}const F=(...e)=>e.find(a=>a!==void 0),$="noopener noreferrer";function G(e){const a=e.componentName||"NuxtLink";return I({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(t,{slots:r}){const n=w(),o=y(()=>t.to||t.href||""),d=y(()=>t.external||t.target&&t.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||S(o.value,!0)),v=_(!1),i=_(null);if(t.prefetch!==!1&&t.noPrefetch!==!0&&t.target!=="_blank"&&!Z()){const f=b();let u,l=null;R(()=>{const p=X();O(()=>{u=x(()=>{var h;(h=i==null?void 0:i.value)!=null&&h.tagName&&(l=p.observe(i.value,async()=>{l==null||l(),l=null;const c=typeof o.value=="string"?o.value:n.resolve(o.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",c).catch(()=>{}),!d.value&&k(o.value,n).catch(()=>{})]),v.value=!0}))})})}),B(()=>{u&&D(u),l==null||l(),l=null})}return()=>{var p,h;if(!d.value)return C(T("RouterLink"),{ref:c=>{i.value=c==null?void 0:c.$el},to:o.value,...v.value&&!t.custom?{class:t.prefetchedClass||e.prefetchedClass}:{},activeClass:t.activeClass||e.activeClass,exactActiveClass:t.exactActiveClass||e.exactActiveClass,replace:t.replace,ariaCurrentValue:t.ariaCurrentValue,custom:t.custom,rel:t.rel},r.default);const s=typeof o.value=="object"?((p=n.resolve(o.value))==null?void 0:p.href)??null:o.value||null,f=t.target||null,u=t.noRel?null:F(t.rel,e.externalRelAttribute,s?$:"")||null,l=()=>A(s,{replace:t.replace});return t.custom?r.default?r.default({href:s,navigate:l,get route(){if(!s)return;const c=N(s);return{path:c.pathname,fullPath:c.pathname,get query(){return q(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:s}},rel:u,target:f,isExternal:d.value,isActive:!1,isExactActive:!1}):null:C("a",{ref:i,href:s,rel:u,target:f},(h=r.default)==null?void 0:h.call(r))}}})}const Q=G({componentName:"NuxtLink"});function X(){const e=b();if(e._observer)return e._observer;let a=null;const t=new Map,r=(o,d)=>(a||(a=new IntersectionObserver(v=>{for(const i of v){const s=t.get(i.target);(i.isIntersecting||i.intersectionRatio>0)&&s&&s()}})),t.set(o,d),a.observe(o),()=>{t.delete(o),a.unobserve(o),t.size===0&&(a.disconnect(),a=null)});return e._observer={observe:r}}function Z(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const J=e=>(V("data-v-30d2164e"),e=e(),H(),e),K={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},W=J(()=>m("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),Y={class:"max-w-520px text-center z-20"},ee=["textContent"],te=["textContent"],ae={class:"w-full flex items-center justify-center"},oe={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(e){const a=e;return M({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}'}]}),(t,r)=>{const n=Q;return E(),z("div",K,[W,m("div",Y,[m("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:g(e.statusCode)},null,8,ee),m("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:g(e.description)},null,8,te),m("div",ae,[j(n,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:L(()=>[U(g(e.backHome),1)]),_:1})])])])}}},le=P(oe,[["__scopeId","data-v-30d2164e"]]);export{le as default};
