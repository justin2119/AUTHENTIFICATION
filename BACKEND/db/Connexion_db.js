import mongoose from 'mongoose'


const url= "mongodb://localhost/Authentification"
export const connexion=(async ()=>{
    try {
        await mongoose.connect(url)
        console.log("Connexion a la  DB")
    }catch(err){
        console.log(" Erreur de connexion a la DB")
    }
})