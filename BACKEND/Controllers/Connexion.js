
import {User} from "../models/Authmodel.js";
import bcrypt from "bcryptjs";
import {MakeToken} from "../Middliware/MakeToken.js";


export const Connexion= async (req, res) => {
   const {email, password} = req.body;
   await User.findOne({email})
       .then(user => {
           if (!user) {
               return res.status(400).send("Pas de compte")
           }
           let pwd = bcrypt.compareSync(password, user.password)
           if (!pwd) {
               res.status(400).send("Mot de pass incorrect")
           }
          let token= MakeToken(user)
           return res.status(200).json({user:user})
       })

}