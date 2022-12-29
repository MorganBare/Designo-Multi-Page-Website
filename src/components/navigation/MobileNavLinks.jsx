import React from 'react'

import { MobileLinks, MobileNavContainer  } from './MobileNavigation.styled'

export default function MobileNavLinks({extendMobileNav, setExtendMobileNav}) {

  return (
    <MobileNavContainer extendMobileNav={extendMobileNav}>
      <ul>
            <li onClick={() => setExtendMobileNav((curr) => !curr)}><MobileLinks to="/About">our company</MobileLinks></li>
            <li onClick={() => setExtendMobileNav((curr) => !curr)}><MobileLinks to="/Locations">Locations</MobileLinks></li>
            <li onClick={() => setExtendMobileNav((curr) => !curr)}><MobileLinks to="/Contact">Contact</MobileLinks></li>
        </ul>
    </MobileNavContainer>
  )
}
