import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})

const connectData = async () =>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}`)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Error:",error);
        process.exit(1)
    }
}
export { connectData }