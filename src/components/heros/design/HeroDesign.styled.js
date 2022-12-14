import styled from "styled-components";

import MobileHerobg from '../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg'
import TabletHerobg from '../../../assets/shared/tablet/bg-pattern-design-pages-intro-tablet.svg'
import DesktopWebHerobg from '../../../assets/web-design/desktop/bg-pattern-intro-web.svg'
import DesktopGraphicHerobg from '../../../assets/graphic-design/desktop/bg-pattern-intro-graphic.svg'
import DesktopAppHerobg from '../../../assets/app-design/desktop/bg-pattern-intro-app.svg'

export const HeroDesignContainer = styled.div`
    height: 320px;
    background: url(${MobileHerobg});
    background-color: ${({theme}) => theme.colors.peach};
    color: ${({theme}) => theme.colors.white};
    background-position-x: 375px;

    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    @media screen and (min-width:760px) {
        background: url(${TabletHerobg});
        background-color: ${({theme}) => theme.colors.peach};
        background-position-y: -165px;
        background-position-x: -20px;
        height: 252px;
        width: 689px;
        border-radius: 15px;
        margin: 0 auto;
        gap: 1.9rem;
    }

    @media screen and (min-width: 1440px){
        width: 1111px;
    }
`;

export const Heading = styled.h1`
    font-weight: ${({theme}) => theme.fontWeight.medium};
    line-height: ${({theme}) => theme.lineHeight.medium};
    font-size: ${({theme}) => theme.fontSize.h1};

    @media screen and (min-width: 760px){
        font-size: 48px;
        line-height: ${({theme}) => theme.lineHeight.large};
    }
`;

export const HeroP = styled.p`
    max-width: 370px;
    margin: 0 auto;
    font-size: ${({theme}) => theme.fontSize.body};
    line-height: ${({theme}) => theme.lineHeight.small};

    @media screen and (min-width: 1440px){
        max-width: 400px;
    }
`;

export const HeroWebDesignContainer = styled(HeroDesignContainer)`

    @media screen and (min-width: 1440px){
        background: url(${DesktopWebHerobg});
        background-color: ${({theme}) => theme.colors.peach};
        background-repeat: no-repeat;
        background-position-y: -165px;
        background-position-x: 238px;
    }

`;

export const HeroGraphicDesignContainer = styled(HeroDesignContainer)`
    @media screen and (min-width: 1440px){
        background: url(${DesktopGraphicHerobg});
        background-color: ${({theme}) => theme.colors.peach};
        background-repeat: no-repeat;
        background-position-y: -170px;
        background-position-x: -60px;

    }
`;

export const HeroAppDesignContainer = styled(HeroDesignContainer)`

    @media screen and (min-width: 1440px){
            background: url(${DesktopAppHerobg});
            background-color: ${({theme}) => theme.colors.peach};
            background-repeat: no-repeat;
            background-position-y: -165px;
            background-position-x: -60px;

            p {
                max-width: 350px;
            }
        }

`;