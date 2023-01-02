import React, { useEffect, useState } from 'react';
import '../LandingPage/ListingPage/ListingPage.css';

function OrderPage() {
  let [data, setData] = useState([]);

  const url = 'https://noiseless-soapy-zucchini.glitch.me/orders';
  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    const userId = data.filter((elem)=>{
        return elem.user_id==="63b1ac7d2c18fa6b7b721a39"
    }
    )
    setData(userId);
  };

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, []);

    console.log(data);

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
