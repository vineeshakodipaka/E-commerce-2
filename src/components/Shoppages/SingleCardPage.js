// SingleCardPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions"; // Import the addToCart action

const SingleCardPage = () => {
  const { cardId } = useParams() || {};
const card = useSelector((state) =>
  state.products.filteredProducts.find((product) => product.id === cardId)
);
console.log("Card:", card);

  const dispatch = useDispatch();

  useEffect(() => {
    // Load additional data if needed
  }, [cardId]);

const handleAddToCart = () => {
  if (card) {
    dispatch(addToCart(card));
    console.log("Product added to cart:", card);
  }
};


  if (!card) {
    return (
      <Container>
        <p>Card not found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Card className="rounded-5 pt-5 pb-5" style={{ background: "#F9F8F8" }}>
        <Card.Body>
          <div className="text-center">
            <Card.Img
              className="rounded-3 p-4 mt-3"
              src={card.img}
              alt={`Image for ${card.name}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <Card.Text className="text-center mt-3">
            <h5 style={{ lineHeight: "1.2" }}>{card.name}</h5>
          </Card.Text>
          <Card.Text className="text-center mt-2">
            <p>
              <span className="fw-normal" style={{ color: "#B8B8B8" }}>
                <s>{card.originalPrice}</s>
              </span>
              &nbsp;&nbsp;
              <span className="fw-bold"> {card.offerPrice}</span>
            </p>
          </Card.Text>
          <Button
            className="rounded-3 p-2"
            style={{ background: "#8F3300", border: "none", color: "white" }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SingleCardPage;
