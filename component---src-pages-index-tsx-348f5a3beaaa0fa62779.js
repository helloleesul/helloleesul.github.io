"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{92:function(e,t,r){r.r(t),r.d(t,{default:function(){return ne}});var n={};r.r(n),r.d(n,{exclude:function(){return O},extract:function(){return j},parse:function(){return w},parseUrl:function(){return E},pick:function(){return I},stringify:function(){return Z},stringifyUrl:function(){return F}});var o=r(7294);const a="%[a-f0-9]{2}",i=new RegExp("("+a+")|([^%]+?)","gi"),s=new RegExp("("+a+")+","gi");function c(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],c(r),c(n))}function l(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let r=1;r<t.length;r++)t=(e=c(t,r).join("")).match(i)||[];return e}}function u(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=s.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=l(r[0]);e!==r[0]&&(t[r[0]]=e)}r=s.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function p(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function f(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const d=e=>null==e,m=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),g=Symbol("encodeFragmentIdentifier");function y(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function b(e,t){return t.encode?t.strict?m(e):encodeURIComponent(e):e}function h(e,t){return t.decode?u(e):e}function k(e){return Array.isArray(e)?e.sort():"object"==typeof e?k(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function v(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function x(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function j(e){const t=(e=v(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function w(e,t){y((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&h(r,e).includes(e.arrayFormatSeparator);r=a?h(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>h(t,e))):null===r?r:h(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?h(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>h(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=p(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:h(i,t),r(h(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=x(r,t);else n[o]=x(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=k(r):e[t]=r,e}),Object.create(null))}function Z(e,t){if(!e)return"";y((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&d(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[b(t,e),"[",o,"]"].join("")]:[...r,[b(t,e),"[",b(o,e),"]=",b(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[b(t,e),"[]"].join("")]:[...r,[b(t,e),"[]=",b(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[b(t,e),":list="].join("")]:[...r,[b(t,e),":list=",b(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[b(r,e),t,b(o,e)].join("")]:[[n,b(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,b(t,e)]:[...r,[b(t,e),"=",b(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?b(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?b(r,t)+"[]":o.reduce(n(r),[]).join("&"):b(r,t)+"="+b(o,t)})).filter((e=>e.length>0)).join("&")}function E(e,t){t={decode:!0,...t};let[r,n]=p(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:w(j(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:h(n,t)}:{}}}function F(e,t){t={encode:!0,strict:!0,[g]:!0,...t};const r=v(e.url).split("?")[0]||"";let n=Z({...w(j(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[g]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function I(e,t,r){r={parseFragmentIdentifier:!0,[g]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=E(e,r);return F({url:n,query:f(o,t),fragmentIdentifier:a},r)}function O(e,t,r){return I(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var S=n,A=r(5694),C=r(4316),R=r(917),$=r(4160),N=r(6302);const U=(0,C.Z)("div",{target:"ekjojfx1"})({name:"1a1yvks",styles:"display:flex;flex-wrap:wrap;gap:20px;margin:2rem auto 0;align-items:baseline"}),L=(0,R.iv)("border-bottom:5px solid ",N.Z.PALETTE.yellow,";font-weight:800;","","",""),P={name:"lsfjks",styles:"border-bottom:none;font-weight:400"},T=(0,C.Z)((e=>{let{active:t,...r}=e;return(0,R.tZ)($.rU,r)}),{target:"ekjojfx0"})(P," ",(e=>{let{active:t}=e;return t&&L})," font-size:18px;cursor:pointer;display:flex;align-items:flex-start;transition:font-weight 0.1s;span{font-size:12px;}&:last-of-type{margin-right:0;}");function z(e){let{selectedCategory:t,categoryList:r}=e;return(0,R.tZ)(U,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,R.tZ)(T,{to:`/?category=${r}`,active:r===t,key:r},r,(0,R.tZ)("span",null,r===t&&`(${n})`))})))}var q=r(7462);const D=10;var M=r(8032),_=r(5511);const B=(0,C.Z)("div",{target:"e1ke9m728"})("transition:opacity 0.2s;opacity:0;background:rgba(0, 0, 0, 0.5);width:100%;height:100%;position:absolute;top:0;color:",N.Z.PALETTE.white,";"),G=(0,C.Z)("div",{target:"e1ke9m727"})({name:"1hj4zd3",styles:"border-radius:1rem;overflow:hidden;position:relative;margin-bottom:1rem"}),K=(0,C.Z)($.rU,{target:"e1ke9m726"})("&:hover{",B,"{opacity:1;backdrop-filter:blur(3px);}",G,"{box-shadow:0 0 8px rgba(0, 0, 0, 0.15);}}"),V=(0,C.Z)(M.G,{target:"e1ke9m725"})({name:"1nv5fft",styles:"height:200px"}),H=(0,C.Z)("h3",{target:"e1ke9m724"})({name:"1bjds75",styles:"font-size:1.5rem"}),J=(0,C.Z)("span",{target:"e1ke9m723"})(_.nE," display:inline-block;margin-bottom:0.5rem;font-family:system-ui,sans-serif;"),Q=(0,C.Z)("ul",{target:"e1ke9m722"})({name:"1wz16km",styles:"position:absolute;top:0;padding:1rem;display:flex;flex-wrap:wrap;gap:0.5rem"}),W=(0,C.Z)("li",{target:"e1ke9m721"})(_.nE,";"),X=(0,C.Z)("p",{target:"e1ke9m720"})({name:"12vprrg",styles:"position:absolute;bottom:0;padding:1rem;font-weight:300"});function Y(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,R.tZ)(K,{to:i},(0,R.tZ)(G,null,(0,R.tZ)(V,{image:a,alt:"Post Item Image"}),(0,R.tZ)(B,null,(0,R.tZ)(Q,null,n.map((e=>(0,R.tZ)(W,{key:e},e)))),(0,R.tZ)(X,null,o))),(0,R.tZ)(J,null,r),(0,R.tZ)(H,null,t))}const ee=(0,C.Z)("div",{target:"e1og7xnn0"})("display:grid;grid-template-columns:1fr 1fr;grid-gap:40px 20px;margin:0 auto;padding:50px 0 100px;",_.EV,"{grid-template-columns:1fr;}");function te(e){let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:a}=function(e,t){const r=(0,o.useRef)(null),n=(0,o.useRef)(null),{0:a,1:i}=(0,o.useState)(1),s=(0,o.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,o.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((()=>i(1)),[e]),(0,o.useEffect)((()=>{D*a>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[a,e]),{containerRef:r,postList:s.slice(0,a*D)}}(t,r);return(0,R.tZ)(ee,{ref:n},a.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,R.tZ)(Y,(0,q.Z)({},n,{link:r,key:t}))})))}var re=r(3371);function ne(e){let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:a}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:s},publicURL:c}}}=e;const l=S.parse(t),u="string"==typeof l.category&&l.category?l.category:"All",p=(0,o.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,R.tZ)(re.Z,{title:r,description:n,url:a,image:c},(0,R.tZ)(A.Z,{profileImage:s}),(0,R.tZ)(z,{selectedCategory:u,categoryList:p}),(0,R.tZ)(te,{selectedCategory:u,posts:i}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-348f5a3beaaa0fa62779.js.map