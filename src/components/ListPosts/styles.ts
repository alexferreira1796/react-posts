import styled from "styled-components";

export const Container = styled.section`
    a {
        color: ${props => props.theme.colors.white};
    }
`;

export const List = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    padding: 20px;
    border-radius: 10px;
`;

export const Title = styled.p``;

export const Subtitle = styled.span``;