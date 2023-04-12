import mongoose from "mongoose";

const placed=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    profiles:{
        type:Array(JSON),
        required:true
    },year:{
        type:Array(JSON)
    },
    duration:{
        type:Array(JSON),
    },
       selectionProcedure:{
        type:Array(JSON),
    },
    college:{
        type:String,
        required:true
    },
    paid:{
        type:Boolean,
        default:false
    },
    incentives:{
        type:Array(JSON),
    },
    applicableCollege:{
        type:Array(JSON),
        required:true
    },
    department:{
        type:Array(JSON),
        required:true
    },
    compensation:{
        type:Array(JSON),
        required:true
    },
    lastDate:{
        type:String
    },
    applicationForm:{
        type:String
    }
})


export const Placement=mongoose.model("Placement",placed)