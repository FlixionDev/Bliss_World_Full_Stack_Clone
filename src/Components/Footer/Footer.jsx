import React from 'react'
import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box display='flex' mt="5px">

        <Box bg='#73d2e6' minW='70%' minH='300' display='flex' color='white' padding='5' fontFamily='archer'>
          <Box minW='20%'>
          <Image boxSize='130px' objectFit='fill' src='https://www.blissworld.com/content/assets/bcorp.svg' />
          </Box>
          <Box minW='20%'>
          <Box fontSize='20'>COMPANY</Box>
            <h3>Who we are</h3>
            <h3>Find Bliss Near You</h3>
            <h3>Bliss Spa</h3>
            <h3>Shop</h3>
          </Box>
          <Box minw='30%'>
            <Box fontSize='20'>CUSTOMER CARE</Box>
            <h3>Gift Cards</h3>
            <h3>Contact Us</h3>
            <h3>Shipping</h3>
            <h3>Returns</h3>
            <h3>Ordering & Payment</h3>
            <h3>SMS Texts and Alerts</h3>
          </Box>
          <Box minW='30%'>
          <Box fontSize='20'>THE DRY STUFF</Box>
            <h3>Privacy Policy</h3>
            <h3>Terms & Conditions</h3>
            <h3>Accessibility Statement</h3>
            <h3>Sitemap</h3>
            <br></br>
            <Box fontSize='20'>THE FUN STUFF</Box>
            iNSTA YOUTUBE
          </Box>
        </Box>



        <Box bg='#f5ea77' minW='30%' minH='100'>

          <Box fontSize='25'>Hear the latest.</Box>
          <Box fontSize='15'>(new Products, exclusive offers and other surprises)</Box><br></br>
          <Input placeholder='Enter your email...' width='400px' backgroundColor='white' /><br></br><br></br>
          <Button backgroundColor='#73d2e6' color='white' width='400px'>Submit</Button>

        </Box>

    </Box>
  )
}