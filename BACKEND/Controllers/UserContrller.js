import bcrypt, { hash, compare } from 'bcryptjs'
import {User} from "../models/Authmodel.js";
import jwt from "jsonwebtoken";
const secret= process.env.secret
// Ajouts d'utillisateur.
export const Inscriptions= async (req, res) => {
    const{nom,prenom,email,password,confirm_password} = req.body;
    const dataUser = await User.findOne({email})
    if(dataUser){
        res.status(400).json({message: "Vous avez deja un comptes "})
    }else if (password===confirm_password){
        await User.create(
            {
                nom : req.body.nom,
                prenom:req.body.prenom,
                email:req.body.email,
                password:bcrypt.hashSync(req.body.password,10),
                confirm_password:bcrypt.hashSync(req.body.confirm_password,10),
            }
        )
        res.json({nom,prenom,email,password,confirm_password});
    }else{
        res.json({message:"Verifier les mots de passe"})
    }
}
// Connexion au service
export const Connexion= async (req, res) => {
    const dataUser = await User.findOne({email:req.body.email})
        .then(user=>{
            if(!user){
                return res.status(404).json({message:"Utilisateur non trouver"})
            }
            let passwordIsValid=bcrypt.compareSync(req.body.password, user.password);
            if(!passwordIsValid){
                return res.status(404).json({message:"Mots de  passe incorrect"})
            }
            let token=jwt.sign({id:user._id},secret,passwordIsValid,{
                expiresIn: 86400
            });
            res.json({token:token})
        })
        .catch(err=>{
            res.status(500).json({message:"Erreur"})
        })
}

// Liste Utlisateurs
export const Users= async (req, res) => {
    const users= await User.find()
    res.status(200).json(users)
}