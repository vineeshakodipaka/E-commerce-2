// src/reducers/index.js

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import brandsReducer from "./brandsReducer"; // Import the brandsReducer
import brandProductsReducer from "./brandProductsReducer"; // Import the brandProductsReducer
import brandSubproductsReducer from "./brandSubproductsReducer"; // Import the brandSubproductsReducer
import cartReducer2 from "./cartReducer2";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  brands: brandsReducer, // Include the brandsReducer
  brandProducts: brandProductsReducer, // Add the brandProductsReducer
  brandSubproducts: brandSubproductsReducer, // Add the brandSubproductsReducer
  cart1: cartReducer2,
  addresses: addressReducer, // Add the Addressesreducer to your rootReducer
});

export default rootReducer;
