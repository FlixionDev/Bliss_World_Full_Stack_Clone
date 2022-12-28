import { addition } from "./actionTypes.js";

export const action = (data, dispatch) => {
  dispatch({
    type: "ATC",
    payload: data,
  });
};
