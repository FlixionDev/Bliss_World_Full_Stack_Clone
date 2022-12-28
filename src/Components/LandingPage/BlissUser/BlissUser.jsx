import React, { Component } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';

import './BlissUser.css';

export default class BlissUser extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.stiff,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1640849645.788479334520.jpeg"
          alt="1"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1639757995.190806922504.jpeg"
          alt="2"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1639584114.202970397528.jpeg"
          alt="3"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1638923654.585207776341.jpeg"
          alt="4"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1635523802.332208499060.jpeg"
          alt="5"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1637105458.011154783396.jpeg"
          alt="6"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1630867825.074885686420.jpeg"
          alt="7"
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <img
          src="https://cdn.dashhudson.com/media/640/1635669299.557719799079.jpeg"
          alt="8"
        />
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div
        style={{
          width: '80%',
          height: '300px',
          margin: '0 auto',
        }}
      >
        <div className="bliss-user-header">
          <h1>@bliss</h1>
          <p>Your daily dose of happiness, unfiltered.</p>
        </div>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: '0 auto',
            marginTop: '2rem',
            width: '30%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        ></div>
      </div>
    );
  }
}
