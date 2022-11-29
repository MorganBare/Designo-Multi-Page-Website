import React from 'react'

import { MobileLinks, MobileNavContainer  } from './MobileNavigation.styled'

export default function MobileNavLinks({extendMobileNav}) {

  return (
    <MobileNavContainer extendMobileNav={extendMobileNav}>
      <ul>
            <li><MobileLinks to="/About">our company</MobileLinks></li>
            <li><MobileLinks to="/Locations">Locations</MobileLinks></li>
            <li><MobileLinks to="/Contact">Contact</MobileLinks></li>
        </ul>
    </MobileNavContainer>
  )
}
