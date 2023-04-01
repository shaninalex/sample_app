import { Component } from '@angular/core';
import { authRegisterStartAction } from '../store/auth.actions';
import { RegisterPayload } from '../auth.types';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.reducer';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor(private store: Store<AuthState>) {}

    register() {
        const payload: RegisterPayload = {
            email: "test@test.com",
            username: "hello",
            password: "test",
            password_confirm: "test"
        }
        this.store.dispatch(authRegisterStartAction({ payload: payload }));
    }
}
