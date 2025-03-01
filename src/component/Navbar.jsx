import React, { useState } from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
  selectTotalPrice,
} from "../store/Slice";
import "../App.css";

const Wrapper = styled.nav`
 .navbar {
    width: 100%;
    background: #e3f0af;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    z-index: 1000;

    .nav-1 {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 1rem;

      .left {
        display: flex;
        height: 100%;
        gap: 2rem;
        justify-content: center;
        align-items: center;

        h5 {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 0.9rem;
        }
      }
      .right {
        display: flex;
        height: 100%;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        a {
          color: black;
          text-decoration: none;
        }

        h5 {
          padding: 5px;
          font-size: 0.9rem;
        }
      }
    }

    .nav-2 {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 1rem;
      background: #e3f0af;

      .logo {
        width: 120px;
        height: auto;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 2rem;
        padding: 15px;
        align-items: center;

        a {
          text-decoration: none;
          color: black;
          font-size: 0.9rem;
        }

        li {
          cursor: pointer;
        }
      }

      .cart {
        display: flex;
        align-items: center;
        position: relative;

        img {
          width: 30px;
          height: 30px;
        }

        span {
             position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    border-radius: 50%;
    /* padding: 4px; */
    font-size: 12px;
    width: 20px;
    display: flex;
    height: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
        }
      }
    }

    @media (max-width: 768px) {
      .nav-1 {
        flex-direction: column;
        height: auto;
        gap: 0.5rem;

        .left h5 {
          font-size: 0.8rem;
        }

        .right h5 {
          font-size: 0.8rem;
        }
          .right{
          display:none;
          }
      }

      .nav-2 {
        // flex-direction: column;
        height: auto;
        gap: 0.5rem;

        ul {
          display: none;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          cursor: pointer;
        }

        .cart img {
          width: 25px;
          height: 25px;
        }
      }
    }

    @media (max-width: 480px) {
      .nav-1 {
        padding: 0.5rem;
      }

      .nav-2 {
        padding: 0.5rem;

        .logo {
          width: 100px;
        }
        .cart ul li {
          justify-content: flex-start;
        }
        .cart img {
          width: 20px;
          height: 20px;
        }

        .cart span {
          font-size: 10px;
          width: 15px;
    height: 15px;
        }
      }
    }
  }

  .cart-modal {
    width: 100%;
    background-color: #fff;
    border: 1px solid #ddd;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;

    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #e3f0af;
      padding: 10px;
    }

    ul {
      list-style: none;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-family: sans-serif;
      margin: 10px 0;

      li {
        width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
      }
    }
      .quantity{
      display: flex;
    gap: 5px;
    align-items: center;
      }
      p{
      margin:10px 0;
      }

    ul li img {
      width: 50px;
    }

    button {
      border: 2px solid #5db996;
      padding: 10px;
      border-radius: 5px;

      &:hover {
        background-color: #5db996;
        color: #fff;
        cursor: pointer;
      }
        
    }
      .close{
        border:none;
        // border-radius:50%;
        box-shadow:0 0 5px 4px rgba(0,0,0,0.1);
          }
        .name{
            width: 100px;
          }

    @media (max-width: 768px) {
      max-width: 90%;
      .top {
        font-size: 0.7rem;
      }

      ul li img {
        width: 35px;
      }
        ul li span{
        font-size: 0.7rem;
        }

      button {
        font-size: 0.6rem;
        padding: 8px;
      }
    }
  }

  .mnavbar {
    padding: 10px;
    width: 100%;
    background-color:#e3f0af;
    position: fixed;
    bottom: 0;
    z-index: 1000;
    display: none;
box-shadow: 0px -5px 20px #00000057;
    @media (max-width: 768px) {
    display: block;
    }
    ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
   list-style: none;

  a{
  text-decoration: none;
  }

   li{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
   color: #000;
   font-size: 0.8rem;
   }
  }`;

function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const [cartModal, setCartModal] = useState(false); // Ensure this state controls modal visibility

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <Wrapper>
      <div className="navbar">
        <div className="nav-1">
          <div className="left">
            <h5>
              <FaClock />
              Mon-Fri: 10am-8pm, Sat-Sun: 10am-11pm
            </h5>
          </div>
          <div className="right">
            <Link to="/About">
              <h5>About Us</h5>
            </Link>
            <Link to="/Contact">
            <h5>Contact</h5>
            </Link>
            <Link to="/Login">
              <h5>Login/SignUp</h5>
            </Link>
          </div>
        </div>
        <div className="nav-2">
          <img src="./logo.png" alt="Logo" className="logo" />
          <ul className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Category">
              <li>Categories</li>
            </Link>
            <Link to="/Menu">
              <li>Menu</li>
            </Link>
          </ul>
          <div className="cart" onClick={() => setCartModal(!cartModal)}>
            <img
              src="./cart.svg"
              alt="Cart"
              title="View Cart"
            />
            <span>{cartItems.length}</span>
          </div>
        </div>
      </div>

      {cartModal && ( // Show the modal when cartModal is true
        <div className="cart-modal">
          <div className="top">
            <h2>Cart</h2>
            <button
              onClick={() => setCartModal(false)}
              className="close"
              title="Close Cart Modal"
            >
              X
            </button>
          </div>
          {cartItems.length > 0 ? (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <img src={item.imgsrc} alt={item.mname} />
                    <span className="name">{item.mname}</span>
                    <div className="quantity">
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </div>
                    <span>Price: ₹{item.mprice}</span>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
              <p>
                Total: ₹
                {cartItems.reduce(
                  (total, item) => total + item.mprice * item.quantity,
                  0
                )}
              </p>
              <Link to="/Checkout">
                <button onClick={() => setCartModal(false)}>Checkout</button>
              </Link>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      <div className="mnavbar">
        <div className="mnav">
          <ul>
            <Link to="/">
              <li>
                <img src="./home.svg" alt="" />
                Home
              </li>
            </Link>
            <Link to="/menu">
              <li>
                <img src="./Menu.svg" alt="" />
                Menu
              </li>
            </Link>
            <Link to="/Category">
              <li>
                <img src="./Cate.svg" alt="" />
                Category
              </li>
            </Link>
            <Link to="/Login">
              <li>
                <img src="./login.svg" alt="" />
                Login
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
