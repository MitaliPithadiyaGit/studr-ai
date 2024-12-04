import{Da as Oe,Ea as Ve,a as E,b as Ce,d as _e,e as K,g as Ne,h as Ae,i as De,j as Ie,k as Le,l as Fe,m as Z}from"/build/_shared/chunk-SSCGI46Q.js";import{a as mt}from"/build/_shared/chunk-VZQVWFLO.js";import{b as Q,e as I,f as Se,g as Me,h as L}from"/build/_shared/chunk-EJN3WSGI.js";import{a as xe,b as ct,g as ye,j as ke,k as Te,l as Re,m as Ee,o as Pe,q as ze,r as D}from"/build/_shared/chunk-BTR25ETF.js";import{c as lt,e as T}from"/build/_shared/chunk-ADMCF34Z.js";var qe=lt((Mt,Ye)=>{Ye.exports={}});var It=T(mt(),1),Lt=T(qe(),1);var F=T(xe(),1);var a=T(xe(),1),Xe=T(ct(),1);var i=T(D(),1),ae="ToastProvider",[se,wt,ht]=Ce("Toast"),[je,Jt]=_e("Toast",[ht]),[gt,$]=je(ae),We=e=>{let{__scopeToast:t,label:r="Notification",duration:o=5e3,swipeDirection:p="right",swipeThreshold:l=50,children:m}=e,[u,b]=a.useState(null),[d,R]=a.useState(0),f=a.useRef(!1),M=a.useRef(!1);return r.trim()||console.error(`Invalid prop \`label\` supplied to \`${ae}\`. Expected non-empty \`string\`.`),(0,i.jsx)(se.Provider,{scope:t,children:(0,i.jsx)(gt,{scope:t,label:r,duration:o,swipeDirection:p,swipeThreshold:l,toastCount:d,viewport:u,onViewportChange:b,onToastAdd:a.useCallback(()=>R(S=>S+1),[]),onToastRemove:a.useCallback(()=>R(S=>S-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:M,children:m})})};We.displayName=ae;var Ue="ToastViewport",ut=["F8"],te="toast.viewportPause",re="toast.viewportResume",He=a.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:o=ut,label:p="Notifications ({hotkey})",...l}=e,m=$(Ue,r),u=wt(r),b=a.useRef(null),d=a.useRef(null),R=a.useRef(null),f=a.useRef(null),M=Q(t,f,m.onViewportChange),S=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=m.toastCount>0;a.useEffect(()=>{let n=x=>{o.length!==0&&o.every(h=>x[h]||x.code===h)&&f.current?.focus()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[o]),a.useEffect(()=>{let n=b.current,x=f.current;if(N&&n&&x){let w=()=>{if(!m.isClosePausedRef.current){let v=new CustomEvent(te);x.dispatchEvent(v),m.isClosePausedRef.current=!0}},h=()=>{if(m.isClosePausedRef.current){let v=new CustomEvent(re);x.dispatchEvent(v),m.isClosePausedRef.current=!1}},y=v=>{!n.contains(v.relatedTarget)&&h()},k=()=>{n.contains(document.activeElement)||h()};return n.addEventListener("focusin",w),n.addEventListener("focusout",y),n.addEventListener("pointermove",w),n.addEventListener("pointerleave",k),window.addEventListener("blur",w),window.addEventListener("focus",h),()=>{n.removeEventListener("focusin",w),n.removeEventListener("focusout",y),n.removeEventListener("pointermove",w),n.removeEventListener("pointerleave",k),window.removeEventListener("blur",w),window.removeEventListener("focus",h)}}},[N,m.isClosePausedRef]);let c=a.useCallback(({tabbingDirection:n})=>{let w=u().map(h=>{let y=h.ref.current,k=[y,..._t(y)];return n==="forwards"?k:k.reverse()});return(n==="forwards"?w.reverse():w).flat()},[u]);return a.useEffect(()=>{let n=f.current;if(n){let x=w=>{let h=w.altKey||w.ctrlKey||w.metaKey;if(w.key==="Tab"&&!h){let k=document.activeElement,v=w.shiftKey;if(w.target===n&&v){d.current?.focus();return}let V=c({tabbingDirection:v?"backwards":"forwards"}),j=V.findIndex(A=>A===k);ee(V.slice(j+1))?w.preventDefault():v?d.current?.focus():R.current?.focus()}};return n.addEventListener("keydown",x),()=>n.removeEventListener("keydown",x)}},[u,c]),(0,i.jsxs)(Ae,{ref:b,role:"region","aria-label":p.replace("{hotkey}",S),tabIndex:-1,style:{pointerEvents:N?void 0:"none"},children:[N&&(0,i.jsx)(oe,{ref:d,onFocusFromOutsideViewport:()=>{let n=c({tabbingDirection:"forwards"});ee(n)}}),(0,i.jsx)(se.Slot,{scope:r,children:(0,i.jsx)(I.ol,{tabIndex:-1,...l,ref:M})}),N&&(0,i.jsx)(oe,{ref:R,onFocusFromOutsideViewport:()=>{let n=c({tabbingDirection:"backwards"});ee(n)}})]})});He.displayName=Ue;var Be="ToastFocusProxy",oe=a.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:o,...p}=e,l=$(Be,r);return(0,i.jsx)(Z,{"aria-hidden":!0,tabIndex:0,...p,ref:t,style:{position:"fixed"},onFocus:m=>{let u=m.relatedTarget;!l.viewport?.contains(u)&&o()}})});oe.displayName=Be;var J="Toast",bt="toast.swipeStart",vt="toast.swipeMove",ft="toast.swipeCancel",xt="toast.swipeEnd",$e=a.forwardRef((e,t)=>{let{forceMount:r,open:o,defaultOpen:p,onOpenChange:l,...m}=e,[u=!0,b]=Fe({prop:o,defaultProp:p,onChange:l});return(0,i.jsx)(Le,{present:r||u,children:(0,i.jsx)(Tt,{open:u,...m,ref:t,onClose:()=>b(!1),onPause:K(e.onPause),onResume:K(e.onResume),onSwipeStart:E(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:E(e.onSwipeMove,d=>{let{x:R,y:f}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${R}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:E(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:E(e.onSwipeEnd,d=>{let{x:R,y:f}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${R}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),b(!1)})})})});$e.displayName=J;var[yt,kt]=je(J,{onClose(){}}),Tt=a.forwardRef((e,t)=>{let{__scopeToast:r,type:o="foreground",duration:p,open:l,onClose:m,onEscapeKeyDown:u,onPause:b,onResume:d,onSwipeStart:R,onSwipeMove:f,onSwipeCancel:M,onSwipeEnd:S,...N}=e,c=$(J,r),[n,x]=a.useState(null),w=Q(t,s=>x(s)),h=a.useRef(null),y=a.useRef(null),k=p||c.duration,v=a.useRef(0),O=a.useRef(k),X=a.useRef(0),{onToastAdd:V,onToastRemove:j}=c,A=K(()=>{n?.contains(document.activeElement)&&c.viewport?.focus(),m()}),W=a.useCallback(s=>{!s||s===1/0||(window.clearTimeout(X.current),v.current=new Date().getTime(),X.current=window.setTimeout(A,s))},[A]);a.useEffect(()=>{let s=c.viewport;if(s){let P=()=>{W(O.current),d?.()},C=()=>{let Y=new Date().getTime()-v.current;O.current=O.current-Y,window.clearTimeout(X.current),b?.()};return s.addEventListener(te,C),s.addEventListener(re,P),()=>{s.removeEventListener(te,C),s.removeEventListener(re,P)}}},[c.viewport,k,b,d,W]),a.useEffect(()=>{l&&!c.isClosePausedRef.current&&W(k)},[l,k,c.isClosePausedRef,W]),a.useEffect(()=>(V(),()=>j()),[V,j]);let ve=a.useMemo(()=>n?rt(n):null,[n]);return c.viewport?(0,i.jsxs)(i.Fragment,{children:[ve&&(0,i.jsx)(Rt,{__scopeToast:r,role:"status","aria-live":o==="foreground"?"assertive":"polite","aria-atomic":!0,children:ve}),(0,i.jsx)(yt,{scope:r,onClose:A,children:Xe.createPortal((0,i.jsx)(se.ItemSlot,{scope:r,children:(0,i.jsx)(Ne,{asChild:!0,onEscapeKeyDown:E(u,()=>{c.isFocusedToastEscapeKeyDownRef.current||A(),c.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,i.jsx)(I.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":l?"open":"closed","data-swipe-direction":c.swipeDirection,...N,ref:w,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:E(e.onKeyDown,s=>{s.key==="Escape"&&(u?.(s.nativeEvent),s.nativeEvent.defaultPrevented||(c.isFocusedToastEscapeKeyDownRef.current=!0,A()))}),onPointerDown:E(e.onPointerDown,s=>{s.button===0&&(h.current={x:s.clientX,y:s.clientY})}),onPointerMove:E(e.onPointerMove,s=>{if(!h.current)return;let P=s.clientX-h.current.x,C=s.clientY-h.current.y,Y=Boolean(y.current),q=["left","right"].includes(c.swipeDirection),U=["left","up"].includes(c.swipeDirection)?Math.min:Math.max,dt=q?U(0,P):0,pt=q?0:U(0,C),G=s.pointerType==="touch"?10:2,H={x:dt,y:pt},fe={originalEvent:s,delta:H};Y?(y.current=H,B(vt,f,fe,{discrete:!1})):Ke(H,c.swipeDirection,G)?(y.current=H,B(bt,R,fe,{discrete:!1}),s.target.setPointerCapture(s.pointerId)):(Math.abs(P)>G||Math.abs(C)>G)&&(h.current=null)}),onPointerUp:E(e.onPointerUp,s=>{let P=y.current,C=s.target;if(C.hasPointerCapture(s.pointerId)&&C.releasePointerCapture(s.pointerId),y.current=null,h.current=null,P){let Y=s.currentTarget,q={originalEvent:s,delta:P};Ke(P,c.swipeDirection,c.swipeThreshold)?B(xt,S,q,{discrete:!0}):B(ft,M,q,{discrete:!0}),Y.addEventListener("click",U=>U.preventDefault(),{once:!0})}})})})}),c.viewport)})]}):null}),Rt=e=>{let{__scopeToast:t,children:r,...o}=e,p=$(J,t),[l,m]=a.useState(!1),[u,b]=a.useState(!1);return zt(()=>m(!0)),a.useEffect(()=>{let d=window.setTimeout(()=>b(!0),1e3);return()=>window.clearTimeout(d)},[]),u?null:(0,i.jsx)(Ie,{asChild:!0,children:(0,i.jsx)(Z,{...o,children:l&&(0,i.jsxs)(i.Fragment,{children:[p.label," ",r]})})})},Et="ToastTitle",Je=a.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,i.jsx)(I.div,{...o,ref:t})});Je.displayName=Et;var Pt="ToastDescription",Ge=a.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e;return(0,i.jsx)(I.div,{...o,ref:t})});Ge.displayName=Pt;var Qe="ToastAction",Ze=a.forwardRef((e,t)=>{let{altText:r,...o}=e;return r.trim()?(0,i.jsx)(tt,{altText:r,asChild:!0,children:(0,i.jsx)(ne,{...o,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Qe}\`. Expected non-empty \`string\`.`),null)});Ze.displayName=Qe;var et="ToastClose",ne=a.forwardRef((e,t)=>{let{__scopeToast:r,...o}=e,p=kt(et,r);return(0,i.jsx)(tt,{asChild:!0,children:(0,i.jsx)(I.button,{type:"button",...o,ref:t,onClick:E(e.onClick,p.onClose)})})});ne.displayName=et;var tt=a.forwardRef((e,t)=>{let{__scopeToast:r,altText:o,...p}=e;return(0,i.jsx)(I.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":o||void 0,...p,ref:t})});function rt(e){let t=[];return Array.from(e.childNodes).forEach(o=>{if(o.nodeType===o.TEXT_NODE&&o.textContent&&t.push(o.textContent),Ct(o)){let p=o.ariaHidden||o.hidden||o.style.display==="none",l=o.dataset.radixToastAnnounceExclude==="";if(!p)if(l){let m=o.dataset.radixToastAnnounceAlt;m&&t.push(m)}else t.push(...rt(o))}}),t}function B(e,t,r,{discrete:o}){let p=r.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&p.addEventListener(e,t,{once:!0}),o?Se(p,l):p.dispatchEvent(l)}var Ke=(e,t,r=0)=>{let o=Math.abs(e.x),p=Math.abs(e.y),l=o>p;return t==="left"||t==="right"?l&&o>r:!l&&p>r};function zt(e=()=>{}){let t=K(e);De(()=>{let r=0,o=0;return r=window.requestAnimationFrame(()=>o=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(r),window.cancelAnimationFrame(o)}},[t])}function Ct(e){return e.nodeType===e.ELEMENT_NODE}function _t(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{let p=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||p?NodeFilter.FILTER_SKIP:o.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function ee(e){let t=document.activeElement;return e.some(r=>r===t?!0:(r.focus(),document.activeElement!==t))}var ot=We,ie=He,de=$e,pe=Je,le=Ge,ce=Ze,me=ne;var _=T(D(),1),at=ot,we=F.forwardRef(({className:e,...t},r)=>(0,_.jsx)(ie,{ref:r,className:L("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));we.displayName=ie.displayName;var Nt=Me("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),he=F.forwardRef(({className:e,variant:t,...r},o)=>(0,_.jsx)(de,{ref:o,className:L(Nt({variant:t}),e),...r}));he.displayName=de.displayName;var At=F.forwardRef(({className:e,...t},r)=>(0,_.jsx)(ce,{ref:r,className:L("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));At.displayName=ce.displayName;var ge=F.forwardRef(({className:e,...t},r)=>(0,_.jsx)(me,{ref:r,className:L("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:(0,_.jsx)(Oe,{className:"h-4 w-4"})}));ge.displayName=me.displayName;var ue=F.forwardRef(({className:e,...t},r)=>(0,_.jsx)(pe,{ref:r,className:L("text-sm font-semibold",e),...t}));ue.displayName=pe.displayName;var be=F.forwardRef(({className:e,...t},r)=>(0,_.jsx)(le,{ref:r,className:L("text-sm opacity-90",e),...t}));be.displayName=le.displayName;var z=T(D(),1);function st(){let{toasts:e}=Ve();return(0,z.jsxs)(at,{children:[e.map(function({id:t,title:r,description:o,action:p,...l}){return(0,z.jsxs)(he,{...l,children:[(0,z.jsxs)("div",{className:"grid gap-1",children:[r&&(0,z.jsx)(ue,{children:r}),o&&(0,z.jsx)(be,{children:o})]}),p,(0,z.jsx)(ge,{})]},t)}),(0,z.jsx)(we,{})]})}var nt="/build/_assets/tailwind-B2G6NDDU.css";var g=T(D(),1),Ft=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:nt}];function it(){let{env:e}=Ee();return(0,g.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,g.jsxs)("head",{children:[(0,g.jsx)("meta",{charSet:"utf-8"}),(0,g.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,g.jsx)(Te,{}),(0,g.jsx)(ke,{})]}),(0,g.jsxs)("body",{children:[(0,g.jsx)(ye,{}),(0,g.jsx)("div",{id:"toast-root",children:(0,g.jsx)(st,{})}),(0,g.jsx)("script",{dangerouslySetInnerHTML:{__html:`window.env = ${JSON.stringify(e)}`}}),(0,g.jsx)(ze,{}),(0,g.jsx)(Re,{}),(0,g.jsx)(Pe,{})]})]})}export{it as default,Ft as links};