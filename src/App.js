// src/App.js
import React, { useState } from "react";
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
import { useAuth } from "./AuthContext "; // Import the AuthProvider from your context file
import Checkoutform from "./components/Checkoutform/Checkoutform";
import BrandProductsPage from "./components/Brandspage/BrandProductsPage";
import Subbrandproducts from "./components/Brandspage/Subbrandproducts";
const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isAuthenticated } = useAuth(); // Access authentication status

  // Check if the userId cookie is present to determine authentication
  const userId = Cookies.get("userId");
  const isUserAuthenticated = isAuthenticated || !!userId;

  return (
    <div className="app">
      <Navbar handleShow2={handleShow} />
      {/* <Errorpage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/blog" element={<Blogpage />} /> */}
        <Route path="/singleblog" element={<Singleblog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproductpage" element={<Singleshoppage />} />
        <Route path="/search-results" element={<Shoppage />} />
        <Route path="/singlecardpage/:cardId" element={<SingleCardPage />} />
        <Route path="/brandspage" element={<NewBrandspage />} />
        <Route path="/shoppage" element={<MainShop />} />
        <Route
          element={
            <Login
              handleShow2={handleShow}
              handleClose2={handleClose}
              show2={show}
            />
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/brands/:brandId" element={<BrandDetails />} />
        <Route
          path="/subcategories/:subcatId"
          element={<SubcategoryDetails />}
        />
        <Route
          path="/subcatdropdown/:subcatdrop"
          element={<Subcatdropdown />}
        />

        {isUserAuthenticated ? (
          // Render the /blog route only if authenticated
          <Route path="/blog" element={<Blogpage />} />
        ) : (
          // Redirect to the home page if not authenticated
          <Route path="/blog" element={<Navigate to="/" replace />} />
        )}
        <Route
          path="/checkout"
          element={<Checkoutform handleShow2={handleShow} />}
        />

        <Route path="/brand-products" element={<BrandProductsPage />} />
        <Route path="/subbrand-products" element={<Subbrandproducts />} />
      </Routes>
      <Login handleShow2={handleShow} handleClose2={handleClose} show2={show} />
      <Bottombar />
      <Footer />
    </div>
  );
};

export default App;
