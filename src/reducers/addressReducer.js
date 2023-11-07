import { FETCH_ADDRESSES_SUCCESS, FETCH_ADDRESSES_FAILURE } from "../actions";
// addressReducer.js
const initialState = {
  data: [],
  loading: false,
};


const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES_SUCCESS:
      
      return {
        ...state,
        data: action.payload,
        loading: false,
   
      };
          
    case FETCH_ADDRESSES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default addressReducer;
