import React from "react";
// import {  Link as ReachLink } from "@reach/router";
import { Box, Heading, Link } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function LowerNavbar() {
  const nav = useNavigate();

  const handleClick = (endpoint1) => {
    nav(`/product/${endpoint1}`);
  };

  return (
    <Box alignItems="center" background="#73d2e6" display="flex">
      <Menu>
        <MenuButton ml="300px" border="none" background="#73d2e6" color="white">
          <Link to="/product/bestSeller">
            BEST SELLERS
            <ChevronDownIcon />
          </Link>
        </MenuButton>
        <MenuList width={"auto"}>
          <Heading
            onClick={() => handleClick("bestSeller")}
            ml="10px"
            as="h6"
            size="sm"
          >
            <Link to="">BEST SELLERS BY CATEGORY</Link>
          </Heading>
          <MenuItem>
            <Link to="" onClick={() => handleClick("bodyAndHairCare")}>
              Body & Hair Care
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="#" onClick={() => handleClick("skinCare")}>
              Skincare
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton ml="20px" border="none" background="#73d2e6" color="white">
          SKINCARE <ChevronDownIcon />
        </MenuButton>
        <Box display={"auto"}>
          <MenuList width={100}>
            <Heading
              onClick={() => handleClick("skinCare")}
              as="h6"
              ml="10px"
              size="sm"
            >
              <Link to="">BY CATEGORY</Link>
            </Heading>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("bestSeller")}>
                Best Sellers
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("miniBlissData")}>
                Mini Bliss
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("cleansersData")}>
                Cleansers
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("tonersData")}>
                Toners
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("skinCare")}>
                Face Masks
              </Link>
            </MenuItem>

            <Heading as="h6" ml="10px" size="sm">
              BY CONCERN
            </Heading>
            <MenuItem>
              <Link to="#">Acene & Blemishes</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">Discoloration</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>

      <Menu>
        <MenuButton ml="20px" border="none" background="#73d2e6" color="white">
          BODY & HAIR CARE <ChevronDownIcon />
        </MenuButton>
        <Box display={"auto"}>
          <MenuList width={100}>
            <Heading
              onClick={() => handleClick("bodyAndHairCare")}
              ml="10px"
              as="h6"
              size="sm"
            >
              <Link to="">BODY & HAIR CARE</Link>
            </Heading>

            <MenuItem>
              <Link to="#" onClick={() => handleClick("bestSeller")}>Best Sellers</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("bestSeller")}>Body Wash & Scrubs</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("bestSeller")}>Body Moisturizers</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">Hair Removal</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("bestSeller")}>Body Firming</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#" onClick={() => handleClick("bodyAndHairCare")}>Hair Care</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>

      <Menu>
        <MenuButton ml="20px" border="none" background="#73d2e6" color="white">
          SETS & KITS <ChevronDownIcon />
        </MenuButton>
        <Box display={"auto"}>
          <MenuList width={100}>
            <Heading as="h6" ml="10px" size="sm">
              BY CATEGORY
            </Heading>
            <MenuItem>
              <Link to="#">Body & Hair Care</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">Skin Care Sets</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>

      <Menu>
        <MenuButton ml="20px" border="none" background="#73d2e6" color="white">
          SHOP ALL <ChevronDownIcon />
        </MenuButton>
        <Box display={"auto"}>
          <MenuList width={100}>
            <MenuItem>
              <Link to="#">BLISS ORIGINALS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">FALL FAVORITE</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">NEW</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">VEGAN SKINCARE</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">BEST SELLERS</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>

      <Menu>
        <MenuButton ml="20px" border="none" background="#73d2e6" color="white">
          GIFT GUIDE <ChevronDownIcon />
        </MenuButton>
        <Box display={"auto"}>
          <MenuList width={100}>
            <MenuItem>
              <Link to="#">GIFT SETS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">STOCKING STUFFERS</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">GIFTS UNDER $25</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">GIFT UNDER $50</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>

      <Menu>
        <MenuButton ml="20px" border="none" background="#73d2e6" color="white">
          THIS IS BLISS <ChevronDownIcon />
        </MenuButton>
        <Box display={"auto"}>
          <MenuList width={100}>
            <Heading as="h6" ml="10px" size="sm">
              ABOUT BLISS
            </Heading>

            <MenuItem>
              <Link to="#">About US</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">Find Us</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">Join the Happy Skin Crew</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">How We Give Back</Link>
            </MenuItem>
            <MenuItem>
              <Link to="#">Sustainability</Link>
            </MenuItem>
            <Heading as="h6" ml="10px" size="sm">
              PRODUCT DETAILS
            </Heading>
            <MenuItem>
              <Link to="#">Ingredients Glossary</Link>
            </MenuItem>
          </MenuList>
        </Box>
      </Menu>
    </Box>
  );
}
