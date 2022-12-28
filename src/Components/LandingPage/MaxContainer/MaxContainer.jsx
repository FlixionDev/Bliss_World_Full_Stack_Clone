import React from 'react';
import './MaxContainer.css';

import { Box } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

function MaxContainer() {
  return (
    <Container h={660} className="max-container">
      <Box className="child1-box">
        <Box className="child01">
          <img
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/body-butter-bundle.jpg?t=1668543151&_gl=1*x3iqu0*_ga*MTUxMDA1OTkuMTY2NTE4MDA3OQ..*_ga_WS2VZYPC6G*MTY2ODU0MzEzNi4xMzEuMS4xNjY4NTQzMTU1LjQxLjAuMA.."
            alt="img1"
          />
        </Box>
        <Box
          className="child02"
          backgroundColor="white"
          h={100}
          w={450}
          margin={'auto'}
        >
          <h1>The Holidays Just Got Butter</h1>
          <p>
            Give the gift of hydrated, happy skin with our cult-fave body
            butters.
          </p>
        </Box>
        <Box className="child03">
          <button className="btn1452">SHOP BODY BUTTERS</button>
        </Box>
      </Box>

      <Box className="child2-box">
        <Box className="child11">
          <img
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/gift-tout.jpg?t=1668476832&_gl=1*yo4cii*_ga*MTUxMDA1OTkuMTY2NTE4MDA3OQ..*_ga_WS2VZYPC6G*MTY2ODQ3NTAzMy4xMjcuMS4xNjY4NDc2ODM1LjMyLjAuMA.."
            alt="img2"
          />
        </Box>
        <Box
          className="child12"
          backgroundColor="white"
          h={100}
          w={330}
          margin={'auto'}
        >
          <h1>Gifting Just Got Easier</h1>
          <p>
            Let’s glow shopping! There’s something for everyone – and every
            budget.
          </p>
        </Box>
        <Box className="child13">
          <button className="btn1452">TAKE THE QUIZ</button>
        </Box>
      </Box>
    </Container>
  );
}

export default MaxContainer;
