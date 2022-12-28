import React from 'react';
import './Touts.css';

function Touts() {
  return (
    <div className="tout-div">
      <h3>Only on blissworld.com</h3>

      <ul>
        <li>
          <div className="truck icon_section">
            <img
              className="gif_img"
              src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/truck73-37.gif"
              alt="FREE SHIPPING"
            />
          </div>
          <div className="tout-copy">
            <p>
              <strong>FREE SHIPPING</strong>
            </p>
            <p>
              (on <span>orders over $40</span>)
            </p>
          </div>
        </li>
        <li>
          <div className="samples icon_section">
            <img
              className="gif_img"
              src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/samples-gif-ani-73x37.gif"
              alt="FREE SAMPLES"
            />
          </div>
          <div className="tout-copy">
            <p>
              <strong>FREE SAMPLES</strong>
            </p>
            <p>(Yes, please!)</p>
          </div>
        </li>
        <li>
          <div className="gifts icon_section">
            <img
              className="gif_img"
              src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/gifts-gif-ani-73x37.gif"
              alt="SURPRISES"
            />
          </div>
          <div className="tout-copy">
            <p>
              <strong>SURPRISES</strong>
            </p>
            <p>(You will love. Trust.)</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Touts;
