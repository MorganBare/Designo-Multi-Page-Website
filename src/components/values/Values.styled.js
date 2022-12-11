import styled from "styled-components";

import SVGbg from '../../assets/shared/desktop/bg-pattern-small-circle.svg'

import { ReactComponent as passionateSVG } from "../../assets/home/desktop/illustration-passionate.svg"
import { ReactComponent as resourcefulSVG } from "../../assets/home/desktop/illustration-resourceful.svg"
import { ReactComponent as friendlySVG } from "../../assets/home/desktop/illustration-friendly.svg"

export const ValuesContainer = styled.div`
    margin: 1.5em;
    z-index: 100;
    position: relative;

    @media screen and (min-width:1024px) {
        display: flex;
        max-width: 1110px;
        margin: 0 auto;
        padding: 0 2em;
    }

    @media screen and (min-width:1440px) {
        padding: 0;
        margin-bottom: 4em;
    }
`;

export const SingleValueContainer = styled.div`
    text-align: center;
    padding: 2.5em 0;
    max-width: 330px;
    margin: 0 auto;

    @media screen and (min-width:768px) {
        max-width: 690px;
        display: flex;
        text-align: left;
        padding: 1em 0;
    }

    @media screen and (min-width:1024px) {
        max-width: 690px;
        display: block;
        text-align: center;
        max-width: 350px;
        padding: 0 1em;
    }

    @media screen and (min-width:1440px) {
        padding: 0;
    }
`;

export const ValueContent = styled.div`
    
    h3{
        padding: 1.8em 0;
        letter-spacing: ${({theme}) => theme.letterSpacing.large};
        font-weight: ${({theme}) => theme.fontWeight.medium};
    }

    @media screen and (min-width:768px) {

        padding-left: 2em;
        padding-right: 1em;
        
        h3{
            padding-bottom: 1em;
        }

        @media screen and (min-width:1024px) {
            padding: 0;
            h3{
                padding: 1.8em 0;
            }
        }
    }
`;

export const SVGContainer = styled.div`
    height: 202px;
    width: 202px;
    margin: 0 auto;
    background: url(${SVGbg});
`;

export const StyledPassionateSVG = styled(passionateSVG)`

`;

export const StyledResourcefulSVG = styled(resourcefulSVG)`

`;

export const StyledFriendlySVG = styled(friendlySVG)`

`;

export const LeafImg = styled.img`
    display: none;

    @media screen and (min-width:1440px) {
            display: block;
            z-index: -1;
            position: absolute;
            left: 23%;
            top: 30%;
            transform: rotate(180deg);
        }
`;
