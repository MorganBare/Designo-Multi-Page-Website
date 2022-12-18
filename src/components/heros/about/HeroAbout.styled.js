import styled from "styled-components";

import MobileHero from '../../../assets/about/mobile/image-about-hero.jpg'
import TabletHero from '../../../assets/about/tablet/image-about-hero.jpg'
import DesktopHero from '../../../assets/about/desktop/image-about-hero.jpg'
import MobileSVG from '../../../assets/about/mobile/bg-pattern-hero-about-mobile.svg'
import DesktopSVG from '../../../assets/about/desktop/bg-pattern-hero-about-desktop.svg'


export const HeroAboutContainer = styled.div`

    @media screen and (min-width:760px) {
        width: 689px;
        border-radius: 15px;
        margin: auto;
    }

    @media screen and (min-width:1340px) {
        width: 1111px;
        display: flex;
        flex-direction: row-reverse;
        height: 480px;
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

    @media screen and (min-width:1440px) {
        width: 476px;
        border-radius: 0 15px 15px 0;
        height: auto;

        background: no-repeat url(${DesktopHero});
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
        font-size: ${({theme}) => theme.fontSize.h1};

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

        @media screen and (min-width:1333px) {
            max-width: 458px;
        }
    }

    background: no-repeat url(${MobileSVG});
    background-color: ${({theme}) => theme.colors.peach};
    background-position-x: -505px;
    background-position-y: -142px;

    @media screen and (min-width:760px) {
        border-radius: 0 0 15px 15px;
        height: 312px;
        background: no-repeat url(${DesktopSVG});
        background-color: ${({theme}) => theme.colors.peach};
        background-position-x: -115px;
        background-position-y: -437px;
    }

    @media screen and (min-width:1440px) {
        width: 635px;
        text-align: left;
        height: auto;
        border-radius: 15px 0 0 15px;
        padding-inline: 5.5rem;
        align-items: baseline;

        background-position-x: 0px;
        background-position-y: -160px;
    }

`;