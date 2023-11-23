"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[447],{5318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(5773),o=(r(7378),r(5318));const i={sidebar_position:1,title:"Introduction"},a="Introduction",s={unversionedId:"pourquoi-publicodes/introduction",id:"pourquoi-publicodes/introduction",title:"Introduction",description:"Le point de d\xe9part",source:"@site/docs/pourquoi-publicodes/introduction.mdx",sourceDirName:"pourquoi-publicodes",slug:"/pourquoi-publicodes/introduction",permalink:"/docs/pourquoi-publicodes/introduction",draft:!1,editUrl:"https://github.com/betagouv/publicodes/edit/master/website/docs/pourquoi-publicodes/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction"},sidebar:"tutorialSidebar",previous:{title:"Optimisations",permalink:"/docs/tools/optim"},next:{title:"Standards de conception des mod\xe8les publics",permalink:"/docs/pourquoi-publicodes/standard-modeles-ouverts"}},u={},l=[{value:"Le point de d\xe9part",id:"le-point-de-d\xe9part",level:2},{value:"Des exigences d&#39;ouvertures ambitieuses",id:"des-exigences-douvertures-ambitieuses",level:2}],c={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"le-point-de-d\xe9part"},"Le point de d\xe9part"),(0,o.kt)("p",null,"Le langage publicodes est n\xe9 pour une application concr\xe8te : calculer les cotisations sociales fran\xe7aises. Les outils disponibles n'\xe9taient pas adapt\xe9s pour encoder ce domaine sp\xe9cifique tr\xe8s calculatoire de la loi fran\xe7aise."),(0,o.kt)("p",null,"D'abord construit comme un simple moteur de calcul sp\xe9cialis\xe9 et interne au service ",(0,o.kt)("a",{parentName:"p",href:"https://mon-entreprise.urssaf.fr/"},"mon-entreprise.fr"),", puis fork\xe9 pour un domaine m\xe9tier radicalement diff\xe9rent mais \xe9galement rempli d'op\xe9rations math\xe9matiques de base, les calculs d'empreinte carbone, il a \xe9t\xe9 transform\xe9 en une biblioth\xe8que g\xe9n\xe9rique dans le cadre de ",(0,o.kt)("a",{parentName:"p",href:"https://beta.gouv.fr/"},"Betagouv"),"."),(0,o.kt)("p",null,"Il \xe9tait en effet une r\xe9ponse \xe0 la vaste t\xe2che d'ouverture des algorithmes de calcul de l'\xc9tat."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kont.me/l-%C3%A9tat-nous-doit-des-explications"},"D\xe9couvrez dans cet article"),' le raisonnement qui justifie publicodes, ainsi que tout un ensemble d\'initiatives dites "Rules as code" d\xe9j\xe0 lanc\xe9es ou en devenir.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn-images-1.medium.com/max/800/1*RbIsqc5VcBlXSWNrGNkN0Q.png",alt:"L'assembl\xe9e nationale, lieu symbolique de la R\xe9publique, couvertes d'instructions binaires incompr\xe9hensibles"})),(0,o.kt)("h2",{id:"des-exigences-douvertures-ambitieuses"},"Des exigences d'ouvertures ambitieuses"),(0,o.kt)("p",null,"Publicodes n'est qu'une r\xe9ponse au probl\xe8me de l'ouverture des mod\xe8les de calcul publics. Ce dernier est complexe, allant du simple mod\xe8le \"tableur\" partag\xe9 entre collaborateurs \xe0 la traduction int\xe9grale d'un ensemble de textes de loi, certains \xe9tant tr\xe8s num\xe9riques, d'autres davantage bool\xe9ens."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/pourquoi-publicodes/standard-modeles-ouverts"},"Voici une liste de caract\xe9ristiques")," qu'on peut attendre des mod\xe8les de calcul publics."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=2a223666.761ea1c1.js.map