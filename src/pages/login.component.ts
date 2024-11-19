import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    CheckboxModule,
  ],
  template: `
    <section class="flex flex-column text-center">
      <img src="assets/logo.png" width="100px" />
      <p class="font-bold">
        TU CUENTA PARA TODO LO QUE SE REFIERE A <br />
        <span class="color-yellow">SPORT TRAINING </span>
      </p>
      <form class="mt-4">
        <div class="flex justify-content-center">
          <p-floatLabel>
            <input
              id="username"
              type="text"
              pInputText
              [(ngModel)]="username"
              name="username"
              class=""
            />
            <label for="username">Username</label>
          </p-floatLabel>
        </div>
        <p-password [(ngModel)]="password" [feedback]="false" name="password" />
        <div class="flex justify-content-center">
          <p-checkbox
            [(ngModel)]="checked"
            [binary]="true"
            inputId="binary"
            name="checkbox"
          />
          <p class="pl-2">Mantener la sesión activa</p>
        </div>
        <p>
          Al iniciar sesión, aceptas la <u>Pólitica de privacidad</u> y los
          <br />
          <u>Términos de uso</u> de
          <span class="color-yellow font-bold">Sport Training</span>
        </p>
        <p-button class="" label="Iniciar Sesión" />
        <p class="mt-3">
          ¿No eres miembro?
          <a href="https://elmanueh.es"><u>Únete a nosotros</u></a>
        </p>
      </form>
    </section>
  `,
})
export class LoginPage {
  username!: string;
  password!: string;
  checked!: boolean;
}
