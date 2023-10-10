// src/reducers/productReducer.js

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_TO_CART,
  SEARCH_PRODUCTS,
} from "../actions";

const initialState = {
  products: [], // Ensure products is initialized as an empty array
  loading: false,
  error: null,
  cart: [],
  filteredProducts: [], // Initialize filteredProducts as well
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        filteredProducts: action.payload, // Initialize filteredProducts with all products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case SEARCH_PRODUCTS:
      const searchQuery = action.payload.toLowerCase();
      console.log("Search Query:", action.payload);
      if (searchQuery.trim() === "") {
        return {
          ...state,
          filteredProducts: state.products, // Reset the filteredProducts to the full product list
        };
      } else {
        const filteredProducts = state.products.filter((product) =>
          product.Product_name.toLowerCase().includes(searchQuery)
        );
        return {
          ...state,
          filteredProducts,
        };
      }
    default:
      return state;
  }
};

export default productReducer;
