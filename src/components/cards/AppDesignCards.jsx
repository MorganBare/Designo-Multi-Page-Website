import React from 'react'

import {
    DesignCardContainer,
    DesignCard,
    DesignCardContent,
    DesignCardImg,
    LeafImgApp
} from './Cards.styled'

import Leaf from '../../assets/shared/desktop/bg-pattern-leaf.svg'
import Airfilter from '../../assets/app-design/desktop/image-airfilter.jpg'
import Eyecam from '../../assets/app-design/desktop/image-eyecam.jpg'
import Faceit from '../../assets/app-design/desktop/image-faceit.jpg'
import Loop from '../../assets/app-design/desktop/image-loopstudios.jpg'
import Todo from '../../assets/app-design/desktop/image-todo.jpg'

export default function AppDesignCards() {
  return (
    <DesignCardContainer>
        <LeafImgApp src={Leaf}/>
        <DesignCard>
            <DesignCardImg src={Airfilter}/>
            <DesignCardContent>
                <h3>AIRFILTER</h3>
                <p>Solving the problem of poor indoor air quality by filtering the air</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Eyecam}/>
            <DesignCardContent>
                <h3>EYECAM</h3>
                <p>Product that lets you edit your favorite photos and videos at any time</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Faceit}/>
            <DesignCardContent>
                <h3>FACEIT</h3>
                <p>Get to meet your favorite internet superstar with the faceit app</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Todo}/>
            <DesignCardContent>
                <h3>TODO</h3>
                <p>A todo app that features cloud sync with light and dark mode</p>
            </DesignCardContent>
        </DesignCard>

        <DesignCard>
            <DesignCardImg src={Loop}/>
            <DesignCardContent>
                <h3>LOOPSTUDIOS</h3>
                <p>A VR experience app made for Loopstudios</p>
            </DesignCardContent>
        </DesignCard>

    </DesignCardContainer>
  )
}
