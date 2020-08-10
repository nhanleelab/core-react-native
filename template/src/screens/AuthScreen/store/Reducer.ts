

import { ActionType } from './ActionType';

import { client } from 'api/client';
import { IState } from './InitState';



interface LoadingAction
{
    type:string,
}
interface LoadedAction {
    type: string,
    loaiTS?: any,
    dotTS?: any
}

interface RequestItemsAction {
    type: string,
    dataType: any
}
interface ReceivedItemsAction {
    type: string,
    dataType: string,
    items: any,
}
interface RequestItemAction {
    type: string,
    dataType: string,
}
type KnownAction = RequestItemsAction | ReceivedItemsAction | RequestItemAction | LoadedAction;


export const ActionCreators = {
    Loading: (dispatch: React.Dispatch<KnownAction>) => {
      
      

    },

}
export const reducer = (state: IState, incomingAction: KnownAction): IState => {
    let action
    switch (incomingAction.type) {
        case ActionType.LOGIN:
            action = incomingAction as LoadedAction
            return {
                ...state,
              


            };
            case ActionType.LOGIN:
            action = incomingAction as LoadedAction
            return {
                ...state,
               

            }

        default:
            return state
    }
}

