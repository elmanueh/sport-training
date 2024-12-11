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

      <div class="grid grid-cols-3 px-56 gap-y-14">
        @for(pe of programasEntrenamiento; track pe.id) {
        <short-card [programaEntrenamiento]="pe" class="flex justify-center" />
        }
      </div>
    </section>
  `,
})
export class MisProgramasPage {
  programasEntrenamiento = programaEntrenamiento;
}
