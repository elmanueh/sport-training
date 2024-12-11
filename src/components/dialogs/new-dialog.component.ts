import { ProgramaEntrenamientoEstado } from '@/types/programa-entrenamiento';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';
import { Select } from 'primeng/select';
import { Fluid } from 'primeng/fluid';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  selector: 'new-dialog',
  standalone: true,
  imports: [
    Dialog,
    DatePicker,
    ButtonModule,
    FormsModule,
    Select,
    Fluid,
    InputNumber,
  ],
  template: `
    <p-dialog
      [(visible)]="visible"
      [modal]="true"
      [draggable]="false"
      [style]="{ width: '30rem' }"
      header="Planifica tu enfoque de entrenamiento"
      (onHide)="status.emit(false)"
    >
      <p-fluid class="flex flex-col gap-5">
        <div class="flex flex-col gap-1">
          <label for="nameProgram">Nombre del programa</label>
          <input
            type="text"
            class="p-inputtext"
            [(ngModel)]="programData.nombrePrograma"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="fechaInicio">Fecha de Inicio</label>
          <p-datepicker
            [(ngModel)]="programData.fechaInicio"
            dateFormat="dd 'de' MM 'de' yy"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="franjaHoraria">Franja Horaria</label>
          <p-select
            id="franjaHoraria"
            [(ngModel)]="programData.franjaHoraria"
            [options]="franjasHorarias"
            optionLabel="name"
            placeholder="Seleccione una franja horaria"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="deporte">Seleccionar Deporte</label>
          <p-select
            id="deporte"
            [(ngModel)]="programData.deporte"
            [options]="deportes"
            optionLabel="name"
            placeholder="Seleccione un deporte"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="centroDeportivo">Seleccionar Centro Deportivo</label>
          <p-select
            id="centroDeportivo"
            [(ngModel)]="programData.centroDeportivo"
            [options]="centrosDeportivo"
            optionLabel="name"
            placeholder="Seleccione un centro"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label for="diasEntreno">Entrenamiento / Semana</label>
          <p-inputnumber
            inputId="integeronly"
            [(ngModel)]="programData.diasEntreno"
            min="1"
            max="7"
            maxlength="1"
          />
        </div>
      </p-fluid>
      <div class="flex justify-center gap-5 mt-10">
        <p-button label="Aceptar" raised (click)="acceptButton()"></p-button>
        <p-button
          label="Rechazar"
          severity="secondary"
          raised
          (click)="rejectButton()"
        />
      </div>
    </p-dialog>
  `,
})
export class NewDialogComponent implements OnInit {
  @Input({ required: true }) visible!: boolean;
  @Output() status = new EventEmitter<boolean>();

  programData = {
    nombrePrograma: '',
    fechaInicio: null,
    diasEntreno: null,
    deporte: null,
    centroDeportivo: null,
    franjaHoraria: null,
  };

  deportes: { name: string; code: string }[] | undefined;
  centrosDeportivo: { name: string; code: string }[] | undefined;
  franjasHorarias: { name: string; code: string }[] | undefined;

  ngOnInit() {
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

  acceptButton() {
    this.status.emit(true);
  }

  rejectButton() {
    this.status.emit(false);
  }
}
