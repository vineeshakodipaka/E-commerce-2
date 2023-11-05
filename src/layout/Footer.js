import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext ";
import Cookies from "js-cookie";

const Footer = () => {
  const userId = Cookies.get("userId"); // Use your method to get the user ID from cookies
  // Function to open the WhatsApp link in a new tab
  const openWhatsApp = () => {
    window.open("https://wa.me/917498847799", "_blank");
  };
 
  const navigate = useNavigate();
  const { setActiveButton } = useAuth();
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  const handleLinkClickshop = () => {
    window.scrollTo(0, 0);
    setActiveButton(2);
    navigate("/shoppage");
  };
  const handleLinkClickbrand = () => {
    window.scrollTo(0, 0);
    setActiveButton(3);
    navigate("/brandspage");
  };
  const handleLinkClickacount = () => {
    window.scrollTo(0, 0);
    if (userId) {
      setActiveButton(7);
      navigate("/account");
    } else {
      setActiveButton(0);
      navigate("/home");
    }
  };

  return (
    <div className="footercls mt-lg-5 mt-md-5 ">
      <Container className="footer-container position-relative">
        <Row lg="3" xs="12" md="12">
          <Col xs="12" className="text-lg-end text-xl-end   text-center">
            <div className="custom-border px-lg-4 pt-5">
              <h3>Contact Us</h3>
              <h5>Email</h5>
              <p>needhelp@elite.com</p>
              <h5>Phone</h5>
              <p>666 888 888</p>
              <h5>Address</h5>
              <p>Mumbai Andheri, India</p>
            </div>
          </Col>
          <Col xs="12" className="text-center ">
            <div className="pt-5">
              <h3>Elite Enterprise</h3>
              <p className="px-md-5 mx-md-5 mx-lg-0 px-lg-0">
                Simply dummy text of the printing and typesetting industry.Lorem
                Ipsum simply dummy text of the printing{" "}
              </p>
              <Row lg="6" xs="6" md="8" className="justify-content-center">
                <Col>
                  <FaInstagram
                    className="rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      color: "white",
                      background: "#652700",
                    }}
                  />
                </Col>
                <Col>
                  <FaFacebook
                    className="rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      color: "white",
                      background: "#652700",
                    }}
                  />
                </Col>
                <Col>
                  <FaTwitter
                    className="rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      color: "white",
                      background: "#652700",
                    }}
                  />
                </Col>
                <Col>
                  <FaPinterest
                    className="rounded-circle p-2"
                    style={{
                      width: "40px",
                      height: "40px",
                      color: "white",
                      background: "#652700",
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="12" className="text-lg-start text-center">
            <div className="custom-border2 px-lg-4 pt-5">
              <h3>Utility Pages</h3>
              <Link
                to="/terms&condions"
                className="link"
                onClick={handleLinkClick}
              >
                Terms & Condition
              </Link>
              <br />
              <Link to="/refund" className="link" onClick={handleLinkClick}>
                Refund Policy
              </Link>
              <br />
              <Link
                to="/privacypolicy"
                className="link"
                onClick={handleLinkClick}
              >
                Privacy Policy
              </Link>
              <br />
              <Link
                to="/shoppage"
                className="link"
                onClick={handleLinkClickshop}
              >
                Shop
              </Link>
              <br />
              <Link
                to="/account"
                className="link"
                onClick={handleLinkClickacount}
              >
                My Account
              </Link>
              <br />
              <Link
                to="/brandspage"
                className="link"
                onClick={handleLinkClickbrand}
              >
                Brands
              </Link>
              <br />
            </div>
          </Col>
        </Row>
        <div
          className="position-absolute mb-4 mb-md-0 position-fixed whatsapp-button"
          onClick={openWhatsApp}
        >
          <FaWhatsapp
            className="rounded-circle p-2 whatsapp-icon"
            style={{
              width: "60px",
              height: "60px",
              color: "white",
              background: "rgb(21 225 98)",
              cursor: "pointer", // Add a pointer cursor for better UX
              zIndex: 9999, // Set a high z-index to ensure it's above other elements
            }}
          />
        </div>
      </Container>

      <hr />
      <div className="mb-5 px-2">
        <p className="text-center pt-3 pb-3">
          Copyright © <span className="fw-bolder">Elite Enterprise</span>|
          Designed & Developed By
          <span className="fw-bolder">Incinc Media</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
