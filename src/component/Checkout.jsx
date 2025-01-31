import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/Slice";
import { useRazorpay} from "react-razorpay";

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 20px;
  background: #fbf6e9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h1, h2 {
    color: #118b50;
    text-align: center;
  }

  .cart-items, .checkout-form {
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    background: #fff;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #5db996;
    color: #fbf6e9;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .checkout-form {
    padding: 20px;
    background: #fff;
    border-radius: 8px;
  }
form{
display: flex;
justiify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
}
input,select,textarea{
padding: 10px;
border-radius: 10px;
border:none;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
width: 100%;

}
  button {
    background: #118b50;
    color: #fbf6e9;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;

    &:hover {
      background: #fbf6e9;
      color: #118b50;
    }
  }
    
`;

const Checkout = () => {
  const {items, totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    paymentMethod: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const { error, isLoading, Razorpay } = useRazorpay();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Object.values(formData).every((value) => value.trim() !== "")) {
  //     setSubmitted(true);
  //     dispatch(clearCart());
  //   } else {
  //     alert("Please fill in all required fields correctly.");
  //   }
  // };
  items.reduce((total, item) => total + item.mprice * item.quantity, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    const options = {
      key: "rzp_test_UIwkMtHHUruFI7",
      key_secret: "AzzSGhhg2uxR50awzs1SoDVx",
      amount: items.reduce((total, item) => total + item.mprice * item.quantity, 0) * 100,
      currency: "INR",
      name: "Kitchen Creation",
      description: "Test Transaction",
      image: "./logo.png",
      handler: (response) => {
        alert(response.razorpay_payment_id);
        dispatch(clearCart());
        setSubmitted(true);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email || "test@example.com",
        contact: formData.phoneNumber,
      },
      theme: {
        color: "#F37254",
      },
    };
  
    const rzp1 = new Razorpay(options);
    rzp1.open();
  };
  
  return (
    <Wrapper>
      <h1>Checkout</h1>
      <div className="cart-items">
        {items.length === 0 ? (
          <p>Your cart is empty. <a href="/menu">Go back to shop</a>.</p>
        ) : (
          items.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.imgsrc} alt={item.mname} width="80" height="80" />
              <div>
                <h4>{item.mname}</h4>
                <p>₹{item.mprice} x {item.quantity} = ₹{item.mprice * item.quantity}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
        <h3>Total: ₹{items.reduce((total, item) => total + item.mprice * item.quantity, 0)}</h3>
      </div>
      {!submitted ? (
        <div className="checkout-form">
          <h2>Checkout Form</h2>
          <form>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
            <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" required />
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <button type="button" onClick={handlePayment}>Place Order ₹{items.reduce((total, item) => total + item.mprice * item.quantity, 0)}</button>
            </form>
        </div>
      ) : (
        <div>
          <h3>Order Confirmed!</h3>
          <p>Thank you for your purchase, {formData.fullName}!</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Checkout;