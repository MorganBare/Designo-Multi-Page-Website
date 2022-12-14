import React from 'react'

import {
    DesignCardContainer,
    DesignCard,
    DesignCardContent,
    DesignCardImg
} from './Cards.styled'

export default function GraphicDesignCards() {
  return (
    <DesignCardContainer>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>TIM BROWN</h3>
                <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>BOXED WATER</h3>
                <p>A simple packaging concept made for Boxed Water</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>SCIENCE!</h3>
                <p>A poster made in collaboration with the Federal Art Project</p>
            </DesignCardContent>
        </DesignCard>

    </DesignCardContainer>
  )
}
