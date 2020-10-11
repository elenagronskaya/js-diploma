import { INVALID_CLASS, users } from "./constants";

export function initLogin() {

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const spanError = document.getElementById("errorLoginForm");

function onInputHandler(event){
    spanError.classList.remove("error");
    const isValid = event.target.value  !==  "";
    if(isValid){
        event.target.classList.remove(INVALID_CLASS)
    }else{
        event.target.classList.add(INVALID_CLASS);
    }
    if(inputEmail.value === "" || inputPassword.value === ""){
        btnLogin.setAttribute("disabled", "disabled")
    }else{
        btnLogin.removeAttribute("disabled")
    }
}

inputEmail.addEventListener("input", onInputHandler);
inputPassword.addEventListener("input", onInputHandler);

function findUser(email,password){
    for (let i = 0; i < users.length; i++) {
        if(users[i].email.toLowerCase() === email.toLowerCase() && users[i].password.toLowerCase() === password.toLowerCase()) {
            return users[i];
        }
    };
   return null;
}
function getErrorMessage(email){
    for (let i = 0; i < users.length; i++) {
        if(users[i].email.toLowerCase() === email.toLowerCase()){
            return "Пароль введен неверно"
        }
    };
    return "Пользователь не зарегистрирован"
}

btnLogin.addEventListener("click",function(event){
    event.preventDefault();
    const user = findUser(inputEmail.value,inputPassword.value);
    if (user){
        console.log(user);
        const loginForm = document.getElementById("loginForm");
        inputEmail.value = "";
        inputPassword.value = "";
    }else{
        spanError.classList.add("error");
        spanError.innerText = getErrorMessage(inputEmail.value);
    }
});
  return {
  };
}
