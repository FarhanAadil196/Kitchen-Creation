import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Menu from './Menu'
import Scroller from './component/Scroller'
import Footer from './component/Footer'
function Homepage() {
  return (
    <>
    <Navbar />
    <Hero />
    <Menu />
    {/* <Scroller /> */}
    <Footer />
    </>
  )
}

export default Homepage