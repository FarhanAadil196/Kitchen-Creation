import React from 'react'
import styled from "styled-components";
import Navbar from './component/Navbar'
import Menu from './Menu'
import Scroller from './component/Scroller'
import Footer from './component/Footer';

const Wrapper = styled.div``;

function Menupage() {
  return (
    <Wrapper>
        <Navbar />
        <Menu />
        <Scroller />
        <Footer />
    </Wrapper>
  )
}

export default Menupage