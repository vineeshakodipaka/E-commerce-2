// cartActions.js
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_ERROR = "FETCH_CART_ERROR";
export const fetchCartDetails = (userId) => {
  return (dispatch) => {
    // Make an API request to get cart details
    fetch(
      `https://paradox122.000webhostapp.com/_API/Get_CartDetails.php?user_id=${userId}`
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

    fetch("https://paradox122.000webhostapp.com/_API/Update_CartDetails.php", requestOptions)
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
          console.error("API error:", result.message);
          // Handle errors or dispatch a different action if needed.
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
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

    fetch(
      "https://paradox122.000webhostapp.com/_API/Update_CartDetails.php",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("API Response:", result.status, result.message); // Log status and message

        if (result.status === true) {
          dispatch({
            type: DECREMENT_QUANTITY,
            payload: {
              itemID,
              Qty
            },
          });
        } else {
          console.error("API error:", result.message);
          // Handle errors or dispatch a different action if needed.
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
        // Handle network errors or dispatch a different action if needed.
      });
  };
};



export const REMOVE_FROM_CART = "REMOVE_FROM_CART"; // Define the action type

export const removeFromCart = (userCartDetailsId) => {
  return (dispatch) => { 
    // Make an API request to remove the item from the cart
    // Use the appropriate API endpoint and request method
    fetch(`https://paradox122.000webhostapp.com/_API/Update_CartDetails.php`, {
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




// // cartActions.js
// // cartActions.js
// export const ADD_TO_CART = "ADD_TO_CART";

// export const addToCartAPI = (userId, productId) => {
//   return (dispatch) => {
//     const formdata = new FormData();
//     formdata.append("User_ID", userId);
//     formdata.append("Product_id", productId);
//     formdata.append("Qty", "1"); // You can modify this to specify the quantity

//     const requestOptions = {
//       method: 'POST',
//       body: formdata,
//       redirect: 'follow',
//     };

//     fetch("https://paradox122.000webhostapp.com/_API/Add_CartDetails.php", requestOptions)
//       .then(response => response.text())
//       .then(result => {
//         // Handle the response from the server, e.g., show a success message
//         console.log("Cart Response:", result);

//         // Dispatch the ADD_TO_CART action with the payload
//         dispatch({
//           type: ADD_TO_CART,
//           payload: {
//             userId: userId,
//             productId: productId,
//           },
//         });

//         // You can dispatch another action here if needed, or update your state accordingly
//       })
//       .catch(error => {
//         // Handle errors, e.g., show an error message
//         console.error("Error:", error);
//       });
//   };
// };

