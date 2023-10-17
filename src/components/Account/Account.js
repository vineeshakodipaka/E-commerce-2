// import React from "react";
// import Cookies from "js-cookie";
// // import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../AuthContext "; // Import your AuthContext
// import { Link, Route } from "react-router-dom";
// import { Col, Container, Row } from "react-bootstrap";

// const Account = () => {
//   //const navigate = useNavigate();
//   const { logout, isAuthenticated } = useAuth(); // Use the logout function and isAuthenticated from your AuthContext
//   const userId = Cookies.get("userId"); // Get the user ID from cookies
//   const cartItemsCookie = Cookies.get("cartItems");

//   const handleLogout = () => {
//     // Remove the user ID cookie and log the user out

//     Cookies.remove("userId");
//     logout();
//   };

//   console.log("IsAuthenticated:", isAuthenticated);
//   console.log("User ID:", userId);

//   return (
//     <div className="text-center mt-4">
//       <h1>My Account</h1>
//       <div>
//         <p>User ID: {userId}</p>
//       </div>
//       <button className="btn btn-danger" onClick={handleLogout}>
//         Logout
//       </button>

//       <Container>
//         <Row>
//           <Col>
//             <nav className="navbar mt-lg-4 mb-lg-4 text-start">
//               <ul className="navbar-nav ms-lg-3 ">
//                 <li className="nav-link px-xl-2 ">
//                   <Link to="/dashboard">Dashboard</Link>
//                 </li>
//                 <br />
//                 <li className="nav-link px-xl-2 ">
//                   <Link to="/AccountDetails">Account Details</Link>
//                 </li>
//                 <br />
//                 <li className="nav-link px-xl-2 ">
//                   <Link to="/Addresses">Addresses</Link>
//                 </li>
//               </ul>
//             </nav>
//           </Col>
//           <Col>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Account;




// Account.js

import React from "react";
import Cookies from "js-cookie";
import { useAuth } from "../../AuthContext ";
import { Link, Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Account = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    Cookies.remove("userId");
    logout();
  };

  return (
    <div>
      <div style={{ background: "#f6f6f6" }} className="pt-3 pb-3 fw-5">
        <h1 className="text-center">My Account</h1>
        <h4 className="text-center">Shop</h4>
      </div>
      <Container>
        <Row className="text-center justify-content-center">
          <Col lg={2} xs={5}>
            <nav className="navbar mt-lg-4 mb-lg-4  fw-bolder text-start mt-lg-5 pt-lg-4">
              <ul className="navbar-nav ms-lg-3">
                <li className="nav-item px-xl-2">
                  <Link to="dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item px-xl-2">
                  <Link to="accountDetails" className="nav-link">
                    Account Details
                  </Link>
                </li>
                <li className="nav-item px-xl-2">
                  <Link to="addresses" className="nav-link">
                    Addresses
                  </Link>
                </li>
                <li className="nav-item px-xl-2">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </Col>
          <Col lg={10} xs={12}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Account;
