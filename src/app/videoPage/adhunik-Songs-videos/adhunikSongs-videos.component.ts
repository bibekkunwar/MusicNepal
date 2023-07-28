import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeApiService } from 'src/app/services/youtube/youtube-api.service';

@Component({
  selector: 'app-adhunikSongs-videos',
  templateUrl: './adhunikSongs-videos.component.html',
  styleUrls: ['./adhunikSongs-videos.component.css']
})
export class AdhunikSongsVideosComponent implements OnInit {

  recentVideos: any={}
  playLink: any='https://www.youtube.com/embed/bCqlEbSFzhY';

  constructor(private youtubeApiService: YoutubeApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.fetchRecentVideos();
    this.playLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.playLink);
  }

  fetchRecentVideos() {
    this.youtubeApiService.getYtAdhunikSongVideos(this.youtubeApiService.nepaliGeeetChannelId, 5).subscribe(
      (response: any) => {
        console.log("adhunik songs",response)
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
