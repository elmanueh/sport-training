import { Component } from '@angular/core';
import { MisProgramasCardComponent } from '../components/mis-programas-card.component';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-mis-programas',
  standalone: true,
  imports: [MisProgramasCardComponent, PaginatorModule],
  template: `
    <section class="flex flex-column justify-content-center">
      <p class="tittle-page flex justify-content-center">Mis Programas</p>
      <div class="flex justify-content-center gap-4 mb-5">
        <mis-programas-card />
        <mis-programas-card />
        <mis-programas-card />
        <mis-programas-card />
      </div>
      <div class="card flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </section>
  `,
})
export class MisProgramasComponent {}
