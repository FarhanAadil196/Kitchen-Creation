import React, { useState } from 'react'
import { All, Burger, Pizza, Sandwich, Momos, Combos } from '../Cat-Menu-Data'
import styled from 'styled-components';

const Wrapper = styled.div`
  .category-menu {
    display: flex;
    flex-wrap: wrap;
    background-color: #fbf6e9;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
    .Menu-cat {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      // position: fixed;
      align-items: center;
      // flex-direction: column;
      left: 50px;
      top: 200px;

      @media (max-width: 768px) {
        justify-content: center;
        flex-direction: row;
        position: static;
      }

      button {
        color: #118b50;
        background-color: #cecabf;
        padding: 10px;
        border-radius: 10px;
        width: 80px;
        border: none;
        text-align: center;
        font-size: 14px;
        &:hover {
          background-color: #118b50;
          color: #fbf6e9;
          cursor: pointer;
        }
      }
      .active {
        background-color: #118b50;
        color: #fbf6e9;
      }
    }
    .Menu-cat-it {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: auto;
      width: 100%;
      gap: 10px;
      padding: 10px;
      flex-wrap: wrap;

      @media (max-width: 768px) {
        width: 100%;
      }

      .category-menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 200px;
        width: 250px;
        border-radius: 10px;
        border: 3px solid #5db996;
        .cat-img {
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 150px;
          max-width: 100%;
        }
        .cat-name {
          height: 100%;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #5db996;
          text-align: center;
        }
      }
    }
  }
`;

function Categorymenu() {
  const [filter, setFilter] = useState('All');
  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredData = () => {
    switch (filter) {
      case 'All':
        return All;
      case 'Momos':
        return Momos;
      case 'Burger':
        return Burger;
      case 'Pizza':
        return Pizza;
      case 'Sandwich':
        return Sandwich;
      case 'Combos':
        return Combos;
      default:
        return All;
    }
  };

  return (
    <Wrapper>
      <div className="category-menu">
        <div className="Menu-cat">
          <button onClick={() => handleFilter("All")} >All</button>
          <button onClick={() => handleFilter("Momos")}>Momos</button>
          <button onClick={() => handleFilter("Burger")}>Burger</button>
          <button onClick={() => handleFilter("Pizza")}>Pizza</button>
          <button onClick={() => handleFilter("Sandwich")}>Sandwich</button>
          <button onClick={() => handleFilter("Combos")}>Combos</button>
        </div>
        <div className="Menu-cat-it">
          {filteredData().map((item) => (
            <div className="category-menu-item">
              <div className="cat-img">
                <img src={item.imgsrc} alt="" />
              </div>
              <div className="cat-name">
                <h3 className="cat-names">{item.mname}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Categorymenu