import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

dotenv.config({
    path:"./.env"
})

const app = express()
const allowedOrigins = process.env.CORS.split(",");

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}
));

app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import { router } from "../router/application.router.js";
app.use("/api/v1/application",router)
export { app }