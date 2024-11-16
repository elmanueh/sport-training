import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { CentroDeportivoCardComponent } from '../components/cards/centro-deportivo-card.component';
import { centrosDeportivos } from '../consts/centro-deportivo';

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [CentroDeportivoCardComponent, PaginatorModule],
  template: `
    <div class="flex flex-column">
      <p class="tittle-page flex justify-content-center">Centros Deportivos</p>

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
  centrosDeportivos = centrosDeportivos;
}
