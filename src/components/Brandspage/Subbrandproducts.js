import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchBrandSubproducts, addToCart } from "../../actions"; // Import the action to fetch brand products
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../Shoppages/Shoppage.css";
import { useCartContext } from "../../CartContext"; // Import the useCartContext hook
import Cookies from "js-cookie";

const Subbrandproducts = () => {
  const { handleAddToCart } = useCartContext(); // Use the useCartContext hook to access the handleAddToCart function

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Subcatid = queryParams.get("Subcat_id");

  const products = useSelector((state) => state.brandSubproducts.subproducts);

  const loading = useSelector((state) => state.brandProducts.loading);
  const error = useSelector((state) => state.brandProducts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch products for the specified Brand_id
    dispatch(fetchBrandSubproducts(Subcatid));
  }, [dispatch, Subcatid]);

  const Scrollink = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  // State to control the cart pop-up visibility
  const [showCartPopup, setShowCartPopup] = useState(false);

  const userId = Cookies.get("userId"); // Use your method to get the user ID from cookies
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
    <div>
      {/* <h2>Products for Brand ID: {brandId}</h2> */}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="shoppagecls">
          <Container>
            {/* Render product cards */}
            <Row
              xs={2}
              md={2}
              lg={3}
              xl={4}
              className="g-4 cardsrow  pb-md-5 py-md-3 mb-md-5 pt-5"
            >
              {products.map((product, i) => (
                <div key={i}>
                  <Col className="g-3 ">
                    <Card
                      className="rounded-3 pt-1 pb-1 shopcards mb-2"
                      // style={{ width: "100%", height: "450px" }}
                    >
                      <Card.Body>
                        <div className="position-relative">
                          {/* Display "Sale" button if the product is on sale */}
                          {product.isSale && (
                            <button
                              className="sale-button rounded-3 px-2"
                              style={{
                                background: "#DC0000",
                                border: "none",
                                color: "white",
                                position: "absolute",
                                top: "0",
                                left: "0",
                              }}
                            >
                              Sale
                            </button>
                          )}
                          {/* Handle clicking on a product card to navigate */}
                          <Link
                            className="cartlink"
                            to={`/singleproductpage/${product.Product_id}`}
                            onClick={() => {
                              Scrollink();
                            }}
                          >
                            <Row>
                              <div className="cardimg">
                                <Card.Img
                                  variant="top"
                                  className="rounded-3 mt-3 p-lg-4 pt-lg-4 pt-3 pb-3 prdctimg"
                                  src={product.Product_img}
                                  alt={`Image ${i + 1}`}
                                  // style={{ width: "100%", height: "250px" }}
                                />
                              </div>
                              <div
                                className="text-center"
                                // style={{ height: "50px" }}
                              >
                                <h5
                                  className="productname mt-2"
                                  style={{ lineHeight: "1.2" }}
                                >
                                  {product.Product_name}
                                </h5>
                              </div>
                            </Row>
                          </Link>
                          <div className="px-3 d-md-none d-lg-block d-none">
                            <hr />
                          </div>
                          {/* Display original and offer prices */}
                          <Row lg={2} className="row2cart">
                            <Col lg={5} xl={6} md={6} xs={12}>
                              {/* <div className="mt-0 mt-lg-2 mt-md-2 ms-lg-0 price fs-5">
                                <p>
                                  <span className="fw-bold">
                                    {" "}
                                    ₹{product.Product_offerPrice}
                                  </span>
                                  &nbsp;
                                  <span
                                    className="fw-normal"
                                    style={{ color: "#B8B8B8" }}
                                  >
                                    <s>₹{product.Product_originalPrice}</s>
                                  </span>
                                </p>
                              </div> */}
                              <div className="mt-0 mt-lg-2 mt-md-2 ms-lg-0 price fs-5">
                                <p>
                                  {product.isSale ? (
                                    <span className="fw-bold">
                                      ₹{product.Product_offerPrice}
                                    </span>
                                  ) : (
                                    <span className="fw-bold">
                                      ₹{product.Product_originalPrice}
                                    </span>
                                  )}
                                  &nbsp;
                                  {product.isSale && (
                                    <span
                                      className="fw-normal"
                                      style={{ color: "#B8B8B8" }}
                                    >
                                      <s>₹{product.Product_originalPrice}</s>
                                    </span>
                                  )}
                                </p>
                              </div>
                            </Col>
                            <Col lg={7} xl={6} md={6} xs={12}>
                              {/* Button to add the product to the cart */}
                              <div className="text-center  mt-xl-0 mt-md-2">
                                <button
                                  className="rounded-3  fw-normal p-2"
                                  style={{
                                    background: "#8F3300",
                                    border: "none",
                                    color: "white",
                                  }}
                                  onClick={() => {
                                    handleAddToCart(product);
                                    handleAddToCart1(product);
                                    setShowCartPopup(true);
                                  }}
                                >
                                  Add To Cart
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              ))}
            </Row>
          </Container>

          {/* Cart Pop-up */}
          <Modal show={showCartPopup} onHide={() => setShowCartPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Item Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your item has been added to the cart.</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowCartPopup(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleViewCart}>
                View Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Subbrandproducts;
