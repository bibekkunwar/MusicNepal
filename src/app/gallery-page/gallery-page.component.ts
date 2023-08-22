import { Component, Input, OnInit } from '@angular/core';

interface Item{
  imageSrc : string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  // @Input() galleryData: itme[] = [];
  constructor() { }

  ngOnInit() {
  }

}
