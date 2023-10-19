import React, { useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Cookies from "js-cookie"; // Import Cookies if not already imported

const AccountDetails = () => {
  // Define state to manage form data
  const [formData, setFormData] = useState({
    username: "",
    Email: "",
    PhoneNumber: "",
    password: "",
  });

  // Retrieve userId from cookies
  const userId = Cookies.get("userId");

  useEffect(() => {
    // Fetch user details based on userId
    if (userId) {
      fetch("http://paradox122.000webhostapp.com/_API/Get_UserDetails.php", {
        method: "POST",
        body: new URLSearchParams({ UserID: userId }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            // Update the form data with the retrieved user details
            setFormData({
              username: data.data.username,
              Email: data.data.Email,
              PhoneNumber: data.data.PhoneNumber,
              password: data.data.password,
            });
          } else {
            // Handle the case where user details couldn't be retrieved
            console.error("Failed to retrieve user details");
          }
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, [userId]);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  

      // Create a FormData object and populate it with the form data
      const formdata = new FormData();
      formdata.append("UserID", userId); // Assuming you want to include the user's ID
      formdata.append("Username", formData.username);
      formdata.append("Email", formData.Email);
      formdata.append("PhoneNumber", formData.PhoneNumber);
      formdata.append("Password", formData.password);

      // Define the request options
      const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          "https://paradox122.000webhostapp.com/_API/Update_UserDetails.php",
          requestOptions
        );
        const result = await response.text();
        console.log(result);

        // You might want to add some success handling here, e.g., show a success message.
      } catch (error) {
        console.error("Error:", error);
        // Handle errors, e.g., show an error message.
      }
    };

 

  // Handle input field changes and update form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="checkoutcls">
      <Row className="mx-lg-5 px-lg-5 col-lg-12 text-start">
        <h2 className=" px-lg-5 mt-3 mx-5">Account details</h2>
        <Form className="mt-2 px-5 mx-lg-5" onSubmit={handleFormSubmit}>
          <Row lg={2} xs={1} md={1}>
            <Col xs={12} lg={12}>
              <Row className="mb-4">
                {/* Your input fields */}
                {/* Populate them with values from the state */}
                <Form.Group as={Col} md="6" lg="6" xs="12">
                  <Form.Label className="formlabel"> Username*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="username"
                    value={formData.username}
                    className="labelholder "
                    disabled
                    required
                    type="text"
                    placeholder=" Name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6" lg="6" xs="12">
                  <Form.Label className="formlabel">Phone No.*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    value={formData.PhoneNumber}
                    name="PhoneNumber"
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Phone Number"
                  />
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md="6" lg="6" xs="12">
                  <Form.Label className="formlabel">Email*</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="Email"
                    value={formData.Email}
                    className="labelholder"
                    required
                    type="text"
                    placeholder="Email"
                  />
                </Form.Group>{" "}
                <Form.Group as={Col} md="6" lg="6" xs="12">
                  <Form.Label className="formlabel">
                    Current password *
                  </Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    name="password"
                    value={formData.password}
                    className="labelholder"
                    required
                    type="password"
                    placeholder="*******"
                  />
                </Form.Group>
              </Row>
            </Col>
          </Row>
          <button type="submit" className="rounded-4 p-3 mt-4 mb-4">
            Save Changes
          </button>
        </Form>
      </Row>
    </div>
  );
};

export default AccountDetails;

// <Row className="mb-4">
//   <Form.Group as={Col} md="6" lg="6" xs="12">
//     <Form.Label className="formlabel">New password*</Form.Label>
//     <Form.Control
//       onChange={handleInputChange}
//       name="City"
//       value={formData.City}
//       className="labelholder"
//       required
//       type="text"
//       placeholder="*******"
//     />
//   </Form.Group>
//   <Form.Group as={Col} md="6" lg="6" xs="12">
//     <Form.Label className="formlabel">Confirm new password*</Form.Label>
//     <Form.Control
//       onChange={handleInputChange}
//       name="ZipCode"
//       value={formData.ZipCode}
//       className="labelholder"
//       required
//       type="text"
//       placeholder="*******"
//     />
//   </Form.Group>
// </Row>;
