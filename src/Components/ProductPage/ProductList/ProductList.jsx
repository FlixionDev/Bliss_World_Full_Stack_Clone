import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { ChevronDownIcon, MinusIcon, AddIcon } from "@chakra-ui/icons";
import { Select } from '@chakra-ui/react'
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
    fetchingProduct();
  }, []);
  const fetchingProduct=()=>{
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
  }
  const handleClickFilterSort = () => {
    //console.log(ref1.current.value)
    if(ref1.current.value==="AtoZ"){
      let sorting=totalProducts.sort((a,b)=>{
        if(a.title > b.title)
          {
            return 1;
          }
          if(a.title < b.title)
          {
            return -1;
          }
          return 0;
      })
      // console.log(sorting)
      setTotalProducts([...sorting])
    }else if(ref1.current.value==="ZtoA"){
      let sorting=totalProducts.sort((a,b)=>{
        if(a.title > b.title)
          {
            return -1;
          }
          if(a.title < b.title)
          {
            return 1;
          }
          return 0;
      })
      // console.log(sorting)
      setTotalProducts([...sorting])

    }else if(ref1.current.value==="asc"){
      let sorting=totalProducts.sort((a,b)=>{
        return a.price-b.price
      })
      // console.log(sorting)
      setTotalProducts([...sorting])
      
    }else if(ref1.current.value==="desc"){
      let sorting=totalProducts.sort((a,b)=>{
        return b.price-a.price
      })
      // console.log(sorting)
      setTotalProducts([...sorting])
    }else{
      fetchingProduct();
    }
    
  }
 // console.log(totalProducts)

  return (
    <div className="parent-container">
      <div className="sorting-div">
        <div className="sortBy">
          <label>SORT BY:</label>
          <select onChange={handleClickFilterSort} ref={ref1} style={{ backgroundColor: "#f2f7ff ", outline: "0px", fontWeight: "500" }} placeholder='Default'>
            <option value=''>Default</option>
            <option value='AtoZ'>A to Z</option>
            <option value='ZtoA'>Z to A</option>
            <option value='asc'>Ascending</option>
            <option value='desc'>Descending</option>
          </select>
          {/* <Menu  >
            <MenuButton ref={ref1}><ChevronDownIcon /></MenuButton>
            <MenuList >
              <MenuItem>Default</MenuItem>
              <MenuItem>A to Z</MenuItem>
              <MenuItem>Z to A</MenuItem>
              <MenuOptionGroup onChange={handleClickFilterSort} defaultValue=''  type='radio'>
                <MenuItemOption value='desc'>Default</MenuItemOption>
                <MenuItemOption value='AtoZ'>A to Z</MenuItemOption>
                <MenuItemOption value='desc'>Z to A</MenuItemOption>
                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                <MenuItemOption value='desc'>Descending</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Select  placeholder='Select'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>  */}
        </div>
        {/* <div className="sortBy">
        <Select placeholder='Select'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div> */}
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
