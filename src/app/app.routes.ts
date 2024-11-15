import { Routes } from '@angular/router';
import { HomePage } from '../pages/home.component';
import { CentrosDeportivosPage } from '../pages/centros-deportivos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'centros-deportivos',
    component: CentrosDeportivosPage,
  },
];
