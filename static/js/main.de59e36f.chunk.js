(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(20),i=n.n(r),s=n(22),u=n(3),o=n.n(u),j=n(6),l=n(4),b=n(21),d=n.n(b);n(45).config();var O=d.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/Semana-Omnistack-10",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL}),h=(n(49),n(0));var p=function(e){var t=e.dev;return Object(h.jsxs)("li",{className:"dev-item",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("img",{src:t.avatar_url,alt:"Foto de ".concat(t.name)}),Object(h.jsxs)("div",{className:"user-info",children:[Object(h.jsx)("strong",{children:t.name}),Object(h.jsx)("span",{children:t.techs.join(", ")})]})]}),Object(h.jsx)("p",{children:t.bio}),Object(h.jsx)("a",{href:"https://github.com/".concat(t.github_username),children:" Acessar perfil no Github "})]})};n(51);var f=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),u=Object(l.a)(s,2),b=u[0],d=u[1],O=Object(c.useState)(""),p=Object(l.a)(O,2),f=p[0],v=p[1],x=Object(c.useState)(""),m=Object(l.a)(x,2),g=m[0],S=m[1];function _(){return(_=Object(j.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,t({github_username:f,techs:g,latitude:r,longitude:b});case 3:v(""),S("");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,c=t.longitude;i(n),d(c)}),(function(e){console.log(e)}),{timeout:3e4})}),[]),Object(h.jsxs)("form",{onSubmit:function(e){return _.apply(this,arguments)},children:[Object(h.jsx)("div",{className:"input-block",children:Object(h.jsxs)("label",{children:["Usu\xe1rio do GitHub",Object(h.jsx)("input",{name:"github_username",value:f,onChange:function(e){return v(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{className:"input-block",children:Object(h.jsxs)("label",{children:["T\xe9cnologias",Object(h.jsx)("input",{name:"techs",value:g,onChange:function(e){return S(e.target.value)},required:!0})]})}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("div",{className:"input-block",children:Object(h.jsxs)("label",{children:["Latitude",Object(h.jsx)("input",{name:"latitude",value:r,onChange:function(e){return i(e.target.value)},required:!0})]})}),Object(h.jsx)("div",{className:"input-block",children:Object(h.jsxs)("label",{children:["Longitude",Object(h.jsx)("input",{name:"longitude",value:b,onChange:function(e){return d(e.target.value)},required:!0})]})})]}),Object(h.jsx)("button",{type:"submit",children:"Salvar"})]})};n(52),n(53),n(54),n(55);var v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];function r(){return(r=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.post("/devs",t);case 3:c=e.sent,a([].concat(Object(s.a)(n),[c.data])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Usu\xe1rio n\xe3o encontrado");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/devs");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("strong",{children:"Cadastrar"}),Object(h.jsx)(f,{onSubmit:function(e){return r.apply(this,arguments)}})]}),Object(h.jsx)("main",{children:Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsx)(p,{dev:e},e._id)}))})})]})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.de59e36f.chunk.js.map