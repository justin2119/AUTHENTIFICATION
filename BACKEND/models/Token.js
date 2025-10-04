import mongoose from "mongoose"

const TokenSchema = new mongoose.Schema({
   token: String,
    id: String,
    expirationDate:Date,
})

export const Token = mongoose.model("Token", TokenSchema);