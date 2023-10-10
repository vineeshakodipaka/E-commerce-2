import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Col, Container, Row, button } from "react-bootstrap";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../actions"; // Import the actions
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));

    const item = cartItems.find((item) => item.Product_id === productId);
    if (item && item.quantity === 0) {
      dispatch(removeFromCart(productId));
    }
  };

  const navigate = useNavigate();
  const handlecheck = () => {
    navigate("/checkout");
  };
  return (
    <div className="container cartpage">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <Container>
          <Row
            xs={1}
            md={2}
            lg={3}
            xl={4}
            className="g-4 cardsrow pb-md-5 mb-md-5  px-md-4 mx-md-5"
          >
            {cartItems.map((product, i) => (
              <Col>
                <Card className="rounded-5 pt-1 pb-1 shopcards">
                  <Card.Body>
                    <div className="position-relative">
                      {/* Display "Sale" button if the product is on sale */}
                      {/* {product.isFeatured && ( */}
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
                      {/* )} */}
                      {/* Handle clicking on a product card to navigate */}
                      <Row>
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
                                <s>{product.Product_originalPrice}</s>
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
                          <div>
                            <button
                              style={{ border: "none" }}
                              onClick={() =>
                                handleDecrementQuantity(product.Product_id)
                              }
                            >
                              -
                            </button>
                            <span>{product.quantity}</span>
                            <button
                              style={{ border: "none" }}
                              onClick={() =>
                                handleIncrementQuantity(product.Product_id)
                              }
                            >
                              +
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
            )}
          </Row>
          <div className="px-md-4 mx-md-5 row">
            <h5>Price Details:</h5>
            <p> ₹{totalPrice}</p>
          </div>
          <button onClick={handlecheck}>Checkout</button>
          {/* Display quantity of each item here */}
          {/* <div className="item-quantities">
            {cartItems.map((product) => (
              <div key={product.id}>
                {product.name}: {product.quantity}
              </div>
            ))}
          </div> */}
        </Container>
      )}
    </div>
  );
};

export default Cart;
