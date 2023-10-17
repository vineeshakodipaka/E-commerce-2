import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

const AccountDetails = () => {

  // Define state to manage form data
  const [formData, setFormData] = useState({
    UserID: "",
    Name: "",
    StreetAddress: "",
    City: "",
    State: "",
    ZipCode: "",
    Contry: "",
    Phone: "",
    Email: "",
  });

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  };

  // Handle input field changes and update form data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="checkoutcls">
      <h2 className="text-center">Account details</h2>
      <Row className="mx-lg-5 px-lg-5 col-lg-12 text-start">
        <Form className="mt-5 px-5 mx-lg-5" onSubmit={handleFormSubmit}>
          <Row lg={2} xs={1} md={1}>
            <Col xs={12} lg={12}>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="12">
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
                <Form.Group as={Col} md="6" lg="12">
                  <Form.Label className="formlabel">Display name*</Form.Label>
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
              </Row>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="12">
                  <Form.Label className="formlabel">Email*</Form.Label>
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
              <Row>
                <Form.Group as={Col} md="6" lg="12">
                  <Form.Label className="formlabel">
                    Current password *
                  </Form.Label>
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
                <Form.Group as={Col} md="6" lg="12">
                  <Form.Label className="formlabel">New password*</Form.Label>
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
              <Row>
                <Form.Group as={Col} md="6" lg="12">
                  <Form.Label className="formlabel">
                    Confirm new password*
                  </Form.Label>
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
            </Col>
          </Row>
          <button
            type="submit"
            // onClick={handleShow2}
            className="rounded-4 p-3 mt-4 mb-4 "
          >
            Save Changes
          </button>
        </Form>
      </Row>
    </div>
  );
};

export default AccountDetails;
