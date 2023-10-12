import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Checkoutform.css";
import { useNavigate } from "react-router-dom";
const Checkoutform = ({ handleShow2 }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  // Define state to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    address: "",
    pincode: "",
    state: "",
    country: "",
    city: "",
    paymentMethod: "",
  });

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    navigate("/login");
  };

  // Handle input field changes and update form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="checkoutcls">
      <h2 className="text-center">Checkout Shop</h2>
      <Row className="mx-lg-5 px-lg-5">
        <Form className="mt-5 px-5 mx-lg-5" onSubmit={handleFormSubmit}>
          <Row lg={2} xs={1} md={1}>
            <Col xs={12}>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">First Name*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="firstName"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Last Name*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="lastName"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Your Email*</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={handleInputChange}
                    className="labelholder"
                    required
                    type="text"
                    placeholder="example@yourmail.com"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Company*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="company"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Your company name here"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Address*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="address"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Your address here"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Pincode*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="pincode"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Pincode"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">State*</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={handleInputChange}
                    name="state"
                    className="labelholder form-select"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="State 1">State 1</option>
                    <option value="State 2">State 2</option>
                    <option value="State 3">State 3</option>
                    <option value="State 4">State 4</option>
                    <option value="State 5">State 5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Country*</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={handleInputChange}
                    name="country"
                    className="labelholder form-select"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="Country 1">Country 1</option>
                    <option value="Country 2">Country 2</option>
                    <option value="Country 3">Country 3</option>
                    <option value="Country 4">Country 4</option>
                    <option value="Country 5">Country 5</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Town/City</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="city"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="city"
                  />
                </Form.Group>
              </Row>
            </Col>
            <Col>
              <Card>
                {" "}
                <div className="px-md-2 px-lg-5 mx-lg-5 mx-md-2 px-2 mx-2 row mt-2 ">
                  <h2 className="mt-5 mb-2">Your Order</h2>
                  <hr />

                  <table className="shop_table ">
                    <tbody className="pt-2 pb-2">
                      <tr className="mt-5 pb-5">
                        <th>Product</th>
                        <th>SubTotal</th>
                      </tr>
                      <tr className="border-0 mt-4">
                        <td>
                          {cartItems.map((product) => (
                            <div>
                              {product.Product_name}{" "}
                              <span className="ms-2">
                                x &nbsp; {product.quantity}
                              </span>
                            </div>
                          ))}
                        </td>

                        <td>
                          {cartItems.map((product) => (
                            <div>₹{product.Product_offerPrice} </div>
                          ))}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>Subtotal </h5>
                        </td>
                        <td>
                          <p> ₹{totalPrice}</p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <h5>Total Price </h5>
                        </td>
                        <td>
                          <p> ₹{totalPrice}</p>
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <Form.Check
                          type="radio"
                          id="cashOnDelivery"
                          name="paymentMethod"
                          value="Cash On Delivery"
                          label="Cash On Delivery"
                          onChange={handleInputChange}
                        />

                        <p>Pay with Cash upon delivery</p>
                      </tr>
                    </tbody>
                    <center>
                      <button
                        type="submit"
                        // onClick={handleShow2}
                        className="rounded-4 p-3 w-100 mx-4 mt-4 mb-4 mx-lg-5"
                      >
                        Place Order
                      </button>
                    </center>
                  </table>
                </div>
              </Card>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  );
};

export default Checkoutform;
