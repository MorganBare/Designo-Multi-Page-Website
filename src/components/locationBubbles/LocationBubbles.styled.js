import styled from "styled-components";

import SVGbg from '../../assets/shared/desktop/bg-pattern-small-circle.svg'

import { NavLink } from 'react-router-dom';

import {ReactComponent as Canada} from '../../assets/shared/desktop/illustration-canada.svg'
import {ReactComponent as Australia} from '../../assets/shared/desktop/illustration-australia.svg'
import {ReactComponent as UK} from '../../assets/shared/desktop/illustration-united-kingdom.svg'


export const LocationBubblesContainer = styled.div`
    text-align: center;
    margin: 4rem 0;
`;

export const SingleLocation = styled.div`

    padding: 2rem 0;
    h3 {
        padding: 2rem 0 1.5rem 0;
        letter-spacing: ${({theme}) => theme.letterSpacing.large};
    }
`;

export const LocationSVGContainer = styled.div`
    height: 202px;
    width: 202px;
    margin: 0 auto;
    background: url(${SVGbg});
`;

export const CanadaSVG = styled(Canada)``;
export const AustraliaSVG = styled(Australia)``;
export const UKSVG = styled(UK)``;

export const Link = styled(NavLink)``;