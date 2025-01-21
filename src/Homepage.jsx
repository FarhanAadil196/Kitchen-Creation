import React from 'react'
import Navbar from './component/Navbar'
import Menu from './Menu'
import Footer from './component/Footer'
import MainHero from './component/MainHero'
import HomeBlog from './component/HomeBlog'
import HomeService from './component/HomeService'

function Homepage() {
  return (
    <>
    <Navbar />
    <MainHero />
    <Menu />
    {/* <Scroller /> */}
    <HomeBlog />
    <HomeService />
    <Footer />
    </>
  )
}

export default Homepage