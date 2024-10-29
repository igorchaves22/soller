import styled, { css } from "styled-components";
import { ThemeBreakpointKeyType, ThemeFontKeyType } from "~types";

export interface IStylesProps {
    $font?: ThemeFontKeyType;
    $styleOnBigScreen?: {
        breakpoint: ThemeBreakpointKeyType;
        textAlign?: "left";
    };
}

export const Container = styled.ul(
    ({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / repeat(2, 1fr);
        gap: ${theme.spacing.xl} ${theme.spacing.xxl};
        place-content: center;
        place-items: center;
    `
);

export const Item = styled.li`
    width: 100%;
    height: 100%;
    display: grid;
    grid: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.sm};
`;

export const Text = styled.p<IStylesProps>(
    ({ theme, $font, $styleOnBigScreen }) => css`
        width: 100%;
        height: min-content;
        color: ${theme.color.primary};
        font: ${theme.font[$font ?? "md"]};
        text-align: center;

        ${
            $styleOnBigScreen &&
            css`
                @media (width >= ${theme.screen.breakpoint[$styleOnBigScreen.breakpoint]}) {
                    ${
                        $styleOnBigScreen.textAlign &&
                        css`
                            text-align: ${$styleOnBigScreen.textAlign};
                        `
                    }
                }
            `
        }
    `
);
