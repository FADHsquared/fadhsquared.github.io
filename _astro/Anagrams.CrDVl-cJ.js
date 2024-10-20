import{c as f,a as _,u as C,b as Q,o as O,d as F,g as p,i as v,e as E,r as B,t as h,f as ee,h as T,j as R,k as te,F as ne,s as W}from"./web.B8iD7Igf.js";import{u as re,l as ae}from"./use-has-mounted.DJ2amTPs.js";var G={equals:!1},se=e=>typeof e=="function"&&!e.length?e():e;function oe(e,...t){return typeof e=="function"?e(...t):e}var ce=(e,t)=>e.length>0?()=>e(C(t)):e;function le(e,t){let a=0;const n=e.map((s,r)=>_(()=>(a=r,s()),void 0,G));return _(()=>n.map(s=>s())[a],void 0,t)}function ie(e,t,a){let n=()=>t;const[s,r]=f(t,G),l=_(ce(e,()=>n()),t);return[n=le([s,l],a),m=>r(()=>typeof m=="function"?m(C(n)):m)]}var k=(e,t,a)=>{const n=a(e,t);return O(()=>clearInterval(n))},de=(e,t,a)=>{if(typeof t=="number"){k(e,t,a);return}let n=!1,s=performance.now(),r=0,l=!1;const m=()=>{C(e),s=performance.now(),n=a===setTimeout};Q(d=>{if(n)return;const g=t();if(g===!1)return d&&(r+=(performance.now()-s)/d),g;if(d===!1&&(s=performance.now()),l){if(d&&(r+=(performance.now()-s)/d),s=performance.now(),r>=1)r=0,m();else if(r>0){const[b,w]=f(void 0,{equals:!1});return b(),k(()=>{r=0,l=!1,w(),m()},(1-r)*g,setTimeout),g}}return l=!0,k(m,g,a),g})};function ue(e,t,a,n){const s=_(()=>f(e(a),n),n);return de(()=>s()[1](e),t,setInterval),()=>s()[0]()}var H=6e4,I=36e5,U=e=>e instanceof Date?e:new Date(e),fe=(e,t)=>t.getTime()-e.getTime(),A=e=>{const[t,a]=ie(()=>U(se(e)));return[t,s=>a(r=>U(oe(s,r)))]};function me(e=H/2){const[t,a]=f(void 0,{equals:!1});return[ue(()=>(t(),new Date),e,void 0,{equals:(s,r)=>s.getTime()===r.getTime()}),a]}function ge(e,t){const[a]=A(e),[n]=A(t);return[_(()=>fe(a(),n())),{from:a,to:n}]}function pe(e,t=a=>Math.abs(a)<=I?H/2:I/2){const a=typeof t=="function"?()=>t(r()):t,[n,s]=me(a),[r,{to:l}]=ge(n,e);return[r,{update:s,target:l,now:n}]}var ve=(e,t,a=[])=>{const n=new WebSocket(e,t),s=n.send.bind(n);return n.send=r=>n.readyState==1?s(r):a.push(r),n.addEventListener("open",()=>{for(;a.length;)s(a.shift())}),n},he=h("<button>");function be(e){return(()=>{var t=p(he);return t.$$click=()=>e.onClick?.(),v(t,()=>e.children),E(()=>ee(t,`w-full rounded-lg border-[3px] border-[#CF5C36] px-2 py-1
        font-semibold transition duration-100 hover:bg-[#CF5C36]
        hover:text-white active:scale-95 ${e.class??""}`)),B(),t})()}F(["click"]);var _e=h("<label for=server-url class=select-none>Server URL (Connection:<!$><!/>)"),$e=h('<input id=server-url type=text class="w-full rounded-lg border-2 border-slate-300 bg-transparent dark:border-slate-600">'),Se=h('<div class="mb-2 flex flex-col items-center rounded-lg bg-slate-100 p-2 dark:bg-slate-700"><p class="font-mono text-sm font-bold"><!$><!/> - <!$><!/></p><code class=text-4xl>'),we=h('<div class="h-60 overflow-y-auto whitespace-pre-wrap break-all rounded-lg bg-slate-200 p-2 dark:bg-slate-700 sm:h-96">'),xe=h('<input type=text placeholder="message/answer here, send with Enter"class="mt-2 w-full rounded-lg border-2 border-slate-300 bg-transparent dark:border-slate-600">'),Te=h("<div>");function Ce(){const[e,t]=ae,a=()=>e["anagrams-server-url"]??"wss://mc.pixelsam.me:3000/ws/anagram/1",[n,s]=f("Not Connected");let r,l;O(()=>{r&&r.close()});const[m,d]=f("WAITING ROUND START!"),[g,b]=f(""),[w,$]=f(""),[N]=pe(w,()=>100),[S,D]=f(""),[P,y]=f([]),L=o=>{const{type:c,content:i}=JSON.parse(o.data);switch(c){case"ChatMessage":y(u=>[...u,i]),setTimeout(()=>{l&&(l.scrollTop=l.scrollHeight)});break;case"OngoingRoundInfo":$(i.round_finish_time),d("PLEASE GUESS!"),b(i.word_to_guess);break;case"FinishedRoundInfo":$(i.to_next_round_time),d("TIME'S UP! THE ANSWER:"),b(i.word_answer);break;case"FinishedGame":$(""),d("WAITING ROUND START!"),b("")}},M=()=>{s("Open")},q=()=>{n()==="Not Connected"||n()==="Closed"?(r=ve(a()),s("Connecting"),r.addEventListener("open",M),r.addEventListener("message",L)):(s("Closing"),r?.removeEventListener("open",M),r?.removeEventListener("message",L),r?.close(),s("Closed"),$(""),d("WAITING ROUND START!"),b(""))},j=o=>{o.key==="Enter"&&(S()==="/clear"?y([]):S().trim()!==""&&r?.send(S()),D(""))},J=re();return[(()=>{var o=p(_e),c=o.firstChild,i=c.nextSibling,[u,x]=T(i.nextSibling);return u.nextSibling,v(o,n,u,x),o})(),(()=>{var o=p($e);return o.addEventListener("change",c=>t("anagrams-server-url",c.currentTarget.value)),E(()=>W(o,"value",J()?a():"Loading saved URL...")),o})(),R(be,{class:"my-2",onClick:q,get children(){return typeof n<"u"&&n()==="Open"?"Disconnect":"Connect"}}),(()=>{var o=p(Se),c=o.firstChild,i=c.firstChild,[u,x]=T(i.nextSibling),K=u.nextSibling,z=K.nextSibling,[V,X]=T(z.nextSibling),Y=c.nextSibling;return v(c,m,u,x),v(c,(()=>{var Z=_(()=>!!isNaN(N()));return()=>Z()?"":`${Math.max(0,N()/1e3).toFixed(1)} secs`})(),V,X),v(Y,g),o})(),(()=>{var o=p(we),c=l;return typeof c=="function"?te(c,o):l=o,v(o,R(ne,{get each(){return P()},children:i=>(()=>{var u=p(Te);return v(u,i),u})()})),o})(),(()=>{var o=p(xe);return o.addEventListener("change",c=>D(c.currentTarget.value)),o.$$keyup=j,E(()=>W(o,"value",S())),B(),o})()]}F(["keyup"]);export{Ce as default};
