import { ContextState } from "./context/InitState";

export interface ApplicationState {
    ContextState: ContextState,
  }
export interface IAction {
    type: string;
}
export interface ThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}