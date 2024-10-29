import styled, { css } from "styled-components";
import { assets } from "~utils";

export interface IStylesProps {
    $paddingTopVariant?: boolean;
    $bgColor?: "primary" | "secondary";
    $bgImage?: "1" | "2" | "3" | "4" | "5";
}

export const Container = styled.section<IStylesProps>(
    ({ theme, $paddingTopVariant, $bgColor, $bgImage }) => css`
        width: 100%;
        height: min-content;
        min-height: 100vh;
        padding: ${$paddingTopVariant ? "80%" : theme.spacing.xxl} ${theme.spacing.md} ${theme.spacing.xxl};
        display: grid;
        grid: min-content / min(100%, ${theme.screen.max_width});
        place-content: center;
        place-items: center;
        background-color: ${$bgColor ? ($bgColor === "primary" ? theme.color.secondary : $bgColor === "secondary" && theme.color.variant.primary) : theme.color.main} !important;

        ${
            $paddingTopVariant &&
            css`
                @media (width >= ${theme.screen.breakpoint.sm}) {
                    padding-top: ${theme.spacing.xxl};
                }
            `
        }
        ${
            $bgImage &&
            css`
                background: url(${assets[`background${$bgImage}`]}) center / 100% no-repeat;

                ${
                    $bgImage === "1" &&
                    css`
                        background-size: 80%;
                        background-position: top right;

                        @media (width >= ${theme.screen.breakpoint.sm}) {
                            background-size: 50%;
                        }

                        @media (width >= ${theme.screen.breakpoint.md}) {
                            background-size: 35%;
                        }
                    `
                }
                ${
                    $bgImage === "3" &&
                    css`
                        background-size: 70%;
                        background-position: center left;

                        @media (width >= ${theme.screen.breakpoint.tny}) {
                            background-size: 50%;
                        }

                        @media (width >= ${theme.screen.breakpoint.sm}) {
                            background-size: 35%;
                        }

                        @media (width >= ${theme.screen.breakpoint.md}) {
                            background-size: 25%;
                        }
                    `
                }
                ${
                    $bgImage === "4" &&
                    css`
                        background-size: 70%;
                        background-position: center right;

                        @media (width >= ${theme.screen.breakpoint.tny}) {
                            background-size: 50%;
                        }

                        @media (width >= ${theme.screen.breakpoint.sm}) {
                            background-size: 35%;
                        }

                        @media (width >= ${theme.screen.breakpoint.md}) {
                            background-size: 25%;
                        }
                    `
                }
                ${
                    $bgImage === "5" &&
                    css`
                        background-size: 70%;
                        background-position: top right;

                        @media (width >= ${theme.screen.breakpoint.sm}) {
                            background-size: 50%;
                        }

                        @media (width >= ${theme.screen.breakpoint.md}) {
                            background-size: 35%;
                        }
                    `
                }
            `
        }
    `
);
