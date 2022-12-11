import React from 'react'

import { 
    ProjectLinksContainer,
    ProjectSquareWeb,
    ProjectSquareApp,
    ProjectSquareGraphic,
    Link,
    ArrowIcon } from './ProjectLinks.styled'

export default function ProjectLinks() {
  return (
    <ProjectLinksContainer>
        <Link to="/Web-Design">
            <ProjectSquareWeb>
                <h2>WEB DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </ProjectSquareWeb>
        </Link>
        <Link to="/App-Design">
            <ProjectSquareApp>
                <h2>APP DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </ProjectSquareApp>
        </Link>
        <Link to="/Graphic-Design">
            <ProjectSquareGraphic>
                <h2>GRAPHIC DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </ProjectSquareGraphic>
        </Link>

    </ProjectLinksContainer>
  )
}
