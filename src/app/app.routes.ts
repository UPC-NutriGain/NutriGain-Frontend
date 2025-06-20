import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./domains/user/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./domains/user/components/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./domains/user/components/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'rutinas',
    loadComponent: () =>
      import('./domains/fitness/components/rutinas/rutinas.component').then(m => m.RutinasComponent)
  },
  {
    path: 'rutinas-picker',
    loadComponent: () =>
      import('./domains/fitness/components/rutinas-picker/rutinas-picker.component').then(m => m.RutinasPickerComponent)
  },
  {
    path: 'nutricion',
    loadComponent: () =>
      import('./domains/nutrition/components/nutricion/nutricion.component').then(m => m.NutricionComponent)
  },
  {
    path: 'progreso',
    loadComponent: () =>
      import('./domains/fitness/components/progreso/progreso.component').then(m => m.ProgresoComponent)
  },
  {
    path: 'avatar',
    loadComponent: () =>
      import('./domains/gamification/components/avatar/avatar.component').then(m => m.AvatarComponent)
  },
  {
    path: 'retos',
    loadComponent: () =>
      import('./domains/gamification/components/retos/retos.component').then(m => m.RetosComponent)
  },
  {
    path: 'resumen',
    loadComponent: () =>
      import('./domains/user/components/resumen/resumen.component').then(m => m.ResumenComponent)
  }







];
