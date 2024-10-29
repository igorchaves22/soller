import styled, { css } from "styled-components";

export const Container = styled.header(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        padding: ${theme.spacing.md};
        display: grid;
        grid: min-content / min(100%, ${theme.screen.max_width});
        place-content: center;
    `
);

export const SubContainer = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(3, min-content) / 100%;
        gap: ${({ theme }) => theme.spacing.lg};
        place-items: center;

        @media (width >= ${theme.screen.breakpoint.md}) {
            grid: min-content / max-content 1fr max-content;
        }
    `
);

export const Text = styled.p(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        color: ${theme.color.primary};
        font: ${theme.font.sm};
        text-align: center;

        @media (width >= ${theme.screen.breakpoint.md}) {
            text-align: left;
        }
    `
);

export const List = styled.ul`
    width: 100%;
    height: min-content;
    list-style: none;
    display: grid;
    grid: min-content / repeat(3, max-content);
    column-gap: ${({ theme }) => theme.spacing.lg};
    place-content: center;
    place-items: center;
`;
