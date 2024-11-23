import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/components/header.component';
import { FooterComponent } from '@/components/footer.component';
import { PrimeNG } from 'primeng/config';
import { MyPreset } from '@theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <header-component></header-component>
    <router-outlet></router-outlet>
    <footer-component></footer-component>
  `,
})
export class AppComponent {
  constructor(private config: PrimeNG) {
    this.config.theme.set({
      preset: MyPreset,
      options: {
        prefix: 'p',
        darkModeSelector: 'system',
        cssLayer: false,
      },
    });
  }
}
