import { Component, Input } from '@angular/core';
import { ProgramaEntrenamiento } from '../../types/programa-entrenamiento';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mis-programas-card',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  template: `
    <div class="flex justify-content-center">
      <div class="p-3 bg-yellow-800 w-22rem h-26rem border-round-xl">
        <div class="flex gap-2 h-4rem pb-3">
          <div class="font-bold text-xl flex w-full">
            {{ programaEntrenamiento?.titulo }}
          </div>
          <a
            class="p-button flex justify-content-center w-5rem h-2rem text-xs"
            routerLink="{{ programaEntrenamiento?.id }}/reservas"
          >
            <p-button label="Ver"></p-button>
          </a>
        </div>
        <div class="font-italic text-base pb-1">
          {{ programaEntrenamiento?.estado }}
        </div>
        <div class="pb-3">
          <img
            class="border-round-xl flex w-full"
            [src]="programaEntrenamiento?.imagen"
            height="250vh"
          />
        </div>
        <div class="flex justify-content-between">
          <a class="p-button flex justify-content-center w-5rem h-2rem text-xs"
            >Cambiar Fecha</a
          >
          <a class="p-button flex justify-content-center w-5rem h-2rem text-xs"
            >Pagar</a
          >
          <a class="p-button flex justify-content-center w-5rem h-2rem text-xs"
            >Cancelar</a
          >
        </div>
      </div>
      <div></div>
    </div>
  `,
})
export class MisProgramasCardComponent {
  @Input() programaEntrenamiento: ProgramaEntrenamiento | undefined;
}
