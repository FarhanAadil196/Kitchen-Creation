import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .footer {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
    @media (max-width: 768px) {
      padding-bottom: 60px;
    }
  }
  .left {
    //   width: 30%;
    display: flex;
    justify-content: center;
    img {
      height: 70px;
    }
  }
  .center {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .right {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-evenly;
  }
  @media (max-width: 538px) {
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="footer">
        {/* <h1>Footer</h1> */}
        <div className="left">
          <img src="./logo.png" alt="" />
        </div>
        <div className="center">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/home">
            <li>Category</li>
          </Link>
          <Link to="/home">
            <li>Order</li>
          </Link>
        </div>
        <div className="right">
          <img src="./google.svg" alt="" />

          <img src="./facebook.svg" alt="" />

          <img src="./linkedin.svg" alt="" />

          <img src="./whatsapp.svg" alt="" />
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
