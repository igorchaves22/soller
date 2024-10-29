import { Headphones } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export const Container = styled.header(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        padding: ${theme.spacing.md};
        position: absolute;
        inset: 0 0 auto 0;
        z-index: 10;
    `
);

export const SubContainer = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: min-content;

        @media (width >= ${theme.screen.breakpoint.md}) {
            display: grid;
            grid: min-content / repeat(2, max-content);
            column-gap: ${({ theme }) => theme.spacing.md};
            justify-content: space-between;
            align-items: center;
        }
    `
);

export const Box = styled.section`
    width: 100%;
    height: min-content;
    display: none;
    grid: min-content / repeat(3, max-content);
    column-gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;

    @media (width >= ${({ theme }) => theme.screen.breakpoint.md}) {
        display: grid;
    }
`;

export const Icon = styled(Headphones)(
    ({ theme }) => css`
        display: block;
        color: ${theme.color.primary};
        font-size: ${theme.icon.primary};
    `
);

export const Text = styled.section(
    ({ theme }) => css`
        color: ${theme.color.primary};
        font: ${theme.font.sm};
    `
);
