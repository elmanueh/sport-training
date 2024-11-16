import { Routes } from '@angular/router';
import { HomePage } from '../pages/home.component';
import { CentrosDeportivosPage } from '../pages/centros-deportivos.component';
import { MisProgramasComponent } from '../pages/mis-programas.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'centros-deportivos',
    component: CentrosDeportivosPage,
  },
  {
    path: 'mis-programas',
    component: MisProgramasComponent,
  },
];
