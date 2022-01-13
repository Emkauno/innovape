import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: ${props => props.fullWidth ? "100%" : "1200px"};
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-image: linear-gradient(101deg,rgba(255,255,255,.2) 0%,rgba(255,255,255,.5) 5%, rgba(255,255,255,0) 47%), url(${props=>props.bgImg && props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  @media(max-width: 700px) {
    background-position-x: -100px;
  }
  @media(max-width: 500px) {
    background-position-x: -300px;
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

  h1 {
    font-size: 60px;
    font-weight: 100;
    line-height: 52px;
    letter-spacing: 10px;
    margin-bottom: 10px;
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
`