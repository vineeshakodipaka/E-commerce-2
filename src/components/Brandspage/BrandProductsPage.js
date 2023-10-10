// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const BrandProductsPage = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const brandId = queryParams.get("Brand_id");

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch products for the specified Brand_id
//     fetch(
//       `https://paradox122.000webhostapp.com/_API/BrandsProduct.php?ConnectedToBrand_id=${brandId}`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Set the fetched products in the state
//         setProducts(data);
//         setLoading(false); // Set loading to false when data is fetched successfully
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false); // Set loading to false when there's an error
//       });
//   }, [brandId]);

//   return (
//     <div>
//       <h2>Products for Brand ID: {brandId}</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <ul>
//           {products.map((product) => (
//             <li key={product.Product_id}>{product.Product_name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default BrandProductsPage;

// BrandProductsPage.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchBrandProducts, addToCart } from "../../actions"; // Import the action to fetch brand products
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BrandProductsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandId = queryParams.get("Brand_id");

  const products = useSelector((state) => state.brandProducts.products);
  const loading = useSelector((state) => state.brandProducts.loading);
  const error = useSelector((state) => state.brandProducts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch an action to fetch products for the specified Brand_id
    dispatch(fetchBrandProducts(brandId));
  }, [dispatch, brandId]);

  // Function to navigate to the single product page
  const handleShopPage = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    navigate("/singleproductpage");
  };

  // State to control the cart pop-up visibility
  const [showCartPopup, setShowCartPopup] = useState(false);

  // State to store the cart items (you can get this from your Redux store)
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    // Show the cart pop-up
    setShowCartPopup(true);
  };

  // Function to navigate to the cart page
  const handleViewCart = () => {
    window.scrollTo(0, 0);
    navigate("/cart");
  };

  //sliding cards
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
  const slidesToShow = 4;

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
          slidesToShow: 4,
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

  const brandsData = useSelector((state) => state.brands.brandsData);

  return (
    <div>
      {/* <h2>Products for Brand ID: {brandId}</h2> */}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="shopcardslidecls">
          <Container>
            {/* Render product cards */}
            <Row className="g-4 mx-3  cardsrow pb-md-5 py-md-3 mb-md-5 pt-5 ">
              <Slider {...settings}>
                {/* //{searchQuery !== "" && Only render when there's a search query */}
                {products.map((product, i) => (
                  <div key={i}>
                    <Card className="rounded-5 pt-1 pb-1 shopcards mx-2 mb-2">
                      <Card.Body>
                        <div className="position-relative">
                          {/* Display "Sale" button if the product is on sale */}
                          {product.isSale === 1 && (
                            <button
                              className="sale-button rounded-3 p-2"
                              style={{
                                background: "#DC0000",
                                border: "none",
                                color: "white",
                                position: "absolute",
                                top: "0",
                                left: "0",
                              }}
                            >
                              Sale
                            </button>
                          )}
                          {/* Handle clicking on a product card to navigate */}
                          <Row onClick={handleShopPage}>
                            <div className="cardimg">
                              <Card.Img
                                className="rounded-3 p-4 mt-3 prdctimg"
                                src={product.Product_img}
                                alt={`Image ${i + 1}`}
                                style={{ width: "100%", height: "250px" }}
                              />
                            </div>
                            <Card.Text
                              className="text-center"
                              style={{ height: "50px" }}
                            >
                              <h5 style={{ lineHeight: "1.2" }}>
                                {product.Product_name}
                              </h5>
                            </Card.Text>
                          </Row>
                          <div className="px-3">
                            <hr />
                          </div>
                          {/* Display original and offer prices */}
                          <Row lg={2}>
                            <Col lg={5} xl={6} md={6} xs={6}>
                              <Card.Text className="mt-2">
                                <p>
                                  <span
                                    className="fw-normal"
                                    style={{ color: "#B8B8B8" }}
                                  >
                                    <s>₹{product.Product_originalPrice}</s>
                                  </span>
                                  <span className="fw-bold">
                                    {" "}
                                    ₹{product.Product_offerPrice}
                                  </span>
                                </p>
                              </Card.Text>
                            </Col>
                            <Col lg={7} xl={6} md={6} xs={6}>
                              {/* Button to add the product to the cart */}
                              <Card.Text className="text-center  mt-xl-0 mt-md-2">
                                <button
                                  className="rounded-3 cardbtn fw-normal p-2"
                                  style={{
                                    background: "#8F3300",
                                    border: "none",
                                    color: "white",
                                    fontSize: "15px",
                                  }}
                                  onClick={() => handleAddToCart(product)}
                                >
                                  Add To Cart
                                </button>
                              </Card.Text>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Row>
          </Container>

          {/* Cart Pop-up */}
          <Modal show={showCartPopup} onHide={() => setShowCartPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Item Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your item has been added to the cart.</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowCartPopup(false)}
              >
                Close
              </Button>
              <Button variant="primary" onClick={handleViewCart}>
                View Cart
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default BrandProductsPage;
