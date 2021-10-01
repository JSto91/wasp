(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6201],{1752:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),c=["components"],i={},s="On-chain accounts",l={unversionedId:"misc/accounts",id:"misc/accounts",isDocsHomePage:!1,title:"On-chain accounts",description:"ISCP introduces the concept of on-chain account. Each chain maintains a list",source:"@site/docs/misc/accounts.md",sourceDirName:"misc",slug:"/misc/accounts",permalink:"/docs/misc/accounts",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/misc/accounts.md",version:"current",frontMatter:{}},u=[{value:"How on-chain accounts work",id:"how-on-chain-accounts-work",children:[]},{value:"How secure are the on-chain accounts?",id:"how-secure-are-the-on-chain-accounts",children:[]},{value:"Node fees",id:"node-fees",children:[]}],h={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"on-chain-accounts"},"On-chain accounts"),(0,r.kt)("p",null,"ISCP introduces the concept of ",(0,r.kt)("em",{parentName:"p"},"on-chain account"),". Each chain maintains a list\nof pairs: ",(0,r.kt)("inlineCode",{parentName:"p"},"<agent ID>: <colored balance>"),".  Each pair is an account with its\ncolored balances."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Any agent ID on the ISCP network may have an account on any chain"),".  In\nother words, any smart contract and any ordinary address on the network can\nhave account on any chain."),(0,r.kt)("p",null,"ISCP ensures that the tokens owned by the chain address may be moved to another\nlocation only by the entity represented by the corresponding agent ID.  The\nsystem requires cryptographically secure authorization to move funds between\non-chain accounts. "),(0,r.kt)("p",null,'Note that there isn\'t any "superuser" or any other centralized entity which could move\ntokens from chain accounts without authorization of its owners.'),(0,r.kt)("p",null,"Some corollaries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any entity may move its tokens seamlessly from an address on the tangle to the account\ncontrolled by the same address on any chain."),(0,r.kt)("li",{parentName:"ul"},"Anyone can send tokens to the account of any smart contract on any chain."),(0,r.kt)("li",{parentName:"ul"},"An address may, at any time, withdraw it tokens from the chain, transferring\nthem to the address on the Tangle."),(0,r.kt)("li",{parentName:"ul"},"A contract may keep its funds on its native chain or on any other chain.")),(0,r.kt)("h2",{id:"how-on-chain-accounts-work"},"How on-chain accounts work"),(0,r.kt)("p",null,"Each chain contains several built-in smart contracts, called ",(0,r.kt)("em",{parentName:"p"},"core contracts"),".\nOne of those ",(0,r.kt)("em",{parentName:"p"},"core")," contracts is the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract, which handles the whole\naccount machinery for each chain."),(0,r.kt)("p",null,"All funds belonging to the contracts on some chain are actually owned by the\nchain address in the IOTA ledger (level 1).  The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract keeps the\naccount balance for each agent ID in the chain state (level 2)."),(0,r.kt)("p",null,"Funds are moved to and from any on-chain accounts by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),"\nfunctions on that chain.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract does all the ledger\naccounting and guarantees security."),(0,r.kt)("p",null,"In each call, the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract securely knows the agent ID of the\n",(0,r.kt)("em",{parentName:"p"},"caller")," (either an ordinary wallet or another smart contract) and authorizes\nthe call.  For example, a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"withdraw")," function will only be\nauthorized if called from the ",(0,r.kt)("em",{parentName:"p"},"agent ID")," of the owner of the account."),(0,r.kt)("p",null,"The most important functions of the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deposit"),". Allows the caller to deposit its own funds to any target account on the chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withdrawToAddress"),". Allows a L1 address (a wallet) to take funds from its on-chain account back to the address. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withdrawToChain"),". Allows a smart contract to take back its funds from another chain to its native chain. ")),(0,r.kt)("p",null,"By sending requests to the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract on a chain, the sender is in\nfull control of its on-chain funds. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Sandbox")," interface provides ",(0,r.kt)("inlineCode",{parentName:"p"},"TransferToAddress")," method for the smart contract\nto transfer its funds to any address on the Tangle."),(0,r.kt)("p",null,"For more information see ",(0,r.kt)("a",{parentName:"p",href:"/docs/contract_core/accounts"},"accounts contract"),"."),(0,r.kt)("h2",{id:"how-secure-are-the-on-chain-accounts"},"How secure are the on-chain accounts?"),(0,r.kt)("p",null,"On-chain accounts are as secure as the chain they reside on."),(0,r.kt)("h2",{id:"node-fees"},"Node fees"),(0,r.kt)("p",null,"The node fees are charged by using the following logic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if fees are enabled, they are accrued to the on-chain account of\n",(0,r.kt)("inlineCode",{parentName:"li"},"ChainOwnerID"),", the ",(0,r.kt)("em",{parentName:"li"},"agent ID")," that represents the owner of the chain."),(0,r.kt)("li",{parentName:"ul"},"if fees are disabled, the request tokens (1 mandatory token contained in each request)\nare always accrued to the on-chain account controlled by the sender of the request.\nThe requester may withdraw it at any time.")))}d.isMDXComponent=!0},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||r;return t?a.createElement(m,c(c({ref:n},u),{},{components:t})):a.createElement(m,c({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);