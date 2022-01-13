import React from "react"
import Layout from "../components/Layout"
import HeroImg from './../../static/hero.jpg'
import { Section, SectionContainer, HalfContainer } from "./IndexStyles"


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
    </Layout>
  )
}
