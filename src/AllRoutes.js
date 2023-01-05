import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartmodal from "./Components/CartPage/Cartmodal";
import Checkout from "./Components/CartPage/Checkout";
import Orderconfirm from "./Components/CartPage/Orderconfirm";
import LandingPage from "./Components/LandingPage/LandingPage";
import Login from "./Components/Loginpage/Login";
import { ProductDescription } from "./Components/ProductPage/ProductDescription/ProductDescription";
import { ProductList } from "./Components/ProductPage/ProductList/ProductList";
import Signup from "./Components/SignupPage/Signup";
import Privateroute from "./Components/Privateroute/Privateroute";

export const AllRoutes = () => {
  const token=localStorage.getItem('userToken');
 // console.log(token)
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />        
        <Route exact path="/product/:endpoint1" element={<ProductList />} />
        <Route path="/:endpoint/:id" element={<ProductDescription />} />
        <Route path="/cart" element={<Privateroute><Cartmodal /></Privateroute>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirm" element={<Orderconfirm />} />
      </Routes>
    </div>
  );
};
