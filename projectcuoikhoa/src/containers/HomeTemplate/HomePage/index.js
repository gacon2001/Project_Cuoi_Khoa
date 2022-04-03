import React from 'react'
import Carousel from './Carousel'
import Content from './Content'
import Navbar from './Navbar'
import Footer from './Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Content/>
      <Footer/> 
    </div>
  )
}
