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
    @if (programaEntrenamiento.estado == ProgramaEntrenamientoEstado.NUEVO) {
    <div
      class="flex flex-col w-96 h-96 items-center justify-center rounded-xl shadow-xl bg-black opacity-25 hover:opacity-100"
    >
      <a><p-button (click)="showDialogNuevo()" label="Crear nuevo" raised /></a>
      <p-dialog
        [(visible)]="visibleNuevo"
        [modal]="true"
        [style]="{ width: '25rem' }"
        header="Crear nuevo programa"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-bold">PEDIR DATOS</h1>

          <div class="flex gap-5 mt-4">
            <p-button
              label="Aceptar"
              raised
              (click)="visiblePagar = false"
            ></p-button>
            <p-button
              label="Rechazar"
              raised
              (click)="visiblePagar = false"
            ></p-button>
          </div>
        </div>
      </p-dialog>
    </div>
    } @else {
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
        @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.PENDIENTE) {
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

              <p class="mt-4">Nuevo precio: 20€</p>
              <div class="flex gap-5 mt-4">
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
        }@if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.PENDIENTE || programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.MODIFICADO) {
        <div>
          <a><p-button (click)="showDialogPagar()" label="Pagar" raised /></a>
          <p-dialog
            header="Realizar pago"
            [(visible)]="visiblePagar"
            [modal]="true"
            [style]="{ width: '25rem' }"
          >
            <div class="flex flex-col gap-5 items-center">
              <div>
                <label for="@Next">Nombre en la tarjeta</label>
                <input type="text" pInputText [(ngModel)]="datosPagos.nombre" />
              </div>

              <div>
                <label for="@Next">Número de tarjeta</label>
                <input type="text" pInputText [(ngModel)]="datosPagos.numero" />
              </div>

              <div>
                <label for="@Next">Fecha de validación</label>
                <input
                  type="text"
                  pInputText
                  placeholder="MM/AA"
                  [(ngModel)]="datosPagos.fechaValidez"
                />
              </div>

              <div>
                <label for="@Next">Código de seguridad (CVV)</label>
                <input
                  type="password"
                  pInputText
                  [(ngModel)]="datosPagos.numeroSecreto"
                />
              </div>

              <div class="flex gap-5 mt-4">
                <p-button
                  label="Pagar"
                  raised
                  (click)="
                    visiblePagar = false;
                    programaEntrenamiento.estado =
                      ProgramaEntrenamientoEstado.PAGADO
                  "
                ></p-button>
                <p-button
                  label="Cancelar"
                  raised
                  (click)="visiblePagar = false"
                ></p-button>
              </div>
            </div>
          </p-dialog>
        </div>

        } @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.PENDIENTE || programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.MODIFICADO || programaEntrenamiento.estado
        == ProgramaEntrenamientoEstado.PAGADO) {
        <div>
          <a
            ><p-button (click)="showDialogCancelar()" label="Cancelar" raised
          /></a>
          <p-dialog
            header="Cancelar programa"
            [(visible)]="visibleCancelar"
            [modal]="true"
            [style]="{ width: '30rem' }"
          >
            <div class="flex flex-col items-center mx-8">
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
        } @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.FINALIZADO) {
        <a routerLink="{{ programaEntrenamiento.id }}/valorar">
          <p-button label="Valorar" raised />
        </a>
        }
      </div>
    </div>
    }
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
  visiblePagar: boolean = false;
  visibleNuevo: boolean = false;

  datosPagos = {
    nombre: '',
    numero: '',
    fechaValidez: '',
    numeroSecreto: '',
  };

  showDialogCancelar() {
    this.visibleCancelar = true;
  }

  showDialogFecha() {
    this.visibleFecha = true;
  }

  showDialogPagar() {
    this.visiblePagar = true;
  }

  showDialogNuevo() {
    this.visibleNuevo = true;
  }
}
