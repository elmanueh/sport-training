import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { InstalacionDeportiva } from '../types/centro-deportivo';
import { InstalacionesActividadesCardComponent} from "../components/instalacion-actividades-card.component";

@Component({
  selector: 'instalaciones-actividades-page',
  standalone: true,
  imports: [PaginatorModule, InstalacionesActividadesCardComponent],
  template: `
    <div class="flex flex-column">
      <p class="tittle_page flex justify-content-center">FUTURAS INSTALACIONES ACTIVIDADES</p>

      <div class="flex flex-column gap-5">
        @for(i of instalaciones; track i.id) {
        <instalaciones-actividades-card
          class="flex justify-content-center"
          [instalacion]="i"
        />
        }
      </div>

      <div class="card flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </div>
  `,
})
export class InstalacionesActividadesPage {
  instalaciones: InstalacionDeportiva[] = [
    {
      id: 1,
      titulo: 'Instalación 1',
      descripcion: 'Descripción de la instalación 1',
      categoria: 'Categoria 1',
      imagen: 'https://via.placeholder.com/150',
      valoracion: 4,
    },
    {
      id: 2,
      titulo: 'Instalación 2',
      descripcion: 'Descripción de la instalación 2',
      categoria: 'Categoria 2',
      imagen: 'https://via.placeholder.com/150',
      valoracion: 5,
    },
    {
      id: 3,
      titulo: 'Instalación 3',
      descripcion: 'Descripción de la instalación 3',
      categoria: 'Categoria 3',
      imagen: 'https://via.placeholder.com/150',
      valoracion: 3,
    },
  ];  
}
