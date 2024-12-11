import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'cancel-dialog',
  standalone: true,
  imports: [Dialog, ButtonModule, FormsModule],
  template: `
    <p-dialog
      header="Lamentamos que decidas marcharte"
      [(visible)]="visible"
      [style]="{ width: '30rem' }"
      [draggable]="false"
      (onHide)="status.emit(false)"
      [modal]="true"
    >
      <div class="flex flex-col items-center mx-8">
        <p class="font-bold text-2xl mb-3 text-center">
          ¿Deseas realmente cancelar tu programa deportivo
          <span class="text-primary"> {{ programaEntrenamiento.titulo }}</span
          >?
        </p>
        <p class="mb-6 text-xl">
          Reembolso estimado:
          <span class="text-primary font-bold"
            >{{ programaEntrenamiento.precio * 0.3 }}€</span
          >
        </p>
        <div class="flex justify-center gap-3">
          <p-button
            label="Aceptar"
            raised
            severity="secondary"
            (click)="acceptButton()"
          />
          <p-button label="Rechazar" raised (click)="rejectButton()" />
        </div>
      </div>
    </p-dialog>
  `,
})
export class CancelDialogComponent {
  @Input({ required: true }) programaEntrenamiento!: ProgramaEntrenamiento;
  @Input({ required: true }) visible!: boolean;
  @Output() status = new EventEmitter<boolean>();

  ProgramaEntrenamientoEstado = ProgramaEntrenamientoEstado;

  acceptButton() {
    this.status.emit(true);
    this.programaEntrenamiento.estado = ProgramaEntrenamientoEstado.CANCELADO;
  }

  rejectButton() {
    this.status.emit(false);
  }
}
