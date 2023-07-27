import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { AudioService } from 'src/app/services/audioPage/audio.service';

@Component({
  selector: 'app-folk',
  templateUrl: './folk.component.html',
  styleUrls: ['./folk.component.css']
})
export class FolkComponent implements OnInit {


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
        items: 4
      }
    },
    nav: true
  }


  // banner images from api

  folkItems: any[] = [];

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.getAudioItems();
  }

  getAudioItems(): void {
    this.audioService.getAudioData().subscribe(
      (data: any) => {
        console.log('folk data', data)
        if (data.status && data.data && Array.isArray(data.data)) {
          const folkSection = data.data.find((section: any) => section.title === 'Folk');
          if (folkSection && folkSection.albums && Array.isArray(folkSection.albums)) {

            this.folkItems = folkSection.albums;
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
