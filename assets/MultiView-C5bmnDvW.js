import{defineComponent as B,computed as w,ref as M,watch as C,onUnmounted as O,openBlock as v,createElementBlock as k,Fragment as j,renderList as z,normalizeClass as D,createBlock as F,resolveDynamicComponent as L}from"vue";import{d as P,p as R,b as T}from"./vues3-_N2judu-.js";import{a as U,b as X}from"./vueuse-xTpkTi1I.js";import{b as Y}from"./vue-router-OTT23yck.js";import{$ as l,p as _,m as q,r as A,t as E,a as G,s as H,b as I,c as J,_ as K}from"./index-Xe3OFSOl.js";import{v as S}from"./uuid-C_lTrkZC.js";import"./vue-BQnMDgJF.js";import"./unocss-FS0uX1CI.js";import"./ofetch-DKyuTA_G.js";import"./destr-Cx7WjB9q.js";import"./ufo-LxZlbPj-.js";import"./iconify-V2NmTHlX.js";import"./debug-iJ63bAfA.js";import"./ms-CzQ2E3wO.js";import"./magic-string-D9CdRQHO.js";import"./jridgewell-9KHfGwW6.js";import"./unhead-CdZEm2eo.js";import"./packrup-BqxTmGwz.js";import"./hookable-B7_1qfUG.js";import"./vue3-sfc-loader-DdTOzAd6.js";const N=B({__name:"MultiView",setup(V,{expose:h}){h();const s=w(()=>new Map(l.value.map(({id:e=S()})=>[e,!1]))),t=M(new Map(s.value)),p=M([]),m=Y(),r=[],i=w(()=>{const[[e,o]=[]]=_;return _.clear(),e&&o&&_.set(e,o),Object.fromEntries(l.value.map(n=>[n.id,q(n)]))}),u=()=>{r.forEach(e=>{e()}),r.length=0},b=()=>{var e,o;if(!G.value&&E.value&&l.value.length){const{scrollX:n,scrollY:c}=window,[a]=l.value,[d]=R.value;if(d&&a){const{$children:[{id:x}={}]=[]}=d,y=!Math.floor(n)&&!Math.floor(c)&&a.id===x?d.id:((e=[...s.value.entries()].find(([,f])=>f))==null?void 0:e[0])??((o=[...t.value.entries()].find(([,f])=>f))==null?void 0:o[0])??a.id;H.value=!1,m.push({name:y}).catch(T)}}},$=({id:e})=>i.value[e];C(p,e=>{u(),setTimeout(()=>{e.forEach(o=>{const{stop:n}=U(o,([{isIntersecting:c,target:{id:a}={}}={}]=[])=>{t.value=new Map(s.value),a&&c!==void 0&&s.value.set(a,c)},{threshold:I});r.push(n)})})},{deep:P}),X(window,{behavior:J,onStop:b}),O(u);const g={intersecting:s,$intersecting:t,refs:p,router:m,stops:r,templates:i,clearStops:u,onStop:b,template:$,get v4(){return S},get $siblings(){return l},get resolve(){return A},get that(){return E}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),Q=["id","role"];function W(V,h,s,t,p,m){return v(!0),k(j,null,z(t.$siblings,r=>{var i;return v(),k("div",{id:r.id??t.v4(),key:r.id??t.v4(),ref_for:!0,ref:"refs",class:D(r.class),role:r.id===((i=t.that)==null?void 0:i.id)?"main":"section","un-cloak":""},[(v(),F(L(t.template(r)),{id:r.id,onVnodeMounted:u=>t.resolve(r)},null,8,["id","onVnodeMounted"]))],10,Q)}),128)}const ge=K(N,[["render",W],["__file","MultiView.vue"]]);export{ge as default};
