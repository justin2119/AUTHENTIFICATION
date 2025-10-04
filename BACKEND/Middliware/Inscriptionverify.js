import {User} from "../models/Authmodel.js";

export const VerifyInscription= async (req,res,next)=>{
    const{email} = req.body;
    await User.findOne({email:email})
        .then((user)=> {
            if (user) {
                res.status(401).json({message: " Vous avez deja un compte"})
            }else{
                next()
            }

        })
}