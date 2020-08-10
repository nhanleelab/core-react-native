import { InitState as ContextState } from './context/InitState';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Reducer as ContextReducer } from './context/Reducer';

import { ApplicationState } from './configureAction';


const AllReducers = {
  ContextState: ContextReducer,
}
const AppState: ApplicationState = {
  ContextState: ContextState
};
const rootReducers = combineReducers({ ...AllReducers })
const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducers, AppState, middlewares);


export default store;
