import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoggedIn } from "./store/auth.selectors";
import { AuthState } from "./store/auth.reducer";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AuthState>,
                private route: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.route.navigateByUrl("/auth");
                }
            })
        )
    }
}