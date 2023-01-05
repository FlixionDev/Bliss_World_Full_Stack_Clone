import React from "react";

import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { LocalMall, Login, Place,Person, LoginRounded,LogoutRounded } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { Navigate, useNavigate } from "react-router-dom";


export default function UpperNavbar() {
  const token=localStorage.getItem('userToken');
  const nav = useNavigate();
  const goToLogin=()=>{
    nav("/login");
  }
  const goToProfile=()=>{
    localStorage.removeItem('userToken')
    nav('/login')
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
        {
          token ? <Box>
          <Box>
            <LogoutRounded  onClick={goToProfile} style={{ fontSize: "35px" }} />
          </Box>
          <Box onClick={goToProfile} >
            <p>Logout</p>
          </Box>
        </Box> : <Box>
          <Box>
            <LoginRounded onClick={goToLogin} style={{ fontSize: "35px" }} />
          </Box>
          <Box onClick={goToLogin} >
            <p>Login</p>
          </Box>
        </Box>
        }
        {/* <Box>
          <Box>
            <Person onClick={goToLogin} style={{ fontSize: "35px" }} />
          </Box>
          <Box onClick={goToLogin} >
            <p>Login</p>
          </Box>
        </Box> */}

        <Box onClick={()=> nav("/cart")} mr="5" ml="10">
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
