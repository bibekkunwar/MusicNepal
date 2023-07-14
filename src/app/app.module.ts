import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeBannerComponent } from './homepage/home-banner/home-banner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeaturedReleaseComponent } from './homepage/featured-release/featured-release.component';
import { LatestVideosComponent } from './homepage/latestVideos/latestVideos.component';
import { FeaturedArtistsComponent } from './homepage/featuredArtists/featuredArtists.component';
import { LatestNewsComponent } from './homepage/latestNews/latestNews.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeBannerComponent,
    NavBarComponent,
    HomepageComponent,
    FeaturedReleaseComponent,
    LatestVideosComponent,
    FeaturedArtistsComponent,
    LatestNewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
