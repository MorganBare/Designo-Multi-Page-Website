import styled from "styled-components";

import MobileHero from '../../../assets/about/mobile/image-about-hero.jpg'
import TabletHero from '../../../assets/about/tablet/image-about-hero.jpg'
import DesktopHero from '../../../assets/about/desktop/image-about-hero.jpg'
import MobileSVG from '../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg'


export const HeroAboutContainer = styled.div`

    margin-bottom: 20rem;

`;

export const AboutImg = styled.div`
    height: 320px;
    width: 375px;
    background: no-repeat url(${MobileHero});
    background-size: contain;
    margin: 0 auto;
`;

export const AboutContent = styled.div`

    text-align: center;
    color: ${({theme}) => theme.colors.white};
    height: 395px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: no-repeat url(${MobileSVG});
    background-color: ${({theme}) => theme.colors.peach};
    background-position-x: -215px;
    background-position-y: -140px;

    h1 {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 1rem;
    }

    p{
        max-width: 340px;
    }
`;