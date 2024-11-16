import { Component, Input } from '@angular/core';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'login',
  standalone: true,
  imports: [PasswordModule, FormsModule, CheckboxModule],
  template: `
    <div class="flex justify-content-center">
      <div
        class="p-6 bg-gray-700 w-50rem border-round-xl text-gray-900 justify-content-center"
      >
        <div class="flex justify-content-center pb-2">
          <img class="w-3rem" src="assets/logo.png" />
        </div>
        <div class="pb-5">
          <div
            class="flex justify-content-center font-bold text-gray-800 text-2xl pb-1"
          >
            TU CUENTA PARA TODO LO QUE SE REFIERE A
          </div>
          <div
            class="flex justify-content-center font-bold text-yellow-400 text-3xl"
          >
            SPORT TRAINING
          </div>
        </div>
        <div class="card flex justify-content-center pb-3">
          <div class="flex flex-column">
            <label>Nombre Usuario</label>
            <input pInputText [(ngModel)]="usuarioValue" class="w-20rem" />
          </div>
        </div>
        <div class="card flex justify-content-center pb-3">
          <div class="flex flex-column">
            <label>Contraseña</label>
            <p-password
              [(ngModel)]="contrasenaValue"
              [feedback]="false"
              [toggleMask]="true"
              class="w-20rem"
            />
          </div>
        </div>
        <div class="card flex justify-content-center gap-3 pb-3">
          <div class="flex items-center gap-2">
            <p-checkbox
              [(ngModel)]="checked"
              [binary]="true"
              inputId="binary"
            ></p-checkbox>
            <label class="text-xs">Manten la sesión activa</label>
          </div>
          <div class="text-xs underline">¿Olvidaste tu contraseña?</div>
        </div>
        <div class="w-full flex justify-content-center pb-3">
          <div class="w-20rem text-center text-xs">
            <label class="inline">Al iniciar sesión, aceptas la </label>
            <label class="inline underline">Política de privacidad</label>
            <label class="inline"> y los </label>
            <label class="inline underline">Términos de uso</label>
            <label class="inline"> de </label>
            <label class="inline text-yellow-400">Sport Training</label>
            <label class="inline">.</label>
          </div>
        </div>
        <div class="flex justify-content-center pb-3">
          <a class="p-button flex justify-content-center w-20rem">
            Iniciar Sesión
          </a>
        </div>
        <div class="flex justify-content-center gap-1">
          <label class="text-xs flex">¿No eres miembro?</label>
          <div class="flex justify-content-center">
            <label class="text-xs flex underline">Unete a nosotros</label>
            <label class="text-xs flex">.</label>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  contrasenaValue!: string;
  usuarioValue!: string;
  checked!: false;
}
