import './../LandingPage/SlickSlider/css/SlickSlider.css';
import SlickSlider from '../LandingPage/SlickSlider/SlickSlider';

import React from 'react';
import Slider from './Slider/Slider';
import Touts from './Touts/Touts';
import MaxContainer from './MaxContainer/MaxContainer';
import CommonContainer from './CommonContainer/CommonContainer';
import ListingPage from './ListingPage/ListingPage';
import BlissUser from './BlissUser/BlissUser';
import LastProduct from './LastProduct/LastProduct';

function LandingPage() {
  return (
    <div>
      <Slider />
      <div className="SliderContainer mt-5 carousel">
        <h2 className="slider_title">MAKING SKIN &amp; SPIRITS BRIGHT </h2>
        <p className="title-desc">
          Give the gift of smoothing, hydrating, and glow-giving faves{' '}
        </p>
        <SlickSlider />
      </div>
      <Touts />
      <MaxContainer />
      <CommonContainer />
      <ListingPage />
      <BlissUser />
      <LastProduct />
    </div>
  );
}

export default LandingPage;
