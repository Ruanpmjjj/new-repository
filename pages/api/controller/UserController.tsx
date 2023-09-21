import { createUserModel, findUserByModelcpf, findUserByModelEmail } from '../model/User';

export async function createUser(_email:string , _cpf:string , _password:string , _name?:string) {
    const userByCpf = await findUserByModelEmail(_cpf);

    if (userByCpf != undefined) {
        return {message: "CPF already registered"}
    }

    const userByEmail = await findUserByModelEmail(_email);

    if (userByEmail != undefined) {
        return {message: "Email already registered."};
    }

    const response = await createUserModel(_cpf, _email, _password, _name);
    return response;
}