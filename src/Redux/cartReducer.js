var initialData = {
  cart: [],
  // carts: [{ itemdetails: {}, count: 0 }],
};

const cartReducer = (storeData = initialData, action) => {
  switch (action.type) {
    case "ATC": {
      return {
        ...storeData,
        cart:[...action.payload],
      };
    }
    default: {
      return storeData;
    }
  }
};

export default cartReducer;
