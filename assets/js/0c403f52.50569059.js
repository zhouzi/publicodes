"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[172],{5760:(e,n,a)=>{a.d(n,{Z:()=>s});var t=a(7052),i=a(7378),r=a(2494);const l=(0,i.lazy)((()=>Promise.all([a.e(532),a.e(588),a.e(364)]).then(a.bind(a,6364))));function s(e){let{rules:n,meta:a}=e;const[s,p]=(0,i.useState)(n.trim()),[o,u]=(0,i.useState)(!1),[d,m]=(0,i.useState)(a),c="json";return(0,i.useEffect)((()=>{o||p(n.trim())}),[o,n]),i.createElement("div",{className:r.Z.container},o?i.createElement(i.Suspense,{fallback:i.createElement("div",null,"Chargement en cours")},i.createElement(l,{language:c,defaultTarget:d,onTargetChange:m,onChange:e=>p(e)},s)):i.createElement(t.Z,{language:c},s),i.createElement("button",{className:r.Z.button,onClick:()=>u((e=>!e)),style:o?{top:0}:{bottom:0}},o?"Fermer":"\u26a1 Tester"))}},956:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=a(5773),i=(a(7378),a(5318)),r=a(5760);const l={sidebar_position:1,title:"Principes de base"},s=void 0,p={unversionedId:"principes-de-base",id:"principes-de-base",title:"Principes de base",description:"La syntaxe de Publicodes est bas\xe9e sur le langage",source:"@site/docs/principes-de-base.mdx",sourceDirName:".",slug:"/principes-de-base",permalink:"/docs/principes-de-base",draft:!1,editUrl:"https://github.com/betagouv/publicodes/edit/master/website/docs/principes-de-base.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Principes de base"},sidebar:"tutorialSidebar",next:{title:"Tutoriel",permalink:"/docs/tutoriel"}},o={},u=[{value:"Unit\xe9s",id:"unit\xe9s",level:2},{value:"Pourcentage <code>%</code>",id:"pourcentage-",level:3},{value:"M\xe9canismes",id:"m\xe9canismes",level:2},{value:"M\xe9canismes cha\xeen\xe9s",id:"m\xe9canismes-cha\xeen\xe9s",level:3},{value:"Pages d&#39;explications",id:"pages-dexplications",level:2},{value:"Conditions bool\xe9ennes",id:"conditions-bool\xe9ennes",level:2},{value:"Applicabilit\xe9",id:"applicabilit\xe9",level:2},{value:"Tester l&#39;applicabilit\xe9",id:"tester-lapplicabilit\xe9",level:3},{value:"Rend non applicable",id:"rend-non-applicable",level:3},{value:"Espaces de noms",id:"espaces-de-noms",level:2},{value:"D\xe9sactivation de branche",id:"d\xe9sactivation-de-branche",level:3},{value:"Remplacement",id:"remplacement",level:2},{value:"R\xe8gle imbriqu\xe9es",id:"r\xe8gle-imbriqu\xe9es",level:2},{value:"A l&#39;int\xe9rieur des m\xe9canismes : <code>nom</code>",id:"a-lint\xe9rieur-des-m\xe9canismes--nom",level:3},{value:"Directement sur la r\xe8gle : <code>avec</code>",id:"directement-sur-la-r\xe8gle--avec",level:3},{value:"R\xe8gles non d\xe9finie",id:"r\xe8gles-non-d\xe9finie",level:2},{value:"R\xe8gles priv\xe9es",id:"r\xe8gles-priv\xe9es",level:2},{value:"Comportement des r\xe8gles priv\xe9es",id:"comportement-des-r\xe8gles-priv\xe9es",level:3}],d={toc:u},m="wrapper";function c(e){let{components:n,...a}=e;return(0,i.kt)(m,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"La syntaxe de Publicodes est bas\xe9e sur le langage\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/YAML"},"Yaml"),"."),(0,i.kt)("p",null,"Un fichier Publicodes contient une liste de ",(0,i.kt)("em",{parentName:"p"},"r\xe8gles")," identifi\xe9es par leur ",(0,i.kt)("em",{parentName:"p"},"nom")," et\nposs\xe9dant une ",(0,i.kt)("em",{parentName:"p"},"valeur")," :"),(0,i.kt)(r.Z,{rules:"prix d'un repas: 10 \u20ac",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Une formule de calcul peut faire ",(0,i.kt)("em",{parentName:"p"},"r\xe9f\xe9rence")," \xe0 d'autres r\xe8gles.\nDans l'exemple suivant la r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prix total")," aura pour valeur 50 (= 5 ","*"," 10)"),(0,i.kt)(r.Z,{rules:"prix d'un repas: 10 \u20ac\nprix total: 5 * prix d'un repas",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Il s'agit d'un langage d\xe9claratif : comme dans une formule d'un tableur le ",(0,i.kt)("inlineCode",{parentName:"p"},"prix total")," sera recalcul\xe9 automatiquement si le prix d'un repas change. L'ordre de\nd\xe9finition des r\xe8gles n'a pas d'importance."),(0,i.kt)("h2",{id:"unit\xe9s"},"Unit\xe9s"),(0,i.kt)("p",null,"Pour fiabiliser les calculs et faciliter leur compr\xe9hension, on peut pr\xe9ciser\nl'unit\xe9 des valeurs litt\xe9rales :"),(0,i.kt)(r.Z,{rules:"prix d'un repas: 10 \u20ac/repas\nnombre de repas: 5 repas\n\nprix total: nombre de repas * prix d'un repas",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Le calcul est inchang\xe9 mais on a indiqu\xe9 que le \"prix d'un repas\" s'exprime en\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac/repas"),' et que le "nombre de repas" est un nombre de ',(0,i.kt)("inlineCode",{parentName:"p"},"repas"),". L'unit\xe9 du prix\ntotal est inf\xe9r\xe9e automatiquement comme \xe9tant en ",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac"),". (",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac/repas")," ","*"," ",(0,i.kt)("inlineCode",{parentName:"p"},"repas")," =\n",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac"),")"),(0,i.kt)("p",null,"Ce syst\xe8me d'unit\xe9 permet de typer les formules de calcul et de rejeter\nautomatiquement des formules incoh\xe9rentes :"),(0,i.kt)(r.Z,{rules:"prix d'un repas: 10 \u20ac/repas\nnombre de repas: 5 repas\nfrais de r\xe9servation: 1 \u20ac/repas\n\nprix total: nombre de repas * prix d'un repas + frais de r\xe9servation\n# Erreur:\n# La formule de \"prix total\" est invalide.",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Dans l'exemple ci-dessus, Publicodes d\xe9tecte une erreur car les termes de\nl'addition ont des unit\xe9s incompatibles : d'un c\xf4t\xe9 on a des ",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac")," et de l'autre\ndes ",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac/repas"),"."),(0,i.kt)("p",null,'Cette incoh\xe9rence d\'unit\xe9 t\xe9moigne d\'une erreur de logique. Ici, une mani\xe8re de corriger l\'erreur peut \xeatre de factoriser la variable "nombre de repas" dans la formule du "prix total".'),(0,i.kt)(r.Z,{rules:"prix d'un repas: 10 \u20ac/repas\nnombre de repas: 5 repas\nfrais de r\xe9servation: 1 \u20ac/repas\n\nprix total: nombre de repas * (prix d'un repas + frais de r\xe9servation)",mdxType:"PublicodeExample"}),(0,i.kt)("admonition",{title:"Attention",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Il ne faut pas ins\xe9rer d'espace autour de la barre oblique dans\nles unit\xe9s, l'unit\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac / mois")," doit \xeatre not\xe9e ",(0,i.kt)("inlineCode",{parentName:"p"},"\u20ac/mois"),".")),(0,i.kt)("p",null,"Publicodes convertit automatiquement les unit\xe9s si besoin."),(0,i.kt)(r.Z,{rules:"salaire: 1500 \u20ac/mois\nprime faible salaire applicable: salaire < 20 k\u20ac/an",mdxType:"PublicodeExample"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On peut forcer la conversion des unit\xe9s via le ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/m%C3%A9canismes#unit%C3%A9"},"m\xe9canisme ",(0,i.kt)("inlineCode",{parentName:"a"},"unit\xe9")),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Types de base disponibles pour la conversion :")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jour")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"mois")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"an")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u20ac")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"k\u20ac")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"g")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"kg")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"mg"))),(0,i.kt)("h3",{id:"pourcentage-"},"Pourcentage ",(0,i.kt)("inlineCode",{parentName:"h3"},"%")),(0,i.kt)("p",null,"Il est possible de sp\xe9cifier un pourcentage comme unit\xe9. L'addition d'un nombre avec un pourcentage revient \xe0 ajouter le pourcentage \xe0 ce nombre. De m\xeame pour la soustraction."),(0,i.kt)(r.Z,{rules:"prix TTC: 10\u20ac + 20%",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Le r\xe9sultat de l'addition de deux pourcentages est bien la somme des deux nombres :"),(0,i.kt)(r.Z,{rules:"r\xe9duction: 2.4% + 5.0%",mdxType:"PublicodeExample"}),(0,i.kt)("h2",{id:"m\xe9canismes"},"M\xe9canismes"),(0,i.kt)("p",null,"Il existe une autre mani\xe8re d'\xe9crire des formules de calcul : les m\xe9canismes. Au lieu de d\xe9finir la formule sur une ligne, celle-ci prend la forme d'un objet sur plusieurs lignes."),(0,i.kt)("p",null,"Par exemple, la formule suivante :"),(0,i.kt)(r.Z,{rules:"prix total: 5 repas * 9 \u20ac/repas",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"peut \xe9galement s'\xe9crire en utilisant le m\xe9canisme ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/m%C3%A9canismes#produit"},(0,i.kt)("inlineCode",{parentName:"a"},"produit"))," :"),(0,i.kt)(r.Z,{rules:"prix total:\n  produit:\n    assiette: 9 \u20ac/repas\n    facteur: 5 repas",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Un des avantages de cette \xe9criture est que la syntaxe hi\xe9rarchique de Yaml permet d'imbriquer les m\xe9canismes :"),(0,i.kt)(r.Z,{rules:"table: 12 personnes\naddition:\n  somme:\n    - 7 caf\xe9s * 1.5 \u20ac/caf\xe9s\n    - produit: # Menu unique d\xe9gressif pour les groupes\n        assiette: table\n        facteur:\n          variations:\n          - si: table > 10 personnes\n            alors: 12 \u20ac/personnes\n          - sinon: 15 \u20ac/personnes",mdxType:"PublicodeExample"}),(0,i.kt)("h3",{id:"m\xe9canismes-cha\xeen\xe9s"},"M\xe9canismes cha\xeen\xe9s"),(0,i.kt)("p",null,"Certains m\xe9canismes peuvent appara\xeetre au m\xeame niveau d'indentation. Dans ce cas, le moteur appliquera les transformations dans un ordre pr\xe9\xe9tabli."),(0,i.kt)(r.Z,{rules:"nombre de repas: 12 repas\nremboursement repas:\n  valeur: nombre de repas * 4.21 \u20ac/repas\n  plafond: 500\u20ac\n  abattement: 25\u20ac\n  arrondi: oui",mdxType:"PublicodeExample"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/api/m%C3%A9canismes"},"Voir la liste des m\xe9canismes existants")))),(0,i.kt)("h2",{id:"pages-dexplications"},"Pages d'explications"),(0,i.kt)("p",null,"L'explication des r\xe8gles est un des objectifs fondamentaux de Publicodes."),(0,i.kt)("p",null,"Chaque r\xe8gle se voit g\xe9n\xe9rer automatiquement une page explicative\ncorrespondante dans le front-end, contenant une information facilement digeste\nmise en regard des calculs eux-m\xeames."),(0,i.kt)("p",null,"Plusieurs propri\xe9t\xe9s sont reprises dans ces pages d'explications :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"le ",(0,i.kt)("strong",{parentName:"li"},"titre"),", qui s'affiche en haut de la page. Par d\xe9faut on utilise le nom\nde la r\xe8gle, mais la propri\xe9t\xe9 ",(0,i.kt)("inlineCode",{parentName:"li"},"titre")," permet de choisir un titre plus\nappropri\xe9 ;"),(0,i.kt)("li",{parentName:"ul"},"la ",(0,i.kt)("strong",{parentName:"li"},"description")," est affich\xe9e comme paragraphe d'introduction sur la page.\nOn utilise le caract\xe8re ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," pour indiquer au parseur Yaml que la description est sur plusieurs lignes ;"),(0,i.kt)("li",{parentName:"ul"},"une ",(0,i.kt)("strong",{parentName:"li"},"note")," de bas de page, affich\xe9e apr\xe8s la formule de calcul. Elle peut \xeatre sur plusieurs lignes \xe9galement.")),(0,i.kt)(r.Z,{rules:"ticket resto:\n  titre: Prise en charge des titres-restaurants\n  formule: 4 \u20ac/repas\n  description: |-\n    L'employeur peut remettre des titres restaurants sous plusieurs formats: ticket papier, carte \xe0 puce\n    ou appli mobile\n  note: |-\n    La valeur a \xe9t\xe9 revaloris\xe9e en 2022 pour faire face \xe0 l'inflation.",mdxType:"PublicodeExample"}),(0,i.kt)("h2",{id:"conditions-bool\xe9ennes"},"Conditions bool\xe9ennes"),(0,i.kt)("p",null,"Publicodes supporte des op\xe9rateurs bool\xe9ens basiques."),(0,i.kt)(r.Z,{rules:"\xe2ge: 17 ans\nnationalit\xe9 fran\xe7aise: oui\ncitoyen europ\xe9en:\ndomicili\xe9 en France:\n\ndroit de vote municipale:\n  toutes ces conditions:\n    - \xe2ge >= 18 ans\n    - une de ces conditions:\n        - nationalit\xe9 fran\xe7aise\n        - toutes ces conditions:\n          - citoyen europ\xe9en\n          - domicili\xe9 en France\n",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Il est possible de faire des branchements conditionnels via le m\xe9canisme ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/m%C3%A9canismes#variations"},(0,i.kt)("inlineCode",{parentName:"a"},"variations"))),(0,i.kt)("h2",{id:"applicabilit\xe9"},"Applicabilit\xe9"),(0,i.kt)("p",null,"On peut d\xe9finir des conditions d'applicabilit\xe9 pour des valeurs :"),(0,i.kt)(r.Z,{rules:"date de d\xe9but: 12/02/2020\n\nanciennet\xe9 en fin d'ann\xe9e:\n  dur\xe9e:\n    depuis: date de d\xe9but\n    jusqu'\xe0: 31/12/2020\n\nprime de vacances:\n  applicable si: anciennet\xe9 en fin d'ann\xe9e > 1 an\n  valeur: 200\u20ac",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Ici, si l'anciennet\xe9 est inf\xe9rieure \xe0 un an, alors la prime de vacances sera\n",(0,i.kt)("em",{parentName:"p"},"non applicable"),"."),(0,i.kt)("p",null,"Les variables ",(0,i.kt)("em",{parentName:"p"},"non applicable")," sont prise en compte diff\xe9rement au niveau des m\xe9canismes num\xe9riques.\nPar exemple le m\xe9canisme ",(0,i.kt)("inlineCode",{parentName:"p"},"somme")," comptera une prime non applicable comme valant z\xe9ro. Un plafond ",(0,i.kt)("em",{parentName:"p"},"non applicable")," n'aura pas d'incidence sur la valeur retourn\xe9e (m\xeame chose pour un abattement ou un plancher par exemple)."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"La valeur ",(0,i.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"non")," est applicable"),(0,i.kt)("p",{parentName:"admonition"},"Publicodes diff\xe9rencie d\xe9sormais la valeur bool\xe9enne ",(0,i.kt)("inlineCode",{parentName:"p"},"non")," d'une valeur ",(0,i.kt)("em",{parentName:"p"},"non applicable"),". Cela permet par exemple de cacher les questions non applicable ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/cr%C3%A9er-formulaire"},"dans un formulaire")," tout en affichant les questions dont la r\xe9ponse est ",(0,i.kt)("inlineCode",{parentName:"p"},"non"),".")),(0,i.kt)("h3",{id:"tester-lapplicabilit\xe9"},"Tester l'applicabilit\xe9"),(0,i.kt)("p",null,"On peut tester si une variable est applicable ou non applicable avec les m\xe9canismes ",(0,i.kt)("inlineCode",{parentName:"p"},"est applicable")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"est non applicable"),"."),(0,i.kt)("h3",{id:"rend-non-applicable"},"Rend non applicable"),(0,i.kt)("p",null,"Il est \xe9galement possible de rendre une r\xe8gle non applicable depuis une autre r\xe8gle :"),(0,i.kt)(r.Z,{rules:"nouveau salari\xe9:\n  valeur: oui\n  rend non applicable: prime de vacances\n\nprime de vacances: 200\u20ac\n\nprimes:\n  somme:\n    - prime de vacances\n    - 150\u20ac",mdxType:"PublicodeExample"}),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"La syntaxe ",(0,i.kt)("inlineCode",{parentName:"p"},"rend non applicable")," fonctionne de la m\xeame mani\xe8re que le remplacement : elle rend non applicable toutes les r\xe9f\xe9rences \xe0 la r\xe8gle choisie."),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/principes-de-base#remplacement"},"En savoir plus sur le remplacement")))),(0,i.kt)("h2",{id:"espaces-de-noms"},"Espaces de noms"),(0,i.kt)("p",null,"Les espaces de noms sont utiles pour organiser un grand nombre de r\xe8gles. On\nutilise le ",(0,i.kt)("inlineCode",{parentName:"p"},".")," pour exprimer la hi\xe9rarchie des noms."),(0,i.kt)(r.Z,{rules:"prime de vacances: taux * 1000 \u20ac\nprime de vacances . taux: 6%",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Ici, ",(0,i.kt)("inlineCode",{parentName:"p"},"prime de vacances")," est \xe0 la fois une r\xe8gle et un espace de noms. La variable\n",(0,i.kt)("inlineCode",{parentName:"p"},"taux")," est d\xe9finie dans cet espace de noms et c'est elle qui est r\xe9f\xe9renc\xe9e dans\nla formule de calcul de la r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prime de vacances"),"."),(0,i.kt)("p",null,"La r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prime de vacances")," est elle-m\xeame d\xe9finie dans l'espace de nom racine."),(0,i.kt)("p",null,"On pourrait avoir une autre variable ",(0,i.kt)("inlineCode",{parentName:"p"},"taux")," dans un espace de nom\ndiff\xe9rent, sans que cela entre en conflit :"),(0,i.kt)(r.Z,{rules:"prime de vacances: taux * 1000 \u20ac\nprime de vacances . taux: 6%\n\n# Ceci n'entre pas dans le calcul de `prime de vacances` d\xe9finie plus haut\nautre prime:\nautre prime . taux: 19%",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"On dit que la r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prime de vacances")," fait r\xe9f\xe9rence \xe0 la\nr\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prime de vacances . taux")," via le nom raccourci ",(0,i.kt)("inlineCode",{parentName:"p"},"taux"),"."),(0,i.kt)("p",null,"Pour faire r\xe9f\xe9rence \xe0 une r\xe8gle hors de son espace de nom, on peut \xe9crire le\nnom complet de cette r\xe8gle:"),(0,i.kt)(r.Z,{rules:"autre prime:\nautre prime . taux: 19%\nprime de vacances v2: autre prime . taux * 1000 \u20ac",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Dans le cas d'espaces de noms imbriqu\xe9s (\xe0 plus qu'un \xe9tage), le nom inscrit\ndans une r\xe8gle donn\xe9e est recherch\xe9 de plus en plus haut dans la hi\xe9rarchie des\nespaces de nom jusqu'\xe0 la racine."),(0,i.kt)(r.Z,{rules:"contrat salari\xe9:\ncontrat salari\xe9 . r\xe9mun\xe9ration:\ncontrat salari\xe9 . r\xe9mun\xe9ration . primes:\n\ncontrat salari\xe9 . r\xe9mun\xe9ration . primes . prime de vacances:\n  valeur: taux g\xe9n\xe9rique * 1000 \u20ac\n\ncontrat salari\xe9 . r\xe9mun\xe9ration . taux g\xe9n\xe9rique:\n  valeur: 10%",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Ici ",(0,i.kt)("inlineCode",{parentName:"p"},"contrat salari\xe9 . r\xe9mun\xe9ration . primes . prime de vacances")," va faire\nr\xe9f\xe9rence \xe0 ",(0,i.kt)("inlineCode",{parentName:"p"},"contrat salari\xe9 . r\xe9mun\xe9ration . taux g\xe9n\xe9rique")," trouv\xe9 deux\nespaces de noms plus haut, et va donc valoir ",(0,i.kt)("inlineCode",{parentName:"p"},"100 \u20ac"),"."),(0,i.kt)("h3",{id:"d\xe9sactivation-de-branche"},"D\xe9sactivation de branche"),(0,i.kt)("p",null,"Il est possible de d\xe9sactiver l'ensemble des r\xe8gles d\xe9finies dans un espace de nom."),(0,i.kt)("p",null,"Toutes les r\xe8gles poss\xe8dent une d\xe9pendance implicite \xe0 leur parent. Si ce dernier vaut \xe0 ",(0,i.kt)("em",{parentName:"p"},"non")," ou est ",(0,i.kt)("em",{parentName:"p"},"non applicable")," alors toutes les r\xe8gles enfants seront ",(0,i.kt)("em",{parentName:"p"},"non applicables")),(0,i.kt)(r.Z,{rules:"CDD: non\nCDD . indemnit\xe9 de pr\xe9carit\xe9: 10% * 1500\u20ac/mois * 6 mois\n\nindemnit\xe9s:\n  somme:\n    - 100 \u20ac\n    - CDD . indemnit\xe9 de pr\xe9carit\xe9",mdxType:"PublicodeExample"}),(0,i.kt)(r.Z,{rules:"r\xe9gion: '\"Centre\"'\n\naides occitanie:\n  applicable si: r\xe9gion = 'Occitanie'\naides occitanie . subvention v\xe9lo : 500 \u20ac",mdxType:"PublicodeExample"}),(0,i.kt)("h2",{id:"remplacement"},"Remplacement"),(0,i.kt)("p",null,"Certaines r\xe8gles ne s'appliquent parfois que dans quelques situations\nparticuli\xe8res et modifier la d\xe9finition des r\xe8gles g\xe9n\xe9rales pour prendre en\ncompte ces particularit\xe9s pose des probl\xe8mes de maintenabilit\xe9 de la base de\nr\xe8gles."),(0,i.kt)("p",null,"Publicodes dispose d'un m\xe9canisme de remplacement qui permet d'amender n'importe\nquelle r\xe8gle existante sans avoir besoin de la modifier :"),(0,i.kt)(r.Z,{rules:"frais de repas: 5 \u20ac/repas\n\nconvention h\xf4tels caf\xe9s restaurants: oui\nconvention h\xf4tels caf\xe9s restaurants . frais de repas restaurateur:\n  remplace: frais de repas\n  valeur: 6 \u20ac/repas\n\nmontant repas mensuels: 20 repas * frais de repas",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"On peut \xe9galement choisir de remplacer dans un contexte donn\xe9 :"),(0,i.kt)(r.Z,{rules:"temps de pr\xe9paration: 20 min\ntemps de cuisson: 20 min\n\nrobot de cuisine:\n  remplace:\n    - r\xe8gle: temps de pr\xe9paration\n      sauf dans: temps original\n      par: 10 min\n  valeur: oui\n\ntemps original:\n  formule: temps de pr\xe9paration + temps de cuisson\n\ntemps modifi\xe9:\n  formule: temps de pr\xe9paration + temps de cuisson",mdxType:"PublicodeExample"}),(0,i.kt)("admonition",{title:"Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Les remplacement sont impl\xe9ment\xe9s sous forme d'une substitution de variable. Quand une r\xe8gle en remplace une autre, c'est toutes les r\xe9f\xe9rences \xe0 la r\xe8gle remplac\xe9e qui vont \xeatre chang\xe9es par la valeur de remplacement.")),(0,i.kt)("h2",{id:"r\xe8gle-imbriqu\xe9es"},"R\xe8gle imbriqu\xe9es"),(0,i.kt)("h3",{id:"a-lint\xe9rieur-des-m\xe9canismes--nom"},"A l'int\xe9rieur des m\xe9canismes : ",(0,i.kt)("inlineCode",{parentName:"h3"},"nom")),(0,i.kt)("p",null,"Si le m\xe9canisme de remplacement permet de faire des substitutions de r\xe8gles\ncompl\xe8tes, il est parfois utile de ne modifier qu'un seul param\xe8tre d'une r\xe8gle\nexistante, par exemple modifier le facteur d'une multiplication tout en\nconservant le reste de sa d\xe9finition inchang\xe9e."),(0,i.kt)("p",null,"Une premi\xe8re mani\xe8re de faire consiste \xe0 extraire le param\xe8tre en question dans\nune r\xe8gle ind\xe9pendante, le rendant ainsi accessible et modifiable depuis\nl'ext\xe9rieur :"),(0,i.kt)(r.Z,{rules:"prime:\n  multiplication:\n    assiette: 1000\u20ac\n    taux: taux\n\nprime . taux: 5%\n\nsuper-prime:\n  remplace: prime . taux\n  valeur: 10%",meta:"prime",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Ce code fonctionne mais il nous oblige a cr\xe9er une r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prime . taux")," qui\nn'est pas pertinente en tant qu'entit\xe9 autonome, uniquement pour pouvoir la modifier avec un ",(0,i.kt)("inlineCode",{parentName:"p"},"remplace"),"."),(0,i.kt)("p",null,"On a aussi introduit une indirection dans la d\xe9finition de la prime en rempla\xe7ant\nune ligne explicite ",(0,i.kt)("inlineCode",{parentName:"p"},"taux: 5%")," par une r\xe9f\xe9rence vers une r\xe8gle tierce\n",(0,i.kt)("inlineCode",{parentName:"p"},"taux: taux"),", qui est loin d'\xeatre aussi claire."),(0,i.kt)("p",null,"Pour ce cas d'usage il est possible de d\xe9finir une ",(0,i.kt)("em",{parentName:"p"},"r\xe8gle imbriqu\xe9e"),".\nOn garde la d\xe9finition de la prime inchang\xe9e et on annote la valeur \xe0 laquelle\non veut acc\xe9der depuis l'ext\xe9rieur avec le mot cl\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"nom")," :"),(0,i.kt)(r.Z,{rules:"prime:\n  multiplication:\n    assiette: 1000\u20ac\n    taux:\n      nom: taux\n      valeur: 5%\n\nsuper-prime:\n  remplace: prime . taux\n  valeur: 10%",meta:"prime",mdxType:"PublicodeExample"}),(0,i.kt)("h3",{id:"directement-sur-la-r\xe8gle--avec"},"Directement sur la r\xe8gle : ",(0,i.kt)("inlineCode",{parentName:"h3"},"avec")),(0,i.kt)(r.Z,{rules:"prix final:\n   valeur: 157 \u20ac * (100% - 20%)",meta:"prix-final",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Dans cet exemple, si l'on veut extraire le prix et la promotion dans des variables s\xe9par\xe9es, on est oblig\xe9 de les d\xe9finir \xe0 c\xf4t\xe9 de la r\xe8gle ",(0,i.kt)("inlineCode",{parentName:"p"},"prix final")," :"),(0,i.kt)(r.Z,{rules:"prix final:\n   valeur: prix de base * (100% - promotion)\nprix final . prix de base: 157\u20ac\nprix final . promotion: 20%",meta:"prix-final",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Pour all\xe9ger cette \xe9criture, on peut utiliser la notation ",(0,i.kt)("inlineCode",{parentName:"p"},"avec")," qui permet de d\xe9finir des r\xe8gles imbriqu\xe9es directement depuis une r\xe8gle parente :"),(0,i.kt)(r.Z,{rules:"prix final:\n   valeur: prix de base * (100% - r\xe9duction)\n   avec:\n     prix de base: 157 \u20ac\n     r\xe9duction: 20%",mdxType:"PublicodeExample"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On peut tout \xe0 fait combiner les deux \xe9critures ",(0,i.kt)("inlineCode",{parentName:"p"},"nom")," et ",(0,i.kt)("inlineCode",{parentName:"p"},"avec")," :"),(0,i.kt)(r.Z,{rules:"cotisation:\n  produit:\n    assiette: assiette\n    taux: 2.8%\n  plafond:\n    nom: plafond\n    le minimum de:\n      - 50 % * PFSS\n      - plafond forfaitaire\n    avec:\n      plafond forfaitaire: 2000 \u20ac\n\nPFSS: 3400 \u20ac\nassiette: 2000 \u20ac\n",meta:"cotisation",mdxType:"PublicodeExample"})),(0,i.kt)("h2",{id:"r\xe8gles-non-d\xe9finie"},"R\xe8gles non d\xe9finie"),(0,i.kt)("p",null,"Il est possible de laisser certaines r\xe8gles vide pour \xeatre saisie par l'utilisateur par exemple.\nLors de l'\xe9valuation, les variables dont les valeurs ne sont pas renseign\xe9es sont remont\xe9es."),(0,i.kt)(r.Z,{rules:"salaire brut:\n  unit\xe9: \u20ac/mois\n\nsalaire net: salaire brut - 20 %",mdxType:"PublicodeExample"}),(0,i.kt)("p",null,"Il est possible de donner une valeur par d\xe9faut. Les variables manquantes seront quand m\xeame remont\xe9es, et le moteur utilisera la valeur par d\xe9faut pour le calcul."),(0,i.kt)(r.Z,{rules:"dur\xe9e:\n  par d\xe9faut: 2 mois\n\nsalaire brut:\n  par d\xe9faut: 1500 \u20ac/mois\n\nindemnit\xe9 de CDD: 10 % * salaire brut * dur\xe9e",mdxType:"PublicodeExample"}),(0,i.kt)("h2",{id:"r\xe8gles-priv\xe9es"},"R\xe8gles priv\xe9es"),(0,i.kt)("p",null,"Par d\xe9faut, les r\xe8gles publicodes sont accessibles partout, tout le temps, que\nce soit depuis une autre r\xe8gle ou lors de l'\xe9valuation."),(0,i.kt)("p",null,"Si on ne souhaite pas exposer certaines r\xe8gles internes, il est possible de les marquer comme ",(0,i.kt)("inlineCode",{parentName:"p"},"priv\xe9e")," :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"soit en ajoutant un attribut ",(0,i.kt)("inlineCode",{parentName:"li"},"priv\xe9: oui")," dans le corps de la r\xe8gle"),(0,i.kt)("li",{parentName:"ul"},"soit en pr\xe9fixant le nom de la r\xe8gle par : ",(0,i.kt)("inlineCode",{parentName:"li"},"[priv\xe9]"))),(0,i.kt)("p",null,"Les r\xe8gles priv\xe9es permettent d'encapsuler des calculs interm\xe9diaires. Elles sont utiles si\nvous exposez votre base de r\xe8gles \xe0 des utilisateurs tiers (via un paquet npm ou l'API REST) car elles\npermettent d'am\xe9liorer la maintenabilit\xe9 sans sacrifier la lisibilit\xe9 de la base de r\xe8gle."),(0,i.kt)(r.Z,{rules:"assiette: 2100 \u20ac\nPFSS: 4510 \u20ac\ncotisation:\n  produit:\n    assiette: assiette\n    taux: 2.8%\n  plafond:\n    le minimum de:\n      - 50 % * PFSS\n      - plafond forfaitaire\n  avec:\n    '[priv\xe9] plafond forfaitaire: 2000 \u20ac'",mdxType:"PublicodeExample"}),(0,i.kt)("h3",{id:"comportement-des-r\xe8gles-priv\xe9es"},"Comportement des r\xe8gles priv\xe9es"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Les r\xe8gles priv\xe9es peuvent \xeatre r\xe9f\xe9renc\xe9es depuis toutes les r\xe8gles situ\xe9e dans l'espace de nom parent direct. Par exemple, si la r\xe8gle a . b est priv\xe9e, elle peut \xeatre r\xe9f\xe9renc\xe9e depuis a . b . c, a . x, a, mais pas d ou d . c."),(0,i.kt)("li",{parentName:"ul"},"Les r\xe8gles priv\xe9es ne poss\xe8dent pas de page de documentation d\xe9di\xe9es"),(0,i.kt)("li",{parentName:"ul"},"L'appel de getRule sur une r\xe8gle priv\xe9e jette une erreur"),(0,i.kt)("li",{parentName:"ul"},"Elles ne sont pas list\xe9es dans ",(0,i.kt)("inlineCode",{parentName:"li"},"getParsedRules")),(0,i.kt)("li",{parentName:"ul"},"On ne peut pas \xe9valuer une r\xe9f\xe9rence \xe0 une r\xe8gle priv\xe9e"),(0,i.kt)("li",{parentName:"ul"},"On ne peut pas modifier une r\xe8gles priv\xe9e via la situation")))}c.isMDXComponent=!0},2494:(e,n,a)=>{a.d(n,{Z:()=>t});const t={container:"container_Lusa",button:"button_RcQe",editor:"editor_BeH5"}}}]);
//# sourceMappingURL=0c403f52.50569059.js.map