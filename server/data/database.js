import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Placement"
    }).then(()=>console.log(`The database is connected at ${mongoose.connection.host}`))
    .catch((e)=>console.log(e))
}