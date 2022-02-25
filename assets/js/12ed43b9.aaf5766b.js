"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[544],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),g=o,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},330:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={slug:"bluefin-1",title:"Introducing Bluefin - A statically-typed reflective programming language",author:"Nick Silva",author_title:"College Junior",author_url:"https://github.com/silva-nick",author_image_url:"https://avatars.githubusercontent.com/u/39960606?v=4",tags:["blog","bluefin","update","computer languages"]},u=void 0,c={permalink:"/portfolio/blog/bluefin-1",editUrl:"https://github.com/silva-nick/portfolio/tree/main/blog/blog/2022-02-24-bluefin-1.md",source:"@site/blog/2022-02-24-bluefin-1.md",title:"Introducing Bluefin - A statically-typed reflective programming language",description:"Introduction",date:"2022-02-24T00:00:00.000Z",formattedDate:"February 24, 2022",tags:[{label:"blog",permalink:"/portfolio/blog/tags/blog"},{label:"bluefin",permalink:"/portfolio/blog/tags/bluefin"},{label:"update",permalink:"/portfolio/blog/tags/update"},{label:"computer languages",permalink:"/portfolio/blog/tags/computer-languages"}],readingTime:7.715,truncated:!0,nextItem:{title:"How to create a custom plugin for Docusaurus",permalink:"/portfolio/blog/docusaurus-plugins"}},p=[{value:"Introduction",id:"introduction",children:[]}],s={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"After my experience working on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/hermes"},"Hermes JavaScript interpreter")," during my time at the MLH fellowship, I was curious to see what it would be like to develop my own language spec and interpreter. Once fall semester ended, and I started to get bored during winter break, I started work on Bluefin, a simple interpreter in C++. Since December, I have been reading up on computer language concepts, and have patched together a basic interpreter when not too busy with school."),(0,a.kt)("p",null,"I hope to make this blog a place where I can provide information and tips about building interpreters, and also keep an update of how Bluefin is going. Obviously, I'm already a few months and many hours down the road, so I'll try to use this post to catch up on all thats happened over the past 64 commits."))}f.isMDXComponent=!0}}]);