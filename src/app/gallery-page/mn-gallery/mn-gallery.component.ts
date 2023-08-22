import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mn-gallery',
  templateUrl: './mn-gallery.component.html',
  styleUrls: ['./mn-gallery.component.css'],
})
export class MnGalleryComponent implements OnInit {
  images = [
    {
      id: 1,
      src: 'assets/homeBanner.jpg',
      alt: 'homebannerImg',
    },
    {
      id: 2,
      src: 'assets/homeBanner.jpg',
      alt: 'homebannerImg',
    },
  ];

  text=['adfdsf','sdfsdfsdf']
  constructor() {}

  ngOnInit() {
    console.log(this.images)
  }
}
