(this.webpackJsonpgetreacthelp=this.webpackJsonpgetreacthelp||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(16),s=n.n(i),a=(n(44),n(45),n(12)),l=n(4),r=n(57),b=n(55),j=n(58),u="/",x="/docs",d="/games",O="/games/tictactoe",h=n(1);var f=function(){return Object(h.jsxs)(r.a,{bg:"dark",expand:"lg",variant:"dark",children:[Object(h.jsx)(a.b,{to:"/",className:"navbar-brand mx-2",children:"Get React Help"}),Object(h.jsx)(r.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(h.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(j.a,{className:"me-auto",children:[Object(h.jsx)(a.b,{to:u,className:"nav-link",children:"Home"}),Object(h.jsx)(a.b,{to:x,className:"nav-link",children:"Docs"}),Object(h.jsx)(a.b,{to:d,className:"nav-link",children:"Games"})]})})})]})};var m=function(){return Object(c.useEffect)((function(){document.title="Get React Help - Home"}),[]),Object(h.jsxs)(b.a,{style:{textAlign:"center"},children:[Object(h.jsx)("h1",{className:"mt-5 mb-2",children:"Hello there!"}),Object(h.jsx)("h2",{children:"This website is for everyone, who want be or is a React Developer."}),Object(h.jsx)("h3",{className:"mt-3",children:Object(h.jsx)("b",{children:"The Purpose:"})}),Object(h.jsx)("h4",{children:"Everything I create, will be uploaded on this website, with its code and explanation. Also some components which I create will be here, You can use them instead of installing full libraries."}),Object(h.jsx)("h5",{className:"mt-5",children:"Don't worry, if the word libraries or any of the thing goes above your head. By the end of few precious hours of your life, you will be digesting it all like a pro."}),Object(h.jsx)("h2",{className:"mt-5",children:"Just click on docs if you want to begin this awesome journey!"}),Object(h.jsxs)("h4",{children:["Or just click"," ",Object(h.jsx)(a.b,{to:x,style:{textDecoration:"none",color:"blue"},children:Object(h.jsx)("b",{children:"HERE!"})})]})]})};var p=function(){return Object(c.useEffect)((function(){document.title="Get React Help - Docs"}),[]),Object(h.jsx)(c.Fragment,{children:Object(h.jsx)(b.a,{className:"my-4",style:{textAlign:"center"}})})},g=n(6);var y=function(){var e=Object(c.useState)(!1),t=Object(g.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){document.title="Get React Help - Games"}),[]),Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)("div",{style:{backgroundColor:"lightgray"},className:"px-3 py-2",children:Object(h.jsx)("h3",{children:"Select any game from the below list:"})}),Object(h.jsxs)(b.a,{style:{display:"flex",alignItems:"center",padding:"10px",flexDirection:"column"},children:[Object(h.jsxs)("h5",{onClick:function(){return o((function(e){return!e}))},style:{backgroundColor:"black",color:"white",padding:"2px",borderRadius:"5px"},children:["Click ",n?"to hide Note!":"to show Note!"]}),n&&Object(h.jsx)("h5",{children:'Click on game name to play the game and "Tutorial to create" for detailed steps and code for development!'})]}),Object(h.jsx)("div",{children:L.map((function(e){return Object(h.jsx)(V,{route:e.route,name:e.name})}))})]})},v=n(29),k=n(8),w=n(2),C=n(56);var T=function(e){return Object(h.jsx)("div",{onClick:e.onClick,style:{width:"120px",height:"120px",borderStyle:"solid",borderLeftWidth:e.noLeft&&"0px",borderRightWidth:e.noRight&&"0px",borderTopWidth:e.noTop&&"0px",borderBottomWidth:e.noBottom&&"0px",textAlign:"center",userSelect:"none",backgroundColor:e.winValues?"black":"white"},children:Object(h.jsx)("p",{style:{textAlign:"center",fontSize:"80px",color:e.winValues?"white":"black"},children:e.value})})};var S=function(){var e=Object(c.useState)(!0),t=Object(g.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),s=Object(g.a)(i,2),a=s[0],l=s[1],r=Object(c.useState)([]),j=Object(g.a)(r,2),u=j[0],x=j[1],d=Object(c.useState)(!1),O=Object(g.a)(d,2),f=O[0],m=O[1],p=Object(c.useState)(!1),y=Object(g.a)(p,2),S=y[0],N=y[1],R=Object(c.useState)([]),V=Object(g.a)(R,2),X=V[0],L=V[1],E=Object(c.useState)(0),G=Object(g.a)(E,2),H=G[0],I=G[1],B=Object(c.useState)({textX:"X Turn",textO:"O Turn"}),D=Object(g.a)(B,2),W=D[0],F=D[1],A=Object(c.useState)({box1:"",box2:"",box3:"",box4:"",box5:"",box6:"",box7:"",box8:"",box9:""}),z=Object(g.a)(A,2),J=z[0],P=z[1],M=Object(c.useState)([[1,2,3],[1,4,7],[1,5,9],[4,5,6],[7,8,9],[2,5,8],[3,6,9],[3,5,7]]),Y=Object(g.a)(M,1)[0],q=function(e){f||S||(""===J[e]&&(P(Object(w.a)(Object(w.a)({},J),{},Object(k.a)({},e,n?"X":"O"))),n?l([].concat(Object(v.a)(a),[Number(e.slice(3.4))])):x([].concat(Object(v.a)(u),[Number(e.slice(3.4))])),o((function(e){return!e}))),I(H+1))};return Object(c.useEffect)((function(){var e=function(e,t){return t.every((function(t){return e.includes(t)}))};Y.map((function(t){return e(a,t)?(m(!0),L(t)):e(u,t)&&(N(!0),L(t)),t})),f?F({textX:"X Win",textO:"O Lose"}):S?F({textX:"X Lose",textO:"O Win"}):9===H&&F({textX:"Game Tied!",textO:"Game Tied!"})}),[n,a,u,Y,f,S,H]),Object(c.useEffect)((function(){document.title="Get React Help - Tic Tac Toe"}),[]),Object(h.jsxs)(b.a,{children:[Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(h.jsx)("h1",{children:"Welcome to Tic Tac Toe!"})}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:[Object(h.jsx)(T,{noLeft:!0,noTop:!0,value:J.box1,onClick:function(){return q("box1")},winValues:X.includes(1)}),Object(h.jsx)(T,{noTop:!0,value:J.box2,onClick:function(){return q("box2")},winValues:X.includes(2)}),Object(h.jsx)(T,{noTop:!0,noRight:!0,value:J.box3,onClick:function(){return q("box3")},winValues:X.includes(3)})]}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(h.jsx)(T,{noLeft:!0,value:J.box4,onClick:function(){return q("box4")},winValues:X.includes(4)}),Object(h.jsx)(T,{value:J.box5,onClick:function(){return q("box5")},winValues:X.includes(5)}),Object(h.jsx)(T,{noRight:!0,value:J.box6,onClick:function(){return q("box6")},winValues:X.includes(6)})]}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(h.jsx)(T,{noLeft:!0,noBottom:!0,value:J.box7,onClick:function(){return q("box7")},winValues:X.includes(7)}),Object(h.jsx)(T,{noBottom:!0,value:J.box8,onClick:function(){return q("box8")},winValues:X.includes(8)}),Object(h.jsx)(T,{noBottom:!0,noRight:!0,value:J.box9,onClick:function(){return q("box9")},winValues:X.includes(9)})]}),Object(h.jsxs)("div",{className:"my-3",style:{display:"flex",justifyContent:"center"},children:[Object(h.jsx)("p",{style:{fontSize:"20px",backgroundColor:n&&!f&&!S&&H<9&&"black",color:n&&!f&&!S&&H<9&&"white",marginRight:"10px"},children:W.textX}),Object(h.jsx)(C.a,{variant:"dark",onClick:function(){P({box1:"",box2:"",box3:"",box4:"",box5:"",box6:"",box7:"",box8:"",box9:""}),l([]),x([]),m(!1),N(!1),L([]),F({textX:"X Turn",textO:"O Turn"}),o(!0),I(0)},children:"Reset"}),Object(h.jsx)("p",{style:{fontSize:"20px",backgroundColor:!n&&!f&&H<9&&!S&&"black",color:!n&&!f&&H<9&&!S&&"white",marginLeft:"10px"},children:W.textO})]})]})},N=n(59);var R={listItem:{textDecoration:"none",color:"black",fontWeight:"600"}},V=function(e){return Object(h.jsx)(N.a,{as:"ul",style:{display:"flex",justifyContent:"space-between",backgroundColor:"red"},children:Object(h.jsxs)(N.a.Item,{as:"li",variant:"dark",style:{display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)(a.b,{to:e.route,style:R.listItem,children:e.name}),Object(h.jsx)(a.b,{to:"/",style:R.listItem,children:"Tutorial to create"})]})})};var X=function(){return Object(h.jsx)(l.a,{to:u})},L=[{name:"Tic Tac Toe",route:O}];var E=function(){return Object(h.jsxs)(a.a,{basename:"/",children:[Object(h.jsx)(f,{}),Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{path:u,element:Object(h.jsx)(m,{})}),Object(h.jsx)(l.b,{path:x,element:Object(h.jsx)(p,{})}),Object(h.jsx)(l.b,{path:d,element:Object(h.jsx)(y,{})}),Object(h.jsx)(l.b,{path:O,element:Object(h.jsx)(S,{})}),Object(h.jsx)(l.b,{path:"*",element:Object(h.jsx)(X,{})})]})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),G()}},[[53,1,2]]]);
//# sourceMappingURL=main.a60ac672.chunk.js.map