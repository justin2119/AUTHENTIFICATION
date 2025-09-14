import {User} from "../models/Authmodel.js";
// Ajouts d'utillisateur.
export const Inscriptions= async (req, res) => {
    const{nom,prenom,email,password,confirm_password} = req.body;
    const dataUser = await User.findOne({email})
    if(dataUser){
        res.status(400).json({message: "Vous avez deja un comptes "})
    }else if (password===confirm_password){
        await User.create(req.body)
        res.json({nom,prenom,email,password,confirm_password});
    }else{
        res.json({message:"Verifier les mots de passe"})
    }
}
// Connexion au service
export const Connexion= async (req, res) => {
    const{email,password}=req.body;
    const dataUser = await User.findOne({$and:[{email},{password}]})
    if(dataUser){
        res.status(200).json({"Connexion reuisit ":dataUser})
    }else{
        res.status(400).json({message:"Veuillez vous inscrire"})
    }
}

// Liste Utlisateurs
export const Users= async (req, res) => {
    const users= await User.find()
    res.status(200).json(users)
}