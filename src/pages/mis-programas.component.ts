import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { programaEntrenamiento } from '@/consts/programa-entrenamiento';
import { ShortCardComponent } from '@/components/cards/short-card.component';

@Component({
  selector: 'mis-programas-page',
  standalone: true,
  imports: [PaginatorModule, ShortCardComponent],
  template: `
    <section class="flex flex-col">
      <p class="title-page text-center pb-5">Mis Programas</p>

      <div class="grid grid-cols-4 gap-y-20 mx-20">
        @for(pe of programasEntrenamiento; track pe.id) {
        <short-card
          class="flex justify-center"
          [programaEntrenamiento]="pe"
        ></short-card>
        }
      </div>
    </section>
  `,
})
export class MisProgramasPage {
  programasEntrenamiento = programaEntrenamiento;
}
