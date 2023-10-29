import React, { useState, useEffect } from "react";
import { ButtonGroup, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../../actions";
import { Link, useNavigate } from "react-router-dom";
import {  Button } from "react-bootstrap";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Shopcardslide.css";
import { useCartContext } from "../../CartContext"; // Import the useCartContext hook
import Cookies from "js-cookie";
import { useSpring, animated } from "react-spring";
import { useAuth } from "../../AuthContext ";

const Shopcardslide = ({ searchQuery }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts);
  const { handleAddToCart } = useCartContext(); // Use the useCartContext hook to access the handleAddToCart function

  // Fetch products from the Redux store when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!searchQuery) {
      // If searchQuery is empty, fetch and display all products
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: products });
    } else {
      // If there is a search query, filter and display the matching products
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      dispatch({ type: "SET_FILTERED_PRODUCTS", payload: filteredProducts });
    }
  }, [searchQuery, products, dispatch]);

  const Scrollink = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  // State to control the cart pop-up visibility
  const [showCartPopup, setShowCartPopup] = useState(false);

  // Function to navigate to the cart page

  const userId = Cookies.get("userId"); // Use your method to get the user ID from cookies
  const handleAddToCart1 = (product,Qty) => {
  
    if (!userId) {
      dispatch(addToCart(product,Qty));
      setShowCartPopup(true);
    } else {
      setShowCartPopup(true);
    }
  };
 const { setActiveButton } = useAuth();
  const handleViewCart = () => {
    window.scrollTo(0, 0);
    setShowCartPopup(false); // Close the popup
    if (!userId) {
      setActiveButton(6);
      navigate("/cartpage"); // Navigate to cartpage if userId is not available
    } else {
      setActiveButton(6);
      navigate("/cart"); // Navigate to cart if userId is available
    }
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
        breakpoint: 1024, // Extra-large screens
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 576, // iPad mini and similar small screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Filter the products to include only featured products
  const featuredProducts = products.filter((product) => product.isFeatured);



     const handleAddToCart3 = () => {
       setShowCartPopup(true);

       setTimeout(() => {
         setShowCartPopup(false);
       }, 8000); // Updated to 5 seconds
     };

     const notificationAnimation = useSpring({
       opacity: showCartPopup ? 1 : 0,
       transform: showCartPopup ? "translateY(0)" : "translateY(-100%)",
     });

  return (
    <div className="shopcardslidecls">
      <Container>
        {/* Render product cards */}
        <Row className="g-4 cardsrow mx-md-3 pb-md-5 py-md-3 mb-md-5 pt-5 ">
          <Slider {...settings}>
            {searchQuery !== "" && // Only render when there's a search query
              featuredProducts.map((product, UserCartDetails_ID) => (
                <div key={UserCartDetails_ID} className="px-1">
                  <Card className="rounded-3 pt-1 pb-1 shopcards  mb-2">
                    <Card.Body>
                      <div className="position-relative">
                        {/* Display "Sale" button if the product is on sale */}
                        {product.isSale && (
                          <button
                            className="sale-button rounded-3 px-2"
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
                        <Link
                          className="cartlink"
                          to={`/singleproductpage/${product.Product_id}`}
                          onClick={() => {
                            Scrollink();
                          }}
                        >
                          <Row>
                            <div className="cardimg">
                              <Card.Img
                                variant="top"
                                className="rounded-3  mt-3 p-lg-4 pt-lg-4 pt-3 pb-3  prdctimg"
                                src={product.Product_img}
                                alt={`Image ${UserCartDetails_ID + 1}`}
                              />
                            </div>
                            <div className="text-center  mt-3 mb-lg-0 mb-2  ">
                              <h5
                                style={{ lineHeight: "1.2" }}
                                className="productname"
                              >
                                {product.Product_name}
                              </h5>
                            </div>
                          </Row>
                        </Link>
                        <div className="px-3 d-md-none d-lg-block d-none">
                          <hr />
                        </div>
                        {/* Display original and offer prices */}
                        <Row lg={2} className="row2cart">
                          <Col lg={5} xl={6} md={4} xs={12}>
                            <div className="mt-0 mt-lg-2 mt-md-2 ms-lg-0 price fs-5">
                              <p>
                                {product.isSale ? (
                                  <span className="fw-bold">
                                    ₹{product.Product_offerPrice}
                                  </span>
                                ) : (
                                  <span className="fw-bold">
                                    ₹{product.Product_originalPrice}
                                  </span>
                                )}
                                &nbsp;
                                {product.isSale && (
                                  <span
                                    className="fw-normal"
                                    style={{ color: "#B8B8B8" }}
                                  >
                                    <s>₹{product.Product_originalPrice}</s>
                                  </span>
                                )}
                              </p>
                            </div>
                          </Col>
                          <Col lg={7} xl={6} md={8} xs={12}>
                            {/* Button to add the product to the cart */}
                            <div className="text-center  mt-xl-0 mt-md-2">
                              <button
                                className="rounded-3 cardbtn fw-normal  p-1 p-md-2 px-2"
                                style={{
                                  background: "#8F3300",
                                  border: "none",
                                  color: "white",
                                }}
                                onClick={() => {
                                  handleAddToCart(product, "1");
                                  handleAddToCart1(product, "1");
                                  handleAddToCart3();
                                }}
                              >
                                Add To Cart
                              </button>
                            </div>
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
      <animated.div
        className="notification m-2"
        style={{
          ...notificationAnimation,
          position: "fixed",
          top: 0,
          right: 0,
        }}
      >
        <Card className="popupcart text-center pt-2 pb-2 ">
          <p>Item Added to Cart</p>
          <p>Your item has been added to the cart.</p>
          <Container className="d-flex justify-content-center align-items-center ">
            <ButtonGroup>
              <Button
                className="cartpopupbtn2 p-2 rounded-3"
                onClick={handleViewCart}
              >
                View Cart
              </Button>
              <Button
                className="cartpopupbtn1 p-2 px-4 mx-1 rounded-3"
                onClick={() => setShowCartPopup(false)}
              >
                Close
              </Button>
            </ButtonGroup>
          </Container>
        </Card>
      </animated.div>
    </div>
  );
};

export default Shopcardslide;
