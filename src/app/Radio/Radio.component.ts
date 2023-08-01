import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-Radio',
  templateUrl: './Radio.component.html',
  styleUrls: ['./Radio.component.css']
})
export class RadioComponent {

  @ViewChild('ref') ref!: ElementRef;
  isPlaying: boolean = false;

  togglePlayPause() {
    const audioElement: HTMLAudioElement = this.ref.nativeElement;

    if (this.isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    this.isPlaying = !this.isPlaying;
  }
}
