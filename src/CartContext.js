import Cookies from "js-cookie";
import React, { createContext, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // Define your cart state and related functions here

  const handleAddToCart = (product) => {
    // Get the user ID from cookies or wherever it's stored
    const userId = Cookies.get("userId"); // Replace this with your actual method of getting the user ID

    // Prepare the data to send in the request
    const data = new FormData();
    data.append("User_ID", userId);
    data.append("Product_id", product.Product_id);
    data.append("Qty", "1"); // You can modify this to specify the quantity

    const requestOptions = {
      method: "POST",
      body: data,
      redirect: "follow",
    };

    fetch(
      "https://paradox122.000webhostapp.com/_API/Add_CartDetails.php",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // Handle the response from the server, e.g., show a success message
        console.log("xart,,,,,", result);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error:", error);
      });
  };

  return (
    <CartContext.Provider value={{ handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
