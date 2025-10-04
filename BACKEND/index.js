import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connexion} from "./db/Connexion_db.js";
import routes from "./Routes/UserRoutes.js";
dotenv.config();
const corsAuth={
    origin:['http://localhost:5173'],
}
const app = express();
connexion().then();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors(corsAuth));
app.use(routes)

app.listen(3000,()=>console.log('Le serveur est demarer sur le port 3000'));