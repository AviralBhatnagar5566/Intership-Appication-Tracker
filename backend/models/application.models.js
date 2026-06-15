import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    CompanyName:{
        type:String,
        required:true
    },
    roleposition:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Applied","Interview","Selected","Rejected","Pending"],
        required:true
    },
    applicationlink:{
        type:URL,
    },
    notes:{
        type:String
    }

},{timestamps:true})

export const application = mongoose.model("application",applicationSchema)
