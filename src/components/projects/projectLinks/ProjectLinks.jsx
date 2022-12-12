import React from 'react'

import Leaf from '../../../assets/shared/desktop/bg-pattern-leaf.svg'

import { 
    ProjectLinksContainer,
    WebDesignSquare,
    AppDesignSquare,
    GraphicDesignSquare,
    Link,
    ArrowIcon,
    LeafImg2} from './ProjectLinks.styled'

export default function ProjectLinks() {
  return (
    <ProjectLinksContainer>
        <LeafImg2 src={Leaf}/>
        <Link to="/Web-Design">
            <WebDesignSquare>
                <h2>WEB DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </WebDesignSquare>
        </Link>
        <Link to="/App-Design">
            <AppDesignSquare>
                <h2>APP DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </AppDesignSquare>
        </Link>
        <Link to="/Graphic-Design">
            <GraphicDesignSquare>
                <h2>GRAPHIC DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </GraphicDesignSquare>
        </Link>

    </ProjectLinksContainer>
  )
}
