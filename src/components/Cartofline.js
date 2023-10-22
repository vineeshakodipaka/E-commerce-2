import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Col, Container, Row, Table } from "react-bootstrap";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  
} from "../actions"; // Import the actions
import "./Cart.css";
import Cookies from "js-cookie";
import { Player } from "@lottiefiles/react-lottie-player";
import { baseUrl } from "../Globalvarible";



const Cartofline = ({ handleShowA }) => {
  const cartItems1 = useSelector((state) => state.cart1.items);
  const { totalPrice } = useSelector((state) => state.cart1);
  const dispatch = useDispatch();

  const userId = Cookies.get("userId");


  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));

    const item = cartItems1.find((item) => item.Product_id === productId);
    if (item && item.quantity === 0) {
      dispatch(removeFromCart(productId));
    } 
  };

  //checkout
  const handleCheckout = () => {
    if (!userId) {
      // User is not logged in
      // Show a signup or login form
    
      handleShowA();
    }
  };
const handleRemoveFromCart = (productId) => {
  const itemIndex = cartItems1.findIndex((item) => item.Product_id === productId);

  if (itemIndex !== -1) {
    // Use the index to remove the item from the array
    cartItems1.splice(itemIndex, 1);
    dispatch(removeFromCart(productId));
  }
};


 

  return (
    <div className="container cartpage">
      <Container>
        <Row lg={2}>
          <Col xs={12} lg={8}>
            {" "}
            {cartItems1.length === 0 ? (
              <div className="mx-5 mt-4">
                <Player
                  autoplay
                  loop
                  src={baseUrl + "Animations/Cart404.json"}
                  style={{ height: "300px", width: "300px" }}
                  visible={true}
                ></Player>
              </div>
            ) : (
              <div>
                <div className="d-lg-block d-md-block d-none">
                  <Table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems1.map((product, i) => (
                        <tr key={i}>
                          <td>
                            <img
                              className="rounded-3    prdctimg"
                              src={product.Product_img}
                              alt={`Image ${i + 1}`}
                              id="prdctimg1"
                              style={{ width: "80%", height: "100px" }}
                            />
                          </td>
                          <td>{product.Product_name}</td>
                          <td>
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
                            </p>
                          </td>
                          <td>
                            <button
                              className="p-2"
                              style={{ border: "none" }}
                              onClick={() =>
                                handleDecrementQuantity(product.Product_id)
                              }
                            >
                              -
                            </button>
                            <span className="fw-bold">{product.quantity}</span>
                            <button
                              className="p-2"
                              style={{ border: "none" }}
                              onClick={() =>
                                handleIncrementQuantity(product.Product_id)
                              }
                            >
                              +
                            </button>
                          </td>
                          <td>
                            Total: ₹
                            {product.isSale ? (
                              <span className="fw-bold">
                                {product.Product_offerPrice * product.quantity}
                              </span>
                            ) : (
                              <span className="fw-bold">
                                {product.Product_originalPrice *
                                  product.quantity}
                              </span>
                            )}
                          </td>
                          <td>
                            <button
                              style={{ border: "none" }}
                              onClick={() =>
                                handleRemoveFromCart(product.Product_id)
                              }
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="d-lg-none d-md-none d-block ">
                  {cartItems1.map((product, i) => (
                    <div key={i}>
                      <center>
                        <Card>
                          <Card.Body>
                            <Row>
                              <Col xs={5}>
                                <img
                                  className="rounded-3 pt-3 pb-2   "
                                  src={product.Product_img}
                                  alt={`Image ${i + 1}`}
                                  style={{ width: "100%", height: "150px" }}
                                />
                              </Col>
                              <Col xs={7}>
                                <p>{product.Product_name}</p>
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
                                </p>
                                <div>
                                  <button
                                    className="p-2"
                                    style={{ border: "none" }}
                                    onClick={() =>
                                      handleDecrementQuantity(
                                        product.Product_id
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                  <span className="fw-bold">
                                    {product.quantity}
                                  </span>
                                  <button
                                    className="p-2"
                                    style={{ border: "none" }}
                                    onClick={() =>
                                      handleIncrementQuantity(
                                        product.Product_id
                                      )
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                                <p className="mt-2">
                                  Total: ₹
                                  {product.isSale ? (
                                    <span className="fw-bold">
                                      {product.Product_offerPrice *
                                        product.quantity}
                                    </span>
                                  ) : (
                                    <span className="fw-bold">
                                      {product.Product_originalPrice *
                                        product.quantity}
                                    </span>
                                  )}
                                </p>

                                <button
                                  style={{ border: "none" }}
                                  onClick={() =>
                                    handleRemoveFromCart(product.product_Id)
                                  }
                                >
                                  Remove
                                </button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </center>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Col>
          <Col xs={12} lg={4}>
            <Card>
              <CardBody>
                <h5>
                  Cart totals
                  <hr />
                </h5>
                <Row className="justify-content-between">
                  <Col>
                    <p>Sub total</p>
                  </Col>
                  <Col>
                    {" "}
                    <p> ₹{totalPrice}</p>
                  </Col>
                </Row>
                <div>
                  <p>Shipping:</p>

                  <hr />
                  <Row className="justify-content-between">
                    {" "}
                    <Col>
                      <h6>Total</h6>
                    </Col>
                    <Col>
                      {" "}
                      <p> ₹{totalPrice}</p>
                    </Col>
                  </Row>
                  <input type="text" />
                  <br />
                  <button className="coupon p-2 rounded-3 mt-2 mb-3">
                    check coupon
                  </button>
                  <center>
                    {cartItems1 && cartItems1.length !== 0 ? (
                      <button
                        className="btna w-100 p-2 rounded-3"
                        onClick={handleCheckout}
                      >
                        Proceed To Checkout
                      </button>
                    ) : null}
                  </center>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cartofline;
