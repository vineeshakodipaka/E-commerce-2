import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../../actions";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Shopcardslide.css";
import { useCartContext } from "../../CartContext"; // Import the useCartContext hook
import Cookies from "js-cookie";

const Shopcardslide2 = ({ searchQuery }) => {
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

  // State to store the cart items (you can get this from your Redux store)

  // Function to navigate to the cart page

  const userId = Cookies.get("userId"); // Use your method to get the user ID from cookies
  const handleAddToCart1 = (product) => {
    window.scrollTo(0, 0);
    if (!userId) {
      dispatch(addToCart(product));
      setShowCartPopup(true);
    } else {
      setShowCartPopup(true);
    }
  };

  const handleViewCart = () => {
    setShowCartPopup(false); // Close the popup
    if (!userId) {
      navigate("/cartpage"); // Navigate to cartpage if userId is not available
    } else {
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
        breakpoint: 992, // Large screens
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
  const featuredProducts = products.filter((product) => product.isNew);

  return (
    <div className="shopcardslidecls">
      <Container>
        {/* Render product cards */}
        <Row className="g-4 cardsrow pb-md-5 mx-3 pb-1 mb-1  py-md-3 mb-md-5 pt-5 ">
          <Slider {...settings}>
            {searchQuery !== "" && // Only render when there's a search query
              featuredProducts.map((product, i) => (
                <div key={i} className="px-1">
                  <Card className="rounded-3 pt-1 pb-1 shopcards   mb-2">
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
                                className="rounded-3  mt-3  p-lg-4 pt-lg-4 pt-3 pb-3 prdctimg"
                                src={product.Product_img}
                                alt={`Image ${i + 1}`}
                                // style={{ width: "100%", height: "250px" }}
                              />
                            </div>
                            <div className="text-center mt-3 mb-lg-0 mb-2 ">
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
                            {/* <Card.Text className="mt-0 mt-lg-2 mt-md-2 ms-lg-0 price">
                              <p className=" mx-lg-1">
                                <s>₹{product.Product_originalPrice}</s>
                                <br />

                                <span className="fw-bold">
                                  ₹{product.Product_offerPrice}
                                </span>
                              </p>
                            </Card.Text> */}
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
                            <Card.Text className="text-center  mt-xl-0 mt-md-2">
                              <button
                                className="rounded-3 cardbtn fw-normal p-1 p-md-2 px-2"
                                style={{
                                  background: "#8F3300",
                                  border: "none",
                                  color: "white",
                                }}
                                onClick={() => {
                                  handleAddToCart(product);
                                  handleAddToCart1(product);
                                  setShowCartPopup(true);
                                }}
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
          <Button variant="secondary" onClick={() => setShowCartPopup(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleViewCart}>
            View Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Shopcardslide2;
