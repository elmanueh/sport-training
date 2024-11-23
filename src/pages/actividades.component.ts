import { Component, Input } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { centrosDeportivos } from '@/consts/centro-deportivo';
import { TypeCard } from '@/types/card';
import { ActividadDeportiva, CentroDeportivo } from '@/types/centro-deportivo';
import { LargeCardComponent } from '@/components/cards/large-card.component';

@Component({
  selector: 'actividades-page',
  standalone: true,
  imports: [PaginatorModule, LargeCardComponent],
  template: `
    <div class="flex flex-column">
      <p class="tittle-page flex justify-content-center">
        Actividades Deportivas
      </p>
      <p class="flex justify-content-center text-3xl">
        {{ centroDeportivo?.titulo }}
      </p>

      <div class="flex flex-column gap-5">
        @for(actividad of actividades; track actividad.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="actividad"
          class="flex justify-content-center"
        />
        }
      </div>

      <div class="card flex justify-content-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </div>
  `,
})
export class ActividadesPage {
  actividades: ActividadDeportiva[] = [];
  centroDeportivo: CentroDeportivo | undefined;
  typeCard = TypeCard.StarsButton;

  @Input() set id(id: any) {
    this.centroDeportivo = centrosDeportivos.find((cd) => cd.id == id);
    this.actividades = this.centroDeportivo?.actividades || [];
  }
}
