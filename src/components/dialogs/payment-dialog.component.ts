import { Payment } from '@/types/payment';
import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Fluid } from 'primeng/fluid';
import { InputMask } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'payment-dialog',
  standalone: true,
  imports: [
    Dialog,
    ButtonModule,
    FormsModule,
    Fluid,
    InputMask,
    InputTextModule,
  ],
  template: `
    <p-dialog
      header="Mejora pagando tu plan"
      [(visible)]="visible"
      [modal]="true"
      [draggable]="false"
      [style]="{ width: '25rem' }"
      (onHide)="status.emit(false)"
    >
      <div>
        <p-fluid class="flex flex-col gap-2">
          <div class="flex flex-col gap-1">
            <label for="nombreTarjeta">Nombre del titular</label>
            <input type="text" [(ngModel)]="payment.name" pInputText />
          </div>

          <div class="flex flex-col gap-1">
            <label for="number">Número de la tarjeta</label>
            <p-inputmask
              mask="9999 9999 9999 9999"
              [(ngModel)]="payment.number"
              placeholder="1234 5678 9012 3456"
              slotChar=""
            />
          </div>

          <div class="flex w-full gap-3">
            <div class="flex flex-col gap-1">
              <label for="fechaTarjeta">Fecha de validez</label>
              <p-inputmask
                mask="99/9999"
                [(ngModel)]="payment.expirationDate"
                placeholder="12/3456"
                slotChar=""
              />
            </div>

            <div class="flex flex-col gap-1">
              <label for="cvv">CVV</label>
              <p-inputmask
                mask="999"
                [(ngModel)]="payment.cvv"
                placeholder="123"
                slotChar=""
              />
            </div>
          </div>
        </p-fluid>
        <div class="flex gap-5 mt-6 justify-center">
          <p-button label="Pagar" raised (click)="acceptButton()" />
          <p-button
            label="Cancelar"
            raised
            severity="secondary"
            (click)="rejectButton()"
          />
        </div>
      </div>
    </p-dialog>
  `,
})
export class PaymentDialogComponent {
  @Input({ required: true }) programaEntrenamiento!: ProgramaEntrenamiento;
  @Input({ required: true }) visible!: boolean;
  @Output() status = new EventEmitter<boolean>();

  ProgramaEntrenamientoEstado = ProgramaEntrenamientoEstado;
  payment: Payment = {
    id: 0,
    name: '',
    number: 0,
    expirationDate: new Date(),
    cvv: 0,
  };

  acceptButton() {
    this.programaEntrenamiento.estado = ProgramaEntrenamientoEstado.PAGADO;
    this.status.emit(true);
  }

  rejectButton() {
    this.status.emit(false);
  }
}
