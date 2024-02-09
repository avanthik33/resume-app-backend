const express=require("express")
const usersModel=require("../models/usersModel")
const router=express.Router()
const bcrypt=require("bcryptjs")

const encrypt=async(password)=>{
  const salt=await bcrypt.genSalt(10)
  return bcrypt.hash(password,salt)
}

//signup
router.post("/signup",async(req,res)=>{
  let {data}={"data":req.body}
  let password=data.password
  await encrypt(password).then((hPassword)=>{
    data.password=hPassword
    let userModelObj=new usersModel(data)
    userModelObj.save()
  })
  res.json({status:"success"})
})

module.exports=router