const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema({
  task :  {
           type : String,
           require: true
    },
    done :{
      type:Boolean,
      default:false
    }
})

module.exports=mongoose.model("ToDo",todoSchema)