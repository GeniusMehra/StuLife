import { Placement, } from "../models/placements.js"

export const getAll=async(req,res)=>{
    try {
        const placements=await Placement.find()
        res.status(200)
    .json({
        success:(placements.length)?true:false,
        message:(placements.length)?"SUccess":"Failed",
        placements:(placements.length)?placements:"No placements",
    })
    } catch (error) {
      res.status(404)  
      .json({
        success:false,
        message:error.message
      })
    }
}


export const createNew=async(req,res)=>{
try {
    const {title,description,profiles,year,duration,selectionProcedure,college,paid,incentives,
    applicableCollege,department,compensation,lastDate,applicationForm}=req.body;
if(!title || !description || !college || !applicableCollege || !department ){
    return res.status(404)
    .json({
        success:false,
        message:"Please give all the details"
    })
}
const placement= await Placement.create({
    title:title,
    description:description,
    profiles:profiles,
    year:year,
    duration:duration,
    selectionProcedure:selectionProcedure,
    college:college,
    paid:paid,
    incentives:incentives,
    applicableCollege:applicableCollege,
    department:department,
    compensation:compensation,
    lastDate:lastDate,
    applicationForm:applicationForm
})
res.status(200)
.json({
    success:true,
    message:"Placement has been added successfully",
    placement:placement
})
} catch (error) {
  res.status(404)  
  .json({
    success:false,
    message:error.message
  })
}
}

export const getByCollege=async(req,res)=>{
    try{const {college}=req.query;
    let placements=await Placement.find({college:{$in:[college]}});
    res.status(200)
    .json({
        success:(placements.length)?true:false,
        message:(placements.length)?"SUccess":"Failed",
        placements:(placements.length)?placements:"No placements",
        h:placements,
    })}
    catch(error){
        res.status(404)
        .json({
            success:false,
            message:error.message
        })
    }
}

export const getByDepartment=async(req,res)=>{
    try{const {department}=req.query;
    let placements=await Placement.find({department:{$in:[{id:department}]}});
    res.status(200)
    .json({
        success:(placements.length)?true:false,
        message:(placements.length)?"SUccess":"Failed",
        placements:(placements.length)?placements:"No placements",
    })}
    catch(error){
        res.status(404)
        .json({
            success:false,
            message:error.message
        })
    }
}


export const getByCollegeAndDepartment=async(req,res)=>{
    try{const {college,department}=req.query;
    let placements=await Placement.find({applicableCollege:{$in:[{"id":college},]}, department:{$in:[{"id":department}]}});
    res.status(200)
    .json({
        success:(placements.length)?true:false,
        message:(placements.length)?"SUccess":"Failed",
        placements:placements,
    })}
    catch(error){
        res.status(404)
        .json({
            success:false,
            message:error.message
        })
    }
}

export const getByCollegeAndDepartmentEarlier=async(req,res)=>{
    try{ const {college,department}=req.user;
    console.log(college)
    console.log(department)
    let placements=await Placement.find({applicableCollege:{$in:[{"id":college},{"id":"open"}]}, department:{$in:[{"id":department},{"id":"open"}]}});

    res.status(200)
    .json({
        success:(placements.length)?true:false,
        message:(placements.length)?"SUccess":"Failed",
        placements:(placements.length)?placements:"No placements",
    })}
    catch(error){
        res.status(404)
        .json({
            success:false,
            message:error.message
        })
    }
}