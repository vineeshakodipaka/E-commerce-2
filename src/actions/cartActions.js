import { baseUrl } from "../Globalvarible";

// cartActions.js
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_ERROR = "FETCH_CART_ERROR";
export const fetchCartDetails = (userId) => {
  return (dispatch) => {
    // Make an API request to get cart details
    fetch(
      baseUrl+`Get_CartDetails.php?user_id=${userId}`
    )
      .then((response) => response.json()) // Assuming the response is in JSON format
      .then((data) => {
        dispatch({ type: "FETCH_CART_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_CART_ERROR", error });
      });
  };
};


// export const incrementQuantity = (productId) => {
//   return { type: "INCREMENT_QUANTITY", payload: productId };
// };

// export const decrementQuantity = (productId) => {
//   return { type: "DECREMENT_QUANTITY", payload: productId };
// };
// cartActions.js

export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";

export const incrementQuantity = (itemID,Qty) => {
  return (dispatch, getState) => {
    const formdata = new FormData();
    formdata.append("UserCartDetails_ID", itemID);
    formdata.append("Qty", Qty); // Assuming you want to increment by 1

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(baseUrl + "Update_CartDetails.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === true) {
          dispatch({
            type: INCREMENT_QUANTITY,
            payload: {
              itemID,
              Qty,
            },
          });
        } else {
        
          // Handle errors or dispatch a different action if needed.
        }
      })
      .catch((error) => {
       
        // Handle network errors or dispatch a different action if needed.
      });
  };
};

export const decrementQuantity = (itemID,Qty) => {
  return (dispatch, getState) => {
    const formdata = new FormData();
    formdata.append("UserCartDetails_ID", itemID);
    formdata.append("Qty", Qty); // Assuming you want to decrement by 1

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    fetch(baseUrl + "Update_CartDetails.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
       
        if (result.status === true) {
          dispatch({
            type: DECREMENT_QUANTITY,
            payload: {
              itemID,
              Qty,
            },
          });
        } else {
         
          // Handle errors or dispatch a different action if needed.
        }
      })
      .catch((error) => {
      
        // Handle network errors or dispatch a different action if needed.
      });
  };
};



export const REMOVE_FROM_CART = "REMOVE_FROM_CART"; // Define the action type

export const removeFromCart = (userCartDetailsId) => {
  return (dispatch) => { 
    // Make an API request to remove the item from the cart
    // Use the appropriate API endpoint and request method
    fetch(baseUrl + `Update_CartDetails.php`, {
      method: "POST", // Use the appropriate HTTP method for removal
      body: `UserCartDetails_ID=${userCartDetailsId}&Delete=1`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: REMOVE_FROM_CART, payload: userCartDetailsId });
        } else {
          // Handle error or show a message if removal fails
        }
      })
      .catch((error) => {
        // Handle error if the API request fails
      });
  };
};

