import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { CentroDeportivoCardComponent } from '../components/centro-deportivo-card.component';
import { CentroDeportivo } from '../interfaces/centro-deportivo';

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [CentroDeportivoCardComponent, PaginatorModule],
  template: `
    <div class="flex flex-column">
      <p class="tittle_page flex justify-content-center">CENTROS DEPORTIVOS</p>

      <div class="flex flex-column gap-5">
        @for(cd of centrosDeportivos; track cd.id) {
        <centros-deportivos-card
          class="flex justify-content-center"
          [centroDeportivo]="cd"
        />
        }
      </div>

      <div class="card flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </div>
  `,
})
export class CentrosDeportivosPage {
  centrosDeportivos: CentroDeportivo[] = [
    {
      id: 1,
      titulo: 'Centro Deportivo 1',
      descripcion: 'Descripción del centro deportivo 1',
      imagen: 'https://github.com/elmanueh.png',
      instalaciones: [
        {
          id: 1,
          titulo: 'Instalación 1',
          descripcion: 'Descripción de la instalación 1',
          categoria: 'Categoria 1',
          imagen: 'https://via.placeholder.com/150',
          valoracion: 4,
        },
      ],
      actividades: [
        {
          id: 1,
          titulo: 'Actividad 1',
          descripcion: 'Descripción de la actividad 1',
          categoria: 'Categoria 1',
          imagen: 'https://via.placeholder.com/150',
          valoracion: 4,
        },
      ],
    },
    {
      id: 2,
      titulo: 'Centro Deportivo 2',
      descripcion: 'Descripción del centro deportivo 2',
      imagen: 'https://github.com/elmanueh.png',
      instalaciones: [],
      actividades: [],
    },
  ];
}
