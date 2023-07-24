import { HomeServiceService } from './../services/home-service.service';
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
    this.homeService.bannerImage().subscribe(
      (data: any) => {
        console.log('API Response:', data);
        if (data.status && data.data && Array.isArray(data.data)) {
          const bannersSection = data.data.find((section: any) => section.name === 'Banners');
          if (bannersSection && bannersSection.items && Array.isArray(bannersSection.items)) {
            this.bannerItems = bannersSection.items.map((item: any) => ({
              background: item.background,
            }));
            console.log('Mapped Banner Items:', this.bannerItems);
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
