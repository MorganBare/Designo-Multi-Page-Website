import styled from "styled-components";

import { DarkButton } from '../../styles/Buttons.styled'

import MobileSVG from '../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg'
import DesktopSVG from '../../assets/contact/desktop/bg-pattern-hero-desktop.svg'

export const ContactContainer = styled.div`
    color: ${({theme}) => theme.colors.white};
    padding: 4rem 1.5rem;
    background: url(${MobileSVG});
    background-color: ${({theme}) => theme.colors.peach};
    background-position-x: -95px;

    @media screen and (min-width:760px) {
            padding: 4rem 3.5rem;
            width: 689px;
            border-radius: 15px;
            margin: 0 auto;
            height: 711px;

            background: no-repeat url(${DesktopSVG});
            background-color: ${({theme}) => theme.colors.peach};
            background-position-x: -95px;
            background-position-y: -90px;
        }
`;

export const ContactContent = styled.div`
    text-align: center;

    @media screen and (min-width:760px) {
        text-align: left;
    }

    h1{
        font-weight: ${({theme}) => theme.fontWeight.medium};
        font-size: ${({theme}) => theme.fontSize.h1};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 1.5rem;

        @media screen and (min-width:760px) {
            font-size: 48px;
        }
    }

    p {
        font-size: ${({theme}) => theme.fontSize.body};
        line-height: ${({theme}) => theme.lineHeight.small};
        max-width: 380px;
        margin: 0 auto;

        @media screen and (min-width:760px) {
            margin: 0;
            max-width: 550px;
        }
    }
`

export const ContactFormOuter = styled.form`
    padding-top: 2rem;
    text-align: center;

    @media screen and (min-width:760px) {
            padding-top: .5rem;
        }
`;

export const FormElementDiv = styled.div`

    input {
        background-color: inherit;
        border: none;
        border-bottom: white solid 1px;
        width: 100%;
        padding: 2rem 0 1rem 1rem;

        &::placeholder{
            color: ${({theme}) => theme.colors.opac};
        }
    }

    label{
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    textarea {
        background-color: inherit;
        border: none; 
        border-bottom: white solid 1px;
        width: 100%;
        height: 125px;
        padding: 2rem 1rem;

        &::placeholder{
            color: ${({theme}) => theme.colors.opac};
        }
    }
`;

export const SubmitButton = styled(DarkButton)`
    padding: 1rem 3rem;
    margin-top: 2.5rem;
    @media screen and (min-width:760px) {
        float: right;
    }
`;