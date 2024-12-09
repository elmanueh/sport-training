import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { Reserva } from '@/types/programa-entrenamiento';
import { programaEntrenamiento } from '@/consts/programa-entrenamiento';
import { ValorarCardComponent } from '@/components/cards/valorar-card.component';

@Component({
  selector: 'valorar-page',
  standalone: true,
  imports: [
    ValorarCardComponent,
    PaginatorModule,
    CarouselModule,
    RouterModule,
  ],
  template: `
    <section class="flex flex-col justify-center">
      <div class="flex justify-between">
        <div class="flex pl-7 pt-4 flex-col">
          <a class="p-button flex justify-center" routerLink="/mis-programas"
            >Volver atras</a
          >

          <label class="flex justify-center pt-4 text-2xl">
            {{ programaTitulo }}
          </label>
        </div>
        <p class="title-page flex justify-center">Valora tu experiencia</p>
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

      <section class="flex flex-col pb-5">
        <div class="flex justify-center pb-3">
          <div class="w-9">
            <p class="font-italic text-xl font-bold">Actividades</p>
          </div>
        </div>
        <div class="flex justify-center">
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

      <section class="flex flex-col pb-5">
        <div class="flex justify-center pb-3">
          <div class="w-9">
            <p class="font-italic text-xl font-bold">Instalaciones</p>
          </div>
        </div>
        <div class="flex justify-center">
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

      <div class="flex pb-8 justify-center">
        <div class="w-9 flex justify-end">
          <a class="p-button flex w-20 h-8 text-xs justify-center"> Enviar </a>
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
