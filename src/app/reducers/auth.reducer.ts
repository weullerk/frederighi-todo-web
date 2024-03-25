import {AuthModel} from "../models/AuthModel";
import {AuthActions, AuthActionTypes} from "../actions/auth.action";

export interface AuthState {
  access_token: string;
  token_type: string;
  expires_in: number;
}

const initialState: AuthState = {
  access_token: '',
  token_type: '',
  expires_in: 0
}

export function authReducer(state = initialState, action: AuthActions) : AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        access_token: action.payload.access_token,
        token_type: action.payload.token_type,
        expires_in: action.payload.expires_in,
      }
    default: return state;
  }
}
