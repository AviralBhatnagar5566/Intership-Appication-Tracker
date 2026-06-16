import { APIerror } from "../utils/APIerror.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Application } from "../models/application.models.js";
import { APIresponse } from "../utils/APIresponse.js";


const applications = asyncHandler(async(req,res,next) =>{
    const application = await Application.find()

    return res.status(200).json(
        new APIresponse(200,application,"APPLICATION FOUND")
    )
})


export { applications }