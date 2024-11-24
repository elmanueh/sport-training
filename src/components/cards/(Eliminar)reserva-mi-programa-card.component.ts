import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { Reserva } from '@/types/programa-entrenamiento';

@Component({
  selector: 'reserva-card',
  standalone: true,
  imports: [ButtonModule, FormsModule, RatingModule],
  template: `
    <section class="flex card w-7 h-44 rounded-xl p-3 shadow-xl">
      <img
        [src]="reserva?.imagen"
        alt="centro-deportivo-1"
        width="300rem"
        class="rounded-xl"
      />
      <section class="flex flex-col pl-3 w-full m-0">
        <p class="font-bold text-2xl m-0 w-full">{{ reserva?.titulo }}</p>
        <div class="flex h-full flex-col">
          <p class="m-0 flex ">Descipción: {{ reserva?.descripcion }}</p>
          <p class="m-0 flex ">Fecha: {{ reserva?.fecha }}</p>
          <p class="m-0 flex ">Hora: {{ reserva?.hora }}</p>
          @if (reserva?.monitor) {
          <p class="m-0 flex">Monitor: {{ reserva?.monitor }}</p>
          }
        </div>
        <div class="flex gap-3 justify-end">
          <p-rating [(ngModel)]="stars" [readonly]="true" />
        </div>
      </section>
    </section>
  `,
})
export class ReservaCardComponent {
  @Input() reserva: Reserva | undefined;

  stars: number = 0;
  ngOnInit(): void {
    this.stars = this.reserva?.valoracion || 0;
  }
}
