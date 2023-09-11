import styled from 'styled-components'

export const Container = styled.button`
    background: ${( { theme } ) => theme.COLORS.ORANGE};
    color: ${( { theme } ) => theme.COLORS.BACKGROUND_800};

    width: 100%;
    height: 56px;

    padding: 0 16px;
    border: none;
    margin-top: 16px;
    border-radius: 10px;

    font-weight: 500;
    
    transition: all 0.2s ease-in-out;

    &:disabled {
        opacity: 0.5;
    }
` 