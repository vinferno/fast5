import { Action, createReducer, on } from '@ngrx/store';


export const usersFeatureKey = 'users';

export interface State {
  users: any[];
}

export const initialState: State = {
  users: [],
};

export const reducer = createReducer(
  initialState,

);
