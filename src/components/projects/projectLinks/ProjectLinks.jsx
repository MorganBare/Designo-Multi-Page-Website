import React from 'react'

import { NavLink } from 'react-router-dom';

import { 
    ProjectLinksContainer,
    ProjectSquareWeb,
    ProjectSquareApp,
    ProjectSquareGraphic } from './ProjectLinks.styled'

export default function ProjectLinks() {
  return (
    <ProjectLinksContainer>
        <NavLink>
            <ProjectSquareWeb>
                <h2>WEB DESIGN</h2>
                <p>VIEW PROJECTS</p>
            </ProjectSquareWeb>
        </NavLink>
        <NavLink>
            <ProjectSquareApp>
                <h2>APP DESIGN</h2>
                <p>VIEW PROJECTS</p>
            </ProjectSquareApp>
        </NavLink>
        <NavLink>
            <ProjectSquareGraphic>
                <h2>GRAPHIC DESIGN</h2>
                <p>VIEW PROJECTS</p>
            </ProjectSquareGraphic>
        </NavLink>

    </ProjectLinksContainer>
  )
}
