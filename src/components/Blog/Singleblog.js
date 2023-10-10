import React from "react";
import sbimg from "../../Images/image 55.png";
import "./Singleblog.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
const Singleblog = () => {
  return (
    <div className="sblog mb-2">
      <div className="position-relative">
        <img src={sbimg} width="100%" />
        <div className="sb-card pb-lg-5 mx-3  mx-lg-5 px-lg-5">
          <Card
            className="rounded-4 px-lg-5 mx-lg-5 py-lg-3 px-md-4 py-2 px-2 py-md-3 "
            style={{
              border: "none",
              boxShadow: "rgba(204, 204, 204, 0.25) 0px 14px 36px 0px",
            }}
          >
            <Card.Body>
              <Row className="srow" lg={2}>
                <Col xl={3} lg={5} md={4}>
                  <p className="postdate">
                    <span className="fw-bold">Posted On:</span>
                    January 6, 2022
                  </p>
                </Col>
                <Col xl={2} lg={4} md={4}>
                  <p>
                    <FaUser style={{ color: "rgb(178, 123, 96)" }} />
                    <span> By Rachi Card</span>
                  </p>
                </Col>
              </Row>
              <Card.Title className="card-title h5">
                <h3 className="fw-bold mt-2">Research More Organic Food</h3>
              </Card.Title>
              <p className="Established-text me-lg-5 pe-lg-5 card-text">
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Container>
        <Row className="justify-content-center mx-2 Uniquelymatrix p">
          <Col lg={8}>
            <p className="mt-2">
              Uniquely matrix economically sound value through cooperative
              technology. Competently parallel task fully researched data and
              enterprise process improvements. Collaboratively expedite quality
              manufactured products via client-focused results quickly
              communicate enabled technology and turnkey leadership skills.
              Uniquely enable accurate supply chains rather than friction
              technology.
            </p>
            <h3>Preferred Form of Vitamin D?</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <ul className="pt-1 pb-2">
              <li className="pt-2">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li className="pt-2">
                Content here, content here', making it look like readable
              </li>
              <li className="pt-2">
                Packages and web pageLorem Ipsum as their default
              </li>
            </ul>
            <div
              className="fw-bold firstrule pt-5 px-5 pb-5 rounded-4"
              style={{ background: "rgb(241, 237, 234)" }}
            >
              <p>
                “The first rule of any organic used in a business is that nature
                applied to an efficient operation will magnify the efficiency.
                The second is that organic applied to an inefficient operation
                will magnify the health.”
              </p>
            </div>
            <h5 className="pt-4 pb-2">Make perfect organic product with us</h5>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <ol className="list-group-numbered pt-1">
              <li className="list-group-item pt-2">
                Publishing packages and web pageLorem Ipsum as their default
              </li>
              <li className="list-group-item pt-2">
                Content here, content here', making it look like readable
              </li>
              <li className="list-group-item pt-2">
                Packages and web pageLorem Ipsum as their default
              </li>
              <li className="list-group-item pt-2">
                more-or-less normal distribution of letters
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Singleblog;
