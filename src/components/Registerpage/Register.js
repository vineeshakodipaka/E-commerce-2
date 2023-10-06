import React, { useState } from "react";
import Dctrimg from "../../Images/2Dr-Akhils-logo.png";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FiMail, FiUser } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import "./Register.css";
const Register = () => {
  // Define state to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  // Handle input field changes and update form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // // Effect hook to add custom class to the body
  // React.useEffect(() => {
  //   document.body.classList.add("donarcustom2-body");
  //   return () => {
  //     document.body.classList.remove("donarcustom2-body");
  //   };
  // }, []);

  return (
    <div className="registercls bg-white">
      <Container>
        <Row className=" px-md-5 mx-md-5 ">
          <Col>
            <Row className="mt-5  mb-5 justify-content-between">
              <Col md={6} xs={4}>
                <img src={Dctrimg} width="150px" />
              </Col>
              <Col md={3} xs={4} className="mx-lg-0 mx-md-0 mx-1 ">
                <Button
                  className="text-dark mt-3"
                  style={{ background: "none", border: "1px solid #10B8B4" }}
                >
                  Login
                </Button>
              </Col>
            </Row>
            <h5 className="mt-2 fw-bold">Book Now</h5>
            {/* Register form */}
            <Row className="mb-4 ">
              <Form className="mt-2" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" as={Col} md={12}>
                  <Form.Label className="formlabel">Full Name</Form.Label>
                  <InputGroup className="rounded-5">
                    <Form.Control
                      onChange={handleInputChange}
                      name="fullName"
                      className="labelholder px-4 pb-2"
                      required
                      type="text"
                      placeholder="Full Name"
                    />
                    <FiUser
                      className="position-absolute  ms-2 me-3"
                      style={{ top: "10px" }}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 position-relative" as={Col} md={12}>
                  <Form.Label className="formlabel">Email Address</Form.Label>

                  <InputGroup className="rounded-5">
                    <Form.Control
                      name="email"
                      onChange={handleInputChange}
                      className="labelholder px-4 pb-2"
                      required
                      type="text"
                      placeholder="example@mail.com"
                    />
                    <FiMail
                      className="position-absolute   ms-2 me-3"
                      style={{ top: "10px" }}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" as={Col} md={12}>
                  <Form.Label className="formlabel">Mobile Number</Form.Label>
                  <InputGroup className="rounded-5">
                    <Form.Control
                      onChange={handleInputChange}
                      name="mobilenumber"
                      className="labelholder px-4 pb-2"
                      required
                      type="number"
                      placeholder="9999999999"
                    />
                    <FaPhoneAlt
                      className="position-absolute ms-2 me-3"
                      style={{ top: "10px" }}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md={12}>
                  <Form.Label className="formlabel">Password</Form.Label>
                  <InputGroup className="rounded-5">
                    <Form.Control
                      onChange={handleInputChange}
                      name="password"
                      className="labelholder px-4 pb-2"
                      required
                      type="password"
                      placeholder="******"
                    />
                    <RiLockPasswordLine
                      className="position-absolute ms-2 me-3"
                      style={{ top: "10px" }}
                    />
                  </InputGroup>
                </Form.Group>

                <Button
                  className="rounded-4 p-3 w-100"
                  style={{ background: "#10B8B4", border: "none" }}
                >
                  SignUp
                </Button>
              </Form>
            </Row>

            {/* Row with line before and after "Or" text */}
            <Row className="justify-content-center mt-3 mb-3">
              <Col lg={5} xs={5}>
                <hr className="bg-primary" />
              </Col>
              <Col lg={1} xs={1}>
                <p>OR</p>
              </Col>
              <Col lg={5} xs={5}>
                <hr className="bg-primary" />
              </Col>
            </Row>
            <Row
              className="justify-content-around px-md-5  mx-2 mx-lg-0 mx-md-0  rounded-4 pt-3 pb-2"
              style={{ border: "1px solid #BDBDBD" }}
            >
              <div>
                <p>
                  <FcGoogle style={{ width: "40px", height: "40px" }} />
                  <span className="ms-3">Authorize with google</span>
                </p>
              </div>
            </Row>
            <Row
              className="justify-content-around px-lg-5  mx-2 mx-lg-0 mx-md-0  rounded-4 mt-3 pt-3 pb-2"
              style={{ border: "1px solid #BDBDBD" }}
            >
              <div>
                <p>
                  <BsFacebook
                    style={{ width: "40px", height: "40px", color: "#283BD0" }}
                  />
                  <span className="ms-3">Sign In with Facebook</span>
                </p>
              </div>
            </Row>
            {/* <Row
              className="justify-content-around"
              style={{ border: "1px solid #BDBDBD" }}
            >
              <Col lg={5}>
                <div></div>
              </Col>
              <Col lg={5}>Sign In with Facebook</Col>
            </Row> */}
            <div className="d-flex mt-4 mb-2">
              {/* <Form.Group controlId="checkboxId">
                <Form.Check type="checkbox" label="" custom />
              </Form.Group> */}
              <div>
                <AiFillCheckCircle style={{ color: "#10B8B4" }} />
              </div>
              <p>
                By clicking "Sign up" you create account and agree to our
                <span className="fw-bold">
                  Terms and Conditions and Privacy Policy.
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
