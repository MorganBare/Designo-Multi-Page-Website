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
    background-color: var(--peach);
    text-align: center;
    height: 379px;
    width: 327px;
    border-radius: 15px;
`;

export const ContactInfoContainer = styled.div`

    background-color: black;

`;

export const ContactNav = styled.nav`
`;

