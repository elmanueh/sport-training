import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { Reserva } from '@/types/programa-entrenamiento';
import { programaEntrenamiento } from '@/consts/programa-entrenamiento';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { BackButtonComponent } from '../components/back-button.component';
import { ShortCardComponent } from '@/components/cards/short-card.component';

@Component({
  selector: 'valorar-page',
  standalone: true,
  imports: [
    PaginatorModule,
    CarouselModule,
    RouterModule,
    ButtonModule,
    Toast,
    BackButtonComponent,
    ShortCardComponent,
  ],
  providers: [MessageService],
  template: `
    <section class="flex flex-col gap-10">
      <div class="flex justify-between">
        <div class="flex flex-col justify-center text-center w-2/12">
          <back-button [route]="'/mis-programas'" />
          <label class="pt-4 text-2xl"> {{ programa.titulo }} </label>
          <label class="text-xl font-bold"
            >PRECIO:
            <span class="text-primary"> {{ programa.precio }}€</span></label
          >
        </div>
        <h1 class="title-page text-center">Valora tu experiencia</h1>
        <div class="flex flex-col justify-center text-center font-bold w-2/12">
          <p class="text-primary pb-2 text-lg">Entrenador</p>
          <div class="flex justify-center pb-2">
            <img
              class="rounded-xl w-20"
              [src]="programa.entrenadorFoto"
              alt="centro-deportivo-1"
            />
          </div>
          <p>{{ programa.entrenadorNombre }}</p>
        </div>
      </div>

      <div class="flex flex-col items-center gap-5">
        <div class="flex flex-col w-9/12">
          <p class="font-italic text-xl font-bold flex pb-3">Actividades</p>
          <p-carousel
            [value]="actividades"
            [numVisible]="3"
            [numScroll]="3"
            [circular]="false"
          >
            <ng-template pTemplate="item" let-actividad>
              <short-card [reserva]="actividad" class="flex justify-center" />
            </ng-template>
          </p-carousel>
        </div>

        <div class="flex flex-col w-9/12">
          <p class="font-italic text-xl font-bold flex pb-3">Instalaciones</p>
          <p-carousel
            [value]="instalaciones"
            [numVisible]="3"
            [numScroll]="3"
            [circular]="false"
          >
            <ng-template pTemplate="item" let-instalacion>
              <short-card [reserva]="instalacion" class="flex justify-center" />
            </ng-template>
          </p-carousel>
        </div>

        <div class="flex justify-end w-9/12">
          <p-toast />
          <a> <p-button (onClick)="show()" label="Enviar" raised /> </a>
        </div>
      </div>
    </section>
  `,
})
export class ValorarPage {
  instalaciones: Reserva[] = [];
  actividades: Reserva[] = [];
  programa: any;

  @Input() set id(id: any) {
    this.programa = programaEntrenamiento[id - 1];
    this.instalaciones =
      this.programa.reservas.filter(
        (reserva: Reserva) => reserva.categoria === 'Instalación'
      ) || [];
    this.actividades =
      this.programa.reservas.filter(
        (reserva: Reserva) => reserva.categoria === 'Actividad'
      ) || [];
  }

  constructor(private messageService: MessageService) {}
  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Valoración enviada',
      detail: 'La valoración se ha enviado correctamente.',
    });

    setTimeout(() => {
      window.history.back();
    }, 4000);
  }
}
