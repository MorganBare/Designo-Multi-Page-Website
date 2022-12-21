import React from 'react'

import { 
    LocationsCotainer,
    SingleLocation,
    MapAU,
    MapCA,
    MapUK,
    Address,
    AddressContent } from './Locations.styled'

export default function Location() {
  return (
    <LocationsCotainer>

        <SingleLocation>
            <MapCA>

            </MapCA>
            <Address>
                <h2>Canada</h2>
                <AddressContent>
                    <div>
                        <p>Designo Central Office</p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                </AddressContent>
            </Address>
        </SingleLocation>

        <SingleLocation>
            <MapAU>

            </MapAU>
            <Address>
                <h2>Australia</h2>
                <AddressContent>
                    <div>
                        <p>Designo AU Office</p>
                        <p>19 Balonne Street</p>
                        <p>New South Wales 2443</p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>P : (02) 6720 9092</p>
                        <p>M : contact@designo.au</p>
                    </div>
                </AddressContent>
            </Address>
        </SingleLocation>

        <SingleLocation>
            <MapUK>

            </MapUK>
            <Address>
                <h2>United Kingdom</h2>
                <AddressContent>
                    <div>
                        <p>Designo UK Office</p>
                        <p>13  Colorado Way </p>
                        <p>Rhyd-y-fro SA8 9GA </p>
                    </div>
                    <div>
                        <p>Contact</p>
                        <p>P : 078 3115 1400</p>
                        <p>M : contact@designo.uk</p>
                    </div>
                </AddressContent>
            </Address>
        </SingleLocation>

    </LocationsCotainer>

  )
}
