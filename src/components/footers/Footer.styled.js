import styled from "styled-components";

import { NavLink } from 'react-router-dom'


import { ReactComponent as instagram} from "../../assets/shared/desktop/icon-instagram.svg"
import { ReactComponent as facebook} from "../../assets/shared/desktop/icon-facebook.svg"
import { ReactComponent as twitter} from "../../assets/shared/desktop/icon-twitter.svg"
import { ReactComponent as youtube} from "../../assets/shared/desktop/icon-youtube.svg"
import { ReactComponent as pinterest} from "../../assets/shared/desktop/icon-pinterest.svg"

import bgMobile from "../../assets/shared/desktop/bg-pattern-call-to-action.svg"

export const FooterContainer = styled.div``;

export const GetInTouchContainer = styled.div`

    color: ${({theme}) => theme.colors.white};
    background-image: url('${bgMobile}');
    background-repeat: no-repeat;
    background-position-x: 40%;
    background-position-y: 49%;
    background-color: ${({theme}) => theme.colors.peach};
    text-align: center;
    height: 379px;
    width: clamp(327px, 89%, 1111px);
    border-radius: 15px;

    margin: auto;
    padding: 4em 1.5em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: relative;
    bottom: -190px;

    h2 {
        font-size: ${({theme}) => theme.fontSize.h2};
        font-weight: ${({theme}) => theme.fontWeight.medium};
        padding: 0 1em .5em 1em;
        line-height: ${({theme}) => theme.lineHeight.medium};
    }

    p {
        font-size: ${({theme}) => theme.fontSize.body};
        line-height: ${({theme}) => theme.lineHeight.small}
    }

    @media only screen and (min-width: 767px) { 
        height: 350px;
        bottom: -90px;
        background-position-x: 11%;
        background-position-y: 45%;

        h2 {
            max-width: 300px;
            font-size: 40px;
            margin: auto;
            padding: 0;
            line-height: ${({theme}) => theme.lineHeight.medLarge};
        }

        p {
            max-width: 430px;
            padding-top: 1rem;
            padding-bottom: 1.5rem;
        }
    }

    @media only screen and (min-width: 1024px) { 
        height: 292px;
        background-position-x: 100%;
    }

`;

export const ContactInfoContainer = styled.div`
    color: white;
    background-color: black;
    font-size: ${({theme}) => theme.fontSize.body};
    width: 100%;
    height: 815px;
    padding-top: 200px;

`;

export const InnerContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 4rem;
    margin-inline: 2rem;
`;

export const ContactPageInfoContainer = styled.div`
    color: white;
    background-color: black;
    font-size: ${({theme}) => theme.fontSize.body};
    width: 100%;
    height: 626px;
`;


export const ContactNav = styled.nav`
    padding-top: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
        margin-bottom: 1rem;
    }

    ul {
        padding-top: 1.5rem;
        padding-left: 0;
        width: 100%;
        border-top: 1px rgba(255,255,255,0.2) solid;
        margin-bottom: 0;
        letter-spacing: ${({theme}) => theme.letterSpacing.small};

        li {
            padding: .5rem;

            &:hover {
                cursor: pointer;
            }
        }
    }

`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};

    &:hover {
        text-decoration: underline 1px ${({theme}) => theme.colors.opac};
        transition: underline 1s ease-in;
    }

`

export const AddressOuterContainer = styled.div`
    color: ${({theme}) => theme.colors.opac};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const SingleContactContainer = styled.div`
    text-align: center;
    padding: 1.5rem 0;
    p:first-of-type {
        font-weight: ${({theme}) => theme.fontWeight.large};
        letter-spacing: 1px;
    }
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    width: 184px;
    justify-content: space-between;
`;

export const StyledFacebookIcon = styled(facebook)`

    &:hover {
        cursor: pointer;
    }

    &:hover path {
        fill: ${({theme}) => theme.colors.lightPeach}
    }
`;
export const StyledYoutubeIcon = styled(youtube)`

    &:hover {
        cursor: pointer;
    }

    &:hover path {
        fill: ${({theme}) => theme.colors.lightPeach}
    }
`;
export const StyledTwitterIcon = styled(twitter)`

    &:hover {
        cursor: pointer;
    }

    &:hover path {
        fill: ${({theme}) => theme.colors.lightPeach}
    }
`;
export const StyledPinterestIcon = styled(pinterest)`

    &:hover {
        cursor: pointer;
    }

    &:hover path {
        fill: ${({theme}) => theme.colors.lightPeach}
    }
`;
export const StyledInstagramIcon = styled(instagram)`

    &:hover {
        cursor: pointer;
    }

    &:hover path {
        fill: ${({theme}) => theme.colors.lightPeach}
    }
`;