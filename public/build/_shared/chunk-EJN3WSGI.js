import{a as F,b as ve,r as ne}from"/build/_shared/chunk-BTR25ETF.js";import{e as P}from"/build/_shared/chunk-ADMCF34Z.js";var y=P(F(),1);var se=P(F(),1);function we(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function q(...e){return t=>e.forEach(r=>we(r,t))}function nr(...e){return se.useCallback(q(...e),e)}var M=P(ne(),1),K=y.forwardRef((e,t)=>{let{children:r,...o}=e,s=y.Children.toArray(r),n=s.find(ke);if(n){let l=n.props.children,i=s.map(d=>d===n?y.Children.count(l)>1?y.Children.only(null):y.isValidElement(l)?l.props.children:null:d);return(0,M.jsx)(H,{...o,ref:t,children:y.isValidElement(l)?y.cloneElement(l,void 0,i):null})}return(0,M.jsx)(H,{...o,ref:t,children:r})});K.displayName="Slot";var H=y.forwardRef((e,t)=>{let{children:r,...o}=e;if(y.isValidElement(r)){let s=Se(r);return y.cloneElement(r,{...Re(o,r.props),ref:t?q(t,s):s})}return y.Children.count(r)>1?y.Children.only(null):null});H.displayName="SlotClone";var Ce=({children:e})=>(0,M.jsx)(M.Fragment,{children:e});function ke(e){return y.isValidElement(e)&&e.type===Ce}function Re(e,t){let r={...t};for(let o in t){let s=e[o],n=t[o];/^on[A-Z]/.test(o)?s&&n?r[o]=(...i)=>{n(...i),s(...i)}:s&&(r[o]=s):o==="style"?r[o]={...s,...n}:o==="className"&&(r[o]=[s,n].filter(Boolean).join(" "))}return{...e,...r}}function Se(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(t=Object.getOwnPropertyDescriptor(e,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function ie(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=ie(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function _(){for(var e,t,r=0,o="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=ie(e))&&(o&&(o+=" "),o+=t);return o}var le=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ae=_,dr=(e,t)=>r=>{var o;if(t?.variants==null)return ae(e,r?.class,r?.className);let{variants:s,defaultVariants:n}=t,l=Object.keys(s).map(c=>{let b=r?.[c],h=n?.[c];if(b===null)return null;let m=le(b)||le(h);return s[c][m]}),i=r&&Object.entries(r).reduce((c,b)=>{let[h,m]=b;return m===void 0||(c[h]=m),c},{}),d=t==null||(o=t.compoundVariants)===null||o===void 0?void 0:o.reduce((c,b)=>{let{class:h,className:m,...C}=b;return Object.entries(C).every(v=>{let[g,u]=v;return Array.isArray(u)?u.includes({...n,...i}[g]):{...n,...i}[g]===u})?[...c,h,m]:c},[]);return ae(e,l,d,r?.class,r?.className)};var X="-",ze=e=>{let t=Pe(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{let i=l.split(X);return i[0]===""&&i.length!==1&&i.shift(),ue(i,t)||Ae(l)},getConflictingClassGroupIds:(l,i)=>{let d=r[l]||[];return i&&o[l]?[...d,...o[l]]:d}}},ue=(e,t)=>{if(e.length===0)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),s=o?ue(e.slice(1),o):void 0;if(s)return s;if(t.validators.length===0)return;let n=e.join(X);return t.validators.find(({validator:l})=>l(n))?.classGroupId},ce=/^\[(.+)\]$/,Ae=e=>{if(ce.test(e)){let t=ce.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Pe=e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return Ne(Object.entries(e.classGroups),r).forEach(([n,l])=>{J(l,o,n,t)}),o},J=(e,t,r,o)=>{e.forEach(s=>{if(typeof s=="string"){let n=s===""?t:de(t,s);n.classGroupId=r;return}if(typeof s=="function"){if(Me(s)){J(s(o),t,r,o);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([n,l])=>{J(l,de(t,n),r,o)})})},de=(e,t)=>{let r=e;return t.split(X).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},Me=e=>e.isThemeGetter,Ne=(e,t)=>t?e.map(([r,o])=>{let s=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,i])=>[t+l,i])):n);return[r,s]}):e,Ee=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map,s=(n,l)=>{r.set(n,l),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let l=r.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return s(n,l),l},set(n,l){r.has(n)?r.set(n,l):s(n,l)}}},pe="!",Ge=e=>{let{separator:t,experimentalParseClassName:r}=e,o=t.length===1,s=t[0],n=t.length,l=i=>{let d=[],c=0,b=0,h;for(let u=0;u<i.length;u++){let x=i[u];if(c===0){if(x===s&&(o||i.slice(u,u+n)===t)){d.push(i.slice(b,u)),b=u+n;continue}if(x==="/"){h=u;continue}}x==="["?c++:x==="]"&&c--}let m=d.length===0?i:i.substring(b),C=m.startsWith(pe),v=C?m.substring(1):m,g=h&&h>b?h-b:void 0;return{modifiers:d,hasImportantModifier:C,baseClassName:v,maybePostfixModifierPosition:g}};return r?i=>r({className:i,parseClassName:l}):l},Ve=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},je=e=>({cache:Ee(e.cacheSize),parseClassName:Ge(e),...ze(e)}),Ie=/\s+/,Te=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:s}=t,n=[],l=e.trim().split(Ie),i="";for(let d=l.length-1;d>=0;d-=1){let c=l[d],{modifiers:b,hasImportantModifier:h,baseClassName:m,maybePostfixModifierPosition:C}=r(c),v=Boolean(C),g=o(v?m.substring(0,C):m);if(!g){if(!v){i=c+(i.length>0?" "+i:i);continue}if(g=o(m),!g){i=c+(i.length>0?" "+i:i);continue}v=!1}let u=Ve(b).join(":"),x=h?u+pe:u,w=x+g;if(n.includes(w))continue;n.push(w);let G=s(g,v);for(let A=0;A<G.length;++A){let T=G[A];n.push(x+T)}i=c+(i.length>0?" "+i:i)}return i};function We(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=fe(t))&&(o&&(o+=" "),o+=r);return o}var fe=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=fe(e[o]))&&(r&&(r+=" "),r+=t);return r};function Oe(e,...t){let r,o,s,n=l;function l(d){let c=t.reduce((b,h)=>h(b),e());return r=je(c),o=r.cache.get,s=r.cache.set,n=i,i(d)}function i(d){let c=o(d);if(c)return c;let b=Te(d,r);return s(d,b),b}return function(){return n(We.apply(null,arguments))}}var p=e=>{let t=r=>r[e]||[];return t.isThemeGetter=!0,t},be=/^\[(?:([a-z-]+):)?(.+)\]$/i,_e=/^\d+\/\d+$/,Le=new Set(["px","full","screen"]),$e=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Be=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ue=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Fe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,R=e=>N(e)||Le.has(e)||_e.test(e),S=e=>E(e,"length",De),N=e=>Boolean(e)&&!Number.isNaN(Number(e)),Z=e=>E(e,"number",N),j=e=>Boolean(e)&&Number.isInteger(Number(e)),He=e=>e.endsWith("%")&&N(e.slice(0,-1)),a=e=>be.test(e),z=e=>$e.test(e),Ke=new Set(["length","size","percentage"]),Ze=e=>E(e,Ke,ge),Je=e=>E(e,"position",ge),Xe=new Set(["image","url"]),Qe=e=>E(e,Xe,rr),Ye=e=>E(e,"",er),I=()=>!0,E=(e,t,r)=>{let o=be.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},De=e=>Be.test(e)&&!Ue.test(e),ge=()=>!1,er=e=>Fe.test(e),rr=e=>qe.test(e);var tr=()=>{let e=p("colors"),t=p("spacing"),r=p("blur"),o=p("brightness"),s=p("borderColor"),n=p("borderRadius"),l=p("borderSpacing"),i=p("borderWidth"),d=p("contrast"),c=p("grayscale"),b=p("hueRotate"),h=p("invert"),m=p("gap"),C=p("gradientColorStops"),v=p("gradientColorStopPositions"),g=p("inset"),u=p("margin"),x=p("opacity"),w=p("padding"),G=p("saturate"),A=p("scale"),T=p("sepia"),Q=p("skew"),Y=p("space"),D=p("translate"),L=()=>["auto","contain","none"],$=()=>["auto","hidden","clip","visible","scroll"],B=()=>["auto",a,t],f=()=>[a,t],ee=()=>["",R,S],W=()=>["auto",N,a],re=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],te=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",a],oe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],k=()=>[N,a];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[R,S],blur:["none","",z,a],brightness:k(),borderColor:[e],borderRadius:["none","","full",z,a],borderSpacing:f(),borderWidth:ee(),contrast:k(),grayscale:V(),hueRotate:k(),invert:V(),gap:f(),gradientColorStops:[e],gradientColorStopPositions:[He,S],inset:B(),margin:B(),opacity:k(),padding:f(),saturate:k(),scale:k(),sepia:V(),skew:k(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":oe()}],"break-before":[{"break-before":oe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...re(),a]}],overflow:[{overflow:$()}],"overflow-x":[{"overflow-x":$()}],"overflow-y":[{"overflow-y":$()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j,a]}],basis:[{basis:B()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",j,a]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",j,a]},a]}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[j,a]},a]}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[u]}],mx:[{mx:[u]}],my:[{my:[u]}],ms:[{ms:[u]}],me:[{me:[u]}],mt:[{mt:[u]}],mr:[{mr:[u]}],mb:[{mb:[u]}],ml:[{ml:[u]}],"space-x":[{"space-x":[Y]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[Y]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,t]}],"min-w":[{"min-w":[a,t,"min","max","fit"]}],"max-w":[{"max-w":[a,t,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[a,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,t,"auto","min","max","fit"]}],"font-size":[{text:["base",z,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Z]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",N,Z]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",R,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[x]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[x]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",R,S]}],"underline-offset":[{"underline-offset":["auto",R,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[x]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...re(),Je]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ze]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Qe]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[x]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[x]}],"divide-style":[{divide:O()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[R,a]}],"outline-w":[{outline:[R,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ee()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[x]}],"ring-offset-w":[{"ring-offset":[R,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,Ye]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[x]}],"mix-blend":[{"mix-blend":[...te(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":te()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",z,a]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[h]}],saturate:[{saturate:[G]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[x]}],"backdrop-saturate":[{"backdrop-saturate":[G]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:k()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:k()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[j,a]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[Q]}],"skew-y":[{"skew-y":[Q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[R,S,Z]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}};var me=Oe(tr);function gr(...e){return me(_(e))}var he=P(F(),1),ye=P(ve(),1);var xe=P(ne(),1),or=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],yr=or.reduce((e,t)=>{let r=he.forwardRef((o,s)=>{let{asChild:n,...l}=o,i=n?K:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),(0,xe.jsx)(i,{...l,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function xr(e,t){e&&ye.flushSync(()=>e.dispatchEvent(t))}export{q as a,nr as b,K as c,Ce as d,yr as e,xr as f,dr as g,gr as h};
