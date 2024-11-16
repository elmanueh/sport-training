import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { Reserva } from '../../types/programa-entrenamiento';

@Component({
  selector: 'reserva-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, FormsModule, RatingModule],
  template: `
    <div class="flex bg-yellow-800 w-8 border-round-xl">
      <div class="p-3">
        <img
          [src]="reserva?.imagen"
          alt="centro-deportivo-1"
          width="200vw"
          height="130vh"
          class="border-round-xl"
        />
      </div>
      <div class="p-3 text-gray-900 w-full">
        <div class="font-bold text-xl">{{ reserva?.titulo }}</div>
        <div class="pt-1">Descipción: {{ reserva?.descripcion }}</div>
        <div class="pt-1">Fecha: {{ reserva?.fecha }}</div>
        <div class="pt-1">Hora: {{ reserva?.hora }}</div>
        @if (reserva?.monitor) {
        <div class="pt-1">Monitor: {{ reserva?.monitor }}</div>
        }
        <div class="flex gap-3 justify-content-end">
          <p-rating [(ngModel)]="value" [readonly]="true" [cancel]="false" />
        </div>
      </div>
    </div>
  `,
})
export class ReservaCardComponent {
  @Input() reserva: Reserva | undefined;

  value: number = 5;
}
