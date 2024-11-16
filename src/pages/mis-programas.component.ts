import { Component } from '@angular/core';
import { MisProgramasCardComponent } from '../components/mis-programas-card.component';

@Component({
  selector: 'app-mis-programas',
  standalone: true,
  imports: [MisProgramasCardComponent],
  template: `
    <section class="flex flex-column justify-content-center">
      <div class="flex justify-content-center p-6 tittle_page">
        MIS PROGRAMAS
      </div>
      <div class="flex justify-content-center gap-4 mb-5">
        <mis-programas-card />
        <mis-programas-card />
        <mis-programas-card />
        <mis-programas-card />
      </div>
    </section>
  `,
})
export class MisProgramasComponent {}
