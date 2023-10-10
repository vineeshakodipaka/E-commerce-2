import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Bottombar.css"; // Import the external CSS file
import { useSelector, useDispatch } from "react-redux";

const Bottombar = () => {
  const [activeButton, setActiveButton] = useState(0); // State to track active button
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="bottompage d-lg-none d-md-none">
      <Navbar
        fixed="bottom"
        bg="light"
        className="bottomnav mx-auto d-flex justify-content-center"
        style={{ marginBottom: "-8px", borderRadius: "10px" }}
      >
        <Nav className="d-flex gap-1 gap-lg-5 gap-md-5">
          {/* Home link */}
          <Link
            to="/"
            className={`b-link px-lg-3  rounded-3 p-2 ${
              activeButton === 0 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveButton(0)}
            style={{ color: "black", textDecoration: "none" }}
          >
            <AiFillHome size={20} color="#652700" />
            <span > Home</span>
          </Link>

          {/* User link */}
          <Link
            to="/contact"
            className={`b-link  rounded-3  p-2 ${
              activeButton === 1 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveButton(1)}
            style={{ color: "black", textDecoration: "none" }}
          >
            <FaUserAlt size={20} color="#652700" />
          </Link>

          {/* Cart link */}
          <Link
            to="/cart"
            className={`b-link  rounded-3 p-2 ${
              activeButton === 2 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveButton(2)}
            style={{ color: "black", textDecoration: "none" }}
          >
            <BsFillCartDashFill size={20} color="#652700" />
            <sup>
              <span
                className="bg-danger rounded-circle px-1"
                style={{ color: "white" }}
              >
                {totalQuantity}
              </span>
            </sup>
          </Link>

          {/* Message link */}
          <Link
            to="/"
            className={`b-link  rounded-3 p-2 ${
              activeButton === 3 ? "active" : ""
            }`}
            onMouseEnter={() => setActiveButton(3)}
            style={{ color: "black", textDecoration: "none" }}
          >
            <AiFillMessage size={20} color="#652700" />
            <sup>
              <span
                className="bg-danger rounded-circle px-1"
                style={{ color: "white" }}
              >
                0
              </span>
            </sup>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Bottombar;
