import styled from "styled-components";

import TabletAU from '../../assets/locations/tablet/image-map-australia.png'
import DesktopAU from '../../assets/locations/desktop/image-map-australia.png'

import TabletCA from '../../assets/locations/tablet/image-map-canada.png'
import DesktopCA from '../../assets/locations/desktop/image-map-canada.png'

import TabletUk from  '../../assets/locations/tablet/image-map-uk.png'
import DesktopUk from  '../../assets/locations/desktop/image-map-united-kingdom.png'

import Mobilebg from '../../assets/shared/desktop/bg-pattern-three-circles.svg'

export const LocationsCotainer = styled.div``;

export const SingleLocation = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const Map = styled.div`
    height: 320px;
`;

export const MapAU = styled(Map)`
    background: no-repeat url(${TabletAU});
    background-position: 75% 0%;
    background-size: cover;
`;

export const MapCA = styled(Map)`
    background: no-repeat url(${TabletCA});
    background-position: right bottom;
    background-size: cover;
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
`;

export const AddressContent = styled.div`
    div {
        p:first-of-type{
            font-weight: ${({theme}) => theme.fontWeight.large};
        }

        padding-top: 1.5rem;
    }
`;