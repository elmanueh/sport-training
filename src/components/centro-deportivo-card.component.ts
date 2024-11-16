import { Component, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CentroDeportivo } from '../types/centro-deportivo';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'centros-deportivos-card',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  template: `
    <div class="flex bg-yellow-800 w-8 border-round-xl">
      <div class="p-3">
        <img
          [src]="centroDeportivo?.imagen"
          alt="centro-deportivo-1"
          width="200vw"
          height="100vh"
          class="border-round-xl"
        />
      </div>
      <div class="p-3 text-gray-900 w-full">
        <div class="font-bold text-xl">{{ centroDeportivo?.titulo }}</div>
        <div class="pt-2">{{ centroDeportivo?.descripcion }}</div>
        <div class="flex gap-3 justify-content-end">
          <a routerLink="/centros-deportivos/instalaciones" class="p-button">
            Instalaciones
          </a>
          <a routerLink="/centros-deportivos/actividades" class="p-button">
            Actividades
          </a>
        </div>
      </div>
    </div>
  `,
})
export class CentroDeportivoCardComponent {
  @Input() centroDeportivo: CentroDeportivo | undefined;
}
