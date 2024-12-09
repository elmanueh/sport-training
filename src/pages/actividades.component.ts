import { Component, Input } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { centrosDeportivos } from '@/consts/centro-deportivo';
import { TypeCard } from '@/types/card';
import { ActividadDeportiva, CentroDeportivo } from '@/types/centro-deportivo';
import { LargeCardComponent } from '@/components/cards/large-card.component';

@Component({
  selector: 'actividades-page',
  standalone: true,
  imports: [PaginatorModule, LargeCardComponent],
  template: `
    <div class="flex flex-col">
      <p class="title-page text-center">Actividades Deportivas</p>
      <p class="subtitle-page text-center">
        {{ centroDeportivo?.titulo }}
      </p>

      <div class="flex flex-col gap-5">
        @for(a of actividades.slice(first, first + rows); track a.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="a"
          class="flex justify-center"
        />
        }
      </div>

      <div class="card flex justify-center mt-10">
        <p-paginator
          (onPageChange)="onPageChange($event)"
          [first]="first"
          [rows]="rows"
          [totalRecords]="actividades.length"
          [rowsPerPageOptions]="[3, 5, 10]"
        />
      </div>
    </div>
  `,
})
export class ActividadesPage {
  actividades: ActividadDeportiva[] = [];
  centroDeportivo: CentroDeportivo | undefined;
  typeCard = TypeCard.StarsButton;

  @Input() set id(id: any) {
    this.centroDeportivo = centrosDeportivos.find((cd) => cd.id == id);
    this.actividades = this.centroDeportivo?.actividades || [];
  }

  first: number = 0;
  rows: number = 3;
  page: number = 0;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    this.page = event.page ?? this.page;
  }
}
