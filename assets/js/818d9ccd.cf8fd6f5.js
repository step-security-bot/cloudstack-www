"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,b=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={layout:"post",title:"[ADVISORY] Apache CloudStack SAML Single Sign-On XXE (CVE-2022-35741)",tags:["announcement"],authors:["rohit"],slug:"cve-2022-35741"},i=void 0,l={permalink:"/blog/cve-2022-35741",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2022-07-18-cve-2022-35741.md",source:"@site/blog/2022-07-18-cve-2022-35741.md",title:"[ADVISORY] Apache CloudStack SAML Single Sign-On XXE (CVE-2022-35741)",description:"Apache CloudStack version 4.5.0 and later has a SAML 2.0 authentication Service Provider plugin which is found to be vulnerable to XML external entity (XXE) injection. This plugin is not enabled by default and the attacker would require that this plugin be enabled to exploit the vulnerability. When the SAML 2.0 plugin is enabled in affected versions of Apache CloudStack could potentially allow the exploitation of XXE vulnerabilities. The SAML 2.0 messages constructed during the authentication flow in Apache CloudStack are XML-based and the XML data is parsed by various standard libraries that are now understood to be vulnerable to XXE injection attacks such as arbitrary file reading, possible denial of service, server-side request forgery (SSRF) on the CloudStack management server.",date:"2022-07-18T00:00:00.000Z",formattedDate:"July 18, 2022",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[{name:"Rohit Yadav",title:"PMC Member",url:"https://github.com/rohityadavcloud",imageURL:"https://github.com/rohityadavcloud.png",key:"rohit"}],frontMatter:{layout:"post",title:"[ADVISORY] Apache CloudStack SAML Single Sign-On XXE (CVE-2022-35741)",tags:["announcement"],authors:["rohit"],slug:"cve-2022-35741"},prevItem:{title:"Apache CloudStack LTS Maintenance Release 4.17.1.0",permalink:"/blog/apache-cloudstack-lts-release-41710"},nextItem:{title:"Meet the Community - K B Shiv Kumar ",permalink:"/blog/meet-the-community-k-b"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"/blog/cve-2022-35741"},(0,r.kt)("img",{src:"/img/imported/dc6a0532-c5b5-4ed0-b2f8-f40197d2d577",alt:"Screenshot 2022-07-18 at 15.33.00.png",width:"750",height:"393"})),(0,r.kt)("p",null,"Apache CloudStack version 4.5.0 and later has a SAML 2.0 authentication Service Provider plugin which is found to be vulnerable to XML external entity (XXE) injection. This plugin is not enabled by default and the attacker would require that this plugin be enabled to exploit the vulnerability. When the SAML 2.0 plugin is enabled in affected versions of Apache CloudStack could potentially allow the exploitation of XXE vulnerabilities. The SAML 2.0 messages constructed during the authentication flow in Apache CloudStack are XML-based and the XML data is parsed by various standard libraries that are now understood to be vulnerable to XXE injection attacks such as arbitrary file reading, possible denial of service, server-side request forgery (SSRF) on the CloudStack management server."),(0,r.kt)("p",null,"As of 18th July 2022, this is now tracked under CVE-2022-35741: ",(0,r.kt)("a",{href:"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-35741"},"https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-35741")),(0,r.kt)("p",null,"To mitigate the risk, a CloudStack admin can do any of the following:"),(0,r.kt)("p",null,"1. Disable the SAML 2.0 plugin by setting `saml2.enabled` to false and restart the management servers."),(0,r.kt)("p",null,"2. Upgrade to Apache CloudStack 4.16.1.1 or 4.17.0.1 or higher."),(0,r.kt)("p",null,(0,r.kt)("b",null,"Credit"),'This issue was discovered and reported by "v3ged0ge".'))}p.isMDXComponent=!0}}]);