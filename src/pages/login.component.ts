import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';

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
  ],
  template: `
    <section class="flex justify-content-center align-content-center">
      <div class="my-8 w-30rem text-center border-2 border-gray-400">
        <img class="my-6" src="assets/logo.png" width="60px" />
        <p class="font-bold text-2xl">
          TU CUENTA PARA TODO LO QUE<br />
          SE REFIERE A<br />
          <span class="text-3xl">SPORT TRAINING </span>
        </p>
        <form class="mt-4 flex flex-column w-20rem">
          <input
            type="text"
            pInputText
            [(ngModel)]="username"
            name="username"
          />
          <p-password
            [(ngModel)]="password"
            [feedback]="false"
            name="password"
          />

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

            <u>Términos de uso</u> <br />
            de
            <span class="font-bold">Sport Training</span>
          </p>
          <p-button label="Iniciar Sesión" />
          <p class="mt-3">
            ¿No eres miembro?
            <a href="https://elmanueh.es"><u>Únete a nosotros</u></a>
          </p>
        </form>
      </div>
    </section>
  `,
  styles: `
    
`,
})
export class LoginPage {
  username!: string;
  password!: string;
  checked!: boolean;
}
