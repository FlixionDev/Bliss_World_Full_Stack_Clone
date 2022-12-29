const mongoose=require('mongoose')

const CartSchema=  mongoose.Schema({
    image1:String,
    image2:String,
    title:String,
    description:String,
    price:Number,
    quantity:Number,
    user : {
        _id:mongoose.Types.ObjectId
    }
})
const CartModel=mongoose.model('cart',CartSchema)

async function getAllCartProducts({page,pageLimit,sortOrder,sortBy}){
    let totalCartProducts=await CartModel.count()
    let cartProducts=await CartModel.find().skip((page-1)*pageLimit).limit(5).sort({
        [sortBy]:sortOrder=='asc'?1:-1
    })

    return {totalCartProducts,cartProducts}
}

async function updateCartProduct(userId,productId,productData){
    let productInCart=await CartModel.findById(productId)

    if(!productInCart){
        throw new Error('Product not available in cart refresh or delete and add again')
    }
    // if(String(productInCart.user._id)!==String(userId)){
    //     throw new Error('Please login first to make changes in cart')
    // }
    productInCart.update({
        $set:{
            price:productData.price,
            quantity:productData.quantity
        }
    })
    productInCart=await CartModel.findById(productId)
    return productInCart
}

async function deleteCartProduct(userId,productId){
  let productInCart =await CartModel.findById(productId)
  if(!productInCart){
    throw new Error('Product not available in cart refresh')
  }
  // if(String(productInCart.user._id)!==String(userId)){
 //     throw new Error('Please login first to make changes in cart')
 // }
 productInCart=await CartModel.findByIdAndDelete(productId)
 return productInCart

}

module.exports={
    CartModel,
    getAllCartProducts,
    updateCartProduct,
    deleteCartProduct
}