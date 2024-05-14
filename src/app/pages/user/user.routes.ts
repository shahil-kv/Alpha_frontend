import { Routes } from '@angular/router';

export const UserRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then((c) => c.CartComponent),
  },
];
