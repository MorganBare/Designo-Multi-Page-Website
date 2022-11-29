import styled from "styled-components";

import { NavLink } from 'react-router-dom';


export const MobileNavDiv = styled.div`

width: clamp(300px, 89%, 370px);
margin: auto;

display: flex;
justify-content: space-between;
align-items: center;

margin-top: 2rem;
margin-bottom: 2rem;

@media only screen and (min-width: 692px) { 
        display: none;
    }

`;

export const MobileNavContainer = styled.nav`

    max-height: ${extendMobileNav => console.log(extendMobileNav)};
    background-color: ${({theme}) => theme.colors.black};
    overflow: hidden;
    transition: all 1s ease-out;
    width: 100%;
    z-index: 100;
    position: fixed;
    
    ul{
        padding: 1.5rem;

        li {
            padding: .8rem 0;
        }
    }

    @media only screen and (min-width: 692px) { 
        display: none;
    }
`;

export const OpenMobileNavBtn = styled.button`
    border: none;
    background-color: inherit;
`;

export const MobileLinks = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    letter-spacing: ${({theme}) => theme.letterSpacing.small};
    text-transform: uppercase;
    font-size: 24px;
    line-height: 25px;

    &:hover {
        text-decoration: underline 1px ${({theme}) => theme.colors.opacGrey};
        transition: underline 1s ease-in;
    }
`;