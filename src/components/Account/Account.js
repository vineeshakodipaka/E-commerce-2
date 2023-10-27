import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Cookies from "js-cookie";
import { useAuth } from "../../AuthContext ";
import "./Account.css";
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
      <Container>
        <Row className="text-center justify-content-center ">
          <Col lg={2} xs={6} md={3}>
            <nav className="navbar mt-lg-4 mb-lg-4   fw-bolder text-md-start  text-center mt-lg-5 pt-lg-4">
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
                <li
                  className={`nav-item px-xl-2 c-link   ${
                    activeButton === 2 ? "active" : ""
                  }`}
                >
                  <Link
                    to="myorders"
                    className="nav-link  c-link"
                    onClick={() => setActiveButton(2)}
                  >
                    MyOrders
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
          <Col lg={10} xs={12} md={9}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Account;
