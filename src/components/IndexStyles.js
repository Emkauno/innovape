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
    h2 {
      margin-bottom: 8px;
    }
    p {
      text-align: left;
      margin-bottom: 15px;
    }
  }
  &.about {
    height: 300px;
    background: white;
    background-image:  url(${props=>props.bgImg && props.bgImg});
    background-repeat: no-repeat;
    background-position: bottom left;
    background-size: 300px;
    &.upper {
        h2 {
        margin-bottom: 8px;
      }
      p {
        margin-bottom: 15px;
      }
    }
  }
  &.contact {
    background: transparent;
    h2{
      text-align: right;
    }
    .contact-form{
      width: 400px;
      background: rgba(255,255,255,.3);
      backdrop-filter: blur(4px);
      border-radius: 8px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 24px;
      label {
        margin-bottom: 8px;
        padding-left: 16px;
        font-weight: 400;
      }
      input {
        width: 100%;
        height: 35px;
        border-radius: 4px;
        border: 1px solid #ccc;
        padding: 0 16px;
        font-family: 'Fira Sans Condensed', sans-serif;
        &:not(:last-child){
          margin-bottom: 8px;
        }
      }
      textarea {
        width: 100%;
        height: 140px;
        resize: none;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-bottom: 24px;
        padding: 8px 16px;
        font-family: 'Fira Sans Condensed', sans-serif; 
      }
    }
  }
  a {
    text-decoration: none;
  }
  &.girlvape {
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
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
  &.contact {
    width: unset;
    h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 8px;
    }
  }
  &.corner {
    align-items: flex-start;
    img {
      width: 50%;
    }
  }
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
 top: -55px;
 width: 100%;
 z-index: -1;
 @media(max-width: 1600px){
   top: -50px;
 }
 @media(max-width: 800px){
   top: -40px;
 }
 @media(max-width: 600px){
   top: -30px;
 }
`