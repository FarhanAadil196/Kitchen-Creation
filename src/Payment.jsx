import React from "react";
import { useRazorpay, RazorPayOrderOptions } from "react-razorpay";

const PaymentComponent = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: 2000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      order_id: "order_9A33XWu170gUtm", // Replace with actual order ID
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      notes: {
        address: "Hello World",
      },
      reminder_enable: true,
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {isLoading && <p>Loading Razorpay...</p>}
      {error && <p>Error loading Razorpay: {error}</p>}
      <button onClick={handlePayment} disabled={isLoading}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentComponent;
