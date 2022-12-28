import React, { useEffect, useState } from 'react';
import './LastProduct.css';
import { AiFillHeart } from 'react-icons/ai';
import { IoMdHeartHalf } from 'react-icons/io';
import { AtcBtn } from '../AtcBtn/AtcBtn';

function LastProduct() {
  let [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch('https://blissworld.glitch.me/perfectPairings');
    const data = await resp.json();

    console.log(data);
    setData(data);
  };
  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [data]);
  return (
    <div className="last-product-container">
      <div className="last-product-header-div">
        <h2>Perfect Pairings</h2>
      </div>
      <div className="last-product-card">
        {data.map((item, index) => {
          return (
            <div className="last-product-innercard">
              <img
                src={item.image1}
                onMouseOver={(e) => (e.currentTarget.src = item.image2)}
                onMouseOut={(e) => (e.currentTarget.src = item.image1)}
                alt={item.title}
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="heart-rating-last-product">

              <AiFillHeart style={{ color: 'rgb(165, 215, 252)' }} />
              <AiFillHeart style={{ color: 'rgb(165, 215, 252)' }} />
              <AiFillHeart style={{ color: 'rgb(165, 215, 252)' }} />
              <AiFillHeart style={{ color: 'rgb(165, 215, 252)' }} />
              <IoMdHeartHalf style={{ color: 'rgb(165, 215, 252)' }} />
              </div>


              <AtcBtn btnName="ADD TO BAG" price={item.price} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LastProduct;
