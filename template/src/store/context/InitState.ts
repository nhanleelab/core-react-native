import { Theme } from "utils/Theme";

export interface ContextState {
    isConnection: boolean,
    version?: string,
    theme?: any,
    locale?: string,
    isLoggedIn?: boolean,
    displayIntro?: boolean,
    displaySplash?: boolean
}
export const InitState: ContextState =
{
    isConnection: true,
    theme: Theme.DARK,
    isLoggedIn: true,
    displaySplash: true,
    locale: 'VN'

}