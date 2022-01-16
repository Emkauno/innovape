import React from "react"
import Layout from "../components/Layout"
import HeroImg from '../images/hero.jpg'
import SeparatorImg from '../images/separator.svg'
import ProductsImg from '../images/section1vapes.png'
import AboutImg from '../images/about.png'
import ContactImg from '../images/girlvape.png'
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
        <Parallax y={[10, -20]}>
          <Section fullWidth={true} className="products">
            <Separator>
             <SeparatorImg/>
            </Separator>
            <SectionContainer>
              <HalfContainer className="left">
                <h2>FIND THE <span>PERFECT MATCH</span></h2>
                <p>for your vaping experience</p>
                <Button linksrc={'/products'} text={"our products"}/>
              </HalfContainer>
              <HalfContainer>
                  <img src={ProductsImg}/>
              </HalfContainer>
            </SectionContainer>
          </Section>
        </Parallax>
        <Parallax y={[-30, 0]}>
          <Section fullWidth={true} className="about upper">
            <SectionContainer>
              <HalfContainer className="corner">
                <img src={AboutImg}/>
              </HalfContainer>
              <HalfContainer>
                <h2>WANT TO KNOW MORE?</h2>
                <p>Whether you're new to vaping or an experienced vaper, our goal is to provide you with the best quality at the best possible prices.</p>
                <Button linksrc={'/about'} text={"about us"}/>
              </HalfContainer>
            </SectionContainer>
          </Section>
        </Parallax>
        <Parallax y={[25, 0]}>
          <Section fullWidth={true} className="contact">
            <SectionContainer>
              <HalfContainer className="contact">
                <h2>GET IN TOUCH</h2>
                <form class="contact-form">
                  <label>Name</label>
                  <input type="text" name="user_name"/>
                  <label>Email</label>
                  <input type="email" name="user_email"/>
                  <label>Message</label>
                  <textarea name="message"></textarea>
                  <input type="submit" value="Send"/>
                </form>
              </HalfContainer>
            </SectionContainer>
            <Section className="girlvape">
              <img src={ContactImg}  />
            </Section>
          </Section>
        </Parallax>
       
    </Layout>
  )
}
