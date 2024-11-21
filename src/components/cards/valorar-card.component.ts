import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Reserva } from '../../types/programa-entrenamiento';

@Component({
  selector: 'valorar-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, RatingModule, FormsModule],
  template: `
    <div class="flex justify-content-center">
      <div class="p-3 card w-22rem h-26rem border-round-xl shadow-6">
        <div class="flex gap-2 h-4rem pb-3">
          <div class="font-bold text-2xl flex w-full">
            {{ reserva?.titulo }}
          </div>
        </div>
        <div class="flex gap-3 justify-content-end">
          <p-rating [(ngModel)]="stars" [cancel]="false" />
        </div>
        <div class="pt-3 pb-3">
          <img
            class="border-round-xl flex w-full h-11rem"
            [src]="reserva?.imagen"
            height="250vh"
          />
        </div>
        <textarea
          rows="5"
          cols="30"
          pInputTextarea
          [(ngModel)]="comentario"
          class="w-full border-round-xl"
        ></textarea>
      </div>
    </div>
  `,
  styles: `
    .card {
      background-color: #cfb073;
      color: #111;
    }
  `,
})
export class ValorarCardComponent {
  @Input() reserva: Reserva | undefined;
  stars: number = 0;
  comentario!: string;
}
