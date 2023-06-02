import{S as M,G as U,H as q,I as F,J as D,K as j,L as N,M as B,N as k,O as V,P as W,Q as z,R as J,T as Y,a as P,U as G,v as H,y as O,V as x,W as X,X as Z,Y as _,u as S,Z as $,$ as ee}from"./app-430d0889.js";class te extends M{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),A(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return C(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return C(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,u=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),typeof(e==null?void 0:e.isDataEqual)<"u"&&this.client.getLogger().error("The isDataEqual option has been deprecated and will be removed in the next major version. You can achieve the same functionality by passing a function as the structuralSharing option"),U(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const i=this.hasListeners();i&&L(this.currentQuery,u,this.options,s)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==u||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const n=this.computeRefetchInterval();i&&(this.currentQuery!==u||this.options.enabled!==s.enabled||n!==this.currentRefetchInterval)&&this.updateRefetchInterval(n)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(q)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),F||this.currentResult.isStale||!D(this.options.staleTime))return;const t=j(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(F||this.options.enabled===!1||!D(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||N.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,u=this.options,i=this.currentResult,n=this.currentResultState,c=this.currentResultOptions,l=e!==s,o=l?e.state:this.currentQueryInitialState,d=l?this.currentResult:this.previousQueryResult,{state:a}=e;let{dataUpdatedAt:f,error:v,errorUpdatedAt:m,fetchStatus:R,status:y}=a,E=!1,T=!1,p;if(t._optimisticResults){const h=this.hasListeners(),g=!h&&A(e,t),K=h&&L(e,s,t,u);(g||K)&&(R=B(e.options.networkMode)?"fetching":"paused",f||(y="loading")),t._optimisticResults==="isRestoring"&&(R="idle")}if(t.keepPreviousData&&!a.dataUpdatedAt&&d!=null&&d.isSuccess&&y!=="error")p=d.data,f=d.dataUpdatedAt,y=d.status,E=!0;else if(t.select&&typeof a.data<"u")if(i&&a.data===(n==null?void 0:n.data)&&t.select===this.selectFn)p=this.selectResult;else try{this.selectFn=t.select,p=t.select(a.data),p=k(i==null?void 0:i.data,p,t),this.selectResult=p,this.selectError=null}catch(h){this.client.getLogger().error(h),this.selectError=h}else p=a.data;if(typeof t.placeholderData<"u"&&typeof p>"u"&&y==="loading"){let h;if(i!=null&&i.isPlaceholderData&&t.placeholderData===(c==null?void 0:c.placeholderData))h=i.data;else if(h=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof h<"u")try{h=t.select(h),this.selectError=null}catch(g){this.client.getLogger().error(g),this.selectError=g}typeof h<"u"&&(y="success",p=k(i==null?void 0:i.data,h,t),T=!0)}this.selectError&&(v=this.selectError,p=this.selectResult,m=Date.now(),y="error");const b=R==="fetching",Q=y==="loading",I=y==="error";return{status:y,fetchStatus:R,isLoading:Q,isSuccess:y==="success",isError:I,isInitialLoading:Q&&b,data:p,dataUpdatedAt:f,error:v,errorUpdatedAt:m,failureCount:a.fetchFailureCount,failureReason:a.fetchFailureReason,errorUpdateCount:a.errorUpdateCount,isFetched:a.dataUpdateCount>0||a.errorUpdateCount>0,isFetchedAfterMount:a.dataUpdateCount>o.dataUpdateCount||a.errorUpdateCount>o.errorUpdateCount,isFetching:b,isRefetching:b&&!Q,isLoadingError:I&&a.dataUpdatedAt===0,isPaused:R==="paused",isPlaceholderData:T,isPreviousData:E,isRefetchError:I&&a.dataUpdatedAt!==0,isStale:w(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,U(s,t))return;this.currentResult=s;const u={cache:!0},i=()=>{if(!t)return!0;const{notifyOnChangeProps:n}=this.options;if(n==="all"||!n&&!this.trackedProps.size)return!0;const c=new Set(n??this.trackedProps);return this.options.useErrorBoundary&&c.add("error"),Object.keys(this.currentResult).some(l=>{const o=l;return this.currentResult[o]!==t[o]&&c.has(o)})};(e==null?void 0:e.listeners)!==!1&&i()&&(u.listeners=!0),this.notify({...u,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!V(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){W.batch(()=>{if(e.onSuccess){var t,s,u,i;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(u=(i=this.options).onSettled)==null||u.call(i,this.currentResult.data,null)}else if(e.onError){var n,c,l,o;(n=(c=this.options).onError)==null||n.call(c,this.currentResult.error),(l=(o=this.options).onSettled)==null||l.call(o,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function se(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function A(r,e){return se(r,e)||r.state.dataUpdatedAt>0&&C(r,e,e.refetchOnMount)}function C(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&w(r,e)}return!1}function L(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&w(r,t)}function w(r,e){return r.isStaleByTime(e.staleTime)}function re(r=""){var e;if(!((e=z())==null?void 0:e.proxy))throw new Error("vue-query hooks can only be used inside setup() function.");const s=Y(r),u=J(s);if(!u)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return u}function ie(r,e,t={},s={}){var u;const i=P(()=>ne(e,t,s)),n=(u=i.value.queryClient)!=null?u:re(i.value.queryClientKey),c=P(()=>{const f=n.defaultQueryOptions(i.value);return f._optimisticResults=n.isRestoring.value?"isRestoring":"optimistic",f}),l=new r(n,c.value),o=G(l.getCurrentResult()),d=H(()=>{});O(n.isRestoring,f=>{f||(d.value(),d.value=l.subscribe(v=>{x(o,v)}))},{immediate:!0}),O(c,()=>{l.setOptions(c.value),x(o,l.getCurrentResult())},{deep:!0}),X(()=>{d.value()});const a=()=>new Promise(f=>{let v=()=>{};const m=()=>{if(c.value.enabled!==!1){const R=l.getOptimisticResult(c.value);R.isStale?(v(),f(l.fetchOptimistic(c.value))):(v(),f(R))}};m(),v=O(c,m,{deep:!0})});return{...Z(_(o)),suspense:a}}function ne(r,e={},t={}){const s=S(r),u=S(e),i=S(t);let n=s;return $(s)?typeof u=="function"?n={...i,queryKey:s,queryFn:u}:n={...u,queryKey:s}:n=s,ee(n)}function ce(r,e,t){const s=ie(te,r,e,t);return{...s,refetch:s.refetch.value,remove:s.remove.value}}async function le(r){const e=await fetch(r);if(!e.ok)throw new Error("Network response not OK!");return e.text()}async function oe(r){const e=await fetch(r);if(!e.ok)throw new Error("Network response not OK!");return e.json()}export{oe as a,le as f,ce as u};
