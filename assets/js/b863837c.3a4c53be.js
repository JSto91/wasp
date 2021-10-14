(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1252],{1871:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(4179);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),s="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=i(),h=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,r.useState)(a),g=v[0],y=v[1],w=r.Children.toArray(e.children),k=[];if(null!=p){var x=h[p];null!=x&&x!==g&&m.some((function(e){return e.value===x}))&&y(x)}var I=function(e){var t=e.currentTarget,n=k.indexOf(t),r=m[n].value;y(r),null!=p&&(b(p,r),setTimeout((function(){var e,n,r,a,i,o,s,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case l:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:O,onFocus:I,onClick:I},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},4179:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},3434:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(1137),s=n(1871),c=["components"],l={},u="Function Parameters",m={unversionedId:"guide/schema/params",id:"guide/schema/params",isDocsHomePage:!1,title:"Function Parameters",description:"The optional params subsection contains field definitions for each of the parameters",source:"@site/docs/guide/schema/params.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/params",permalink:"/docs/guide/schema/params",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/schema/params.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Limiting Access",permalink:"/docs/guide/schema/access"},next:{title:"Function Results",permalink:"/docs/guide/schema/results"}},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"function-parameters"},"Function Parameters"),(0,i.kt)("p",null,"The optional ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," subsection contains field definitions for each of the parameters\nthat a function takes. The layout of the field definitions is identical to that of\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/guide/schema/state"},"state")," field definitions, with one addition. The field type can be prefixed\nwith a question mark, which indicates that that parameter is optional."),(0,i.kt)("p",null,"The schema tool will automatically generate an immutable structure with member variables\nfor proxies to each parameter variable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," map. It will also generate code to\ncheck the presence of each non-optional parameter, and it will also verify the parameter's\ndata type. This checking is done before the function is called. The user will be able to\nimmediately start using the parameter proxy through the structure that is passed to the\nfunction."),(0,i.kt)("p",null,"When this subsection is empty or completely omitted, no structure will be generated or\npassed to the function."),(0,i.kt)("p",null,"For example, here is the structure generated for the immutable params for the ",(0,i.kt)("inlineCode",{parentName:"p"},"member"),"\nfunction:"),(0,i.kt)(o.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type ImmutableMemberParams struct {\n    id int32\n}\n\nfunc (s ImmutableMemberParams) Address() wasmlib.ScImmutableAddress {\n    return wasmlib.NewScImmutableAddress(s.id, idxMap[IdxParamAddress])\n}\n\nfunc (s ImmutableMemberParams) Factor() wasmlib.ScImmutableInt64 {\n    return wasmlib.NewScImmutableInt64(s.id, idxMap[IdxParamFactor])\n}\n"))),(0,i.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct ImmutableMemberParams {\n    pub(crate) id: i32,\n}\n\nimpl ImmutableMemberParams {\n    pub fn address(&self) -> ScImmutableAddress {\n        ScImmutableAddress::new(self.id, idx_map(IDX_PARAM_ADDRESS))\n    }\n\n    pub fn factor(&self) -> ScImmutableInt64 {\n        ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_FACTOR))\n    }\n}\n")))),(0,i.kt)("p",null,"Note that the schema tool will also generate a mutable version of the structure, suitable\nfor providing the parameters when calling this smart contract function."),(0,i.kt)("p",null,"In the next section we will look at the ",(0,i.kt)("inlineCode",{parentName:"p"},"results")," subsection."))}f.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);