import styled from "styled-components";

import TabletAU from '../../assets/locations/tablet/image-map-australia.png'

import TabletCA from '../../assets/locations/tablet/image-map-canada.png'

import TabletUk from  '../../assets/locations/tablet/image-map-uk.png'

import Mobilebg from '../../assets/shared/desktop/bg-pattern-three-circles.svg'

export const LocationsCotainer = styled.div`
    @media screen and (min-width:768px) {
       margin-bottom: -100px;
    }

    @media screen and (min-width:1440px) {
        margin-bottom: 0;
    }
`;

export const SingleLocation = styled.div`
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (min-width:600px) {
        width: 550px;
        margin: 2rem auto;
    }

    @media screen and (min-width:768px) {
        width: 689px;
        margin: 0 auto 6rem auto;
        text-align: left;
    }

    @media screen and (min-width:1440px) {
        width: 1110px;
        display: flex;
        gap: 2rem;
        flex-direction: row-reverse;
        margin-bottom: 1rem;
    }
`;

export const Australia = styled(SingleLocation)`
    flex-direction: row;
`;

export const Map = styled.div`
    height: 320px;

    @media screen and (min-width:600px) {
        border-radius: 15px;
        margin-bottom: 1rem;
    }

    @media screen and (min-width:768px) {
       height: 326px;
       border-radius: 15px;
       margin-bottom: 2rem;
    }

    @media screen and (min-width:1440px) {
        width: 350px;
    }
`;

export const MapAU = styled(Map)`
    background: no-repeat url(${TabletAU});
    background-position: 75% 0%;
    background-size: cover;

    @media screen and (min-width:1440px) {
        background-position: 65% 0%;
    }
`;

export const MapCA = styled(Map)`
    background: no-repeat url(${TabletCA});
    background-position: right bottom;
    background-size: cover;

    @media screen and (min-width:1440px) {
        background-position: 90% 0%;
    }
`;

export const MapUK = styled(Map)`
    background: no-repeat url(${TabletUk});
    background-position: 70% 0%;
    background-size: cover;
`;

export const Address = styled.div`

    height: 394px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: no-repeat url(${Mobilebg});
    background-color: ${({theme}) => theme.colors.cream};

    h2 {
        color: ${({theme}) => theme.colors.peach};
        font-size: ${({theme}) => theme.fontSize.h2};
        font-weight: ${({theme}) => theme.fontWeight.medium};
    }

    @media screen and (min-width:600px) {
        border-radius: 15px;
    }

    @media screen and (min-width:768px) {
       height: 326px;
       align-items: baseline;
       padding-left: 4rem;
       background-position-y: -255px;
       background-position-x: -5px;

       h2 {
        font-size: 40px;
        }
    }

    @media screen and (min-width:1440px) {
        width: 730px;
    }
`;

export const AddressContent = styled.div`
    div {
        p:first-of-type{
            font-weight: ${({theme}) => theme.fontWeight.large};
        }

        padding-top: 1.5rem;
    }

    @media screen and (min-width:768px) {
       display: flex;
       gap: 8rem;

       div {
        padding-top: 1rem;

        p{
            padding-bottom: .3rem;
        }
       }
    }
`;