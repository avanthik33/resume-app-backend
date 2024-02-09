const express=require("express")
const resumeModel=require("../models/resumeModel")
const router=express.Router()

router.post("/addresume",async(req,res)=>{
  let {data}={"data":req.body}
  const resumeModelObj=new resumeModel(data)
  const result=await resumeModelObj.save()
  res.json({status:"success"})
})

module.exports=router