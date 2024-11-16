import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { InstalacionCardComponent } from '../components/instalacion-card.component';
import { centrosDeportivos } from '../consts/centro-deportivo';
import { InstalacionDeportiva } from '../types/centro-deportivo';

@Component({
  selector: 'instalaciones-page',
  standalone: true,
  imports: [PaginatorModule, InstalacionCardComponent],
  template: `
    <div class="flex flex-column">
      <p class="tittle-page flex justify-content-center">
        FUTURAS INSTALACIONES ACTIVIDADES
      </p>

      <div class="flex flex-column gap-5">
        @for(i of instalaciones; track i.id) {
        <instalacion-card
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
export class InstalacionesPage {
  instalaciones: InstalacionDeportiva[] = [];

  @Input() set id(id: any) {
    this.instalaciones =
      centrosDeportivos.find((cd) => cd.id == id)?.instalaciones || [];
  }
}
