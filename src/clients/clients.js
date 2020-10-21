import { ROOT_NODE } from "../constants";
import "./clients.scss";
import {createUsersTab} from "./createClientsTab";


const template = `
<div class="quantity">
        <div class="genderContainer">
            <div class="genderFemale" id="userFemale">Female:
                <span id="femaleAmount"></span>
            </div>
            <div class="genderMale" id="userMale">Male:
                <span id="maleAmount"></span>
            </div>
        </div>
        <div class="balanceContainer">
            <div class="balance" id="userBalance">The biggest balance:
                <spam id="BiggestBalance"></spam>
            </div>
        </div>
    </div>
    <div id="userTable" class="container">
        <div class="header">
            <div class="deleteHeader"></div>
            <div class="name">Name</div>
            <div class="company">Company</div>
            <div class="email">Email</div>
            <div class="phone">Phone</div>
            <div class="balance">Balance</div>
        </div>
</div>`
  

export const initClients = async () =>{
    ROOT_NODE.innerHTML = template;
    try {
        const response = await fetch("https://raw.githubusercontent.com/elenagronskaya/js-diploma/master/db.json");
        const users = await response.json();
        createUsersTab(users);
    }catch(error){}   
}

// export function initClients(){
//     ROOT_NODE.innerHTML = template;
//     fetch("https://raw.githubusercontent.com/elenagronskaya/js-diploma/master/db.json")
//     .then((response)=>{
//         return response.json();
//     })
//     .then((users)=>{createUsersTab(users)
//     })
// }