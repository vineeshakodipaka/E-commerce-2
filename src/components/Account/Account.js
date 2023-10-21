
// import React from "react";
// import Cookies from "js-cookie";
// import { useAuth } from "../../AuthContext ";
// import { Link, Outlet } from "react-router-dom";
// import { Col, Container, Row } from "react-bootstrap";

// const Account = () => {
//   const { logout } = useAuth();

//   const handleLogout = () => {
//     Cookies.remove("userId");
//     logout();
//   };

//   return (
//     <div>
//       <div style={{ background: "#f6f6f6" }} className="pt-3 pb-3 fw-5">
//         <h1 className="text-center">My Account</h1>
//         <h4 className="text-center">Shop</h4>
//       </div>
//       <Container>
//         <Row className="text-center justify-content-center">
//           <Col lg={2} xs={5}>
//             <nav className="navbar mt-lg-4 mb-lg-4  fw-bolder text-start mt-lg-5 pt-lg-4">
//               <ul className="navbar-nav ms-lg-3">
               
//                 <li className="nav-item px-xl-2">
//                   <Link to="accountDetails" className="nav-link">
//                     Account Details
//                   </Link>
//                 </li>
//                 <li className="nav-item px-xl-2">
//                   <Link to="addresses" className="nav-link">
//                     Addresses
//                   </Link>
//                 </li>
//                 <li className="nav-item px-xl-2">
//                   <button className="btn btn-danger" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </nav>
//           </Col>
//           <Col lg={10} xs={12}>
//             <Outlet />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Account;

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Cookies from "js-cookie";
import { useAuth } from "../../AuthContext ";
import './Account.css'
const Account = () => {
  const { logout } = useAuth();

  const [activeButton, setActiveButton] = useState(0); // Initialize the first button as active

  const handleLogout = () => {
    Cookies.remove("userId");
    logout();
  };
 const linkRef = React.useRef();

 React.useEffect(() => {
   // Trigger a click event on the Link element when the component mounts
   linkRef.current.click();
 }, []);
  return (
    <div className="accountfile">
      <div style={{ background: "#f6f6f6" }} className="pt-3 pb-3 fw-5">
        <h1 className="text-center">My Account</h1>
        <h4 className="text-center">Shop</h4>
      </div>
      <Container>
        <Row className="text-center justify-content-center">
          <Col lg={2} xs={5}>
            <nav className="navbar mt-lg-4 mb-lg-4  fw-bolder text-start mt-lg-5 pt-lg-4">
              <ul className="navbar-nav ms-lg-3">
                <li
                  className={`nav-item px-xl-2 c-link   ${
                    activeButton === 0 ? "active" : ""
                  }`}
                >
                  <Link
                    to="accountDetails"
                    className="nav-link c-link "
                    onClick={() => setActiveButton(0)}
                    ref={linkRef}
                  >
                    Account Details
                  </Link>
                </li>
                <li
                  className={`nav-item px-xl-2  c-link ${
                    activeButton === 1 ? "active" : ""
                  }`}
                >
                  <Link
                    to="addresses"
                    className="nav-link  c-link"
                    onClick={() => setActiveButton(1)}
                  >
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
