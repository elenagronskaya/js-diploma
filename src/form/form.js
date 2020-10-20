import {initLogin} from "./login";
import {initRegistration} from "./register";
import {ROOT_NODE} from "../constants";
import "./form.scss";

const template = `
<div class="switchBtn">
<div id="btnSignUp" disabled="disabled">Sign Up</div>
<div id="btnLogIn" >Log In</div>
</div>
<div class="Form">
<div class="signUp_container active" id="signUpForm">
    <form name="register" id="registerForm">
        <input name="login" id="loginInput" placeholder="login">
        <input name="name" id="nameInput" placeholder="name">
        <input name="email" id="emailInput" placeholder="email">
        <input name="password" id="passwordInput" placeholder="password">
        <input name="passwordRepeat" id="passwordRepeatInput" placeholder="Repeat password">
        <button id="btnRegister" disabled>Register</button>
    </form>
</div>
<div class="login_container " id="logInForm">
    <form id="loginForm">
        <div class="inputEmail">
            <input id="email" placeholder="email">
        </div>
        <div class="inputPassword">
            <input id="password" type="password" placeholder="password">
        </div>
            <button id="btnLogin" disabled="disabled">Login</button>
        <div>
            <span id="errorLoginForm"class="errorMessage">
            </span>
        </div>
    </form>
</div>
</div>`

export function initForm(){
    ROOT_NODE.innerHTML = template;
    const {loginForm} = initLogin();
    const { regForm } = initRegistration();
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

    function showLogInForm(){
        logInForm.classList.add("active");
        regForm.classList.remove("active");
        btnSignUp.removeAttribute("disabled","disabled");
        btnLogIn.setAttribute("disabled","disabled");
    }
    btnLogIn.addEventListener("click",function(event){
        showLogInForm();
    });
}