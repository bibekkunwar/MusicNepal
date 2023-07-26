import { Component, OnInit } from '@angular/core';
import { YoutubeApiService } from 'src/app/services/youtube-api.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-latestVideos',
  templateUrl: './latestVideos.component.html',
  styleUrls: ['./latestVideos.component.css']
})
export class LatestVideosComponent implements OnInit{

  recentVideos: any={}
  playLink: any='https://www.youtube.com/embed/5GwJXq3Jva4';

  constructor(private youtubeApiService: YoutubeApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchRecentVideos();
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.playLink);
  }

  fetchRecentVideos() {
    this.youtubeApiService.getYtRecentVideos(this.youtubeApiService.channelId, 5).subscribe(
      (response: any) => {
        this.recentVideos = response.items;
      },
      (error) => {
        console.error('Error fetching YouTube data:', error);
      }
    );
  }

  playVideo(videoId: string) {
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' +videoId);
    console.log(this.playLink)
  }

}
