import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeServiceService } from '../../services/homePage/home-service.service';
import { AudioService } from 'src/app/services/audioPage/audio.service';

@Component({
  selector: 'app-featured-release',
  templateUrl: './featured-release.component.html',
  styleUrls: ['./featured-release.component.css']
})
export class FeaturedReleaseComponent {
  audioList: any = [];

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

  albumItems: any[] = [];

  constructor(private homeService: HomeServiceService, private audioService: AudioService) {}

  ngOnInit(): void {
    this.getBannerItems();
  }

  getBannerItems(): void {
    this.homeService.getHomeData().subscribe(
      (data: any) => {
        if (data.status && data.data && Array.isArray(data.data)) {
          const bannersSection = data.data.find((section: any) => section.name === 'Albums');
          if (bannersSection && bannersSection.items && Array.isArray(bannersSection.items)) {
            this.albumItems = bannersSection.items;
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

  getPreviewAudio():void{
    this.audioService.getPreviewData().subscribe(
      (res:any) => {
        console.log(res);
this.audioList = res.data.tracks;
      }
    )
  }

}
