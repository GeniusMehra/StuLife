import jwt from 'jsonwebtoken'

export const sendToken=async(res,user,statusCode,message)=>{
    const token= user.getJWT()
        res.status(statusCode)
        .cookie("token",token,{
            httpOnly:true,
            expires:new Date(Date.now() + 1000*60*60)
        })
        .json({
            success:true,
            message:message,
            user:user
        })
}