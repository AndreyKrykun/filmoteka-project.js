!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o("iNWLi");var a=o("bpxeT"),s=o("2TvXO"),i=o("i3Qnx"),c=o("4Nugj"),l=o("8MBJY"),d=o("a2hTj"),u=function(){"use strict";function t(r){var n=r.hidden,o=void 0!==n&&n;e(l)(this,t),this.refs=this.getRefs(),o&&this.hide()}return e(d)(t,[{key:"getRefs",value:function(){var e={};return e.loader=document.querySelector(".loader"),e}},{key:"show",value:function(){this.refs.loader.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.loader.classList.add("is-hidden")}}]),t}(),f={currentPage:1,currentQueryPage:1},h=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(p(v).then((function(e){try{if(f.currentPage===e.total_pages)return c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results)),c.refs.gallery.insertAdjacentHTML("afterend","Sorry this is the last page, we do not have any movies for you :("),void g();f.currentPage+=1,c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results))}catch(e){console.log(e)}})),console.log("is intersecting"))}))}),{rootMargin:"0px",threshold:1});function g(){h.unobserve(document.querySelector(".scroll-check"))}h.observe(document.querySelector(".scroll-check"));var v=new u({loader:".loader",hidden:!0});var m,p=(m=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(f.currentPage),r.show(),e.next=5,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a&page=".concat(f.currentPage));case 5:return n=e.sent,r.hide(),e.abrupt("return",n.json());case 10:throw e.prev=10,e.t0=e.catch(0),Error(response.statusText);case 13:case"end":return e.stop()}}),t,null,[[0,10]])}))),function(e){return m.apply(this,arguments)}),y=(a=o("bpxeT"),s=o("2TvXO"),function(){var t=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=".concat(f.currentQueryPage,"&include_adult=false&query=").concat(r));case 3:return n=e.sent,f.currentQueryPage+=1,g(),e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),Error(response.statusText);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()),b=(i=o("i3Qnx"),c=o("4Nugj"),i=o("i3Qnx"),c=o("4Nugj"),{currentPage:1,currentQueryPage:1}),L=new u({loader:".loader",hidden:!0});var w=new u({loader:".loader",hidden:!0}),T="";c.refs.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.navigation__input.value;T=t.trim(),y(T).then((function(e){""===T||0===e.results.length?(c.refs.notificate.classList.remove("navigation__notificate-hidden"),document.getElementById("myForm").reset(),setTimeout((function(){c.refs.notificate.classList.add("navigation__notificate-hidden")}),5e3)):c.refs.gallery.innerHTML=(0,i.createMovieCard)(e.results),w.show()}));new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(g(),y(T).then((function(e){try{b.currentQueryPage===e.total_pages&&(c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results)),c.refs.gallery.insertAdjacentHTML("afterend","Sorry this is the last page, we do not have any movies for you :("),L.hide()),c.refs.gallery.insertAdjacentHTML("beforeend",(0,i.createMovieCard)(e.results))}catch(e){console.log(e)}})))}))}),{rootMargin:"-100px",threshold:1}).observe(document.querySelector(".scroll-check"))}));var k=document.getElementById("modalTeam"),x=document.querySelector(".modal-team");k.addEventListener("click",(function(e){e.preventDefault(),x.classList.toggle("visually-hidden"),x.addEventListener("keydown")})),o("3likm"),o("4smAb"),o("6Sco9"),o("lqpIw"),o("1fJqo");var M=document.querySelector(".top_button");window.onscroll=function(){document.body.scrollTop>700||document.documentElement.scrollTop>700?M.classList.remove("is-hidden"):M.classList.add("is-hidden")},M.addEventListener("click",(function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}));c=o("4Nugj");var S=localStorage.getItem("darkTheme"),E=document.querySelector("#dark-theme"),_=function(){c.refs.theme.classList.add("darktheme"),localStorage.setItem("darkTheme","enabled")};E.addEventListener("click",(function(){"enabled"!==(S=localStorage.getItem("darkTheme"))?_():(c.refs.theme.classList.remove("darktheme"),localStorage.setItem("darkTheme",null))}));var q=document.querySelector(".light"),j=document.querySelector(".dark");E.addEventListener("click",(function(){q.classList.toggle("visible"),j.classList.toggle("visible")})),"enabled"===S&&(_(),q.classList.toggle("visible"),j.classList.toggle("visible"))}();
//# sourceMappingURL=index.dd800e00.js.map