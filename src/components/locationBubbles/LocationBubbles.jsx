import React from 'react'

import { 
    LocationBubblesContainer,
    SingleLocation,
    LocationSVGContainer,
    CanadaSVG,
    AustraliaSVG,
    UKSVG,
    Link
 } from './LocationBubbles.styled'

 import { LightButton } from '../../styles/Buttons.styled'

export default function LocationBubbles() {
  return (
    <LocationBubblesContainer>

        <SingleLocation>
            <LocationSVGContainer>
                <CanadaSVG/>
            </LocationSVGContainer>
            <h3>CANADA</h3>
            <Link to='/locations'><LightButton>SEE LOCATION</LightButton></Link>
        </SingleLocation>

        <SingleLocation>
            <LocationSVGContainer>
                <AustraliaSVG/>
            </LocationSVGContainer>
            <h3>AUSTRALIA</h3>
            <Link to='/locations'><LightButton>SEE LOCATION</LightButton></Link>
        </SingleLocation>

        <SingleLocation>
            <LocationSVGContainer>
                <UKSVG/>
            </LocationSVGContainer>
            <h3>UNITED KINGDOM</h3>
            <Link to='/locations'><LightButton>SEE LOCATION</LightButton></Link>
        </SingleLocation>

    </LocationBubblesContainer>
  )
}
