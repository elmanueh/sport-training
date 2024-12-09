import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ShortCard, TypeCard } from '@/types/card';
import { ProgramaEntrenamiento } from '@/types/programa-entrenamiento';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'short-card',
  standalone: true,
  imports: [ButtonModule, RouterModule, RatingModule, FormsModule],
  template: `
    <div class="flex flex-col p-4 w-96 rounded-xl shadow-xl bg-black">
      <div class="flex gap-2 pb-3">
        <div class="flex flex-col w-full">
          <p class="font-bold text-2xl">{{ programaEntrenamiento.titulo }}</p>
          <p class="italic">{{ programaEntrenamiento.estado }}</p>
        </div>
        <div class="flex justify-end">
          <a routerLink="{{ programaEntrenamiento.id }}/reservas">
            <p-button label="Ver" raised size="small" />
          </a>
        </div>
      </div>
      <div class="h-full">
        <img
          src="{{ programaEntrenamiento.imagen }}"
          class="rounded-xl object-cover h-full w-full"
        />
      </div>
      <div class="flex text-xs justify-between items-end pt-4">
        <a><p-button label="Cambiar fecha" raised /></a>
        <a routerLink="{{ programaEntrenamiento.id }}/valorar">
          <p-button label="Valorar" raised />
        </a>
        <a><p-button label="Cancelar" raised /></a>
      </div>
    </div>
  `,
})
export class ShortCardComponent {
  @Input() actualPage: string = '';
  @Input({ required: true }) programaEntrenamiento!: ProgramaEntrenamiento;

  TypeCard = TypeCard;
  card!: ShortCard;

  ngOnInit() {
    this.card = {
      categoria: '',
      valoracion: 0,
      page: this.actualPage,
      fecha: '',
      hora: '',
      monitor: undefined,
    };
  }
}
