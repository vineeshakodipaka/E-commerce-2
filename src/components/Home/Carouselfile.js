import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./Carouselfile.css";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Globalvarible";

const Carouselfile = () => {
  const navigate = useNavigate();

  //navigate shoppage
  const handleclick = () => {
    window.scrollTo(0, 0);
    navigate("/shoppage");
  };

  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    fetch(
      baseUrl+"Home_Slider_Images_API.php"
    )
      .then((resp) => resp.json())
      .then((res) => setCarouselData(res));
  }, []);
  return (
    <div className="homecarousel ">
      <Carousel
        nextIcon={
          <BsChevronRight className="rightangle" style={{ color: "black" }} />
        }
        prevIcon={
          <BsChevronLeft className="leftangle" style={{ color: "black" }} />
        }
      >
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="position-relative carouseldiv">
              <img
                src={item.url}
                className="d-block w-100 h-100vh carouselimg"
                // style={{ height: "400px" }}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-caption">
                <div className="caption-content  mb-md-5 pb-md-5 pb-5 w-50 ">
                  <h5
                    className="text-start text-white"
                    style={{ color: "#B27B60" }}
                  >
                    {item.caption}
                  </h5>
                  <p
                    className="text-start text-white"
                    style={{ color: "#525C60" }}
                  >
                    {item.content}
                  </p>
                  <button
                    className="d-flex justify-content-start px-4 p-2"
                    onClick={handleclick}
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouselfile;
