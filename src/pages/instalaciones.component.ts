import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { centrosDeportivos } from '../consts/centro-deportivo';
import {
  CentroDeportivo,
  InstalacionDeportiva,
} from '../types/centro-deportivo';
import { LargeCardComponent } from '../components/cards/large-card.component';
import { TypeCard } from '../types/card';

@Component({
  selector: 'instalaciones-page',
  standalone: true,
  imports: [PaginatorModule, LargeCardComponent],
  template: `
    <div class="flex flex-column">
      <p class="tittle-page flex justify-content-center">
        Instalaciones Deportivas
      </p>
      <p class="flex justify-content-center text-3xl">
        {{ centroDeportivo?.titulo }}
      </p>

      <div class="flex flex-column gap-5">
        @for(i of instalaciones; track i.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="i"
          class="flex justify-content-center"
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
  centroDeportivo: CentroDeportivo | undefined;
  typeCard = TypeCard.StarsButton;

  @Input() set id(id: any) {
    this.centroDeportivo = centrosDeportivos.find((cd) => cd.id == id);
    this.instalaciones = this.centroDeportivo?.instalaciones || [];
  }
}
