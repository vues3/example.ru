import{defineComponent as E,computed as w,ref as M,watch as B,onUnmounted as C,openBlock as v,createElementBlock as b,Fragment as O,renderList as j,normalizeClass as P,createBlock as z,resolveDynamicComponent as D}from"vue";import{P as F,W as L}from"./vues3-BAPGkmwC.js";import{a as R,b as T}from"./vueuse-CFKbwgbQ.js";import{useRouter as U}from"vue-router";import{$ as l,p as _,m as W,r as X,t as k,a as Y,s as q,_ as A}from"./index-BMbwmOZV.js";import{v as S}from"./uuid-C_lTrkZC.js";import"./ajv-keywords-Bxl8NeSj.js";import"./fast-deep-equal-C148XJoK.js";import"./fast-uri-J6I7s6O_.js";import"./unocss-ClQw67X7.js";import"./ofetch-DKyuTA_G.js";import"./destr-Cx7WjB9q.js";import"./ufo-LxZlbPj-.js";import"./iconify-Bcz3Fmdq.js";import"./debug-BZZZ2ppA.js";import"./ms-CzQ2E3wO.js";import"./magic-string-D9CdRQHO.js";import"./jridgewell-9KHfGwW6.js";import"./unhead-CdZEm2eo.js";import"./packrup-BqxTmGwz.js";import"./hookable-B7_1qfUG.js";import"./vue3-sfc-loader-DdTOzAd6.js";const G=E({__name:"MultiView",setup(V,{expose:h}){h();const i=w(()=>new Map(l.value.map(({id:e=S()})=>[e,!1]))),r=M(new Map(i.value)),p=M([]),c=U(),t=[],a=w(()=>{const[[e,o]=[]]=_;return _.clear(),e&&o&&_.set(e,o),Object.fromEntries(l.value.map(n=>[n.id,W(n)]))}),m=()=>{t.forEach(e=>{e()}),t.length=0},$=({id:e})=>a.value[e];B(p,e=>{m(),setTimeout(()=>{e.forEach(o=>{const{stop:n}=R(o,([{isIntersecting:u,target:{id:s}={}}={}]=[])=>{r.value=new Map(i.value),s&&u!==void 0&&i.value.set(s,u)},{threshold:.1});t.push(n)})})},{deep:!0}),T(window,{behavior:"smooth",onStop:()=>{var e,o;if(!Y.value&&k.value&&l.value.length){const{scrollX:n,scrollY:u}=window,[s]=l.value,[d]=F.value;if(d&&s){const{$children:[{id:x}={}]=[]}=d,y=!Math.floor(n)&&!Math.floor(u)&&s.id===x?d.id:((e=[...i.value.entries()].find(([,f])=>f))==null?void 0:e[0])??((o=[...r.value.entries()].find(([,f])=>f))==null?void 0:o[0])??s.id;q.value=!1,c.push({name:y}).catch(L)}}}}),C(m);const g={intersecting:i,$intersecting:r,refs:p,router:c,stops:t,templates:a,clearStops:m,template:$,get v4(){return S},get $siblings(){return l},get resolve(){return X},get that(){return k}};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),H=["id","role"];function I(V,h,i,r,p,c){return v(!0),b(O,null,j(r.$siblings,t=>{var a;return v(),b("div",{id:t.id??r.v4(),key:t.id??r.v4(),ref_for:!0,ref:"refs",class:P(t.class),role:t.id===((a=r.that)==null?void 0:a.id)?"main":"section","un-cloak":""},[(v(),z(D(r.template(t)),{id:t.id,onVnodeMounted:m=>r.resolve(t)},null,8,["id","onVnodeMounted"]))],10,H)}),128)}const he=A(G,[["render",I],["__file","MultiView.vue"]]);export{he as default};
