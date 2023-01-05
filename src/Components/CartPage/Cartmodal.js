import React from "react";
import { useEffect, useState } from "react";
// import "./CartNCheckout.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Heading, HStack, Image, Text, useToast, VStack } from "@chakra-ui/react";
import axios from "axios"
import { UseridContext } from "../../UseridContext/UseridContextProvider";
import { useContext } from "react";


function Cartmodal() {
  const {userIdState,DB_API}=useContext(UseridContext)
  const nav = useNavigate();
  const toast = useToast();
  const [userIdState2,setUserIdState2]=useState('63b3274c1243c085fd123c56')
  const [cartData,setCartData]=useState([])
  const [totalItemTypesInCart,setTotalItemTypesInCart]=useState()
  // const [cartTotal, setCartTotal] = useState(0);

  let cartTotal=null
  console.log("------2------userId",userIdState2)
  // ----------------------------------------------------------------------------------------

function getCartProducts(userid){
     console.log("getCartProductCalled",userid)
    axios.get(`${DB_API}/cart`)
    .then((res)=>{
       let cartArrFiltered=res.data.data.filter((ele)=>{
          return ele.user_id==userid
      })
      console.log("Response after Axios.get in cartModel2--->",cartArrFiltered)
      setTotalItemTypesInCart(cartArrFiltered.length)
      setCartData([...cartArrFiltered])
    })
    .catch((err)=>{
      console.log("error after axios.get in cartModel",err)
    })
}

async function getUserId(){
  let usertoken=localStorage.getItem("userToken");
  let response=await fetch(`${DB_API}/user`,{
  method:"POST",
  headers:{
    "auth":usertoken
  }
  })
  let token  = await response.json();
  setUserIdState2(token.userId)
  console.log("------1-----------------userId",token.userId)
  getCartProducts(token.userId)

}


useEffect(()=>{
getUserId()
},[])

console.log("cartdata in modal", cartData,totalItemTypesInCart);    
 
 

  
  //-------------------------------------------------------------------------------------------
  //  const applycoupon = () => {
  //   let discountvalue = document.getElementById("blissCouponCode").value;
  //   if (discountvalue === "masai20") {
  //     setCartTotal(cartTotal - (cartTotal * 20) / 100);
  //     couponToast({
  //       title: "Coupon Applied",
  //       status: "success",
  //       duration: 2000,
  //       isClosable: true,
  //       position: "top",
  //     });
  //   } else {
  //     couponToast({
  //       title: "Invalid Coupon.",
  //       description: "Try again.",
  //       status: "error",
  //       duration: 2000,
  //       isClosable: true,
  //       position: "center",
  //     });
  //   }
  // };
  


  //  -------------------------------------------------------------------------------------------------

  function cartTotalPrice(){
    let totalPrice=cartData.reduce(function(acc,ele){
     return acc+ele.finalPrice
    },0)
    cartTotal=totalPrice
    console.log("totalPrice--->",cartTotal)
  }
  cartTotalPrice()

//  -------------------------------------------------------------------------------------------------

  function deleteFromCart(userId,productId){
    axios.delete(`${DB_API}/${userId}/cart/${productId}`).then((res)=>{
       console.log("Res after delete from cartModal",res.data)
    }).then(()=>{
      getCartProducts(userId)
    }).catch((err)=>{
       console.log("Error after delete from cartModal",err)
    })
    
  }
  function updatedQuantity(ele,newQuantity){
    console.log("updated q called",ele)
    axios.patch(`${DB_API}/${ele.user_id}/cart/${ele._id}`,{
      "quantity":newQuantity
    }).then((res)=>{
      getCartProducts(ele.user_id)
    }).catch(()=>{
      console.log("Error after quantity update patch")
    })
  }

//  return(
//   if(cartArrFiltered){
//     if(cartArrFiltered.length===0){
//       toast({
//        title: 'Cart is empty',
//        description: "Please add product to cart",
//        status: 'success',
//        duration: 3000,
//        isClosable: true,
//       })
//       nav('/product/:endpoint1')
//     }

//   }

//  )

// ------------------------------------------------------------------------------------------------------
   
return(
    <Box p='10px' >
     <Text size={'xl'} >Total Item Types:{totalItemTypesInCart}</Text>
     {cartData.map((ele)=>{
      return <Box key={ele._id} display={'flex'} maxH='200px' alignItems='center' justifyContent={'space-around'} border='1px solid #cecece' >
        <Image src={ele.image1} alt="img" maxH={'180px'}  />
        <VStack alignItems={'flex-start'} >
         <Text size={'xl'} >{ele.title}</Text><br/>
         <Text>{ele.description}</Text>
        </VStack>
        <Box>Price:{ele.finalPrice}</Box>
        <Box display={'flex'} alignItems='center'  >
          <Button m='10px' disabled={ele.quantity===1} onClick={()=>{updatedQuantity(ele,ele.quantity-1)}} border='1px soild #cecece' ><FaMinus/></Button>
          {ele.quantity}
          <Button m='10px' onClick={()=>{updatedQuantity(ele,ele.quantity+1)}} border='1px soild #cecece' ><FaPlus/></Button>
        </Box>
        <Box onClick={()=>{deleteFromCart(ele.userId,ele._id)}} cursor='pointer' >
          Remove
        </Box>
      </Box>
     })}
     <HStack justifyContent={'space-between'} p='10px' >
       <Heading>Cart Total:{cartTotal}</Heading>
       <Button colorScheme='blue' onClick={()=>{nav("/checkout")}} margin={'10px,auto'} border={'1px solid green'} bg='#53BDF2' color='white' p='7px' borderRadius={'6px'}  >Checkout </Button>
     </HStack>
    </Box>
   )
}
export default Cartmodal
