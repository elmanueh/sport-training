import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { programaEntrenamiento } from '@/consts/programa-entrenamiento';
import { ShortCardComponent } from '@/components/cards/short-card.component';

@Component({
  selector: 'mis-programas-page',
  standalone: true,
  imports: [PaginatorModule, ShortCardComponent],
  template: `
    <section class="flex flex-col justify-center">
      <p class="title-page text-center pb-5">Mis Programas</p>

      <div class="flex justify-center gap-4 mb-5">
        @for(pe of programasEntrenamiento; track pe.id) {
        <short-card
          class="flex justify-center"
          [programaEntrenamiento]="pe"
        ></short-card>
        }
      </div>

      <div class="flex justify-center gap-4 mb-5">
        <short-card
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
