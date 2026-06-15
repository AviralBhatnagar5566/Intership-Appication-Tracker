import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config({
    path:"./.env"
})
const connectData = async () =>{
    try {
        const connectInstance = mongoose.connect(`${process.env.MONGO_DB_URL}`)
    } catch (error) {
        console.log("Error:",error);
        process.exit(1)
    }
}
export { connectData }