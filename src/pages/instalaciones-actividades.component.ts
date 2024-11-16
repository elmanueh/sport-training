import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { InstalacionesActividadesCardComponent} from "../components/instalacion-actividades-card.component";
import { instalaciones } from '../consts/instalaciones-actividades';

@Component({
  selector: 'instalaciones-actividades-page',
  standalone: true,
  imports: [PaginatorModule, InstalacionesActividadesCardComponent],
  template: `
    <div class="flex flex-column">
      <p class="tittle_page flex justify-content-center">FUTURAS INSTALACIONES ACTIVIDADES</p>

      <div class="flex flex-column gap-5">
        @for(i of instalaciones; track i.id) {
        <instalaciones-actividades-card
          class="flex justify-content-center"
          [instalacion]="i"
        />
        }
      </div>

      <div class="card flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </div>
  `,
})
export class InstalacionesActividadesPage {
  instalaciones = instalaciones;
}
