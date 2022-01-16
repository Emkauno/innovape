import React from "react"
import Layout from "../components/Layout"
import HeroImg from '../images/hero.jpg'
import SeparatorImg from '../images/separator.svg'
import Button from '../components/common/Button'
import { Parallax } from 'react-scroll-parallax'
import { Section, SectionContainer, HalfContainer, Separator } from "../components/IndexStyles"


export default function Home() {
  return (
    <Layout>
        <Section fullWidth={true} bgImg={HeroImg}>
          <SectionContainer>
              <HalfContainer>
                <h1>INNOVAPE</h1>
                <p>Find everything you need to vape it off</p>
              </HalfContainer>
          </SectionContainer>
        </Section>
        <Parallax y={[10, -30]}>
          <Section fullWidth={true} className="products">
            <Separator>
             <SeparatorImg/>
            </Separator>
            <SectionContainer>
              <HalfContainer className="left">
                <h2>FIND THE <span>PERFECT MATCH</span></h2>
                <p>FOR YOUR VAPING EXPERIENCE</p>
                <Button linksrc={'/products'} text={"our products"}/>
              </HalfContainer>
              <HalfContainer>
                  <img src="../images/section1vapes.png"/>
              </HalfContainer>
            </SectionContainer>
          </Section>
        </Parallax>
          <Section fullWidth={true} className="about">
            <SectionContainer>
              <HalfContainer>
               <img src="..\images\girlvape.png" alt="girlvape"/>
              </HalfContainer>
            </SectionContainer>
          </Section>
    </Layout>
  )
}
