import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { ChevronDownIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  MenuOptionGroup,
  MenuItemOption,
  Box,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Cartmodal from "../../CartPage/Cartmodal";
import { useRef } from "react";

export const ProductList = () => {
  const ref1 = useRef();
  const { endpoint1 } = useParams();
  // console.log(endpoint);
  const [totalProducts, setTotalProducts] = useState([]);
  const [categories, setCategories] = useState({});
  // const endpoint1 = "bestSeller";
  useEffect(() => {
    fetch(`https://noiseless-soapy-zucchini.glitch.me/products`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("total data", data);
        setTotalProducts(data);
        setCategories({ ...data.categories });
      })
      .catch((err) => {
        console.log("something went wrong");
      });
  }, []);
  const handleClickFilterSort = () => {
    console.log(ref1.current)
  }

  return (
    <div className="parent-container">
      <div className="sorting-div">
        <div className="sortBy">
          <label>SORT BY:</label>
          <Menu  >
            <MenuButton ref={ref1}>Default<ChevronDownIcon /></MenuButton>
            <MenuList onClick={handleClickFilterSort} zIndex="1000" >
              <MenuItem>Default</MenuItem>
              <MenuItem>A to Z</MenuItem>
              <MenuItem>Z to A</MenuItem>
              {/* <MenuOptionGroup defaultValue='' title='Order' type='radio'>
                <MenuItemOption value='desc'>Default</MenuItemOption>
                <MenuItemOption value='AtoZ'>A to Z</MenuItemOption>
                <MenuItemOption value='desc'>Z to A</MenuItemOption>
                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                <MenuItemOption value='desc'>Descending</MenuItemOption>
              </MenuOptionGroup> */}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="container">
        <div className="left-filter">
          <Accordion allowMultiple>
            {Object.keys(categories).length > 0 &&
              Object.keys(categories).map((category, index) => (
                <AccordionItem key={index + 1}>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {category}
                          </Box>
                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                      </h2>
                      {categories[category].map((item, index) => (
                        <AccordionPanel key={index + 1} textAlign="left" pb={2}>
                          {item}
                        </AccordionPanel>
                      ))}
                    </>
                  )}
                </AccordionItem>
              ))}
          </Accordion>
        </div>
        <div className="product-container">
          {totalProducts.map((item, index) => (
            <ProductCard endpoint={endpoint1} item={item} key={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
