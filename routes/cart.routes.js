const express=require('express')
const router=express.Router()

router.get('/cart',async(req,res)=>{
    console.log('in /cart route')
})

module.exports=router