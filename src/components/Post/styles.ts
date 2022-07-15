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
  margin-bottom: 20px;
  transition: all 300ms;

  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 1.8em;
  line-height: 1.2em;
  margin-bottom: 10px;
`;

export const Subtitle = styled.span`
  font-size: 1.2em;
  color: #bfbdbd;
`;
