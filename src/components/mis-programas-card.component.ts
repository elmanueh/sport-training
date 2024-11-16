import { Component, Input } from '@angular/core';
import { ProgramaEntrenamiento } from '../types/programa-entrenamiento';

@Component({
  selector: 'mis-programas-card',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-content-center">
      <div class="p-3 bg-yellow-800 w-22rem h-26rem border-round-xl">
        <div class="flex gap-5 pb-5">
          <div>{{ programaEntrenamiento?.titulo }}</div>
          <a class="flex justify-content-end w-full"> BOTON </a>
        </div>
        <div>Estado: {{ programaEntrenamiento?.estado }}</div>
        <div>
          <img
            class="border-round-xl flex w-full"
            [src]="programaEntrenamiento?.imagen"
            height="300vh"
          />
        </div>
        <div class="flex justify-content-between">
          <a>Cambiar Fecha</a>
          <a>Pagar</a>
          <a>Cancelar</a>
        </div>
      </div>
      <div></div>
    </div>
  `,
})
export class MisProgramasCardComponent {
  // @Input() programaEntrenamiento: ProgramaEntrenamiento | undefined;

  programaEntrenamiento: ProgramaEntrenamiento | undefined = {
    id: 1,
    titulo: 'Programa 1',
    descripcion: 'Descripción del programa 1',
    estado: 'Activo',
    imagen: 'https://github.com/elmanueh.png',
  };
}
