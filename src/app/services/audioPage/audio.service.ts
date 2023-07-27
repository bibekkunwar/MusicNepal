import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

audioUrl = "https://mnm.truestreamz.com/api/v1/musicnepal/genres/albums";

constructor(private http: HttpClient) {}

getAudioData():Observable<any> {
  return this.http.get<any>(this.audioUrl);
}
}
