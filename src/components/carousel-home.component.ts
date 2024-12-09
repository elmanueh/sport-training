import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'carousel-home-component',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  template: `
    <div class="bg-transparent">
      <p-carousel
        [value]="images"
        [numVisible]="1"
        [numScroll]="1"
        [circular]="true"
        [showIndicators]="false"
        [showNavigators]="false"
        autoplayInterval="3000"
      >
        >
        <ng-template let-images #item>
          <img
            src="{{ images.image }}"
            [alt]="images.name"
            class="rounded-border"
          />
        </ng-template>
      </p-carousel>
    </div>
  `,
})
export class CarouselHomeComponent {
  images = [
    {
      name: 'Item 1',
      image: '/assets/imagen-carousel-1.png',
    },
    {
      name: 'Item 2',
      image: '/assets/imagen-carousel-2.png',
    },
    {
      name: 'Item 3',
      image: '/assets/imagen-carousel-3.png',
    },
    {
      name: 'Item 4',
      image: '/assets/imagen-carousel-4.png',
    },
  ];
}
