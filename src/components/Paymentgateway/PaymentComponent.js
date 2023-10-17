import React from "react";

const PaymentComponent = ({ order_id, price }) => {
  const paymentHandler = async () => {
    const options = {
      key: "rzp_test_6KtffZXfPIHqEm", // Replace with your actual Razorpay key_id
      name: "Elite EnterPrise",
      description: "Payment for Your Product",
      amount: price * 100, // Convert the price to paisa (e.g., 1000 paisa = 10 INR)
      //order_id: order_id, // Pass the order ID obtained from your backend
      handler: async (response) => {
        try {
          const paymentId = response.razorpay_payment_id;
          // Capture the payment on your server using the paymentId
          // Simulate a capture API call
          console.log(`Payment captured for ID: ${paymentId}`);
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

  return (
    <div>
      <button onClick={paymentHandler}>Pay INR</button>
    </div>
  );
};

export default PaymentComponent;
