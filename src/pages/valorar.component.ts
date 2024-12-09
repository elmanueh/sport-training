import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { Reserva } from '@/types/programa-entrenamiento';
import { programaEntrenamiento } from '@/consts/programa-entrenamiento';
import { ValorarCardComponent } from '@/components/cards/valorar-card.component';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'valorar-page',
  standalone: true,
  imports: [
    ValorarCardComponent,
    PaginatorModule,
    CarouselModule,
    RouterModule,
    ButtonModule,
    Toast,
  ],
  providers: [MessageService],
  template: `
    <section class="flex flex-col">
      <div class="flex justify-between">
        <div class="flex flex-col justify-center text-center w-2/12">
          <a routerLink="/mis-programas">
            <p-button label="Volver atrás" raised></p-button>
          </a>
          <label class="pt-4 text-2xl"> {{ programaTitulo }} </label>
          <label class="text-xl font-bold"
            >PRECIO: <span class="text-primary"> 50€</span></label
          >
        </div>
        <h1 class="title-page text-center">Valora tu experiencia</h1>
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

      <div class="flex flex-col items-center">
        <div class="flex flex-col pb-5 w-9/12">
          <div class="flex pb-3">
            <p class="font-italic text-xl font-bold">Actividades</p>
          </div>
          <div>
            <p-carousel
              [value]="actividades"
              [numVisible]="3"
              [numScroll]="3"
              [circular]="false"
            >
              <ng-template pTemplate="item" let-actividad>
                <valorar-card [reserva]="actividad" />
              </ng-template>
            </p-carousel>
          </div>
        </div>

        <div class="flex flex-col pb-5 w-9/12">
          <div class="flex pb-3">
            <p class="font-italic text-xl font-bold">Instalaciones</p>
          </div>
          <div>
            <p-carousel
              [value]="instalaciones"
              [numVisible]="3"
              [numScroll]="3"
              [circular]="false"
            >
              <ng-template pTemplate="item" let-instalacion>
                <valorar-card [reserva]="instalacion" />
              </ng-template>
            </p-carousel>
          </div>
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
