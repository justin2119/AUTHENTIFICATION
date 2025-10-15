
import {User} from "../models/Authmodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


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
           let token = jwt.sign({user}, process.env.secretkey, {expiresIn: "24H"})
           return res.status(200).json({token:token})
       })

}