(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5282)}])},5282:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var o=r(5893),l=r(5744),n=r(7294),s=r(1575);let a=()=>((0,n.useEffect)(()=>{s.c.preloader()},[]),(0,o.jsx)("div",{id:"preloader",children:(0,o.jsx)("div",{className:"loader_line"})}));function i(e){let{Component:t,pageProps:r}=e;return(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(a,{}),(0,o.jsx)(t,{...r})]})}r(3814)},5744:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var o=r(5893),l=r(7294);let n=(0,l.createContext)(),{NAV:s,ANIMATION:a,MODAL:i,SERVICEMODAL:c,NEWSMODAL:u,PORTFOLIODETAILSMODAL:d}={NAV:"NAV",ANIMATION:"ANIMATION",MODAL:"MODAL",SERVICEMODAL:"SERVICEMODAL",NEWSMODAL:"NEWSMODAL",PORTFOLIODETAILSMODAL:"PORTFOLIODETAILSMODAL"},m={nav:"home",animation:"fadeInLeft",modal:!1,serviceModal:null,newsModal:null,portfolioDetailsModal:null,menus:[{id:1,name:"Home",href:"home"},{id:2,name:"about",href:"about"},{id:3,name:"service",href:"service"},{id:4,name:"portfolio",href:"portfolio"}]},v=(e,t)=>{let{type:r,payload:o}=t;switch(r){case s:return{...e,nav:o};case a:return{...e,animation:o};case i:return{...e,modal:o};case c:return{...e,serviceModal:o};case u:return{...e,newsModal:o};case d:return{...e,portfolioDetailsModal:o};default:return e}},f=e=>{let{children:t}=e,[r,f]=(0,l.useReducer)(v,m),p=(0,l.useCallback)(e=>{f({type:s,payload:e})},[]),y=(0,l.useCallback)(e=>{f({type:a,payload:e})},[]),L=(0,l.useCallback)(e=>{f({type:i,payload:e})},[]),A=(0,l.useCallback)(e=>{f({type:c,payload:e})},[]),h=(0,l.useCallback)(e=>{f({type:u,payload:e})},[]),b=(0,l.useCallback)(e=>{f({type:d,payload:e})},[]),{nav:g,animation:_,modal:E,serviceModal:S,newsModal:O,portfolioDetailsModal:M,menus:k}=r;return(0,o.jsx)(n.Provider,{value:{menus:k,nav:g,navChange:p,animation:_,animationChnage:y,modal:E,modalToggle:L,serviceModal:S,setServiceModal:A,newsModal:O,setNewsModal:h,portfolioDetailsModal:M,setPortfolioDetailsModal:b},children:t})};t.Z=f},1575:function(e,t,r){"use strict";r.d(t,{c:function(){return o}});let o={dataImage(){let e=document.querySelectorAll("[data-img-url]");for(let t=0;t<e.length;t++){let r=e[t];r.style.backgroundImage="url(".concat(r.getAttribute("data-img-url"),")")}},imageToSvg(){document.querySelectorAll("img.svg").forEach(e=>{let t=e.getAttribute("id"),r=e.getAttribute("class"),o=e.getAttribute("src");fetch(o).then(e=>e.text()).then(o=>{let l=new DOMParser,n=l.parseFromString(o,"text/html"),s=n.querySelector("svg");void 0!==t&&s.setAttribute("id",t),void 0!==r&&s.setAttribute("class",r+" replaced-svg"),s.removeAttribute("xmlns:a"),e.parentNode&&e.parentNode.replaceChild(s,e)})})},customCursor(){var e=document.querySelectorAll(".mouse-cursor"),t=document.querySelector(".hamburger"),r=document.querySelector(".kura_tm_topbar "),o=document.querySelector(".cursor-pointer"),l=document.querySelector(".cursor-inner"),n=document.querySelector(".cursor-outer");function s(e){e.addEventListener("mouseenter",function(){l.classList.add("cursor-hover"),n.classList.add("cursor-hover")}),e.addEventListener("mouseleave",function(){l.classList.remove("cursor-hover"),n.classList.remove("cursor-hover")})}e.length&&document.body&&(window.onmousemove=function(e){n.style.transform="translate("+e.clientX+"px, "+e.clientY+"px)",l.style.transform="translate("+e.clientX+"px, "+e.clientY+"px)",e.clientY,e.clientX},document.body.addEventListener("mouseenter",function(){let e=document.querySelectorAll("a"),a=document.querySelectorAll(".owl-carousel, .swiper-container, .cursor-link"),i=document.querySelectorAll(".modal_item");l.classList.add("cursor-inner"),n.classList.add("cursor-outer");for(let t=0;t<e.length;t++){let r=e[t];s(r)}for(let e=0;e<a.length;e++){let t=a[e];t.addEventListener("mouseenter",function(){l.classList.add("cursor-slider"),n.classList.add("cursor-slider")}),t.addEventListener("mouseleave",function(){l.classList.remove("cursor-slider"),n.classList.remove("cursor-slider")})}for(let e=0;e<i.length;e++){let t=i[e];s(t)}t&&s(t),r&&s(r),o&&s(o)}),l.style.visibility="visible",n.style.visibility="visible")},preloader(){let e=!!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),t=document.getElementById("preloader");t&&(e?t.remove():(setTimeout(function(){t.classList.add("preloaded")},800),setTimeout(function(){t.remove()},2e3)))},portfolioHover(){let e=document.querySelectorAll(".tokyo_tm_portfolio_animation_wrap"),t=document.querySelector(".tokyo_tm_portfolio_titles");e.forEach(e=>{e.addEventListener("mousemove",()=>{let r=e.getAttribute("data-title"),o=e.getAttribute("data-category");r&&(t.classList.add("visible"),t.innerHTML=r+'<span class="work__cat">'+o+"</span>"),document.addEventListener("mousemove",e=>{t.style.left="".concat(e.clientX-10,"px"),t.style.top="".concat(e.clientY+25,"px")})}),e.addEventListener("mouseleave",()=>{t.classList.remove("visible")})})}}},3814:function(){}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);