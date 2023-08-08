import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, MOMO_URL } from 'src/app/apiUrl';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  audioUrl = 'https://mnm.truestreamz.com/api/v1/musicnepal/genres/albums';

  constructor(private http: HttpClient) {}
  getAudioData(): Observable<any> {
    return this.http.get<any>(this.audioUrl);
  }

  getPreviewData(): Observable<any> {
    return this.http.get<any>(
      `${MOMO_URL}/albums/mrigatrishna_UPC713339172637`
    );
  }

  getPreviewAudio(type: string, slug: string) {
    return this.http.get(
      `${MOMO_URL}/audios/preview?type=${type}&slug=${slug}`
    );
  }
}
