import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'centros-deportivos-card',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './centros-deportivos-card.component.html',
})
export class CentrosDeportivosCardComponent {
  titulo = 'Este es el titulo del sitio.';
  descripcion = 'Esta es la descripcion del sitio.';
}
