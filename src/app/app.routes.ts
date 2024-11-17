import { Routes } from '@angular/router';
import { HomePage } from '../pages/home.component';
import { CentrosDeportivosPage } from '../pages/centros-deportivos.component';
import { MisProgramasPage } from '../pages/mis-programas.component';
import { InstalacionesPage } from '../pages/instalaciones.component';
import { LoginPage } from '../pages/login.component';
import { ReservasMiProgramaPage } from '../pages/reservas-mi-programa.component';
import { ActividadesPage } from '../pages/actividades.component';
import { ValorarPage } from '../pages/valorar.component';

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
    component: MisProgramasPage,
  },
  {
    path: 'mis-programas/:id/reservas',
    component: ReservasMiProgramaPage,
  },
  {
    path: 'mis-programas/:id/valorar',
    component: ValorarPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
];
