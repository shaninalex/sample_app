import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/store/auth.reducer';
import { authLogoutAction } from '../auth/store/auth.actions';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [
    ]
})
export class DashboardComponent {

    constructor(
        private router: Router,
        private store: Store<AuthState>
    ) {
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("exp");
        this.store.dispatch(authLogoutAction());
        this.router.navigate(['/auth']);
    }
}
