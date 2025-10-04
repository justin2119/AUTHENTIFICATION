
 import jwt from "jsonwebtoken";
export const VerificationToken=async(req, res,next) => {
    const authHarder=req.headers["authorization"];
    const token= authHarder && authHarder.split(" ")[1];
    if(!token){
        res.status(403).json({error:"No token provided"});
    }
    jwt.verify(token,process.env.secretkey,(err,user) => {
        if(err){
            res.status(403).json({error:"Invalid token"});
        }
        req.user=user;
        next();
    })
}