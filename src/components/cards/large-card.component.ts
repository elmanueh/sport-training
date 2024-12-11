import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LargeCard, TypeLargeCard } from '@/types/card';
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
    <section
      class="flex w-[80rem] h-44 rounded-lg p-4 shadow-xl bg-surface-900 transition-colors hover:bg-opacity-80 hover:bg-surface-800"
    >
      <img
        class="rounded-lg w-80 object-cover"
        [src]="card.imagen"
        alt="Imagen {{ card.titulo }}"
      />
      <div class="flex flex-col pl-3 w-full">
        <div class="flex">
          <p class="font-bold text-2xl w-full">{{ card.titulo }}</p>
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
  @Input({ required: true }) typeCard!: TypeLargeCard;
  @Input({ required: true }) data!:
    | CentroDeportivo
    | InstalacionDeportiva
    | ActividadDeportiva
    | Reserva;

  TypeCard = TypeLargeCard;
  card!: LargeCard;

  ngOnInit() {
    this.card = {
      categoria: '',
      valoracion: 0,
      tipo: this.typeCard,
      fecha: '',
      hora: '',
      monitor: undefined,
      ...this.data,
    };
  }
}
