import React from 'react'

import { 
    ProjectLinksContainer,
    WebDesignSquare,
    AppDesignSquare,
    GraphicDesignSquare,
    Link,
    ArrowIcon} from './ProjectLinks.styled'

export default function ProjectLinks() {
  return (
    <ProjectLinksContainer>
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
