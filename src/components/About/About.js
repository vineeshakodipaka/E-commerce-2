import React from "react";
import chimg1 from "../../Images/image 55.png";
import chimg2 from "../../Images/image 54.png";
import chimg3 from "../../Images/chocolate 1.png";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import "./About.css";
import Cardsimgs from "../Home/Cardsimgs";
import Cardsimgs2 from "./Cardsimgs2";
import Brandpartners from "./Brandpartners";

const About = () => {
  return (
    <div className="aboutcls">
      {/* Header section */}
      <div className="position-relative">
        <img src={chimg1} width="100%" style={{ height: "250px" }} />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          About
        </h3>
      </div>

      <div>
        <div className="mt-4">
          {/* 1st row */}
          <Row
            lg={2}
            xs={1}
            className="px-3 pt-xl-5 px-xxl-5 mx-xxl-5 px-lg-5 mx-xl-5"
          >
            <Col className="px-xl-5">
              <img
                className="px-xl-5 px-xxl-5 pt-lg-5 mt-lg-5"
                src={chimg2}
                width="100%"
              />
            </Col>
            <Col>
              <div className="mt-4 pt-xl-2 px-xl-4 pt-xxl-5 mt-xxl-5">
                <h4 className="text-center text-lg-start">About Us</h4>
                <h3 className="text-center text-lg-start">
                  We do Creative
                  <br /> Things for Success
                </h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a
                  galley.Simply dummy text of the printing and typesetting
                  industry. Lorem had ceased to been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley.
                </p>
                <p className="pt-3">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                  <br />
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a
                  galley.Simply dummy text of the printing and typesetting
                  industry. Lorem had ceased to been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley.
                </p>
                <p className="pt-3">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                  <br />
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
            </Col>
          </Row>

          {/* 2nd row */}
          <Row
            lg={2}
            xs={1}
            md={2}
            className="mt-5 pt-lg-5 px-lg-5 px-md-5 px-3"
            style={{ background: "#F9F8F8" }}
          >
            <Col className="px-xl-5  mt-xxl-5 px-xxl-5">
              <div className="whychoosediv px-xl-5 mx-xl-5 px-lg-1 pt-lg-3 pt-xl-5">
                <h4>Why Choose us?</h4>
                <h3>We do not buy from the open market & traders.</h3>
                <p className="pt-xl-3 pb-xl-3">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard the 1500s,
                  when an unknown
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6 col-xl-8"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span>100% Natural Product</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-8"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span> Increases resistance</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </p>
              </div>
            </Col>
            <Col className="px-xl-5">
              <img className="px-xl-4" src={chimg3} width="100%" />
            </Col>
            {/* Spacer row for larger screens */}
            <Row className="d-none d-lg-block pt-5 pb-5 mt-5 mb-5">
              <Col className="mt-5 mb-5 pt-5 pb-5"></Col>
            </Row>
          </Row>
        </div>

        {/* Cardsimgs component */}
        <div>
          <Cardsimgs2 />
        </div>

        {/* brands component */}
        <Brandpartners />
      </div>
    </div>
  );
};

export default About;
