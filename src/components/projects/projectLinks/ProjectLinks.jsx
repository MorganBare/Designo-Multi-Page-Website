import React from 'react'

import { 
    ProjectLinksContainer,
    ProjectSquare } from './ProjectLinks.styled'

export default function ProjectLinks() {
  return (
    <ProjectLinksContainer>
        <ProjectSquare>
            <h2>WEB DESIGN</h2>
            <p>VIEW PROJECTS</p>
        </ProjectSquare>
        <ProjectSquare>
            <h2>APP DESIGN</h2>
            <p>VIEW PROJECTS</p>
        </ProjectSquare>
        <ProjectSquare>
            <h2>GRAPHIC DESIGN</h2>
            <p>VIEW PROJECTS</p>
        </ProjectSquare>

    </ProjectLinksContainer>
  )
}
