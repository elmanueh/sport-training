import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'date-dialog',
  standalone: true,
  imports: [Dialog, DatePicker, ButtonModule, FormsModule],
  template: `
    <p-dialog
      [(visible)]="visible"
      [draggable]="false"
      [style]="{ width: '25rem', height: '35rem' }"
      header="Decide cuándo comenzar"
      [modal]="true"
      (onHide)="status.emit(false)"
    >
      <div class="flex flex-col items-center">
        <p-datepicker [(ngModel)]="dateSelected" [inline]="true" />
        <p class="mt-2 text-lg">
          Nuevo precio:
          <span class="text-primary">
            {{ programaEntrenamiento.precio * 0.9 }}€
          </span>
        </p>
        <div class="flex gap-5 mt-6">
          <p-button label="Aceptar" raised (click)="acceptButton()" />
          <p-button
            label="Rechazar"
            severity="secondary"
            raised
            (click)="rejectButton()"
          />
        </div>
        <p class="mt-2">Solo puedes modificarla una vez.</p>
      </div>
    </p-dialog>
  `,
})
export class DateDialogComponent {
  @Input({ required: true }) programaEntrenamiento!: ProgramaEntrenamiento;
  @Input({ required: true }) visible!: boolean;
  @Output() status = new EventEmitter<boolean>();

  dateSelected: Date | undefined;
  ProgramaEntrenamientoEstado = ProgramaEntrenamientoEstado;

  acceptButton() {
    this.status.emit(true);
    this.programaEntrenamiento.estado = ProgramaEntrenamientoEstado.MODIFICADO;
  }

  rejectButton() {
    this.status.emit(false);
  }
}
