(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4651:function(e,n,r){"use strict";r.d(n,{Ee:function(){return d}});var t=r(2846),a=r(5031),i=r(7294),o=r(8698);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var s=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=i.forwardRef((function(e,n){var r=e.htmlWidth,t=e.htmlHeight,a=e.alt,o=l(e,s);return i.createElement("img",c({width:r,height:t,ref:n,alt:a},o))})),d=(0,t.Gp)((function(e,n){var r=e.fallbackSrc,s=e.fallback,d=e.src,g=e.srcSet,h=e.align,m=e.fit,x=e.loading,p=e.ignoreFallback,b=e.crossOrigin,k=l(e,u),v=null!=x||p||void 0===r&&void 0===s,j=function(e){var n=e.loading,r=e.src,t=e.srcSet,a=e.onLoad,c=e.onError,l=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=(0,i.useState)("pending"),d=f[0],g=f[1];(0,i.useEffect)((function(){g(r?"loading":"pending")}),[r]);var h=(0,i.useRef)(),m=(0,i.useCallback)((function(){if(r){x();var e=new Image;e.src=r,l&&(e.crossOrigin=l),t&&(e.srcset=t),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){x(),g("loaded"),null==a||a(e)},e.onerror=function(e){x(),g("failed"),null==c||c(e)},h.current=e}}),[r,l,t,s,a,c,n]),x=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,o.a)((function(){if(!u)return"loading"===d&&m(),function(){x()}}),[d,m,u]),u?"loaded":d}(c({},e,{ignoreFallback:v})),y=c({ref:n,objectFit:m,objectPosition:h},v?k:(0,a.CE)(k,["onError","onLoad"]));return"loaded"!==j?s||i.createElement(t.m$.img,c({as:f,className:"chakra-image__placeholder",src:r},y)):i.createElement(t.m$.img,c({as:f,src:d,srcSet:g,crossOrigin:b,loading:x,className:"chakra-image"},y))}));a.Ts&&(d.displayName="Image")},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(916)}])},916:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(5893),a=r(9008),i=r(3236),o=r(4651),c=r(5113),l=r(4515),s=(0,l.Z)("Github",[["path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",key:"13vz3l"}]]),u=(0,l.Z)("Youtube",[["path",{d:"M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z",key:"1sugkm"}],["polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02",key:"gvehwc"}]]),f=(0,l.Z)("Instagram",[["rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5",key:"cdfzoc"}],["path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z",key:"1vc7iq"}],["line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5",key:"643fve"}]]),d=function(){var e=[{logoComponent:(0,t.jsx)(s,{}),href:"https://github.com/FADHsquared",text:"GitHub"},{logoComponent:(0,t.jsx)(u,{}),href:"https://www.youtube.com/c/FADHsquared",text:"YouTube"},{logoComponent:(0,t.jsx)(f,{}),href:"",text:"Instagram"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:"FADHsquared"}),(0,t.jsx)("meta",{name:"description",content:"FADHsquared's little Treasure Chest"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)(i.W2,{as:"section",children:[(0,t.jsx)(i.M5,{children:(0,t.jsx)(o.Ee,{src:"/base-logo.png",alt:"FADHsquared logo",boxSize:40,borderRadius:"full",m:3})}),(0,t.jsxs)(i.xu,{textAlign:"center",children:[(0,t.jsx)(i.X6,{size:"lg",children:"Hi! I'm FADHsquared"}),(0,t.jsx)(i.xv,{children:"Find me on:"})]}),(0,t.jsx)(i.kC,{mt:3,gap:2,flexDir:["column","row"],justify:"center",children:e.map((function(e){var n=e.logoComponent,r=e.href,a=e.text;return(0,t.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:(0,t.jsx)(c.zx,{leftIcon:n,w:"100%",children:a})},r)}))})]})]})}},9008:function(e,n,r){e.exports=r(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);