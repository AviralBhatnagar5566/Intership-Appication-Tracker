import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { router } from "../router/application.router.js";
dotenv.config({
    path:"./.env"
})

const app = express()
app.use(cors({
    origin:process.env.CORS,
    credential:true
}))
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import { Router } from "express"
app.use("/api/v1/user",router)
export { app }