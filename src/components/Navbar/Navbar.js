import React from 'react'
import { Link } from 'gatsby'
import Logo from './../../../static/assets/logo-dark.svg'
import { 
  NavbarWrapper,
  NavbarContainer,
  LeftWrap,
  LinksWrapper,
  LeftWrapper,
  LogoContainer
} from './NavbarStyles'

function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LeftWrapper>
          <LogoContainer>
            <Logo /> 
            <h1>INNOVAPE</h1>
          </LogoContainer>
        </LeftWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </LinksWrapper>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

export default Navbar
