import styled from "styled-components";

import bgPattern from '../../assets/shared/desktop/bg-pattern-three-circles.svg'

import MobileTalent from '../../assets/about/mobile/image-world-class-talent.jpg'
import TabletTalent from '../../assets/about/tablet/image-world-class-talent.jpg'
import DesktopTalent from '../../assets/about/desktop/image-world-class-talent.jpg'

import MobileReal from '../../assets/about/mobile/image-real-deal.jpg'
import TabletReal from '../../assets/about/tablet/image-real-deal.jpg'
import DesktopReal from '../../assets/about/desktop/image-world-class-talent.jpg'

export const CardContainer = styled.div`
    text-align: center;
`;

export const ImgDiv = styled.div`
    height: 320px;
    width: 100%;
`;

export const ImgDivTalent = styled(ImgDiv)`
    background: no-repeat url(${MobileTalent});
    background-size: cover;
`;

export const ImgDivReal = styled(ImgDiv)`
    background: no-repeat url(${MobileReal});
    background-size: cover;
`;

export const CardContent = styled.div`

    height: 545px;
    background: no-repeat url(${bgPattern});
    background-color: ${({theme}) => theme.colors.cream};
    background-position-x: 0px;
    background-position-y: ;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 1rem;
        font-size: ${({theme}) => theme.fontSize.h1};
        color: ${({theme}) => theme.colors.peach};
        padding-bottom: 1.5rem;
    }

    p{
        width: 340px;
        margin: 0 auto;
        line-height: ${({theme}) => theme.lineHeight.small};

        &:first-of-type {
            padding-bottom: 1.5rem;
        }
    }
`;