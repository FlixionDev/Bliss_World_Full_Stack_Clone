import React from "react";

import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LocalMall, Login, Place } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import CartDiv from "../CartPage/CartDiv";


export default function UpperNavbar() {
  const nav = useNavigate();
  const goToLogin=()=>{
    nav("/login");
  }

 
  return (
    <div >
    <Box
      display="flex"
      mt="0px"
      bg="#73d2e6"
      maxW="100%"
      maxH="100"
      color="white"
    >
      <Box display="flex" mt="2" ml="10">
        <Box>
          <Box>
            <SearchIcon style={{ fontSize: "35px" }} />
          </Box>
          <Box>
            <p>Search</p>
          </Box>
        </Box>

        <Box ml="5">
          <Box>
            <Place style={{ fontSize: "35px" }} />
          </Box>
          <Box>
            <h5>Find Us</h5>
          </Box>
        </Box>
      </Box>

      <Box onClick={()=> nav("/")} boxSize="350px" ml="36%">
        <Image
          
          objectFit="cover"
          src="https://tse4.mm.bing.net/th?id=OIP.eNAa2flvx59wgsY6Kh2RzQHaHa&pid=Api&P=0"
        />
      </Box>

      <Box  display="flex" mt="2" ml="570">
        <Box>
          <Box>
            <Login onClick={goToLogin} style={{ fontSize: "35px" }} />
          </Box>
          <Box onClick={goToLogin} >
            <p>Login</p>
          </Box>
        </Box>

        <Box onClick={()=> CartDiv()} mr="5" ml="10">
          <Box>
            <LocalMall style={{ fontSize: "35px" }} />
          </Box>
          <Box>
            <h4>Bag</h4>
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
  );
}
