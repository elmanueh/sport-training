import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
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
        <div class="flex pl-7 pt-4 flex-col">
          <a class="p-button flex justify-center" routerLink="/mis-programas"
            >Volver atras</a
          >

          <label class="flex justify-center pt-4 text-2xl">
            {{ programaTitulo }}
          </label>
          <label class="flex justify-center text-yellow-400 text-xl"
            >PRECIO: 50€</label
          >
        </div>
        <p class="tittle-page flex justify-center">
          VISUALIZA LA PLANIFICACIÓN
        </p>
        <div class="flex pr-7 justify-center">
          <div class="w-20">
            <label
              class="font-bold flex justify-center text-yellow-400 pt-4 pb-2"
              >ENTRENADOR</label
            >
            <div class="flex justify-center pb-2">
              <img
                [src]="entrenador"
                alt="centro-deportivo-1"
                class="rounded-xl w-16"
              />
            </div>
            <label class="font-bold flex justify-center text-white text-s">
              Pablo Peris Solano
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="w-7">
          <p class="font-italic font-bold">Proximas Reservas</p>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        @for(reserva of reservasProximas; track reserva.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="reserva"
          class="flex justify-center"
        />
        }
      </div>

      <div class="card pb-8 flex justify-center mt-6">
        <p-paginator
          (onPageChange)="onPageChange($event)"
          [first]="indicePaginator"
          [rows]="columnasPaginator"
          [totalRecords]="reservas.length"
          [showPageLinks]="true"
        />
      </div>
    </div>
  `,
})
export class ReservasMiProgramaPage {
  reservas: Reserva[] = [];
  reservasProximas: Reserva[] = [];
  programaTitulo = '';
  typeCard = TypeCard.StarsButton;

  indicePaginator: number = 0;
  columnasPaginator: number = 4;

  @Input() set id(id: any) {
    this.reservas =
      programaEntrenamiento.find((cd) => cd.id == id)?.reservas || [];
    this.reservasProximas = this.reservas.slice(
      this.indicePaginator,
      this.indicePaginator + this.columnasPaginator
    );
    this.programaTitulo =
      programaEntrenamiento.find((cd) => cd.id == id)?.titulo || '';
  }
  entrenador: string =
    'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1';

  onPageChange(event: any) {
    this.indicePaginator = event.first;
    this.reservasProximas = this.reservas.slice(
      this.indicePaginator,
      this.indicePaginator + this.columnasPaginator
    );
  }
}
