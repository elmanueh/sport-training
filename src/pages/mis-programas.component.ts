import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { programaEntrenamiento } from '@/consts/programa-entrenamiento';
import { MisProgramasCardComponent } from '@/components/cards/mis-programas-card.component';

@Component({
  selector: 'mis-programas-page',
  standalone: true,
  imports: [MisProgramasCardComponent, PaginatorModule],
  template: `
    <section class="flex flex-col justify-center">
      <p class="tittle-page flex justify-center pb-5">Mis Programas</p>

      <div class="flex justify-center gap-4 mb-5">
        @for(pe of programasEntrenamiento; track pe.id) {
        <mis-programas-card
          class="flex justify-center"
          [programaEntrenamiento]="pe"
        />
        }
      </div>

      <div class="flex justify-center gap-4 mb-5">
        <mis-programas-card
          [data]="'vacio'"
          class="flex justify-center"
          [programaEntrenamiento]="programasEntrenamiento[0]"
        />
      </div>
    </section>
  `,
})
export class MisProgramasPage {
  programasEntrenamiento = programaEntrenamiento;
}
