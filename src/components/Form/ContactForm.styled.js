import styled from "styled-components";

import { DarkButton } from '../../styles/Buttons.styled'

export const ContactContainer = styled.div`
    background-color: ${({theme}) => theme.colors.peach};
    color: ${({theme}) => theme.colors.white};
    padding: 4rem 2rem;
`;

export const ContactContent = styled.div`
    text-align: center;

    h1{
        font-weight: ${({theme}) => theme.fontWeight.medium};
        font-size: ${({theme}) => theme.fontSize.h1};
        line-height: ${({theme}) => theme.lineHeight.medium};
        padding-bottom: 2rem;
    }

    p {
        font-size: ${({theme}) => theme.fontSize.body};
        line-height: ${({theme}) => theme.lineHeight.small};
        max-width: 380px;
        margin: 0 auto;
    }
`

export const ContactFormOuter = styled.form`
    padding-top: 2rem;
    text-align: center;
`;

export const FormElementDiv = styled.div`

    input {
        background-color: ${({theme}) => theme.colors.peach};
        border: none;
        border-bottom: white solid 1px;
        width: 100%;
        padding: 1rem 1rem;

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
        background-color: ${({theme}) => theme.colors.peach};
        border: none; 
        border-bottom: white solid 1px;
        width: 100%;
        height: 150px;
        padding: 2rem 1rem;

        &::placeholder{
            color: ${({theme}) => theme.colors.opac};
        }
    }
`;

export const SubmitButton = styled(DarkButton)`
    padding: 1rem 3rem;
    margin-top: 2.5rem;
`;