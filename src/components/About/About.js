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
            className="mt-5 pt-lg-5 px-lg-5 ms-lg-2 px-md-5 px-3"
            style={{ background: "#F9F8F8" }}
          >
            <Col className="px-xl-2 mt-xxl-2 px-xxl-1">
              <div className="whychoosediv px-xl-2 mx-xl-2 px-lg-1 pt-lg-3 pt-xl-2">
                <h4>Why Choose us?</h4>
                <p>We do not buy from the open market & traders.</p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span> Exclusivity in Sourcing</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - We stand out by not purchasing from the open market or
                  traders. Instead, we meticulously source our products through
                  exclusive channels, ensuring the highest quality and
                  authenticity.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6 col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span>100% Natural Guarantee</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - Our commitment to providing only 100% natural products sets
                  us apart. We prioritize the well-being of our customers by
                  delivering goods free from artificial additives,
                  preservatives, or synthetic substances.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span>Enhanced Resistance</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - Our products are curated with a focus on boosting immunity
                  and increasing resistance. We understand the importance of a
                  robust immune system in today's fast-paced world, and our
                  offerings are tailored to support and strengthen your body's
                  natural defenses.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span> Quality Assurance</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - Rigorous quality control measures are implemented at every
                  stage of production. From sourcing to packaging, our team
                  ensures that each product adheres to the highest standards,
                  providing you with the assurance of quality and safety.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span>Transparency in Processes</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - We believe in transparency and take pride in sharing
                  information about our sourcing, production, and testing
                  processes. This openness is designed to build trust with our
                  customers and showcase the integrity of our products.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span> Customer-Centric Approach</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - Your satisfaction is our priority. We are dedicated to
                  meeting and exceeding your expectations, offering excellent
                  customer service, and addressing any concerns promptly. Your
                  well-being is at the core of our business ethos.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span> Environmentally Conscious Practices</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - Beyond just product quality, we are committed to
                  sustainability. Our practices are designed to minimize
                  environmental impact, from eco-friendly packaging to
                  responsible sourcing, contributing to a healthier planet for
                  future generations.
                </p>
                <div
                  className="rounded-pill p-3  col-lg-6  col-xl-7"
                  style={{ backgroundColor: "#FFDAA9", color: "#B27B60" }}
                >
                  <FaRegCircle />
                  &nbsp;<span> Continuous Research and Development</span>
                </div>
                <p className="pt-lg-3 ms-lg-5">
                  - We stay at the forefront of advancements in health and
                  wellness. Our commitment to continuous research and
                  development ensures that our products evolve to meet the
                  ever-changing needs of our customers, providing innovative
                  solutions for a healthier lifestyle.
                </p>
                <p className="mt-2">
                  Choose us for a holistic experience that goes beyond products
                  – a commitment to your health, well-being, and a sustainable
                  future.
                </p>
              </div>
            </Col>
            <Col className="px-xl-5 mt-lg-5 pt-lg-5">
              <img className="px-xl-4 mt-lg-5 pt-lg-5" src={chimg3} width="100%" alt="img3" />
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
