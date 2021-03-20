(this["webpackJsonplearn-react-form-api-async"]=this["webpackJsonplearn-react-form-api-async"]||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n,r,c,i=a(2),s=a(9),l=(a(16),a(4));function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function j(e,t){var a=e.title,s=e.titleId,l=u(e,["title","titleId"]);return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#F9EBDE",display:"block",shapeRendering:"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":s},l),a?i.createElement("title",{id:s},a):null,n||(n=i.createElement("circle",{cx:30,cy:50,fill:"#e90c59",r:20},i.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}))),r||(r=i.createElement("circle",{cx:70,cy:50,fill:"#46dff0",r:20},i.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"0s"}))),c||(c=i.createElement("circle",{cx:30,cy:50,fill:"#e90c59",r:20},i.createElement("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",keyTimes:"0;0.5;1",values:"30;70;30",begin:"-0.5s"}),i.createElement("animate",{attributeName:"fill-opacity",values:"0;0;1;1",calcMode:"discrete",keyTimes:"0;0.499;0.5;1",dur:"1s",repeatCount:"indefinite"}))))}var p=i.forwardRef(j),b=(a.p,a(3)),d=a.n(b),m=a(10),h=a(11),f=a(8),O=a.n(f),x=a(0);function v(e){var t=e.data;return t?t.map((function(e){return Object(x.jsx)("li",{className:O.a.card,children:Object(x.jsxs)("figure",{children:[Object(x.jsx)("img",{src:e.medium_cover_image,alt:""}),Object(x.jsx)("figcaption",{children:Object(x.jsx)("span",{children:Object(x.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.title})})})]})},e.url)})):Object(x.jsxs)("figure",{className:O.a.noData,children:[Object(x.jsx)("img",{src:"assets/nodata.png",alt:"\uac80\uc0c9 \uacb0\uacfc \uc5c6\uc74c"}),Object(x.jsx)("figcaption",{children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4..\u3160"})]})}var g="https://yts.mx/api/v2/list_movies.json?limit=50&query_term=";var y=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(null),c=Object(l.a)(r,2),s=c[0],o=c[1],u=Object(i.useState)(!0),j=Object(l.a)(u,2),b=j[0],f=j[1],O=Object(i.useState)(""),y=Object(l.a)(O,2),_=y[0],w=y[1],k=Object(i.useState)(g),E=Object(l.a)(k,2),N=E[0],A=E[1],C=function(e){(e.target.matches("button")||"Enter"===e.key)&&""!==_&&(A(g+_),w(""),f(!0))};return Object(i.useEffect)((function(){fetch(N).then((function(e){return e.json()})).then((function(e){n(e.data.movies),f(!1)})).catch((function(e){o(e)}))}),[N]),b?Object(x.jsx)(p,{}):s?Object(x.jsx)("div",{role:"alert",children:s.message}):Object(x.jsxs)("div",{className:d.a.App,children:[Object(x.jsx)("h1",{className:d.a.h1,children:"MY\uc601\ud654\uad00"}),Object(x.jsx)("div",{className:d.a.searchContainer,children:Object(x.jsxs)("div",{className:"search-form",children:[Object(x.jsx)("input",{type:"text",name:"searchMovie",value:_,id:"searchMovie",className:d.a.search,placeholder:"\uc5b4\ub5a4 \uc601\ud654\uac00 \ubcf4\uace0\uc2f6\uc73c\uc138\uc694?",onChange:function(e){w(e.target.value)},onKeyUp:C}),Object(x.jsx)("button",{className:d.a.searchBtn,type:"button",onClick:C,children:Object(x.jsx)(m.a,{icon:h.a})})]})}),Object(x.jsx)("div",{className:"newsArea",lang:"ko",children:Object(x.jsx)("ul",{className:d.a.container,children:Object(x.jsx)(v,{data:a})})})]})};Object(s.render)(Object(x.jsx)(i.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))},3:function(e,t,a){e.exports={App:"App_App__1mjoX",h1:"App_h1__2AVjW",searchContainer:"App_searchContainer__1m1CB",search:"App_search__2d3Ai",searchBtn:"App_searchBtn__22BIb",container:"App_container__evflD"}},8:function(e,t,a){e.exports={card:"Card_card__2mVlQ",noData:"Card_noData__3tB3C"}}},[[23,1,2]]]);
//# sourceMappingURL=main.c3e54aba.chunk.js.map