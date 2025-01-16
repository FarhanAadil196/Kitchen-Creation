import React from 'react'
import styled from "styled-components";
import Navbar from './component/Navbar'
import Menu from './Menu'
import Scroller from './component/Scroller'
import Footer from './component/Footer';
import Hero from './component/Hero';
const Wrapper = styled.div``;

function Menupage() {
  return (
    <Wrapper>
        <Navbar />
        <Hero />
        <Menu />
        <Scroller />
        <Footer />
    </Wrapper>
  )
}

export default Menupage