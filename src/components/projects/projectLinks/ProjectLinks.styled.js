import styled from "styled-components";

import MobileApp from '../../../assets/home/mobile/image-app-design.jpg'
import MobileGraphic from '../../../assets/home/mobile/image-graphic-design.jpg'
import MobileWeb from '../../../assets/home/mobile/image-web-design.jpg'

export const ProjectLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
    margin-top: 6em;
`;

export const ProjectSquareWeb = styled.div`
    height: 250px;
    width: 327px;
    background: url(${MobileWeb}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    border-radius: 15px;
`;

export const ProjectSquareApp = styled.div`
    height: 250px;
    width: 327px;
    background: url(${MobileApp}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
    border-radius: 15px;
`;

export const ProjectSquareGraphic = styled.div`
    height: 250px;
    width: 327px;
    background: url(${MobileGraphic}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));;
    background-blend-mode: overlay;
    border-radius: 15px;
`;
