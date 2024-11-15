import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { CentrosDeportivosCardComponent } from '../components/centros-deportivos-card.component';

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [CentrosDeportivosCardComponent, PaginatorModule],
  templateUrl: './centros-deportivos.component.html',
})
export class CentrosDeportivosPage {}
