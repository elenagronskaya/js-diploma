import {USER_KEY} from "./constants"

function isUserLoggedIn()
{
    return localStorage.getItem(USER_KEY);
}
export function initMenu()
{
    const isUserLoggedId = isUserLoggedIn(); 

    if (isUserLoggedId)
    {
        document.getElementById("signin").classList.add("loggedin")
        document.getElementById("signout").classList.add("loggedin")
    }else
    {
        document.getElementById("signin").classList.remove("loggedin")
        document.getElementById("signout").classList.remove("loggedin")
    }
 }