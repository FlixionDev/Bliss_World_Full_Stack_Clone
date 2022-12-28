import React from 'react';
import './CommonContainer.css';
import { Container, Box, Image } from '@chakra-ui/react';
function CommonContainer() {
  return (
    <Container display="flex" justifyContent="center"  className="container-div" h={660} w="100%">
      <Box className="middle-div" w={500} h={500}></Box>
      <Container className="inner-container">
        <Box className="child1" w={450}>
          <h2>Clean, Cruelty-Free,Dermatologist-Tested</h2>
          <p>
            {' '}
            We are a clean, cruelty-free, planet-friendly skincare brand that
            delivers transformative, dermatologist-tested products for total
            skin happiness.
          </p>
          <button className="btn111">LEARN MORE</button>
          <br />
          <br />
          <button className="btn111">SHOP BLISS</button>
        </Box>
        <Box className="child2" marginTop={40}>
          <Image
            w="80%"
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/hp-about-mobile.jpg"
            alt="img1"
          />
        </Box>
      </Container>
    </Container>
  );
}

export default CommonContainer;


// E:\BlissWorld-copy\src\Components\LandingPage\CommonContainer\CommonContainer.jsx