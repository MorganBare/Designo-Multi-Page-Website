import React from 'react'

import { ContactFooterContainer, 
        ContactPageInfoContainer, 
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
        FlexDiv,
        SubP } from './Footer.styled'

import lightLogo from "../../assets/shared/desktop/logo-light.png"


export default function Footer2() {
  return (
    <ContactFooterContainer>

      <ContactPageInfoContainer>

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
                  <SubP>3886 Wellington Street</SubP>
                  <SubP>Toronto, Ontario M9C 3J5</SubP>
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
          
      </ContactPageInfoContainer>

    </ContactFooterContainer>
  )
}
