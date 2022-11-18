import React from 'react'
import { FooterContainer, GetInTouchContainer, ContactInfoContainer, ContactNav } from './Footer.styled'
import { DarkButton } from "../../styles/Buttons.styled.js"
import lightLogo from "../../assets/shared/desktop/logo-light.png"

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
        <ContactNav>
          <img src={lightLogo} alt="logo" style={{width: '202px', height: '27px'}} />
          <ul>
            <li>OUR COMPANY</li>
            <li>LOCATIONS</li>
            <li>CONTACT</li>
          </ul>
        </ContactNav>
      </ContactInfoContainer>

    </FooterContainer>
  )
}
