import mongoose from "mongoose"

const connectData = async () =>{
    try {
        connectInstance = mongoose.connect(`${process.env.MONGO_DB_URL}`)
    } catch (error) {
        console.log("Error:",error);
        process.exit(1)
    }
}
export { connectData }