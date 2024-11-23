import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LargeCard, TypeCard } from '../../types/card';
import {
  ActividadDeportiva,
  CentroDeportivo,
  InstalacionDeportiva,
} from '../../types/centro-deportivo';
import { Reserva } from '../../types/programa-entrenamiento';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'large-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, RatingModule, FormsModule],
  template: `
    <section class="flex card w-7 h-11rem border-round-xl p-3 shadow-6">
      <img
        class="border-round-xl"
        [src]="card.imagen"
        alt="Imagen acerca de {{ card.titulo }}"
        width="300rem"
      />
      <div class="flex flex-column pl-3 w-full">
        <div class="flex">
          <p class="font-bold text-2xl m-0 w-full">{{ card.titulo }}</p>
          @if (card.tipo != TypeCard.MultipleButton) {
          <p class="m-0 h-full flex align-content-start">
            <strong>{{ card.categoria }}</strong>
          </p>
          }
        </div>
        @if (card.hora || card.fecha) {
        <p class="pt-2 m-0 flex">{{ card.descripcion }}</p>
        <p class="m-0 flex">Fecha: {{ card.fecha }}</p>
        <p class="m-0 flex h-full">Hora: {{ card.hora }}</p>
        @if (card.monitor) {
        <p class="m-0 flex h-full">Monitor: {{ card.monitor }}</p>
        } } @else {
        <p class="pt-2 m-0 flex h-full">{{ card.descripcion }}</p>
        }
        <div class="flex gap-3 justify-content-end">
          @switch (card.tipo) { @case (TypeCard.MultipleButton) {
          <a routerLink="{{ card.id }}/instalaciones">
            <p-button label="Instalaciones" raised></p-button>
          </a>
          <a routerLink="{{ card.id }}/actividades">
            <p-button label="Actividades" raised></p-button>
          </a>
          } @case (TypeCard.StarsButton) {
          <p-rating
            [(ngModel)]="card.valoracion"
            [readonly]="true"
            [cancel]="false"
          />
          } }
        </div>
      </div>
    </section>
  `,
  styles: `
    .card {
      background-color: #cfb073;
      color: #111;
    }
  `,
})
export class LargeCardComponent {
  @Input({ required: true }) typeCard!: TypeCard;
  @Input({ required: true }) data!:
    | CentroDeportivo
    | InstalacionDeportiva
    | ActividadDeportiva
    | Reserva;
  @Input() actualPage: string = '';

  TypeCard = TypeCard;
  card!: LargeCard;

  ngOnInit() {
    this.card = {
      categoria: '',
      valoracion: 0,
      tipo: this.typeCard,
      page: this.actualPage,
      fecha: '',
      hora: '',
      monitor: undefined,
      ...this.data,
    };
  }
}
