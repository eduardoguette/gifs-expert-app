(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),a=n.n(c),s=n(2),i=n(9),l=n(0);function u(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],u=c[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>1&&(t((function(e){return[a].concat(Object(i.a)(e))})),u(""))},className:"w-96",children:Object(l.jsx)("input",{type:"text","aria-label":"Buscar gif",className:"border w-96 my-1 max-w-full  ring outline-none  ring-gray-300 focus:ring focus:ring-purple-500 p-2",value:a,onChange:function(e){u(e.target.value)}})})}var o=n(10),f=n(6),j=n.n(f),b=n(8),p=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,r,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=fzId3VBuREjibqafqpDWOufrEfE0rw3r"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,s=a.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){e.id;var t=e.title,n=e.url;return Object(l.jsxs)("article",{className:"card flex-col flex-grow relative max-w-max",children:[Object(l.jsx)("picture",{children:Object(l.jsx)("img",{src:n,alt:t,title:t,height:"200",width:"300",className:"object-cover h-full w-full"})}),Object(l.jsx)("p",{className:"flex  absolute bottom-0 text-white left-0 p-3 h-36",children:Object(l.jsx)("span",{className:"self-end",children:t})})]})},d=function(e){var t=e.category,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){p(t).then((function(e){return i(e)}))}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"font-medium text-3xl",children:t}),Object(l.jsx)("div",{className:"flex flex-wrap gap-2",children:a.map((function(e){return Object(l.jsx)(x,Object(o.a)({},e),e.id)}))})]})};var m=function(){var e=Object(r.useState)(["One Punch"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{className:"w-full",children:[Object(l.jsxs)("h1",{className:"title font-bold text-5xl font-sans leading-relaxed",children:["GifExpert",Object(l.jsx)("span",{children:"App"})]}),Object(l.jsx)("hr",{className:"my-2  border-black"}),Object(l.jsx)(u,{setCategories:c}),n.map((function(e){return Object(l.jsx)(d,{category:e},e)}))]})};n(17);a.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ccbc97ba.chunk.js.map