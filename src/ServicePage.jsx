import React from 'react'
import styled from 'styled-components'
import HomeService from './component/HomeService';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Footer from './component/Footer';
const Wrapper = styled.div`

`;

function ServicePage() {
  return (
    <Wrapper>
        <Navbar />
        <Hero />
      <HomeService />
      <Footer />
    </Wrapper>
    
  )
}

export default ServicePage