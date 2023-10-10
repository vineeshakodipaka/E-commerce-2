import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../../actions";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./Shoppage.css";

const Shoppage = ({ searchQuery }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);

  // Fetch products from the Redux store when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!searchQuery) {
      // If searchQuery is empty, fetch and display all products
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: products });
    } else {
      // If there is a search query, filter and display the matching products
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: filteredProducts });
    }
  }, [searchQuery, products, dispatch]);

  // Function to navigate to the single product page
  const handleShopPage = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    navigate("/singleproductpage");
  };

  // State to control the cart pop-up visibility
  const [showCartPopup, setShowCartPopup] = useState(false);

  // State to store the cart items (you can get this from your Redux store)
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Show the cart pop-up
    setShowCartPopup(true);
  };

  // Function to navigate to the cart page
  const handleViewCart = () => {
    window.scrollTo(0, 0);
    navigate("/cart");
  };

  return (
    <div className="shoppagecls">
      <Container>
        {/* Render product cards */}
        <Row
          xs={1}
          md={2}
          lg={3}
          xl={4}
          className="g-4 cardsrow  pb-md-5 py-md-3 mb-md-5 pt-5"
        >
          {searchQuery !== "" && // Only render when there's a search query
            products.map((product, i) => (
              <Col key={i}>
                <Card className="rounded-5 pt-1 pb-1 shopcards">
                  <Card.Body>
                    <div className="position-relative">
                      {/* Display "Sale" button if the product is on sale */}
                      {product.isSale && (
                        <button
                          className="sale-button rounded-3 p-2"
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
                      <Row onClick={handleShopPage}>
                        <div className="cardimg">
                          <Card.Img
                            className="rounded-3 p-4 mt-3 prdctimg"
                            src={product.Product_img}
                            alt={`Image ${i + 1}`}
                            style={{ width: "100%", height: "250px" }}
                          />
                        </div>
                        <Card.Text
                          className="text-center"
                          style={{ height: "50px" }}
                        >
                          <h5 style={{ lineHeight: "1.2" }}>
                            {product.Product_name}
                          </h5>
                        </Card.Text>
                      </Row>
                      <div className="px-3">
                        <hr />
                      </div>
                      {/* Display original and offer prices */}
                      <Row lg={2}>
                        <Col lg={5} xl={6} md={6} xs={6}>
                          <Card.Text className="mt-2">
                            <p>
                              <span
                                className="fw-normal"
                                style={{ color: "#B8B8B8" }}
                              >
                                <s>₹{product.Product_originalPrice}</s>
                              </span>
                              <span className="fw-bold">
                                {" "}
                                {product.Product_offerPrice}
                              </span>
                            </p>
                          </Card.Text>
                        </Col>
                        <Col lg={7} xl={6} md={6} xs={6}>
                          {/* Button to add the product to the cart */}
                          <Card.Text className="text-center  mt-xl-0 mt-md-2">
                            <button
                              className="rounded-3 cardbtn fw-normal p-2"
                              style={{
                                background: "#8F3300",
                                border: "none",
                                color: "white",
                                fontSize: "15px",
                              }}
                              onClick={() => handleAddToCart(product)}
                            >
                              Add To Cart
                            </button>
                          </Card.Text>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
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

export default Shoppage;
