import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Col, Container, Row, Table } from "react-bootstrap";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  
} from "../actions"; // Import the actions
import "./Cart.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Cart = ({  handleShowA }) => {
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

  const paymentHandler = async () => {
    const options = {
      key: "rzp_test_6KtffZXfPIHqEm", // Replace with your actual Razorpay key_id
      name: "Elite EnterPrise",
      description: "Payment for Your Product",
      amount: totalPrice * 100, // Convert the price to paisa (e.g., 1000 paisa = 10 INR)
      //order_id: order_id, // Pass the order ID obtained from your backend
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          // Capture the payment on your server using the paymentId
          // Simulate a capture API call
          console.log(`Payment captured for ID: ${paymentId}`);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const navigate = useNavigate();
  const userId = Cookies.get("userId");
  // React.useEffect(() => {
  //   const cartItemsCookie = Cookies.get("cartItems");
  //   if (cartItemsCookie) {
  //     const loadedCartItems = JSON.parse(cartItemsCookie);

  //     // Filter out duplicate items and create a map for quick look-up
  //     const itemMap = new Map();
  //     cartItems.forEach((item) => itemMap.set(item.Product_id, item));

  //     // Loop through the loaded items and add them to the Redux state
  //     loadedCartItems.forEach((item) => {
  //       if (itemMap.has(item.Product_id)) {
  //         // If the item already exists in the Redux state, just update its quantity
  //         const existingItem = itemMap.get(item.Product_id);
  //         if (existingItem.quantity < item.quantity) {
  //           dispatch(incrementQuantity(existingItem.Product_id));
  //         }
  //       } else {
  //         // If the item is not in the Redux state, add it
  //         dispatch(addToCart(item));
  //       }
  //     });
  //   }
  // }, [dispatch, cartItems]);

 const [userAddress, setUserAddress] = useState(null);

 // Assuming you have a function to handle API requests, for example, using the Fetch API.
 // This function returns the JSON response from the API.
 const fetchUserAddress = async (userId) => {
   try {
     const response = await fetch(
       `https://paradox122.000webhostapp.com/_API/Get_addresess.php?user_id=${userId}`
     );
     const data = await response.json();
     return data;
   } catch (error) {
     console.error("Error fetching user address:", error);
     return { status: false, message: "Error fetching user address" };
   }
 };

 React.useEffect(() => {
   // Fetch user address when the component mounts
   if (userId) {
     fetchUserAddress(userId).then((data) => {
       if (data.status) {
         setUserAddress(data.data[0]);
       } else {
         setUserAddress(null);
       }
     });
   }
 }, [userId]);

 const handleCheckout = () => {
   if (userId) {
     if (userAddress) {
       // User is logged in and has an address
       // Proceed to the payment gateway
       paymentHandler();
     } else {
       // User is logged in but doesn't have an address
       // Show a form to add an address or perform any required actions
       navigate("/checkout");
     }
   } else {
     // User is not logged in
     // Show a signup or login form
     navigate("/checkout");
     handleShowA();
   }
 };


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
                              className="rounded-3  p-4  prdctimg"
                              src={product.Product_img}
                              alt={`Image ${i + 1}`}
                              id="prdctimg1"
                              style={{ width: "100%", height: "60%" }}
                            />
                          </td>
                          <td style={{ width: "20%" }}>
                            {product.Product_name}
                          </td>
                          <td style={{ width: "20%" }}>
                            {/* <p>
                              <s>₹{product.Product_originalPrice}</s>&nbsp;
                              <span className="fw-bold">
                                ₹{product.Product_offerPrice}
                              </span>
                            </p> */}
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
                          </td>
                          <td style={{ width: "12%" }}>
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
                          <td style={{ width: "20%" }}>
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
                                  {product.Product_offerPrice *
                                    product.quantity}
                                </p>
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
                    {/* <button
                      className="checkout w-100 p-2 rounded-3 "
                      onClick={handlecheck}
                    >
                      Proceed To Checkout
                    </button> */}

                    {cartItems.length !== 0 ? (
                      <button
                        className="checkout w-100 p-2 rounded-3"
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

export default Cart;
