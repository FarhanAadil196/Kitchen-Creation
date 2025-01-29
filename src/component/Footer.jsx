import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  .footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
     background: #e3f0af;
    color: white;
    padding: 20px;
    @media (max-width: 768px) {
              padding: 0;
        padding-bottom: 70px;
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
          <Link to="/category">
            <li>Category</li>
          </Link>
          <Link to="/order">
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
