import React, { useEffect, useState } from "react";
import spimg1 from "../../Images/image 55.png";

import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./Singleshoppage.css";
import Shopcardslide from "./Shopcardslide";
import Shopcardslide2 from "./Shopcardslide2";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../../CartContext";
import { addToCart } from "../../actions";

const Singleshoppage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo1, setShowInfo1] = useState(false);
  //single cartpage

  const { handleAddToCart } = useCartContext(); // Use the useCartContext hook to access the handleAddToCart function
  const navigate = useNavigate();
  const [showCartPopup, setShowCartPopup] = useState(false);

  const userId = Cookies.get("userId"); // Use your method to get the user ID from cookies
  const { cardId } = useParams() || {};
  const card = useSelector((state) =>
    state.products.filteredProducts.find(
      (product) => product.Product_id === cardId
    )
  );

  const dispatch = useDispatch();
 
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change for custom quantity
  const handleInputChange = (e) => {
    const inputNumber = parseInt(e.target.value, 10);
    if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= 10) {
      setSearchTerm(inputNumber.toString());
      // Removed the setSelectedQuantity line since selectedQuantity is not used
      
    } else {
      setSearchTerm("");
     
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

  //single cart

  useEffect(() => {}, [cardId]);

  if (!card) {
    return (
      <Container>
        <p>Card not found.</p>
      </Container>
    );
  }

  const handleAddToCart1 = (product) => {
    window.scrollTo(0, 0);
    if (!userId) {
      dispatch(addToCart(product));
      setShowCartPopup(true);
    } else {
      setShowCartPopup(true);
    }
  };

  const handleViewCart = () => {
    setShowCartPopup(false); // Close the popup
    if (!userId) {
      navigate("/cartpage"); // Navigate to cartpage if userId is not available
    } else {
      navigate("/cart"); // Navigate to cart if userId is available
    }
  };
  return (
    <div className="singleproductpage">
      <div className="position-relative mb-3">
        <img src={spimg1} width="100%" style={{ height: "250px" }} alt="img" />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          {card.Product_name}
        </h3>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={5} className="mt-md-5">
            <div>
              {card.isSale && (
                <button
                  className="sale-button rounded-3 p-2"
                  style={{
                    background: "#DC0000",
                    border: "none",
                    color: "white",
                  }}
                >
                  Sale
                </button>
              )}

              <br />
              <img
                className="mt-md-5 p-lg-4 pt-lg-4 pt-3 pb-3 prdctimg"
                src={card.Product_img}
                alt="product"
                style={{ width: "60%" }}
              />
            </div>
          </Col>

          {/* carameldiv column */}
          <Col lg={5} md={5}>
            <div className="carameldiv mt-md-5">
              <h3>{card.Product_name}</h3>
              <h5>
                {card.isSale ? (
                  <span className="fw-bold">₹{card.Product_offerPrice}</span>
                ) : (
                  <span className="fw-bold">₹{card.Product_originalPrice}</span>
                )}
                &nbsp;
                {card.isSale && (
                  <span className="fw-normal" style={{ color: "#B8B8B8" }}>
                    <s>₹{card.Product_originalPrice}</s>
                  </span>
                )}
               
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
                    <button
                      className="p-md-3 p-2 px-lg-4 px-md-3 p-lg-3 text-center addtocart"
                      onClick={() => {
                        handleAddToCart(card);
                        handleAddToCart1(card);
                        setShowCartPopup(true);
                      }}
                    >
                      ADD TO CART
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

      {/* Cart Pop-up */}
      <Modal show={showCartPopup} onHide={() => setShowCartPopup(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Item Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your item has been added to the cart.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCartPopup(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleViewCart}>
            View Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Singleshoppage;
