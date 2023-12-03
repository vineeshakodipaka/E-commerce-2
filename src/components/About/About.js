import React from "react";
import chimg1 from "../../Images/image 55.png";
import chimg2 from "../../Images/image 54.png";
import chimg3 from "../../Images/chocolate 1.png";
import { Col, Row } from "react-bootstrap";
import { FaRegCircle } from "react-icons/fa";
import "./About.css";

import Cardsimgs2 from "./Cardsimgs2";
import Brandpartners from "./Brandpartners";

const About = () => {
  return (
    <div className="aboutcls">
      {/* Header section */}
      <div className="position-relative">
        <img src={chimg1} width="100%" style={{ height: "250px" }} alt="img1" />
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
            <Col className="px-xl-5 pt-lg-4">
              <img
                className="px-xl-5 px-xxl-5 pt-lg-5 mt-lg-5"
                src={chimg2}
                width="100%"
                alt="img2"
              />
            </Col>
            <Col>
              <div className="mt-4 pt-xl-2 px-xl-4 pt-xxl-5 mt-xxl-5">
                <h1 className="text-center text-lg-start aboutus">About Us</h1>
                <h3 className="text-center text-lg-start pt-2 pb-4">
                  We do Creative
                  <br /> Things for Success
                </h3>
                <div>
                  <p>
                    <h5 className="fw-bold"> *About Elite Enterprise* </h5>
                    Welcome to Elite Enterprise, your trusted partner in
                    delivering excellence. Based in the vibrant city of Mumbai,
                    we stand as a beacon of innovation and reliability in the
                    business landscape. At Elite Enterprise, we believe in not
                    just meeting expectations but surpassing them, setting new
                    benchmarks for quality and service in every endeavor.
                  </p>
                  <p>
                    <h5 className="fw-bold"> *Our Commitment to Excellence*</h5>
                    Elite Enterprise is not just a business; it's a commitment
                    to excellence. We take pride in our unwavering dedication to
                    delivering top-tier products and services tailored to meet
                    the diverse needs of our clients. Our team of professionals
                    brings a wealth of expertise to the table, ensuring that
                    every project, big or small, is executed with precision and
                    finesse.
                  </p>
                  <p>
                    <h5 className="fw-bold">
                      *A Foundation of Trust and Integrity*
                    </h5>
                    Trust is the cornerstone of our relationships, and we build
                    it through transparency, integrity, and a customer-centric
                    approach. At Elite Enterprise, we understand that trust is
                    earned, and we strive to earn it with every interaction. Our
                    commitment to ethical business practices sets us apart,
                    fostering enduring partnerships with our clients.
                  </p>
                  <p>
                    <h5 className="fw-bold">
                      *Innovative Solutions for a Dynamic World*
                    </h5>
                    The business landscape is ever-evolving, and at Elite
                    Enterprise, we thrive in this dynamic environment. Our
                    passion for innovation drives us to stay at the forefront of
                    industry trends, offering cutting-edge solutions that
                    empower our clients to navigate the challenges of today and
                    tomorrow.
                  </p>
                  <p>
                    <h5 className="fw-bold">
                      <h5 className="fw-bold">*Our Competitive Edge*</h5>
                    </h5>
                    In a market brimming with competition, Elite Enterprise
                    distinguishes itself through a combination of quality,
                    agility, and a customer-centric ethos. We constantly analyze
                    industry trends, adapting our strategies to stay ahead of
                    the curve. Our commitment to continuous improvement propels
                    us to explore new avenues and push the boundaries of what's
                    possible.
                  </p>
                  <p>
                    <h5 className="fw-bold"> *Client-Centric Approach*</h5>
                    At Elite Enterprise, our clients are at the heart of
                    everything we do. We understand that each client is unique,
                    with distinct needs and aspirations. Our client-centric
                    approach ensures that we not only meet expectations but
                    exceed them. We forge lasting relationships by delivering
                    solutions that add tangible value to our clients'
                    businesses.
                  </p>
                  <p>
                    <h5 className="fw-bold"> *Collaborative Partnerships*</h5>
                    We view our clients not just as customers but as partners in
                    success. Through open communication and collaboration, we
                    work hand in hand to achieve mutual goals. Our emphasis on
                    building long-term relationships has been instrumental in
                    our growth and success.
                  </p>
                  <p>
                    <h5 className="fw-bold">
                      *Elite Enterprise: Your Vision, Our Mission*
                    </h5>
                    Our mission is simple – to transform your vision into
                    reality. Whether you're seeking innovative solutions,
                    reliable services, or a trusted partner for your business,
                    Elite Enterprise is here to exceed your expectations. Join
                    us on this journey of excellence, where your success is our
                    success.
                    <br />
                    <p className="mt-2">
                     
                      Choose Elite Enterprise – Where Excellence Meets
                      Innovation.
                    </p>
                  </p>
                </div>
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
              <img className="px-xl-4" src={chimg3} width="100%" alt="img3" />
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
