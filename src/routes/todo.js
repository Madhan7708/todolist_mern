const express=require('express');
const router=express.Router();

router.get('/home',(req,res)=>{
    res.send("send request to clients");
})
module.exports=router;
