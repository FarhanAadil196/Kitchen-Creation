import React from "react";
import Navbar from "./component/Navbar";
import styled from "styled-components";
import  aboutbg from "/public/aboutbg.png";
import  aboutimg from "/public/aboutimg.png";
import Footer from "./component/Footer";


const Wrapper = styled.nav`
  .about-c {
    background-image: url(${aboutbg});
    background-size: cover;
    background-position: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding:20px;
  }
  .img-c {
    width: 550px;
    height: 250px;
    background-image: url(${aboutimg});
    background-size: cover;
    background-position: center;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
  }
  .a-para {
    width: 250px;
    padding: 20px;
  }
`;

function Aboutpage() {
  return (
    <Wrapper>
      <Navbar />
      <div className="about-c">
        <div className="img-c">
        </div>
        <div className="a-para">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            voluptates nostrum facere, laborum optio, mollitia repellendus
            architecto cum ut expedita nihil accusamus libero quidem.
          </p>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Aboutpage;