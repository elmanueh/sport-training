import { Routes } from '@angular/router';
import { HomePage } from '../pages/home.component';
import { CentrosDeportivosPage } from '../pages/centros-deportivos.component';
import { MisProgramasComponent } from '../pages/mis-programas.component';
import { InstalacionesActividadesPage } from '../pages/instalaciones-actividades.component';

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
  {
    path: 'centros-deportivos/instalaciones',
    component: InstalacionesActividadesPage,
  },
  {
    path: 'centros-deportivos/actividades',
    component: InstalacionesActividadesPage,
  },
];
