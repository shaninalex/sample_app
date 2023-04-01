import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { AuthState } from 'src/app/auth/store/auth.reducer';
import { isLoggedIn } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    loggedIn?: boolean;
    constructor(private store: Store<AuthState>) {
        this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => this.loggedIn = loggedIn)
        ).subscribe();
    }
}
