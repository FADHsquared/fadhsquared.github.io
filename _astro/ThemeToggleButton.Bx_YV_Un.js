import{k as o,m as l,c as i,d as h,e as u,g as p,i as k,a as m,f as v,r as f,h as g,t as S}from"./web.Cdr1opmF.js";import{I as d,u as y}from"./use-has-mounted.HcM2hBDJ.js";import{l as M}from"./index.CqLtHk69.js";var C=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],_=e=>o(d,l(e,{name:"LoaderCircle",iconNode:C})),$=_,N=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],z=e=>o(d,l(e,{name:"Moon",iconNode:N})),E=z,b=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],x=e=>o(d,l(e,{name:"Sun",iconNode:b})),w=x;function L(){const[e,r]=M,c=e["color-scheme"]??"auto",[a,t]=i(c),s=()=>a()==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a();return h(()=>{const n=s()==="dark";document.documentElement.className=n?"dark":"",r("color-scheme",a())}),{colorScheme:a,setColorScheme:t,resolvedColorScheme:s}}var j=S('<button aria-label="Color scheme toggle">');function q(){const e=y(),{resolvedColorScheme:r,setColorScheme:c}=L(),a=()=>{r()==="light"?c("dark"):c("light")};return(()=>{var t=p(j);return t.$$click=a,k(t,(()=>{var s=m(()=>!e());return()=>s()?o($,{size:"20",class:"animate-spin"}):(()=>{var n=m(()=>r()==="dark");return()=>n()?o(E,{size:"20"}):o(w,{size:"20"})})()})()),v(()=>g(t,`pr-1.5 ${e()?"transition-transform duration-100 active:scale-90":""}`)),f(),t})()}u(["click"]);export{q as default};
