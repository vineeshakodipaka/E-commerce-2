import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import "./Account.css";
import { useSelector } from "react-redux";
const AddressDetail = ({ baseUrl1, showCartPopup, cartClose }) => {
  // Define state to manage form data

  const [userAddresses, setUserAddresses] = useState([]);
  const userId = Cookies.get("userId"); // Retrieve userId from cookies
  const { totalPrice } = useSelector((state) => state.cart);

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

        return data;
      } catch (error) {
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

  const paymentHandler = async (AddressID) => {
    const options = {
      key: "rzp_test_6KtffZXfPIHqEm", // Replace with your actual Razorpay key_id
      name: "Elite EnterPrise",
      description: "Payment for Your Product",
      amount: totalPrice * 100, // Convert the price to paisa (e.g., 1000 paisa = 10 INR),
      theme: {
        color: "#686CFD",
      },
      handler: function (response) {
        // Call the Place Order API here
        var formdata = new FormData();
        formdata.append("User_ID", userId);
        formdata.append("AddressID", AddressID);

        var requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow",
        };

        fetch(
          baseUrl1+"PlaceOrder.php",
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {})
          .catch((error) => {});
      },
    };

    // failure
    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
    });

    rzp1.open();
  };

  const hadleclick = async (AddressID) => {
    paymentHandler(AddressID);
    await cartClose();
  };

  return (
    <div className="text-start address-details">
      <Modal className="modalbox" show={showCartPopup} onHide={cartClose}>
        <Modal.Header closeButton className="fw-bold">
          Select The Address
        </Modal.Header>
        <Modal.Body>
       
          {userAddresses.length > 0 ? (
            userAddresses.map((userAddress, index) => (
              <div key={index}>
                <Card
                  className="m-2 addrescard"
                  onClick={() => hadleclick(userAddress.AddressID)}
                >
                  <Card.Body className="p-3">
                    <div>
                      <h4> Address:</h4>
                      <h6>
                        {userAddress.Name},{userAddress.StreetAddress},{" "}
                        {userAddress.City},{userAddress.State},{" "}
                        {userAddress.ZipCode},{userAddress.Contry},
                        {userAddress.AddressID}
                      </h6>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div>No user addresses available.</div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddressDetail;
