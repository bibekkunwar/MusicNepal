import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

audioUrl = "https://mnm.truestreamz.com/api/v1/musicnepal/genres/albums";
// previewUrl = "https://nplb.truestreamz.com/mnm-audio/713339172637/NOAPC0610280-preview.mp3/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8yLzIwMjMgODoyMzoxNiBBTSZoYXNoX3ZhbHVlPTFsZUpuUG94djZqR2ptS1F2SjNTb3c9PSZ2YWxpZG1pbnV0ZXM9NTAwJmlkPTE=";
constructor(private http: HttpClient) {}

getAudioData():Observable<any> {
  return this.http.get<any>(this.audioUrl);
}

// getPreviewData():Observable<any> {
//   return this.http.get<any>(this.previewUrl)
// }
}
