import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Checkoutform.css";
import Cookies from "js-cookie";

const Checkoutform = ({  baseUrl1 }) => {
  const cartItems = useSelector((state) => state.cart.cartDetails);
  const { totalPrice } = useSelector((state) => state.cart);

     const userId = Cookies.get("userId");

  // Define state to manage form data

  const [formData, setFormData] = useState({
    UserID: userId,
    Name: "",
    StreetAddress: "",
    City: "",
    State: "",
    ZipCode: "",
    Contry: "",
  });





  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object and append the form fields
    const formdata = new FormData();
    formdata.append("UserID", formData.UserID);
    formdata.append("Name", formData.Name);
    formdata.append("StreetAddress", formData.StreetAddress);
    formdata.append("City", formData.City);
    formdata.append("State", formData.State);
    formdata.append("ZipCode", formData.ZipCode);
    formdata.append("Contry", formData.Contry);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(baseUrl1+"Add_addresess.php", requestOptions);

      if (response.ok) {
      
        // Clear the input fields by resetting formData to its initial state
        setFormData({
          UserID: userId,
          Name: "",
          StreetAddress: "",
          City: "",
          State: "",
          ZipCode: "",
          Contry: "",
        });
        // Trigger a parent component's function if needed
       
      } else {
        // Form submission failed, display an error message to the user
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
 
      // Handle network errors or other exceptions
      alert("Form submission failed. Please try again later.");
    }
  };

  // Handle input field changes and update form data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <div className="checkoutcls">
      <h2 className="text-center">Checkout Shop</h2>
      <Row className="mx-lg-5 px-lg-5">
        <Form className="mt-5 px-5 mx-lg-5" onSubmit={handleSubmit}>
          <Row lg={2} xs={1} md={1}>
            <Col xs={12}>
              <Row className="mb-4">

                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel"> Name*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="Name"
                    value={formData.Name}
                    className="labelholder"
                    required
                    type="text"
                    placeholder=" Name"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">StreetAddress*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    value={formData.StreetAddress}
                    name="StreetAddress"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Your StreetAddress here"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">City*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="City"
                    value={formData.City}
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Your City here"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">State*</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={handleInputChange}
                    value={formData.State}
                    name="State"
                    className="labelholder form-select"
                    required
                  >
                    <option value="">Select State</option>
                    <option value="State 1">Telangana</option>
                    <option value="State 2">Andrapradesh</option>
                    <option value="State 3">MadhyaPradesh</option>
                    <option value="State 4">Maharashtra</option>
                    <option value="State 5">Gujarat</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">ZipCode*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="ZipCode"
                    value={formData.ZipCode}
                    className="labelholder"
                    required
                    type="text"
                    placeholder="ZipCode"
                  />
                </Form.Group>
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="5">
                  <Form.Label className="formlabel">Country*</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={handleInputChange}
                    name="Contry"
                    value={formData.Contry}
                    className="labelholder form-select"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="Country 1">India</option>
                    <option value="Country 2">Germany</option>
                    <option value="Country 3">Canada</option>
                    <option value="Country 4">France</option>
                    <option value="Country 5">Australia</option>
                  </Form.Control>
                </Form.Group>
               
              </Row>
            </Col>
            <Col>
              <Card>
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
                       

                        <p>Pay with Cash upon delivery</p>
                      </tr>
                    </tbody>
                    <center>
                      <button
                        type="submit"
                        
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
