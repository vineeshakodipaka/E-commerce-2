import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  searchProducts,
  fetchBrands, // Import the fetchBrands action
  setSelectedBrand, // Import the setSelectedBrand action
} from "../actions";
import AOS from "aos"; // AOS library for animations
import "aos/dist/aos.css"; // AOS library CSS
import logoimg from "../Images/Elite Enterprise Logo.png";
import "./Navbar.css";
import { NavDropdown, Button, InputGroup, Accordion } from "react-bootstrap";
import { FaUser } from "react-icons/fa"; // Import the user icon
//import { AuthContext, useAuth } from "../AuthContext "; // Import the useAuth hook
import Cookies from "js-cookie";

const Navbar = ({ handleShow2 }) => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false); // Track brand dropdown state

  const navigate = useNavigate();

  const brandsData = useSelector((state) => state.brands.brandsData);

  useEffect(() => {
    // Fetch brand data from the API
    dispatch(fetchBrands());
  }, [dispatch]);

  const handleBrandChange = (brand) => {
    if (brand.hasSubcat) {
      setSelectedBrand(brand);
    } else {
      setSelectedBrand(null);
      // Navigate to the BrandProductsPage with the selected Brand_id as a query parameter
      navigate(`/brand-products?Brand_id=${brand.Brand_id}`);
    }
  };

  const handleBrandChange1 = (brand) => {
    dispatch(setSelectedBrand(brand.Brand_id));
    navigate(`/brands/Brand_id=${brand.Brand_id}`);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    setSearchQuery(query);
    dispatch(searchProducts(query));

    if (query.trim() !== "") {
      navigate(`/search-results?search=${query}`);
    } else {
    }
  };

  //handleclick for moving brands page
  const handlclick = () => {
    navigate("/brandspage");
  };

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false, // Disable "once" option to trigger animations multiple times
    });
  }, []);

  // useEffect(() => {
  //   // Refresh AOS when the dropdown state changes
  //   if (isDropdownOpen) {
  //     AOS.refresh();
  //   }
  // }, [isDropdownOpen]);

  const navbarCollapseRef = useRef();

  //navigate to cart
  const cartclick = () => {
    navigate("/cart");
  };

  //active links
  const [activeButton, setActiveButton] = useState(0); // State to track active button

  //  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  //  const openOffcanvas = () => {
  //    setOffcanvasOpen(true);
  //  };

  //  const closeOffcanvas = () => {
  //    setOffcanvasOpen(false);
  //  };

  const [userId, setUserId] = useState(Cookies.get("userId"));
  console.log("userId--", userId);
  console.log("userId Type", typeof userId);

  useEffect(() => {
    // Update the userId whenever it changes in the cookies
    const interval = setInterval(() => {
      setUserId(Cookies.get("userId"));
    }, 1000); // Adjust the interval as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar headerbar mt-lg-4 mb-lg-4">
      <div className="container mx-lg-3 mx-xl-5 px-xl-5">
        <Link
          to="/"
          className="nav-item navbrand d-flex me-xxl-5 "
          style={{ textDecoration: "none" }}
        >
          <img
            className="mx-xl-0"
            src={logoimg}
            width="150px"
            height="80px"
            alt="logo"
          />
        </Link>
        <span
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <span className="navbar-toggler-icon"></span>
        </span>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          ref={navbarCollapseRef}
          data-bs-scroll="true"
          aria-controls="offcanvasExample"
        >
          <div className="offcanvas-header">
            {/* <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Offcanvas
            </h5> */}
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-lg-3 ">
              <li className="nav-item px-xl-2 d-flex justify-content-between">
                <Link
                  to="/"
                  aria-current="page"
                  data-bs-auto-dismiss="false"
                  className={`nav-link nav-btns  b-link  rounded-3 ${
                    activeButton === 0 ? "active" : ""
                  }`}
                  onClick={() => {
                    //  navbarCollapseRef.current?.classList.remove("show");
                    setActiveButton(0);
                  }}
                >
                  <span data-bs-dismiss="offcanvas">Home</span>
                </Link>
                <button
                  type="button"
                  className="btn-close text-reset mt-2 d-lg-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </li>
              <li className="nav-item px-xl-2">
                <Link
                  to="/about"
                  className={`nav-link nav-btns b-link  rounded-3 ${
                    activeButton === 1 ? "active" : ""
                  }`}
                  onClick={() => {
                    //   navbarCollapseRef.current?.classList.remove("show");
                    setActiveButton(1);
                  }}
                >
                  <span data-bs-dismiss="offcanvas">About</span>
                </Link>
              </li>

              <li className="nav-item px-xl-2">
                <Link
                  to="/shoppage"
                  className={`nav-link nav-btns b-link  rounded-3 ${
                    activeButton === 2 ? "active" : ""
                  }`}
                  onClick={() => {
                    navbarCollapseRef.current?.classList.remove("show");
                    setActiveButton(2);
                  }}
                >
                  <span data-bs-dismiss="offcanvas">Shop</span>
                </Link>
              </li>

              <li
                className={`basic-nav-dropdown nav-btns b-link  rounded-3 ${
                  activeButton === 3 ? "active" : ""
                }`}
                onClick={() => {
                  setActiveButton(3);
                }}
              >
                <NavDropdown
                  show={isBrandDropdownOpen} // Show the dropdown based on the state
                  onMouseEnter={() => setIsBrandDropdownOpen(true)} // Open the dropdown when mouse enters
                  onMouseLeave={() => setIsBrandDropdownOpen(false)} // Close the dropdown when mouse leaves
                  // onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
                  title={
                    <span
                      className={`basic-nav-dropdown nav-btns b-link  rounded-3 ${
                        activeButton === 3 ? "active" : ""
                      }`}
                      onClick={handlclick}
                    >
                      Brands
                      {/* <RiArrowDropDownFill className="fs-3" /> */}
                    </span>
                  }
                  className="basic-nav-dropdown"
                  id="basic-nav-dropdown"
                >
                  {brandsData.map((brand) => (
                    <div key={brand.Brand_id}>
                      {brand.hasSubcat ? (
                        <Accordion drop="end" className="accordian">
                          <Accordion.Header className="accordian">
                            <span
                              data-bs-dismiss="offcanvas"
                              className="nav-link navdroplink px-1 accordian"
                              id="navbrandname"
                              onClick={() => {
                                handleBrandChange1(brand);
                                setIsBrandDropdownOpen(false); // Close the dropdown when a brand is selected
                                navbarCollapseRef.current?.classList.remove(
                                  "show"
                                );
                              }}
                            >
                              {brand.Brand_Name}
                            </span>
                          </Accordion.Header>
                          <Accordion.Body className="mb-2 dropdown-menu2">
                            {brand.subcategories.map((subcat) => (
                              <Accordion.Item key={subcat.Subcat_id}>
                                <Link
                                  onClick={() => {
                                    setIsBrandDropdownOpen(false); // Close the dropdown when a brand is selected
                                    navbarCollapseRef.current?.classList.remove(
                                      "show"
                                    );
                                  }}
                                  to={`/subbrand-products?Subcat_id=${subcat.Subcat_id}`}
                                  className="mx-2 nav-link navdroplink"
                                >
                                  <span
                                    data-bs-dismiss="offcanvas"
                                    id="navsubcatname"
                                  >
                                    {" "}
                                    {subcat.Subcat_Name}
                                  </span>
                                </Link>
                              </Accordion.Item>
                            ))}
                          </Accordion.Body>
                        </Accordion>
                      ) : (
                        <NavDropdown.Item
                          onClick={() => {
                            handleBrandChange(brand);
                            //setIsBrandDropdownOpen(false); // Close the dropdown when a brand is selected
                            navbarCollapseRef.current?.classList.remove("show");
                          }}
                          className="nav-link navdroplink  px-4"
                        >
                          <span data-bs-dismiss="offcanvas" id="navbrandname">
                            {brand.Brand_Name}
                          </span>
                        </NavDropdown.Item>
                      )}
                    </div>
                  ))}
                </NavDropdown>
              </li>
              <li className="nav-item px-xl-2">
                <Link
                  to="/contact"
                  className={`nav-link nav-btns b-link  rounded-3 ${
                    activeButton === 4 ? "active" : ""
                  }`}
                  onClick={() => {
                    navbarCollapseRef.current?.classList.remove("show");
                    setActiveButton(4);
                  }}
                >
                  <span data-bs-dismiss="offcanvas"> Contact</span>
                </Link>
              </li>
              <li className="nav-item px-xl-2">
                <Link
                  to="/blog"
                  className={`nav-link nav-btns b-link  rounded-3 ${
                    activeButton === 5 ? "active" : ""
                  }`}
                  onClick={() => {
                    navbarCollapseRef.current?.classList.remove("show");
                    setActiveButton(5);
                  }}
                >
                  <span data-bs-dismiss="offcanvas">Blogs</span>
                </Link>
              </li>

              <div className="d-none d-lg-block">
                <InputGroup className="position-relative">
                  <div className="position-absolute searchbtn">
                    <AiOutlineSearch
                      className="searchicon fs-5"
                      // style={{ marginTop: "12px" }}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search products."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="form-control rounded-pill ms-xl-4 ms-lg-4 mx-md-5 mx-lg-1 mx-3 "
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearch(e);
                      }
                    }}
                    onClick={(e) => {
                      // Prevent click propagation to the parent div
                      e.stopPropagation();
                    }}
                  />
                </InputGroup>
              </div>

              <li className="nav-item px-lg-0 px-xl-2 ms-xl-4 my-3 my-lg-0 my-md-0">
                {/* <Link to="/cart" className="nav-link "> */}
                <Button
                  onClick={() => {
                    cartclick();
                    navbarCollapseRef.current?.classList.remove("show");
                  }}
                  className="cart-btn rounded-pill"
                >
                  <i
                    className="fas fa-shopping-cart rounded-circle p-1"
                    style={{ background: "#44160F", color: "white" }}
                  ></i>
                  <span className="px-3 px-lg-1" data-bs-dismiss="offcanvas">
                    Cart-({totalQuantity})
                  </span>
                </Button>
                {/* <span className="badge rounded-pill badge-notification bg-primary">{totalQuantity}</span> */}
                {/* </Link> */}
              </li>
            </ul>

            <ul className="navbar-nav ms-auto  ">
              <li className="nav-item ">
                {userId === undefined ? (
                  <Link
                    className={`nav-link nav-btns b-link  rounded-3 ${
                      activeButton === 6 ? "active" : ""
                    }`}
                    onClick={() => {
                      handleShow2();
                      navbarCollapseRef.current?.classList.remove("show");
                      setActiveButton(6);
                    }}
                  >
                    <span data-bs-dismiss="offcanvas">Login</span>
                  </Link>
                ) : (
                  <Link
                    to="/account"
                    className="nav-link"
                    onClick={() => {
                      // navbarCollapseRef.current?.classList.remove("show");
                    }}
                  >
                    <span data-bs-dismiss="offcanvas">
                      <FaUser />
                    </span>
                  </Link>
                )}
              </li>
            </ul>

            {/* <ul className="navbar-nav ms-auto">
              {isAuthenticated && userId !== undefined ? (
                <li className="nav-item">
                  <Link
                    to="/account"
                    className="nav-link"
                    onClick={() => {
                      navbarCollapseRef.current?.classList.remove("show");
                    }}
                  >
                    <span data-bs-dismiss="offcanvas">
                      <FaUser />
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link nav-btns b-link  rounded-3"
                    onClick={() => {
                      handleShow2();
                      navbarCollapseRef.current?.classList.remove("show");
                    }}
                  >
                    <span>Login</span>
                  </Link>
                </li>
              )}
            </ul> */}
          </div>
        </div>
      </div>

      <InputGroup className="d-lg-none mx-2 ">
        {" "}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="form-control rounded-3 ms-xl-4  px-5 p-3 mt-3  mx-3 position-relative"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
          onClick={(e) => {
            // Prevent click propagation to the parent div
            e.stopPropagation();
          }}
        />
        <div className="pt-2">
          {" "}
          <AiOutlineSearch className="position-absolute start-0 ms-4 fs-2 mt-4" />
        </div>
      </InputGroup>
    </nav>
  );
};

export default Navbar;
