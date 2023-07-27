import { HomeServiceService } from '../../services/homePage/home-service.service';
import { Component, OnInit } from '@angular/core';

interface BannerItem {
  id: number;
  title: string;
  slug: string;
  logo: string;
  background: string;
  playlist: boolean;
  count: number;
  created_date: string;
  is_purchase: string;
  is_premium: boolean;
  purchase_type: string;
  is_favourite: boolean;
  type: string;
}

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {
  bannerItems: BannerItem[] = [];

  constructor(private homeService: HomeServiceService) {}

  ngOnInit(): void {
    this.getBannerItems();
  }

  getBannerItems(): void {
    this.homeService.getHomeData().subscribe(
      (data: any) => {
        if (data.status && data.data && Array.isArray(data.data)) {
          const bannersSection = data.data.find((section: any) => section.name === 'Banners');
          if (bannersSection && bannersSection.items && Array.isArray(bannersSection.items)) {
            this.bannerItems = bannersSection.items;
          }
        }}
    );
  }

}
