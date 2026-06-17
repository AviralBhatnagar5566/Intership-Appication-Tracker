import { asyncHandler } from "../utils/asyncHandler";
import { APIerror } from "../utils/APIerror";
import { connectData } from "../DB/index.db";
import { Application } from "../models/application.models";
import { APIresponse } from "../utils/APIresponse";


const deleteApplication = asyncHandler(async(req,res,next) =>{
    const { id } = req.body

    const deleteApplication = await  Application.findByIdAndDelete()

    if(!deleteApplication){
        throw new APIerror(404,"Data not found")
    }
    return res.status(200).json(
        new APIresponse(200,"data is deleted")
    )
}) 

export { deleteApplication }