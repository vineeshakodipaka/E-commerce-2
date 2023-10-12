import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  Row,
  Table,
  Button,
} from "react-bootstrap";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../actions"; // Import the actions
import "./Cart.css";
// import { useNavigate } from "react-router-dom";
import PaymentComponent from "./Paymentgateway/PaymentComponent";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);
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

  // const navigate = useNavigate();
  // const handlecheck = () => {
  //   navigate("/checkout");
  // };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const price = 1000;
  return (
    <div className="container cartpage">
      <Container>
        <Row lg={2}>
          <Col xs={12} lg={8}>
            {" "}
            {cartItems.length === 0 ? (
              <div className="mx-5 mt-4">
                <p style={{ textAlign: "center" }}>Your cart is empty.</p>
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
                      {cartItems.map((product, i) => (
                        <tr key={i}>
                          <td>
                            {/* {product.isSale && (
                            <button
                              className="sale-button rounded-3 px-2"
                              style={{
                                background: "#DC0000",
                                border: "none",
                                color: "white",
                              }}
                            >
                              Sale
                            </button>
                          )} */}
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
                              <s>₹{product.Product_originalPrice}</s>&nbsp;
                              <span className="fw-bold">
                                ₹{product.Product_offerPrice}
                              </span>
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
                            {product.Product_offerPrice * product.quantity}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="d-lg-none d-md-none d-block ">
                  {cartItems.map((product, i) => (
                    <div key={i}>
                      {/* {product.isSale && (
                            <button
                              className="sale-button rounded-3 px-2"
                              style={{
                                background: "#DC0000",
                                border: "none",
                                color: "white",
                              }}
                            >
                              Sale
                            </button>
                          )} */}
                      <center>
                        <Card>
                          <Card.Body>
                            {" "}
                            <img
                              className="rounded-3 pt-3 pb-2   prdctimg"
                              src={product.Product_img}
                              alt={`Image ${i + 1}`}
                              style={{ width: "80%", height: "150px" }}
                            />
                            <p>{product.Product_name}</p>
                            <p>
                              <s>₹{product.Product_originalPrice}</s>&nbsp;
                              <span className="fw-bold">
                                ₹{product.Product_offerPrice}
                              </span>
                            </p>
                            <div>
                              <button
                                className="p-2"
                                style={{ border: "none" }}
                                onClick={() =>
                                  handleDecrementQuantity(product.Product_id)
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
                                  handleIncrementQuantity(product.Product_id)
                                }
                              >
                                +
                              </button>
                            </div>
                            <p>
                              Total: ₹
                              {product.Product_offerPrice * product.quantity}
                            </p>
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
                  <center>
                    {/* <button
                      className="checkout w-100 p-2 rounded-3 "
                      onClick={handlecheck}
                    >
                      Proceed To Checkout
                    </button> */}

                    <button
                      className="checkout w-100 p-2 rounded-3"
                      onClick={handleShow}
                    >
                      Proceed To Checkout
                    </button>
                  </center>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Payment Gateway</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <PaymentComponent order_id="your_order_id" price={price} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
