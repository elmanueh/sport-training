import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { Fluid } from 'primeng/fluid';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ciudades, deportes } from '@consts/register-autocomplete';
import { DatePickerModule } from 'primeng/datepicker';
import { User } from '@/types/user';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CheckboxModule,
    RouterModule,
    Fluid,
    AutoCompleteModule,
    DatePickerModule,
  ],
  template: `
    <section class="flex justify-center items-center h-full ">
      <div
        class="w-4/12 text-center flex flex-col card items-center justify-center rounded-xl shadow-xl bg-surface-900"
      >
        <img class="my-6" src="assets/logo.png" width="60px" />
        <h1 class="text-2xl font-bold text-primary">Crear una Cuenta</h1>
        <h2 class="text-base mt-2">
          Empieza creandote tu nueva cuenta y únete a nuestra comunidad
        </h2>
        <p-fluid class="flex flex-col gap-4 mt-4">
          <p-floatlabel variant="in" class="mx-16">
            <input
              pInputText
              id="nombre"
              [(ngModel)]="usuario.nombre"
              autocomplete="off"
              name="nombre"
            />
            <label for="nombre">Nombre Completo</label>
          </p-floatlabel>
          <p-floatlabel variant="in" class="mx-16">
            <input
              pInputText
              id="correo"
              [(ngModel)]="usuario.correo"
              autocomplete="off"
              name="correo"
            />
            <label for="correo">Correo Electrónico</label>
          </p-floatlabel>
          <p-floatlabel variant="in" class="mx-16">
            <p-password
              [(ngModel)]="usuario.password"
              inputId="password"
              name="password"
              [toggleMask]="true"
            />
            <label for="password">Contraseña</label>
          </p-floatlabel>

          <div class="flex justify-around mx-16 gap-5">
            <p-floatlabel variant="in" class="w-full">
              <p-autocomplete
                [(ngModel)]="usuario.ciudad"
                [suggestions]="filtered"
                (completeMethod)="filter($event, ciudades)"
              />
              <label for="ciudad">Ciudad</label>
            </p-floatlabel>

            <p-floatlabel variant="in" class="w-full">
              <p-datepicker
                [(ngModel)]="usuario.fechaNacimiento"
                inputId="fechaNacimiento"
                iconDisplay="input"
              />
              <label for="fechaNacimiento">Fecha Nacimiento</label>
            </p-floatlabel>
          </div>

          <p-floatlabel variant="in" class="mx-16">
            <p-autocomplete
              [(ngModel)]="usuario.deporte"
              [suggestions]="filtered"
              (completeMethod)="filter($event, deportes)"
            />
            <label for="deporte">Deporte Favorito</label>
          </p-floatlabel>

          <div class="flex items-center mx-16">
            <p-checkbox
              [(ngModel)]="checked"
              [binary]="true"
              inputId="binary"
              name="checkbox"
              class="flex justify-center"
            />
            <p class="pl-2">
              Acepto los
              <span class="falso-click">Términos de uso</span> y
              <span class="falso-click">Condiciones</span>
            </p>
          </div>
        </p-fluid>
        <p-button label="Registrarse" raised class="mt-10" />
        <p class="mt-5 mb-10">
          ¿Tienes ya una cuenta?
          <a [routerLink]="['/login']"
            ><span class="text-primary falso-click"> Inicia sesión </span></a
          >
        </p>
      </div>
    </section>
  `,
  styles: `
    .falso-click:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `,
})
export class RegisterPage {
  usuario: User = {
    nombre: '',
    correo: '',
    password: '',
    ciudad: '',
    fechaNacimiento: '',
    deporte: '',
  };
  checked!: boolean;

  deportes = deportes;
  ciudades = ciudades;

  filtered: any[] = [];

  filter(event: any, array: any[]) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < array.length; i++) {
      let option = array[i];
      if (option.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(option);
      }
    }
    this.filtered = filtered;
  }
}
