import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { programaEntrenamiento } from '../consts/programa-entrenamiento';
import { Reserva } from '../types/programa-entrenamiento';
import { ButtonModule } from 'primeng/button';
import { TypeCard } from '../types/card';
import { LargeCardComponent } from '../components/cards/large-card.component';

@Component({
  selector: 'reservas-page',
  standalone: true,
  imports: [
    PaginatorModule,
    ButtonModule,
    LargeCardComponent,
  ],
  template: `
    <div class="flex flex-column">
      <div class="flex justify-content-between">
        <div class="flex pl-7 pt-4 flex-column">
          <a class="p-button flex justify-content-center">Volver atras</a>

          <label class="flex justify-content-center pt-4 text-2xl">
            {{ programaTitulo }}
          </label>
          <label
            class="flex justify-content-center text-yellow-400 text-xl"
            >PRECIO: 50€</label
          >
        </div>
        <p class="tittle-page flex justify-content-center">
          VISUALIZA LA PLANIFICACIÓN
        </p>
        <div class="flex pr-7 justify-content-center">
          <div class="w-20">
            <label
              class="font-bold flex justify-content-center text-yellow-400 pt-4 pb-2"
              >ENTRENADOR</label
            >
            <div class="flex justify-content-center pb-2">
              <img
                [src]="entrenador"
                alt="centro-deportivo-1"
                class="border-round-xl w-5rem"
              />
            </div>
            <label class="font-bold flex justify-content-center text-white">
              Pablo Peris Solano
            </label>
          </div>
        </div>
      </div>
      <div class="flex justify-content-center">
        <div class="w-7">
          <p class="font-italic font-bold">Proximas Reservas</p>
        </div>
      </div>
      <div class="flex flex-column gap-5">
        @for(reserva of reservas; track reserva.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="reserva"
          class="flex justify-content-center"
        />
        }
      </div>

      <div class="card pb-8 flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
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
}
