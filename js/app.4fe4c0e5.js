(function(e){function t(t){for(var c,i,a=t[0],u=t[1],l=t[2],f=0,b=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-videos/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4aeb":function(e,t,n){"use strict";n("cb00")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["f"])("h1",null,[Object(c["f"])("span",null,"Vue"),Object(c["e"])("Movies")],-1);function o(e,t){var n=Object(c["v"])("router-link"),o=Object(c["v"])("router-view");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["f"])("header",null,[Object(c["f"])(n,{to:"/"},{default:Object(c["B"])((function(){return[r]})),_:1})]),Object(c["f"])(o)],64)}n("e5c7");const i={};i.render=o;var a=i,u=n("6c02"),l=(n("ac1f"),n("841c"),{class:"home"}),s={class:"feature-card"},f=Object(c["f"])("img",{src:"https://images5.alphacoders.com/515/thumbbig-515358.jpg",class:"featured-img",alt:"img"},null,-1),b=Object(c["f"])("div",{class:"detail"},[Object(c["f"])("h3",null,"Mortal Kombat Legends: Scorpion's Revenge"),Object(c["f"])("p",null,"Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones while ...")],-1),v=Object(c["f"])("input",{type:"submit",value:"Search"},null,-1),j={key:0,class:"movies-list"},d={class:"product-image"},p={class:"type"},O={class:"detail"},h={class:"year"},m={key:1,class:"results"};function y(e,t,n,r,o,i){var a=Object(c["v"])("router-link");return Object(c["q"])(),Object(c["d"])("div",l,[Object(c["f"])("div",s,[Object(c["f"])(a,{to:"/movie/tt9580138"},{default:Object(c["B"])((function(){return[f,b]})),_:1})]),Object(c["f"])("form",{onSubmit:t[2]||(t[2]=Object(c["D"])((function(e){return r.SearchMovies()}),["prevent"])),class:"search-box"},[Object(c["C"])(Object(c["f"])("input",{type:"text",placeholder:"Enter title in English","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.search=e})},null,512),[[c["z"],r.search]]),v],32),r.movies.length?(Object(c["q"])(),Object(c["d"])("div",j,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(r.movies,(function(e){return Object(c["q"])(),Object(c["d"])("div",{class:"movie",key:e.imdbID},[Object(c["f"])(a,{to:"/movie/"+e.imdbID,class:"movie-link"},{default:Object(c["B"])((function(){return[Object(c["f"])("div",d,[Object(c["f"])("img",{src:e.Poster,alt:""},null,8,["src"]),Object(c["f"])("div",p,Object(c["x"])(e.Type),1)]),Object(c["f"])("div",O,[Object(c["f"])("p",h,Object(c["x"])(e.Year),1),Object(c["f"])("h3",null,Object(c["x"])(e.Title),1)])]})),_:2},1032,["to"])])})),128))])):(Object(c["q"])(),Object(c["d"])("div",m,"No results were found for your search"))])}n("d3b7"),n("99af");var g={apikey:"2460db72"},w={setup:function(){var e=Object(c["t"])("movie"),t=Object(c["t"])([]),n=function(){e.value&&fetch("https://www.omdbapi.com/?apikey=".concat(g.apikey,"&s=").concat(e.value)).then((function(e){return e.json()})).then((function(n){n.Search?t.value=n.Search:t.value=[],e.value="",console.log(t.value)}))};return Object(c["o"])((function(){n()})),{search:e,movies:t,SearchMovies:n}}};n("95be");w.render=y;var k=w,x={class:"movie-detail"};function S(e,t,n,r,o,i){return Object(c["q"])(),Object(c["d"])("div",null,[Object(c["f"])("div",x,[Object(c["f"])("h2",null,Object(c["x"])(r.movie.Title),1),Object(c["f"])("p",null,Object(c["x"])(r.movie.Year),1),Object(c["f"])("img",{src:r.movie.Poster,alt:"poster",class:"featured-img"},null,8,["src"]),Object(c["f"])("p",null,Object(c["x"])(r.movie.Plot),1)])])}var P={setup:function(){var e=Object(c["t"])({}),t=Object(u["c"])();return Object(c["m"])((function(){fetch("https://www.omdbapi.com/?apikey=".concat(g.apikey,"&i=").concat(t.params.id,"&plot=full")).then((function(e){return e.json()})).then((function(t){e.value=t,console.log(e.value)}))})),{movie:e,route:t}}};n("4aeb");P.render=S;var M=P,_=[{path:"/",name:"Home",component:k},{path:"/movie/:id",name:"Movie Detail",component:M}],q=Object(u["a"])({history:Object(u["b"])("/vue-videos/"),routes:_}),T=q;Object(c["c"])(a).use(T).mount("#app")},"95be":function(e,t,n){"use strict";n("d409")},cb00:function(e,t,n){},d409:function(e,t,n){},e5c7:function(e,t,n){"use strict";n("f0f7")},f0f7:function(e,t,n){}});
//# sourceMappingURL=app.4fe4c0e5.js.map