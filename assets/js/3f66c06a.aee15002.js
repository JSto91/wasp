(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6338],{1871:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),o=n(4179);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,l=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=a(),h=m.tabGroupChoices,v=m.setTabGroupChoices,g=(0,r.useState)(o),y=g[0],b=g[1],w=r.Children.toArray(e.children),k=[];if(null!=d){var O=h[d];null!=O&&O!==y&&p.some((function(e){return e.value===O}))&&b(O)}var T=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;b(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,o,a,c,i,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,c=window,i=c.innerHeight,u=c.innerWidth,n>=0&&a<=u&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case l:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case u:var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},4179:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},2892:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=n(1137),i=n(1871),s=["components"],u={keywords:["ISCP","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},l="How to Deposit to a Chain",p={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",isDocsHomePage:!1,title:"How to Deposit to a Chain",description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",source:"@site/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",version:"current",frontMatter:{keywords:["ISCP","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/docs/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},d=[],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," entrypoint credits the transferred IOTAS into your on-chain account."),(0,a.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"_, err := chain.PostRequestSync(\n    solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).WithIotas(N),\n    wallet,\n)\n"))),(0,a.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// deposits N iotas from current SC into another chain\nlet transfer = ScTransfers::iotas(N);\nctx.post(chainID, ScHname::new("accounts"), ScHname::new("deposit") , None, transfer,0);\n')))))}m.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);