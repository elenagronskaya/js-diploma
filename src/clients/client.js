import{ createUsersTab} from "./createClientsTab";
function createDeleteButton(user, userDiv, users){
    const deleteButtonDiv = document.createElement("div");
    deleteButtonDiv.classList.add("deleteColumn")
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText ="delete";
    userDiv.insertBefore(deleteButtonDiv, userDiv.firstChild);
    deleteButtonDiv.append(deleteButton);
    deleteButton.addEventListener("click", function (event){
         console.log(user);
        deleteUsersHandlerInt(user, users);
    });
}

function getUserColumnTemplate(user)
{
    const isActive = user.isActive ? " active" : "";
    const template = 
    `<div class="column-names row${isActive}" id="userid${user.id}">
        <div class="column-names__name">${user.name}</div>
        <div class="column-names__company">${user.company}</div>
        <div class="column-names__email">${user.email}</div>
        <div class="column-names__phone">${user.phone}</div>
        <div class="column-names__balance">${user.balance}$</div>
    </div>`; 
    return template;
}

export function createUserRow(user, users){
        const userTable = document.getElementById("userTable");
        const template = getUserColumnTemplate(user);
        const domParser = new DOMParser();
        const userColumns = domParser.parseFromString(template, "text/html");
        const userDiv = userColumns.body.firstChild;
        userTable.append(userDiv);
        
        createDeleteButton(user, userDiv, users)
}

function deleteUsersHandlerInt(user, users){
    const indexToDelete = users.findIndex(element => element.id === user.id);
    users.splice(indexToDelete, 1);
    createUsersTab(users, true);
    let userDiv = document.getElementById(`userid${user.id}`);
    userDiv.remove();

}

