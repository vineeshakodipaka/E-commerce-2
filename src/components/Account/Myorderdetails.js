import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { baseUrl } from "../../Globalvarible";
import {  Col, Container, Row } from "react-bootstrap";
import {useNavigate } from "react-router-dom";


const Myorderdetails = () => {
  const [orders, setOrders] = useState([]);

  const userId = Cookies.get("userId"); // Retrieve userId from cookies
  useEffect(() => {
    // Make the API call when the component is mounted
    const fetchData = async () => {
      var formdata = new FormData();
      formdata.append("User_ID", userId);

      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      try {
        const response = await fetch(
          baseUrl + "GetOrderDetails.php",
          requestOptions
        );

        if (response.ok) {
          const data = await response.json();
          if (data.status) {
            setOrders(data.data);
          } else {
            
          }
        } else {
         
        }
      } catch (error) {
        
      }
    };

    fetchData();
  }, [userId]);
const navigate=useNavigate()
  const handleOrderClick = (order_ID) => {
    // Set the selected order_ID when the button is clicked
    navigate(`/account/orderspage/${order_ID}`); // Ensure that `navigate` is defined and correctly navigating
  };

  return (
    <div className="myorders">
      <h2>My Orders</h2>
      <div className="mt-4">
        <Container>
          {orders.map((order, order_ID) => (
            <div key={order_ID}>
              <Row className="mb-3 mt-2">
                <Col lg={2} xs={12} className="mt-2">
                  {" "}
                  Order Id: {order.order_ID}
                </Col>
                <Col lg={3} xs={12} className="mt-2">
                  Order Date: {order.order_date}
                </Col>
                <Col lg={2} xs={12} className="mt-2">
                  Status: {order.status}
                </Col>
                <Col lg={2} xs={12} className="mt-2">
                  <button
                    className="rounded-4 btna p-2  mx-3"
                    onClick={() => handleOrderClick(order.order_ID)}
                  >
                    View Order
                  </button>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Myorderdetails;
