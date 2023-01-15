"use strict";(self.webpackChunkomega_doc=self.webpackChunkomega_doc||[]).push([[428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?i.createElement(h,a(a({ref:t},m),{},{components:n})):i.createElement(h,a({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},a="Setup",l={unversionedId:"Setup",id:"Setup",title:"Setup",description:"To begin using Omega, first invite the bot to your server with admin permissions. Once the bot is added, elevate Omega's role to the top of the role list. (The higher the role is on the list, the better it will function).",source:"@site/docs/Setup.md",sourceDirName:".",slug:"/Setup",permalink:"/documentation/docs/Setup",draft:!1,editUrl:"https://github.com/Omega-Femdom-Bot/documentation/blob/main/docs/Setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Omega",permalink:"/documentation/docs/intro"},next:{title:"Slash Commands",permalink:"/documentation/docs/category/slash-commands"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Femdom",id:"femdom",level:3},{value:"Confession",id:"confession",level:3},{value:"Prison",id:"prison",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To begin using Omega, first ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/api/oauth2/authorize?client_id=1025629384629043262&permissions=8&scope=bot%20applications.commands"},"invite")," the bot to your server with admin permissions. Once the bot is added, elevate Omega's role to the top of the role list. (The higher the role is on the list, the better it will function)."),(0,r.kt)("p",null,"The next step is to configure 3 modules separately. This process should take about 1-2 minutes."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("h3",{id:"femdom"},"Femdom"),(0,r.kt)("p",null,"This command will enable or disable the Femdom Module in your server and configure the roles."),(0,r.kt)("admonition",{title:"Syntax",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"/config femdom")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!domme")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!subby")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!gag_log")," ",(0,r.kt)("inlineCode",{parentName:"p"},"owned")," ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," ",(0,r.kt)("inlineCode",{parentName:"p"},"enable"),"\t",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Note"),": Any parameter prefixed with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!"))," is ",(0,r.kt)("strong",{parentName:"p"},"required"),", the others are optional.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!domme"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"!subby"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"switch"),": Members with these roles will be considered as dominant, submissive, and switch, respectively."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!gag_log"),": This is the channel where Omega will post sub's gagged messages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"owned"),": This is the role given to subs if they are owned by a domme. The role will be removed if they are disowned."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable"),": Setting this to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," will enable or disable the Femdom Module in the server. ",(0,r.kt)("strong",{parentName:"li"},"Default is ",(0,r.kt)("inlineCode",{parentName:"strong"},"True")),".")),(0,r.kt)("h3",{id:"confession"},"Confession"),(0,r.kt)("p",null,"This command enables or disables the Confession Module in your server, allowing server members to confess secrets anonymously."),(0,r.kt)("admonition",{title:"Syntax",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"/config confession")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!channel")," ",(0,r.kt)("inlineCode",{parentName:"p"},"enable"),"\t",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Note"),": Any parameter prefixed with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!"))," is ",(0,r.kt)("strong",{parentName:"p"},"required"),", the others are optional.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!channel"),": This is the channel where confessions will be posted for all to read."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable"),": Setting this to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," will enable or disable the Module in the server. ",(0,r.kt)("em",{parentName:"li"},"Default is ",(0,r.kt)("inlineCode",{parentName:"em"},"True")))),(0,r.kt)("h3",{id:"prison"},"Prison"),(0,r.kt)("p",null,"This command enables or disables the Prison Module in your server, allowing elite members to punish and force brats to write lines for their freedom."),(0,r.kt)("admonition",{title:"Syntax",type:"important"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"/config prison")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!prison")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!prisoner")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!prison_master")," ",(0,r.kt)("inlineCode",{parentName:"p"},"enable"),"\t",(0,r.kt)("br",null),(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Note"),": Any parameter prefixed with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"!"))," is ",(0,r.kt)("strong",{parentName:"p"},"required"),", the others are optional.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!prison"),": This is the channel where locked members will write lines. ",(0,r.kt)("em",{parentName:"li"},"a brat's worst nightmare")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enable"),": Setting this to ",(0,r.kt)("inlineCode",{parentName:"li"},"True")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"False")," will enable or disable the Module in the server. ",(0,r.kt)("em",{parentName:"li"},"Default is ",(0,r.kt)("inlineCode",{parentName:"em"},"True")))),(0,r.kt)("admonition",{title:"Permission Required",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Administrator Permission")," is required for configuring modules.")))}d.isMDXComponent=!0}}]);