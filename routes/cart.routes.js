const express=require('express')
const router=express.Router()

router.get('/cart',async(req,res)=>{
    const {page=1,pageLimit=5,sortOrder='asc',sortBy='price'}=req.query
    
})
router.patch('/:userId/cart/:productId', async(req,res)=>{
    const {productId,userId}=req.params
    const productData=req.body
})

router.delete('/:userId/cart/:productId', async(req,res)=>{
    const {productId,userId}=req.params
})

module.exports=router