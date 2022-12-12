import styled from "styled-components";

export const DesignSquare = styled.div`
    height: 250px;
    width: 327px;
    background-blend-mode: overlay;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 0;

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
`;