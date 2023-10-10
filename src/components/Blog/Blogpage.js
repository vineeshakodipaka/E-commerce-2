import React, { useEffect, useState } from "react";
import blimg from "../../Images/image 55.png";
import blimg1 from "../../Images/blogimg1.png";
import blimg2 from "../../Images/blogimg2.png";
import blimg3 from "../../Images/blogimg3.png";
import blimg4 from "../../Images/blogimg4.png";
import blimg5 from "../../Images/blogimg5.png";
import blimg6 from "../../Images/blogimg6.png";
import { FaUserAlt, FaArrowRight } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
import "./Blogpage.css";
import { useNavigate } from "react-router-dom";
const blogimgs = [
  {
    img: blimg1,
    date: "25Nov",
    cname: "By Rachi Card",
    caption1: "The Benefits of Vitamin D & How to Get It",
    caption2:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    img: blimg2,
    date: "25Nov",
    cname: "By Rachi Card",
    caption1: "Our Favorite Summertime Tomato",
    caption2:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    img: blimg3,
    date: "25Nov",
    cname: "By Rachi Card",
    caption1: "Benefits of Vitamin C & How to Get It",
    caption2:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    img: blimg4,
    date: "25Nov",
    cname: "By Rachi Card",
    caption1: "Research More Organic Foods",
    caption2:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    img: blimg5,
    date: "25Nov",
    cname: "By Rachi Card",
    caption1: "Everyday Fresh Fruites",
    caption2:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    img: blimg6,
    date: "25Nov",
    cname: "By Rachi Card",
    caption1: "Don't Use Plastic Product! it's Kill Nature",
    caption2:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
];

const Blogpage = () => {
  const navigate = useNavigate();
  const handlclick = () => {
    navigate("/singleblog");
  };

  return (
    <div className="blogcls mb-5 mb-lg-0 mb-md-0">
      <div className="position-relative">
        <img src={blimg} width="100%" style={{ height: "250px" }} />
        <h3
          className="position-absolute top-50 start-50 translate-middle fw-bolder"
          style={{ color: "white" }}
        >
          Blogs
        </h3>
      </div>

      {/* blog cards section */}
      <div className="pt-lg-5 px-lg-5 mx-lg-5">
        <Row
          xs={1}
          md={2}
          lg={2}
          className="px-xl-5 crow mx-lg-5 g-4 mx-4 mt-5"
        >
          {blogimgs.map((item, i) => (
            <Col key={i} className="justify-content-center ccol">
              <Card
                className="rounded-2 position-relative mb-5 pb-5"
                style={{ border: "none" }}
              >
                <Card.Img
                  variant="top"
                  className="cardimg rounded-5"
                  src={item.img}
                  width="100%"
                  alt={`Image ${i + 1}`}
                />
                <Card.Body className="bg-white">
                  <Card.Text
                    className="datecls  mt-4 rounded-circle position-absolute px-3 py-1 top-0 "
                    style={{ background: "white" }}
                  >
                    <span className="date-day">{item.date.slice(0, 2)}</span>
                    <br />
                    <span className="date-month">{item.date.slice(2)}</span>
                  </Card.Text>

                  <div className="rounded-4 px-2 px-lg-2  px-xl-5 overlay-container mb-5  mb-lg-2 pb-lg-2">
                    <div
                      className="rounded-4  p-3 bg-white  "
                      style={{
                        boxShadow:
                          " 0px 20px 35px 0px rgba(167, 167, 167, 0.25)",
                      }}
                    >
                      <Card.Text>
                        <FaUserAlt style={{ color: "#7EB693" }} />
                        &nbsp;
                        <span className="cname">{item.cname}</span>
                      </Card.Text>
                      <Card.Text
                        className="c-1 fw-bold "
                        style={{ fontSize: "15px" }}
                      >
                        {item.caption1}
                      </Card.Text>
                      <Card.Text className="c-2">{item.caption2}</Card.Text>
                      <Card.Text
                        className="pb-4 readmore fw-bold"
                        onClick={handlclick}
                      >
                        Read More &nbsp;
                        <FaArrowRight
                          className="rounded-circle  text-white p-1"
                          style={{ backgroundColor: "#8F3300", color: "white" }}
                        />
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Blogpage;
