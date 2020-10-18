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
                <span>$</span>
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

    // let users = [
    //     {
    //        id:0,
    //        name:"Misha",
    //        company:"NRM",
    //        email:"Misha@gmail.com",
    //        phone:+375298375723,
    //        balance: 4,
    //        isActive:true,
    //        gender:"male"
           
    //     },
    //     {
    //         id:1,
    //         name:"Masha",
    //         company:"Pora",
    //         email:"Masha@gmail.com",
    //         phone:+375294565723,
    //         balance: 7,
    //         isActive:false,
    //         gender:"female"
            
    //      },
    //      {
    //         id:2,
    //         name:"Ivan",
    //         company:"Ivan+",
    //         email:"Ivan@gmail.com",
    //         phone:+375298375098,
    //         balance: 3,
    //         isActive:true,
    //         gender:"male"
            
    //      },
    //      {
    //         id:3,
    //         name:"Kate",
    //         company:"Mars",
    //         email:"Kate@gmail.com",
    //         phone:+375292345723,
    //         balance: 5,
    //         isActive:false,
    //         gender:"female"
            
    //      },
    //      {
    //         id:4,
    //         name:"Oleg",
    //         company:"Kote",
    //         email:"Oleg@gmail.com",
    //         phone:+375291275723,
    //         balance: 2,
    //         isActive:true,
    //         gender:"male"
            
    //      },
    // ]


    export function initClients(){
        ROOT_NODE.innerHTML = template;
        fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json")
            .then((response)=>{
                return response.json();
            })
            .then((users)=>{createUsersTab(users)
            })
    }