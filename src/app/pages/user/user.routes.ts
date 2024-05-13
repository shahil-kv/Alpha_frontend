import { Routes } from '@angular/router';

export const UserRoute: Routes = [
  {
    path: 'user-home',
    loadComponent: () => import('./user.component').then((c) => c.UserComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
  },
];
