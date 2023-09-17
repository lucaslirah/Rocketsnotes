import styled from "styled-components"

export const Container = styled.div`
    >header{
        width: 100%;
        height: 144px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        padding: 0 144px;

        svg{
            font-size: 24px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};       
        }
    }
`
export const Form = styled.form`
    width: 340px;
    margin: 30px auto;
`