import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'life-cycle',
    loadComponent: () =>
      import('./component-lifecycle/component-lifecycle.component').then(
        ({ LifecycleComponent: lifecycleComponent }) => lifecycleComponent
      ),
  },
];
