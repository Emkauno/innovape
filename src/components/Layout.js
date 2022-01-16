import React from 'react'
import Navbar from './Navbar/Navbar'
import './layout.css'
import { ParallaxProvider } from "react-scroll-parallax";

function Layout ( { children} ) {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        {children}
      </ParallaxProvider>
    </>
  )
}

export default Layout
