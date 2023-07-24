import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-latestRelease',
  templateUrl: './latestRelease.component.html',
  styleUrls: ['./latestRelease.component.css']
})
export class LatestReleaseComponent implements OnInit {

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
        items: 3
      }
    },
    nav: true
  }



  // banner images from api

  bannerItems: any[] = []; // Array to store the banner items from the API

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.getBannerItems(); // Fetch banner items from the API when the component initializes
  }

  getBannerItems(): void {
    this.homeService.bannerImage().subscribe(
      (data: any) => {
        if (data.status && data.data && Array.isArray(data.data)) {
          const bannersSection = data.data.find((section: any) => section.name === 'Banners');
          if (bannersSection && bannersSection.items && Array.isArray(bannersSection.items)) {
            this.bannerItems = bannersSection.items;
            console.log('Banner Items:', this.bannerItems);
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
