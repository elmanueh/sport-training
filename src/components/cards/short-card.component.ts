import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ShortCard, TypeCard } from '@/types/card';
import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'short-card',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    RatingModule,
    FormsModule,
    Dialog,
    DatePicker,
  ],
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
      <div class="flex text-xs justify-evenly items-end pt-4">
        @if (programaEntrenamiento.estado !=
        ProgramaEntrenamientoEstado.MODIFICADO && programaEntrenamiento.estado
        != ProgramaEntrenamientoEstado.CANCELADO) {
        <div>
          <a
            ><p-button (click)="showDialogFecha()" label="Cambiar fecha" raised
          /></a>
          <p-dialog
            [(visible)]="visibleFecha"
            [modal]="true"
            [style]="{ width: '25rem' }"
            header="Modificar fecha"
          >
            <div class="flex flex-col items-center h-96">
              <p-datepicker
                class="max-w-full"
                [(ngModel)]="date"
                [inline]="true"
              />
              <div class="flex gap-5 mt-10">
                <p-button
                  label="Aceptar"
                  raised
                  (click)="
                    visibleFecha = false;
                    programaEntrenamiento.estado =
                      ProgramaEntrenamientoEstado.MODIFICADO
                  "
                ></p-button>
                <p-button
                  label="Rechazar"
                  raised
                  (click)="visibleFecha = false"
                ></p-button>
              </div>
            </div>
          </p-dialog>
        </div>
        }
        <a routerLink="{{ programaEntrenamiento.id }}/valorar">
          <p-button label="Valorar" raised />
        </a>
        @if (programaEntrenamiento.estado !=
        ProgramaEntrenamientoEstado.CANCELADO) {
        <div>
          <a
            ><p-button (click)="showDialogCancelar()" label="Cancelar" raised
          /></a>
          <p-dialog
            [(visible)]="visibleCancelar"
            [closable]="false"
            [modal]="true"
            [style]="{ width: '30rem' }"
          >
            <div class="flex flex-col items-center p-5">
              <p class="font-bold text-2xl mb-3 text-center">
                ¿Estás seguro que deseas cancelar el programa deportivo?
              </p>
              <p class="mb-2 text-xl">{{ programaEntrenamiento.titulo }}</p>
              <p class="mb-5">Se devolverá 5€</p>
              <div class="flex justify-between gap-3">
                <p-button
                  label="Aceptar"
                  raised
                  (click)="
                    visibleCancelar = false;
                    programaEntrenamiento.estado =
                      ProgramaEntrenamientoEstado.CANCELADO
                  "
                ></p-button>
                <p-button
                  label="Rechazar"
                  raised
                  (click)="visibleCancelar = false"
                ></p-button>
              </div>
            </div>
          </p-dialog>
        </div>
        }
      </div>
    </div>
  `,
})
export class ShortCardComponent {
  @Input() actualPage: string = '';
  @Input({ required: true }) programaEntrenamiento!: ProgramaEntrenamiento;
  ProgramaEntrenamientoEstado = ProgramaEntrenamientoEstado;

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

  visibleCancelar: boolean = false;
  visibleFecha: boolean = false;
  date: Date | undefined;

  showDialogCancelar() {
    this.visibleCancelar = true;
  }

  showDialogFecha() {
    this.visibleFecha = true;
  }
}
