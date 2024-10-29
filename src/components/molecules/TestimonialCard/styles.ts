import styled, { css } from "styled-components";
import { ThemeFontKeyType } from "~types";

interface IStylesProps {
    $font?: ThemeFontKeyType;
}

export const Box = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(3, min-content) / max-content 1fr;
        grid-template-areas:
            "child1 child2"
            "child1 child3";
        column-gap: ${theme.spacing.md};
        align-items: center;

        & > :nth-child(1) {
            grid-area: child1;
        }

        & > :nth-child(2) {
            grid-area: child2;
        }

        & > :nth-child(3) {
            grid-area: child3;
        }
    `
);

export const Text = styled.p<Pick<IStylesProps, "$font">>(
    ({ theme, $font }) => css`
        width: 100%;
        height: min-content;
        color: ${theme.color.primary};
        font: ${theme.font[$font ?? "md"]};
        text-align: left;
    `
);

export const Image = styled.img`
    width: 4rem;
    height: 4rem;
`;
