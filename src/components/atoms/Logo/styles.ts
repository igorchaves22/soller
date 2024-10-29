import styled, { css } from "styled-components";

export const Container = styled.figure`
    width: max-content;
    height: min-content;
    display: grid;
    grid: min-content / repeat(2, min-content);
    column-gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;
`;

export const Image = styled.img`
    width: 3.5rem;
    height: 3.5rem;
`;

export const Text = styled.figcaption(
    ({ theme }) => css`
        color: ${theme.primary};
        font: ${theme.font.xl};
    `
);
