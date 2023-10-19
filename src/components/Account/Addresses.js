// import React, { useState } from "react";
// import { Card, Col, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const Addresses = () => {
//   const navigate = useNavigate();
//   // Define state to manage form data
//   const [formData, setFormData] = useState({
//     UserID: "",
//     Name: "",
//     StreetAddress: "",
//     City: "",
//     State: "",
//     ZipCode: "",
//     Contry: "",
//     Phone: "",
//     Email: "",
//   });

//   // Handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//   };

//   // Handle input field changes and update form data

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="checkoutcls">
//       <h2 className="text-center">Billing Address</h2>
//       <Row className="mx-lg-5 px-lg-5 col-lg-12 text-start">
//         <Form className="mt-5 px-5 mx-lg-5" onSubmit={handleFormSubmit}>
//           <Row lg={2} xs={1} md={1}>
//             <Col xs={12} lg={12}>
//               <Row className="mb-4">
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel"> UserId*</Form.Label>
//                   <Form.Control
//                     onChange={handleInputChange}
//                     name="UserID"
//                     value={formData.UserID}
//                     className="labelholder"
//                     required
//                     type="text"
//                     placeholder=" Name"
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel"> Name*</Form.Label>
//                   <Form.Control
//                     onChange={handleInputChange}
//                     name="Name"
//                     value={formData.Name}
//                     className="labelholder"
//                     required
//                     type="text"
//                     placeholder=" Name"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row className="mb-4">
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel">StreetAddress*</Form.Label>
//                   <Form.Control
//                     onChange={handleInputChange}
//                     value={formData.StreetAddress}
//                     name="StreetAddress"
//                     className="labelholder"
//                     required
//                     type="text"
//                     placeholder="Your StreetAddress here"
//                   />
//                 </Form.Group>
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel">City*</Form.Label>
//                   <Form.Control
//                     onChange={handleInputChange}
//                     name="City"
//                     value={formData.City}
//                     className="labelholder"
//                     required
//                     type="text"
//                     placeholder="Your City here"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row className="mb-4">
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel">State*</Form.Label>
//                   <Form.Control
//                     as="select"
//                     onChange={handleInputChange}
//                     value={formData.State}
//                     name="State"
//                     className="labelholder form-select"
//                     required
//                   >
//                     <option value="">Select State</option>
//                     <option value="State 1">State 1</option>
//                     <option value="State 2">State 2</option>
//                     <option value="State 3">State 3</option>
//                     <option value="State 4">State 4</option>
//                     <option value="State 5">State 5</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel">ZipCode*</Form.Label>
//                   <Form.Control
//                     onChange={handleInputChange}
//                     name="ZipCode"
//                     value={formData.ZipCode}
//                     className="labelholder"
//                     required
//                     type="text"
//                     placeholder="ZipCode"
//                   />
//                 </Form.Group>
//               </Row>
//               <Row className="mb-4">
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel">Country*</Form.Label>
//                   <Form.Control
//                     as="select"
//                     onChange={handleInputChange}
//                     name="Contry"
//                     value={formData.Contry}
//                     className="labelholder form-select"
//                     required
//                   >
//                     <option value="">Select Country</option>
//                     <option value="Country 1">Country 1</option>
//                     <option value="Country 2">Country 2</option>
//                     <option value="Country 3">Country 3</option>
//                     <option value="Country 4">Country 4</option>
//                     <option value="Country 5">Country 5</option>
//                   </Form.Control>
//                 </Form.Group>
//                 <Form.Group as={Col} md="6" lg="5">
//                   <Form.Label className="formlabel">Phone*</Form.Label>
//                   <Form.Control
//                     onChange={handleInputChange}
//                     name="Phone"
//                     value={formData.Phone}
//                     className="labelholder"
//                     required
//                     type="text"
//                     placeholder="ZipCode"
//                   />
//                 </Form.Group>
//                 <Row>
//                   <Form.Group as={Col} md="6" lg="5">
//                     <Form.Label className="formlabel">Email*</Form.Label>
//                     <Form.Control
//                       onChange={handleInputChange}
//                       name="Email"
//                       value={formData.Email}
//                       className="labelholder"
//                       required
//                       type="text"
//                       placeholder="ZipCode"
//                     />
//                   </Form.Group>
//                 </Row>
//               </Row>
//             </Col>
//           </Row>
//           <button
//             type="submit"
//             // onClick={handleShow2}
//             className="rounded-4 p-3 mt-4 mb-4 "
//           >
//             Save Changes
//           </button>
//         </Form>
//       </Row>
//     </div>
//   );
// };

// export default Addresses;

// import React from "react";
//  const userId = Cookies.get("userId");
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

import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row,Modal } from "react-bootstrap";

const Addresses = ({ baseUrl1, handleFormSubmit }) => {
  // Define state to manage form data

  const [userAddresses, setUserAddresses] = useState([]);
  const userId = Cookies.get("userId"); // Retrieve userId from cookies

   const fetchUserAddresses = React.useCallback(async (userId) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        baseUrl1 + `Get_addresess.php?user_id=${userId}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Log the response data
      return data;
    } catch (error) {
      console.error("Error fetching user addresses:", error);
      return { status: false, message: "Error fetching user addresses" };
    }
  },[baseUrl1]);


  useEffect(() => {
    if (userId) {
      fetchUserAddresses(userId).then((data) => {
        if (data.status) {
          setUserAddresses(data.data);
        } else {
          setUserAddresses([]);
        }
      });
    }
  }, [userId,fetchUserAddresses]);

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
        const responseData = await response.json(); // Assuming the response is in JSON format
        console.log("Form submission successful. Response data:", responseData);
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
        handleFormSubmit(formData);
        closeModal();
      } else {
        // Form submission failed, display an error message to the user
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Form submission failed", error);
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
      <h3 className="mx-4 mx-lg-0">Your Address Details</h3>
      {userAddresses.length > 0 ? (
        userAddresses.map((userAddress, index) => (
          <div key={index}>
            <Card className="m-2">
              <Card.Body className="p-3">
                <div>
                  <h4> Address:</h4>
                  <h6>
                    {userAddress.Name},{userAddress.StreetAddress},{" "}
                    {userAddress.City},{userAddress.State},{" "}
                    {userAddress.ZipCode},{userAddress.Contry}
                  </h6>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))
      ) : (
        <p>Loading user addresses...</p>
      )}
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
                          <option value="State 1">Telangana</option>
                          <option value="State 2">Andrapradesh</option>
                          <option value="State 3">MadhyaPradesh</option>
                          <option value="State 4">Maharashtra</option>
                          <option value="State 5">Gujarat</option>
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
                          <option value="Country 1">India</option>
                          <option value="Country 2">Germany</option>
                          <option value="Country 3">Canada</option>
                          <option value="Country 4">France</option>
                          <option value="Country 5">Australia</option>
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

export default Addresses;
