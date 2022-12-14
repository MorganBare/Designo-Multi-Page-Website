import React from 'react'

import {
    DesignTilesContainer,
    Link,
    AppDesignSquare,
    WebDesignSquare2,
    ArrowIcon
} from './DesignTiles.styled'

export default function GraphicDesignTiles() {
  return (
    <DesignTilesContainer>
        <Link to="/App-Design">
            <AppDesignSquare>
                <h2>APP DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </AppDesignSquare>
        </Link>
        <Link to="/Graphic-Design">
            <WebDesignSquare2>
                <h2>WEB DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </WebDesignSquare2>
        </Link>
    </DesignTilesContainer>
  )
}
