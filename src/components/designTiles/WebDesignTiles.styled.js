import styled from "styled-components";
import { DesignSquare } from "../../styles/DesignSquare.styled";

import { NavLink } from 'react-router-dom';

import MobileApp from '../../assets/home/mobile/image-app-design.jpg'
import MobileGraphic from '../../assets/home/mobile/image-graphic-design.jpg'
import {ReactComponent as Arrow} from '../../assets/shared/desktop/icon-right-arrow.svg'

import TabletApp from '../../assets/home/tablet/image-app-design.jpg'
import TabletGraphic from '../../assets/home/tablet/image-graphic-design.jpg'

import DesktopApp from '../../assets/home/desktop/image-app-design.jpg'
import DesktopGraphic from '../../assets/home/desktop/image-graphic-design.jpg'

export const WebDesignTilesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    margin-bottom: 3em;

    @media screen and (min-width:760px) {
        margin-bottom: 4.5em;
    }

    @media screen and (min-width:1024px) {
        flex-direction: row;
        margin-bottom: 4em;
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
`;

export const AppDesignSquare = styled(DesignSquare)`
    background: url(${MobileApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }

    @media screen and (min-width:1024px) {
        background: url(${DesktopApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;

export const GraphicDesignSquare = styled(DesignSquare)`
    background: url(${MobileGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }

    @media screen and (min-width:1024px) {
        background: url(${DesktopGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;

export const ArrowIcon = styled(Arrow)`
    margin-left: 10px;
`;