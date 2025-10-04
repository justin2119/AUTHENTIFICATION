import express from "express";
import {Inscriptions} from "../Controllers/Inscription.js";
import {VerifyInscription} from "../Middliware/Inscriptionverify.js";
import {Connexion} from "../Controllers/Connexion.js";
const routes = express.Router();

routes.post("/inscription",VerifyInscription,Inscriptions)
routes.post("/connexion",Connexion)






export default routes;