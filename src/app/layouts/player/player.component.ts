import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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

  activeItem: any;
  activeTrackID!:number

  isPlaying: boolean = false;
  isMuted: boolean = false;

  playMusicUrl!: string;

  constructor(private audioService: AudioService) {}
  ngOnInit() {
    this.fetchPreviewAudio();
  }

  ngAfterViewInit(): void {
    // Verify if audioPlayerRef is defined after view initialization
    if (this.audioPlayerRef) {
      const audioPlayer: HTMLAudioElement = this.audioPlayerRef.nativeElement;

      audioPlayer.onplay = () => {
        this.isPlaying = true;
      };

      audioPlayer.onpause = () => {
        this.isPlaying = false;
      };
    }
  }
  @ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;

  fetchPreviewAudio(): void {
    this.audioService.getPreviewData().subscribe({
      next: (res) => {
        this.audioList = res.data.tracks;
        console.log("äudiolist",this.audioList)
        this.getSpecificTrackDetails(this.audioList[0]);
      },
      error: (error) => {
        throw error;
      },
    });
  }

  getSpecificTrackDetails(trackDetail: any) {
    const audioPlayer: HTMLAudioElement | null = this.audioPlayerRef?.nativeElement;
    this.trackDetail = trackDetail;
    this.activeItem = trackDetail;
    this.getPreviewAudio(trackDetail.slug);
    console.log('slug', trackDetail)
    this.activeTrackID=this.trackDetail.id
    audioPlayer.currentTime=0;

  }

  getPreviewAudio(slug: string) {
    this.audioService.getPreviewAudio('track', slug).subscribe({
      next: (res:any) => {
        console.log("res",res)
        this.playMusicUrl=res.preview_url
        console.log('music url',this.playMusicUrl);
      },
      error: (error) => {
        console.log('error', error)
      }
    });
  }
  playAudio(): void {
    this.isPlaying = true;
    const audioPlayer = <HTMLAudioElement>document.getElementById('audioPlayer');
    audioPlayer.play();
  }

  pauseAudio(): void {
    this.isPlaying = false;
    const audioPlayer = <HTMLAudioElement>document.getElementById('audioPlayer');
    audioPlayer.pause();
  }

  togglePlayPause(): void {
    const audioPlayer: HTMLAudioElement | null = this.audioPlayerRef.nativeElement;

    if (audioPlayer) {
      if (this.isPlaying) {
        audioPlayer.pause();
      } else {
        audioPlayer.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }


  playNextTrack(): void {
    const audioPlayer: HTMLAudioElement | null = this.audioPlayerRef?.nativeElement;
    if(audioPlayer){
      audioPlayer.currentTime=0;
      const currentIndex = this.audioList.indexOf(this.activeItem);
      const nextIndex = (currentIndex + 1) % this.audioList.length;
      this.getSpecificTrackDetails(this.audioList[nextIndex]);

    }

  }

  playPreviousTrack(): void {
    const audioPlayer: HTMLAudioElement | null = this.audioPlayerRef?.nativeElement;
    if(audioPlayer){
      audioPlayer.currentTime=0;
      const currentIndex = this.audioList.indexOf(this.activeItem);
      const previousIndex =
        (currentIndex - 1 + this.audioList.length) % this.audioList.length;
      this.getSpecificTrackDetails(this.audioList[previousIndex]);
    }
  }

  // volume mute functionality


  toggleMute(): void {
    const audioPlayer: HTMLAudioElement | null = this.audioPlayerRef?.nativeElement;

    if (audioPlayer) {
      if (this.isMuted) {
        audioPlayer.volume = 1.0; // Set volume to maximum (unmute)
      } else {
        audioPlayer.volume = 0.0; // Set volume to minimum (mute)
      }

      this.isMuted = !this.isMuted; // Toggle mute state
    }
  }

}
