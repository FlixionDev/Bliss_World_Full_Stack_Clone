import React from "react";
import { AtcBtn } from "../AddToCart/AtcBtn";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

import { Favorite } from "@mui/icons-material";
import { AiFillHeart } from "react-icons/ai";
import { IoMdHeartHalf } from "react-icons/io";

function ProductCard({ item, endpoint }) {
  const nav = useNavigate();

  const handleCardClick = (item) => {
    nav(`/${endpoint}/${item.id}`);
  };

  return (
    <div className="product-card-xyz">
      <figure>
        <div
          onClick={() => {
            handleCardClick(item);
          }}
          className="product-card-image"
        >
          <img src={item.image2} alt="product-back" className="img-back" />
          <img src={item.image1} alt="product" className="img-front" />
        </div>
      </figure>
      <div className="product-card-body" style={{}}>
        <div
          onClick={() => {
            handleCardClick(item);
          }}
          className="teaser-card-rating"
        >
          <div className="start-rating-card">
            <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
            <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
            <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
            <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
            <IoMdHeartHalf style={{ color: "rgb(165, 215, 252)" }} />
          </div>
        </div>

        <div
          onClick={() => {
            handleCardClick(item);
          }}
          className="card-title-short-description"
        >
          <h3 className="card-title">
            <a href="">{item.title}</a>
          </h3>
          {/* Short description - start-- */}
          <p className="card-short-description">{item.description}</p>
          {/* Short description - start-- */}
        </div>

        <div className="card-button">
          <div className="card-button-first-child">
            {/* to adding sizing view start */}
            {/* <button>6.7 oz</button>
            <button>32 oz</button> */}

            {/* to adding sizing view end */}
          </div>
          <div className="card-button-last-child">
            <AtcBtn item={item} btnName={"ADD TO CART"} price={item.price} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
