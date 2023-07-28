import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeApiService } from 'src/app/services/youtube/youtube-api.service';

@Component({
  selector: 'app-popRock-videos',
  templateUrl: './popRock-videos.component.html',
  styleUrls: ['./popRock-videos.component.css']
})
export class PopRockVideosComponent implements OnInit {

  recentVideos: any={}
  playLink: any='https://www.youtube.com/embed/LxgxrOxAGIA';

  constructor(private youtubeApiService: YoutubeApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchRecentVideos();
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.playLink);
  }

  fetchRecentVideos() {
    this.youtubeApiService.getYtPopRockVideos(this.youtubeApiService.channelId, 5).subscribe(
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
