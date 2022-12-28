import React from "react";
import "./AtcBtn.css";
import { action } from "../../../Redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartDiv from "../../CartPage/CartDiv";

export const AtcBtn = ({ item, btnName, price }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((storeData) => {
    return storeData.cart;
  });

  const sendDataToCart = () => {
    console.log("ATC button is clicked", item);
    console.log("cartData in atcbtn", cartData);

    // nav("/cart");

    let match = cartData.filter((ele) => ele.id === item.id);
    console.log("match", match);

    if (match.length > 0) {
      match[0].count++;
      let newCartData = cartData.filter((ele) => ele.id !== item.id);
      action([...newCartData, match[0]], dispatch);
    } else {
      action([...cartData,{ ...item, count: 1 }], dispatch);
    }

    CartDiv();
  };

  return (
    <div>
      <button onClick={sendDataToCart} className="btn">
        {`${btnName} $${price}`}
      </button>
    </div>
  );
};
