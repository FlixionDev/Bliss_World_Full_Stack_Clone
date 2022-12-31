import {store } from '../../Redux/Store'

export const addDataToCartAction = (item) => {
    // const cartData = store.getState();
    // console.log("cart cata",cartData);
  return (dispatch, getState) => {
    console.log("dipatch", dispatch);
    console.log("dipatch", getState());

    dispatch({
      type: "ATC",
      payload: item,
    });
  };
};
