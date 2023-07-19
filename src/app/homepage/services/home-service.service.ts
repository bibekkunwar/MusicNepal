import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  homeUrl = "https://mnm.truestreamz.com/api/v1/musicnepal/home";


  bannerImage():Observable<any> {
    return this.http.get(this.homeUrl);
  }

}
