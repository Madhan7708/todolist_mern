const express=require('express');
const app=express();
const todoRouter=require('./routes/todo');
app.use('/todo',todoRouter);


app.listen(3000,()=>{
    console.log("server is running at 3000");
})