import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/Slice";
import { All, Burger, Pizza, Sandwich, Momos, Combos } from "./menu-data";

const Wrapper = styled.div`.Menu {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: hsl(90deg 42% 52% / 16%);
    position: relative;
    h1 {
      color: black;
    }
    .Menu-cat {
      display: flex;
      list-style: none;
      flex-wrap:wrap;
      gap: 10px;
      margin: 20px;
          justify-content: center;
    align-items: center;
      button {
       border:3px solid #118B50;
        
        padding: 10px;
        border-radius: 10px;
        width: 80px;
        text-align: center;
        // font-size: 15px;
        font-weight:600;
        transition: background-color 0.5s ease;
        cursor: pointer;
      }
    }
    .card-holder {
      display: flex;
      text-align: center;
      border-radius: 10px;
      padding: 10px;
      gap: 10px;
      width:90%;
      flex-wrap: wrap;
      align-items: center;
          justify-content: space-evenly;


      .menu-card {
    // border: 6px solid hsl(89.71deg 41.7% 51.57%);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 190px;
    height: auto;
        box-shadow: 0 0 5px 0px #00000063;
    flex-direction: column;
.img-c{
width:100%;
height:150px;
background-color:grey;
padding: 10px;
border-radius: 10px;

img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          
        }
}
        
          
.content {
       width: 100%;
    /* background: hsl(89.71deg 41.7% 51.57%); */
    /* padding: 10px; */
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
    .btns {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      /* From Uiverse.io by andrew-demchenk0 */ 

    }
      .button {
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
}
.button, .button__icon, .button__text {
  transition: all 0.3s;
}
.button .button__text {
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
}
.button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:hover {
  background: #34974d;
}
.button:hover .button__text {
  color: transparent;
}
.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}
.button:active .button__icon {
  background-color: #2e8644;
}
.button:active {
  border: 1px solid #2e8644;
}
}
      }
    }
  }
  .ViewModal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);

    .Modal{
      height: 300px;
      width: 500px;
      background-color: #fff;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      position:relative;
      gap: 10px;

      @media(max-width:500px){
        width: 90vw;
        height: 90vh;
        gap:0px;
      }

      .Modal-content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        @media(max-width:500px){
       width: 90%;
       flex-direction:column;
       gap:0;
       }
        h1{
          font-size: 20px;
      }
          
    
          .m-info{
          width: 50%;
    height: 100%;
    display: flex;
    gap:10px;
    flex-direction: column;
    justify-content: space-evenly;
    
          }
      img{
        height: 250px;
        width: 250px;
        object-fit: contain;
        background-color: #ccc;
        padding: 10px;
        @media(max-width:500px){
          height: 40vh;
          width: 40vw;
        }
      }
      .btns{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        button{
          background-color: #118b50;
          color: #fff;
          padding: 10px;          
          border-radius: 10px;          
          width: auto;          
          text-align: center;          
          font-size: 10px;     
          border: none; 

          &:hover {            
            border: 2px solid #118b50;
            background-color: #fff;
            color: black;
            cursor: pointer;
          }
        }
      } 
    }
      .close-btn{
              width: 100%;
    display: flex;
    justify-content: flex-end;
    .close{
       position: absolute;
right: 10px;
top: 10px;
background: transparent;
border: none;
font-size: 20px;
cursor: pointer;
    } 

    }
    
  }
   
    `;
function Menu() {
  const [Menudata, setMenudata] = useState(All);
  const [viewModal, setViewModal] = useState(false);
  const [menuname, setMenuname] = useState("");
  const [menupic, setMenupic] = useState("");
  const [menudesc, setMenudesc] = useState("");
  const [menuprice, setMenuprice] = useState("");

  const dispatch = useDispatch();

  const handleFilter = (category) => {
    const filters = { All, Burger, Pizza, Sandwich, Momos, Combos };
    setMenudata(filters[category] || All);

    const buttons = document.querySelectorAll(".Menu-cat button");
    
    buttons.forEach((button) => {
      if (button.textContent === category) {
        button.style.backgroundColor = "#118b50";
        button.style.color = "#fbf6e9";
      } else {
        button.style.backgroundColor = "";
        button.style.color = "";
      }
    });
  };

  const handleViewModal = (item) => {
    setMenuname(item.mname);
    setMenupic(item.imgsrc);
    setMenudesc(item.mdesc);
    setMenuprice(item.mprice);
    setViewModal(true);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.key === "Escape") setViewModal(false);
    };
    document.addEventListener("keydown", closeModalOnEscape);
    return () => document.removeEventListener("keydown", closeModalOnEscape);
  }, []);

  return (
    <Wrapper>
      <div className="Menu">
        <h1>Our Menu</h1>
        <p>Explore our delicious offerings.</p>
        <div className="Menu-cat">
          {["All", "Momos", "Burger", "Pizza", "Sandwich", "Combos"].map(
            (category) => (
              <button key={category} onClick={() => handleFilter(category)}>
                {category}
              </button>
            )
          )}
        </div>
        <div className="card-holder">
          {Menudata.length > 0 ? (
            Menudata.map((item) => (
              <div className="menu-card" key={item.id}>
                <div className="img-c">
                  <img
                    src={item.imgsrc}
                    alt={item.mname}
                    onClick={() => handleViewModal(item)}
                  />
                </div>
                <div className="content">
                  <h3>{item.mname}</h3>
                  <p>₹{item.mprice}</p>
                  <div className="btns">
                    <button
                      type="button"
                      class="button"
                      onClick={() => handleAddToCart(item)}
                    >
                      <span class="button__text">Add Item</span>
                      <span class="button__icon">+</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items found in this category.</p>
          )}
        </div>
      </div>
      {viewModal && (
        <div className="ViewModal">
          <div className="Modal">
            <div className="close-btn">
              <button className="close" onClick={() => setViewModal(false)}>
                X
              </button>
            </div>
            <div className="Modal-content">
              <img src={menupic} alt={menuname} />
              <div className="m-info">
                <h2>{menuname}</h2>
                <p>₹{menuprice}</p>
                <p>{menudesc}</p>
                <div className="btns">
                  <button
                    type="button"
                    class="button"
                    onClick={() =>
                      handleAddToCart({
                        mname: menuname,
                        imgsrc: menupic,
                        mprice: menuprice,
                      })
                    }
                  >
                    <span class="button__text">Add Item</span>
                    <span class="button__icon">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default Menu;
