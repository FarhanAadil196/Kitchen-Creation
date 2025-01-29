import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .contact {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  form {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
  input {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    outline:none;
  }
  select {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    outline:none;
  }
  textarea {
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    outline:none;
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
`;

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [foodType, setFoodType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email, foodType, message);
   if(firstName && email && foodType && message){
    alert("Form submitted successfully");
    setFirstName("");
    setEmail("");    
    setFoodType("");
    setMessage("");
   }
  };

  return (
    <Wrapper>
      <div className="contact">
        <h1>Contact</h1>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Food Type:</label>
            <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
                <option value="Select">Food Type</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
              <option value="both">Both</option>
            </select>
            <label>Message:</label>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;