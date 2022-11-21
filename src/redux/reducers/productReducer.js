import actionTypes from "../actions/actionTypes";

const initialState = {
  start: false,
  success: false,
  product: [],
  cart: [],
  fail: false,
  error: "",
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        start: true,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        start: false,
        success: true,
        fail:false,
        product: action.payload,
      };
    case actionTypes.FETCH_FAIL:
      return {
        start: false,
        success: false,
        fail: true,
        error: action.payload,
      };
      
    default:
      return state;
  }
};

export default productReducer;
