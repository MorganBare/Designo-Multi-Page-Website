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

    @media screen and (min-width:760px) {
        width: 689px;
        margin: 0 auto;
        border-radius: 15px;
        background-position-y: 120px;
        background-position-x: -485px;
    }

    @media screen and (min-width:1023px) {
        width: 911px;
        height: 640px;
        padding-top: 9rem;
        background-position-y: 0px;
        background-position-x: -340px;
    }

    @media screen and (min-width:1440px) {
        width: 1111px;
        background-size: 1935px;
        background-position-y: 0px;
        background-position-x: -165px;
    }
`;

export const HeroHomeContent = styled.div`
    text-align: center;
    padding: 1rem 1.5rem;
    max-width: 500px;
    margin: 0 auto;
    position: relative;

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

    @media screen and (min-width:760px) {
        width: 550px;
        padding: 1rem 0;

        h1 {
        line-height: ${({theme}) => theme.lineHeight.large};
        font-size: 48px;
        }

        p{
            padding: 1.5rem 2.8rem;
        }
    }

    @media screen and (min-width:1023px) {
        margin-left: 4rem;
        text-align: left;

        p{
            padding: 1.5rem 6rem 2rem 0;
        }
    }

    @media screen and (min-width:1440px) {
        margin-left: 6.5rem;
        width: 700px;
        p{
            font-size: ${({theme}) => theme.fontSize.body};
            padding: 1.5rem 5rem 2rem 0;
        }
    }

`;

export const HeroPhoneImg = styled.img`

    position: absolute;
    bottom: -23%;
    backface-visibility: hidden;
    transform: scale(1.7);
    max-width: 380px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    z-index: 0;

    @media screen and (min-width:320px) {
        transform: scale(1.6);
    }

    @media screen and (min-width:760px) {
       transform: scale(1.6);
    }

    @media screen and (min-width:1023px) {
        margin-left: 0;
        left: 58%; 
        right: 0; 
        bottom: -10%;
    }

    @media screen and (min-width:1440px) {
        transform: scale(1.7);
        left: 61%; 
        right: 0; 
        bottom: -8%;
    }

`;