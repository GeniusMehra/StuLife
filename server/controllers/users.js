import { User } from "../models/users.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendToken } from "../utils/sendToken.js";

export const newUser=async(req,res)=>{
    try {
        const {name,email,college,department,password}=req.body;
    if(!name || !email || !password || !college || !department){
        return res.status(404)
        .json({
            success:false,
            message:"Pass all required values"
        })
    }

    let user = await User.findOne({email})
    if(user){
        return res.status(404)
        .json({
            success:false,
            message:"User already exists"
        })
    }
    
    user = await User.create({
        name:name,
        email:email,
        college:college,
        department:department,
        password:password
    })
sendToken(res,user,200,"Working Fine")
    } catch (error) {
      res.status(404)  
      .json({
        success:false,
        message:error.message
      })
    }
}


export const login=async(req,res)=>{
    const {email,password} = req.body;
    let user= await User.findOne({email}).select("+password")
    if(!user){
        return res.status(404)
        .json({
            success:false,
            message:"SignUp First"
        })
    }

    const isMatch= user.compare(password)
    if(!isMatch){
        return res.status(404)
        .json({
            success:false,
            message:"Wrong Password"
        })
    }

    user.password=password
    user.save()
    sendToken(res,user,200,"Logged in")
}