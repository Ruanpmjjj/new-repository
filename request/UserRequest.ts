import { isEmail , checkMinAndMaxLength } from "./check";

export function userRequest(_email:any, _cpf:any, _password:any, _name:any) {
    if (!checkMinAndMaxLength(_cpf, 11 , 14)) {
        return {status: false, messege: "Invalid CPF" }
    }

    if ( !checkMinAndMaxLength(_password, 6,32)) {
        return { status: false, messege: "Invalid Password"}
    }

    if ( !checkMinAndMaxLength(_name, 3,32)&& _name != undefined) {
        return { status: false, messege: "Invalid Email"}
    }

    if (!isEmail(_email)) {
        return {status: false, messege: "Invalid Email"}
    }

    return {status:true}
}