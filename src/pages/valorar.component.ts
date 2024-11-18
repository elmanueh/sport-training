import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { programaEntrenamiento } from '../consts/programa-entrenamiento';
import { ValorarCardComponent } from '../components/cards/valorar-card.component';
import { Reserva } from '../types/programa-entrenamiento';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'valorar-page',
  standalone: true,
  imports: [ValorarCardComponent, PaginatorModule, CarouselModule],
  template: `
    <section class="flex flex-column justify-content-center">
      <div class="flex justify-content-between">
        <div class="flex pl-7 pt-4 flex-column">
          <a class="p-button flex justify-content-center">Volver atras</a>

          <label class="flex justify-content-center pt-4 text-2xl">
            {{ programaTitulo }}
          </label>
        </div>
        <p class="tittle-page flex justify-content-center">
          Valora tu experiencia
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
                class="border-round-xl w-6rem"
              />
            </div>
            <label class="font-bold flex justify-content-center text-white">
              Pablo Peris Solano
            </label>
          </div>
        </div>
      </div>

      <section class="flex flex-row justify-content-center">
        <div class="pr-8">
          <div class="flex justify-content-center">
            <div class="w-22rem">
              <p class="font-italic font-bold">Actividades</p>
            </div>
          </div>
          <div class="flex justify-content-center">
            <p-carousel
              [value]="actividades"
              [numVisible]="1"
              [numScroll]="1"
              [circular]="false"
              [responsiveOptions]="responsiveOptions"
              class="w-29rem"
            >
              <ng-template pTemplate="item" let-actividad>
                <valorar-card
                  class="flex justify-content-center"
                  [reserva]="actividad"
                />
              </ng-template>
            </p-carousel>
          </div>
        </div>

        <div>
          <div class="flex justify-content-center">
            <div class="w-22rem">
              <p class="font-italic font-bold">instalaciones</p>
            </div>
          </div>
          <div class="flex justify-content-center">
            <p-carousel
              [value]="instalaciones"
              [numVisible]="1"
              [numScroll]="1"
              [circular]="false"
              [responsiveOptions]="responsiveOptions"
              class="w-29rem"
            >
              <ng-template pTemplate="item" let-instalacion>
                <valorar-card
                  class="flex justify-content-center"
                  [reserva]="instalacion"
                />
              </ng-template>
            </p-carousel>
          </div>
        </div>
      </section>

      <div class="flex justify-content-center">
        <div class="w-8 flex justify-content-end">
          <a class="p-button flex w-5rem h-2rem text-xs justify-content-center">
            Enviar
          </a>
        </div>
      </div>

      <div class="card flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </section>
  `,
})
export class ValorarPage {
  instalaciones: Reserva[] = [];
  actividades: Reserva[] = [];
  programaTitulo = '';
  responsiveOptions: any[] | undefined;

  @Input() set id(id: any) {
    this.instalaciones =
      programaEntrenamiento
        .find((cd) => cd.id == id)
        ?.reservas.filter((reserva) => reserva.categoria === 'instalación') ||
      [];
    this.actividades =
      programaEntrenamiento
        .find((cd) => cd.id == id)
        ?.reservas.filter((reserva) => reserva.categoria === 'actividad') || [];
    this.programaTitulo =
      programaEntrenamiento.find((cd) => cd.id == id)?.titulo || '';
  }
  entrenador: string =
    'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1';
}
