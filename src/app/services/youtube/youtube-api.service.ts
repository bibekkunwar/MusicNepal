import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private readonly apiKey = 'AIzaSyCx2OglElRZRmY_AkmNOXnVCfQFiCKvhRg';
  readonly channelId = 'UC7WYScFxhgJeeL_sJkd8JYg';
  readonly nepaliGeeetChannelId = 'UCM10Jut6dwQQKBQr8EsUBAg';
  private readonly playlistId = 'PLfJBvoNea3pGxCQuzL8RFaodpf91Y2gMh';
  private readonly apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
  private readonly goldenHitId = 'PLfJBvoNea3pFVDVSUrfuw0ApfvOyMF08b';
  private readonly popRockId = 'PLfJBvoNea3pFIIW09a1_pDTQHOff-2vh0';
  private readonly popSongsId = 'PL-Mf5W0I7c68qxoW7pazmF3AItKPAm4Q2'; // this playlist id is from mepaligeetchannelId not from musicnepal
  private readonly adhunikId = 'PLfJBvoNea3pFMYIubgXfJ4JvJqk7iRT1x';
  private readonly adhunikSongsId = 'PL-Mf5W0I7c6_AUpCJYqP717zO5hi4NDnn';
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

  getYtGoldenHitVideos(channelId:string, maxResults: number = 5) {
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('channelId', this.channelId)
    .set('playlistId', this.goldenHitId)
    .set('part', 'snippet')
    .set('order', 'date')
    .set('maxResults', String(maxResults))
    return this.http.get(this.apiUrl, { params })
  }


  getYtPopRockVideos(channelId: string, maxResults: number =5){
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('channelId', this.channelId)
    .set('playlistId', this.popRockId)
    .set('part', 'snippet')
    .set('order', 'date')
    .set('maxResults', String(maxResults))
    return this.http.get(this.apiUrl, {params})
  }


  getYtPopSongsVideos(nepaliGeeetChannelId: string, maxResults: number =5){
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('channelId', this.nepaliGeeetChannelId)
    .set('playlistId', this.popSongsId)
    .set('part', 'snippet')
    .set('order', 'date')
    .set('maxResults', String(maxResults))
    return this.http.get(this.apiUrl, {params})
  }

  getYtAdhunikVideos(channelId: string, maxResults: number =5){
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('channelId', this.channelId)
    .set('playlistId', this.adhunikId)
    .set('part', 'snippet')
    .set('order', 'date')
    .set('maxResults', String(maxResults))
    return this.http.get(this.apiUrl, {params})
  }

  getYtAdhunikSongVideos(nepaliGeeetChannelId:string,maxResults:number = 5){
    const params = new HttpParams()
    .set('key', this.apiKey)
    .set('channelId', this.nepaliGeeetChannelId)
    .set('playlistId', this.adhunikSongsId)
    .set('part', 'snippet')
    .set('order', 'date')
    .set('maxResults', String(maxResults))
    return this.http.get(this.apiUrl, {params})
  }

}
