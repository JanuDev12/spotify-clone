import{u as I,j as l,b as ge,P as q,a as Z,N as Se}from"./PlayerIcons.D0g_7UeF.js";import{r as a,$ as R}from"./index.CydYXOmc.js";import"./index.C_GN8oIK.js";function ee(e){const t=()=>e.songs.length===0||e.song===null?-1:e.songs.findIndex(r=>r.id===e.song.id)??-1;return{getPreviousSong:()=>{const r=t();return r<=0?null:e.songs[r-1]},getNextSong:()=>{const{songs:r}=e,s=r.length;if(s===0)return null;const i=t();return i+1>=s?null:r[i+1]}}}function be(){const{currentMusic:e,isPlaying:t,setIsPlaying:n,setCurrentMusic:o}=I(f=>f),{getNextSong:r,getPreviousSong:s}=ee(e),i=()=>{e.song!==null&&n(!t)},c=()=>{const f=r();f&&o({...e,song:f})},u=()=>{const f=s();f&&o({...e,song:f})};return l.jsxs("div",{className:"flex justify-center flex-row flex-nowrap items-center gap-4",children:[l.jsx("button",{className:"hover:scale-110",onClick:u,title:"Previous song",children:l.jsx(ge,{})}),l.jsx("button",{className:"bg-white text-black rounded-full p-2 hover:scale-110",onClick:i,children:t?l.jsx(q,{className:q}):l.jsx(Z,{className:Z})}),l.jsx("button",{className:"hover:scale-110",onClick:c,title:"Next song",children:l.jsx(Se,{})})]})}const we=({image:e,title:t,artists:n})=>l.jsxs("div",{className:`
        flex items-center gap-5 relative
        overflow-hidden
      `,children:[e&&l.jsx("picture",{className:"w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden",children:l.jsx("img",{src:e,alt:t})}),l.jsxs("div",{className:"flex flex-col",children:[l.jsx("h3",{className:"font-semibold text-sm block",children:t}),l.jsx("span",{className:"text-xs opacity-80",children:n?.join(", ")})]})]});function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},C.apply(this,arguments)}function te(e,[t,n]){return Math.min(n,Math.max(t,e))}function _(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function ye(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ne(...e){return t=>e.forEach(n=>ye(n,t))}function j(...e){return a.useCallback(ne(...e),e)}function oe(e,t=[]){let n=[];function o(s,i){const c=a.createContext(i),u=n.length;n=[...n,i];function f(d){const{scope:m,children:v,...p}=d,$=m?.[e][u]||c,h=a.useMemo(()=>p,Object.values(p));return a.createElement($.Provider,{value:h},v)}function g(d,m){const v=m?.[e][u]||c,p=a.useContext(v);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${d}\` must be used within \`${s}\``)}return f.displayName=s+"Provider",[f,g]}const r=()=>{const s=n.map(i=>a.createContext(i));return function(c){const u=c?.[e]||s;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:u}}),[c,u])}};return r.scopeName=e,[o,Ce(r,...t)]}function Ce(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const i=o.reduce((c,{useScope:u,scopeName:f})=>{const d=u(s)[`__scope${f}`];return{...c,...d}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function re(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function Ee({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,r]=Pe({defaultProp:t,onChange:n}),s=e!==void 0,i=s?e:o,c=re(n),u=a.useCallback(f=>{if(s){const d=typeof f=="function"?f(e):f;d!==e&&c(d)}else r(f)},[s,e,r,c]);return[i,u]}function Pe({defaultProp:e,onChange:t}){const n=a.useState(e),[o]=n,r=a.useRef(o),s=re(t);return a.useEffect(()=>{r.current!==o&&(s(o),r.current=o)},[o,r,s]),n}const Re=a.createContext(void 0);function je(e){const t=a.useContext(Re);return e||t||"ltr"}function Me(e){const t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const Ve=globalThis?.document?a.useLayoutEffect:()=>{};function Ne(e){const[t,n]=a.useState(void 0);return Ve(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let i,c;if("borderBoxSize"in s){const u=s.borderBoxSize,f=Array.isArray(u)?u[0]:u;i=f.inlineSize,c=f.blockSize}else i=e.offsetWidth,c=e.offsetHeight;n({width:i,height:c})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}const B=a.forwardRef((e,t)=>{const{children:n,...o}=e,r=a.Children.toArray(n),s=r.find(De);if(s){const i=s.props.children,c=r.map(u=>u===s?a.Children.count(i)>1?a.Children.only(null):a.isValidElement(i)?i.props.children:null:u);return a.createElement(L,C({},o,{ref:t}),a.isValidElement(i)?a.cloneElement(i,void 0,c):null)}return a.createElement(L,C({},o,{ref:t}),n)});B.displayName="Slot";const L=a.forwardRef((e,t)=>{const{children:n,...o}=e;return a.isValidElement(n)?a.cloneElement(n,{...Ae(o,n.props),ref:t?ne(t,n.ref):n.ref}):a.Children.count(n)>1?a.Children.only(null):null});L.displayName="SlotClone";const _e=({children:e})=>a.createElement(a.Fragment,null,e);function De(e){return a.isValidElement(e)&&e.type===_e}function Ae(e,t){const n={...t};for(const o in t){const r=e[o],s=t[o];/^on[A-Z]/.test(o)?r&&s?n[o]=(...c)=>{s(...c),r(...c)}:r&&(n[o]=r):o==="style"?n[o]={...r,...s}:o==="className"&&(n[o]=[r,s].filter(Boolean).join(" "))}return{...e,...n}}const Ie=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],k=Ie.reduce((e,t)=>{const n=a.forwardRef((o,r)=>{const{asChild:s,...i}=o,c=s?B:t;return a.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),a.createElement(c,C({},i,{ref:r}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Te(e){const t=e+"CollectionProvider",[n,o]=oe(t),[r,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=v=>{const{scope:p,children:$}=v,h=R.useRef(null),S=R.useRef(new Map).current;return R.createElement(r,{scope:p,itemMap:S,collectionRef:h},$)},c=e+"CollectionSlot",u=R.forwardRef((v,p)=>{const{scope:$,children:h}=v,S=s(c,$),y=j(p,S.collectionRef);return R.createElement(B,{ref:y},h)}),f=e+"CollectionItemSlot",g="data-radix-collection-item",d=R.forwardRef((v,p)=>{const{scope:$,children:h,...S}=v,y=R.useRef(null),x=j(p,y),w=s(f,$);return R.useEffect(()=>(w.itemMap.set(y,{ref:y,...S}),()=>void w.itemMap.delete(y))),R.createElement(B,{[g]:"",ref:x},h)});function m(v){const p=s(e+"CollectionConsumer",v);return R.useCallback(()=>{const h=p.collectionRef.current;if(!h)return[];const S=Array.from(h.querySelectorAll(`[${g}]`));return Array.from(p.itemMap.values()).sort((w,M)=>S.indexOf(w.ref.current)-S.indexOf(M.ref.current))},[p.collectionRef,p.itemMap])}return[{Provider:i,Slot:u,ItemSlot:d},m,o]}const se=["PageUp","PageDown"],ae=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ce={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},T="Slider",[H,ze,Be]=Te(T),[ie,wt]=oe(T,[Be]),[ke,K]=ie(T),Ke=a.forwardRef((e,t)=>{const{name:n,min:o=0,max:r=100,step:s=1,orientation:i="horizontal",disabled:c=!1,minStepsBetweenThumbs:u=0,defaultValue:f=[o],value:g,onValueChange:d=()=>{},onValueCommit:m=()=>{},inverted:v=!1,...p}=e,[$,h]=a.useState(null),S=j(t,b=>h(b)),y=a.useRef(new Set),x=a.useRef(0),w=i==="horizontal",M=$?!!$.closest("form"):!0,Y=w?Oe:Le,[E=[],he]=Ee({prop:g,defaultProp:f,onChange:b=>{var P;(P=[...y.current][x.current])===null||P===void 0||P.focus(),d(b)}}),W=a.useRef(E);function $e(b){const P=Ze(E,b);D(b,P)}function ve(b){D(b,x.current)}function xe(){const b=W.current[x.current];E[x.current]!==b&&m(E)}function D(b,P,{commit:z}={commit:!1}){const X=tt(s),O=nt(Math.round((b-o)/s)*s+o,X),A=te(O,[o,r]);he((N=[])=>{const V=Ge(N,A,P);if(et(V,u*s)){x.current=V.indexOf(A);const G=String(V)!==String(N);return G&&z&&m(V),G?V:N}else return N})}return a.createElement(ke,{scope:e.__scopeSlider,disabled:c,min:o,max:r,valueIndexToChangeRef:x,thumbs:y.current,values:E,orientation:i},a.createElement(H.Provider,{scope:e.__scopeSlider},a.createElement(H.Slot,{scope:e.__scopeSlider},a.createElement(Y,C({"aria-disabled":c,"data-disabled":c?"":void 0},p,{ref:S,onPointerDown:_(p.onPointerDown,()=>{c||(W.current=E)}),min:o,max:r,inverted:v,onSlideStart:c?void 0:$e,onSlideMove:c?void 0:ve,onSlideEnd:c?void 0:xe,onHomeKeyDown:()=>!c&&D(o,0,{commit:!0}),onEndKeyDown:()=>!c&&D(r,E.length-1,{commit:!0}),onStepKeyDown:({event:b,direction:P})=>{if(!c){const O=se.includes(b.key)||b.shiftKey&&ae.includes(b.key)?10:1,A=x.current,N=E[A],V=s*O*P;D(N+V,A,{commit:!0})}}})))),M&&E.map((b,P)=>a.createElement(Xe,{key:P,name:n?n+(E.length>1?"[]":""):void 0,value:b})))}),[le,ue]=ie(T,{startEdge:"left",endEdge:"right",size:"width",direction:1}),Oe=a.forwardRef((e,t)=>{const{min:n,max:o,dir:r,inverted:s,onSlideStart:i,onSlideMove:c,onSlideEnd:u,onStepKeyDown:f,...g}=e,[d,m]=a.useState(null),v=j(t,x=>m(x)),p=a.useRef(),$=je(r),h=$==="ltr",S=h&&!s||!h&&s;function y(x){const w=p.current||d.getBoundingClientRect(),M=[0,w.width],E=F(M,S?[n,o]:[o,n]);return p.current=w,E(x-w.left)}return a.createElement(le,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width"},a.createElement(de,C({dir:$,"data-orientation":"horizontal"},g,{ref:v,style:{...g.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:x=>{const w=y(x.clientX);i?.(w)},onSlideMove:x=>{const w=y(x.clientX);c?.(w)},onSlideEnd:()=>{p.current=void 0,u?.()},onStepKeyDown:x=>{const M=ce[S?"from-left":"from-right"].includes(x.key);f?.({event:x,direction:M?-1:1})}})))}),Le=a.forwardRef((e,t)=>{const{min:n,max:o,inverted:r,onSlideStart:s,onSlideMove:i,onSlideEnd:c,onStepKeyDown:u,...f}=e,g=a.useRef(null),d=j(t,g),m=a.useRef(),v=!r;function p($){const h=m.current||g.current.getBoundingClientRect(),S=[0,h.height],x=F(S,v?[o,n]:[n,o]);return m.current=h,x($-h.top)}return a.createElement(le,{scope:e.__scopeSlider,startEdge:v?"bottom":"top",endEdge:v?"top":"bottom",size:"height",direction:v?1:-1},a.createElement(de,C({"data-orientation":"vertical"},f,{ref:d,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:$=>{const h=p($.clientY);s?.(h)},onSlideMove:$=>{const h=p($.clientY);i?.(h)},onSlideEnd:()=>{m.current=void 0,c?.()},onStepKeyDown:$=>{const S=ce[v?"from-bottom":"from-top"].includes($.key);u?.({event:$,direction:S?-1:1})}})))}),de=a.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:o,onSlideMove:r,onSlideEnd:s,onHomeKeyDown:i,onEndKeyDown:c,onStepKeyDown:u,...f}=e,g=K(T,n);return a.createElement(k.span,C({},f,{ref:t,onKeyDown:_(e.onKeyDown,d=>{d.key==="Home"?(i(d),d.preventDefault()):d.key==="End"?(c(d),d.preventDefault()):se.concat(ae).includes(d.key)&&(u(d),d.preventDefault())}),onPointerDown:_(e.onPointerDown,d=>{const m=d.target;m.setPointerCapture(d.pointerId),d.preventDefault(),g.thumbs.has(m)?m.focus():o(d)}),onPointerMove:_(e.onPointerMove,d=>{d.target.hasPointerCapture(d.pointerId)&&r(d)}),onPointerUp:_(e.onPointerUp,d=>{const m=d.target;m.hasPointerCapture(d.pointerId)&&(m.releasePointerCapture(d.pointerId),s(d))})}))}),He="SliderTrack",Fe=a.forwardRef((e,t)=>{const{__scopeSlider:n,...o}=e,r=K(He,n);return a.createElement(k.span,C({"data-disabled":r.disabled?"":void 0,"data-orientation":r.orientation},o,{ref:t}))}),J="SliderRange",Ue=a.forwardRef((e,t)=>{const{__scopeSlider:n,...o}=e,r=K(J,n),s=ue(J,n),i=a.useRef(null),c=j(t,i),u=r.values.length,f=r.values.map(m=>fe(m,r.min,r.max)),g=u>1?Math.min(...f):0,d=100-Math.max(...f);return a.createElement(k.span,C({"data-orientation":r.orientation,"data-disabled":r.disabled?"":void 0},o,{ref:c,style:{...e.style,[s.startEdge]:g+"%",[s.endEdge]:d+"%"}}))}),Q="SliderThumb",Ye=a.forwardRef((e,t)=>{const n=ze(e.__scopeSlider),[o,r]=a.useState(null),s=j(t,c=>r(c)),i=a.useMemo(()=>o?n().findIndex(c=>c.ref.current===o):-1,[n,o]);return a.createElement(We,C({},e,{ref:s,index:i}))}),We=a.forwardRef((e,t)=>{const{__scopeSlider:n,index:o,...r}=e,s=K(Q,n),i=ue(Q,n),[c,u]=a.useState(null),f=j(t,h=>u(h)),g=Ne(c),d=s.values[o],m=d===void 0?0:fe(d,s.min,s.max),v=qe(o,s.values.length),p=g?.[i.size],$=p?Je(p,m,i.direction):0;return a.useEffect(()=>{if(c)return s.thumbs.add(c),()=>{s.thumbs.delete(c)}},[c,s.thumbs]),a.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[i.startEdge]:`calc(${m}% + ${$}px)`}},a.createElement(H.ItemSlot,{scope:e.__scopeSlider},a.createElement(k.span,C({role:"slider","aria-label":e["aria-label"]||v,"aria-valuemin":s.min,"aria-valuenow":d,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0},r,{ref:f,style:d===void 0?{display:"none"}:e.style,onFocus:_(e.onFocus,()=>{s.valueIndexToChangeRef.current=o})}))))}),Xe=e=>{const{value:t,...n}=e,o=a.useRef(null),r=Me(t);return a.useEffect(()=>{const s=o.current,i=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(i,"value").set;if(r!==t&&u){const f=new Event("input",{bubbles:!0});u.call(s,t),s.dispatchEvent(f)}},[r,t]),a.createElement("input",C({style:{display:"none"}},n,{ref:o,defaultValue:t}))};function Ge(e=[],t,n){const o=[...e];return o[n]=t,o.sort((r,s)=>r-s)}function fe(e,t,n){const s=100/(n-t)*(e-t);return te(s,[0,100])}function qe(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Ze(e,t){if(e.length===1)return 0;const n=e.map(r=>Math.abs(r-t)),o=Math.min(...n);return n.indexOf(o)}function Je(e,t,n){const o=e/2,s=F([0,50],[0,o]);return(o-s(t)*n)*n}function Qe(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function et(e,t){if(t>0){const n=Qe(e);return Math.min(...n)>=t}return!0}function F(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const o=(t[1]-t[0])/(e[1]-e[0]);return t[0]+o*(n-e[0])}}function tt(e){return(String(e).split(".")[1]||"").length}function nt(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}const me=Ke,ot=Fe,rt=Ue,st=Ye;function pe(e){var t,n,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(n=pe(e[t]))&&(o&&(o+=" "),o+=n)}else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function at(){for(var e,t,n=0,o="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=pe(e))&&(o&&(o+=" "),o+=t);return o}const U=a.forwardRef(({className:e,...t},n)=>l.jsxs(me,{ref:n,className:at("relative flex touch-none select-none items-center group",e),...t,children:[l.jsx(ot,{className:"relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800",children:l.jsx(rt,{className:"absolute h-full bg-white group-hover:bg-green-400"})}),l.jsx(st,{className:"hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));U.displayName=me.displayName;const ct=({audio:e})=>{const[t,n]=a.useState(0);a.useEffect(()=>(e.current.addEventListener("timeupdate",o),()=>{e.current.removeEventListener("timeupdate",o)}),[]);const o=()=>{n(e.current.currentTime)},r=i=>{if(i==null)return"0:00";const c=Math.floor(i%60);return`${Math.floor(i/60)}:${c.toString().padStart(2,"0")}`},s=e?.current?.duration??0;return l.jsxs("div",{className:"flex gap-x-3 text-xs pt-2",children:[l.jsx("span",{className:"opacity-50 w-12 text-right",children:r(t)}),l.jsx(U,{value:[t],max:e?.current?.duration??0,min:0,className:"w-[400px]",onValueChange:i=>{const[c]=i;e.current.currentTime=c}}),l.jsx("span",{className:"opacity-50 w-12",children:s?r(s):"0:00"})]})},it=()=>l.jsxs("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-hidden":"true","aria-label":"Volumen apagado",viewBox:"0 0 16 16",children:[l.jsx("path",{d:"M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"}),l.jsx("path",{d:"M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"})]}),lt=()=>l.jsx("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-label":"Volumen bajo","aria-hidden":"true",id:"volume-icon",viewBox:"0 0 16 16",children:l.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"})}),ut=()=>l.jsx("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-label":"Volumen medio","aria-hidden":"true",id:"volume-icon",viewBox:"0 0 16 16",children:l.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z"})}),dt=()=>l.jsxs("svg",{fill:"currentColor",role:"presentation",height:"16",width:"16","aria-hidden":"true","aria-label":"Volumen alto",id:"volume-icon",viewBox:"0 0 16 16",children:[l.jsx("path",{d:"M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"}),l.jsx("path",{d:"M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"})]}),ft=e=>e<.1,mt=e=>e>=.1&&e<.5,pt=e=>e>=.5&&e<.9,ht=e=>e>=.9,$t=e=>l.jsxs(l.Fragment,{children:[ft(e)&&l.jsx(it,{}),mt(e)&&l.jsx(lt,{}),pt(e)&&l.jsx(ut,{}),ht(e)&&l.jsx(dt,{})]}),vt=()=>{const e=I(t=>t.volume);return $t(e)},xt=()=>{const e=I(s=>s.volume),t=I(s=>s.setVolume),n=a.useRef(e),o=e<.1,r=()=>{o?t(n.current):(n.current=e,t(0))};return l.jsxs("div",{className:"flex justify-center gap-x-2 text-white",children:[l.jsx("button",{className:"opacity-70 hover:opacity-100 transition",onClick:r,children:l.jsx(vt,{})}),l.jsx(U,{defaultValue:[100],max:100,min:0,value:[e*100],className:"w-[95px]",onValueChange:s=>{const[i]=s,c=i/100;t(c)}})]})};function yt(){const{currentMusic:e,isPlaying:t,volume:n,setCurrentMusic:o}=I(u=>u),r=a.useRef(),{getNextSong:s}=ee(e);a.useEffect(()=>{e.song&&(t?i():r.current.pause())},[t]),a.useEffect(()=>{r.current.volume=n},[n]),a.useEffect(()=>{const{song:u,playlist:f}=e;u&&(r.current.src=`/music/${f?.id}/0${u.id}.mp3`,i())},[e]);const i=()=>{r.current.play().catch(u=>console.log("error playing: ",u))};function c(){const u=s();u&&o({...e,song:u})}return l.jsxs("div",{className:"flex flex-row justify-between w-full px-1 z-50",children:[l.jsx("div",{className:"w-[200px]",children:l.jsx(we,{...e.song})}),l.jsx("div",{className:"grid place-content-center gap-4 flex-1",children:l.jsxs("div",{className:"flex justify-center flex-col items-center",children:[l.jsx(be,{}),l.jsx(ct,{audio:r}),l.jsx("audio",{ref:r,onEnded:c})]})}),l.jsx("div",{className:"grid place-content-center",children:l.jsx(xt,{})})]})}export{yt as Player};
