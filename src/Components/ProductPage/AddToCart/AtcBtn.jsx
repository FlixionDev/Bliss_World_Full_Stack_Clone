import React, { useEffect, useState } from "react";
import "./AtcBtn.css";
import { action } from "../../../Redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UseridContext } from "../../../UseridContext/UseridContextProvider"


export const AtcBtn = ({ item, btnName, price }) => {
  const [userIdState2,setUserIdState2]=useState()
  const {userIdState,DB_API}=useContext(UseridContext)
  console.log("userIDState in ATC btn",userIdState,DB_API,userIdState2)
  const nav = useNavigate();


  function addProductToCart(userid){
    console.log("adding to cart func",userid)
    axios.post(`${DB_API}/${userid}/cart`,{...item}).then((res)=>{
      console.log("res after adding to cart in ATC btn->",res)
   })
   .then(()=>{
     nav('/cart')
   })
   .catch((err)=>{console.log("error after post add to cart->",err)})

   }
   


  const sendDataToCart = () => {
    console.log("ATC button is clicked", item);



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
      addProductToCart(token.userId)
    }
  getUserId()

  };

  return (
    <div>
      <button onClick={sendDataToCart} className="btn">
        {`${btnName} $${price}`}
      </button>
    </div>
  );
};

/*

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

*/
