import styled from "styled-components";

import MobileHero from '../../../assets/about/mobile/image-about-hero.jpg'
import TabletHero from '../../../assets/about/tablet/image-about-hero.jpg'
import DesktopHero from '../../../assets/about/desktop/image-about-hero.jpg'
import MobileSVG from '../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg'
import DesktopSVG from '../../../assets/about/desktop/bg-pattern-hero-about-desktop.svg'


export const HeroAboutContainer = styled.div`

    margin-bottom: 20rem;

    @media screen and (min-width:760px) {
        width: 689px;
        border-radius: 15px;
        margin: auto;
    }

`;

export const AboutImg = styled.div`
    display: block;
    height: 320px;
    width: 100%;
    background: no-repeat url(${MobileHero});
    background-size: cover;

    @media screen and (min-width:760px) {
        background: no-repeat url(${TabletHero});
        background-size: cover;
        border-radius: 15px 15px 0 0;
    }
`;

export const AboutContent = styled.div`

    text-align: center;
    color: ${({theme}) => theme.colors.white};
    height: 395px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 1rem;
        font-size: ${({theme}) => theme.fontWeight.h1};

        @media screen and (min-width:760px) {
            font-size: 48px;
            padding-bottom: 2rem;
        }
    }

    p{
        max-width: 340px;

        @media screen and (min-width:760px) {
            max-width: 573px;
        }
    }

    background: no-repeat url(${MobileSVG});
    background-color: ${({theme}) => theme.colors.peach};
    background-position-x: -215px;
    background-position-y: -140px;

    @media screen and (min-width:760px) {
        border-radius: 0 0 15px 15px;
        height: 312px;
        background: no-repeat url(${DesktopSVG});
        background-color: ${({theme}) => theme.colors.peach};
        background-position-x: -115px;
        background-position-y: -437px;
    }

`;