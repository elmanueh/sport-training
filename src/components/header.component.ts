import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

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
    ButtonModule,
    RouterModule,
  ],
  template: `
    <header>
      <p-menubar [model]="items">
        <ng-template pTemplate="start">
          <a class="flex items-center p-3 mr-8" [routerLink]="['/']">
            <img class="w-14" src="assets/logo.png" alt="logo" />
            <p class="pl-3 font-bold text-xl text-primary">Sport Training</p>
          </a>
        </ng-template>
        <ng-template pTemplate="item" let-item let-root="root">
          <a
            [routerLink]="item.route"
            pRipple
            class="flex items-center p-menuitem-link text-color"
          >
            <span class="font-bold">{{ item.label }}</span>
          </a>
        </ng-template>
        <ng-template pTemplate="end">
          <div class="flex items-center gap-3 text-color font-bold mr-4">
            <input
              type="text"
              pInputText
              placeholder="Buscar"
              class="w-32 sm:w-60"
            />
            <p-avatar image="https://github.com/elmanueh.png" shape="circle" />
            <div class="flex items-center gap-5">
              <a [routerLink]="['/']"> Únete a Nosotros </a>
              <a [routerLink]="['/login']">Iniciar Sesión</a>
              <a [routerLink]="['/']"> Ayuda </a>
              <a [routerLink]="['/']"> Idioma </a>
            </div>
          </div>
        </ng-template>
      </p-menubar>
    </header>
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
        route: '/mis-actividades',
      },
    ];
  }
}
