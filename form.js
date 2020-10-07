const regForm = document.getElementById("signUpForm");
const logInForm = document.getElementById("logInForm");
const btn = document.getElementById("btnRegister");
const INVALID_CLASS = "invalid"; //comment for astrix

let user = {} ;

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
    age: {
        value: "",
        valid: false,
        checkValidation(){
            const regex = /^\d+$/
            this.age.valid = regex.test(this.age.value);
        }
    },
    email: {
        value: "",
        valid: false,
        checkValidation(){
            const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
            this.email.valid = regex.test(this.email.value);   
        }
    },
    city: {
        value: "",
        valid: false,
        checkValidation(){
            this.city.valid = this.city.value !==""
        }
    },
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
            age: this.age.value,
            email: this.email.value,
            city: this.city.value,
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
        domNode.classList.remove(INVALID_CLASS);
    }else{
        domNode.classList.add(INVALID_CLASS)
    }
}

regForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    user = formHelper.getValue();
    console.log(user);
    showLogInForm();
});


const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const errortext = document.getElementById("errorLoginForm");

function onInputHandler(event){
    errortext.classList.remove("error");
    const isValid = event.target.value  !==  "";
    if(isValid){
        event.target.classList.remove("invalid")
    }else{
        event.target.classList.add("invalid");
    }
    if(inputEmail.value === "" || inputPassword.value === ""){
        btnLogin.setAttribute("disabled", "disabled")
    }else{
        btnLogin.removeAttribute("disabled")
    }
}

inputEmail.addEventListener("input", onInputHandler);
inputPassword.addEventListener("input", onInputHandler);

btnLogin.addEventListener("click",function(event){
    event.preventDefault();
    if(inputEmail.value === user.email && inputPassword.value === user.password){
        console.log(user)
        const loginForm = document.getElementById("loginForm");
    }else{
        errortext.classList.add("error");
        // inputEmail.value = "";
        // inputPassword.value = "";
        btnLogin.setAttribute("disabled", "disabled");
    }
})

function showRegForm (){
    regForm.classList.add("active");
    logInForm.classList.remove("active");
    btnSignUp.setAttribute("disabled","disabled");
    btnLogIn.removeAttribute("disabled","disabled")
}
const btnSignUp = document.getElementById("btnSignUp");
const btnLogIn = document.getElementById("btnLogIn");
btnSignUp.addEventListener("click",function(event){
    showRegForm();
});

function showLogInForm(){
    logInForm.classList.add("active");
    regForm.classList.remove("active");
    btnSignUp.removeAttribute("disabled","disabled");
    btnLogIn.setAttribute("disabled","disabled");
}
btnLogIn.addEventListener("click",function(event){
    showLogInForm();
});



