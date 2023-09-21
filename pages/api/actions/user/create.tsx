import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../controller/UserController";
import { userRequest } from "@/request/UserRequest";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST') {
        return res.status(403).json({ massage: "Method not allowed" });
    }

    const { name , cpf , email , password } = req.body;
    
    //Vrify request

    const checkRequest = userRequest(email, cpf, password , name);

    if ( checkRequest.status == false) {
        return res.status(403).json( { messege: checkRequest.messege } );
    }

    //create model
    const response =await createUser(email, cpf , password, name);

    return res.status(200).json(response);
}