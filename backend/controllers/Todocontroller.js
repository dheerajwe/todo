const ToDomodel=require("../models/Todomodels");

module.exports.getToDO = async(req,res)=>{
    ToDomodel.find()
    .then((data)=>{
        res.send(data);
    });
}

module.exports.postToDO = async(req,res)=>{
    const task=req.body.task;
   
    ToDomodel.create({task})
    .then((data)=>{
        console.log("Added Succesfully..");
        console.log(data);
        res.send(data);
    })


}

module.exports.ChangeToDO = async(req,res)=>{
    const {id}=req.params;
   
    ToDomodel.findByIdAndUpdate(id,{done:true})
    .then((data)=>{
        res.send(data);
    }
    )

}

module.exports.DeleteToDO = async(req,res)=>{
    const {id}=req.params;
   
    ToDomodel.findByIdAndDelete(id)
    .then((data)=>{
        res.send(data);
    }
    )


}