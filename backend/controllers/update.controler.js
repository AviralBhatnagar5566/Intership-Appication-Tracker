import { asyncHandler } from "../utils/asyncHandler";
import { APIerror } from "../utils/APIerror";
import { APIresponse } from "../utils/APIresponse";
import { Application } from "../models/application.models";


const updateApplication = asyncHandler(async(req,res,next) =>{
    const { id } = req.params
    const { CompanyName,roleposition,date,status,applicationlink,notes } = req.body

    const application = await Application.findByIdAndUpdate(id,
        { CompanyName,roleposition,date,status,applicationlink,notes },
        { new: true, runValidators: true }
    )
    if(!application){
    throw new APIerror(404,"Application not found")
    }
    return res.status(202).json(
        new APIresponse(202,"Data is updated")
)
})

export { updateApplication }