import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle(
    ({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                width: ${theme.scrollBarSize};
                background-color: ${theme.color.main};
            }

            &::-webkit-scrollbar-thumb {
                border-radius: ${theme.border.radius.secondary};
                background-color: ${theme.color.secondary};
            }
        }
    `
);
