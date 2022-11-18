import styled from "styled-components";

import bgMobile from "../../assets/shared/desktop/bg-pattern-call-to-action.svg"

export const FooterContainer = styled.div`

`;

export const GetInTouchContainer = styled.div`

    color: ${({theme}) => theme.colors.white};
    background-image: url('${bgMobile}');
    background-repeat: no-repeat;
    background-position-x: 43%;
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
    bottom: -180px;

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
        background-position-x: 10%;
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
`;

export const ContactNav = styled.nav`
`;

