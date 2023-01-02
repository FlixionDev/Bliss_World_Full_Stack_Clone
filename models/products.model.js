const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    image1:String,
    image2:String,
    title:String,
    description:String,
    price:Number
})
const Productsmodel=mongoose.model('products',productSchema);
const orderSchema= mongoose.Schema({
    image1:String,
    image2:String,
    title:String,
    description:String,
    price:Number,
    finalPrice:Number,
    quantity:Number,
    user_id:String,
    user : {
        _id:mongoose.Types.ObjectId
    }
})
const Ordersmodel=mongoose.model('orders',orderSchema);
module.exports={
    Productsmodel,
    Ordersmodel
};
