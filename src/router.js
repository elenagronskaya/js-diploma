import { initClients } from "./clients/clients"
import * as Constants from "./constants";
import { initForm, signOut } from "./form/form";
import{ getBrowser, welcomInscription } from "./mainpage/mainpage"
import {renderCalendar} from "./calendar/calendar"
import {initMenu} from "./menu"


function router(){
        if(window.location.hash === Constants.ROUTE_CLIENT){
            loginProtector(initClients);
        } else if (window.location.hash === Constants.ROUTE_FORM){
            initForm();
        } else if (window.location.hash === Constants.ROUTE_MAIN || window.location.hash === "#/" || window.location.hash === ""){
            loginProtector(welcomInscription);
        } else  if (window.location.hash === Constants.ROUTE_CALENDAR){
            loginProtector(renderCalendar);
        }
        else if (window.location.hash === Constants.ROUTE_SIGNOUT)
        {
            signOut();
            initMenu();
            window.location.hash = Constants.ROUTE_FORM
            
        }
        else{
            Constants.ROOT_NODE.innerHTML = `<div>Page is not found</div>`
        }  
    };

export function initRouter(){ 
    window.addEventListener("hashchange", router)
    router();
}

export const loginProtector = (initFn) =>{
    const userValue = localStorage.getItem(Constants.USER_KEY);
    if (userValue){
        initFn(JSON.parse(userValue))
    }else{
        window.location.hash = Constants.ROUTE_FORM
    }
}