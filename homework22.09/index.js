function show_password(selector, img) {
    // get elements
    const TARGET = document.querySelector(selector)
    const IMAGE = document.querySelector(img);
    // best way
    if(TARGET.type === "password") {
        // show password
        TARGET.type = "text";
        IMAGE.src = "img/Group_2.png"
    } 
    else {
        // hide password
        TARGET.type = "password";
        IMAGE.src = "img/Group.png"
    }
  }

const getUserRole = (element)=>{
    const ACTIVE_ELEMENT = element.querySelector(".active")
    const DATA = ACTIVE_ELEMENT.getAttribute('data-role')
    return DATA
}

const getLastUser = (element) => {
    const VALUE = element.value
    if(VALUE.length >= 3){
        return VALUE
    }
    else {
        alert('Last Name is too short.')
        return false
    }
}

const getNameUser = (element) => {
    const VALUE = element.value
    if(VALUE.length >= 3){
        return VALUE
    }
    else {
        alert('First Name is too short.')
        return false
    }
}

const getEmailUser = (element) => {
    const VALUE = element.value
    return VALUE
}

const getPasswordUser = (password,scnd_password) => {
    // get passwords
    const VALUE1 = password.value
    const VALUE2 = scnd_password.value
    // return password if passwords match
    if(VALUE1 == VALUE2){
        return VALUE1
    }
    else {
        alert('Passwords don`t match.')
        return false
    }
}


// start point
document.addEventListener("DOMContentLoaded", ()=>{
    // get element from document
    const LEFT_BLOCK = document.querySelector(".form__top_LFor_Lblock")
    const RIGHT_BLOCK = document.querySelector(".form__top_LFor_Rblock")
    const LF_BLOCK = document.querySelector(".form__top_LFor")
    const CHECKBOX = document.querySelector(".form__input_checkbox")
    const SUMBIT = document.querySelector(".form__input_sumbit")
    const REGISTER_FORM = document.querySelector(".form")
    const INPUT_LAST_NAME = document.querySelector('.form__input_second_name')
    const INPUT_NAME = document.querySelector('.form__input_first_name')
    const INPUT_EMAIL = document.querySelector('.form__input_email')
    const INPUT_PASSWORD = document.querySelector('.form__input_password')
    const INPUT_PASSWORD_REPEAT = document.querySelector('.form__input_password_repeat')
    // switch user role
    LF_BLOCK.addEventListener("click", ()=>{
        LEFT_BLOCK.classList.toggle('active')
        RIGHT_BLOCK.classList.toggle('active')
    })    
    CHECKBOX.addEventListener("click", ()=>{
        const CHECKBOX_VALUE = CHECKBOX.checked
        CHECKBOX_VALUE ? SUMBIT.disabled = !CHECKBOX_VALUE : SUMBIT.disabled = !CHECKBOX_VALUE
        console.log(CHECKBOX_VALUE)
    })
    // submit form
    REGISTER_FORM.addEventListener("submit", (e)=>{
        e.preventDefault()
        let role = getUserRole(LF_BLOCK)
        let lastUserName = getLastUser(INPUT_LAST_NAME)
        if(lastUserName){
            return 
        }
        let UserName = getNameUser(INPUT_NAME)
        if(lastUserName){
            return 
        }
        let UserPassword = getPasswordUser(INPUT_PASSWORD,INPUT_PASSWORD_REPEAT)
        if(lastUserName){
            return 
        }
        let UserEmail = getEmailUser(INPUT_EMAIL)
        // create data frame
        const USER_DATA = {
            role,
            UserName,
            lastUserName,
            UserEmail,
            UserPassword
        }
        console.log('USER DATA:', USER_DATA)
    })
})