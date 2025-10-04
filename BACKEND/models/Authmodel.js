import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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
