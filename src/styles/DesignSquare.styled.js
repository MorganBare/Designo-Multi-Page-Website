import styled from "styled-components";

export const DesignSquare = styled.div`
    height: 250px;
    width: 327px;
    background-blend-mode: overlay;
    border-radius: 15px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 0;

    h2 {
        font-size: ${({theme}) => theme.fontSize.h2};
        font-weight: ${({theme}) => theme.fontWeight.medium};
        letter-spacing: 1.4px;

    }

    p {
        font-size: ${({theme}) => theme.fontSize.button};
        letter-spacing: ${({theme}) => theme.letterSpacing.large};
    }

    &:hover:before {
        background: rgba(231,129,107, 0.7);
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: -1;
        border-radius: 15px;
    }

    @media screen and (min-width:760px) {
        width: 689px;
        height: 200px;
        gap: 1em;

        h2 {
            line-height: ${({theme}) => theme.lineHeight.large};
            letter-spacing: ${({theme}) => theme.letterSpacing.large};
        }
    }
`;