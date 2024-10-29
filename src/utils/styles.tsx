import { ThemeProvider } from "styled-components";
import { GlobalStyles, themeValues } from "~styles";
import { IChildren } from "~types";

interface IGlobalStylesProviderProps extends IChildren {}

export function GlobalStylesProvider({ children }: IGlobalStylesProviderProps) {
    return (
        <ThemeProvider theme={themeValues}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
}
