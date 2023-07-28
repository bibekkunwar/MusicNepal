import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeApiService } from 'src/app/services/youtube/youtube-api.service';

@Component({
  selector: 'app-adhunikVideos',
  templateUrl: './adhunikVideos.component.html',
  styleUrls: ['./adhunikVideos.component.css']
})
export class AdhunikVideosComponent implements OnInit {

  recentVideos: any={}
  playLink: any='https://www.youtube.com/embed/taeE9_EQGwY';

  constructor(private youtubeApiService: YoutubeApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchRecentVideos();
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.playLink);
  }

  fetchRecentVideos() {
    this.youtubeApiService.getYtAdhunikVideos(this.youtubeApiService.channelId, 5).subscribe(
      (response: any) => {
        console.log("adhunik",response)
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
