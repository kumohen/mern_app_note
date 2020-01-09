const express = require("express");
const mongoose = require("mongoose");
const bodyParser =   require("body-parser");
const cors = require("cors");
const Todo = require("./model/item");

const app = express();


mongoose.connect("mongodb://mahen:12345a@ds147070.mlab.com:47070/todos_react_redux",
            {  useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false })
        .then(()=> { console.log("mongodb is connetced") }).catch(err => console.log())

app.use(cors());
app.use(bodyParser.json({type:'*/*'}));     


app.get("/get_todo",(req,res,next)=>{
    Todo.find({},function(err,todos){
        if(todos){
            res.status(200).json(todos)
        }else{
            return res.status(404).json({msg:"something go worng"})
        }
    })
})

app.post("/add_item",(req,res,next)=>{
    const text = req.body.text;
   if(!text ){
        return res.send("please add your email or password");
    }
    const todo = new Todo({
        text
    })
   todo.save((err)=>{
       if(err) {return next(err)};
       res.json(todo)
   })
})        


app.delete("/delete_item/:id",(req,res)=>{
    Todo.findByIdAndRemove({_id:req.params.id},function(err){
        if (err) console.log(err);
        res.json("item  is deletd")
    })
})  


app.listen(4000,()=>{
    console.log("everything is runinng.......");
})

//mongodb://<dbuser>:<dbpassword>@ds147070.mlab.com:47070/todos_react_redux