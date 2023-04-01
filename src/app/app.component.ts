import { Component, OnInit } from '@angular/core';
import { AuthState } from './auth/store/auth.reducer';
import { Store } from '@ngrx/store';
import { authLoginSuccessAction } from './auth/store/auth.actions';
import { LoginPayload, LoginSuccessPayload } from './auth/auth.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private store: Store<AuthState>) { }

    ngOnInit(): void {
        if (
            localStorage.getItem("access_token") &&
            localStorage.getItem("refresh_token") &&
            localStorage.getItem("exp")
        ) {
            const login: LoginSuccessPayload = {
                access_token: String(localStorage.getItem("access_token")),
                refresh_token: String(localStorage.getItem("refresh_token")),
                exp: Number(localStorage.getItem("exp"))
            }
            this.store.dispatch(authLoginSuccessAction({ payload: login }));
        }
    }
}
