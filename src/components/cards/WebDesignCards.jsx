import React from 'react'

import {
    DesignCardContainer,
    DesignCard,
    DesignCardContent,
    DesignCardImg,
    LeafImgWeb
} from './Cards.styled'

import Leaf from '../../assets/shared/desktop/bg-pattern-leaf.svg'
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg'
import Builder from '../../assets/web-design/desktop/image-builder.jpg'
import Camp from '../../assets/web-design/desktop/image-camp.jpg'
import Express from '../../assets/web-design/desktop/image-express.jpg'
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg'


export default function WebDesignCards() {
  return (
    <DesignCardContainer>
        <LeafImgWeb src={Leaf}/>
        <DesignCard>
            <DesignCardImg src={Express}/>
            <DesignCardContent>
                <h3>EXPRESS</h3>
                <p>A multi-carrier shipping website for ecommerce businesses</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Transfer}/>
            <DesignCardContent>
                <h3>TRANSFER</h3>
                <p>Site for low-cost money transfers and sending money within seconds</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Builder}/>
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
            <DesignCardImg src={Camp}/>
            <DesignCardContent>
                <h3>CAMP</h3>
                <p>Get expert training in coding, data, design, and digital marketing</p>
            </DesignCardContent>
        </DesignCard>

    </DesignCardContainer>
  )
}
