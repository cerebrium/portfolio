(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{p5nM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=(a("8ypT"),a("vrFN")),c=void 0;t.default=function(){var e=Object(n.useState)(""),t=e[0],a=e[1];return l.a.createElement("div",{className:"contactPage"},l.a.createElement("h1",null,"Leave Me A Message!"),l.a.createElement(s.a,{title:"Contact Page"}),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a({status:"SUCCESS"})):c.setStatus({status:"ERROR"}))},l.send(n)},action:"https://formspree.io/meqelkae",method:"POST",className:"myContactForm"},l.a.createElement("label",null,"Name:  "),l.a.createElement("input",{type:"text",name:"name"}),l.a.createElement("br",null),l.a.createElement("label",null,"Email:  "),l.a.createElement("input",{type:"email",name:"email"}),l.a.createElement("br",null),l.a.createElement("label",null,"Message:"),l.a.createElement("textarea",{type:"text",name:"message",rows:"10",cols:"50"}),l.a.createElement("br",null),"SUCCESS"===t?l.a.createElement("p",null,"Thanks!"):l.a.createElement("button",null,"Submit"),"ERROR"===t&&l.a.createElement("p",null,"Ooops! There was an error.")),l.a.createElement("button",{className:"buttonSpacingTwo"},l.a.createElement(r.Link,{to:"/",className:"linkStylesTwo"},"Go back to the homepage")))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-443189eac4cbdf8ea107.js.map