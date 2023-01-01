// import React from "react";
// import {useEffect} from "react";

// const Data = () => {
    
//     useEffect(() => {
//         getData();
//     })

//     const getData = async () => {
//         try {
//             let res = await fetch(`https://noiseless-soapy-zucchini.glitch.me/orders`);
//             let res2 = await res.json();
//             console.log(res2)
//         }
//         catch (err) {
//             console.log(err, "err");
//         }
//     }
 
//     const orderItems = data.map((item) => (
//         <div className="card" key={item.id}>
//           <div className="card_img">
//             <img src={item.image1} alt={item.title} />
//           </div>
//           <div className="card_header">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <p className="price">
//               {item.price}
//               <span>{item.currency}</span>
//             </p>
//             <div className="btn1">ADD TO BAG</div>
//           </div>
//         </div>
//       ));
//       return (
//         <div className="container1">    
//           <div className="main_content">{orderItems}</div>
//         </div>
//       )

// }
// export default Data;


import React, { useEffect, useState } from 'react';
import '../LandingPage/ListingPage/ListingPage.css';

function OrderPage() {
  let [data, setData] = useState([]);

  // useEffect(() => {
  //           fetchData();
  //       })

  const url = 'https://noiseless-soapy-zucchini.glitch.me/orders';
  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setData(data);
    // console.log(data)
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
