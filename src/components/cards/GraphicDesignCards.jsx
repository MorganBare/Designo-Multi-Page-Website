import React from 'react'

import {
    DesignCardContainer,
    DesignCard,
    DesignCardContent,
    DesignCardImg
} from './Cards.styled'

import Boxed from '../../assets/graphic-design/desktop/image-boxed-water.jpg'
import Change from '../../assets/graphic-design/desktop/image-change.jpg'
import Science from '../../assets/graphic-design/desktop/image-science.jpg'



export default function GraphicDesignCards() {
  return (
    <DesignCardContainer>

        <DesignCard>
            <DesignCardImg src={Change}/>
            <DesignCardContent>
                <h3>TIM BROWN</h3>
                <p>A book cover designed for Tim Brown’s new release, ‘Change’</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Boxed}/>
            <DesignCardContent>
                <h3>BOXED WATER</h3>
                <p>A simple packaging concept made for Boxed Water</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Science}/>
            <DesignCardContent>
                <h3>SCIENCE!</h3>
                <p>A poster made in collaboration with the Federal Art Project</p>
            </DesignCardContent>
        </DesignCard>

    </DesignCardContainer>
  )
}
