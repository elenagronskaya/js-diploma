import { ROOT_NODE, USER_KEY } from "../constants";
import "./mainpage.scss";

function getMainHtml(user){
    const template = `<div>
    <h1 class="welcom">
        Hello, ${user.name}!</h1>
    <h2 class="usingBrowser">
        You are using: ${getBrowser()}!</h2>
    <h2 class="usingOs">
        You are using: ${getOS()}!</h2>
    </div>
    `
    return template
}


export function welcomInscription(){
    const user = JSON.parse(localStorage.getItem(USER_KEY))
        if(user){
            ROOT_NODE.innerHTML = getMainHtml(user);
        }else{
            return
    }
}
function getBrowser(){
    const sUsrAg = navigator.userAgent;
    let sBrowser = "";
    if (sUsrAg.indexOf("Firefox") > -1) {
         sBrowser = "Mozilla Firefox";
    } else if (sUsrAg.indexOf("Opera") > -1) {
         sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
         sBrowser = "Microsoft Internet Explorer";
    } else if (sUsrAg.indexOf("Edge") > -1) {
         sBrowser = "Microsoft Edge";
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome or Chromium";
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
    } else {
        sBrowser = "unknown";
    }
    return sBrowser;
}
function getOS(){
    const sUsrAg = navigator.userAgent;
    let sOs = "";
    if (sUsrAg.indexOf("Windows") > -1) {
        sOs = "Windows";
   } else if (sUsrAg.indexOf("Linux") > -1) {
        sOs = "Linux";
   } else if (sUsrAg.indexOf("MacOs") > -1) {
        sOs = "iOs";
   } else {
       sBrowser = "unknown";
   }
   return sOs;
}



