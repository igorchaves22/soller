import { themeValues } from "~styles";

export type ThemeValuesType = typeof themeValues;
export type ThemeBreakpointKeyType = keyof ThemeValuesType["screen"]["breakpoint"];
export type ThemeSpacingKeyType = keyof ThemeValuesType["spacing"];
export type ThemeColorKeyType = keyof Omit<ThemeValuesType["color"], "variant">;
export type ThemeFontKeyType = keyof ThemeValuesType["font"];

export interface ITheme extends ThemeValuesType {}
