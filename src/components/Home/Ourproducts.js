import React from "react";

import { Container, Row } from "react-bootstrap";

import Shopcardslide from "../Shoppages/Shopcardslide";
import Shopcardslide2 from "../Shoppages/Shopcardslide2";

const Ourproducts = () => {
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
        <h1 className="featuredproducts  px-4 pt-3 mt-4">FEATURED PRODUCTS</h1>
      </div>

      {/* Render the Shoppage component for featured products */}
      <Shopcardslide />

      <div className="container">
        <h1 className="featuredproducts  px-4 mt-4">NEW ARRIVALS</h1>
      </div>

      {/* Render the Shoppage component for new arrivals */}
      <Shopcardslide2 />
    </div>
  );
};

export default Ourproducts;
