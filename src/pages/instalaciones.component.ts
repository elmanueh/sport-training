import { Component, Input } from '@angular/core';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { centrosDeportivos } from '@/consts/centro-deportivo';
import {
  CentroDeportivo,
  InstalacionDeportiva,
} from '../types/centro-deportivo';
import { LargeCardComponent } from '../components/cards/large-card.component';
import { TypeLargeCard } from '../types/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from '../components/back-button.component';

@Component({
  selector: 'instalaciones-page',
  standalone: true,
  imports: [
    PaginatorModule,
    LargeCardComponent,
    ButtonModule,
    RouterModule,
    BackButtonComponent,
  ],
  template: `
    <div class="flex flex-col">
      <div class="flex justify-between">
        <back-button
          [route]="'/centros-deportivos'"
          class="flex w-2/12 justify-center items-center"
        />

        <div class="flex flex-col text-center">
          <p class="title-page">Instalaciones Deportivas</p>
          <p class="subtitle-page">{{ centroDeportivo?.titulo }}</p>
        </div>

        <div class="w-2/12"></div>
      </div>

      <div class="flex flex-col gap-5">
        @for(i of instalaciones.slice(first, first + rows); track i.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="i"
          class="flex justify-center"
        />
        }
      </div>

      <div class="card flex justify-center mt-10">
        <p-paginator
          (onPageChange)="onPageChange($event)"
          [first]="first"
          [rows]="rows"
          [totalRecords]="instalaciones.length"
          [rowsPerPageOptions]="[3, 5, 10]"
        />
      </div>
    </div>
  `,
})
export class InstalacionesPage {
  instalaciones: InstalacionDeportiva[] = [];
  centroDeportivo: CentroDeportivo | undefined;
  typeCard = TypeLargeCard.StarsButton;

  @Input() set id(id: any) {
    this.centroDeportivo = centrosDeportivos.find((cd) => cd.id == id);
    this.instalaciones = this.centroDeportivo?.instalaciones || [];
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
