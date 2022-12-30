const express=require('express');
const productRouter=express.Router();
const orderRouter=express.Router();

const {Productsmodel,Ordersmodel} = require('../model/products.model');


productRouter.get('/',async (req,res)=>{
    try{
        const products=await Productsmodel.find();
        return res.send(products)
    }catch(err){
        return res.send({
            message : "error occur"
        })
    }
})

productRouter.get('/:id',async (req,res)=>{
    const id=req.params.id;
    // console.log(id);
    try{
        const products=await Productsmodel.findById(id);
        return res.send(products)
    }catch(err){
        return res.send({
            message : "error occur"
        })
    }
})
orderRouter.get('/',async(req,res)=>{
    try{
        let order=await Ordersmodel.find();
        return res.send(order)
    }catch(err){
        return res.send({
            message : "error occur"
        })
    }
})
orderRouter.post('/',async(req,res)=>{
    let body=req.body;
    //let arr=[...body]
    console.log(body);
    try{
       let order=await Ordersmodel.insertMany(body);
        //console.log(order)
        return res.send({order})
    }catch(err){
        console.log(err);
        return  res.status(404).send({
            message : "error occur"
        })
    }
    
    

})

module.exports={
    productRouter,
    orderRouter
}