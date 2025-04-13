const express=require('express');
const mongoose=require('mongoose');
const usermodel=require('../models/todolist');
const router=express.Router();

router.get('/home',(req,res)=>{
    res.send({message:"Welcome to the Todo API"});
})

router.post('/', async(req,res)=>{
    const {title,description}=req.body;
    const todo=await usermodel.create({title,description});
    res.status(200).send(todo);
})

router.get('/get',async(req,res)=>{
    const todo =await usermodel.find();
    res.status(200).json(todo);
})

router.get('/get/:id',async(req,res)=>{
    const id=req.params.id;
    const todo =await usermodel.findOne({_id:id});
    res.status(200).json(todo);
})

router.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    const todo=await usermodel.deleteOne({_id:id});
    res.status(200).json(todo);
})

module.exports=router;
