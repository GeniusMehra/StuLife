import { User } from "../models/users.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated=async(req,res,next)=>{
    try {
        const {token}=req.cookies;
    if(!token){
        return res.status(404)
        .json({
            success:false,
            message:"First Login"
        })
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const _id = decoded._id
    const user = await User.findOne({_id})
    req.user = user
    next();
    } catch (error) {
        res.status(404)
        .json({
            success:false,
            message:error.message
        })
    }
}