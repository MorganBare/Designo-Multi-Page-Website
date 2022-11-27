import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const NavigationOuterContainer = styled.div`
    width: clamp(327px, 89%, 1111px);
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    margin: 3rem auto;
    border: 1px red solid;
`;

export const TopNavigation = styled.div`

    ul {
        display: flex;

        li{
            padding-left: 2rem;
        }
    }
`;

export const TopNavLink = styled(NavLink)`

    text-decoration: none;
    color: ${({theme}) => theme.colors.darkGrey};
    letter-spacing: ${({theme}) => theme.letterSpacing.small};
    text-transform: uppercase;

    &:hover {
        text-decoration: underline 1px ${({theme}) => theme.colors.opacGrey};
        transition: underline 1s ease-in;
    }

`;
