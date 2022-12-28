var initialData = {
    isAuth:false,
    token:""
  };
  
  const isAuthReducer = (storeData = initialData, action) => {
    switch (action.type) {
      case "LOGIN": {
        return {
          ...storeData,
          isAuth:true,
          token:action.payload.token,
        };
      }
      default: {
        return storeData;
      }
    }
  };
  
  export default isAuthReducer;