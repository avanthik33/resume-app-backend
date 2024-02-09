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


//signin
router.post("/signin",async(req,res)=>{
  let email=req.body.email
  let inputPassword=req.body.password
  let data=await usersModel.findOne({email:email})
  if(!data){
    return(
      res.json({status:"no user"})
    )
  }
  let dbPassword=data.password
  let match=await bcrypt.compare(inputPassword,dbPassword)
  if(!match){
    return(
      res.json({status:"incorrect password"})
    )
  }
  res.json({status:"success"})
})


module.exports=router