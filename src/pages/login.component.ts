import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { Fluid } from 'primeng/fluid';
import { User } from '@/types/user';

@Component({
  selector: 'login-page',
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
  ],
  template: `
    <section class="flex justify-center items-center h-full ">
      <div
        class="w-4/12 text-center flex flex-col card items-center justify-center rounded-xl shadow-xl bg-surface-900"
      >
        <img class="my-6" src="assets/logo.png" width="60px" />
        <h1 class="text-xl">
          TU CUENTA PARA TODO LO QUE SE REFIERE A<br />
          <span class="text-2xl font-bold text-primary">SPORT TRAINING </span>
        </h1>
        <p-fluid class="flex flex-col gap-4 mt-4">
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
              [feedback]="false"
            />
            <label for="password">Contraseña</label>
          </p-floatlabel>

          <div class="flex items-center mx-16">
            <p-checkbox
              [(ngModel)]="checked"
              [binary]="true"
              inputId="binary"
              name="checkbox"
              class="flex justify-center"
            />
            <p class="pl-2">Mantener la sesión activa</p>
          </div>
          <p class="mx-16">
            Al iniciar sesión, aceptas la
            <span class="falso-click">Pólitica de privacidad</span> y los
            <span class="falso-click">Términos de uso</span> de
            <span class="font-bold text-primary">Sport Training</span>
          </p>
        </p-fluid>
        <p-button label="Iniciar Sesión" raised class="mt-10" />
        <div class="flex flex-col mt-5 mb-10 gap-2">
          <p>
            ¿Has olvidado tu contraseña?
            <a href="https://elmanueh.es"><span  class="text-primary falso-click"> Recuperar contraseña </span></a>
          </p>
          <p>
            ¿No eres miembro?
            <a [routerLink]="['/register']"
              ><span class="text-primary falso-click">
                Únete a nosotros
              </span></a
            >
          </p>
        </div>
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
export class LoginPage {
  usuario: User = {
    nombre: '',
    correo: '',
    password: '',
    ciudad: '',
    fechaNacimiento: '',
    deporte: '',
  };
  checked!: boolean;
}
