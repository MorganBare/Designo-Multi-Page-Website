import React from 'react'

import {
    DesignCardContainer,
    DesignCard,
    DesignCardContent,
    DesignCardImg
} from './Cards.styled'

export default function AppDesignCards() {
  return (
    <DesignCardContainer>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>AIRFILTER</h3>
                <p>Solving the problem of poor indoor air quality by filtering the air</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>AIRFILTER</h3>
                <p>Solving the problem of poor indoor air quality by filtering the air</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>FACEIT</h3>
                <p>Get to meet your favorite internet superstar with the faceit app</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>TODO</h3>
                <p>A todo app that features cloud sync with light and dark mode</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>LOOPSTUDIOS</h3>
                <p>A VR experience app made for Loopstudios</p>
            </DesignCardContent>
        </DesignCard>

    </DesignCardContainer>
  )
}
