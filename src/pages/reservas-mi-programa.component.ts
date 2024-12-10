import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Reserva } from '@/types/programa-entrenamiento';
import { TypeCard } from '@/types/card';
import { programaEntrenamiento } from '../consts/programa-entrenamiento';
import { LargeCardComponent } from '@/components/cards/large-card.component';

@Component({
  selector: 'reservas-page',
  standalone: true,
  imports: [PaginatorModule, ButtonModule, LargeCardComponent, RouterModule],
  template: `
    <div class="flex flex-col">
      <div class="flex justify-between">
        <div class="flex flex-col text-center justify-start pt-12 w-2/12">
          <a routerLink="/mis-programas">
            <p-button label="Volver atras" raised></p-button>
          </a>
          <label class="pt-4 text-2xl"> {{ programaTitulo }} </label>
          <label class="text-xl font-bold"
            >PRECIO: <span class="text-primary"> 50€</span></label
          >
        </div>
        <h1 class="title-page text-center">Visualiza la Planificación</h1>
        <div class="flex flex-col justify-center text-center font-bold w-2/12">
          <p class="text-primary pb-2 text-lg">Entrenador</p>
          <div class="flex justify-center pb-2">
            <img
              class="rounded-xl w-20"
              [src]="entrenador"
              alt="centro-deportivo-1"
            />
          </div>
          <p>Pablo Peris Solano</p>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        @for(reserva of reservas.slice(first, first + rows); track reserva.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="reserva"
          class="flex justify-center"
        />
        }
      </div>

      <div class="card flex justify-center mt-10">
        <p-paginator
          (onPageChange)="onPageChange($event)"
          [first]="first"
          [rows]="rows"
          [totalRecords]="reservas.length"
          [rowsPerPageOptions]="[3, 5, 10]"
        />
      </div>
    </div>
  `,
})
export class ReservasMiProgramaPage {
  reservas: Reserva[] = [];
  programaTitulo = '';
  typeCard = TypeCard.StarsButton;

  @Input() set id(id: any) {
    this.reservas =
      programaEntrenamiento.find((cd) => cd.id == id)?.reservas || [];
    this.programaTitulo =
      programaEntrenamiento.find((cd) => cd.id == id)?.titulo || '';
  }
  entrenador: string =
    'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1';

  first: number = 0;
  rows: number = 3;
  page: number = 0;

  onPageChange(event: PaginatorState) {
    console.log(event);
    this.first = event.first ?? this.first;
    this.rows = event.rows ?? this.rows;
    this.page = event.page ?? this.page;
  }
}
