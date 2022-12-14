import styled from "styled-components";
import { DesignSquare } from "../../styles/DesignSquare.styled";

import { NavLink } from 'react-router-dom';

import MobileApp from '../../assets/home/mobile/image-app-design.jpg'
import MobileGraphic from '../../assets/home/mobile/image-graphic-design.jpg'
import MobileWeb from '../../assets/home/mobile/image-web-design.jpg'
import {ReactComponent as Arrow} from '../../assets/shared/desktop/icon-right-arrow.svg'

import TabletApp from '../../assets/home/tablet/image-app-design.jpg'
import TabletGraphic from '../../assets/home/tablet/image-graphic-design.jpg'
import TabletWeb from '../../assets/home/tablet/image-web-design.jpg'

import DesktopApp from '../../assets/home/desktop/image-app-design.jpg'
import DesktopGraphic from '../../assets/home/desktop/image-graphic-design.jpg'
import DesktopWeb from '../../assets/home/desktop/image-web-design-large.jpg'

export const DesignTilesContainer = styled.div`
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
        flex-direction: column;
        margin-bottom: 4em;
    }

    @media screen and (min-width:1440px) {
        flex-direction: row;
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

export const WebDesignSquare = styled(DesignSquare)`
    background: url(${MobileWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }

    @media screen and (min-width:1024px) {
        background: url(${DesktopGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    @media screen and (min-width:1440px) {
        background: url(${DesktopWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        height: 640px;
        width: 541px;
    }
`;

export const WebDesignSquare2 = styled(DesignSquare)`
    background: url(${MobileWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }

    @media screen and (min-width:1024px) {
        background: url(${DesktopGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    @media screen and (min-width:1440px) {
        background: url(${DesktopWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }
`;

export const ArrowIcon = styled(Arrow)`
    margin-left: 10px;
`;