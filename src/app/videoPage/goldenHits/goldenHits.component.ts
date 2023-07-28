import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeApiService } from 'src/app/services/youtube/youtube-api.service';

@Component({
  selector: 'app-goldenHits',
  templateUrl: './goldenHits.component.html',
  styleUrls: ['./goldenHits.component.css']
})
export class GoldenHitsComponent implements OnInit {

  recentVideos: any={}
  playLink: any='https://www.youtube.com/embed/E2A5YLSPliM';

  constructor(private youtubeApiService: YoutubeApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchRecentVideos();
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.playLink);
  }

  fetchRecentVideos() {
    this.youtubeApiService.getYtGoldenHitVideos(this.youtubeApiService.channelId, 5).subscribe(
      (response: any) => {
        console.log(response)
        this.recentVideos = response.items;
      },
      (error) => {
        console.error('Error fetching YouTube data:', error);
      }
    );
  }

  playVideo(videoId: string) {
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' +videoId + '?autoplay=1&mute=1' );
  }

}
