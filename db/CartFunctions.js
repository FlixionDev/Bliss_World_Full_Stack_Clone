const mongoose=require('mongoose')

const CartSchema=  mongoose.Schema({
    image1:String,
    image2:String,
    title:String,
    description:String,
    price:Number,
    finalPrice:Number,
    quantity:Number,
    user : {
        _id:mongoose.Types.ObjectId
    }
})
const CartModel=mongoose.model('cart',CartSchema)

async function getAllCartProducts(page,pageLimit,sortOrder,sortBy){
    let totalCartProducts=await CartModel.count()
    let cartProducts=await CartModel.find().skip((page-1)*pageLimit).limit(pageLimit).sort({
        [sortBy]:sortOrder=='asc'?1:-1
    })

    return {totalCartProducts,cartProducts}
}

async function addToCart(userId,productData){
  //    const user=await UserModel.findById(userId)
  //  if(!user){
  //     throw new Error('Please login before adding to cart userId not found')
  //  }
  let productInCart=await CartModel.findById(productData._id)
     if(productInCart){
       let status= await CartModel.updateOne({_id:productInCart._id},{
            $set:{
                finalPrice:productInCart.finalPrice+productInCart.price,
                quantity:productInCart.quantity+1
            }
        })

        let updatedProductInCart=await CartModel.findById(productData._id)

        return updatedProductInCart
    
     }
     else{
          const productAddedInCart=await CartModel.create({
               ...productData,
               finalPrice:productData.price,
               quantity:1,
               user:{
                   _id:userId
               }
           })
           return productAddedInCart
        
      }
}

async function updateCartProduct(userId,productId,productData){
    let productInCart=await CartModel.findById(productId)

    if(!productInCart){
        throw new Error('Product not available in cart refresh or delete and add again')
    }
    if(String(productInCart.user._id)!==String(userId)){
        throw new Error('Please login first to make changes in cart')
    }
    let status= await CartModel.updateOne({_id:productInCart._id},{
        $set:{
            finalPrice:productData.quantity * productInCart.price,
            quantity:productData.quantity
        }
    })
    productInCart=await CartModel.findById(productId)
    return productInCart
}

async function deleteCartProduct(userId,productId){
  //  const user=await UserModel.findById(userId)
  //  if(!user){
  //     throw new Error('Please login before adding to cart userId not found')
  //  }

  let productInCart =await CartModel.findById(productId)
  if(!productInCart){
    throw new Error('Product not available in cart refresh')
  }
//   if(productInCart.user._id!==userId){
//      throw new Error('Please login first to make changes in cart')
//  }
 productInCart=await CartModel.findByIdAndDelete(productId)
 return productInCart

}

module.exports={
    CartModel,
    getAllCartProducts,
    updateCartProduct,
    deleteCartProduct,
    addToCart
}