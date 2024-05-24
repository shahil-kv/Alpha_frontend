import { Routes } from '@angular/router';

export const AdminRoutes: Routes = [
  {
    path: 'system-settings',
    loadComponent: () => import('./system-settings/system-settings.component').then((c) => c.SystemSettingsComponent),
  },
  {
    path: 'email-template',
    loadComponent: () => import('./email-template/email-template.component').then((c) => c.EmailTemplateComponent),
  },
];
