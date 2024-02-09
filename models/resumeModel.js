const mongoose=require("mongoose")

const resumeModel=new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"usersCollection",
    required:true
  },
  name:{
    type:String,
    required:true
  },
  phoneNo:{
    type:String,
    required:true
  },
  email:{
  type:String,
  required:true
  },
  qualification:{
    type:String,
    required:true
  },
  skills:{
    type:String,
    required:true
  },
  experience:{
    type:String,
    required:true
  }
})

module.exports=mongoose.model("resumeCollection",resumeModel)