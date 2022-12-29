const { getMaxListeners } = require("../models/users.model");

const validateEmail = (email)=>{
    if(email.includes('@') && email.includes('.com'))
    return true;
    return false;
}

const validatePassword = (password)=>{
    const specialCharacter = ['@','#','$','%','&','*','!','^','?'];
    let flag = false;
    for(let i= 0;i<specialCharacter.length;i++){
        if(password.includes(specialCharacter[i])){
            flag = true;break;
        }
    }
    if(password.length >= 8 && flag===true)return true;
    return false;
}
let ff = validatePassword("ritik@12");
console.log(ff);