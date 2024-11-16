import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { InstalacionDeportiva } from '../types/centro-deportivo';

@Component({
  selector: 'instalacion-card',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  template: `
    <div class="flex bg-yellow-800 w-8 border-round-xl">
      <div class="p-3">
        <img
          [src]="instalacion?.imagen"
          alt="centro-deportivo-1"
          width="200vw"
          height="100vh"
          class="border-round-xl"
        />
      </div>
      <div class="p-3 text-gray-900 w-full">
        <div class="font-bold text-xl">{{ instalacion?.titulo }}</div>
        <div class="pt-2">{{ instalacion?.descripcion }}</div>
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
export class InstalacionCardComponent {
  @Input() instalacion: InstalacionDeportiva | undefined;
}
