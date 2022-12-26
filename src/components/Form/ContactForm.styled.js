import styled from "styled-components";

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
`;

export const FormElementDiv = styled.div`

    input {
        background-color: ${({theme}) => theme.colors.peach};
        border: none;
        border-bottom: white solid 1px;
        width: 100%;
    }

    textarea {
        background-color: ${({theme}) => theme.colors.peach};
        border: none; 
        border-bottom: white solid 1px;
        width: 100%;
        height: 150px;
    }
`;