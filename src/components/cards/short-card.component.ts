import { CancelDialogComponent } from '@/components/dialogs/cancelar-dialog.component';
import { NewDialogComponent } from '@/components/dialogs/new-dialog.component';
import { ShortCard } from '@/types/card';
import {
  ProgramaEntrenamiento,
  ProgramaEntrenamientoEstado,
} from '@/types/programa-entrenamiento';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DateDialogComponent } from '@components/dialogs/date-dialog.component';
import { PaymentDialogComponent } from '@components/dialogs/payment-dialog.component';
import { Reserva } from '@/types/programa-entrenamiento';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { RatingModule } from 'primeng/rating';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'short-card',
  standalone: true,
  imports: [
    ButtonModule,
    RouterModule,
    RatingModule,
    FormsModule,
    CommonModule,
    CalendarModule,
    DateDialogComponent,
    CancelDialogComponent,
    NewDialogComponent,
    PaymentDialogComponent,
    Toast,
  ],
  providers: [MessageService],
  template: `
    <p-toast />
    @if (reserva) {
    <div
      class="flex flex-col gap-4 p-4 card rounded-xl shadow-xl bg-surface-900 transition-all hover:bg-surface-800 hover:bg-opacity-80"
    >
      <div class="font-bold text-2xl h-8">
        {{ reserva.titulo }}
      </div>
      <div class="flex justify-end">
        <p-rating [(ngModel)]="reserva.valoracion" />
      </div>
      <img
        class="rounded-xl flex w-full h-44"
        [src]="reserva.imagen"
        height="250vh"
      />
      <textarea
        rows="5"
        cols="5"
        pTextarea
        [(ngModel)]="reserva.comentario"
        placeholder="Comentario"
        class="surface-400 text-900 w-full h-20 rounded-xl justify-end"
      ></textarea>
    </div>
    } @else if (programaEntrenamiento.estado ==
    ProgramaEntrenamientoEstado.NUEVO) {
    <div
      class="flex flex-col card items-center justify-center rounded-xl shadow-xl opacity-25 transition-opacity bg-surface-900 hover:opacity-100"
    >
      <a
        ><p-button
          (click)="statusVisibleNew = true"
          icon="pi pi-plus-circle"
          label="Crear nuevo"
          raised
      /></a>
      <new-dialog
        [visible]="statusVisibleNew"
        (status)="statusVisibleNew = false; acceptOperation($event)"
      />
    </div>
    } @else {
    <div
      class="flex flex-col p-4 card rounded-xl shadow-xl bg-surface-900 transition-all hover:bg-surface-800 hover:bg-opacity-80"
    >
      <div class="flex gap-2 pb-3 h-full">
        <div class="flex flex-col justify-between w-full">
          <p class="font-bold text-2xl">{{ programaEntrenamiento.titulo }}</p>
          <p class="italic">{{ programaEntrenamiento.estado }}</p>
        </div>
        <a
          class="flex justify-end"
          routerLink="{{ programaEntrenamiento.id }}/reservas"
        >
          <p-button label="Información" raised size="small" />
        </a>
      </div>
      <img
        src="{{ programaEntrenamiento.imagen }}"
        class="rounded-xl h-3/5 object-cover"
      />
      <div class="flex justify-evenly pt-4">
        @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.PENDIENTE) {
        <a
          ><p-button
            (click)="statusVisibleDate = true"
            label="Cambiar fecha"
            raised
            size="small"
        /></a>
        <date-dialog
          [programaEntrenamiento]="programaEntrenamiento"
          [visible]="statusVisibleDate"
          (status)="statusVisibleDate = false; acceptOperation($event)"
        />
        } @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.PENDIENTE || programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.MODIFICADO) {
        <a
          ><p-button
            (click)="statusVisiblePayment = true"
            label="Pagar"
            raised
            size="small"
        /></a>
        <payment-dialog
          [programaEntrenamiento]="programaEntrenamiento"
          [visible]="statusVisiblePayment"
          (status)="statusVisiblePayment = false; acceptOperation($event)"
        />
        } @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.PENDIENTE || programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.MODIFICADO || programaEntrenamiento.estado
        == ProgramaEntrenamientoEstado.PAGADO) {
        <a
          ><p-button
            (click)="statusVisibleCancel = true"
            label="Cancelar"
            raised
            size="small"
        /></a>
        <cancel-dialog
          [programaEntrenamiento]="programaEntrenamiento"
          [visible]="statusVisibleCancel"
          (status)="statusVisibleCancel = false; acceptOperation($event)"
        />
        } @if (programaEntrenamiento.estado ==
        ProgramaEntrenamientoEstado.FINALIZADO) {
        <a routerLink="{{ programaEntrenamiento.id }}/valorar">
          <p-button label="Valorar" raised size="small" />
        </a>
        }
      </div>
    </div>
    }
  `,
  styles: `
    .card {
      width: 25rem;
      height: 24rem;
    }
  
  `,
})
export class ShortCardComponent implements OnInit {
  @Input({ required: false }) programaEntrenamiento!: ProgramaEntrenamiento;
  ProgramaEntrenamientoEstado = ProgramaEntrenamientoEstado;
  @Input({ required: false }) reserva!: Reserva;
  card!: ShortCard;

  ngOnInit() {
    this.card = {
      categoria: '',
      valoracion: 0,
      fecha: '',
      hora: '',
      monitor: undefined,
    };
  }

  statusVisibleCancel: boolean = false;
  statusVisibleDate: boolean = false;
  statusVisiblePayment: boolean = false;
  statusVisibleNew: boolean = false;

  constructor(private messageService: MessageService) {}
  acceptOperation(status: boolean) {
    if (!status) return;
    this.messageService.add({
      severity: 'success',
      summary: 'Operación realizada',
      detail: 'La operación se ha realizado con éxito.',
    });
  }
}
