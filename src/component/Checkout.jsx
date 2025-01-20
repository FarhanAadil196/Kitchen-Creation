import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart} from "../store/Slices"; 

const Wrapper = styled.div`
  .checkout {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fbf6e9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h1 {
      color: #118b50;
      text-align: center;
    }

    .cart-items {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 10px;

      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background: #5db996;
        padding: 10px;
        border-radius: 10px;
        color: #fbf6e9;

        img {
          height: 60px;
          object-fit: contain;
          border-radius: 5px;
        }

        .details {
          flex: 1;
          margin-left: 15px;

          h4 {
            margin: 0;
            font-size: 16px;
          }
        }

        .actions {
          button {
            background: #118b50;
            color: #fbf6e9;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
              background: #fbf6e9;
              color: #118b50;
            }
          }
        }
      }
    }

    .summary {
      margin-top: 20px;
      text-align: right;

      h3 {
        color: #118b50;
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
    }
  }
`;

const Checkout = () => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    if (items.length > 0) {
      dispatch(clearCart());
      alert("Order placed successfully!");
    } else {
      alert("Your cart is empty.");
    }
  };

  return (
    <Wrapper>
      <div className="checkout">
        <h1>Checkout</h1>
        <div className="cart-items">
          {items.length === 0 ? (
            <p>
              Your cart is empty. <a href="/menu">Go back to shop</a>.
            </p>
          ) : (
            items.map((item, index) => (
              <div className="item" key={index}>
                <img src={item.imgsrc} alt={item.mname} />
                <div className="details">
                  <h4>{item.mname}</h4>
                  <p>Price: ₹{item.mprice}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ₹{item.mprice * item.quantity}</p>
                </div>
                <div className="actions">
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="summary">
          <h3>
            Total: ₹
            {items.length > 0
              ? items.reduce(
                  (total, item) => total + item.mprice * item.quantity,
                  0
                )
              : 0}
          </h3>
          <button>
            {items.length > 0 ? "Place Order" : "Cart is Empty"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
