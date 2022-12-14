import React from 'react'

import {
    DesignCardContainer,
    DesignCard,
    DesignCardContent,
    DesignCardImg
} from './Cards.styled'

import Blogr from '../../assets/web-design/desktop/image-blogr.jpg'

export default function WebDesignCards() {
  return (
    <DesignCardContainer>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>EXPRESS</h3>
                <p>A multi-carrier shipping website for ecommerce businesses</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>TRANSFER</h3>
                <p>Site for low-cost money transfers and sending money within seconds</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>BUILDER</h3>
                <p>Connects users with local contractors based on their location</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Blogr}/>
            <DesignCardContent>
                <h3>BLOGR</h3>
                <p>Blogr is a platform for creating an online blog or publication</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg/>
            <DesignCardContent>
                <h3>CAMP</h3>
                <p>Get expert training in coding, data, design, and digital marketing</p>
            </DesignCardContent>
        </DesignCard>

    </DesignCardContainer>
  )
}
