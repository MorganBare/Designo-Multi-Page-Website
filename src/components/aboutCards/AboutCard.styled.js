import styled from "styled-components";

import bgPattern from '../../assets/shared/desktop/bg-pattern-three-circles.svg'

import MobileTalent from '../../assets/about/mobile/image-world-class-talent.jpg'
import TabletTalent from '../../assets/about/tablet/image-world-class-talent.jpg'
import DesktopTalent from '../../assets/about/desktop/image-world-class-talent.jpg'

import MobileReal from '../../assets/about/mobile/image-real-deal.jpg'
import TabletReal from '../../assets/about/tablet/image-real-deal.jpg'
import DesktopReal from '../../assets/about/desktop/image-real-deal.jpg'

export const CardContainer = styled.div`
    text-align: center;

    @media screen and (min-width:760px) {
        width: 689px;
        border-radius: 15px;
        margin: 6rem auto 4rem auto;
    }

    @media screen and (min-width:1444px) {
        width: 1111px;
        display: flex;
        height: 640px;
        text-align: left;
        margin: 6rem auto 1rem auto;
    }
`;

export const CardContainerReal = styled(CardContainer)`
    @media screen and (min-width:1444px) {
        flex-direction: row-reverse;
    }
`;

export const ImgDiv = styled.div`
    height: 320px;
    width: 100%;

    @media screen and (min-width:1444px) {
        height: 640px;
        width: 476px;
    }

`;

export const ImgDivTalent = styled(ImgDiv)`
    background: no-repeat url(${MobileTalent});
    background-size: cover;

    @media screen and (min-width:760px) {
        background: no-repeat url(${TabletTalent});
        border-radius: 15px 15px 0 0;
    }

    @media screen and (min-width:1444px) {
        background: no-repeat url(${DesktopTalent});
        border-radius: 15px 0 0 15px;
        background-size: cover;
    }

`;

export const ImgDivReal = styled(ImgDiv)`
    background: no-repeat url(${MobileReal});
    background-size: cover;

    @media screen and (min-width:760px) {
        background: no-repeat url(${TabletReal});
        border-radius: 15px 15px 0 0;
    }

    @media screen and (min-width:1444px) {
        background: no-repeat url(${DesktopReal});
        border-radius: 0 15px 15px 0;
        background-size: cover;
    }
`;

export const CardContent = styled.div`

    height: 545px;
    background: no-repeat url(${bgPattern});
    background-color: ${({theme}) => theme.colors.cream};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width:760px) {
        border-radius: 0 0 15px 15px;
        height: 416px;
        background-position-x:90px;
        background-position-y:-208px;
    }

    @media screen and (min-width:1444px) {
        height: 100%;
        border-radius: 0 15px 15px 0;
        width: 635px;
        align-items: baseline;
        padding-inline: 5.5rem;

        background-position-x:-145px;
        background-position-y:55px;
    }

    h1 {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 1rem;
        font-size: ${({theme}) => theme.fontSize.h1};
        color: ${({theme}) => theme.colors.peach};
        padding-bottom: 1.5rem;

        @media screen and (min-width:760px) {
        font-size: 48px;
        }

        @media screen and (min-width:1444px) {
            padding-bottom: 2rem;
        }
    }

    p{
        width: 340px;
        margin: 0 auto;
        line-height: ${({theme}) => theme.lineHeight.small};

        @media screen and (min-width:760px) {
            width: 572px;
        }

        @media screen and (min-width:1444px) {
            width: 445px;
        }

        &:first-of-type {
            padding-bottom: 1.5rem;
        }
    }
`;

export const CardContentReal = styled(CardContent)`
    @media screen and (min-width:1444px) {
        border-radius: 15px 0 0 15px;
        background-position-x:0px;
        background-position-y:55px;
    }
`;