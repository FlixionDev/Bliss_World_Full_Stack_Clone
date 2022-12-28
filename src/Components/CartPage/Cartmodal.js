import React from "react";
import { useEffect, useState } from "react";
import "./CartNCheckout.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../Redux/action";
import { ProductList } from "../ProductPage/ProductList/ProductList";
import { useNavigate } from "react-router-dom";
import CartDiv from "./CartDiv";
import { useToast } from "@chakra-ui/react";

function Cartmodal() {
  const nav = useNavigate();
  const couponToast = useToast();
  const [state, usestate] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();

  const cartData = useSelector((storeData) => {
    return storeData.cart;
  });
  console.log("cartdata in modal", cartData);

  const changeCartState = () => {
    usestate(cartData);
  };

  console.log("checking state", state);

  const applycoupon = () => {
    let discountvalue = document.getElementById("blissCouponCode").value;
    if (discountvalue === "masai20") {
      setCartTotal(cartTotal - (cartTotal * 20) / 100);
      couponToast({
        title: "Coupon Applied",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      couponToast({
        title: "Invalid Coupon.",
        description: "Try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "center",
      });
    }
  };

  useEffect(() => {
    changeCartState();
  }, []);

  const cartTotalPrice = (item) => {
    setCartTotal((prev) => prev + item.count * item.price);
  };

  const increaseTotalPrice = (item) => {
    console.log("increase function is calling", item);
    setCartTotal((prev) => prev + item.price);
  };
  const decreaseTotalPrice = (item) => {
    console.log("increase function is calling", item);
    setCartTotal((prev) => prev - item.price);
  };

  const decCountCart = (item) => {
    let match = cartData.filter((ele) => ele.id === item.id);
    if (match.length > 0) {
      match[0].count--;
      let newCartData = cartData.filter((ele) => ele.id !== item.id);
      action([...newCartData, match[0]], dispatch);
    }
    decreaseTotalPrice(item);
  };

  const incCountCart = (item) => {
    let match = cartData.filter((ele) => ele.id === item.id);
    if (match.length > 0) {
      match[0].count++;
      let newCartData = cartData.filter((ele) => ele.id !== item.id);
      action([...newCartData, match[0]], dispatch);
    }
    increaseTotalPrice(item);
  };

  function openn() {
    document.getElementById("cancelcoupen").style.display = "block";
    document.getElementById("addcoupen").style.display = "none";
    document.getElementById("closethe").style.display = "block";
  }

  function closee() {
    document.getElementById("cancelcoupen").style.display = "none";
    document.getElementById("addcoupen").style.display = "block";
    document.getElementById("closethe").style.display = "none";
  }

  const closemodale = () => {
    // document.getElementById("cart_modal").style.display = "none";
    // nav("/product");
    CartDiv();
  };

  const proceedToCheckout = () => {
    CartDiv();
    nav("/checkout");
  };
  return (
    <div className="cart_modal" id="cart_moda">
      <div>
        <div id="cart_child">
          <a
            onClick={() => {
              closemodale();
            }}
          >
            {"< "}KEEP SHOPPING
          </a>
          {/* <a>VIEW FULL SHOPPING BAG{" >"}</a> */}
        </div>

        <div id="cart_child2">
          <h3>Shopping Bag</h3>
          {/* <p>(6 items)</p> */}
        </div>
        {cartData.map((e) => {
          return (
            <div id="datadiv" onLoad={() => cartTotalPrice(e)}>
              <div id="datadivchild1">
                <img src={e.image1} alt="gh" />
              </div>
              <div id="datadivchild2">
                <a id="atag">{e.title}</a>
                <p>{e.description}</p>
                <div id="buttonss">
                  <div id="pmbuton">
                    <button
                      id="decrement"
                      disabled={e.count == 1 ? true : false}
                      onClick={() => decCountCart(e)}
                    >
                      <FaMinus
                        color="grey"

                        // onClick={() => {
                        //   Put(e.id, e.q - 1);

                        //   setTimeout(() => {
                        //     getdata();
                        //   }, 1);
                        // }}
                      />
                    </button>
                    {e.count}

                    <FaPlus
                      color="grey"
                      onClick={() => incCountCart(e)}

                      // onClick={() => {
                      //   Put(e.id, e.q + 1);

                      //   setTimeout(() => {
                      //     getdata();
                      //   }, 1);
                      // }}
                    />
                  </div>
                  <p id="idp">Remove</p>
                  <p id="doller">${e.price}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div id="parentcoupen">
          <div id="coupon">
            <strong>Coupon Code</strong>
            <button
              id="addcoupen"
              onClick={() => {
                openn();
              }}
            >
              Add Coupon
            </button>
            <button
              id="cancelcoupen"
              onClick={() => {
                closee();
              }}
            >
              Cancel
            </button>
          </div>

          <div id="closethe">
            <div id="inputd">
              <input
                placeholder="Enter your coupon code"
                id="blissCouponCode"
              />
            </div>

            <div
              id="couponbutton"
              onClick={() => {
                applycoupon();
              }}
            >
              APPLY{" "}
            </div>
          </div>
        </div>

        <div id="parentcoupen2">
          <div id="coupon">
            <strong>Grand total:</strong>
            <button id="addcou">${cartTotal}</button>
            {/* <button id="cancelcoupen">Cancel</button> */}
          </div>
        </div>

        <div id="radiant">You've earned FREE Shipping</div>
        <br />
        <div id="radiant2">
          <p>To use a gift card please call customer support: 888-243-8825</p>
        </div>
        {/* <div id="ankor"> */}
        {/* <p id="ankortag">VIEW FULL SHOPPING BAG</p> */}
        {/* </div> */}

        <div
          id="checkout"
          onClick={() => {
            proceedToCheckout();
          }}
        >
          CHECKOUT{" "}
        </div>
      </div>
    </div>
  );
}

export default Cartmodal;
