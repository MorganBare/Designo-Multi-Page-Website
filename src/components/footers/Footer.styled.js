import styled from "styled-components";

import bgMobile from "../../assets/shared/desktop/bg-pattern-call-to-action.svg"

export const FooterContainer = styled.div`
    position: relative;

`;

export const GetInTouchContainer = styled.div`
    background-image: url('${bgMobile}');
    background-repeat: no-repeat;
    background-position-x: 45%;
    background-position-y: 45%;
    background-color: ${({theme}) => theme.colors.peach};
    text-align: center;
    height: 379px;
    width: clamp(327px, 90%, 1111px);
    border-radius: 15px;

    position: absolute;
    right: 0;
    left: 0;
    top: -80%;
    margin: auto;

    h2 {
        font-size: ${({theme}) => theme.fontSize.h2};
        font-weight: ${({theme}) => theme.fontWeight.medium}
    }

    p {
        font-size: ${({theme}) => theme.fontSize.body};
    }

    @media only screen and (min-width: 767px) { 
        height: 350px;
    }

    @media only screen and (min-width: 1024px) { 
        height: 292px;
    }

`;

export const ContactInfoContainer = styled.div`
    color: white;
    background-color: black;
    font-size: ${({theme}) => theme.fontSize.body};
`;

export const ContactNav = styled.nav`
`;

