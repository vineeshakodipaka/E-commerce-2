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
import Singleblog from "./components/Blog/Singleblog";
import MainShop from "./components/Shoppages/MainShop";
import NewBrandspage from "./components/Brandspage/NewBrandspage";
import Login from "./components/Login&signup/Login";
import Signup from "./components/Login&signup/Signup";
import SubcategoryDetails from "./components/Brandspage/SubcategoryDetails";
import BrandDetails from "./components/Brandspage/BrandDetails";
import Subcatdropdown from "./components/Brandspage/Subcatdropdown";
import Cookies from "js-cookie"; // Import js-cookie

import Checkoutform from "./components/Checkoutform/Checkoutform";
import BrandProductsPage from "./components/Brandspage/BrandProductsPage";
import Subbrandproducts from "./components/Brandspage/Subbrandproducts";
import Account from "./components/Account/Account";
import Dashboard from "./components/Account/Dashboard ";
import AccountDetails from "./components/Account/AccountDetails ";
import Addresses from "./components/Account/Addresses";
import Cartofline from "./components/Cartofline";
import AddressDetail from "./components/Account/AddressDetail";
import { baseUrl } from "./Globalvarible";


const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [signupshow, signupsetShow] = useState(false);

  const signuphandleClose = () => signupsetShow(false);
  const signuphandleShow = () => signupsetShow(true);

 const [showCartPopup, setShowCartPopup] = useState(false);
 const cartClose = () => setShowCartPopup(false);
 const cartShow = () => setShowCartPopup(true);

 

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




  // const baseUrl = "https://paradox122.000webhostapp.com/_API/";

  return (
    <div className="app">
      <Navbar handleShow2={handleShow} />
      {/* <Errorpage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart
              handleShowA={signuphandleShow}
              cartShow={cartShow}
              baseUrl1={baseUrl}
              cartClose={cartClose}
            />
          }
        />
        <Route
          path="/cartpage"
          element={
            <Cartofline handleShowA={signuphandleShow} baseUrl1={baseUrl} />
          }
        />

        <Route path="/singleblog" element={<Singleblog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproductpage/:cardId" element={<Singleshoppage />} />
        <Route
          path="/search-results"
          element={<Shoppage baseUrlCart={baseUrl} />}
        />
       
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

        {userId === undefined ? (
          <Route path="/account" element={<Navigate to="/" replace />} />
        ) : (
          <Route path="/account/*" element={<Account />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="accountDetails" index element={<AccountDetails />} />
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
      <AddressDetail
        baseUrl1={baseUrl}
        showCartPopup={showCartPopup}
        // cartShow={cartShow}
        cartClose={cartClose}
      />
      <Bottombar />

      <Footer />
    </div>
  );
};

export default App;
