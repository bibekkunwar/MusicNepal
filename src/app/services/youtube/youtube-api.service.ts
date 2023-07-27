import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private readonly apiKey = 'AIzaSyCx2OglElRZRmY_AkmNOXnVCfQFiCKvhRg';
  readonly channelId = 'UC7WYScFxhgJeeL_sJkd8JYg'
  private readonly playlistId = 'PLfJBvoNea3pGxCQuzL8RFaodpf91Y2gMh'
  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'

  constructor(private http:HttpClient) {}

  getYtRecentVideos(channelId: string, maxResults:number = 5 ){
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('channelId', this.channelId)
    .set('playlistId', this.playlistId)
    .set('part', 'snippet')
    .set('order', 'date')
    .set('maxResults', String(maxResults))

    return this.http.get(this.apiUrl, {params})

  }

}
