import React, { useEffect, useState } from 'react';
import '../LandingPage/ListingPage/ListingPage.css';
import { useContext } from "react";
import { UseridContext } from "../../UseridContext/UseridContextProvider"
import { useToast } from '@chakra-ui/react';


function OrderPage() {
  const toast = useToast();
  let [data, setData] = useState([]);
  const {DB_API}=useContext(UseridContext)
  const [userIdState,setUserIdState]=useState()
  let url = 'https://noiseless-soapy-zucchini.glitch.me/orders';

  console.log(DB_API)
 function getUserId(){
    let usertoken=localStorage.getItem("userToken");
   fetch(`https://noiseless-soapy-zucchini.glitch.me/user`,{
      method:"POST",
      headers:{
        "auth":usertoken
      }
    }).then((res)=>{
      res.json().then((res)=>{
        console.log("userToeknIs--->",res.userId)
        setUserIdState(res.userId)
        fetchData(res.userId);
      })
    })
    
  }


  const fetchData = (userid) => {
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        let filteredArray = data.filter((elem)=>{
          return elem.user_id===userid
        }
        )
        console.log("fetched data fater filter--->",filteredArray)
        setData(filteredArray);
    
      })
    })
   
  };

  
  useEffect(()=>{
    getUserId() 
    toast({
      title: 'Order Placed Successfully',
      description: "",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

  },[])
  
  
  
  console.log(data);
  console.log("In side orderConfirm->id",userIdState)
  
  const Items = data.map((item) => (
    <div className="card" key={item._id}>
    <div className="card_img">
    <img src={item.image1} alt={item.title} />
    </div>
    <div className="card_header">
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <p className="price">
    {item.price}
    </p>
    </div>
    </div>
    ));
    return (
      <div className="container1">
        <div className="main_content">{Items}</div>
      </div>
      );
    }
    
    export default OrderPage;
