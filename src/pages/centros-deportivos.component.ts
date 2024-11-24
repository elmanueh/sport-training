import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TypeCard } from '@/types/card';
import { centrosDeportivos } from '@/consts/centro-deportivo';
import { LargeCardComponent } from '@/components/cards/large-card.component';

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [PaginatorModule, LargeCardComponent],
  template: `
    <div class="flex flex-col">
      <p class="tittle-page flex justify-center">Centros Deportivos</p>

      <div class="flex flex-col gap-5">
        @for(cd of centrosDeportivos; track cd.id) {
        <large-card
          [typeCard]="typeCard"
          [data]="cd"
          class="flex justify-center"
        />
        }
      </div>

      <div class="card flex justify-center mt-6">
        <p-paginator [first]="1" [rows]="3" [totalRecords]="30" />
      </div>
    </div>
  `,
})
export class CentrosDeportivosPage {
  centrosDeportivos = centrosDeportivos;
  typeCard = TypeCard.MultipleButton;
}
