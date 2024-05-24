import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  // common routes
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.component').then((c) => c.RegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.component').then((c) => c.LoginComponent),
  },

  // admin routes

  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./pages/admin/admin.routes').then((c) => c.AdminRoutes),
  },

  // user routes
  {
    path: 'user',
    component: UserComponent,
    loadChildren: () => import('./pages/user/user.routes').then((c) => c.UserRoutes),
  },
];
