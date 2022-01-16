import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: ${props => props.fullWidth ? "100%" : "1200px"};
  height: 600px;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-image: linear-gradient(101deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.5) 5%, rgba(255,255,255,0) 47%), url(${props=>props.bgImg && props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  @media(max-width: 700px) {
    background-position-x: -100px;
  }
  @media(max-width: 500px) {
    background-position-x: -300px;
  }
  &.products {
    background-image: unset;
    background: white;
    align-items: flex-start;
    height: 550px;
    h2 {
      margin-bottom: 8px;
    }
    p {
      text-align: left;
      margin-bottom: 15px;
    }
  }
  &.about {
    background: white;
  }
  a {
    text-decoration: none;
  }
`
export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`


export const HalfContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  &.left {
    align-items: flex-start;
  }
  h1 {
    font-size: 60px;
    font-weight: 100;
    line-height: 52px;
    letter-spacing: 10px;
    margin-bottom: 10px;
    span {
      font-weight: 400;
    }
  }
  h2 {
    font-size: 45px;
    font-weight: 100;
    line-height: 52px;
    letter-spacing: 1.5px;
    span {
      font-weight: 400;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    padding-right: 11px;
    position: relative;
    letter-spacing: 1.4px;
  }
  img {
    width: 90%;
  }
`
export const Separator = styled.div`
 position: absolute;
 top: -45px;
 width: 100%;
 @media(max-width: 1600px){
   top: -35px;
 }
 @media(max-width: 750px){
   top: -20px;
 }
`