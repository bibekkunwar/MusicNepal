import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeServiceService } from '../services/home-service.service';

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
    navText: ['<i class="fa-solid fa-circle-chevron-left"></i>', '<i class="fa-solid fa-circle-chevron-right"></i>'],
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


  // banner images from api

  albumItems: any[] = []; // Array to store the banner items from the API

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.getBannerItems(); // Fetch banner items from the API when the component initializes
  }

  getBannerItems(): void {
    this.homeService.bannerImage().subscribe(
      (data: any) => {
        if (data.status && data.data && Array.isArray(data.data)) {
          const bannersSection = data.data.find((section: any) => section.name === 'Albums');
          if (bannersSection && bannersSection.items && Array.isArray(bannersSection.items)) {
            this.albumItems = bannersSection.items;
            console.log('Banner Items:', this.albumItems);
          } else {
            console.error('Banners section not found in API response:', data);
          }
        } else {
          console.error('Invalid API response:', data);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
