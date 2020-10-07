
import {initRegistration} from "./register.js";
import {initLogin} from "./login.js";
initLogin();
const { regForm} = initRegistration();
const logInForm = document.getElementById("logInForm");

function showRegForm (){
    regForm.classList.add("active");
    logInForm.classList.remove("active");
    btnSignUp.setAttribute("disabled","disabled");
    btnLogIn.removeAttribute("disabled","disabled")
}
const btnSignUp = document.getElementById("btnSignUp");
const btnLogIn = document.getElementById("btnLogIn");
btnSignUp.addEventListener("click",function(event){
    showRegForm();
});

export function showLogInForm(){
    logInForm.classList.add("active");
    regForm.classList.remove("active");
    btnSignUp.removeAttribute("disabled","disabled");
    btnLogIn.setAttribute("disabled","disabled");
}
btnLogIn.addEventListener("click",function(event){
    showLogInForm();
});



