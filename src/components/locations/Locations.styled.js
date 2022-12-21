import styled from "styled-components";

import TabletAU from '../../assets/locations/tablet/image-map-australia.png'
import DesktopAU from '../../assets/locations/desktop/image-map-australia.png'

import TabletCA from '../../assets/locations/tablet/image-map-canada.png'
import DesktopCA from '../../assets/locations/desktop/image-map-canada.png'

import TabletUk from  '../../assets/locations/tablet/image-map-uk.png'
import DesktopUk from  '../../assets/locations/desktop/image-map-united-kingdom.png'


export const LocationsCotainer = styled.div``;

export const SingleLocation = styled.div`
    text-align: center;
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

export const Address = styled.div``;

export const AddressContent = styled.div``;