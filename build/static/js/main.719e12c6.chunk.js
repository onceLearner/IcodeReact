(this.webpackJsonponcelearner=this.webpackJsonponcelearner||[]).push([[0],{155:function(e,t,a){e.exports=a(471)},159:function(e,t,a){},160:function(e,t,a){},439:function(e,t,a){},445:function(e,t,a){},471:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(17),o=a.n(l),r=(a(159),a(46)),s=(a(94),a(95),a(142)),m=a(143),i=a(154),u=a(153),d=(a(160),a(34)),p=a(54),h=c.a.createElement(d.b,{size:"25px",className:"ml-4"}),g=c.a.createElement("h5",{className:"text-success mt-4"}," ",c.a.createElement("strong",null," Success ")," ! wait while Redirecting..."),x=c.a.createElement("h5",{className:"text-danger mt-2"},"Wrong Credentials! try again"),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleUsername=function(e){n.setState({username:e.target.value})},n.handlePassword=function(e){n.setState({password:e.target.value})},n.handleSignup=function(){fetch("http://localhost:8081/signup",{method:"post",body:JSON.stringify(n.state),headers:{"content-type":"application/json"}}).then((function(e){console.log(e),e.ok?(n.setState({Success:h}),setTimeout((function(){n.setState({Success:g})}),1e3),setTimeout((function(){localStorage.setItem("username",n.state.username),window.location.replace("/user")}),3700)):(setTimeout(n.setState({Success:"Wait..."}),3e3),n.setState({Success:x}))})).catch((function(e){console.log("error"+e)}))},n.state={username:"",password:"",Success:""},n}return Object(m.a)(a,[{key:"render",value:function(){return this.props.signup%2==0?c.a.createElement("div",null,c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"text-center mt-5"}," ",c.a.createElement(p.a,{size:"1.4em"})," "),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("form",{className:"mx-auto mt-2"},c.a.createElement("label",null,"email"),c.a.createElement("input",{value:this.state.username,onChange:this.handleUsername,type:"text",name:"username",className:"form-control col-md-15 "}),c.a.createElement("label",null,"password"),c.a.createElement("input",{value:this.state.password,onChange:this.handlePassword,type:"password",name:"password",className:"form-control col-md-15"}),c.a.createElement("label",null," Repeat password"),c.a.createElement("input",{type:"password",className:"form-control col-md-15"}))),c.a.createElement("div",{className:"divSignup text-center mt-4"},c.a.createElement("button",{id:"btnSignup",type:"button",className:"btn btn-outline-dark text-right",onClick:this.handleSignup},"signup"),this.state.Success))):""}}]),a}(n.Component),E=a(10);var b=function(e){var t=Object(n.useState)(""),a=Object(E.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(""),s=Object(E.a)(r,2),m=s[0],i=s[1],u=Object(n.useState)(""),h=Object(E.a)(u,2),g=h[0],x=h[1],v=c.a.createElement(d.b,{size:"25px",className:"ml-4"}),b=c.a.createElement("h5",{className:"text-success mt-2"}," Success ! wait while Redirecting .. "),f=c.a.createElement("h5",{className:"text-danger mt-2"},"Wrong Credentials! try again"),N=c.a.createElement("button",{type:"button",id:"btnSignup",className:"btn btn-outline-dark text-right",onClick:function(){fetch("http://localhost:8081/fakeGet").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.filter((function(e){return e.username==l&&e.password==m}));0!==t.length?(setTimeout(x(v),3e3),localStorage.setItem("username",l),setTimeout((function(){x(b)}),1e3),setTimeout((function(){window.location.replace("/user")}),3e3)):(setTimeout(x("Wait..."),3e3),x(f))})).catch((function(e){console.log(e)}))}}," ","Login");return e.login%2==1?c.a.createElement("div",null,c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"text-center mt-5"}," ",c.a.createElement(p.a,{size:"1.4em"})," "),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("form",{className:"mx-auto mt-4 "},c.a.createElement("label",null,"email"),c.a.createElement("input",{value:l,onChange:function(e){o(e.target.value)},type:"text",name:"username",className:"form-control col-md-15 "}),c.a.createElement("label",null,"password"),c.a.createElement("input",{value:m,onChange:function(e){i(e.target.value)},type:"password",name:"password",className:"form-control col-md-15"}))),c.a.createElement("div",{className:"divSignup text-center mt-4"}," ",N,g))):""},f=a(35),N=a(62);var w=function(){var e=Object(n.useState)(0),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(0),r=Object(E.a)(o,2),s=r[0],m=r[1],i=Object(n.useState)(1),u=Object(E.a)(i,2),d=u[0],p=u[1],h=d?"text-dark h5  ":"text-info  h5 py-1  ",g=d?"text-info h5 py-1   ":"text-dark h5  ",x=d?N.b:N.a;return c.a.createElement(f.a,{path:"/auth"},c.a.createElement("div",{className:"loginSignup"},c.a.createElement("div",{className:"text-center mt-3 mb-3",id:"loginSignupLabel"},c.a.createElement("span",{className:h},"login"),c.a.createElement(x,{size:"2em",className:"mr-2 ml-2 ",onClick:function(){m(s+1),l(a+1),p(s%2)}}," ","sf"),c.a.createElement("span",{className:g},"Signup")),c.a.createElement(v,{signup:a}),c.a.createElement(b,{login:s})))},S=(a(165),a(150)),j=a.n(S),C=a(88),y=a.n(C),O=a(151),k={borderBottom:"#495057   solid 0.2mm",backgroundColor:"#212529"};var T=function(e){return c.a.createElement("div",{className:"navContainer "},c.a.createElement("nav",{className:"navbar navbar-expand-lg  text-light",style:k},c.a.createElement("a",{href:"/"}," ",c.a.createElement("span",{className:"text-light ml-4 mr-5 px-5"}," ",c.a.createElement("code",null,"I")," ","Code</>")),c.a.createElement("button",{className:"navbar-toggler bg-dark",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon "},c.a.createElement(O.a,{className:"",color:"white"}))),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active "},c.a.createElement("a",{className:"nav-link text-light ",href:"/"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link text-light",href:"#"}," ","docs"))),c.a.createElement("a",{href:"/auth",className:"mr-3"}," ",c.a.createElement("button",{type:"button",id:"create",className:"px-3 btn btn-outline-light"},"Create Account")),c.a.createElement("a",{href:"/auth",className:"mr-3"}," ",c.a.createElement("button",{type:"button",className:"px-3 btn btn-light broder border-rounded"},"login")))))},_=a(64),z=a.n(_);var F=function(e){var t=Object(n.useState)([]),a=Object(E.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)("1"),s=Object(E.a)(r,2),m=(s[0],s[1],Object(n.useState)([{idp:"1",title:"print hello world",text:" ecrire un program qui affiche le message hello world ",input:"l",output:"hello world"}])),i=Object(E.a)(m,2),u=i[0],d=i[1];return c.a.createElement("div",null,c.a.createElement(z.a,{options:l,value:u,onChange:function(e){d(e)},className:"",placeholder:"chose a problem"}),c.a.createElement("div",null,c.a.createElement("h3",{onClick:function(){console.log(void fetch("http://localhost:8081/getp").then((function(e){return e.json()})).then((function(e){console.log(e),o(e)})))}},u[0].text)),c.a.createElement("div",null,c.a.createElement("h3",null,u[0].input)),c.a.createElement("div",null,c.a.createElement("h3",null,u[0].output)))};a(439),a(440),a(441),a(442),a(443),a(444);var I=function(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),r=Object(E.a)(o,2),s=r[0],m=r[1],i=Object(n.useState)("c"),u=Object(E.a)(i,2),p=u[0],h=u[1],g=c.a.createElement("div",null," ",c.a.createElement("h4",null," Execution en cours..."),c.a.createElement("div",{className:"ml-5 px-3"},c.a.createElement(y.a,{size:35,className:"px-4",color:"#22cc99",loading:2}))),x=(d.a,c.a.createElement("div",null,c.a.createElement("h4",{className:"text-success"}," ","Congratulation ! your code passes"," ",c.a.createElement(d.a,{size:"23px"})))),v=c.a.createElement("h5",null,"Code Status: ",c.a.createElement("h4",{className:"text-danger"},"Wrong Code")," ");return c.a.createElement("div",{style:{backgroundColor:"#212529"}},c.a.createElement(T,null),c.a.createElement("div",{className:"container2 mt-2 px-3 text-light"},c.a.createElement("h3",{className:"mt-3"}," probleme 1:"),c.a.createElement("div",{className:"container text-light"},c.a.createElement(F,null)),c.a.createElement("div",{className:"text-container"},c.a.createElement("div",{className:"selectContainer text-dark"},c.a.createElement(z.a,{options:[{label:"py",value:1},{label:"java",value:2},{label:"c",value:3}],value:p,onChange:function(e){h(e[0].label)},className:"",placeholder:"language"})),c.a.createElement("div",{className:"EditorContainer mr-3 mt-4 mb-3"},c.a.createElement(j.a,{mode:p,theme:"solarized_dark",height:"300px",width:"auto",value:a,onChange:function(e){l(e)}})),c.a.createElement("button",{className:"btn btn-outline-primary float-right mr-3",type:"submit",onClick:function(){m(g);var e=encodeURI(a);fetch("https://icoder2-env.eba-pgphjrgm.us-east-1.elasticbeanstalk.com:8443/v6",{method:"post",body:"lang=".concat(p,"&code=").concat(e,"&in=3&ref=3"),headers:{"Content-type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e),e.text().then((function(e){console.log(e),m("wrong code"===e?v:x)}))}))}},"Submit"),s)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=function(e){return c.a.createElement(f.a,{path:"/user"},c.a.createElement("div",null,c.a.createElement(I,null)))};a(445),a(446);var G=function(e){return c.a.createElement("div",{className:"",id:"mainGrid"}," ",c.a.createElement("div",{id:"imglanding",className:"f"},c.a.createElement("img",{id:"mainImg",srcset:"https://cdn.vox-cdn.com/thumbor/CFZlCiCcR38-_5a4JnS647xxJ78=/0x0:640x427/320x213/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 320w, https://cdn.vox-cdn.com/thumbor/2z0tiiJz-SO5IxD51t4GZyGNsB4=/0x0:640x427/620x413/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 620w, https://cdn.vox-cdn.com/thumbor/bmdHNgVaiJsgXgwSF3g-yVLudrk=/0x0:640x427/920x613/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 920w, https://cdn.vox-cdn.com/thumbor/jQzpUfqO-dngvSXISeaTA8_OnR8=/0x0:640x427/1220x813/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 1220w, https://cdn.vox-cdn.com/thumbor/M6MeG6JMn7KSasPIiNTNB86ii4o=/0x0:640x427/1520x1013/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 1520w, https://cdn.vox-cdn.com/thumbor/O6i73FO2uoToTeoMBTNwnbx4Hf8=/0x0:640x427/1820x1213/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 1820w, https://cdn.vox-cdn.com/thumbor/UweBNtE-C8-SinPssHFqL_lejQM=/0x0:640x427/2120x1413/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 2120w, https://cdn.vox-cdn.com/thumbor/sJNDiGTHaS4sdFaFUpXoo1evbq0=/0x0:640x427/2420x1613/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg 2420w",sizes:"(min-width: 800px) 556px, (min-width: 880px) calc(100vw - 334px), 100vw",alt:"","data-upload-width":"640",src:"https://cdn.vox-cdn.com/thumbor/3nC_cQ3WgHtyG3vEgnDw9FFr_FU=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/uploads/chorus_image/image/49494383/code.0.jpg"})),c.a.createElement("div",{className:"mainTextContainer "},c.a.createElement("h1",{className:"hamid  mt-5 ml-3 mb-5 "}," ","Sharpen your coding Skills!"," "),c.a.createElement("a",{href:"/auth",className:"ml-5 px-5 "},c.a.createElement("button",{type:"butto",className:"ml-5  col-4 position-relative btn btn-primary rounded-pill"},c.a.createElement("strong",null," Get Started!")))))};var W=function(e){return c.a.createElement("div",{className:"",id:"bgContainer"},c.a.createElement(T,null),c.a.createElement("div",{className:"b"},c.a.createElement(G,null)))};var B=function(){return c.a.createElement(f.c,null,c.a.createElement(f.a,{exact:!0,path:"/"},c.a.createElement(W,null)),c.a.createElement(f.a,{exact:!0,path:"/auth"},c.a.createElement(w,null)),c.a.createElement(f.a,{exact:!0,path:"/user"},c.a.createElement(J,null)))};a(468);o.a.render(c.a.createElement(r.a,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},95:function(e,t,a){}},[[155,1,2]]]);
//# sourceMappingURL=main.719e12c6.chunk.js.map