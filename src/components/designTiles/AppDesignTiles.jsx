import React from 'react'

import {
    DesignTilesContainer,
    Link,
    WebDesignSquare2,
    GraphicDesignSquare,
    ArrowIcon
} from './DesignTiles.styled'

export default function AppDesignTiles() {
  return (
    <DesignTilesContainer>
        <Link to="/Web-Design">
            <WebDesignSquare2>
                <h2>WEB DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </WebDesignSquare2>
        </Link>
        <Link to="/Graphic-Design">
            <GraphicDesignSquare>
                <h2>GRAPHIC DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </GraphicDesignSquare>
        </Link>
    </DesignTilesContainer>
  )
}
