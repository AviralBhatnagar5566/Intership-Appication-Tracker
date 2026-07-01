import { asyncHandler } from "../utils/asyncHandler.js";
import { APIresponse } from "../utils/APIresponse.js";
import { APIerror } from "../utils/APIerror.js";
import { User } from "../models/user.models.js";

const registerUser = asyncHandler(async(req,res) =>{
    const {username,email,password,DOB} = req.body

    if(!username||!username.trim()){
        throw new APIerror(400,"Username is required")
    }
    if(!email||!email.trim()){
        throw new APIerror(400,"Email is required")
    }
    if(!email.includes("@")){
        throw new APIerror(400,"Needs a correct Email")
    }
    if(!password){
        throw new APIerror(400,"Password is required")
    }
    if(!DOB){
        throw new APIerror(400,"Date of birth Required")
    }

    const existedUser = await User.findOne({
        $or:[ {username}, {email} ]
    })
    if(existedUser){
        throw new APIerror(400,"User alraedy Existed")
    }

    const user = await User.create({
        username,
        email,
        password,
        DOB
    })
    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if(!createdUser){
        throw new APIerror(500,"Something went wrong")
    }

    return res.status(201).json(
        new APIresponse(201,createdUser,"User succesfully registered")
    )
})

export { registerUser }