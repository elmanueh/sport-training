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
import { InputNumber } from 'primeng/inputnumber';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { Select } from 'primeng/select';

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
    InputNumber,
    CommonModule,
    CalendarModule,
    Select,
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
        [draggable]="false"
        [style]="{ width: '30rem' }"
        header="Planifica tu enfoque de entrenamiento"
      >
        <div class="flex flex-col items-center gap-5">
          <div class="flex flex-col gap-2 w-full">
            <label for="nombrePrograma">Nombre del programa</label>
            <input
              type="text"
              class="p-inputtext"
              [(ngModel)]="datos.nombrePrograma"
            />
          </div>

          <div class="flex flex-col gap-2 w-full">
            <label for="fechaInicio">Fecha Inicio</label>
            <p-datepicker
              [(ngModel)]="datos.fechaInicio"
              dateFormat="dd/mm/yy"
            />
          </div>

          <div class="flex flex-col gap-2 w-full">
            <label for="diasEntreno">Días a la semana</label>
            <input
              class="p-inputtext"
              id="diasEntreno"
              type="number"
              [(ngModel)]="datos.diasEntreno"
              min="1"
              max="7"
            />
          </div>

          <div class="flex flex-col gap-2 w-full">
            <label for="deporte">Seleccionar Deporte</label>
            <p-select
              id="deporte"
              [(ngModel)]="datos.deporte"
              [options]="deportes"
              optionLabel="name"
              placeholder="Seleccione un deporte"
            ></p-select>
          </div>

          <div class="flex flex-col gap-2 w-full">
            <label for="centroDeportivo">Seleccionar Centro Deportivo</label>
            <p-select
              id="centroDeportivo"
              [(ngModel)]="datos.centroDeportivo"
              [options]="centrosDeportivo"
              optionLabel="name"
              placeholder="Seleccione un centro"
            ></p-select>
          </div>

          <div class="flex flex-col gap-2 w-full">
            <label for="franjaHoraria">Seleccionar Franja Horaria</label>
            <p-select
              id="franjaHoraria"
              [(ngModel)]="datos.franjaHoraria"
              [options]="franjasHorarias"
              optionLabel="name"
              placeholder="Seleccione una franja horaria"
            ></p-select>
          </div>

          <div class="flex gap-5 mt-4">
            <p-button
              label="Aceptar"
              raised
              (click)="visibleNuevo = false"
            ></p-button>
            <p-button
              label="Rechazar"
              raised
              (click)="visibleNuevo = false"
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
            [draggable]="false"
            [style]="{ width: '25rem' }"
            header="Modificar fecha"
          >
            <div class="flex flex-col items-center h-100">
              <p-datepicker
                class="max-w-full"
                [(ngModel)]="date"
                [inline]="true"
              />

              <p class="mt-2 text-lg">Nuevo precio: 20€</p>
              <div class="flex gap-5 mt-2">
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
              <p class="mt-2">Solo puedes modificarla una vez.</p>
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
            [draggable]="false"
            [style]="{ width: '25rem' }"
          >
            <div class="flex flex-col gap-8 items-center text-base">
              <div class="flex flex-col w-full gap-3">
                <label for="nombreTarjeta">Nombre en la tarjeta</label>
                <input
                  type="text"
                  id="nombreTarjeta"
                  [(ngModel)]="datosPagos.nombre"
                  class="p-inputtext"
                />
              </div>

              <div class="flex flex-col w-full gap-3">
                <label for="numeroTarjeta">Número de la tarjeta</label>
                <p-inputnumber
                  mode="decimal"
                  [useGrouping]="false"
                  id="numeroTarjeta"
                  [(ngModel)]="datosPagos.numero"
                />
              </div>
              <div class="flex flex-row w-full gap-2">
                <div class="flex flex-col gap-3 w-full">
                  <label for="fechaTarjeta">Fecha de validez</label>
                  <p-datepicker
                    id="fechaTarjeta"
                    [(ngModel)]="datosPagos.fechaValidez"
                    view="month"
                    dateFormat="mm/yy"
                  />
                </div>

                <div class="flex flex-col gap-3">
                  <label for="ccvTarjeta">CVV</label>
                  <p-inputnumber
                    mode="decimal"
                    [useGrouping]="false"
                    id="ccvTarjeta"
                    [(ngModel)]="datosPagos.numeroSecreto"
                    max="999"
                  />
                </div>
              </div>

              <div class="flex gap-5 mt-6">
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
            [draggable]="false"
          >
            <div class="flex flex-col items-center mx-8">
              <p class="font-bold text-2xl mb-3 text-center">
                ¿Estás seguro que deseas cancelar el programa deportivo?
              </p>
              <p class="mb-2 text-base">
                Programa entrenmiento: {{ programaEntrenamiento.titulo }}
              </p>
              <p class="mb-2 text-xl">Se devolverá 5€</p>
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

  deportes: { name: string; code: string }[] | undefined;
  centrosDeportivo: { name: string; code: string }[] | undefined;
  franjasHorarias: { name: string; code: string }[] | undefined;

  ngOnInit() {
    this.card = {
      categoria: '',
      valoracion: 0,
      page: this.actualPage,
      fecha: '',
      hora: '',
      monitor: undefined,
    };

    this.deportes = [
      { name: 'Fútbol', code: 'FUT' },
      { name: 'Baloncesto', code: 'BAL' },
      { name: 'Natación', code: 'NAT' },
    ];

    this.centrosDeportivo = [
      { name: 'Centro Deportivo Olímpico', code: 'A' },
      { name: 'Club Deportivo El Lago', code: 'B' },
      { name: 'Complejo Deportivo Sierra Verde', code: 'C' },
    ];

    this.franjasHorarias = [
      { name: 'Mañana', code: 'MAN' },
      { name: 'Tarde', code: 'TAR' },
    ];
  }

  visibleCancelar: boolean = false;
  visibleFecha: boolean = false;
  date: Date | undefined;
  visiblePagar: boolean = false;
  visibleNuevo: boolean = false;

  datosPagos = {
    nombre: '',
    numero: 0,
    fechaValidez: '',
    numeroSecreto: 0,
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

  datos = {
    nombrePrograma: '',
    fechaInicio: null,
    diasEntreno: null,
    deporte: null,
    centroDeportivo: null,
    franjaHoraria: null,
  };
}
