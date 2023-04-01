import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { AuthService } from "../auth.service";
import { LoginSuccessPayload, RegisterSuccessPayload } from "../auth.types";
import { AuthActions } from "./auth.action-types";

@Injectable()
export class AuthEffects {

    authStart$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authLoginStartAction),
        exhaustMap(action =>
            this.authService.login(action.payload).pipe(
                map(access => AuthActions.authLoginSuccessAction({ payload: <LoginSuccessPayload>access })),
                catchError(error => of(AuthActions.authLoginErrorAction({ payload: error })))
            )
        )
    ));

    authSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authLoginSuccessAction),
        tap(result => {
            localStorage.setItem("access_token", result.payload.token_access);
            localStorage.setItem("token_refresh", result.payload.token_refresh);
            this.router.navigate(['/app']);
        })
    ), { dispatch: false});

    registerStart$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authRegisterStartAction),
        exhaustMap(action =>
            this.authService.register(action.payload).pipe(
                map(() => AuthActions.authRegisterSuccessAction()),
                catchError(error => of(AuthActions.authRegisterErrorAction({ payload: error })))
            )
        )
    ));

    registerSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActions.authRegisterSuccessAction),
        tap(result => {
            // redirect to login page
            this.router.navigate(['/auth']);
        })
    ), { dispatch: false});

    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router
    ) { }
}
