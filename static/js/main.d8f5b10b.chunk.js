(this["webpackJsonpbasic-admin-pannel"]=this["webpackJsonpbasic-admin-pannel"]||[]).push([[0],{20:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c.n(s),n=c(14),a=c.n(n),r=(c(20),c(5)),j=c(3),l=c(15),d=c.n(l),b=c(0),o=function(e){if(!0===e.isDataAvailabel){var t=e.firstName,c=e.lastName,s=e.description,i=e.address;return Object(b.jsxs)("div",{id:"info-wrapper",children:[Object(b.jsx)("h1",{children:"Details"}),Object(b.jsx)("p",{children:"Click on a table item to get detailed information"}),Object(b.jsxs)("div",{id:"",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"User selected:"})," ",t," ",c]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Description: "}),Object(b.jsx)("textarea",{cols:"50",rows:"5",value:s})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Address:"})," ",i.streetAddress]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"City:"})," ",i.city]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"State:"})," ",i.state]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Zip:"})," ",i.zip]})]})]})}return Object(b.jsxs)("div",{id:"info-wrapper",children:[Object(b.jsx)("h1",{children:"Details"}),Object(b.jsx)("p",{children:"Click on a table item to get detailed information"})]})},h=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),a=Object(j.a)(n,2),l=a[0],h=a[1],x=Object(s.useState)(!1),O=Object(j.a)(x,2),u=O[0],m=O[1],f=Object(s.useState)(""),p=Object(j.a)(f,2),v=p[0],g=p[1];Object(s.useEffect)((function(){d.a.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D").then((function(e){i(e.data),h(e.data)}))}),[]);console.log(c);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"table-section",children:[Object(b.jsxs)("form",{action:"/",children:[Object(b.jsx)("img",{src:"./img/search-icon.svg",alt:"Search Icon"}),Object(b.jsx)("input",{type:"text",placeholder:"Enter something",name:"search-box",id:"search-box",onChange:function(e){return function(e){var t=c.filter((function(t){if(t.firstName.toLowerCase().includes(e)||t.lastName.toLowerCase().includes(e))return t}));h(t)}(e.target.value)}})]}),Object(b.jsxs)("div",{id:"table-wrapper",children:[Object(b.jsx)("div",{id:"table-headers",children:Object(b.jsx)("table",{children:Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{class:"column1",children:"Id"}),Object(b.jsx)("th",{class:"column2",children:"FirstName"}),Object(b.jsx)("th",{class:"column3",children:"LastName"}),Object(b.jsx)("th",{class:"column4",children:"Email"}),Object(b.jsx)("th",{class:"column5",children:"Phone"})]})})})}),Object(b.jsx)("div",{id:"table-data",children:Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:l.length&&l.map((function(e,t){return Object(b.jsxs)("tr",{onClick:function(){return t=e.id,g(c.find((function(e){return e.id===t}))),void m(!0);var t},class:"data-row",children:[Object(b.jsx)("td",{class:"column1",children:e.id}),Object(b.jsx)("td",{class:"column2",children:e.firstName}),Object(b.jsx)("td",{class:"column3",children:e.lastName}),Object(b.jsx)("td",{class:"column4",children:e.email}),Object(b.jsx)("td",{class:"column5",children:e.phone})]},t)}))})})})]}),Object(b.jsx)("div",{})]}),Object(b.jsx)(o,Object(r.a)(Object(r.a)({},v),{},{isDataAvailabel:u}))]})},x=function(){return Object(b.jsx)("main",{children:Object(b.jsx)(h,{})})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d8f5b10b.chunk.js.map