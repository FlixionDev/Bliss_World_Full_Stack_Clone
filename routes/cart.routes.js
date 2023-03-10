const express=require('express')
const router=express.Router()

const{CartModel,getAllCartProducts,getCartProductsByUserid,updateCartProduct,deleteCartProduct,addToCart,deleteManyFromCart}=require('../db/CartFunctions')

router.get('/cart',async(req,res)=>{
    const {totalCartProducts,cartProducts}=await getAllCartProducts()
    return res.send({totalCartProducts,data:cartProducts})
})

router.get('/:userId/cart',async(req,res)=>{
    const userId=req.params.userId
    console.log(userId)
    const {totalCartProducts,cartProducts}=await getCartProductsByUserid(userId)
    return res.send({totalCartProducts,data:cartProducts})
})


router.post('/:userId/cart',async(req,res)=>{
    let userId=req.params.userId
    let productData=req.body
    let productAddedToCart=null
    try {
        productAddedToCart=await addToCart(userId,productData)
    } catch (error) {
        console.log('Error during addToCart',error)
       return res.status(500).send({message:'UserId not exist plz login before adding to cart'})
    }
    return res.send({data:productAddedToCart})
})

router.patch('/:userId/cart/:productId', async(req,res)=>{
    const {productId,userId}=req.params
    const productData=req.body
    let productInCart=null
    try {
        productInCart=await updateCartProduct(userId,productId,productData)
    } catch (error) {
        return res.status(500).send({message:'First login before update the cart or Id not exist'})
    }
    return res.send({data:productInCart})

})

router.delete('/:userId/cart/:productId', async(req,res)=>{
    const {productId,userId}=req.params
    let deletedProduct=null
    try {
        deletedProduct=await deleteCartProduct(userId,productId)
    } catch (error) {
       return res.status(500).send({message:'You have to login before deleting from cart or Id does not exist'}) 
    }
    if(deletedProduct){
        return res.send({data:deletedProduct})
    }
    else{
        return res.status(404).send({message:'Product with given id not exist to delete plz refresh'})
    }
})

router.delete('/:userId/cart',async(req,res)=>{
    const userId=req.params.userId
    let deletedProducts=null
    try {
        deletedProducts=await deleteManyFromCart(userId)
    } catch (error) {
        return res.status(500).send({message:'You have to login before deleting from cart or Id does not exist'}) 
    }
    if(deletedProducts){
        return res.send({data:deletedProducts})
    }
    else{
        return res.status(404).send({message:'Product with given id not exist to delete plz refresh'})
    }

})

module.exports=router