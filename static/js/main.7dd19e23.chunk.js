(this.webpackJsonpnsuthub=this.webpackJsonpnsuthub||[]).push([[0],[,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/unplugged.4968ae32.jpg"},,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/image3.5dc5dfbe.jpg"},,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/card1.b2609273.png"},function(e,a,t){e.exports=t.p+"static/media/card2.edd48f9e.png"},function(e,a,t){e.exports=t.p+"static/media/card3.955e7dea.png"},function(e,a,t){e.exports=t.p+"static/media/event.d76941f1.png"},function(e,a,t){e.exports=t.p+"static/media/society.f06bd717.png"},function(e,a,t){e.exports=t.p+"static/media/ques.c84dd936.png"},function(e,a,t){e.exports=t.p+"static/media/notes.fd90018e.png"},,function(e,a,t){},function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/background.11f2db4f.png"},function(e,a,t){e.exports=t.p+"static/media/background1.f22e214a.png"},function(e,a,t){e.exports=t.p+"static/media/new.7e504c5f.jpg"},function(e,a,t){e.exports=t.p+"static/media/new1.18345ed2.jpg"},function(e,a,t){e.exports=t.p+"static/media/webDev.75be5425.png"},function(e,a,t){e.exports=t.p+"static/media/appdev.9ce8aa20.png"},function(e,a,t){e.exports=t.p+"static/media/bash.92573b91.png"},function(e,a,t){e.exports=t.p+"static/media/mldlai.d67bfce2.jpg"},function(e,a,t){e.exports=t.p+"static/media/languages.37dbedda.png"},function(e,a,t){e.exports=t.p+"static/media/softskills.a41d0326.png"},function(e,a,t){e.exports=t.p+"static/media/coursesheader.a172c7b9.png"},function(e,a,t){e.exports=t.p+"static/media/image1.5b63ea7f.jpg"},function(e,a,t){e.exports=t.p+"static/media/image2.f19a7404.jpg"},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t(121)},,,,,function(e,a,t){},,,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/bookPlaceholder.447937d9.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/image4.749fa594.jpg"},,,,,,,,,,,function(e,a,t){"use strict";t.r(a);var s=t(0),l=t.n(s),n=t(18),r=t.n(n);t(95),t(48);function c(){document.getElementsByClassName("closedNav")[0].classList.toggle("sidenav"),document.getElementsByClassName("secondNav")[0].classList.toggle("collapseNav"),document.getElementsByClassName("moveRt")[0].classList.toggle("collapseNav")}function m(){document.getElementsByClassName("moveRt")[0].classList.remove("collapseNav"),document.getElementsByClassName("secondNav")[0].classList.remove("collapseNav"),document.getElementsByClassName("closedNav")[0].classList.remove("sidenav")}function i(e){for(var a=document.getElementsByClassName("mainimage"),t=0;t<a.length;t++)a[t].style.display="none"}var o=t(9),p=t(14),u=t(15),h=t(17),d=t(16),E=(t(49),t(3)),g=function(){return l.a.createElement("div",{class:"grid2"},l.a.createElement("p",{className:"footr"},"\xa9copyright 2020 by Dev. T-Rex."),l.a.createElement("p",{className:"footr"},"Logo"),l.a.createElement("p",{className:"footr"},l.a.createElement("i",{class:"fa fa-facebook-square fa-2x ic","aria-hidden":"true"}),l.a.createElement(E.c,{size:15,class:"ic"}),l.a.createElement(E.d,{size:15,class:"ic"}),l.a.createElement(E.f,{size:15,class:"ic"}),l.a.createElement(E.e,{size:15,class:"ic"})))},w=(t(96),function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(p.a)(this,t),(s=a.call(this,e)).onEmailChange=function(e){s.setState({SignInEmail:e.target.value})},s.onPasswordChange=function(e){s.setState({SignInPassword:e.target.value})},s.onSubmit=function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.state.SignInEmail,password:s.state.SignInPassword})}).then((function(e){return e.json()})).then((function(e){e.email?(s.props.loaduser(e),s.props.onroutechange("homein")):alert("Email or password is in Invalid")}))},s.state={SignInEmail:"",SignInPassword:""},s}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onroutechange;return l.a.createElement("div",{className:"fat moveRt"},l.a.createElement("main",{className:"main1 br4 ba dark-gray b--black-10 w-70-m w-30-l mw7 shadow-3 center pa3 black-80"},l.a.createElement("form",{className:"measure center form"},l.a.createElement("fieldset",{id:"sign_up",class:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),l.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),l.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),l.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"},l.a.createElement("input",{type:"checkbox"})," Remember me")),l.a.createElement("div",{onClick:this.onSubmit},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sin",value:"Sign in"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("a",{onClick:function(){return e("signup")},className:"f6 link dim black db"},"Sign up"),l.a.createElement("a",{href:"#0",className:"f6 link dim black db"},"Forgot your password?")))),l.a.createElement(g,null))}}]),t}(l.a.Component)),b=(t(122),function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var s;return Object(p.a)(this,t),(s=a.call(this,e)).onEmailChange=function(e){s.setState({SignUpEmail:e.target.value})},s.onPasswordChange=function(e){s.setState({SignUpPassword:e.target.value})},s.onconfirmPasswordChange=function(e){s.setState({SignUpconfirmPassword:e.target.value})},s.onfirstnameChange=function(e){s.setState({SignUpfirstname:e.target.value})},s.onlastnameChange=function(e){s.setState({SignUplastname:e.target.value})},s.onrollnoChange=function(e){s.setState({SignUprollno:e.target.value})},s.onSubmit=function(){s.state.SignUpPassword===s.state.SignUpconfirmPassword&&s.state.SignUpPassword.length>=8?fetch("http://localhost:3000/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({first:s.state.SignUpfirstname,last:s.state.SignUplastname,rollno:s.state.SignUprollno,email:s.state.SignUpEmail,password:s.state.SignUpPassword})}).then((function(e){return e.json()})).then((function(e){s.props.loaduser(e),s.props.onroutechange("homein")})):(s.state.SignUpPassword.length,alert("Password and Confirm Password are mismaching"))},s.state={SignUpEmail:"",SignUpPassword:"",SignUpconfirmPassword:"",SignUpfirstname:"",SignUplastname:"",SignUprollno:""},s}return Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onroutechange;return l.a.createElement("div",{className:"fat moveRt"},l.a.createElement("main",{className:"br4 ba dark-gray b--black-10 w-70-m w-40-l mw7 shadow-3 center pa3 black-80 main1"},l.a.createElement("form",{className:"center form"},l.a.createElement("fieldset",{id:"sign_up",class:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign Up"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"First name"),l.a.createElement("input",{onChange:this.onfirstnameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"firstname",name:"firstname",id:"firstname"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Last name"),l.a.createElement("input",{onChange:this.onlastnameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"lastname",name:"lastname",id:"lastname"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Roll No."),l.a.createElement("input",{onChange:this.onrollnoChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"rollno",name:"rollno",id:"rollno"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),l.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),l.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Confirm Password"),l.a.createElement("input",{onChange:this.onconfirmPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"confirm password",id:"confirm password"})),l.a.createElement("label",{className:"pa0 ma0 lh-copy f6 pointer"},l.a.createElement("input",{type:"checkbox"})," Remember me"))),l.a.createElement("div",{onClick:this.onSubmit},l.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib sin",method:"post",value:"Sign Up"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("a",{onClick:function(){return e("signin")},className:"f6 link dim black db"},"Already a member Sign In")))),l.a.createElement(g,null))}}]),t}(l.a.Component)),f=function(){return l.a.createElement("div",null,l.a.createElement("header",{className:"secondNav"},l.a.createElement("div",{class:"openSideNav",onClick:c},l.a.createElement("div",{class:"item bt-menu js-nav-main","data-menu-id":"menu-main"},l.a.createElement("div",{class:"ico-menu"},l.a.createElement("div",{class:"bar"}),l.a.createElement("div",{class:"bar"}),l.a.createElement("div",{class:"bar"})),l.a.createElement("span",{class:"tab"},"MENU"))),l.a.createElement("div",{className:"logo",onClick:m},l.a.createElement("img",{className:"logoimg",src:"https://logoipsum.com/logo/logo-12.svg"})),l.a.createElement("div",{className:"responsive"},l.a.createElement(o.a,null,l.a.createElement("div",{className:"ink"},l.a.createElement(o.c,{to:"/login"},l.a.createElement("h2",null,"Sign In"))),l.a.createElement("div",{className:"ink2"},l.a.createElement(o.c,{to:"/register"},l.a.createElement("h2",null,"Sign Up")))))))},N=(t(103),t(52)),v=t.n(N),k=t(53),y=t.n(k),C=t(40),x=t.n(C),S=t(41),P=t.n(S),U=t(42),L=t.n(U),j=t(43),D=t.n(j),A=t(44),I=t.n(A),O=t(45),R=t.n(O),T=t(46),F=t.n(T),H=t(54),_=t.n(H),z=t(55),M=t.n(z),G=(t(104),l.a.Component,function(){return l.a.createElement("nav",{className:"closedNav"},l.a.createElement("div",{className:"nav-top"},l.a.createElement("img",{src:"https://i.pinimg.com/564x/e3/21/6b/e3216b575d5e92031eaf5c1a067f9d31.jpg",alt:"NsutHub",className:"navlogo"}),l.a.createElement("div",{class:"pull-right"},l.a.createElement("div",{class:"bt-close",onClick:m},"\u274c"))),l.a.createElement("div",{className:"linksCol"},l.a.createElement(o.a,null,l.a.createElement("div",{className:"linkhover choosen"},l.a.createElement(o.c,{path:"/",className:"links"}," Home ")),l.a.createElement("div",{className:"linkhover"},l.a.createElement(o.c,{to:"/register",className:"links"}," SignUp ")),l.a.createElement("div",{className:"linkhover"},l.a.createElement(o.c,{to:"/login",className:"links"}," SignIn ")),l.a.createElement("div",{className:"linkhover"},l.a.createElement(o.c,{to:"/joinus",className:"links"}," Join Us ")),l.a.createElement("div",{className:"linkhover"},l.a.createElement(o.c,{to:"/books",className:"links"}," E-books ")),l.a.createElement("div",{className:"linkhover"},l.a.createElement(o.c,{to:"/freecourses",className:"links"}," Courses ")),l.a.createElement("div",{className:"linkhover"},l.a.createElement(o.c,{to:"/events",className:"links"}," Events ")),l.a.createElement("div",{className:"spaceBox"}),l.a.createElement("div",{className:"lnk"},l.a.createElement("span",null,l.a.createElement("a",{href:"#",className:"links2"}," About Us "),l.a.createElement("a",{href:"#",className:"links2"}," Join Us "))))))}),B=(t(105),t(106),t(8)),W=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(p.a)(this,t);for(var s=arguments.length,l=new Array(s),n=0;n<s;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={},e.bargain="",e.fetchData=function(a){fetch(a).then((function(e){return e.json})).then((function(a){return e.setState({state:a.data})})).catch((function(e){return console.error(e)}))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id,a="http://localhost:3000/bookinfo/".concat(e);this.fetchData(a),this.state.data.bargainable?this.bargain="Contact seller to bargain":this.bargain="Not Barginable"}},{key:"render",value:function(){return l.a.createElement("div",{className:"jist moveRt"},l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:" lap"},l.a.createElement("ul",{className:"sidepanel"},l.a.createElement("li",{className:"sidelist"},l.a.createElement("img",{src:this.state.data.img1,className:"sideimage",onclick:i()})),l.a.createElement("li",{className:"sidelist"},l.a.createElement("img",{src:this.state.data.img2,className:"sideimage",onclick:i()})),l.a.createElement("li",{className:"sidelist"},l.a.createElement("img",{src:this.state.data.img3,className:"sideimage",onclick:i()})))),l.a.createElement("div",{className:" lap"},l.a.createElement("img",{src:this.state.data.img1,className:"mainimage image1",style:{display:"block"}}),l.a.createElement("img",{src:this.state.data.img2,className:"mainimage image2",style:{display:"none"}}),l.a.createElement("img",{src:this.state.data.img3,className:"mainimage image3",style:{display:"none"}})),l.a.createElement("div",{className:"mob"},l.a.createElement("img",{src:this.state.data.img1,className:"mainimage image.1",style:{display:"block"}}),l.a.createElement("img",{src:this.state.data.img2,className:"mainimage image.2",style:{display:"none"}}),l.a.createElement("img",{src:this.state.data.img3,className:"mainimage image.3",style:{display:"none"}})),l.a.createElement("div",{className:"mob"},l.a.createElement("ul",{className:"sidepanel"},l.a.createElement("li",{className:"sidelist"},l.a.createElement("img",{src:this.state.data.img1,className:"sideimage",onclick:i()})),l.a.createElement("li",{className:"sidelist"},l.a.createElement("img",{src:this.state.data.img2,className:"sideimage",onclick:i()})),l.a.createElement("li",{className:"sidelist"},l.a.createElement("img",{src:this.state.data.img3,className:"sideimage",onclick:i()})))),l.a.createElement("div",{className:"dis"},l.a.createElement("h1",{className:"description"},"OVERVIEW"),l.a.createElement("p",{className:"description1"},this.state.data.description),l.a.createElement("h1",{className:"description"},this.state.data.Author),l.a.createElement("p",{className:"description1"},"Title: ",this.state.data.title,l.a.createElement("br",null),"Price: ",this.state.data.price,l.a.createElement("br",null),"Barginable: ",this.bargain,l.a.createElement("br",null),"Edition: ",this.state.data.edition,l.a.createElement("br",null),"Owner: ",this.state.data.name,l.a.createElement("br",null),"Contact: ",this.state.data.contact))))}}]),t}(l.a.Component),J=(Object(B.e)(W),t(107),t(56)),V=t.n(J),q=t(57),K=t.n(q),Z=t(58),Q=t.n(Z),Y=t(59),X=t.n(Y),$=t(60),ee=t.n($),ae=t(61),te=t.n(ae),se=t(62),le=t.n(se),ne=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){this.props.onRouteChange;return l.a.createElement("div",{className:"moveRt"},l.a.createElement("div",{className:"courseHero"},l.a.createElement("img",{src:le.a})),l.a.createElement("div",{className:"empty"}),l.a.createElement("div",{className:"sup"}," Choose your courses"),l.a.createElement("div",{className:"section group"},l.a.createElement("div",{className:"col span_1_of_3"},l.a.createElement("a",{href:"#web"},l.a.createElement("img",{src:V.a,className:"courim"}))),l.a.createElement("div",{className:"col span_1_of_3"},l.a.createElement("a",{href:"#app"},l.a.createElement("img",{src:K.a,className:"courim"}))),l.a.createElement("div",{className:"col span_1_of_3"},l.a.createElement("a",{href:"#mlaidl"},l.a.createElement("img",{src:X.a,className:"courim"})))),l.a.createElement("div",{className:"section group"},l.a.createElement("div",{className:"col span_1_of_3"},l.a.createElement("a",{href:"#algo"},l.a.createElement("img",{src:ee.a,className:"courim"}))),l.a.createElement("div",{className:"col span_1_of_3"},l.a.createElement("a",{href:"#bash"},l.a.createElement("img",{src:Q.a,className:"courim"}))),l.a.createElement("div",{className:"col span_1_of_3"},l.a.createElement("a",{href:"#other"},l.a.createElement("img",{src:te.a,className:"courim"})))),l.a.createElement("div",{id:"web"},l.a.createElement("h1",{className:"super"},"Web Development"),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Learn by courses"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=EceJQ05KTf4&list=PLwoh6bBAszPrES-EOajos_E9gvRbL27wz"},"MERN stack Web Development"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/specializations/full-stack-react?action=enroll"},"MERN stack Web Development -coursera"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/learn/server-side-nodejs"},"MEN stack Web Development"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=vLvNr3Wa5YI&list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9"},"MEAN stack Web Development"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLzUER7qusru_Wxe5QDVOQPEcuqeKK1MNu"},"Web Development -freecodecamp")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Learn by Project Building"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=Fy9SdZLBTOo&t=20s"},"MERN stack Ecommerce website"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=njqdreTzAI0&list=PLZed_adPqIJrl9pwlERGhU-RCNOtKqvyD"},"MEAN stack Ecommerce website"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=Jdez-Nl2RHY"},"PERN stack Blogging website"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.education-ecosystem.com/mazel/l9Deo-ngtime/"},"PEAN stack Time tracker"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=FdC4Mjljd3k"},"MEVN stack Library Web App"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=CyTWPr_WwdI"},"MEN stack TODO List")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH U"},"Useful Resourses"),l.a.createElement("a",{className:"ik",href:"https://www.freecodecamp.org/"},"FreeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.w3schools.com/"},"w3schools"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://developer.mozilla.org/en-US/"},"Mozilla Web Docs(MDN)"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://getbootstrap.com/"},"Bootstrap"))),l.a.createElement("div",{id:"app"},l.a.createElement("h1",{className:"super"},"App Development"),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Learn by courses"),l.a.createElement("h3",null,"Using Android Studio"),l.a.createElement("a",{className:"ik",href:"https://www.udemy.com/course/become-an-android-developer-from-scratch/"},"Android Development -Udemy"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=fis26HvvDII"},"Android Development -freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("h3",null,"Using Flutter Framework"),l.a.createElement("a",{className:"ik",href:"https://flutter.dev/freecourse"},"Flutter App Development -appBrewery"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLR2qQy0Zxs_UdqAcaipPR3CG1Ly57UlhV"},"Flutter App Development -mTechViral"),l.a.createElement("h3",null,"iOS App Development"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLpZBns8dFbgx0gr68lf-un9EjdmywTu4_"},"iOS App Development -devSlopes"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.udemy.com/course/the-complete-ios-10-developer-course/"},"iOS App Development -Udemy")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Learn by Project Building"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLaoF-xhnnrRW4lXuIhNLhgVuYkIlF852V"},"Android Studio -Food Order App"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=988UZFB0heA&t=2174s"},"Android Studio -Whatsapp clone"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLmnT6naTGy2SC82FMSCrvZNogg5T1H7iF"},"Flutter Framework -Ecommerce App"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PL4cUxeGkcC9j--TKIdkb3ISfRbJeJYQwC"},"Flutter Framework -Brew Crew App"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=09TeUXjzpKs"},"iOS App Development -Cards game"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=CyTWPr_WwdI"},"iOS App Development -Dicee")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH U"},"Useful Resourses"),l.a.createElement("a",{className:"ik",href:"https://www.freecodecamp.org/"},"FreeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://developer.android.com/"},"Android Developers"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://flutter.dev/docs"},"Flutter Docs"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://dart.dev/"},"Dart Packages"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://developer.apple.com/documentation/"},"iOS App Developers"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://swift.org/documentation/"},"Swift Documentation"))),l.a.createElement("div",{id:"mlaidl"},l.a.createElement("h1",{className:"super"},"Artificial Intelligence and its sub categories"),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Artificial Intelligence"),l.a.createElement("a",{className:"ik",href:"https://www.edx.org/course/artificial-intelligence-ai"},"Artificial Intelligence -edx"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PL9ooVrP1hQOGHNaCT7_fwe9AabjZI1RjI"},"Artificial Intelligence -edureka"),l.a.createElement("h2",{className:"subH"},"Machine Learning"),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/learn/machine-learning-with-python"},"Machine learning using python -IBM"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PL9ooVrP1hQOHUfd-g8GUpKI3hHOwM_9Dn"},"Machine learning using python -edureka"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/learn/machine-learning"},"Machine Learning using Octave/Matlab"),l.a.createElement("h2",{className:"subH"},"Deep Learning"),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/specializations/deep-learning"},"Deep Learning using TenserFlow -deeplearning.ai"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s"},"Deep Learning using TenserFlow -freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLWKjhJtqVAbm3T2Eq1_KgloC7ogdXxdRa"},"Deep learning using pyTorch"),l.a.createElement("h2",{className:"subH"},"Data Science and Neural Networks"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLlgLmuG_KgbaXMKcISC-fdz7HUn1oKr9i"},"Data Science -greatlearning"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PL9ooVrP1hQOGR57Y4g1LFhn1JXVgn1lkX"},"Data Science -edureka"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/learn/neural-networks-deep-learning"},"Neural networks -deeplearning.ai"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=ob1yS9g-Zcs"},"Neural networks -simplilearn")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH U"},"Useful Resourses"),l.a.createElement("a",{className:"ik",href:"https://aws.amazon.com/blogs/ai/"},"Amazon Web Services"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://research.googleblog.com/"},"Google research"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_useful_resources.htm"},"Useful Books"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.freecodecamp.org/news/the-best-resources-i-used-to-teach-myself-machine-learning-part-1-292232d167/"},"freeCodeCamp blog"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.kaggle.com/"},"kaggle"))),l.a.createElement("div",{id:"algo"},l.a.createElement("h1",{className:"super"},"Algorithmic Languages"),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"C/C++"),l.a.createElement("a",{className:"ik",href:"https://www.udemy.com/course/free-learn-c-tutorial-beginners/"},"C++ -udemy"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.udacity.com/course/c-for-programmers--ud210"},"C++ -udacity"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=iT_553vTyzI"},"C -intellipat"),l.a.createElement("h2",{className:"subH"},"Java"),l.a.createElement("a",{className:"ik",href:"https://www.udemy.com/course/java-tutorial/"},"Java -udemy"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://youtu.be/ZXsFEie9GMc"},"Java -intellipat"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.udemy.com/course/practice-java-by-building-projects/"},"Learn java by building projects"),l.a.createElement("h2",{className:"subH"},"Python"),l.a.createElement("a",{className:"ik",href:"https://www.educative.io/courses/learn-python-3-from-scratch"},"Python from scratch"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=8DvywoWv6fI"},"Python -freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/specializations/python"},"Python specializations"),l.a.createElement("h2",{className:"subH"},"Other Languages"),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/specializations/google-golang"},"Golang -courseera"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.datacamp.com/courses/free-introduction-to-r"},"R -codecamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=comQ1-x2a1Q"},"Swift -freecodecamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://cognitiveclass.ai/courses/introduction-to-scala"},"Scala -cognitiveclass.ai"),l.a.createElement("h2",{className:"subH"},"Data Structures And Algorithms"),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/specializations/data-structures-algorithms"},"Ds and Algo specializations -coursera"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/playlist?list=PLWPirh4EWFpG49yASGCmvOwXwVvgnm6Jt"},"Ds and Algo -Tutorials point"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=RBSGKlAvoiM&t=25498s"},"Ds and Algo -freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=09_LlHjoEiY"},"Graph theory Algos -freeCodeCamp")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH U"},"Useful Resourses"),l.a.createElement("a",{className:"ik",href:"https://www.tutorialspoint.com/"},"Tutorials point"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.freecodecamp.org/"},"freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://devdocs.io/cpp/"},"C++ docs"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.geeksforgeeks.org/"},"Geeks for Geeks"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.programiz.com/dsa#:~:text=A%20data%20structure%20is%20a,efficient%20and%20optimized%20computer%20programs."},"Programiz"))),l.a.createElement("div",{id:"bash"},l.a.createElement("h1",{className:"super"},"Terminal, Git and Linux"),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Terminal"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=2PGnYjbYuUo"},"Terminal -Geek's lesson"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.rithmschool.com/courses/terminal"},"Terminal -Rithm school"),l.a.createElement("h2",{className:"subH"},"Git/Github"),l.a.createElement("a",{className:"ik",href:"https://www.udemy.com/course/git-expert-4-hours/"},"Git become an Expert -udemy"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=RGOj5yH7evk&t=21s"},"Github -freeCodeCamp"),l.a.createElement("h2",{className:"subH"},"Linux"),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=wBp0Rb-ZJak"},"Linux become a Power User"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=3Kq1MIfTWCE"},"Ethical hacking -freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=wsh64rjnRas"},"Linux Administration")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH U"},"Useful Resourses"),l.a.createElement("a",{className:"ik",href:"http://linuxdocs.org/"},"Linux docs"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://help.github.com/en/github"},"Github Docs"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://git-scm.com/doc"},"Git docs"))),l.a.createElement("div",{id:"other"},l.a.createElement("h1",{className:"super"},"Other Important Courses"),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH"},"Game Development"),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/specializations/game-development"},"Using C# and Unity -coursera"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=FfWpgLFMI7w"},"Using pygame -freeCodeCamp"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.youtube.com/watch?v=LsNW4FPHuZE"},"Using Unreal and C++"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.skillshare.com/browse/game-development"},"Skillshare courses"),l.a.createElement("h2",{className:"subH"},"Soft Skills"),l.a.createElement("a",{className:"ik",href:"https://www.edx.org/course/rise-to-leadership-become-a-ceo-0"},"Leadership"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.edx.org/course/leading-with-effective-communication-inclusive-lea"},"Public speaking"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.coursera.org/learn/international-taxation"},"Tax planing"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://alison.com/course/financial-literacy"},"Financial Literacy"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.edx.org/course/disciplined-approach-to-social-entrepreneurship"},"Digital Entrepreneurship")),l.a.createElement("div",null,l.a.createElement("h2",{className:"subH U"},"Useful Resourses"),l.a.createElement("a",{className:"ik",href:"https://alison.com/courses/personal-development"},"Alison Personal Development"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"hhttps://www.skillshare.com/"},"Skillshare"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.developgoodhabits.com/personal-development-books/"},"Personal development books"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://docs.unity3d.com/Manual/index.html"},"Unity docs"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://docs.unrealengine.com/en-US/index.html"},"Unreal docs"),l.a.createElement("br",null),l.a.createElement("a",{className:"ik",href:"https://www.pygame.org/docs/"},"Pygame docs"))),l.a.createElement("div",{className:"foottag"},"Learning never stops; so always be curious -",l.a.createElement("a",{className:"ik",href:"https://www.facebook.com/dev.trex.90"},"Dev-T-rex")))}}]),t}(l.a.Component),re=(t(108),t(109),t(63)),ce=t.n(re),me=t(64),ie=t.n(me),oe=t(27),pe=t.n(oe),ue=(t(110),t(22)),he=t(137),de=function(){return l.a.createElement("div",{className:"moveRt"},l.a.createElement("div",{className:"pimg1"},l.a.createElement("div",{className:"ptext"},l.a.createElement("span",{className:"border"}," MOKSHA 2020 "),l.a.createElement("h6",{style:{marginTop:"50px",zIndex:"1"}},"17-23 March"))),l.a.createElement("section",{className:"section section-dark"},l.a.createElement("h2",null,"Event 1"),l.a.createElement("h4",null,"13 November 2020"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis pariatur, unde magni tempore laboriosam atque ea, vitae adipisci explicabo ex eum perspiciatis dolore, eius id! Perspiciatis, error? Voluptas, fugit.")),l.a.createElement("div",{className:"pimg2"},l.a.createElement("div",{className:"ptext"},l.a.createElement("span",{className:"border trans"}," Webinar On Tech Placement "),l.a.createElement("h6",{style:{marginTop:"50px",zIndex:"1"}},"Mini Hall, ECE Block"))),l.a.createElement("section",{className:"section section-dark"},l.a.createElement("h2",null,"Event 2"),l.a.createElement("h5",null,"2 March 2016"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis pariatur, unde magni tempore laboriosam atque ea, vitae adipisci explicabo ex eum perspiciatis dolore, eius id! Perspiciatis, error? Voluptas, fugit.")),l.a.createElement("div",{className:"pimg3"},l.a.createElement("div",{className:"ptext"},l.a.createElement("span",{className:"border trans"}," Innovasion and Resonanz "),l.a.createElement("h6",{style:{marginTop:"50px",zIndex:"1"}},"Moksha Ground"))),l.a.createElement("section",{className:"section section-dark"},l.a.createElement("h2",null,"Event 3"),l.a.createElement("h5",null,"10 December 2016"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veritatis pariatur, unde magni tempore laboriosam atque ea, vitae adipisci explicabo ex eum perspiciatis dolore, eius id! Perspiciatis, error? Voluptas, fugit.")),l.a.createElement("div",{className:"pimg1"},l.a.createElement("div",{className:"ptext"},l.a.createElement("span",{className:"border"}," Space Exploration by: Nakshatra "),l.a.createElement("h6",{style:{marginTop:"50px",zIndex:"1"}},"NB03, NSUT"))),l.a.createElement(ue.a,{style:{marginTop:"100px"}},l.a.createElement(ue.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:ce.a,alt:"First slide",height:"400px !important",width:"100%"}),l.a.createElement(ue.a.Caption,{style:{border:"1px solid white",marginBottom:"100px"}},l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(ue.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:ie.a,alt:"First slide",height:"400px !important",width:"100%"}),l.a.createElement(ue.a.Caption,{style:{border:"1px solid white",marginBottom:"100px"}},l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(ue.a.Item,null,l.a.createElement("img",{className:"d-block w-100",src:pe.a,alt:"First slide",height:"400px !important",width:"100%"}),l.a.createElement(ue.a.Caption,{style:{border:"1px solid white",marginBottom:"100px"}},l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur.")))),l.a.createElement("section",{className:"section section-light"},l.a.createElement("h1",null,"Past Events")),l.a.createElement(he.a,{container:!0,style:{padding:"0 50px 50px"}},l.a.createElement(he.a,{item:!0,container:!0,sm:12},l.a.createElement(he.a,{item:!0,sm:6},l.a.createElement("img",{className:"d-block w-100 hover2",src:pe.a,alt:"First slide",style:{transition:"0.3s"}})),l.a.createElement(he.a,{item:!0,sm:6},l.a.createElement("img",{className:"d-block w-100 hover2",src:pe.a,alt:"First slide",style:{transition:"0.3s"}}))),l.a.createElement(he.a,{item:!0,container:!0,sm:12},l.a.createElement(he.a,{item:!0,sm:6},l.a.createElement("img",{className:"d-block w-100 hover2",src:pe.a,alt:"First slide",style:{transition:"0.3s"}})),l.a.createElement(he.a,{item:!0,sm:6},l.a.createElement("img",{className:"d-block w-100 hover2",src:pe.a,alt:"First slide",style:{transition:"0.3s"}})))))},Ee=(t(143),t(141),t(11),t(140));t(142),Object(Ee.a)((function(e){return{container:{backgroundColor:"#8cecec",overflowX:"hidden",flexGrow:1,display:"flex",padding:"20px",alignItems:"center",justifyContent:"center",position:"relative"}}})),t(120);var ge=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(G,null),l.a.createElement(f,null),l.a.createElement("div",{className:"stick",onClick:m},l.a.createElement(o.b,null,l.a.createElement(B.a,{exact:!0,path:"/",component:w}),l.a.createElement(B.a,{exact:!0,path:"/login",component:w}),l.a.createElement(B.a,{exact:!0,path:"/register",component:b}),l.a.createElement(B.a,{exact:!0,path:"/books",component:b}),l.a.createElement(B.a,{exact:!0,path:"/freecourses",component:ne}),l.a.createElement(B.a,{exact:!0,path:"/events",component:de}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root"))}],[[90,1,2]]]);
//# sourceMappingURL=main.7dd19e23.chunk.js.map