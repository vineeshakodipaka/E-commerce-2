import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Container, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Shopcardslide from "../Shoppages/Shopcardslide";
import Shopcardslide2 from "../Shoppages/Shopcardslide2";

const Ourproducts = () => {
  const navigate = useNavigate(); // React Router's useNavigate hook for navigation

  return (
    <div className="ourproductscls mt-2">
      {/* Top section with background color */}
      <div style={{ background: "#FFDAA9" }}>
        <Container>
          <Row className="pt-5 pb-5 text-center ourproductsrow">
            <h4>Our Products</h4>
          </Row>
        </Container>
      </div>

      <div className="container">
        <h1 className="featuredproducts  px-md-3 pt-3 mt-4">FEATURED PRODUCTS</h1>
      </div>

      {/* Render the Shoppage component for featured products */}
      <Shopcardslide />

      <div className="container">
        <h1 className="featuredproducts  px-md-3 mt-4">NEW ARRIVALS</h1>
      </div>

      {/* Render the Shoppage component for new arrivals */}
      <Shopcardslide2 />

      {/* Button to learn more about new arrivals */}
      {/* <center>
        <button className="px-4 p-3 text-center rounded-4 btnlearn fw-bold mt-2 mb-3">
          Learn More&nbsp;
          <FaArrowRight
            className="ms-2 rounded-circle  text-black p-1"
            style={{ backgroundColor: "#FFA858" }}
          />
        </button>
      </center> */}
    </div>
  );
};

export default Ourproducts;
