import React, { useState } from "react";
import spimg1 from "../../Images/image 55.png";
import productimg1 from "../../Images/Caramel-cruchies 1.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./Singleshoppage.css";
import Shopcardslide from "./Shopcardslide";
import Shopcardslide2 from "./Shopcardslide2";

const Singleshoppage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);

  const [selectedQuantity, setSelectedQuantity] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change for custom quantity
  const handleInputChange = (e) => {
    const inputNumber = parseInt(e.target.value, 10);
    if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= 10) {
      setSearchTerm(inputNumber.toString());
      setSelectedQuantity(inputNumber);
    } else {
      setSearchTerm("");
      setSelectedQuantity(null);
    }
  };

  // Toggle showInfo state for product information
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  // Toggle showInfo1 state for additional information
  const toggleInfo1 = () => {
    setShowInfo1(!showInfo1);
  };

  return (
    <div className="singleproductpage">
      <div className="position-relative mb-3">
        <img src={spimg1} width="100%" style={{ height: "250px" }} alt="img" />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          Caramel Crunchies Z6579
        </h3>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={5} className="mt-md-5">
            <button
              className="sale-button rounded-3 p-2"
              style={{ background: "#DC0000", border: "none", color: "white" }}
            >
              Sale
            </button>
            <br />
            <img className="mt-md-5" src={productimg1} alt="product" />
          </Col>

          {/* carameldiv column */}
          <Col lg={5} md={5}>
            <div className="carameldiv mt-md-5">
              <h3>Caramel Crunchies Z6579</h3>
              <h5>
                <span className="fw-normal fs-5 " style={{ color: "#B8B8B8" }}>
                  <s>₹420</s>
                </span>
                &nbsp;&nbsp;
                <span className="fs-4">₹525.00</span>
              </h5>
              <p className="fw-bold mt-4">For Extra Texture & Crunch.</p>
              <p> Caramelized biscuit granules.</p>
              <p> Size : 3-610 mm.</p>
              <p>
                {" "}
                Storage Condition -Store in cool, Dry, Hygienic place, Away from
                direct sunlight..
              </p>

              <div>
                <Row className="quantitycls mt-4 mb-5">
                  <Col>
                    <div className="mb-2">
                      <div className="d-flex">
                        <h6 className="mt-1">Quantity:</h6>
                        <div>
                          <input
                            className="quantity"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            value={searchTerm}
                            onChange={handleInputChange}
                            style={{ width: "50px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <button className="px-4 p-3 mt-3 mb-2 text-center rounded-4 shareproductbtn">
                      {" "}
                      Share this Product
                    </button>
                  </Col>
                  <Col>
                    <button className="px-4 p-3 text-center addtocart">
                      ADD TO CART &nbsp;
                      <FaArrowRight
                        className="ms-2 rounded-circle  text-black p-1"
                        style={{ backgroundColor: "#FFDAA9" }}
                      />
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <center>
          {/* Buttons to toggle product information and additional information */}
          <button
            className="mx-5 mt-2 mb-2 p-3 text-center rounded-4 productinfobtn"
            onClick={toggleInfo1}
          >
            Product Information
          </button>
          <button
            className="mx-5 mt-2 mb-2 p-3 text-center rounded-4 additionalinfotbtn"
            onClick={toggleInfo}
          >
            Additional Info
          </button>
        </center>

        {/* Welcome paragraphs */}
        <div className="welcomeparaclses">
          {showInfo1 && (
            <Row className=" text-center mt-5 mb-4">
              <Col>
                {/* Product welcome information */}
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8-10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw. Welcome to the world
                of natural and organic. Here you can discover the bounty of
                nature. We have grown on the principles of health, ecology, and
                care. We aim to give our customers a healthy chemical-free meal
                for perfect nutrition. It offers about 8–10% healthy
                chemical-free meal for perfect nutrition. It offers about 8-10%
                carbs. Simple sugars — such as glucose and fructose — make up
                70% and 80% of the carbs in raw.
              </Col>
            </Row>
          )}

          {showInfo && (
            <Row className="text-center mt-5 mb-4">
              <p>
                {/* Additional welcome information */}
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8-10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw.
              </p>
              <p>
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8-10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw.
              </p>
            </Row>
          )}

          <Row className="relaprds">
            <h3 className=" text-center mt-5 mb-4">Related Products</h3>
            {/* Render related products from the Shoppage component */}
            <Shopcardslide />
            <Shopcardslide2 />
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Singleshoppage;
