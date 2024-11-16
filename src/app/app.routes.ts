import { Routes } from '@angular/router';
import { HomePage } from '../pages/home.component';
import { CentrosDeportivosPage } from '../pages/centros-deportivos.component';
import { MisProgramasComponent } from '../pages/mis-programas.component';
import { InstalacionesPage } from '../pages/instalaciones.component';
import { LoginPage } from '../pages/login.component';
import { ActividadesPage } from '../pages/actividades.component';

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
    path: 'centros-deportivos/:id/instalaciones',
    component: InstalacionesPage,
  },
  {
    path: 'centros-deportivos/:id/actividades',
    component: ActividadesPage,
  },
  {
    path: 'mis-programas',
    component: MisProgramasComponent,
  },
  {
    path: 'login',
    component: LoginPage,
  },
];
