import styled from "styled-components";
import { DesignSquare } from "../../../styles/DesignSquare.styled";

import { NavLink } from 'react-router-dom';

import MobileApp from '../../../assets/home/mobile/image-app-design.jpg'
import MobileGraphic from '../../../assets/home/mobile/image-graphic-design.jpg'
import MobileWeb from '../../../assets/home/mobile/image-web-design.jpg'
import {ReactComponent as Arrow} from '../../../assets/shared/desktop/icon-right-arrow.svg'

import TabletApp from '../../../assets/home/tablet/image-app-design.jpg'
import TabletGraphic from '../../../assets/home/tablet/image-graphic-design.jpg'
import TabletWeb from '../../../assets/home/tablet/image-web-design.jpg'

export const ProjectLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    margin-top: 6em;
    margin-bottom: 5em;
`;

export const WebDesignSquare = styled(DesignSquare)`
    background: url(${MobileWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }
`;

export const AppDesignSquare = styled(DesignSquare)`
    background: url(${MobileApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }
`;

export const GraphicDesignSquare = styled(DesignSquare)`
    background: url(${MobileGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));

    @media screen and (min-width:760px) {
        background: url(${TabletGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
`;

export const ArrowIcon = styled(Arrow)`
    margin-left: 10px;
`;