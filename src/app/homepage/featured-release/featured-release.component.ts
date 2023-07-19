import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-release',
  templateUrl: './featured-release.component.html',
  styleUrls: ['./featured-release.component.css']
})
export class FeaturedReleaseComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-sharp fa-solid fa-circle-left fa-lg" ></i>', '<i class="fa-sharp fa-solid fa-circle-right fa-lg"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true
  }


}
