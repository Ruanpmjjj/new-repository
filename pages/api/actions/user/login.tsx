import { NextApiRequest,  NextApiResponse } from "next";
import {login} from '../../controller/UserController';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST') {
        return res.status(403).json({ massage: "Method not allowed" });
    }

    const { email , password } = req.body;

    //create model
    const response =await login(email, password);

    if ( response.message != undefined) {
        return res.status(403).json(response);
    }

    return res.status(200).json(response);
}