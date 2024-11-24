import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col items-center mt-8">
      <div class="flex flex-col items-center text-yellow-400">
        <img class="w-12" src="assets/logo.png" alt="logo" />
        <p>Sport Training</p>
      </div>
      <div class="text-gray-300">
        <p class="text-2xl font-bold">
          HAZ QUE CADA ENTRENAMIENTO SUME A TUS OBJETIVOS
        </p>
        <p class="text-lg">
          Tu mejor versión comienza aquí. Donde encontrarás todos los servicios
          necesarios para alcanzar los objetivos que te propongas.
        </p>
      </div>
    </div>
  `,
})
export class HomePage {}
