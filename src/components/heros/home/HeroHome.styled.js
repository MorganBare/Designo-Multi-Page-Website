import styled from "styled-components";

import herobg from '../../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg'

export const HeroHomeContainer = styled.div`
    background: url(${herobg});
    background-repeat: no-repeat;
    background-size: 1950px;
    background-position-y: 100px;
    background-position-x: -650px;
    background-color: ${({theme}) => theme.colors.peach};
    color: ${({theme}) => theme.colors.white};
    height: 843px;
    position: relative;
    overflow: hidden;

    padding-top: 3.9rem;
`;

export const HeroHomeContent = styled.div`
    text-align: center;
    padding: 1rem 1.5rem;

    h1 {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        line-height: ${({theme}) => theme.lineHeight.medium};
        font-size: ${({theme}) => theme.fontSize.h1};
    }

    p {
        line-height: ${({theme}) => theme.lineHeight.small};
        font-size: ${({theme}) => theme.fontSize.button};
        padding: 1.5rem 0;
    }
`;

export const HeroPhoneImg = styled.img`

    position: absolute;
    bottom: -22%;
    backface-visibility: hidden;
    transform: scale(1.7);

    @media screen and (min-width:399px) {
        bottom: -27%;
        transform: scale(1.6);
    }

`;