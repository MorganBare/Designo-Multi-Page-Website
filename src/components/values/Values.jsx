import React from 'react'

import Leaf from '../../assets/shared/desktop/bg-pattern-leaf.svg'

import { 
    ValuesContainer, 
    SingleValueContainer,
    StyledPassionateSVG,
    StyledResourcefulSVG,
    StyledFriendlySVG,
    SVGContainer,
    ValueContent,
    LeafImg } from './Values.styled'

export default function Values() {
  return (
    <ValuesContainer>
        <SingleValueContainer>
        <SVGContainer><StyledPassionateSVG/></SVGContainer>
            <ValueContent>
                <h3>PASSIONATE</h3>
                <p>Each project starts with an in-depth 
                    brand research to ensure we only create 
                    products that serve a purpose. We merge 
                    art, design, and technology into exciting 
                    new solutions.
                </p>
            </ValueContent>
        </SingleValueContainer>
        <SingleValueContainer>
        <SVGContainer><StyledResourcefulSVG/></SVGContainer>
            <ValueContent>
                <h3>RESOURCEFUL</h3>
                <p>Everything that we do has a strategic purpose. 
                    We use an agile approach in all of our projects 
                    and value customer collaboration. It guarantees 
                    superior results that fulfill our clients’ needs.
                </p>
            </ValueContent>
        </SingleValueContainer>
        <SingleValueContainer>
            <SVGContainer><StyledFriendlySVG/></SVGContainer>
            <ValueContent>
                <h3>FRIENDLY</h3>
                <p> We are a group of enthusiastic folks who know how 
                    to put people first. Our success depends on our 
                    customers, and we strive to give them the best 
                    experience a company can provide.
                </p>
            </ValueContent>
        </SingleValueContainer>
        <LeafImg src={Leaf}/>
    </ValuesContainer>
  )
}
