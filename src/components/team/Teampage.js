import React from "react";
import timg from "../../Images/image 55.png";
import timg1 from "../../Images/Image.png";
import timg2 from "../../Images/Image (1).png";
import timg3 from "../../Images/Image (2).png";
import timg4 from "../../Images/Photo.png";
import timg5 from "../../Images/Photo (1).png";
import timg6 from "../../Images/Photo (2).png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Teampage.css";
import { Card, Col, Container, Row } from "react-bootstrap";

// Array of team member data with images, roles, and names
const timgs = [
  { img: timg1, role: "Giovani Bacardo", rname: "Designer" },
  { img: timg2, role: "Marianne Loreno", rname: "Farmer" },
  { img: timg3, role: "Riga Pelore", rname: "Designer" },
  { img: timg4, role: "Keira Knightley", rname: "Farmer" },
  { img: timg5, role: "Scott Lawrence", rname: "Designer" },
  { img: timg6, role: "Karen Allen", rname: "Farmer" },
];

const Teampage = () => {
  return (
    <div className="teamcls">
      <div className="position-relative">
        {/* Header image */}
        <img src={timg} width="100%" style={{ height: "250px" }} />
        <h3
          className="position-absolute top-50 start-50 translate-middle fw-bolder"
          style={{ color: "white" }}
        >
          Team
        </h3>
      </div>
      <div className="mt-5 px-lg-5 container">
        <h5 className="text-center">Team</h5>
        <h4 className="text-center">Our Organic Experts</h4>
        <div className="text-center p-cls px-lg-5 mt-3 mx-lg-5">
          {/* Team description */}
          <p className=" px-2 px-lg-5 mx-lg-5 ">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>

      {/* Team member cards section */}
      <div className="teamcards  px-xl-5 mx-lg-5 pt-5 pb-5">
        <Row xs={1} md={2} lg={3} className="g-4  px-xl-5 mx-lg-5 mx-2">
          {timgs.map((item, i) => (
            <Col key={i}>
              <Card
                className="rounded-5 "
                style={{ background: "#F9F8F8", border: "none" }}
              >
                {/* Team member image */}
                <Card.Img
                  variant="top"
                  className="rounded-3"
                  src={item.img}
                  alt={`Image ${i + 1}`}
                />
                <Card.Body>
                  <Row className="justify-content-between pb-5" lg={2}>
                    <Col lg={6} md={6} xs={7}>
                      {/* Team member role */}
                      <Card.Text className="rtext">{item.role}</Card.Text>
                      {/* Team member name */}
                      <Card.Text className="rntext">{item.rname}</Card.Text>
                    </Col>
                    <Col lg={4} md={5} xs={5} className="ps-lg-5">
                      <div className="ps-lg-3">
                        {/* Social media icons */}
                        <FaInstagram style={{ color: "#652700" }} />
                        &nbsp;&nbsp;
                        <FaFacebook style={{ color: "#652700" }} />
                        &nbsp;&nbsp;
                        <FaTwitter style={{ color: "#652700" }} />
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Teampage;
