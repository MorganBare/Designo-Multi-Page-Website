import styled from "styled-components";

import MobileHerobg from '../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg'

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
`;

export const Heading = styled.h1`
    font-weight: ${({theme}) => theme.fontWeight.medium};
    line-height: ${({theme}) => theme.lineHeight.medium};
    font-size: ${({theme}) => theme.fontSize.h1};
`;

export const HeroP = styled.p`
    max-width: 370px;
    margin: 0 auto;
`;