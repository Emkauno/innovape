import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../images/logo-dark.svg'
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
          <Link to="/products">Our products</Link> 
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </LinksWrapper>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

export default Navbar
