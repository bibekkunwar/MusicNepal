import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-latestVideos',
  templateUrl: './latestVideos.component.html',
  styleUrls: ['./latestVideos.component.css']
})
export class LatestVideosComponent  {

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
        items: 2
      }
    },
    nav: true
  }

  constructor() { }


}
