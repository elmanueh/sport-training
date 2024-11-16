import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CentroDeportivo } from '../types/centro-deportivo';

@Component({
  selector: 'centros-deportivos-card',
  standalone: true,
  imports: [ButtonModule],
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
          <p-button label="Instalaciones" />
          <p-button label="Actividades" />
        </div>
      </div>
    </div>
  `,
})
export class CentroDeportivoCardComponent {
  @Input() centroDeportivo: CentroDeportivo | undefined;
}
