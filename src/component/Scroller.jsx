import React from "react";
import styled from "styled-components";

import { Reviewdata } from "/src/Scrolldata";

const Wrapper = styled.div`
  .review-scroll {
    padding: 20px;
    background-color: #fbf6e9;
    // border-radius: 10px;
  }
  h2 {
    color: #5db996;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
  .scroller {
    width: 100%;
    height: 250px;
    display: flex;
    // flex-direction: column;
    // justify-content: center;
    align-items: center;
    overflow-x: scroll;
    gap: 10px;
    padding: 10px;
    &::-webkit-scrollbar {
      display: none;
    }
    button.next {
      position: absolute;
      right: 20px;
    }
    button.prev {
      position: absolute;
      left: 20px;
    }
    .btn {
      background-color: #118b50;
      color: #fbf6e9;
      padding: 10px;
      border-radius: 30px;
      text-align: center;
      font-size: 15px;
      transition: background-color 0.5s ease;
      border: none;
    }
    .review {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: start;
      gap: 10px;
      padding: 20px;
      width: 240px;
      min-width: 350px;
      height: 200px;
      background-color: #fff;
      color: #000;
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 17px;
      }
    }
  }
`;

function Scroller() {
  return (
    <Wrapper>
      <div className="review-scroll">
        <h2>Customer Reviews</h2>
        <div className="scroller">
          <button
            className="prev btn"
            onClick={() => {
              const scroller = document.querySelector(".scroller");
              scroller.scrollLeft -= 350;
            }}
          >
            ⬅
          </button>
          <button
            className="next btn"
            onClick={() => {
              const scroller = document.querySelector(".scroller");
              scroller.scrollLeft += 350;
            }}
          >
            ➡
          </button>
          {Reviewdata.map((review, index) => (
            <div key={index} className="review">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
              <p>Rating: {review.rating}/5</p>
            </div>
          ))}
          <p>&nbsp;</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Scroller;
