import {User} from "../models/Authmodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const Inscriptions = async (req, res) => {
    const {password, confirm_password} = req.body;
    if (password !== confirm_password) {
        res.json({message: "Les mots de passe sont pas indentique"})
    } else {
        const user = await User.create({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            confirm_password: bcrypt.hashSync(req.body.confirm_password, 10),
        })
        res.json({message:" Inscription reuissi"})
    }

}