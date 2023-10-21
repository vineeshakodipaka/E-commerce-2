// SingleCardPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SingleCardPage = () => {
  const { cardId } = useParams() || {};
  const card = useSelector((state) =>
    state.products.filteredProducts.find(
      (product) => product.Product_id === cardId
    )
  );
  console.log("Card:", card);

  const dispatch = useDispatch();

  useEffect(() => {}, [cardId]);

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
          <Card.Text className="text-center mt-3">
            <h5 className="productname" style={{ lineHeight: "1.2" }}>
              {card.Product_name}
            </h5>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <Card className="rounded-2 pt-1 pb-1 shopcards">
        <Card.Body>
          <div className="position-relative">
        
            {card.isSale && (
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
          
            <Row>
              <div className="cardimg">
                <Card.Img
                  variant="top"
                  className="rounded-3  mt-3  p-lg-4 pt-lg-4 pt-3 pb-3 prdctimg"
                  src={card.Product_img}
                  alt={`Image`}
             
                />
              </div>
              <div className="mt-2  text-center">
                <h5 className="productname" style={{ lineHeight: "1.2" }}>
                  {card.Product_name}
                </h5>
              </div>
            </Row>
            <div className="px-3 d-md-none d-lg-block d-none">
              <hr />
            </div>
         
            <Row lg={2} className="row2cart">
              <Col lg={5} xl={6} md={6} xs={12}>
                <div className="mt-0 mt-lg-2 mt-md-2 ms-lg-0 price fs-5">
                  <p>
                    {card.isSale ? (
                      <span className="fw-bold">
                        ₹{card.Product_offerPrice}
                      </span>
                    ) : (
                      <span className="fw-bold">
                        ₹{card.Product_originalPrice}
                      </span>
                    )}
                    &nbsp;
                    {card.isSale && (
                      <span className="fw-normal" style={{ color: "#B8B8B8" }}>
                        <s>₹{card.Product_originalPrice}</s>
                      </span>
                    )}
                  </p>
                </div>
              </Col>
              <Col lg={7} xl={6} md={6} xs={12}>
        
                <Card.Text className="text-center  mt-xl-0 mt-md-2">
                  <button
                    className="rounded-3  fw-normal p-1 p-md-2 px-2"
                    style={{
                      background: "#8F3300",
                      border: "none",
                      color: "white",
                    }}
                    onClick={() => {
                      handleAddToCart(card);
                      handleAddToCart1(card);
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
      </Card> */}
    </Container>
  );
};

export default SingleCardPage;
