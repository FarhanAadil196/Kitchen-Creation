import React from "react";
import Navbar from "./component/Navbar";
import styled from "styled-components";
import Hero from "./component/Hero";
import Footer from "./component/Footer";


const Wrapper = styled.nav`
  .about-c {
    // background-image: url(./aboutbg.png);
    // background-color: #fbf6e9;
    background-size: cover;
    background-position: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    // min-height: 60vh;
    padding: 0px;
  }
  .img-c {
    width: 50%;
    height: 300px;
    // background-image: url("./aboutimg.png");
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 10px 100rem #00000029;
}


      }
  .a-para {
        width: 50%;
    padding: 20px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    h4,p{
       color:white;
       font-weight:400;
   }
  }
`;

const aboutdata = [
  {
    id: 1,
    image: "./aboutimg1.png",
    title: "About Us",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    direction:"row-reverse",
    color:"blue"
  },
  {
    id: 2,
    image: "./aboutimg.jpg",
    title: "About Us",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    direction:"row",
    color:"red"
  },
  {
    id: 3,
    image: "./aboutimg2.jpg",
    title: "About Us",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    direction:"row-reverse",
    color:"brown"
  }
]
function Aboutpage() {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      {aboutdata.map((item, index) => (
        <div key={index} className="about-c" style={{ backgroundColor: item.color, flexDirection: item.direction}}>
<div className="img-c" style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>      
    <div className="a-para">
            <h4>{item.title}</h4>
            <p className="para">{item.description}</p>
          </div>
        </div>
      ))}
      <Footer />
    </Wrapper>
  );
};

export default Aboutpage;