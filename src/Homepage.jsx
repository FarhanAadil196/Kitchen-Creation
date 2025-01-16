import React from 'react'
import Navbar from './component/Navbar'
import Menu from './Menu'
import Footer from './component/Footer'
import MainHero from './component/MainHero'
function Homepage() {
  return (
    <>
    <Navbar />
    <MainHero />
    <Menu />
    {/* <Scroller /> */}
    <Footer />
    </>
  )
}

export default Homepage