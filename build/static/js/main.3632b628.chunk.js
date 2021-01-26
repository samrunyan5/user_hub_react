(this.webpackJsonpuser_hub_react=this.webpackJsonpuser_hub_react||[]).push([[0],{35:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(9),s=r(0),a=r(28),u=r.n(a),o=r(12),i=r(2);r(35);var j=function(e){var t=e.currentUser,r=e.setCurrentUser,a=e.userList,u=Object(s.useState)(),i=Object(c.a)(u,2),j=i[0],l=i[1];Object(s.useEffect)((function(){l(a[0])}),[a]);return Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:"Welcome to UserHub"}),Object(n.jsx)("form",{className:"user-select",onSubmit:function(e){e.preventDefault()},children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.b,{to:"/posts",activeClassName:"current",children:"POSTS"}),Object(n.jsx)(o.b,{to:"/todos",activeClassName:"current",children:"TODOS"}),Object(n.jsxs)("button",{onClick:function(e){l(a[0]),localStorage.removeItem("currentUser"),r(null)},children:["LOG OUT, ",t.username]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("select",{onChange:function(e){var t=e.target.value,r=a.find((function(e){return e.id==t}));l(r)},children:a.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.username},e.id)}))}),Object(n.jsx)("button",{onClick:function(e){var t;t=j,localStorage.setItem("currentUser",JSON.stringify(t)),r(j)},children:"LOG IN"})]})})]})},l=(r(41),function(e){var t=e.currentUser,r=e.userPosts;return Object(n.jsxs)("div",{className:"user-posts",children:[Object(n.jsxs)("h2",{children:["Posts By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,c=e.body;return Object(n.jsxs)("div",{className:"post",children:[Object(n.jsx)("h3",{children:r}),Object(n.jsx)("p",{children:c})]},t)}))]})}),h=(r(42),function(e){var t=e.currentUser,r=e.userTodos;return Object(n.jsxs)("div",{className:"user-todos",children:[Object(n.jsxs)("h2",{children:["Todos By ",t.username]}),r.map((function(e){var t=e.id,r=e.title,c=e.completed;return Object(n.jsx)("div",{className:"todo",children:Object(n.jsx)("h3",{style:{textDecoration:c?"line-through":"none"},children:r})},t)}))]})}),b=r(10),d=r.n(b),O=r(13),p=r(14),f=r.n(p),x="https://jsonplace-univclone.herokuapp.com";function v(){return(v=Object(O.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users"));case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return(m=Object(O.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/posts"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(){return(g=Object(O.a)(d.a.mark((function e(t){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(x,"/users/").concat(t,"/todos"));case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var y=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),r=t[0],a=t[1],u=Object(s.useState)(JSON.parse(localStorage.getItem("currentUser"))),b=Object(c.a)(u,2),d=b[0],O=b[1],p=Object(s.useState)([]),f=Object(c.a)(p,2),x=f[0],y=f[1],S=Object(s.useState)([]),U=Object(c.a)(S,2),w=U[0],N=U[1];return Object(s.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){a(e)})).catch((function(e){console.error(e)}))}),[]),Object(s.useEffect)((function(){if(!d)return y([]),void N([]);(function(e){return m.apply(this,arguments)})(d.id).then((function(e){y(e)})).catch((function(e){console.error(e)})),function(e){return g.apply(this,arguments)}(d.id).then((function(e){N(e)})).catch((function(e){console.error(e)}))}),[d]),Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{id:"App",children:[Object(n.jsx)(j,{userList:r,currentUser:d,setCurrentUser:O}),d?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{path:"/posts",children:Object(n.jsx)(l,{userPosts:x,currentUser:d})}),Object(n.jsx)(i.b,{path:"/todos",children:Object(n.jsx)(h,{userTodos:w,currentUser:d})}),Object(n.jsx)(i.b,{exact:!0,path:"/",children:Object(n.jsxs)("h2",{style:{padding:".5em"},children:["Welcome, ",d.username,"!"]})}),Object(n.jsx)(i.a,{to:"/"})]})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{exact:!0,path:"/",children:Object(n.jsx)("h2",{style:{padding:".5em"},children:"Please log in, above."})}),Object(n.jsx)(i.a,{to:"/"})]})})]})})};u.a.render(Object(n.jsx)(y,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.3632b628.chunk.js.map