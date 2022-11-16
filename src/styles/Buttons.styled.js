import styled from "styled-components";

export const DarkButton = styled.button`
    color: var(--black);
    text-transform: uppercase;
    background-color: var(--white);
    border: none;
    cursor: pointer;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: var(--medium);

    &:hover{
        background-color: var(--light-peach);
        color: var(--white);
        transition: all .4s ease-in-out;
    }
`;

export const LightButton = styled.button`
    color: var(--white);
    text-transform: uppercase;
    background-color: var(--peach);
    border: none;
    cursor: pointer;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: var(--medium);

    &:hover{
        background-color: var(--light-peach);
        transition: all .5s ease-in-out;
    }
`;