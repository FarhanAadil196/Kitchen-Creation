import React, { useState } from "react";
import styled from "styled-components";
import { clearCart } from "../store/Slice";

const FormWrapper = styled.div`
  .Form {
    max-width: 600px;
    width: 100%;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fbf6e9;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    label {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      color: #555;

      input,
      select,
      textarea {
        margin-top: 0.5rem;
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
      }

      textarea {
        resize: none;
      }
    }

    button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    form {
      label {
        font-size: 0.9rem;

        input,
        select,
        textarea {
          padding: 0.6rem;
        }
      }

      button {
        font-size: 0.9rem;
        padding: 0.7rem 1.2rem;
      }
    }
  }
`;

function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.fullName &&
      formData.email &&
      formData.address &&
      formData.city &&
      formData.postalCode &&
      formData.country &&
      formData.paymentMethod
    ) {
      setSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <FormWrapper>
        <div className="Form">

      <h2>Checkout Form</h2>
      {submitted ? (
        <div>
          <h3>Order Confirmed!</h3>
          <p>Thank you for your purchase, {formData.fullName}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Address
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="3"
              required
              ></textarea>
          </label>
          <label>
            City
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              required
            />
          </label>
          <label>
            Postal Code
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Enter your postal code"
              required
            />
          </label>
          <label>
            Country
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </label>
          <label>
            Payment Method
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </label>
          <button type="submit" onClick={clearCart}>Place Order</button>
        </form>
      )}
                </div>
    </FormWrapper>
  );
}

export default CheckoutForm;
