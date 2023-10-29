
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Col, Form, Row,Modal } from "react-bootstrap";

import UserDetails from "./UserDetails";

const Addressform = ({ baseUrl1 }) => {
  // Define state to manage form data

  const userId = Cookies.get("userId"); // Retrieve userId from cookies

  //posting data in form
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
      const response = await fetch(
        baseUrl1 + "Add_addresess.php",
        requestOptions
      );

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

        closeModal();
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

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <div className="text-start mx-lg-5 mx-3 px-lg-5 address-details">
      <h3 className="mx-4 mx-lg-0 mx-md-1">Your Address Details</h3>

      <UserDetails baseUrl1={baseUrl1} />
      <button className="mx-2 btna rounded-3 p-2" onClick={openModal}>
        Add New+
      </button>

      <Modal show={showModal} onHide={closeModal} className="p-0">
        <Modal.Body>
          <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
          <div className=" text-center">
            <Row className="text-start">
              <Form className="mt-5 px-lg-5" onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        lg="6"
                        xs="12"
                      >
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
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        lg="6"
                        xs="12"
                      >
                        <Form.Label className="formlabel">
                          StreetAddress*
                        </Form.Label>
                        <Form.Control
                          onChange={handleInputChange}
                          value={formData.StreetAddress}
                          name="StreetAddress"
                          className="labelholder"
                          required
                          type="text"
                          placeholder="Enter StreetAddress"
                        />
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        lg="6"
                        xs="12"
                      >
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
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        lg="6"
                        xs="12"
                      >
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
                          <option value="Telangana">Telangana</option>
                          <option value="Andrapradesh">Andrapradesh</option>
                          <option value="MadhyaPradesh">MadhyaPradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Gujarat">Gujarat</option>
                        </Form.Control>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        lg="6"
                        xs="12"
                      >
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
                      <Form.Group
                        className="mb-3"
                        as={Col}
                        md="6"
                        lg="6"
                        xs="12"
                      >
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
                          <option value="India">India</option>
                          <option value="Germany">Germany</option>
                          <option value="Canada">Canada</option>
                          <option value="France">France</option>
                          <option value="Australia">Australia</option>
                        </Form.Control>
                      </Form.Group>
                    </Row>
                  </Col>
                </Row>
                <button
                  type="submit"
                  // onClick={handleShow2}
                  className="rounded-4 btna p-3 mt-4 mb-4 "
                >
                  Save Changes
                </button>
              </Form>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Addressform;
