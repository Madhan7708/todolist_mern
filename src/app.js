const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
const todoRouter=require('./routes/todo');
app.use('/todo',todoRouter);


mongoose.connect('mongodb://localhost:27017/crud').then(()=>{
    app.listen(3000,()=>{
        console.log("server is running at 3000 and db connected");
    })
})
.catch((err)=>{
    console.log(err);
})
