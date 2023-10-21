import React, { useState } from "react";
import "./Login&signup.css";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../Globalvarible";

const Signup = ({ show3, handleClose3, handleShow2 }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object and append the form fields
    const formdata = new FormData();
    formdata.append("username", formData.username);
    formdata.append("password", formData.password);
    formdata.append("email", formData.email);
    formdata.append("phone", formData.phone);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        baseUrl+"Signup.php",
        requestOptions
      );

      if (response.ok) {
        // Signup successful, redirect to the login page  
        navigate("/login");
      } else {
        // Signup failed, display an error message to the user
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup failed", error);
      // Handle network errors or other exceptions
      alert("Signup failed. Please try again later.");
    }
  };

  return (
    <>
      <center>
        <Modal show={show3} onHide={handleClose3} centered>
          <Modal.Body>
            <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
            <div className="signupcls text-center">
              <h3 className="fs-2 elite mt-">Elite</h3>
              <h4>E n t e r p r i s e s</h4>
              <Row className="mt-2">
                <h3 className="singupfree">Sign Up For Free</h3>
                <Form className="loginform" onSubmit={handleSubmit}>
                  <Row className="justify-content-center mt-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      lg="8"
                      xs="12"
                      // controlId="validationCustom02"
                    >
                      {/* <Form.Label>Last name</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Username"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row className="justify-content-center mt-4">
                    <Form.Group
                      as={Col}
                      md="4"
                      lg="8"
                      xs="12"
                      className="inputgrp"
                      // controlId="validationCustom02"
                    >
                      {/* <Form.Label>Last name</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row className="justify-content-center mt-4">
                    <Form.Group
                      as={Col}
                      md="4"
                      lg="8"
                      xs="12"
                      className="inputgrp"
                      // controlId="validationCustom02"
                    >
                      {/* <Form.Label>Last name</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="password"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row className="justify-content-center mt-4">
                    <Form.Group
                      as={Col}
                      md="4"
                      lg="8"
                      xs="12"
                      className="inputgrp"
                      // controlId="validationCustom02"
                    >
                      {/* <Form.Label>Last name</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="confirmPassword"
                        required
                      />
                    </Form.Group>
                  </Row>

                  <Row className="justify-content-center mt-4">
                    <Form.Group
                      as={Col}
                      md="4"
                      xs="12"
                      lg="8"
                      className="inputgrp"
                      // controlId="validationCustom02"
                    >
                      {/* <Form.Label>Last name</Form.Label> */}
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mt-2">
                    <Link
                      onClick={() => {
                        handleShow2();
                        handleClose3();
                      }}
                      className="haveanaccount fw-bold"
                    >
                      already have an account?
                    </Link>
                  </Row>
                  <button className="rounded-4 p-3 px-5 mt-1">
                    Create Account
                  </button>
                </Form>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </center>
    </>
  );
};

export default Signup;
