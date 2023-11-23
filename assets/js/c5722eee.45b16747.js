"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[410],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(5773),a=(r(7378),r(5318));const o={title:"REST-API",description:"Outil pour cr\xe9er votre API REST Publicodes.",hide_table_of_contents:!0},i="API REST Publicodes",p={unversionedId:"api/api-rest",id:"api/api-rest",title:"REST-API",description:"Outil pour cr\xe9er votre API REST Publicodes.",source:"@site/docs/api/api-rest.mdx",sourceDirName:"api",slug:"/api/api-rest",permalink:"/docs/api/api-rest",draft:!1,editUrl:"https://github.com/betagouv/publicodes/edit/master/website/docs/api/api-rest.mdx",tags:[],version:"current",frontMatter:{title:"REST-API",description:"Outil pour cr\xe9er votre API REST Publicodes.",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"React-ui",permalink:"/docs/api/react-ui"},next:{title:"Outillage des mod\xe8les",permalink:"/docs/tools/"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Utilisation",id:"utilisation",level:2},{value:"Projets phares",id:"projets-phares",level:2}],u={toc:l},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-rest-publicodes"},"API REST Publicodes"),(0,a.kt)("p",null,"Publicodes \xe9tant un module javascript, il peut \xeatre difficile de l'int\xe9grer dans des projets \xe9crits dans d'autres\nlangages (PHP, Python, etc.) ou m\xeame dans certaines applications comme des tableurs (excel, gsheet, etc.)."),(0,a.kt)("p",null,"Pour r\xe9pondre \xe0 ce besoin nous avons d\xe9velopp\xe9 un module pour vous permettre\nde cr\xe9er rapidement une API REST avec vos r\xe8gles.",(0,a.kt)("br",null),"\nIl se compose d'un middleware ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/koa"},"Koajs"),"\nqui expose des points d'entr\xe9e analogues \xe0 l'interpr\xe9teur Publicodes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/evaluate")," \xc9value une ou plusieurs expressions avec une situation donn\xe9e"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Les param\xe8tres sont envoy\xe9s au format JSON :\n",(0,a.kt)("inlineCode",{parentName:"p"},"expressions")," une/des expressions publicodes (type : ",(0,a.kt)("inlineCode",{parentName:"p"},"string | number | object | (string | number | object)[]"),")\nExemple: ",(0,a.kt)("inlineCode",{parentName:"p"},'["d\xe9penses primeur", {valeur : "d\xe9penses primeur * 2"}]')),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"situation")," une situation publicodes (type : ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),")\nExemple: ",(0,a.kt)("inlineCode",{parentName:"p"},'{ "prix . carottes" : "1\u20ac/kg" }')))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/rules")," Retourne la liste de toutes vos r\xe8gles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/rules/{rule}")," Retourne une r\xe8gle sp\xe9cifique"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Exemple: ",(0,a.kt)("inlineCode",{parentName:"p"},"/rules/prix%20.%20carottes"))))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @publicodes/api\n# or\nyarn add @publicodes/api\n")),(0,a.kt)("h2",{id:"utilisation"},"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Router from '@koa/router'\nimport Koa from 'koa'\nimport Engine from 'publicodes'\nimport { koaMiddleware as publicodesAPI } from '@publicodes/api'\n\nconst app = new Koa()\nconst router = new Router()\n\n// Create middleware with your Engine\nconst apiRoutes = publicodesAPI(new Engine({ coucou: 0 }))\n\n// Basic routes usage (/evaluate, /rules, etc.)\nrouter.use(apiRoutes)\n\n// Or use with specific route prefix (/v1/evaluate, /v1/rules, etc.)\nrouter.use('/v1', apiRoutes)\n\napp.use(router.routes()).listen(3000)\n\n// ...\n")),(0,a.kt)("p",null,"Un fichier d'exemple complet se trouve dans les sources si besoin : ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/betagouv/publicodes/blob/master/packages/api/example.ts"},"example.ts"),"."),(0,a.kt)("h2",{id:"projets-phares"},"Projets phares"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"L'",(0,a.kt)("a",{parentName:"strong",href:"https://mon-entreprise.urssaf.fr/d%C3%A9veloppeur/api"},"API mon-entreprise")))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=c5722eee.45b16747.js.map