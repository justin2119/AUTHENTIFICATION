import express from "express";
import {Connexion, Inscriptions, Users} from "../Controllers/UserContrller.js";
import {verifyToken} from "../middleware/authJWT.js";
const routes = express.Router();

routes.post("/login",Inscriptions)
routes.post("/signup",verifyToken,Connexion)
routes.get("/users",Users)




export default routes;