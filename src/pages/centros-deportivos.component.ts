import { Component } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TypeLargeCard } from '@/types/card';
import { centrosDeportivos } from '@/consts/centro-deportivo';
import { LargeCardComponent } from '@/components/cards/large-card.component';

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [PaginatorModule, LargeCardComponent],
  template: `
    <div class="flex flex-col">
      <p class="title-page text-center">Centros Deportivos</p>

      <div class="flex flex-col gap-5">
        @for(cd of centrosDeportivos.slice(first, first + rows); track cd.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="cd"
          class="flex justify-center"
        />
        }
      </div>

      <div class="card flex justify-center mt-10">
        <p-paginator
          (onPageChange)="onPageChange($event)"
          [first]="first"
          [rows]="rows"
          [totalRecords]="centrosDeportivos.length"
          [rowsPerPageOptions]="[3, 5, 10]"
        />
      </div>
    </div>
  `,
})
export class CentrosDeportivosPage {
  centrosDeportivos = centrosDeportivos;
  typeCard = TypeLargeCard.MultipleButton;

  first: number = 0;
  rows: number = 3;
  page: number = 0;

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    this.page = event.page ?? this.page;
  }
}
