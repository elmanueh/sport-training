import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LargeCard, TypeCard } from '@/types/card';
import {
  ActividadDeportiva,
  CentroDeportivo,
  InstalacionDeportiva,
} from '@/types/centro-deportivo';
import { Reserva } from '@/types/programa-entrenamiento';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'large-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, RatingModule, FormsModule],
  template: `
    <section class="flex w-3/5 h-48 rounded-xl p-5 shadow-xl bg-primary-800">
      <div class="flex w-56">
        <img
          class="rounded-xl"
          [src]="card.imagen"
          alt="Imagen acerca de {{ card.titulo }}"
          width="rounded-xl object-cover h-full w-full"
        />
      </div>
      <div class="flex flex-col pl-3 w-full">
        <div class="flex">
          <p class="font-bold text-2xl m-0 w-full">{{ card.titulo }}</p>
          @if (card.tipo != TypeCard.MultipleButton) {
          <p class="m-0 h-full flex content-start">
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
        <div class="flex gap-3 justify-end">
          @switch (card.tipo) { @case (TypeCard.MultipleButton) {
          <a routerLink="{{ card.id }}/instalaciones">
            <p-button label="Instalaciones" raised></p-button>
          </a>
          <a routerLink="{{ card.id }}/actividades">
            <p-button label="Actividades" raised></p-button>
          </a>
          } @case (TypeCard.StarsButton) {
          <p-rating [(ngModel)]="card.valoracion" [readonly]="true" />
          } }
        </div>
      </div>
    </section>
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
