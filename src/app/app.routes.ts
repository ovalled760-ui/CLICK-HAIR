import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { clickcomponent } from './click/click.component';
import { authGuard } from './auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'click', component: clickcomponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];
