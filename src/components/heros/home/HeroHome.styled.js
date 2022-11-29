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
`;

export const HeroHomeContent = styled.div`
    text-align: center;

    h1 {
        font-weight: ${({theme}) => theme.fontWeight.medium};
        line-height: ${({theme}) => theme.lineHeight.medium};
    }

    p {
        line-height: ${({theme}) => theme.lineHeight.small};
        font-size: ${({theme}) => theme.fontSize.button};
    }
`;