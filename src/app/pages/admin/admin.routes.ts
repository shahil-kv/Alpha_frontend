import { Routes } from '@angular/router';

export const AdminRoute: Routes = [
  {
    path: 'admin-home',
    loadComponent: () => import('./admin.component').then((c) => c.AdminComponent),
  },
  {
    path: 'system-settings',
    loadComponent: () =>
      import('./system-settings/system-settings.component').then((c) => c.SystemSettingsComponent),
  },
];
