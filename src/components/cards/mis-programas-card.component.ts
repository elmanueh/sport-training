import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgramaEntrenamiento } from '@/types/programa-entrenamiento';

@Component({
  selector: 'mis-programas-card',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  template: `
    <div class="flex justify-content-center">
      <div class="p-3 card w-22rem h-26rem border-round-xl shadow-6">
        <div class="flex gap-2 h-4rem pb-3">
          <div class="font-bold text-2xl flex w-full">
            {{ programaEntrenamiento?.titulo }}
          </div>
          <a
            class="p-button flex justify-content-center w-5rem h-2rem text-xs"
            routerLink="{{ programaEntrenamiento?.id }}/reservas"
          >
            Ver
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
          <a class="p-button flex justify-content-center text-xs"
            >Cambiar Fecha</a
          >
          <a
            class="p-button flex justify-content-center text-xs"
            routerLink="{{ programaEntrenamiento?.id }}/valorar"
          >
            Pagar (Valorar)
          </a>
          <a class="p-button flex justify-content-center text-xs">Cancelar</a>
        </div>
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
export class MisProgramasCardComponent {
  @Input() programaEntrenamiento: ProgramaEntrenamiento | undefined;
  @Input() data!: String | undefined;
}
