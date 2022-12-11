import styled from "styled-components";

import { NavLink } from 'react-router-dom';

import MobileApp from '../../../assets/home/mobile/image-app-design.jpg'
import MobileGraphic from '../../../assets/home/mobile/image-graphic-design.jpg'
import MobileWeb from '../../../assets/home/mobile/image-web-design.jpg'
import {ReactComponent as Arrow} from '../../../assets/shared/desktop/icon-right-arrow.svg'

export const ProjectLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    margin-top: 6em;
    margin-bottom: 5em;
    text-align: center;

    h2 {
        font-size: ${({theme}) => theme.fontSize.h2};
        font-weight: ${({theme}) => theme.fontWeight.medium};
        letter-spacing: 1.4px;

    }

    p {
        font-size: ${({theme}) => theme.fontSize.button};
        letter-spacing: ${({theme}) => theme.letterSpacing.large};
    }
`;

export const ProjectSquareWeb = styled.div`
    height: 250px;
    width: 327px;
    background: url(${MobileWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:hover {
        background: url(${MobileWeb}), linear-gradient(rgba(231,129,107,0.9),rgba(231,129,107,0.9));
    }
`;

export const ProjectSquareApp = styled.div`
    height: 250px;
    width: 327px;
    background: url(${MobileApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ProjectSquareGraphic = styled.div`
    height: 250px;
    width: 327px;
    background: url(${MobileGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));;
    background-blend-mode: overlay;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
`;

export const ArrowIcon = styled(Arrow)`
    margin-left: 10px;
`;