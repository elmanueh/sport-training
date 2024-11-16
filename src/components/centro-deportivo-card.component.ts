import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CentroDeportivo } from '../types/centro-deportivo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'centros-deportivos-card',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  template: `
    <section class="flex card w-7 h-10rem border-round-xl p-3 shadow-6">
      <img
        class="border-round-xl"
        [src]="centroDeportivo?.imagen"
        alt="Imagen del centro deportivo {{ centroDeportivo?.titulo }}"
        width="300rem"
      />
      <section class="flex flex-column pl-3 w-full m-0">
        <p class="font-bold text-2xl m-0">{{ centroDeportivo?.titulo }}</p>
        <p class="pt-2 m-0 flex h-full">{{ centroDeportivo?.descripcion }}</p>
        <div class="flex gap-3 justify-content-end">
          <a routerLink="{{ centroDeportivo?.id }}/instalaciones">
            <p-button label="Instalaciones" raised></p-button>
          </a>
          <a routerLink="{{ centroDeportivo?.id }}/actividades">
            <p-button label="Actividades" raised></p-button>
          </a>
        </div>
      </section>
    </section>
  `,
})
export class CentroDeportivoCardComponent {
  @Input() centroDeportivo: CentroDeportivo | undefined;
}
