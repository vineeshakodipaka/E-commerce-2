import React, { useState, useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownFill } from "react-icons/ri";
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

const Navbar = ({ handleShow2 }) => {
  const { totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false); // Track brand dropdown state
  const searchInputRef = React.useRef(null); // Reference to the search input element
  const navigate = useNavigate();

  const brandsData = useSelector((state) => state.brands.brandsData);
  const selectedBrand = useSelector((state) => state.brands.selectedBrand);
  const selectedSubcat = useSelector((state) => state.brands.selectedSubcat);

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

  const handleSubcatChange = (subcat) => {
    const subcatId = subcat.Subcat_id;
    // Use the useNavigate hook to navigate to the subcategory details page
    navigate(`/subcategories/${subcatId}`);
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter2 = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave2 = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    AOS.init({
      once: false, // Disable "once" option to trigger animations multiple times
    });
  }, []);

  useEffect(() => {
    // Refresh AOS when the dropdown state changes
    if (isDropdownOpen) {
      AOS.refresh();
    }
  }, [isDropdownOpen]);

  const navbarCollapseRef = useRef(null);

  //navigate to cart
  const cartclick = () => {
    navigate("/cart");
  };

  //active links
  const [activeButton, setActiveButton] = useState(0); // State to track active button

  return (
    <nav className="navbar navbar-expand-lg navbar headerbar mt-lg-4 mb-lg-4">
      <div className="container mx-lg-3 mx-xl-5 px-xl-5">
        <Link
          to="/"
          className="nav-item navbrand d-flex me-xxl-5 "
          style={{ textDecoration: "none" }}
        >
          <img className="mx-xl-0" src={logoimg} width="150px" height="80px" />
        </Link>
        <span
          id="navbtn"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </span>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav ms-lg-3 ">
            <li className="nav-item px-xl-2">
              <Link
                to="/"
                className={`nav-link nav-btns   b-link  rounded-3 ${
                  activeButton === 0 ? "active" : ""
                }`}
                // onMouseEnter={() => setActiveButton(0)}
                onClick={() => {
                  navbarCollapseRef.current?.classList.remove("show");
                  setActiveButton(0);
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link
                to="/about"
                className={`nav-link nav-btns b-link  rounded-3 ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => {
                  navbarCollapseRef.current?.classList.remove("show");
                  setActiveButton(1);
                }}
              >
                About
              </Link>
            </li>

            {/* <li className="nav-item px-xl-2">
              <Link
                to="/team"
                className="nav-link nav-btns"
                onClick={() =>
                  navbarCollapseRef.current?.classList.remove("show")
                }
              >
                Team
              </Link>
            </li> */}
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
                Shop
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
                            className="nav-link navdroplink px-1 accordian"
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
                                {subcat.Subcat_Name}
                              </Link>
                            </Accordion.Item>
                          ))}
                        </Accordion.Body>
                      </Accordion>
                    ) : (
                      <NavDropdown.Item
                        onClick={() => {
                          handleBrandChange(brand);
                          setIsBrandDropdownOpen(false); // Close the dropdown when a brand is selected
                          navbarCollapseRef.current?.classList.remove("show");
                        }}
                        className="nav-link navdroplink  px-4"
                      >
                        {brand.Brand_Name}
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
                Contact
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
                Blogs
              </Link>
            </li>

            <div className="d-none d-lg-block position-relative">
              <InputGroup>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="form-control rounded-pill ms-xl-4 mx-md-5 mx-3 "
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
                <AiOutlineSearch
                  className="position-absolute start-50 mx-5"
                  style={{ marginTop: "13.7px" }}
                />
              </InputGroup>
            </div>
          </ul>
          <ul className="navbar-nav ">
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
                <span className="px-3 px-lg-1">Cart-({totalQuantity})</span>
              </Button>
              {/* <span className="badge rounded-pill badge-notification bg-primary">{totalQuantity}</span> */}
              {/* </Link> */}
            </li>
          </ul>
          <ul className="navbar-nav ms-auto  ">
            <li className="nav-item ">
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
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <InputGroup className="d-lg-none ">
        {" "}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="form-control rounded-pill ms-xl-4  mt-3 mx-md-5 mx-3 position-relative"
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
        <AiOutlineSearch className="position-absolute end-0 me-4 mt-4" />
      </InputGroup>
    </nav>
  );
};

export default Navbar;
