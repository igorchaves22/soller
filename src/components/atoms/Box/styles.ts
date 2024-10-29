import styled, { css } from "styled-components";
import { ThemeBreakpointKeyType, ThemeSpacingKeyType } from "~types";

export interface IStylesProps {
    $rowGap?: ThemeSpacingKeyType;
    $styleOnBigScreen?: {
        breakpoint: ThemeBreakpointKeyType;
        gridColumn?: "main" | "primary" | "secondary" | "tertiary" | "quaternary";
        align?: "start";
    };
}

export const Container = styled.section<IStylesProps>(
    ({ theme, $rowGap, $styleOnBigScreen }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: auto-flow / 100%;
        gap: ${theme.spacing[$rowGap ?? "md"]} ${theme.spacing.xxl};
        place-content: center;
        place-items: center;

        ${
            $styleOnBigScreen &&
            css`
                @media (width >= ${theme.screen.breakpoint[$styleOnBigScreen.breakpoint]}) {
                    ${
                        $styleOnBigScreen.align &&
                        css`
                            justify-content: start;
                            justify-items: start;
                        `
                    }
                    ${
                        $styleOnBigScreen.gridColumn === "main" &&
                        css`
                            grid-template-columns: 75%;
                        `
                    }
                    ${
                        $styleOnBigScreen.gridColumn === "primary" &&
                        css`
                            grid-template-columns: min(100%, 28rem);
                        `
                    }
                    ${
                        $styleOnBigScreen.gridColumn === "secondary" &&
                        css`
                            grid-template-columns: 0.5fr 1fr;
                            grid-template-areas: "child2 child1";

                            & > :nth-child(1) {
                                grid-area: child1;
                            }

                            & > :nth-child(2) {
                                grid-area: child2;
                            }
                        `
                    }
                    ${
                        $styleOnBigScreen.gridColumn === "tertiary" &&
                        css`
                            grid-template-columns: 1fr 0.5fr;
                        `
                    }
                    ${
                        $styleOnBigScreen.gridColumn === "quaternary" &&
                        css`
                            grid-template-columns: 0.75fr max-content;
                        `
                    }
                }
            `
        }
    `
);
