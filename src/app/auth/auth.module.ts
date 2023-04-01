import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth.reducer';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { HttpClientModule } from '@angular/common/http';


const routes: Route[] = [
    { path: "", component: LoginComponent},
    { path: "register", component: RegisterComponent}
];


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature("auth", authReducer),
        EffectsModule.forFeature([AuthEffects])
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule { }
