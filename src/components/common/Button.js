import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const BtnContainer = styled.a`
  height: 50px;
  padding: 15px 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #0d2b0b;
  transition: .4s ease;
  text-decoration: none;
  &:hover {
    background: #0d2b0b;
    color: white;
    cursor: pointer;
    span {
      color: white;
    }
  }
  span {
    font-weight: 400;
    color: #0d2b0b;
    text-transform: uppercase;
  }
`
function Button({linksrc, text}) {
  return (
    <Link to={linksrc}>
      <BtnContainer>
          <span>{text}</span>
      </BtnContainer>
    </Link>
  )
}

export default Button
