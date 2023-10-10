import React, { useState } from "react";
import "./Login&signup.css";
import { Col, Form, Row, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContext "; // Import the useAuth hook
import Cookies from "js-cookie";

const Login = ({ show2, handleClose2, handleShow2 }) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { isAuthenticated, login, logout } = useAuth(); // Access authentication state and functions

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogout = () => {
    // Remove the user ID cookie and log the user out
    Cookies.remove("userId");
    logout();
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://paradox122.000webhostapp.com/_API/Login.php",
        loginData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.data.message === "Login successful") {
        // Login successful, set the user ID in cookies and log in
        const userId = response.data.user.User_ID;
        Cookies.set("userId", userId);
        login(); // Call the login function to set isAuthenticated to true
        navigate("/blog");
      } else {
        // Login failed, display an error message
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors or other exceptions
      alert("Login failed. Please try again later.");
    }
  };

  // State to control the cart pop-up visibility
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* Cart Pop-up */}
      <center>
        <Modal show={show2} onHide={handleClose2} centered>
          <Modal.Body>
            <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
            <div className="logincls text-center">
              <h3 className="fs-2 elite ">Elite</h3>
              <h4>E n t e r p r i s e s</h4>
              <Row>
                <h3 className="loginaccount mb-3">Login To Your Account</h3>

                <Form className="loginform" onSubmit={submitHandler}>
                  <Row className="justify-content-center ">
                    <Form.Group as={Col} md="4">
                      <Form.Control
                        type="username"
                        name="username"
                        value={loginData.username}
                        onChange={changeHandler}
                        required
                        placeholder="Username"
                        className="inputgrp"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="justify-content-center mt-4">
                    <Form.Group as={Col} md="4" className="inputgrp">
                      <Form.Control
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={changeHandler}
                        required
                        placeholder="Password"
                      />
                    </Form.Group>
                  </Row>

                  <Row className=" pt-3">
                    <Link to="/forgotpassword" className="forgotlink fw-bold">
                      Forgot Your Password?
                    </Link>
                    <Link to="/signup" className="signup fw-bold mt-2 mb-2">
                      Signup
                    </Link>
                  </Row>
                  <button className="rounded-4 p-3 px-5 mt-1">Login</button>
                  {isAuthenticated ? (
                    <button
                      className="rounded-4 p-3 px-5 mt-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  ) : null}
                </Form>
              </Row>
            </div>
          </Modal.Body>
        </Modal>
      </center>
    </>
  );
};

export default Login;
