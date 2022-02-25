"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1214:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={slug:"bluefin-1",title:"Introducing Bluefin - A statically-typed reflective programming language",author:"Nick Silva",author_title:"College Junior",author_url:"https://github.com/silva-nick",author_image_url:"https://avatars.githubusercontent.com/u/39960606?v=4",tags:["blog","bluefin","update","computer languages"]},l=void 0,u={permalink:"/portfolio/blog/bluefin-1",editUrl:"https://github.com/silva-nick/portfolio/tree/main/blog/blog/2022-02-24-bluefin-1.md",source:"@site/blog/2022-02-24-bluefin-1.md",title:"Introducing Bluefin - A statically-typed reflective programming language",description:"Introduction",date:"2022-02-24T00:00:00.000Z",formattedDate:"February 24, 2022",tags:[{label:"blog",permalink:"/portfolio/blog/tags/blog"},{label:"bluefin",permalink:"/portfolio/blog/tags/bluefin"},{label:"update",permalink:"/portfolio/blog/tags/update"},{label:"computer languages",permalink:"/portfolio/blog/tags/computer-languages"}],readingTime:7.715,truncated:!0,nextItem:{title:"How to create a custom plugin for Docusaurus",permalink:"/portfolio/blog/docusaurus-plugins"}},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Starting off",id:"starting-off",children:[]},{value:"Bluefin Objectives",id:"bluefin-objectives",children:[]},{value:"General tips",id:"general-tips",children:[]},{value:"Bluefin today",id:"bluefin-today",children:[]},{value:"Signing off",id:"signing-off",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"After my experience working on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/hermes"},"Hermes JavaScript interpreter")," during my time at the MLH fellowship, I was curious to see what it would be like to develop my own language spec and interpreter. Once fall semester ended, and I started to get bored during winter break, I started work on Bluefin, a simple interpreter in C++. Since December, I have been reading up on computer language concepts, and have patched together a basic interpreter when not too busy with school."),(0,r.kt)("p",null,"I hope to make this blog a place where I can provide information and tips about building interpreters, and also keep an update of how Bluefin is going. Obviously, I'm already a few months and many hours down the road, so I'll try to use this post to catch up on all thats happened over the past 64 commits."),(0,r.kt)("h2",{id:"starting-off"},"Starting off"),(0,r.kt)("h4",{id:"how-to-get-started"},"How to get started"),(0,r.kt)("p",null,"When I just started I really wasn't sure where I could find information, help, and guidance. Computer languages are pretty complex, and it was hard to find tutorials on even basic aspects of them. Luckily I stumbled upon a few really helpful resources (listed below) that helped me in the right direction. The one resource that I can highly recommend is ",(0,r.kt)("a",{parentName:"p",href:"https://ruslanspivak.com/"},"Ruslan Pivak's blog"),". Not only does Ruslan go into detail into building an interpreter from scratch, he also provides countless resources to dive further and learn more about implementation patterns."),(0,r.kt)("p",null,"From there, I got started coding. I learned and utilized CMake, set up a git repo, and got to coding. One thing Ruslan's blog does that I think is fantastic is starting by implementing a simple calculator. This way, you can develop the lexer, parser, and interpreter for your language while working on a smaller but super useful problem."),(0,r.kt)("h4",{id:"helpful-resources"},"Helpful resources"),(0,r.kt)("p",null,"Ruslan's Blog: a great introduction to writing interpreters"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ruslanspivak.com/lsbasi-part1/"},"https://ruslanspivak.com/lsbasi-part1/")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Fundamental Concepts in Programming Languages"),": An introduction to a more mathmatical and theoretical understanding of computer languages."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/awh/compsci-papers/blob/master/Fundamental%20Concepts%20in%20Programming%20Languages.pdf"},"https://github.com/awh/compsci-papers/blob/master/Fundamental%20Concepts%20in%20Programming%20Languages.pdf")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Language Implementation Patterns"),": A useful reference with great explainations of general language topics that go beyond interpreters. Also has nice projects. Language Implementation Patterns: Create Your Own Domain-Specific and General Programming Languages - Terence Parr"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Syntax of C in BNF"),": This details how to parse C-style languages and was super useful for me."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cs.wmich.edu/~gupta/teaching/cs4850/sumII06/The%20syntax%20of%20C%20in%20Backus-Naur%20form.htm"},"https://cs.wmich.edu/~gupta/teaching/cs4850/sumII06/The%20syntax%20of%20C%20in%20Backus-Naur%20form.htm")),(0,r.kt)("p",null,"The DLang website: Walking through this website inspired me and helped answer some questions about what a computer language should aspire to be."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dlang.org/overview.html"},"https://dlang.org/overview.html")),(0,r.kt)("h2",{id:"bluefin-objectives"},"Bluefin Objectives"),(0,r.kt)("p",null,"After looking at other language features, watching some conference presentations, and thinking about what I want out of a language, I brainstormed some ideas for how the development of Bluefin should be guided. Taking inspiration from DLang, I made an outline of the design goals for Bluefin."),(0,r.kt)("p",null,"Bluefin is developed with a simple set of development goals that outline the intentions of the project into the future. These main ideas are summarized below."),(0,r.kt)("p",null,"Design goals of Bluefin"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enable and mandate type-safe programming practices."),(0,r.kt)("li",{parentName:"ol"},"Make writing code fast and simple to understand."),(0,r.kt)("li",{parentName:"ol"},"Allow the code to be self-documenting through readable syntax and strict typing."),(0,r.kt)("li",{parentName:"ol"},"Encourage memory-safe code by abstracting memory allocation for the user."),(0,r.kt)("li",{parentName:"ol"},"Allow an easy transition from C, C++, or other similar languages by adopting C-like syntax."),(0,r.kt)("li",{parentName:"ol"},"Provide a segmentable workflow that prioritizes iterative practices"),(0,r.kt)("li",{parentName:"ol"},"Support easy and intuitive object-oriented programming primitives."),(0,r.kt)("li",{parentName:"ol"},"Use a context-free grammar that is intuitive and performant."),(0,r.kt)("li",{parentName:"ol"},"Do not sacrifice performance."),(0,r.kt)("li",{parentName:"ol"},"Provide powerful abstraction through introspection."),(0,r.kt)("li",{parentName:"ol"},"Ensure Bluefin is open source and accessible.")),(0,r.kt)("p",null,"Each of these goals was crafted to support the fundamental goal of Bluefin, to provide a performant, educational, and syntactically powerful language. The importance of performance to the language is represented in points (8,9,11). In not sacrificing on performance, Bluefin scales to large projects and complex computational tasks. However, usability is incredibly important to Bluefin\u2019s position as an educational computer language. Ease of access and programming, summarized in points (1,2,3,4,5,6,7,8), is guaranteed through maintaining recognizable syntax while simplifying cumbersome aspects of traditional languages. Moreover, by a computer languages Occam\u2019s Razor doing things the best way is always easier than doing them the wrong way. Abstractly, Bluefin can be used in unique ways to other similar languages through iterative code blocks and introspection (10). This transition in development workflow gives users more power over how they want to develop. Finally, Bluefin is organized to give the developer extreme power and control over their code. Through layered abstraction and runtime introspection, Bluefin looks to empower developers in their environments."),(0,r.kt)("h2",{id:"general-tips"},"General tips"),(0,r.kt)("p",null,"Now it's time for some general advice for anyone looking to get into writing computer languages. Obviously I'm also a rookie so this isn't a definitive guide, but sometimes it helps to hear from someone who just went through the process."),(0,r.kt)("h5",{id:"1-maintain-documentation-for-your-grammar"},"(1) Maintain documentation for your grammar"),(0,r.kt)("p",null,"Building up a language from scratch requires tons of iteration. One way to help clarify your progress is by maintaining a living language spec document. Keeping this file, probably in EBNF or BNF, is super useful for debugging and understanding your parser. For this I relied a lot on both the C-language spec and Ruslan's blog."),(0,r.kt)("p",null,"Once you have this spec, it's easy to match up the rules of the grammar to the procedures in your parser. Additionally, if you ever want to use a parser-generator instead of writing a parser for yourself, this grammar will help."),(0,r.kt)("p",null,"A short example from Bluefin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'unary_expression = primary_expression\n                 | unary_operator primary_expression\n\nprimary_expression = indentifier\n                    | constant\n                    | "(" assignment_expression ")"\n\nassignment_expression = additive_expression\n                      | unary_expression assignment_operator assignment_expression\n')),(0,r.kt)("h5",{id:"2-start-with-a-basic-calculator"},"(2) Start with a basic calculator"),(0,r.kt)("p",null,"I already brought this up in the introduction, but starting by writing a basic calculator is an awesome way to start. A super simple calculator doesn't require rigorously splitting your code into a lexer, parser, and interpreter, but starting from a super basic level and refactoring helps realize the importance of these design patterns."),(0,r.kt)("p",null,"It can also help with your ",(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/basic-calculator/"},"leetcode skills"),"!!"),(0,r.kt)("h5",{id:"3-avoid-premature-abstraction"},"(3) Avoid premature abstraction"),(0,r.kt)("p",null,"While writing an intrepreter it is easy to get carried away with trying to support all the possible abstractions at each step of the process. For example, it's easy to want to support many primative data types after figuring out the basics of type-handeling and interpreting. However, this race towards abstraction seems to cause unnecessary code complexity for features that can feasible be easily pushed down the road. Currently, Bluefin only supports ",(0,r.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"double")," data types as adding more would only make the code more messy without really improving its underlying functionality."),(0,r.kt)("p",null,"Avoiding abstraction helps keep your codebase clean and managable, and places importance on developing language features over adding support for all usecases too soon."),(0,r.kt)("h5",{id:"4-be-careful-about-how-data-is-shared"},"(4) Be careful about how data is shared"),(0,r.kt)("p",null,"In Bluefin, I have objects for the Lexer, Parser, and Interpreter. Dealing with all these abstractions it becomes quite tricky to pin down which instance owns which data. It's important to slowly comb through your code to avoid unnecessary copies and to pass data between objects efficiently."),(0,r.kt)("h2",{id:"bluefin-today"},"Bluefin today"),(0,r.kt)("h4",{id:"project-setup"},"Project setup"),(0,r.kt)("p",null,"Bluefin is written in C++, built using make and CMake, ran in Docker on Debian, tested with GTest using Git modules, formatted with clang-format, and deployed on Github with CI provided by GitHub Actions."),(0,r.kt)("h4",{id:"features"},"Features"),(0,r.kt)("p",null,"Currently, Bluefin can support some basic programs using C-style syntax. I've implemented expression parsing, declaration, and type checking. Here's an example of a syntactically valid Bluefin program to date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"{\n    int x = 10 % 4 + 3;     /* x = 5 */\n    double y = x * 2;       /* y = 10 */\n}\n")),(0,r.kt)("h4",{id:"bad-memory-management"},"Bad memory management"),(0,r.kt)("p",null,"One glaring problem still in my pile of TODO's is fixing up the many memory leaks in the parsing and intepreting phases. While constructing the AST, I currently initialize nodes as raw pointers because I need to use these pointers to be able to up and downcast between ASTNodes and ASTNode instances (BinOpNode). I was honestly quite surprised that downcasting in C++ was this difficult and decided to leak memory in the short term to avoid adding too much complication. Soon, I hope to refactor the code with propper pointer and memory management to solve this problem."),(0,r.kt)("h4",{id:"adding-ci"},"Adding CI"),(0,r.kt)("p",null,"Most recently, I worked through adding CI for building, testing, and providing cover coverage for Bluefin. Testing is really important to maintaining projects as they grow, especially in an interpreter that is constantly getting refactored."),(0,r.kt)("p",null,"Using GitHub actions, I used the base CMake CI profile and then adapted it to my project. This involved:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adding a submodule flag so the action imported Gtest"),(0,r.kt)("li",{parentName:"ul"},"Adding flags to my CMake build so that it could selectively generate code coverage"),(0,r.kt)("li",{parentName:"ul"},"Running tests using ",(0,r.kt)("inlineCode",{parentName:"li"},"ctest")),(0,r.kt)("li",{parentName:"ul"},"Installing and running ",(0,r.kt)("inlineCode",{parentName:"li"},"lcov")," to generate coverage reports"),(0,r.kt)("li",{parentName:"ul"},"Displaying that coverage statistics using ",(0,r.kt)("inlineCode",{parentName:"li"},"github-actions-report-lcov@1"))),(0,r.kt)("p",null,"More info about how I set up the CI is available in my ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/silva-nick/Bluefin/blob/main/.github/workflows/cmake.yml"},"config doc"),"."),(0,r.kt)("h2",{id:"signing-off"},"Signing off"),(0,r.kt)("h4",{id:"the-immediate-future"},"The immediate future"),(0,r.kt)("p",null,"The next step for Bluefin is to add semantic analysis. I'm excited because I think this feature is a big step and gets Bluefin closer to evaluating control statements!"),(0,r.kt)("h4",{id:"see-you-next-time-"},"See you next time \ud83d\udc4b"))}d.isMDXComponent=!0}}]);