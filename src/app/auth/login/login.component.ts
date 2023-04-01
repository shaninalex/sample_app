import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';
import { authLoginStartAction } from '../store/auth.actions';
import { LoginPayload, LoginSuccessPayload } from '../auth.types';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private store: Store<AuthState>) {}

    login() {
        const payload: LoginPayload = {
            email: "test@test.com",
            password: "test"
        }
        this.store.dispatch(authLoginStartAction({ payload: payload }));
    }
}
