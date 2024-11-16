import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ActividadDeportiva } from '../../types/centro-deportivo';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'actividad-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, RatingModule, FormsModule],
  template: `
    <section class="flex card w-7 h-10rem border-round-xl p-3 shadow-6">
      <img
        class="border-round-xl"
        [src]="actividad?.imagen"
        alt="Imagen de la instalación {{ actividad?.titulo }}"
        width="300rem"
      />
      <section class="flex flex-column pl-3 w-full m-0">
        <div class="flex">
          <p class="font-bold text-2xl m-0 w-full">{{ actividad?.titulo }}</p>
          <p class="m-0 h-full flex align-content-start">
            <strong>{{ actividad?.categoria }}</strong>
          </p>
        </div>

        <p class="pt-2 m-0 flex h-full">{{ actividad?.descripcion }}</p>
        <div class="flex gap-3 justify-content-end">
          <p-rating [(ngModel)]="stars" [readonly]="true" [cancel]="false" />
        </div>
      </section>
    </section>
  `,
})
export class ActividadCardComponent {
  @Input() actividad: ActividadDeportiva | undefined;
  stars: number = 0;
  ngOnInit(): void {
    this.stars = this.actividad?.valoracion || 0;
  }
}
