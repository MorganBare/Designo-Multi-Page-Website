import styled from "styled-components";

export const DesignCardContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 6rem 0;

    border-radius: 15px;

    h3 {
        letter-spacing: ${({theme}) => theme.letterSpacing.large};
        font-size: ${({theme}) => theme.fontSize.h3};
        color: ${({theme}) => theme.colors.peach};
        padding-bottom: 1rem;
    }

    @media screen and (min-width: 1440px) {
       flex-wrap: wrap;
       flex-direction: row;
       max-width: 1111px;
       margin: 7rem auto;
       gap: 1.5rem;
    }

`;

export const DesignCard = styled.div`
    width: 327px;
    height: 478px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.colors.cream};

    @media screen and (min-width: 760px) {
        width: 689px;
        height: 310px;
        display: flex;
    }

    @media screen and (min-width: 1440px) {
        flex-direction: column;
        width: 350px;
        height: 478px;
    }
`;

export const DesignCardContent = styled.div`
    padding: 2rem 1.5rem;

    @media screen and (min-width: 760px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
    }
`;

export const DesignCardImg = styled.img`
    display: block;
    height: 320px;
    border-radius: 15px 15px 0 0;

    @media screen and (min-width: 760px) {
        width: 339px;
        height: 310px;
        border-radius: 15px 0 0 15px;
    }

    @media screen and (min-width: 1440px) {
        width: 350px;
        height: 320px;
        border-radius: 15px 15px 0 0;
    }
`;

export const LeafImgWeb = styled.img`
    display: none;

    @media screen and (min-width:1440px) {
            display: block;
            z-index: -1;
            position: absolute;
            right: 32%;
            bottom: 68%;
        }
`;
