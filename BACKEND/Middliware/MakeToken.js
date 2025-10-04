import jwt from "jsonwebtoken";
import {Token} from "../models/Token.js";

export function MakeToken(user) {
    const tokensign = jwt.sign({user}, process.env.secretkey, {expiresIn: "24H"})
    return Token.create({
        id: user._id,
        token: tokensign,
        expiresIn: "24H"
    });
}