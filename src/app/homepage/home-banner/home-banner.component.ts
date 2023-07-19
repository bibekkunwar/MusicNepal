import { HomeServiceService } from './../services/home-service.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent  {
  constructor(private homeService: HomeServiceService){}

}
