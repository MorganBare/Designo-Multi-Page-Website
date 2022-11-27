import React from 'react';

import { 
  TopNavLink,
  NavigationOuterContainer,
  TopNavigation
} from "./Navigation.styled.js"

import darkLogo  from "../../assets/shared/desktop/logo-dark.png"

export default function Navigation() {
  return (
    <NavigationOuterContainer>
      <img src={darkLogo} alt="logo" style={{width: '202px', height: '27px'}} />
      <TopNavigation>
        <ul>
            <li><TopNavLink to="/About">our company</TopNavLink></li>
            <li><TopNavLink to="/Locations">Locations</TopNavLink></li>
            <li><TopNavLink to="/Contact">Contact</TopNavLink></li>
        </ul>
      </TopNavigation>
    </NavigationOuterContainer>
  
  )
}
