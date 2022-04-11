import { createReducer } from "@ngrx/store";

export interface IAppState {
  counter: number
}

export const appInitialState: IAppState = {
  counter: 2
}

export const appReducer = createReducer(
  appInitialState
);
