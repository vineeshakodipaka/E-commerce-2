import React from "react";
import Brandsslide from "../Home/Brandsslide";
import { Col, Row, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./Brandpartners.css";
import { useNavigate } from "react-router-dom";

const Brandpartners = () => {
  const navigate = useNavigate();

  //navigate shoppage
  const handleclick = () => {
    window.scrollTo(0, 0);
    navigate("/brands");
  };
  return (
    <div style={{ background: "rgb(255, 247, 239)" }}>
      <Container className="brandspage2 pb-5 pt-5">
        <Row className="justify-content-between text-center textlg-start mt-5 pt-lg-5 pb-4">
          <Col lg="3" xs="12" md="5">
            <p>Brands</p>
            <h3>Our Brand Partners</h3>
          </Col>

          <Col lg="3" xs="12" md="5">
            <button className="px-4 p-3 text-center" onClick={handleclick}>
              View All Brands Now&nbsp;
              <FaArrowRight
                className="ms-2 rounded-circle  text-black p-1"
                style={{ backgroundColor: "#FFDAA9" }}
              />
            </button>
          </Col>
        </Row>
        <hr />
      </Container>
      <Brandsslide />
    </div>
  );
};

export default Brandpartners;
