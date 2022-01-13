import styled from 'styled-components'

export const NavbarWrapper = styled.div`
  width: 100%;
  padding: 5px 24px;
  position:fixed;
  top: 0;
  z-index: 999;
  background: white;

`

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
    img {
      width: 200px;
    }
`

export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
mix-blend-mode: darken;

svg {
    height: 40px;
    margin-right: 10px;
}
h1 {
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 5px;

}
`

export const LinksWrapper = styled.div`
width: 50%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
  a {
    width: 20%;
    text-align: right;
    text-decoration: none;
    font-weight: 200;
    color: black;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`