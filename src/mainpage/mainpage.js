import { ROOT_NODE, USER_KEY } from "../constants";
import "./mainpage.scss";


export function welcomInscription(){
    const user = JSON.parse(localStorage.getItem(USER_KEY))
        if(user){
            const h1 = document.createElement("h1");
            h1.innerText = `Hello, ${user.name}!`;
            // const loginForm = document.getElementById("loginForm");
            // loginForm.parentElement.removeChild(loginForm);
            ROOT_NODE.innerHTML = h1.innerHTML;
        }else{
            return
        }
}

