import { combineReducers, createStore } from "redux";
import handleCart from "./reducers/handleCart";
import productReducer from "./reducers/productReducer";

const rootReduce = combineReducers({
  handleCart,
  productState: productReducer,
});

const store = createStore(rootReduce);

export default store;
