import React from 'react'
import Navbar from './component/Navbar'
import Menu from './Menu'
import Footer from './component/Footer'
import MainHero from './component/MainHero'
import HomeBlog from './component/HomeBlog'
import HomeService from './component/HomeService'
import Scroller from './component/Scroller'

function Homepage() {
  return (
    <>
    <Navbar />
    <MainHero />
    <HomeService />
    <Menu />
    <Scroller />
    <HomeBlog />
    <Footer />
    </>
  )
}

export default Homepage