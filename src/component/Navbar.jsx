import React from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  selectCartItems,
  selectTotalPrice,
} from "../store/Slices";
import "../App.css";

const Wrapper = styled.nav`
  .navbar {
    width: 100%;
    background: #e3f0af;
    font-family: sans-serif;

    .nav-1 {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
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

        a{
        color:black;
        text-decoration:none;}

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
      justify-content: space-between;
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
          padding: 3px;
          font-size: 12px;
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
        .cart ul li{
          justify-content:flex-start;
        }
        .cart img {
          width: 20px;
          height: 20px;
        }

        .cart span {
          font-size: 10px;
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
    }

    ul {
      list-style: none;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-family: sans-serif;

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
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

    @media (max-width: 768px) {
      max-width: 90%;
      .top {
        font-size: 0.9rem;
      }

      ul li img {
        width: 40px;
      }

      button {
        font-size: 0.8rem;
        padding: 8px;
      }
    }
  }
`;

function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  let cartModalIsOpen = false;
  const handleToggleCartModal = () => {
    const cartModal = document.querySelector(".cart-modal");
    if (cartModalIsOpen) {
      cartModal.style.display = "none";
      cartModalIsOpen = false;
    } else {
      cartModal.style.display = "block";
      cartModalIsOpen = true;
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
            <Link to='/about'>
              <h5>About Us</h5>
            </Link>
            <h5>Contact</h5>
            <h5>Login/SignUp</h5>
          </div>
        </div>
        <div className="nav-2">
          <img src="/src/assets/logo.png" alt="Logo" className="logo" />
          <ul className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/category">
              <li>Categories</li>
            </Link>
            <Link to="/menu">
              <li>Menu</li>
            </Link>
          </ul>
          <div className="cart">
            <img
              src="/src/assets/cart.svg"
              alt="Cart"
              onClick={handleToggleCartModal}
            />
            <span>{cartItems.length}</span>
          </div>
        </div>
      </div>

      {cartItems.length > 0 && (
        <div className="cart-modal">
          <div className="top">
            <h2>Cart</h2>
            <button onClick={handleToggleCartModal}>X</button>
          </div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.imgsrc} alt={item.mname} />
                <span className="name">{item.mname}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ₹{item.mprice}</span>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
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
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      )}
    </Wrapper>
  );
}

export default Navbar;
