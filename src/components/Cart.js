import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Col, Container, Row, Table } from "react-bootstrap";

import "./Cart.css";
import Cookies from "js-cookie";

import { fetchCartDetails } from "../actions/cartActions";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import Marquee from "react-fast-marquee";
import AddressDetail from "./Account/AddressDetail";
import { baseUrl } from "../Globalvarible";

const Cart = ({ handleShowA, baseUrl1 }) => {
  const dispatch = useDispatch();
  const userId = Cookies.get("userId"); // Use your method to get the user ID from cookies
  const cartItems = useSelector((state) => state.cart.cartDetails);

  const [showCartPopup, setShowCartPopup] = useState(false);
  const cartClose = () => setShowCartPopup(false);
  const cartShow = () => setShowCartPopup(true);

  const totalPrice = useSelector((state) => state.cart.totalPrice);
  // const [totalPrice, setTotalPrice] = useState(totalPrice1);
  const [userAddress, setUserAddress] = useState(null);
  const navigate = useNavigate();

  // Assuming you have a function to handle API requests, for example, using the Fetch API.
  // This function returns the JSON response from the API.
  const fetchUserAddress = React.useCallback(
    async (userId) => {
      try {
        const response = await fetch(
          baseUrl1 + `Get_addresess.php?user_id=` + userId
        );

        const data = await response.json();

        return data;
      } catch (error) {
        return { status: false, message: "Error fetching user address" };
      }
    },
    [baseUrl1]
  );

  //check if the userAddress available or not
  useEffect(() => {
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
  }, [userId, fetchUserAddress]);

  useEffect(() => {
    dispatch(fetchCartDetails(userId));
  }, [dispatch, userId]);

  const handleIncrementQuantity = (productId, Qty) => {
    dispatch(incrementQuantity(productId, Qty));

    if (Qty <= 100) {
      Qty = 100;
    }
  };

  const handleDecrementQuantity = (productId, Qty) => {
    dispatch(decrementQuantity(productId, Qty));
    const item = cartItems.find(
      (item) => item.UserCartDetails_ID === productId
    );
    if (item && item.Qty <= 1) {
      dispatch(removeFromCart(productId));
    }
  };

  //checkout
  const handleCheckout = (totalPrice) => {
    if (userId) {
      if (userAddress) {
        // User is logged in and has an address
        // Proceed to the payment gateway
        cartShow();
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

  const handleRemoveFromCart = (userCartDetailsId) => {
    dispatch(removeFromCart(userCartDetailsId));
  };
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  // ...

  const [couponCode, setCouponCode] = useState("");

  const handleCheckCoupon = () => {
    const formdata = new FormData();
    formdata.append("CouponCode", inputValue);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(baseUrl + "CheckCopun.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          setApiResponse(result);
          setCouponCode(couponCode);
          // setInputValue("");
        } else {
          // Coupon is not available or invalid
          setApiResponse(result);
          // setInputValue("");
        }
      })
      .catch((error) => {
        alert("An error occurred while checking the coupon");
      })
      .finally(() => {
        // Clear the input field
        setInputValue("");
      });
  };

  // const discountPercentage = apiResponse
  //   ? parseFloat(apiResponse.data[0].DiscountPercent)
  //   : 0;
  const discountPercentage =
    apiResponse && apiResponse.data && apiResponse.data.length > 0
      ? parseFloat(apiResponse.data[0].DiscountPercent)
      : 0;

  const discountedPrice = totalPrice - (totalPrice * discountPercentage) / 100;

  return (
    <div className="container cartpage">
      <Container>
        <Row lg={2}>
          <Col xs={12} lg={8}>
            {" "}
            {cartItems.length === 0 ? (
              <div className="mx-5 mt-4">
                <Player
                  autoplay
                  loop
                  src={baseUrl1 + "Animations/Cart404.json"}
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
                      {cartItems.map((product, i) => (
                        <tr key={product.UserCartDetails_ID}>
                          <td>
                            <img
                              className="rounded-3  p-4  prdctimg"
                              src={product.Product_img}
                              alt={`Image ${i + 1}`}
                              id="prdctimg1"
                              style={{ width: "150px", height: "150px" }}
                            />
                          </td>
                          <td style={{ width: "20%", verticalAlign: "middle" }}>
                            <Marquee>{product.Product_name}</Marquee>
                          </td>
                          <td style={{ width: "15%", verticalAlign: "middle" }}>
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
                          <td style={{ width: "20%", verticalAlign: "middle" }}>
                            <button
                              className="rounded-2 pt-1 pb-1 px-2 inc-dec-btn"
                              onClick={() =>
                                handleDecrementQuantity(
                                  product.UserCartDetails_ID,
                                  Number(product.Qty) - 1
                                )
                              }
                            >
                              -
                            </button>
                            <span className="fw-bold px-1   pt-1 pb-1 px-lg-4 Qty">
                              {product.Qty}
                            </span>
                            <button
                              className=" rounded-2 pt-1 pb-1 px-2 inc-dec-btn"
                              onClick={() =>
                                handleIncrementQuantity(
                                  product.UserCartDetails_ID,
                                  Number(product.Qty) + 1
                                )
                              }
                            >
                              +
                            </button>
                          </td>
                          <td style={{ width: "20%", verticalAlign: "middle" }}>
                            Total: ₹
                            {product.isSale ? (
                              <span className="fw-bold">
                                {product.Product_offerPrice *
                                  parseFloat(product.Qty)}
                              </span>
                            ) : (
                              <span className="fw-bold">
                                {product.Product_originalPrice *
                                  parseFloat(product.Qty)}
                              </span>
                            )}
                          </td>
                          <td style={{ verticalAlign: "middle" }}>
                            <button
                              className="rounded-3 cartremove-btn p-2"
                              onClick={() =>
                                handleRemoveFromCart(product.UserCartDetails_ID)
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
                  {cartItems.map((product, i) => (
                    <div key={product.UserCartDetails_ID}>
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
                                  &nbsp;
                                </p>
                                <div>
                                  <button
                                    className="rounded-3 pt-1 pb-1 px-2  inc-dec-btn"
                                    onClick={() =>
                                      handleDecrementQuantity(
                                        product.UserCartDetails_ID,
                                        Number(product.Qty) - 1
                                      )
                                    }
                                  >
                                    -
                                  </button>
                                  <span className="fw-bold  pt-1 pb-1 px-lg-4 px-1">
                                    {product.Qty}
                                  </span>
                                  <button
                                    className="rounded-3  pt-1 pb-1 px-2  inc-dec-btn"
                                    onClick={() =>
                                      handleIncrementQuantity(
                                        product.UserCartDetails_ID,
                                        Number(product.Qty) + 1
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
                                        parseFloat(product.Qty)}
                                    </span>
                                  ) : (
                                    <span className="fw-bold">
                                      {product.Product_originalPrice *
                                        parseFloat(product.Qty)}
                                    </span>
                                  )}
                                </p>

                                <button
                                  className="mt-2 rounded-3 cartremove-btn p-2"
                                  onClick={() =>
                                    handleRemoveFromCart(
                                      product.UserCartDetails_ID
                                    )
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
                    <p>₹{apiResponse ? discountedPrice : totalPrice}</p>
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
                      <p>₹{apiResponse ? discountedPrice : totalPrice}</p>
                    </Col>
                  </Row>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <br />
                  <button
                    className="coupon p-2 rounded-3 mt-2 mb-3"
                    onClick={handleCheckCoupon}
                  >
                    Check Coupon
                  </button>

                  <center>
                    {cartItems.length !== 0 ? (
                      <button
                        className="btna w-100 p-2 rounded-3"
                        onClick={() => {
                          handleCheckout();
                        }}
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
      <AddressDetail
        totalPrice={totalPrice}
        apiResponse={apiResponse}
        discountedPrice={discountedPrice}
        couponCode={couponCode}
        showCartPopup={showCartPopup}
        cartClose={cartClose}
      />
    </div>
  );
};

export default Cart;
