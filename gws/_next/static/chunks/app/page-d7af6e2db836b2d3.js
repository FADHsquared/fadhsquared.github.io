(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{877:function(e,t,s){Promise.resolve().then(s.bind(s,1768))},1768:function(e,t,s){"use strict";s.d(t,{default:function(){return u}});var l=s(7437),a=s(2265);function n(e,t){return Math.random()*(t-e)+e}function i(e,t){let s=Math.ceil(e);return Math.floor(Math.random()*(Math.floor(t)-s)+s)}let r=["lt","rt"],c=[2,3,4,5];function u(){let[e,t]=(0,a.useState)(1),[s,u]=(0,a.useState)(!0),[d,o]=(0,a.useState)(0),[h,m]=(0,a.useState)(0),[x,f]=(0,a.useState)(0),[g,v]=(0,a.useState)(0),[j,p]=(0,a.useState)({input:r[i(0,r.length)],value:n(.03,.97),holdTime:c[i(0,c.length)]}),[S,b]=(0,a.useState)(null),[N,w]=(0,a.useState)(null),y="lt"===j.input?d:h;return(0,a.useEffect)(()=>{requestAnimationFrame(s=>{t(e+1);let l=navigator.getGamepads()[0];if(l&&(u(!1),navigator.userAgent.includes("Firefox")?(o((l.axes[4]+1)/2),m((l.axes[5]+1)/2)):(o(l.buttons[6].value),m(l.buttons[7].value)),f(l.axes[0]),v(l.axes[2])),N){if(s-N.time>=2e3){let e=n(.03,.97);for(;e>=j.value-.03&&e<=j.value+.03;)e=n(.03,.97);p({input:r[i(0,r.length)],value:e,holdTime:c[i(0,c.length)]}),b(null),w(null)}return}if(y>=j.value-.03&&y<=j.value+.03){null===S?b(s):s-S>=1e3*j.holdTime&&w({time:s,isSuccess:!0,description:"You reached the target and held for ".concat(j.holdTime," seconds!")});return}null!==S&&(y>j.value+.03?(w({time:s,isSuccess:!1,description:"You overshot"}),b(null)):y<j.value-.03&&w({time:s,isSuccess:!1,description:"You undershot"}))})},[N,y,S,j.holdTime,j.value,e]),(0,l.jsx)("div",{className:"w-1/2 space-y-2 text-center",children:s?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"text-5xl font-bold",children:"Welcome to GWS!"}),(0,l.jsx)("p",{className:"text-sm",children:"Gamepad Warmup System"}),(0,l.jsx)("br",{}),(0,l.jsx)("p",{className:"text-lg",children:"Press any gamepad key to start"})]}):(0,l.jsxs)(l.Fragment,{children:[N?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"text-5xl font-bold",children:N.isSuccess?"SUCCESS!":"FAIL!"}),(0,l.jsx)("p",{className:"text-lg",children:N.description})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h1",{className:"text-5xl",children:[(0,l.jsx)("b",{children:"Aim"})," the"," ",(0,l.jsxs)("b",{children:["lt"===j.input?"left":"right"," trigger"]})]}),(0,l.jsxs)("p",{className:"text-lg",children:["and hold for ",(0,l.jsxs)("b",{children:[j.holdTime," seconds!"]})]})]}),(0,l.jsxs)("div",{className:"flex w-full",children:[(0,l.jsx)("div",{className:"h-2 bg-green-600",style:{width:"".concat((j.value-.03)*100,"%")}}),(0,l.jsx)("div",{className:"h-2 bg-lime-400",style:{width:"".concat(6,"%")}})]}),(0,l.jsx)("div",{className:"w-full border-2 border-white",children:(0,l.jsx)("div",{className:"h-8 bg-gray-50",style:{width:"".concat(100*y,"%")}})})]})})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=877)}),_N_E=e.O()}]);