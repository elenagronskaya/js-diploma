import {createUserRow} from "./client";

export function createUsersTab(users, showAmountsOnly){
    let genderMaleAmount = 0;
    let genderFemaleAmount = 0;
    let maxUsersBalance = 0;

    for(let i = 0; i < users.length; i++){
        if(users[i].gender === "male"){
            genderMaleAmount = genderMaleAmount + 1
        };
        if(users[i].gender === "female"){
            genderFemaleAmount = genderFemaleAmount + 1
        };
        if(users[i].balance.toNumber() > maxUsersBalance){
           maxUsersBalance = users[i].balance.toNumber()
        };

        if (!showAmountsOnly){
            createUserRow(users[i], users);
        }
    }

    const spanFemaleAmount = document.getElementById("femaleAmount");
    spanFemaleAmount.innerText = genderFemaleAmount;

    const spanMaleAmount = document.getElementById("maleAmount");
    spanMaleAmount.innerText = genderMaleAmount;

    const spanBiggestBalance = document.getElementById("BiggestBalance");
    spanBiggestBalance.innerText = maxUsersBalance.toCurrency();

}

String.prototype.toNumber = function(){
    return Number(this.replace(/[^0-9\.]+/g,""));
}

Number.prototype.toCurrency = function(){
 const options = { style: "currency", currency: "USD" };
 return this.toLocaleString("en-US", options);
}

