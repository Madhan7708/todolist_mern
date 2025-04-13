const express=require('express');
const mongoose=require('mongoose');
const usermodel=require('../models/todolist');
const router=express.Router();

router.get('/home',(req,res)=>{
    res.send({message:"Welcome to the Todo API"});
})


router.post('/', async(req,res)=>{
    const {title,description}=req.body;
    const todo=await usermodel({title,description});
    res.send(todo);
})


module.exports=router;
