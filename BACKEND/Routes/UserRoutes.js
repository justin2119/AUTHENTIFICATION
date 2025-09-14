import express from "express";
import {Connexion, Inscriptions, Users} from "../Controllers/UserContrller.js";
const routes = express.Router();

routes.post("/login",Inscriptions)
routes.post("/signup",Connexion)
routes.get("/users",Users)




export default routes;