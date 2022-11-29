import React from 'react'

import { LightButton } from '../../../styles/Buttons.styled'

import {
  HeroHomeContainer,
  HeroHomeContent} from "./HeroHome.styled"

export default function HeroHome() {
  return (
    <HeroHomeContainer>

      <HeroHomeContent>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in 
          creating fully responsive websites, app design, and engaging 
          brand experiences. Find out more about our services.</p>
        <LightButton>LEARN MORE</LightButton>
      </HeroHomeContent>

    </HeroHomeContainer>
  )
}
