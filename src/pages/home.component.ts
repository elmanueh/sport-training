import { Component } from '@angular/core';
import { CarouselHomeComponent } from '@components/carousel-home.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CarouselHomeComponent],
  template: `
    <section class="flex w-full justify-center h-full">
      <div class="flex flex-col w-3/4 mt-40">
        <div class="flex">
          <img class="w-12" src="assets/logo.png" alt="logo" />
          <p class="text-primary text-xl font-bold h-full content-center ml-3">
            Sport Training
          </p>
        </div>
        <div class="flex flex-col text-color mt-8">
          <h1 class="text-2xl font-bold">
            HAZ QUE CADA ENTRENAMIENTO SUME A TUS OBJETIVOS
          </h1>
          <p class="text-xl">
            Tu mejor versión comienza aquí. Donde encontrarás todos los
            servicios necesarios para alcanzar los objetivos que te propongas.
          </p>
        </div>
      </div>
    </section>
    <section class="flex justify-center">
      <div class="flex w-2/3">
        <carousel-home-component></carousel-home-component>
      </div>
    </section>
  `,
})
export class HomePage {}
