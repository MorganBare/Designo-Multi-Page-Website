import React from 'react'

import { FooterContainer, 
        GetInTouchContainer, 
        ContactInfoContainer, 
        ContactNav, 
        Link,
        AddressOuterContainer, 
        SingleContactContainer, 
        SocialMediaContainer, 
        InnerContactContainer,
        StyledFacebookIcon,
        StyledYoutubeIcon,
        StyledTwitterIcon,
        StyledPinterestIcon,
        StyledInstagramIcon,
        FlexDiv
      } from './Footer.styled'

import lightLogo  from "../../assets/shared/desktop/logo-light.png"

import { DarkButton } from "../../styles/Buttons.styled.js"

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
          <FlexDiv>
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
              <a href='http://www.facebook.com' target='_blank' rel='noreferrer'><StyledFacebookIcon /></a>
              <a href='http://www.youtube.com' target='_blank' rel='noreferrer'><StyledYoutubeIcon/></a>
              <a href='http://www.twitter.com' target='_blank' rel='noreferrer'><StyledTwitterIcon/></a>
              <a href='http://www.pinterest.com' target='_blank' rel='noreferrer'><StyledPinterestIcon/></a>
              <a href='http://www.instagram.com' target='_blank' rel='noreferrer'><StyledInstagramIcon/></a>
            </SocialMediaContainer>
          </FlexDiv>
        </InnerContactContainer>
      </ContactInfoContainer>

    </FooterContainer>
  )
}
