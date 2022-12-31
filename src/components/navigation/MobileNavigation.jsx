import React, { useState } from 'react'

import MobileNavLinks from './MobileNavLinks'

import { NavLink } from 'react-router-dom';

import { MobileNavDiv, OpenMobileNavBtn } from "./MobileNavigation.styled"

import darkLogo  from "../../assets/shared/desktop/logo-dark.png"
import { ReactComponent as Hamburger}  from "../../assets/shared/mobile/icon-hamburger.svg"
import { ReactComponent as CloseIcon}  from "../../assets/shared/mobile/icon-close.svg"

export default function MobileNavigation() {

  const [extendMobileNav, setExtendMobileNav] = useState(false);

  return (
    <>
      <MobileNavDiv>
      <NavLink to="/"><img src={darkLogo} alt="logo" style={{width: '202px', height: '27px'}} /></NavLink>
        <OpenMobileNavBtn 
          onClick={() => 
          setExtendMobileNav((curr) => !curr)}>{extendMobileNav ? <CloseIcon/> : <Hamburger/>}</OpenMobileNavBtn>
      </MobileNavDiv>
      <MobileNavLinks extendMobileNav={extendMobileNav} setExtendMobileNav={setExtendMobileNav}/>
    </>
  )
}
