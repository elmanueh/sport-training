import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'back-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  template: `
    <div>
      <a routerLink="{{ route }}">
        <p-button
          label="Volver atrás"
          icon="pi pi-chevron-circle-left"
          raised
        ></p-button>
      </a>
    </div>
  `,
})
export class BackButtonComponent {
  @Input({ required: true }) route!: string;
}
