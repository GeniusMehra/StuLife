import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    }, department:{
        type:String,
        required:true
    },
    password:{
        type:String,
        select:false,
        required:true,
        minlength:[8,"Password should at least be 8 characters"]
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }
})

UserSchema.methods.getJWT=function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:1000*60*60
    })
}

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    const salt= await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

UserSchema.methods.compare=async function(password){
return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",UserSchema)