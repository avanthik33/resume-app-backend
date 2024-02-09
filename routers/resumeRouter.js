const express=require("express")
const resumeModel=require("../models/resumeModel")
const router=express.Router()

router.post("/addresume",async(req,res)=>{
  let {data}={"data":req.body}
  const resumeModelObj=new resumeModel(data)
  const result=await resumeModelObj.save()
  res.json({status:"success"})
})

router.post("/viewresume",async(req,res)=>{
  let data=await resumeModel.find().populate("userId","userName -_id").exec()
  res.json(data)
})

module.exports=router