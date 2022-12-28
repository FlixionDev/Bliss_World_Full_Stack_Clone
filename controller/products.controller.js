const express=require('express');
const router=express.Router();
const Products = require('../model/products.model');


router.get('/',async (req,res)=>{
    try{
        const products=await Products.find();
        return res.send(products)
    }catch(err){
        return res.send({
            message : "error occur"
        })
    }
})

router.get('/:id',async (req,res)=>{
    const id=req.params.id;
    // console.log(id);
    try{
        const products=await Products.findById(id);
        return res.send(products)
    }catch(err){
        return res.send({
            message : "error occur"
        })
    }
})
module.exports=router;