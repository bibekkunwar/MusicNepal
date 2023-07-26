import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBannerComponent } from './homepage/home-banner/home-banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturedReleaseComponent } from './homepage/featured-release/featured-release.component';
import { LatestReleaseComponent } from './homepage/latestRelease/latestRelease.component';
import { LatestVideosComponent } from './homepage/latestVideos/latestVideos.component';
import { FeaturedArtistsComponent } from './homepage/featuredArtists/featuredArtists.component';
import { LatestNewsComponent } from './homepage/latestNews/latestNews.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';


import { HomeServiceService } from './homepage/services/home-service.service';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MnIntroComponent } from './homepage/mnIntro/mnIntro.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { YoutubeApiService } from './services/youtube-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    NavBarComponent,
    HomepageComponent,
    FeaturedReleaseComponent,
    LatestReleaseComponent,
    LatestVideosComponent,
    FeaturedArtistsComponent,
    LatestNewsComponent,
    FooterComponent,
    MnIntroComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HomeServiceService,
    YoutubeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
