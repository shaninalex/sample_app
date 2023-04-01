import { createReducer } from "@ngrx/store";
import { LoginSuccessPayload } from "../auth.types";
import { AuthActions } from "./auth.action-types";
import { on } from "@ngrx/store";

export interface AuthState {
    tokens?: LoginSuccessPayload
    error?: Error
    loading: boolean
};


export const initialState: AuthState = {
    tokens: undefined,
    error: undefined,
    loading: false
}

export const authReducer = createReducer(
    initialState,
    on(AuthActions.authLoginStartAction, (state, action) => ({ ...state, loading: true })),
    on(AuthActions.authRegisterStartAction, (state, action) => ({ ...state, loading: true })),
    on(AuthActions.authLoginErrorAction, (state, action) => ({ ...state, loading: false, error: action.payload })),
    on(AuthActions.authLoginSuccessAction, (state, action) => ({ loading: false, error: undefined, tokens: action.payload })),
);
