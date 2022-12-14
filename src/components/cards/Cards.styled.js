import styled from "styled-components";

export const DesignCardContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 15px;

    h3 {
        letter-spacing: ${({theme}) => theme.letterSpacing.large};
        font-size: ${({theme}) => theme.fontSize.h3};
        color: ${({theme}) => theme.colors.peach};
    }
`;

export const DesignCard = styled.div`
    width: 327px;
    height: 478px;
`;

export const DesignCardContent = styled.div``;

export const DesignCardImg = styled.img`
    display: block;
    height: 320px;
    border-radius: 15px 15px 0 0;
`;

