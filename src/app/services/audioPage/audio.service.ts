import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

audioUrl = "https://mnm.truestreamz.com/api/v1/musicnepal/genres/albums";

previewUrl = "https://app.momoappnepal.com/api/v1/musicnepal/albums/mrigatrishna_UPC713339172637";

AudioPreviewUrl = 'https://app.momoappnepal.com/api/v1/musicnepal/audios/preview?type=track&slug='; // url for short play of audio

constructor(private http: HttpClient) {}

getAudioData():Observable<any> {
  return this.http.get<any>(this.audioUrl);
}



getPreviewData():Observable<any> {
  return this.http.get<any>(this.previewUrl)
}

getPreviewAudio() {
return this.http.get(this.AudioPreviewUrl)
}
}
