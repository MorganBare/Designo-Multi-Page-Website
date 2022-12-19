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
    background: url(${TabletAU});
    background-position: top right;
`;

export const MapCA = styled(Map)`
    background: url(${TabletCA});
    background-position: right;
`;

export const MapUK = styled(Map)`
    background: url(${TabletUk});
    background-position: right;
`;

export const Address = styled.div``;

export const AddressContent = styled.div``;