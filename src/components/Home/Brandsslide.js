import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands } from "../../actions"; // Import the fetchBrands action
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./Brandsslide.css";

const Brandsslide = () => {
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black", // Text color
          fontSize: "24px", // Adjust the font size as needed
        }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  };

  // Custom next arrow component
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          color: "black", // Text color
          fontSize: "24px", // Adjust the font size as needed
        }}
        onClick={onClick}
      >
        <FaAngleRight />
      </div>
    );
  };

  // Number of cards to show per slide
  const slidesToShow = 2;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // Extra-large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992, // Large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // iPad mini and similar small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();

  // Fetch brands data from Redux store
  const brandsData = useSelector((state) => state.brands.brandsData);

  // Fetch brands data when the component mounts
  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const prodta = brandsData.filter((pro) => pro.isPartner);

  return (
    <div className="brandsliding">
      <div className="container">
        <Container className="mt-2">
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
            <Slider {...settings}>
              {prodta.map((brand) => (
                <Col key={brand.Brand_id}>
                  <Card
                    className=" mt-2 mb-2 mx-lg-5 p-lg-5"
                    style={{ background: "none", border: "none" }}
                  >
                    <center>
                      <Card.Img
                        className="pt-3 pb-3 px-5 "
                        src={brand.Brand_image} // Use the brand image here
                        alt={brand.Brand_Name}
                      
                      />
                  
                    </center>
                  </Card>
                </Col>
              ))}
            </Slider>
          </Row>
        </Container>
      
      </div>
    </div>
  );
};

export default Brandsslide;
