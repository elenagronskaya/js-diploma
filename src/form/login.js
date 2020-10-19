import * as Constants from "../constants";

export function initLogin() {

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const spanError = document.getElementById("errorLoginForm");
const loginForm = document.getElementById("loginForm");

function onInputHandler(event){
    spanError.classList.remove("error");
    const isValid = event.target.value  !==  "";
    if(isValid){
        event.target.classList.remove(Constants.INVALID_CLASS)
    }else{
        event.target.classList.add(Constants.INVALID_CLASS);
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
    for (let i = 0; i < Constants.users.length; i++) {
        if(Constants.users[i].email.toLowerCase() === email.toLowerCase() && Constants.users[i].password.toLowerCase() === password.toLowerCase()) {
            return Constants.users[i];
        }
    };
   return null;
}
function getErrorMessage(email){
    for (let i = 0; i < Constants.users.length; i++) {
        if(Constants.users[i].email.toLowerCase() === email.toLowerCase()){
            return "Пароль введен неверно"
        }
    };
    return "Пользователь не зарегистрирован"
}

btnLogin.addEventListener("click",function(event){
    event.preventDefault();
    const user = findUser(inputEmail.value,inputPassword.value);
    if (user){
        localStorage.setItem(Constants.USER_KEY, JSON.stringify({email: user.email, name: user.name}));
        inputEmail.value = "";
        inputPassword.value = "";
        window.location.hash = Constants.ROUTE_MAIN;

    }else{
        spanError.classList.add("error");
        spanError.innerText = getErrorMessage(inputEmail.value);
    }
});
  return {
      loginForm
  };
}
