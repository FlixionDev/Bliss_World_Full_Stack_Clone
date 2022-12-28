import React, { useEffect, useState } from 'react';
import product_card from './product_data';
import './ListingPage.css';

function ListingPage() {
  let [data, setData] = useState([]);
  const url = 'https://blissworldapi.onrender.com/product_card';
  const fetchData = async () => {
    const resp = await fetch(url);
    const data = resp.json();
    setData(data);
  };
  data = {
    id: 1,
    product_name: '',
    description: '',
    price: '',
    currency: '$',
    thumb: '',
  };
  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, []);

  //   console.log(product_card);

  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt={item.product_name} />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn1">ADD TO BAG</div>
      </div>
    </div>
  ));
  return (
    <div className="container1">
      <h3>Bright IdeaHeadphones</h3>
      <span style={{ fontWeight: 100 }}>
        {' '}
        Boosts Brightness & Elasticity In 1 Use With Clinical-Grade Vitamin C{' '}
      </span>

      <div className="main_content">{listItems}</div>
    </div>
  );
}

export default ListingPage;
