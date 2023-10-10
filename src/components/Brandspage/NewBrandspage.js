import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchBrands } from "../../actions";
import brandimg from "../../Images/image 55.png";
import { Card, Col, Container, Row } from "react-bootstrap";

const NewBrandspage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const brandsData = useSelector((state) => state.brands.brandsData);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    if (brand.hasSubcat) {
      setSelectedBrand(brand);
    } else {
      setSelectedBrand(null);
      // Navigate to the BrandProductsPage with the selected Brand_id as a query parameter
      navigate(`/brand-products?Brand_id=${brand.Brand_id}`);
    }
  };

  const handleBrandClick2 = (subcat) => {
    if (subcat.hasSubcat) {
      setSelectedBrand(subcat);
    } else {
      setSelectedBrand(null);
      // Navigate to the BrandProductsPage with the selected Brand_id as a query parameter
      navigate(`/subbrand-products?Subcat_id=${subcat.Subcat_id}`);
    }
  };
  return (
    <div className="newbrands">
      <div className="position-relative">
        <img
          src={brandimg}
          width="100%"
          style={{ height: "250px" }}
          alt="Brand Image"
        />
        <h3
          className="position-absolute top-50 start-50 translate-middle"
          style={{ color: "white" }}
        >
          Brands
        </h3>
      </div>
      <Container className="mt-2">
        {selectedBrand && selectedBrand.hasSubcat ? (
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
            {selectedBrand.subcategories.map((subcat, index) => (
              <Col key={subcat.Subcat_id}>
                <Card
                  className=" mt-2 mb-2"
                  onClick={() => handleBrandClick2(subcat)}
                >
                  <center>
                    <Card.Body>
                      <Card.Img
                        className="pt-3 pb-3 px-5"
                        src={subcat.Subcat_img}
                        alt={`Subcat_Name ${index + 1}`}
                      />
                      <Card.Title>{subcat.Subcat_Name}</Card.Title>
                    </Card.Body>
                  </center>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3" lg={3} xs={1} md={1}>
            {brandsData.map((brand, ind) => (
              <Col key={brand.Brand_id}>
                <Card
                  className=" mt-2 mb-2"
                  onClick={() => handleBrandClick(brand)}
                  style={{ background: "none", border: "none" }}
                >
                  <Card.Img
                    className="pt-3 pb-3 px-5 "
                    src={brand.Brand_image}
                    alt={`Brand_image ${ind + 1}`}
                    width="100%"
                  />

                  {/* <Card.Title>{brand.Brand_Name}</Card.Title> */}
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default NewBrandspage;
