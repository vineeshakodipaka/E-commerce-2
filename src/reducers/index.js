// src/reducers/index.js

import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import brandsReducer from "./brandsReducer"; // Import the brandsReducer
import brandProductsReducer from "./brandProductsReducer"; // Import the brandProductsReducer
import brandSubproductsReducer from "./brandSubproductsReducer"; // Import the brandSubproductsReducer

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  brands: brandsReducer, // Include the brandsReducer
  brandProducts: brandProductsReducer, // Add the brandProductsReducer
  brandSubproducts: brandSubproductsReducer, // Add the brandSubproductsReducer
});

export default rootReducer;
