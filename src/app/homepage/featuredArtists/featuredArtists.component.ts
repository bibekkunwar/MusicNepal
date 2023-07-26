import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-featuredArtists',
  templateUrl: './featuredArtists.component.html',
  styleUrls: ['./featuredArtists.component.css']
})
export class FeaturedArtistsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['<i class="fa-solid fa-circle-chevron-left"></i>', '<i class="fa-solid fa-circle-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    nav: true
  }


  artistsItems:any[] = [];
  constructor(private homeService: HomeServiceService) { }

  ngOnInit():void {
    this.getBannerItems();
  }

   getBannerItems(): void {
    this.homeService.bannerImage().subscribe(
      (data: any) => {
        if (data.status && data.data && Array.isArray(data.data)) {
          const artistsSection = data.data.find((section: any) => section.name === 'Artists');
          if (artistsSection && artistsSection.items && Array.isArray(artistsSection.items)) {
            this.artistsItems = artistsSection.items;
            console.log('Banner Items:', this.artistsItems);
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
