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
`;

export const DesignCard = styled.div`
    width: 327px;
    height: 478px;
    border-radius: 15px;
    background-color: ${({theme}) => theme.colors.cream};
`;

export const DesignCardContent = styled.div`
    padding: 2rem 1.5rem;
`;

export const DesignCardImg = styled.img`
    display: block;
    height: 320px;
    border-radius: 15px 15px 0 0;
`;

