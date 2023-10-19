// src/App.js
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./components/Home/Home";
import Footer from "./layout/Footer";
import About from "./components/About/About";
import Blogpage from "./components/Blog/Blogpage";
//import Errorpage from "./components/Errorpage/Errorpage";
import Contact from "./components/Contact/Contact";
import Singleshoppage from "./components/Shoppages/Singleshoppage";
import Shoppage from "./components/Shoppages/Shoppage";
import Bottombar from "./layout/Bottombar";
import SingleCardPage from "./components/Shoppages/SingleCardPage";
import Singleblog from "./components/Blog/Singleblog";
import MainShop from "./components/Shoppages/MainShop";
import NewBrandspage from "./components/Brandspage/NewBrandspage";
import Login from "./components/Login&signup/Login";
import Signup from "./components/Login&signup/Signup";
import SubcategoryDetails from "./components/Brandspage/SubcategoryDetails";
import BrandDetails from "./components/Brandspage/BrandDetails";
import Subcatdropdown from "./components/Brandspage/Subcatdropdown";
import Cookies from "js-cookie"; // Import js-cookie
//import { useAuth } from "./AuthContext "; // Import the AuthProvider from your context file
import Checkoutform from "./components/Checkoutform/Checkoutform";
import BrandProductsPage from "./components/Brandspage/BrandProductsPage";
import Subbrandproducts from "./components/Brandspage/Subbrandproducts";
import Account from "./components/Account/Account";
import Dashboard from "./components/Account/Dashboard ";
import AccountDetails from "./components/Account/AccountDetails ";
import Addresses from "./components/Account/Addresses";
import Cartofline from "./components/Cartofline";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signupshow, signupsetShow] = useState(false);

  const signuphandleClose = () => signupsetShow(false);
  const signuphandleShow = () => signupsetShow(true);

  // const { isAuthenticated } = useAuth(); // Access authentication status

  // // Check if the userId cookie is present to determine authentication
  // const userId = Cookies.get("userId");
  // Cookies.set("userId", userId);
  // console.log("user", userId);

  // const isUserAuthenticated = isAuthenticated || !!userId;

  const [userId, setUserId] = useState(Cookies.get("userId"));
  console.log("userId--", userId);
  console.log("userId Type", typeof userId);

  useEffect(() => {
    // Update the userId whenever it changes in the cookies
    const interval = setInterval(() => {
      setUserId(Cookies.get("userId"));
    }, 1000); // Adjust the interval as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

 

 
const handleFormSubmit = (formData) => {
  // Assuming formData includes a UserID
  const userId = formData.UserID;

  // Save the address data to local storage
  localStorage.setItem(`userAddress_${userId}`, JSON.stringify(formData));

  // setAddressData(formData);
};





// const handleAddToCart = (product) => {
//   // Get the user ID from cookies or wherever it's stored
//   const userId = Cookies.get("userId"); // Replace this with your actual method of getting the user ID

//   // Prepare the data to send in the request
//   const data = new FormData();
//   data.append("User_ID", userId);
//   data.append("Product_id", product.Product_id);
//   data.append("Qty", "1"); // You can modify this to specify the quantity

//   const requestOptions = {
//     method: "POST",
//     body: data,
//     redirect: "follow",
//   };

//   fetch(
//     "https://paradox122.000webhostapp.com/_API/Add_CartDetails.php",
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => {
//       // Handle the response from the server, e.g., show a success message
//       console.log("xart,,,,,", result);
//     })
//     .catch((error) => {
//       // Handle errors, e.g., show an error message
//       console.error("Error:", error);
//     });
// };





  const baseUrl = "https://paradox122.000webhostapp.com/_API/";

  return (
    <div className="app">
      <Navbar handleShow2={handleShow} />
      {/* <Errorpage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart handleShowA={signuphandleShow} baseUrl1={baseUrl} />}
        />
        <Route
          path="/cartpage"
          element={<Cartofline handleShowA={signuphandleShow} baseUrl1={baseUrl} />}
        />
        {/* <Route
          path="cart"
          element={
            userId ? (
              <Cart handleShowA={signuphandleShow} />
            ) : (
              <Navigate to="/" />
            )
          }
        /> */}
        {/* <Route path="/blog" element={<Blogpage />} /> */}
        <Route path="/singleblog" element={<Singleblog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproductpage" element={<Singleshoppage />} />
        <Route
          path="/search-results"
          element={<Shoppage baseUrlCart={baseUrl} />}
        />
        <Route path="/singlecardpage/:cardId" element={<SingleCardPage />} />
        <Route path="/brandspage" element={<NewBrandspage />} />
        <Route path="/shoppage" element={<MainShop />} />
        <Route path="/brands/:brandId" element={<BrandDetails />} />
        <Route
          path="/subcategories/:subcatId"
          element={<SubcategoryDetails />}
        />
        <Route
          path="/subcatdropdown/:subcatdrop"
          element={<Subcatdropdown />}
        />
        {/* {isUserAuthenticated ? (
          // Render the /account route only if authenticated
          <Route path="/account" element={<Account />} />
        ) : (
          // Redirect to the home page if not authenticated
          <Route path="/account" element={<Navigate to="/" replace />} />
        )} */}
        {userId === undefined ? (
          <Route path="/account" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="/account/*" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="accountDetails" element={<AccountDetails />} />
            <Route
              path="addresses"
              element={
                <Addresses
                  handleShow2={handleShow}
                  handleClose2={handleClose}
                  baseUrl1={baseUrl}
                  show2={show}
                  handleFormSubmit={handleFormSubmit}
                />
              }
            />
          </Route>
        )}

        <Route
          path="/checkout"
          element={
            <Checkoutform
              handleShow2={handleShow}
              handleFormSubmit={handleFormSubmit}
              baseUrl1={baseUrl}
            />
          }
        />
        {/* <Route path="/checkout" element={<PaymentComponent />} /> */}
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/brand-products" element={<BrandProductsPage />} />
        <Route path="/subbrand-products" element={<Subbrandproducts />} />
      </Routes>
      <Login
        handleShow2={handleShow}
        handleClose2={handleClose}
        show2={show}
        handleShow3={signuphandleShow}
      />
      <Signup
        handleShow3={signuphandleShow}
        handleShow2={handleShow}
        handleClose3={signuphandleClose}
        show3={signupshow}
      />
      <Bottombar />
      <Footer />
    </div>
  );
};

export default App;
