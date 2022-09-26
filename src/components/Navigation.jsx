import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Locations">Locations</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}
