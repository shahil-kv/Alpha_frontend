import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  // common routes
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then((c) => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent),
  },

  //administration
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.routes').then((routes) => routes.AdminRoute),
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.routes').then((routes) => routes.UserRoute),
  },

  //user full access roles
];
