(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){},44:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(29),l=n.n(a),o=(n(37),n(3)),r=n(0);var i=function(){var e;return e=null!==localStorage.getItem("usernaam"),Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("div",{className:"navbar-header",children:Object(r.jsx)("p",{className:"navbar-brand",children:"DAILY JOURNAL"})}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"nav navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/blog",children:"Blogs"})}),e?Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/myblog",children:"My Blogs"})}):null,Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/compose",children:"Compose"})})]}),e?Object(r.jsx)("ul",{className:"nav navbar-nav ms-auto",children:Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/logout",children:Object(r.jsx)("button",{className:"btn btn-danger",children:"Logout"})})})}):Object(r.jsxs)("ul",{className:"nav navbar-nav ms-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/signup",children:Object(r.jsx)("button",{className:"btn btn-danger",children:"Signup"})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(o.b,{className:"nav-link",to:"/login",children:Object(r.jsx)("button",{className:"btn btn-warning",children:"Login"})})})]})]})]})})})};n(44);var j=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"footer-padding"}),Object(r.jsx)("div",{className:"footer",children:Object(r.jsx)("p",{children:"Copyright 2021"})})]})};var b=function(){return Object(r.jsxs)("div",{id:"homeLink",className:"home",children:[Object(r.jsx)("h2",{children:"Write Something Good"}),Object(r.jsxs)("p",{children:["This is a platform to write blogs. Here write whatever you want to write. There are ",Object(r.jsx)("strong",{children:"several benefits"})," of writing a blog.",Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Sharing Knowledge"}),Object(r.jsx)("li",{children:"Sharing Experiences"}),Object(r.jsx)("li",{children:"Attract Audience"}),Object(r.jsx)("li",{children:"And many more..."})]}),"Here are some instructions:",Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"You can view others blogs without logging in"}),Object(r.jsx)("li",{children:"You can only publish a blog once you are logged in"}),Object(r.jsx)("li",{children:"You can delete your blogs by clicking the delete button in My blogs section(visible only when you are logged in)"})]})]})]})},d=n(5),u=n(8),h=n.n(u),m="https://blog-website-trun0.herokuapp.com",O=n(2);var x=function(){var e=Object(O.f)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)(""),o=Object(d.a)(l,2),i=o[0],j=o[1],b=Object(c.useState)(""),u=Object(d.a)(b,2),x=u[0],g=u[1];function p(){h.a.post(m+"/contactServer",{name:s,email:i,message:x}).then((function(t){!0===t.data&&(alert("Successfully send"),a(""),j(""),g(""),e.push("/"))})).catch((function(e){console.log(e)}))}return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{id:"contactLink",className:"about",children:Object(r.jsx)("h2",{children:"Contact Us"})}),Object(r.jsxs)("form",{onSubmit:p,className:"contact-form",children:[Object(r.jsxs)("div",{className:"row justify-content-center",children:[Object(r.jsxs)("div",{className:"col col-12 col-md-4",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("label",{children:"Your Name"}),Object(r.jsx)("input",{onChange:function(e){a(e.target.value)},className:"form-control",type:"text",name:"",value:s,required:!0})]}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("label",{children:"Your email"}),Object(r.jsx)("input",{onChange:function(e){j(e.target.value)},className:"form-control",type:"email",name:"",value:i,required:!0})]})]}),Object(r.jsxs)("div",{className:"col col-12 col-md-4",children:[Object(r.jsx)("label",{children:"Message"}),Object(r.jsx)("textarea",{onChange:function(e){g(e.target.value)},className:"form-control",name:"message",rows:"8",cols:"50",value:x,required:!0})]})]}),Object(r.jsx)("button",{onClick:p,className:"btn btn-primary contact-form-button",type:"button",name:"button",children:"Send"})]})]})};var g=function(){return Object(r.jsxs)("div",{id:"aboutLink",className:"about",children:[Object(r.jsx)("h2",{children:"About Us"}),Object(r.jsx)("p",{children:"We are trying to create a new experience in blog writing. We are still in the development phase. Any suggestions to improve this website will be appreciated."})]})};n(63);var p=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b,{}),Object(r.jsx)(g,{}),Object(r.jsx)(x,{})]})};n(64);var v=function(){var e=Object(O.f)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)(""),o=Object(d.a)(l,2),i=o[0],j=o[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"compose-heading",children:"Compose"}),Object(r.jsxs)("form",{className:"compose-form",children:[Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("label",{children:Object(r.jsx)("strong",{children:"Title"})}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{onChange:function(e){a(e.target.value)},className:"form-control",type:"text",name:"postTitle",autoComplete:"off",value:s}),Object(r.jsx)("label",{children:Object(r.jsx)("strong",{children:"Post"})}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{onChange:function(e){j(e.target.value)},className:"form-control",name:"postBody",rows:"5",cols:"50",value:i})]}),Object(r.jsx)("button",{onClick:function(){h.a.post(m+"/composeServer",{postTitle:s,postBody:i,user:localStorage.getItem("usernaam")}).then((function(t){console.log(t),!0===t.data?(alert("Succesfully published"),e.push("/myblog")):(alert("Compose failed. Please try after logging in!!"),e.push("/login"))})).catch((function(e){console.log(e)}))},className:"btn btn-primary mt-3 compose-button",type:"button",name:"button",children:"Publish"})]})]})},f=n(32);n(27);var N=function(e){return Object(r.jsxs)("div",{className:"blogClass",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("strong",{children:e.title}),Object(r.jsxs)("em",{children:[" by ",e.composedBy]})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{children:e.body})]})};var y=function(){var e=Object(c.useState)([[],!0]),t=Object(d.a)(e,2),n=Object(d.a)(t[0],2),s=n[0],a=n[1],l=t[1];return a&&h.a.get(m+"/blogServer").then((function(e){l([e.data,!1]),Object(f.a)("change")})).catch((function(e){console.log(e)})),Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsx)(N,{id:e._id,title:e.title,body:e.body,composedBy:e.composedBy},e._id)}))})};var S=function(){var e=Object(O.f)(),t=Object(c.useState)([]),n=Object(d.a)(t,2),s=n[0],a=n[1];function l(t){var n=t.target.value,c=localStorage.getItem("usernaam");console.log(n+" "+c),h.a.post(m+"/deleteBlogServer",{user:c,id:n}).then((function(t){console.log(t),e.push("/myblog")})).catch((function(e){console.log(e)}))}return h.a.post(m+"/myblogServer",{user:localStorage.getItem("usernaam")}).then((function(e){a(e.data)})).catch((function(e){console.log(e)})),Object(r.jsx)("div",{children:s.map((function(e){return Object(r.jsxs)("div",{className:"blogClass",children:[Object(r.jsxs)("h1",{children:[Object(r.jsx)("strong",{children:e.title}),Object(r.jsxs)("em",{children:[" by ",e.composedBy]})]}),Object(r.jsx)("form",{children:Object(r.jsx)("button",{type:"button",onClick:l,className:"btn btn-sm btn-outline-warning",name:"blogId",value:e._id,children:"Delete"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("p",{children:e.body})]},e._id)}))})};n(28);var w=function(){var e=Object(O.f)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],a=n[1],l=Object(c.useState)(""),i=Object(d.a)(l,2),j=i[0],b=i[1];return Object(r.jsxs)("div",{className:"signup",children:[Object(r.jsx)("h1",{className:"big-heading",children:"Signup"}),Object(r.jsxs)("form",{className:"",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("i",{className:"fas fa-user"})," Username"]}),Object(r.jsx)("input",{onChange:function(e){a(e.target.value)},type:"text",className:"form-control username",name:"username",placeholder:"Enter Username",value:s,autoComplete:"off",required:!0}),Object(r.jsx)("div",{className:"form-text checkUsernameAvailability"}),Object(r.jsxs)("label",{children:[Object(r.jsx)("i",{className:"fas fa-lock"})," Password"]}),Object(r.jsx)("input",{onChange:function(e){b(e.target.value)},type:"password",className:"form-control password",name:"password",placeholder:"Enter Password",value:j,autoComplete:"off",required:!0}),Object(r.jsx)("button",{onClick:function(){0!==s.length&&0!==j.length?h.a.post(m+"/signupServer",{username:s,password:j}).then((function(t){console.log(t),!1===t.data?(alert("Successfully Signed up. Now, please login"),e.push("/login")):alert("Signup failed. Username already exists")})).catch((function(e){console.log(e)})):alert("Try again")},type:"button",className:"btn btn-danger button",name:"button",value:"signup",children:"Signup"}),Object(r.jsxs)("div",{children:["Already registered? ",Object(r.jsx)(o.b,{to:"/login",children:"Login"})]}),Object(r.jsx)("div",{children:Object(r.jsx)(o.b,{to:"/",children:"Go to Home"})})]})]})};var C=function(e){var t=Object(O.f)(),n=Object(c.useState)(""),s=Object(d.a)(n,2),a=s[0],l=s[1],i=Object(c.useState)(""),j=Object(d.a)(i,2),b=j[0],u=j[1];return Object(r.jsxs)("div",{className:"signup",children:[Object(r.jsx)("h1",{className:"big-heading",children:"Login"}),Object(r.jsxs)("form",{className:"",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("i",{className:"fas fa-user"})," Username"]}),Object(r.jsx)("input",{onChange:function(e){l(e.target.value)},type:"text",className:"form-control username",name:"username",placeholder:"Enter Username",value:a,autoComplete:"off",required:!0}),Object(r.jsxs)("label",{children:[Object(r.jsx)("i",{className:"fas fa-lock"})," Password"]}),Object(r.jsx)("input",{onChange:function(e){u(e.target.value)},type:"password",className:"form-control password",name:"password",placeholder:"Enter Password",value:b,autoComplete:"off",required:!0}),Object(r.jsx)("button",{onClick:function(){h.a.post(m+"/loginServer",{username:a,password:b}).then((function(e){!0===e.data?(localStorage.setItem("usernaam",a),alert("Login succesfull"),t.push("/compose")):alert("Login failed. Please try again!!")})).catch((function(e){console.log(e)}))},type:"button",className:"btn btn-danger button",name:"button",value:"Login",children:"Login"}),Object(r.jsxs)("div",{children:["New here? ",Object(r.jsx)(o.b,{to:"/signup",children:"Register"})]}),Object(r.jsx)("div",{children:Object(r.jsx)(o.b,{to:"/",children:"Go to Home"})})]})]})};function k(){return localStorage.removeItem("usernaam"),null}var L=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsxs)(O.c,{children:[Object(r.jsxs)(O.a,{exact:!0,path:"/",children:[Object(r.jsx)(i,{}),Object(r.jsx)(p,{})]}),Object(r.jsxs)(O.a,{path:"/blog",children:[Object(r.jsx)(i,{}),Object(r.jsx)(y,{})]}),Object(r.jsxs)(O.a,{path:"/myblog",children:[Object(r.jsx)(i,{}),Object(r.jsx)(S,{})]}),Object(r.jsxs)(O.a,{path:"/compose",children:[Object(r.jsx)(i,{}),Object(r.jsx)(v,{})]}),Object(r.jsx)(O.a,{path:"/signup",children:Object(r.jsx)(w,{})}),Object(r.jsx)(O.a,{path:"/login",children:Object(r.jsx)(C,{})}),Object(r.jsxs)(O.a,{path:"/logout",children:[Object(r.jsx)(k,{}),Object(r.jsx)(i,{}),Object(r.jsx)(p,{})]})]}),Object(r.jsx)(j,{})]})};l.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.4a7eefec.chunk.js.map