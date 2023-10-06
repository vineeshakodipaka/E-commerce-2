import React, { useEffect } from "react";
import "./Content.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import socialtechimg from "../../Images/Rectangle 1086.png";

const Content = () => {
  return (
    <div className="registercontent text-white ">
      <Container>
        <Row className="mx-md-3 mx-2 mt-md-3 mb-md-3">
          <Col className="mt-md-5 mt-3 mx-md-5">
            <p className="mt-lg-5 mt-3 pt-lg-5 text-center  mx-lg-5 mb-lg-5 pb-lg-3 mb-3">
              Lorem Ipsum is simply dummy text of the pesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever{" "}
            </p>
            <Row className="mb-lg-5 pb-lg-5 mt-lg-5 pt-lg-5">
              <Card
                style={{ color: "#169ED9" }}
                className="p-md-5 mb-lg-5 mt-2 mb-2 pt-4 pb-4  mb-2"
              >
                <Card.Text className="fw-bold">Simply unbelievable! </Card.Text>
                <Card.Text>
                  I am really satisfied with my projects and business. This is
                  Absolutely wonderful . Simply unbelievable! I am really
                  satisfied
                </Card.Text>

                <Row className="mt-3">
                  <Col md={2}>
                    <Card.Img src={socialtechimg} style={{ width: "50px" }} />
                  </Col>
                  <Col md={6}>
                    <Card.Text>Timson Kraonke</Card.Text>
                    <Card.Text>Social Tech</Card.Text>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row className="justify-content-between mt-md-5 pt-md-5">
              <Col md={6}>
                <p>©2023 All Rights Reserved </p>
              </Col>
              <Col md={6}>
                <p>Privacy Policy and Terms of Use</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
