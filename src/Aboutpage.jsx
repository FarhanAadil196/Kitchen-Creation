import React from "react";
import Navbar from "./component/Navbar";
import styled from "styled-components";
import Hero from "./component/Hero";
import Footer from "./component/Footer";

const Wrapper = styled.div`
  .about-c {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 20px;
    gap: 20px;
  }

  .img-c {
    width: 400px;
    height: 300px;
    background-size: cover;
    background-position: center;
    box-shadow: inset 0 0 20px 5px #00000029;
    border-radius: 10px;
  }

  .a-para {
    width: 50%;
    padding: 20px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    h4 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      max-width: 90%;
    }
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .about-c {
      flex-direction: column !important; /* Force column stacking */
      text-align: center;
    }

    .img-c,
    .a-para {
      width: 100%;
      height: auto;
    }

    .img-c {
      height: 250px;
    }

    .a-para {
      padding: 15px;
    }

    h4 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

const aboutdata = [
  {
    id: 1,
    image: "./aboutimg1.jpg",
    title: "About Us",
    description:
      "Kitchen Creation is a culinary haven where innovation meets tradition. Our passion for crafting delectable dishes shines through in every bite. Whether you're a food enthusiast or a casual diner, we invite you to savor the unique flavors and creative combinations that make our kitchen a true culinary masterpiece.",
    direction: "row-reverse",
  },
  {
    id: 2,
    image: "./aboutimg.jpg",
    title: "Our Passion",
    description:
      "At Kitchen Creation, we are dedicated to bringing you a dining experience that is both innovative and rooted in tradition. Our culinary team passionately crafts each dish with creativity and care, ensuring that every bite is a delightful journey of flavors. Whether you're a food connoisseur or simply looking to enjoy a delicious meal, our kitchen offers a unique taste that is sure to leave a lasting impression.",
    direction: "row",
  },
  {
    id: 3,
    image: "./aboutimg2.jpg",
    title: "Experience",
    description:
      "Immerse yourself in the inviting ambiance of Kitchen Creation, where the atmosphere is as delightful as the food. Our dishes are crafted to tantalize your taste buds and offer a memorable dining experience.",
    direction: "row-reverse",
  },
];

function Aboutpage() {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      {aboutdata.map((item, index) => (
        <div
          key={index}
          className="about-c"
          style={{ flexDirection: item.direction }}
        >
          <div
            className="img-c"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          ></div>
          <div className="a-para">
            <h4>{item.title}</h4>
            <p className="para">{item.description}</p>
          </div>
        </div>
      ))}
      <Footer />
    </Wrapper>
  );
}

export default Aboutpage;
