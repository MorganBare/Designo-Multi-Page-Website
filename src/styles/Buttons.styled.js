import styled from "styled-components";

export const DarkButton = styled.button`
    color: ${({theme}) => theme.colors.black};
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: ${({theme}) => theme.fontWeight.medium};
    font-size: ${({theme}) => theme.fontSize.button};
    padding: 17px 18.5px;

    &:hover{
        background-color: ${({theme}) => theme.colors.lightPeach};
        color: ${({theme}) => theme.colors.white};
        transition: all .4s ease-in-out;
    }
`;

export const LightButton = styled.button`
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
    background-color: ${({theme}) => theme.colors.peach};
    border: none;
    cursor: pointer;
    border-radius: 8px;
    letter-spacing: 1px;
    font-weight: ${({theme}) => theme.fontWeight.medium};
    font-size: ${({theme}) => theme.fontSize.button};
    padding: 17px 18.5px;
    z-index: 100;

    &:hover{
        background-color: ${({theme}) => theme.colors.lightPeach};
        transition: all .5s ease-in-out;
    }
`;