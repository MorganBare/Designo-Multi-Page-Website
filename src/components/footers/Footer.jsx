import React from 'react'

import { FooterContainer, 
        GetInTouchContainer, 
        ContactInfoContainer, 
        ContactNav, 
        Link,
        AddressOuterContainer, 
        SingleContactContainer, 
        SocialMediaContainer, 
        InnerContactContainer } from './Footer.styled'

import { DarkButton } from "../../styles/Buttons.styled.js"

import lightLogo from "../../assets/shared/desktop/logo-light.png"
import instagram from "../../assets/shared/desktop/icon-instagram.svg"
import facebook from "../../assets/shared/desktop/icon-facebook.svg"
import twitter from "../../assets/shared/desktop/icon-twitter.svg"
import youtube from "../../assets/shared/desktop/icon-youtube.svg"
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg"

export default function Footer() {
  return (
    <FooterContainer>

      <GetInTouchContainer>
        <div>
          <h2>Let's talk about your project</h2>
          <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
        </div>
        <DarkButton>GET IN TOUCH</DarkButton>
      </GetInTouchContainer>

      <ContactInfoContainer>
        <InnerContactContainer>
          <ContactNav>
            <img src={lightLogo} alt="logo" style={{width: '202px', height: '27px'}} />
            <ul>
              <li><Link to="/About">OUR COMPANY</Link></li>
              <li><Link to="/Locations">LOCATIONS</Link></li>
              <li><Link to="/Contact">CONTACT</Link></li>
            </ul>
          </ContactNav>
          <AddressOuterContainer>
            <SingleContactContainer>
              <p>Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </SingleContactContainer>
            <SingleContactContainer>
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </SingleContactContainer>
          </AddressOuterContainer>
          <SocialMediaContainer>
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
          </SocialMediaContainer>
        </InnerContactContainer>
      </ContactInfoContainer>

    </FooterContainer>
  )
}
