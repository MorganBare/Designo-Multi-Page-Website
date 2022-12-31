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
            background-position-x: -105px;
            background-position-y: -89px;
        }

        @media screen and (min-width:1440px) {
            width: 1111px;
            height: 480px;
            display: flex;
            justify-content: space-between;
            padding: 1rem 5.6rem;
            background-position-x: 0px;
            background-position-y: -160px;
        }
`;

export const ContactContent = styled.div`
    text-align: center;

    @media screen and (min-width:760px) {
        text-align: left;
    }

    @media screen and (min-width:1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1{
        font-weight: ${({theme}) => theme.fontWeight.medium};
        font-size: ${({theme}) => theme.fontSize.h1};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 1.5rem;

        @media screen and (min-width:760px) {
            font-size: 48px;
        }

        @media screen and (min-width:1440px) {
            padding-bottom: 2rem;
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

        @media screen and (min-width:760px) {
            max-width: 460px;
        }
    }
`

export const ContactFormOuter = styled.form`
    padding-top: 2rem;
    text-align: center;

    @media screen and (min-width:760px) {
        padding-top: .5rem;
    }

    @media screen and (min-width:1440px) {
        width: 380px;
    }
`;

export const FormElementDiv = styled.div`

    position: relative;

    input {
        background-color: inherit;
        border: none;
        border-bottom: white solid 1px;
        width: 100%;
        padding: 2rem 0 1rem 1rem;
        color: ${({theme}) => theme.colors.white};

        &::placeholder{
            color: ${({theme}) => theme.colors.opac};
        }

        &:focus{
            outline: none;
            border-bottom: white solid 3px;
            color: ${({theme}) => theme.colors.white};
        }

        @media screen and (min-width:1440px) {
            padding: 1.7rem 0 .5rem 1rem;
        }

    }

    input[type='number']::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
    -moz-appearance: textfield;
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
        color: ${({theme}) => theme.colors.white};
        resize: none;

        &::placeholder{
            color: ${({theme}) => theme.colors.opac};
        }

        &:focus{
            outline: none;
            border-bottom: white solid 3px;
            color: ${({theme}) => theme.colors.white};
        }
    }
`;

export const SubmitButton = styled(DarkButton)`
    padding: 1rem 3rem;
    margin-top: 2.5rem;
    @media screen and (min-width:760px) {
        float: right;
    }

    @media screen and (min-width:1440px) {
            margin-top: 1rem;
        }
`;

export const FormNameDiv = styled(FormElementDiv)`
    &::before{
        content: "Can't be empty!";
        width: auto;
        height: 20px;
        position: absolute;
        text-align: right;
        font-size: 12px;
        font-style: italic;
        top: 30px;
        right: 10px;
        display: ${props => (props.isEmpty ? 'block' : 'none')};
    }
`;

export const FormPhoneDiv = styled(FormElementDiv)`
    &::before{
        content: "Can't be empty!";
        width: auto;
        height: 20px;
        position: absolute;
        text-align: right;
        font-size: 12px;
        font-style: italic;
        top: 30px;
        right: 10px;
        display: ${props => (props.isEmpty ? 'block' : 'none')};
    }
`;

export const FormTextDiv = styled(FormElementDiv)`
    &::before{
        content: "Can't be empty!";
        width: auto;
        height: 20px;
        position: absolute;
        text-align: right;
        font-size: 12px;
        font-style: italic;
        top: 30px;
        right: 10px;
        display: ${props => (props.isEmpty ? 'block' : 'none')};
    }
`;