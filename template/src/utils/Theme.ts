
export enum ThemeStyle {
    LIGHT = 'LIGHT',
    DARKK = 'DARK'
}
export interface colorsType {
    white?: string,
    black?: string,
    iron?: string,
    green?: string,
    blue?: string,
};
export interface fontFamilyType {
    medium?: string,
    regular?: string,
    bold?: string,
    italic?: string
};
export interface fontSizeType {
    default?: number,
}

export interface ITheme {

    background?: string,
    colors?: colorsType,
    fontFamily?: fontFamilyType,
    fontSize?: fontSizeType

}
type ThemeType = { [key in ThemeStyle]: ITheme };
export const Theme: ThemeType = {
    LIGHT: {

    },
    DARK: {

    }

}