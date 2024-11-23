import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { programaEntrenamiento } from '../consts/programa-entrenamiento';
import { ValorarCardComponent } from '../components/cards/valorar-card.component';
import { Reserva } from '../types/programa-entrenamiento';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'valorar-page',
  standalone: true,
  imports: [ValorarCardComponent, PaginatorModule, CarouselModule, RouterModule],
  template: `
    <section class="flex flex-column justify-content-center">
      <div class="flex justify-content-between">
        <div class="flex pl-7 pt-4 flex-column">
          <a
            class="p-button flex justify-content-center"
            routerLink="/mis-programas"
            >Volver atras</a
          >

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
                class="border-round-xl w-4rem"
              />
            </div>
            <label
              class="font-bold flex justify-content-center text-white text-s"
            >
              Pablo Peris Solano
            </label>
          </div>
        </div>
      </div>

      <section class="flex flex-column pb-5">
        <div class="flex justify-content-center pb-3">
          <div class="w-9">
            <p class="font-italic text-xl font-bold">Actividades</p>
          </div>
        </div>
        <div class="flex justify-content-center">
          <p-carousel
            [value]="actividades"
            [numVisible]="3"
            [numScroll]="3"
            [circular]="false"
            class="w-9"
          >
            <ng-template pTemplate="item" let-actividad>
              <valorar-card [reserva]="actividad" />
            </ng-template>
          </p-carousel>
        </div>
      </section>

      <section class="flex flex-column pb-5">
        <div class="flex justify-content-center pb-3">
          <div class="w-9">
            <p class="font-italic text-xl font-bold">Instalaciones</p>
          </div>
        </div>
        <div class="flex justify-content-center">
          <p-carousel
            [value]="instalaciones"
            [numVisible]="3"
            [numScroll]="3"
            [circular]="false"
            class="w-9"
          >
            <ng-template pTemplate="item" let-instalacion>
              <valorar-card [reserva]="instalacion" />
            </ng-template>
          </p-carousel>
        </div>
      </section>

      <div class="flex pb-8 justify-content-center">
        <div class="w-9 flex justify-content-end">
          <a class="p-button flex w-5rem h-2rem text-xs justify-content-center">
            Enviar
          </a>
        </div>
      </div>
    </section>
  `,
})
export class ValorarPage {
  instalaciones: Reserva[] = [];
  actividades: Reserva[] = [];
  programaTitulo = '';

  @Input() set id(id: any) {
    this.instalaciones =
      programaEntrenamiento
        .find((cd) => cd.id == id)
        ?.reservas.filter((reserva) => reserva.categoria === 'Instalación') ||
      [];
    this.actividades =
      programaEntrenamiento
        .find((cd) => cd.id == id)
        ?.reservas.filter((reserva) => reserva.categoria === 'Actividad') || [];
    this.programaTitulo =
      programaEntrenamiento.find((cd) => cd.id == id)?.titulo || '';
  }
  entrenador: string =
    'https://img.a.transfermarkt.technology/portrait/header/20973-1696963165.jpg?lm=1';
}
