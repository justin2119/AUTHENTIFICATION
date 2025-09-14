import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirm_password: {
        type: String,
        required: true,
    }


})

export const User = mongoose.model("User", UserSchema);
