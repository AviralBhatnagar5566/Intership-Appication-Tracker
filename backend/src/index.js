import express from "express"
import dotenv from "dotenv"
import { connectData } from "../DB/index.db.js"
import { app } from "./app.js";


dotenv.config({
    path:"./.env"
})
connectData()
.then(() => {
    app.listen(process.env.PORT||1000, () => {
        console.log(`Server is running on: ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("ERROR DATABASE IS NOT CONNECTED",error);
    
});
