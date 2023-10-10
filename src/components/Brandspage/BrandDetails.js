import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BrandDetails = () => {
  const selectedBrand = useSelector((state) => state.brands.selectedBrand);
  const brandsData = useSelector((state) => state.brands.brandsData);
  const navigate = useNavigate();

  // Find the selected brand in the brandsData array
  const brand = brandsData.find((brand) => brand.Brand_id === selectedBrand);

  // Initialize selectedBranda state unconditionally at the top of the component
  const [selectedBranda, setSelectedBranda] = useState(null);

  if (!brand) {
    return <div>Loading...</div>; // Add a loading state or error handling as needed
  }

  const handleBrandClick2 = (subcat) => {
    if (subcat.hasSubcat) {
      setSelectedBranda(subcat);
    } else {
      setSelectedBranda(null);
      // Navigate to the BrandProductsPage with the selected Brand_id as a query parameter
      navigate(`/subbrand-products?Subcat_id=${subcat.Subcat_id}`);
    }
  };
  return (
    <div className="container">
      {/* <Row className="justify-content-center">
        <Col lg={4}>
          <h1 className="text-center">{brand.Brand_Name} Details</h1>
          <img src={brand.Brand_image} width="100%" />
        </Col>
      </Row> */}

      {/* <Shopcardslide /> */}

      {brand.hasSubcat && (
        <div>
          <h2 className="text-center">Subcategories:</h2>
          <Row className="px-xl-5 mx-lg-5 mx-4 pt-3 pb-3">
            {brand.subcategories.map((subcat) => (
              <>
                <Col>
                  {" "}
                  <Card
                    className="pt-4 pb-4 mb-3 px-5"
                    onClick={() => handleBrandClick2(subcat)}
                  >
                    <h4 key={subcat.Subcat_id}>{subcat.Subcat_Name}</h4>
                  </Card>
                </Col>
              </>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
