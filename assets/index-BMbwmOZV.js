const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./MultiView-DA7wC2Qf.js","./vues3-BAPGkmwC.js","./ajv-keywords-Bxl8NeSj.js","./fast-deep-equal-C148XJoK.js","./fast-uri-J6I7s6O_.js","./uuid-C_lTrkZC.js","./vueuse-CFKbwgbQ.js","./unocss-ClQw67X7.js","./ofetch-DKyuTA_G.js","./destr-Cx7WjB9q.js","./ufo-LxZlbPj-.js","./iconify-Bcz3Fmdq.js","./debug-BZZZ2ppA.js","./ms-CzQ2E3wO.js","./magic-string-D9CdRQHO.js","./jridgewell-9KHfGwW6.js","./unocss-DeJTMLhw.css","./unhead-CdZEm2eo.js","./packrup-BqxTmGwz.js","./hookable-B7_1qfUG.js","./vue3-sfc-loader-DdTOzAd6.js","./SingleView-DkZmyLOL.js","./NotFoundView-CkFBv5w1.js"])))=>i.map(i=>d[i]);
import{p as L,a as T,b as P,c as C,d as D,_ as d,e as U,i as W}from"./unocss-ClQw67X7.js";import{P as m,o as I,l as k,I as B,Y as M,X as F,W as V}from"./vues3-BAPGkmwC.js";import*as H from"vue";import{defineComponent as N,computed as u,ref as _,watch as q,resolveComponent as K,openBlock as g,createBlock as y,withCtx as X,resolveDynamicComponent as Y,defineAsyncComponent as z,nextTick as G,shallowReadonly as J,createApp as Q,readonly as Z}from"vue";import{i as ee,g as te,a as oe}from"./iconify-Bcz3Fmdq.js";import{u as re,a as ne,c as se}from"./unhead-CdZEm2eo.js";import*as ie from"vue-router";import{useRoute as ae,createRouter as ce,createWebHistory as pe}from"vue-router";import{u as ue}from"./vueuse-CFKbwgbQ.js";import{i as le}from"./vue3-sfc-loader-DdTOzAd6.js";import{v as de}from"./uuid-C_lTrkZC.js";import"./ofetch-DKyuTA_G.js";import"./destr-Cx7WjB9q.js";import"./ufo-LxZlbPj-.js";import"./magic-string-D9CdRQHO.js";import"./jridgewell-9KHfGwW6.js";import"./ajv-keywords-Bxl8NeSj.js";import"./fast-deep-equal-C148XJoK.js";import"./fast-uri-J6I7s6O_.js";import"./debug-BZZZ2ppA.js";import"./ms-CzQ2E3wO.js";import"./packrup-BqxTmGwz.js";import"./hookable-B7_1qfUG.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const h={presets:[L(),T(),P({cdn:"https://cdn.jsdelivr.net/npm/"}),C(),D()]},me=N({__name:"App",setup(r,{expose:n}){n();const s=ae(),e=u(()=>m.value.find(({id:t})=>t===s.name)),o=_(""),i=u(()=>{var t;return((t=e.value)==null?void 0:t.to)&&`${window.location.origin}${e.value.to==="/"?"":e.value.to}`});q(e,async t=>{let c="/favicon.ico";if(t!=null&&t.icon){const p=ee(t.icon)?te(t.icon):await oe(t.icon);if(p){const{body:x,height:E,left:O,top:j,width:A}=p;c=`data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${O.toString()} ${j.toString()} ${A.toString()} ${E.toString()}">${x}</svg>`}}o.value=c}),re({link:[[o,"icon","icon"],[i,"canonical"]].map(([t,c,p])=>({href:t,key:p,rel:c}))}),ne({description:()=>{var t;return((t=e.value)==null?void 0:t.description)??void 0},keywords:()=>{var t;return(t=e.value)==null?void 0:t.keywords.join()},ogDescription:()=>{var t;return((t=e.value)==null?void 0:t.description)??void 0},ogImage:()=>{var t;return((t=e.value)==null?void 0:t.images.filter(({url:c})=>c).map(({alt:c="",url:p})=>({alt:c,url:p?`${window.location.origin}/${p}`:""})))??[]},ogTitle:()=>{var t;return(t=e.value)==null?void 0:t.title},ogType:()=>{var t;return(t=e.value)!=null&&t.type?e.value.type:void 0},ogUrl:i,title:()=>{var t;return((t=e.value)==null?void 0:t.title)??""}});const a={route:s,a:e,favicon:o,ogUrl:i,get pages(){return m}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}}),fe=(r,n)=>{const s=r.__vccOpts||r;for(const[e,o]of n)s[e]=o;return s};function ve(r,n,s,e,o,i){const a=K("router-view");return g(),y(a,null,{default:X(({Component:t})=>{var c;return[(g(),y(Y(t),{id:(c=e.pages[0])==null?void 0:c.id},null,8,["id"]))]}),_:1})}const we=fe(me,[["render",ve],["__file","App.vue"]]);let v;const{pathname:_e}=new URL(document.baseURI),l=ce({history:pe(_e),routes:[],scrollBehavior:(r,n,s)=>v&&v(r,n,s)}),$=u(()=>m.value.find(({id:r})=>r===l.currentRoute.value.name)),R=_(!0),f=new Map,ge=()=>{let r,n;return{promise:new Promise((e,o)=>{r=e,n=o}),reject:n,resolve:r}},b=_(!0),w=u(()=>{var r;return l.currentRoute.value.path==="/"?(r=$.value)==null?void 0:r.$children[0]:$.value}),ye=u(()=>{var r;return((r=w.value)==null?void 0:r.siblings)??[]}),Ne=u(()=>ye.value.filter(({enabled:r})=>r)),qe=({id:r=de()})=>(f.set(r,ge()),z(async()=>le(`${r}.vue`,{addStyle:(n,s)=>{ue(n,{...s&&{id:s}})},getFile:async n=>{const{imports:s}=I,e=n.split("/").pop();switch(!0){case n===`${r}.vue`:return(await fetch(`./pages/${n}`)).text();case Object.keys(s).some(o=>n.startsWith(o)):return{getContentData:()=>import(n),type:"js"};default:return(await fetch(e===(e==null?void 0:e.split(".").pop())?`${n}.js`:n)).text()}},handleModule:async(n,s,e,o)=>{switch(n){case".css":return o.addStyle(await s(!1),e.toString()),null;case"js":return s(!1);default:return}},log:(n,...s)=>{window.console[n](...s.map(e=>decodeURIComponent(e)))},moduleCache:{vue:H,"vue-router":ie}}))),Ke=({id:r}={})=>{var n;r&&((n=f.get(r))==null||n.resolve(void 0))},he=({extractAll:r,toggleObserver:n})=>{const s=async()=>{R.value=!0,n(!1);{const[{promise:e}={}]=f.values();await e}await Promise.all([...f.values()].map(({promise:e})=>e)),await r(),n(!0),R.value=!1};v=async({name:e})=>new Promise(o=>{e?s().then(()=>{var a,t;const i=`#${String(e)}`;o(b.value&&{behavior:"smooth",...(t=(a=w.value)==null?void 0:a.parent)!=null&&t.flat&&w.value.index?{el:i}:{left:0,top:0}}),b.value=!0},()=>{o(!1)}):o(!1)})};l.beforeEach(({path:r})=>r!==decodeURI(r)?decodeURI(r):void 0);const $e=u(()=>l.currentRoute.value.name),Re=(async()=>{const[{imports:r},[n={}]]=await Promise.all(["index.importmap","index.json"].map(async(s,e)=>{const o=e?"[]":"{}",i=await fetch(s);return(i.ok?i:new Response(o)).json()}));I.imports=r,k.push(n),await G(),window.app.provide("pages",J(B)),m.value.forEach(({flat:s,id:e,loc:o,parent:i,path:a})=>{if(a!==void 0){const t=o==null?void 0:o.replaceAll(" ","_").replace(/^\/?/,"/").replace(/\/?$/,"/");l.addRoute({...t&&o?{alias:t}:{undefined:void 0},children:[{component:(i==null?void 0:i.flat)??s?()=>d(()=>import("./MultiView-DA7wC2Qf.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url):()=>d(()=>import("./SingleView-DkZmyLOL.js"),__vite__mapDeps([21,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,6,20]),import.meta.url),name:e,path:""}],component:()=>d(()=>import("./SingleView-DkZmyLOL.js"),__vite__mapDeps([21,1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,6,20]),import.meta.url),path:a.replace(/^\/?/,"/").replace(/\/?$/,"/")})}}),l.addRoute({component:()=>d(()=>import("./NotFoundView-CkFBv5w1.js"),__vite__mapDeps([22,17,18,19,7,8,9,10,11,12,2,13,14,15,16,1,3,4,5,6,20]),import.meta.url),name:"404",path:"/:pathMatch(.*)*"})})(),S=()=>document.getElementById("app")??void 0;window.app=Q(we);window.app.use(se());window.app.provide("id",Z($e));(async()=>{const r=await fetch("fonts.json"),n=M(await(r.ok?r:new Response("[]")).json());h.presets.push(U({customFetch:F,fonts:n})),await W({defaults:h,ready:async s=>{const{toggleObserver:e}=s;return he(s),await Re,window.app.use(l),window.app.mount(S()),e(!0),!1},rootElement:S})})().catch(V);window.console.info("⛵","vueS3","ver.: 0.2.0","https://github.com/vues3");export{Ne as $,fe as _,R as a,qe as m,f as p,Ke as r,b as s,w as t};
