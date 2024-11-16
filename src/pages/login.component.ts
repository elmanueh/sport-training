import { Component } from '@angular/core';
import { LoginComponent } from "../components/login.component";

@Component({
  selector: 'centros-deportivos-page',
  standalone: true,
  imports: [LoginComponent],
  template: `
    <login />
  `,
})
export class LoginPage {
}
