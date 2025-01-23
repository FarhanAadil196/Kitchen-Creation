import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import HeroBlog from './component/HomeBlog'
import Footer from './component/Footer'
import Gallery from './component/Gallery'

function BlogPage() {
  return (
  <>
    <Navbar />
    <Hero />
    <HeroBlog />
    <Gallery />
    <Footer />
  </>
  )
}

export default BlogPage