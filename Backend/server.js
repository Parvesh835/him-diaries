import app from './app.js';
import dotenv from "dotenv"
import {db} from "./Config/db.js";

dotenv.config();

db();

app.listen(process.env.PORT, () => {

    console.log(`server Running at ${process.env.PORT}`);

});