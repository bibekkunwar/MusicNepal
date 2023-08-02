import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AudioService } from 'src/app/services/audioPage/audio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  audioList: any = [];
  trackDetail: any;
  playLink: any = 'https://app.momoappnepal.com/api/v1/musicnepal/albums/duniyako-nimti-eauta_NOAPC0610271';
activeItem:any;
previewAudio = "https://app.momoappnepal.com/api/v1/musicnepal/audios/preview?type=track&slug=duniyako-nimti-eauta_NOAPC0610271";
uniqueSlug: any;
isPlaying: boolean = false;
  constructor(
    private audioService: AudioService,
  ) {}
  ngOnInit() {
    this.fetchPreviewAudio();

  }

  fetchPreviewAudio(): void {
    this.audioService.getPreviewData().subscribe({
      next: (res) => {
        this.audioList = res.data.tracks;
        this.getSpecificTrackDetails(this.audioList[0])
      },
      error: (error) => {
        throw error;
      },
    });
  }

  getSpecificTrackDetails(trackDetail: any) {
    this.trackDetail = trackDetail;
    this.activeItem = trackDetail;
  }

  getaudiotracks(trackDetail:string){
    this.uniqueSlug = this.trackDetail;
  }

  playNextTrack(): void {
    const currentIndex = this.audioList.indexOf(this.activeItem);
    const nextIndex = (currentIndex + 1) % this.audioList.length;
    this.getSpecificTrackDetails(this.audioList[nextIndex]);
  }

  playPreviousTrack(): void {
    const currentIndex = this.audioList.indexOf(this.activeItem);
    const previousIndex = (currentIndex - 1 + this.audioList.length) % this.audioList.length;
    this.getSpecificTrackDetails(this.audioList[previousIndex]);
  }

  playAudio(): void {
    // Your audio play logic
    this.isPlaying = true; // Update the state to playing
  }

  pauseAudio(): void {
    // Your audio pause logic
    this.isPlaying = false; // Update the state to paused
  }



}
