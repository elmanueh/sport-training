import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';

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
  ],
  template: `
    <section class="flex justify-center items-center h-full ">
      <div
        class="w-1/4 text-center flex flex-col items-center border-primary border-2 bg-gray-800"
      >
        <img class="my-6" src="assets/logo.png" width="60px" />
        <h1 class="text-xl">
          TU CUENTA PARA TODO LO QUE<br />
          SE REFIERE A<br />
          <span class="text-2xl font-bold text-primary">SPORT TRAINING </span>
        </h1>
        <form class="flex flex-col justify-center w-80">
          <div class="flex justify-center mt-10">
            <p-floatlabel variant="in">
              <input
                pInputText
                id="username"
                [(ngModel)]="username"
                autocomplete="off"
                name="username"
                size="small"
                class="w-52"
              />
              <label for="username">Usuario</label>
            </p-floatlabel>
          </div>
          <div class="flex justify-center mt-2">
            <p-floatlabel variant="in">
              <p-password
                [(ngModel)]="password"
                inputId="password"
                name="password"
                size="small"
                [toggleMask]="true"
                class="w-full"
              />
              <label for="password">Contraseña</label>
            </p-floatlabel>
          </div>

          <div class="flex justify-center mt-4 items-center">
            <p-checkbox
              [(ngModel)]="checked"
              [binary]="true"
              inputId="binary"
              name="checkbox"
              size="small"
            />
            <p class="pl-2">Mantener la sesión activa</p>
          </div>
          <p class="mt-6">
            Al iniciar sesión, aceptas la <u> Pólitica de privacidad</u> y los
            <u>Términos de uso</u> <br />
            de <span class="font-bold text-primary">Sport Training</span>
          </p>
          <p-button label="Iniciar Sesión" size="small" class="mt-6" />
          <p class="my-3">
            ¿No eres miembro?
            <a href="https://elmanueh.es" class="underline text-primary"
              >Únete a nosotros</a
            >
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
