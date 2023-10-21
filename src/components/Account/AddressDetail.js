import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import './Account.css'
const AddressDetail = ({ baseUrl1, showCartPopup, cartClose }) => {
  // Define state to manage form data

  const [userAddresses, setUserAddresses] = useState([]);
  const userId = Cookies.get("userId"); // Retrieve userId from cookies

  const fetchUserAddresses = React.useCallback(
    async (userId) => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      try {
        const response = await fetch(
          baseUrl1 + `Get_addresess.php?user_id=${userId}`,
          requestOptions
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log the response data
        return data;
      } catch (error) {
        console.error("Error fetching user addresses:", error);
        return { status: false, message: "Error fetching user addresses" };
      }
    },
    [baseUrl1]
  );

  useEffect(() => {
    if (userId) {
      fetchUserAddresses(userId).then((data) => {
        if (data.status) {
          setUserAddresses(data.data);
        } else {
          setUserAddresses([]);
        }
      });
    }
  }, [userId, fetchUserAddresses]);

  const paymentHandler = async () => {
    const options = {
      key: "rzp_test_6KtffZXfPIHqEm", // Replace with your actual Razorpay key_id
      name: "Elite EnterPrise",
      description: "Payment for Your Product",
      // amount: totalPrice * 100, // Convert the price to paisa (e.g., 1000 paisa = 10 INR)
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;

          // You can make an API call to Razorpay to check the payment status
          const paymentStatus = await checkPaymentStatus(paymentId);

          if (paymentStatus === "captured") {
            console.log(`Payment captured for ID: ${paymentId}`);
            // Payment was successful
          } else {
            console.log(`Payment failed for ID: ${paymentId}`);
            // Payment was not successful
          }
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
async function checkPaymentStatus(paymentId) {
    // Replace with your actual Razorpay secret key
    const apiKey = "rzp_test_6KtffZXfPIHqEm";
    const apiUrl = `https://api.razorpay.com/v1/payments/${paymentId}`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: "Basic " + btoa(apiKey),
        },
      });

      const data = response.data;

      return data.status; // The status could be "captured" for successful payments
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

const hadleclick =async () => {
  paymentHandler();
  await cartClose();

}

  return (
    <div className="text-start address-details">
    <Modal className="modalbox" show={showCartPopup} onHide={cartClose}>
      <Modal.Header closeButton className="fw-bold">Select The Address</Modal.Header>
      <Modal.Body>
        {userAddresses.map((userAddress, index) => (
          <div key={index}>
            <Card className="m-2 addrescard" onClick={()=>{hadleclick()
          ;}}>
              <Card.Body className="p-3">
                <div>
                  <h4> Address:</h4>
                  <h6>
                    {userAddress.Name},{userAddress.StreetAddress},{" "}
                    {userAddress.City},{userAddress.State},{" "}
                    {userAddress.ZipCode},{userAddress.Contry}
                  </h6>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Modal.Body>
    </Modal>
  </div>
  );
};

export default AddressDetail;
