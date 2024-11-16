import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
  ],
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
        <a class="flex align-items-center p-3 mr-8" [routerLink]="['/']">
          <img class="w-3rem" src="assets/logo.png" alt="logo" />
          <p class="pl-3 text-yellow-400 font-bold text-xl">Sport Training</p>
        </a>
      </ng-template>
      <ng-template pTemplate="item" let-item let-root="root">
        <a
          [routerLink]="item.route"
          pRipple
          class="flex align-items-center p-menuitem-link m-2 text-yellow-400"
        >
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </ng-template>
      <ng-template pTemplate="end">
        <div
          class="flex align-items-center gap-3 text-yellow-400 font-bold mr-4"
        >
          <input
            type="text"
            pInputText
            placeholder="Buscar"
            class="w-8rem sm:w-15rem"
          />
          <p-avatar
            image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png"
            shape="circle"
          />
          <div class="flex align-items-center gap-5">
            <a>Únete a Nosotros</a>
            <a>Iniciar Sesión</a>
            <a>Ayuda</a>
            <p class="text-green-200">Idioma</p>
          </div>
        </div>
      </ng-template>
    </p-menubar>
  `,
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Centros Deportivos',
        route: '/centros-deportivos',
      },
      {
        label: 'Mis Programas',
        route: '/mis-programas',
      },
      {
        label: 'Mis Actividades',
      },
    ];
  }
}
