(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{11:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),c=r(4),a=r.n(c),i=(r(9),r(2)),j=r(0),o=function(e){var t=e.onAdd,r=Object(s.useState)(""),n=Object(i.a)(r,2),c=n[0],a=n[1];return Object(j.jsx)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c}),a("")):alert("\u041d\u0435 \u043f\u044b\u0442\u0430\u0439\u0441\u044f \u043e\u0431\u043c\u0430\u043d\u0443\u0442\u044c Dungeon Master'a, \u041d\u0410\u041f\u0418\u0428\u0418 \u0421\u0412\u041e\u0415 \u0418\u041c\u042f!")},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Your name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Enter your name"}),Object(j.jsx)("input",{type:"submit",value:"Submit"})]})})},l=function(e){var t=e.title;return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:t})})},u=function(){return Object(j.jsx)("footer",{style:{marginTop:"40px"},children:Object(j.jsxs)("p",{children:["This page is made using React, and you can check it source code here: ",Object(j.jsx)("a",{href:"https://github.com/And1viper/simple-gachi-test",children:"GitHub"}),". ",Object(j.jsx)("br",{}),"Feel free to contribute! xDD"]})})},b=r.p+"static/media/slave.7d2854ba.jpg",h=r.p+"static/media/master.4039b226.jpeg",d=function(e){var t=function(e,t){for(var r=e[0],s=1;s<t;s++)r+=", "+e[s];return r}(e.masterList,e.masterListLength);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"master-list",children:Object(j.jsx)("p",{style:{fontSize:"16px",color:"purple"},children:t})})})},x=function(e){var t=e.name,r=e.nameLenght,s=e.masterList,n=s.length,c=function(e,t){for(var r={text:"\u041f\u043e\u0448\u0435\u043b \u0432\u043e\u043d slave "+t+"!",img:b,result:!1},s=0;s<e.length;s++)if(t.toLowerCase()===e[s].toLowerCase())return r={text:"WelCUM back MASTER "+t+"!",img:h,result:!0};return r}(s,t);return Object(j.jsx)(j.Fragment,{children:r>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:c.text}),c.result&&Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Your fellow MASTER brothers are:"})," ",Object(j.jsx)(d,{masterList:s,masterListLength:n})]}),Object(j.jsx)("img",{alt:"img",src:c.img,width:"100%",style:{maxWidth:"900px"}})]})})},m=function(e){var t=e.text,r=e.onShow;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:r,className:"master-list-btn",children:t})})},O=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{text:r?"Close the Master List":"Show the Master List",onShow:function(){return n(!r)}}),r&&Object(j.jsxs)("div",{className:"master-list",children:[Object(j.jsx)("p",{style:{fontSize:"16px",color:"purple"},children:"This list is unaccesible for slaves! Write your name and show who you are!"}),Object(j.jsx)("p",{style:{fontSize:"14px",color:"green"},children:"Want to be a Master too? Contac me to prove that you are worthy!"})]})]})},p=r.p+"static/media/gachimuchi.8b184666.jpg";var g=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),r=t[0],n=t[1],c=Object(s.useState)(""),a=Object(i.a)(c,2),b=a[0],h=a[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{alt:"gachi",src:p,style:{maxWidth:"100%",maxHeight:"400px"}}),Object(j.jsx)(l,{title:'"You are Slave or Master" test'}),Object(j.jsx)(o,{onAdd:function(e){n(e.text),h(e.text.length)}}),Object(j.jsx)(O,{}),Object(j.jsx)(x,{name:r,nameLenght:b,masterList:["And1viper","Aestian","Rokan","shNuk3","RinRi","120","Margulan","Dulkinsar"]}),Object(j.jsx)(u,{})]})};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))},9:function(e,t,r){}},[[11,1,2]]]);
//# sourceMappingURL=main.9c98fa20.chunk.js.map