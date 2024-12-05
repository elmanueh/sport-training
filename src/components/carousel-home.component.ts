import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'carousel-home-component',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  template: `
    <div class="card w-2/3 bg-slate-500">
      <p-carousel
        [value]="images"
        [numVisible]="1"
        [numScroll]="1"
        [circular]="true"
        autoplayInterval="3000"
      >
        >
        <ng-template let-images #item>
          <div class="border border-surface rounded-border m-2 p-4">
            <div class="mb-4">
              <div class="relative mx-auto">
                <img
                  src="{{ images.image }}"
                  [alt]="images.name"
                  class="w-full rounded-border"
                />
                <p class="text-center text-primary text-3xl mt-3">
                  {{ images.name }}
                </p>
              </div>
            </div>
          </div>
        </ng-template>
      </p-carousel>
    </div>
  `,
})
export class CarouselHomeComponent {
  images = [
    {
      name: 'Item 1',
      image: 'https://github.com/elmanueh.png',
    },
    {
      name: 'Item 2',
      image: 'https://github.com/elmanueh.png',
    },
    {
      name: 'Item 3',
      image: 'https://github.com/elmanueh.png',
    },
    {
      name: 'Item 4',
      image: 'https://github.com/elmanueh.png',
    },
    {
      name: 'Item 5',
      image: 'https://github.com/elmanueh.png',
    },
  ];
}
