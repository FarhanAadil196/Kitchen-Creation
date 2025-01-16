import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
.hero{
height: 84vh;
width: 100%;
background-image: url("");
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
h2{
    color: white;
    font-size: 3rem;
    text-align: center;
}
p{
    color: white;
    font-size: 1.5rem;
    text-align: center;
}
}
`;
function MainHero() {
  return (
    <Wrapper>
      <div className="hero">
        <h2>Welcome to Kitchen Creation </h2>
        <p>Your Ultimate Fast Food Destination!</p>
      </div>
    </Wrapper>
  );
}

export default MainHero