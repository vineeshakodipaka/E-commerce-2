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

import React from "react";

const Addresses = ({ addressData }) => {
  return (
    <div className="text-start mx-5 address-details">
      <h3>Your Address Details</h3>
      <p>User ID: {addressData.UserID}</p>
      <p>Name: {addressData.Name}</p>
      <p>Street Address: {addressData.StreetAddress}</p>
      <p>City: {addressData.City}</p>
      <p>State: {addressData.State}</p>
      <p>ZipCode: {addressData.ZipCode}</p>
      <p>Country: {addressData.Contry}</p>
    </div>
  );
};

export default Addresses;
