"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[621],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:e},s),{},{components:n})):r.createElement(d,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2513:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"lsa",title:"Understanding Latent Semantic Analysis",author:"Nick Silva",author_title:"College Rising Junior",author_url:"https://github.com/silva-nick",author_image_url:"https://avatars.githubusercontent.com/u/39960606?v=4",tags:["blog","data science"]},c=void 0,u={permalink:"/portfolio/blog/lsa",editUrl:"https://github.com/silva-nick/portfolio/tree/main/blog/blog/2021-7-04-lsa.mdx",source:"@site/blog/2021-7-04-lsa.mdx",title:"Understanding Latent Semantic Analysis",description:"Introduction to LSA:",date:"2021-07-04T00:00:00.000Z",formattedDate:"July 4, 2021",tags:[{label:"blog",permalink:"/portfolio/blog/tags/blog"},{label:"data science",permalink:"/portfolio/blog/tags/data-science"}],readingTime:14.005,truncated:!0,prevItem:{title:"How to create a custom plugin for Docusaurus",permalink:"/portfolio/blog/docusaurus-plugins"},nextItem:{title:"Big Launch!",permalink:"/portfolio/blog/big-launch"}},s=[{value:"Introduction to LSA:",id:"introduction-to-lsa",children:[]}],p={toc:s};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction-to-lsa"},"Introduction to LSA:"),(0,a.kt)("h4",{id:"lsa"},"LSA"),(0,a.kt)("p",null,"A classical problem in the field of natural language processing (NLP) is that of finding and matching semantic meaning from large bodies of text. Some classical solutions involve stemming, controlled vocabularies, and using thesauri ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". A different approach to this problem is Latent Semantic Analysis (LSA). LSA is an application of dimension reduction to the fields of natural language processing and information retrieval ",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Mathematically, it involves (1) creating a vector encoding of a large body of text, (2) computing a truncated singular value decomposition on the matrix, and (3) retrieving word and vector similarity in the dimension-reduced space. LSA is a well-studied model that remains an important tool and benchmark in the task of semantic similarity."))}f.isMDXComponent=!0}}]);