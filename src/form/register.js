import * as Constants from "../constants";

//initLogin();
export function initRegistration(){
    const btn = document.getElementById("btnRegister");
    const regForm = document.getElementById("signUpForm");
    function _isEmailExist(email){
        for (let i = 0; i < Constants.users.length; i++){
            if(Constants.users[i].email === email){
                return true;
            }
        }
        return false;
    }
    const formHelper = {
        login: {
            value: "",
            valid: false,
            checkValidation(){
                const regex = /^[^\.\,]+$/
                this.login.valid = regex.test(this.login.value);
            }
        },
        name: {
            value: "",
            valid: false,
            checkValidation(){
                this.name.valid = this.name.value !==""
            }
        },
        // age: {
        //     value: "",
        //     valid: false,
        //     checkValidation(){
        //         const regex = /^\d+$/
        //         this.age.valid = regex.test(this.age.value);
        //     }
        // },
        email: {
            value: "",
            valid: false,
            checkValidation(){
                const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
                this.email.valid = regex.test(this.email.value) && !_isEmailExist(this.email.value);   
            }
        },
        // city: {
        //     value: "",
        //     valid: false,
        //     checkValidation(){
        //         this.city.valid = this.city.value !==""
        //     }
        // },
        password: {
            value: "",
            valid: false,
            checkValidation(){
                this.password.valid = this.password.value !==""
            }
        },
        passwordRepeat: {
            value: "",
            valid: false,
            checkValidation(){
                this.passwordRepeat.valid = this.password.value === this.passwordRepeat.value
            }
        },
        checkFormValidation() {
            for (const key in this){
                if (typeof this[key] !== "function" && this[key].valid === false){
                    return false;
                }        
            }
            return true;
        },
        
        getValue(){
            return {
                login: this.login.value,
                name: this.name.value,
                // age: this.age.value,
                email: this.email.value,
                // city: this.city.value,
                password: this.password.value,    
            }
        }
    };

    regForm.addEventListener("input", (event) =>{
        const value = event.target.value;
        const name = event.target.name;
    
        formHelper[name].value = value;
        formHelper[name].checkValidation.bind(formHelper)();
        btn.disabled = !formHelper.checkFormValidation();
        handleClassAdding(event.target, formHelper[name].valid)    
    });
    
    function handleClassAdding(domNode, isValid){
        if(isValid){
            domNode.classList.remove(Constants.INVALID_CLASS);
        }else{
            domNode.classList.add(Constants.INVALID_CLASS)
        }
    }
    
    regForm.addEventListener("submit", (event) =>{
        event.preventDefault();
        const cred = formHelper.getValue();
        Constants.users.push(cred);
        localStorage.setItem(Constants.USER_KEY, JSON.stringify({email: cred.email, name: cred.name}));
        window.location.hash = Constants.ROUTE_MAIN;
    });

return {regForm};
}