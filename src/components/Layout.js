import React from 'react'
import Navbar from './Navbar/Navbar'
import './layout.css'

function Layout ( { children} ) {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
