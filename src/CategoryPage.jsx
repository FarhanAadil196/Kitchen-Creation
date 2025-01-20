import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Categorymenu from "./component/Category-menu";
import styled from 'styled-components'
import Hero from './component/Hero'

const Wrapper = styled.div`

`;

function CategoryPage() {
  return (
    <>
   <Navbar />
   <Hero />
   <Categorymenu />
   <Footer />
    </>
  )
}

export default CategoryPage