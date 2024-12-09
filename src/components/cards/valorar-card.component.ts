import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { Textarea } from 'primeng/textarea';
import { Reserva } from '@/types/programa-entrenamiento';

@Component({
  selector: 'valorar-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, RatingModule, FormsModule, Textarea],
  template: `
    <div class="flex justify-center">
      <div class="p-3 card w-80 h-96 rounded-xl shadow-xl">
        <div class="flex gap-2 h-8 pb-3">
          <div class="font-bold text-2xl flex w-full">
            {{ reserva?.titulo }}
          </div>
        </div>
        <div class="flex pt-3 justify-end">
          <p-rating [(ngModel)]="stars" />
        </div>
        <div class="pt-3 pb-7">
          <img
            class="rounded-xl flex w-full h-44"
            [src]="reserva?.imagen"
            height="250vh"
          />
        </div>
        <textarea
          rows="5"
          cols="5"
          pTextarea
          [(ngModel)]="comentario"
          placeholder="Comentario"
          class="surface-400 text-900 w-full h-20 rounded-xl"
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
