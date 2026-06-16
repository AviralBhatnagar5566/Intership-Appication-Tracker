import { asyncHandler } from "../utils/asyncHandler.js";
import { APIerror } from "../utils/APIerror.js";
import { APIresponse } from "../utils/APIresponse.js";
import { Application } from "../models/application.models.js";


const applicationform = asyncHandler(async (req,res,next) =>{ 
    const{CompanyName,roleposition,date,status,applicationlink,notes} = req.body
    if(!CompanyName||!CompanyName.trim()){
        throw new APIerror(401,"Name required")
    }
    if(!roleposition||!CompanyName.trim()){
        throw new APIerror(401,"Roleandposition required")
    }
    if(!date){
        throw new APIerror(401,"date required")
    }
    if(!status){
        throw new APIerror(401,"Status required")
    }

    const application = await Application.create({
    CompanyName,
    roleposition,
    date,
    status,
    applicationlink,
    notes
})
const createdApplication = await Application.findById(user._id)
     if(!createdApplication){
        throw new APIerror(500,"Something Went Wrong")
    }
    return res.status(201).json(
        new APIresponse(200,createdApplication,"APPLICATION SUBMITTED SUCCESSFULLY")
    )

})



export { applicationform }