import {Action} from "@ngrx/store";
import {AuthModel} from "../models/AuthModel";

export enum AuthActionTypes {
  Login = '[AUTH] Login',
}
export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: AuthModel) {}
}
export type AuthActions = Login;
