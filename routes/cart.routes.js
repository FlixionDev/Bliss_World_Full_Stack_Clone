const express=require('express')
const router=express.Router()

router.get('/cart',async(req,res)=>{
    const {page=1,pageLimit=5,sortOrder='asc',sortBy='price'}=req.query
    
})

module.exports=router