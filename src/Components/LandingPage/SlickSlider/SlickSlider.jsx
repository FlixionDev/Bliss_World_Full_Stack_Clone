import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHeart } from "react-icons/ai";
import { IoMdHeartHalf } from "react-icons/io";
import { AtcBtn } from "../AtcBtn/AtcBtn";

function SlickSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    swipeToSlide:true,
  };
  return (
    <Slider {...settings}>
    
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img
                src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/800w/products/434/1543/Bundle_6__LS_Body_Butter_Grapefruit_Body_Butter_Blood_Orange_Body_Butter_Naked_Body_Butter_all_full_size_200_ML_1__10748.1659723177.jpg"
                alt="img1"
              />
              <br />
              <div className="slick-slider-cart-rating">
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <IoMdHeartHalf style={{ color: "rgb(165, 215, 252)" }} />
              </div>
              {/* <h2>Butter Together Body Butter Set</h2>
            <p>Limited-Edition Pride Block Star Set</p> */}
            </div>

            <div social-icons></div>
            <div className="details">
              <h2>
                Butter Together Body Butter Set
                <span className="job-title">
                  Limited-Edition Pride Block Star Set
                </span>
                <AtcBtn btnName="ADD TO BAG" price={48} />
                {/* <h2>Butter Together Body Butter Set</h2>
            <p>Limited-Edition Pride Block Star Set</p>  */}
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img
                src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/800w/products/477/1567/Deluxe_Spa_Facial_Set_Product_Contents__71216.1669050157.jpg"
                alt="img2"
              />
              <br />
              <div className="slick-slider-cart-rating">
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <IoMdHeartHalf style={{ color: "rgb(165, 215, 252)" }} />
              </div>
              {/* <h2>Deluxe Spa Facial Holiday Set</h2>
            <p>8-Piece Facial Gift Set | A $45 Value</p> */}
            </div>

            <div className="details">
              <h2>
                Deluxe Spa Facial Holiday Set
                <span className="job-title">
                  8-Piece Facial Gift Set | A $45 Value
                </span>
                <AtcBtn btnName="ADD TO BAG" price={25} />
                {/* <h2>Butter Together Body Butter Set</h2>
            <p>Limited-Edition Pride Block Star Set</p>  */}
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img
                src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/800w/products/430/1333/Bundle_1__LS_Soapy_Suds_LS_Body_Butter__71793.1643933135.jpg"
                alt="img3"
              />
              <br />

              <div className="slick-slider-cart-rating">
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <IoMdHeartHalf style={{ color: "rgb(165, 215, 252)" }} />
              </div>
              {/* <h2>Lemon Love Duo</h2>
            <p>Limited-Edition Pride Block Star Set</p> */}
            </div>

            <div className="details">
              <h2>
                Lemon Love Duo
                <span className="job-title">
                  Limited-Edition Pride Block Star Set
                </span>
                <AtcBtn btnName="ADD TO BAG" price={24} />
                {/* <h2>Butter Together Body Butter Set</h2>
            <p>Limited-Edition Pride Block Star Set</p>  */}
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img
                src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/800w/products/428/1328/BUNDLE_2_1__68259.1643740166.jpg"
                alt="img4"
              />
              <br />
              <div className="slick-slider-cart-rating">
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <AiFillHeart style={{ color: "rgb(165, 215, 252)" }} />
                <IoMdHeartHalf style={{ color: "rgb(165, 215, 252)" }} />
              </div>
              {/* <h2>Let’s C Results Skincare Kit</h2>
            <p>Limited-Edition Pride Block Star Set</p> */}
            </div>

            <div className="details">
              <h2>
                Lemon Love Duo
                <span className="job-title">Let’s C Results Skincare Kit</span>
                <AtcBtn btnName="VIEW BUNDLE" price="" />
                {/* <h2>Butter Together Body Butter Set</h2>
            <p>Limited-Edition Pride Block Star Set</p>  */}
              </h2>
            </div>
          </div>
        </div>
      
    </Slider>
  );
}

export default SlickSlider;
