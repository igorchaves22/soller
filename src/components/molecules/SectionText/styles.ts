import styled, { css } from "styled-components";
import { ThemeBreakpointKeyType, ThemeColorKeyType, ThemeFontKeyType } from "~types";

export interface IStylesProps {
    $color?: ThemeColorKeyType;
    $font?: ThemeFontKeyType;
    $styleOnBigScreen?: {
        breakpoint: ThemeBreakpointKeyType;
        textAlign?: "left";
    };
}

export const Text = styled.p<IStylesProps>(
    ({ theme, $color, $font, $styleOnBigScreen }) => css`
        width: 100%;
        height: min-content;
        color: ${theme.color[$color ?? "primary"]};
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
