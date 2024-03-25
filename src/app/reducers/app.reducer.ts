import { ActionReducerMap } from '@ngrx/store';
import {authReducer} from './auth.reducer';
import {AuthState} from "./auth.reducer";

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<State, any> = {
  auth: authReducer,
};
