import jwt from 'jsonwebtoken'




export const verifyToken = async (req, res,next) => {
    let token = req.headers['x-auth-token']
    if (!token) {
        token=req.headers["authorization"]
        if (!token) {
            res.status(401).json({message:"Aucun Token fourni"})
        }
        token=token.split(' ')[1]
    }
    jwt.verify(token,process.env.secret,(err,result)=>{
        if(err){
            res.status(401).json({message:"Non autoriser"})
        }
    })
    next()
}