import"./assets/styles-7aa3a662.js";const l=document.querySelector(".feedback-form"),e={email:"",message:""};l.addEventListener("input",s);function s(t){const{name:a,value:o}=t.target;e[a]=o,localStorage.setItem("feedback-form-state",JSON.stringify(e))}document.addEventListener("DOMContentLoaded",n);function n(){const t=localStorage.getItem("feedback-form-state");if(t){const{email:a,message:o}=JSON.parse(t);e.email=a,e.message=o}}l.addEventListener("submit",m);function m(t){t.preventDefault(),(!e.email||!e.message)&&alert("Fill please all fields"),console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",l.reset()}console.log(e);
//# sourceMappingURL=commonHelpers2.js.map
