import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: min-content;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    background-color: ${({ theme }) => theme.color.main};
`;