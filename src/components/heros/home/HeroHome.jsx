import React from 'react'

import { NavLink } from 'react-router-dom';

import { DarkButton } from '../../../styles/Buttons.styled'

import HeroPhoneSrc from '../../../assets/home/desktop/image-hero-phone.png'

import {
  HeroHomeContainer,
  HeroHomeContent,
  HeroPhoneImg
} from "./HeroHome.styled"

export default function HeroHome() {
  return (
    <HeroHomeContainer>

      <HeroHomeContent>
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p>With over 10 years in the industry, we are experienced in 
          creating fully responsive websites, app design, and engaging 
          brand experiences. Find out more about our services.</p>
        <NavLink to="/About"><DarkButton>LEARN MORE</DarkButton></NavLink>
      </HeroHomeContent>
      <HeroPhoneImg src={HeroPhoneSrc}/>
    </HeroHomeContainer>
  )
}
