import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const Subcatdropdown = () => {
  const { subcatdrop } = useParams();
  const brandsData = useSelector((state) => state.brands.brandsData);
  const selectedSubcategory = brandsData.reduce((acc, brand) => {
    const subcat = brand.subcategories.find(
      (subcat) => subcat.Subcat_id === subcatdrop
    );
    if (subcat) {
      acc = subcat;
    }
    return acc;
  }, null);

  if (!selectedSubcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>{selectedSubcategory.Subcat_Name}</Card.Title>
          <Card.Text>
            {/* Display other details of the subcategory */}
            Description: {selectedSubcategory.Description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Subcatdropdown;
