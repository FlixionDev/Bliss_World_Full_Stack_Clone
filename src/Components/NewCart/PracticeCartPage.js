import React from "react";
import { useSelector } from "react-redux";

export const PracticeCartPage = () => {
  const cartData = useSelector((storeData) => {
    return storeData;
  });

  return (
    <div>
      <h2>Cart </h2>
      {cartData.cart.length > 0 &&
        cartData.cart.map((item, index) => {
          return (
            <div>
              <p key={index + 1}>{item.id}</p>
              <img src={item.image1} alt="" />
            </div>
          );
        })}
    </div>
  );
};
