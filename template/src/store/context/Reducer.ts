import { InitState, ContextState } from './InitState';
import { Reducer as ReduxReducer } from 'redux';
import { ActionType } from './ActionType';

import { ThunkAction, IAction } from 'store/configureAction';
interface Loading extends IAction {
    type: string,
    loading?: boolean;
}

interface ChangeConnectAction extends IAction {
    type: string
    isConnection: boolean,
}
export type KnowAction = Loading | ChangeConnectAction;

export const ActionCreators = {
    Loading: (): ThunkAction<KnowAction> => (dispatch, getState) => {
        const actionState = getState();

        dispatch({ type: ActionType.LOADING });

    },

}

export const Reducer: ReduxReducer<ContextState, KnowAction> =
    (state: ContextState | undefined, incomingAction: KnowAction): ContextState => {
        if (state == undefined) {
            return InitState;
        }
        let action;
        switch (incomingAction.type) {
            case ActionType.CHANGE_CONNECTION:
                action = incomingAction as ChangeConnectAction;

                return {
                    ...state,
                    isConnection: action.isConnection
                }
            default:
                return state;
        }

    }

